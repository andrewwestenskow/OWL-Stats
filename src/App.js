import React, { Component } from 'react';
import './App.css';
import DisplayStats from './Components/Display/DisplayStats'

class App extends Component {
  render() {
    return (
      <div className="App">
        <DisplayStats/>
      </div>
    );
  }
}

export default App;
