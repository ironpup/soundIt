import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

import Threads from './threads/threads';

class Application extends Component {
   render() {
    return (
      <View style={styles.container}>
        <Text style={styles.helper}>
            Entire Application
        </Text>
        <Threads />
      </View>
    )
  }
}

export default Application

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  helper: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    backgroundColor: 'skyblue'
  }
});
