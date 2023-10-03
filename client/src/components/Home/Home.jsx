//? components
import Card from "../Card/Card"
import Navbar from "../Navbar/Navbar"
import Header from "../Header/Header"

//axios
import { getPokemons, getAllTypes } from "../../../redux/actions"

//hooks
import { useEffect,useState } from "react"
import { useDispatch, useSelector } from "react-redux"

function Home(){
  // page state
  const [currentPage, setCurrentPage] = useState(1)

  //pokemons global state and dispatch hook
  const dispatch = useDispatch()
  const pokemons = useSelector(state => state.pokemons)
  
  useEffect(()=>{
    dispatch(getPokemons())
    dispatch(getAllTypes())
  },[])

  const pokemonsPerPage = 12
  const start = (currentPage - 1) * pokemonsPerPage
  const end = start + pokemonsPerPage
  const currentPokemons = pokemons.slice(start,end)


  const nextPage = ()=>{
    setCurrentPage(prevPage=> prevPage +1)
  }

  const prevPage = ()=>{
    setCurrentPage(prevPage => prevPage -1)
  }

    return(
        <div>
            <Navbar/> 
            <Header/>
            {
              currentPokemons.map(pokemon => {
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
            <button 
            onClick={prevPage}
            disabled={currentPage === 1}
            >previous</button>
            <button 
            onClick={nextPage}
            // disabled={currentPage === totalPages}
            >Next</button>
        </div>
    )
}

export default Home