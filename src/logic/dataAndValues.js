import getElById from '../utils/getElById'
import calculator from './core/actions'

const { setValue, clear, change_sign, minus, percent, multiply, sum, dot, equal, division } = calculator.actions()

export const interactiveButtons = {
   value_0: { el: getElById('value_0'), handler: setValue, value: '0' },
   value_1: { el: getElById('value_1'), handler: setValue, value: '1' },
   value_2: { el: getElById('value_2'), handler: setValue, value: '2' },
   value_3: { el: getElById('value_3'), handler: setValue, value: '3' },
   value_4: { el: getElById('value_4'), handler: setValue, value: '4' },
   value_5: { el: getElById('value_5'), handler: setValue, value: '5' },
   value_6: { el: getElById('value_6'), handler: setValue, value: '6' },
   value_7: { el: getElById('value_7'), handler: setValue, value: '7' },
   value_8: { el: getElById('value_8'), handler: setValue, value: '8' },
   value_9: { el: getElById('value_9'), handler: setValue, value: '9' },
   clear: { el: getElById('clear'), handler: clear },
   change_sign: { el: getElById('change_sign'), handler: change_sign },
   percent: { el: getElById('percent'), handler: percent },
   division: { el: getElById('division'), handler: division },
   multiply: { el: getElById('multiply'), handler: multiply },
   minus: { el: getElById('minus'), handler: minus },
   sum: { el: getElById('sum'), handler: sum },
   dot: { el: getElById('dot'), handler: dot },
   equal: { el: getElById('equal'), handler: equal },
}
