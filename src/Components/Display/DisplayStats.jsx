import React, {Component} from 'react'
import ProStats from './ProStats'
import IndividualStats from './IndividualStats'


class DisplayStats extends Component {


  render(){
    return(
      <div>
        <IndividualStats handleDelete={this.props.handleDelete}
        addNew={this.props.addNew} 
        stats={this.props.individualStats}
        handleUpdate={this.props.handleUpdate}/>
        <ProStats stats={this.props.proStats}/>
      </div>
    )
  }
}

export default DisplayStats