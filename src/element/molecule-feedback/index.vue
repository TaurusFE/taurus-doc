<template>
  <div>
    <div class="block__header leader--large trailer--large">
      <h2 class="title--medium">Molecule feedback</h2>
    </div>
    <div class="doc-compontent-box" id="statusDot">
      <div class="sg-component">
        <div class="sg-component__header">
          <h2 class="title--medium-small trailer--small">Status indicator dot</h2>
        </div>
        <div class="sg-component__status">
        </div>
        <div class="sg-component__markup">
          <div class="demo_content">
            <div class="grid-row">
              <div class="col-md-3">
                <div class="sg-component__label">Status</div>
                <div class="status-dot" aria-hidden="true">Label</div>
                <div class="sg-component__label">Status small</div>
                <div class="status-dot status-dot--small text--small" aria-hidden="true">Small with label</div>
              </div>
              <div class="col-md-3">
                <div class="sg-component__label">Status green</div>
                <div class="status-dot status-dot--green" aria-hidden="true">Label</div>
                <div class="sg-component__label">Status green small</div>
                <div class="status-dot status-dot--small text--small status-dot--green" aria-hidden="true">Small with
                  label
                </div>
              </div>
              <div class="col-md-3">
                <div class="sg-component__label">Status yellow</div>
                <div class="status-dot status-dot--yellow" aria-hidden="true">Label</div>
                <div class="sg-component__label">Status yellow small</div>
                <div class="status-dot status-dot--small text--small status-dot--yellow" aria-hidden="true">Small with
                  label
                </div>
              </div>
              <div class="col-md-3">
                <div class="sg-component__label">Status red</div>
                <div class="status-dot status-dot--red" aria-hidden="true">Label</div>
                <div class="sg-component__label">Status red small</div>
                <div class="status-dot status-dot--small text--small status-dot--red" aria-hidden="true">Small with
                  label
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="doc-compontent-box" id="statusBadge">
      <div class="sg-component">
        <div class="sg-component__header">
          <h2 class="title--medium-small trailer--small">Status badge</h2>
        </div>
        <div class="sg-component__status">
        </div>
        <div class="sg-component__markup">
          <div class="demo_content">
            <div class="grid-row">
              <div class="col-md-3">
                <div class="sg-component__label">Normal</div>
                <div class="status-badge status-badge--neutral" aria-hidden="true">Family</div>
              </div>
              <div class="col-md-3">
                <div class="sg-component__label">Active</div>
                <div class="status-badge status-badge--accept" aria-hidden="true">Active</div>
              </div>
              <div class="col-md-3">
                <div class="sg-component__label">Warning</div>
                <div class="status-badge status-badge--warning" aria-hidden="true">Warning</div>
              </div>
              <div class="col-md-3">
                <div class="sg-component__label">Orange</div>
                <div class="status-badge status-badge--orange" aria-hidden="true">Orange</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="doc-compontent-box" id="tooltips">
      <div class="sg-component">
        <div class="sg-component__header">
          <h2 class="title--medium-small trailer--small">Tooltips</h2>
        </div>
        <div class="sg-component__status">
          <p class="pull-right text--right">
            <a class="pull-right" href="http://10.19.18.95:48888/examples/tooltips-demo/index.html" target="_blank">View
              Demo</a>
          </p>
        </div>
        <div class="sg-component__markup">
          <div class="demo_content">
            <div class="grid-row">
              <div class="col-md-3">
                <div class="sg-component__label">Short tip</div>
                <div class="icon-questionmark tooltip__trigger">
                  <div id="tt-short" class="tooltip" data-module="tooltip" role="tooltip">
                    <p>This is a tooltip</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="sg-component__label">Long tip</div>
                <div class="icon-questionmark tooltip__trigger">
                  <div id="tt-long" class="tooltip" data-module="tooltip" role="tooltip">
                    <p><strong>Lorem ipsum dolor</strong><br>This is a tooltip with a lot of text. Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit. Vivamus aliquet sed felis ut ultricies. Etiam tristique enim at
                      tellus molestie, in feugiat libero mollis. Sed bibendum accumsan porta. In hac habitasse platea
                      dictumst. Duis convallis massa et interdum condimentum. Aliquam nec imperdiet lorem, nec venenatis
                      orci. Praesent tincidunt metus metus, ac malesuada ligula ultrices sit amet.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="sg-component__label">Error tip</div>
                <div class="icon-error tooltip__trigger">
                  <div id="tt-error" class="tooltip tooltip--error" data-module="tooltip" role="tooltip">
                    <p><strong>Lorem ipsum dolor</strong><br>This is an error tooltip</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="sg-component__label">Top for input field</div>
                <div class="form-item">
                  <input type="text" id="username" aria-describedby="test-tooltip" required/>
                  <div class="tooltip" id="test-tooltip" data-module="tooltip" role="tooltip">
                    <p>This is a tooltip for a input field</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="doc-compontent-box" id="statusMessage">
      <div class="sg-component">
        <div class="sg-component__header">
          <h2 class="title--medium-small trailer--small">Status message</h2>
        </div>
        <div class="sg-component__status">
          <p class="pull-right text--right">
            <a class="pull-right" href="http://10.19.18.95:48888/examples/status-message/index.html" target="_blank">View
              Demo</a>
          </p>
        </div>
        <div class="sg-component__markup">
          <div class="demo_content">
            <div class="block">
              <div class="sg-component__label">Message info with icon and close button</div>
              <div class="message message--info " data-module="message">
                <div class="message__inner">
                  <span class="message__icon icon icon-notification"></span>
                  <div class="text--small message__text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  </div>
                  <button class="message__close no-js--hidden" aria-hidden="true"><span class="icon-remove"></span>
                  </button>
                </div>
              </div>
              <div class="sg-component__label">Message info</div>
              <div class="message message--info " data-module="message">
                <div class="message__inner">
                  <div class="text--small message__text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem dicta est hic quod deserunt qui
                      harum corporis accusamus eaque dignissimos rerum neque ducimus, inventore maxime officia et
                      repellat natus sunt. Rem dicta est hic quod deserunt qui harum corporis accusamus eaque
                      dignissimos rerum neque ducimus, inventore maxime officia et repellat natus sunt.</p>
                  </div>
                </div>
              </div>
              <div class="sg-component__label">Message info long with icon</div>
              <div class="message message--info " data-module="message">
                <div class="message__inner">
                  <span class="message__icon icon-notification"></span>
                  <div class="text--small message__text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem dicta est hic quod deserunt qui
                      harum corporis accusamus eaque dignissimos rerum neque ducimus, inventore maxime officia et
                      repellat natus sunt. Rem dicta est hic quod deserunt qui harum corporis accusamus eaque
                      dignissimos rerum neque ducimus, inventore maxime officia et repellat natus sunt.</p>
                  </div>
                </div>
              </div>
              <div class="sg-component__label">Message success</div>
              <div class="message message--success " data-module="message">
                <div class="message__inner">
                  <span class="message__icon icon-check-grey"></span>
                  <div class="text--small message__text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem dicta est hic quod deserunt qui
                      harum corporis accusamus eaque dignissimos rerum neque ducimus, inventore maxime officia et
                      repellat natus sunt.</p>
                  </div>
                  <button class="message__close no-js--hidden" aria-hidden="true"><span class="icon-remove"></span>
                  </button>
                </div>
              </div>
              <div class="sg-component__label">Message alert</div>
              <div class="message message--alert " data-module="message">
                <div class="message__inner">
                  <span class="message__icon icon-error-no-bg"></span>
                  <div class="text--small message__text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem dicta est hic quod deserunt qui
                      harum corporis.</p>
                  </div>
                  <button class="message__close no-js--hidden" aria-hidden="true"><span class="icon-remove"></span>
                  </button>
                </div>
              </div>
              <div class="sg-component__label">Message error</div>
              <div class="message message--error " data-module="message">
                <div class="message__inner">
                  <span class="message__icon icon-reject"></span>
                  <div class="text--small message__text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem dicta est hic quod deserunt qui
                      harum corporis accusamus eaque dignissimos rerum neque ducimus, inventore maxime officia et
                      repellat natus sunt.</p>
                  </div>
                  <button class="message__close no-js--hidden" aria-hidden="true"><span class="icon-remove"></span>
                  </button>
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
