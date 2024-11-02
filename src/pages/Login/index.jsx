import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Form, Title, Logo } from './style';
import LogoImage from '../../assets/openai-logo-DmWoKcI3.svg';

const Login = () => {
  return (
    <Container>
      <Form>
        <Logo src={LogoImage} alt="GPT Logo" />
        <Title>Criar uma conta</Title>
        <Input placeholder="Endereço de e-mail" />
        <Button>Continuar</Button>
        <p>Já tem uma conta? <a href="#">Entrar</a></p>
        <hr />
        <Button>Continuar com o Google</Button>
        <Button>Continuar com a conta Microsoft</Button>
        <Button>Continuar com a Apple</Button>
      </Form>
    </Container>
  );
};

export default Login;
