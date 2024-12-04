import factorial from '../../utils/factorial.js'

const utils = {
   number: arr => Number(arr[0]),
   degree: arr => Number(arr[1]) ** Number(arr[0]),
   sqrt: arr => Number(arr[1]) ** (1 / Number(arr[0])),
   factorial: arr => factorial(Number(arr[0])),

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
         default:
            return null
      }
   },
}

export default function count(expression) {
   try {
      let result = null
      if (expression.length === 2) {
         result = utils[expression[1].operation](expression[1].values)
         if (!result) throw new Error('')
         return result
      }
      const first = utils[expression[1].operation](expression[1].values)
      let second = utils[expression[3].operation](expression[3].values)
      result = utils.count(first, expression[2].operation, second)
      if (!result) throw new Error('')
      return result
   } catch (error) {
      return 'error'
   }
}
