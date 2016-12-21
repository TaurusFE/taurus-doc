<template>
  <div>
    <div class="block__header leader--large trailer--large">
      <h2 class="title--medium">Tabs</h2>
    </div>
    <div id="tabs" class="doc-compontent-box">
      <div class="sg-component">
        <div class="sg-component__header">
          <h2 class="title--medium-small trailer--small">Tabs</h2>
        </div>
        <div class="sg-component__status">
          <p class="pull-right">
            <a class="pull-right" href="http://10.19.18.95:48888/examples/tabs-demo/index.html" target="_blank">View
              Demo</a>
          </p>
        </div>
        <div class="sg-component__markup">
          <div class="block">
            <div class="sg-component__label">Default tabpanel - select on small screens</div>
            <div class="demo_content">
              <!---------------Default tabpanel--------------->
              <div class="display--inline-block mobile-display--block">
                <ul class="tabgroup clear">
                  <li class="tabgroup__tab">
                    <a class="tabgroup__link" href="#panel1">Panel 1</a>
                  </li>
                  <li class="tabgroup__tab">
                    <a class="tabgroup__link" href="#panel2">Panel 1</a>
                  </li>
                  <li class="tabgroup__tab is-active">
                    <a class="tabgroup__link" href="#panel3">Panel 1</a>
                  </li>
                </ul>
                <div class="tabpanel__content-wrapper">
                  <section id="panel1" class="tabpanel__panel">
                    <div class="sg-component__label">Tab content 1
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </section>
                  <section id="panel2" class="tabpanel__panel">
                    <div class="sg-component__label">Tab content 2
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </section>
                  <section id="panel3" class="tabpanel__panel is-active">
                    <div class="sg-component__label">Tab content 3
                    </div>
                    <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                      mus. Cras viverra tortor ornare faucibus faucibus.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam iaculis semper
                      massa nec faucibus. Suspendisse potenti. Donec vulputate in nisl sed pellentesque.
                      Praesent viverra ex in consectetur sagittis. Class aptent taciti sociosqu ad
                      litora torquent per conubia nostra, per inceptos himenaeos.
                      Etiam ut ante turpis. Nulla bibendum imperdiet odio, ut consequat est tempor quis.
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                      turpis egestas. Quisque neque nulla, gravida elementum arcu eget, viverra
                      porttitor neque. Nulla venenatis porttitor sem at sollicitudin. Curabitur sit amet
                      massa nisi. In hac habitasse platea dictumst. Nam ante metus, viverra sit amet
                      commodo at, aliquet eget augue.</p>
                  </section>
                </div>
              </div>
              <!----------------------Default tabpanel-end-------------------->
            </div>
            <div class="sg-component__label">Small tabpanel - stretch on small screens</div>
            <div class="demo_content">
              <!------------------ small tabs---------------->
              <div class="display--inline-block mobile-display--block">
                <ul class="tabgroup tabgroup--small clear">
                  <li class="tabgroup__tab">
                    <a class="tabgroup__link" href="#panel-s-1">Panel 1</a>
                  </li>
                  <li class="tabgroup__tab">
                    <a class="tabgroup__link" href="#panel-s-2">Panel 1</a>
                  </li>
                  <li class="tabgroup__tab is-active">
                    <a class="tabgroup__link" href="#panel-s-3">Panel 1</a>
                  </li>
                </ul>
                <div class="tabpanel__content-wrapper">
                  <section id="panel-s-1" class="tabpanel__panel">
                    <div class="sg-component__label">Tab content 1
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </section>
                  <section id="panel-s-2" class="tabpanel__panel">
                    <div class="sg-component__label">Tab content 2
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </section>
                  <section id="panel-s-3" class="tabpanel__panel is-active">
                    <div class="sg-component__label">Tab content 3
                    </div>
                    <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                      mus. Cras viverra tortor ornare faucibus faucibus.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam iaculis semper
                      massa nec faucibus. Suspendisse potenti. Donec vulputate in nisl sed pellentesque.
                      Praesent viverra ex in consectetur sagittis. Class aptent taciti sociosqu ad
                      litora torquent per conubia nostra, per inceptos himenaeos.
                      Etiam ut ante turpis. Nulla bibendum imperdiet odio, ut consequat est tempor quis.
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                      turpis egestas. Quisque neque nulla, gravida elementum arcu eget, viverra
                      porttitor neque. Nulla venenatis porttitor sem at sollicitudin. Curabitur sit amet
                      massa nisi. In hac habitasse platea dictumst. Nam ante metus, viverra sit amet
                      commodo at, aliquet eget augue.</p>
                  </section>
                </div>
              </div>
              <!------------------- small tabs-end----------------->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="flat-tabs" class="doc-compontent-box">
      <div class="sg-component">
        <div class="sg-component__header">
          <h2 class="title--medium-small trailer--small">Flat tabs</h2>
        </div>
        <div class="sg-component__status">
          <p class="pull-right">
            <a class="pull-right" href="http://10.19.18.95:48888/examples/tabs-demo/index.html" target="_blank">View
              Demo</a>
          </p>
        </div>
        <div class="sg-component__markup">
          <div class="block">
            <div class="sg-component__label">Many items - Select in mobile breakpoint</div>
            <div class="demo_content">
              <!----------- flat many-tabs---->
              <div id="tabpanel" class="tabpanel">
                <nav class="trailer">
                  <ul class="tabpanel__list trailer">
                    <li class="tabpanel__tab is-active">
                      <a href="#nogo" class="tabpanel__link">Om Samsung Galaxy S6Edge+</a>
                    </li>
                    <li class="tabpanel__tab">
                      <a href="#nogo" class="tabpanel__link">Tekniske specifikationer</a>
                    </li>
                    <li class="tabpanel__tab">
                      <a href="#nogo" class="tabpanel__link">Fortrydelse</a>
                    </li>
                    <li class="tabpanel__tab">
                      <a href="#nogo" class="tabpanel__link">Levering</a>
                    </li>
                    <li class="tabpanel__tab flexnav">
                      <a href="#nogo" class="tabpanel__link flexnav__toggler">More</a>
                      <ul class="flexnav__subnav">
                        <li class="tabpanel__tab flexnav--invisible flexnav--active-tab">
                          <a href="#nogo" class="tabpanel__link">Om Samsung Galaxy S6Edge+</a>
                        </li>
                        <li class="tabpanel__tab flexnav--invisible flexnav--active-tab">
                          <a href="#nogo" class="tabpanel__link">Tekniske specifikationer</a>
                        </li>
                        <li class="tabpanel__tab flexnav--invisible flexnav--active-tab">
                          <a href="#nogo" class="tabpanel__link">Fortrydelse</a>
                        </li>
                        <li class="tabpanel__tab flexnav--active-tab">
                          <a href="#nogo" class="tabpanel__link">Levering123</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
              <!-- flat tabs-end-->
            </div>
            <div class="sg-component__label">Few items</div>
            <div class="demo_content">
              <!----------------- Few items------------->
              <div class="tabpanel">
                <nav class="trailer">
                  <ul class="tabpanel__list trailer">
                    <li class="tabpanel__tab is-active">
                      <a href="#nogo" class="tabpanel__link">Om Samsung Galaxy S6Edge+</a>
                    </li>
                    <li class="tabpanel__tab">
                      <a href="#nogo" class="tabpanel__link">Tekniske specifikationer</a>
                    </li>
                    <li class="tabpanel__tab">
                      <a href="#nogo" class="tabpanel__link">Fortrydelse</a>
                    </li>
                    <li class="tabpanel__tab">
                      <a href="#nogo" class="tabpanel__link">Levering</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <!---------------- Few items-end------------->
            </div>
            <div class="sg-component__label">Manage items</div>
            <div class="demo_content">
              <!---------------- manage tab  start------------->
              <div id="tabpanel" class="tabpanel">
                <nav class="trailer">
                  <ul class="tabpanel__list tabpanel__manage trailer">
                    <li class="tabpanel__tab is-active">
                      <a href="#nogo" class="tabpanel__link icon icon-search">Om Samsung Galaxy S6Edge+</a>
                      <a class="icon icon-remove tabpanel__closed"></a>
                    </li>
                    <li class="tabpanel__tab">
                      <a href="#nogo" class="tabpanel__link">Tekniske specifikationer</a>
                      <a class="icon icon-remove tabpanel__closed"></a>
                    </li>
                    <li class="tabpanel__tab">
                      <a href="#nogo" class="tabpanel__link">Fortrydelse</a>
                      <a class="icon icon-remove tabpanel__closed"></a>
                    </li>
                    <li class="tabpanel__tab flexnav">
                      <a href="#nogo" class="tabpanel__link flexnav__toggler">More</a>
                      <ul class="flexnav__subnav">
                        <li class="tabpanel__tab flexnav--invisible flexnav--active-tab">
                          <a href="#nogo" class="tabpanel__link">Om Samsung Galaxy S6Edge+</a>
                        </li>
                        <li class="tabpanel__tab flexnav--invisible flexnav--active-tab">
                          <a href="#nogo" class="tabpanel__link">Tekniske specifikationer</a>
                        </li>
                        <li class="tabpanel__tab flexnav--invisible flexnav--active-tab">
                          <a href="#nogo" class="tabpanel__link">Fortrydelse</a>
                        </li>
                        <li class="tabpanel__tab flexnav--active-tab">
                          <a href="#nogo" class="tabpanel__link">Levering123</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
              <!---------------- manage tab  end------------->
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="subscription-dropdown" class="doc-compontent-box">
      <!-- checkbox-component-start-->
      <div class="sg-component">
        <div class="sg-component__header">
          <h2 class="title--medium-small trailer--small">Dropdown</h2>
        </div>
        <div class="sg-component__status">
          <p class="pull-right">
            <a class="pull-right" href="http://10.19.18.95:48888/examples/dropdown-demo/index.html#nogo"
               target="_blank">View Demo</a>
          </p>
        </div>
        <div class="sg-component__markup" style="min-height: 260px">
          <div class="grid-row">
            <div class="col-md-4">
              <div class="sg-component__label">Default subscription dropdown</div>
              <div class="demo_content">
                <!-------------- Subscription dropdown----------->
                <div class="dropdown dropdown--subscriptions">
                  <div class="dropdown__label ">
                    <div class="text-truncate">All items (3)</div>
                  </div>
                  <div class="dropdown__content">
                    <div class="dropdown__filter">
                      <form action="">
                        <input name="" type="hidden" value="">
                        <div class="is-empty">
                          <input class="dropdown__search" id="" name="" placeholder="Search" type="text" value="">
                          <button class="icon-clear"></button>
                        </div>
                      </form>
                    </div>
                    <div class="dropdown__scroll">
                      <!--loading-->
                      <div class="js-hidden padding-leader--small padding-trailer--small">
            <span class="load-tester">
                <span class="spinner"></span>
            </span>
                      </div>
                      <!--loading-end-->
                      <!-- message error-->
                      <div class="message message--error is-hidden">
                        <div class="message__inner">
                          <span class="message__icon icon icon-reject"></span>
                          <div class="text-size--13 message__text">
                            <p>An error happened. Please try again later.</p>
                          </div>
                        </div>
                      </div>
                      <!-- message error-end-->
                      <ul class="dropdown__list">
                        <li>
                          <a class="media media--small" href="#nogo">
                            <div class="media__image leader--xsmall">
                              <span class="icon-person"></span>
                            </div>
                            <div class="media__body">
                              <div class="text-truncate">Jannik Mørch Søndergaard</div>
                              <div class="text-truncate color-gray">Jannik Mørch Søndergaard (32108000158128)</div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a class="media media--small" href="#nogo">
                            <div class="media__image leader--xsmall">
                              <span class="icon-person"></span>
                            </div>
                            <div class="media__body">
                              <div class="text-truncate">Jannik Mørch Søndergaard</div>
                              <div class="text-truncate color-gray"> (32109100774201)</div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a class="media media--small" href="#nogo">
                            <div class="media__image leader--xsmall">
                              <span class="icon-person"></span>
                            </div>
                            <div class="media__body">
                              <div class="text-truncate">Jannik Mørch Søndergaard</div>
                              <div class="text-truncate color-gray"> (32109100774201)</div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a class="media media--small" href="#nogo">
                            <div class="media__image leader--xsmall">
                              <span class="icon-person"></span>
                            </div>
                            <div class="media__body">
                              <div class="text-truncate">Jannik Mørch Søndergaard</div>
                              <div class="text-truncate color-gray"> (32109100774201)</div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a class="media media--small" href="#nogo">
                            <div class="media__image leader--xsmall">
                              <span class="icon-person"></span>
                            </div>
                            <div class="media__body">
                              <div class="text-truncate">Jannik Mørch Søndergaard</div>
                              <div class="text-truncate color-gray"> (32109100774201)</div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a class="media media--small" href="#nogo">
                            <div class="media__image leader--xsmall">
                              <span class="icon-person"></span>
                            </div>
                            <div class="media__body">
                              <div class="text-truncate">Jannik Mørch Søndergaard</div>
                              <div class="text-truncate color-gray"> (32109100774201)</div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="dropdown__more">
                      <form data-complete-label="Saved">
                        <button class="button button--default button--small button--stretch">
                          <span class="button__label">Show more results</span>
                          <span class="button__spinner"><span class="spinner-holder"><span
                            class="spinner-container"><em><span></span></em></span></span></span>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <!-------------Subscription dropdown-end---------------->
              </div>
            </div>
          </div>
          <div class="grid-row">
            <div class="col-md-4">
              <div class="sg-component__label">Small subscription dropdown</div>
              <div class="demo_content">
                <!-------------- small Subscription dropdown----------->
                <div class="dropdown dropdown--subscriptions dropdown--subscriptions--small">
                  <div class="dropdown__label ">
                    <div class="text-truncate">All items (3)</div>
                  </div>
                  <div class="dropdown__content">
                    <div class="dropdown__filter">
                      <form action="">
                        <input name="" type="hidden" value="">
                        <div class="is-empty">
                          <input class="dropdown__search" id="" name="" placeholder="Search" type="text" value="">
                          <button class="icon-clear"></button>
                        </div>
                      </form>
                    </div>
                    <div class="dropdown__scroll">
                      <!--loading-->
                      <div class="js-hidden padding-leader--small padding-trailer--small">
            <span class="load-tester">
                <span class="spinner"></span>
            </span>
                      </div>
                      <!--loading-end-->
                      <!-- message error-->
                      <div class="message message--error is-hidden">
                        <div class="message__inner">
                          <span class="message__icon icon icon-reject"></span>
                          <div class="text-size--13 message__text">
                            <p>An error happened. Please try again later.</p>
                          </div>
                        </div>
                      </div>
                      <!-- message error-end-->
                      <ul class="dropdown__list">
                        <li>
                          <a class="media media--small" href="#nogo">
                            <div class="media__image leader--xsmall">
                              <span class="icon-person"></span>
                            </div>
                            <div class="media__body">
                              <div class="text-truncate">Jannik Mørch Søndergaard</div>
                              <div class="text-truncate color-gray">Jannik Mørch Søndergaard (32108000158128)</div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a class="media media--small" href="#nogo">
                            <div class="media__image leader--xsmall">
                              <span class="icon-person"></span>
                            </div>
                            <div class="media__body">
                              <div class="text-truncate">Jannik Mørch Søndergaard</div>
                              <div class="text-truncate color-gray"> (32109100774201)</div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a class="media media--small" href="#nogo">
                            <div class="media__image leader--xsmall">
                              <span class="icon-person"></span>
                            </div>
                            <div class="media__body">
                              <div class="text-truncate">Jannik Mørch Søndergaard</div>
                              <div class="text-truncate color-gray"> (32109100774201)</div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a class="media media--small" href="#nogo">
                            <div class="media__image leader--xsmall">
                              <span class="icon-person"></span>
                            </div>
                            <div class="media__body">
                              <div class="text-truncate">Jannik Mørch Søndergaard</div>
                              <div class="text-truncate color-gray"> (32109100774201)</div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a class="media media--small" href="#nogo">
                            <div class="media__image leader--xsmall">
                              <span class="icon-person"></span>
                            </div>
                            <div class="media__body">
                              <div class="text-truncate">Jannik Mørch Søndergaard</div>
                              <div class="text-truncate color-gray"> (32109100774201)</div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a class="media media--small" href="#nogo">
                            <div class="media__image leader--xsmall">
                              <span class="icon-person"></span>
                            </div>
                            <div class="media__body">
                              <div class="text-truncate">Jannik Mørch Søndergaard</div>
                              <div class="text-truncate color-gray"> (32109100774201)</div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="dropdown__more">
                      <form data-complete-label="Saved">
                        <button class="button button--default button--small button--stretch">
                          <span class="button__label">Show more results</span>
                          <span class="button__spinner"><span class="spinner-holder"><span
                            class="spinner-container"><em><span></span></em></span></span></span>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <!-------------small Subscription dropdown-end---------------->
              </div>
            </div>
          </div>
          <div class="grid-row">
            <div class="col-md-4">
              <div class="sg-component__label">Default select dropdown</div>
              <div class="demo_content">
                <!---------------- select dropdown--------------->
                <div class="dropdown dropdown--select stretch-mobile">
                  <div class="dropdown__label ">
                    <div class="text-truncate">Anbefalet abonnement</div>
                  </div>
                  <div class="dropdown__content">
                    <div class="dropdown__scroll">
                      <!--loading-->
                      <div class="js-hidden padding-leader--small padding-trailer--small">
            <span class="load-tester">
                <span class="spinner"></span>
            </span>
                      </div>
                      <!--loading-end-->
                      <!-- message error-->
                      <div class="message message--error is-hidden">
                        <div class="message__inner">
                          <span class="message__icon icon icon-reject"></span>
                          <div class="text-size--13 message__text">
                            <p>An error happened. Please try again later.</p>
                          </div>
                        </div>
                      </div>
                      <!-- message error-end-->
                      <ul class="dropdown__list">
                        <li>
                          <a class="media media--small" href="#nogo">
                            <div class="media__body">
                              <div class="text-truncate">Anbefalet abonnement</div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a class="media media--small" href="#nogo">
                            <div class="media__body">
                              <div class="text-truncate">FRI+ 40 GB (249,-)</div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a class="media media--small" href="#nogo">
                            <div class="media__body">
                              <div class="text-truncate">Fri+ 10 GB (149,-)</div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a class="media media--small" href="#nogo">
                            <div class="media__body">
                              <div class="text-truncate">Fri+ 20 GB (199,-)</div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!-------------select dropdown-end--------------s-->
              </div>
            </div>
          </div>
          <div class="grid-row">
            <div class="col-md-4">
              <div class="sg-component__label">Small select dropdown</div>
              <div class="demo_content">
                <!---------------- small select dropdown--------------->
                <div class="dropdown dropdown--small dropdown--select stretch-mobile">
                  <div class="dropdown__label ">
                    <div class="text-truncate">Anbefalet abonnement</div>
                  </div>
                  <div class="dropdown__content">
                    <div class="dropdown__scroll">
                      <!--loading-->
                      <div class="js-hidden padding-leader--small padding-trailer--small">
            <span class="load-tester">
                <span class="spinner"></span>
            </span>
                      </div>
                      <!--loading-end-->
                      <!-- message error-->
                      <div class="message message--error is-hidden">
                        <div class="message__inner">
                          <span class="message__icon icon icon-reject"></span>
                          <div class="text-size--13 message__text">
                            <p>An error happened. Please try again later.</p>
                          </div>
                        </div>
                      </div>
                      <!-- message error-end-->
                      <ul class="dropdown__list">
                        <li>
                          <a class="media media--small" href="#nogo">
                            <div class="media__body">
                              <div class="text-truncate">Anbefalet abonnement</div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a class="media media--small" href="#nogo">
                            <div class="media__body">
                              <div class="text-truncate">FRI+ 40 GB (249,-)</div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a class="media media--small" href="#nogo">
                            <div class="media__body">
                              <div class="text-truncate">Fri+ 10 GB (149,-)</div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a class="media media--small" href="#nogo">
                            <div class="media__body">
                              <div class="text-truncate">Fri+ 20 GB (199,-)</div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!-------------small select dropdown-end--------------s-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="pager" class="doc-compontent-box">
      <!-- checkbox-component-start-->
      <div class="sg-component">
        <div class="sg-component__header">
          <h2 class="title--medium-small trailer--small">Pager</h2>
        </div>
        <div class="sg-component__status">
          <p class="pull-right">
            <a class="pull-right" href="http://10.19.18.95:48888/examples/pager-demo/index.html" target="_blank">View
              Demo</a>
          </p>
        </div>
        <div class="sg-component__markup">
          <div class="block">
            <div class="sg-component__label">Default pager</div>
            <div class="demo_content">
              <!----------------- default pager--------------->
              <div class="pager pager--default" data-component="pager" data-alias="pagination"
                   style="display: inline-block;"><a class="pager__button previous" data-selector="page-previous">previous</a>
                <span data-selector="pages"><a class="pager__button" data-selector="page-button"
                                               data-page-number="1">1</a>
    <a class="pager__button" data-selector="page-button" data-page-number="2">2</a>
    <a class="pager__button" data-selector="page-button" data-page-number="3">3</a>
    <a class="pager__button current" data-selector="page-button" data-page-number="4">4</a>
    <a class="pager__button" data-selector="page-button" data-page-number="5">5</a>
    <span class="pager__elipsis">…</span>
    <a class="pager__button" data-selector="page-button" data-page-number="24">24</a>
    </span>
                <a class="pager__button next" data-selector="page-next">next</a>
              </div>
              <!----------------------pager-end--------------------->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="speech-bubble" class="doc-compontent-box">
      <div class="sg-component mix is-approved  ready" style="display: block;">
        <div class="sg-component__header">
          <h2 class="title--medium-small trailer--small">Speech bubble</h2>
        </div>
        <div class="sg-component__status">
          <p class="pull-right">
            <a class="pull-right" href="http://10.19.18.95:48888/examples/speech-bubble-demo/index.html"
               target="_blank">View Demo</a>
          </p>
        </div>

        <!-- Markup -->
        <div class="sg-component__markup  ">
          <div class="container grid-row">
            <div class="col-md-6">
              <div class="sg-component__label">Default</div>
              <!-- : Speech Bubble -->
              <div class="demo_content" style="height: 300px">
                <div class="csstransforms">
                  <button id="speech-bubble-toggle-example" class="button button--default">Open Speech Bubble</button>
                  <div class="speech-bubble is-loaded" data-module="speech.bubble"
                       data-toggle-target="speech-bubble-toggle-example" style="left:10px; right: auto; top: 105px;">
                    <div class="speech-bubble__top-bar ">
                      Top bar label
                      <button type="button" class="no-js--hidden icon-reject speech-bubble__close">
                        <span class="aria--visible">Close</span>
                      </button>
                    </div>
                    <div class="speech-bubble__content">
                      <div class="block">
                        <h2>Some html content</h2>
                        <p>Some paregraph bla bla..</p>
                        <p>Some paregraph bla bla..</p>
                        <p>Some paregraph bla bla..</p>
                        <p>Some paregraph bla bla..</p>
                        <p>Some paregraph bla bla..</p>
                        <p>Some paregraph bla bla..</p>
                        <p>Some paregraph bla bla..</p>
                        <p>Some paregraph bla bla..</p>
                        <p>Some paregraph bla bla..</p>
                        <p>Some paregraph bla bla..</p>
                        <p>Some paregraph bla bla..</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="sg-component__label">Small</div>
              <!-- : Speech Bubble -->
              <div class="demo-content" style="height: 300px">
                <div class="csstransforms">
                  <button id="speech-bubble-toggle-example-small" class="button button--default button--small">Open
                    Speech Bubble
                  </button>
                  <div class="speech-bubble is-loaded" data-module="speech.bubble"
                       data-toggle-target="speech-bubble-toggle-example-small"
                       style="left: 10px; right: auto; top: 105px;">
                    <div class="speech-bubble__top-bar speech-bubble__top-bar--small text--small">
                      Top bar label
                    </div>
                    <div class="speech-bubble__content">
                      <div class="block text--small">
                        <h2>Some html content</h2>
                        <p>Some paregraph bla bla..</p>
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
    <div id="range-slider" class="doc-compontent-box">
      <!-- Range slider-->
      <div class="sg-component">
        <div class="sg-component__header">
          <h2 class="title--medium-small trailer--small">Range slider</h2>
        </div>
        <div class="sg-component__status">
          <p class="pull-right">
            <a class="pull-right" href="http://10.19.18.95:48888/examples/range-slider-demo/index.html" target="_blank">View
              Demo</a>
          </p>
        </div>
        <div class="sg-component__markup">
          <div class="block">
            <div class="demo_content">
              <div class="range-slider leader" data-component="range-slider" data-to="1" data-single="False">
                <div class="range-slider__line">
                  <div class="range-slider__container mobile-hidden">
                    <div class="range-slider__points" style="width: 8.33333%; left: 0%;">
                      <div class="range-slider__point range-slider__point--from tooltip__trigger"
                           data-component="range-slider/point" data-alias="from">
                        <div class="tooltip tooltip--blue" data-component="tooltip" role="tooltip">
                          <p>2</p>
                        </div>
                      </div>
                      <div class="range-slider__point range-slider__point--to tooltip__trigger"
                           data-component="range-slider/point" data-alias="to">
                        <!-- 鼠标移上显示状态添加样式“is-active”-->
                        <div class="tooltip tooltip--blue is-active" data-component="tooltip" role="tooltip"
                             style="left:60px;top:-46px">
                          <p>3</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <ul class="range-slider__values mobile-hidden">
                    <li>
                      <span class="range-slider__value-label">Months</span>
                      <span class="range-slider__value">0</span>
                    </li>
                    <li><span class="range-slider__value range-slider__value--empty">1</span></li>
                    <li><span class="range-slider__value range-slider__value--empty">2</span></li>
                    <li><span class="range-slider__value range-slider__value--empty">3</span></li>
                    <li><span class="range-slider__value range-slider__value--empty">4</span></li>
                    <li><span class="range-slider__value range-slider__value--empty">5</span></li>
                    <li><span class="range-slider__value range-slider__value--empty">6</span></li>
                  </ul>
                </div>

                <div class="desktop-hidden">
                  <div data-component="range-slider/select" data-extensions="select" data-alias="fromSelect"
                       class="form-select range-slider__select--from trailer">
                    <select>
                      <option value="0" data-tooltip="0 kr.">0 Month(es) - 0 kr.</option>
                      <option value="1" data-tooltip="477 kr.">1 Month(es) - 477 kr.</option>
                      <option value="2" data-tooltip="947 kr.">2 Month(es) - 947 kr.</option>
                      <option value="3" data-tooltip="1.417 kr.">3 Month(es) - 1.417 kr.</option>
                      <option value="4" data-tooltip="1.887 kr.">4 Month(es) - 1.887 kr.</option>
                      <option value="5" data-tooltip="2.357 kr.">5 Month(es) - 2.357 kr.</option>
                      <option value="6" data-tooltip="2.827 kr.">6 Month(es) - 2.827 kr.</option>
                    </select>
                    <div class="form-select__field">
                      0 Month(es) - 0 kr.
                    </div>
                  </div>

                  <div data-component="range-slider/select" data-extensions="select" data-alias="toSelect"
                       class="form-select trailer">
                    <select>
                      <option value="0" data-tooltip="0 kr.">0 Month(es) - 0 kr.</option>
                      <option value="1" data-tooltip="477 kr.">1 Month(es) - 477 kr.</option>
                      <option value="2" data-tooltip="947 kr.">2 Month(es) - 947 kr.</option>
                      <option value="3" data-tooltip="1.417 kr.">3 Month(es) - 1.417 kr.</option>
                      <option value="4" data-tooltip="1.887 kr.">4 Month(es) - 1.887 kr.</option>
                      <option value="5" data-tooltip="2.357 kr.">5 Month(es) - 2.357 kr.</option>
                      <option value="6" data-tooltip="2.827 kr.">6 Month(es) - 2.827 kr.</option>
                    </select>
                    <div class="form-select__field">
                      0 Month(es) - 0 kr.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="single-slider" class="doc-compontent-box">
      <!-- Single slider-->
      <div class="sg-component">
        <div class="sg-component__header">
          <h2 class="title--medium-small trailer--small">Single slider</h2>
        </div>
        <div class="sg-component__status">
          <p class="pull-right">
            <a class="pull-right" href="http://10.19.18.95:48888/examples/range-slider-demo/index.html" target="_blank">View
              Demo</a>
          </p>
        </div>
        <div class="sg-component__markup">
          <div class="block">
            <div class="demo_content">
              <div class="range-slider range-slider--single leader trailer--large" data-component="range-slider"
                   data-to="1" data-single="False">
                <div class="range-slider__line">
                  <div class="range-slider__container mobile-hidden">
                    <div class="range-slider__points" style="width: 8.33333%; left: 0%;">
                      <div class="range-slider__point range-slider__point--from tooltip__trigger"
                           data-component="range-slider/point" data-alias="from">
                        <div class="tooltip tooltip--blue" data-component="tooltip" role="tooltip">
                          <p></p>
                        </div>
                      </div>
                      <div class="range-slider__point range-slider__point--to tooltip__trigger"
                           data-component="range-slider/point" data-alias="to">
                        <div class="tooltip tooltip--blue" data-component="tooltip" role="tooltip">
                          <p></p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <ul class="range-slider__values mobile-hidden">
                    <li>
                      <span class="range-slider__value-label">Months</span>
                      <span class="range-slider__value">0</span>
                    </li>
                    <li><span class="range-slider__value range-slider__value--empty">1</span></li>
                    <li><span class="range-slider__value range-slider__value--empty">2</span></li>
                    <li><span class="range-slider__value range-slider__value--empty">3</span></li>
                    <li><span class="range-slider__value range-slider__value--empty">4</span></li>
                    <li><span class="range-slider__value range-slider__value--empty">5</span></li>
                    <li><span class="range-slider__value range-slider__value--empty">6</span></li>
                  </ul>
                </div>

                <div class="desktop-hidden">
                  <div data-component="range-slider/select" data-extensions="select" data-alias="fromSelect"
                       class="form-select range-slider__select--from trailer">
                    <select>
                      <option value="0" data-tooltip="0 kr.">0 Month(es) - 0 kr.</option>
                      <option value="1" data-tooltip="477 kr.">1 Month(es) - 477 kr.</option>
                      <option value="2" data-tooltip="947 kr.">2 Month(es) - 947 kr.</option>
                      <option value="3" data-tooltip="1.417 kr.">3 Month(es) - 1.417 kr.</option>
                      <option value="4" data-tooltip="1.887 kr.">4 Month(es) - 1.887 kr.</option>
                      <option value="5" data-tooltip="2.357 kr.">5 Month(es) - 2.357 kr.</option>
                      <option value="6" data-tooltip="2.827 kr.">6 Month(es) - 2.827 kr.</option>
                    </select>
                    <div class="form-select__field">
                      0 Month(es) - 0 kr.
                    </div>
                  </div>

                  <div data-component="range-slider/select" data-extensions="select" data-alias="toSelect"
                       class="form-select trailer">
                    <select>
                      <option value="0" data-tooltip="0 kr.">0 Month(es) - 0 kr.</option>
                      <option value="1" data-tooltip="477 kr.">1 Month(es) - 477 kr.</option>
                      <option value="2" data-tooltip="947 kr.">2 Month(es) - 947 kr.</option>
                      <option value="3" data-tooltip="1.417 kr.">3 Month(es) - 1.417 kr.</option>
                      <option value="4" data-tooltip="1.887 kr.">4 Month(es) - 1.887 kr.</option>
                      <option value="5" data-tooltip="2.357 kr.">5 Month(es) - 2.357 kr.</option>
                      <option value="6" data-tooltip="2.827 kr.">6 Month(es) - 2.827 kr.</option>
                    </select>
                    <div class="form-select__field">
                      0 Month(es) - 0 kr.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="select-slider" class="doc-compontent-box">
      <!-- Select slider-->
      <div class="sg-component">
        <div class="sg-component__header">
          <h2 class="title--medium-small trailer--small">Select slider</h2>
        </div>
        <div class="sg-component__status">
          <p class="pull-right">
            <a class="pull-right" href="http://10.19.18.95:48888/examples/range-slider-demo/index.html" target="_blank">View
              Demo</a>
          </p>
        </div>
        <div class="sg-component__markup">
          <div class="block">
            <div class="demo_content">
              <div class="layout-slider-block" id="" data-module="input.selectslider"
                   data-target="#example-table" data-target-column="3" data-allownull="true" data-step="100">
                <div class="layout-slider">
                  <input id="" type="slider" name="area" class="js--hidden" value="200;700" style="display: none;">
                  <span class="jslider jslider_round_plastic jslider-limitless">
     <table>
         <tbody>
         <tr>
             <td>
                 <div class="jslider-bg">
                     <i class="l"></i>
                     <i class="f"></i>
                     <i class="r"></i>
                     <i class="v" style="left: 20.9%; width: 45%;"></i>
                 </div>
                 <div class="jslider-pointer" tabindex="0" style="left: 20.9%;z-index: 2;"></div>
                 <div class="jslider-pointer jslider-pointer-to" tabindex="0"
                      style="left: 65.9%; z-index: 1;"></div>
                 <div class="jslider-label"><span>0</span></div>
                 <div class="jslider-label jslider-label-to"><span>1,000</span></div>
                 <div class="jslider-value" style="left: 20.9%; margin-left: -38px; right: auto; visibility: visible;">
                     <span>200&nbsp;–&nbsp;700</span>
                 </div>
                 <div class="jslider-value jslider-value-to"
                      style="visibility: hidden; left: 65.9%; margin-left: -15.5px; right: auto;">
                     <span>700</span>
                 </div>
                 <div class="jslider-scale"></div>
             </td>
         </tr>
         </tbody>
     </table></span></div>
                <div class="layout-slider-label no-js--hidden">
     <span class="slider-label-from text--small text--muted"
           id="sliderLabelFrom-Slider4">200 MB</span>
                  <span class="slider-label-to text--small text--muted" id="sliderLabelTo-Slider5">700 MB</span>
                </div>
                <div class="form-item--select form-item--inline form-item--small js--hidden">
                  <div class="select-wrapper">
                    <select id="sliderFrom-Slider3" class="js--hidden" tabindex="-1">
                      <option value="0">0 MB</option>
                      <option value="100">100 MB</option>
                      <option value="200">200 MB</option>
                      <option value="300">300 MB</option>
                      <option value="400">400 MB</option>
                      <option value="500">500 MB</option>
                      <option value="600">600 MB</option>
                      <option value="700">700 MB</option>
                      <option value="800">800 MB</option>
                      <option value="900">900 MB</option>
                      <option value="1000">1000 MB</option>
                    </select>
                  </div>
                </div>
                <div class="form-item--select form-item--inline form-item--small js--hidden">
                  <div class="select-wrapper">
                    <select id="sliderTo-Slider3" tabindex="-1">
                      <option value="0">0 MB</option>
                      <option value="100">100 MB</option>
                      <option value="200">200 MB</option>
                      <option value="300">300 MB</option>
                      <option value="400">400 MB</option>
                      <option value="500">500 MB</option>
                      <option value="600">600 MB</option>
                      <option value="700">700 MB</option>
                      <option value="800">800 MB</option>
                      <option value="900">900 MB</option>
                      <option value="1000">1000 MB</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="table-filters" class="doc-compontent-box">
      <div class="sg-component mix is-approved omega" style="display: inline-block;">
        <div class="sg-component__header">
          <h2 class="title--medium-small trailer--small">Table filters</h2>
        </div>
        <div class="sg-component__status">
          <p class="pull-right text--right">
            <a class="pull-right" href="http://10.19.18.95:48888/examples/date-picker-demo/index.html" target="_blank">View
              Demo</a>
          </p>
        </div>

        <!-- Markup -->
        <div class="sg-component__markup ">
          <div class="grid-row">
            <div class="col-md-6">
              <div class="sg-component__label">Search filter</div>
              <div class="block--filter box--greyed">
                <div class="demo_content">
                  <!-- component:field-search:start (field--search.hbs) -->
                  <div class="form-search form-item--inline form-item--small form-search--inline"
                       data-module="form.search" data-target="#example-table">
                    <label class="aria--visible" for="search-field-one"></label>
                    <input id="search-field-one" type="search" placeholder="Search product">
                    <button type="button" tabindex="-1" class="form-search__clear no-js--hidden icon-clear"
                            data-list-clear="">
                      <span class="aria--visible"></span>
                    </button>
                  </div>
                </div>
                <!-- component:field-search:start -->
              </div>
            </div>
            <div class="col-md-6">
              <div class="sg-component__label">Select filter</div>
              <div class="block--filter box--greyed">
                <div class="demo_content">
                  <div data-module="form.select" class="form-select form-item--inline form-select--small"
                       id="example-columnfilter" data-target="#example-table" data-target-column="6">
                    <select id="select" style="left: 10px;">
                      <option value="">All usage</option>
                      <option value="included">Included usage</option>
                      <option value="excluded">Excluded usage</option>
                    </select>
                    <div class="form-select__field">All usage</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="grid-row">
            <div class="col-md-6">
              <div class="sg-component__label">Date range</div>
              <div class="block--filter box--greyed">
                <div class="demo_content">
                  <!-- component:daterange:start (form--daterange.hbs) -->
                  <!-- options:class [form-item--inline] -->
                  <div class="datepicker form-item--inline" data-module="input.daterange" id="example-daterange"
                       data-target="#example-table" data-target-column="0">

                    <!-- options:end -->
                    <input class="datepicker__start" type="date" value="2014-01-01" min="2000-01-01" max="2014-03-01"
                           placeholder="From date">
                    <input class="datepicker__end" type="date" value="2014-01-18" min="2000-01-01" max="2014-03-01"
                           placeholder="To date">
                    <button class="no-js--hidden icon icon-clear" data-list-clear="" style="display: inline-block;">
                      <span class="aria--visible">Clear filter</span>
                    </button>

                    <input class="datepicker__range is-datepick" type="text" placeholder="Select dates range"></div>
                  <!-- options:class [datepick-popup] -->
                  <div class="datepick-popup" style="position: absolute; left:20px; top: 110px; display: none;">
                    <div class="datepick datepick-multi noPrevNext picker-example-daterange" style="width: 512px;">
                      <div class="datepick-nav">
                        <a href="javascript:void(0)" title="Luk uden ændringer"
                           class="datepick-cmd datepick-cmd-close ">Luk</a>
                        <a href="javascript:void(0)" title="Vis aktuel måned" class="datepick-cmd datepick-cmd-today ">Vælg
                          en dato</a>
                      </div>
                      <div class="datepick-month-row">
                        <div class="datepick-month first">
                          <div class="datepick-month-header">
                            <a href="javascript:void(0)" title="Vis forrige måned"
                               class="datepick-cmd datepick-cmd-prev ">&lt;Forrige</a>
                            Juni 2013
                          </div>
                          <table>
                            <thead>
                            <tr>
                              <th>
                                <span class="datepick-dow-1" title="Mandag">Ma</span>
                              </th>
                              <th>
                                <span class="datepick-dow-2" title="Tirsdag">Ti</span>
                              </th>
                              <th>
                                <span class="datepick-dow-3" title="Onsdag">On</span>
                              </th>
                              <th>
                                <span class="datepick-dow-4" title="Torsdag">To</span>
                              </th>
                              <th>
                                <span class="datepick-dow-5" title="Fredag">Fr</span>
                              </th>
                              <th>
                                <span class="datepick-dow-6" title="Lørdag">Lø</span>
                              </th>
                              <th>
                                <span class="datepick-dow-0" title="Søndag">Sø</span>
                              </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                              <td><span class="dp1369627200000  datepick-other-month">&nbsp;</span></td>
                              <td><span class="dp1369713600000  datepick-other-month">&nbsp;</span></td>
                              <td><span class="dp1369800000000  datepick-other-month">&nbsp;</span></td>
                              <td><span class="dp1369886400000  datepick-other-month">&nbsp;</span></td>
                              <td><span class="dp1369972800000  datepick-other-month">&nbsp;</span></td>
                              <td><a href="javascript:void(0)"
                                     class="dp1370059200000  datepick-selected  datepick-weekend"
                                     title="Vælg Lør, Jun 1">1</a></td>
                              <td><a href="javascript:void(0)"
                                     class="dp1370145600000  datepick-selected  datepick-weekend"
                                     title="Vælg Søn, Jun 2">2</a></td>
                            </tr>
                            <tr>
                              <td><a href="javascript:void(0)" class="dp1370232000000  datepick-selected"
                                     title="Vælg Man, Jun 3">3</a></td>
                              <td><a href="javascript:void(0)" class="dp1370318400000  datepick-selected"
                                     title="Vælg Tir, Jun 4">4</a></td>
                              <td><a href="javascript:void(0)" class="dp1370404800000  datepick-selected"
                                     title="Vælg Ons, Jun 5">5</a></td>
                              <td><a href="javascript:void(0)" class="dp1370491200000  datepick-selected"
                                     title="Vælg Tor, Jun 6">6</a></td>
                              <td><a href="javascript:void(0)" class="dp1370577600000  datepick-selected"
                                     title="Vælg Fre, Jun 7">7</a></td>
                              <td><a href="javascript:void(0)"
                                     class="dp1370664000000  datepick-selected  datepick-weekend"
                                     title="Vælg Lør, Jun 8">8</a></td>
                              <td><a href="javascript:void(0)"
                                     class="dp1370750400000  datepick-selected  datepick-weekend"
                                     title="Vælg Søn, Jun 9">9</a></td>
                            </tr>
                            <tr>
                              <td><a href="javascript:void(0)" class="dp1370836800000  datepick-selected"
                                     title="Vælg Man, Jun 10">10</a></td>
                              <td><a href="javascript:void(0)" class="dp1370923200000  datepick-selected"
                                     title="Vælg Tir, Jun 11">11</a></td>
                              <td><a href="javascript:void(0)" class="dp1371009600000  datepick-selected"
                                     title="Vælg Ons, Jun 12">12</a></td>
                              <td><a href="javascript:void(0)" class="dp1371096000000  datepick-selected"
                                     title="Vælg Tor, Jun 13">13</a></td>
                              <td><a href="javascript:void(0)" class="dp1371182400000  datepick-selected"
                                     title="Vælg Fre, Jun 14">14</a></td>
                              <td><a href="javascript:void(0)"
                                     class="dp1371268800000  datepick-selected  datepick-weekend"
                                     title="Vælg Lør, Jun 15">15</a></td>
                              <td><a href="javascript:void(0)"
                                     class="dp1371355200000  datepick-selected  datepick-weekend"
                                     title="Vælg Søn, Jun 16">16</a></td>
                            </tr>
                            <tr>
                              <td><a href="javascript:void(0)" class="dp1371441600000  datepick-selected"
                                     title="Vælg Man, Jun 17">17</a></td>
                              <td><a href="javascript:void(0)" class="dp1371528000000  datepick-selected"
                                     title="Vælg Tir, Jun 18">18</a></td>
                              <td><a href="javascript:void(0)" class="dp1371614400000  datepick-selected"
                                     title="Vælg Ons, Jun 19">19</a></td>
                              <td><a href="javascript:void(0)" class="dp1371700800000  datepick-selected"
                                     title="Vælg Tor, Jun 20">20</a></td>
                              <td><a href="javascript:void(0)" class="dp1371787200000  datepick-selected"
                                     title="Vælg Fre, Jun 21">21</a></td>
                              <td><a href="javascript:void(0)"
                                     class="dp1371873600000  datepick-selected  datepick-weekend"
                                     title="Vælg Lør, Jun 22">22</a></td>
                              <td><a href="javascript:void(0)"
                                     class="dp1371960000000  datepick-selected  datepick-weekend"
                                     title="Vælg Søn, Jun 23">23</a></td>
                            </tr>
                            <tr>
                              <td><a href="javascript:void(0)" class="dp1372046400000  datepick-selected"
                                     title="Vælg Man, Jun 24">24</a></td>
                              <td><a href="javascript:void(0)" class="dp1372132800000  datepick-selected"
                                     title="Vælg Tir, Jun 25">25</a></td>
                              <td><a href="javascript:void(0)" class="dp1372219200000  datepick-selected"
                                     title="Vælg Ons, Jun 26">26</a></td>
                              <td><a href="javascript:void(0)" class="dp1372305600000  datepick-selected"
                                     title="Vælg Tor, Jun 27">27</a></td>
                              <td><a href="javascript:void(0)" class="dp1372392000000  datepick-selected"
                                     title="Vælg Fre, Jun 28">28</a></td>
                              <td><a href="javascript:void(0)"
                                     class="dp1372478400000  datepick-selected  datepick-weekend"
                                     title="Vælg Lør, Jun 29">29</a></td>
                              <td><a href="javascript:void(0)"
                                     class="dp1372564800000  datepick-selected  datepick-weekend"
                                     title="Vælg Søn, Jun 30">30</a></td>
                            </tr>
                            <tr>
                              <td><span class="dp1372651200000  datepick-other-month">&nbsp;</span></td>
                              <td><span class="dp1372737600000  datepick-other-month">&nbsp;</span></td>
                              <td><span class="dp1372824000000  datepick-other-month">&nbsp;</span></td>
                              <td><span class="dp1372910400000  datepick-other-month">&nbsp;</span></td>
                              <td><span class="dp1372996800000  datepick-other-month">&nbsp;</span></td>
                              <td><span class="dp1373083200000  datepick-weekend datepick-other-month">&nbsp;</span>
                              </td>
                              <td><span class="dp1373169600000  datepick-weekend datepick-other-month">&nbsp;</span>
                              </td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                        <div class="datepick-month last">
                          <div class="datepick-month-header">
                            Juli 2013
                            <a href="javascript:void(0)" title="Vis næste måned"
                               class="datepick-cmd datepick-cmd-next ">Næste&gt;</a>
                          </div>
                          <table>
                            <thead>
                            <tr>
                              <th><span class="datepick-dow-1" title="Mandag">Ma</span></th>
                              <th><span class="datepick-dow-2" title="Tirsdag">Ti</span></th>
                              <th><span class="datepick-dow-3" title="Onsdag">On</span></th>
                              <th><span class="datepick-dow-4" title="Torsdag">To</span></th>
                              <th><span class="datepick-dow-5" title="Fredag">Fr</span></th>
                              <th><span class="datepick-dow-6" title="Lørdag">Lø</span></th>
                              <th><span class="datepick-dow-0" title="Søndag">Sø</span></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                              <td><span class="dp1372046400000  datepick-other-month">&nbsp;</span></td>
                              <td><span class="dp1372132800000  datepick-other-month">&nbsp;</span></td>
                              <td><span class="dp1372219200000  datepick-other-month">&nbsp;</span></td>
                              <td><span class="dp1372305600000  datepick-other-month">&nbsp;</span></td>
                              <td><span class="dp1372392000000  datepick-other-month">&nbsp;</span></td>
                              <td><span class="dp1372478400000  datepick-weekend datepick-other-month">&nbsp;</span>
                              </td>
                              <td><span class="dp1372564800000  datepick-weekend datepick-other-month">&nbsp;</span>
                              </td>
                            </tr>
                            <tr>
                              <td><a href="javascript:void(0)" class="dp1372651200000  datepick-selected"
                                     title="Vælg Man, Jul 1">1</a></td>
                              <td><a href="javascript:void(0)" class="dp1372737600000  datepick-selected"
                                     title="Vælg Tir, Jul 2">2</a></td>
                              <td><a href="javascript:void(0)" class="dp1372824000000  datepick-selected"
                                     title="Vælg Ons, Jul 3">3</a></td>
                              <td><a href="javascript:void(0)" class="dp1372910400000  datepick-selected"
                                     title="Vælg Tor, Jul 4">4</a></td>
                              <td><a href="javascript:void(0)" class="dp1372996800000  datepick-selected"
                                     title="Vælg Fre, Jul 5">5</a></td>
                              <td><a href="javascript:void(0)"
                                     class="dp1373083200000  datepick-selected  datepick-weekend"
                                     title="Vælg Lør, Jul 6">6</a></td>
                              <td><a href="javascript:void(0)"
                                     class="dp1373169600000  datepick-selected  datepick-weekend"
                                     title="Vælg Søn, Jul 7">7</a></td>
                            </tr>
                            <tr>
                              <td><a href="javascript:void(0)" class="dp1373256000000  datepick-selected"
                                     title="Vælg Man, Jul 8">8</a></td>
                              <td><a href="javascript:void(0)" class="dp1373342400000  datepick-selected"
                                     title="Vælg Tir, Jul 9">9</a></td>
                              <td><a href="javascript:void(0)" class="dp1373428800000  datepick-selected"
                                     title="Vælg Ons, Jul 10">10</a></td>
                              <td><a href="javascript:void(0)" class="dp1373515200000  datepick-selected"
                                     title="Vælg Tor, Jul 11">11</a></td>
                              <td><a href="javascript:void(0)" class="dp1373601600000  datepick-selected"
                                     title="Vælg Fre, Jul 12">12</a></td>
                              <td><a href="javascript:void(0)"
                                     class="dp1373688000000  datepick-selected  datepick-weekend"
                                     title="Vælg Lør, Jul 13">13</a></td>
                              <td><a href="javascript:void(0)"
                                     class="dp1373774400000  datepick-selected  datepick-weekend"
                                     title="Vælg Søn, Jul 14">14</a></td>
                            </tr>
                            <tr>
                              <td><a href="javascript:void(0)" class="dp1373860800000  datepick-selected"
                                     title="Vælg Man, Jul 15">15</a></td>
                              <td><a href="javascript:void(0)" class="dp1373947200000  datepick-selected"
                                     title="Vælg Tir, Jul 16">16</a></td>
                              <td><a href="javascript:void(0)" class="dp1374033600000  datepick-selected"
                                     title="Vælg Ons, Jul 17">17</a></td>
                              <td><a href="javascript:void(0)" class="dp1374120000000  datepick-selected"
                                     title="Vælg Tor, Jul 18">18</a></td>
                              <td><a href="javascript:void(0)" class="dp1374206400000  datepick-selected"
                                     title="Vælg Fre, Jul 19">19</a></td>
                              <td><a href="javascript:void(0)"
                                     class="dp1374292800000  datepick-selected  datepick-weekend"
                                     title="Vælg Lør, Jul 20">20</a></td>
                              <td><a href="javascript:void(0)"
                                     class="dp1374379200000  datepick-selected  datepick-weekend"
                                     title="Vælg Søn, Jul 21">21</a></td>
                            </tr>
                            <tr>
                              <td><a href="javascript:void(0)" class="dp1374465600000  datepick-selected"
                                     title="Vælg Man, Jul 22">22</a></td>
                              <td><a href="javascript:void(0)" class="dp1374552000000  datepick-selected"
                                     title="Vælg Tir, Jul 23">23</a></td>
                              <td><a href="javascript:void(0)" class="dp1374638400000  datepick-selected"
                                     title="Vælg Ons, Jul 24">24</a></td>
                              <td><a href="javascript:void(0)" class="dp1374724800000  datepick-selected"
                                     title="Vælg Tor, Jul 25">25</a></td>
                              <td><a href="javascript:void(0)" class="dp1374811200000  datepick-selected"
                                     title="Vælg Fre, Jul 26">26</a></td>
                              <td><a href="javascript:void(0)"
                                     class="dp1374897600000  datepick-selected  datepick-weekend"
                                     title="Vælg Lør, Jul 27">27</a></td>
                              <td><a href="javascript:void(0)"
                                     class="dp1374984000000  datepick-selected  datepick-weekend"
                                     title="Vælg Søn, Jul 28">28</a></td>
                            </tr>
                            <tr>
                              <td><a href="javascript:void(0)" class="dp1375070400000  datepick-selected"
                                     title="Vælg Man, Jul 29">29</a></td>
                              <td><a href="javascript:void(0)" class="dp1375156800000  datepick-selected"
                                     title="Vælg Tir, Jul 30">30</a></td>
                              <td><a href="javascript:void(0)" class="dp1375243200000  datepick-selected"
                                     title="Vælg Ons, Jul 31">31</a></td>
                              <td><span class="dp1375329600000  datepick-other-month">&nbsp;</span></td>
                              <td><span class="dp1375416000000  datepick-other-month">&nbsp;</span></td>
                              <td><span class="dp1375502400000  datepick-weekend datepick-other-month">&nbsp;</span>
                              </td>
                              <td><span class="dp1375588800000  datepick-weekend datepick-other-month">&nbsp;</span>
                              </td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div class="datepick-ctrl">
                        <button class="button button--action button--small button--stretch">Anvend</button>
                        <a href="javascript:void(0)" title="Nulstil den aktuelle dato"
                           class="datepick-cmd datepick-cmd-clear ">Nulstil</a>
                      </div>
                      <div class="datepick-clear-fix"></div>
                    </div>
                  </div>
                  <!-- component:daterange:end -->
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="sg-component__label">Date time range</div>
              <div class="block--filter box--greyed">
                <div class="demo_content">
                  <!-- component:daterange:start (form--daterange.hbs) -->
                  <!-- options:class [form-item--inline] -->
                  <div class="datepicker form-item--inline" data-module="input.daterange" id="example-daterange"
                       data-target="#example-table" data-target-column="0">

                    <!-- options:end -->
                    <input class="datepicker__start" type="date" value="2014-01-01" min="2000-01-01" max="2014-03-01"
                           placeholder="From date">
                    <input class="datepicker__end" type="date" value="2014-01-18" min="2000-01-01" max="2014-03-01"
                           placeholder="To date">
                    <button class="no-js--hidden icon icon-clear" data-list-clear="" style="display: inline-block;">
                      <span class="aria--visible">Clear filter</span>
                    </button>

                    <input class="datepicker__range is-datepick" type="text" placeholder="Select dates range"></div>
                  <!-- options:class [datepick-popup] -->
                  <div class="datepick-popup" style="position: absolute; left:20px; top: 110px; display: none;">
                    <div class="datepick datepick-multi noPrevNext picker-example-daterange" style="width: 512px;">
                      <div class="datepick-nav">
                        <a href="javascript:void(0)" title="Luk uden ændringer"
                           class="datepick-cmd datepick-cmd-close ">Luk</a>
                        <a href="javascript:void(0)" title="Vis aktuel måned" class="datepick-cmd datepick-cmd-today ">Vælg
                          en dato</a>
                      </div>
                      <div class="datepick-month-row">
                        <div class="datepick-month first">
                          <div class="datepick-month-header">
                            <a href="javascript:void(0)" title="Vis forrige måned"
                               class="datepick-cmd datepick-cmd-prev ">&lt;Forrige</a>
                            Juni 2013
                          </div>
                          <table>
                            <thead>
                            <tr>
                              <th>
                                <span class="datepick-dow-1" title="Mandag">Ma</span>
                              </th>
                              <th>
                                <span class="datepick-dow-2" title="Tirsdag">Ti</span>
                              </th>
                              <th>
                                <span class="datepick-dow-3" title="Onsdag">On</span>
                              </th>
                              <th>
                                <span class="datepick-dow-4" title="Torsdag">To</span>
                              </th>
                              <th>
                                <span class="datepick-dow-5" title="Fredag">Fr</span>
                              </th>
                              <th>
                                <span class="datepick-dow-6" title="Lørdag">Lø</span>
                              </th>
                              <th>
                                <span class="datepick-dow-0" title="Søndag">Sø</span>
                              </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                              <td><span class="dp1369627200000  datepick-other-month">&nbsp;</span></td>
                              <td><span class="dp1369713600000  datepick-other-month">&nbsp;</span></td>
                              <td><span class="dp1369800000000  datepick-other-month">&nbsp;</span></td>
                              <td><span class="dp1369886400000  datepick-other-month">&nbsp;</span></td>
                              <td><span class="dp1369972800000  datepick-other-month">&nbsp;</span></td>
                              <td><a href="javascript:void(0)"
                                     class="dp1370059200000  datepick-selected  datepick-weekend"
                                     title="Vælg Lør, Jun 1">1</a></td>
                              <td><a href="javascript:void(0)"
                                     class="dp1370145600000  datepick-selected  datepick-weekend"
                                     title="Vælg Søn, Jun 2">2</a></td>
                            </tr>
                            <tr>
                              <td><a href="javascript:void(0)" class="dp1370232000000  datepick-selected"
                                     title="Vælg Man, Jun 3">3</a></td>
                              <td><a href="javascript:void(0)" class="dp1370318400000  datepick-selected"
                                     title="Vælg Tir, Jun 4">4</a></td>
                              <td><a href="javascript:void(0)" class="dp1370404800000  datepick-selected"
                                     title="Vælg Ons, Jun 5">5</a></td>
                              <td><a href="javascript:void(0)" class="dp1370491200000  datepick-selected"
                                     title="Vælg Tor, Jun 6">6</a></td>
                              <td><a href="javascript:void(0)" class="dp1370577600000  datepick-selected"
                                     title="Vælg Fre, Jun 7">7</a></td>
                              <td><a href="javascript:void(0)"
                                     class="dp1370664000000  datepick-selected  datepick-weekend"
                                     title="Vælg Lør, Jun 8">8</a></td>
                              <td><a href="javascript:void(0)"
                                     class="dp1370750400000  datepick-selected  datepick-weekend"
                                     title="Vælg Søn, Jun 9">9</a></td>
                            </tr>
                            <tr>
                              <td><a href="javascript:void(0)" class="dp1370836800000  datepick-selected"
                                     title="Vælg Man, Jun 10">10</a></td>
                              <td><a href="javascript:void(0)" class="dp1370923200000  datepick-selected"
                                     title="Vælg Tir, Jun 11">11</a></td>
                              <td><a href="javascript:void(0)" class="dp1371009600000  datepick-selected"
                                     title="Vælg Ons, Jun 12">12</a></td>
                              <td><a href="javascript:void(0)" class="dp1371096000000  datepick-selected"
                                     title="Vælg Tor, Jun 13">13</a></td>
                              <td><a href="javascript:void(0)" class="dp1371182400000  datepick-selected"
                                     title="Vælg Fre, Jun 14">14</a></td>
                              <td><a href="javascript:void(0)"
                                     class="dp1371268800000  datepick-selected  datepick-weekend"
                                     title="Vælg Lør, Jun 15">15</a></td>
                              <td><a href="javascript:void(0)"
                                     class="dp1371355200000  datepick-selected  datepick-weekend"
                                     title="Vælg Søn, Jun 16">16</a></td>
                            </tr>
                            <tr>
                              <td><a href="javascript:void(0)" class="dp1371441600000  datepick-selected"
                                     title="Vælg Man, Jun 17">17</a></td>
                              <td><a href="javascript:void(0)" class="dp1371528000000  datepick-selected"
                                     title="Vælg Tir, Jun 18">18</a></td>
                              <td><a href="javascript:void(0)" class="dp1371614400000  datepick-selected"
                                     title="Vælg Ons, Jun 19">19</a></td>
                              <td><a href="javascript:void(0)" class="dp1371700800000  datepick-selected"
                                     title="Vælg Tor, Jun 20">20</a></td>
                              <td><a href="javascript:void(0)" class="dp1371787200000  datepick-selected"
                                     title="Vælg Fre, Jun 21">21</a></td>
                              <td><a href="javascript:void(0)"
                                     class="dp1371873600000  datepick-selected  datepick-weekend"
                                     title="Vælg Lør, Jun 22">22</a></td>
                              <td><a href="javascript:void(0)"
                                     class="dp1371960000000  datepick-selected  datepick-weekend"
                                     title="Vælg Søn, Jun 23">23</a></td>
                            </tr>
                            <tr>
                              <td><a href="javascript:void(0)" class="dp1372046400000  datepick-selected"
                                     title="Vælg Man, Jun 24">24</a></td>
                              <td><a href="javascript:void(0)" class="dp1372132800000  datepick-selected"
                                     title="Vælg Tir, Jun 25">25</a></td>
                              <td><a href="javascript:void(0)" class="dp1372219200000  datepick-selected"
                                     title="Vælg Ons, Jun 26">26</a></td>
                              <td><a href="javascript:void(0)" class="dp1372305600000  datepick-selected"
                                     title="Vælg Tor, Jun 27">27</a></td>
                              <td><a href="javascript:void(0)" class="dp1372392000000  datepick-selected"
                                     title="Vælg Fre, Jun 28">28</a></td>
                              <td><a href="javascript:void(0)"
                                     class="dp1372478400000  datepick-selected  datepick-weekend"
                                     title="Vælg Lør, Jun 29">29</a></td>
                              <td><a href="javascript:void(0)"
                                     class="dp1372564800000  datepick-selected  datepick-weekend"
                                     title="Vælg Søn, Jun 30">30</a></td>
                            </tr>
                            <tr>
                              <td><span class="dp1372651200000  datepick-other-month">&nbsp;</span></td>
                              <td><span class="dp1372737600000  datepick-other-month">&nbsp;</span></td>
                              <td><span class="dp1372824000000  datepick-other-month">&nbsp;</span></td>
                              <td><span class="dp1372910400000  datepick-other-month">&nbsp;</span></td>
                              <td><span class="dp1372996800000  datepick-other-month">&nbsp;</span></td>
                              <td><span class="dp1373083200000  datepick-weekend datepick-other-month">&nbsp;</span>
                              </td>
                              <td><span class="dp1373169600000  datepick-weekend datepick-other-month">&nbsp;</span>
                              </td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                        <div class="datepick-month last">
                          <div class="datepick-month-header">
                            Juli 2013
                            <a href="javascript:void(0)" title="Vis næste måned"
                               class="datepick-cmd datepick-cmd-next ">Næste&gt;</a>
                          </div>
                          <table>
                            <thead>
                            <tr>
                              <th><span class="datepick-dow-1" title="Mandag">Ma</span></th>
                              <th><span class="datepick-dow-2" title="Tirsdag">Ti</span></th>
                              <th><span class="datepick-dow-3" title="Onsdag">On</span></th>
                              <th><span class="datepick-dow-4" title="Torsdag">To</span></th>
                              <th><span class="datepick-dow-5" title="Fredag">Fr</span></th>
                              <th><span class="datepick-dow-6" title="Lørdag">Lø</span></th>
                              <th><span class="datepick-dow-0" title="Søndag">Sø</span></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                              <td><span class="dp1372046400000  datepick-other-month">&nbsp;</span></td>
                              <td><span class="dp1372132800000  datepick-other-month">&nbsp;</span></td>
                              <td><span class="dp1372219200000  datepick-other-month">&nbsp;</span></td>
                              <td><span class="dp1372305600000  datepick-other-month">&nbsp;</span></td>
                              <td><span class="dp1372392000000  datepick-other-month">&nbsp;</span></td>
                              <td><span class="dp1372478400000  datepick-weekend datepick-other-month">&nbsp;</span>
                              </td>
                              <td><span class="dp1372564800000  datepick-weekend datepick-other-month">&nbsp;</span>
                              </td>
                            </tr>
                            <tr>
                              <td><a href="javascript:void(0)" class="dp1372651200000  datepick-selected"
                                     title="Vælg Man, Jul 1">1</a></td>
                              <td><a href="javascript:void(0)" class="dp1372737600000  datepick-selected"
                                     title="Vælg Tir, Jul 2">2</a></td>
                              <td><a href="javascript:void(0)" class="dp1372824000000  datepick-selected"
                                     title="Vælg Ons, Jul 3">3</a></td>
                              <td><a href="javascript:void(0)" class="dp1372910400000  datepick-selected"
                                     title="Vælg Tor, Jul 4">4</a></td>
                              <td><a href="javascript:void(0)" class="dp1372996800000  datepick-selected"
                                     title="Vælg Fre, Jul 5">5</a></td>
                              <td><a href="javascript:void(0)"
                                     class="dp1373083200000  datepick-selected  datepick-weekend"
                                     title="Vælg Lør, Jul 6">6</a></td>
                              <td><a href="javascript:void(0)"
                                     class="dp1373169600000  datepick-selected  datepick-weekend"
                                     title="Vælg Søn, Jul 7">7</a></td>
                            </tr>
                            <tr>
                              <td><a href="javascript:void(0)" class="dp1373256000000  datepick-selected"
                                     title="Vælg Man, Jul 8">8</a></td>
                              <td><a href="javascript:void(0)" class="dp1373342400000  datepick-selected"
                                     title="Vælg Tir, Jul 9">9</a></td>
                              <td><a href="javascript:void(0)" class="dp1373428800000  datepick-selected"
                                     title="Vælg Ons, Jul 10">10</a></td>
                              <td><a href="javascript:void(0)" class="dp1373515200000  datepick-selected"
                                     title="Vælg Tor, Jul 11">11</a></td>
                              <td><a href="javascript:void(0)" class="dp1373601600000  datepick-selected"
                                     title="Vælg Fre, Jul 12">12</a></td>
                              <td><a href="javascript:void(0)"
                                     class="dp1373688000000  datepick-selected  datepick-weekend"
                                     title="Vælg Lør, Jul 13">13</a></td>
                              <td><a href="javascript:void(0)"
                                     class="dp1373774400000  datepick-selected  datepick-weekend"
                                     title="Vælg Søn, Jul 14">14</a></td>
                            </tr>
                            <tr>
                              <td><a href="javascript:void(0)" class="dp1373860800000  datepick-selected"
                                     title="Vælg Man, Jul 15">15</a></td>
                              <td><a href="javascript:void(0)" class="dp1373947200000  datepick-selected"
                                     title="Vælg Tir, Jul 16">16</a></td>
                              <td><a href="javascript:void(0)" class="dp1374033600000  datepick-selected"
                                     title="Vælg Ons, Jul 17">17</a></td>
                              <td><a href="javascript:void(0)" class="dp1374120000000  datepick-selected"
                                     title="Vælg Tor, Jul 18">18</a></td>
                              <td><a href="javascript:void(0)" class="dp1374206400000  datepick-selected"
                                     title="Vælg Fre, Jul 19">19</a></td>
                              <td><a href="javascript:void(0)"
                                     class="dp1374292800000  datepick-selected  datepick-weekend"
                                     title="Vælg Lør, Jul 20">20</a></td>
                              <td><a href="javascript:void(0)"
                                     class="dp1374379200000  datepick-selected  datepick-weekend"
                                     title="Vælg Søn, Jul 21">21</a></td>
                            </tr>
                            <tr>
                              <td><a href="javascript:void(0)" class="dp1374465600000  datepick-selected"
                                     title="Vælg Man, Jul 22">22</a></td>
                              <td><a href="javascript:void(0)" class="dp1374552000000  datepick-selected"
                                     title="Vælg Tir, Jul 23">23</a></td>
                              <td><a href="javascript:void(0)" class="dp1374638400000  datepick-selected"
                                     title="Vælg Ons, Jul 24">24</a></td>
                              <td><a href="javascript:void(0)" class="dp1374724800000  datepick-selected"
                                     title="Vælg Tor, Jul 25">25</a></td>
                              <td><a href="javascript:void(0)" class="dp1374811200000  datepick-selected"
                                     title="Vælg Fre, Jul 26">26</a></td>
                              <td><a href="javascript:void(0)"
                                     class="dp1374897600000  datepick-selected  datepick-weekend"
                                     title="Vælg Lør, Jul 27">27</a></td>
                              <td><a href="javascript:void(0)"
                                     class="dp1374984000000  datepick-selected  datepick-weekend"
                                     title="Vælg Søn, Jul 28">28</a></td>
                            </tr>
                            <tr>
                              <td><a href="javascript:void(0)" class="dp1375070400000  datepick-selected"
                                     title="Vælg Man, Jul 29">29</a></td>
                              <td><a href="javascript:void(0)" class="dp1375156800000  datepick-selected"
                                     title="Vælg Tir, Jul 30">30</a></td>
                              <td><a href="javascript:void(0)" class="dp1375243200000  datepick-selected"
                                     title="Vælg Ons, Jul 31">31</a></td>
                              <td><span class="dp1375329600000  datepick-other-month">&nbsp;</span></td>
                              <td><span class="dp1375416000000  datepick-other-month">&nbsp;</span></td>
                              <td><span class="dp1375502400000  datepick-weekend datepick-other-month">&nbsp;</span>
                              </td>
                              <td><span class="dp1375588800000  datepick-weekend datepick-other-month">&nbsp;</span>
                              </td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div class="datepick-time-row">
                        <div class="datepick-time first">
                          <div class="datepick-time-content">
                            <!-- component:select -->
                            <div data-module="form.select" class="form-select form-select--small form-item--inline">
                              <select id="select1">
                                <option value="opt1" selected="">00</option>
                                <option value="opt2">00</option>
                                <option value="opt3">00</option>
                              </select>
                              <div class="form-select__field">00</div>
                            </div>
                            <!-- component:select -->
                            <!-- component:select -->
                            <div data-module="form.select" class="form-select form-select--small form-item--inline">
                              <select id="select1">
                                <option value="opt1" selected="">00</option>
                                <option value="opt2">00</option>
                                <option value="opt3">00</option>
                              </select>
                              <div class="form-select__field">00</div>
                            </div>
                            <!-- component:select -->
                            <!-- component:select -->
                            <div data-module="form.select" class="form-select form-select--small form-item--inline">
                              <select id="select1">
                                <option value="opt1" selected="">00</option>
                                <option value="opt2">00</option>
                                <option value="opt3">00</option>
                              </select>
                              <div class="form-select__field">00</div>
                            </div>
                            <!-- component:select -->
                          </div>
                        </div>
                        <div class="datepick-time last">
                          <div class="datepick-time-content">
                            <!-- component:select -->
                            <div data-module="form.select" class="form-select form-select--small form-item--inline">
                              <select id="select1">
                                <option value="opt1" selected="">00</option>
                                <option value="opt2">00</option>
                                <option value="opt3">00</option>
                              </select>
                              <div class="form-select__field">00</div>
                            </div>
                            <!-- component:select -->
                            <!-- component:select -->
                            <div data-module="form.select" class="form-select form-select--small form-item--inline">
                              <select id="select1">
                                <option value="opt1" selected="">00</option>
                                <option value="opt2">00</option>
                                <option value="opt3">00</option>
                              </select>
                              <div class="form-select__field">00</div>
                            </div>
                            <!-- component:select -->
                            <!-- component:select -->
                            <div data-module="form.select" class="form-select form-select--small form-item--inline">
                              <select id="select1">
                                <option value="opt1" selected="">00</option>
                                <option value="opt2">00</option>
                                <option value="opt3">00</option>
                              </select>
                              <div class="form-select__field">00</div>
                            </div>
                            <!-- component:select -->
                          </div>
                        </div>
                      </div>
                      <div class="datepick-ctrl">
                        <button class="button button--action button--small button--stretch">Anvend</button>
                        <a href="javascript:void(0)" title="Nulstil den aktuelle dato"
                           class="datepick-cmd datepick-cmd-clear ">Nulstil</a>
                      </div>
                      <div class="datepick-clear-fix"></div>
                    </div>
                  </div>
                  <!-- component:daterange:end -->
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="sg-component__label">Accordion multi filter</div>
              <div class="block--filter box--greyed">
                <div class="demo_content">
                  <div class="multi-filter form-item--inline form-item--small" id="example-table-multi-filter-2"
                       data-module="table.multifilter" data-target="#example-table"
                       data-source="#example-table-accordion-filter" data-target-column="6">
                    <a href="#nogo" class="multi-filter__input  color-gray" tabindex="1">
                      <div class="multi-filter__input-label text-truncate">
                        <strong>Show only:</strong>
                        <span class="multi-filter__selected-label">null</span>
                      </div>
                    </a>
                    <button type="button" class="no-js--hidden form-item__clear-button" data-list-clear="">
                      <span class="aria--visible">Clear filter</span>
                    </button>
                    <div class="speach-bubble is-loaded" id="type-filter-accordion-2">
                      <div class="speach-bubble__top-bar ">
                        Select types
                      </div>
                      <div class="speach-bubble__content">
                        <div class="accordion-filter " data-module="accordion.filter"
                             id="example-table-accordion-filter-2" data-label-all-selected="Show all"
                             data-label-postselected-plural=" types" data-label-preselected-plural="">
                          <ul>
                            <li class="accordion-filter__parent-item form-checkbox" role="checkbox" aria-checked="false"
                                data-state="non-selected">
                              <a class="accordion-filter__parent-item-toggle" tabindex="1" href="#nogo">
                                <label>Messages
                                  <span class="count">(5)</span>
                                </label>
                              </a>
                              <a href="#nogo" tabindex="1"
                                 class="accordion-filter__parent-item-expand icon icon-arrow-down"></a>
                              <ul class="accordion-filter__parent-item-list">
                                <li class="accordion-filter__leaf-item form-checkbox">
                                  <input id="1-sg-tf" type="checkbox" tabindex="1" role="checkbox" aria-checked="">
                                  <label for="1-sg-tf">SMS
                                    <span class="count">(1)</span>
                                  </label>
                                </li>
                                <li class="accordion-filter__leaf-item form-checkbox">
                                  <input id="6-sg-tf" type="checkbox" tabindex="1" role="checkbox" aria-checked="">
                                  <label for="6-sg-tf">Roaming MMS
                                    <span class="count">(4)</span>
                                  </label>
                                </li>
                              </ul>
                            </li>
                            <li class="accordion-filter__leaf-item accordion-filter__leaf-parent-item form-checkbox">
                              <input id="12-sg-tf" type="checkbox" tabindex="1" role="checkbox" aria-checked="">
                              <label for="12-sg-tf">Roaming 3G
                                <span class="count">(3)</span>
                              </label>
                            </li>
                            <li class="accordion-filter__leaf-item accordion-filter__leaf-parent-item form-checkbox">
                              <input id="9-sg-tf" type="checkbox" tabindex="1" role="checkbox" aria-checked="">
                              <label for="9-sg-tf">Roaming call
                                <span class="count">(3)</span>
                              </label>
                            </li>
                            <li class="accordion-filter__parent-item form-checkbox is-expanded" role="checkbox"
                                aria-checked="false" data-state="non-selected" style="height: 120px;">
                              <a class="accordion-filter__parent-item-toggle" tabindex="1" href="#nogo">
                                <label>Messages
                                  <span class="count">(5)</span>
                                </label>
                              </a>
                              <a href="#nogo" tabindex="1"
                                 class="accordion-filter__parent-item-expand icon icon-arrow-down"></a>
                              <ul class="accordion-filter__parent-item-list">
                                <li class="accordion-filter__leaf-item form-checkbox">
                                  <input id="1234-sg-tf" type="checkbox" tabindex="1" role="checkbox" aria-checked="">
                                  <label for="1234-sg-tf">SMS
                                    <span class="count">(1)</span>
                                  </label>
                                </li>
                                <li class="accordion-filter__leaf-item form-checkbox">
                                  <input id="62342-sg-tf" type="checkbox" tabindex="1" role="checkbox" aria-checked="">
                                  <label for="62342-sg-tf">Roaming MMS
                                    <span class="count">(4)</span>
                                  </label>
                                </li>
                              </ul>
                            </li>
                            <li class="accordion-filter__parent-item form-checkbox is-expanded" role="checkbox"
                                aria-checked="false" data-state="non-selected" style="height: 120px;">
                              <a class="accordion-filter__parent-item-toggle" tabindex="1" href="#nogo">
                                <label>Messages
                                  <span class="count">(5)</span>
                                </label>
                              </a>
                              <a href="#nogo" tabindex="1"
                                 class="accordion-filter__parent-item-expand icon icon-arrow-down"></a>
                              <ul class="accordion-filter__parent-item-list">
                                <li class="accordion-filter__leaf-item form-checkbox">
                                  <input id="1234234-sg-tf" type="checkbox" tabindex="1" role="checkbox"
                                         aria-checked="">
                                  <label for="1234234-sg-tf">SMS
                                    <span class="count">(1)</span>
                                  </label>
                                </li>
                                <li class="accordion-filter__leaf-item form-checkbox">
                                  <input id="62342234-sg-tf" type="checkbox" tabindex="1" role="checkbox"
                                         aria-checked="">
                                  <label for="62342234-sg-tf">Roaming MMS
                                    <span class="count">(4)</span>
                                  </label>
                                </li>
                              </ul>
                            </li>
                            <li class="accordion-filter__leaf-item accordion-filter__leaf-parent-item form-checkbox">
                              <input id="8-sg-tf" type="checkbox" tabindex="1" role="checkbox" aria-checked="">
                              <label for="8-sg-tf">Local call
                                <span class="count">(3)</span>
                              </label>
                            </li>
                            <li class="accordion-filter__leaf-item accordion-filter__leaf-parent-item form-checkbox">
                              <input id="7-sg-tf" type="checkbox" tabindex="1" role="checkbox" aria-checked="">
                              <label for="7-sg-tf">Voice call
                                <span class="count">(3)</span>
                              </label>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="box--greyed multi-filter__submit-panel">
                        <button type="button" class="button button--action button--small" tabindex="1">Update filter
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="grid-row">
            <div class="col-md-6">
              <div class="sg-component__label">Column filter</div>
              <div class="block--filter box--greyed">
                <div class="demo_content">
                  <div class="form-item--inline csstransforms">
                    <button id="column-filter-sb" class="button button--default button--small button--column-filter">
                      <span class="icon icon--only icon-list"></span>
                      <span class="icon icon--only icon-arrow-down"></span>
                    </button>
                    <div class="speach-bubble is-loaded" data-module="speach.bubble"
                         data-toggle-target="column-filter-sb" style="top: 115px; left: 20px;">
                      <div class="speach-bubble__top-bar ">
                        Select columns
                        <button type="button" class="no-js--hidden icon-reject speach-bubble__close">
                          <span class="aria--visible">Close</span>
                        </button>
                      </div>
                      <div class="speach-bubble__content">
                        <div class="accordion-filter " data-module="accordion.filter" id="column-filter-1">
                          <ul>
                            <li class="accordion-filter__leaf-item accordion-filter__leaf-parent-item form-checkbox">
                              <input id="price" type="checkbox" tabindex="1" role="checkbox" aria-checked="true"
                                     checked="checked">
                              <label for="price">Price</label>
                            </li>
                            <li class="accordion-filter__leaf-item accordion-filter__leaf-parent-item form-checkbox">
                              <input id="amount" type="checkbox" tabindex="1" role="checkbox" aria-checked="true"
                                     checked="checked">
                              <label for="amount">Amount</label>
                            </li>
                            <li class="accordion-filter__leaf-item accordion-filter__leaf-parent-item form-checkbox">
                              <input id="phone-number" type="checkbox" tabindex="1" role="checkbox" aria-checked="">
                              <label for="phone-number">Phone number</label>
                            </li>
                            <li class="accordion-filter__leaf-item accordion-filter__leaf-parent-item form-checkbox">
                              <input id="mb-usage" type="checkbox" tabindex="1" role="checkbox" aria-checked="true"
                                     checked="checked">
                              <label for="mb-usage">MB Usage</label>
                            </li>
                            <li class="accordion-filter__leaf-item accordion-filter__leaf-parent-item form-checkbox">
                              <input id="price" type="checkbox" tabindex="1" role="checkbox" aria-checked="true"
                                     checked="checked">
                              <label for="price">Price</label>
                            </li>
                            <li class="accordion-filter__leaf-item accordion-filter__leaf-parent-item form-checkbox">
                              <input id="amount" type="checkbox" tabindex="1" role="checkbox" aria-checked="true"
                                     checked="checked">
                              <label for="amount">Amount</label>
                            </li>
                            <li class="accordion-filter__leaf-item accordion-filter__leaf-parent-item form-checkbox">
                              <input id="phone-number" type="checkbox" tabindex="1" role="checkbox" aria-checked="">
                              <label for="phone-number">Phone number</label>
                            </li>
                            <li class="accordion-filter__leaf-item accordion-filter__leaf-parent-item form-checkbox">
                              <input id="mb-usage" type="checkbox" tabindex="1" role="checkbox" aria-checked="true"
                                     checked="checked">
                              <label for="mb-usage">MB Usage</label>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="box--greyed multi-filter__submit-panel">
                        <button type="button" class="button button--action button--small" tabindex="1">Update table
                        </button>
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
