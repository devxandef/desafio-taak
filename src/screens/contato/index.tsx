import React from 'react';
import { ScrollView } from 'react-native';
import { useApp } from '../../context/AppContext';
import { ContatoCard } from '../../components/ContatoCard';
import {
  Container,
  Header,
  Title,
  Content,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  EmptyState,
  EmptyText,
  NewContactButton,
  NewContactButtonText,
} from './styles';

interface ContatoScreenProps {
  navigation: any;
}

export default function ContatoScreen({ navigation }: ContatoScreenProps) {
  const { contatos } = useApp();

  const handleNewContact = () => {
    navigation.navigate('NovoContato');
  };

  const hasContatos = contatos.length > 0;

  return (
    <Container>
      <Header>
        <Title>Contatos</Title>
      </Header>
      
      <Content>
        <SectionHeader>
          <SectionTitle>CONTATOS</SectionTitle>
          <SectionSubtitle>
            {hasContatos ? 'Contatos cadastrados' : 'Nenhum contato cadastrado'}
          </SectionSubtitle>
        </SectionHeader>

        {hasContatos ? (
          <ScrollView showsVerticalScrollIndicator={false}>
            {contatos.map((contato) => (
              <ContatoCard key={contato.id} contato={contato} />
            ))}
          </ScrollView>
        ) : (
          <EmptyState>
            <EmptyText>Nenhum contato cadastrado ainda</EmptyText>
          </EmptyState>
        )}

        <NewContactButton onPress={handleNewContact}>
          <NewContactButtonText>+</NewContactButtonText>
        </NewContactButton>
      </Content>
    </Container>
  );
} 