import 'react-native-gesture-handler';

import * as React from 'react';
import { Button, View, Text, Alert } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import login from './login'; 
import TabView from './TabView'; 

const Stack = createStackNavigator();

const AppNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          name="login"
          component={login}
          options={{
            title: 'Login', //Set Header Title
            headerStyle: {
              backgroundColor: 'yellow', //Set Header color
            },
            headerLeft: null,
          }}
        />
     
     <Stack.Screen
          name="TabView"
          component={TabView}
          options={{
            title: 'REACT NATIVE', //Set Header Title
            headerStyle: {
              backgroundColor: 'yellow', //Set Header color
            },
            headerLeft: null,
          }}
        />
     
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNav;
