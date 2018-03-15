import React from 'react';
import {Panel, Image} from 'react-bootstrap';


const getFormattedDate=(dob)=>{
   let d= new Date(dob);
   return `${d.getFullYear()} , ${d.toLocaleString('en-us', { month: "long" }) } , ${ d.getDate()}`;
}

 const PlayerInfo = ({playerDetails}) => 
     <Panel>
 <Panel.Heading>
     <Panel.Title componentClass="h3">Player Information </Panel.Title>
 </Panel.Heading>
 <Panel.Body>
     <div className="pull-left">
     <p> <b>Full name :</b> <span> {playerDetails['player/name']}</span></p>
     <p> <b>Full name :</b> <span> {playerDetails['player/known-as']}</span></p>
     <p> <b>Batting Styles :</b> <span> {playerDetails['player/batting-styles']}</span></p>
     <p> <b>Bowling Styles :</b> <span> {playerDetails['player/bowling-styles']}</span></p>
     <p> <b>DOB :</b> <span> {getFormattedDate(playerDetails['player/dob'])}</span></p>
     <p> <b>Player Retired  :</b> <span> {playerDetails['player/retired?'] == 'N'? `No`: `YES`}</span></p>
     <p> <b>Played For :</b> <span> {playerDetails['player/pob']}</span></p>                                
     <p> <b>Played For :</b> 
         <span> {playerDetails['player/teams'].map(i=> `${i}`)}</span></p>                                
     <p> <b>Country :</b> <span> {playerDetails['player/country']}</span></p>
     <p></p>
    </div>
    <div className="pull-right">
     <Image src={`http://p.imgci.com/${playerDetails['player/portait']}`} thumbnail/>
     </div>
 </Panel.Body>
</Panel>

 export default PlayerInfo;