import { View, StatusBar, Dimensions } from "react-native";
import Home from "./src/pages/home";

const { height } = Dimensions.get("window")


export default function App() {
  return (
    <View style={{ backgroundColor: '#282828', height: height }}>
      <Home />
      <StatusBar backgroundColor="#282828" animated={true} />
    </View>
  );
}
