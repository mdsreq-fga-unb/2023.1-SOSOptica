package sosoptica.service;

import sosoptica.model.entity.Cliente;

public interface ClienteService {

    Cliente salvarCliente(Cliente cliente);

    void validarCpfCliente(String cpf);
}
