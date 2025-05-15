import viteLogo from '/vite.svg'
import logo from '/code.png'
import './App.css'

function App() {

  let nombre = 'Nina';
  let edad = 21;
  let activo = true;
  const detalleLogo = 'Logo de la aplicación';
  const detalle = <h4> React es una librería de JS</h4>;
  const titulo = 'React';

  return (
    <>
      <h1 className="info">Semana 09 - { titulo }</h1>
      <p>Sintaxis JSX</p>

      <img src= { logo } alt="Ícono logo" title= { detalleLogo } />

      { detalle }
      <hr/>
      <p>Su nombre es { nombre.toUpperCase() } </p>
      <p>Su edad es { sumarEdad(edad) } </p>
    </>
  )
}

function sumarEdad(edad) {
  return edad + 1;
}

export default App
