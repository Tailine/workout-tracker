import { StackNavigationProp } from '@react-navigation/stack'

export type RootStackParamList = {
  WorkoutResume: undefined
  Trainning: undefined
  Home: undefined
  NewWorkout: undefined
}

export type TrainningScreenProp = StackNavigationProp<
  RootStackParamList,
  'Trainning'
>
export type HomeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>
export type WorkoutResumeScreenProp = StackNavigationProp<
  RootStackParamList,
  'WorkoutResume'
>
export type NewWorkoutScreenProp = StackNavigationProp<
  RootStackParamList,
  'NewWorkout'
>
