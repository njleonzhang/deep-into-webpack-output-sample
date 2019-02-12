import { testStr } from './test'

console.log(testStr)

import('./const').then(Component => {
  Component.default()
  console.log(Component, Component.name)
})
