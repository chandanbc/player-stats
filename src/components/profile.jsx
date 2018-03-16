import React from 'react';
import {Grid,Row,Col} from 'react-bootstrap';



const Profile=({userInfo})=> 

<Grid>
<Row className="show-grid">
    
        <Col md={3} >
           <label>UserName</label>:{userInfo.fullname}
        </Col> 
       
        <Col md={3} >
            <label>Email</label>:{userInfo.email}
        </Col>
</Row>
<Row className="show-grid">
    
        <Col md={3}>
           <label>Designation</label>:{userInfo.designation}
        </Col> 
    
    <Col md={3}>
    <label>Country</label>:{userInfo.country}
    
    </Col>
</Row>
</Grid>



 export default Profile;
