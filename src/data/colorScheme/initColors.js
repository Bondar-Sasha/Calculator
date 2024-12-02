export default data => {
   const root = document.documentElement
   Object.entries(data).forEach(item => {
      root.style.setProperty(item[0], item[1])
   })
}
