import React, { useState } from "react";
import * as Style from './Style';
import {mensagemErro, mensagemSucesso} from "../toastr";
import UsuarioService from "../../service/UsuarioService";
import {useHistory} from "react-router-dom";

function LoginIn() {
  const history = useHistory();
  const usuarioService = new UsuarioService();
  const [signIn, toggle] = useState(true);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
  });
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const [loginData, setLoginData] = useState({
    email: '',
    senha: '',
  });

  const handleLoginInputChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  }

  const handleLogin = (e) => {
    e.preventDefault();
    usuarioService.autenticar(loginData).then(response => {
      console.log("entrou")
      history.push('/listar-clientes');
    }).catch(error => {
      mensagemErro(error.response.data)
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    usuarioService.salvar(formData).then(response => {
      setFormData({
        nome: '',
        email: '',
        senha: '',
      });
      mensagemSucesso("Cadastro realizado com sucesso")

      toggle(true);
    }).catch(error => {
      mensagemErro(error.response.data)
    });
  }



  return (
      <Style.Container>
        <Style.SignUpContainer signinIn={signIn}>
          <Style.Form onSubmit={handleSubmit}>
            <Style.Title2>Criar uma conta</Style.Title2>
            <Style.Input type='text' name='nome' value={formData.nome} placeholder='Nome' onChange={handleInputChange}/>
            <Style.Input type='email' name='email' value={formData.email} placeholder='Email' onChange={handleInputChange}/>
            <Style.Input type='password' name='senha' value={formData.senha} placeholder='Senha' onChange={handleInputChange}/>
            <Style.Button type='submit'>Cadastrar</Style.Button>
          </Style.Form>
        </Style.SignUpContainer>

        <Style.SignInContainer signinIn={signIn}>
          <Style.Form onSubmit={handleLogin}>
            <Style.Title2>Login</Style.Title2>
            <Style.Input type='email' name='email' placeholder='Email' value={loginData.email} onChange={handleLoginInputChange} />
            <Style.Input type='password' name='senha' placeholder='Senha' value={loginData.senha} onChange={handleLoginInputChange} />
            <Style.Anchor href='#'>Esqueceu sua senha?</Style.Anchor>
            <Style.Button type='submit'>Logar</Style.Button>
          </Style.Form>
        </Style.SignInContainer>

      <Style.OverlayContainer signinIn={signIn}>
        <Style.Overlay signinIn={signIn}>
          <Style.LeftOverlayPanel signinIn={signIn}>
            <Style.Title2>Bem vindo de volta!</Style.Title2>
            <Style.Paragraph>
              Para conectar-se com o sistema entre com as suas informações
            </Style.Paragraph>
            <Style.GhostButton onClick={() => toggle(true)}>
              Logar
            </Style.GhostButton>
          </Style.LeftOverlayPanel>

          <Style.RightOverlayPanel signinIn={signIn}>
            <Style.Title2>Olá!</Style.Title2>
            <Style.Paragraph>
              Crie uma conta para poder acessar o sistema
            </Style.Paragraph>
            <Style.GhostButton onClick={() => toggle(false)}>
              Cadastrar-se
            </Style.GhostButton>
          </Style.RightOverlayPanel>
        </Style.Overlay>
      </Style.OverlayContainer>
    </Style.Container>
  );
}

export default LoginIn;
