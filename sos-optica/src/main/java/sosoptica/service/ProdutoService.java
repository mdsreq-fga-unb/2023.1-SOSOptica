package sosoptica.service;

import sosoptica.model.entity.Produto;

import java.util.List;

public interface ProdutoService {

    Produto salvarProduto(Produto produto);

    List<Produto> listarTodosProdutos();
}
