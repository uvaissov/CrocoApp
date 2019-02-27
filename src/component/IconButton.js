import React from 'react'
import TouchableScale from 'react-native-touchable-scale'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { BLACK } from '../constant/constants'

const IconButton = ({
  onPress,
  buttonStyle,
  iconName,
  iconColor,
  iconStyle
}) => {
  return (
    <TouchableScale
      style={[buttonStyle]}
      onPress={onPress}
      activeScale={0.9}
    >
      {iconName &&
        <Ionicons name={iconName} color={iconColor || BLACK} style={[iconStyle, {fontSize: 22}]} />
      }
    </TouchableScale>
  )
}

export { IconButton }
