import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import { Header, CommandList, CommandItemEditView, SubmitButton } from '../component'
import { w, WHITE, COLOR_4, COLOR_1 } from '../constant/constants'
import wordsData from '../constant/words.json'
import Storage from '../data/Data'
//import { cssSetting } from '../styles'

export default class PlayGround extends React.Component {
  state = {selected: (new Map(): Map<string, boolean>), dataBind: [], loaded: false, modalVisible: false, view: 'setting', command: {persons: []}, game: { commandId: null, word: null, usedWords: [] } };
  componentDidMount = async () => {
    Storage._getCommandsData(this)
  }
  componentDidUpdate() {
  }
  _clearData = () => {
    Storage._removeCommandsData(this)
  }
  _dataToState = (data, toView) => {
    this.setState((state) => {
      let loaded = state.loaded
      let view = state.view
      let dataBind = state.dataBind
      dataBind = []
      if (data) {
        for (const item of data) {
          dataBind.push(item)
        }
      }
      loaded = true
      view = toView || 'setting'
      return {dataBind, loaded, view}
    })
  }

  _startGame = (page) => {
    this.setState((state) => {
      let view = state.view
      view = page
      return {view}
    })
    this._nextWord()
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
      console.log(game)
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
    //Режим ИГРЫ
    if (this.state.view === 'game') {
      return (
        <View style={styles.view}>
          <Header
            title="Игра" headerColor={COLOR_4} onPress={() => navigation.openDrawer()} leftIcon='ios-menu' leftColor={WHITE}
          />
          <View style={styles.buttonContainer}>
            <Text>
              {this.state.game.word}
            </Text>
            <SubmitButton
              onPress={() => this._nextWord()} text="Показать"
            />
            <SubmitButton
              onPress={() => this._startGame('setting')} text="Настройка"
            />
          </View>
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
              onPress={() => this._startGame('game')} text="Начать" buttonStyle={{width: w / 1.5}}
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
