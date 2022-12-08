const fs = require('fs')
const path = require('path')

exports = module.exports = (file) => {
  const input = fs.readFileSync(path.resolve(__dirname, `./${file}`), 'utf-8')
    .toString()
    .split('\n')
    .map(el => el.split(','))



  console.log(input[0][0].indexOf('-'))
  return 0
}