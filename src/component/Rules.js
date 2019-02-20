import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { WHITE, BLACK, COLOR_5 } from '../constant/constants'

const Rules = () => {
  const { viewStyle, textHeaderStyle, textNormalStyle, textLeftNormalStyle, textLeftGreenStyle, textLeftRedStyle } = styles
  return (
    <View style={viewStyle}>
      <Text numberOfLines={1} ellipsizeMode="tail" style={textHeaderStyle}>{'Правила игры «Крокодил»'}</Text>
      <Text ellipsizeMode="tail" style={textNormalStyle}>{'Необходимо объяснить загадонное слово командой противником, своей команде'}</Text>
      <Text ellipsizeMode="tail" style={textLeftNormalStyle}>{'Разрешается:'}</Text>
      <Text ellipsizeMode="tail" style={textLeftGreenStyle}><Ionicons name="md-add" />{' Использовать жесты и мимику, пляски, прыжки и ужимки;'}</Text>
      <Text ellipsizeMode="tail" style={textLeftGreenStyle}><Ionicons name="md-add" />{' Принимать любые позы;'}</Text>
      <Text ellipsizeMode="tail" style={textLeftGreenStyle}><Ionicons name="md-add" />{' Показывать слово целиком или по частям;'}</Text>
      <Text ellipsizeMode="tail" style={textLeftGreenStyle}><Ionicons name="md-add" />{' Кивать или мотать головой: «да» и «нет»'}</Text>
      <Text ellipsizeMode="tail" style={textLeftNormalStyle}>{'Запрещается:'}</Text>
      <Text ellipsizeMode="tail" style={textLeftRedStyle}><Ionicons name="md-remove" />{' Писать и рисовать;'}</Text>
      <Text ellipsizeMode="tail" style={textLeftRedStyle}><Ionicons name="md-remove" />{' Произносить слоги и буквы (даже без звука, одними губами);'}</Text>
      <Text ellipsizeMode="tail" style={textLeftRedStyle}><Ionicons name="md-remove" />{' Показывать буквы или передавать буквы языком глухонемых'}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    position: 'relative',
    padding: 15,
    backgroundColor: WHITE
  },
  textHeaderStyle: {
    textAlign: 'center',
    color: BLACK,
    fontSize: 28,
    fontFamily: 'AvenirNext-DemiBold',
    fontWeight: 'bold',
    paddingTop: 25
  },
  textNormalStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: BLACK,
    fontSize: 15,
    paddingTop: 5
  },
  textLeftNormalStyle: {
    color: BLACK,
    fontSize: 15,
    paddingTop: 5,
    fontWeight: 'bold'
  },
  textLeftGreenStyle: {
    color: COLOR_5,
    fontSize: 15,
    paddingTop: 5
  },
  textLeftRedStyle: {
    color: COLOR_5,
    fontSize: 15,
    paddingTop: 5
  }
})

export { Rules }
