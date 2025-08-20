import { StyleSheet } from "react-native";

const TestComponentStyles = StyleSheet.create({
    container: {
        marginTop: 66,
        backgroundColor: '#141534',
        borderRadius: 15,
        borderColor: '#141534',
        borderWidth: 1.5,
        height: 60,
        width: 360,
        flexDirection: 'row'
    },
    defaultContent: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        backgroundColor: '#141534',
        borderRadius: 15,
    },
    clickContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    clickContent: {
        flex: 1,
    },
    textContainer: {  
        marginBottom: 2
    },
    usernameText: {
        color: '#7D77FF',
        marginTop: 10,
        marginLeft: 20,
        fontSize: 10
    },
    TextInputDefault: {
        borderRadius: 15,
        color: 'white',
        fontSize: 18
    },
    TextInputText: {
        paddingLeft: 20,
        borderRadius: 15,
        color: 'white',
        fontSize: 18
    },
    TextInputClick: {
        borderRadius: 15,
        color: 'white',
        fontSize: 18,
    },
    TextInputImageContainer: {
        width: 25,
        marginRight: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    TextInputImage: {
        width: 25,
        height: 25
    },
});

export default TestComponentStyles;