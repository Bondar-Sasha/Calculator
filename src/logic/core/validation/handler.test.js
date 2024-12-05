import validation_handler from './handler.js'

describe('Validation handler', () => {
   const data1 = []
   const data2 = [{ icon: '', operation: 'number', values: ['10'] }]
   test('empty array of data', () => {
      expect(validation_handler(data1, { currentOperation: ['number'] })).toBe(false)
   })
   test('empty array of data', () => {
      expect(validation_handler(data1, { currentOperation: ['null'] })).toBe(true)
   })
   test('not empty array of data', () => {
      expect(validation_handler(data2, { currentOperation: ['number'] })).toBe(true)
   })
   test('not empty array of data', () => {
      expect(validation_handler(data2, { currentOperationNot: ['plus'] })).toBe(true)
   })
})
