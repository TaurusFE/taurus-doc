<script>
import {TSelect, TRangeSlider} from 'ai-taurus-desktop';
export default {
    components: {
      TRangeSlider,
      TSelect
    },
    data: function () {
        return {
          singleSlide: {
            type: 'single',
            rangeLabel: 'Number',
            min: 0,
            max: 100,
            start: 0,
            end: 5,
            step: 1,
            options: []
          },
          singleDisabledSlide: {
            type: 'single',
            rangeLabel: 'Number',
            step: 1,
            min: 0,
            max: 100,
            start: 0,
            end: 50,
            disabled: true
          },
          singleDiscreteSlide: {
            type: 'single',
            rangeLabel: 'Number',
            min: 0,
            step: 1,
            max: 100,
            step: 10,
            start: 0,
            end: 5
          },
          singleDiscreteSlide2: {
            type: 'single',
            min: 0,
            max: 100,
            step: 10,
            end: 10,
            start: 0,
            showStops: true
          },
          rangeSlideOptions: {
            type: 'range',
            rangeLabel: 'Number',
            min: 0,
            max: 100,
            step: 1,
            start: 0,
            end: 20
          },
          rangeSlideDisabledOptions: {
            type: 'range',
            rangeLabel: 'Number',
            min: 0,
            max: 100,
            step: 1,
            start: 0,
            end: 20,
            disabled: true
          },
          rangeSlideDiscreteOptions: {
            type: 'range',
            rangeLabel: 'Number',
            min: 0,
            max: 100,
            step: 10,
            start: 0,
            end: 20
          },
          rangeSlideDiscreteOptions2: {
            type: 'range',
            rangeLabel: 'Number',
            min: 0,
            max: 100,
            step: 10,
            start: 0,
            end: 40,
            showStops: true
          }
        };
    },
    methods: {
      getOptions: function (rangeOptions) {
        let _min = rangeOptions['min'] || 0;
        let _max = rangeOptions['max'] || 0;
        let _step = rangeOptions['step'] || 1;
        for (let i = _min; i <= _max; i += _step) {
          let obj = {
            name: i + '',
            text: i + ' ' + rangeOptions['rangeLabel']
          };
          rangeOptions['options'].push(obj);
        }
      }
    },
    created () {
      this.getOptions(this.singleSlide);
    }
}
</script>
## Range Slider
用于拖拽滑块选择一个固定范围

### 默认
:::demo 要使用滑块拖动，需要传递一个option给`range-options`,默认是单向选择的拖动滑块。通过设置绑定值option.end自定义滑块的初始值
```html
<template>
  <div class="sg-component">
      <div class="sg-component__status"></div>
      <!--range slider 组件-->
      <div id="single-slider-wrap" class="sg-component__markup" style="overflow: visible;">
        <t-range-slider :range-options="singleSlide"></t-range-slider>
        <div style="margin-top: 20px">
          <label>
            <label>值: </label>
            <span> <t-select  :options="singleSlide.options"  size="small" v-model="singleSlide.end"
                             style="width:150px;display: inline-block"></t-select></span>
          </label>
        </div>
      </div>
      <!--range slider-->
    </div>
</template>
<script>
import {TSelect, TRangeSlider} from 'aii-taurus';
export default {
  components: {
    TSelect,
    TRangeSlider
  },
  data () {
    return  {
      singleSlide: {
        rangeLabel: 'Number',
        min: 0,
        max: 100,
        end: 0,
        options: []
      }
  },
  methods: {
    getOptions: function (rangeOptions) {
      let _min = rangeOptions['min'] || 0;
      let _max = rangeOptions['max'] || 0;
      let _step = rangeOptions['step'] || 1;
      for (let i = _min; i <= _max; i += _step) {
        let obj = {
          value: i + '',
          label: i + ' ' + rangeOptions['rangeLabel']
        };
        rangeOptions['options'].push(obj);
      }
    }
  },
  created () {
    this.getOptions(this.singleSlide);
  }
 }
</script>
```
:::
### 禁用
:::demo
```html
<template>
  <div class="sg-component">
      <div class="sg-component__status"></div>
      <!--range slider 组件-->
      <div id="single-slider-disabled-wrap" class="sg-component__markup">
        <t-range-slider :range-options="singleDisabledSlide"></t-range-slider>
      </div>
      <!--range slider-->
  </div>
</template>
<script>
import {TSelect, TRangeSlider} from 'aii-taurus';
export default {
  components: {
    TSelect,
    TRangeSlider
  },
  data () {
    return  {
      singleDisabledSlide: {
            rangeLabel: 'Number',
            min: 0,
            max: 100,
            end: 50,
            disabled: true
      }
  }
 }
</script>
```
:::
### 离散值: 默认不显示间断点
:::demo 设置option.step改变step的值可以改变步长
```html
<template>
   <div class="sg-component">
      <div class="sg-component__status"></div>
      <!--range slider 组件-->
      <div id="single-slider-discrete-wrap" class="sg-component__markup">
        <t-range-slider :range-options="singleDiscreteSlide"></t-range-slider>
      </div>
      <!--range slider-->
    </div>
</template>
<script>
import {TSelect, TRangeSlider} from 'aii-taurus';
export default {
  components: {
    TSelect,
    TRangeSlider
  },
  data () {
    return  {
       singleDiscreteSlide: {
        rangeLabel: 'Number',
        min: 0,
        max: 100,
        step: 10,
        end: 0
      }
  }
 }
</script>
```
:::

### 离散值: 显示间断点
:::demo 设置option.showStops为true可以显示间断点
```html
<template>
   <div class="sg-component">
       <div class="sg-component__status"></div>
       <!--range slider 组件-->
       <div class="sg-component__markup">
         <t-range-slider :range-options="singleDiscreteSlide2"></t-range-slider>
       </div>
       <!--range slider-->
    </div>
</template>
<script>
import {TSelect, TRangeSlider} from 'aii-taurus';
export default {
  components: {
    TSelect,
    TRangeSlider
  },
  data () {
    return  {
       singleDiscreteSlide2: {
         rangeLabel: 'Number',
         min: 0,
         max: 100,
         step: 10,
         end: 0,
         showStops: true
       }
  }
 }
</script>
```
:::

### 默认范围滑块
:::demo 设置option.type为range可以使用双向范围滑块条
```html
<template>
   <div class="sg-component">
      <div class="sg-component__status"></div>
      <!--range slider 组件-->
      <div class="sg-component__markup">
        <t-range-slider :range-options="rangeSlideOptions" ></t-range-slider>
        <div style="margin-top: 20px">
          <label>
            <label>起始值: </label>
            <span> <t-select  :options="singleSlide.options"  size="small" v-model="rangeSlideOptions.start"
                              style="width:150px;display: inline-block"></t-select></span>
          </label>
          <label>
            <label>结束值: </label>
            <span> <t-select  :options="singleSlide.options"  size="small" v-model="rangeSlideOptions.end"
                              style="width:150px;display: inline-block"></t-select></span>
          </label>
        </div>
      </div>
      <!--range slider-->
    </div>
</template>
<script>
import {TSelect, TRangeSlider} from 'aii-taurus';
export default {
  components: {
    TSelect,
    TRangeSlider
  },
  data () {
    return  {
        rangeSlideOptions: {
          type: 'range',
          rangeLabel: 'Number',
          min: 0,
          max: 100,
          step: 1,
          start: 0,
          end: 20,
          options: []
        }
    }
  },
  methods: {
    getOptions: function (rangeOptions) {
      let _min = rangeOptions['min'] || 0;
      let _max = rangeOptions['max'] || 0;
      let _step = rangeOptions['step'] || 1;
      for (let i = _min; i <= _max; i += _step) {
        let obj = {
          value: i + '',
          label: i + ' ' + rangeOptions['rangeLabel']
        };
        rangeOptions['options'].push(obj);
      }
    }
  },
  created () {
    this.getOptions(this.rangeSlideOptions);
  }
 }
</script>
```
:::

### 禁用范围滑块
:::demo
```html
<template>
  <div class="sg-component">
      <div class="sg-component__status"></div>
      <!--range slider 组件-->
      <div class="sg-component__markup">
        <t-range-slider :range-options="rangeSlideDisabledOptions" ></t-range-slider>
      </div>
      <!--range slider-->
   </div>
</template>
<script>
import {TSelect, TRangeSlider} from 'aii-taurus';
export default {
  components: {
    TSelect,
    TRangeSlider
  },
  data () {
    return  {
       rangeSlideDisabledOptions: {
         type: 'range',
         rangeLabel: 'Number',
         min: 0,
         max: 100,
         step: 1,
         start: 0,
         end: 20,
         disabled: true
       }
    }
  }

 }
</script>
```
:::

### 范围滑块带离散值: 不显示间断点
:::demo 设置option.type为range可以使用双向范围滑块条，默认不显示间断点
```html
<template>
   <div class="sg-component">
      <div class="sg-component__status"></div>
      <!--range slider 组件-->
      <div class="sg-component__markup">
        <t-range-slider :range-options="rangeSlideDiscreteOptions" ></t-range-slider>
      </div>
      <!--range slider-->
    </div>
</template>
<script>
import {TSelect, TRangeSlider} from 'aii-taurus';
export default {
  components: {
    TSelect,
    TRangeSlider
  },
  data () {
    return  {
       rangeSlideDiscreteOptions: {
         type: 'range',
         rangeLabel: 'Number',
         min: 0,
         max: 100,
         step: 10,
         start: 0,
         end: 20
       }
    }
  }
 }
</script>
```
:::
### 范围滑块带离散值: 显示间断点
:::demo 设置option.type为range可以使用双向范围滑块条，option.showStops为true可以显示间断点
```html
<template>
   <div class="sg-component">
      <div class="sg-component__status"></div>
      <!--range slider 组件-->
      <div class="sg-component__markup">
        <t-range-slider :range-options="rangeSlideDiscreteOptions2" ></t-range-slider>
      </div>
      <!--range slider-->
    </div>
</template>
<script>
import {TSelect, TRangeSlider} from 'aii-taurus';
export default {
  components: {
    TSelect,
    TRangeSlider
  },
  data () {
    return  {
       rangeSlideDiscreteOptions2: {
         type: 'range',
         rangeLabel: 'Number',
         min: 0,
         max: 100,
         step: 10,
         start: 0,
         end: 40,
         showStops: true
       }
    }
  }
 }
</script>
```
:::

### Props \(参数\)

| 名字 | 类型 | 是否必传 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
| rangeLabel | String| No |  | 数据单位或者数据标签 |
| min | Number | YES  | 0 | 数据范围最小值|
| max | Number | YES | 无 | 数据范围最大值 |
| end | Number | YES | 0 | 数据范围结束值，因为会做数据的绑定，所以这个值必须选 |
| start | Number | YES or NO| 0 | 数据范围开始值，当type为range的时候必须传，因为会做数据的绑定，所以这个值必须选 |
| disabled | Boolean | NO | false | 是否可用 |
| step | Number | NO | 1 | 离散值，设定的步长 |
| showStops | Boolean | NO | false | 是否显示离散值范围条 |
