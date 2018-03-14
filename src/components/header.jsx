import React from 'react';
import {connect} from 'react-redux';
import {Nav,NavItem,NavDropdown,MenuItem,Navbar,Grid,Row,Col,Image} from 'react-bootstrap';
import {logout} from '../actions';

import userlogo from '../assets/img/user-icon.png';

const handleOnSelect=(evt)=> console.log(evt);
const Header = ({userData,handleOnSelect}) => 
<Navbar inverse collapseOnSelect>
<Navbar.Header>
  <Navbar.Brand>
    <a href="#brand">Player Info</a>
  </Navbar.Brand>
  <Navbar.Toggle />
</Navbar.Header>
<Navbar.Collapse>
  <Nav pullRight>
  {Object.keys(userData).length>0 &&
    // <NavItem eventKey={1} href="#">
    //   Login
    // </NavItem>
   

    <NavDropdown eventKey={3} title={ 
          
          <Row>
    <Col xs={3}>
    <Image src="http://p.imgci.com/db/PICTURES/CMS/222900/222915.jpg" responsive thumbnail />
    
   <span> {userData.username}</span>

    </Col>
    </Row>
} id="basic-nav-dropdown" onSelect={handleOnSelect}>
      <MenuItem eventKey="profile">Profile</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey="logout">Logout</MenuItem>
    </NavDropdown>}
  </Nav>
</Navbar.Collapse>
</Navbar>;
;

const mapDispatchToProps=(dispatch)=>{
  return{
    handleOnSelect:()=>{
    dispatch(logout())
  }
  }
}

export default connect(null,mapDispatchToProps)(Header);