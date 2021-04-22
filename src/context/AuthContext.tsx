import React, { createContext, useReducer } from 'react';
import { authReducer } from './authReducer';

// Definir que información se manejará en el context
export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

// Estado Inicial
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined
}

// Información que tiene y expone el Context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    logout: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    changeUserName: (userName: string) => void;
}

// Crear el Context
export const AuthContext = createContext( {} as AuthContextProps );

// Componente proveedor del estado
export const AuthProvider = ( { children }: any ) => {

    const [ authState, dispatch] = useReducer( authReducer, authInitialState);

    // Dispatch para modificar el estado
    const signIn = () => {
        dispatch({ type: 'signIn' });
    }

    const changeFavoriteIcon = ( iconName: string ) => {
        dispatch({ type: 'changeFavIcon', payload: iconName });
    }

    const logout = () => {
        dispatch({ type: 'logout' });
    }

    const changeUserName = ( userName: string ) => {
        dispatch({ type: 'changeUserName', payload: userName });
    }

    return(
        <AuthContext.Provider value={{
            authState,
            signIn,
            logout,
            changeFavoriteIcon,
            changeUserName
        }}>
            { children }
        </AuthContext.Provider>
    )
}