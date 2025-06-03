import React from "react";
import icono from '/to_do_list.svg';

function Header( { agregarTarea, tarea, setTarea} ){

    return(
        <>
            <header>
                <h1>To-Do List</h1>
                <img src={icono} alt="Ícono de una lista de tareas" />
            </header>
            <form id="add" onSubmit={agregarTarea}>
                <input 
                    type="text"
                    value={tarea.nombre}
                    onChange={ (e) => setTarea( {...tarea, nombre: e.target.value} ) }
                    placeholder="Escriba la tarea..."
                />
                <button type="submit">+ Agregar tarea</button>

            </form>
        </>
    )
}

export default Header;