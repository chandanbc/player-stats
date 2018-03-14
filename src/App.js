import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from './components/header';
import Container from './components/container';
import Footer from './components/footer';
import Modal from './components/modal';
import Login from './components/login';
import {closeModal} from '../src/actions';

 import './App.css';
import container from './components/container';

const App=({close,showModal,userInfo,isUserLoggedIn})=> 
      <div className="App">
        <Header userData={userInfo}/>
        <div>
          { isUserLoggedIn ? <Container />:
          
           <Modal title="title" modalVisible={showModal} close={close}>
          <Login/>
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
