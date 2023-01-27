import { defineStore } from 'pinia'

export const useLanguagesStore = defineStore('languages', {
  state: () => {
    return { language: "EN" }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    change(lng) {
      this.language = lng
    },
  },

  getters: {
    getLanguage: (state) => {
      return state.language
    },
  },
})