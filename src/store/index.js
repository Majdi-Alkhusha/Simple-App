import Vue from 'vue'
import Vuex from 'vuex'
import modeulAuth from './moduleAuth'

Vue.use(Vuex)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      modeulAuth
    },
    // for dev mode only
    strict: process.env.DEV
  })

  if (process.env.DEV && module.hot) {
    module.hot.accept(['./moduleAuth'], () => {
      const newmodeulAuth = require('./moduleAuth').default
      Store.hotUpdate({ modules: { modeulAuth: newmodeulAuth } })
    })
  }

  return Store
}