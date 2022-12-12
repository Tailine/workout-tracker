import { Box } from 'native-base'
import React, { useEffect } from 'react'
import { Control, Controller, UseFormUnregister } from 'react-hook-form'
import theme from '../theme'
import { ExerciseForm } from '../types/application'
import { RepetitionEnum, Workout } from '../types/domain'
import { isInt } from '../utils/isInt'
import { ErrorMessage } from './ErrorMessage'
import { FormInput } from './FormInput'
import { TimePicker } from './TimePicker'

type RepetitionInputProps = {
  repetition: RepetitionEnum
  control: Control<ExerciseForm, any>
  error: Partial<{ min: string; sec: string; quantity: string }>
  unregister: UseFormUnregister<ExerciseForm>
}

export function RepetitionInput({
  repetition,
  control,
  error,
  unregister
}: RepetitionInputProps) {
  if (repetition === RepetitionEnum.fatigue) return <></>

  if (repetition === RepetitionEnum.time) {
    return (
      <Box marginTop={theme.spacing['2xs']}>
        <TimePicker
          unregister={unregister}
          control={control}
          name="duration"
          error={{
            min: error.min,
            sec: error.sec
          }}
        />
      </Box>
    )
  }

  return (
    <Box marginTop={theme.spacing['2xs']}>
      <QuantityPicker
        unregister={unregister}
        control={control}
        error={error?.quantity}
      />
    </Box>
  )
}

type QuantityPickerProps = {
  unregister: UseFormUnregister<ExerciseForm>
  control: Control<ExerciseForm, any>
  error?: string
}

function QuantityPicker({ unregister, control, error }: QuantityPickerProps) {
  useEffect(
    () => () => {
      unregister('quantity')
    },
    [unregister]
  )

  return (
    <>
      <Controller
        control={control}
        name="quantity"
        rules={{
          required: 'Campo obrigatório',
          min: {
            value: 1,
            message: 'Insira um valor superior a zero'
          },
          validate: {
            isInt: (value) => isInt(value ?? 0) || 'Insira um número inteiro'
          }
        }}
        render={({ field: { onChange, value } }) => (
          <FormInput
            inputProps={{
              keyboardType: 'numeric',
              placeholder: 'Ex: 10',
              onChangeText: onChange,
              value: value?.toString()
            }}
            label="Número de repetições"
          />
        )}
      />
      {error && <ErrorMessage message={error} />}
    </>
  )
}
