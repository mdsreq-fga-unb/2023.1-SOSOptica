package sosoptica.service.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sosoptica.exception.RegraDeNegocioException;
import sosoptica.model.entity.Cliente;
import sosoptica.model.repository.ClienteRepository;
import sosoptica.service.ClienteService;

import java.util.List;

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
    public Cliente atualizarCliente(Long id, Cliente cliente) {
        Cliente clienteAtualizado = clienteRepository.findById(id)
                .orElseThrow(() -> new RegraDeNegocioException("Cliente não encontrado"));

        if(!cliente.getCpf().equals(clienteAtualizado.getCpf())){
            validarCpfCliente(cliente.getCpf());
        }

        if(cliente.getNomeCliente() != null){
            clienteAtualizado.setNomeCliente(cliente.getNomeCliente());
        }

        if(cliente.getEmailCliente() != null){
            clienteAtualizado.setEmailCliente(cliente.getEmailCliente());
        }

        if(cliente.getTelefoneCliente() != null){
            clienteAtualizado.setTelefoneCliente(cliente.getTelefoneCliente());
        }

        if(cliente.getDataDeNascimentoCliente() != null){
            clienteAtualizado.setDataDeNascimentoCliente(cliente.getDataDeNascimentoCliente());
        }

        if(cliente.getCpf() != null){
            clienteAtualizado.setCpf(cliente.getCpf());
        }

        return clienteRepository.save(clienteAtualizado);
    }

    @Override
    public Cliente listaClientePeloId(Long id) {
        return clienteRepository.findById(id)
                .orElseThrow(() -> new RegraDeNegocioException("Cliente não encontrado"));
    }

    @Override
    public void validarCpfCliente(String cpf) {
    boolean existeCpf = clienteRepository.existsByCpf(cpf);

    if(existeCpf){
        throw new RegraDeNegocioException("Já existem um cliente cadastrado com esse CPF");
    }
    }

    @Override
    @Transactional(readOnly = true)
    public List<Cliente> listarTodosClientes() {
        return clienteRepository.findAll();
    }
}
