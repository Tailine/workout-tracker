import { NavigationContainer } from '@react-navigation/native'
import { Home } from './screens/Home'
import { Trainning } from './screens/Training'
import { WorkoutResume } from './screens/WorkoutResume'
import { createStackNavigator } from '@react-navigation/stack'
import { RootStackParamList } from './types'
import 'react-native-gesture-handler'
import { NewWorkout } from './screens/NewWorkout'
import { extendTheme, NativeBaseProvider } from 'native-base'
import theme from './theme'

export default function App() {
  const Stack = createStackNavigator<RootStackParamList>()

  const nativeBaseTheme = extendTheme({
    colors: {
      primary: {
        ...theme.colors.blue
      },
      secondary: {
        ...theme.colors.yellow
      }
    },
    config: {
      initialColorMode: 'dark'
    },
    components: {
      Radio: {
        baseStyle: {
          borderWidth: 2,
          _dark: {
            bg: theme.colors.blue[600],
            borderColor: theme.colors.blue[500],
            _checked: {
              bg: theme.colors.yellow[500],
              borderColor: theme.colors.blue[500]
            },
            _pressed: {
              borderColor: theme.colors.yellow[500]
            }
          }
        }
      },
      Input: {
        baseStyle: {
          borderRadius: theme.borderRadius,
          _input: {
            bg: theme.colors.blue[500]
          },
          _dark: {
            placeholderTextColor: theme.colors.gray[700],
            borderColor: theme.colors.blue[500],
            paddingX: theme.spacing['2xs'],
            _focus: {
              borderColor: theme.colors.yellow[600]
            }
          }
        }
      },
      Button: {
        _dark: {
          _pressed: {
            bg: theme.colors.yellow[500]
          }
        }
      },
      Select: {
        baseStyle: {
          _dark: {
            bg: theme.colors.blue[500],
            variant: 'outline'
          },
          _actionSheetContent: {
            bgColor: theme.colors.blue[500]
          }
        }
      }
    }
  })

  return (
    <NavigationContainer>
      <NativeBaseProvider theme={nativeBaseTheme}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="WorkoutResume" component={WorkoutResume} />
          <Stack.Screen name="Trainning" component={Trainning} />
          <Stack.Screen name="NewWorkout" component={NewWorkout} />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  )
}
