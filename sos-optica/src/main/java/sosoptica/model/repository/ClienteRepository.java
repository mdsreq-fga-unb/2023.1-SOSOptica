package sosoptica.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sosoptica.model.entity.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente,Long> {

    boolean existsByCpf(String cpf);

}
