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

  render(){
    return(
      <div>
        <IndividualStats stats={this.state.individualStats}/>
        <ProStats stats={this.state.proStats}/>
      </div>
    )
  }
}

export default DisplayStats