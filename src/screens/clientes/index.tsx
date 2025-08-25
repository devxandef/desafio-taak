import React from 'react';
import { ScrollView } from 'react-native';
import { useApp } from '../../context/AppContext';
import { ClienteCard } from '../../components/ClienteCard';
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
  NewClientButton,
  NewClientButtonText,
} from './styles';

interface ClientesScreenProps {
  navigation: any;
}

export default function ClientesScreen({ navigation }: ClientesScreenProps) {
  const { clientes } = useApp();

  const handleNewClient = () => {
    navigation.navigate('NovoCliente');
  };

  const hasClientes = clientes.length > 0;

  return (
    <Container>
      <Header>
        <Title>Contas</Title>
      </Header>
      
      <Content>
        <SectionHeader>
          <SectionTitle>CLIENTES</SectionTitle>
          <SectionSubtitle>
            {hasClientes ? 'Contas cadastradas' : 'Nenhuma conta cadastrada'}
          </SectionSubtitle>
        </SectionHeader>

        {hasClientes ? (
          <ScrollView showsVerticalScrollIndicator={false}>
            {clientes.map((cliente) => (
              <ClienteCard key={cliente.id} cliente={cliente} />
            ))}
          </ScrollView>
        ) : (
          <EmptyState>
            <EmptyText>Nenhum cliente cadastrado ainda</EmptyText>
          </EmptyState>
        )}

        <NewClientButton onPress={handleNewClient}>
          <NewClientButtonText>+</NewClientButtonText>
        </NewClientButton>
      </Content>
    </Container>
  );
}