import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import RadioGroup from 'react-native-radio-buttons-group'
//import Ionicons from 'react-native-vector-icons/Ionicons'
import { SubmitButton, TimerInput } from './'
import { w, WHITE, COLOR_1, COLOR_2, COLOR_4, COLOR_5 } from '../constant/constants'

const ShowGameView = ({
  parent
}) => {
  const { showCommandView, showCommandViewText, showCommandViewTextPerson, radioView } = styles
  this._changeTime = (step) => {
    parent.setState((state) => {
      const game = state.game
      game.timeout += step
      if (game.timeout < 10) {
        game.timeout = 10
      } else if (game.timeout > 180) {
        game.timeout = 180
      }
      return {game}
    })
  }
  this._onPressRadionTypes = types => parent.setState({types})
  this._onPressRadionLevels = levels => parent.setState({levels})
  console.log(parent.state.game)
  return (
    <View style={showCommandView}>
      <Text style={{ fontSize: 20, fontWeight: 'bold'}}>Играет команда</Text>
      <Text style={showCommandViewText}>"{parent.state.game.commandName}"</Text>
      {
        parent.state.game.personName &&
        <View>
          <Text style={{ fontSize: 15, textAlign: 'center'}}>Участник</Text>
          <Text style={showCommandViewTextPerson}>{parent.state.game.personName}</Text>
        </View>
      }
      <View>
        <Text>Слова/Фразы</Text>
        <View style={[radioView, {marginBottom: 5}]} >
          <RadioGroup radioButtons={parent.state.types} flexDirection='row' onPress={this._onPressRadionTypes} />
        </View>
        <Text>Сложность</Text>
        <View style={radioView}>
          <RadioGroup radioButtons={parent.state.levels} flexDirection='row' onPress={this._onPressRadionLevels} />
        </View>
      </View>
      <View style={{alignItems: 'center', marginBottom: 15}}>
        <Text>Выберите слово</Text>
        <Text style={{color: COLOR_4, fontSize: 20, marginTop: 10 }}>{parent.state.game.word}</Text>
        <TouchableOpacity onPress={() => parent._nextWord()}>
          <Text style={{color: WHITE, fontSize: 20, textDecorationLine: 'underline', margin: 10}}>Изменить слово</Text>
        </TouchableOpacity>
      </View>
      <TimerInput value={parent.state.game.timeout} onLeftPress={() => this._changeTime(-10)} onRightPress={() => this._changeTime(10)} />
      <SubmitButton
        onPress={() => parent._startGame1()} text="НАЧАТЬ"
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
  radioView: {
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: COLOR_1,
    borderColor: COLOR_5
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
    marginTop: 5,
    marginBottom: 25
  }
})

export { ShowGameView }
