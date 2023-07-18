package sosoptica.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import sosoptica.model.entity.Produto;
import sosoptica.model.entity.Venda;

import java.util.List;
import java.util.Optional;

public interface ProdutoRepository extends JpaRepository<Produto,Long> {

        List<Produto> findAll();

        Optional<Produto> findById(Long id);

        List<Produto> findByOrderByQtDePecas();

}
