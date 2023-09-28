import { Link } from "react-router-dom";

function LandingPage(){
    return(
        <div>
            <p>soy la landing page</p>
            <Link to='/home'>
            <button>home</button>
            </Link>
        </div>
    )
}

export default LandingPage