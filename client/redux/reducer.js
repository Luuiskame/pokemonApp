import { FILTER_ALPHABETICALLY, GET_ALL_TYPES, GET_POKEMON_BY_NAME, GET_POKEMONS, ORDER, ORDER_BY_TYPE, RESET_FILTER } from "./actinon-types";

const initialState = {
    pokemons: [],
    allPokemons: [],
    allTypes: []
}

const reducer = (state = initialState, action)=>{
    switch(action.type){

        case GET_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload
            }
        
            case GET_POKEMON_BY_NAME:
            return {
                ...state,
                pokemons: [action.payload, ...state.pokemons]
            }
            case GET_ALL_TYPES:
                return {
                    ...state,
                    allTypes: action.payload
                }
            
            //? filters
            case ORDER:
                let orderPokemons
                if(action.payload === "upwards"){
                    orderPokemons = state.pokemons.sort((a,b)=> a.id > b.id ? 1 : -1)
                } 
                if(action.payload === "attack"){
                    orderPokemons = state.pokemons.sort((a,b)=> a.attack > b.attack ? 1 : -1)
                }
                if(action.payload === "downwards"){
                    orderPokemons = state.pokemons.sort((a,b)=> b.id > a.id ? 1 : -1)
                }
                
                return {
                    ...state,
                    pokemons: [...orderPokemons]
                }

                case ORDER_BY_TYPE:
                    const filterdByType = state.allPokemons.filter(pokemon=> pokemon.type === action.payload)
                    return {
                        ...state,
                        pokemons: filterdByType
                    }

                case FILTER_ALPHABETICALLY:
                    let filteredPokemons;
                    if (action.payload === 'asc') {
                        filteredPokemons = state.pokemons.slice().sort((a, b) => a.name.localeCompare(b.name));
                    } else if (action.payload === 'desc') {
                        filteredPokemons = state.pokemons.slice().sort((a, b) => b.name.localeCompare(a.name));
                    }
                    return {
                        ...state,
                        pokemons: filteredPokemons,
                    };

                    case RESET_FILTER:
                        return {
                            ...state,
                            pokemons: [...state.allPokemons]
                        }
                        
                
            default:
                return state
    }
}


export default reducer