import { getPrefixCls } from '../../../_utils/global-config'
import { computed, defineComponent, SetupContext, toRefs } from 'vue'
import { TreeProps, treeProps } from './tree-types'

export default defineComponent({
  name: 'DisTree',
  props: treeProps,
  setup(props: TreeProps, { slots, emit }: SetupContext) {
    const { data: innerData } = toRefs(props)
    const prefixCls = getPrefixCls('tree')
    const classes = computed(() => {
      return {
        [prefixCls]: true,
      }
    })
    console.log('tree-1-1-1')

    return () => {
      return (
        <div class={classes.value}>
          {innerData.value.map((treeNode) => (
            <p>{treeNode.label}</p>
          ))}
          wodeshijie
        </div>
      )
    }
  },
})
