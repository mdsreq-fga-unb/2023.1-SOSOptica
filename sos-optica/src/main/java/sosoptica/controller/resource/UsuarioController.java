package sosoptica.controller.resource;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sosoptica.controller.dto.UsuarioDto;
import sosoptica.exception.ErroAutenticacao;
import sosoptica.exception.RegraDeNegocioException;
import sosoptica.model.entity.Usuario;
import sosoptica.service.UsuarioService;

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {


    private UsuarioService usuarioService;

    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @PostMapping("/cadastrar-usuario")
    public ResponseEntity cadastrarUsuario(@RequestBody UsuarioDto usuarioDto){
        Usuario usuario = Usuario.builder()
                                    .nome(usuarioDto.getNome())
                                    .email(usuarioDto.getEmail())
                                    .senha(usuarioDto.getSenha())
                                    .build();

        try{
            Usuario usuarioCadastrado = usuarioService.salvarUsuario(usuario);
            return new ResponseEntity(usuarioCadastrado,HttpStatus.CREATED);
        }catch (RegraDeNegocioException e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }


    @PostMapping("/login")
    public ResponseEntity autenticar(@RequestBody UsuarioDto usuarioDto){
        try {
            Usuario usuarioAutenticado = usuarioService.autenticarUsuario(usuarioDto.getEmail(),usuarioDto.getSenha());
            return ResponseEntity.ok(usuarioAutenticado);
        }catch (ErroAutenticacao erroAutenticacao){
            return ResponseEntity.badRequest().body(erroAutenticacao.getMessage());
        }
    }
}
