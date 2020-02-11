import React, { forwardRef } from 'react'
import {
  View as RnView,
  KeyboardAvoidingView as RnKeyboardAvoidingView,
  Text as RnText,
  Button as RnButton,
  Image as RnImage,
  TextInput as RnTextInput,
  TouchableOpacity as RnTouchableOpacity,
  TouchableHighlight as RnTouchableHighlight,
  ScrollView as RnScrollView,
  FlatList as RnFlatList,
  SectionList as RnSectionList,
  ImageBackground as RnImageBackground,
  StyleSheet,
  PermissionsAndroid as RnPermissionsAndroid,
  SafeAreaView as RnSafeAreaView,
  Modal as RnModal
} from 'react-native'
// import {CameraRoll as RnCameraRoll} from 'react-native-cameraroll'
import RnFontAwesome from 'react-native-vector-icons/FontAwesome'
import RnIonicons from 'react-native-vector-icons/Ionicons'
import RnEvilIcons from 'react-native-vector-icons/EvilIcons'
import LinearGradient from 'react-native-linear-gradient'
import RnMaterialIcons from 'react-native-vector-icons/MaterialIcons'
import tw from './tailwind'

const buildComponent = Component => ({ className, innerRef, style, ...rest }) => {
  const props = { ...rest, style: [], innerRef: {} }
  if (className) {
    props.style = className.split(' ').map(c => tw[c])
  }
  if (style) {
    const inline = StyleSheet.create({ style })
    props.style.push(inline.style)
  }
  if (innerRef) {
    props.ref = innerRef
  }
  return <Component {...props} />
}

export const View = buildComponent(RnView)
export const KeyboardAvoidingView = buildComponent(RnKeyboardAvoidingView)
export const Text = buildComponent(RnText)
export const Button = buildComponent(RnButton)
export const Image = buildComponent(RnImage)
export const TextInput = buildComponent(RnTextInput)
export const TouchableOpacity = buildComponent(RnTouchableOpacity)
export const TouchableHighlight = buildComponent(RnTouchableHighlight)
export const ScrollView = buildComponent(RnScrollView)
export const FlatList = buildComponent(RnFlatList)
export const FontAwesome = buildComponent(RnFontAwesome)
export const Ionicons = buildComponent(RnIonicons)
export const EvilIcons = buildComponent(RnEvilIcons)
export const Gradient = buildComponent(LinearGradient)
export const MaterialIcons = buildComponent(RnMaterialIcons)
export const ImageBackground = buildComponent(RnImageBackground)
export const SectionList = buildComponent(RnSectionList)
// export const CameraRoll = buildComponent(RnCameraRoll)
export const PermissionsAndroid=buildComponent(RnPermissionsAndroid)
export const Modal =buildComponent(RnModal)
export const SafeAreaView =buildComponent(RnSafeAreaView)

export default {
  SectionList,
  View,
  KeyboardAvoidingView,
  Text,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  FlatList,
  FontAwesome,
  Ionicons,
  EvilIcons,
  Gradient,
  ImageBackground,
  // CameraRoll,
  MaterialIcons,
  PermissionsAndroid,
  Modal
}
