import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { w } from '../constant/constants'

const Header = ({
  detail,
  leftIcon,
  leftColor,
  headerColor,
  title,
  onPress,
  onPressSetting
}) => {
  const { viewStyle, textStyle, leftButtonStyle } = styles
  return (
    <View style={[viewStyle, {backgroundColor: headerColor }]}>
      {leftIcon &&
        <TouchableOpacity onPress={onPress}>
          <Ionicons name={leftIcon} style={[leftButtonStyle, { paddingLeft: detail ? 10 : 25 }]} color={leftColor} />
        </TouchableOpacity>
      }
      <Text numberOfLines={1} ellipsizeMode="tail" style={[textStyle, { paddingLeft: leftIcon ? 10 : 0 }]}>{title}</Text>
      <TouchableOpacity onPress={onPressSetting}>
        <Ionicons name={leftIcon} style={[leftButtonStyle, { paddingLeft: detail ? 10 : 25 }]} color={leftColor} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 3,
    position: 'relative',
    height: 90
  },
  textStyle: {
    color: '#fff',
    fontSize: 28,
    width: w - 40,
    fontFamily: 'AvenirNext-DemiBold',
    paddingTop: 50
  },
  leftButtonStyle: {
    paddingTop: 50,
    fontSize: 35
  }
})

export { Header }
