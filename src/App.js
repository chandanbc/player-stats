import React, { Component } from 'react';
import Header from './components/header';
import Container from './components/container';
import Footer from './components/footer';

 import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <Container />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
