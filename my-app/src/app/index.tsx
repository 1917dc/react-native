import { useState } from "react"
import { View, Text, StyleSheet, Alert } from "react-native"
import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { router } from "expo-router"

export default function Index() {
    const [name, setName] = useState("")

    function handleNext() {
        router.navigate("/dashboard")
    }


    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>Olá, { name }</Text>
            <Input onChangeText={ setName }/>
            <Button title="Continuar" onPress={handleNext} activeOpacity={0.9}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        flex: 1,
        gap:16,
    },
    title: {
        color: "#676767",
        textAlign: "center"
    }
})