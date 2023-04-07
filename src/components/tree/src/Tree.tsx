import { getPrefixCls } from '../../../_utils/global-config'
import { computed, defineComponent, ref, SetupContext, toRefs } from 'vue'
import { IInnerTreeNode, TreeProps, treeProps } from './tree-types'
import { generateInnerTree } from './utils'
import '../style/index.scss'
export default defineComponent({
  name: 'DisTree',
  props: treeProps,
  setup(props: TreeProps, { slots, emit }: SetupContext) {
    const { data } = toRefs(props)
    const innerData = ref(generateInnerTree(data.value))
    const prefixCls = getPrefixCls('tree')
    const classes = computed(() => {
      return {
        [prefixCls]: true,
      }
    })

    const toggleNode = (node: IInnerTreeNode) => {
      //在原始列表获取该节点
      const currentNode = innerData.value.find((item) => item.id === node.id)
      currentNode && (currentNode.expanded = !currentNode.expanded)
    }
    const getChildren = (node: IInnerTreeNode) => {
      const result = []
      const startIndex = innerData.value.findIndex(
        (item) => item.id === node.id
      )
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
