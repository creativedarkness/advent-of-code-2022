const partOne = require('./part-one.js')
const partTwo = require('./part-two.js')


describe('Day Two', () => {
  it('should return total score according to your strategy', () => {
    const expected = 15

    const actual = partOne('DayTwoTestData.txt')
    expect(actual).toEqual(expected)
  })

  it('should return the ultra top secret strategy total score', () => {
    const expected = 12

    const actual = partTwo('DayTwoTestData.txt')
    expect(actual).toEqual(expected)
  })
})