import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Onboard from "./components/Screens/Onboard";
import { Home } from "./components/Screens/Home";
import Done from "./components/Screens/Done";
import Splash from "./components/Screens/Splash";

export default function RootNavigation() {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
    animationEnabled: false,
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splash" screenOptions={screenOptions}>
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen name="onboard" component={Onboard} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Done" component={Done} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
