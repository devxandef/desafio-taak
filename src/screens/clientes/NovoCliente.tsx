import React, { useState, useEffect } from 'react';
import { Alert, ScrollView } from 'react-native';
import { useApp } from '../../context/AppContext';
import { Contato } from '../../types';
import {
  Container,
  Header,
  Title,
  Content,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  Input,
  AutocompleteContainer,
  AutocompleteInput,
  AutocompleteList,
  AutocompleteItem,
  AutocompleteItemText,
  AutocompleteItemSubtext,
  AutocompleteItemEmail,
  AutocompleteItemPhone,
  ButtonContainer,
  Button,
  ButtonText,
} from './styles';

interface NovoClienteProps {
  navigation: any;
}

export default function NovoCliente({ navigation }: NovoClienteProps) {
  const { addCliente, contatos } = useApp();
  const [nomeEmpresa, setNomeEmpresa] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [contato, setContato] = useState('');
  const [contatosFiltrados, setContatosFiltrados] = useState<Contato[]>([]);
  const [mostrarAutocomplete, setMostrarAutocomplete] = useState(false);

  // Filtrar contatos baseado no texto digitado
  useEffect(() => {
    if (contato.trim()) {
      const filtrados = contatos
        .filter(contatoItem => 
          contatoItem.nomeCompleto.toLowerCase().includes(contato.toLowerCase()) ||
          contatoItem.email.toLowerCase().includes(contato.toLowerCase()) ||
          contatoItem.telefone.includes(contato)
        )
        .slice(0, 5); // Limitar a 5 resultados
      setContatosFiltrados(filtrados);
      setMostrarAutocomplete(filtrados.length > 0);
    } else {
      setContatosFiltrados([]);
      setMostrarAutocomplete(false);
    }
  }, [contato, contatos]);

  const handleSelecionarContato = (contatoSelecionado: Contato) => {
    setContato(contatoSelecionado.nomeCompleto);
    setMostrarAutocomplete(false);
  };

  const handleSalvar = () => {
    if (!nomeEmpresa.trim() || !cnpj.trim() || !contato.trim()) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }

    addCliente({
      nomeEmpresa: nomeEmpresa.trim(),
      cnpj: cnpj.trim(),
      contato: contato.trim(),
    });

    Alert.alert('Sucesso', 'Cliente cadastrado com sucesso!', [
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
        <Title>Nova conta</Title>
      </Header>
      
      <Content>
        <SectionHeader>
          <SectionTitle>NOVO CLIENTE</SectionTitle>
          <SectionSubtitle>Cadastre um novo cliente</SectionSubtitle>
        </SectionHeader>

        <Input
          placeholder="Nome da empresa"
          value={nomeEmpresa}
          onChangeText={setNomeEmpresa}
        />

        <Input
          placeholder="CNPJ"
          value={cnpj}
          onChangeText={setCnpj}
          keyboardType="numeric"
        />

        <AutocompleteContainer>
          <AutocompleteInput
            placeholder="Contato (busque por nome, email ou telefone)"
            value={contato}
            onChangeText={setContato}
            onFocus={() => {
              if (contato.trim() && contatosFiltrados.length > 0) {
                setMostrarAutocomplete(true);
              }
            }}
            onBlur={() => {
              // Pequeno delay para permitir o toque no item
              setTimeout(() => setMostrarAutocomplete(false), 200);
            }}
          />
          
          {mostrarAutocomplete && (
            <AutocompleteList>
              <ScrollView nestedScrollEnabled={true}>
                {contatosFiltrados.map((contatoItem) => (
                  <AutocompleteItem
                    key={contatoItem.id}
                    onPress={() => handleSelecionarContato(contatoItem)}
                  >
                    <AutocompleteItemText>{contatoItem.nomeCompleto}</AutocompleteItemText>
                    <AutocompleteItemSubtext>
                      {contatoItem.cargo}
                    </AutocompleteItemSubtext>
                    <AutocompleteItemEmail>
                      {contatoItem.email}
                    </AutocompleteItemEmail>
                    <AutocompleteItemPhone>
                      {contatoItem.telefone}
                    </AutocompleteItemPhone>
                  </AutocompleteItem>
                ))}
              </ScrollView>
            </AutocompleteList>
          )}
        </AutocompleteContainer>

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
