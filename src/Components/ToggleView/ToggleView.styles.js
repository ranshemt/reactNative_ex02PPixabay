import { StyleSheet } from 'react-native'
const ToggleStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderStyle: 'solid',
    borderWidth: 3,
    borderRadius: 6,
    borderColor: '#000c18'
  },
  item: {
    flex: 1,
    textAlign: 'center'
  },
  regular: {
    color: '#000000',
    fontSize: 17
  },
  chosen: {
    backgroundColor: '#000c18',
    color: '#ffffff',
    fontSize: 17
  }
})
export default ToggleStyles
