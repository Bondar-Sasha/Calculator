import schemeData from '../data/colorScheme/colorScheme.js'
import initColors from '../data/colorScheme/initColors.js'
import getElById from '../utils/getElById.js'

const container = getElById('color_scheme')

schemeData.forEach((item, index) => {
   const scheme = document.createElement('div')
   scheme.setAttribute('index', index)
   scheme.setAttribute('class', 'colors_container')

   const preperedColors = {
      '--fond': item.fond,
      '--screenFond': item.screen.fond,
      '--screenColor': item.screen.data,
      '--buttonsFond': item.buttons.fond,
      '--buttonsColor': item.buttons.data,
   }

   scheme.addEventListener('click', () => {
      initColors(preperedColors)
   })

   for (let i = 1; i <= 3; i++) {
      const color = document.createElement('div')

      if (i === 1) color.style.backgroundColor = item.fond
      if (i === 2) color.style.backgroundColor = item.screen.fond
      if (i === 3) color.style.backgroundColor = item.buttons.fond

      color.setAttribute('class', `colors_container_child_${i}`)
      scheme.append(color)
   }
   container.append(scheme)
})
