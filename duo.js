const fs = require('fs')

fs.readFile('a.txt', 'UTF-8', (error, result) => {
    if (error) {
        return console.log(error)
    }
    console.log(result)
})
