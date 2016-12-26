<script>
import {TSelect, TRangeSlider} from 'ai-taurus-desktop';
export default {
  components: {
    TSelect,
    TRangeSlider
  },
  data () {
    return  {
      rangeOptions: {
      isDrag: true,
      rangeLabel: 'Months',
      min: 0,
      max: 6,
      step: 1,
      start: 0,
      end: 3
    },
    singleSlideOptions: {
      rangeLabel: 'Months',
      type: 'single',
      min: 0,
      max: 6,
      step: 1,
      start: 0,
      end: 3
    },
    selectSlideOptions: {
      isDrag: true,
      type: 'select',
      rangeLabel: 'MB',
      min: 100,
      max: 600,
      start: 100,
      end: 300
    },
    options: [],
    defaultVal: ''
    }
  },
  methods: {
    setRangeSlideStart: function (value) {
      this.rangeOptions.start = value;
    },
    setRangeSlideEnd: function (value) {
      this.rangeOptions.end = value;
    },
    setSingleRangeSlideEnd: function (value) {
      this.singleSlideOptions.end = value;
    }
  },
  mounted: function () { // 放一些初始化的动作
    this.$nextTick(function () {
      var _min = this.rangeOptions.min;
      var _max = this.rangeOptions.max;
      var _step = this.rangeOptions.step;
      for (var i = _min; i <= _max; i += _step) {
        var obj = {
          value: i,
          label: i + ' Month'
        };
        this.options.push(obj);
      }
      this.defaultVal = _min;
    });
  }
}
</script>
## Range Slider
用于拖拽滑块选择范围

### Double Select
:::demo 要使用双选择的滑块拖动，需要传递一个option给`range-options`,默认是双选择的滑块拖动。
```html
<template>
  <t-range-slider :range-options="rangeOptions"></t-range-slider>
  <article style="margin-top: 20px;margin-bottom:20px">
      <label>Range:</label>
      <span>{{rangeOptions.start}}-{{rangeOptions.end}}</span>
  </article>
  <article>
    <span>
      <label>start</label>
        <t-select :options="options" default-val="0"  
                  v-on:on-change="setRangeSlideStart"
                  style="width:150px;display: inline-block">
        </t-select>
    </span>
    <span style="margin-left:20px">
      <label>end</label>
      <t-select :options="options" default-val="0"  
                v-on:on-change="setRangeSlideEnd"
                style="width:150px;display: inline-block">
      </t-select>
    </span>
  </article>
</template>
<script>
import {TSelect, TRangeSlider} from 'ai-taurus-desktop';
export default {
  components: {
    TSelect,
    TRangeSlider
  },
  data () {
    return  {
      rangeOptions: {
      isDrag: false,
      rangeLabel: 'Months',
      min: 0,
      max: 6,
      step: 1,
      start: 0,
      end: 3
    }
    options: [],
    defaultVal: ''
    }
  },
  methods: {
    setRangeSlideStart: function (value) {
      this.rangeOptions.start = value;
    },
    setRangeSlideEnd: function (value) {
      this.rangeOptions.end = value;
    },
    setSingleRangeSlideEnd: function (value) {
      this.singleSlideOptions.end = value;
    }
  }
</script>
```
:::
### Single Select
:::demo
```html
<template>
  <t-range-slider :range-options="singleSlideOptions"></t-range-slider>
    <article style="margin-top: 20px;margin-bottom: 20px">
      <label>Range:</label>
      <span>{{singleSlideOptions.start}}-{{singleSlideOptions.end}}</span>
    </article>
    <article>
      <span style="margin-left:20px">
        <label>end</label>
        <t-select :options="options" default-val="0"  v-on:on-change="setSingleRangeSlideEnd" style="width:150px;display: inline-block"></t-select>
        </span>
    </article>
</template>
```
:::
### Select slider
::: demo
```html
```
