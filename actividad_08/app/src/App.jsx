import icono from '/icon_pet.png'
import './App.css'

function App() {

  const  mensaje = 'Cada animal merece un hogar lleno de amor.';

  return (
    <>
      <main className='montserrat'>
        <h1>Adopción de mascotas</h1>
        <div>
          <p>Adoptar es un acto de amor. En nuestro sitio te ayudamos a encontrar a ese compañero especial que está esperando un hogar. Conocé a perros y gatos que buscan una segunda oportunidad. { mensaje.toUpperCase() } </p>
          <img src= { icono } alt="Ícono de cuidado de mascotas" title= "Ícono mascotas" />
        </div>
      </main>
    
    </>

  )
}

export default App
