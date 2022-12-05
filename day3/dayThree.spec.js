const partOne = require('./part-one.js')

describe('Day Three', () => {
  it('should return the sum of the priorities of each itm type in the array', () => {
    const expected = 157

    const actual = partOne('dayThreeTestData.txt')
    expect(actual).toEqual(expected)
  })
})