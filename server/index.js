const express = require('express')
const app = express()
const port = 4554

const ProCtrl = require('./ProStatController')
const IndvCtrl = require('./IndividualStatController')

app.use(express.json())

app.get('/api/individualstats', IndvCtrl.get)
app.post('/api/individualstats', IndvCtrl.post)
app.put('/api/individualstats/:id', IndvCtrl.put)
app.delete('/api/individualstats/:id', IndvCtrl.delete)

app.get('/api/prostats', ProCtrl.get)



app.listen(port, () => console.log(`Listening on port ${port}`))