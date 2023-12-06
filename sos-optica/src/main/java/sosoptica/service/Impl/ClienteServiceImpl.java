package sosoptica.service.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sosoptica.exception.RegraDeNegocioException;
import sosoptica.model.entity.Cliente;
import sosoptica.model.repository.ClienteRepository;
import sosoptica.service.ClienteService;

import java.util.List;
import java.util.Optional;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

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

    @Override
    public List<Cliente> pesquisarClientePorCpf(String cpf) {
        return clienteRepository.findByCpfLike("%" + cpf + "%");
    }

    @Override
    public List<Cliente> pesquisarClientePorNome(String nome){
        return clienteRepository.findByNomeClienteLike("%"+nome+"%");
    }
    @Override
    public boolean validarFormatoCpfCliente(String cpf) {
        String CPF_REGEX_SEM_PONTUACAO = "^\\d{11}$";
        String CPF_REGEX = "^\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}$";

        if (Optional.ofNullable(cpf).isEmpty()) {
            return false;
        }
        if (cpf.length() == 11) {
            Pattern pattern = Pattern.compile(CPF_REGEX_SEM_PONTUACAO);
            Matcher matcher = pattern.matcher(cpf);
            return matcher.matches();
        }else if(cpf.length() == 14){
            Pattern pattern = Pattern.compile(CPF_REGEX);
            Matcher matcher = pattern.matcher(cpf);
            return matcher.matches();
        }


        return false;
    }


}
