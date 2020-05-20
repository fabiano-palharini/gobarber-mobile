import React from 'react';
import { Image } from 'react-native';
import { Container, Title } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import logoImg from '../../assets/logo.png';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />
      <Title>Logon</Title>

      <Input name="email" icon="mail" placeholder="E-mail" />
      <Input name="password" icon="lock" placeholder="Password" />
      <Button
        onPress={() => {
          console.log('test');
        }}
      >
        Sign in
      </Button>
    </Container>
  );
};

export default SignIn;
