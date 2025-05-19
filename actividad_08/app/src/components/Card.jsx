import React from "react";
import '../App.css';

function Card( {mascota} ) {
    
    return(
        <div className="card">
            <h4> {mascota.nombre} </h4>
            <img src={mascota.imagen} alt={mascota.nombre} />
            <p>Edad: {mascota.edad} </p>
            <p> {mascota.descripcion} </p>
            <button type="button">Ver más</button>
        </div>
    )

}

export default Card;