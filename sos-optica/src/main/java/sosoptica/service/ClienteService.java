package sosoptica.service;

import sosoptica.model.entity.Cliente;

public interface ClienteService {

    Cliente salvarCliente(Cliente cliente);

    Cliente atualizarCliente(Long id, Cliente cliente);

    Cliente listaClientePeloId(Long id);

    void validarCpfCliente(String cpf);
}
