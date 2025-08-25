import React from 'react';
import styled from 'styled-components/native';
import { Cliente } from '../types';

const Card = styled.View`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 16px;
  margin: 8px 16px;
  elevation: 2;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
`;

const NomeEmpresa = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
`;

const InfoRow = styled.View`
  flex-direction: row;
  margin-bottom: 4px;
`;

const Label = styled.Text`
  font-size: 14px;
  color: #666;
  font-weight: 500;
  min-width: 60px;
`;

const Value = styled.Text`
  font-size: 14px;
  color: #333;
  flex: 1;
`;

interface ClienteCardProps {
  cliente: Cliente;
}

export const ClienteCard: React.FC<ClienteCardProps> = ({ cliente }) => {
  return (
    <Card>
      <NomeEmpresa>{cliente.nomeEmpresa}</NomeEmpresa>
      <InfoRow>
        <Label>CNPJ:</Label>
        <Value>{cliente.cnpj}</Value>
      </InfoRow>
      <InfoRow>
        <Label>Contato:</Label>
        <Value>{cliente.contato}</Value>
      </InfoRow>
    </Card>
  );
};
