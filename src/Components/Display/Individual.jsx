import React, {Component} from 'react'

class Individual extends Component {


  handleDelete = () => {
    let {id} = this.props.stats
    this.props.handleDelete(id)
  }

  render(){

    let {name, eliminations_avg_per_10m, hero_damage_avg_per_10m, healing_avg_per_10m, deaths_avg_per_10m} = this.props.stats

    return(
      
      <tbody key={name}>

      <tr>
        <td>{name}</td>
        <td>{(eliminations_avg_per_10m).toLocaleString('en-US', {maximumFractionDigits: 2})}</td>
        <td>{(hero_damage_avg_per_10m).toLocaleString('en-US', {maximumFractionDigits: 2})}</td>
        <td>{(healing_avg_per_10m).toLocaleString('en-US', {maximumFractionDigits: 2})}</td>
        <td>{(deaths_avg_per_10m).toLocaleString('en-US', {maximumFractionDigits: 2})}</td>
        <td><button onClick={this.editing}>Edit</button></td>
        <td><button onClick={this.handleDelete}>Delete</button></td>
      </tr>
    </tbody>
      
    )
  }
}

export default Individual