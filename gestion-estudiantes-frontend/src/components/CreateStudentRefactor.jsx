import { useEffect, useState } from "react"
import gestionService from "../services/gestion.service.js";

export default function CreateStudentRefactor() {
  const [student, setStudent] = useState({
    rut: "",
    nombre: "",
    apellido: "",
    calle: "",
    ciudad: "",
    idCarrera: -1,
  })

  const [carreers, setCarreers] = useState(null);

  async function fetchCarreers() {
    try{
      const response = await gestionService.getCarreras();
      setCarreers(response.data);
    }catch(error) {
      alert("Hubo un error al obtener las carreras.");
    }
  }

  useEffect(() => {
    fetchCarreers();
  }, [])

  async function createStudentHandler(event) {
    event.preventDefault();
    try{      
      const response = await gestionService.crearEstudiante(student);

      //Reinicio los estados (reinicio los campos del formulario)
      setStudent({
        rut: "",
        nombre: "",
        apellido: "",
        calle: "",
        ciudad: "",
        idCarrera: -1
      })

      alert("Estudiante " + response.data.rut + " creado con exito");
    }catch(error) {      
      alert("Error al crear al estudiante.");
    }
  }

  function onChangeStudentHandler(event) {
    setStudent({      
      ...student,
      [event.target.id]: event.target.value,
    })
  }

  return (
    <div className="container">
      <h1 className="mb-4">Crear estudiante</h1>
      <form className="border row g-3 px-4">
        <div className="col-12">
          <label 
            htmlFor="rut" 
            className="form-label"
          >
            RUT
          </label>
          <input 
            id="rut" 
            type="text" 
            className="form-control" 
            value={student.rut} 
            onChange={onChangeStudentHandler} 
          />          
        </div>

        <div className="col-md-6 mr-md-3">
          <label 
            htmlFor="nombre" 
            className="form-label"
          >
            Nombre
          </label>
          <input 
            id="nombre" 
            type="text" 
            className="form-control" 
            value={student.nombre} 
            onChange={onChangeStudentHandler} 
          />
        </div>
    
        <div className="col-md-6">
          <label 
            htmlFor="apellido" 
            className="form-label"
          >
            Apellido
          </label>
          <input 
            id="apellido" 
            type="text" 
            className="form-control" 
            value={student.apellido} 
            onChange={onChangeStudentHandler} 
          />
        </div>
      
        
        <div className="col-md-6">
          <label 
            htmlFor="calle" 
            className="form-label"
          >
            Calle
          </label>
          <input 
            id="calle" 
            type="text" 
            className="form-control" 
            value={student.calle} 
            onChange={onChangeStudentHandler} 
          />
        </div>

        <div className="col-md-6">
          <label 
            htmlFor="ciudad" 
            className="form-label"
          >
            Ciudad
          </label>
          <input 
            id="ciudad" 
            type="text" 
            className="form-control" 
            value={student.ciudad} 
            onChange={onChangeStudentHandler} />
        </div>

        <div className="col-12">
          <label 
            htmlFor="idCarrera" 
            className="form-label"
          >
            Carrera
          </label>
          <select 
            id="idCarrera" 
            className="form-select" 
            value={student.idCarrera} 
            onChange={onChangeStudentHandler}>
            <option>Seleccionar una carrera...</option>
            {
              carreers !== null &&
              (
                carreers.map((carreer, index) => (
                  <option 
                    key={index} 
                    value={carreer.id}
                  >
                    {carreer.nombre}
                  </option>
                ))
              )              
            }
          </select>
        </div>

        <div className="col-12 mt-4 mb-4" >
          <button 
            type="submit" 
            className="btn btn-primary" 
            onClick={createStudentHandler}
          >
            Crear Estudiante
          </button>
        </div>
      </form>
    </div>
  )
}