//? components
import Card from "../Card/Card"
import Navbar from "../Navbar/Navbar"
import Header from "../Header/Header"

//axios
import { getPokemons } from "../../../redux/actions"

//hooks
import { useEffect,useState } from "react"
import { useDispatch, useSelector } from "react-redux"

function Home(){
  const dispatch = useDispatch()
  const pokemons = useSelector(state => state.pokemons)
  
  useEffect(()=>{
    console.log(pokemons)
    dispatch(getPokemons(pokemons))
  },[])
    return(
        <div>
            <Navbar/>
            <Header/>
            {
              pokemons.map(pokemon => {
              return (
                <Card
                  key={pokemon.id}
                  id={pokemon.id}
                  name={pokemon.name}
                  image={pokemon.image}
                  type={pokemon.type}
                  hp={pokemon.hp}
                  attack={pokemon.attack}
                  defense={pokemon.defense}
                  speed={pokemon.speed}
                  weight={pokemon.weight}
                  height={pokemon.height}
                />
              )
            })
          } 
        </div>
    )
}

export default Home