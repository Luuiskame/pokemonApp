import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"

function Card({id,image,type,name}){

    return(
        <div key={id}>
            <Link to={`/detail/${id}`}>
            <button>About</button>
            </Link>
            <p>{id}</p>
            <div>
                <img src={image} alt={name} />
            </div>
            <h2>{name}</h2>
            <p>{type}</p>
        </div>
    )
} 


export default Card