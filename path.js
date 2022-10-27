const path = require('path')

filepath = path.join('public', 'dist', 'index.css')
console.log(path.basename(filepath))
console.log(path.dirname(filepath))
console.log(path.parse(filepath))
console.log(path.resolve(filepath))

