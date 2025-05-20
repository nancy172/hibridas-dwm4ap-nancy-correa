import { useState } from 'react'
import TodoApp from './components/TodoApp.jsx'
import Header from './components/Header.jsx'
import TodoList from './components/TodoList.jsx'
import TodoItem from './components/TodoItem.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {

  const tareas = [
    {id:1, nombre: "Tarea 1"},
    {id:2, nombre: "Tarea 2"},
    {id:3, nombre: "Tarea 3"},
    {id:4, nombre: "Tarea 4"}
  ]

  return (
    <>
        <Header></Header>
        <TodoApp>
          <TodoList>
            {
              tareas.map( tarea => <TodoItem nombre={tarea.nombre}></TodoItem>)
            }

          </TodoList>
        </TodoApp>
        <Footer></Footer>
    </>
  )
}

export default App
