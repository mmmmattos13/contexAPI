import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './src/screens/HomeScreen';
import { UserScreen } from './src/screens/UserScreen';
import UserContextProvider from './src/contexts/userContext';

export type RootStackParamlist = {
  Home: undefined;
  User: { username: string }
}

const {Navigator, Screen} = createStackNavigator<RootStackParamlist>();

export default function App() {
  return (
      <NavigationContainer>
        <UserContextProvider>
          <Navigator>
            <Screen name="Home" component={HomeScreen} />  
            <Screen name="User" component={UserScreen} />  
          </Navigator>   
        </UserContextProvider>     
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
