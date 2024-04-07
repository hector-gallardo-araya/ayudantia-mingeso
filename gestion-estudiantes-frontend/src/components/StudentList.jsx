import { useEffect, useState } from "react"
import gestionService from "../services/gestion.service.js";
import { Link } from "react-router-dom";

export default function StudentList() {
  const [estudiantes, setEstudiantes] = useState([]);

  async function fetchEstudiantes() {
    try{      
      const response = await gestionService.getEstudiantes();  
      setEstudiantes(response.data);
    }catch(error) {
      alert("Error al obtener a los estudiantes.");
    }
  }
  
  useEffect(() => {
    fetchEstudiantes();
  }, [])

  return (
    <div className="container">
      <h1>Lista estudiantes</h1>
  
      <table className="table">
        <thead>
          <tr>
            <th scope="col">RUT</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">ID Carrera</th>
            <th scope="col">Acción</th>
          </tr>
        </thead>
        <tbody>        
          {                                 
            estudiantes.map((estudiante, index) => (
              <tr key={index}>
                <td>{estudiante.rut}</td>
                <td>{estudiante.nombre}</td>
                <td>{estudiante.apellido}</td>
                <td>{estudiante.idCarrera}</td>
                <td>
                  <Link to={`/estudiantes/${estudiante.rut}`}>Ver</Link>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>   
  )
}