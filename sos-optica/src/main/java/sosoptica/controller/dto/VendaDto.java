package sosoptica.controller.dto;

import lombok.*;

import java.util.Date;


@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class VendaDto {

    String nomeProduto;
    String nomeCliente;
    int quantidadeProduto;
    double valor;
    String dataCadastro;
}
