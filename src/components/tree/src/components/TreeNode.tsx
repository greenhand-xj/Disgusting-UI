import { getPrefixCls } from '../../../../_utils/global-config'
import { defineComponent, inject, toRefs } from 'vue'
import { NODE_HEIGHT, NODE_INDENT, TREE_UTILS } from '../../constant'
import { treeNodeProps, TreeNodeProps, TreeUtils } from './tree-node-types'
export default defineComponent({
  name: 'TreeNode',
  props: treeNodeProps,
  setup(props: TreeNodeProps, { slots }) {
    const { lineable, checkable, treeNode } = toRefs(props)
    const prefixCls = getPrefixCls('tree')
    const { computeLineHeight, toggleCheckNode, toggleNode } = inject(
      TREE_UTILS
    ) as TreeUtils
    return () => (
      <div
        class={`${prefixCls}-node`}
        style={{
          marginLeft: `${NODE_INDENT * (treeNode.value.level - 1)}px`,
        }}
      >
        {/* 连接线 */}
        {!treeNode.value.isLeaf &&
          treeNode.value.expanded &&
          lineable.value && (
            <span
              class={`${prefixCls}-node__line`}
              style={{
                height: `${computeLineHeight(treeNode.value)}px`,
                left: `${NODE_INDENT * (treeNode.value.level - 1) + 9}px`,
                top: `${NODE_HEIGHT}px`,
              }}
            ></span>
          )}
        {/* 折叠图标 */}
        {treeNode.value.isLeaf ? (
          <span style={{ display: 'inline-block', width: '25px' }}></span>
        ) : (
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          slots.icon!({ nodeData: treeNode.value, toggleNode })
        )}
        {/* 复选框 */}
        {checkable.value && (
          <label class={`${prefixCls}-node-checkbox`}>
            <input
              type="checkbox"
              v-model={treeNode.value.checked}
              onClick={() => toggleCheckNode(treeNode.value)}
            />
            <div class="checkmark"></div>
          </label>
        )}
        {/* 标签 */}
        {/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */}
        {slots.content!({ nodeData: treeNode.value })}
        {/* {slots.content
          ? slots.content({ nodeData: treeNode.value })
          : treeNode.value.label} */}
      </div>
    )
  },
})
