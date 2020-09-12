import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { actions, mutations, getters, state } from '@/store'
import Logo from '@/components/Logo.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Logo', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      actions,
      mutations,
      getters,
      state,
    })
  })

  test('is a Vue instance', () => {
    const wrapper = mount(Logo)
    expect(wrapper.vm).toBeTruthy()
  })

  test('is a Vue instance', () => {
    const wrapper = shallowMount(Logo, { store, localVue })
    expect(wrapper.vm).toBeTruthy()
  })
})
