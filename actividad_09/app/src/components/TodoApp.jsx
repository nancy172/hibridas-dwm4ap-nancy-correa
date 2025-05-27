import Header from './Header';
import TodoItem from './TodoItem';
import TodoList from './TodoList';
import Footer from './Footer';

import { useState } from 'react';

function TodoApp(){

    const [tareas, setTareas] = useState([
        {id:1, nombre: "Estudiar React", completo: true},
        {id:2, nombre: "Regar plantas", completo: false},
        {id:3, nombre: "Turno con el dentista", completo: true},
        {id:4, nombre: "Ver serie", completo: true},
        {id:5, nombre: "Salir a correr", completo: false}
    ]);

    function addTarea(){
        const tarea = prompt('Qué tarea quiere agregar?');
        const newTarea = {id:6, nombre: tarea, completo: false};
        setTareas( [...tareas, newTarea] );
    }

    return(
        <>
            <Header/>
            <main>
                <button type="button" onClick={addTarea}>+ Agregar</button>
                {
                    tareas.length > 0 ? (<h3> Hay tareas </h3>) : (<h3>No hay tareas</h3>)
                }
                <TodoList>
                    {
                    tareas.map( tarea => <TodoItem 
                        nombre={tarea.nombre} 
                        completo={tarea.completo} 
                        key={tarea.id} 
                        />)
                    }
                </TodoList>
            </main>
            <Footer/>
        </>
    )
}

export default TodoApp;
