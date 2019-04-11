import React, { Component } from 'react'
import AddNew from './AddNew'
import Individual from './Individual'

class IndividualStats extends Component {

  state = {
    player: '',
    addNew: false
  }

  whoToDisplay = (player) => {
    this.setState({
      player: player
    })
  }

  editing = () => {
    this.setState({
      edit: true
    })
  }

  addNewForm = () => {
    this.setState({
      addNew: !this.state.addNew
    })
  }

  addNew = (player) => {
    this.props.addNew(player)
  }

  handleDelete = (id) => {
    this.props.handleDelete(id)
  }

  handleUpdate = (player) => {
    this.props.handleUpdate(player)
  }

  render() {

    //Fetches all players on record

    let getOptions = this.props.stats.map(player => {
      return <option value={player.name} key={player.id}>{player.name}</option>
    })

    //Shows only the selected player

    let whoToShow = this.props.stats.filter(player => {
      if (!this.state.player){
        return player
      } else {
        return this.state.player === player.name
      }
      
      
    })

    //Returns a table of players

    let showStats = whoToShow.map(player => {
      return <Individual 
      handleDelete={this.handleDelete} 
      id={player.id} 
      stats={player} 
      key={player.name}
      handleUpdate={this.handleUpdate}/>
    })

    return (
      <div>
        <h1>Player Stats</h1>

        {/* Used to select who is shown  */}
        <select name="" id="" onChange={e => this.whoToDisplay(e.target.value)}>
          <option value="">All Players</option>
          {getOptions}
        </select>
        <button onClick={this.addNewForm}>Add New Player</button>

        {/* Determines if the new form is shown  */}

        {this.state.addNew ? <AddNew addNew={this.addNew}/> : null}

        <div className="Stats">
        <table>
            <thead>
            <tr>
              <td>Name</td>
              <td>Eliminations per 10m</td>
              <td>Hero Damage per 10m</td>
              <td>Healing per 10m</td>
              <td>Deaths per 10m</td>
            </tr>
            </thead>
            {showStats}
          </table>
        </div>
      </div>
    )
  }
}

export default IndividualStats