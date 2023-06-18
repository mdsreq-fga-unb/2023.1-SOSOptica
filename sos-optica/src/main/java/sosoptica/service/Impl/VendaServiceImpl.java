package sosoptica.service.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import sosoptica.model.entity.Venda;
import sosoptica.model.repository.VendaRepository;
import sosoptica.service.VendaService;
@Service
public class VendaServiceImpl implements VendaService {

    VendaRepository vendaRepository;

    @Autowired
    public VendaServiceImpl(VendaRepository vendaRepository){
        super();
        this.vendaRepository = vendaRepository;
    }


    @Override
    public Venda salvarVenda(Venda venda) {
        return vendaRepository.save(venda);
    }

    @Override
    public Page<Venda> listarVendas(int pagina, int tamanho, String sortDirecao, String sortPropriedade) {
        Sort sort = sortDirecao.equalsIgnoreCase(Sort.Direction.ASC.name()) ? Sort.by(sortPropriedade).ascending() :
                Sort.by(sortPropriedade).descending();
        Page<Venda> vendas = vendaRepository.findAll(PageRequest.of(pagina,tamanho, sort));

        return vendas;
    }
}
