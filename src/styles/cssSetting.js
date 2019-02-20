import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
  view: {
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  list: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 5
  },
  buttonContainer: {
    justifyContent: 'flex-start',
    borderWidth: 1,
    borderColor: 'black'
  },
  SubmitButtonStyle: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#00BCD4',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  item: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 15
  },
  itemContainer: {
    margin: 5,
    backgroundColor: '#007aff'
  },
  itemAvatarContainer: {
    backgroundColor: '#eef0f3'
  },
  itemTitle: {
    color: '#fff',
    fontWeight: 'bold'
  }
})

export default style
