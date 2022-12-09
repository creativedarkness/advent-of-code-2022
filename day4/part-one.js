const fs = require('fs')
const path = require('path')

exports = module.exports = (file, part) => {
  const input = fs.readFileSync(path.resolve(__dirname, `./${file}`), 'utf-8')
    .split('\n')
    .map(assignment => assignment.split(',').map(range => range.split('-').map(num => parseInt(num))))
    
    let fullyEncased = 0

    input.forEach(assignment => {
      [[firstStart, firstEnd], [secondStart, secondEnd]] = assignment
      if (firstStart <= secondStart && firstEnd >= secondEnd || secondStart <= firstStart && secondEnd >=firstEnd) fullyEncased += 1
    })

  return fullyEncased
}