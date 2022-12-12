import { Radio, Box, Flex, Spacer, Stack, Text } from 'native-base'
import React from 'react'
import { Controller, useForm, useFormContext } from 'react-hook-form'
import { StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import theme from '../theme'
import { ExerciseForm } from '../types/application'
import { RepetitionEnum, Weight } from '../types/domain'
import { isInt } from '../utils/isInt'
import { Button } from './Button'
import { Dropdown } from './Dropdown'
import { ErrorMessage } from './ErrorMessage'
import { FormInput } from './FormInput'
import { RepetitionInput } from './RepetitionInput'
import { TimePicker } from './TimePicker'

const repetionTypes = [
  { label: 'Fadiga', value: RepetitionEnum.fatigue },
  { label: 'Número de repetições', value: RepetitionEnum.quantity },
  { label: 'Time', value: RepetitionEnum.time }
]

const weightOptions: { label: string; value: Weight['type'] }[] = [
  { label: 'kg', value: 'kg' },
  { label: 'placas', value: 'pl' }
]

interface Props {
  submit(data: ExerciseForm, index?: number): void
  index?: number
  initialValues?: ExerciseForm // values for edit
}

export function FormExercise({ submit, index, initialValues }: Props) {
  const {
    control,
    handleSubmit,
    unregister,
    watch,
    formState: { errors }
  } = useForm<ExerciseForm>({
    defaultValues: { ...initialValues }
  })

  function add(data: ExerciseForm) {
    initialValues ? submit(data, index) : submit(data)
  }

  const currRepetitionType = watch('repetition')
  const hasError = Boolean(Object.keys(errors).length)

  return (
    <ScrollView style={styles.container}>
      <Box>
        <Box marginBottom={theme.spacing['2xs']}>
          <Controller
            control={control}
            name="name"
            rules={{
              required: 'Campo obrigatório'
            }}
            render={({ field: { onChange, value } }) => (
              <FormInput
                label="Nome"
                inputProps={{
                  placeholder: 'Ex: Flexora',
                  value: value,
                  onChangeText: onChange
                }}
              />
            )}
          />
          {errors?.name?.message && (
            <ErrorMessage message={errors.name.message} />
          )}
        </Box>
        <Flex direction="row" alignItems="center" alignContent="space-between">
          <Box width="50%">
            <Controller
              control={control}
              name="weight.value"
              render={({ field: { onChange, value } }) => (
                <FormInput
                  label="Peso"
                  containerProps={{
                    marginBottom: 0
                  }}
                  inputProps={{
                    placeholder: 'Ex: 10',
                    value: value?.toString(),
                    onChangeText: onChange,
                    keyboardType: 'numeric'
                  }}
                />
              )}
            />
          </Box>
          <Spacer />
          <Box alignSelf="flex-end">
            <Controller
              control={control}
              name="weight.type"
              render={({ field: { onChange, value } }) => (
                <Radio.Group
                  accessibilityLabel="Escolha a categoria do peso"
                  name="weight.value"
                  defaultValue="kg"
                  value={value}
                  onChange={onChange}
                >
                  <Stack direction="row" space={4}>
                    {weightOptions.map((op) => (
                      <Radio
                        key={op.value}
                        _text={{
                          color: theme.colors.gray[500]
                        }}
                        value={op.value}
                      >
                        {op.label}
                      </Radio>
                    ))}
                  </Stack>
                </Radio.Group>
              )}
            />
          </Box>
        </Flex>
        <Box
          marginTop={theme.spacing['2xs']}
          marginBottom={theme.spacing['2xs']}
        >
          <Controller
            control={control}
            name="sets"
            rules={{
              required: 'Campo obrigatório',
              min: {
                value: 1,
                message: 'Insira um valor superior a zero'
              },
              validate: (value) => isInt(value) || 'Insira um número inteiro'
            }}
            render={({ field: { onChange, value } }) => (
              <FormInput
                label="Séries"
                inputProps={{
                  placeholder: 'Ex: 2',
                  value: value?.toString(),
                  keyboardType: 'decimal-pad',
                  onChangeText: onChange
                }}
              />
            )}
          />
          {errors?.sets?.message && (
            <ErrorMessage message={errors.sets.message} />
          )}
        </Box>

        <Text style={styles.label}>Repetições</Text>

        <Box>
          <Text style={styles.label}>Tipo</Text>
          <Controller
            control={control}
            name="repetition"
            rules={{
              required: 'Selecione uma opção'
            }}
            render={({ field: { onChange, value } }) => (
              <Dropdown
                items={repetionTypes}
                selectProps={{ onValueChange: onChange, selectedValue: value }}
              />
            )}
          />
          {errors?.repetition?.message && (
            <ErrorMessage message={errors.repetition.message} />
          )}
        </Box>
        {currRepetitionType && (
          <RepetitionInput
            unregister={unregister}
            control={control}
            repetition={currRepetitionType}
            error={{
              min: errors?.duration?.min?.message,
              sec: errors?.duration?.sec?.message,
              quantity: errors?.quantity?.message
            }}
          />
        )}

        <Text style={styles.label} marginTop={theme.spacing['2xs']}>
          Velocidade
        </Text>
        <Flex width="100%" flex={1} direction="row" alignContent="space-around">
          <Box width="40%">
            <Controller
              control={control}
              name="speed.min"
              rules={{
                required: 'Campo obrigatório',
                min: {
                  value: 1,
                  message: 'Insira um valor superior a zero'
                },
                validate: {
                  isInt: (value) => isInt(value) || 'Insira um número inteiro'
                }
              }}
              render={({ field: { onChange, value } }) => (
                <FormInput
                  label="Início"
                  inputProps={{
                    placeholder: 'Ex: 1',
                    value: value?.toString(),
                    keyboardType: 'decimal-pad',
                    onChangeText: onChange
                  }}
                />
              )}
            />

            {errors?.speed?.min?.message && (
              <ErrorMessage message={errors.speed.min.message} />
            )}
          </Box>
          <Spacer />
          <Box width="40%">
            <Controller
              control={control}
              name="speed.max"
              rules={{
                required: 'Campo obrigatório',
                min: {
                  value: 1,
                  message: 'Insira um valor superior a zero'
                },
                validate: {
                  isInt: (value) => isInt(value) || 'Insira um número inteiro'
                }
              }}
              render={({ field: { onChange, value } }) => (
                <FormInput
                  label="Fim"
                  inputProps={{
                    placeholder: 'Ex: 2',
                    value: value?.toString(),
                    keyboardType: 'decimal-pad',
                    onChangeText: onChange
                  }}
                />
              )}
            />
            {errors?.speed?.max?.message && (
              <ErrorMessage message={errors.speed.max.message} />
            )}
          </Box>
        </Flex>

        <Text style={styles.label} marginTop={theme.spacing['2xs']}>
          Descanso
        </Text>
        <Controller
          control={control}
          name="coolDown"
          rules={{
            required: 'Selecione o descanso'
          }}
          render={() => {
            return (
              <TimePicker
                control={control}
                name="coolDown"
                unregister={unregister}
                error={{
                  min: errors?.coolDown?.min?.message,
                  sec: errors?.coolDown?.sec?.message
                }}
              />
            )
          }}
        />
      </Box>
      <Button marginTop={theme.spacing['2xs']} onPress={handleSubmit(add)}>
        {initialValues ? 'Salvar' : 'Adicionar'}
      </Button>
      {hasError && <ErrorMessage message={'Verifique os campos.'} />}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.spacing.sm,
    width: '100%'
  },
  submitBtnLabel: {
    textTransform: 'uppercase',
    color: theme.colors.gray[500],
    fontWeight: 'bold',
    paddingVertical: theme.spacing['2xs']
  },
  labelBtn: {
    color: theme.colors.gray[500],
    fontWeight: 'bold',
    textAlign: 'center'
  },
  label: {
    color: theme.colors.gray[500],
    fontWeight: 'bold',
    marginBottom: theme.spacing.sm
  }
})
