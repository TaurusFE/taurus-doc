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
import sitemap from '../pages/telenor/content.vue'
import eshop from '../pages/telenor/catalog/eshop.vue'
import agentView from '../pages/telenor/catalog/av.vue'
import cm from '../pages/telenor/catalog/cm.vue'
import rm from '../pages/telenor/catalog/rm.vue'
// ---------------------------------------------
import principle from '../pages/design/principle.vue'
import workflow from '../pages/design/workflow.vue'

// ----------------------------------------------
import download from '../pages/assets/download.vue'
import js from '../pages/assets/js.md'
import css from '../pages/assets/css.vue'
let deliveryPage = sitemap
let svnAddress = sitemap

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
  'design': {
    principle,
    workflow
  },
  'assets': {
    download,
    js,
    css
  },
  'element': {
    color,
    typography
  },
  'case': {
    sitemap,
    deliveryPage,
    svnAddress,
    eshop,
    agentView,
    cm,
    rm
  }
}
export {
  taurus
}
