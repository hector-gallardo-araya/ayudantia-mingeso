package cl.mingeso.ayudantia1.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "estudiante")
@Getter
@Setter
public class Estudiante {
    @Id
    @Column(name = "rut")
    String rut;

    @Column(name = "nombre")
    String nombre;

    @Column(name = "apellido")
    String apellido;

    @Column(name = "id_carrera")
    Integer idCarrera;

    @Column(name = "id_direccion")
    Integer idDireccion;

}
