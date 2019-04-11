import React, { Component } from 'react';
import './App.css';
import DisplayStats from './Components/Display/DisplayStats'
import Header from './Components/Compare/Header'

class App extends Component {

  state={
    player1: '',
    player2: '',
    showCompare: false
  }

  handleChange = (e) => {
    let {value, name} = e.target
    this.setState({
      [name]: value
    })
  }

  handleCompare = () => {
    this.setState({
      showCompare: true
    })
  }


  render() {
    return (
      <div className="App">
        <Header handleChange={this.handleChange}/>


        <div className='MainHold'>
          <DisplayStats />
        </div>
      </div>
    );
  }
}

export default App;
