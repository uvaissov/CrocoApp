import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { CommandItem, SubmitButton } from './'
//import Ionicons from 'react-native-vector-icons/Ionicons'
import { COLOR_1 } from '../constant/constants'

const CommandList = ({
  parentState,
  parent
}) => {
  const { viewStyle, listStyle } = styles
  this._keyExtractor = (item) => item.id
  this._renderItem = ({item}) => (
    <CommandItem
      id={item.id} onPressItem={this._onPressItem} selected={!!parentState.selected.get(item.id)} item={item} title={item.name}
    />
  )
  this._onPressItem = (item) => {
    parent.setState((state) => {
      let view = state.view
      let command = state.command
      command = item      
      view = 'editCommand'
      return {view, command}
    })
  }
  this.addCommand = () => {
    parent.setState((state) => {
      let view = state.view
      let command = state.command
      command = {}
      view = 'editCommand'
      return {view, command}
    })
  }

  return (
    <View style={[viewStyle]}>
      <FlatList
        data={parentState.dataBind} extraData={parentState} keyExtractor={this._keyExtractor} renderItem={this._renderItem} style={listStyle}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
        <SubmitButton
          onPress={() => this.addCommand()} text="Добавить команду"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'flex-start',
    backgroundColor: COLOR_1,
    paddingBottom: 25
  },
  listStyle: {
    padding: 5
  }
})

export { CommandList }
