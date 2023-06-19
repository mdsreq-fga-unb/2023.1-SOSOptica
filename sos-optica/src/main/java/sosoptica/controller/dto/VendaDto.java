package sosoptica.controller.dto;

import lombok.*;


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
}
