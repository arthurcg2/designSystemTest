import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';

/**
 * @typedef {{
 *  text: string;
 * }} Props
 * @extends Component<Props>
 */
export default class Button extends Component {
  render() {
    const { text } = this.props;

    return (
      <TouchableOpacity {...this.props}>
        <Text>{text}</Text>
      </TouchableOpacity>
    );
  }
}
