import React, { Component } from 'react'

class ShowCompare extends Component {


  calcChange = (num1, num2) => {
    return `${(((num1 - num2) / num1) * 100).toFixed(2)}%`
  }

  render() {
    let {player1, player2} = this.props
    let elimText
    let damageText
    let healingText
    let deathText
    
    if(Number(player1.eliminations_avg_per_10m) > Number(player2.eliminations_avg_per_10m)){
      elimText = 'GreenText'
    } else {
      elimText = 'RedText'
    }

    if(Number(player1.hero_damage_avg_per_10m) > Number(player2.hero_damage_avg_per_10m)){
      damageText = 'GreenText'
    } else {
      damageText = 'RedText'
    }

    if(Number(player1.healing_avg_per_10m) > Number(player2.healing_avg_per_10m)){
      healingText = 'GreenText'
    } else {
      healingText = 'RedText'
    }

    if(Number(player1.deaths_avg_per_10m) > Number(player2.deaths_avg_per_10m)){
      deathText = 'RedText'
    } else {
      deathText = 'GreenText'
    }


    return (
      <div>
        <table className='CompareTable'>
          <tbody>
            <tr>
              <td>COMPARE</td>
            </tr>
            <tr>
              <td className={elimText}>{this.calcChange(Number(player1.eliminations_avg_per_10m), Number(player2.eliminations_avg_per_10m))}</td>
            </tr>
            <tr>
              <td className={damageText}>{this.calcChange(Number(player1.hero_damage_avg_per_10m), Number(player2.hero_damage_avg_per_10m))}</td>
            </tr>
            <tr>
              <td className={healingText}>{this.calcChange(Number(player1.healing_avg_per_10m), Number(player2.healing_avg_per_10m))}</td>
            </tr>
            <tr>
              <td className={deathText}>{this.calcChange(Number(player1.deaths_avg_per_10m), Number(player2.deaths_avg_per_10m))}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default ShowCompare