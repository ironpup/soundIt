import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

import Banner from '../ui/bannerHeader';

class Banner extends Component {
   render() {
    return (
      <View style={styles.container}>
        <Text style={styles.helper}>
            Banner
        </Text>      
      </View>
    )
  }
}

export default Banner

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  helper: {
    fontSize: 11,
    textAlign: 'center',
    margin: 10,
    backgroundColor: 'skyblue'
  }
});
