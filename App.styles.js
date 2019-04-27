import { StyleSheet } from 'react-native'

const AppStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#000c18',
    padding: 7
  },
  rowReverse: {
    flexDirection: 'row-reverse'
  },
  title: {
    color: '#ffffff',
    fontSize: 25
  },
  icon: {
    backgroundColor: '#000c18'
  },
  S_container: {
    flex: 1,
    flexDirection: 'column'
  },
  flex1: {
    flex: 1
  }
})
export default AppStyles
