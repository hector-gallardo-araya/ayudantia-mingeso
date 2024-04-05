package cl.mingeso.ayudantia1.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "asignatura")
@Getter
@Setter
public class Asignatura {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    Integer id;

    @Column(name = "nombre")
    String nombre;

    @Column(name = "id_carrera")
    Integer idCarrera;
}
