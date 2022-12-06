const fs = require('fs')
const path = require('path')
exports = module.exports = (file) => {
  const input = fs.readFileSync(path.resolve(__dirname, `./${file}`), 'utf-8').toString().split('\n')

  function priorityValue(letter) {
    if(/[a-z]/.test(letter)) return letter.charCodeAt(0) - 96
    else return letter.charCodeAt(0) - 38
  }



  return 0
}