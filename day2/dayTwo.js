const fs = require('fs')
const path = require('path')

exports = module.exports = (file) => {
  const input = fs.readFileSync(path.resolve(__dirname, `./${file}`), 'utf-8').toString().split('\n') // read file

  const scoreCard = {
    A: 1,
    B: 2,
    C: 3,
    X: 1,
    Y: 2,
    Z: 3
  }
  const groupByRound = input.map(el => el.split(' '))
  let totalScore = 0

  groupByRound.forEach(

  )

  function findPlayedPoints (arr) {
    let personalPoints = 0
    for(let i = 0; i < arr.length; i++) {
      console.log('before 2nd loop', personalPoints)
      for(let x = 1; x < arr[i].length; x++) {
        if (arr[i][x] === 'X') personalPoints =+ 1
        if (arr[i][x] === 'Y') personalPoints =+ 2
        if (arr[i][x] === 'Z') personalPoints =+ 3
        // console.log({ i, x, personalPoints })
      }
    }
    return personalPoints
  }





  /**
   * Rock defeats Scissors
   * Scissors defeats Paper
   * Paper defeats Rock.
   * If both players choose the same shape,
   *  the round instead ends in a draw.
   * --------------------------------------
   * Points
   * --------------------------------------
   * (A) Rock (X) = 1pt
   * (B) Paper (Y) = 2pt
   * (C) Scissors (Z) = 3 pt
   * -------------------
   * Won = 6pt ([AY], [B,C], [B,X])
   * Lost = 3 pt
   * Draw = 0pt
   * Total Score = (your score) + (outcome of round)
   */

  console.log('Total', findPlayedPoints(withSubArrays))

}