import React, { Component } from 'react';
import './App.css';
import DisplayStats from './Components/Display/DisplayStats'
import Header from './Components/Compare/Header'
import Compare from './Components/Compare/Compare'

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
      showCompare: !this.state.showCompare
    })
  }


  render() {
    return (
      <div className="App">
        <Header handleChange={this.handleChange}
        handleCompare={this.handleCompare}/>


        <div className='MainHold'>
          {this.state.showCompare ? <Compare player1={this.state.player1} player2={this.state.player2} showCompare={this.handleCompare}/> : <DisplayStats />}
        </div>
      </div>
    );
  }
}

export default App;
