package sosoptica.controller.dto;


import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProdutoDto {

    private String nomeProduto;
    private String descricao;
    private String fornecedor;
    private String marca;
    private double precoCusto;
    private double precoVenda;
    private int qtDePecas;
}
