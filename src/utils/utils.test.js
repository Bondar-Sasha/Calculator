import factorial from './factorial'
import lastEl from './lastEl'

describe('Utils', () => {
   describe('factorial', () => {
      test('int', () => {
         expect(factorial(5)).toBe(120)
      })
      test('real', () => {
         expect(factorial(1.2)).toBe(null)
      })
      test('negative', () => {
         expect(factorial(-5)).toBe(null)
      })
   })
   describe('lastEl', () => {
      const arr1 = [1]
      const arr2 = []
      test('not empty', () => {
         expect(lastEl(arr1)).toBe(1)
      })
      test('empty', () => {
         expect(lastEl(arr2)).toBe(undefined)
      })
   })
})
