import schemeData from '../data/colorScheme/colorScheme.js'
import initColors from '../data/colorScheme/initColors.js'
import getElById from '../utils/getElById.js'

const container = getElById('color_scheme')

schemeData.forEach(item => {
   const scheme = document.createElement('div')
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
   scheme.style.borderTopColor = item.fond
   scheme.style.borderRightColor = item.screen.fond
   scheme.style.borderLeftColor = item.buttons.fond

   container.append(scheme)
})
