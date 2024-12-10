import lastEl from '../../../utils/lastEl.js'

const tools = {
   currentOperation: (data, values) => {
      let result = false
      values.forEach(value => {
         if (lastEl(data).operation === value) {
            result = true
         }
      })

      return result
   },
   currentOperationNot: (data, values) => {
      let result = true
      values.forEach(value => {
         if (lastEl(data).operation === value) {
            result = false
         }
      })

      return result
   },
}

const validation = (data, validationData) => {
   let result = true
   const prepered = data.length === 0 ? [{ operation: 'null' }] : data
   Object.entries(validationData).forEach(([key, values]) => {
      result = tools[key](prepered, values)
   })
   return result
}

export default validation
