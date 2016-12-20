<template>
  <div>
    <!-- Page header -->
    <div class="block__header trailer--large">
      <h2 class="title--medium">Colours</h2>
    </div>
    <!-- SG Components -->
    <div id="sgComponentWrapper">
      <div id="lines-and-fills" class="doc-compontent-box">
        <div class="sg-content container grid-row">
          <div class="col-md-4">
            <h2 class="title--medium-small">Border Color</h2>
          </div>
          <div class="col-md-8">
            <div class="sg-component__status">
            </div>
            <div class="sg-content__markup">
              <div class="sg-lines-and-fills">
                <div class="sg-component__label">border--bottom, #d1d1d1</div>
                <div class="border--bottom"></div>
                <div class="sg-component__label">border--bottom border--light, #e8e8e8</div>
                <div class="border--bottom border--light"></div>
                <div class="sg-component__label">border--bottom border--negative,#fff 30%</div>
                <div class="sg-lines-and-fills__colors-bg grid-row grid-row--gutter-none">
                  <div class="col-md-2 box--yellow-light"></div>
                  <div class="col-md-2 box--yellow"></div>
                  <div class="col-md-2 box--purple"></div>
                  <div class="col-md-2 box--green"></div>
                  <div class="col-md-2 box--blue"></div>
                  <div class="col-md-2 box--gradient-black"></div>
                </div>
                <div class="sg-lines-and-fills__line-negative border--bottom border--negative"></div>
                <!--<div class="sg-component__label">1 px, #e8e8e8, #ffffff</div>
								<div class="box&#45;&#45;default box&#45;&#45;white"></div>
								<div class="sg-component__label">1 px, #e8e8e8, #f5f5f5</div>
								<div class="box&#45;&#45;default box&#45;&#45;greyed"></div>
								<div class="sg-component__label">1 px, #d1d1d1, #ffffff</div>
								<div class="box&#45;&#45;default-dark-border box&#45;&#45;white"></div>
								<div class="sg-component__label">1 px, #d1d1d1, #f5f5f5</div>
								<div class="box&#45;&#45;default-dark-border"></div>-->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="colours-and-backgrounds" class="doc-compontent-box">
        <div class="sg-content container grid-row">
          <div class="col-md-4">
            <h2 class="title--medium-small">Background Colour</h2>
          </div>
          <div class="col-md-8">
            <div class="sg-component__status col-md-12">
            </div>
            <div class="sg-content__markup sg-markdown">
              <h2 id="background">Background colour</h2>
              <figure>
                <div class="box--white block">box--white:#fff</div>
                <div class="box--grey block">box--grey:#f5f5f5</div>
                <div class="box--grey-dark block color-white">box--grey-dark:#666</div>
                <div class="box--black-light block color-white">box--black-light:#474747</div>
                <div class="box--blue block">box--blue:#038cd6</div>
                <div class="box--green block">box--green:#43c682</div>
                <div class="box--yellow block">box--yellow:#ffb900</div>
                <div class="box--yellow-light block">box--yellow:#fce173</div>
                <div class="box--purple block color-white">box--purple:#6b2377</div>
                <div class="block"></div>
                <div class="sg-color__variant--background"></div>
              </figure>
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
