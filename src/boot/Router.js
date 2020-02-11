/* eslint-disable no-unused-vars */
/**
 * * Create/update your stack navigation here
 */

import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {Dimensions} from 'react-native';

// * import your screen files below

// * check device screen size
const SCREEN_WIDTH = Dimensions.get('window').width;

// * Drawer navigation stack
/* const DrawerNavigationStack = createDrawerNavigator(
  {}, // * your key/value pair of route configurations
  {
    drawerPosition: 'left',
    initialRouteName: '',
    drawerType: 'front',
    drawerWidth: SCREEN_WIDTH / 2,
    drawerBackgroundColor: 'rgba(0, 0, 0, 0.8)',
    contentComponent: props => <your_custom_drawer_item_component {...props}>,
  }, // * your custom navigation configurations
); */

// * Application navigation stack
const AppNavigationStack = createStackNavigator(
  {}, // * your key/value pair of route configurations
  {}, // * your key/value pair of navigation configurations
);

// * set our Router
const Router = createAppContainer(
  // * create a switch navigation for switching between screens
  createSwitchNavigator(
    {
      App: AppNavigationStack,
    }, // * route configtions
    {
      initialRouteName: 'App',
    }, // * navigation configurations
  ),
  // {}, // * navigation configurations if there is any
);

// * function to check on navigation state change
const handleNavStateChange = (previousState, currentState) => {
  // console.log(previousState);
  // console.log(currentState);
};

// * export the router as a component
export default () => (
  <Router
    onNavigationStateChange={(prev, current) =>
      handleNavStateChange(prev, current)
    }
  />
);
