import React from "react";
import '../App.css'

function TodoItem( {tarea} ){
    return(
        <>
            <li>{tarea.nombre}</li>
        </>
    )
}

export default TodoItem;