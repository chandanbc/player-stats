import React from 'react';
import {connect} from 'react-redux';
import {Grid, Row, Col, Panel, Image} from 'react-bootstrap';
import {getPlayerInfo ,getPlayerStats} from '../actions';
import PlayerInfo from './playerInfo';
import PlayerStats from './scoreBoard';


class Container extends React.Component{ 
componentDidMount(){
    this.props.dispatch(getPlayerInfo());
    this.props.dispatch(getPlayerStats());
}
render(){
    debugger;
    const playerDetails =this.props.players.playerInfo; 
    const getYear=(date)=>new Date(date).getFullYear();
    this.props.players.playerStats.map(item=>item.year=getYear(item["match/startdate"]))
    const playerStats = this.props.players.playerStats;   

    

    return( 
            <Grid className='container-fluid'>
                <Row className="show-grid">
                    {(Object.keys(playerDetails).length > 0) &&
                        <Col xs={12} md={4}>
                           <PlayerInfo playerDetails={playerDetails} />
                        </Col> 
                    }
                    <Col xs={6} md={8}>
                    {playerStats.length>0 &&
                    <PlayerStats data={playerStats} />
                    }
                    </Col>
                </Row>
            </Grid>)
    }
}

    const mapStateToProps = (state) => {
        return {
            players : state.players
        }
    }

export default connect(mapStateToProps)(Container);