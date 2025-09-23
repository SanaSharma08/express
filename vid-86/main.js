
//ES Module Syntax - Modern - set "type:module", in package.json to switch to es since default is commonjs.

// import http from "http"
// import obj from "./mymodule.js"
// import harry from "./mymodule.js" // also works because obj is default export so specific name not required to import
// import {a ,b ,d} from "./mymodule.js"
// console.log(a)
// console.log(b)
// console.log(d)
// console.log(obj)

const a=require("./mymodule2.js") //commonJS Syntax - old but default
const b=require("./mymodule3.js") //commonJS Syntax - old but default
console.log(a, __dirname,__filename)
console.log(b) //56

