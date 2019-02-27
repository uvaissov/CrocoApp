import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
//import Ionicons from 'react-native-vector-icons/Ionicons'
import { SubmitButton } from './'
import { w, WHITE, COLOR_2, COLOR_5 } from '../constant/constants'

const ShowCommandView = ({
  parent
}) => {
  const { showCommandView, showCommandViewText, showCommandViewTextPerson } = styles
  return (
    <View style={showCommandView}>
      <Text style={{ fontSize: 15}}>Очередь команды</Text>
      <Text style={showCommandViewText}>"{parent.state.game.commandName}"</Text>
      <Text style={{ fontSize: 15}}>Команда соперник выберает слово(фразу) и показывает его игроку</Text>
      <Text style={showCommandViewTextPerson}>{parent.state.game.personName}</Text>

      <SubmitButton
        onPress={() => parent._startGame()} text="Приступить"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    position: 'relative',
    padding: 15,
    backgroundColor: WHITE
  },
  showCommandView: {
    margin: 15,
    padding: 15,
    width: w - 30,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: COLOR_2,
    borderColor: COLOR_5,
    shadowColor: '#000',
    elevation: 3,
    shadowOffset: { width: 15, height: 25},
    shadowOpacity: 1,
    alignSelf: 'center',
    alignItems: 'center'

  },
  showCommandViewText: {
    color: WHITE,
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 25
  },
  showCommandViewTextPerson: {
    color: WHITE,
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 25,
    marginBottom: 25
  }
})

export { ShowCommandView }
