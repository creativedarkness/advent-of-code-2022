const dayTwo = require('./dayTwo.js')


describe('Day Two', () => {
  it('should return total score according to your strategy', () => {
    const expected = 15

    const actual = dayTwo('dayTwoTestData.txt')
    expect(actual).toEqual(expected)
  })
})