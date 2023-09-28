import { Link } from "react-router-dom"

function Card({pokemons}){
    return(
        <>
            {pokemons.map(pokemon=>{
                return(
                    <ul key={pokemon.id}>
                        <li>
                            <h2>name: {pokemon.name}</h2>
                            <p>id: {pokemon.id}</p>
                            <div className="imageContainer">
                            <img src={pokemon.image} alt={pokemon.name}/>
                            </div>
                        </li>
                        <Link to={`/detail/${pokemon.id}`}>
                            <button>About</button> 
                        </Link>
                    </ul>
                )
            })}
        </>
    )
} 


export default Card