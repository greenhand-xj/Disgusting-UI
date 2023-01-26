import { computed, defineComponent, SetupContext, toRefs } from 'vue'
import { buttonProps, ButtonProps } from './button-types'
import { getPrefixCls } from '../../../_utils/global-config'
import '../style/index.scss'

export default defineComponent({
  name: 'DisButton',
  props: buttonProps,
  emits: {
    click: (ev: MouseEvent) => true,
  },
  setup(props: ButtonProps, { slots, emit }: SetupContext) {
    const { type, size, disabled, block, shape, loading } = toRefs(props)
    const prefixCls = getPrefixCls('btn')
    const classes = computed(() => {
      return {
        [prefixCls]: true,
        [`${prefixCls}--block`]: block.value,
        [`${prefixCls}--${type.value}`]: true,
        [`${prefixCls}--${size.value}`]: true,
        [`${prefixCls}--disabled`]: disabled.value || loading.value,
        [`${prefixCls}--${shape.value}`]: !block.value, // 如果有shape 也有block的话就以block为准
        [`${prefixCls}--loading`]: loading.value,
      }
    })
    const handleClick = (ev: MouseEvent) => {
      if (disabled.value || loading.value) {
        ev.preventDefault()
        return
      }
      emit('click', ev)
    }
    return () => {
      return (
        <button
          disabled={disabled.value || loading.value}
          class={classes.value}
          onClick={handleClick}
        >
          {loading.value && (
            <div
              class="loading__content"
              style={{ marginRight: slots.default ? '3px' : '0px' }}
            >
              <svg viewBox="25 25 50 50">
                <circle r="20" cy="50" cx="50"></circle>
              </svg>
            </div>
          )}
          <span class={`${prefixCls}__content`}>{slots.default?.()}</span>
        </button>
      )
    }
  },
})
