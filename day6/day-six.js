const fs = require('fs')
const path = require('path')
exports = module.exports = (file, partTwo) => {

  const input = fs.readFileSync(path.resolve(__dirname, `./${file}`), 'utf-8')
  // the start of a packet is indicated by a sequence of four characters that are all different
  const markerLength = 4
  let charNum = 0
  let secondTing = 0

  // input.map(char => {
  //   if (input.indexOf(char) <= 4)
  //   [...char]
  // })

  for (let i = 0; i < input.length; )
  console.log(typeof input)

  return partTwo ? secondTing : charNum
}