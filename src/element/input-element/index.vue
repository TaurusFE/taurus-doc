<template>
  <div>
    <div class="block__header leader--large trailer--large">
      <h2 class="title--medium">Atom inputs</h2>
    </div>
    <div id="formFields" class="doc-compontent-box">
      <div class="sg-component">
        <div class="sg-component__header">
          <h2 class="title--medium-small trailer--small">Form fields</h2>
        </div>
        <div class="sg-component__status">
          <p class="mobile-one-half mobile-pull-right mobile-text-right">
            <a class="pull-right" href="http://10.19.18.95:48888/examples/form-validation-demo/index.html"
               target="_blank">View Demo</a>
          </p>
        </div>
        <div class="sg-component__markup sg-component__markup--no-padding">

          <div class="demo_content">
            <div class="block">
              <div class="sg-component__label">Form field with label</div>
              <div class="form-item ">
                <label for="form-field-simple-with-label">Label</label>
                <input id="form-field-simple-with-label" type="text"/>
              </div>
              <div class="sg-component__label">Form field with label and placeholder text</div>
              <div class="form-item ">
                <label for="form-field-simple">Label</label>
                <input id="form-field-simple" type="text" placeholder="Placeholder"/>
              </div>
              <div class="sg-component__label">Form field small with label</div>
              <div class="form-item form-item--small">
                <label for="form-field-simple-with-sm-label">Label</label>
                <input id="form-field-simple-with-sm-label" type="text"/>
              </div>
              <div class="sg-component__label">Required Form field</div>
              <div class="form-item form-item--required">
                <label for="form-field-simple-label-required">Required</label>
                <input id="form-field-simple-label-required" type="text"/>
              </div>
              <div class="sg-component__label">Required Form field with Text</div>
              <div class="form-item form-item--required">
                <label for="form-field-simple-label-required-withtext">Welcome
                  <span class="float-right color-blue">Reload</span>
                </label>
                <input id="form-field-simple-label-required-withtext" type="text"/>
              </div>
              <div class="sg-component__label">Disabled Form field with placeholder</div>
              <div class="form-item form-item--disabled">
                <label for="form-field-simple-with-label-disabled">Label</label>
                <input id="form-field-simple-with-label-disabled" type="text" placeholder="Placeholder" disabled/>
              </div>
              <div class="sg-component__label">Disabled Form field with value</div>
              <div class="form-item form-item--disabled">
                <label for="form-field-simple-with-label-disabled-value">Label</label>
                <input id="form-field-simple-with-label-disabled-value" type="text" placeholder="Placeholder" disabled
                       value="Value"/>
              </div>
              <div class="sg-component__label">Required Form field with error</div>
              <div class="form-item form-item--required form-item--error">
                <label for="form-field-simple-label-error-required">Required</label>
                <input id="form-field-simple-label-error-required" type="text"/>
              </div>
              <div class="sg-component__label">Required Form field with error and tip</div>
              <div class="form-item form-item--required">
                <label for="form-field-simple-label-error-required">Required</label>
                <div class="form-item--error">
                  <input id="form-field-simple-label-tip-required" type="text" aria-describedby="floor-tooltip">

                  <div class="icon-error tooltip__trigger">
                    <div id="floor-tooltip" class="tooltip tooltip--error" data-module="tooltip" role="tooltip">
                      <p>Please, no numbers</p>
                      <p>Lorem ipsum non temporalis estus non bibendum.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="sg-component__label">Multible fields on same row</div>
              <div class="form-item--multi form-row">
                <div class="form-item form-col--med form-item--required">
                  <label for="firstname">Required</label>
                  <input id="firstname" type="text">
                </div>
                <div class="form-item form-item--required">
                  <label for="lastname">Required</label>
                  <input id="lastname" type="text">
                </div>
              </div>
            </div>
            <div class="section--negative box--blue box--expand-above-border">
              <div class="sg-component__label">Required Form field in a negative box</div>
              <div class="form-item form-item--negativerequired">
                <label for="form-field-simple-label-required-negative">Required</label>
                <input id="form-field-simple-label-required-negative" type="text"/>
              </div>
            </div>
            <div class="block">
              <div class="sg-component__label">Text area</div>
              <div class="form-item form-item--required">
                <label for="area">Label</label>
                <textarea id="area" type="text"></textarea>
              </div>
              <div class="sg-component__label">Password</div>
              <div class="form-item form-item--required">
                <label for="password">Label</label>
                <input id="password" type="password"/>
              </div>
              <div class="sg-component__label">Email</div>
              <div class="form-item form-item--required">
                <label for="email">Label</label>
                <input id="email" type="email"/>
              </div>
              <div class="sg-component__label">Number</div>
              <div class="form-item form-item--required">
                <label for="number">Label</label>
                <input id="number" type="number"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="doc-compontent-box" id="searchFields">
      <div class="sg-component">
        <div class="sg-component__header">
          <h2 class="title--medium-small trailer--small">Search fields</h2>
        </div>
        <div class="sg-component__status">
          <p class="mobile-one-half mobile-pull-right mobile-text-right">
            <a class="pull-right" href="http://10.19.18.95:48888/examples/search-filter-demo/index.html"
               target="_blank">View Demo</a>
          </p>
        </div>
        <div class="sg-component__markup sg-component__markup--no-padding">
          <div class="demo_content">
            <div class="block">
              <div class="sg-component__label">Search</div>
              <!-- component:field-search:start (field--search.hbs) -->
              <div class="form-search is-empty " data-module="form.search">
                <input id="search" type="search" placeholder="Search">
                <button type="button" tabindex="-1" class="form-search__clear no-js--hidden icon-clear" data-list-clear>
                  <span class="aria--visible">Clear filter</span></button>
                <button id="search-button" class="form-search__submit" tabindex="-1">
                  <span class="icon-search"></span><span class="aria--visible">Search</span>
                </button>
              </div>
              <!-- component:field-search:start -->
              <div class="sg-component__label">Search with error</div>
              <!-- component:field-search:start (field--search.hbs) -->
              <div class="form-search is-empty form-search--error" data-module="form.search">
                <input id="search-small" type="search" placeholder="Search">
                <button type="button" tabindex="-1" class="form-search__clear no-js--hidden icon-clear" data-list-clear>
                  <span class="aria--visible">Clear filter</span></button>
                <button id="search-small-button" class="form-search__submit" tabindex="-1">
                  <span class="icon-search"></span><span class="aria--visible">Search</span>
                </button>
                <div class="icon-error tooltip__trigger">
                  <div id="floor-tooltip" class="tooltip tooltip--error" data-module="tooltip" role="tooltip">
                    <p>Please, no numbers</p>
                    <p>Lorem ipsum non temporalis estus non bibendum.</p>
                  </div>
                </div>
              </div>
              <!-- component:field-search:start -->
              <div class="sg-component__label">Search small</div>
              <!-- component:field-search:start (field--search.hbs) -->
              <div class="form-search is-empty form-item--small" data-module="form.search">
                <input id="search-small" type="search" placeholder="Search">
                <button type="button" tabindex="-1" class="form-search__clear no-js--hidden icon-clear" data-list-clear>
                  <span class="aria--visible">Clear filter</span></button>
                <button id="search-small-button" class="form-search__submit" tabindex="-1">
                  <span class="icon-search"></span><span class="aria--visible">Search</span>
                </button>
              </div>
              <!-- component:field-search:start -->
              <div class="sg-component__label">Search small with error</div>
              <!-- component:field-search:start (field--search.hbs) -->
              <div class="form-search is-empty form-item--small form-search--error" data-module="form.search">
                <input id="search-small" type="search" placeholder="Search">
                <button type="button" tabindex="-1" class="form-search__clear no-js--hidden icon-clear" data-list-clear>
                  <span class="aria--visible">Clear filter</span></button>
                <button id="search-small-button" class="form-search__submit" tabindex="-1">
                  <span class="icon-search"></span><span class="aria--visible">Search</span>
                </button>
                <div class="icon-error tooltip__trigger">
                  <div id="floor-tooltip" class="tooltip tooltip--error" data-module="tooltip" role="tooltip">
                    <p>Please, no numbers</p>
                    <p>Lorem ipsum non temporalis estus non bibendum.</p>
                  </div>
                </div>
              </div>
              <!-- component:field-search:start -->
              <div class="sg-component__label">Search inline</div>
              <!-- component:field-search:start (field--search.hbs) -->
              <div class="form-search is-empty form-search--inline" data-module="form.search">
                <input id="search-inline" type="search" placeholder="Search">
                <button type="button" tabindex="-1" class="form-search__clear no-js--hidden icon-clear" data-list-clear>
                  <span class="aria--visible">Clear filter</span></button>
              </div>
              <!-- component:field-search:start -->
              <div class="sg-component__label">Search inline error</div>
              <!-- component:field-search:start (field--search.hbs) -->
              <div class="form-search is-empty form-search--inline form-item--error" data-module="form.search">
                <input id="search-inline" type="search" placeholder="Search">
                <button type="button" tabindex="-1" class="form-search__clear no-js--hidden icon-clear" data-list-clear>
                  <span class="aria--visible">Clear filter</span></button>
                <div class="icon-error tooltip__trigger">
                  <div id="floor-tooltip" class="tooltip tooltip--error" data-module="tooltip" role="tooltip">
                    <p>Please, no numbers</p>
                    <p>Lorem ipsum non temporalis estus non bibendum.</p>
                  </div>
                </div>
              </div>
              <!-- component:field-search:start -->
              <div class="sg-component__label">Search small inline eg. table filters</div>
              <!-- component:field-search:start (field--search.hbs) -->
              <div class="form-search is-empty form-item--small form-search--inline" data-module="form.search">
                <input id="search-small-inline" type="search" placeholder="Search">
                <button type="button" tabindex="-1" class="form-search__clear no-js--hidden icon-clear" data-list-clear>
                  <span class="aria--visible">Clear filter</span></button>
              </div>
              <!-- component:field-search:start -->
            </div>
            <div class="section--negative box--blue box--expand-above-border">
              <div class="sg-component__label">Search in negative box</div>
              <!-- component:field-search:start (field--search.hbs) -->
              <div class="form-search is-empty " data-module="form.search">
                <input id="search-negative" type="search" placeholder="Search">
                <button type="button" tabindex="-1" class="form-search__clear no-js--hidden icon-clear" data-list-clear>
                  <span class="aria--visible">Clear filter</span></button>
                <button id="search-negative-button" class="form-search__submit" tabindex="-1">
                  <span class="icon-search"></span><span class="aria--visible">Search</span>
                </button>
              </div>
              <!-- component:field-search:start -->
              <div class="sg-component__label">Search inline in negative box</div>
              <!-- component:field-search:start (field--search.hbs) -->
              <div class="form-search is-empty form-search--inline" data-module="form.search">
                <input id="search-negative-inline" type="search" placeholder="Search">
                <button type="button" tabindex="-1" class="form-search__clear no-js--hidden icon-clear" data-list-clear>
                  <span class="aria--visible">Clear filter</span></button>
              </div>
              <!-- component:field-search:start -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="select" class="doc-compontent-box">
      <div class="sg-component">
        <div class="sg-component__header">
          <h2 class="title--medium-small trailer--small">Select</h2>
        </div>
        <div class="sg-component__status">
          <p class="mobile-one-half mobile-pull-right mobile-text-right">
            <a class="pull-right" href="http://10.19.18.95:48888/examples/select-demo/index.html" target="_blank">View
              Demo</a>
          </p>
        </div>
        <div class="sg-component__markup sg-component__markup--no-padding">
          <div class="demo_content">
            <div class="block">
              <div class="sg-component__label">Select</div>
              <div data-module="form.select" class="form-select">
                <select id="select1">
                  <option value="opt1" selected>Option 1</option>
                  <option value="opt2">Option 2</option>
                  <option value="opt3">Option 3</option>
                </select>
                <div class="form-select__field">--</div>
              </div>
              <div class="sg-component__label">Select with grouping</div>
              <div data-module="form.select" class="form-select">
                <select id="select2">
                  <optgroup label="Group 1">
                    <option value="opt1" selected>Option 1</option>
                    <option value="opt2">Option 2</option>
                    <option value="opt3">Option 3</option>
                  </optgroup>
                  <optgroup label="Group 2">
                    <option value="opt1">Option 1</option>
                    <option value="opt2">Option 2</option>
                    <option value="opt3">Option 3</option>
                  </optgroup>
                </select>
                <div class="form-select__field">--</div>
              </div>
              <div class="sg-component__label">Select disabled</div>
              <div data-module="form.select" class="form-select form-select--disabled">
                <label class="form-select__label" for="select-disabled">Disabled select</label>
                <select id="select-disabled" disabled>
                  <option value="opt1" selected>Option 1</option>
                  <option value="opt2">Option 2</option>
                  <option value="opt3">Option 3</option>
                </select>
                <div class="form-select__field">--</div>
              </div>
              <div class="sg-component__label">Select with error</div>
              <div data-module="form.select" class="form-select form-select--error">
                <select id="select3">
                  <option value="opt1" selected>Option 1</option>
                  <option value="opt2">Option 2</option>
                  <option value="opt3">Option 3</option>
                </select>
                <div class="form-select__field">--</div>
                <div class="icon-error tooltip__trigger">
                  <div id="floor-tooltip" class="tooltip tooltip--error" data-module="tooltip" role="tooltip">
                    <p>Please, no numbers</p>
                    <p>Lorem ipsum non temporalis estus non bibendum.</p>
                  </div>
                </div>
              </div>
              <div class="sg-component__label">Select small</div>
              <div data-module="form.select" class="form-select form-select--small">
                <select id="select4">
                  <option value="opt1" selected>Option 1</option>
                  <option value="opt2">Option 2</option>
                  <option value="opt3">Option 3</option>
                </select>
                <div class="form-select__field">--</div>
              </div>
            </div>
            <div class="section--negative box--blue box--expand-above-border">
              <div class="sg-component__label">Select in negative box</div>
              <div data-module="form.select" class="form-select">
                <select id="select5">
                  <option value="opt1" selected>Option 1</option>
                  <option value="opt2">Option 2</option>
                  <option value="opt3">Option 3</option>
                </select>
                <div class="form-select__field">--</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="doc-compontent-box" id="numberStepper">
      <div class="sg-component">
        <div class="sg-component__header">
          <h2 class="title--medium-small trailer--small">Number stepper</h2>
        </div>
        <div class="sg-component__status">
          <p class="mobile-one-half mobile-pull-right mobile-text-right">
            <a class="pull-right" href="http://10.19.18.95:48888/examples/number-stepper-demo/index.html"
               target="_blank">View Demo</a>
          </p>
        </div>
        <div class="sg-component__markup sg-component__markup--no-padding">
          <div class="demo_content">
            <div class="grid-row container block">
              <div class="col-md-3">
                <div class="sg-component__label">Number stepper</div>
                <div class="form-item ">
                  <div class="form-item__number-wrapper">
                    <input data-module="element.number" id="number-stepper1" type="number" value="3" min="0" max="10"
                           step="1"/>
                    <button class="button--default number__control number__control--decrease"></button>
                    <button class="button--default number__control number__control--increase"></button>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="sg-component__label">Number stepper with label</div>
                <div class="form-item ">
                  <label for="number-stepper2">Label</label>
                  <div class="form-item__number-wrapper">
                    <input data-module="element.number" id="number-stepper2" type="number" value="3" min="0" max="10"
                           step="1"/>
                    <button class="button--default number__control number__control--decrease"></button>
                    <button class="button--default number__control number__control--increase"></button>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="sg-component__label">Number stepper small</div>
                <div class="form-item form-item--small">
                  <div class="form-item__number-wrapper">
                    <input data-module="element.number" id="number-stepper3" type="number" value="3" min="0" max="10"
                           step="1"/>
                    <button class="button--default number__control number__control--decrease"></button>
                    <button class="button--default number__control number__control--increase"></button>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="sg-component__label">Number stepper small with label</div>
                <div class="form-item form-item--small">
                  <label for="number-stepper4">Label</label>
                  <div class="form-item__number-wrapper">
                    <input data-module="element.number" id="number-stepper4" type="number" value="3" min="0" max="10"
                           step="1"/>
                    <button class="button--default number__control number__control--decrease"></button>
                    <button class="button--default number__control number__control--increase"></button>
                  </div>
                </div>
              </div>
            </div>
            <div class="grid-row box--blue section--negative box--expand-above-border">
              <div class="col-md-3">
                <div class="sg-component__label">Number stepper</div>
                <div class="form-item ">
                  <div class="form-item__number-wrapper">
                    <input data-module="element.number" id="number-stepper5" type="number" value="3" min="0" max="10"
                           step="1"/>
                    <button class="button--default number__control number__control--decrease"></button>
                    <button class="button--default number__control number__control--increase"></button>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="sg-component__label">Number stepper with label</div>
                <div class="form-item ">
                  <label for="number-stepper6">Label</label>
                  <div class="form-item__number-wrapper">
                    <input data-module="element.number" id="number-stepper6" type="number" value="3" min="0" max="10"
                           step="1"/>
                    <button class="button--default number__control number__control--decrease"></button>
                    <button class="button--default number__control number__control--increase"></button>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="sg-component__label">Number stepper small</div>
                <div class="form-item form-item--small">
                  <div class="form-item__number-wrapper">
                    <input data-module="element.number" id="number-stepper7" type="number" value="3" min="0" max="10"
                           step="1"/>
                    <button class="button--default number__control number__control--decrease"></button>
                    <button class="button--default number__control number__control--increase"></button>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="sg-component__label">Number stepper small with label</div>
                <div class="form-item form-item--small">
                  <label for="number-stepper8">Label</label>
                  <div class="form-item__number-wrapper">
                    <input data-module="element.number" id="number-stepper8" type="number" value="3" min="0" max="10"
                           step="1"/>
                    <button class="button--default number__control number__control--decrease"></button>
                    <button class="button--default number__control number__control--increase"></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!------------------Checkboxes-start-by-Emilie-------->
    <div class="doc-compontent-box" id="checkboxes">
      <!-- checkbox-component-start-->
      <div class="sg-component">
        <div class="sg-component__header">
          <h2 class="title--medium-small trailer--small">Checkboxes</h2>
        </div>
        <div class="sg-component__status">
          <p class="mobile-one-half mobile-pull-right mobile-text-right">
            <a class="pull-right" href="http://10.19.18.95:48888/examples/box-group-demo/index.html" target="_blank">View
              Demo</a>
          </p>
        </div>
        <div class="sg-component__markup sg-component__markup--no-padding">
          <div class="demo_content">
            <div class="block">
              <div class="sg-component__label">Checkboxes list small</div>
              <!-- component-->
              <ul class="form-item">
                <li class="form-checkbox form-checkbox--small">
                  <input type="checkbox" checked name="cbs-small-0" id="cbs-small-0" value="--some-value--">
                  <label class="text--small" for="cbs-small-0">Lorem ipsum bla bla small 1</label>
                </li>
                <li class="form-checkbox form-checkbox--small">
                  <input type="checkbox" name="cbs-small-1" id="cbs-small-1" value="--some-value--">
                  <label class="text--small" for="cbs-small-1">Lorem ipsum bla bla small 2</label>
                </li>
                <li class="form-checkbox form-checkbox--small">
                  <input type="checkbox" name="cbs-small-2" id="cbs-small-2" value="--some-value--">
                  <label class="text--small" for="cbs-small-2">Lorem ipsum bla bla small 3</label>
                </li>
              </ul>
              <!-- end-->
              <div class="sg-component__label">Checkboxes list</div>
              <!-- component-->
              <ul class="form-item">
                <li class="form-checkbox ">
                  <input type="checkbox" checked id="cbs-0" name="cbs-0" value="--some-value--">
                  <label class="text--med" for="cbs-0">
                    Lorem ipsum bla bla 1
                    <span class="icon-questionmark tooltip__trigger"></span>
                  </label>
                </li>
                <li class="form-checkbox ">
                  <input type="checkbox" name="cbs-1" id="cbs-1" value="--some-value--">
                  <label class="text--med" for="cbs-1">Lorem ipsum bla bla 2</label>
                </li>
                <li class="form-checkbox ">
                  <input type="checkbox" name="cbs-2" id="cbs-2" value="--some-value--">
                  <label class="text--med" for="cbs-2">Lorem ipsum bla bla 3</label>
                </li>
              </ul>
              <!-- end-->
              <div class="sg-component__label">Checkboxes list large</div>
              <ul class="form-item">
                <li class="form-checkbox form-checkbox--large">
                  <input type="checkbox" checked name="cbs-large-0" id="cbs-large-0" value="--some-value--">
                  <label class="text--large" for="cbs-large-0">Lorem ipsum bla bla large 1</label>
                </li>
                <li class="form-checkbox form-checkbox--large">
                  <input type="checkbox" name="cbs-large-1" id="cbs-large-1" value="--some-value--">
                  <label class="text--large" for="cbs-large-1">Lorem ipsum bla bla large 2</label>
                </li>
                <li class="form-checkbox form-checkbox--large">
                  <input type="checkbox" name="cbs-large-2" id="cbs-large-2" value="--some-value--">
                  <label class="text--large" for="cbs-large-2">Lorem ipsum bla bla large 3</label>
                </li>
              </ul>
              <div class="sg-component__label">Checkbox disabled</div>
              <ul class="form-item">
                <li class="form-checkbox ">
                  <input type="checkbox" disabled checked name="cbs-disabled-0"
                         value="--some-value--" id="cbs-disabled-0">
                  <label class="text--med" for="cbs-disabled-0">Checked</label>
                </li>
                <li class="form-checkbox ">
                  <input type="checkbox" disabled name="cbs-disabled-1" id="cbs-disabled-1" value="--some-value--">
                  <label class="text--med" for="cbs-disabled-1">Not checked</label>
                </li>
              </ul>
              <div class="sg-component__label">Checkboxes list horizontal small</div>
              <!-- horizontal  form-inline -->
              <ul class="form-item form-inline">
                <li class="form-checkbox form-checkbox--small">
                  <input type="checkbox" checked name="cbs-inline-small-0"
                         value="--some-value--" id="cbs-inline-small-0">
                  <label class="text--small" for="cbs-inline-small-0">Lorem ipsum bla bla small 1</label>
                </li>
                <li class="form-checkbox form-checkbox--small">
                  <input type="checkbox" name="cbs-inline-small-1" id="cbs-inline-small-1" value="--some-value--">
                  <label class="text--small" for="cbs-inline-small-1">Lorem ipsum bla bla small 2</label>
                </li>
              </ul>
              <div class="sg-component__label">Checkboxes list horizontal</div>
              <ul class="form-item form-inline">
                <li class="form-checkbox ">
                  <input type="checkbox" checked id="cbs-inline-0" name="cbs-inline-0" value="--some-value--">
                  <label class="text--med" for="cbs-inline-0">Lorem ipsum bla bla 1</label>
                </li>
                <li class="form-checkbox ">
                  <input type="checkbox" name="cbs-inline-1" id="cbs-inline-1" value="--some-value--">
                  <label class="text--med" for="cbs-inline-1">Lorem ipsum bla bla 2</label>
                </li>
              </ul>
              <div class="sg-component__label">Checkboxes list horizontal large</div>
              <ul class="form-item form-inline">
                <li class="form-checkbox form-checkbox--large">
                  <input type="checkbox" checked name="cbs-inline-large-0"
                         value="--some-value--" id="cbs-inline-large-0">
                  <label class="text--large" for="cbs-inline-large-0">Lorem ipsum bla bla large 1</label>
                </li>
                <li class="form-checkbox form-checkbox--large">
                  <input type="checkbox" name="cbs-inline-large-1" id="cbs-inline-large-1" value="--some-value--">
                  <label class="text--large" for="cbs-inline-large-1">Lorem ipsum bla bla large 2</label>
                </li>
              </ul>
            </div>
            <div class="section--negative box--blue">
              <div class="sg-component__label">Checkboxes lists in negative box</div>
              <!-- small-negative-->
              <ul class="form-item  form-row">
                <li class="form-checkbox form-checkbox--small">
                  <input type="checkbox" checked name="cbs-small-negative-0"
                         value="--some-value--" id="cbs-small-negative-0">
                  <label class="text--small" for="cbs-small-negative-0">Lorem ipsum bla bla small 1</label>
                </li>
                <li class="form-checkbox form-checkbox--small">
                  <input type="checkbox" name="cbs-small-negative-1" id="cbs-small-negative-1" value="--some-value--">
                  <label class="text--small" for="cbs-small-negative-1">Lorem ipsum bla bla small 2</label>
                </li>
              </ul>
              <!-- negative-->
              <ul class="form-item  form-row">
                <li class="form-checkbox ">
                  <input type="checkbox" checked name="cbs-negative-0" id="cbs-negative-0" value="--some-value--">
                  <label class="text--med" for="cbs-negative-0">Lorem ipsum bla bla 1</label>
                </li>
                <li class="form-checkbox ">
                  <input type="checkbox" name="cbs-negative-1" id="cbs-negative-1" value="--some-value--">
                  <label class="text--med" for="cbs-negative-1">Lorem ipsum bla bla 2</label>
                </li>
              </ul>
              <!-- large-negative-->
              <ul class="form-item  form-row">
                <li class="form-checkbox form-checkbox--large">
                  <input type="checkbox" checked name="cbs-large-negative-0"
                         value="--some-value--" id="cbs-large-negative-0">
                  <label class="text--large" for="cbs-large-negative-0">Lorem ipsum bla bla large 1</label>
                </li>
                <li class="form-checkbox form-checkbox--large">
                  <input type="checkbox" name="cbs-large-negative-1" value="--some-value--" id="cbs-large-negative-1">
                  <label class="text--large" for="cbs-large-negative-1">Lorem ipsum bla bla large 2</label>
                </li>
              </ul>
              <div class="sg-component__label">Disabled</div>
              <ul class="form-item">
                <li class="form-checkbox ">
                  <input type="checkbox" disabled checked name="cbs-negative-disabled-0"
                         value="--some-value--" id="cbs-negative-disabled-0">
                  <label class="text--med" for="cbs-negative-disabled-0">Lorem ipsum bla bla 1</label>
                </li>
                <li class="form-checkbox ">
                  <input type="checkbox" disabled name="cbs-negative-disabled-1"
                         value="--some-value--" id="cbs-negative-disabled-1">
                  <label class="text--med" for="cbs-negative-disabled-1">Lorem ipsum bla bla 2</label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- checkbox-component-end-->
    </div>
    <!-------------Checkboxes-end------>
    <div class="doc-compontent-box" id="radio-buttons">
      <!-- Radio buttons start-->
      <div class="sg-component">
        <div class="sg-component__header">
          <h2 class="title--medium-small trailer--small">Radio buttons</h2>
        </div>
        <div class="sg-component__status">
          <p class="mobile-one-half mobile-pull-right mobile-text-right">
            <a class="pull-right" href="http://10.19.18.95:48888/examples/box-group-demo/index.html" target="_blank">View
              Demo</a>
          </p>
        </div>
        <div class="sg-component__markup sg-component__markup--no-padding">
          <div class="demo_content">
            <div class="block">
              <div class="sg-component__label">Radio buttons list vertical</div>
              <!-- small radio-->
              <ul class="form-item  form-row">
                <li class="form-radio form-radio--small">
                  <input type="radio" checked name="rad-small" id="rad-small-0" value="--some-value--">
                  <label for="rad-small-0">Lorem ipsum bla bla small 1</label>
                </li>
                <li class="form-radio form-radio--small">
                  <input type="radio" name="rad-small" id="rad-small-1" value="--some-value--">
                  <label for="rad-small-1">Lorem ipsum bla bla small 2</label>
                </li>
                <li class="form-radio form-radio--small">
                  <input type="radio" name="rad-small" id="rad-small-2" value="--some-value--">
                  <label for="rad-small-2">Lorem ipsum bla bla small 3</label>
                </li>
              </ul>
              <!--normal radio-->
              <ul class="form-item form-row">
                <li class="form-radio">
                  <input type="radio" checked id="radio-0" name="rad" value="--some-value--">
                  <label class="text--med" for="radio-0">
                    Lorem ipsum bla bla 1
                    <span class="icon-questionmark tooltip__trigger"></span>
                  </label>
                </li>
                <li class="form-radio">
                  <input type="radio" name="rad" id="radio-1" value="--some-value--">
                  <label class="text--med" for="radio-1">Lorem ipsum bla bla 2</label>
                </li>
                <li class="form-radio">
                  <input type="radio" name="rad" id="radio-2" value="--some-value--">
                  <label class="text--med" for="radio-2">Lorem ipsum bla bla 3</label>
                </li>
              </ul>
              <!-- large radio-->
              <ul class="form-item form-row">
                <li class="form-radio  form-radio--large">
                  <input type="radio" name="radios-large" id="radio-large-1" value="" checked>
                  <label class="text--large" for="radio-large-1"><span>Lorem ipsum bla bla large 1</span></label>
                </li>
                <li class="form-radio  form-radio--large">
                  <input type="radio" name="radios-large" id="radio-large-2" value="">
                  <label class="text--large" for="radio-large-2"><span>Lorem ipsum bla bla large 2</span></label>
                </li>
                <li class="form-radio  form-radio--large">
                  <input type="radio" name="radios-large" id="radio-large-3" value="">
                  <label class="text--large" for="radio-large-3"><span>Lorem ipsum bla bla large 3</span></label>
                </li>
              </ul>
              <div class="sg-component__label">Radio buttons lists horizontal</div>
              <!-- horizontal small radio-->
              <ul class="form-item form-inline">
                <li class="form-radio form-radio--small">
                  <input type="radio" checked name="rad-inline-small"
                         value="--some-value--" id="rad-inline-small-0">
                  <label for="rad-inline-small-0">Lorem ipsum bla bla small 1</label>
                </li>
                <li class="form-radio form-radio--small">
                  <input type="radio" name="rad-inline-small" id="rad-inline-small-1" value="--some-value--">
                  <label for="rad-inline-small-1">Lorem ipsum bla bla small 2</label>
                </li>
              </ul>
              <br>
              <!-- horizontal radio-->
              <ul class="form-item form-inline">
                <li class="form-radio">
                  <input type="radio" checked id="rad-inline-0" name="rad-inline" value="--some-value--">
                  <label class="text--med" for="rad-inline-0">Lorem ipsum bla bla 1</label>
                </li>
                <li class="form-radio">
                  <input type="radio" name="rad-inline" id="rad-inline-1" value="--some-value--">
                  <label class="text--med" for="rad-inline-1">Lorem ipsum bla bla 2</label>
                </li>
              </ul>
              <br>
              <!-- horizontal large radio-->
              <ul class="form-item form-inline">
                <li class="form-radio form-radio--large">
                  <input type="radio" checked name="rad-inline-large" value="--some-value--" id="rad-inline-large-0">
                  <label class="text--large" for="rad-inline-large-0">Lorem ipsum bla bla large 1</label>
                </li>
                <li class="form-radio form-radio--large">
                  <input type="radio" name="rad-inline-large" id="rad-inline-large-1" value="--some-value--">
                  <label class="text--large" for="rad-inline-large-1">Lorem ipsum bla bla large 2</label>
                </li>
              </ul>
              <div class="sg-component__label">Radio buttons disabled</div>
              <!-- horizontal disabled radio-->
              <ul class="form-item">
                <li class="form-radio">
                  <input type="radio" disabled checked name="rad-disabled" value="--some-value--" id="rad-disabled-0">
                  <label class="text--med" for="rad-disabled-0">Checked</label>
                </li>
                <li class="form-radio">
                  <input type="radio" disabled name="rad-disabled" id="rad-disabled-1" value="--some-value--">
                  <label class="text--med" for="rad-disabled-1">Not checked</label>
                </li>
              </ul>
            </div>
            <div class="section--negative box--blue box--expand-above-border">
              <div class="sg-component__label">Radio buttons list vertical in negative box</div>
              <ul class="form-item form-row">
                <li class="form-radio  ">
                  <input type="radio" name="radios-neg" id="radio-1-neg" value="" checked>
                  <label class="text--med" for="radio-1-neg"><span>Lorem ipsum bla bla 1</span></label>
                </li>
                <li class="form-radio  ">
                  <input type="radio" name="radios-neg" id="radio-2-neg" value="">
                  <label class="text--med" for="radio-2-neg"><span>Lorem ipsum bla bla 2</span></label>
                </li>
                <li class="form-radio  ">
                  <input type="radio" name="radios-neg" id="radio-3-neg" value="">
                  <label class="text--med" for="radio-3-neg"><span>Lorem ipsum bla bla 3</span></label>
                </li>
              </ul>
              <div class="sg-component__label">Radio buttons list horizontal in negative box</div>
              <ul class="form-item form-inline">
                <li class="form-radio  ">
                  <input type="radio" name="radios-inline-neg" id="radio-inline-1-neg" value="">
                  <label class="text--med" for="radio-inline-1-neg"><span>Lorem ipsum bla bla 1</span></label>
                </li>
                <li class="form-radio  ">
                  <input type="radio" name="radios-inline-neg" id="radio-inline-2-neg" value="" checked>
                  <label class="text--med" for="radio-inline-2-neg"><span>Lorem ipsum bla bla 2</span></label>
                </li>
              </ul>
              <div class="sg-component__label">Radio buttons disabled</div>
              <ul class="form-item form-row">
                <li class="form-radio  ">
                  <input type="radio" name="radios-disabled-neg" id="radio-1-disabled-neg" value="" checked disabled>
                  <label class="text--med" for="radio-1-disabled-neg"><span>Lorem ipsum bla bla 1</span></label>
                </li>
                <li class="form-radio  ">
                  <input type="radio" name="radios-disabled-neg" id="radio-2-disabled-neg" value="" disabled>
                  <label class="text--med" for="radio-2-disabled-neg"><span>Lorem ipsum bla bla 2</span></label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- Radio buttons end-->
    </div>
  </div>
</template>
<script>
  export default {}
</script>
