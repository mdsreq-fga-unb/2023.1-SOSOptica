package sosoptica.service.Impl;

import org.springframework.beans.factory.annotation.Autowired;
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
}
