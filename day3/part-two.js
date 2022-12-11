const fs = require('fs')
const path = require('path')
exports = module.exports = (file) => {
  const input = fs.readFileSync(path.resolve(__dirname, `./${file}`), 'utf-8').toString().split('\n')

  function priorityValue(letter) {
    if(/[a-z]/.test(letter)) return letter.charCodeAt(0) - 96
    else return letter.charCodeAt(0) - 38
  }
  
  let sum = 0
  const findGroupedPrioritySum = function() {
    for (i = 0; i < input.length; i += 3) {
      let firstGroup = input[i]
      let secondGroup = input[i+1]
      let thirdGroup = input[i+2]
      for (x = 0; x < firstGroup.length; x++) {
        if (secondGroup.includes(firstGroup[x]) && thirdGroup.includes(firstGroup[x])) {
          sum += priorityValue(firstGroup[x])
          break
        }
      }
  }
  }

  findGroupedPrioritySum()

  return sum
}