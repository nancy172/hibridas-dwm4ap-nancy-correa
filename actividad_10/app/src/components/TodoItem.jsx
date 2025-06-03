import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

function TodoItem( {id, nombre, completo, marcarTarea, eliminarTarea} ){

    function handlerMarcar(){
        marcarTarea(id);
    }

    function handlerEliminar(){
        eliminarTarea(id);
    }

    return(
        <li className="todo-item">
            <span className="todo-text"> 
                <input onChange={handlerMarcar} type="checkbox" checked={completo} /> 
                {nombre} 
            </span>
            <div className="delete-edit">
                <a href="#" id='edit'>
                    <FontAwesomeIcon icon={faPenToSquare} size="xl" style={{color: "#4786e4",}} /> 
                </a>
                <a href="#" onClick={handlerEliminar}>
                    <FontAwesomeIcon icon={faTrash} size="xl" style={{color: "#d32b0d",}} /> 
                </a>
            </div>
        </li>
    );
}

export default TodoItem;