/**
 * Created by y1205 on 2016/12/15.
 */
import amChartsBars from '../markdown/desktop/am-charts-bars'
import amChartsDoughnut from '../markdown/desktop/am-charts-doughnut'
import amChartsGauge from '../markdown/desktop/am-charts-gauge'
import amChartsLine from '../markdown/desktop/am-charts-line'
import switcher from '../markdown/desktop/switcher'
import table from '../markdown/desktop/table'
import simpleTable from '../markdown/desktop/simple-table'
import cookieHelper from '../markdown/desktop/cookie-helper'
import pager from '../markdown/desktop/pager'
import scrollTo from '../markdown/desktop/scroll-to'
import boxGroup from '../markdown/desktop/box-group'
import autoComplete from '../markdown/desktop/autoComplete'
import rangeSlider from '../markdown/desktop/range-slider'
import datePicker from '../markdown/desktop/date-picker'
import numberStepper from '../markdown/desktop/number-stepper'
import searchFilter from '../markdown/desktop/search-filter'
import select from '../markdown/desktop/select'
import loading from '../markdown/desktop/loading'
import modal from '../markdown/desktop/modal'
import statusMessage from '../markdown/desktop/status-message'
import tooltip from '../markdown/desktop/tooltip'
import speechBubble from '../markdown/desktop/speech-bubble'
import dropdown from '../markdown/desktop/dropdown'
import tab from '../markdown/desktop/tab'
import breadcrumbs from '../markdown/desktop/breadcrumbs'
import color from '../element/color'
import typography from '../element/typography'
import typesetting from '../element/typesetting'
import layouts from '../element/layouts'
import iconImages from '../element/icons-images'
import lists from '../element/lists'
import input from '../element/input-element'
import controls from '../element/controls'
import buttons from '../element/buttons'
import atomsLoading from '../element/loading'
import typeHeadings from '../element/molecule-headers'
import structure from '../element/molecule-structure'
import feedbackMessages from '../element/molecule-feedback'
import shop from '../element/molecule-shop'
import products from '../element/molecule-products'
import tables from '../element/molecule-tables'
import tabsWidgets from '../element/molecule-tabs'
import modalBox from '../element/molecule-modal'
import upload from '../element/molecule-upload'
import step from '../element/molecule-step'
import charts from '../element/organisms-charts'
import selfare from '../element/organisms-selfcare'
import globalModules from '../element/organisms-global'
import menu from '../element/organisms-menu'
import dataTable from '../element/organisms-data-table'
import formExamples from '../element/page-form'
import principle from '../pages/design/principle.vue'
import workflow from '../pages/design/workflow.vue'
import sitemap from '../pages/telenor/content.vue'
import download from '../pages/assets/download.vue'
import js from '../pages/assets/js.md'
import css from '../pages/assets/css.vue'

import agentView from '../pages/telenor/catalog/av.vue'
import cm from '../pages/telenor/catalog/cm.vue'
import rm from '../pages/telenor/catalog/rm.vue'
import eshop from '../pages/telenor/catalog/eshop.vue'

import developGuide from '../pages/guide/develop-guide.md'
import developFAQ from '../pages/faq/develop-faq.md'
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
    'modal-box': modal,
    tooltip,
    tab,
    breadcrumbs,
    'drop-down': dropdown,
    'speech-bubble': speechBubble,
    'status-message': statusMessage,
    'range-slider': rangeSlider,
    'am-charts-bars': amChartsBars,
    'am-charts-doughnut': amChartsDoughnut,
    'am-charts-gauge': amChartsGauge,
    'am-charts-line': amChartsLine,
    'date-picker': datePicker,
    'number-stepper': numberStepper,
    'search-filter': searchFilter,
    'simple-table': simpleTable,
    select
  },
  'design': {
    principle,
    workflow
  },
  'case': {
    sitemap,
    deliveryPage,
    svnAddress,
    eshop,
    agentView,
    cm,
    rm
  },
  'assets': {
    download,
    js,
    css
  },
  'element': {
    color,
    typography,
    typesetting,
    layouts,
    iconImages,
    lists,
    input,
    controls,
    buttons,
    atomsLoading,
    typeHeadings,
    structure,
    feedbackMessages,
    shop,
    products,
    tables,
    tabsWidgets,
    modalBox,
    upload,
    step,
    charts,
    selfare,
    globalModules,
    menu,
    dataTable,
    formExamples

  },
  'guide': {
    developGuide
  },
  'faqs': {
    developFAQ
  }
}
let mobile = {
  'component': {
    switcher,
    table,
    'cookie-helper': cookieHelper,
    pager,
    'scroll-to': scrollTo,
    'box-group': boxGroup,
    autoComplete,
    loading,
    'modal-box': modal,
    tooltip,
    tab,
    breadcrumbs,
    'drop-down': dropdown,
    'speech-bubble': speechBubble,
    'status-message': statusMessage,
    'range-slider': rangeSlider,
    'am-charts-bars': amChartsBars,
    'am-charts-doughnut': amChartsDoughnut,
    'am-charts-gauge': amChartsGauge,
    'am-charts-line': amChartsLine,
    'date-picker': datePicker,
    'number-stepper': numberStepper,
    'search-filter': searchFilter,
    'simple-table': simpleTable,
    select
  },
  'design': {
    principle,
    workflow
  },
  'case': {
    sitemap,
    deliveryPage,
    svnAddress,
    eshop,
    agentView,
    cm,
    rm
  },
  'assets': {
    download,
    js,
    css
  },
  'element': {
    color,
    typography,
    typesetting,
    layouts,
    iconImages,
    lists,
    input,
    controls,
    buttons,
    atomsLoading,
    typeHeadings,
    structure,
    feedbackMessages,
    shop,
    products,
    tables,
    tabsWidgets,
    modalBox,
    upload,
    step,
    charts,
    selfare,
    globalModules,
    menu,
    dataTable,
    formExamples

  },
  'guide': {
    developGuide
  },
  'faqs': {
    developFAQ
  }
}
export default {
  'desktop': taurus,
  'mobile': mobile
}
