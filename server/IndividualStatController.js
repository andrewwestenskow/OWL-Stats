let stats = [{
  name:'StormCloudWilly',
  eliminations_avg_per_10m: 19.7,
  rank: 2947,
  deaths_avg_per_10m: 9.5,
  hero_damage_avg_per_10m: 11552,
  healing_avg_per_10m: 40,
  id: 1},

  {name:'StormCloudBilly',
  rank: 2895,
  eliminations_avg_per_10m: 23.9,
  deaths_avg_per_10m: 12.3,
  hero_damage_avg_per_10m: 9206,
  healing_avg_per_10m: 1237,
  id: 2},

  {name:'StormCloudKilly',
  eliminations_avg_per_10m: 25.8,
  rank: 2379,
  deaths_avg_per_10m: 13.6,
  hero_damage_avg_per_10m: 10558,
  healing_avg_per_10m: 699,
  id: 3},
  
]

let id = (stats.length)+1

module.exports = {
  
  get: (req, res) => {
    let result = stats
    if(req.query.name) {
      result = stats.filter(player => {
        return req.query.name === player.name
      })
    }
    res.send(result)
  },

  post: (req,res) => {
    let {name, eliminations_avg_per_10m, hero_damage_avg_per_10m, healing_avg_per_10m, deaths_avg_per_10m, rank} = req.body
    let newPlayer = {
      name: name,
      rank: rank,
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
    let {name, eliminations_avg_per_10m, hero_damage_avg_per_10m, healing_avg_per_10m, deaths_avg_per_10m, rank} = req.body
    let updatedPlayer = {
      name: name,
      eliminations_avg_per_10m: +eliminations_avg_per_10m,
      hero_damage_avg_per_10m: +hero_damage_avg_per_10m,
      healing_avg_per_10m: +healing_avg_per_10m,
      deaths_avg_per_10m: +deaths_avg_per_10m,
      rank: rank,
      id: id
    }

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

