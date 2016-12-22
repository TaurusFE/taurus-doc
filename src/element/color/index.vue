<template>
  <div>
    <!-- Page header -->
    <div class="trailer--large">
      <div class="text-size--36 trailer--section title__color text--telenor-light">Colors</div>
    </div>
    <!-- SG Components -->
    <div id="sgComponentWrapper">
      <div id="lines-and-fills" class="doc-compontent-box">
        <div class="leader--large trailer">
          <h3 class="doc-text-size--24">Border Color</h3>
        </div>
        <div class="sg-content container grid-row">
          <div class="col-md-12 padding-whole--none">
            <div class="sg-content__markup">
              <div class="sg-lines-and-fills">
                <div class="sg-component__label leader--none">border--bottom, #d1d1d1</div>
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
                  <div class="col-md-2 box--grey-dark"></div>
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
        <div class="leader--large trailer">
          <h3 class="doc-text-size--24">Background Colour</h3>
        </div>
        <div class="sg-content container grid-row">
          <div class="col-md-12">
            <div class="sg-content__markup sg-markdown">
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
