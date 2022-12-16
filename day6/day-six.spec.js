const daySix = require('./day-six.js')

describe('Day Six', () => {
  it('should do a thing', () => {
    expect(daySix('daySixTestData1.txt')).toEqual(7)
  })
  //   it.each`
  //   testData     | expected
  //   ${'daySixTestData1.txt'} | ${7}
  //   ${'daySixTestData2.txt'} | ${5}
  //   ${'daySixTestData3.txt'} | ${6}
  //   ${'daySixTestData4.txt'} | ${10}
  //   ${'daySixTestData5.txt'} | ${11}
  // `(
  //   'returns $expected characters need to be processed before the first start-of-packet marker is detected for $testData',
  //   ({testData, expected}) => {
  //   expect(daySix(testData)).toBe(expected);
  //   }
  // )
})