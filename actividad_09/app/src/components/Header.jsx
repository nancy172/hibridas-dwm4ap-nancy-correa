import React from "react";
import icono from '/to_do_list.svg';

function Header(){
    return(
        <header>
            <h1>To-Do List</h1>
            <img src={icono} alt="Ícono de una lista de tareas" />
        </header>
    )
}

export default Header;