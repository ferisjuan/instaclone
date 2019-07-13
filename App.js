import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import NotAuthenticatedRoutes from './Components/NotAuthenticated/NotAuthenticatedRoutes';

const NotAuthenticatedRoute = createAppContainer(NotAuthenticatedRoutes);

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Insta Clone',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <NotAuthenticatedRoute />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
