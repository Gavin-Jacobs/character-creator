import request from 'superagent'

const serverURL = 'http://localhost:3000/v1/characters/'

export function getCharacters (id) {
    return request
      .get(`http://localhost:3000/v1/characters/${id}`)
      .then(response => response.body)
  }

  export function addPost (character) {

    return request 
        .post(serverURL)
        .send(character)
        .then(res => {
            validateNoSnakeCase(res.body)
            validatePostResponse('POST', serverURL, res.body)
            return res.body
      })
      .catch(errorHandler('POST', serverURL))
  }
  