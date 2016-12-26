<template>
  <div>
    <div class="trailer--large">
      <div class="text-size--36 trailer--section title__color text--telenor-light">Atom Loading</div>
    </div>
    <div class="doc-compontent-box" id="loaderSpinner">
      <div class="sg-component">
        <div class="leader--large trailer">
          <h3 class="doc-text-size--24">loader spinner</h3>
        </div>
        <div class="sg-component__status">
          <p class="mobile-one-half mobile-pull-right mobile-text-right">
            <a class="pull-right" href="http://10.19.18.95:48888/examples/loading-demo/index.html" target="_blank">View Demo</a>
          </p>
        </div>
        <div class="sg-component__markup sg-component__markup--no-padding">
          <div class="demo_content">
            <div class="text-center trailer">
              <div class="loader">
                <div class="loader__spinner"><i></i></div>
              </div>
            </div>

            <div class="loader-test border box--white">
              <div class="loader loader--centered">
                <div class="loader__spinner"><i></i></div>
              </div>
            </div>

            <div class="loader-test border box--yellow">
              <div class="loader loader--centered">
                <div class="loader__spinner"><i></i></div>
              </div>
            </div>

            <div class="loader-test border box--blue">
              <div class="loader loader--light loader--centered">
                <div class="loader__spinner"><i></i></div>
              </div>
            </div>






          </div>
        </div>
      </div>
    </div>
    <div class="doc-compontent-box" id="lightboxSpinner">
      <div class="sg-component">
        <div class="leader--large trailer">
          <h3 class="doc-text-size--24">lightbox spinner</h3>
        </div>
        <div class="sg-component__status">
        </div>
        <div class="sg-component__markup sg-component__markup--no-padding">
          <div class="block">
            <div class="demo_content">
              <div class="lightbox-spinner-test">
                <div class="lightbox-spinner"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="doc-compontent-box" id="spinner">
      <div class="sg-component">
        <div class="leader--large trailer">
          <h3 class="doc-text-size--24">spinner</h3>
        </div>
        <div class="sg-component__status">
        </div>
        <div class="sg-component__markup sg-component__markup--no-padding">
          <div class="block">
            <div class="demo_content">
              <div class="grid-row">
                <div class="col-md-6">
                  <div class="load-tester">
                                <span class="spinner">
                                </span>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="load-tester load-large">
                                <span class="spinner">
                                </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="doc-compontent-box" id="buttonSpinner">
      <div class="sg-component">
        <div class="leader--large trailer">
          <h3 class="doc-text-size--24">button spinner</h3>
        </div>
        <div class="sg-component__status">
        </div>
        <div class="sg-component__markup sg-component__markup--no-padding">
          <div class="block">
            <div class="demo_content">
              <button type="button" class="button button--accept" data-component="button" data-alias="addToBasket" data-loading="true">
                <span class="button__label icon-arrow-next">Læg i kurv</span>
                <span class="button__label--success icon icon--left icon-thumb-up">Læg i kurv</span>
                <span class="button__spinner"><span class="spinner-holder"><span class="spinner-container"><em><span></span></em></span></span></span>
              </button>
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
