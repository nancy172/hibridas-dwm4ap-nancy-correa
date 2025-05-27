import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import Footer from './components/Footer';
import './App.css';

function App(){

    const tareas = [
        {id:1, nombre: "Estudiar React", completo: true},
        {id:2, nombre: "Regar plantas", completo: false},
        {id:3, nombre: "Turno con el dentista", completo: true},
        {id:4, nombre: "Ver serie", completo: true},
        {id:5, nombre: "Salir a correr", completo: false}
    ]

    return(
        <>
            <Header/>
            <main>
                {
                    tareas.length > 0 ? (<h3> Lista de tareas </h3>) : (<h3>No hay tareas</h3>)
                }
                <TodoList>
                    {
                    tareas.map( tarea => <TodoItem nombre={tarea.nombre} completo={tarea.completo} key={tarea.id} />)
                    }
                </TodoList>
            </main>
            <Footer/>
        </>
    )
}

export default App;
