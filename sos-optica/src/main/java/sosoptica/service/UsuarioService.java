package sosoptica.service;

import sosoptica.model.entity.Usuario;

public interface UsuarioService {

    Usuario autenticarUsuario(String email, String senha);

    Usuario salvarUsuario(Usuario usuario);

    void validarEmail(String email);
    boolean validaFormatoEmail(String email);
}
