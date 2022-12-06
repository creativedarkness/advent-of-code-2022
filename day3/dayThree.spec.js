const partOne = require('./part-one.js')
const partTwo = require('./part-two.js')

describe('Day Three', () => {
  it('should return the sum of the priorities of each itm type in the array', () => {
    const expected = 157
    // const expected = 54

    const actual = partOne('dayThreeTestData.txt')
    expect(actual).toEqual(expected)
  })

  it('should return the sum of the priorities of each group of three', () => {
    const expected = 70

    const actual = partTwo('dayThreeTestData.txt')
    expect(actual).toEqual(expected)
  })
})