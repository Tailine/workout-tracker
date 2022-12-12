import { Button as NativeBaseButton, IButtonProps } from 'native-base'
import theme from '../theme'

export function Button({
  children,
  variant = 'solid',
  ...props
}: IButtonProps) {
  const isSolidVariant = variant === 'solid'
  return (
    <NativeBaseButton
      _text={{
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: isSolidVariant
          ? theme.colors.blue[500]
          : theme.colors.yellow[500],
        paddingY: '1.5'
      }}
      bgColor={isSolidVariant ? theme.colors.yellow[500] : undefined}
      _pressed={{
        bg: isSolidVariant
          ? theme.colors.yellow[500]
          : theme.colors.yellow[600],
        borderColor: theme.colors.yellow[600]
      }}
      borderRadius={theme.borderRadius}
      colorScheme="secondary"
      variant={variant}
      borderColor={theme.colors.yellow[500]}
      {...props}
    >
      {children}
    </NativeBaseButton>
  )
}
