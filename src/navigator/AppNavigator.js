import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import SuperAdmin from '../screens/SuperAdmin';
import User from '../screens/User';
import Company from '../screens/Company';
import Login from '../screens/Login';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='home' component={Home}/>
        <Stack.Screen name='SuperAdmin' component={SuperAdmin}/>
        <Stack.Screen name='User' component={User}/>
        <Stack.Screen name='Company' component={Company}/>
        <Stack.Screen name='login' component={Login}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
