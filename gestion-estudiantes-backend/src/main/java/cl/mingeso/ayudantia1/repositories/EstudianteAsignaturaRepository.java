package cl.mingeso.ayudantia1.repositories;

import cl.mingeso.ayudantia1.entities.EstudianteAsignatura;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface EstudianteAsignaturaRepository extends JpaRepository<EstudianteAsignatura, Integer> {
}
