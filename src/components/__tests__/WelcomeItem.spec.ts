import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import WelcomeItem from '../WelcomeItem.vue';

describe('Welcome Item', () => {

  it('test ref value', () => {
    const wrapper = mount(WelcomeItem)
    expect(wrapper.vm.foo).toBe('bar');
  })
})
