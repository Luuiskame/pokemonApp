import { GET_POKEMON_BY_NAME, GET_POKEMONS,GET_ALL_TYPES, ORDER, ORDER_BY_TYPE } from "./actinon-types";
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

export const getAllTypes = ()=> async (dispatch)=>{
    try {
        const response = await axios("http://localhost:3001/pokecards/type")
        const data = response.data
        // console.log(data)

        dispatch({
            type: GET_ALL_TYPES,
            payload: data
        })
    } catch (error) {
        
    }
}

//? filters

export const orderCards = (order)=>{
    return {
        type: ORDER,
        payload: order
    }
}

export const orderByType = (type)=>{
    return {
        type: ORDER_BY_TYPE,
        payload: type
    }
}


