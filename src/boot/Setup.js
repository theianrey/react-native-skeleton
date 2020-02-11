/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/**
 * * This is where we set our application
 */
import React from 'react';
import Router from 'src/boot/Router';
import {Provider} from 'react-redux';
import configureStore from 'src/redux/stores';
import {
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';

//
const Setup = props => {
  return (
    <View style={{flex: 1}}>
      <Provider store={configureStore()}>
        <SafeAreaView style={{flex: 1}}>
          <KeyboardAvoidingView
            style={{flex: 1}}
            behavior="padding"
            enabled={Platform.OS === 'ios' ? true : false}>
            <StatusBar barStyle="default" backgroundColor="black" />

            {/* Start app router */}
            <Router />
            {/* end app router */}
          </KeyboardAvoidingView>
        </SafeAreaView>
      </Provider>
    </View>
  );
};

export default Setup;
