import React, { Component } from 'react'
import { View } from 'react-native'
import { Header, Rules, SubmitButton } from '../component'
import { WHITE, COLOR_5 } from '../constant/constants'
import { cssWelcome } from '../styles'

export default class MainPage extends Component {
  componentDidMount() {
  }
  componentDidUpdate() {
  }
  render() {
    const { navigation } = this.props
    return (
      <View style={cssWelcome.container}>
        <Header
          title="Главная"
          headerColor={COLOR_5}
          onPress={() => navigation.openDrawer()}
          leftIcon='ios-menu'
          leftColor={WHITE}
        />
        <Rules />
        <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
          <SubmitButton
            onPress={() => this.props.navigation.navigate('Game')} text="К ИГРЕ"
          />
        </View>
      </View>
    )
  }
}
