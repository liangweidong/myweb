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

import dva from 'dva/mobile'
import App from './src/app'
const app = dva();


app.router(()=><App/>)


AppRegistry.registerComponent('reactNativeDvaRFAnt', () => app.start());
