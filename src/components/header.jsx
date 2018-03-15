import React from 'react';
import {connect} from 'react-redux';
import {Nav,NavItem,NavDropdown,MenuItem,Navbar,Grid,Row,Col,Image} from 'react-bootstrap';
import {logout,showModal} from '../actions';

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
    
    <NavDropdown eventKey={3} title={ 
          
      <div className="pull-left">
        <Image className="profile-img pull-left " src="http://p.imgci.com/db/PICTURES/CMS/222900/222915.jpg" responsive circle />
        <span className="pull-left align-text"> {userData.username}</span>
      </div>
      } id="basic-nav-dropdown" onSelect={handleOnSelect}>
      <MenuItem eventKey="1">Profile</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey="2">Logout</MenuItem>
    </NavDropdown>}
  </Nav>
</Navbar.Collapse>
</Navbar>;
;

const mapDispatchToProps=(dispatch)=>{
  return{
    handleOnSelect:(evt)=>{evt=="1"?dispatch(showModal()):
    dispatch(logout())
  }
  }
}

export default connect(null,mapDispatchToProps)(Header);