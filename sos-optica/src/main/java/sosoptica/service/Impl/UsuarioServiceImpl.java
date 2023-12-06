package sosoptica.service.Impl;

import sosoptica.exception.ErroAutenticacao;
import sosoptica.exception.RegraDeNegocioException;
import sosoptica.model.entity.Usuario;
import sosoptica.model.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sosoptica.service.UsuarioService;

import java.util.Optional;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class UsuarioServiceImpl implements UsuarioService {


    UsuarioRepository usuarioRepository;

    @Autowired
    public UsuarioServiceImpl(UsuarioRepository usuarioRepository) {
        super();
        this.usuarioRepository = usuarioRepository;
    }

    @Override
    public Usuario autenticarUsuario(String email, String senha) {
        Optional<Usuario> usuario = usuarioRepository.findByEmail(email);

        if(!usuario.isPresent()){
            throw new ErroAutenticacao("Usuário não encontrado para o email informado");
        }

        if (!usuario.get().getSenha().equals(senha)){
            throw new ErroAutenticacao("Senha não encontrada");
        }
        return usuario.get();
    }

    @Override
    public Usuario salvarUsuario(Usuario usuario) {
        validarEmail(usuario.getEmail());
        return usuarioRepository.save(usuario);
    }

    @Override
    public void validarEmail(String email) {
        boolean existe = usuarioRepository.existsByEmail(email);

        if (existe){
            throw new RegraDeNegocioException("Ja existe este email cadastrado");
        }
    }

    @Override
    public boolean validaFormatoEmail(String email) {
        if (Optional.ofNullable(email).isEmpty()) {
            return false;
        }
        String EMAIL_REGEX = "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$";


        Pattern pattern = Pattern.compile(EMAIL_REGEX);
        Matcher matcher = pattern.matcher(email);
        return matcher.matches();

    }

}
