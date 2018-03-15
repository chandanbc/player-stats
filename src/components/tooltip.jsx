import React from 'react';
import { Tooltip } from 'react-bootstrap';


const getFormattedDate=(dob)=>{
    let d= new Date(dob);
    return `${d.getFullYear()} , ${d.toLocaleString('en-us', { month: "long" }) } , ${ d.getDate()}`;
 }


const TooltipContainer = ({payload,active}) =>{
    debugger;
    return(
        <div>
        {active &&
          
              
          <div className="custom-tooltip">
          <p className="label">{`${payload[0].payload["batsman/runs"]}`} ({(`${payload[0].payload["batsman/ballsfaced"]}`)})</p>
          <p className="intro">{`V ${payload[0].payload["opposition/short_name"]}` }</p>
          <p className="intro">{`${payload[0].payload["ground/small_name"]}` }</p>
          <p className="intro">{`${payload[0].payload["series/name"]}` }</p>
          <p className="desc">{getFormattedDate(payload[0].payload["match/startdate"]) }</p>
        </div>
          }
        </div>);
}


export default TooltipContainer;