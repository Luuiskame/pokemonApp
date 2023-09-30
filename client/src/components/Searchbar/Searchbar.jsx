import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName } from "../../../redux/actions";

function Searchbar(){
    const [pokemonName, setPokemonName] = useState('')
    const dispatch = useDispatch()

    const handleSearch = ()=>{
        dispatch(getPokemonByName(pokemonName))
    }
    console.log(pokemonName)
    return(
        <div>
            <input 
            type="search" 
            value={pokemonName}
            onChange={(event)=> setPokemonName(event.target.value)}
            placeholder="Name here"
            />

            <div>
                <button onClick={handleSearch}>search</button>
                <button>random</button>
            </div>

        </div>
    )
}

export default Searchbar