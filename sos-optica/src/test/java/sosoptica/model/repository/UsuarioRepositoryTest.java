package sosoptica.model.repository;

import org.springframework.boot.test.context.SpringBootTest;
import sosoptica.model.entity.Usuario;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.junit.jupiter.SpringExtension;


@ExtendWith(SpringExtension.class)
@SpringBootTest
public class UsuarioRepositoryTest {

    @Autowired
    UsuarioRepository usuarioRepository;


    @Test
    public void deveVerificarSeEmailExiste(){
        Usuario usuario = Usuario.builder().nome("admin").senha("1234").email("admin@gmail.com").build();
        usuarioRepository.save(usuario);

        boolean existe = usuarioRepository.existsByEmail("admin@gmail.com");

        Assertions.assertThat(existe).isTrue();
    }
}
