import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Form } from '../components/Form'
import { Title } from '../components/Title'
import theme from '../theme'

export function NewWorkout() {
  return (
    <SafeAreaView style={styles.container}>
      {/* / back button */}
      <Title>Novo Treino</Title>
      <Form />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.blue[600],
    height: '100%',
    padding: theme.spacing.lg
  }
})
