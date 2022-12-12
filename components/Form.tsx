import { Actionsheet, FlatList, Text, Box, Flex, IconButton } from 'native-base'
import Icon from 'react-native-vector-icons/Ionicons'
import React, { useState } from 'react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import theme from '../theme'
import { ExerciseForm, WorkoutForm } from '../types/application'
import { Button } from './Button'
import { ErrorMessage } from './ErrorMessage'
import { FormExercise } from './FormExercise'
import { FormInput } from './FormInput'

export function Form() {
  // const {
  //   control,
  //   handleSubmit,
  //   getValues,
  //   formState: { errors }
  // } = methods
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<WorkoutForm>({
    defaultValues: {
      name: '',
      exercises: []
    }
  })
  const { fields, append, update } = useFieldArray({
    control,
    name: 'exercises',
    rules: { required: true }
  })
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState<{
    index: number
    formValues: ExerciseForm
  }>()

  const onSubmit = (data) => {
    console.log('>>>>> DATA', JSON.stringify(data), { fields })
  }

  const onSubmitExerciseForm = (data: ExerciseForm, index?: number) => {
    if (index != undefined) {
      update(index, data)
    } else {
      append(data)
    }
    setIsOpen(false)
  }

  const editExercise = (index: number, fieldValues: ExerciseForm) => {
    setFormData({ index, formValues: fieldValues })
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
    setFormData(undefined)
  }
  const onErrors = (err) => {}

  return (
    <>
      <Box>
        <Box>
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
                  placeholder: 'Ex: Treino de perna',
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

        <Flex
          direction="row"
          alignItems="center"
          marginBottom={theme.spacing.xs}
        >
          <Text style={styles.exerciseTitle}>Exercícios</Text>
          <Icon.Button
            iconStyle={{
              marginRight: 0
            }}
            name="add-outline"
            backgroundColor={theme.colors.yellow[500]}
            color={theme.colors.gray[500]}
            onPress={() => setIsOpen(true)}
          />
        </Flex>

        <FlatList
          data={fields ?? []}
          renderItem={({ item, index }) => (
            <Box style={styles.listItem}>
              <Text color={theme.colors.gray[500]}>{item.name}</Text>
              <Button onPress={() => editExercise(index, item)}>Editar</Button>
            </Box>
          )}
        />

        <Button onPress={handleSubmit(onSubmit)}>Criar</Button>
      </Box>
      <Actionsheet isOpen={isOpen} onClose={handleClose}>
        <Actionsheet.Content bgColor={theme.colors.blue[600]}>
          <FormExercise
            initialValues={formData?.formValues}
            index={formData?.index}
            submit={onSubmitExerciseForm}
          />
        </Actionsheet.Content>
      </Actionsheet>
    </>
  )
}

const styles = StyleSheet.create({
  exerciseTitle: {
    fontSize: theme.fontSize.md,
    color: theme.colors.gray[500],
    fontWeight: 'bold',
    marginRight: theme.spacing['xs']
  },
  addBtn: {
    backgroundColor: theme.colors.blue[500],
    height: theme.spacing.xl,
    width: theme.spacing.xl
  },
  submitBtn: {
    backgroundColor: theme.colors.yellow[500],
    borderRadius: theme.borderRadius,
    padding: theme.spacing.sm
  },
  labelBtn: {
    color: theme.colors.gray[500],
    fontWeight: 'bold',
    textAlign: 'center'
  },
  labelSelect: {
    color: theme.colors.yellow[500]
  },
  label: {
    color: theme.colors.gray[500],
    fontWeight: 'bold',
    marginBottom: theme.spacing.sm
  },
  repetitionOption: {
    textAlign: 'center',
    paddingVertical: theme.spacing.sm
  },
  pickerContainer: {
    height: 200
  },
  listItem: {
    borderRadius: theme.borderRadius,
    paddingVertical: theme.spacing['2xs'],
    backgroundColor: theme.colors.blue[500],
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
