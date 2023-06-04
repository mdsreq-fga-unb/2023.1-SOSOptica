package sosoptica.controller.dto;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ClienteDto {

    private String nomeCliente;

    private String emailCliente;

    private String telefoneCliente;

    private String dataDeNascimentoCliente;

    private String cpf;
}
