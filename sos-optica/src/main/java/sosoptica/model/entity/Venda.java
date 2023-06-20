package sosoptica.model.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
@Entity
@Table(name = "vendas")
public class Venda {

        @Column
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id ;

        @Column(name = "nome_produto")
        String nomeProduto;

        @Column(name = "nome_cliente")
        String nomeCliente;

        @Column(name = "quatidade_produto")
        int quantidadeProduto;

        @Column(name = "valor")
        double valor;

        @Column(name = "data_cadastro")
        String dataCadastro;

}
