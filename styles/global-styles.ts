import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerButtonsTemperature: {
        flex: 1,
        flexDirection: 'row',
        gap: 50,
        justifyContent: 'space-evenly',
        marginTop: 50
    },
    temperatureButton: {
        width: 80,
        height: 80,
        backgroundColor: Colors.gray,
        borderRadius: 25,
    },
    temperatureText: {
        color: Colors.black,
        fontSize: 25,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    temperaturePrincipalText: {
        fontSize: 25,
        textAlign: 'center',
        marginTop: 200
    },
    currentTemperatureText: {
        marginTop: 50,
        fontSize: 50,
        textAlign: 'center'
    },
    //los estilos anteriores son solo para el TemperatureApp
    colorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    colorButton: {
        width: 180,
        height: 80,
        borderRadius: 25,
        borderColor: Colors.black,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 560,
    },
    colorText: {
        color: Colors.black,
        fontSize: 25,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontWeight: '700'
    }

});