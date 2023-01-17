import { defineComponent, SetupContext, toRefs } from 'vue'
import { buttonProps, ButtonProps } from './button-types'
import '../style/button.scss'

export default defineComponent({
  name: 'DisButton',
  props: buttonProps,
  setup(props: ButtonProps, { slots }: SetupContext) {
    const { type } = toRefs(props)
    return () => {
      return (
        <button class={`dis-btn dis-btn--${type.value}`}>
          <div class="dis-btn__content">{slots.default?.()}</div>
        </button>
      )
    }
  },
})
