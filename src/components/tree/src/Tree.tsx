import { getPrefixCls } from '../../../_utils/global-config'
import { computed, defineComponent, SetupContext, toRefs } from 'vue'
import '../style/index.scss'
import { useTree } from '@components/tree/src/composables/useTree'
import { TreeProps, treeProps } from './tree-types'
export default defineComponent({
  name: 'DisTree',
  props: treeProps,
  setup(props: TreeProps, { slots, emit }: SetupContext) {
    const { data } = toRefs(props)
    const { expandedTree, toggleNode } = useTree(data)
    const prefixCls = getPrefixCls('tree')
    const classes = computed(() => {
      return {
        [prefixCls]: true,
      }
    })

    return () => {
      return (
        <div class={classes.value}>
          {expandedTree.value.map((treeNode) => (
            <div
              class={`${prefixCls}-node`}
              style={{ paddingLeft: `${24 * (treeNode.level - 1)}px` }}
            >
              {/* 折叠图标 */}
              {treeNode.isLeaf ? (
                <span style={{ display: 'inline-block', width: '25px' }}></span>
              ) : (
                <svg
                  class={`${prefixCls}-node-icon`}
                  onClick={() => toggleNode(treeNode)}
                  style={{
                    transform: treeNode.expanded ? 'rotate(90deg)' : 'none',
                  }}
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M384 192v640l384-320.064z"
                  ></path>
                </svg>
              )}
              {treeNode.label}
            </div>
          ))}
        </div>
      )
    }
  },
})
