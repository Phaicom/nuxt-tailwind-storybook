import Vuex from 'vuex'

import axios from 'axios'

import { actions, getters, mutations, state } from '@/store'

let store = new Vuex.Store({
  actions,
  getters,
  mutations,
  state,
})

store.$axios = axios

export default store
