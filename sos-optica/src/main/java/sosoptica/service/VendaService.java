package sosoptica.service;

import org.springframework.data.domain.Page;
import sosoptica.model.entity.Venda;

public interface VendaService {

    Venda salvarVenda(Venda venda);

    Page<Venda> listarVendas(int pagina, int tamanho);
}
