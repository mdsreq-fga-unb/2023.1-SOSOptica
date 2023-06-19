package sosoptica.controller.resource;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import sosoptica.controller.dto.VendaDto;
import sosoptica.exception.RegraDeNegocioException;
import sosoptica.model.entity.Venda;
import sosoptica.service.VendaService;

@RestController
@RequestMapping("/api/vendas")
public class VendaController {

    private VendaService vendaService;


    public VendaController(VendaService vendaService) {
        this.vendaService = vendaService;

    }

    @PostMapping("/cadastrar")
    public ResponseEntity cadastrarVenda(@RequestBody VendaDto vendaDto){
        Venda venda = Venda.builder()
                .nomeProduto(vendaDto.getNomeProduto())
                .nomeCliente(vendaDto.getNomeCliente())
                .quantidadeProduto(vendaDto.getQuantidadeProduto())
                .valor(vendaDto.getValor())
        .build();

        try {
            Venda novaVenda = vendaService.salvarVenda(venda);
            return new ResponseEntity(novaVenda, HttpStatus.CREATED);
        }catch (RegraDeNegocioException e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }

    }

    @GetMapping("")
    public ResponseEntity listarVendas(@RequestParam(value = "pagina", defaultValue = "0") int pagina,
                                        @RequestParam(value = "tamanho", defaultValue = "10") int tamanho,
                                        @RequestParam(value = "sort", defaultValue = "nomeProduto,ASC") String sort){
        try{
            String[] data = sort.split(",");
            return ResponseEntity.ok(vendaService.listarVendas(pagina, tamanho, data[1], data[0]));
        }catch (RegraDeNegocioException e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/pesquisar")
    public ResponseEntity pesquisarVenda(@RequestParam (name = "nome", required = false) String nome){
        
        try{
            return ResponseEntity.ok(vendaService.pesquisarVenda(nome));
        }catch (RegraDeNegocioException e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }

    }
}
