import { test, expect } from 'vitest'
import Button from '../src/Button'
import { render } from '@testing-library/vue'
test('Button.tsx should work', () => {
  const { getByText } = render(Button)
})
