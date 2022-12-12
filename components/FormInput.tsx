import { IInputProps, IBoxProps, Input, Text, Box } from 'native-base'
import React from 'react'
import { StyleSheet } from 'react-native'
import theme from '../theme'

interface Props {
  label: string
  containerProps?: IBoxProps
  inputProps?: IInputProps
}

export function FormInput({ label, containerProps, inputProps }: Props) {
  return (
    <Box {...containerProps}>
      <Text style={styles.label}>{label}</Text>
      <Input {...inputProps} />
    </Box>
  )
}

const styles = StyleSheet.create({
  label: {
    color: theme.colors.gray[500],
    fontWeight: 'bold',
    marginBottom: theme.spacing.xs
  }
})
