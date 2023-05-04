package service.impl;

import model.entity.Usuario;
import model.repository.UsuarioRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit.jupiter.SpringExtension;


@ExtendWith(SpringExtension.class)
@SpringBootTest
@ActiveProfiles("test")
public class UsuarioServiceImplTest {

    @Autowired
    UsuarioRepository usuarioRepository;

    @Test
    public void deveVerificarSeEmailExiste(){
        Usuario usuario = Usuario.builder().nome("teste").senha("1234").email("teste@gmail.com").build();
        usuarioRepository.save(usuario);

        boolean existe = usuarioRepository.existsByEmail(usuario.getEmail());

        Assertions.assertThat(existe).isTrue();
    }
}
