import React, {Component} from 'react'


class TopSection extends Component {


  render(){


    const numBorder = {
      border: `5px solid #${this.props.team.secondaryColor}`,
    }


    return(
      <div className="TopSection">
        <div className="PlayerInfo">
          <div className="NameNumber">
            <span className='PlayerInfoName'>{this.props.player.name}    |</span>
            <div className="NumBorder" style={numBorder}></div>
            {/* <h2></h2> */}
          </div>
          <div className="NameCountry">
            <span className='RealName'>{this.props.player.givenName} {this.props.player.familyName}</span>
            <br/>
            <span className='RealName'>{this.props.player.homeLocation}, {this.props.player.nationality}</span>
          </div>
        </div>
        <div className="LogoDiv">
          <img className='Logo' src={this.props.team.logo} alt={this.props.team.name}/>
        </div>
      </div>

    )
  }
}

export default TopSection