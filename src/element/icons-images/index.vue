<template>
  <div>
    <!-- Page header -->
    <div class="block__header leader--large trailer--large">
      <h2 class="title--medium">Atom icons</h2>
    </div>
    <!-- SG Components -->
    <div id="sgComponentWrapper">
      <div id="icons" class="doc-compontent-box">
        <div class="sg-content container grid-row grid-row--gutter-none">
          <div class="col-md-4">
            <h2 class="title--medium-small">Icons</h2>
          </div>
          <div class="col-md-8">
            <div class="sg-component__status">
            </div>
            <div class="sg-content__markup sg-markdown">
              <div class="sg-icons-list clear" id="sg-list"></div>
              <div class="sg-icons-list clear">
                <div class="sg-icons-list__item">
                  <div class="sg-component__label sg-component__label--small">logo-onedrive</div>
                  <span class="icon-logo-onedrive"></span>
                </div>
              </div>
              <div class="sg-icons-list clear">
                <div class="sg-icons-list__item">
                  <div class="sg-component__label sg-component__label--small">office365</div>
                  <span class="icon-office365"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="iconsCircle" class="doc-compontent-box">
        <div class="sg-content container grid-row grid-row--gutter-none">
          <div class="col-md-4">
            <h2 class="title--medium-small">Icons With Circle</h2>
          </div>
          <div class="col-md-8">
            <div class="sg-component__status col-md-12">
            </div>
            <div class="sg-content__markup sg-markdown">
              <div class="sg-icons-list float-left">
                <!--<div class="sg-icons-list__item">
                                  <div class="sg-component__label sg-component__label&#45;&#45;small">01-camera</div>
                                  <span class="icon-0-24"></span>
                              </div>-->
                <div class="sg-icons-list__item">
                  <div class="sg-component__label sg-component__label--small">circle-outline</div>
                  <span class="icon-truck circle-outline"></span>
                </div>
                <div class="sg-icons-list__item">
                  <div class="sg-component__label sg-component__label--small">circle-outline--middle</div>
                  <span class="icon-truck circle-outline circle-outline--middle"></span>
                </div>
                <div class="sg-icons-list__item">
                  <div class="sg-component__label sg-component__label--small">circle-outline--small</div>
                  <span class="icon-truck circle-outline circle-outline--small"></span>
                </div>
                <div class="sg-icons-list__item">
                  <div class="sg-component__label sg-component__label--small">circle-background with-border</div>
                  <span class="icon-truck circle-background with-border"></span>
                </div>
              </div>
              <div class="sg-icons-list float-left">
                <div class="sg-icons-list__item">
                  <div class="sg-component__label sg-component__label--small">circle-background blue</div>
                  <span class="icon-truck circle-background blue"></span>
                </div>
                <div class="sg-icons-list__item">
                  <div class="sg-component__label sg-component__label--small">circle-background green</div>
                  <span class="icon-truck circle-background green"></span>
                </div>
                <div class="sg-icons-list__item">
                  <div class="sg-component__label sg-component__label--small">circle-background gray</div>
                  <span class="icon-truck circle-background gray"></span>
                </div>
                <div class="sg-icons-list__item">
                  <div class="sg-component__label sg-component__label--small">circle-background white</div>
                  <span class="icon-truck circle-background white"></span>
                </div>
              </div>
              <div class="sg-icons-list float-left">
                <div class="sg-icons-list__item">
                  <div class="sg-component__label sg-component__label--small">circle-background yellow</div>
                  <span class="icon-truck circle-background yellow"></span>
                </div>
                <div class="sg-icons-list__item">
                  <div class="sg-component__label sg-component__label--small">circle-background light-yellow</div>
                  <span class="icon-truck circle-background yellow-light"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="responsive-image" class="doc-compontent-box">
        <div class="sg-component">
          <div class="sg-component__header">
            <h2 class="title--medium-small trailer--small">Responsive Image</h2>
          </div>
          <div class="sg-component__status col-xs-12"></div>
          <div class="sg-component__markup">
            <!-- : Responsive image element -->
            <span data-picture="" data-alt="The worlds most hyped smart phone.">
                    <span data-src="../../styleguide/assets/framework/img/galaxy-small.png"></span>
					<span data-src="../../styleguide/assets/framework/img.png" data-media="(min-width: 450px)"></span>
					<span data-src="/static/img/galaxy-large.png" data-media="(min-width: 600px)">
                        <img alt="The worlds most hyped smart phone." src="/static/img/galaxy-large.png">
                    </span>
					</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    mounted () {
      $.get('./svg.json', function (data) {
        data.svgArray.splice(data.svgArray.indexOf('office365'), 1) && data.svgArray.splice(data.svgArray.indexOf('logo-onedrive'), 1)
        for (var i = 0, len = data.svgArray.length; i < len; i++) {
          var item = $('<div class="sg-icons-list__item">' +
            '   <div class="sg-component__label sg-component__label--small">icon-' + data.svgArray[i] + '</div>' +
            '       <span class="icon-' + data.svgArray[i] + '"></span>' +
            ' </div>')
          $('#sg-list').append(item)
        }
      })
    }

  }
</script>
