import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext, useEffect } from 'react'
import { Text, View } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { RootStackParams } from '../navigator/StackNavigator'
import { styles } from '../theme/appTheme'

// interface RouterParams {
//     id: number;
//     name: string;
// }

/**
 * Tipar los parametros recibidos: el ParamList se define en el StackNavigator
 * El RouteName es el nombre de la ruta y debe ser un string
 */

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'>{};

export const PersonaScreen = ( { route, navigation }: Props ) => {
    
    // const params = route.params as RouterParams;
    const params = route.params;
    const { changeUserName } = useContext(AuthContext);

    useEffect( () => {
        navigation.setOptions({
            title: params.name
        })
    },[]);

    useEffect(() => {
        changeUserName( params.name );
    }, []);

    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>
                {
                    JSON.stringify( params, null, 3 )
                }
            </Text>
        </View>
    )
}
