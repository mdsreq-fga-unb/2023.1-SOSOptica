package model.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "usuario",schema = "otica")
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class Usuario {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ;

    @Column(name = "nome")
    private String nome;

    @Column(name = "senha")
    private String senha;

    @Column(name = "email")
    private String email;
}
