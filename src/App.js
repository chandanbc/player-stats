import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from './components/header';
import Container from './components/container';
import Footer from './components/footer';
import Modal from './components/modal';
import {closeModal} from '../src/actions';

 import './App.css';

const App=({close,showModal})=> 
      <div className="App">
        <Header />
        <div>
          <Modal title="title" modalVisible={showModal} close={close}>
          <Header />
          </Modal>
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
