import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from './components/header';
import Container from './components/container';
import Footer from './components/footer';
import Modal from './components/modal';
import Login from './components/login';
import Profile from './components/profile';
import {closeModal} from '../src/actions';

 import './App.css';
import container from './components/container';

const App=({close,showModal,userInfo,isUserLoggedIn})=> 
      <div className="App">
        <Header userData={userInfo}/>
        <div className="app-body">
          { isUserLoggedIn ? <Container />:
          
           <Modal title="Login" modalVisible={showModal} close={close}>
          <Login/>
          
          </Modal> }

          { (isUserLoggedIn && Object.keys(userInfo).length>0) && 
          
            <Modal title="Profile Details" modalVisible={ (showModal && Object.keys(userInfo).length>0)} close={close}>
         <Profile userInfo={userInfo}/>
         
         </Modal> }

        </div>
        <Footer />
      </div>

const mapStateToProps=(state)=>{
  return {
    showModal : state.players.showModal,
    userInfo:state.players.userInfo,
    isUserLoggedIn:state.players.isLoggedIn
}
}      

const mapDispatchToProps=(dispatch)=>{
  return{
    close:()=>{
    dispatch(closeModal())
  }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
