/**
 * Created by y1205 on 2016/12/20.
 */
/**
 * Created by y1205 on 2016/12/15.
 */
import switcher from '../markdown/switcher'
import table from '../markdown/table'
import cookieHelper from '../markdown/cookie-helper'
import pager from '../markdown/pager'
import scrollTo from '../markdown/scroll-to'
import boxGroup from '../markdown/box-group'
import autoComplete from '../markdown/autoComplete'
import rangeSlider from '../markdown/range-slider'
// --------------------------------------------------

import color from '../element/color'

// -----------------------------------------------
import eshop from '../pages/telenor/catalog/eshop.vue'
let taurus = {
  'component': {
    switcher,
    table,
    'cookie-helper': cookieHelper,
    pager,
    'scroll-to': scrollTo,
    'box-group': boxGroup,
    autoComplete,
    'range-slider': rangeSlider
  },
  'element': {
    color
  },
  'case': {
    eshop
  }
}
export {
  taurus
}
