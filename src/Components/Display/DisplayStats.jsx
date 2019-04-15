import React, {Component} from 'react'
import ProStats from './ProStats'
import IndividualStats from './IndividualStats'
import PlayerDetails from './../PlayerDetails/PlayerDetails'


class DisplayStats extends Component {

  state = {
    showPlayer: false,
    playerId: ''
  }

  showDetailed = (player) => {
    this.setState({
      playerId: player,
      showPlayer: true
    })
  }

  showFalse = () => {
    this.setState({
      showPlayer: false
    })
  }



  render(){
    return(
      <div>
        <IndividualStats handleDelete={this.props.handleDelete}
        addNew={this.props.addNew} 
        stats={this.props.individualStats}
        handleUpdate={this.props.handleUpdate}/>

        {this.state.showPlayer ? <PlayerDetails showFalse={this.showFalse} playerToShow={this.state.playerId}/> :  <ProStats showDetailed={this.showDetailed} stats={this.props.proStats}/> }

      </div>
    )
  }
}

export default DisplayStats