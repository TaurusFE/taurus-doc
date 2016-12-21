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
import loading from '../markdown/loading'
// --------------------------------------------------
import color from '../element/color'
import typography from '../element/typography'

// -----------------------------------------------
import eshop from '../pages/telenor/catalog/eshop.vue'
import agentView from '../pages/telenor/catalog/av.vue'
import cm from '../pages/telenor/catalog/cm.vue'
import rm from '../pages/telenor/catalog/rm.vue'

let taurus = {
  'component': {
    switcher,
    table,
    'cookie-helper': cookieHelper,
    pager,
    'scroll-to': scrollTo,
    'box-group': boxGroup,
    autoComplete,
    loading,
    'range-slider': rangeSlider,
    'am-charts-bars': amChartsBars,
    'am-charts-doughnut': amChartsDoughnut,
    'am-charts-gauge': amChartsGauge,
    'am-charts-line': amChartsLine
  },
  'element': {
    color,
    typography
  },
  'case': {
    eshop,
    agentView,
    cm,
    rm
  }
}
export {
  taurus
}
