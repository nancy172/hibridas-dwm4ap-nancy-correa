import Header from './Header';
import TodoList from './TodoList';
import TodoItem from './TodoItem';
import Footer from './Footer';
import '../App.css';

function TodoApp(){

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
                    tareas.length > 0 ? (<h3> Hay {tareas.length} tareas</h3>) : (<h3>No hay tareas</h3>)
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

export default TodoApp;
