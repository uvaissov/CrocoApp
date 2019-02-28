import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TouchableScale from 'react-native-touchable-scale'
//import Ionicons from 'react-native-vector-icons/Ionicons'
import { w, COLOR_5, COLOR_1 } from '../constant/constants'

const TimerInput = ({
  onLeftPress,
  onRightPress,
  value
}) => {
  const { view, buttonView } = styles
  return (
    <View style={view}>
      <View style={{ borderRightWidth: 2, borderRightColor: COLOR_5}}>
        <TouchableScale
          style={buttonView} onPress={onLeftPress} activeScale={0.9}
        >
          <Text style={{ fontSize: 20}}>-10с</Text>
        </TouchableScale>
      </View>
      <View>
        <Text style={{ fontSize: 25, fontWeight: 'bold'}}>{value} сек</Text>
      </View>
      <View style={{ borderLeftWidth: 2, borderLeftColor: COLOR_5}}>
        <TouchableScale
          style={buttonView} onPress={onRightPress} activeScale={0.9}
        >
          <Text style={{ fontSize: 20}}>+10с</Text>
        </TouchableScale>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    width: w / 1.8,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: COLOR_1,
    borderColor: COLOR_5,
    shadowColor: '#000',
    elevation: 3,
    shadowOffset: { width: 15, height: 25},
    shadowOpacity: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 5
  }
})

export { TimerInput }
