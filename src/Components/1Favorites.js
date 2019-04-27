import React, { Component } from 'react'
import { View, Text } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import ImageGrid from './ImagesView/ImageGrid'

class Favorites extends Component {
  constructor(props) {
    super(props)
    this.state = {
      empty: true,
      images: []
    }
    this.getFavs = this.getFavs.bind(this)
  }
  async getFavs() {
    let keys = []
    try {
      keys = await AsyncStorage.getAllKeys()
    } catch (e) {
      return []
    }
    let values = []
    try {
      values = await AsyncStorage.multiGet(keys)
    } catch (e) {
      return []
    }
    const images = values.map(currPair => JSON.parse(currPair[1]))
    return images
  }
  async componentDidMount() {
    const images = await this.getFavs()
    this.setState({ empty: images.length === 0, images })
  }
  render() {
    return (
      <View>
        {this.state.empty && <Text>No favorite images..</Text>}
        {!this.state.empty && <ImageGrid data={this.state.images} />}
      </View>
    )
  }
}

export default Favorites
