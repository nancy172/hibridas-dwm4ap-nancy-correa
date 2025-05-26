import React from 'react';
import '../App.css';

function TodoItem( {nombre, completo, cambiar} ){

    function handlerClick(){
        console.log(`Click en la tarea ${nombre}`);
        cambiar(nombre);
    }

    return(
        <li>
            <span> 
                <input onClick={ handlerClick } type="checkbox"/> 
                {nombre} 
            </span>
        </li>
    )
}

export default TodoItem;