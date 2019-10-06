const fs = require('fs')

const filename = 'log.txt'

// Write file
fs.writeFileSync(filename, "Este texto foi inserido no arquivo.")

// Read file
console.log(fs.readFileSync(filename).toString())

// Append to file
fs.appendFileSync(filename, '\nAgora editei esse arquivo.')
console.log(fs.readFileSync(filename).toString())