const fs = require('fs')
const path = require('path')
exports = module.exports = (file) => {
  const input = fs.readFileSync(path.resolve(__dirname, `./${file}`), 'utf-8').toString().split('\n')

  // const priorityValue = {
  //   a: 1,
  //   b: 2,
  //   c: 3,
  //   d: 4,
  //   e: 5,
  //   f: 6,
  //   g: 7,
  //   h: 8,
  //   i: 9,
  //   j: 10,
  //   k: 11,
  //   l: 12,
  //   m: 13,
  //   n: 14,
  //   o: 15,
  //   p: 16,
  //   q: 17,
  //   r: 18,
  //   s: 19,
  //   t: 20,
  //   u: 21,
  //   v: 22,
  //   w: 23,
  //   x: 24,
  //   y: 25,
  //   z: 26,
  //   A: 27,
  //   B: 28,
  //   C: 29,
  //   D: 30,
  //   E: 31,
  //   F: 32,
  //   G: 33,
  //   H: 34,
  //   I: 35,
  //   J: 36,
  //   K: 37,
  //   L: 38,
  //   M: 39,
  //   N: 40,
  //   O: 41,
  //   P: 42,
  //   Q: 43,
  //   R: 44,
  //   S: 45,
  //   T: 46,
  //   U: 47,
  //   V: 48,
  //   W: 49,
  //   X: 50,
  //   Y: 51,
  //   Z: 52,
  // }

  function priorityValue(letter) {
    if(/[a-z]/.test(letter)) return letter.charCodeAt(0) - 96
    else return letter.charCodeAt(0) - 38
  }

  const prioritiesSum = input.reduce((total, rucksack) => {
    const index = rucksack.length/2
    const [first, second] = [rucksack.slice(0, index), rucksack.slice(index)]
    const firstSet = new Set(first)
    const priority =[...new Set(second)].filter(char => firstSet.has(char)).map(char => priorityValue(char))

    return total + priority[0]
  }, 0)

  // console.log(prioritiesSum)
  return prioritiesSum
}