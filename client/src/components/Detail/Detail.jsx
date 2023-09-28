import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

function Detail(){
    const {id} = useParams()
    console.log(id)
    const [pokemons, setPokemons] = useState({})

    useEffect(()=>{
        axios(`http://localhost:3001/pokecards/pokemon/${id}`)
        .then(({data})=>{
            console.log(data)
            if(data.name){
                setPokemons(data)
            } else {
                window.alert("ñ")
            }
        })
        return setPokemons({})
    },[id])
    
    return(
        <div>
            <Link to='/home'>
            <button>back home</button>
            </Link>
            <div>
                <img src={pokemons.image} alt={pokemons.name}/>
            </div>
            <h2>NAME :{pokemons.name}</h2>
            <h2>ID: {pokemons.id}</h2>
            <h2>HP: {pokemons.hp}</h2>
            <h2>attack: {pokemons.attack}</h2>
            <h2>DEFENSE: {pokemons.defense}</h2>
            <h2>SPEED: {pokemons.speed}</h2>
            <h2>HEIGHT: {pokemons.height}</h2>
            <h2>WEIGHT: {pokemons.weight}</h2>
            <h2>Type: </h2>
        </div>
    )
}

export default Detail