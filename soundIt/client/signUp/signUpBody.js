import React, { Component } from 'react';
import {
  View,
  Button
} from 'react-native';

import STYLES from './signUp-styles';
import SignUpWelcome from './signUpWelcome';
import SignUpForm from './signUpForm';

class SignUpBody extends Component {

  goToSignIn = () => {
    this.props.navigateAction('SignIn')
  }

  render() {
    return (
      <View style={STYLES.body}>
        <SignUpWelcome/>
        <SignUpForm 
          navigateAction={this.goToSignIn}/>
        <Button
          onPress={this.goToSignIn}
          title='Sign In'
        />
      </View>
    )
  }
}

export default SignUpBody
