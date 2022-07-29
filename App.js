import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function App() {
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [interv, setInterv] = useState(null)

  useEffect(() => {
    return () => {
      clearInterval(interv)
    }
  }, [])

  function pausar() {
    if (interv) {
      clearInterval(interv)
    }
  }

  function apagar() {
    pausar()
    setMinutes(0)
    setSeconds(0)
  }

  function iniciar() {
    setInterv(
      setInterval(() => {
        mudaHora()
      }, 1)
    )
  }

  function mudaHora() {
    setSeconds(oldState => {
      if (oldState + 1 == 60) {
        setMinutes(currentMinutes => currentMinutes + 1)
        return 0
      }
      return oldState + 1
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>
        {minutes < 10 ? '0' + minutes : minutes}:
        {seconds < 10 ? '0' + seconds : seconds}
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.botao} onPress={iniciar}>
          <Text>Start</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={pausar}>
          <Text>Stop</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={apagar}>
          <Text>Clear</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    alignItems: 'center',
    justifyContent: 'center'
  },
  counter: {
    color: '#fff',
    fontSize: 35,
    fontWeight: 'bold',
    marginVertical: 50
  },
  botao: {
    padding: 20,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    borderRadius: 7
  },
  buttonContainer: {
    flexDirection: 'row'
  }
})
