const path = require('path')
const express = require('express')

const character = require('./routes/characters')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/v1/characters', character)
server.use('/v1/*', (req, res) => res.sendStatus(404))

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})
module.exports = server