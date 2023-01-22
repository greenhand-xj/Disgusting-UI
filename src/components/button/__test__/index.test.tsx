import Button from '../src/Button'
import { mount } from '@vue/test-utils'
import { IButtonType } from '../src/button-types'
describe('dis-button', () => {
  test('button types should work', () => {
    ;['text', 'primary', 'outline', 'success', 'warning', 'danger'].forEach(
      async (type) => {
        const wrapper = mount(() => <Button type={type as IButtonType} />)
        const cls = wrapper.get('button').classes()
        expect(cls).toContain('dis-btn--' + type)
        wrapper.unmount()
      }
    )
  })

  test('default configuration button should work', () => {
    const wrapper = mount(() => <Button></Button>)
    const cls = wrapper.get('button').classes()
    expect(cls).toContain('dis-btn--primary')
    wrapper.unmount()
  })
  test('default slot should word', () => {
    const text = 'hello world'
    const wrapper = mount(() => <Button>{{ default: () => text }}</Button>)
    expect(wrapper.html()).toContain(text)
  })

  test('loading button should work', () => {
    const wrapper = mount(() => <Button loading></Button>)
    const cls = wrapper.get('button').classes()
    expect(cls).toContain('dis-btn--loading')
    wrapper.unmount()
  })
})
