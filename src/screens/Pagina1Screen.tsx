import { DrawerScreenProps } from '@react-navigation/drawer';
// import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../theme/appTheme';

// interface Props extends StackScreenProps<any, any>{};
interface Props extends DrawerScreenProps<any, any>{};

export const Pagina1Screen = ( { navigation }: Props ) => {

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Button
                    title="Menu"
                    onPress={ () => navigation.toggleDrawer() }
                />
            )
        });
    }, [])


    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>Pagina1 Screen</Text>

            <TouchableOpacity
                style={ styles.btnNav }
                activeOpacity={ 0.9 }
                onPress={ () => navigation.navigate('Pagina2Screen') }
            >
                <Text style={ styles.titleBtnNav }>Ir a Página 2</Text>
            </TouchableOpacity>

            <Text style={ styles.subTitle }>Navegar con argumentos</Text>

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style={{
                        ...styles.btn,
                        backgroundColor: '#5856D6'
                    }}
                    activeOpacity={ 0.9 }
                    onPress={ () => navigation.navigate('PersonaScreen', {
                        id: 1,
                        name: 'Alejandro'
                    }) }
                >
                    <Text style={ styles.btnText }>Pedro</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        ...styles.btn,
                        backgroundColor: '#FF9427'
                    }}
                    activeOpacity={ 0.9 }
                    onPress={ () => navigation.navigate('PersonaScreen', {
                        id: 2,
                        name: 'Maria'
                    }) }
                >
                    <Text style={ styles.btnText }>Maria</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
