import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, useWindowDimensions, View, TouchableOpacity } from 'react-native';
import { colors, styles } from '../theme/appTheme';
import { Tabs } from './Tabs';

import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

    const { width, height } = useWindowDimensions();

    return (
        <Drawer.Navigator
            drawerType={ width > height ? 'permanent' : 'front' }
            drawerContent={ ( props ) => <MenuDrawer { ...props } /> }
        >
        <Drawer.Screen name="Tabs" component={ Tabs } />
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
                    onPress={ () => navigation.navigate('Tabs') }
                >
                    <View
                        style={{ 
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                    >
                        <Icon name="layers-outline" size={ 30 } color={ colors.primary } />
                        <Text style={ styles.menuTextItem }> Navegación</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={ styles.menuBtn }
                    onPress={ () => navigation.navigate('SettingsScreen') }
                >
                    <View
                        style={{ 
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                    >
                        <Icon name="settings-outline" size={ 30 } color={ colors.primary } />
                        <Text style={ styles.menuTextItem }> Ajustes</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </DrawerContentScrollView>
    )
}