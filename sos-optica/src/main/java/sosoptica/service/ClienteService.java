package sosoptica.service;

import sosoptica.model.entity.Cliente;

import java.util.List;

public interface ClienteService {

    Cliente salvarCliente(Cliente cliente);

    Cliente atualizarCliente(Long id, Cliente cliente);

    Cliente listaClientePeloId(Long id);

    List<Cliente> listarTodosClientes();

    void validarCpfCliente(String cpf);
}
