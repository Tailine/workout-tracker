import { StyleSheet, Text } from 'react-native'
import theme from '../theme'

type Props = {
  message: string
}

export function ErrorMessage({ message }: Props) {
  return <Text style={styles.message}>{message}</Text>
}

const styles = StyleSheet.create({
  message: {
    color: theme.colors.error,
    marginTop: theme.spacing['2xs'],
    marginBottom: theme.spacing['2xs']
  }
})
