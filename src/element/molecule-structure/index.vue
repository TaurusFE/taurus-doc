<template>
  <div>
    <div class="trailer--large">
      <div class="text-size--36 trailer--section title__color text--telenor-light">Molecule Structure</div>
    </div>
    <div class="doc-compontent-box" id="mediaObject">
      <div class="sg-component">
        <div class="leader--large trailer">
          <h3 class="doc-text-size--24">Media object</h3>
        </div>
        <div class="sg-component__status">
        </div>
        <div class="sg-component__markup">
          <div class="demo_content">
            <!-- : Media object -->
            <div class="sg-component__label">Media object</div>
            <div class="media">
              <div class="media__image">
                <img src="/static/img/logo--small.png" />
              </div>
              <div class="media__body">The media object saves hundreds of lines of code</div>
            </div>
            <!-- : Media object (small) -->
            <div class="sg-component__label">Media object (small gap)</div>
            <div class="media media--small">
              <div class="media__image">
                <img src="/static/img/logo--small.png" />
              </div>
              <div class="media__body">The media object saves hundreds of lines of code</div>
            </div>
            <!-- : Media object (large) -->
            <div class="sg-component__label">Media object (large gap)</div>
            <div class="media media--large">
              <div class="media__image">
                <img src="/static/img/logo--small.png" />
              </div>
              <div class="media__body">The media object saves hundreds of lines of code</div>
            </div>
            <!-- : Media object (reverse) -->
            <div class="sg-component__label">Media object (reverse)</div>
            <div class="media media--reverse">
              <div class="media__image">
                <img src="/static/img/logo--small.png" />
              </div>
              <div class="media__body">The media object saves hundreds of lines of code</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="doc-compontent-box" id="flagObject">
      <div class="sg-component">
        <div class="leader--large trailer">
          <h3 class="doc-text-size--24">Flag object</h3>
        </div>
        <div class="sg-component__status">
        </div>
        <div class="sg-component__markup">
          <div class="demo_content">
            <div class="sg-component__label">Flag middle</div>
            <div class="flag">
              <div class="flag__image">
                <img src="/static/img/logo--small.png" />
              </div>
              <div class="flag__body">The flag object shares a lot of common traits with the media object; its sole purpose is displaying image- and text-like content side-by-side. Where the flag object differs, however, is its ability to vertically align the image and text to the tops, middles or bottoms of each other.</div>
            </div>
            <div class="sg-component__label">Flag top</div>
            <div class="flag flag--top">
              <div class="flag__image">
                <img src="/static/img/logo--small.png" />
              </div>
              <div class="flag__body">The flag object shares a lot of common traits with the media object; its sole purpose is displaying image- and text-like content side-by-side. Where the flag object differs, however, is its ability to vertically align the image and text to the tops, middles or bottoms of each other.</div>
            </div>
            <div class="sg-component__label">Flag bottom</div>
            <div class="flag flag--bottom">
              <div class="flag__image">
                <img src="/static/img/logo--small.png" />
              </div>
              <div class="flag__body">The flag object shares a lot of common traits with the media object; its sole purpose is displaying image- and text-like content side-by-side. Where the flag object differs, however, is its ability to vertically align the image and text to the tops, middles or bottoms of each other.</div>
            </div>
            <div class="sg-component__label">Flag right</div>
            <div class="flag flag--reverse">
              <div class="flag__body">The flag object shares a lot of common traits with the media object; its sole purpose is displaying image- and text-like content side-by-side. Where the flag object differs, however, is its ability to vertically align the image and text to the tops, middles or bottoms of each other.</div>
              <div class="flag__image">
                <img src="/static/img/logo--small.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="doc-compontent-box" id="content-blocks">
      <div class="sg-component">
        <div class="leader--large trailer">
          <h3 class="doc-text-size--24">Content blocks</h3>
        </div>
        <div class="sg-component__status">
        </div>
        <div class="sg-component__markup">
          <div class="demo_content">
            <div class="sg-component__label">Content blocks with gradient line</div>
            <!-- : header block -->
            <header class="padding-trailer--small">
              <h1 class="text-size--36 text-light">Content blocks title
              </h1>
            </header>
            <div class="border gradient-line--with-border">
              main content
            </div>
            <div class="sg-component__label">Content blocks with link</div>
            <!-- : header block -->
            <header class="padding-trailer--small">
              <h1 class="text-size--36 text-light">Content blocks title
                <a class="bullet-link text--small color-gray padding-leader leader--xsmall float-right" href="#nogo">Some link</a>
              </h1>
            </header>
            <div class="border gradient-line--with-border">
              main content
            </div>
            <div class="sg-component__label">Content blocks with left gray box</div>
            <!-- : header block -->
            <header class="padding-trailer--small">
              <h1 class="text-size--36 text-light">Content blocks title
              </h1>
            </header>
            <div class="border gradient-line--with-border">
              <!--main content---start---->
              <div class="grid-row grid-row--gutter-none">
                <div class="col-md-4 box--grey box-shadow-gray box-shadow-gray--right ">
                  <div class="padding-toleft--small padding-toright--small">
                    left content
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="padding-toleft--small padding-toright--small">
                    main content
                  </div>

                </div>
              </div>
              <!--main content---end---->
            </div>
            <div class="sg-component__label">Content blocks with top gray box</div>
            <!-- : header block -->
            <header class="padding-trailer--small">
              <h1 class="text-size--36 text-light">Content blocks title
              </h1>
            </header>
            <div class="border gradient-line--with-border">
              <div class="box--greyed padding-whole--med">
                <div class="">Top content</div>
              </div>
              <div class="border--top">
                <div class="padding-whole--med">Bottom content</div>
              </div>
            </div>
            <div class="sg-component__label">Content blocks no borders</div>
            <!-- : header block -->
            <header class="padding-trailer--small">
              <h1 class="text-size--36 text-light">Content blocks title
              </h1>
            </header>
            <div class="gradient-line--with-border">
              <p>main content</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="article-sections" class="doc-compontent-box">
      <div class="sg-component">
        <div class="leader--large trailer">
          <h3 class="doc-text-size--24">Article sections</h3>
        </div>
        <div class="sg-component__status">
        </div>
        <div class="sg-component__markup">
          <div class="demo_content">
            <div class="sg-component__label">Text left title border</div>
            <section class="section--padding">
              <div class="container">
                <article class="article article--title-border article--text-left grid-row">
                  <h4 class="title--article trailer leader--large block__header col-md-12 col-sm-12 col-xs-12">About iPhone 5c</h4>
                  <div class="article__bodytext col-xs-12  col-sm-12 col-md-6">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius, lectus et imperdiet placerat, risus nibh feugiat eros, sit amet dignissim ante libero in enim. Curabitur pellentesque vulputate quam, molestie ullamcorper
                      ante varius id. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur vel erat id mi luctus dignissim id sit amet lorem.</p>
                    <ul class="list list--check list--blue list--check--bullet trailer--large">
                      <li>Lightning fast Dual-core A6 chip</li>
                      <li>8 MegaPixel iSight-camera</li>
                      <li>Full HD video recording (1080 p)</li>
                      <li>Razorsharp 4�? Retina display</li>
                    </ul>
                    <a class="button button--default trailer--small panel-link" href="#specs" role="tab">More specifications</a>
                  </div>
                  <div class="article__image col-xs-12  col-sm-12 col-md-6">
                    <img src="/static/img/iphone5pinkyellow.png" alt="">
                  </div>
                </article>
              </div>
            </section>
            <div class="sg-component__label">Full width text left</div>
            <section class="section--padding">
              <div class="container">
                <article class="article article--expand-right article--text-left grid-row">
                  <div class="article__bodytext col-xs-12  col-sm-12 col-md-5">
                    <h4 class="title--article trailer--large leader--large">Built-in apps</h4>
                    <p>Curabitur vel erat id mi luctus dignissim id sit amet lorem. Donec sit amet ligula mi. Cras fringilla pellentesque turpis non dapibus. Nam interdum rutrum cursus. Mauris ut laoreet est, vitae dignissim ligula.</p>
                    <p>Suspendisse condimentum dignissim nisl sed eleifend. Cras dignissim euismod odio, sed facilisis arcu fringilla sit amet. Cras dignissim at erat vitae porttitor.</p>
                  </div>
                  <div class="article__image col-xs-12  col-sm-12 col-md-7">
                    <img src="/static/img/iphone5_sprite.png" alt="">
                  </div>
                </article>
              </div>
            </section>
            <div class="sg-component__label">Full width text right</div>
            <section class="section--padding">
              <div class="container">
                <article class="article article--expand-left article--text-right grid-row">
                  <div class="article__image col-xs-12  col-sm-12 col-md-7">
                    <img src="/static/img/iphone5_sprite.png" alt="">
                  </div>
                  <div class="article__bodytext col-xs-12  col-sm-12 col-md-5 omega">
                    <h4 class="title--article trailer--large leader--large">Built-in apps</h4>
                    <p>Curabitur vel erat id mi luctus dignissim id sit amet lorem. Donec sit amet ligula mi. Cras fringilla pellentesque turpis non dapibus. Nam interdum rutrum cursus. Mauris ut laoreet est, vitae dignissim ligula.</p>
                    <p>Suspendisse condimentum dignissim nisl sed eleifend. Cras dignissim euismod odio, sed facilisis arcu fringilla sit amet. Cras dignissim at erat vitae porttitor.</p>
                  </div>
                </article>
              </div>
            </section>
            <div class="sg-component__label">One half text left</div>
            <section class="section--padding">
              <div class="container">
                <article class="article article--text-left grid-row">
                  <div class="article__bodytext col-xs-12  col-sm-12 col-md-6">
                    <h4 class="title--article trailer--large leader--large">iOS 7 complements your iPhone 5c beautifully</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius, lectus et imperdiet placerat, risus nibh feugiat eros, sit amet dignissim ante libero in enim. Curabitur pellentesque vulputate quam, molestie ullamcorper
                      ante varius id.</p>
                    <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur vel erat id mi luctus dignissim id sit amet lorem. Donec sit amet ligula mi. Cras fringilla pellentesque turpis non dapibus. Nam
                      interdum rutrum cursus. Mauris ut laoreet est, vitae</p>
                  </div>
                  <div class="article__image col-xs-12  col-sm-12 col-md-6">
                    <img src="/static/img/iphone5_3items.png" alt="">
                  </div>
                </article>
              </div>
            </section>
            <div class="sg-component__label">One half text right</div>
            <section class="section--padding">
              <div class="container">
                <article class="article article--text-right grid-row">
                  <div class="article__image col-xs-12  col-sm-12 col-md-6">
                    <img src="/static/img/iphone5_3items.png" alt="">
                  </div>
                  <div class="article__bodytext col-xs-12  col-sm-12 col-md-6">
                    <h4 class="title--article trailer--large leader--large">iOS 7 complements your iPhone 5c beautifully</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius, lectus et imperdiet placerat, risus nibh feugiat eros, sit amet dignissim ante libero in enim. Curabitur pellentesque vulputate quam, molestie ullamcorper
                      ante varius id.</p>
                    <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur vel erat id mi luctus dignissim id sit amet lorem. Donec sit amet ligula mi. Cras fringilla pellentesque turpis non dapibus. Nam
                      interdum rutrum cursus. Mauris ut laoreet est, vitae</p>
                  </div>
                </article>
              </div>
            </section>
            <div class="sg-component__label">Text bottom image top</div>
            <section class="section--padding">
              <div class="container">
                <article class="article">
                  <div class="/static/img/iphone5_sprite.png" alt="">
                  </div>
                  <div class="article__bodytext">
                    <h4 class="title--article trailer--large">iOS 7 complements your iPhone 5c beautifully</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius, lectus et imperdiet placerat, risus nibh feugiat eros, sit amet dignissim ante libero in enim. Curabitur pellentesque vulputate quam, molestie ullamcorper
                      ante varius id.</p>
                    <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur vel erat id mi luctus dignissim id sit amet lorem. Donec sit amet ligula mi. Cras fringilla pellentesque turpis non dapibus. Nam
                      interdum rutrum cursus. Mauris ut laoreet est, vitae</p>
                  </div>
                </article>
              </div>
            </section>
            <div class="sg-component__label">Text top image bottom</div>
            <section class="section--padding">
              <div class="container">
                <article class="article">
                  <div class="article__bodytext">
                    <h4 class="title--article trailer--large">iOS 7 complements your iPhone 5c beautifully</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius, lectus et imperdiet placerat, risus nibh feugiat eros, sit amet dignissim ante libero in enim. Curabitur pellentesque vulputate quam, molestie ullamcorper
                      ante varius id.</p>
                    <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur vel erat id mi luctus dignissim id sit amet lorem. Donec sit amet ligula mi. Cras fringilla pellentesque turpis non dapibus. Nam
                      interdum rutrum cursus. Mauris ut laoreet est, vitae</p>
                  </div>
                  <div class="article__image">
                    <img src="/static/img/iphone5_sprite.png" alt="">
                  </div>
                </article>
              </div>
            </section>
            <div class="sg-component__label">Text left</div>
            <section class="section--padding">
              <div class="container">
                <article class="article--expand-right grid-row">
                  <div class="article__bodytext  col-xs-12  col-sm-12 col-md-8">
                    <h4 class="title--article trailer--large leader--large">Built-in apps</h4>
                    <p>Curabitur vel erat id mi luctus dignissim id sit amet lorem. Donec sit amet ligula mi. Cras fringilla pellentesque turpis non dapibus. Nam interdum rutrum cursus. Mauris ut laoreet est, vitae dignissim ligula.</p>
                    <p>Suspendisse condimentum dignissim nisl sed eleifend. Cras dignissim euismod odio, sed facilisis arcu fringilla sit amet. Cras dignissim at erat vitae porttitor.</p>
                  </div>
                  <div class="article__image col-xs-12 col-sm-12 col-md-4">
                    <img src="/static/img/iphone5_3items.png" alt="">
                  </div>
                </article>
              </div>
            </section>
            <div class="sg-component__label">Text right</div>
            <section class="section--padding">
              <div class="container">
                <article class="article--expand-left grid-row">
                  <div class="article__image col-xs-12 col-sm-12 col-md-3">
                    <img src="/static/img/iphone5_3items.png" alt="">
                  </div>
                  <div class="article__bodytext col-xs-12 col-sm-12 col-md-9 omega">
                    <h4 class="title--article trailer--large leader--large">Built-in apps</h4>
                    <p>Curabitur vel erat id mi luctus dignissim id sit amet lorem. Donec sit amet ligula mi. Cras fringilla pellentesque turpis non dapibus. Nam interdum rutrum cursus. Mauris ut laoreet est, vitae dignissim ligula.</p>
                    <p>Suspendisse condimentum dignissim nisl sed eleifend. Cras dignissim euismod odio, sed facilisis arcu fringilla sit amet. Cras dignissim at erat vitae porttitor.</p>
                  </div>
                </article>
              </div>
            </section>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
   export default {}
</script>
