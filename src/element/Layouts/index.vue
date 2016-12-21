<template>
  <div>
    <div class="block__header leader--large trailer--large">
      <h2 class="title--medium">Layouts</h2>
    </div>
    <div class="container">
      <div class="doc-compontent-box">
        <!-- checkbox-component-start-->
        <div class="sg-component">
          <div class="sg-component__header">
            <h2 class="title--medium-small trailer--small">flex-layouts</h2>
          </div>
          <div class="sg-component__status">
          </div>
          <div class="sg-component__markup">
            <div class="block">
              <div class="sg-component__label">flex-layouts</div>
              <!-- component-->
              <div class="demo-bg trailer">
                <div class="grid-row grid-row--gutter-none">
                  <div class="col-md-12">col-sm-12</div>
                  <div class="col-md-6">col-sm-6</div>
                  <div class="col-md-6">col-sm-6</div>
                  <div class="col-md-3">col-md-3</div>
                  <div class="col-md-auto">col-md-auto</div>
                  <div class="col-md-3">col-md-3</div>
                  <div class="col-md-3">col-md-3</div>
                  <div class="col-md-3 col-md-offset-4">col-md-3 col-md-offset-4</div>
                </div>
              </div>
              <div class="sg-component__label">grid-row-md--middle  grid-row-md--center </div>
              <div class="demo-bg trailer" >
                <div  class="grid-row grid-row--gutter-none grid-row-md--center grid-row-md--middle" style="
    min-height: 200px;">
                  <div class="col-md-8">col-md-8,center,middle</div>
                </div>
              </div>
              <div class="sg-component__label">col-*-offset</div>
              <div class="demo-bg trailer" >
                <div  class="grid-row grid-row--gutter-none">
                  <div class="col-md-6 col-md-offset-1">col-md-6 col-md-offset-1</div>
                  <div class="col-md-6 col-md-offset-2">col-md-6 col-md-offset-2</div>
                  <div class="col-md-6 col-md-offset-3">col-md-6 col-md-offset-3</div>
                  <div class="col-md-6 col-md-offset-4">col-md-6 col-md-offset-4</div>
                </div>
              </div>
              <div class="sg-component__label">grid-row-md--left</div>
              <div class="demo-bg trailer" >
                <div  class="grid-row grid-row--gutter-none grid-row-md--left">
                  <div class="col-md-3">col-md-3</div>
                  <div class="col-md-3">col-md-3</div>
                </div>
              </div>
              <div class="sg-component__label">grid-row-md--right</div>
              <div class="demo-bg trailer" >
                <div  class="grid-row grid-row--gutter-none grid-row-md--right">
                  <div class="col-md-3">col-md-3</div>
                  <div class="col-md-3">col-md-3</div>
                </div>
              </div>
              <div class="sg-component__label">grid-row-md--top</div>
              <div class="demo-bg trailer" >
                <div  class="grid-row grid-row--gutter-none grid-row-md--top" style="height:80px">
                  <div class="col-md-3">col-md-3</div>
                  <div class="col-md-3">col-md-3</div>
                </div>
              </div>
              <div class="sg-component__label">grid-row-md--bottom</div>
              <div class="demo-bg trailer" >
                <div  class="grid-row grid-row--gutter-none grid-row-md--bottom" style="height:80px">
                  <div class="col-md-3">col-md-3</div>
                  <div class="col-md-3">col-md-3</div>
                </div>
              </div>
              <div class="sg-component__label">grid-row-md--top and grid-row-md--bottom</div>
              <div class="demo-bg trailer">
                <div  class="grid-row grid-row--gutter-none grid-row-md--top" style="height:140px">
                  <div class="col-md-3 grid-row-md--top">col-md-3</div>
                  <div class="col-md-3 grid-row-md--bottom">col-md-3</div>
                  <div class="col-md-3 grid-row-md--bottom">col-md-3</div>
                </div>
              </div>
              <div class="sg-component__label">grid-row-md--between</div>
              <div class="demo-bg trailer">
                <div  class="grid-row grid-row--gutter-none grid-row-md--between">
                  <div class="col-md-2">grid-row-md--between</div>
                  <div class="col-md-2">grid-row-md--between</div>
                  <div class="col-md-2">grid-row-md--between</div>
                  <div class="col-md-2">grid-row-md--between</div>
                </div>
              </div>
              <div class="sg-component__label">grid-row-md--around</div>
              <div class="demo-bg trailer">
                <div  class="grid-row grid-row--gutter-none grid-row-md--around">
                  <div class="col-md-2">grid-row-md--between</div>
                  <div class="col-md-2">grid-row-md--between</div>
                  <div class="col-md-2">grid-row-md--between</div>
                  <div class="col-md-2">grid-row-md--between</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- document code-->
      </div>
      <!-- checkbox-component-end-->
      <div class="doc-compontent-box">
        <div class="sg-component__header">
          <h2 class="title--medium-small trailer--small">Example</h2>
        </div>
        <div class="sg-component__status">
        </div>
        <div class="sg-component__markup">
          <div class="block">
            <div class="sg-component__label">Multiple columns of the same height</div>
            <!-- component-->
            <div class="demo-bg trailer">
              <div class="grid-row grid-row--gutter-none">
                <div class="col-md-3" style="height:260px;">sidebar</div>
                <div class="col-md-9">main</div>
              </div>
            </div>
            <div class="sg-component__label">Responsive layout</div>
            <!-- component-->
            <div class="demo-bg trailer">
              <div class="grid-row grid-row--gutter-none">
                <div class="col-md-12">header</div>
                <div class="col-md-3" style="height:260px;">sidebar</div>
                <div class="col-md-9">main</div>
                <div class="col-md-12">footer</div>
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
