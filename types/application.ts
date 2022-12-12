import { Exercise, FatigueRepetition, QuantityRepetition, Repetition, RepetitionEnum, TimeRepetition, Weight, Workout } from "./domain";

export type Duration = {
  min: number, 
  sec: number
}

export type ExerciseForm = Omit<Exercise, 'coolDown' | 'repetition' | 'weight'> & {
  coolDown: Duration
  repetition: RepetitionEnum
  weight?: Weight
  duration?: Duration
  // fatigue?: FatigueRepetition
  quantity?: number
}

export interface WorkoutForm extends Omit<Workout, 'exercises'> {
  exercises: ExerciseForm[]
}