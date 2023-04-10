import { defineComponent, Transition } from 'vue'

export default defineComponent({
  name: 'ExpandTransition',
  props: {
    expanded: Boolean,
  },
  setup(props, { slots }) {
    const onBeforeEnter = (el: Element) => {
      const _el = el as HTMLDivElement
      _el.style.height = props.expanded ? '0' : `${el.scrollHeight}px`
    }
    const onEnter = (el: Element) => {
      debugger
      const _el = el as HTMLDivElement
      _el.style.height = props.expanded ? `${el.scrollHeight}px` : '0'
    }
    const onAfterEnter = (el: Element) => {
      const _el = el as HTMLDivElement
      _el.style.height = props.expanded ? '' : '0'
    }
    const onBeforeLeave = (el: Element) => {
      const _el = el as HTMLDivElement
      _el.style.display = 'none'
    }
    return () => {
      return (
        <Transition
          onBeforeEnter={onBeforeEnter}
          onEnter={onEnter}
          onAfterEnter={onAfterEnter}
          onBeforeLeave={onBeforeLeave}
        >
          {slots.default?.()}
        </Transition>
      )
    }
  },
})
