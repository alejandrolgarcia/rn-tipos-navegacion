import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme/appTheme';
import { Text } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

  const { top } = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{
        paddingTop: top
      }}
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      tabBarOptions={{
        pressColor: colors.primary,
        showIcon: true,
        indicatorStyle: {
          backgroundColor: colors.primary
        },
        // Quitar bordes
        style: {
          shadowColor: 'transparent',
          elevation: 0 
        },
      }}
      screenOptions={ ({ route }) => ({
        tabBarIcon: ({ color, focused }) => {
          
          let iconName: string = '';
          switch ( route.name ) {
            case 'Chat':
              iconName = "chatbubble-outline"
              break;
              
            case 'Contacts':
              iconName = "person-add-outline"
              break;

            case 'Albums':
              iconName = "images-outline"
              break;

          }

          return <Icon name={ iconName } size={ 25 } color={ colors.primary } />
        }
      })}
    >
      <Tab.Screen name="Chat" component={ ChatScreen } />
      <Tab.Screen name="Contacts" component={ ContactsScreen } />
      <Tab.Screen name="Albums" component={ AlbumsScreen } />
    </Tab.Navigator>
  );
}