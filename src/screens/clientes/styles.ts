import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;
`;

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

export const Subtitle = styled.Text`
  font-size: 14px;
  color: #ccc;
  margin-top: 4px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 20px;
`;

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

export const Input = styled.TextInput`
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 16px;
  font-size: 16px;
`;

export const AutocompleteContainer = styled.View`
  position: relative;
  margin-bottom: 16px;
`;

export const AutocompleteInput = styled.TextInput`
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 12px;
  font-size: 16px;
`;

export const AutocompleteList = styled.View`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  max-height: 250px;
  z-index: 1000;
  elevation: 5;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
`;

export const AutocompleteItem = styled.TouchableOpacity`
  padding: 12px;
  border-bottom-width: 1px;
  border-bottom-color: #f0f0f0;
`;

export const AutocompleteItemText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const AutocompleteItemSubtext = styled.Text`
  font-size: 14px;
  color: #666;
  margin-top: 2px;
`;

export const AutocompleteItemEmail = styled.Text`
  font-size: 12px;
  color: #888;
  margin-top: 1px;
`;

export const AutocompleteItemPhone = styled.Text`
  font-size: 12px;
  color: #888;
  margin-top: 1px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

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

// Estilos para a tela principal de clientes
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

export const NewClientButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 5%;
  right: 5%;
  width: 60px;
  height: 60px;
  border-radius: 100px;
  background-color:rgb(255, 255, 255);
  elevation: 5;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  justify-content: center;
  align-items: center;
`;

export const NewClientButtonText = styled.Text`
  font-size: 24px;
  color: rgb(67, 187, 194);
  font-weight: bold;
`;
