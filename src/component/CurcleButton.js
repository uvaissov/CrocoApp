import React from 'react'
import { StyleSheet, Text } from 'react-native'
import TouchableScale from 'react-native-touchable-scale'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { COLOR_5, WHITE } from '../constant/constants'

const CurcleButton = ({
  onPress,
  buttonStyle,
  iconName,
  iconColor,
  iconStyle,
  size,
  text
}) => {
  const { viewSubmitButtonStyle, TOSubmitButtonStyle} = styles
  return (
    <TouchableScale
      style={[TOSubmitButtonStyle, viewSubmitButtonStyle, buttonStyle, {width: size ? size * 2 : 44}]}
      onPress={onPress}
      activeScale={0.9}
    >
      {iconName &&
        <Ionicons name={iconName} color={iconColor || WHITE} style={[iconStyle, {fontSize: size || 22, margin: 10}]} />
      }
      {text &&
        <Text>text</Text>
      }
    </TouchableScale>
  )
}

const styles = StyleSheet.create({
  viewSubmitButtonStyle: {
    borderRadius: 180,
    borderWidth: 1,
    backgroundColor: WHITE,
    borderColor: COLOR_5,
    shadowColor: '#000',
    elevation: 3,
    shadowOffset: { width: 15, height: 25},
    shadowOpacity: 1
  },
  TOSubmitButtonStyle: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
})

export { CurcleButton }
