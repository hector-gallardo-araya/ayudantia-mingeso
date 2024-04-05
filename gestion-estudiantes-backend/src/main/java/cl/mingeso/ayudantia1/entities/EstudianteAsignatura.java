package cl.mingeso.ayudantia1.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "estudiante_asignatura")
@Getter
@Setter
public class EstudianteAsignatura {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    Integer id;

    @Column(name = "rut_estudiante")
    String rutEstudiante;

    @Column(name = "id_asignatura")
    Integer idAsignatura;
}
