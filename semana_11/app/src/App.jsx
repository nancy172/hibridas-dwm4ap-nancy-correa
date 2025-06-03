import { useState } from 'react';
import './App.css'

import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import Footer from './components/Footer';

function App(){

    /*localStorage.setItem('tareas', JSON.stringify([
        {id:1, nombre: "Estudiar React", completo: true},
        {id:2, nombre: "Regar plantas", completo: false},
        {id:3, nombre: "Turno con el dentista", completo: true},
        {id:4, nombre: "Ver serie", completo: true},
        {id:5, nombre: "Salir a correr", completo: false}
    ]));
    */

    // Estados, siempre se definen en un nivel superior nunca dentro de un if o bucle
    const [ cantidad, setCantidad ] = useState(5); // defino el valor inicial de cantidad
    const [ user, setUser] = useState( {name: 'Lucas', age:22} );
    const [ tareas, setTareas] = useState( () => {

        console.log("Inicio del estado");
        const lista = JSON.parse(localStorage.getItem('tareas'));

        return lista ? lista : [];
    })
    const [tarea, setTarea] = useState({ id: 0, nombre:'', completo: true})
 

    function sumar(){
        // No se puede modificar un estado directamente. Hay que usar el setter: setCantidad
        setCantidad(cantidad + 1);
        console.log({cantidad});
    }

    function cambiarEstado(){
        // user.name = 'Carlos';
        // user.age = 26;
        //const newUser = {  name: user.name, age: user.age }
        setUser( {...user, age: 31} ); // Se actualiza solo la edad
    }

    function addTarea(e){
        e.preventDefault();
        const id = crypto.randomUUID();
        const newTarea = {id, nombre: tarea.nombre, completo: false};
        setTareas( [...tareas, newTarea] );
        // Escribo el localStorage o se realiza el fetch a la API del tipo POST

        // Borramos el valor del estado
        setTarea( {...tarea, nombre: ''});
    }

    const cambiar = (id) => {
        console.log(`Desde el Padre ${id}`)
    }

    async function getApi(){
        const response = await fetch('https://fakestoreapi.com/users');
        const data = await response.json();
        console.log(data);
        // Hacer fetch a la api o a un json local
    }


    return(
        <>
            <Header title="Lista de tareas | React"/>
            <main>
                <hr />
                <h4>Usuario:</h4>
                <ul>
                    <li><strong>Nombre:</strong> {user.name} </li>
                    <li><strong>Edad:</strong> {user.age} </li>
                </ul>
                <hr />
                <h4>Cantidad de tareas: {cantidad} </h4>
                <button type="button" onClick={cambiarEstado} >Cambiar estado</button>
                <button type="button" onClick={sumar} >Sumar</button>
                <hr />
                {/* Formulario */}
                <form onSubmit={addTarea}>
                    <label htmlFor="">Descripción</label>
                    <input 
                        type="text" 
                        value={ tarea.nombre }
                        onChange={ (e) => setTarea( {...tarea, nombre: e.target.value} ) }
                    />
                    <button type="submit">Crear tarea</button>
                </form>
                
                {
                    tareas.length > 0 ? (<h3> Hay tareas</h3>) : (<h3>No hay tareas</h3>)
                }
                <TodoList>
                    {
                    tareas.map( tarea => 
                        <TodoItem 
                            nombre={tarea.nombre} 
                            completo={tarea.completo} 
                            key={tarea.id}
                            cambiar={cambiar} 
                        /> )
                    }
                </TodoList>
            </main>
            <Footer/>
        </>
    )
}

export default App;
