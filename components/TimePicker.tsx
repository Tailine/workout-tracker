import { Select, Box, Flex, Text, Spacer } from 'native-base'
import React, { useEffect } from 'react'
import { Control, Controller, UseFormUnregister } from 'react-hook-form'
import theme from '../theme'
import { ExerciseForm } from '../types/application'
import { ErrorMessage } from './ErrorMessage'

const seconds = Array.from(Array(60).keys())
const minutes = Array.from({ length: 60 }, (_, i) => i + 1)

interface Props {
  name: 'coolDown' | 'duration'
  control: Control<ExerciseForm, any>
  error: Partial<{ min: string; sec: string }>
  unregister: UseFormUnregister<ExerciseForm>
}

export function TimePicker({ control, name, unregister, error }: Props) {
  useEffect(() => {
    return () => {
      unregister(`${name}.min`)
      unregister(`${name}.sec`)
    }
  }, [unregister])

  const renderOptions = (options: number[], type: 'min' | 'sec') => {
    const errorMessage = error[type]
    return (
      <Box>
        <Flex
          direction="row"
          width="50%"
          alignItems="center"
          alignContent="space-between"
        >
          <Controller
            control={control}
            name={`${name}.${type}`}
            rules={{
              required: 'Selecione uma opção'
            }}
            render={({ field: { onChange, value } }) => {
              return (
                <Select
                  width={120}
                  onValueChange={onChange}
                  selectedValue={value?.toString()}
                  borderWidth={0}
                  borderRadius={theme.borderRadius}
                  color={theme.colors.gray[500]}
                  fontSize={theme.fontSize.xs}
                >
                  {options.map((op) => {
                    const opStr = op.toString()
                    return <Select.Item key={op} label={opStr} value={opStr} />
                  })}
                </Select>
              )
            }}
          />
          <Text color={theme.colors.gray[500]} marginLeft={2}>
            {type}
          </Text>
        </Flex>
        {errorMessage && <ErrorMessage message={errorMessage} />}
      </Box>
    )
  }

  return (
    <Flex direction="row" alignContent="space-between" width="100%">
      {renderOptions(minutes, 'min')}
      <Spacer />
      {renderOptions(seconds, 'sec')}
    </Flex>
  )
}
