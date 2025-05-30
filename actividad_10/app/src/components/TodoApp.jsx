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

    // Agregar, marcar y eliminar tarea
    function addTarea(){
        const tarea = prompt('¿Qué tarea quiere agregar?');
        if (!tarea || tarea.trim() === '') return;

        const newId = tareas.length > 0 ? Math.max(...tareas.map(t => t.id)) + 1 : 1;
        
        const newTarea = {id: newId, nombre: tarea, completo: false};
        setTareas( [...tareas, newTarea] );
    };

    function marcarTarea (id){
        setTareas(tareas.map(tarea => 
            tarea.id === id ? { ...tarea, completo: !tarea.completo } : tarea
        ));
    };

    function eliminarTarea(id){
        setTareas(tareas.filter(t => t.id !== id));
    };

    return(
        <>
            <Header addTarea={addTarea}/>
            <main>
                {
                    tareas.length > 0 ? (<h3> Lista de tareas </h3>) : (<h3>No hay tareas</h3>)
                }
                <TodoList>
                    {
                    tareas.map( tarea => <TodoItem
                            id ={tarea.id}
                            nombre={tarea.nombre} 
                            completo={tarea.completo} 
                            key={tarea.id}
                            marcarTarea={marcarTarea}
                            eliminarTarea={eliminarTarea} 
                        />)
                    }
                </TodoList>
            </main>
            <Footer tareas={tareas}/>
        </>
    )
}

export default TodoApp;