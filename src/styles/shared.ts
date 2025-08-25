import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity<{ variant: 'primary' | 'secondary' }>`
  flex: 1;
  padding: 16px;
  border-radius: 8px;
  margin: 0 8px;
  background-color: ${(props: { variant: 'primary' | 'secondary' }) => props.variant === 'primary' ? '#00FFFF' : '#666666'};
`;

export const ButtonText = styled.Text<{ variant: 'primary' | 'secondary' }>`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: ${(props: { variant: 'primary' | 'secondary' }) => props.variant === 'primary' ? '#000' : '#fff'};
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

// Estilos compartilhados para inputs
export const Input = styled.TextInput`
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 16px;
  font-size: 16px;
`;

// Estilos compartilhados para headers
export const Header = styled.View`
  width: 100%;
  height: 100px;
  background-color: #333333;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

// Estilos compartilhados para containers
export const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;
`;

export const Content = styled.View`
  flex: 1;
  padding: 20px;
`;

// Estilos compartilhados para seções
export const SectionHeader = styled.View`
  background-color: #333333;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const SectionTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

export const SectionSubtitle = styled.Text`
  font-size: 14px;
  color: #ccc;
  margin-top: 4px;
`;

// Estilos compartilhados para estados vazios
export const EmptyState = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

export const EmptyText = styled.Text`
  font-size: 16px;
  color: #666;
  text-align: center;
  margin-top: 16px;
`;

// Estilos compartilhados para botões flutuantes
export const FloatingButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 5%;
  right: 5%;
  width: 60px;
  height: 60px;
  border-radius: 100px;
  background-color: #00FFFF;
  elevation: 5;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  justify-content: center;
  align-items: center;
`;

export const FloatingButtonText = styled.Text`
  font-size: 24px;
  color: #000;
  font-weight: bold;
`;
