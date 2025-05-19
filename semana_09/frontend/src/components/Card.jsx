import React from "react";
import '../App.css'

function Card( {nombre, precio, foto, datos, descripcion = "..."} ) {

    //Javascript
    /*console.log(props.nombre);
    const nombre = props.nombre;
    const descripcion = props.descripcion ? props.descripcion : 'Sin descripciòn';
    const foto = props.foto;*/

    console.log(datos);

    // HTML
    return(
        <div className="card">
            <h4> {nombre} </h4>
            <img src= {foto} alt= {nombre} />
            <p> ${precio} </p>
            <p> Stock: {datos?.cantidad} </p>
            <p> {descripcion} </p>
            <button type="button">Ver</button>
        </div>
    )
}

export default Card;