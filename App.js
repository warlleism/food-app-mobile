import { View, StatusBar, Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Detail from './src/pages/detail'
import Home from "./src/pages/home";
import Provider from "./src/context/provider";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: 'none',
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  )
}


export default function App() {

  return (
    <Provider>
      <NavigationContainer>
        <MyStack />
        <StatusBar backgroundColor="#282828" animated={true} />
      </NavigationContainer>
    </Provider>
  );
}
