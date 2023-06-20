package sosoptica.service.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sosoptica.model.entity.Produto;
import sosoptica.model.repository.ProdutoRepository;
import sosoptica.service.ProdutoService;

import java.util.List;

@Service
public class ProdutoServiceImpl implements ProdutoService{

    ProdutoRepository produtoRepository;

    @Autowired
    public ProdutoServiceImpl(ProdutoRepository produtoRepository) {
        this.produtoRepository = produtoRepository;
    }

    @Override
    public Produto salvarProduto(Produto produto) {
        return produtoRepository.save(produto);
    }

    @Override
    public List<Produto> listarTodosProdutos() {
        return produtoRepository.findAll();
    }

    @Override
    public List<Produto> listarProdutosComMenosQuantida() {
        return produtoRepository.findByOrderByQtDePecas();
    }
}
