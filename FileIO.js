const fs = require('fs')
const path = require('path')

fs.readFile(__dirname + '\\hello.txt', 'utf8',function (err, data){
    if (err) { return console.log(err)}
    console.log(data)
})


