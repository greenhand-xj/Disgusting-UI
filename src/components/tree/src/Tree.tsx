import { getPrefixCls } from '../../../_utils/global-config'
import { defineComponent, provide, SetupContext, toRefs } from 'vue'
import '../style/index.scss'
import { useTree } from '@components/tree/src/composables/useTree'
import { TreeProps, treeProps } from './tree-types'

import ExpandTransition from './ExpandTransition'
import TreeNode from './components/TreeNode'
import { TREE_UTILS } from '../constant'
import { TreeUtils } from './components/tree-node-types'

export default defineComponent({
  name: 'DisTree',
  props: treeProps,
  setup(props: TreeProps, { slots, emit }: SetupContext) {
    const { data } = toRefs(props)
    const { expandedTree, toggleNode, computeLineHeight, toggleCheckNode } =
      useTree(data)
    provide(TREE_UTILS, {
      toggleNode,
      computeLineHeight,
      toggleCheckNode,
    } as TreeUtils)
    const prefixCls = getPrefixCls('tree')
    return () => {
      return (
        <div class={prefixCls}>
          {expandedTree.value.map((treeNode) => (
            <ExpandTransition expanded={treeNode.expanded}>
              <TreeNode {...props} treeNode={treeNode}>
                {{ content: slots.content, icon: slots.icon }}
              </TreeNode>
            </ExpandTransition>
          ))}
        </div>
      )
    }
  },
})
