package cl.mingeso.ayudantia1.dtos;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CrearEstudiante {
    String rut;
    String nombre;
    String apellido;
    Integer idCarrera;
    String calle;
    String ciudad;
}
