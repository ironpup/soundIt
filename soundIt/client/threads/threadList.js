import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

// import List from '../ui/list';
import SingleThread from './singleThread'

class ThreadList extends Component {

  renderListItems = (items) => {
    let navigateAction = this.props.navigateAction
    return (items.map((item) => {
      return (<SingleThread 
              item={item}
              navigateAction={navigateAction}
             />)
    }))
  }

  getActiveThreads = () =>
    this.props.threads

  render() {
    return (
      <View style={styles.container}>
        {this.renderListItems(this.props.threads)}
      </View>
    )
  }
}

export default ThreadList

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
    // backgroundColor: 'blue',
  }
});
