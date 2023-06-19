package sosoptica.model.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import sosoptica.model.entity.Venda;

public interface VendaRepository extends PagingAndSortingRepository<Venda, Long> {

  Optional<Venda> findById(Long id);

  @Query("SELECT v FROM Venda v WHERE v.nomeProduto LIKE %?1% OR v.nomeCliente LIKE %?1%")
  List<Venda> findByProdutoOrCliente(String nome);

}
