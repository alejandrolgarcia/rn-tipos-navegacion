import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any>{};

export const Pagina3Screen = ( { navigation }: Props ) => {
    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>Pagina 3 Screen</Text>

            <TouchableOpacity
                style={ styles.btnNav }
                activeOpacity={ 0.9 }
                onPress={ () =>  navigation.pop() }
            >
                <Text style={ styles.titleBtnNav }>Regresar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={ styles.btnNav }
                activeOpacity={ 0.9 }
                onPress={ () =>  navigation.popToTop() }
            >
                <Text style={ styles.titleBtnNav }>Ir a página 1</Text>
            </TouchableOpacity>

        </View>
    )
}
