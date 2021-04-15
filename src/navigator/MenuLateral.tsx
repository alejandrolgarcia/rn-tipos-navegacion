import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { Image, Text, useWindowDimensions, View, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

    const { width, height } = useWindowDimensions();

    return (
        <Drawer.Navigator
            drawerType={ width > height ? 'permanent' : 'front' }
            drawerContent={ ( props ) => <MenuDrawer { ...props } /> }
        >
        <Drawer.Screen name="StackNavigator" component={ StackNavigator } />
        <Drawer.Screen name="SettingsScreen" component={ SettingsScreen } />
        </Drawer.Navigator>
    );
}

const MenuDrawer = ( { navigation }: DrawerContentComponentProps<DrawerContentOptions> ) => {
    return (
        <DrawerContentScrollView>

            {/* Avatar */}
            <View style={ styles.avatarContainer }>
                <Image
                    source={{
                        uri: 'https://www.manufacturingusa.com/sites/manufacturingusa.com/files/default.png'
                    }}
                    style={ styles.avatar }
                />
            </View>

            {/* Opciones de Menu */}
            <View style={ styles.menuContainer }>
                
                <TouchableOpacity 
                    style={ styles.menuBtn }
                    onPress={ () => navigation.navigate('StackNavigator') }
                >
                    <Text style={ styles.menuTextItem }>Navegación</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={ styles.menuBtn }
                    onPress={ () => navigation.navigate('SettingsScreen') }
                >
                    <Text style={ styles.menuTextItem }>Ajustes</Text>
                </TouchableOpacity>

            </View>
        </DrawerContentScrollView>
    )
}