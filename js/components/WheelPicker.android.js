'use strict';

var NativeMethodsMixin = require('NativeMethodsMixin');
var Platform = require('Platform');
var React = require('React');
var ReactNative = require('ReactNative');
var StatusBar = require('StatusBar');
var StyleSheet = require('StyleSheet');
var UIManager = require('UIManager');
var View = require('View');
var ReactPropTypes = React.PropTypes;
var requireNativeComponent = require('requireNativeComponent');

class WheelPicker extends React.Component {
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
  }

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

  _onChange(event) {
    this.props.onValueChange && this.props.onValueChange(event.nativeEvent.value);
  }

  render() {
    return <RCTWheelPicker
      selectedValue={this.props.selectedValue}
      style={[styles.pickerContainer, this.props.style]}
      data={this.props.data}
      textSize={this.props.textSize}
      isCurved={this.props.isCurved}
      hasAtmospheric={this.props.hasAtmospheric}
      hasIndicator={this.props.hasIndicator}
      indicatorSize={this.props.indicatorSize}
      indicatorColor={this.props.indicatorColor}
      itemTextColor={this.props.itemTextColor}
      selectedItemTextColor={this.props.selectedItemTextColor}
      onChange={this._onChange} />;
  }
}

WheelPicker.propTypes = {
  accessibilityLabel: ReactPropTypes.string,
  accessibilityLiveRegion: ReactPropTypes.string,
  importantForAccessibility: ReactPropTypes.string,
  renderToHardwareTextureAndroid: ReactPropTypes.bool,
  accessibilityComponentType: ReactPropTypes.string,
  onLayout: ReactPropTypes.bool,
  testID: ReactPropTypes.string,
  ...View.PropTypes,
  selectedValue: ReactPropTypes.number,
  data: ReactPropTypes.array.isRequired,
  onValueChange: ReactPropTypes.func,
  textSize: ReactPropTypes.number,
  isCurved: ReactPropTypes.bool,
  hasAtmospheric: ReactPropTypes.bool,
  hasIndicator: ReactPropTypes.bool,
  indicatorSize: ReactPropTypes.number,
  indicatorColor: ReactPropTypes.string,
  itemTextColor: ReactPropTypes.string,
  selectedItemTextColor: ReactPropTypes.string,
};

const styles = StyleSheet.create({
  pickerContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
  }
});

var RCTWheelPicker = requireNativeComponent('RCTWheelPicker', WheelPicker, {nativeOnly: {onChange: true}});

module.exports = WheelPicker;
