const fs = require('fs')
const path = require('path')

exports = module.exports = (file) => {
  const input = fs.readFileSync(path.resolve(__dirname, `./${file}`), 'utf-8').toString().split('\n') // read file

  /**
   * A Y // Draw
   * B X // Loss
   * C Z // Win
   *
   * Rock defeats Scissors
   * Scissors defeats Paper
   * Paper defeats Rock
  */

  // elf, player // result
  // A = 1, X = 1 // draw (A-X = 1-1 = 0)
  // B = 2, X = 1 // loss (B-X = 2-1 = -1) Math.abs()
  // C = 3, X = 1 // win (C-X = 3-1 = 2)

  // we know what the elf is play, determine which to paly
  // win  = 2 loss = 1 draw = 0

  const scoreCard = {
    A: 1, // Rock
    B: 2, // Paper
    C: 3, // Scissors
    X: 1, // Rock
    Y: 2, // Paper
    Z: 3 // Scissors
  }

  const win = 6
  const loss = 3
  const draw = 0
  let score = 0

  // * Rock defeats Scissors
  // * Scissors defeats Paper
  // * Paper defeats Rock
  // * If both players choose the same shape,
  // *  the round instead ends in a draw.

  // const strategy = {
  //   A: 1, // Rock
  //   B: 2, // Paper
  //   C: 3, // Scissors
  //   Z: 2, // win
  //   X: 1, // loss
  //   Y: 0 // draw
  // }

  const moves = { A: 1, B: 2, C: 3 };
  const results = { X: -1, Y: 0, Z: 1 };

  const strategicScore = input.reduce((score, round) => {
    [elf, strategy] = round.split(" ");
    const counter = Object.keys(moves)[(b = Object.keys(moves).indexOf(elf) + results[strategy]) < 0 ? 3 - Math.abs(b) : b > 2 ? 3 - b : b];
    score += [3, 0, 6][(a = moves[elf] - moves[counter]) < 0 ? 3 - Math.abs(a) : a] + moves[counter];

    return score;
  }, 0)

  return strategicScore
}