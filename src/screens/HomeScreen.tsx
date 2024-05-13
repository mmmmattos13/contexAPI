import React from 'react';
import { Text, View, TextInput, Button} from 'react-native';
import { useState, useContext } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamlist } from '../../App';
import { UserContext } from '../contexts/userContext';

type HomeScreenprops ={
    navigation: StackNavigationProp<RootStackParamlist, "Home">
}

export function HomeScreen({navigation} : HomeScreenprops) {
   
  const [inputText, setInputText] = useState("");  
  const userContext = useContext(UserContext);
  
  const navigateToUserScreen = () =>{
    userContext?.saveLoginUserToCache(inputText);
    navigation.navigate("User", {username: inputText})
  }

  return (
    <View>
        <TextInput 
            placeholder='Digite seu nome'
            value={inputText}
            onChangeText={(text) => setInputText(text)}
        />

        <Button title="Logar" onPress={navigateToUserScreen} />
    </View>
  );
}