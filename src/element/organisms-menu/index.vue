<template>
  <div>
    <div class="trailer--large">
      <div class="text-size--36 trailer--section title__color text--telenor-light">Menu</div>
    </div>
    <div class="doc-compontent-box" id="menu">
      <div class="sg-component">
        <div class="sg-component__header">
          <h2 class="title--medium-small trailer--small">menu</h2>
        </div>
        <div class="sg-component__status">
        </div>
        <div class="sg-component__markup sg-component__markup--overflow">
          <div class="demo_content" style="position:relative;height:500px; overflow:hidden;">
            <!-- 手机端菜单滑出时 增加 offcanvas--open -->
            <div class="offcanvas">
              <!-- 手机端菜单滑出时 增加 is-disabled -->
              <div class="section--oncanvas">
                <!--nav-->
                <nav class="menu-wrapper">
                  <!--desktop:menu-->
                  <div class="section mobile-hidden">
                    <div class="container section--menu">
                      <!--<a href="#nogo" class="link&#45;&#45;logo float&#45;&#45;left" title="home">
                          <span class="link&#45;&#45;text">Home</span>
                      </a>-->
                      <ul class="menu--main">
                        <li><a href="#">link1</a></li>
                        <li><a href="#">link2</a></li>
                        <li><a href="#">link3</a></li>
                        <li><a href="#">link4</a></li>
                      </ul>
                      <!--<div class="section&#45;&#45;menu__service">
                          <div class="menu&#45;&#45;service">
                              <a href="#nogo" class="active-trail">Privat</a>
                              <a href="#nogo">Erhverv</a>
                          </div>
                          <div class="menu&#45;&#45;user">
                              <a href="#nogo">Log ind</a>
                          </div>
                      </div>-->
                      <!--<div class="menu&#45;&#45;right float&#45;&#45;right">
                          <div class="menu&#45;&#45;right__basket">
                              <a href="#nogo" class="basket-icon">
                                  <span class="icon icon-basket text-size&#45;&#45;24"></span>
                              </a>
                          </div>
                          <div class="menu&#45;&#45;right__search">
                              <div class="search-block&#45;&#45;top">
                                  &lt;!&ndash; 增加 search-block&#45;&#45;active 激活搜索 &ndash;&gt;
                                  <div class="search-block container search-block&#45;&#45;last-page search-block&#45;&#45;input-empty">
                                      &lt;!&ndash;form-search&ndash;&gt;
                                      <div class="form-search">
                                          <button class="search-block__submit form-search__submit" tabindex="-1"
                                                  data-component="button" data-alias="submit">
                                              <span class="icon-search"></span>
                                          </button>
                                          <div class="search-block__type-area">
                                              <input class="search-block__input" placeholder="Indtast søgeord"
                                                     type="search" data-alias="searchInput" data-selector="input"
                                                     data-component="element">
                                              <button type="button" tabindex="-1"
                                                      class="search-block__clear form-search__clear no-js&#45;&#45;hidden icon-remove"
                                                      data-component="button" data-alias="clear"></button>
                                          </div>
                                      </div>
                                      &lt;!&ndash;/form-search&ndash;&gt;
                                      &lt;!&ndash;search-block__success&ndash;&gt;
                                      <div class="search-block__dropdown search-block__success">
                                          <h2 class="search-block__title text-size&#45;&#45;30 mobile-text-size&#45;&#45;13 text-light trailer">
                                              Din søgning på "
                                              <span class="search-query">112区人</span>
                                              " gav
                                              <span class="search-block__total"></span>
                                              resultater
                                          </h2>

                                          <div class="filter&#45;&#45;container box&#45;&#45;greyed search-block__message"></div>
                                          <div class="search-block__results">
                                              <div></div>
                                              <div class="search-block__more">
                                                  <div class="search-block__view-all clear">
                                                      <a href="#" class="button button&#45;&#45;action float&#45;&#45;right">
                                                          <span class="button__label">Vis alle resultater</span>
                                                      </a>
                                                  </div>
                                                  <div class="search-block__load-more">
                                                      <a class="button button&#45;&#45;default float&#45;&#45;right">
                                                          <span class="button__label">Vis flere resultater</span>
                                                      </a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      &lt;!&ndash;/search-block__success&ndash;&gt;
                                      &lt;!&ndash;search-block__fail&ndash;&gt;
                                      <div class="search-block__dropdown search-block__fail">
                                          <div class="padding-whole&#45;&#45;med box&#45;&#45;greyed search-block__message text-size&#45;&#45;13">
                                              <p>Din søgning på “
                                                  <strong class="search-query">112区人</strong>”
                                                  giver ingen resultater
                                              </p>
                                          </div>
                                          <div class="search-block__results clear">
                                              <p class="text-size&#45;&#45;30 mobile-text-size&#45;&#45;24 text-light leader&#45;&#45;med search-block__suggestion border&#45;&#45;bottom padding-trailer js-hidden"
                                                      >
                                                  Mente du
                                                  <a id="site-search-suggestion" href="#" data-component="button"
                                                     data-alias="searchSuggestion"></a>
                                                  ?
                                              </p>

                                              <div>
                                                  <div class="padding-leader&#45;&#45;med text-size&#45;&#45;13">
                                                      <p><strong>Populære søgninger:</strong></p>
                                                      <ul class="list leader&#45;&#45;small">
                                                          <li><a href="#" class="bullet-link"></a></li>
                                                      </ul>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      &lt;!&ndash;/search-block__fail&ndash;&gt;
                                  </div>
                              </div>
                          </div>
                      </div>-->
                    </div>
                  </div>
                  <!--/desktop:menu-->
                  <!--subnav menu -->
                  <div id="menu--subnav-sticky-wrapper" class="mobile-hidden menu-subnav-sticky-wrapper">

                    <div class="section section--subnav mobile-hidden">
                      <div class="container">
                        <!--<div><a href="#nogo" class="link&#45;&#45;logo float&#45;&#45;left"></a></div>-->

                        <ul class="menu--subnav menu--flexnav flexnav--inited flexnav--active">
                          <li>
                            <a href="#nogo">subLink1</a>
                          </li>
                          <li>
                            <a href="#nogo">subLink2</a>
                          </li>
                          <li>
                            <a href="#nogo">subLink3</a>
                          </li>
                          <li>
                            <a href="#nogo">subLink4</a>
                          </li>
                          <li>
                            <a href="#nogo">subLink5</a>
                          </li>
                          <li>
                            <a href="#nogo">subLink6</a>
                          </li>
                          <li>
                            <a href="#nogo">subLink7</a>
                          </li>
                          <li>
                            <a href="#nogo">subLink8</a>
                          </li>
                          <li class="flexnav">
                            <a class="flexnav__toggler">More</a>
                            <ul class="flexnav__subnav">
                              <li>
                                <a href="#">moreLink1</a>
                              </li>
                              <li>
                                <a href="#">moreLink2</a>
                              </li>
                              <li>
                                <a href="#">moreLink3</a>
                              </li>
                              <li>
                                <a href="#">moreLink4</a>
                              </li>
                            </ul>
                          </li>
                        </ul>

                      </div>
                    </div>
                  </div>
                  <!--/subnav menu -->
                  <!--Mobile menu -->
                  <div class="nav-mobile desktop-hidden" role="navigation">
                    <div class="nav-mobile__container">
                      <!--<a class="logo" href="/" rel="home" title="home"><span>Views.Root.Home</span></a>-->
                      <ul>
                        <li>
                          <a href="javascript:;">
                            <span class="icon--text">Menu</span>
                            <span class="icon icon-hamburger-menu nav-mobile__icon"
                                  aria-hidden="true"></span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!--/Mobile menu -->
                </nav>
                <!--/nav-->
              </div>
              <!--side-panel-->
              <div class="side-panel">
                <!--nav-panel-->
                <div class="nav-panel">
                  <ul class="nav-mobile__tabset">
                    <li class="tabpanel__tab is-active">
                      <a href="javascript:;">link1</a>
                    </li>
                    <li class="tabpanel__tab">
                      <a href="javascript:;">link2</a>
                    </li>
                    <li class="tabpanel__tab flexnav" role="presentation" style="display: none;">
                      <a href="#" class="tabpanel__link flexnav__toggler" role="tab">Mere</a>
                      <ul class="flexnav__subnav">
                        <li class="tabpanel__tab flexnav--active-tab flexnav--invisible">
                          <a href="#">link1</a>
                        </li>
                        <li class="tabpanel__tab flexnav--invisible flexnav--active-tab">
                          <a href="#">link2</a>
                        </li>
                      </ul>
                    </li>
                  </ul>

                  <!-- <form class="nav-mobile__search clear">
                       <input type="text" class="nav-mobile__search__text" placeholder="Søg" name="iq">
                       <button class="nav-mobile__search__button icon-search"></button>
                   </form>-->

                  <div class="nav-mobile__tab-holder tabpanel__panels">
                    <ul class="nav-mobile__accordion tabs__panel tabpanel__panel is-active">
                      <li>
                        <a href="#nogo">subLink1</a>
                        <span class="icon-arrow-next collapsed"></span>
                        <ul class="nav-mobile__accordion__drop nav-mobile__submenu__privat_shop js-hidden">
                          <li>
                            <a href="#nogo">Mobile</a>
                          </li>
                          <li>
                            <a href="#nogo">Mobile</a>
                          </li>
                          <li>
                            <a href="#nogo">Mobile</a>
                          </li>

                          <li>
                            <a href="#nogo">Mobile</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#nogo">subLink2</a>
                        <span class="icon-arrow-next collapsed"></span>
                        <ul class="nav-mobile__accordion__drop nav-mobile__submenu__privat_shop js-hidden">
                          <li>
                            <a href="#nogo">Mobile</a>
                          </li>
                          <li>
                            <a href="#nogo">Mobile</a>
                          </li>
                          <li>
                            <a href="#nogo">Mobile</a>
                          </li>

                          <li>
                            <a href="#nogo">Mobile</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#nogo">subLink3</a>
                      </li>
                      <li>
                        <a href="#nogo">subLink4</a>
                      </li>
                    </ul>
                    <ul class="nav-mobile__accordion tabs__panel tabpanel__panel js-hidden">
                      <li>
                        <a href="#nogo">subLink1</a>
                        <span class="icon-arrow-next collapsed"></span>
                        <ul class="nav-mobile__accordion__drop nav-mobile__submenu__privat_shop js-hidden">
                          <li>
                            <a href="#nogo">Mobile</a>
                          </li>
                          <li>
                            <a href="#nogo">Mobile</a>
                          </li>
                          <li>
                            <a href="#nogo">Mobile</a>
                          </li>

                          <li>
                            <a href="#nogo">Mobile</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#nogo">subLink2</a>
                        <span class="icon-arrow-next collapsed"></span>
                        <ul class="nav-mobile__accordion__drop nav-mobile__submenu__privat_shop js-hidden">
                          <li>
                            <a href="#nogo">Mobile</a>
                          </li>
                          <li>
                            <a href="#nogo">Mobile</a>
                          </li>
                          <li>
                            <a href="#nogo">Mobile</a>
                          </li>

                          <li>
                            <a href="#nogo">Mobile</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#nogo">subLink3</a>
                      </li>
                      <li>
                        <a href="#nogo">subLink4</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <!--/nav-panel-->
              </div>
              <!--side-panel-->
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
