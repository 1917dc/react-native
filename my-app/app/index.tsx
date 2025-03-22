import { useState } from "react";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";

const formatClock = (v) => new Date(v * 1000).toLocaleString('pt-BR', { minute: '2-digit', second: '2-digit' })
const pomodoros = [
  { id: 1, text: 'Foco', init: formatClock(25 * 60) },
  { id: 2, text: 'Pausa curta', init: formatClock(5 * 60) },
  { id: 3, text: 'Pausa longa', init: formatClock(15 * 60) },
]
export default function Index() {
  const [pomoType, setPomo] = useState(pomodoros[0]);
  const { container, tomate, actions, timer, button, buttonText, modes, modeText, modeActive } = styles
  return (
    <View style={container}>
      <Image source={require("./pomodoro.png")} style={tomate} />
      <View style={actions} >
        <View style={modes}>
          {pomodoros.map(
            p => <Pressable key={p.id} style={p.id === pomoType.id ? modeActive : ''} onPress={() => setPomo(p)}>
              <Text style={modeText}>{p.text}</Text>
            </Pressable>
          )}
        </View>
        <Text style={timer}>{pomoType.init}</Text>
        <Pressable style={button}>
          <Text style={buttonText} >Começar</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#021123", gap: 40 },
  tomate: { width: "60%", height: "40%" },
  actions: {
    paddingHorizontal: 24, paddingVertical: 24,
    backgroundColor: "#14448080", width: '80%', gap: 32,
    borderRadius: 32, borderWidth: 2, borderColor: '#144480'
  },
  timer: { color: 'white', fontSize: 54, fontWeight: 'bold', textAlign: 'center' },
  button: { backgroundColor: '#B872FF', borderRadius: 32, padding: 10, },
  buttonText: { textAlign: 'center', color: '#021123', fontSize: 18, },
  modes: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' },
  modeText: { fontSize: 13.5, color: '#FFF', padding: 8 },
  modeActive: { backgroundColor: '#144480', borderRadius: 8 },
})