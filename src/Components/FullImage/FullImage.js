import React, { Component } from 'react'
import { ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation'
import AsyncStorage from '@react-native-community/async-storage'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './FullImage.styles'
class FullImage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: {},
      isFav: false,
      styleSheet: {}
    }
    this.isFav = this.isFav.bind(this)
    this.addFav = this.addFav.bind(this)
    this.removeFav = this.removeFav.bind(this)
  }
  async isFav(id) {
    try {
      const value = await AsyncStorage.getItem(`@img.${id}`)
      if (value) return true
      return false
    } catch (e) {
      return false
    }
  }
  async addFav() {
    try {
      await AsyncStorage.setItem(`@img.${this.state.item.id}`, JSON.stringify(this.state.item))
    } catch (e) {
      return false
    }
    this.setState(prevState => ({
      ...prevState,
      isFav: true
    }))
    return true
  }
  async removeFav() {
    try {
      await AsyncStorage.removeItem(`@img.${this.state.item.id}`)
    } catch (e) {
      return false
    }
    this.setState(prevState => ({
      ...prevState,
      isFav: false
    }))
    return true
  }
  async componentDidMount() {
    const item = this.props.navigation.getParam('item', { item: { id: -111 } })
    this.setState({ item, isFav: false })
    const isFav = await this.isFav(item.id)
    const style = StyleSheet.create({
      // eslint-disable-next-line react-native/no-unused-styles
      image: {
        width: '100%',
        height: undefined,
        aspectRatio: item.width / item.height
      }
    })
    this.setState({ item, isFav, styleSheet: style })
  }
  render() {
    return (
      <ScrollView>
        <Image
          style={this.state.styleSheet.image}
          source={{ uri: this.state.item.largeImageURL }}
        />
        {!this.state.isFav && (
          <TouchableOpacity style={styles.like} onPress={() => this.addFav()}>
            <Icon name="heart" size={50} color="#000000" />
          </TouchableOpacity>
        )}
        {this.state.isFav && (
          <TouchableOpacity style={styles.like} onPress={() => this.removeFav()}>
            <Icon name="trash" size={50} color="#000000" />
          </TouchableOpacity>
        )}
      </ScrollView>
    )
  }
}
FullImage.propTypes = {
  navigation: PropTypes.object.isRequired
}
export default withNavigation(FullImage)
