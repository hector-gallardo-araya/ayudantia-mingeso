package cl.mingeso.ayudantia1.controllers;

import cl.mingeso.ayudantia1.dtos.AniadirAsignaturas;
import cl.mingeso.ayudantia1.dtos.CrearEstudiante;
import cl.mingeso.ayudantia1.dtos.IEstudianteDTO;
import cl.mingeso.ayudantia1.entities.Asignatura;
import cl.mingeso.ayudantia1.entities.Carrera;
import cl.mingeso.ayudantia1.entities.Estudiante;
import cl.mingeso.ayudantia1.entities.EstudianteAsignatura;
import cl.mingeso.ayudantia1.services.GestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class GestionController {

    GestionService gestionService;

    @Autowired
    public GestionController(GestionService gestionService) {
        this.gestionService = gestionService;
    }

    @GetMapping("/estudiantes")
    List<Estudiante> getEstudiantes() {
        return gestionService.getEstudiantes();
    }

    @GetMapping("/estudiantes/{rutEstudiante}")
    IEstudianteDTO getEstudiante(@PathVariable String rutEstudiante) {
        return gestionService.getEstudiante(rutEstudiante);
    }

    @PostMapping("/estudiantes")
    Estudiante createEstudiante(@RequestBody CrearEstudiante body) {
        System.out.println(body);
        return gestionService.saveEstudiante(body);
    }

    @PostMapping("/estudiantes/{rutEstudiante}/asignaturas/{idAsignatura}")
    ResponseEntity<EstudianteAsignatura> addAsignatura(@PathVariable String rutEstudiante,
                                                       @PathVariable Integer idAsignatura) {
        return new ResponseEntity<>(
                gestionService.addAsignatura(rutEstudiante, idAsignatura),
                HttpStatus.OK
        );
    }

    //La anotación @RequestMapping permite mapear cualquier tipo de consulta,
    //definiendo el verbo, el path, los parámetros, etc.
    //En el fondo, la anotación de abajo es equivalente a:
    //@GetMapping("/estudiantes")
    @RequestMapping(method = RequestMethod.GET, path = "/estudiantes", params = {"nombreCarrera"})
    List<Estudiante> getEstudiantesPorCarrera(@RequestParam String nombreCarrera) {
        return gestionService.getEstudiantesPorCarrera(nombreCarrera);
    }

    @PutMapping("/estudiantes/{rutEstudiante}")
    Estudiante updateEstudiante(@PathVariable String rutEstudiante,
                                @RequestBody Estudiante nuevoEstudiante) {
        return gestionService.updateEstudiante(rutEstudiante, nuevoEstudiante);
    }

    @DeleteMapping("/asignaturas/{idAsignatura}")
    ResponseEntity<String> deleteAsignatura(@PathVariable Integer idAsignatura) {
        gestionService.deleteAsignatura(idAsignatura);
        return new ResponseEntity<>(
                "Asignatura " + idAsignatura + " eliminada con exito.",
                HttpStatus.OK
        );
    }

    @GetMapping("/carreras")
    List<Carrera> getCarreras() {
        return gestionService.getCarreras();
    }

    @PostMapping("/estudiantes/{rutEstudiante}")
    String addAsignaturas(@PathVariable String rutEstudiante,
                          @RequestBody AniadirAsignaturas asignaturas) {
        gestionService.addAsignaturas(rutEstudiante, asignaturas.getIdsAsignaturas());
        return "Asignaturas añadidas con éxito.";
    }

    @GetMapping("/asignaturas")
    List<Asignatura> getAsignaturasPorCarrera(@RequestParam("idCarrera") Integer idCarrera) {
        return gestionService.getAsignaturasPorCarrera(idCarrera);
    }
}
