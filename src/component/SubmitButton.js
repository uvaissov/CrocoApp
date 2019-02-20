import React from 'react'
import { Text, StyleSheet } from 'react-native'
import TouchableScale from 'react-native-touchable-scale'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { w, COLOR_5, WHITE } from '../constant/constants'

const SubmitButton = ({
  onPress,
  buttonStyle,
  textStyle,
  text,
  iconName,
  iconColor
}) => {
  const { viewSubmitButtonStyle, TOSubmitButtonStyle, TextStyle } = styles
  return (
    <TouchableScale
      style={[TOSubmitButtonStyle, viewSubmitButtonStyle, buttonStyle]}
      onPress={onPress}
      activeScale={0.9}
    >
      {iconName &&
        <Ionicons name={iconName} color={iconColor || WHITE} style={{fontSize: 22, marginLeft: 5}} />
      }
      <Text style={[TextStyle, textStyle]}>{text}</Text>
    </TouchableScale>
  )
}

const styles = StyleSheet.create({
  viewSubmitButtonStyle: {
    marginTop: 10,
    width: w / 2.3,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: COLOR_5,
    borderColor: COLOR_5,
    shadowColor: '#000',
    elevation: 3,
    shadowOffset: { width: 15, height: 25},
    shadowOpacity: 1
  },
  TOSubmitButtonStyle: {
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  TextStyle: {
    color: WHITE,
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: 5,
    marginRight: 5
  }
})

export { SubmitButton }
