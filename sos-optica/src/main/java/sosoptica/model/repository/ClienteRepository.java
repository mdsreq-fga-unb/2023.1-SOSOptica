package sosoptica.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sosoptica.model.entity.Cliente;

import java.util.List;

public interface ClienteRepository extends JpaRepository<Cliente,Long> {
    boolean existsByCpf(String cpf);

    List<Cliente> findAll();

    List<Cliente> findByCpfLike(String cpf);

}
