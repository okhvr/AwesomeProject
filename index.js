/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from "react";
import {AppRegistry, View, Text} from 'react-native';
import { createAppContainer, createBottomTabNavigator } from "react-navigation";

import FeedScreen from './src/screens/feed/FeedScreen';
import FirstScreen from './src/screens/first/FirstScreen';
import ThirdScreen from './src/screens/third/ThirdScreen';

import {name as appName} from './app.json';

const TabNavigator = createBottomTabNavigator({
    Feed: FeedScreen,
    First: FirstScreen,
    Third: ThirdScreen
  });

AppRegistry.registerComponent(appName, () => createAppContainer(TabNavigator));
