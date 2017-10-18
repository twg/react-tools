/*
  Use this when this project updates to react 16
  Add it to jest.config.json -> setUpFiles
*/
global.fetch = require('jest-fetch-mock')

global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0)
}

const localStorageMock = (function() {
  let store = {}

  return {
    getItem: key => store[key] || null,
    setItem: (key, value) => {
      store[key] = value.toString()
    },
    removeItem: key => delete store[key],
    clear: () => {
      store = {}
    }
  }
})()

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
})
