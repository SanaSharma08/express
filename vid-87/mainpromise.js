import fs from "fs/promises"
let a = await fs.readFile("harry.txt")
//overwrites harry,txt since it already exists
let b = await fs.writeFile("harry.txt","\n\n\n\nthis is amazing!");
let c = await fs.appendFile("harry.txt","\nI am putting harry back through append");
console.log(a.toString());