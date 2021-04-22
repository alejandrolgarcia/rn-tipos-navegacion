import React, { useContext, useEffect } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableIcon } from '../components/TouchableIcon';
import { colors, styles } from '../theme/appTheme';

export const Tab1Screen = () => {

    const { top } = useSafeAreaInsets();

    useEffect( () => {
        console.log('Tab1Screen effect');
    }, []);

    return (
        <View style={{
            ...styles.globalMargin,
            paddingTop: top
        }}>
            <Text style={ styles.title }>Iconos</Text>
            <Text>
                <TouchableIcon iconName="bicycle-outline" />
                <TouchableIcon iconName="beer-outline"  />
                <TouchableIcon iconName="color-palette-outline" />
                <TouchableIcon iconName="fitness-outline" />
                <TouchableIcon iconName="happy-outline" />
                <TouchableIcon iconName="rocket-outline" />
            </Text>
        </View>
    )
}
