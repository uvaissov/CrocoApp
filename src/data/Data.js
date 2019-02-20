import React from 'react'
import { AsyncStorage } from 'react-native'
import UUIDGenerator from 'react-native-uuid-generator'
import { COMMANDS_STORE } from '../constant/constants'

export default class Storage extends React.Component {
  static _removeCommandsData = async (parent) => {
    try {
      await AsyncStorage.removeItem(COMMANDS_STORE)
      await Storage._getCommandsData(parent)
    } catch (error) {
      console.log(error)
    }
  }
  static _addCommandsData = async (parent, command) => {
    try {
      const data = JSON.parse(await AsyncStorage.getItem(COMMANDS_STORE))
      await UUIDGenerator.getRandomUUID().then((uuid) => {
        data.commands.push({ id: uuid, name: command.name, subtitle: command.subtitle })
      })
      await AsyncStorage.mergeItem(COMMANDS_STORE, JSON.stringify(data), () => {
        parent._dataToState(data.commands)
      })
    } catch (error) {
      console.error(error)
    }
  }

  static _editCommandsData = async (parent, command, isPerson) => {
    try {
      const commandData = command
      const data = JSON.parse(await AsyncStorage.getItem(COMMANDS_STORE))
      for (let i = 0; i < data.commands.length; i++) {
        if (data.commands[i].id === commandData.id) {
          delete commandData.person
          data.commands[i] = commandData
        }
      }
      await AsyncStorage.mergeItem(COMMANDS_STORE, JSON.stringify(data), () => {
        const view = isPerson === true ? 'editCommand' : 'settting'
        parent._dataToState(data.commands, view)
      })
    } catch (error) {
      console.error(error)
    }
  }

  static _deleteCommandsData = async (parent, command) => {
    try {
      const data = JSON.parse(await AsyncStorage.getItem(COMMANDS_STORE))
      for (let i = 0; i < data.commands.length; i++) {
        if (data.commands[i].id === command.id) {
          data.commands.splice(i, 1)
        }
      }
      await AsyncStorage.mergeItem(COMMANDS_STORE, JSON.stringify(data), () => {
        parent._dataToState(data.commands)
      })
    } catch (error) {
      console.error(error)
    }
  }

  static _getCommandsData = async (parent) => {
    try {
      let data = await AsyncStorage.getItem(COMMANDS_STORE)
      console.log('10')
      if (data === null) {
        console.log('13')
        data = { commands: [] }
        await UUIDGenerator.getRandomUUID().then((uuid) => {
          data.commands.push({ id: uuid, name: 'Команда 1', subtitle: 'Капитан 1', persons: [] })
        })
        await UUIDGenerator.getRandomUUID().then((uuid) => {
          data.commands.push({ id: uuid, name: 'Команда 2', subtitle: 'Капитан 2', persons: [] })
        })
        await AsyncStorage.setItem(COMMANDS_STORE, JSON.stringify(data), () => {
          parent._dataToState(data.commands)
        })
      } else {
        console.log('45')
        parent._dataToState(JSON.parse(data).commands)
      }
    } catch (error) {
      console.error(error)
    }
  }
}
