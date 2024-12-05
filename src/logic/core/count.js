import factorial from '../../utils/factorial.js'
import lastEl from '../../utils/lastEl.js'

const utils = {
   number: arr => Number(arr[0]),
   degree: arr => Number(arr[1]) ** Number(arr[0]),
   sqrt: arr => Number(arr[1]) ** (1 / Number(arr[0])),
   factorial: n => factorial(Number(n)),

   count: (first, operation, second) => {
      switch (operation) {
         case 'plus':
            return first + second
         case 'minus':
            return first - second
         case 'multiply':
            return first * second
         case 'divide':
            return first / second
         case 'percent':
            return second / first
         default:
            return null
      }
   },
}

export default function count(expression) {
   try {
      const copy = JSON.parse(JSON.stringify(expression))
      const copyLastEl = lastEl(copy)
      if (copyLastEl.operation === 'factorial') {
         return utils.factorial(copy[0].values[0])
      }
      if (copy.length === 1 && copyLastEl.operation === 'number') {
         const res = utils[lastEl(copy).operation](lastEl(copy).values)
         if (isNaN(res)) throw new Error('')
         return res
      }
      if (copy.length === 1 && ['sqrt', 'degree'].includes(copyLastEl.operation)) {
         if (copyLastEl.values.length !== 2) throw new Error('')
         return utils[lastEl(copy).operation](lastEl(copy).values)
      }
      let result = null
      result = utils.count(
         utils[copy[0].operation](copy[0].values),
         copy[1].operation,
         utils[copy[2].operation](copy[2].values),
      )
      if ([null, Infinity].includes(result)) throw new Error('Result is null')
      return result.toString()
   } catch (error) {
      return 'error'
   }
}
