import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E90FF'
  },
  list: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  card: {
    width: '45%',
    height: 150,
    marginBottom: 15,
    marginTop: 20,
    zIndex: 1,
    left: 5,
    marginRight: 10
  }
})
export default styles
