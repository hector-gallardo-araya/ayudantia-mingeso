import { useState } from "react";

export default function Form() {
  // const [nombre, setNombre] = useState("");
  // const [edad, setEdad] = useState(0);

  // function handleInputChange(event) {    
  //   setNombre(event.target.value);
  // }

  // function handleEdadChange(event) {
  //   setEdad(event.target.value);
  // }

  const [user, setUser] = useState({
    nombre: "",
    edad: 0,
    idLetra: -1
  })

  function handleInputChange(event){
    setUser({
      ...user,
      [event.target.id]: event.target.value 
    })
  }

  return(
    <form>
      {/* <input id="nombre" placeholder="Nombre" type="text" value={nombre} onChange={handleInputChange}></input>
      <input placeholder="Edad" type="number" value={edad} onChange={handleEdadChange}></input> */}
      <input id="nombre" placeholder="Nombre" type="text" value={user.nombre} onChange={handleInputChange}></input>
      <input id="edad" placeholder="Edad" type="number" value={user.edad} onChange={handleInputChange}></input>

      <select id="idLetra" value={user.idLetra} onChange={handleInputChange}>
        <option value={1}>A</option>
        <option value={2}>B</option>
        <option value={3}>C</option>
      </select>

      <div>
        Nombre: 
        <h1>{user.nombre}</h1>
        Edad:
        <h1>{user.edad}</h1>
        Letra:
        <h1>{user.idLetra}</h1>
       
      </div>
    </form>
  )
}