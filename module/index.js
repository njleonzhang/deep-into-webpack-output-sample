import Const1, { name as name1 } from '../output/dist/index.cmd.js'
import Const2, { name as name2 } from '../output/dist/index.umd.js'
import Const3, { name as name3 } from '../output/dist/index.amd.js'
import Const4, { name as name4 } from '../output/dist/index.cmd2.js'
import Const5, { name as name5 } from '../output/dist/index.var.js'

window.Const1 = Const1
window.Const2 = Const2
window.Const3 = Const3
window.Const4 = Const4
window.Const5 = Const5

console.log(Const1, Const2, Const3, Const4, Const5)
console.log(name1, name2, name3, name4, name5)
