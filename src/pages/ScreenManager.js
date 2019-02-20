import React from 'react'
import { createDrawerNavigator } from 'react-navigation'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MainPage from './MainPage'
import Game from './Game'
import Result from './Result'
import { DARK_GRAY } from '../constant/constants'

const Screens = createDrawerNavigator({
  Home: {
    screen: MainPage,
    navigationOptions: {
      drawerLabel: 'Главная',
      drawerIcon: ({ tintColor }) => (
        <MaterialIcons name="grade" size={24} style={{ color: tintColor }} />
      )
    }
  },
  Game: {
    screen: Game,
    navigationOptions: {
      drawerLabel: 'Игра',
      drawerIcon: ({ tintColor }) => (
        <MaterialIcons name="favorite" size={24} style={{ color: tintColor }} />
      )
    }
  },
  Result: {
    screen: Result,
    navigationOptions: {
      drawerLabel: 'Результаты',
      drawerIcon: ({ tintColor }) => (
        <MaterialIcons name="pets" size={24} style={{ color: tintColor }} />
      )
    }
  }
},
{
  initialRouteName: 'Home',
  contentOptions: {
    activeTintColor: DARK_GRAY,
    itemsContainerStyle: {
      marginVertical: 65
    }
  }
})

export default Screens
