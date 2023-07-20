package sosoptica.controller.dto;

import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ClienteDto {

    private String nomeCliente;

    private String emailCliente;

    private String telefoneCliente;

    private LocalDate dataDeNascimentoCliente;

    private String cpf;
}
