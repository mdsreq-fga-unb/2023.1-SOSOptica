package sosoptica.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import sosoptica.model.entity.Produto;

import java.util.List;

public interface ProdutoRepository extends JpaRepository<Produto,Long> {

        public List<Produto> findAll();
}
