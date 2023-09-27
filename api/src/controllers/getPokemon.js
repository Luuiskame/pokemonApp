const axios = require("axios")


// this functino works as a helper function that allows us to send the pokemon in this structure that we'll eventually use in our frontend
async function getPokemon(url){
    try {
        const response = await axios(url)
        const data = response.data

        const pokemonData = {
            id: data.id,
            name: data.name,
            image: data.sprites.front_default,
            hp: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
            speed: data.stats[5].base_stat,
            height: data.height,
            weight: data.weight,
        }
        return pokemonData
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}


async function getAllPokemon(req,res){
    try {
        // this gonna be limit of pokemons we need when rendering the page
        const {limit = 10} = req.body
        const URL = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
        const response = await axios(URL)
        const data = response.data
        // results is an array with the name and url properties inside
        const pokemonList = data.results

        const pokemonDataList = []

        //! so we loop within our array which contains each pokemon and call our helper function with the url as a parameter that will be use as the api caller
        for(const pokemons of pokemonList){
            const pokemon = await getPokemon(pokemons.url)
            if(pokemon) {
                pokemonDataList.push(pokemon)
            }
        }


        res.status(200).json(pokemonDataList)
    
    } catch (error) {
        res.status(500).json({error: error.message})
    }    
}



module.exports = getAllPokemon