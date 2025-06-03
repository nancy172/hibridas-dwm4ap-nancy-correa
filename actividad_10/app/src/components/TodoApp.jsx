import Header from './Header';
import TodoItem from './TodoItem';
import TodoList from './TodoList';
import Footer from './Footer';

import { useState } from 'react';

function TodoApp(){

    /* const [tareas, setTareas] = useState([
        {id:1, nombre: "Estudiar React", completo: true},
        {id:2, nombre: "Regar plantas", completo: false},
        {id:3, nombre: "Turno con el dentista", completo: true},
        {id:4, nombre: "Ver serie", completo: true},
        {id:5, nombre: "Salir a correr", completo: false}
    ]); */

    const [ tareas, setTareas] = useState( () => {
        console.log("Inicio del estado");
        const lista = JSON.parse(localStorage.getItem('tareas'));

        return lista ? lista : [];
    });

    const [tarea, setTarea] = useState({ id: 0, nombre:'', completo: true})

    // Agregar, marcar y eliminar tarea
    function agregarTarea(e){
        e.preventDefault();
        const id = crypto.randomUUID();

        if (!tarea.nombre || tarea.nombre.trim() === '') return;
        
        const newTarea = {id, nombre: tarea.nombre, completo: false};
        setTareas( [...tareas, newTarea] );

        // Se limpia el input después de agregar
        setTarea( {...tarea, nombre: ''} );

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
            <Header 
                agregarTarea={agregarTarea}
                tarea={tarea}
                setTarea={setTarea}
            />
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