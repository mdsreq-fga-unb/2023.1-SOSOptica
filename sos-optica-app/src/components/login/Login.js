import React, { useState } from "react";
import * as Style from './Style';

function LoginIn() {
  const [signIn, toggle] = useState(true);

  return (
    <Style.Container>
      <Style.SignUpContainer signinIn={signIn}>
        <Style.Form>
          <Style.Title>Criar uma conta</Style.Title>
          <Style.Input type='text' placeholder='Nome' />
          <Style.Input type='email' placeholder='Email' />
          <Style.Input type='senha' placeholder='Senha' />
          <Style.Button>Cadastrar</Style.Button>
        </Style.Form>
      </Style.SignUpContainer>

      <Style.SignInContainer signinIn={signIn}>
        <Style.Form>
          <Style.Title>Login</Style.Title>
          <Style.Input type='email' placeholder='Email' />
          <Style.Input type='password' placeholder='Senha' />
          <Style.Anchor href='#'>Esqueceu sua senha?</Style.Anchor>
          <Style.Button>Logar</Style.Button>
        </Style.Form>
      </Style.SignInContainer>

      <Style.OverlayContainer signinIn={signIn}>
        <Style.Overlay signinIn={signIn}>
          <Style.LeftOverlayPanel signinIn={signIn}>
            <Style.Title>Bem vindo de volta!</Style.Title>
            <Style.Paragraph>
              Para manter-se conectado com o sistema entre com as suas informações
            </Style.Paragraph>
            <Style.GhostButton onClick={() => toggle(true)}>
              Logar
            </Style.GhostButton>
          </Style.LeftOverlayPanel>

          <Style.RightOverlayPanel signinIn={signIn}>
            <Style.Title>Ola!</Style.Title>
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
