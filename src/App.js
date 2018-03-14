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

const App=({close,showModal})=> 
      <div className="App">
        <Header />
        <div>
          <Container/>
          {/* <Modal title="title" modalVisible={showModal} close={close}>
          <Header />
          </Modal> */}
{/* <Login/> */}
        </div>
        <Footer />
      </div>

const mapStateToProps=(state)=>{
  return {
    showModal : state.players.showModal
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
