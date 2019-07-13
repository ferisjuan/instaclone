import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Text } from 'react-native';

const SignIn = () => <Text>SignIn</Text>;

const NotAuthenticatedRoutes = createStackNavigator({
  SignIn: {
    screen: SignIn,
  },
});

export default NotAuthenticatedRoutes;
