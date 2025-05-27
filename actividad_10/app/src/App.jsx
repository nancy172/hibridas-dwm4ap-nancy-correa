import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import Footer from './components/Footer';
import './App.css';
import { useState } from 'react';

function App(){

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

    function marcarTarea (id){
        console.log(`Tarea marcada: ${id}.`);
    }

    function eliminarTarea(id){
        setTareas(tareas.filter(t => t.id !== t.id));
    }

    return(
        <>
            <Header/>
            <main>
                <button type="button" onClick={addTarea}>+ Agregar</button>
                {
                    tareas.length > 0 ? (<h3> Lista de tareas </h3>) : (<h3>No hay tareas</h3>)
                }
                <TodoList>
                    {
                    tareas.map( tarea => <TodoItem 
                            nombre={tarea.nombre} 
                            completo={tarea.completo} 
                            key={tarea.id}
                            marcarTarea={marcarTarea}
                            eliminarTarea={eliminarTarea} 
                        />)
                    }
                </TodoList>
            </main>
            <Footer/>
        </>
    )
}

export default App;
