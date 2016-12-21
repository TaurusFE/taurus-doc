<template>
  <div>
    <div class="block__header leader--large trailer--large">
      <h2 class="title--medium">Global</h2>
    </div>
    <div class="doc-compontent-box" id="page-title">
      <div class="sg-component">
        <div class="sg-component__header">
          <h2 class="title--medium-small trailer--small">page-title</h2>
        </div>
        <div class="sg-component__status">
        </div>
        <div class="sg-component__markup">
          <div class="demo_content">
            <div class="section section--hero section--negative">
              <div class="container">
                <h1 class="text-size--30 text-light">One stop shopping</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="doc-compontent-box" id="page-title-and-subtitle">
      <div class="sg-component">
        <div class="sg-component__header">
          <h2 class="text-size--30 text-light trailer--small">page-title-and-subtitle</h2>
        </div>
        <div class="sg-component__status">
        </div>
        <div class="sg-component__markup">
          <div class="demo_content">
            <div class="section section--hero section--negative">
              <div class="container">
                <header class="hgroup">
                  <h1 class="text-size--30 text-light">One stop shopping</h1>
                  <p class="subtitle">Here is a subtitle</p>
                </header>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="doc-compontent-box" id="page-title-and-account-dropdown">
      <div class="sg-component">
        <div class="sg-component__header">
          <h2 class="text-size--30 text-light trailer--small">page-title-and-account-dropdown</h2>
        </div>
        <div class="sg-component__status">
        </div>
        <div class="sg-component__markup sg-component__markup--overflow">
          <div class="demo_content">
            <div class="section section--hero section--negative">
              <div class="container">
                <header class="hgroup">
                  <h1 class="text-size--30 text-light">One stop shopping</h1>
                  <div class="dropdown" data-module="dropdown">
                    <div class="dropdown__label" role="button" data-toggle="dropdown">
                      <div class="text-truncate">Peter Petersen (80808080)</div>
                    </div>
                    <div class="dropdown__content" role="menu" data-module="list.dropdown">
                      <div class="dropdown__filter" data-module="list.filter" data-list="mydropdown">
                        <form action="parts/list--filter.html" method="get" data-interaction="" novalidate="novalidate">
                          <label class="aria--visible" for="dropdown-search">Search products</label>
                          <input class="dropdown__search" id="dropdown-search" name="dropdown-search" placeholder="Search products" type="text" autocomplete="off" spellcheck="false" aria-controls="mydropdown">
                          <button class="no-js--hidden icon-clear" data-list-clear="">
                            <span class="aria--visible">Clear filter</span>
                          </button>
                          <input class="js--hidden" tabindex="-1" type="submit" value="Search">
                        </form>
                      </div>
                      <div class="dropdown__scroll">
                        <ul id="mydropdown" class="dropdown__list" data-module="list.main" aria-live="polite">
                          <li>
                            <a class="media media--small" href="#">
                              <div class="media__image leader--small">
                                <span class="icon-phone-handset"></span>
                              </div>
                              <div class="media__body">
                                <div class="text-truncate">80808080</div>
                                <div class="text-truncate text--muted">iPhone 5s | Fri + 1GB</div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a class="media media--small" href="#">
                              <div class="media__image leader--small">
                                <span class="icon-phone-handset"></span>
                              </div>
                              <div class="media__body">
                                <div class="text-truncate">Peter H. Johnsson
                                  <span class="text--muted">(RM123456789)</span>
                                </div>
                                <div class="text-truncate text--muted">Router | Fri+ 1GB</div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a class="media media--small" href="#">
                              <div class="media__image leader--small">
                                <span class="icon-phone-handset"></span>
                              </div>
                              <div class="media__body">
                                <div class="text-truncate">John Schuster
                                  <span class="text--muted">(80808080)</span>
                                </div>
                                <div class="text-truncate text--muted">Samsung Galaxy S4 Mini | Fri + 5GB</div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a class="media media--small" href="#">
                              <div class="media__image leader--small">
                                <span class="icon-phone-handset"></span>
                              </div>
                              <div class="media__body">
                                <div class="text-truncate">80808080</div>
                                <div class="text-truncate text--muted">iPhone 5s | Fri + 1GB</div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a class="media media--small" href="#">
                              <div class="media__image leader--small">
                                <span class="icon-phone-handset"></span>
                              </div>
                              <div class="media__body">
                                <div class="text-truncate">Peter H. Johnsson
                                  <span class="text--muted">(RM123456789)</span>
                                </div>
                                <div class="text-truncate text--muted">Router | Fri+ 1GB</div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a class="media media--small" href="#">
                              <div class="media__image leader--small">
                                <span class="icon-phone-handset"></span>
                              </div>
                              <div class="media__body">
                                <div class="text-truncate">John Schuster
                                  <span class="text--muted">(80808080)</span>
                                </div>
                                <div class="text-truncate text--muted">Samsung Galaxy S4 Mini | Fri + 5GB</div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a class="media media--small" href="#">
                              <div class="media__image leader--small">
                                <span class="icon-phone-handset"></span>
                              </div>
                              <div class="media__body">
                                <div class="text-truncate">80808080</div>
                                <div class="text-truncate text--muted">iPhone 5s | Fri + 1GB</div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a class="media media--small" href="#">
                              <div class="media__image leader--small">
                                <span class="icon-phone-handset"></span>
                              </div>
                              <div class="media__body">
                                <div class="text-truncate">Peter H. Johnsson
                                  <span class="text--muted">(RM123456789)</span>
                                </div>
                                <div class="text-truncate text--muted">Router | Fri+ 1GB</div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a class="media media--small" href="#">
                              <div class="media__image leader--small">
                                <span class="icon-phone-handset"></span>
                              </div>
                              <div class="media__body">
                                <div class="text-truncate">John Schuster
                                  <span class="text--muted">(80808080)</span>
                                </div>
                                <div class="text-truncate text--muted">Samsung Galaxy S4 Mini | Fri + 5GB</div>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="dropdown__more" data-module="list.loadmore" data-list="mydropdown">
                        <a id="myshowmore-button" class="button button--modal button--small button--stretch" href="parts/list--filter.html" aria-controls="mydropdown" data-append="" data-interaction="" data-keep-interaction="" data-target="#mydropdown">Show more results</a>
                      </div>
                    </div>
                  </div>
                </header>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="doc-compontent-box" id="small-page-title">
      <div class="sg-component">
        <div class="sg-component__header">
          <h2 class="text-size--30 text-light trailer--small">small-page-title</h2>
        </div>
        <div class="sg-component__status">
        </div>
        <div class="sg-component__markup">
          <div class="demo_content">
            <div class="section section--hero section--small section--negative">
              <div class="container">
                <h1 class="title--xsmall">One stop shopping</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="doc-compontent-box" id="page-footer">
      <div class="sg-component">
        <div class="sg-component__header">
          <h2 class="text-size--30 text-light trailer--small">page-footer</h2>
        </div>
        <div class="sg-component__status">
        </div>
        <div class="sg-component__markup">
          <div class="demo_content">
            <div class="">
              <nav class="section section--footer">
                <div class="container">
                  <div class="grid-row trailer--small mobile-hidden">
                    <!-- footer:breadbcrumb-->
                    <div class="col-md-9">
                      <div class="section--footer__breadcrumb">
                        <ul>
                          <li><a href="#nogo">Home</a></li>
                          <li><a href="#nogo">Shop</a></li>
                          <li><a href="#nogo">Moblie</a></li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-md-3 tablet-omega footer__social text--right">
                      <a href="#nogo" class="icon-facebook track-social">
                        <span class="icon--text">Facebook</span>
                      </a>
                      <a href="#nogo" class="icon-twitter-circle track-social">
                        <span class="icon--text">Twitter</span>
                      </a>
                    </div>
                  </div>
                  <!-- : Footer Navigation -->
                  <div class="section--footer__menu mobile-hidden">
                    <div class="flex--row">
                      <div class="flex-item footer-item">
                        <h3><a href="#nogo">Om Telenor</a></h3>
                        <ul class="list list--footer">
                          <li><a href="#nogo" class="track-element-click">Job hos Telenor</a></li>
                          <li><a href="#nogo" class="track-element-click">Job hos Telenor</a></li>
                          <li><a href="#nogo" class="track-element-click">Job hos Telenor</a></li>
                          <li><a href="#nogo" class="track-element-click">Job hos Telenor</a></li>
                          <li><a href="#nogo" class="track-element-click">Job hos Telenor</a></li>
                          <li><a href="#nogo" class="track-element-click">Job hos Telenor</a></li>
                          <li><a href="#nogo" class="track-element-click">Job hos Telenor</a></li>
                          <li><a href="#nogo" class="track-element-click">Job hos Telenor</a></li>
                        </ul>
                      </div>
                      <div class="flex-item footer-item">
                        <h3><a href="#nogo">Om Telenor</a></h3>
                        <ul class="list list--footer">
                          <li><a href="#nogo" class="track-element-click">Job hos Telenor</a></li>
                          <li><a href="#nogo" class="track-element-click">Job hos Telenor</a></li>
                          <li><a href="#nogo" class="track-element-click">Job hos Telenor</a></li>
                          <li><a href="#nogo" class="track-element-click">Job hos Telenor</a></li>
                          <li><a href="#nogo" class="track-element-click">Job hos Telenor</a></li>
                          <li><a href="#nogo" class="track-element-click">Job hos Telenor</a></li>
                          <li><a href="#nogo" class="track-element-click">Job hos Telenor</a></li>
                          <li><a href="#nogo" class="track-element-click">Job hos Telenor</a></li>
                        </ul>
                      </div>
                      <div class="flex-item footer-item">
                        <h3><a href="#nogo">Om Telenor</a></h3>
                        <ul class="list list--footer">
                          <li><a href="#nogo" class="track-element-click">Job hos Telenor</a></li>
                          <li><a href="#nogo" class="track-element-click">Job hos Telenor</a></li>
                          <li><a href="#nogo" class="track-element-click">Job hos Telenor</a></li>
                          <li><a href="#nogo" class="track-element-click">Job hos Telenor</a></li>
                          <li><a href="#nogo" class="track-element-click">Job hos Telenor</a></li>
                          <li><a href="#nogo" class="track-element-click">Job hos Telenor</a></li>
                          <li><a href="#nogo" class="track-element-click">Job hos Telenor</a></li>
                          <li><a href="#nogo" class="track-element-click">Job hos Telenor</a></li>
                        </ul>
                      </div>
                      <div class="flex-item footer-item">
                        <h3><a href="#nogo">Om Telenor</a></h3>
                        <ul class="list list--footer">
                          <li><a href="#nogo" class="track-element-click">Job hos Telenor</a></li>
                          <li><a href="#nogo" class="track-element-click">Job hos Telenor</a></li>
                          <li><a href="#nogo" class="track-element-click">Job hos Telenor</a></li>
                          <li><a href="#nogo" class="track-element-click">Job hos Telenor</a></li>
                          <li><a href="#nogo" class="track-element-click">Job hos Telenor</a></li>
                          <li><a href="#nogo" class="track-element-click">Job hos Telenor</a></li>
                          <li><a href="#nogo" class="track-element-click">Job hos Telenor</a></li>
                          <li><a href="#nogo" class="track-element-click">Job hos Telenor</a></li>
                        </ul>
                      </div>
                      <div class="flex-item footer-item">
                        <h3><a href="#nogo">Om Telenor</a></h3>
                        <ul class="list list--footer">
                          <li><a href="#nogo" class="track-element-click">Job hos Telenor</a></li>
                          <li><a href="#nogo" class="track-element-click">Job hos Telenor</a></li>
                          <li><a href="#nogo" class="track-element-click">Job hos Telenor</a></li>
                          <li><a href="#nogo" class="track-element-click">Job hos Telenor</a></li>
                          <li><a href="#nogo" class="track-element-click">Job hos Telenor</a></li>
                          <li><a href="#nogo" class="track-element-click">Job hos Telenor</a></li>
                          <li><a href="#nogo" class="track-element-click">Job hos Telenor</a></li>
                          <li><a href="#nogo" class="track-element-click">Job hos Telenor</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!--:section footer info -->
                  <div class="section--footer__info">
                    <div class="grid-row">
                      <div class="col-md-3 col-xs-6 padding-trailer">
                        <div class="section--footer__info__icon icon-hotline circle-outline border-width-1"></div>
                        <div class="section--footer__info__txt">
                          Kundeservice har altid åbent
                        </div>
                      </div>
                      <div class="col-md-3 col-xs-6 padding-trailer">
                        <div class="section--footer__info__icon icon-one-to-one-loaner-phone circle-outline border-width-1"></div>
                        <div class="section--footer__info__txt">
                          1:1 lånemobil
                        </div>
                      </div>
                      <div class="col-md-3 col-xs-6 padding-trailer">
                        <div class="section--footer__info__icon icon-truck circle-outline border-width-1"></div>
                        <div class="section--footer__info__txt">
                          Fri fragt og ekspreslevering
                        </div>
                      </div>
                      <div class="col-md-3 col-xs-6 padding-trailer">
                        <div class="section--footer__info__icon icon-perfect-start circle-outline border-width-1"></div>
                        <div class="section--footer__info__txt">
                          Kundeservice har altid åbent
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
              <!-- section bottom-->
              <div class="section section--bottom">
                <div class="container">
                  <div class="desktop-hidden footer__social">
                    <a href="#nogo" class="icon-facebook"><span class="icon--text">Facebook</span></a>
                    <a href="#nogo" class="icon-twitter-circle"><span class="icon--text">Twitter</span></a>
                  </div>
                  <div class="section--bottom__holder mobile-text--center">
                    <div class="leader--xsmall mobile-trailer--small float--right mobile-text--center clearImg">
                      <div class="float--right toleft--xsmall mobile-toleft--none mobile-trailer--xsmall">
                        <img src="/static/img/paymenticons.png" alt="">
                      </div>
                      <div class="float--left">
                        <img src="/static/img/payment-icon2.png" alt="">
                      </div>
                    </div>
                    <div class="float--left">
                      <div>
                        <ul class="adr-list">
                          <li class="icon-telenor section--bottom__logo"></li>
                          <li>Telenor</li>
                          <li> · </li>
                          <li>Frederikskaj 8</li>
                          <li> · </li>
                          <li>1780 København V</li>
                          <li class="mobile-hidden"> · </li>
                          <li class="mobile-hidden">CVR: 19433692</li>
                        </ul>
                      </div>
                    </div>
                  </div>
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
