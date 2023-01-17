import { ExtractPropTypes, PropType } from 'vue'

export type IButtonType = 'primary' | 'warning' | 'danger' | 'success' | 'text'

export const buttonProps = {
  type: {
    type: String as PropType<IButtonType>,
    default: 'primary',
  },
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
