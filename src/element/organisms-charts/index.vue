<template>
  <div>
    <div class="trailer--large">
      <div class="text-size--36 trailer--section title__color text--telenor-light">Chart</div>
    </div>
    <div id="chart" class="doc-compontent-box">
      <div class="sg-component">
        <div class="sg-component__header">
          <h2 class="title--medium-small trailer--small">Chart</h2>
        </div>
        <div class="sg-component__status">
          <p class="mobile-one-half mobile-pull-right mobile-text-right">
                    <span class="pull-right"> <a href="http://10.19.18.95:48888/examples/amcharts-demo/index.html" target="_blank">View Demo</a>
                    </span>
          </p>
        </div>
        <div class="sg-component__markup">
          <div class="block">
            <div class="sg-component__label"></div>
            <div class="demo_content">
              <div class="amchart amchart-bars" data-module="amchart-bars" data-units="kr" data-guide="" data-key="barChartData1">
                <div class="amchart-bars-legends">
                  <div class="amchart-bars-legend">
                    <div class="amchart-bullet amchart-color-green"></div>Paid</div>
                  <div class="amchart-bars-legend">
                    <div class="amchart-bullet amchart-color-yellow"></div>Due</div>
                  <div class="amchart-bars-legend">
                    <div class="amchart-bullet amchart-color-red"></div>Overdue</div>
                </div>
                <div class="amchart-bars-chart">
                  <img src="/static/img/chart.png" alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
