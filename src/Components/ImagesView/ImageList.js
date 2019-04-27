import React from 'react'
import { Image, FlatList, TouchableOpacity, Text, View } from 'react-native'
import { withNavigation } from 'react-navigation'
import PropTypes from 'prop-types'
import styles from './ImagesView.styles'

const ListImage = props => {
  return (
    <FlatList
      data={props.data}
      numColumns={1}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            style={styles.L_container}
            onPress={() => props.navigation.navigate('FullImageScreen', { item })}
          >
            <Image style={styles.L_image} source={{ uri: item.previewURL }} />
            <View style={styles.L_detailsContainer}>
              <Text style={styles.L_title}>{item.tags}</Text>
              <Text>
                Views: {item.views} Likes: {item.likes}
              </Text>
            </View>
          </TouchableOpacity>
        )
      }}
    />
  )
}
ListImage.propTypes = {
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
export default withNavigation(ListImage)
