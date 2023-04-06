import { ITreeNode } from '../src/tree-types'
import { generateInnerTree } from '../src/utils'

// 帮我用vitest写个关于generateInnerTree这个函数的测试用例
describe('generateInnerTree', () => {
  test('generateInnerTree should work', () => {
    const tree: ITreeNode[] = [
      {
        label: 'docs',
        id: 'docs',
      },
      {
        label: 'packages',
        id: 'packages',
        expanded: true,
        children: [
          {
            label: 'plugin-vue',
            id: 'plugin-vue',
          },
          {
            label: 'vite',
            id: 'vite',
            expanded: true,
            children: [
              {
                label: 'src',
                id: 'src',
              },
              {
                label: 'README.md',
                id: 'README.md',
              },
            ],
          },
        ],
      },
      {
        label: 'scripts',
        id: 'scripts',
        children: [
          {
            label: 'release.ts',
            id: 'release.ts',
          },
          {
            label: 'verifyCommit.ts',
            id: 'verifyCommit.ts',
          },
        ],
      },
      {
        label: 'pnpm-workspace.yaml',
        id: 'pnpm-workspace.yaml',
      },
    ]

    const genTree = generateInnerTree(tree)
    console.log('genTree', genTree)
  })
})
