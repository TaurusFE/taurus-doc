<template>
  <div>
    <!-- Page header -->
    <div class="block__header leader--large trailer--large">
      <h2 class="title--medium">lists</h2>
    </div>

    <div id="unordered-lists" class="doc-compontent-box">
      <div class="sg-component">
        <div class="sg-component__header">
          <h2 class="title--medium-small trailer--small">Unordered lists</h2>
        </div>
        <div class="sg-component__status">
        </div>
        <div class="sg-component__markup sg-component__markup--no-padding ">
          <div class="block">
            <div class="container grid-row">
              <div class="col-md-3">
                <div class="sg-component__label">Default</div>
                <div class="demo_content">
                  <ul class="list list--default list--blue">
                    <li>item 1</li>
                    <li>item 2</li>
                    <li>item 3</li>
                  </ul>
                </div>
              </div>
              <div class="col-md-3">
                <div class="sg-component__label">Small</div>
                <div class="demo_content">
                  <ul class="list list--default list--blue list--small">
                    <li>List header</li>
                    <li>List item 1</li>
                    <li>List item 2</li>
                    <li>List item 3</li>
                  </ul>
                </div>
              </div>
              <div class="col-md-3">
                <div class="sg-component__label">Nested</div>
                <div class="demo_content">
                  <ul class="list list--default list--blue">
                    <li>List item 1</li>
                    <li>List item 2
                      <ul>
                        <li>List item 1</li>
                        <li>List item 2</li>
                      </ul>
                    </li>
                    <li>List item 3</li>
                  </ul>
                </div>
              </div>
              <div class="col-md-3">
                <div class="sg-component__label">Small nested</div>
                <div class="demo_content">
                  <ul class="list list--default list--small list--blue">
                    <li>List item 1</li>
                    <li>List item 2
                      <ul>
                        <li>List item 1</li>
                        <li>List item 2</li>
                      </ul>
                    </li>
                    <li>List item 3</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="container grid-row box--blue section--negative box--expand-above-border">
            <div class="col-md-3">
              <div class="sg-component__label">Default</div>
              <ul class="list list--default">
                <li>List item 1</li>
                <li>List item 2</li>
                <li>List item 3</li>
                <li>List item 4</li>
              </ul>
            </div>
            <div class="col-md-3">
              <div class="sg-component__label">Small</div>
              <ul class="list list--default list--small">
                <li>List header</li>
                <li>List item 1</li>
                <li>List item 2</li>
                <li>List item 3</li>
              </ul>
            </div>
            <div class="col-md-3">
              <div class="sg-component__label">Nested</div>
              <ul class="list list--default">
                <li>List item 1</li>
                <li>List item 2
                  <ul>
                    <li>List item 1</li>
                    <li>List item 2</li>
                  </ul>
                </li>
                <li>List item 3</li>
              </ul>
            </div>
            <div class="col-md-3">
              <div class="sg-component__label">Small nested</div>
              <ul class="list list--default list--small">
                <li>List item 1</li>
                <li>List item 2
                  <ul>
                    <li>List item 1</li>
                    <li>List item 2</li>
                  </ul>
                </li>
                <li>List item 3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="ordered-lists" class="doc-compontent-box">
      <div class="sg-component">
        <div class="sg-component__header">
          <h2 class="title--medium-small trailer--small">Ordered lists</h2>
        </div>
        <div class="sg-component__status">
        </div>
        <div class="sg-component__markup sg-component__markup--no-padding ">
          <div class="block">
            <div class="container grid-row">
              <div class="col-md-3">
                <div class="sg-component__label">Default</div>
                <div class="demo_content">
                  <ol>
                    <li>List item 1</li>
                    <li>List item 2</li>
                    <li>List item 3</li>
                    <li>List item 4</li>
                  </ol>
                </div>
              </div>
              <div class="col-md-3">
                <div class="sg-component__label">Small</div>
                <div class="demo_content">
                  <ol class="list--small">
                    <li>List header</li>
                    <li>List item 1</li>
                    <li>List item 2</li>
                    <li>List item 3</li>
                  </ol>
                </div>
              </div>
              <div class="col-md-3">
                <div class="sg-component__label">Nested</div>
                <div class="demo_content">
                  <ol>
                    <li>List item 1</li>
                    <li>List item 2
                      <ol>
                        <li>List item 1</li>
                        <li>List item 2</li>
                      </ol>
                    </li>
                    <li>List item 3</li>
                  </ol>
                </div>
              </div>
              <div class="col-md-3">
                <div class="sg-component__label">Small nested</div>
                <div class="demo_content">
                  <ol class="list--small">
                    <li>List item 1</li>
                    <li>List item 2
                      <ol>
                        <li>List item 1</li>
                        <li>List item 2</li>
                      </ol>
                    </li>
                    <li>List item 3</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div class="container grid-row box--blue section--negative box--expand-above-border">
            <div class="col-md-3">
              <div class="sg-component__label">Default</div>
              <ol>
                <li>List item 1</li>
                <li>List item 2</li>
                <li>List item 3</li>
                <li>List item 4</li>
              </ol>
            </div>
            <div class="col-md-3">
              <div class="sg-component__label">Small</div>
              <ol class="list--small">
                <li>List header</li>
                <li>List item 1</li>
                <li>List item 2</li>
                <li>List item 3</li>
              </ol>
            </div>
            <div class="col-md-3">
              <div class="sg-component__label">Nested</div>
              <ol>
                <li>List item 1</li>
                <li>List item 2
                  <ol>
                    <li>List item 1</li>
                    <li>List item 2</li>
                  </ol>
                </li>
                <li>List item 3</li>
              </ol>
            </div>
            <div class="col-md-3">
              <div class="sg-component__label">Small nested</div>
              <ol class="list--small">
                <li>List item 1</li>
                <li>List item 2
                  <ol>
                    <li>List item 1</li>
                    <li>List item 2</li>
                  </ol>
                </li>
                <li>List item 3</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="check-list" class="doc-compontent-box sg-component">
      <div class="sg-component__header">
        <h2 class="title--medium-small trailer--small">Check list</h2>
      </div>
      <div class="sg-component__status">
      </div>
      <!-- Markup -->
      <div class="sg-component__markup sg-component__markup--no-padding ">
        <div class="block">
          <div class="container grid-row">
            <div class="col-md-3">
              <div class="sg-component__label">Default</div>
              <div class="demo_content">
                <ul class="list list--check">
                  <li>List item 1</li>
                  <li>List item 2</li>
                  <li>List item 3</li>
                  <li>List item 4</li>
                </ul>
              </div>
            </div>
            <div class="col-md-3">
              <div class="sg-component__label">Default large</div>
              <div class="demo_content">
                <ul class="list list--check list--large">
                  <li>List item 1</li>
                  <li>List item 2</li>
                  <li>List item 3</li>
                  <li>List item 4</li>
                </ul>
              </div>
            </div>
            <!--<div class="col-md-3">
                <div class="sg-component__label">Dark</div>
                <div class="demo_content">
                    <ul class="list list&#45;&#45;check list&#45;&#45;dark list&#45;&#45;check&#45;&#45;bullet">
                        <li>List item 1</li>
                        <li>List item 2</li>
                        <li>List item 3</li>
                        <li>List item 4</li>
                    </ul>
                </div>
            </div>
            <div class="col-md-3">
                <div class="sg-component__label">Dark large</div>
                <div class="demo_content">
                    <ul class="list list&#45;&#45;check list&#45;&#45;dark list&#45;&#45;check&#45;&#45;bullet list&#45;&#45;large">
                        <li>List item 1</li>
                        <li>List item 2</li>
                        <li>List item 3</li>
                        <li>List item 4</li>
                    </ul>
                </div>
            </div>-->
            <div class="col-md-3">
              <div class="sg-component__label">Grey</div>
              <div class="demo_content">
                <ul class="list list--check list--grey list--check--bullet">
                  <li>List item 1</li>
                  <li>List item 2</li>
                  <li>List item 3</li>
                  <li>List item 4</li>
                </ul>
              </div>
            </div>
            <div class="col-md-3">
              <div class="sg-component__label">Grey large</div>
              <div class="demo_content">
                <ul class="list list--check list--grey list--check--bullet list--large">
                  <li>List item 1</li>
                  <li>List item 2</li>
                  <li>List item 3</li>
                  <li>List item 4</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="container grid-row">
            <div class="col-md-3">
              <div class="sg-component__label">Grey dark</div>
              <div class="demo_content">
                <ul class="list list--check list--grey-dark list--check--bullet">
                  <li>List item 1</li>
                  <li>List item 2</li>
                  <li>List item 3</li>
                  <li>List item 4</li>
                </ul>
              </div>
            </div>
            <div class="col-md-3">
              <div class="sg-component__label">Grey dark large</div>
              <div class="demo_content">
                <ul class="list list--check list--grey-dark list--check--bullet list--large">
                  <li>List item 1</li>
                  <li>List item 2</li>
                  <li>List item 3</li>
                  <li>List item 4</li>
                </ul>
              </div>
            </div>
            <div class="col-md-3">
              <div class="sg-component__label">Blue</div>
              <div class="demo_content">
                <ul class="list list--check list--blue list--check--bullet">
                  <li>List item 1</li>
                  <li>List item 2</li>
                  <li>List item 3</li>
                  <li>List item 4</li>
                </ul>
              </div>
            </div>
            <div class="col-md-3">
              <div class="sg-component__label">Blue large</div>
              <div class="demo_content">
                <ul class="list list--check list--blue list--check--bullet list--large">
                  <li>List item 1</li>
                  <li>List item 2</li>
                  <li>List item 3</li>
                  <li>List item 4</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="container grid-row box--blue section--negative box--expand-above-border">
          <div class="col-md-3">
            <div class="sg-component__label">Default</div>
            <ul class="list list--check list--white">
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
              <li>List item 4</li>
            </ul>
          </div>
          <div class="col-md-3">
            <div class="sg-component__label">Default large</div>
            <ul class="list list--check list--large list--white">
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
              <li>List item 4</li>
            </ul>
          </div>
          <div class="col-md-3">
            <div class="sg-component__label">Default</div>
            <ul class="list list--check list--check--bullet list--white">
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
              <li>List item 4</li>
            </ul>
          </div>
          <div class="col-md-3">
            <div class="sg-component__label">Default large</div>
            <ul class="list list--check list--check--bullet list--large list--white">
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
              <li>List item 4</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- divided list -->
    <div id="divided-list" class="doc-compontent-box sg-component">
      <div class="sg-component__header">
        <h2 class="title--medium-small trailer--small">Divided list</h2>
      </div>
      <div class="sg-component__status">
      </div>

      <!-- Markup -->
      <div class="sg-component__markup sg-component__markup--no-padding ">
        <div class="block">
          <div class="container grid-row">
            <div class="col-md-3">
              <div class="sg-component__label">Default</div>
              <div class="demo_content">
                <ul class="list list--divided">
                  <li>item 1</li>
                  <li>item 2</li>
                  <li>item 3</li>
                </ul>
              </div>
            </div>
            <div class="col-md-3">
              <div class="sg-component__label">Small</div>
              <div class="demo_content">
                <ul class="list list--divided list--small">
                  <li>item 1</li>
                  <li>item 2</li>
                  <li>item 3</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="container grid-row box--blue section--negative box--expand-above-border">
          <div class="col-md-3">
            <div class="sg-component__label">Default</div>
            <ul class="list list--divided">
              <li>item 1</li>
              <li>item 2</li>
              <li>item 3</li>
            </ul>
          </div>
          <div class="col-md-3">
            <div class="sg-component__label">Small</div>
            <ul class="list list--divided list--small">
              <li>item 1</li>
              <li>item 2</li>
              <li>item 3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- /divided list -->

    <!-- breadcrumbs list -->
    <div id="breadcrumbs-list" class="doc-compontent-box sg-component">
      <div class="sg-component__header">
        <h2 class="title--medium-small trailer--small">breadcrumbs list</h2>
      </div>
      <div class="sg-component__status">
        <a class="pull-right" href="http://10.19.18.95:48888/examples/breadcrumbs-demo/index.html" target="_blank">View Demo</a>
      </div>

      <!-- Markup -->
      <div class="sg-component__markup sg-component__markup--no-padding ">
        <div class="block">
          <div class="container grid-row">
            <div class="col-md-3">
              <div class="sg-component__label">Default</div>
              <div class="demo_content">
                <ul class="list list--breadcrumbs">
                  <li>item 1</li>
                  <li>item 2</li>
                  <li>item 3</li>
                </ul>
              </div>
            </div>
            <div class="col-md-3">
              <div class="sg-component__label">Small</div>
              <div class="demo_content">
                <ul class="list list--breadcrumbs list--small">
                  <li>item 1</li>
                  <li>item 2</li>
                  <li>item 3</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="container grid-row box--blue section--negative box--expand-above-border">
          <div class="col-md-3">
            <div class="sg-component__label">Default</div>
            <ul class="list list--breadcrumbs">
              <li>item 1</li>
              <li>item 2</li>
              <li>item 3</li>
            </ul>
          </div>
          <div class="col-md-3">
            <div class="sg-component__label">Small</div>
            <ul class="list list--breadcrumbs list--small">
              <li>item 1</li>
              <li>item 2</li>
              <li>item 3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- /breadcrumbs list -->

    <!-- footer list -->
    <div id="footer-list" class="doc-compontent-box sg-component">
      <div class="sg-component__header">
        <h2 class="title--medium-small trailer--small">footer list</h2>
      </div>
      <div class="sg-component__status">
      </div>

      <!-- Markup -->
      <div class="sg-component__markup sg-component__markup--no-padding ">
        <div class="block">
          <div class="container grid-row">
            <div class="col-md-3">
              <div class="sg-component__label">Default</div>
              <div class="demo_content">
                <ul class="list list--footer">
                  <li>item 1</li>
                  <li>item 2</li>
                  <li>item 3</li>
                </ul>
              </div>
            </div>
            <div class="col-md-3">
              <div class="sg-component__label">Small</div>
              <div class="demo_content">
                <ul class="list list--footer list--small">
                  <li>item 1</li>
                  <li>item 2</li>
                  <li>item 3</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="container grid-row box--blue section--negative box--expand-above-border">
          <div class="col-md-3">
            <div class="sg-component__label">Default</div>
            <ul class="list list--footer">
              <li>item 1</li>
              <li>item 2</li>
              <li>item 3</li>
            </ul>
          </div>
          <div class="col-md-3">
            <div class="sg-component__label">Small</div>
            <ul class="list list--footer list--small">
              <li>item 1</li>
              <li>item 2</li>
              <li>item 3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- /footer list -->
  </div>
</template>
<script>
   export default {}
</script>
