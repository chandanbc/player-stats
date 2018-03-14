import React from 'react';

import {Nav,NavItem,NavDropdown,MenuItem,Navbar,Grid,Row,Col,Image} from 'react-bootstrap';

import userlogo from '../assets/img/user-icon.png'
const Header = () => 
<Navbar inverse collapseOnSelect>
<Navbar.Header>
  <Navbar.Brand>
    <a href="#brand">Player Info</a>
  </Navbar.Brand>
  <Navbar.Toggle />
</Navbar.Header>
<Navbar.Collapse>
  <Nav pullRight>
    <NavItem eventKey={1} href="#">
      Login
    </NavItem>
   

    <NavDropdown eventKey={3} title={ 
          
          <Row>
    <Col xs={3}>
    <Image src="http://p.imgci.com/db/PICTURES/CMS/222900/222915.jpg" responsive thumbnail />
    
   <span> Chandan</span>

    </Col>
    </Row>
} id="basic-nav-dropdown">
      <MenuItem eventKey={3.1}>Profile</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.2}>Logout</MenuItem>
    </NavDropdown>
  </Nav>
</Navbar.Collapse>
</Navbar>;
;


export default Header;