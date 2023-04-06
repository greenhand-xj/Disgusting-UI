import { getPrefixCls } from '../../../_utils/global-config'
import { computed, defineComponent, ref, SetupContext, toRefs } from 'vue'
import { TreeProps, treeProps } from './tree-types'
import { generateInnerTree } from './utils'

export default defineComponent({
  name: 'DisTree',
  props: treeProps,
  setup(props: TreeProps, { slots, emit }: SetupContext) {
    const { data } = toRefs(props)
    const innerData = ref(generateInnerTree(data.value))
    const prefixCls = getPrefixCls('tree')
    const classes = computed(() => {
      return {
        [prefixCls]: true,
      }
    })

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
