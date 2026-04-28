import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import ScrollViewDemo from './screens/01-ScrollViewDemo';
import SafeAreaDemo from './screens/02-SafeAreaDemo';
import FlatListDemo from './screens/03-FlatListDemo';
import TextInputBasic from './screens/04-TextInputBasic';
import TextInputMultiple from './screens/05-TextInputMultiple';
import ButtonAndAlert from './screens/06-ButtonAndAlert';
import AlertMultipleButtons from './screens/07-AlertMultipleButtons';
import TouchableOpacityDemo from './screens/08-TouchableOpacityDemo';
import PressableDemo from './screens/09-PressableDemo';
import KeyboardDismiss from './screens/10-KeyboardDismiss';
import CombinedExample from './screens/11-CombinedExample';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="01 – ScrollView" component={ScrollViewDemo} />
        <Stack.Screen name="02 – SafeAreaView" component={SafeAreaDemo} />
        <Stack.Screen name="03 – FlatList" component={FlatListDemo} />
        <Stack.Screen name="04 – TextInput Basic" component={TextInputBasic} />
        <Stack.Screen name="05 – TextInput Multiple" component={TextInputMultiple} />
        <Stack.Screen name="06 – Button & Alert" component={ButtonAndAlert} />
        <Stack.Screen name="07 – Alert Buttons" component={AlertMultipleButtons} />
        <Stack.Screen name="08 – TouchableOpacity" component={TouchableOpacityDemo} />
        <Stack.Screen name="09 – Pressable" component={PressableDemo} />
        <Stack.Screen name="10 – Keyboard Dismiss" component={KeyboardDismiss} />
        <Stack.Screen name="11 – Combined Example" component={CombinedExample} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}