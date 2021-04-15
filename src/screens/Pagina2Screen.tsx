import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const Pagina2Screen = () => {

    const navigator = useNavigation();

    useEffect(() => {
        navigator.setOptions({
            title: 'Hola Mundo',
            headerBackTitle: ''
        });
    }, [])

    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>Pagina 2 Screen</Text>

            <TouchableOpacity
                style={ styles.btnNav }
                activeOpacity={ 0.9 }
                onPress={ () => navigator.navigate('Pagina3Screen') }
            >
                <Text style={ styles.titleBtnNav }>Ir a Página 3</Text>
            </TouchableOpacity>
        </View>
    )
}
