import { useEffect, useState } from "react"

export default function Contador() {
    const [contador, setContador] = useState(0);
    const [contador2, setContador2] = useState(0);
    // let contador = 0;

    function aumentarContador() {
        // contador++;
        setContador(contador + 1);
    }

    useEffect(() => {
        console.log("Renderizado INICIAL");
    }, [contador2])

    return(
        <div>
            <p>{contador}</p>
            <button onClick={aumentarContador}>Aumentar</button>
        </div>
    )
}