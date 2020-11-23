const config = require('../../knexfile').development
const db = require('knex')(config)

module.exports={
    getCharacters,
    postCharacter
}

function getCharacters(id){
    return db('character')
        .where('id',id)
        .select()
}

function postCharacter(chara){
    return db('character').insert(chara)
}