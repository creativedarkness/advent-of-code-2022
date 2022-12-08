const partOne = require('./part-one.js')

describe('Day 4', () => {
  it('should return the number of assignment pairs does one range fully contain the other', () => {
    const expected = 2

    const actual = partOne('DayFourTestData.txt')
    expect(actual).toEqual(expected)
  })
 })