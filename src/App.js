import React, { Component } from 'react';
import './App.css';
import DisplayStats from './Components/Display/DisplayStats'
import Header from './Components/Compare/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className='MainHold'>
        <DisplayStats/>
        </div>
      </div>
    );
  }
}

export default App;
