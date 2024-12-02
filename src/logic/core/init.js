class Calculator {
   constructor() {
      this.data = []
   }
   getData() {
      throw new Error('The "getData" method must be implemented')
   }

   actions() {
      throw new Error('The "actions" method must be implemented')
   }
}
export default Calculator
