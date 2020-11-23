import request from 'superagent'

const serverURL = 'http://localhost:3000/v1/characters/'

export function getCharacters (id) {
    return request
      .get(`${serverURL}/item/${id}`)
      .then(response => response.body[0])
  }

  export function addPost (character) {

    return request 
        .post(serverURL)
        .send(character)
        .then(res => {
            return res.body
      })
      .catch(err => {
        res.status(500).send('DB error' + err)
      })
  }