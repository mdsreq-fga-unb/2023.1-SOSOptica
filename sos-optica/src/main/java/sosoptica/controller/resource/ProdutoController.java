package sosoptica.controller.resource;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sosoptica.controller.dto.ProdutoDto;
import sosoptica.exception.RegraDeNegocioException;
import sosoptica.model.entity.Produto;
import sosoptica.service.ProdutoService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/produtos")
public class ProdutoController {

    private ProdutoService produtoService;

    public ProdutoController(ProdutoService produtoService) {
        this.produtoService = produtoService;
    }

    @PostMapping("/cadastrarProduto")
    public ResponseEntity cadastrarProduto(@RequestBody ProdutoDto produtoDto){
        Produto produto = Produto.builder()
                .nomeProduto(produtoDto.getNomeProduto())
                .fornecedor(produtoDto.getFornecedor())
                .descricao(produtoDto.getDescricao())
                .marca(produtoDto.getMarca())
                .precoCusto(produtoDto.getPrecoCusto())
                .precoVenda(produtoDto.getPrecoVenda())
                .qtDePecas(produtoDto.getQtDePecas())
                .build();

        try{
            Produto novoProduto = produtoService.salvarProduto(produto);
            return new ResponseEntity(novoProduto, HttpStatus.CREATED);
        }catch (RegraDeNegocioException e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
    @GetMapping("/listar-produtos")
    public ResponseEntity listarTodosProdutos(){
        List<Produto> produtos = produtoService.listarTodosProdutos();
        return ResponseEntity.ok(produtos);
    }

    @DeleteMapping("/{id}")
    public Optional<ResponseEntity> deletarProduto(@PathVariable("id") Long id){
        return Optional.of(produtoService.ObterPorId(id).map(p -> {
            produtoService.excluirProduto(p);
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        }).orElseGet(() ->
                new ResponseEntity("Produto Não encontrado na base de dados", HttpStatus.BAD_REQUEST)));
    }

    @GetMapping("listar-estoque")
    public ResponseEntity listarProdutosComMenosQuantidade(){
        List<Produto> produtosComMenosEstoque = produtoService.listarProdutosComMenosQuantida();
        return ResponseEntity.ok(produtosComMenosEstoque);
    }

    @GetMapping("/pesquisar")
    public ResponseEntity pesquisarProdutoPorNome(@RequestParam(name = "nome",required = false) String nome){
        List<Produto> nomes = produtoService.pesquisarProdutoPorNome(nome);
        return ResponseEntity.ok(nomes);

    }
}
