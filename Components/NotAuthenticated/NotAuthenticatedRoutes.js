import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Text, View, Button } from 'react-native';

console.disableYellowBox = ['Remote debugger'];

const SignIn = (props) => {
  const { navigation } = props;

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text> SignIn</Text>
      <Button title="SignUp" onPress={() => navigation.navigate('SignUp')} />
    </View>
  );
};

const SignUp = (props) => {
  const { navigation } = props;
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text>SignUp</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const NotAuthenticatedRoutes = createStackNavigator(
  {
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        header: null,
      },
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    navigationOptions: {
      title: 'Insta Clone',
    },
  },
);

export default NotAuthenticatedRoutes;
