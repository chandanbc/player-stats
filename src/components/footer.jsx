import React from 'react';
import { Row, Col } from 'react-bootstrap';
import {connect} from 'react-redux';

import { getAddress } from '../actions';


class Footer extends React.Component{ 
    componentDidMount(){
        this.props.dispatch(getAddress());
        
    }
    render(){
        const addressInfo = this.props.players.address;
       return( 

<footer className="app-footer text-center">
<Row className="show-grid">
    <Col xs={12} md={6}>
    { (Object.keys(addressInfo).length>0) &&
    <address>
        <strong>{addressInfo.companyname}</strong><br />
        {addressInfo.address1}<br />
        {addressInfo.address2}<br />
        <abbr title="Phone"></abbr> {addressInfo.phone}
    </address>
    }
    </Col> 
<Col xs={12} md={6}>
<a href="#" className="fa fa-facebook"></a>
<a href="#" className="fa fa-twitter"></a>
<a href="#" className="fa fa-google"></a>
<a href="#" className="fa fa-linkedin"></a>
}
</Col>
    
</Row>

</footer>)
    }
}

const mapStateToProps = (state) => {
    return {
        players : state.players
    }
}
export default connect(mapStateToProps)(Footer);