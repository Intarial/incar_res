import {ChildrenTypings} from "../Children.typings";

export interface ButtonTypings {
  children: ChildrenTypings,
  type?: 'default' | 'prev'
  onPress?: (value?: any) => void
  style?: {}
  deactivated?: boolean
}
