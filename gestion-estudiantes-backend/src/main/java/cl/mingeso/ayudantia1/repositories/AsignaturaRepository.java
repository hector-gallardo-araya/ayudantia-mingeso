package cl.mingeso.ayudantia1.repositories;

import cl.mingeso.ayudantia1.entities.Asignatura;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AsignaturaRepository extends JpaRepository<Asignatura, Integer> {
    @Query(
        "SELECT a.id " +
        "FROM Asignatura a " +
        "JOIN Carrera c " +
        "ON a.idCarrera = c.id " +
        "AND c.id = " +
        "(SELECT e.idCarrera " +
        "FROM Estudiante e " +
        "WHERE e.rut = :rutEstudiante) "
    )
    List<Integer> findIdsAsignaturasByCarreraEstudiante(String rutEstudiante);

    List<Asignatura> findAsignaturasByIdCarrera(Integer idCarrera);
}
