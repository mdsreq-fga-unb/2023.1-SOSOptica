package sosoptica.controller.dto;

import lombok.*;

import javax.persistence.Column;
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ClienteDto {

    private String nomeCliente;

    private String emailCLiente;

    private String telefoneCliente;

    private String dataDeNascimentoCliente;

    private String cpf;
}
