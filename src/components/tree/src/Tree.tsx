import { getPrefixCls } from '../../../_utils/global-config'
import { defineComponent, SetupContext, toRefs, Transition } from 'vue'
import '../style/index.scss'
import { useTree } from '@components/tree/src/composables/useTree'
import { TreeProps, treeProps } from './tree-types'
import { NODE_HEIGHT, NODE_INDENT } from '../constant'
import ExpandTransition from './ExpandTransition'

export default defineComponent({
  name: 'DisTree',
  props: treeProps,
  setup(props: TreeProps, { slots, emit }: SetupContext) {
    const { data, checkable } = toRefs(props)
    const { expandedTree, toggleNode, computeLineHeight, toggleCheckNode } =
      useTree(data)
    const prefixCls = getPrefixCls('tree')
    return () => {
      return (
        <div class={prefixCls}>
          {expandedTree.value.map((treeNode) => (
            <ExpandTransition expanded={treeNode.expanded}>
              <div
                class={`${prefixCls}-node`}
                style={{
                  marginLeft: `${NODE_INDENT * (treeNode.level - 1)}px`,
                }}
              >
                {/* 连接线 */}
                {!treeNode.isLeaf && treeNode.expanded && (
                  <span
                    class={`${prefixCls}-node__line`}
                    style={{
                      height: `${computeLineHeight(treeNode)}px`,
                      left: `${NODE_INDENT * (treeNode.level - 1) + 9}px`,
                      top: `${NODE_HEIGHT}px`,
                    }}
                  ></span>
                )}
                {/* 折叠图标 */}
                {treeNode.isLeaf ? (
                  <span
                    style={{ display: 'inline-block', width: '25px' }}
                  ></span>
                ) : slots.icon ? (
                  slots.icon({ nodeData: treeNode, toggleNode })
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
                {/* 复选框 */}
                {checkable.value && (
                  <label class={`${prefixCls}-node-checkbox`}>
                    <input
                      type="checkbox"
                      v-model={treeNode.checked}
                      onClick={() => toggleCheckNode(treeNode)}
                    />
                    <div class="checkmark"></div>
                  </label>
                )}
                {/* 标签 */}
                {slots.content
                  ? slots.content({ nodeData: treeNode })
                  : treeNode.label}
              </div>
            </ExpandTransition>
          ))}
        </div>
      )
    }
  },
})
