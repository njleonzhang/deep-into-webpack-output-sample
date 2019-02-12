import { testStr } from './test'

console.log(testStr)

import(/* webpackChunkName: "const" */ './const').then(Component => {
  Component.default()
  console.log(Component, Component.name)
})
