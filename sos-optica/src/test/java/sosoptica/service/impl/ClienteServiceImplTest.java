package sosoptica.service.impl;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import sosoptica.service.Impl.ClienteServiceImpl;

@SpringBootTest
@ExtendWith(SpringExtension.class)
public class ClienteServiceImplTest {

    @Autowired
    ClienteServiceImpl clienteService;

    @Test
    public void deveValidarTamanhoCpfClienteValido(){
        String cpf = "123.456.789-01";
        boolean valido = clienteService.validarFormatoCpfCliente(cpf);

        Assertions.assertThat(valido).isTrue();
    }

    @Test
    public void deveValidarFormatoCpfClienteValido(){
        String cpf = "12-34-56-78-90";
        boolean valido = clienteService.validarFormatoCpfCliente(cpf);

        Assertions.assertThat(valido).isFalse();
    }

    @Test
    public void deveValidarFormatoCpfClienteSemPontuacao(){
        String cpf = "12345678901";
        boolean valido = clienteService.validarFormatoCpfCliente(cpf);

        Assertions.assertThat(valido).isTrue();
    }

    @Test
    public void deveValidarFormatoCpfClienteComPontuacao(){
        String cpf = "123.456.789-01";
        boolean valido = clienteService.validarFormatoCpfCliente(cpf);

        Assertions.assertThat(valido).isTrue();
    }

    @Test
    public void deveRetornarErroSeCpfVazio(){
        String cpf = null ;
        boolean valido = clienteService.validarFormatoCpfCliente(cpf);

        Assertions.assertThat(valido).isFalse();
    }
}
