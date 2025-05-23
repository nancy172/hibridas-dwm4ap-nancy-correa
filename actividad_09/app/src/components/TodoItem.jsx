import React from 'react';
import '../App.css'

function TodoItem( {nombre, completo} ){
    return(
        <li>
            <span> 
                <input type="checkbox" checked= {completo} /> 
                {nombre} 
            </span>
        </li>
    )
}

export default TodoItem;