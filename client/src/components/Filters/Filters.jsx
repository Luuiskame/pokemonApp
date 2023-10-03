import { useDispatch, useSelector } from "react-redux"

import { orderCards, orderByType, filterAlphabetically, resetFilter } from "../../../redux/actions"
import { useState } from "react"

const Filters = ()=>{
    // const pokemons = useSelector((state)=> state.pokemons)
    const dispatch = useDispatch()
    //using a auxiliar in case it doesn't render the new state
    const [aux, setAux] = useState(false)

    //getting all types so we can map it to create the section option
    const allTypes = useSelector(state=> state.allTypes)
    console.log(allTypes)

    const handleOrder = (event)=>{
        dispatch(orderCards(event.target.value))
        setAux(true)
    }

    const handleType = (event)=>{
        dispatch(orderByType(event.target.value))
        setAux(true)
        console.log(event.target.value)
    }
    const handleAlphabeticalFilter = (event) => {
        const filterValue = event.target.value; 
        dispatch(filterAlphabetically(filterValue));
      };

    const handleResetFilter = ()=>{
        dispatch(resetFilter())
    }

    return(
        <div>
             <select onChange={handleAlphabeticalFilter}>
                <option value="asc">A-Z</option>
                <option value="desc">Z-A</option>
            </select>

        <select onChange={handleType}>
            {allTypes.map((pokemonType)=>(
                <option key={pokemonType} value={pokemonType}>
                    {pokemonType}
                </option>
            ))}
        </select>
            
        <select onChange={handleOrder}>
            <option value="upwards">upwards</option>
            <option value="downwards">downwards</option>
            <option value="attack">attack</option>
        </select>

        <button onClick={handleResetFilter}>reset filters</button>
        
        </div>
       
    )
}

export default Filters