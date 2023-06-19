package sosoptica.service;

import java.util.List;
import org.springframework.data.domain.Page;
import sosoptica.model.entity.Venda;

public interface VendaService {

    Venda salvarVenda(Venda venda);

    Page<Venda> listarVendas(int pagina, int tamanho, String sortDirecao, String sortPropriedade);

    List<Venda> pesquisarVenda(String nomeProduto);
}
