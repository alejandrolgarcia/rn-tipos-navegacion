import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
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
                <Icon name="heart-circle-outline" size={ 80 } color={ colors.primary } />
                <Icon name="paw" size={ 80 } color={ colors.primary } />
                <Icon name="nuclear-sharp" size={ 80 } color={ colors.primary } />
            </Text>
        </View>
    )
}
