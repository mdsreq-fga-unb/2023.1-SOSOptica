package sosoptica.service.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sosoptica.model.entity.Produto;
import sosoptica.model.repository.ProdutoRepository;
import sosoptica.service.ProdutoService;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

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

    @Override
    public Optional<Produto> ObterPorId(Long id) {
        return produtoRepository.findById(id);
    }

    @Override
    @Transactional
    public void excluirProduto(Produto produto) {
        Objects.requireNonNull(produto.getId());
        produtoRepository.delete(produto);
    }
}
