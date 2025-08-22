import {View, Text} from "react-native"
import styled from 'styled-components/native';

const Container = styled.View`
 flex: 1;
`;

const Header = styled.View`
    width: 100%;
    height: 100px;
    background-color: #000000;
    justify-content: center;
    align-items: center;
`

const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #fff;
`

const NewContactButton = styled.TouchableOpacity`
    position: absolute;
    bottom: 5%;
    right: 5%;
    width: 60px;
    height: 60px;
    border-radius: 100px;
    background-color: #fff;
    elevation: 5;
    justify-content: center;
    align-items: center;
    &:hover {
        filter: brightness(0.85);
    }
`

export default function ContatoScreen() {

    const handleNewContact = () => {
    }

    return (
        <Container>
            <Header> 
                <Title>Contatos</Title>
            </Header>
           <NewContactButton onPress={handleNewContact}>
                <Text style={{fontSize: 20, color: '#00FFFF', fontWeight: 'bold'}}>+</Text>
           </NewContactButton>
        </Container>
    )
}