<template>
  <div>
    <div class="block__header leader--large trailer--large">
      <h2 class="title--medium">Selfcare</h2>
    </div>
    <div class="doc-compontent-box" id="self-care-history-timeline-filter">
      <div class="sg-component">
        <div class="sg-component__header">
          <h2 class="title--medium-small trailer--small">Self care history timeline filter</h2>
        </div>
        <div class="sg-component__status">
        </div>
        <div class="sg-component__markup">
          <div class="demo_content">
            <!-- : timeline filter -->
            <div class="text--center">
              <ul class="clear text--small timeline__filter">
                <li><a class="is-active" href="#"><span class="icon-lightbulb"></span>All</a></li>
                <li><a href="#"><span class="icon-phone"></span>Billing</a> </li>
                <li><a href="#"><span class="icon-plus"></span>Support</a> </li>
                <li><a href="#"><span class="icon-search"></span>Purchases</a> </li>
                <li><a href="#"><span class="icon-star"></span>Search</a> </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="doc-compontent-box" id="selfcare-timeline">
      <div class="sg-component">
        <div class="sg-component__header">
          <h2 class="title--medium-small trailer--small">Timeline item</h2>
        </div>
        <div class="sg-component__status">
        </div>
        <div class="sg-component__markup">
          <div class="demo_content">
            <ul class="timeline">
              <li>
                <!-- : Timeline item -->
                <article class="block timeline__item">
                  <div class="timeline__item__icon">
                    <span class="icon-lightbulb"></span>
                  </div>
                  <header class="trailer">
                    <div class="text--small text--muted trailer split">
                      <div>06.11 2013</div>
                      <div class="status-dot status-dot--small status-dot--green">Status: Open</div>
                    </div>
                    <h3 class="title-size--19 trailing-border trailer--small">Support ticket: #456123</h3>
                    <div class="text--small text--muted text--muted">Period: 15.02 2014 - 15.03 2014</div>
                  </header>
                  <div class="trailer padding-trailer trailing-border">
                    <strong>My iPhone does not work</strong>
                    <p>The way I want it lorem ipsum non temporalies estus donec non leo quis velit aliquet hendrerit. Pellentesque commodo ac leo at elementum.</p>
                  </div>
                  <footer>
                    <div class="grid-row">
                      <div class="text--small text--muted trailer--small col-xs-12 col-sm-12 col-md-9">
                        <div>Creator: Hans Hansen</div>
                        <div>ID: iPhone 5s</div>
                      </div>
                      <div class="col-xs-12 col-sm-12 col-md-3">
                        <a class="button button--action button--stretch" href="#">Details</a>
                      </div>
                    </div>
                  </footer>
                </article>
              </li>
              <li>
                <!-- : Timeline item -->
                <article class="block timeline__item">
                  <div class="timeline__item__icon">
                    <span class="icon-lightbulb"></span>
                  </div>
                  <header class="trailer">
                    <div class="text--small text--muted trailer split">
                      <div>06.11 2013</div>
                      <div class="status-dot status-dot--small status-dot--red">Status: Unpaid</div>
                    </div>
                    <h3 class="title-size--19 trailing-border trailer--small">Invoice: #123456</h3>
                    <div class="text--small text--muted text--muted">Period: 15.02 2014 - 15.03 2014</div>
                  </header>
                  <div class="trailer padding-trailer trailing-border">
                    <strong>Includes</strong>
                    <ul class="list list--check">
                      <li>Fri +1GB (60 50 42 44)</li>
                      <li>Fri +1GB (60 50 42 42)</li>
                      <li>WiMP (john@schuster.com)</li>
                      <li>… and 8 items more</li>
                    </ul>
                    <div class="text--large leading-border padding-leader leader clear">
                      <div class="desk-two-thirds trailer--small desk-no-trailer">Total amount due, incl VAT</div>
                      <div class="desk-one-third desk-pull-right desk-text-right">367,50 kr.</div>
                    </div>
                  </div>
                  <footer>
                    <div class="grid-row">
                      <div class="text--small text--muted trailer--small col-xs-12 col-sm-12 col-md-9">
                        <div>Account no: 123456</div>
                        <div>Payment: Automatically via BetalingsService on March 20, 2014</div>
                      </div>
                      <div class="col-xs-12 col-sm-12 col-md-3">
                        <a class="button button--action button--stretch" href="#">Details</a>
                      </div>
                    </div>

                  </footer>
                </article>
              </li>
              <li>
                <!-- : Timeline item -->
                <strong class="timeline__item__update title-size--19">You have a new update from Telenor</strong>
                <article class="block timeline__item">
                  <div class="timeline__item__icon">
                    <span class="icon-lightbulb"></span>
                  </div>
                  <header class="trailer">
                    <div class="text--small text--muted trailer split">
                      <div>06.11 2013</div>
                      <div class="status-dot status-dot--small status-dot--green">Status: Request</div>
                    </div>
                    <h3 class="title-size--19 trailing-border trailer--small">Repair ticket: #123456</h3>
                    <div class="text--small text--muted text--muted">Updated: 15.02 2014 (15:43)</div>
                  </header>
                  <div class="trailer padding-trailer trailing-border">
                    <div class="media">
                      <img class="media__image" src="assets/_example-assets/images/galaxy1.png">
                      <div class="media__body">
                        <strong>iPhone 5S has potential problems with the GPS system</strong>
                        <p>The GPS lorem ipsum non temporalies estus donec non leo quis velit aliquet hendrerit leoum at elementum.</p>
                      </div>
                    </div>
                  </div>
                  <footer>
                    <div class="grid-row">
                      <div class="text--small text--muted trailer--small col-xs-12 col-sm-12 col-md-9">
                        <div>Creator: Hans Hansen</div>
                        <div>ID: iPhone 5s</div>
                      </div>
                      <div class="col-xs-12 col-sm-12 col-md-3">
                        <a class="button button--action button--stretch" href="#">Details</a>
                      </div>
                    </div>
                  </footer>
                </article>
              </li>
              <li>
                <!-- : Timeline item -->
                <article class="block timeline__item">
                  <div class="timeline__item__icon">
                    <span class="icon-lightbulb"></span>
                  </div>
                  <header class="trailer">
                    <div class="text--small text--muted trailer split">
                      <div>06.11 2013</div>
                      <div class="status-dot status-dot--small status-dot--green">Status: Shipped</div>
                    </div>
                    <h3 class="title-size--19 trailing-border trailer--small">Shop order: #123456</h3>
                    <div class="text--small text--muted text--muted">Purchase completed in Telenor webshop</div>
                  </header>
                  <div class="trailer padding-trailer trailing-border">
                    <div class="media">
                      <img class="media__image" src="assets/_example-assets/images/galaxy1.png">
                      <div class="media__body">
                        <strong>iPhone 5S</strong>
                        <ul class="list list--check list--no-spacing">
                          <li>The great new feature 1</li>
                          <li>The great new feature 2</li>
                          <li>The great new feature 3</li>
                        </ul>
                      </div>
                    </div>
                    <div class="text--large leading-border padding-leader leader clear">
                      <div class="desk-two-thirds trailer--small desk-no-trailer">Total amount due, incl VAT</div>
                      <div class="desk-one-third desk-pull-right desk-text-right">367,50 kr.</div>
                    </div>
                  </div>
                  <footer>
                    <div class="grid-row">
                      <div class="text--small text--muted trailer--small col-xs-12 col-sm-12 col-md-9">
                        <div>Same day delivery by DHL Express</div>
                        <div>
                          <span class="icon-star"></span>Track &amp; trace no: 123456789123</div>
                      </div>
                      <div class="col-xs-12 col-sm-12 col-md-3">
                        <a class="button button--action button--stretch" href="#">Details</a>
                      </div>
                    </div>
                  </footer>
                </article>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
