import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

class Friends extends Component {
   render() {
    return (
      <View style={styles.container}>
        <Text style={styles.helper}>
            Friends
        </Text>      
      </View>
    )
  }
}

export default Friends

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  helper: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    backgroundColor: 'skyblue'
  }
});
