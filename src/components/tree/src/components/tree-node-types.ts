import { ExtractPropTypes, PropType } from 'vue'
import { IInnerTreeNode, treeProps } from '../tree-types'

export const treeNodeProps = {
  ...treeProps,
  treeNode: {
    type: Object as PropType<IInnerTreeNode>,
    required: true,
  },
} as const
export type TreeNodeProps = ExtractPropTypes<typeof treeNodeProps>

export type TreeUtils = {
  toggleNode: (treeNode: IInnerTreeNode) => void
  toggleCheckNode: (treeNode: IInnerTreeNode) => void
  computeLineHeight: (treeNode: IInnerTreeNode) => number
}
