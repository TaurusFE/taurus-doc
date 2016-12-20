/**
 * Created by y1205 on 2016/12/15.
 */
import switcher from './switcher'
import radio from './radio'
import table from './table'
import cookieHelper from './cookie-helper'
import pager from './pager'
import scrollTo from './scroll-to'
let taurus = {
  switcher,
  radio,
  table,
  'cookie-helper': cookieHelper,
  pager,
  'scroll-to': scrollTo
}
export {
  taurus
}
