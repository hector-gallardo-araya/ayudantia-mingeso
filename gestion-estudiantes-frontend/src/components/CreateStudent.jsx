import { useEffect, useState } from "react"
import gestionService from "../services/gestion.service.js";

export default function CreateStudent() {
  const [rut, setRut] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [calle, setCalle] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [idCarrera, setIdCarrera] = useState(-1);

  const [carreras, setCarreras] = useState(null);

  async function fetchCarreras() {
    try{
      const response = await gestionService.getCarreras();
      setCarreras(response.data);
    }catch(error){
      alert("Error al obtener carreras");
    }
  }

  useEffect(() => {
    fetchCarreras();
  }, [])

  async function handleCrearEstudiante(e) {
    e.preventDefault();
    try{
      const response = await gestionService.crearEstudiante({
        rut,
        nombre,
        apellido,
        idCarrera,
        calle,
        ciudad
      })

      setRut("");
      setNombre("");
      setApellido("");
      setCalle("");
      setCiudad("");
      setIdCarrera(-1);

      alert("Estudiante creado con exito");
    }catch(error) {
      console.log(error);
      alert("Error al crear al estudiante.");
    }

  }

  function handleRutChange(event) {
    setRut(event.target.value);
  }

  return (
    <div className="container">
      <h1 className="mb-4">Crear estudiante</h1>
      <form className="border row g-3 px-4">

        <div className="col-12">
          <label htmlFor="rut" className="form-label">RUT</label>
          <input 
            id="rut" 
            type="text" 
            className="form-control" 
            value={rut} 
            onChange={handleRutChange} 
          />          
        </div>

        <div className="col-md-6 mr-md-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input id="nombre" type="text" className="form-control" 
          value={nombre} 
          onChange={e => setNombre(e.target.value)} />
        </div>
    
        <div className="col-md-6">
          <label htmlFor="apellido" className="form-label">Apellido</label>
          <input id="apellido" type="text" className="form-control" value={apellido} onChange={e => setApellido(e.target.value)} />
        </div>
      
        
        <div className="col-md-6">
          <label htmlFor="calle" className="form-label">Calle</label>
          <input id="calle" type="text" className="form-control" value={calle} onChange={e => setCalle(e.target.value)} />
        </div>

        <div className="col-md-6">
          <label htmlFor="ciudad" className="form-label">Ciudad</label>
          <input id="ciudad" type="text" className="form-control" value={ciudad} onChange={e => setCiudad(e.target.value)} />
        </div>

        <div className="col-12">
          <label htmlFor="inputState" className="form-label">Carrera</label>
          <select id="inputState" className="form-select" value={idCarrera} onChange={e => setIdCarrera(e.target.value)}>
            <option>Seleccionar una carrera...</option>
            {
              carreras !== null &&
              (carreras.map((carrera, index) => (
                <option key={index} value={carrera.id}>{carrera.nombre}</option>
              )))              
            }
          </select>
        </div>

        <div className="col-12 mt-4 mb-4" >
          <button type="submit" className="btn btn-primary" onClick={handleCrearEstudiante}>
            Crear Estudiante
          </button>
        </div>
      </form>
    </div>
  )
}