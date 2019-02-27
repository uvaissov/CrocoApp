import React from 'react'
import { Text, TextInput, View, StyleSheet, ScrollView, Alert } from 'react-native'
import Modal from 'react-native-modal'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { SubmitButton, IconButton, CurcleButton } from './'
import { w, WHITE, BLACK, COLOR_2, COLOR_5 } from '../constant/constants'
import Storage from '../data/Data'

const CommandItemEditView = ({
  parent
}) => {
  const { viewStyle, textStyle, personContainer } = styles

  this.setName = ({text}) => {
    parent.setState((state) => {
      const command = state.command
      command.name = text
      return {command}
    })
  }
  this.setPerson = ({text}) => {
    parent.setState((state) => {
      const command = state.command
      command.person = text
      return {command}
    })
  }
  this.setSubTitle = ({text}) => {
    parent.setState((state) => {
      const command = state.command
      command.subtitle = text
      return {command}
    })
  }
  this.cancel = () => {
    parent.setState((state) => {
      let view = state.view
      view = 'setting'
      return {view}
    })
  }
  this.addPerson = () => {
    if (!parent.state.command.person || parent.state.command.person.length === 0) {
      Alert.alert(
        'Внимание',
        'Необходимо указать имя участка',
        [
          {text: 'OK'}
        ]
      )
      return
    }
    parent.state.command.persons.push(parent.state.command.person)
    this.setModalVisible(false)
    this.saveCommandData(true)
  }
  this.deletePerson = (index, name) => {
    Alert.alert(
      'Внимание',
      `Вы действительно ходите удалить участника команды "${name}"?`,
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {text: 'OK',
          onPress: () => {
            parent.state.command.persons.splice(index, 1)
            this.saveCommandData(true)
          }
        }
      ]
    )
  }

  this.saveCommandData = (isPerson) => {
    parent.setState((state) => {
      let loaded = state.loaded
      loaded = false
      return {loaded}
    })
    if (parent.state.command.id != null) {
      Storage._editCommandsData(parent, parent.state.command, isPerson)
    } else {
      Storage._addCommandsData(parent, parent.state.command)
    }
  }

  this.deleteCommandData = () => {
    parent.setState((state) => {
      let loaded = state.loaded
      loaded = false
      return {loaded}
    })
    if (parent.state.command.id != null) {
      Storage._deleteCommandsData(parent, parent.state.command)
    }
  }

  this.setModalVisible = (visible) => {
    parent.setState({modalVisible: visible})
  }

  return (
    <ScrollView style={[viewStyle]}>
      <Modal isVisible={parent.state.modalVisible}>
        <View style={[personContainer, { backgroundColor: WHITE, padding: 5, width: w * 0.95 }]}>
          <Text style={{textAlign: 'center'}}>Укажите имя участника</Text>
          <TextInput
            style={{borderColor: 'gray', borderWidth: 1, margin: 10, textAlign: 'center', fontSize: 20, backgroundColor: WHITE}}
            onChangeText={(text) => this.setPerson({text})}
            value={parent.state.command.person}
          />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
            <SubmitButton
              onPress={() => { this.addPerson() }}
              text="Добавить" buttonStyle={{ backgroundColor: WHITE }} textStyle={{color: BLACK }} iconName="md-person-add" iconColor={BLACK}
            />
            <SubmitButton
              onPress={() => { this.setModalVisible(false) }}
              text="Отмена" buttonStyle={{ backgroundColor: WHITE }} textStyle={{color: BLACK }} iconName="md-close" iconColor={BLACK}
            />
          </View>
        </View>
      </Modal>
      <Text numberOfLines={1} ellipsizeMode="tail" style={[textStyle, {fontSize: 20, paddingTop: 50}]}>{'Название команды'}</Text>
      <TextInput
        style={{borderColor: 'gray', borderWidth: 1, margin: 10, textAlign: 'center', fontSize: 20, backgroundColor: WHITE}}
        onChangeText={(text) => this.setName({text})}
        value={parent.state.command.name}
      />
      <View style={{ alignItems: 'center'}}>
        <Text style={{textAlign: 'center'}}>Участники команды</Text>
        <View style={personContainer}>
          {parent.state.command.persons.map((direction, index) => {
            const key = `person-${index}`
            return (
              <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 5, paddingBottom: 5}} key={key} >
                <Ionicons name="md-person" color={COLOR_5} style={{fontSize: 20, marginLeft: 5, paddingRight: 5}} />
                <Text style={{fontSize: 20, marginLeft: 5, paddingRight: 5}}>{direction}</Text>
                <IconButton onPress={() => { this.deletePerson(index, direction) }} iconName="md-close-circle-outline" iconColor={COLOR_5} buttonStyle={{marginLeft: 'auto'}} iconStyle={{fontSize: 20}} />
              </View>
            )
          })}
        </View>
        <CurcleButton
          onPress={() => { this.setModalVisible(true) }}
          buttonStyle={{ backgroundColor: WHITE, width: 60 }} textStyle={{color: BLACK }} iconName="md-person-add" iconColor={BLACK}
        />

      </View>

      <View
        style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 30}}
      >
        <SubmitButton
          onPress={() => this.saveCommandData(false)} text="Сохранить" buttonStyle={{ backgroundColor: COLOR_2 }}
        />
        <SubmitButton
          onPress={() => this.cancel()} text="Назад"
        />
      </View>
      {parent.state.command.id != null &&
        <View style={{marginTop: 15, flexDirection: 'row', justifyContent: 'center', marginBottom: 15}} >
          <SubmitButton
            onPress={() => this.deleteCommandData()} text="Удалить команду" iconName="ios-trash"
          />
        </View>
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1
  },
  textStyle: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'AvenirNext-DemiBold'
  },
  personContainer: {
    marginTop: 10,
    padding: 15,
    width: w * 0.8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: WHITE
  }
})

export { CommandItemEditView }
