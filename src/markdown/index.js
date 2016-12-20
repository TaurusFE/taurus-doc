/**
 * Created by y1205 on 2016/12/15.
 */
import switcher from './switcher'
import radio from './radio'
import table from './table'
import cookieHelper from './cookie-helper'
import pager from './pager'
import scrollTo from './scroll-to'
import boxGroup from './box-group'
import autoComplete from './autoComplete'
import rangeSlider from './range-slider'
let taurus = {
  switcher,
  radio,
  table,
  'cookie-helper': cookieHelper,
  pager,
  'scroll-to': scrollTo
  'box-group': boxGroup,
  autoComplete,
  'range-slider': rangeSlider
}
export {
  taurus
}
