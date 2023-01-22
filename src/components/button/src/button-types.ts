import { ExtractPropTypes, PropType } from 'vue'

export type IButtonType =
  | 'primary'
  | 'warning'
  | 'danger'
  | 'success'
  | 'text'
  | 'outline'
export type IButtonSize = 'small' | 'medium' | 'large' | 'mini'
export type IButtonShape = 'square' | 'round' | 'circle'

export const buttonProps = {
  type: {
    type: String as PropType<IButtonType>,
    default: 'primary',
  },
  size: {
    type: String as PropType<IButtonSize>,
    default: 'medium',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  block: {
    type: Boolean,
    default: false,
  },
  shape: {
    type: String as PropType<IButtonShape>,
    default: 'square',
  },
  loading: {
    type: Boolean,
    default: false,
  },
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
