import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Button
} from 'react-native';

class NavigateToGroups extends Component {

  seeThreads = () => {
    this.props.navigateAction('Groups')
  }

  render() {
    return (
      <Button style={styles.button}
        onPress={this.seeThreads}
        title='My Groups'
        color="#841584"
      />
    )
  }
}

export default NavigateToGroups

const styles = StyleSheet.create({
  button: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'orange',
  }
});
