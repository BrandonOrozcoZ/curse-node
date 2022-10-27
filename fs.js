const fs = require('fs')

/* const first = fs.readFileSync('./data/first.txt', 'utf-8')
const second = fs.readFileSync('./data/second.txt')

console.log(first)
console.log(second.toString())

const title = 'We gonna win'

fs.writeFileSync('./data/fourth.txt', title, {
    flag: 'a'
}) */


fs.readFile('./data/second.txt', 'utf-8', (error, data) => {
    if(error){
        console.log(error)
    }
    console.log(data)

    fs.readFile('./data/first.txt', 'utf-8', (error, data) => {
        if(error){
            console.log(error)
        }
        console.log(data)
        
        fs.writeFile('./data/newfile.txt', 'txt created from fs', (error, data) => {
            console.log(error)
        })

    })
}) 