package sosoptica.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sosoptica.model.entity.Produto;

public interface ProdutoRepository extends JpaRepository<Produto,Long> {

}
