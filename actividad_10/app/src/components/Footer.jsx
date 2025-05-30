import React from "react";

function Footer( {tareas} ){

    const tareasTotal = tareas.length;
    const tareasCompletadas = tareas.filter( t => t.completo).length;
    const tareasPendientes = tareas.filter( t => !t.completo).length;


    return(
        <footer>
            <p style={{ color: '#007bff' }}>Total: {tareasTotal} </p>
            <p style={{ color: 'green' }}>Completadas: {tareasCompletadas} </p>
            <p style={{ color: 'orange' }}>Pendientes: {tareasPendientes} </p>
        </footer>
    )
}

export default Footer;