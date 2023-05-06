package sosoptica.model.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
@Entity
@Table(name = "cliente")
public class Cliente {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nome")
    private String nomeCliente;

    @Column(name = "email")
    private String emailCLiente;

    @Column(name = "telefone")
    private String telefoneCliente;

    @Column(name = "data_de_nascimento")
    private String dataDeNascimentoCliente;

    @Column(name = "cpf")
    private String cpf;


}
