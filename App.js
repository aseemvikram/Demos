import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import NewsApi from './src/NewsApi';
import UseMemoDemo from './src/UseMemoDemo';
import UseCallbackDemo from './src/UseCallbackDemo';
import Home from './src/Home';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="UseCallback" component={UseCallbackDemo} />
        <Stack.Screen name="UseMemo" component={UseMemoDemo} />
        <Stack.Screen name="News" component={NewsApi} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

