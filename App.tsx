import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;



export default function App() {
  return (
    <Container>
      <StatusBar style="auto" />
      <Title>Vamos iniciar o desafio?</Title>
    </Container>
  );
}

