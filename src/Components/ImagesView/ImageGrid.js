import React from 'react'
import { Image, FlatList, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import PropTypes from 'prop-types'
import styles from './ImagesView.styles'

const GridImage = props => {
  return (
    <FlatList
      data={props.data}
      numColumns={3}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity onPress={() => props.navigation.navigate('FullImageScreen', { item })}>
            <Image style={styles.G_image} source={{ uri: item.previewURL }} />
          </TouchableOpacity>
        )
      }}
    />
  )
}
GridImage.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
      tags: PropTypes.string.isRequired,
      previewURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    })
  ),
  navigation: PropTypes.object
}
export default withNavigation(GridImage)
