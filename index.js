import express from 'express'
import bodyParser from 'body-parser'
import client from './src/services/Connection.js'
import cors from 'cors'
import config from './src/commons/config.js'

const app = express()

app.use(cors({
  origin: '*'
}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
    console.log({requestFromOutside: req.body})
    res.send('Login berhasil')
})

app.listen(config.app.port, () => {
  console.log(`Example app listening on port ${config.app.port}`)
})

client.connect(err => {
  if(err) console.log(err.message)
    else console.log('Database connected')
});