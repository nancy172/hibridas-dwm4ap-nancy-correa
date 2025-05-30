import React from "react";
import icono from '/to_do_list.svg';

function Header( {agregarTarea} ){

    return(
        <>
            <header>
                <h1>To-Do List</h1>
                <img src={icono} alt="Ícono de una lista de tareas" />
            </header>

            <button type="button" onClick={agregarTarea}>+ Agregar tarea</button>
        </>
    )
}

export default Header;