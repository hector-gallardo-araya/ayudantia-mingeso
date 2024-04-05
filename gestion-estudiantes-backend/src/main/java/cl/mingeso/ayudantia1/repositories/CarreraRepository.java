package cl.mingeso.ayudantia1.repositories;

import cl.mingeso.ayudantia1.entities.Carrera;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarreraRepository extends JpaRepository<Carrera, Integer> {
}
