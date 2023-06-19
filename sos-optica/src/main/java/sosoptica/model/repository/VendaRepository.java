package sosoptica.model.repository;

import java.util.Optional;
import org.springframework.data.repository.PagingAndSortingRepository;

import sosoptica.model.entity.Venda;

public interface VendaRepository extends PagingAndSortingRepository<Venda, Long> {

  Optional<Venda> findById(Long id);

}
