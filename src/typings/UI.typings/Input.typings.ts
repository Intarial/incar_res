import {Animated, TextInput} from "react-native";
import LegacyRef = Animated.LegacyRef;

export interface InputTypings {
  value: string
  change: (val: any) => void
  icon?: JSX.Element
  placeholder?: string
  autoFocus?: boolean
  mask?: boolean
  error?: boolean
  style?: {}
  maxLength?: number
  ref?: TextInput
  color?: string
}