import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { Header, CommandList, CommandItemEditView, SubmitButton, ShowCommandView, ShowGameView } from '../component'
import { w, WHITE, COLOR_4, COLOR_1 } from '../constant/constants'
import wordsData from '../constant/words.json'
import Storage from '../data/Data'
//import { cssSetting } from '../styles'

export default class PlayGround extends React.Component {
  state = {
    selected: (new Map(): Map<string, boolean>),
    dataBind: [],
    loaded: false,
    modalVisible: false,
    view: 'setting',
    command: {},
    game: {}
  }

  componentDidMount = async () => {
    Storage._getCommandsData(this)
  }
  componentDidUpdate() {
  }
  _clearData = () => {
    Storage._removeCommandsData(this)
  }
  _showViewGame = () => {
    this.setState((state) => {
      const game = this.state.game
      const dataBind = state.dataBind
      let command
      for (let i = 0; i < dataBind.length; i++) {
        if (dataBind[i].id === game.commandId) {
          if ((i + 1) < dataBind.length) {
            command = dataBind[i + 1]
          }
          break
        }
      }
      if (!command) {
        command = dataBind[0]
      }
      if (command) {
        game.commandId = command.id
        game.commandName = command.name
        if (command.persons && command.persons.length > 0) {
          if (game.personIdx && (game.personIdx + 1) < command.persons.length) {
            game.personName = command.persons[(game.personIdx + 1)]
            game.personIdx += 1
          } else {
            game.personName = command.persons[0]
            game.personIdx = 0
          }
        }
      }

      let view = state.view
      view = 'showCommand'
      return {view, game}
    })
  }
  _startGame = () => {
    this._nextWord()
    this.setState((state) => {
      let view = state.view
      view = 'game'
      return {view}
    })
  }
  _startGame1 = () => {
    this.setState((state) => {
      let view = state.view
      view = 'game1'
      return {view}
    })
  }

  _nextWord = () => {
    let word = this.state.game.word
    if (word != null) {
      let isFounded = false
      for (let i = 0; i < wordsData.length; i++) {
        if (word === wordsData[i].word) {
          isFounded = true
        } else if (isFounded === true) {
          word = wordsData[i].word
          break
        }
      }
    } else {
      word = wordsData[0].word
    }
    this.setState((state) => {
      const game = state.game
      game.word = word
      return {game}
    })
  }

  render() {
    if (this.state.loaded === false) {
      return (<ActivityIndicator
        animating
        color={COLOR_4} size="large" style={{margin: 15}}
      />)
    }
    const { navigation } = this.props
    //Режим Иформации о команде
    if (this.state.view === 'showCommand') {
      return (
        <View style={styles.view}>
          <Header
            title="Игра" headerColor={COLOR_4} onPress={() => navigation.openDrawer()} leftIcon='ios-menu' leftColor={WHITE} parent={this} settingInit
          />
          <ShowCommandView parent={this} />
        </View>
      )
    }
    //Режим ИГРЫ
    if (this.state.view === 'game') {
      return (
        <View style={styles.view}>
          <Header
            title="Игра" headerColor={COLOR_4} onPress={() => navigation.openDrawer()} leftIcon='ios-menu' leftColor={WHITE} parent={this} settingInit
          />
          <ShowGameView parent={this} />
        </View>
      )
    }//Режим ИГРЫ
    if (this.state.view === 'game1') {
      return (
        <View style={styles.view}>
          <Header
            title="Игра" headerColor={COLOR_4} onPress={() => navigation.openDrawer()} leftIcon='ios-menu' leftColor={WHITE} parent={this} settingInit
          />
          <ShowGameView parent={this} />
        </View>
      )
    }
    //Режим НАСТРОЙКИ КОММАНД
    if (this.state.view === 'setting') {
      return (
        <View style={styles.view}>
          <Header
            title="Настройка игры" headerColor={COLOR_4} onPress={() => navigation.openDrawer()} leftIcon='ios-menu' leftColor={WHITE}
          />
          <CommandList
            parentState={this.state}
            parent={this}
          />
          <View style={styles.buttonContainer}>
            <SubmitButton
              onPress={() => this._showViewGame()} text="Начать" buttonStyle={{width: w / 1.5}}
            />
            <SubmitButton
              onPress={() => this._clearData()} text="Новая игра" buttonStyle={{width: w / 1.5}}
            />
          </View>
        </View>
      )
    }
    //Режим Редактирование и добавление комманды
    if (this.state.view === 'editCommand') {
      return (
        <View style={styles.view}>
          <Header
            title="Редактор команды" headerColor={COLOR_4} onPress={() => navigation.openDrawer()} leftIcon='ios-menu' leftColor={WHITE}
          />
          <CommandItemEditView
            parent={this}
          />
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: COLOR_1
  },
  buttonContainer: {
    alignItems: 'center'
  }
})
