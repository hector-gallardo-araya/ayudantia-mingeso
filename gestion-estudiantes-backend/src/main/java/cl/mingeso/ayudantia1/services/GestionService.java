package cl.mingeso.ayudantia1.services;

import cl.mingeso.ayudantia1.dtos.CrearEstudiante;
import cl.mingeso.ayudantia1.dtos.IEstudianteDTO;
import cl.mingeso.ayudantia1.entities.*;
import cl.mingeso.ayudantia1.repositories.*;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class GestionService {

    EstudianteRepository estudianteRepository;
    DireccionRepository direccionRepository;
    EstudianteAsignaturaRepository estudianteAsignaturaRepository;
    AsignaturaRepository asignaturaRepository;
    CarreraRepository carreraRepository;

    @Autowired
    public GestionService(EstudianteRepository estudianteRepository,
                          DireccionRepository direccionRepository,
                          EstudianteAsignaturaRepository estudianteAsignaturaRepository,
                          AsignaturaRepository asignaturaRepository,
                          CarreraRepository carreraRepository) {
        this.estudianteRepository = estudianteRepository;
        this.direccionRepository = direccionRepository;
        this.estudianteAsignaturaRepository = estudianteAsignaturaRepository;
        this.asignaturaRepository = asignaturaRepository;
        this.carreraRepository = carreraRepository;
    }

    public List<Estudiante> getEstudiantes() {
        return estudianteRepository.findAll();
    }


    //Se usa la anotación @Transactional porque permite que el
    //método se ejecute de manera atómica, esto quiere decir que
    //si se logra guardar la dirección, pero se falla al guardar al
    //estudiante, la base de datos volvería a su estado original
    //(sin el estudiante y sin la dirección), permitiendo así
    //evitar inconsistencias ante cualquier fallo en alguna
    //operación.
    @Transactional
    public Estudiante saveEstudiante(CrearEstudiante body) {
        Estudiante nuevoEstudiante = new Estudiante();
        nuevoEstudiante.setRut(body.getRut());
        nuevoEstudiante.setNombre(body.getNombre());
        nuevoEstudiante.setApellido(body.getApellido());
        nuevoEstudiante.setIdCarrera(body.getIdCarrera());

        Direccion direccion = new Direccion();
        direccion.setCalle(body.getCalle());
        direccion.setCiudad(body.getCiudad());
        direccion = direccionRepository.save(direccion);

        nuevoEstudiante.setIdDireccion(direccion.getId());
        return estudianteRepository.save(nuevoEstudiante);

    }

    public IEstudianteDTO getEstudiante(String rutEstudiante) {

        IEstudianteDTO estudiante = estudianteRepository.findEstudianteByRut(rutEstudiante);
        System.out.println(estudiante);
        if(estudiante == null) throw new RuntimeException("El estudiante " + rutEstudiante + " no existe.");

        return estudiante;
    }

    public EstudianteAsignatura addAsignatura(String rutEstudiante, Integer idAsignatura) {
        EstudianteAsignatura estudianteAsignatura = new EstudianteAsignatura();

        estudianteAsignatura.setRutEstudiante(rutEstudiante);
        estudianteAsignatura.setIdAsignatura(idAsignatura);

        return estudianteAsignaturaRepository.save(estudianteAsignatura);
    }

    public void addAsignaturas(String rutEstudiante, Integer[] idsAsignaturas) {

        List<EstudianteAsignatura> estudianteAsignaturas = new ArrayList<>();
        List<Integer> idsAsignaturasCarrera = asignaturaRepository.findIdsAsignaturasByCarreraEstudiante(rutEstudiante);

        for(Integer idAsignatura : idsAsignaturas) {
            EstudianteAsignatura estudianteAsignatura = new EstudianteAsignatura();
            estudianteAsignatura.setRutEstudiante(rutEstudiante);

            if(!idsAsignaturasCarrera.contains(idAsignatura)) throw new RuntimeException("Una asignatura no corresponde a su carrera o no existe.");

            estudianteAsignatura.setIdAsignatura(idAsignatura);
            estudianteAsignaturas.add(estudianteAsignatura);
        }

        estudianteAsignaturaRepository.saveAll(estudianteAsignaturas);
    }

    public List<Estudiante> getEstudiantesPorCarrera(String nombreCarrera) {
        return estudianteRepository.findEstudiantesByNombreCarrera(nombreCarrera);
    }

    public Estudiante updateEstudiante(String rutEstudiante, Estudiante nuevoEstudiante) {
        Optional<Estudiante> estudianteOptional = estudianteRepository.findById(rutEstudiante);

        if(estudianteOptional.isEmpty()) throw new RuntimeException("El estudiante " + rutEstudiante + " no existe.");

        Estudiante estudiante = estudianteOptional.get();

        if(nuevoEstudiante.getNombre() != null){
            estudiante.setNombre(nuevoEstudiante.getNombre());
        }

        if(nuevoEstudiante.getApellido() != null){
            estudiante.setApellido(nuevoEstudiante.getApellido());
        }

        if(nuevoEstudiante.getIdCarrera() != null){
            estudiante.setIdCarrera(nuevoEstudiante.getIdCarrera());
        }

        if(nuevoEstudiante.getIdDireccion() != null){
            estudiante.setIdDireccion(nuevoEstudiante.getIdDireccion());
        }

        return estudianteRepository.save(estudiante);
    }

    //Si no se configura la opción de cascada en la base de datos,
    //se debe eliminar de la tabla intermedia también.
    //Otro ejemplo de por qué mapear las relaciones resulta ventajoso.
    public void deleteAsignatura(Integer idAsignatura) {
        asignaturaRepository.deleteById(idAsignatura);
    }

    public List<Carrera> getCarreras() {
        return carreraRepository.findAll();
    }

    public List<Asignatura> getAsignaturasPorCarrera(Integer idCarrera) {
        return asignaturaRepository.findAsignaturasByIdCarrera(idCarrera);
    }
}
