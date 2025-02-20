import { View, Text, StyleSheet } from "react-native"

export default function index() {
    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>Olá Mundo!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        flex: 1,
    },
    title: {
        color: "#676767",
        textAlign: "center"
    }
})