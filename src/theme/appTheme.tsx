import { StyleSheet } from 'react-native';

export const colors = {
    primary: '#5856D6'
}

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 30,
        marginBottom: 10
    },

    subTitle: {
        fontSize: 20,
        marginTop: 10,
    },

    btnNav: {
        height: 50,
        backgroundColor: '#5856D6',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,

    },

    titleBtnNav: {
        color: 'white',
        fontSize: 16,
    },

    btn: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        marginTop: 10,
    },

    btnText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },

    avatarContainer: {
        alignItems: 'center',
        marginTop: 30
    },
    
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100
    }, 

    menuContainer: {
        marginVertical: 30,
        marginHorizontal: 20,

    },

    menuBtn: {
        marginVertical: 10
    },

    menuTextItem: {
        fontSize: 18
    }
});