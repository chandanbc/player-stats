import React from 'react';
import { connect } from 'react-redux';
import {Login,UpdateUserName,UpdatePassword} from '../actions';


const LoginContainer = ({ userName, password,updateUserName,updatePassword,login }) => 
 <div>
    <form
      id="frmLogin"
      onSubmit={(e) => {
        e.preventDefault();
        return login(userName, password);
      }}
    >
      
      User Name: <input
        type="text"
        onChange={e => updateUserName(e.target.value)}
        value={userName}
        id="txtUserName"
      />
      Password: <input
        type="password"
        onChange={e => updatePassword(e.target.value)}
        value={password}
        id="txtPassword"
      />
      <button type="submit" id="btnSubmit">Login</button>
    </form>
  </div>

const mapStateToProps = state => ({
  userName: state.players.login.username,
  password: state.players.login.password,
});



const mapDispatchToProps=(dispatch)=>{
    return{
        login: (userName, password) => dispatch(Login(userName, password)),
        updateUserName: userName => dispatch(UpdateUserName(userName)),
        updatePassword: password => dispatch(UpdatePassword(password)),
    }
    };
  

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);