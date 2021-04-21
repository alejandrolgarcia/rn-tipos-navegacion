import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { StackNavigator } from './StackNavigator';
import { colors } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';

import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs = () => {
  return Platform.OS === 'ios'
    ? <TabsIOS />
    : <TabsAndroid />
}

const BottomTabAndroid = createMaterialBottomTabNavigator();

export const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={ true }
      barStyle={{
        backgroundColor: colors.primary
      }}
      screenOptions={ ({ route }) => ({
        tabBarIcon: ({ color, focused }) => {
          
          let iconName: string = '';
          switch ( route.name ) {
            case 'Tab1Screen':
              iconName = "browsers-outline"
              break;
              
            case 'TopTabNavigator':
              iconName = "documents-outline"
              break;

            case 'StackNavigator':
              iconName = "color-palette-outline"
              break;

          }
          return <Icon name={ iconName } size={ 20 } color={ color } />
        }
      })}
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={ Tab1Screen } />
      <BottomTabAndroid.Screen name="TopTabNavigator" options={{ title: 'Tab2' }} component={ TopTabNavigator } />
      <BottomTabAndroid.Screen name="StackNavigator" options={{ title: 'Stack' }} component={ StackNavigator } />
    </BottomTabAndroid.Navigator>
  );
}

const BottomTabsIOS = createBottomTabNavigator();

export const TabsIOS = () =>  {
  return (
    <BottomTabsIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      tabBarOptions={{
        activeTintColor: colors.primary,
        style: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0 
        },
        labelStyle: {
          fontSize: 15
        }
      }}
      screenOptions={ ({ route }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          
          let iconName: string = '';
          switch ( route.name ) {
            case 'Tab1Screen':
              iconName = "browsers-outline"
              break;
              
            case 'TopTabNavigator':
              iconName = "documents-outline"
              break;

            case 'StackNavigator':
              iconName = "color-palette-outline"
              break;

          }
          return <Icon name={ iconName } size={ 30 } color={ color } />
        }
      })}
      >
      {/* <Tab.Screen name="Tab1Screen" options={{ title: 'Tab1', tabBarIcon: (props) => <Text style={{color: props.color}}>T1</Text> }} component={ Tab1Screen } /> */}
      <BottomTabsIOS.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={ Tab1Screen } />
      <BottomTabsIOS.Screen name="TopTabNavigator" options={{ title: 'Tab2' }} component={ TopTabNavigator } />
      <BottomTabsIOS.Screen name="StackNavigator" options={{ title: 'Stack' }} component={ StackNavigator } />
    </BottomTabsIOS.Navigator>
  );
}