import { useNavigation } from '@react-navigation/native'
import { Box } from 'native-base'
import { Button, Text, View } from 'react-native'
import { TrainningScreenProp } from '../types'

export function WorkoutResume() {
  const { navigate } = useNavigation<TrainningScreenProp>()
  return (
    <Box>
      <Text>WorkoutResume</Text>
      <Button title="go to training" onPress={() => navigate('Trainning')} />
    </Box>
  )
}
