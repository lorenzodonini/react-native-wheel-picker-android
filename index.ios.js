/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import WheelPicker from './js/components/WheelPicker'

export default class TestApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            This is a WheelPicker!
          </Text>
        </View>
        <WheelPicker data={[1,2,3,4,5,6,7,8,9,10]}
                     onValueChange={() => {}}
                     selectedValue={0}
                     style={styles.picker}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  titleContainer: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    margin: 20,
  },
  picker: {
    flex: 1,
  },
});

AppRegistry.registerComponent('WheelPickerAndroid', () => TestApp);

