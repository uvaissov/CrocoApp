import React from 'react'
import { StyleSheet } from 'react-native'
import { ListItem } from 'react-native-elements'
import { WHITE, COLOR_2, COLOR_5 } from '../constant/constants'

const CommandItem = ({
  item,
  onPressItem
}) => {
  this._onPress = () => {
    onPressItem(item)
  }
  this.generateSubTitle = (persons) => {
    let subTitle = null
    for (const person of persons) {
      if (person) {
        if (subTitle === null) {
          subTitle = person
        } else {
          subTitle += `, ${person}`
        }
      }
    }
    return subTitle
  }

  return (
    <ListItem
      title={item.name}
      subtitle={this.generateSubTitle(item.persons)}
      titleStyle={styles.itemTitle}
      containerStyle={styles.itemContainer}
      onPress={this._onPress}
      chevronColor="white"
      rightTitle="Изменить"
      chevron
      //leftAvatar={item.avatar_url}
    />
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    margin: 5,
    backgroundColor: COLOR_2,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: COLOR_5,
    shadowColor: '#000',
    elevation: 3,
    shadowOffset: { width: 15, height: 25},
    shadowOpacity: 1
  },
  itemTitle: {
    color: WHITE,
    fontWeight: 'bold'
  },
  itemAvatarContainer: {
    backgroundColor: '#eef0f3'
  }
})
export { CommandItem }
