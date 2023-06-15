package sosoptica.controller.dto;

import lombok.*;

import javax.persistence.Column;

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
