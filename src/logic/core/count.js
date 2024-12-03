export default function evaluateExpression(tokens) {
   function applyOperator(operators, values) {
      const operator = operators.pop()
      const right = values.pop()
      const left = values.pop()

      switch (operator) {
         case '+':
            values.push(left + right)
            break
         case '-':
            values.push(left - right)
            break
         case '*':
            values.push(left * right)
            break
         case '/':
            if (right === 0) {
               throw new Error('Division by zero')
            }
            values.push(left / right)
            break
         case '%':
            values.push((left * right) / 100)
            break
         default:
            throw new Error('Unknown operator')
      }
   }

   function precedence(op) {
      if (op === '+' || op === '-') return 1
      if (op === '*' || op === '/' || op === '%') return 2
      return 0
   }

   try {
      if (!Array.isArray(tokens) || tokens.length === 0) {
         throw new Error('Invalid expression')
      }

      const operators = []
      const values = []

      for (const token of tokens) {
         if (!isNaN(token)) {
            values.push(parseFloat(token))
         } else if (['+', '-', '*', '/', '%'].includes(token)) {
            while (operators.length && precedence(operators[operators.length - 1]) >= precedence(token)) {
               applyOperator(operators, values)
            }
            operators.push(token)
         } else {
            throw new Error('Invalid input')
         }
      }

      while (operators.length) {
         applyOperator(operators, values)
      }

      const result = values.length ? values[0] : null
      return result !== null && !isNaN(result) ? result.toString() : 'error'
   } catch (error) {
      return 'error'
   }
}
