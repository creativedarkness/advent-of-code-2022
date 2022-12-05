const fs = require('fs')
const path = require('path')

  /**
   * Rock defeats Scissors
   * Scissors defeats Paper
   * Paper defeats Rock
   * If both players choose the same shape,
   *  the round instead ends in a draw.
   * --------------------------------------
   * Points
   * --------------------------------------
   * (A) Rock (X) = 1pt       Won = 6pt ([AY], [B,C], [B,X])
   * (B) Paper (Y) = 2pt      Lost = 3 pt
   * (C) Scissors (Z) = 3 pt  Draw = 0pt`
   * -------------------------------------
   * Total Score = (your score) + (outcome of round)
   */

exports = module.exports = (file) => {
  const input = fs.readFileSync(path.resolve(__dirname, `./${file}`), 'utf-8').toString().split('\n') // read file

  // const groupByRound = input.map(el => el.split(' '))
  // const win = 6
  // const loss = 3
  // let totalScore = 0

  // const scoreCard = {
  //   A: 1, // Rock
  //   B: 2, // Paper
  //   C: 3, // Scissors
  //   X: 1, // Rock
  //   Y: 2, // Paper
  //   Z: 3 // Scissors
  // }

  // groupByRound.forEach(el => {
  //   if (scoreCard[el[0]] === 3 && scoreCard[el[1]] === 1) totalScore =+ (scoreCard[el[1]] + win)
  //   if (scoreCard[el[0]] === 1 && scoreCard[el[1]] === 3) totalScore += (scoreCard[el[1]] + loss)
  //   // Scissors defeats Paper
  //   if (scoreCard[el[0]] === 2 && scoreCard[el[1]] === 3) totalScore += (scoreCard[el[1]] + win)
  //   if (scoreCard[el[0]] === 3 && scoreCard[el[1]] === 2) totalScore += (scoreCard[el[1]] + loss)
  //   // Paper defeats Rock
  //   if (scoreCard[el[0]] === 1 && scoreCard[el[1]] === 2) totalScore += (scoreCard[el[1]] + win)
  //   if (scoreCard[el[0]] === 2 && scoreCard[el[1]] === 1) totalScore += (scoreCard[el[1]] + loss)
  //   // Draw
  //   if (scoreCard[el[0]] === scoreCard[el[1]]) totalScore += scoreCard[el[1]]
  // })


  // return totalScore

  let scores = { A: 1, B: 2, C: 3, X: 1, Y: 2, Z: 3 }

  let myScore = input.reduce((score, round) => {
    [elf, player] = round.split(' ')
    score += [3, 0, 6][(a = scores[elf] - scores[player]) < 0 ? 3 - Math.abs(a) : a] + scores[player]
    return score
  }, 0)
  
  return myScore
}