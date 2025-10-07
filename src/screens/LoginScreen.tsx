import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
  TextInput as RNTextInput,
} from 'react-native';
import styled from 'styled-components/native';

// ✨ Componentes estilizados con sintaxis CSS
const Container = styled(KeyboardAvoidingView)`
  flex: 1;
  background-color: #f8f9fa;
`;

const ScrollContainer = styled(ScrollView).attrs({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  keyboardShouldPersistTaps: 'handled',
})``;

const HeaderContainer = styled.View`
  align-items: center;
  margin-bottom: 40px;
`;

const LogoContainer = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: #4c6ef5;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  shadow-color: #4c6ef5;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.3;
  shadow-radius: 8px;
  elevation: 8;
`;

const LogoText = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #ffffff;
`;

const WelcomeText = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #1a1a1a;
  margin-bottom: 8px;
`;

const SubtitleText = styled.Text`
  font-size: 16px;
  color: #666;
`;

const FormContainer = styled.View`
  width: 100%;
`;

const InputContainer = styled.View`
  margin-bottom: 20px;
`;

const Label = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
`;

const Input = styled(RNTextInput)`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 14px 16px;
  font-size: 16px;
  color: #1a1a1a;
  border-width: 1px;
  border-color: #e1e4e8;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.05;
  shadow-radius: 4px;
  elevation: 2;
`;

const PasswordContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #ffffff;
  border-radius: 12px;
  border-width: 1px;
  border-color: #e1e4e8;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.05;
  shadow-radius: 4px;
  elevation: 2;
`;

const PasswordInput = styled(RNTextInput)`
  flex: 1;
  padding: 14px 16px;
  font-size: 16px;
  color: #1a1a1a;
`;

const EyeButton = styled.TouchableOpacity`
  padding: 0 16px;
`;

const EyeText = styled.Text`
  font-size: 20px;
`;

const ForgotPasswordContainer = styled.TouchableOpacity`
  align-self: flex-end;
  margin-bottom: 24px;
`;

const ForgotPasswordText = styled.Text`
  color: #4c6ef5;
  font-size: 14px;
  font-weight: 600;
`;

const LoginButton = styled.TouchableOpacity`
  background-color: #4c6ef5;
  border-radius: 12px;
  padding: 16px;
  align-items: center;
  shadow-color: #4c6ef5;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.3;
  shadow-radius: 8px;
  elevation: 4;
`;

const LoginButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
`;

const DividerContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 32px 0;
`;

const Divider = styled.View`
  flex: 1;
  height: 1px;
  background-color: #e1e4e8;
`;

const DividerText = styled.Text`
  margin: 0 16px;
  color: #999;
  font-size: 14px;
`;

const RegisterContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const RegisterText = styled.Text`
  color: #666;
  font-size: 14px;
`;

const RegisterLink = styled.Text`
  color: #4c6ef5;
  font-size: 14px;
  font-weight: bold;
`;

// Componente principal
const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Por favor completa todos los campos');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Por favor ingresa un email válido');
      return;
    }

    Alert.alert('Éxito', `Iniciando sesión con: ${email}`);
  };

  const handleForgotPassword = () => {
    Alert.alert('Recuperar contraseña', 'Funcionalidad en desarrollo');
  };

  const handleRegister = () => {
    Alert.alert('Registro', 'Funcionalidad en desarrollo');
  };

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollContainer>
        <HeaderContainer>
          <LogoContainer>
            <LogoText>PlanGo</LogoText>
          </LogoContainer>
          <WelcomeText>¡Bienvenido!</WelcomeText>
          <SubtitleText>Inicia sesión para continuar</SubtitleText>
        </HeaderContainer>

        <FormContainer>
          <InputContainer>
            <Label>Email</Label>
            <Input
              placeholder="correo@ejemplo.com"
              placeholderTextColor="#999"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
            />
          </InputContainer>

          <InputContainer>
            <Label>Contraseña</Label>
            <PasswordContainer>
              <PasswordInput
                placeholder="••••••••"
                placeholderTextColor="#999"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!isPasswordVisible}
                autoCapitalize="none"
              />
              <EyeButton onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                <EyeText>{isPasswordVisible ? '🙈' : '👁️'}</EyeText>
              </EyeButton>
            </PasswordContainer>
          </InputContainer>

          <ForgotPasswordContainer onPress={handleForgotPassword}>
            <ForgotPasswordText>¿Olvidaste tu contraseña?</ForgotPasswordText>
          </ForgotPasswordContainer>

          <LoginButton onPress={handleLogin}>
            <LoginButtonText>Iniciar Sesión</LoginButtonText>
          </LoginButton>

          <DividerContainer>
            <Divider />
            <DividerText>O</DividerText>
            <Divider />
          </DividerContainer>

          <RegisterContainer>
            <RegisterText>¿No tienes una cuenta? </RegisterText>
            <RegisterLink onPress={handleRegister}>Regístrate</RegisterLink>
          </RegisterContainer>
        </FormContainer>
      </ScrollContainer>
    </Container>
  );
};

export default LoginScreen;

