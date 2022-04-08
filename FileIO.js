const fs = require('fs')
const path = require('path')

let currentpath = "C:\\Users\\17027\\Documents\\visualstudio\\Javascript\\hello.txt"
console.log(path.basename(currentpath))

fs.readFile(currentpath, 'utf8',function (err, data){
    if (err) { return console.log(err)}
    console.log(data)
})


