import factorial from '../../utils/factorial.js'
import formatNumber from '../../utils/formatNumber.js'
import lastEl from '../../utils/lastEl.js'

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
         case 'percent':
            return second / first
         default:
            return null
      }
   },
}
export const checkRes = res => ![null, Infinity, NaN].includes(res)

export default function count(expression) {
   try {
      const copy = JSON.parse(JSON.stringify(expression))
      const copyLastEl = lastEl(copy)

      if (copy.length === 1) {
         if (copyLastEl.operation === 'number') {
            const res = utils[lastEl(copy).operation](lastEl(copy).values)
            if (!checkRes(res)) throw new Error('result is null')
            return formatNumber(res.toString(), 6)
         }
         if (['factorial', 'sqrt', 'degree'].includes(copyLastEl.operation)) {
            if (copyLastEl.values.length !== 2) throw new Error('result is null')
            const res = utils[lastEl(copy).operation](lastEl(copy).values)
            if (!checkRes(res)) throw new Error('result is null')
            return formatNumber(res.toString(), 6)
         }
      }
      let res = null
      res = utils.count(
         utils[copy[0].operation](copy[0].values),
         copy[1].operation,
         utils[copy[2].operation](copy[2].values),
      )
      if (!checkRes(res)) throw new Error('result is null')
      return formatNumber(res.toString(), 6)
   } catch (error) {
      return 'error'
   }
}
