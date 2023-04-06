import { IInnerTreeNode, ITreeNode } from './tree-types'

export function generateInnerTree(
  tree: ITreeNode[],
  level = 0, // 表示当前节点所处的层级
  parentNode = {} as IInnerTreeNode // 表示递归路径
): IInnerTreeNode[] {
  level++
  return tree.reduce((prev, cur) => {
    const o = { ...cur } as IInnerTreeNode
    o.level = level
    if (level > 1 && parentNode) {
      o.parentId = parentNode.id
    } else {
      o.parentId = null
    }
    if (o.children) {
      // 非叶子节点
      const children = generateInnerTree(o.children, level, o)
      delete o.children
      return prev.concat(o, children)
    } else {
      // 叶子节点
      o.isLeaf = true
      return prev.concat(o)
    }
  }, [] as IInnerTreeNode[])
}
