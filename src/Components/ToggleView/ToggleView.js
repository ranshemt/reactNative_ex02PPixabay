import React from 'react'
import { View, Text } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import ToggleViewActions from './ToggleView.act'
import ToggleStyles from './ToggleView.styles'

const mapStateToProps = ({ ToggleReducer }) => ({
  mode: ToggleReducer.mode
})
const mapDispatchToProps = dispatch => ({
  actions: {
    ToggleViewActions: bindActionCreators(ToggleViewActions, dispatch)
  }
})

const ToggleView = props => {
  return (
    <View style={ToggleStyles.container}>
      <Text
        style={[
          ToggleStyles.item,
          props.mode === 'grid' ? ToggleStyles.chosen : ToggleStyles.regular
        ]}
        onPress={() => props.actions.ToggleViewActions.toggleView(props.mode)}
      >
        Grid View
      </Text>
      <Text
        style={[
          ToggleStyles.item,
          props.mode === 'list' ? ToggleStyles.chosen : ToggleStyles.regular
        ]}
        onPress={() => props.actions.ToggleViewActions.toggleView(props.mode)}
      >
        List View
      </Text>
    </View>
  )
}

ToggleView.propTypes = {
  actions: PropTypes.objectOf(PropTypes.object),
  mode: PropTypes.string.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToggleView)
