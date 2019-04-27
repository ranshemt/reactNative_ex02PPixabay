import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import styles from './ImagesView.styles'
import ImageGrid from './ImageGrid'
import ImageList from './ImageList'

const mapStateToProps = ({ ToggleReducer, SearchReducer }) => ({
  mode: ToggleReducer.mode,
  images: SearchReducer.results
})

const ImagesView = props => {
  return (
    <View>
      <Text style={styles.W_title}>{props.images.length} Images Found</Text>
      <View>
        {props.mode === 'grid' && <ImageGrid data={[...props.images]} />}
        {props.mode === 'list' && <ImageList data={[...props.images]} />}
      </View>
    </View>
  )
}

ImagesView.propTypes = {
  mode: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.object)
}

export default connect(
  mapStateToProps,
  () => ({})
)(ImagesView)
