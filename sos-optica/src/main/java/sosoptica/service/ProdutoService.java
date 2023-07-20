package sosoptica.service;

import org.springframework.transaction.annotation.Transactional;
import sosoptica.model.entity.Cliente;
import sosoptica.model.entity.Produto;

import java.util.List;
import java.util.Optional;

public interface ProdutoService {

    Produto salvarProduto(Produto produto);

    List<Produto> listarTodosProdutos();

    List<Produto> listarProdutosComMenosQuantida();

    Optional<Produto> ObterPorId(Long id);

    List<Produto> pesquisarProdutoPorNome(String nome);
    void excluirProduto(Produto produto);
}


