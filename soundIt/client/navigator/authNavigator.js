import { StackNavigator } from 'react-navigation';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import SignUpPage from '../signUp/signUpPage';
import SignInPage from '../signIn/signInPage';

// Navigation
const LANDING = 'SignUp'

const AuthStack = StackNavigator(
  {
    SignUp: {
      screen: (props) => {
        return (
          <SignUpPage {...props}/>
        )
      }
    },
    SignIn: {
      screen: (props) => {
        return (
          <SignInPage {...props}/>
        )
      }
    }
  },
  {
    initialRouteName: LANDING
  }
)

class AuthNavigation extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <AuthStack screenProps={this.props.screenProps}/>
      </View>
    )
  }
}

export default AuthNavigation

const styles = StyleSheet.create({
  container: {
    // flex: 1
    height: '100%'
  }
});
