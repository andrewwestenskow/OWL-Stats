import React, {Component} from 'react'
import axios from 'axios'
import ProStats from './ProStats'
import IndividualStats from './IndividualStats'


class DisplayStats extends Component {

  state = {
    proStats: [],
    individualStats: []
  }

  componentDidMount(){

    //Gets both pro and individual stats at component mount
    axios.get('/api/prostats').then(res => {
      this.setState({
        proStats: res.data
      })
    }).catch(err =>{
      console.log(`Error: ${err}`)
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
    console.log(player)
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

  render(){
    return(
      <div>
        <IndividualStats handleDelete={this.handleDelete}
        addNew={this.addNew} 
        stats={this.state.individualStats}/>
        <ProStats stats={this.state.proStats}/>
      </div>
    )
  }
}

export default DisplayStats