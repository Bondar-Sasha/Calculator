export default {
   plus: { currentOperation: ['number', 'minus', 'sqrt', 'degree', 'factorial'] },
   minus: { currentOperation: ['null', 'number', 'plus', 'sqrt', 'degree', 'factorial'] },
   multiply: { currentOperation: ['number', 'sqrt', 'degree', 'factorial'] },
   divide: { currentOperation: ['number', 'sqrt', 'degree', 'factorial'] },
   _1_x: { currentOperation: ['number'] },
   factorial: { currentOperation: ['number'] },
   degree: { currentOperationNot: ['sqrt', 'degree', 'factorial'] },
   sqrt: { currentOperationNot: ['sqrt', 'degree', 'factorial'] },
   dot: { currentOperation: ['number'] },
   setNumber: { currentOperationNot: ['factorial'] },
   change_sign: { currentOperation: ['number'] },
   percent: { currentOperation: ['number'] },

   cancel: {},
}
// equal: { dataLength_3: true },
// M_MINUS: { dataLength_1: 1, currentOperation: ['number'], isMemory: true },
// M_PLUS: { dataLength_1: 1, currentOperation: ['number'], isMemory: true },
// MC: {},
