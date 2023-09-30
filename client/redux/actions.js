import { GET_POKEMON_BY_NAME, GET_POKEMONS } from "./actinon-types";
import axios from 'axios'


export const getPokemons = ()=> async(dispatch)=>{
    try {
        const response = await axios('http://localhost:3001/pokecards/pokemon')
        const pokemonData = response.data
        console.log(pokemonData)

        dispatch({
            type: GET_POKEMONS,
            payload: pokemonData
        })
    } catch (error) {
        window.alert(error)
    } 
}



export const getPokemonByName = (name)=> async (dispatch)=>{
    try {
        const response = await axios(`http://localhost:3001/pokecards/pokemon/${name}`)
        const pokemonData = response.data
        console.log(pokemonData)

        //dispatching the action to store the pokemon in redux state
        dispatch({
            type: GET_POKEMON_BY_NAME,
            payload: pokemonData
        })
    } catch (error) {
        window.alert(error)
    }
}

