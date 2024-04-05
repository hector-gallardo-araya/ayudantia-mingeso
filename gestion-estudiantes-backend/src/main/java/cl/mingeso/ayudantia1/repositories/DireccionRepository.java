package cl.mingeso.ayudantia1.repositories;

import cl.mingeso.ayudantia1.entities.Direccion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DireccionRepository extends JpaRepository<Direccion, Integer> {
}
