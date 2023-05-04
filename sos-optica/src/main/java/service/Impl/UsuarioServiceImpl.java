package service.Impl;

import exception.ErroAutenticacao;
import exception.RegraDeNegocioException;
import model.entity.Usuario;
import model.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import service.UsuarioService;

import java.util.Optional;

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
}
