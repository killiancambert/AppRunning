import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Historic from '../screens/historic';
import Settings from '../screens/settings';
import Run from '../screens/run';
import { View } from 'react-native';

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Historic: {
      screen: Historic,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-list'} />
          </View>
        ),
      }
    },
    Run: {
      screen: Run,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-walk'} />
          </View>
        ),
      }
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-settings'} />
          </View>
        ),
      }
    },
  },
  {
    initialRouteName: 'Run',
    activeColor: '#fff',
    inactiveColor: '#f4aba4',
    barStyle: { backgroundColor: '#E74C3C' },
    shifting: true,
  }
)

export default createAppContainer(TabNavigator);