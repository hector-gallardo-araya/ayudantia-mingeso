package cl.mingeso.ayudantia1.repositories;

import cl.mingeso.ayudantia1.dtos.IEstudianteDTO;
import cl.mingeso.ayudantia1.entities.Estudiante;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EstudianteRepository extends JpaRepository<Estudiante, String> {
    @Query("SELECT e FROM Estudiante e JOIN Carrera c ON e.idCarrera = c.id WHERE c.nombre = :nombreCarrera")
    List<Estudiante> findEstudiantesByNombreCarrera(@Param("nombreCarrera") String nombreCarrera);

    @Query(
            "SELECT e.rut AS rut, " +
                    "e.nombre AS nombre, " +
                    "e.apellido AS apellido, " +
                    "c.nombre AS nombreCarrera, " +
                    "d.calle AS calle, " +
                    "d.ciudad AS ciudad " +
            "FROM Estudiante e " +
            "JOIN Carrera c " +
            "ON e.idCarrera = c.id " +
            "JOIN Direccion d " +
            "ON e.idDireccion = d.id " +
            "WHERE e.rut = :rut"
    )
    IEstudianteDTO findEstudianteByRut(@Param("rut") String rut);
}
