import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
  W_container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  W_title: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 20
  },
  G_container: {
    width: 150,
    height: 150
  },
  G_image: {
    width: 125,
    height: 125
  },

  L_container: {
    flex: 1,
    flexDirection: 'row'
  },
  L_image: {
    width: 75,
    height: 75
  },
  L_detailsContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  L_title: {
    fontWeight: 'bold'
  }
})
export default styles
