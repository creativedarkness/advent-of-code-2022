const fs = require('fs')
const path = require('path')
exports = module.exports = (file) => {
  const grid = Array.from({ length: 5 }, () => Array(5).fill(0))
  let head = [4,0]
  let tail = [4,0]
  grid[4][0] = 1

  fs.readFileSync(path.resolve(__dirname, `./${file}`), 'utf-8')
    .split('\n')
    .forEach(move => {
      const [direction, steps] = move.split(' ').map((val, idx) => idx === 1 ? parseInt(val) : val)
      for (step of Array(steps)) {
        switch (direction) {
          case 'R':
            console.log(direction, 'right')
            /**
             * move to grid[same][current + step]
             * if current = end of array then grid[same + 1][current + step - 1]
             */
            break
          case 'L':
            console.log(direction, 'left')
            // move to grid[same][current - step]
            break
          case 'U':
            console.log(direction, 'up')
            break
          case 'D':
          console.log(direction, 'down')
          break
        }
      }
    })

    console.log(grid)

  return grid.reduce((a,b) => a + b.reduce((c,d) => c + d, 0), 0)
}