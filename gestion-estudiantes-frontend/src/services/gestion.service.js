import axios from "axios";

const ESTUDIANTES_API_URL = "http://localhost:8090/api/estudiantes";
const CARRERAS_API_URL = "http://localhost:8090/api/carreras";


const crearEstudiante = (estudiante) => {
  return axios.post(ESTUDIANTES_API_URL, estudiante);
}

function getEstudiantes() {
  return axios.get(ESTUDIANTES_API_URL)
}

function getEstudiante(rutEstudiante) {
  return axios.get(`${ESTUDIANTES_API_URL}/${rutEstudiante}`)
}

function getCarreras() {
  return axios.get(CARRERAS_API_URL);
}

export default {crearEstudiante, getEstudiante, getEstudiantes, getCarreras}