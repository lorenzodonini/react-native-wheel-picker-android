'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  PickerIOS,
  Text,
  View
} from 'react-native';

export class WheelPicker extends React.Component {
  static defaultProps = {
    textSize: 110,
    isCurved: true,
    hasAtmospheric: true,
    hasIndicator: false,
    indicatorSize: 2,
      indicatorColor: '#b9b9b9',
      itemTextColor: '#b9b9b9',
      selectedItemTextColor: 'black',
  };

  constructor(props) {
    super(props);
  }

  render() {
    return <PickerIOS>
      {this.props}
    </PickerIOS>
  }
}
