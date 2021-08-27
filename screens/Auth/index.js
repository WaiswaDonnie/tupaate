/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Register from '../Register';
import Login from '../Login';
const AuthStack = createStackNavigator();
const Auth = () => {
  return (
    <>
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="Login"
          options={{headerShown: false}}
          component={Login}
        />
        <AuthStack.Screen
          name="Register"
          options={{headerShown: false}}
          component={Register}
        />
      </AuthStack.Navigator>
    </>
  );
};

export default Auth;
