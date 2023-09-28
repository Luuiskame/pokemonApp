import { useState } from "react";

function Searchbar(){
    return(
        <div>
            <input type="search" />

            <div>
                <button>search</button>
                <button>random</button>
            </div>
        </div>
    )
}

export default Searchbar