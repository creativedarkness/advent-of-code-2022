const fs = require('fs')
const path = require('path')

exports = module.exports = (file, part) => {
  const input = fs.readFileSync(path.resolve(__dirname, `./${file}`), 'utf-8')
    .split('\n')
    .map(assignment => assignment.split(',').map(range => range.split('-').map(num => parseInt(num))))

    
    let partiallyEncased = 0

    input.forEach(assignment => {
      [[firstStart, firstEnd], [secondStart, secondEnd]] = assignment
      if (firstEnd >= secondStart || secondStart <= firstEnd) partiallyEncased += 1
    })

    console.log(partiallyEncased)
  return partiallyEncased
}