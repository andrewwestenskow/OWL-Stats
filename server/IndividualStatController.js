let id = 1
let stats = [{
  name:'StormCloudWilly',
  eliminations_avg_per_10m: 19.7,
  deaths_avg_per_10m: 9.5,
  hero_damage_avg_per_10m: 11552,
  healing_avg_per_10m: 40,
  id: 1}
]

module.exports = {
  get: (req, res) => {
    res.send(stats)
  },

  post: (req,res) => {
    let {name, eliminations_avg_per_10m, hero_damage_avg_per_10m, healing_avg_per_10m, deaths_avg_per_10m} = req.body
    let newPlayer = {
      name: name,
      eliminations_avg_per_10m: +eliminations_avg_per_10m,
      hero_damage_avg_per_10m: +hero_damage_avg_per_10m,
      healing_avg_per_10m: +healing_avg_per_10m,
      deaths_avg_per_10m: +deaths_avg_per_10m
    }
    id++
    newPlayer.id = id
    stats.push(newPlayer)
    res.send(stats)
  },

  put: (req, res) => {
    let {id} = req.params
    let updatedPlayer = req.body
    updatedPlayer.id = id

    let index = stats.findIndex(player => +player.id === +id)
    stats.splice(index, 1, updatedPlayer)
    res.send(stats)
  },

  delete: (req, res) => {
    let {id} = req.params
    let index = stats.findIndex(player => +player.id === +id )
    stats.splice(index, 1)
    res.send(stats)
  }
}

