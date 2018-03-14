import React from 'react';
import { Panel} from 'react-bootstrap';
import Statistics from './statistics';

const ScoreBoard = ({data}) => 
     <Panel>
                            <Panel.Heading>
                                <Panel.Title componentClass="h3">Player Stats</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>
                                <Statistics data={data} />
                            </Panel.Body>
                         </Panel>
;


export default ScoreBoard;