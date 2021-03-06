import React, { Component } from 'react';
import { View } from 'react-native';

import STYLES from '../../../styles/styles'
import SingleUser from './single-user'

class UsersList extends Component {
  constructor(props) {
    super(props)
  }

  renderUsers = (users) => {
    let action = this.props.selectUser
    return (users.map((user, i) => {
      return (<SingleUser
              key={i}
              user={user}
              selectUser={action}
             />)
    }))
  }

  render() {
    return (
      <View>
        {this.renderUsers(this.props.users)}
      </View>
    )
  }
}

export default UsersList
