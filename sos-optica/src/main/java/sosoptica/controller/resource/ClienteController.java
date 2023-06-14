package sosoptica.controller.resource;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sosoptica.controller.dto.ClienteDto;
import sosoptica.exception.RegraDeNegocioException;
import sosoptica.model.entity.Cliente;
import sosoptica.service.ClienteService;

import java.util.List;

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

    @PutMapping("{id}")
    public ResponseEntity atualizarCliente(@PathVariable Long id, @RequestBody ClienteDto clienteDto){
        Cliente cliente = Cliente.builder()
                .nomeCliente(clienteDto.getNomeCliente())
                .emailCliente(clienteDto.getEmailCliente())
                .telefoneCliente(clienteDto.getTelefoneCliente())
                .dataDeNascimentoCliente(clienteDto.getDataDeNascimentoCliente())
                .cpf(clienteDto.getCpf())
                .build();

        try{
            Cliente clienteAtualizado = clienteService.atualizarCliente(id, cliente);
            return ResponseEntity.ok(clienteAtualizado);
        }catch (RegraDeNegocioException e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/listar")
    public ResponseEntity listarTodos(){
        List<Cliente> todosCLientes = clienteService.listarTodosClientes();
        return ResponseEntity.ok(todosCLientes);
    }
    @GetMapping("{id}")
    public ResponseEntity listarClienteId(@PathVariable Long id){
        try{
            Cliente cliente = clienteService.listaClientePeloId(id);
            return ResponseEntity.ok(cliente);
        }catch (RegraDeNegocioException e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }

    }
}
