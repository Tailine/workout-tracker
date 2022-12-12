import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { ScrollView, StyleSheet } from 'react-native'
import { Box } from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Title } from '../components/Title'
import { WorkoutItem } from '../components/WorkoutItem'
import theme from '../theme'
import { NewWorkoutScreenProp } from '../types'

export function Home() {
  const { navigate } = useNavigation<NewWorkoutScreenProp>()

  return (
    <SafeAreaView style={styles.container}>
      <Box style={styles.content}>
        <Title>Treinos</Title>
        <ScrollView alwaysBounceVertical StickyHeaderComponent={Title}>
          <WorkoutItem
            index={0}
            title="Treino perna"
            time={90}
            onPress={() => console.log('OI')}
          />
          <WorkoutItem
            index={1}
            title="Treino braço"
            time={70}
            onPress={() => console.log('OI')}
          />
          <WorkoutItem
            index={2}
            title="HITT"
            time={30}
            onPress={() => console.log('OI')}
          />
          <WorkoutItem
            index={3}
            title="Bicicleta"
            time={35}
            onPress={() => console.log('OI')}
          />
          <WorkoutItem
            index={4}
            title="Treino perna"
            time={90}
            onPress={() => console.log('OI')}
          />
          <WorkoutItem
            index={5}
            title="Treino braço"
            time={70}
            onPress={() => console.log('OI')}
          />
          <WorkoutItem
            index={6}
            title="HITT"
            time={30}
            onPress={() => console.log('OI')}
          />
          <WorkoutItem
            index={7}
            title="Bicicleta"
            time={35}
            onPress={() => console.log('OI')}
          />
          <Box style={{ height: 150 }} />
        </ScrollView>
      </Box>
      <Box style={styles.createBtnContainer}>
        <Icon.Button
          name="ios-add-outline"
          backgroundColor={theme.colors.yellow[500]}
          color={theme.colors.gray[500]}
          onPress={() => navigate('NewWorkout')}
        />
        {/* <TouchableOpacity
          style={styles.createBtn}
          onPress={() => navigate('NewWorkout')}
        >
          <Ionicons
            name="ios-add-outline"
            style={{ marginLeft: 2 }}
            size={32}
            minimumFontScale={3}
            color={theme.colors.gray[500]}
          />
        </TouchableOpacity> */}
      </Box>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.blue[600],
    height: '100%'
  },
  content: {
    position: 'relative'
  },
  createBtnContainer: {
    position: 'absolute',
    bottom: 20,
    right: theme.spacing.lg
  },
  createBtn: {
    backgroundColor: theme.colors.yellow[500],
    borderRadius: theme.borderRadius,
    padding: theme.spacing['2xs']
  }
})
