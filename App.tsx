import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';
import CustomNavigationBar from './components/CustomNavigationBar';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            header: (props) => <CustomNavigationBar {...props} />,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'MD Nav Demo' }} />
          <Stack.Screen name="Second" component={SecondScreen} options={{ title: 'MD Nav Demo' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}