const partOne = require('./part-one.js')
const partTwo = require('./part-two.js')

describe('Day 4', () => {
  it('should return the number of assignment pairs does one range fully contain the other', () => {
    const expected = 2

    const actual = partOne('dayFourTestData.txt')
    expect(actual).toEqual(expected)
  })

  it('should return the number of assignment pairs does partially contain the other', () => {
    const expected = 4

    const actual = partTwo('dayFourTestData.txt')
    expect(actual).toEqual(expected)
  })
 })