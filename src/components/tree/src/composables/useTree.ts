import { IInnerTreeNode, ITreeNode } from '../tree-types'
import { computed, onMounted, Ref, ref, unref } from 'vue'
import { generateInnerTree } from '../utils'
import { NODE_HEIGHT } from '../../constant'

export function useTree(node: Ref<ITreeNode[]> | ITreeNode[]) {
  const innerData = ref(generateInnerTree(unref(node)))
  const toggleNode = (node: IInnerTreeNode) => {
    //在原始列表获取该节点
    const currentNode = innerData.value.find((item) => item.id === node.id)
    currentNode && (currentNode.expanded = !currentNode.expanded)
  }
  const getChildren = (node: IInnerTreeNode, isRecursive = true) => {
    const result = []
    const startIndex = innerData.value.findIndex((item) => item.id === node.id)
    for (
      let i = startIndex + 1;
      i < innerData.value.length && node.level < innerData.value[i].level;
      i++
    ) {
      if (isRecursive) {
        result.push(innerData.value[i])
      } else if (node.level === innerData.value[i].level - 1) {
        result.push(innerData.value[i])
      }
    }
    return result
  }
  // 获取哪些展开的节点列表
  const expandedTree = computed((): IInnerTreeNode[] => {
    const excludedNodes: IInnerTreeNode[] = []
    const result = []
    for (const item of innerData.value) {
      if (excludedNodes.includes(item)) {
        continue
      }
      if (!item.expanded) {
        excludedNodes.push(...getChildren(item))
      }
      result.push(item)
    }
    return result
  })

  const computeLineHeight = (treeNode: IInnerTreeNode) => {
    const children = getChildren(treeNode)
    children.map((item) => {
      if (item.hasOwnProperty('expanded') && !item.expanded) {
        for (let i = 0; i < children.length; i++) {
          const idx = children.findIndex((node) => node.parentId === item.id)
          children.splice(idx, 1)
        }
      }
    })
    return NODE_HEIGHT * children.length
  }

  onMounted(() => {
    innerData.value.forEach((node) => {
      node.checked && _toggleCheckNode(node)
    })
  })
  const _toggleCheckNode = (treeNode: IInnerTreeNode) => {
    const currentTreeNodeChildren = getChildren(treeNode)
    currentTreeNodeChildren.forEach((child) => {
      child.checked = treeNode.checked
    })
  }
  const toggleCheckNode = (treeNode: IInnerTreeNode) => {
    treeNode.checked = !treeNode.checked
    _toggleCheckNode(treeNode)
    if (treeNode.parentId) {
      const parentNode = innerData.value.find(
        (item) => item.id === treeNode.parentId
      )
      if (!parentNode) return
      const siblingNodes = getChildren(parentNode, false)
      parentNode.checked = siblingNodes.every((node) => node.checked)
    }
  }
  return {
    toggleNode,
    innerData,
    getChildren,
    expandedTree,
    computeLineHeight,
    toggleCheckNode,
  }
}
