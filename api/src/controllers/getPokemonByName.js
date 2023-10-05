const axios = require("axios");
const { Pokemon } = require("../db");
const URL = "https://pokeapi.co/api/v2/pokemon";

const getPokemonByName = async (req, res) => {
    const {name} = req.query
   
    try {
           const dbCall = await getPokemonByNameFromDb(name) 
           if(dbCall){
            res.status(200).json(dbCall)
           } else {
            const apiCall = await getPokemonApi(name)
            res.status(200).json(apiCall)
           }
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const getPokemonByNameFromDb = async(name)=>{
    const pokemonDb = await Pokemon.findOne({ 
        where: {
            name: name
        }
    })
    return pokemonDb
}

const getPokemonApi = async(name)=>{
    const nameToLowercase = name.toLowerCase()
    const {data} = await axios(`https://pokeapi.co/api/v2/pokemon/${nameToLowercase}`)

    if(data.name){
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
        return pokemonData
    }
}

module.exports = getPokemonByName