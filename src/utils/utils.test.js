import factorial from './factorial'
import formatNumber from './formatNumber'
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
   describe('formatNumber', () => {
      expect(formatNumber('120.1119', 3)).toBe('120.112')
      expect(formatNumber('120.9999', 3)).toBe('121')
      expect(formatNumber('-120.9999', 3)).toBe('-121')
      expect(formatNumber('120', 3)).toBe('120')
      expect(formatNumber('-120.111', 3)).toBe('-120.111')
      expect(formatNumber('-120', 3)).toBe('-120')
   })
})
