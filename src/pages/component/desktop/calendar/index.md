<script>
import {TCalendar} from 'ai-taurus-desktop';

var demoEvents = [
  {
    title: 'Sunny Out of Office',
    start: '2016-08-25',
    end: '2017-07-27',
    cssClass: 'danger',
    YOUR_DATA: {test: '22222'}
  }
];

export default {
  data () {
    return {
      fcEvents: demoEvents
    };
  },
  components: {
    TCalendar
  }
};
</script>
<style>
  .comp-full-calendar {
    padding: 20px;
    background: #fff;
    max-width: 960px;
    margin: 0 auto;
  }
  .comp-full-calendar ul, .comp-full-calendar p {
    margin: 0;
    padding: 0;
    font-size: 14px;
  }
  .full-calendar-body {
      margin-top: 20px;
    }
    .full-calendar-body .weeks {
      display: flex;
      border-top: 1px solid #e0e0e0;
      border-bottom: 1px solid #e0e0e0;
      border-left: 1px solid #e0e0e0;
    }
    .full-calendar-body .weeks .week {
      flex: 1;
      text-align: center;
      border-right: 1px solid #e0e0e0;
    }
    .full-calendar-body .dates {
      position: relative;
    }
    .full-calendar-body .dates .week-row {
      border-left: 1px solid #e0e0e0;
      display: flex;
    }
    .full-calendar-body .dates .week-row .day-cell {
      flex: 1;
      min-height: 100px;
      padding: 4px;
      border-right: 1px solid #e0e0e0;
      border-bottom: 1px solid #e0e0e0;
    }
    .full-calendar-body .dates .week-row .day-cell .day-number {
      text-align: right;
    }
    .full-calendar-body .dates .week-row .day-cell.today {
      background-color: #fcf8e3;
    }
    .full-calendar-body .dates .week-row .day-cell.not-cur-month .day-number {
      color: rgba(0, 0, 0, 0.24);
    }
    .full-calendar-body .dates .dates-events {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      width: 100%;
    }
    .full-calendar-body .dates .dates-events .events-week {
      display: flex;
    }
    .full-calendar-body .dates .dates-events .events-week .events-day {
      cursor: pointer;
      flex: 1;
      min-height: 109px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .full-calendar-body .dates .dates-events .events-week .events-day .day-number {
      text-align: right;
      padding: 4px 5px 4px 4px;
      opacity: 0;
    }
    .full-calendar-body .dates .dates-events .events-week .events-day.not-cur-month .day-number {
      color: rgba(0, 0, 0, 0.24);
    }
    .full-calendar-body .dates .dates-events .events-week .events-day .event-box .event-item {
      cursor: pointer;
      font-size: 12px;
      background-color: #C7E6FD;
      margin-bottom: 2px;
      color: rgba(0, 0, 0, 0.87);
      padding: 0 0 0 4px;
      height: 18px;
      line-height: 18px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .full-calendar-body .dates .dates-events .events-week .events-day .event-box .event-item.is-start {
      margin-left: 4px;
    }
    .full-calendar-body .dates .dates-events .events-week .events-day .event-box .event-item.is-end {
      margin-right: 4px;
    }
    .full-calendar-body .dates .dates-events .events-week .events-day .event-box .event-item.is-opacity {
      opacity: 0;
    }
    .full-calendar-body .dates .dates-events .events-week .events-day .event-box .more-link {
      cursor: pointer;
      padding-left: 8px;
      padding-right: 2px;
      color: rgba(0, 0, 0, 0.38);
      font-size: 14px;
    }
    .full-calendar-body .dates .more-events {
      position: absolute;
      width: 150px;
      z-index: 2;
      border: 1px solid #eee;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    }
    .full-calendar-body .dates .more-events .more-header {
      background-color: #eee;
      padding: 5px;
      display: flex;
      align-items: center;
      font-size: 14px;
    }
    .full-calendar-body .dates .more-events .more-header .title {
      flex: 1;
    }
    .full-calendar-body .dates .more-events .more-header .close {
      margin-right: 2px;
      cursor: pointer;
      font-size: 16px;
    }
    .full-calendar-body .dates .more-events .more-body {
      height: 140px;
      overflow: hidden;
    }
    .full-calendar-body .dates .more-events .more-body .body-list {
      height: 120px;
      padding: 5px;
      overflow: auto;
      background-color: #fff;
    }
    .full-calendar-body .dates .more-events .more-body .body-list .body-item {
      cursor: pointer;
      font-size: 12px;
      background-color: #C7E6FD;
      margin-bottom: 2px;
      color: rgba(0, 0, 0, 0.87);
      padding: 0 0 0 4px;
      height: 18px;
      line-height: 18px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .full-calendar-header {
      display: flex;
      align-items: center;
    }
    .full-calendar-header .header-left, .full-calendar-header .header-right {
        flex: 1;
    }
    .full-calendar-header .header-center {
        flex: 3;
        text-align: center;
    }
    .full-calendar-header .header-center .title {
          margin: 0 10px;
    }
    .full-calendar-header .header-center .prev-month, .full-calendar-header .header-center .next-month {
          cursor: pointer;
    }
</style>

## TCalendar组件

日历组件。

### 多选框

:::demo

```html
<t-calendar :events="fcEvents" lang="en"></t-calendar>

<script>
import {TCalendar} from 'ai-taurus-desktop';

var demoEvents = [
  {
    title: 'Sunny Out of Office',
    start: '2016-08-25',
    end: '2017-07-27',
    cssClass: 'danger',
    YOUR_DATA: {test: '22222'}
  }
];

export default {
  data () {
    return {
      fcEvents: demoEvents
    };
  },
  components: {
    TCalendar
  }
};
</script>
```
:::

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| events | 日历事件 | Array | -| - |
| firstDay | 每一周开始的星期数 | Number | String | - | 0 |
| titleFormat | 标题的日期格式 | String | - | MMMM yyyy |
| monthNames | 月份的显示名称 | Array | - | ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] |
| weekNames | 星期的显示名称 | Array | - | ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] |

### Events

| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| change-month | 点击上下月份时触发该事件 | start, end, current |
| event-click | 点击日历上事件时触发该事件 | event, jsEvent, pos |
| day-click | 点击单个日期时触发该事件 | day, jsEvent |
| more-click | 点击more链接时触发该事件 | - |

### slots

| 方法名称 | 说明 | 方法参数 |
| ------- | ---- | ------- |
| tc-header-left | 标题栏左边区域 | - |
| tc-header-right | 标题栏右边区域 | - |
| tc-body-card | body区域，一般用于EventClick出发事件时展示 | - |
