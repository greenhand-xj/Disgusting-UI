import { SetupContext } from 'vue'
import { IInnerTreeNode } from '../tree-types'

type TreeNodeToggleProps = {
  treeNode: IInnerTreeNode
}

export default (props: TreeNodeToggleProps, { emit }: SetupContext) => {
  const { treeNode } = props
  return (
    <svg
      onClick={() => emit('onClick')}
      style={{
        transform: treeNode.expanded ? 'rotate(90deg)' : 'none',
      }}
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="currentColor" d="M384 192v640l384-320.064z"></path>
    </svg>
  )
}
