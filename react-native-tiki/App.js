/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Homepage from './src/screen/homepage';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Homepage />
    );
  }
}
