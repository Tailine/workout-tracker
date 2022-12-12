export enum RepetitionEnum {
  fatigue = 'FATIGUE',
  quantity = 'QUANTITY',
  time = 'TIME'
}

export interface FatigueRepetition {
  type: RepetitionEnum.fatigue
  value: null
}

export interface QuantityRepetition {
  type: RepetitionEnum.quantity
  value: number
}

export interface TimeRepetition {
  type: RepetitionEnum.time
  value: number
}

export type Repetition = FatigueRepetition | QuantityRepetition | TimeRepetition
export type Weight = {
  value: number
  type: 'pl' | 'kg'
}

export type Speed = {
  min: number
  max: number
}

export interface Exercise {
  name: string
  weight: Weight
  repetition: Repetition
  sets: number
  speed: Speed
  coolDown: number
}

export interface Workout {
  name: string
  exercises: Exercise[]
}
