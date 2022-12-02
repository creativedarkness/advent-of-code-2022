const { findHighestCalories, topThree } = require('./index')

describe('findHighestCalories()', () => {
  const calories = [
    '1000',
    '2000',
    '3000', //6000
    '',
    '4000', // 4000
    '',
    '5000',
    '6000', // 11000
    '',
    '7000',
    '8000',
    '9000', // 24000
    '',
    '10000' // 10000
  ]

  it('should return the value of the highest group of calorie counts', () => {
    const expected = 24000
  
    const actual = findHighestCalories(calories)
    expect(actual).toEqual(expected)
  })

  it('should return the total of the top three highest calorie count', () => {
    const expected = 45000

    const actual = topThree(calories)
    expect(actual).toEqual(expected)
  })
})