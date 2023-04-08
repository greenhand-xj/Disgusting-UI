import { IInnerTreeNode, ITreeNode } from '../tree-types'
import { computed, Ref, ref, unref } from 'vue'
import { generateInnerTree } from '../utils'

export function useTree(node: Ref<ITreeNode[]> | ITreeNode[]) {
  const innerData = ref(generateInnerTree(unref(node)))
  const toggleNode = (node: IInnerTreeNode) => {
    //在原始列表获取该节点
    const currentNode = innerData.value.find((item) => item.id === node.id)
    currentNode && (currentNode.expanded = !currentNode.expanded)
  }
  const getChildren = (node: IInnerTreeNode) => {
    const result = []
    const startIndex = innerData.value.findIndex((item) => item.id === node.id)
    for (
      let i = startIndex + 1;
      i < innerData.value.length && node.level < innerData.value[i].level;
      i++
    ) {
      result.push(innerData.value[i])
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
  return {
    toggleNode,
    innerData,
    getChildren,
    expandedTree,
  }
}
