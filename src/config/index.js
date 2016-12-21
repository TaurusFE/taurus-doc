/**
 * Created by y1205 on 2016/12/20.
 */
/**
 * Created by y1205 on 2016/12/15.
 */
import amChartsBars from '../markdown/am-charts-bars'
import amChartsDoughnut from '../markdown/am-charts-doughnut'
import amChartsGauge from '../markdown/am-charts-gauge'
import amChartsLine from '../markdown/am-charts-line'
import switcher from '../markdown/switcher'
import table from '../markdown/table'
import cookieHelper from '../markdown/cookie-helper'
import pager from '../markdown/pager'
import scrollTo from '../markdown/scroll-to'
import boxGroup from '../markdown/box-group'
import autoComplete from '../markdown/autoComplete'
import rangeSlider from '../markdown/range-slider'
import datePicker from '../markdown/date-picker'
import numberStepper from '../markdown/number-stepper'
import searchFilter from '../markdown/search-filter'
import select from '../markdown/select'
import color from '../element/color'
let taurus = {
  'component': {
    switcher,
    table,
    'cookie-helper': cookieHelper,
    pager,
    'scroll-to': scrollTo,
    'box-group': boxGroup,
    autoComplete,
    'range-slider': rangeSlider,
    'am-charts-bars': amChartsBars,
    'am-charts-doughnut': amChartsDoughnut,
    'am-charts-gauge': amChartsGauge,
    'am-charts-line': amChartsLine,
    'date-picker': datePicker,
    'number-stepper': numberStepper,
    'search-filter': searchFilter,
    select
  },
  'element': {
    color
  }
}
export {
  taurus
}
