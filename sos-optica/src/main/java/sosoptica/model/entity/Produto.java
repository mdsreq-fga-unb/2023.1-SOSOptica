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
@Table(name = "produto")
public class Produto {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nome")
    private String nomeProduto;

    @Column(name = "descricao")
    private String descricao;

    @Column(name = "fornecedor")
    private String fornecedor;

    @Column(name = "marca")
    private  String marca;

    @Column(name = "preco_custo")
    private double precoCusto;

    @Column(name = "preco_venda")
    private double precoVenda;

    @Column(name = "qt_De_pecas")
    private int qtDePecas;
}
