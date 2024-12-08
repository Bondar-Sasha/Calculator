import calculator from './functional.js'

describe('Logic', () => {
   beforeEach(() => {
      calculator.expression = []
      global.alert = jest.fn()
   })
   test('setValue', () => {
      calculator.setValue(1)()
      expect(calculator.expression).toEqual([
         {
            icon: '',
            operation: 'number',
            values: ['1'],
         },
      ])
      calculator.setValue(1)()
      expect(calculator.expression).toEqual([
         {
            icon: '',
            operation: 'number',
            values: ['11'],
         },
      ])
   })
   test('clear', () => {
      calculator.clear()

      expect(calculator.expression).toEqual([])
   })
   test('plus', () => {
      calculator.sum()
      expect(calculator.expression).toEqual([])
      calculator.setValue(1)()
      calculator.sum()
      expect(calculator.expression).toEqual([
         {
            icon: '',
            operation: 'number',
            values: ['1'],
         },
         {
            icon: '+',
            operation: 'plus',
            values: [],
         },
      ])
      calculator.sum()
      expect(calculator.expression).toEqual([
         {
            icon: '',
            operation: 'number',
            values: ['1'],
         },
         {
            icon: '+',
            operation: 'plus',
            values: [],
         },
      ])
      calculator.setValue(1)()
      calculator.sum()
      expect(calculator.expression).toEqual([
         {
            icon: '',
            operation: 'number',
            values: ['2'],
         },
         {
            icon: '+',
            operation: 'plus',
            values: [],
         },
      ])
   })
   test('minus', () => {
      calculator.minus()
      expect(calculator.expression).toEqual([{ icon: '-', operation: 'minus', values: [] }])
      calculator.setValue(1)()
      calculator.minus()
      expect(calculator.expression).toEqual([
         {
            icon: '',
            operation: 'number',
            values: ['-1'],
         },
         {
            icon: '-',
            operation: 'minus',
            values: [],
         },
      ])
      calculator.setValue(1)()
      calculator.minus()
      expect(calculator.expression).toEqual([
         {
            icon: '',
            operation: 'number',
            values: ['-2'],
         },
         {
            icon: '-',
            operation: 'minus',
            values: [],
         },
      ])
      calculator.minus()
      expect(calculator.expression).toEqual([
         {
            icon: '',
            operation: 'number',
            values: ['-2'],
         },
         {
            icon: '-',
            operation: 'minus',
            values: [],
         },
      ])
   })
   test('change_sign', () => {
      calculator.change_sign()
      expect(calculator.expression).toEqual([])
      calculator.setValue(1)()
      calculator.change_sign()
      expect(calculator.expression).toEqual([
         {
            icon: '',
            operation: 'number',
            values: ['-1'],
         },
      ])
      calculator.change_sign()
      expect(calculator.expression).toEqual([
         {
            icon: '',
            operation: 'number',
            values: ['1'],
         },
      ])
   })
   test('percent', () => {
      calculator.percent()
      expect(calculator.expression).toEqual([])
      calculator.setValue(10)()
      calculator.percent()
      expect(calculator.expression).toEqual([
         {
            icon: '',
            operation: 'number',
            values: ['10'],
         },
         {
            icon: '%',
            operation: 'percent',
            values: [],
         },
      ])
      calculator.percent()
      expect(calculator.expression).toEqual([
         {
            icon: '',
            operation: 'number',
            values: ['10'],
         },
         {
            icon: '%',
            operation: 'percent',
            values: [],
         },
      ])

      calculator.setValue(6)()
      calculator.percent()
      expect(calculator.expression).toEqual([
         {
            icon: '',
            operation: 'number',
            values: ['0.6'],
         },
         {
            icon: '%',
            operation: 'percent',
            values: [],
         },
      ])
   })
   test('division', () => {
      calculator.division()
      expect(calculator.expression).toEqual([])
      calculator.setValue(10)()
      calculator.division()
      expect(calculator.expression).toEqual([
         {
            icon: '',
            operation: 'number',
            values: ['10'],
         },
         {
            icon: '/',
            operation: 'divide',
            values: [],
         },
      ])
      calculator.division()
      expect(calculator.expression).toEqual([
         {
            icon: '',
            operation: 'number',
            values: ['10'],
         },
         {
            icon: '/',
            operation: 'divide',
            values: [],
         },
      ])

      calculator.setValue(5)()
      calculator.division()
      expect(calculator.expression).toEqual([
         {
            icon: '',
            operation: 'number',
            values: ['2'],
         },
         {
            icon: '/',
            operation: 'divide',
            values: [],
         },
      ])
   })
   test('multiply', () => {
      calculator.multiply()
      expect(calculator.expression).toEqual([])
      calculator.setValue(10)()
      calculator.multiply()
      expect(calculator.expression).toEqual([
         {
            icon: '',
            operation: 'number',
            values: ['10'],
         },
         {
            icon: '*',
            operation: 'multiply',
            values: [],
         },
      ])
      calculator.multiply()
      expect(calculator.expression).toEqual([
         {
            icon: '',
            operation: 'number',
            values: ['10'],
         },
         {
            icon: '*',
            operation: 'multiply',
            values: [],
         },
      ])

      calculator.setValue(5)()
      calculator.multiply()
      expect(calculator.expression).toEqual([
         {
            icon: '',
            operation: 'number',
            values: ['50'],
         },
         {
            icon: '*',
            operation: 'multiply',
            values: [],
         },
      ])
   })
   test('dot', () => {
      calculator.dot()
      expect(calculator.expression).toEqual([])
      calculator.setValue(10)()
      calculator.dot()
      expect(calculator.expression).toEqual([
         {
            icon: '',
            operation: 'number',
            values: ['10.'],
         },
      ])
      calculator.dot()
      expect(calculator.expression).toEqual([
         {
            icon: '',
            operation: 'number',
            values: ['10.'],
         },
      ])

      calculator.setValue(5)()
      calculator.dot()
      expect(calculator.expression).toEqual([
         {
            icon: '',
            operation: 'number',
            values: ['10.5'],
         },
      ])
   })
   test('factorial', () => {
      calculator.factorial()
      expect(calculator.expression).toEqual([])
      calculator.setValue(10)()
      calculator.factorial()
      expect(calculator.expression).toEqual([
         {
            icon: '!',
            operation: 'factorial',
            values: ['10'],
         },
      ])

      calculator.setValue(5)()

      expect(calculator.expression).toEqual([
         {
            icon: '!',
            operation: 'factorial',
            values: ['10'],
         },
      ])
   })
   test('degree', () => {
      calculator.degree(2)()
      expect(calculator.expression).toEqual([
         { icon: '', change: false, twoValue: true, operation: 'degree', values: ['2'] },
      ])
      calculator.setValue(2)()
      expect(calculator.expression).toEqual([
         { icon: '', change: false, twoValue: true, operation: 'degree', values: ['2', '2'] },
      ])
      calculator.equal()
      expect(calculator.expression).toEqual([{ icon: '', operation: 'number', values: ['4'] }])
      calculator.degree(2)()
      expect(calculator.expression).toEqual([
         { icon: '', change: false, twoValue: true, operation: 'degree', values: ['2', '4'] },
      ])
   })
   test('sqrt', () => {
      calculator.sqrt(2)()
      expect(calculator.expression).toEqual([
         { icon: '', change: false, twoValue: true, operation: 'sqrt', values: ['2'] },
      ])
      calculator.setValue(16)()
      expect(calculator.expression).toEqual([
         { icon: '', change: false, twoValue: true, operation: 'sqrt', values: ['2', '16'] },
      ])
      calculator.equal()
      expect(calculator.expression).toEqual([{ icon: '', operation: 'number', values: ['4'] }])
      calculator.sqrt(2)()
      expect(calculator.expression).toEqual([
         { icon: '', change: false, twoValue: true, operation: 'sqrt', values: ['2', '4'] },
      ])
   })
   test('MC', () => {
      calculator.MC()
      expect(calculator.memory).toBe('')
   })
   test('MR', () => {
      calculator.memory = 17
      calculator.MR()
      expect(calculator.expression).toEqual([
         {
            icon: '',
            operation: 'number',
            values: ['17'],
         },
      ])
      calculator.memory = 1
      calculator.MR()

      expect(calculator.expression).toEqual([
         {
            icon: '',
            operation: 'number',
            values: ['1'],
         },
      ])
      calculator.sum()
      expect(calculator.expression).toEqual([
         {
            icon: '',
            operation: 'number',
            values: ['1'],
         },
         {
            icon: '+',
            operation: 'plus',
            values: [],
         },
      ])
      calculator.MR()
      expect(calculator.expression).toEqual([
         {
            icon: '',
            operation: 'number',
            values: ['1'],
         },
         {
            icon: '+',
            operation: 'plus',
            values: [],
         },
         {
            icon: '',
            operation: 'number',
            values: ['1'],
         },
      ])
   })
   test('M_PLUS', () => {
      calculator.expression = [
         {
            icon: '',
            operation: 'number',
            values: ['3'],
         },
      ]
      calculator.memory = 17

      calculator.M_PLUS()
      expect(calculator.memory).toBe(20)
   })
   test('M_MINUS', () => {
      calculator.expression = [
         {
            icon: '',
            operation: 'number',
            values: ['3'],
         },
      ]
      calculator.memory = 17

      calculator.M_MINUS()
      expect(calculator.memory).toBe(14)
   })
   test('ten_x', () => {
      calculator.ten_x()
      expect(calculator.expression).toEqual([
         { icon: '', change: true, twoValue: true, operation: 'degree', values: [null, '10'] },
      ])
      calculator.ten_x()
      expect(calculator.expression).toEqual([
         { icon: '', change: true, twoValue: true, operation: 'degree', values: [null, '10'] },
      ])
      calculator.setValue(1)()
      expect(calculator.expression).toEqual([
         { icon: '', change: true, twoValue: true, operation: 'degree', values: ['1', '10'] },
      ])
      calculator.equal()
      expect(calculator.expression).toEqual([{ icon: '', operation: 'number', values: ['10'] }])
   })
   test('_1_x', () => {
      calculator._1_x()
      expect(calculator.expression).toEqual([])
      calculator.setValue(4)()
      calculator._1_x()

      expect(calculator.expression).toEqual([
         {
            icon: '',
            operation: 'number',
            values: ['0.25'],
         },
      ])
      calculator._1_x()

      expect(calculator.expression).toEqual([
         {
            icon: '',
            operation: 'number',
            values: ['4'],
         },
      ])
      calculator.setValue(10)()
      expect(calculator.expression).toEqual([
         {
            icon: '',
            operation: 'number',
            values: ['10'],
         },
      ])
   })
})
