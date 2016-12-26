<template>
  <div>
    <div class="trailer--large">
      <div class="text-size--36 trailer--section title__color text--telenor-light">Modal box</div>
    </div>
    <div id="default-modal" class="doc-compontent-box">
      <div class="sg-component">
        <div class="sg-component__header">
          <h2 class="title--medium-small trailer--small">Default modal</h2>
        </div>
        <div class="sg-component__status">
          <p class="mobile-one-half mobile-pull-right mobile-text-right">
            <a class="pull-right" href="http://10.19.18.95:48888/examples/modal-demo/index.html" target="_blank">View
              Demo</a>
          </p>
        </div>
        <div class="sg-component__markup">
          <div class="block">
            <div class="sg-component__label">Default modal</div>
            <a href="#nogo" id="modal-demo">Click on the modal</a>

            <div class="demo_content">
              <!---------------Default modal----------------------->
              <div id="modal-demo-overlay" class="modal-box__overlay">
                <div class="modal-box__content gradient-line padding-whole--none modal-box--size-small">
                  <div class="modal-box__close-btn icon icon-reject"></div>
                  <div class="padding-whole">modal content</div>
                </div>
              </div>
            </div>
            <!----------------------- modal-end---------------------------->

            <div class="sg-component__label">Action buttons modal</div>
            <a href="#nogo" id="action-modal-demo">Click on the modal</a>

            <div class="demo_content">
              <!---------------Action buttons modal---------------->
              <div id="action-modal-demo-overlay" class="modal-box__overlay">
                <div
                  class="modal-box--with-action-buttons modal-box__content gradient-line padding-whole--none modal-box--size-small">
                  <div class="modal-box__close-btn icon icon-reject"></div>
                  <div class="modal-box__container text--center">
                    <div class="modal-box__icon-box modal-box__icon-box--blue trailer">
                      <span class="icon icon-reject"></span>
                    </div>
                    <div class="text-size--13 leader--large">
                      <p class="text-size--30 text-light trailer">Allerede kunde hos Telenor? </p>

                      <p class="trailer--large">Log ind eller fortsæt som ny kunde. </p>
                    </div>
                    <ul class="modal-box__action-buttons">
                      <li>
                        <form action="">
                          <button class="button button--default">
                            <span class="button-text">Continue as new customer</span>
                          </button>
                        </form>
                      </li>
                      <li>
                        <form action="">
                          <button class="button button--accept">
                            <span class="button__label icon--right icon-arrow-next">Log in and continue</span>
                          </button>
                        </form>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <!------------------- modal-end--------------------------------->
            </div>

            <a href="#nogo" id="action-modal-info">Click on the info modal</a>
            <div class="demo-content">
              <!---------------info modal---------------->
              <div id="action-modal-info-overlay" class="modal-box__overlay">
                <div
                  class="modal-box--with-action-buttons modal-box__content gradient-line padding-whole--none modal-box--size-small">
                  <div class="modal-box__close-btn icon icon-document"></div>
                  <div class="modal-box__container text--center">
                    <div class="modal-box__icon-box modal-box__icon-box--blue trailer">
                      <span class="icon icon-document"></span>
                    </div>
                    <div class="text-size--13 leader--large">
                      <p class="text-size--30 text-light trailer">Remove Agreement </p>
                      <p class="trailer--small">Are you sure you want to remove the agreement from your cart? </p>
                      <p class="trailer--large">The atreement cleared.</p>
                    </div>
                    <ul class="modal-box__action-buttons">
                      <li>
                        <form action="">
                          <button class="button button--default">
                            <span class="button-text">Cancel</span>
                          </button>
                        </form>
                      </li>
                      <li>
                        <form action="">
                          <button class="button button--action">
                            <span class="button__text">Remote</span>
                          </button>
                        </form>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <!------------------- modal-end--------------------------------->
            <a href="#nogo" id="action-modal-success">Click on the success modal</a>
            <div class="demo-content">
              <!---------------success modal---------------->
              <div id="action-modal-success-overlay" class="modal-box__overlay">
                <div
                  class="modal-box--with-action-buttons modal-box__content gradient-line padding-whole--none modal-box--size-small">
                  <div class="modal-box__close-btn icon icon-check"></div>
                  <div class="modal-box__container text--center">
                    <div class="modal-box__icon-box modal-box__icon-box--blue trailer">
                      <span class="icon icon-check"></span>
                    </div>
                    <div class="text-size--13 leader--large trailer--large">
                      <p class="text-size--30 text-light trailer">Confirm email address:</p>
                      <div class="form-item form-item--small">
                        <input type="text" placeholder="test3339@test.dk">
                      </div>
                    </div>
                    <ul class="modal-box__action-buttons">
                      <li>
                        <form action="">
                          <button class="button button--default">
                            <span class="button-text">Cancel</span>
                          </button>
                        </form>
                      </li>
                      <li>
                        <form action="">
                          <button class="button button--action">
                            <span class="button__text">Remote</span>
                          </button>
                        </form>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!------------------- modal-end--------------------------------->
            <a href="#nogo" id="action-modal-fail">Click on the fail modal</a>
            <div class="demo-content">
              <!---------------fail modal---------------->
              <div id="action-modal-fail-overlay" class="modal-box__overlay">
                <div
                  class="modal-box--with-action-buttons modal-box__content gradient-line padding-whole--none modal-box--size-small">
                  <div class="modal-box__close-btn icon icon-reject"></div>
                  <div class="modal-box__container text--center">
                    <div class="modal-box__icon-box modal-box__icon-box--blue trailer">
                      <span class="icon icon-reject"></span>
                    </div>
                    <div class="text-size--13 leader--large">
                      <p class="text-size--30 text-light trailer">Already a customer of telenor? </p>
                      <p class="trailer--large">log in or continue as new customer.</p>
                    </div>
                    <ul class="modal-box__action-buttons">
                      <li>
                        <form action="">
                          <button class="button button--default">
                            <span class="button-text">Continued as New Customer</span>
                          </button>
                        </form>
                      </li>
                      <li>
                        <form action="">
                          <button class="button button--accept">
                            <span class="button__label icon--right icon-arrow-next">Log In</span>
                          </button>
                        </form>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!------------------- modal-end--------------------------------->
            <a href="#nogo" id="action-modal-question">Click on the question modal</a>
            <div class="demo-content">
              <!---------------question modal---------------->
              <div id="action-modal-question-overlay" class="modal-box__overlay">
                <div
                  class="modal-box--with-action-buttons modal-box__content gradient-line padding-whole--none modal-box--size-large">
                  <div class="modal-box__close-btn icon icon-question"></div>
                  <div class="modal-box__container text--center">
                    <div class="modal-box__icon-box modal-box__icon-box--blue trailer">
                      <span class="icon icon-question"></span>
                    </div>
                    <div class="text-size--13 leader--large">
                      <p class="text-size--30 text-light trailer">Remove family? </p>
                      <p class="trailer--large">Do you want to remove one or more family members or select other family
                        subscriptions?</p>
                    </div>
                    <ul class="modal-box__action-buttons">
                      <li>
                        <form action="">
                          <button class="button button--default">
                            <span class="button-text">No Thanks</span>
                          </button>
                        </form>
                      </li>
                      <li>
                        <form action="">
                          <button class="button button--default">
                            <span class="button-text">Make Changes</span>
                          </button>
                        </form>
                      </li>
                      <li>
                        <form action="">
                          <button class="button button--action">
                            <span class="button-text">Delete all Family Members</span>
                          </button>
                        </form>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!------------------- modal-end--------------------------------->
            <a href="#nogo" id="action-modal-new">Click on the new modal</a>
            <div class="demo-content">
              <!---------------new modal---------------->
              <div id="action-modal-new-overlay" class="modal-box__overlay">
                <div
                  class="modal-box--with-action-buttons modal-box__content gradient-line padding-whole--none modal-box--size-small">
                  <div class="modal-box__close-btn icon icon-document"></div>
                  <div class="modal-box__container">
                    <div class="modal-box__icon-box modal-box__icon-box--blue trailer">
                      <span class="icon icon-document"></span>
                    </div>
                    <div class="text-size--13 text--center leader">
                      <p class="text-size--30 text-light trailer">New Deal </p>
                      <p class="text-size--16 trailer--small">Choose fixation:</p>
                      <div class="mobile-display--block trailer">
                        <ul class="display--inline-block tabgroup tabgroup--small trailer clear">
                          <li class="tabgroup__tab is-active">
                            <a class="tabgroup__link" href="#panel-s-1">24 months</a>
                          </li>
                          <li class="tabgroup__tab">
                            <a class="tabgroup__link" href="#panel-s-2">36 months</a>
                          </li>
                        </ul>
                        <div class="tabpanel__content-wrapper text--left">
                          <section id="panel-s-1" class="tabpanel__panel is-active">
                            <table class="table--small box--white-grey trailer">
                              <thead>
                              <tr>
                                <th>%</th>
                                <th>Subscription</th>
                              </tr>
                              </thead>
                              <tbody>
                              <tr>
                                <td>10%</td>
                                <td>1-9 Subscription</td>
                              </tr>
                              <tr>
                                <td>15%</td>
                                <td>10-19 Subscription</td>
                              </tr>
                              <tr>
                                <td>25%</td>
                                <td>20-49 Subscription</td>
                              </tr>
                              <tr>
                                <td>35%</td>
                                <td>50+ Subscription</td>
                              </tr>
                              </tbody>
                            </table>
                          </section>
                          <section id="panel-s-2" class="tabpanel__panel">
                            <div class="sg-component__label">Tab content 2
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                          </section>
                        </div>
                      </div>
                    </div>
                    <ul class="modal-box__action-buttons">
                      <li>
                        <form action="">
                          <button class="button button--default">
                            <span class="button-text">Cancel</span>
                          </button>
                        </form>
                      </li>
                      <li>
                        <form action="">
                          <button class="button button--action">
                            <span class="button-text">Remote</span>
                          </button>
                        </form>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!------------------- modal-end--------------------------------->

          </div>
        </div>
      </div>
    </div>


    <div class="doc-compontent-box" id="special-modal">
      <div class="sg-component">
        <div class="sg-component__header">
          <h2 class="title--medium-small trailer--small">Special-modal</h2>
        </div>
        <div class="sg-component__status">
          <p class="mobile-one-half mobile-pull-right mobile-text-right">
                    <span class="status-dot status-dot--green pull-right">Approved <a
                      href="/v/0.7.0/#component-Checkboxes">(0.7.0)</a>
                    </span>
          </p>
        </div>
        <div class="sg-component__markup">
          <div class="sg-component__label">pre-lightbox modal</div>
          <div>
            <a href="#nogo" id="pre-lightbox-address-trigger">Click on the form modal</a>
            <a href="#nogo" id="pre-lightbox-system-error-trigger" class="block">Click on the system error modal</a>
          </div>
          <div class="sg-component__label">form modal</div>
          <div>
            <a href="#nogo" id="form-modal-trigger">Click on the address modal</a>
          </div>
          <div class="sg-component__label">full modal</div>
          <div>
            <a href="#nogo" id="full-button-trigger">Click on the full-button modal</a>
            <a href="#nogo" id="full-header-trigger" class="block">Click on the full-header modal</a>
            <a href="#nogo" id="full-header-back-trigger" class="block">Click on the
              full-header-back</a>

          </div>
          <div class="demo_content">
            <!-------------------address pre-lightbox modal------------------------------------------>
            <div id="pre-lightbox-address" class="modal-box__overlay">
              <div class="modal-box__content padding-whole--xlarge pre-lightbox section--negative text--center">
                <div class="modal-box__close-btn icon-reject"></div>

                <span class="trailer--small color-white text-size--13">Enter your address to complete</span>

                <h2 class="trailer--small color-white text-size--44 text-light">Test how fast broadband we can
                  deliver to your address</h2>

                <form>
                  <div class="clear text--left trailer--large">
                    <div class="grid-row--gutter-none grid-row-md--bottom form-item--multi-paddings">
                      <div class="col-md-6 mobile-trailer">
                        <div class="form-item form-item--required">
                          <label>Address</label>

                          <div class="rel">
                            <input type="text">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 mobile-trailer">
                        <div class="grid-row--gutter-none grid-row-xs--bottom">
                          <div class="col-xs-3">
                            <div class="form-item form-item--required">
                              <label>Husnr.</label>

                              <div class="rel">
                                <input type="text">
                              </div>
                            </div>
                          </div>
                          <div class="col-xs-3">
                            <div class="form-item">
                              <label>Letter</label>

                              <div class="rel">
                                <input type="text">
                              </div>
                            </div>
                          </div>
                          <div class="col-xs-3">
                            <div class="form-item">
                              <label>Floor</label>

                              <div class="rel">
                                <input type="text">
                              </div>
                            </div>
                          </div>
                          <div class="col-xs-3">
                            <div class="form-item">
                              <label>Side</label>

                              <div class="rel">
                                <input type="text">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="grid-row--gutter-none grid-row-md--bottom form-item--multi-paddings">
                      <div class="col-md-6 mobile-trailer">
                        <div class="grid-row--gutter-none grid-row-xs--bottom">
                          <div class="col-xs-3">
                            <div class="form-item form-item--required">
                              <label>Zip code</label>

                              <div class="rel">
                                <input type="text">
                              </div>
                            </div>
                          </div>
                          <div class="col-xs-9" style="
    /* padding-left: 20px; */
">
                            <div class="form-item form-item--required">
                              <label>City</label>

                              <div class="rel">
                                <input type="text">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 mobile-trailer">
                        <div class="grid-row--gutter-none grid-row-md--bottom">
                          <div class="col-md-6">
                            <div class="form-item form-item--required">
                              <label>County</label>

                              <div class="rel">
                                <input type="text">
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6 mobile-leader--large button-holder">
                            <button data-component="button" data-alias="testConnection"
                                    class="button button--accept stretch-mobile toleft mobile-toleft--none"
                                    tabindex="12">
                              <span class="button__label icon--right icon-arrow-next"><span
                                class="button__text">Test</span></span>
                              <span class="button__spinner"><span
                                class="button__spinner-container"><i></i></span></span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <!-------------------/address pre-lightbox modal------------------------------------------>

            <!-------------------system error  modal------------------------------------------>
            <div id="pre-lightbox-system-error" class="modal-box__overlay modal-box--error">
              <div class="modal-box__content modal-box--size-large">
                <div class="modal-box__close-btn icon-reject"></div>
                <div class="icon-telenor text-size--72 leader--large trailer--large">
                </div>
                <p class="text-size--30 text-light trailer--small">An error occured </p>
                <p>Were you logged in, you may need to log back in with your username and password.</p>
                <p>Were you about to complete a purchase or update information, they will not be saved.</p>
                <p class="trailer--large">We regret the error. </p>
              </div>
            </div>
            <!-------------------/system error pre-lightbox modal------------------------------------------>

            <!-------------------form modal------------------------------------------>
            <div id="form-modal" class="modal-box__overlay">
              <div class="modal-box__content modal-box--size-large">
                <div class="modal-box__close-btn icon-reject"></div>
                <form>
                  <div class="border box--greyed padding-whole leader trailer">
                    <div class="form-item form-item--required">
                      <label>Label</label>

                      <div class="rel leader--xsmall">
                        <input type="text">
                      </div>
                    </div>
                    <div class="form-item form-item--required">
                      <label>Email</label>

                      <div class="rel leader--xsmall">
                        <input type="text">
                      </div>
                    </div>
                    <div class="form-item">
                      <div class="form-checkbox form-checkbox--small">
                        <input type="checkbox" checked="" name="cbs-small-0" id="cbs-small-0"
                               value="--some-value--">
                        <label class="text--small" for="cbs-inline-0">Yes, Telenor may contact me via
                          email about the selected telephone.</label>
                      </div>
                    </div>
                  </div>
                  <div class="form-item text--right">
                    <button type="submit" class="button button--action" name="subscribe" data-submit="true"
                            data-component="button">
                      <span class="button__label padding-toleft padding-toright">Send</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <!------------------- full-button modal------------------------------------------>
            <div id="full-button" class="modal-box__overlay">
              <div class="modal-box__content modal-box--size-large modal-box__content--full">
                <div class="modal-box__close-btn icon-reject"></div>
                <header class="padding-leader--large padding-trailer--large padding-toleft--xxlarge padding-toright--xxlarge
		mobile-padding-whole--xlarge ">
                  <h2 class="text-size--24 text-light mobile-text--center">Produktnummeret står på din sidste regning -
                    og på Mit Telenor</h2>
                </header>

                <div class="padding-whole">
                  填充弹出框内容
                </div>
                <div class="grid-row--gutter-none mobile-padding-whole--xlarge text--center">
                  <div class="col-md-6">
                    <a href="#"
                       class="display--block button-right button button--default text-size--21 mobile-text-size--16 text-light"
                       style="padding:20px;border-radius: 0;border:0;height:auto;">Afbryd</a>
                  </div>
                  <div class="col-md-6">
                    <a href="#"
                       class="display--block button-right button button--action text-size--21 mobile-text-size--16 text-light"
                       style="padding:20px;border-radius: 0;border:0;height:auto;">
                      Log på Mit Telenor</a>
                  </div>
                </div>
              </div>
            </div>
            <!-------------------/full-button modal------------------------------------------>

            <!-------------------full-header modal------------------------------------------>
            <div id="full-header" class="modal-box__overlay">
              <div class="modal-box__content modal-box--size-large modal-box__content--full">
                <header class="padding-whole--large padding-toright--huge box--greyed rel border--bottom">
                  <h1 class="text-size--28 mobile-text-size--21 trailer-xsmall">
                    Choose mobile for family 2
                  </h1>
                  <h3 class="text-size--19 mobile-text-size--13 color-gray">Your family discount 50, - / month is added
                    when you
                    select mobile or subscription</h3>
                  <div class="modal-box__close-btn icon-reject"></div>
                </header>
                <div class="padding-whole">
                  填充弹出框内容
                </div>
              </div>
            </div>
            <!-------------------/full-header modal------------------------------------------>

            <!-------------------full-header-back modal------------------------------------------>
            <div id="full-header-back" class="modal-box__overlay">
              <div class="modal-box__content modal-box__content--full">
                <header class="padding-whole--large padding-toright--huge box--greyed border--bottom rel">
                  <div class="border--right display--inline-block align--middle padding-toright">
                    <a href="#" class="button color-black-light">
                                    <span class="button__label icon--left icon-arrow-prev">
                                        <span class="button__text">Tilbage</span>
                                    </span>
                    </a>
                  </div>
                  <div class="display--inline-block align--middle">
                    <h1 class="text-size--28 mobile-text-size--21 toleft trailer--xsmall">Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit.</h1>
                    <h3 class="text-size--19 mobile-text-size--13 color-gray toleft">Lorem ipsum dolor sit amet,
                      consectetur.</h3>
                  </div>
                  <div class="modal-box__close-btn icon-reject"></div>
                </header>
                <div class="padding-whole">
                  填充弹出框内容
                </div>
              </div>
            </div>
            <!-------------------/full-header-back modal------------------------------------------>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    mounted () {
      $('#modal-demo').click(function (e) {
        e.stopPropagation()
        if (!$('#modal-demo-overlay').hasClass('modal-box--is-open')) {
          $('#modal-demo-overlay').addClass('modal-box--is-open')
        }
      })
      $('#modal-detail').click(function (e) {
        e.stopPropagation()
        if (!$('#modal-detail-overlay').hasClass('modal-box--is-open')) {
          $('#modal-detail-overlay').addClass('modal-box--is-open')
        }
      })
      $('#action-modal-demo').click(function (e) {
        e.stopPropagation()
        if (!$('#action-modal-demo-overlay').hasClass('modal-box--is-open')) {
          $('#action-modal-demo-overlay').addClass('modal-box--is-open')
        }
      })
      $('#action-modal-info').click(function (e) {
        e.stopPropagation()
        if (!$('#action-modal-info-overlay').hasClass('modal-box--is-open')) {
          $('#action-modal-info-overlay').addClass('modal-box--is-open')
        }
      })
      $('#action-modal-success').click(function (e) {
        e.stopPropagation()
        if (!$('#action-modal-success-overlay').hasClass('modal-box--is-open')) {
          $('#action-modal-success-overlay').addClass('modal-box--is-open')
        }
      })
      $('#action-modal-fail').click(function (e) {
        e.stopPropagation()
        if (!$('#action-modal-fail-overlay').hasClass('modal-box--is-open')) {
          $('#action-modal-fail-overlay').addClass('modal-box--is-open')
        }
      })
      $('#action-modal-question').click(function (e) {
        e.stopPropagation()
        if (!$('#action-modal-question-overlay').hasClass('modal-box--is-open')) {
          $('#action-modal-question-overlay').addClass('modal-box--is-open')
        }
      })
      $('#action-modal-new').click(function (e) {
        e.stopPropagation()
        if (!$('#action-modal-new-overlay').hasClass('modal-box--is-open')) {
          $('#action-modal-new-overlay').addClass('modal-box--is-open')
        }
      })
      $('#pre-lightbox-address-trigger').click(function (e) {
        e.stopPropagation()
        if (!$('#pre-lightbox-address').hasClass('modal-box--is-open')) {
          $('#pre-lightbox-address').addClass('modal-box--is-open')
        }
      })
      $('#pre-lightbox-system-error-trigger').click(function (e) {
        e.stopPropagation()
        if (!$('#pre-lightbox-system-error').hasClass('modal-box--is-open')) {
          $('#pre-lightbox-system-error').addClass('modal-box--is-open')
        }
      })
      $('#form-modal-trigger').click(function (e) {
        e.stopPropagation()
        if (!$('#form-modal').hasClass('modal-box--is-open')) {
          $('#form-modal').addClass('modal-box--is-open')
        }
      })
      $('#full-button-trigger').click(function (e) {
        e.stopPropagation()
        if (!$('#full-button').hasClass('modal-box--is-open')) {
          $('#full-button').addClass('modal-box--is-open')
        }
      })
      $('#full-header-trigger').click(function (e) {
        e.stopPropagation()
        if (!$('#full-header').hasClass('modal-box--is-open')) {
          $('#full-header').addClass('modal-box--is-open')
        }
      })
      $('#full-header-back-trigger').click(function (e) {
        e.stopPropagation()
        if (!$('#full-header-back').hasClass('modal-box--is-open')) {
          $('#full-header-back').addClass('modal-box--is-open')
        }
      })
      $('.modal-box__content').click(function (e) {
        e.stopPropagation()
      })
      $('.modal-box__close-btn').click(function () {
        $('.modal-box__overlay').removeClass('modal-box--is-open')
      })
      $(document).click(function () {
        if ($('.modal-box__overlay').hasClass('modal-box--is-open')) {
          $('.modal-box__overlay').removeClass('modal-box--is-open')
        }
      })
    }
  }
</script>
