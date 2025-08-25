import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useApp } from '../../context/AppContext';
import {
  Container,
  Header,
  Title,
  Content,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  Input,
  ButtonContainer,
  Button,
  ButtonText,
} from './styles';

interface NovoContatoProps {
  navigation: any;
}

export default function NovoContato({ navigation }: NovoContatoProps) {
  const { addContato } = useApp();
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cargo, setCargo] = useState('');
  const [dataUltimoContato, setDataUltimoContato] = useState('');

  const handleSalvar = () => {
    if (!nomeCompleto.trim() || !email.trim() || !telefone.trim() || !cargo.trim() || !dataUltimoContato.trim()) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }

    addContato({
      nomeCompleto: nomeCompleto.trim(),
      email: email.trim(),
      telefone: telefone.trim(),
      cargo: cargo.trim(),
      dataUltimoContato: dataUltimoContato.trim(),
    });

    Alert.alert('Sucesso', 'Contato cadastrado com sucesso!', [
      {
        text: 'OK',
        onPress: () => navigation.goBack(),
      },
    ]);
  };

  const handleVoltar = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <Header>
        <Title>Novo contato</Title>
      </Header>
      
      <Content>
        <SectionHeader>
          <SectionTitle>NOVO CONTATO</SectionTitle>
          <SectionSubtitle>Cadastre um novo contato</SectionSubtitle>
        </SectionHeader>

        <Input
          placeholder="Nome completo"
          value={nomeCompleto}
          onChangeText={setNomeCompleto}
        />

        <Input
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Input
          placeholder="Telefone"
          value={telefone}
          onChangeText={setTelefone}
          keyboardType="phone-pad"
        />

        <Input
          placeholder="Cargo"
          value={cargo}
          onChangeText={setCargo}
        />

        <Input
          placeholder="Data do último contato"
          value={dataUltimoContato}
          onChangeText={setDataUltimoContato}
        />

        <ButtonContainer>
          <Button variant="secondary" onPress={handleVoltar}>
            <ButtonText variant="secondary">Voltar</ButtonText>
          </Button>
          <Button variant="primary" onPress={handleSalvar}>
            <ButtonText variant="primary">Salvar</ButtonText>
          </Button>
        </ButtonContainer>
      </Content>
    </Container>
  );
}
