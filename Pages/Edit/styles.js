import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        paddingBottom: 20,
        paddingTop: 20,
    },

    box: {
        backgroundColor: '#fff',
        width: '95%',
        flex: 1,
        borderRadius: 10,
        paddingTop: 20,
        alignItems: 'center',
    },

    down_inputs: {
        marginTop: 30,
        flexDirection: 'row',
    },

    title: {
        color: 'black',
        fontSize: 35,
        marginBottom: 30,
    },

    picker: {
        height: 50,
        width: 80,
    },

    buttons: {
        marginTop: 100,
        flexDirection: 'row',
    },

    button: {
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 15,
        paddingBottom: 15,
        borderColor: '#000',
        borderRadius: 5,
        marginRight: 5,
        marginLeft: 5,
        fontWeight: '900',
    },

    btn1: {
        backgroundColor: '#ff5d55',
    },

    btn2: {
        backgroundColor: '#75a9f9',
    },
});

export default styles;
