import React, { Component } from 'react';
import './App.css';
import DisplayStats from './Components/Display/DisplayStats'
import Header from './Components/Compare/Header'
import Compare from './Components/Compare/Compare'
import axios from 'axios'

class App extends Component {

  state={
    player1: '',
    player2: '',
    showCompare: false,
    proStats: [],
    individualStats: [],
    playerIds: []
  }

  componentDidMount(){

    //Gets both pro and individual stats at component mount also fetches playerIds
    axios.get('https://api.overwatchleague.com/stats/players?season_id=2019').then(res => {
      let stats = res.data.data
      let playerIds = stats.map(player => {
        return {
          name: player.name,
          id: player.playerId
        }
      })
      this.setState({
        proStats: stats,
        playerIds: playerIds
      })
    })
    .catch(err => {
      console.log(err)
    })

    axios.get('/api/individualstats').then(res => {
      this.setState({
        individualStats: res.data
      })
    }).catch(err =>{
      console.log(`Error: ${err}`)
    })

    

  }

  //Handles request to add new player

  addNew = (player) => {
    axios.post('/api/individualstats', player).then(res =>{
      this.setState({
        individualStats: res.data
      })
    }).catch(err =>{
      console.log(`Error: ${err}`)
    })
  }

  //Handles request to delete player

  handleDelete = (id) => {
    axios.delete(`/api/individualstats/${id}`).then(res =>{
      this.setState({
        individualStats: res.data
      })
    }).catch(err =>{
      console.log(`Error: ${err}`)
    })
  }

  // Handles put request 

  handleUpdate = (player) => {
    let {id} = player
    console.log(id)
    axios.put(`/api/individualstats/${id}`, player).then(res =>{
      this.setState({
        individualStats: res.data
      })
    }).catch(err =>{
      console.log(`Error: ${err}`)
    })
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

    // Converts player name to id

    let player2 = this.state.playerIds.filter(player =>{
      let id
      if(player.name === this.state.player2) {
        id = player.id
      }
      return id
    })

    return (
      <div className="App">
        <Header handleChange={this.handleChange}
        handleCompare={this.handleCompare}
        individualStats={this.state.individualStats}
        proStats={this.state.proStats}
        player2={this.state.player2}/>


        <div className='MainHold'>
          {this.state.showCompare ? <Compare player1={this.state.player1} player2={player2[0].id} showCompare={this.handleCompare}/> : 
          <DisplayStats 
          handleDelete={this.handleDelete}
          addNew={this.addNew}
          individualStats={this.state.individualStats}
          handleUpdate={this.handleUpdate}
          proStats={this.state.proStats}/>}
        </div>
      </div>
    );
  }
}

export default App;
