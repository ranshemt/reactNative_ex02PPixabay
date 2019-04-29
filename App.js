import { createStackNavigator, createAppContainer } from 'react-navigation'
import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import AppStyles from './App.styles'
import SearchScreen from './src/Components/0SearchScreen'
import Favorites from './src/Components/1Favorites'
import FullImageScreen from './src/Components/FullImage/FullImage'
const MainNav = createStackNavigator(
  {
    SearchScreen: {
      screen: SearchScreen,
      navigationOptions: ({ navigation }) => ({
        header: (
          <View style={AppStyles.container}>
            <Text style={AppStyles.title}>Image Browsing - Search</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
              <Icon name="heart" size={30} color="#ffffff" />
            </TouchableOpacity>
          </View>
        )
      })
    },
    Favorites: {
      screen: Favorites,
      navigationOptions: ({ navigation }) => ({
        header: (
          <View style={AppStyles.container}>
            <Text style={AppStyles.title}>Image Browsing - Favorites</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
              <Icon name="search" size={30} color="#ffffff" />
            </TouchableOpacity>
          </View>
        )
      })
    },
    FullImageScreen: {
      screen: FullImageScreen,
      navigationOptions: ({ navigation }) => ({
        header: (
          <View style={[AppStyles.container, AppStyles.rowReverse]}>
            <Text style={AppStyles.title}>Full Image</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="arrow-left" size={30} color="#ffffff" />
            </TouchableOpacity>
          </View>
        )
      })
    }
  },
  {
    initialRouteName: 'SearchScreen'
  }
)
const App = createAppContainer(MainNav)
export default App
