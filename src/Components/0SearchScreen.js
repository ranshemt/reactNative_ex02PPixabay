import React from 'react'
import { View, Text, Image } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import SearchBar from './SearchBar/SearchBar.js'
import ToggleView from './ToggleView/ToggleView'
import ImagesView from './ImagesView/ImagesView'

const mapStateToProps = ({ SearchReducer }) => ({
  loading: SearchReducer.loading,
  amountCurrQuery: SearchReducer.amountCurrQuery,
  error: SearchBar.error
})

const SearchScreen = props => {
  return (
    <View>
      <SearchBar />
      <ToggleView />
      {!props.loading && props.error != null && <Text>{props.error}</Text>}
      {!props.loading && props.amountCurrQuery === -1 && props.error == null && (
        <Text>Use the search bar to find images from PixaBay</Text>
      )}
      {!props.loading && props.amountCurrQuery === 0 && props.error == null && (
        <Text>No results found</Text>
      )}
      {props.loading && <Image source={require('../Images/Loader.gif')} />}

      {!props.loading && props.amountCurrQuery > 0 && <ImagesView />}
    </View>
  )
}

SearchScreen.propTypes = {
  loading: PropTypes.bool.isRequired,
  amountCurrQuery: PropTypes.number.isRequired,
  error: PropTypes.string
}

export default connect(
  mapStateToProps,
  () => ({})
)(SearchScreen)
