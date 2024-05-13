import { useContext } from 'react';
import { Text, View } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamlist } from '../../App';
import { UserContext } from '../contexts/userContext';


type UserScreenProps = {
    route: RouteProp<RootStackParamlist, "User">
}


export function UserScreen({route} : UserScreenProps) {
  const { username } = route.params;

  const UserContextValue = useContext(UserContext);
  const nomeDinamico = UserContextValue?.loginName || "Nenhum nome salvo!";
  const nomeEstatico = UserContextValue?.nome;

  return (
    <View>
        <Text>Bem-vindo {username}</Text>
        <Text>Bem-vindo {nomeDinamico}</Text>
        <Text>Bem-vindo {nomeEstatico}</Text>
    </View>
  );
}