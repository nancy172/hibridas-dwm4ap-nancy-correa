import viteLogo from '/vite.svg'
import logo from '/code.png'
import './App.css'
import Card from './components/Card';

function App() {

  let nombre = 'Nina';
  let edad = 21;
  let activo = true;
  const detalleLogo = 'Logo de la aplicación';
  const detalle = <h4> React es una librería de JS</h4>;
  const titulo = 'React';
  const objeto = {
    cantidad: 100,
    descuento: 10
  }

  return (
    <>
      <h1 className="info">Semana 09 - { titulo }</h1>
      <p>Sintaxis JSX</p>

      <img src= { logo } alt="Ícono logo" title= { detalleLogo } />

      { detalle }
      <hr/>
      <p>Su nombre es { nombre.toUpperCase() } </p>
      <p>Su edad es { sumarEdad(edad) } </p>

      <Card 
        nombre="Teclado RGB" 
        precio={23} 
        datos={objeto} 
        descripcion="Teclado mecánico RGB..." 
        foto="https://http2.mlstatic.com/D_NQ_NP_2X_636746-MLA52350707355_112022-F.webp"
      />

      <Card
        precio={25} 
        nombre="Mouse" 
        datos={objeto}
      />
    </>
  )
}

function sumarEdad(edad) {
  return edad + 1;
}

export default App
