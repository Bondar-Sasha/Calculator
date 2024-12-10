export default (numStr, decimalPlaces) => {
   let num = parseFloat(numStr)

   if (isNaN(num)) {
      return ''
   }

   let rounded = num.toFixed(decimalPlaces)

   return parseFloat(rounded).toString()
}
