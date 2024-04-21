import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import gestionService from "../services/gestion.service";

export default function StudentView() {
    const {rutEstudiante} = useParams();

    const [estudiante, setEstudiante] = useState(null);

    async function fetchEstudiante() {    
        try{
            const response = await gestionService.getEstudiante(rutEstudiante)            
            setEstudiante(response.data);                        
        }catch(error) {
            alert("Error al obtener a los estudiantes.");
        }
    }

    useEffect(() => {
        fetchEstudiante();
    }, [])

    return(
        <div>
            <h1>Rut estudiante: {rutEstudiante}</h1>
            <div>
                {estudiante ? (
                    <ul>
                        <li>Nombre estudiante: {estudiante.nombre}</li>
                        <li>Apellido estudiante: {estudiante.apellido}</li>
                        <li>Nombre carrera: {estudiante.nombreCarrera}</li>
                        <li>Calle: {estudiante.calle}</li>
                        <li>Ciudad: {estudiante.ciudad}</li>
                    </ul>
                )
                :
                (
                    <p>Cargando...</p>
                )
            
            }
            </div>
        </div>
    )
}