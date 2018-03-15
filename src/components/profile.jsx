import React from 'react';
import {Grid,Row,Col} from 'react-bootstrap';



const Profile=({userInfo})=> 

<Grid className='container-fluid'>
<Row className="show-grid">
    
        <Col xs={12} md={4}>
           <label>UserName</label>:sajajj
        </Col> 
    
    <Col xs={6} md={8}>
    <label>Email</label>:ajsjajsa
    
    </Col>
</Row>
<Row className="show-grid">
    
        <Col xs={12} md={4}>
           <label>Designation</label>:sajajj
        </Col> 
    
    <Col xs={6} md={8}>
    <label>Designation</label>:ajsjajsa
    
    </Col>
</Row>
</Grid>



 export default Profile;
