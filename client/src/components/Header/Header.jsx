import { Link } from "react-router-dom";
import Filters from "../Filters/Filters";


function Header(){
    return(
        <header>
            <Link to='/'>
            <button>Landing page</button>
            </Link>
            <Filters/>
            <Link to="/createpokemon">
            <button>Create Pokemon</button>
            </Link>
        </header>
    )
}

export default Header