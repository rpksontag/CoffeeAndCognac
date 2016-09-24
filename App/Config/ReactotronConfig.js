import Reactotron from 'reactotron'
import {Platform} from 'react-native'

Reactotron.connect({
  enabled: __DEV__,
  name: 'Fire Fetts Seminole',
  userAgent: Platform.OS
})

if (__DEV__) {
  console.tron = Reactotron
} else {
  console.tron = () => false
}
