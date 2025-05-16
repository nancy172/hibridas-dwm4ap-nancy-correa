import React from "react";
import '../App.css'

function Card( {nombre, precio} ) {
    return(
        <div>
            <h4>{nombre}</h4>
            <img src="" alt="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex eveniet aut in eaque ducimus quaerat.</p>
            <p>{precio}</p>
            <button type="button">Ver</button>
        </div>
    )
}

export default Card;