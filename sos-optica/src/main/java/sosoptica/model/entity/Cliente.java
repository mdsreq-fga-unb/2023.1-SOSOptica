package sosoptica.model.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

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
    private String emailCliente;

    @Column(name = "telefone")
    private String telefoneCliente;

    @Column(name = "data_de_nascimento")
    @JsonFormat(pattern="dd/MM/yyyy")
    private LocalDate dataDeNascimentoCliente;

    @Column(name = "cpf")
    private String cpf;


}
