import React from 'react'
import { Pressable, StyleSheet, Modal as RNModal, Text } from 'react-native'
import { Box } from 'native-base'
import theme from '../theme'

export interface Props {
  children: React.ReactNode
  isVisible: boolean
  onCancel(): void
  onConfirm<T>(params: T): void
}

export function Modal({ children, isVisible, onCancel, onConfirm }: Props) {
  return (
    <RNModal
      transparent
      style={styles.modal}
      animationType="slide"
      visible={isVisible}
    >
      <Box style={styles.wrapper}>
        <Box style={styles.container}>
          {children}
          <Box style={styles.footer}>
            <Pressable
              style={[styles.button, styles.cancelBtn]}
              onPress={onCancel}
            >
              <Text style={styles.cancelText}>Cancelar</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.confirmBtn]}
              onPress={onConfirm}
            >
              <Text style={styles.confirmText}>Confirmar</Text>
            </Pressable>
          </Box>
        </Box>
      </Box>
    </RNModal>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, .5)'
  },
  container: {
    padding: theme.spacing.md,
    backgroundColor: theme.colors.blue[600],
    minHeight: 'auto',
    marginHorizontal: theme.spacing.md,
    borderTopLeftRadius: theme.borderRadius,
    borderTopRightRadius: theme.borderRadius,
    marginTop: 'auto'
  },
  modal: {
    height: '100%'
  },
  button: {
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    fontSize: theme.fontSize.md,
    borderRadius: theme.borderRadius
  },
  cancelBtn: {
    backgroundColor: theme.colors.blue[600],
    borderWidth: 1,
    borderColor: theme.colors.yellow[500]
  },
  cancelText: {
    color: theme.colors.yellow[500],
    fontWeight: 'bold'
  },
  confirmBtn: {
    backgroundColor: theme.colors.yellow[500]
  },
  confirmText: {
    color: theme.colors.gray[500],
    fontWeight: 'bold'
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: theme.spacing.md
  }
})
