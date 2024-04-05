import { useEffect, useState } from "react"
import ShowContador from "./ShowContador";

export default function StateExample() {
    const [contador, setContador] = useState(0);
    const [contador2, setContador2] = useState(100)
    //Esto no funciona
    // let contador = 0;

    function handleAdd() {
        // esto no funciona
        // contador++;
        setContador(contador + 1);
    }

    // function handleAdd2() {
    //     setContador2(contador2 + 1);
    // }

    useEffect(() => {
        console.log("renderizado inicial");
    }, [])

    useEffect(() => {
        console.log("renderizado")
    })

    useEffect(() => {
        console.log("renderizado por contador")
    }, [contador])

    return (
        <>  
            <div>{contador}</div>
            {/* <ShowContador contador={contador} /> */}
            <button className="my-button" onClick={handleAdd}>Aumentar</button>
            {/* <button onClick={handleAdd2}>Aumentar Contador 2</button> */}
        </>
    )
}