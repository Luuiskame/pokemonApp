import { Link } from "react-router-dom";


function Header(){
    return(
        <header>
            <Link to='/'>
            <button>Landing page</button>
            </Link>
        </header>
    )
}

export default Header