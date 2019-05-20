
import React, {Component} from 'react';
import { View } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import Main from './src/pages/Main';

export default class App extends Component {
  render() {
    return (
        <Main />
    );
  }
}