import React from 'react';
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

function TodoItem( {nombre, completo} ){

    return(
        <li className="todo-item">
            <span className="todo-text"> 
                <input type="checkbox" /> 
                {nombre} 
            </span>
            <div className="delete-edit">
                <a href="#"><FontAwesomeIcon icon={faPenToSquare} size="xl" style={{color: "#4786e4",}} /> </a>
                <a href="#"><FontAwesomeIcon icon={faTrash} size="xl" style={{color: "#d32b0d",}} /> </a>
            </div>
        </li>
    );
}

export default TodoItem;