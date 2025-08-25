import React from 'react';
import styled from 'styled-components/native';
import { Contato } from '../types';

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

const NomeCompleto = styled.Text`
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
  min-width: 80px;
`;

const Value = styled.Text`
  font-size: 14px;
  color: #333;
  flex: 1;
`;

interface ContatoCardProps {
  contato: Contato;
}

export const ContatoCard: React.FC<ContatoCardProps> = ({ contato }) => {
  return (
    <Card>
      <NomeCompleto>{contato.nomeCompleto}</NomeCompleto>
      <InfoRow>
        <Label>Telefone:</Label>
        <Value>{contato.telefone}</Value>
      </InfoRow>
      <InfoRow>
        <Label>E-mail:</Label>
        <Value>{contato.email}</Value>
      </InfoRow>
      <InfoRow>
        <Label>Data do último contato:</Label>
        <Value>{contato.dataUltimoContato}</Value>
      </InfoRow>
      <InfoRow>
        <Label>Cargo:</Label>
        <Value>{contato.cargo}</Value>
      </InfoRow>
    </Card>
  );
};
