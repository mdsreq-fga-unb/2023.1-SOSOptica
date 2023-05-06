package sosoptica.service.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sosoptica.exception.RegraDeNegocioException;
import sosoptica.model.entity.Cliente;
import sosoptica.model.repository.ClienteRepository;
import sosoptica.service.ClienteService;

@Service
public class ClienteServiceImpl implements ClienteService {
    ClienteRepository clienteRepository;

    @Autowired
    public ClienteServiceImpl(ClienteRepository clienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    @Override
    public Cliente salvarCliente(Cliente cliente) {
        validarCpfCliente(cliente.getCpf());
        return clienteRepository.save(cliente);
    }

    @Override
    public void validarCpfCliente(String cpf) {
    boolean existeCpf = clienteRepository.existsByCpf(cpf);

    if(existeCpf){
        throw new RegraDeNegocioException("Já existem um cliente cadastrado com esse CPF");
    }
    }



}
