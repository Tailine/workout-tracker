import { useState } from 'react'
import { Box } from 'native-base'
import { StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import theme from '../theme'

interface Props {
  title: string
  time: number
  index: number
  onPress(): void
}

export function WorkoutItem({ title, time, index, onPress }: Props) {
  const [markToDelete, setMarkToDelete] = useState(false)

  function onLongPress() {
    // change style of item
    setMarkToDelete(true)
    // send selected item to parent
  }

  const deleteStyle = markToDelete ? commonStyles.selected : {}

  return (
    <TouchableOpacity onPress={onPress} onLongPress={onLongPress}>
      <Box
        style={{
          ...commonStyles.container,
          ...deleteStyle
        }}
      >
        <Box style={commonStyles.titleSection}>
          <Box style={commonStyles.line} />
          <Text style={commonStyles.title}>{title}</Text>
        </Box>
        <Box style={commonStyles.timeSection}>
          <Text style={commonStyles.timeValue}>{time}</Text>
          <Text style={commonStyles.timeLabel}>min</Text>
        </Box>
      </Box>
    </TouchableOpacity>
  )
}

const commonStyles = StyleSheet.create({
  container: {
    borderRadius: theme.borderRadius,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: theme.spacing.xs,
    borderWidth: 2,
    backgroundColor: theme.colors.blue[500],
    borderColor: theme.colors.blue[500]
  },
  titleSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    color: theme.colors.gray[500], // remove
    fontWeight: 'bold',
    fontSize: theme.fontSize.sm,
    marginHorizontal: theme.spacing.md
  },
  line: {
    borderRadius: theme.borderRadius,
    backgroundColor: theme.colors.yellow[500],
    height: 30,
    width: 5
  },
  timeSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  timeValue: {
    fontSize: theme.fontSize.lg,
    fontWeight: 'bold',
    marginRight: theme.spacing['2xs'],
    color: theme.colors.yellow[500]
  },
  timeLabel: {
    fontSize: theme.fontSize.sm,
    fontWeight: 'bold',
    marginBottom: theme.spacing['2xs'],
    color: theme.colors.yellow[500]
  },
  selected: {
    borderRadius: theme.borderRadius,
    borderWidth: 2,
    borderColor: theme.colors.pink
  }
})
