import React, { useState } from "react";
import * as Style from './Style';

function LoginIn() {
  const [signIn, toggle] = useState(true);

  return (
    <Style.Container>
      <Style.SignUpContainer signinIn={signIn}>
        <Style.Form>
          <Style.Title1>Criar uma conta</Style.Title1>
          <Style.Input type='text' placeholder='Nome' />
          <Style.Input type='email' placeholder='Email' />
          <Style.Input type='password' placeholder='Senha' />
          <Style.Button>Cadastrar</Style.Button>
        </Style.Form>
      </Style.SignUpContainer>

      <Style.SignInContainer signinIn={signIn}>
        <Style.Form>
          <Style.Title1>Login</Style.Title1>
          <Style.Input type='email' placeholder='Email' />
          <Style.Input type='password' placeholder='Senha' />
          <Style.Anchor href='#'>Esqueceu sua senha?</Style.Anchor>
          <Style.Button>Logar</Style.Button>
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
