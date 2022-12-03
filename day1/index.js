const fs = require('fs')
const input = fs.readFileSync('/Users/melissaschultz/Documents/Projects/AdventOfCode2022/Day1/input.txt').toString().split('\n')

function createCalorieGroupTotalArray (arr) {
  const calorieGroupTotals = []
  let total = 0

  for(let i=0; i<arr.length; i++) {
    if (arr[i] !== '') {
      total = total + parseInt(arr[i])
    } else if (arr[i] === '') {
      calorieGroupTotals.push(total)
      total = 0
    }
  }
  calorieGroupTotals.push(total)
  return calorieGroupTotals
}

exports.findHighestCalories = function(arr) {
  const calorieGroupTotals = createCalorieGroupTotalArray(arr)
  // let total = 0
  let mostCalories = 0


  // for(let i=0; i<arr.length; i++) {
  //   if (arr[i] !== '') {
  //     total = total + parseInt(arr[i])
  //   } else if (arr[i] === '') {
  //     calorieGroupTotals.push(total)
  //     total = 0
  //   }
  // }

  calorieGroupTotals.forEach( (value, i) => {
    if (value > mostCalories) {
      mostCalories = value
    }
  })

  return mostCalories
}

// console.log(this.findHighestCalories(input))

exports.topThree = function(arr) {
  calorieGroupTotals = createCalorieGroupTotalArray(arr)
  // let totalCalories = 0
  // const topThree = calorieGroupTotals.sort((a, b) => a - b).slice(-3)
  const topThree = calorieGroupTotals.sort((a, b) => b - a)
  // < less than
  // <= less than or equal to
  // > greater than
  // >= greater than or equal to


console.log(calorieGroupTotals)

  // topThree.forEach( value => {
  //   totalCalories += value
  // })

  return topThree[0] + topThree[1] + topThree[2]
}

// console.log(this.topThree(input))