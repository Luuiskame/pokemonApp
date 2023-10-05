const axios = require('axios')

// models
const {Pokemon, Pokemons_type} = require('../db')

async function getPokemonById(req,res){
    try {
        const {id} = req.params

        // const uuidPattern = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/
        
        if(!isNaN(id)){
            const response = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`)
            const data = response.data
    
            const pokemonData = {
                id: data.id,
                name: data.name,
                image: data.sprites.back_default,
                hp: data.stats[0].base_stat,
                attack: data.stats[1].base_stat,
                defense: data.stats[2].base_stat,
                speed: data.stats[5].base_stat,
                type: data.types[0].type.name,
                height: data.height,
                weight: data.weight,
            }
    
            console.log(data)
            res.status(200).json(pokemonData)
        } else {
            const result = await getPokemonFromDatabase(id)
            res.status(200).json(result)
        }
        
        
    } catch (error) {
        res.status(501).json({error: error.message})
    }
}
 
async function getPokemonFromDatabase(id){
   const searchDb = await Pokemon.findByPk(id)
   return searchDb
}


module.exports = getPokemonById