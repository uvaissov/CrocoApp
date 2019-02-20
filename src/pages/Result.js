import React, { Component } from 'react'
import { Alert, Text, View } from 'react-native'
import { Header } from '../component/Header'
import { WHITE, COLOR_4 } from '../constant/constants'
import { cssResult } from '../styles'

export default class Result extends Component {
  _pressToButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    const { navigation } = this.props
    return (
      <View style={cssResult.container}>
        <Header
          title="Результаты"
          headerColor={COLOR_4}
          onPress={() => navigation.openDrawer()}
          leftIcon='ios-menu'
          leftColor={WHITE}
        />
        <Text>Результаты</Text>
      </View>
    )
  }
}
