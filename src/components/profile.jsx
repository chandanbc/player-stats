import React from 'react';
import {Grid,Row,Col} from 'react-bootstrap';



const Profile=({userInfo})=> 

<Grid className='container-fluid'>
<Row className="show-grid">
    
        <Col md={6} >
           <label>UserName</label>:{userInfo.fullname}
        </Col> 
       
        <Col md={6} >
            <label>Email</label>:ajsjajsa
        </Col>
</Row>
<Row className="show-grid">
    
        <Col md={6}>
           <label>Designation</label>:{userInfo.designation}
        </Col> 
    
    <Col md={6}>
    <label>Country</label>:{userInfo.country}
    
    </Col>
</Row>
</Grid>



 export default Profile;
