import icono from '/icon_pet.png'
import Card from './components/Card';
import './App.css'

function App() {

  const  mensaje = 'Conocé a nuestras mascotas que buscan un hogar.';
  const mascotas = 
  [
    {id: 1, nombre: "Nina", edad: "2 años", descripcion: "Es cariñosa y le gusta tomar sol.", imagen: "https://placedog.net/785" },
    {id: 2, nombre: "Mia", edad: "4 años", descripcion: "Es mimosa, tranquila y le gusta jugar.", imagen: "https://placedog.net/540" },
    {id: 3, nombre: "Beto", edad: "5 años", descripcion: "Es juguetón y se lleva bien con otros perros.", imagen: "https://placedog.net/346" },
    {id: 4, nombre: "Oreo", edad: "3 años", descripcion: "Es tranquilo y le gusta dormir en el sol.", imagen: "https://placedog.net/789" }
  ];

  return (
    <>
      <main>
        <h1>Adopción de mascotas</h1>
        <div className='intro'>
          <p>Adoptar es un acto de amor. En nuestro sitio te ayudamos a encontrar a ese compañero especial que está esperando un hogar. Conocé a perros y gatos que buscan una segunda oportunidad.</p>
          <img src= { icono } alt="Ícono de cuidado de mascotas" title= "Ícono mascotas" />
        </div>

        <div>
          <h2>Adoptá una mascota</h2>
          <p> {mensaje} </p>
          <div className='card-container'>
            { mascotas.map((mascota) => (
              <Card key= {mascota.id} mascota= {mascota}/>
            )) 
            }
          </div>
        </div>
      </main>
    
    </>

  )
}

export default App
