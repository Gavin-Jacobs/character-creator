const express = require('express')

const db = require('../db')

const router = express.Router()



router.get('/:id', (req, res) => {
    const id = Number(req.params.id)
    db.getCharacters(id)
      .then((character) => {
        return res.status(200).json(character)
        
      })
      .catch(err => {
        res.status(500).send('DB error' + err)
      })
  })

  router.post('/', (req, res) => {
    const newCharacter = req.body
    db.newBlog(newCharacter)
      .then(db.getCharacters)
      .then((character) => {
        return res.status(201).json(character)
      })
      .catch(err => {
        res.status(500).send('DB error' + err)
      })
  })

  module.exports = router