package sosoptica.service.impl;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import sosoptica.service.Impl.UsuarioServiceImpl;


@SpringBootTest
@ExtendWith(SpringExtension.class)
public class UsuarioServiceImplTest {

    @Autowired
    private UsuarioServiceImpl usuarioService;
    @Test
    public void deveRetornarTrueQuandoOEmailForValido() {
        String email = "teste@gmail.com";
        boolean valido = usuarioService.validaFormatoEmail(email);
        Assertions.assertThat(valido).isTrue();
    }

    @Test
    public void deveRetornarFalseQuandoOEmailForInvalido() {
        String email = "testegmai@comsa.jddlçjaldsdça";
        boolean valido = usuarioService.validaFormatoEmail(email);
        Assertions.assertThat(valido).isFalse();
    }

    @Test
    public void deveRetornarFalseQuandoOEmailForNulo() {
        String email = null;
        boolean valido = usuarioService.validaFormatoEmail(email);
        Assertions.assertThat(valido).isFalse();
    }
    @Test
    public void deveRetornarFalseQuandoOEmailForVazio() {
        String email = "";
        boolean valido = usuarioService.validaFormatoEmail(email);
        Assertions.assertThat(valido).isFalse();
    }

}
