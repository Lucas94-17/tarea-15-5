import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container"

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

let lista = [];

function App() {
  const [listaColores,setListaColores] = useState(lista)
  const [color, setColor] = useState("")

  const handleAddColor = () => {
    setListaColores(prev => [...prev ,{color}])
    localStorage.setItem("color",JSON.stringify(listaColores))
    console.log(listaColores)
    setColor ("")
  }

  const handleDelete = (color1) => {
    console.log(color1)
    console.log(listaColores)

   const newColors = listaColores.filter((colores) => colores.color !== color1)
   setListaColores(newColors)

  }  

  return (


    ///////////////// FORMULARIO //////////////////

    <>
    <Container>
   
      <form action="#">
            <div>
              <label >Ingrese el color</label>
              <input type="text" value={color} onChange={event => setColor(event.target.value)}/>
              <button type="button" onClick={handleAddColor}> Enviar </button>
            </div>
      </form>

    <br />
    {/*/////////////// CARDS ////////////////////*/}
    
      {listaColores.map((colores) => (
        <Card key={colores.color} style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{colores.color}</Card.Title>
              <Button variant="primary" type="button" onClick={() => handleDelete(colores.color)}>Eliminar</Button>
            </Card.Body>
        </Card>
        ))}
      
    </Container>
  
    </>


  );
}

export default App;

 {/* <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Ingresa el color deseado</Form.Label>
        <Form.Control type="text" placeholder="Ingresa el color" value={color}/>

      </Form.Group>

      <Button variant="primary" type="submit" onClick={handAddColor()}>
        Enviar
      </Button>
    </Form> */}