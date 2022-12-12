import { ReactNode } from 'react'
import { StyleSheet, Text } from 'react-native'
import theme from '../theme'

interface Props {
  children: ReactNode
}

export function Title({ children }: Props) {
  return <Text style={styles.title}>{children}</Text>
}

const styles = StyleSheet.create({
  title: {
    color: theme.colors.gray[500],
    fontSize: theme.fontSize.lg,
    marginBottom: theme.spacing.md,
    fontWeight: 'bold'
  }
})
