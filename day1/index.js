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
  let totalCalories = 0
  // let topThree = [0,0,0] // [24000, 11000, 10000]
  const topThree = calorieGroupTotals.sort((a, b) => a - b)
  // < less than
  // <= less than or equal to
  // > greater than
  // >= greater than or equal to


  // calorieGroupTotals.forEach( value => {
  //   if (value > topThree[0] && value <= topThree[1] && value <= topThree[2]) {
  //     topThree[0] = value
  //   } else if (value > topThree[0] && value <= topThree[1]) {
  //     let temp = topThree[0]
  //     let temp2 = topThree[1]
  //     topThree[0] = value 
  //     topThree[1] = temp
  //     topThree[2] = temp2
  //   } else if (value > topThree[0]) {
  //     let temp = topThree[0]
  //     topThree[0] = value 
  //     topThree[1] = temp
  //   }
  // })

  topThree.forEach((value, i) => {
    let count = 0

    if (count < 3) {
      if (value != arr[arr.length - i]) { // to handle duplicate values
        value = arr[arr.length - i];
        count++;
      }
    }
  })


console.log(calorieGroupTotals)

  topThree.forEach( value => {
    totalCalories += value
  })
  console.log({ topThree, totalCalories })
  return totalCalories
}

// console.log(this.topThree(input))