package sosoptica.controller.resource;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sosoptica.controller.dto.ClienteDto;
import sosoptica.exception.RegraDeNegocioException;
import sosoptica.model.entity.Cliente;
import sosoptica.service.ClienteService;

@RestController
@RequestMapping("/api/clientes")
public class ClienteController {

    private ClienteService clienteService;

    public ClienteController(ClienteService clienteService) {
        this.clienteService = clienteService;
    }

    @PostMapping
    public ResponseEntity cadastrarCliente(@RequestBody ClienteDto clienteDto){
        Cliente cliente = Cliente.builder()
                .nomeCliente(clienteDto.getNomeCliente())
                .emailCliente(clienteDto.getEmailCliente())
                .telefoneCliente(clienteDto.getTelefoneCliente())
                .dataDeNascimentoCliente(clienteDto.getDataDeNascimentoCliente())
                .cpf(clienteDto.getCpf())
                .build();

        try{
            Cliente novoCliente = clienteService.salvarCliente(cliente);
            return new ResponseEntity(novoCliente, HttpStatus.CREATED);

        }catch (RegraDeNegocioException e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }

    }
}
