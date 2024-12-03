const tools = {
   currentValueNumber: data => {
      const el = data[data.length - 1]
      return typeof el === 'number'
   },
   dataLength_1: data => data.length === 1,
   isMemory: value => !!value,
   priority: () => true,
}

const validation = (data, validationData) => {
   let result = true
   Object.entries(validationData).forEach(([key, expectedValue]) => {
      const actualValue = tools[key](data)
      if (actualValue !== expectedValue) {
         result = false
      }
   })
   return result
}

export default validation
