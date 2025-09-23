const fs=require("fs")
// console.log(fs)
// fs.writeFileSync("harry.txt","Hi This file was made Synchronously");
console.log("start")
fs.writeFile("harry2.txt","This file was made asynchronously!",()=>{
    //callback function
    console.log("Writing Complete!")
    fs.readFile("harry2.txt",(error,data)=>{
        console.log(error,data.toString())
    })
})

fs.appendFile("harry.txt","    harryroboooo",(e,d)=>{
    console.log(d); //old version displayed (origianl text)
    fs.readFile("harry.txt",(e,d)=>{
        console.log(d.toString()) //new version with appends displayed
    })
})
console.log("end") 