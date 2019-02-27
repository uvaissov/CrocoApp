import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
//import Ionicons from 'react-native-vector-icons/Ionicons'
import { SubmitButton, CurcleButton } from './'
import { w, BLACK, WHITE, COLOR_2, COLOR_4, COLOR_5 } from '../constant/constants'

const ShowGameView = ({
  parent
}) => {
  const { showCommandView, showCommandViewText, showCommandViewTextPerson } = styles
  return (
    <View style={showCommandView}>
      <Text style={{ fontSize: 20, fontWeight: 'bold'}}>Играет команда</Text>
      <Text style={showCommandViewText}>"{parent.state.game.commandName}"</Text>
      {
        parent.state.game.personName &&
        <View>
          <Text style={{ fontSize: 15}}>Участник</Text>
          <Text style={showCommandViewTextPerson}>{parent.state.game.personName}</Text>
        </View>
      }
      <View style={{alignItems: 'center', marginBottom: 15}}>
        <Text>Выберите слово</Text>
        <Text style={{color: COLOR_4, fontSize: 20, marginTop: 10 }}>{parent.state.game.word}</Text>
        <TouchableOpacity onPress={() => parent._nextWord()}>
          <Text style={{color: WHITE, fontSize: 20, textDecorationLine: 'underline', margin: 10}}>Изменить слово</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <CurcleButton iconName='md-remove' iconColor={BLACK} />

        <CurcleButton iconName='md-add' iconColor={BLACK} />
      </View>
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

export { ShowGameView }
