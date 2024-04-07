import { useEffect, useState } from "react"
import Contador from "./Contador"

export default function Example() {
  //No funciona
  // let contador = 0;

  // function aumentarContador() {
  //   console.log("Aumentar contador");
  //   contador = contador + 1;
  // }


  const [contador, setContador] = useState(1)
  const [contador2, setContador2] = useState(0)

  function aumentarContador() {
    setContador(contador + 1)
    // setContador2(contador2 + 1)
  }

  //Se ejecuta en cada renderizado
  // useEffect(() => {
  //   console.log("Renderizado");
  // })

  //Se ejecuta solo en el renderizado inicial
  useEffect(() => {
    console.log("Renderizado");
    //Buscar datos
  }, [])

  //Se ejecuta en renderizado inicial y cuando cambia contador2
  // useEffect(() => {
  //   console.log("Renderizado");
  // }, [contador2])

  return(
    <>
      Contador 1
      <Contador contador={contador}/>
      Contador 2
      <Contador contador={contador2}/>
      <button onClick={aumentarContador}>Aumentar</button>
    </>
  )
}