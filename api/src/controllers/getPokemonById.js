const axios = require('axios')

// models
const {Pokemon} = require('../db')

async function getPokemonById(req,res){
    try {
        const {id} = req.params

        const uuidPattern = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/
        
        if(isNaN(id)){
            await getPokemonFromDatabase(id,res)
            return 
        }
        
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
    } catch (error) {
        res.status(501).json({error: error.message})
    }
}

async function getPokemonFromDatabase(id,res){
    try {
        const pokemon = await Pokemon.findByPk(id)
        if(!pokemon){
            return res.status(400).json({error: "ID not found at database"})
        }
        return res.status(200).json(pokemon)

    } catch (error) {
        res.status(501).json({error: error.message})
    }
}


module.exports = getPokemonById