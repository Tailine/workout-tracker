import { useNavigation } from '@react-navigation/native'
import { Box } from 'native-base'
import { Button, Text, View } from 'react-native'
import { HomeScreenProp } from '../types'

export function Trainning() {
  const { navigate } = useNavigation<HomeScreenProp>()

  return (
    <Box>
      <Text>Trainning</Text>
      <Button title="go to home" onPress={() => navigate('Home')} />
    </Box>
  )
}
