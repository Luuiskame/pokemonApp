import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"

function Card({id,image,type,name,attack}){

    return(
        <div key={id}>
            <Link to={`/detail/${id}`}>
            <button>About</button>
            </Link>
            <p>ID: {id}</p>
            <div>
                <img src={image} alt={name} />
            </div>
            <h2>NAME: {name}</h2>
            <p>{type}</p>
            <p>attack: {attack}</p>
        </div>
    )
} 


export default Card