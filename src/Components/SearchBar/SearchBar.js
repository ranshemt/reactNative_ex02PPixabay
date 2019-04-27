import React from 'react'
import { View, TextInput } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import SearchBarActions from './SearchBar.act'
import SearchBarStyles from './SearchBar.styles'

const mapStateToProps = ({ SearchReducer }) => ({
  query: SearchReducer.query
})
const mapDispatchToProps = dispatch => ({
  actions: {
    SearchBarActions: bindActionCreators(SearchBarActions, dispatch)
  }
})

const SearchBar = props => {
  return (
    <View style={SearchBarStyles.container}>
      <TextInput
        style={SearchBarStyles.item}
        placeholder="search for images.."
        onChangeText={text => props.actions.SearchBarActions.onChange(text)}
        onSubmitEditing={() => props.actions.SearchBarActions.fetchImages(props.query)}
        value={props.query}
      />
    </View>
  )
}

SearchBar.propTypes = {
  actions: PropTypes.objectOf(PropTypes.object),
  query: PropTypes.string
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar)
