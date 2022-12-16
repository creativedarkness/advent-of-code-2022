const dayNine = require('./day-nine.js')

describe('Day Nine', () => {
  it('should return how many positions does the tail of the rope visit at least once', () => {
    expect(dayNine('dayNineTestData.txt')).toEqual(13)
  })
})