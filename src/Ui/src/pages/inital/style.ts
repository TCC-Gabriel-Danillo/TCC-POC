import { StyleSheet } from "react-native"
import { LIGHT } from "../../constants"

export const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: LIGHT, 
        paddingHorizontal: 20
    }, 
    button: {
        marginTop: 10
    }, 
    subtitle: {textAlign: "center"}
})