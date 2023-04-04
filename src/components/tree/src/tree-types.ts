import { ExtractPropTypes, PropType } from 'vue'

export const treeProps = {
  data: {
    type: Array as PropType<ITreeNode[]>,
    required: true,
    default: () => [],
  },
} as const
export type TreeProps = ExtractPropTypes<typeof treeProps>

interface ITreeNode {
  label: string
  id?: string
  children?: ITreeNode[]

  selected?: boolean
  checked?: boolean
  expanded?: boolean

  disableSelect?: boolean
  disableCheck?: boolean
  disableToggle?: boolean
}

export interface IInnerTreeNode extends ITreeNode {
  parentId?: string
  level: string
  isLeaf?: boolean
}
