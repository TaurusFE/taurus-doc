<template>
  <div>
    <div class="trailer--large">
      <div class="text-size--36 trailer--section title__color text--telenor-light">Form Example</div>
    </div>
    <div class="doc-compontent-box" id="userInformation">
      <div class="sg-component">
        <div class="sg-component__header">
          <h2 class="title--medium-small trailer--small">User Information</h2>
        </div>
        <div class="sg-component__status">
        </div>
        <div class="sg-component__markup sg-component__markup--no-padding">
          <div class="demo_content block">
            <div class="container grid-row">
              <div class="col-md-6 block--form">
                <div class="sg-component__label">Locked</div>
                <div class="text-size--19 padding-trailer--xsmall border--bottom">
                  <a href="/" class="icon icon-pencil pull-right color-gray text-size--11 leader--xsmall"></a>
                  <h3>User information</h3>
                </div>
                <dl class="terms-list">
                  <dt>Username</dt>
                  <dd>john35</dd>
                </dl>
                <div class="grid-row">
                  <dl class="col-md-6 terms-list">
                    <dt>First name</dt>
                    <dd>John</dd>
                  </dl>
                  <dl class="col-md-6 terms-list">
                    <dt>Last name</dt>
                    <dd>Johnson</dd>
                  </dl>
                </div>
                <dl class="terms-list">
                  <dt>Activation period</dt>
                  <dd>21.05 2014 - 23.05 2014</dd>
                </dl>
                <dl class="terms-list">
                  <dt>Email address</dt>
                  <dd>Fill in your email address</dd>
                </dl>
              </div>
              <div class="col-md-6 block--form">
                <div class="sg-component__label">Editable</div>
                <h3 class="text-size--19 padding-trailer--xsmall border--bottom">User information</h3>
                <div class="form-item ">
                  <label for="form-field-simple-with-label">Username</label>
                  <input id="form-field-simple-with-label" type="text" value="john35">
                </div>
                <div class="form-item--multi">
                  <div class="form-item form-col--med">
                    <label for="firstname">First name</label>
                    <input id="firstname" type="text" value="John">
                  </div>
                  <div class="form-item">
                    <label for="lastname">Last name</label>
                    <input id="lastname" type="text" value="Johnson">
                  </div>
                </div>
                <dl class="terms-list">
                  <dt>Activation period</dt>
                  <dd>21.05 2014 - 23.05 2014</dd>
                </dl>
                <div class="form-item">
                  <label for="email">Email</label>
                  <input id="email" type="email" placeholder="Fill in your email address">
                </div>
                <div class="text--right padding-leader--large">
                  <button class="button button--naked toright--small">Cancel</button>
                  <button class="button button--action">Save changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="doc-compontent-box" id="dateOfBirth">
      <div class="sg-component">
        <div class="sg-component__header">
          <h2 class="title--medium-small trailer--small">Date of birth</h2>
        </div>
        <div class="sg-component__status">
        </div>
        <div class="sg-component__markup sg-component__markup--no-padding">
          <div class="demo_content block">
            <div class="container grid-row">
              <div class="col-md-6 block--form">
                <div class="sg-component__label">Locked</div>
                <div class="text-size--19 padding-trailer--xsmall border--bottom">
                  <a href="/" class="icon icon-pencil pull-right color-gray text-size--11 leader--xsmall"></a>
                  <h3>Date of birth</h3>
                </div>
                <p>January 29th, 1983</p>
              </div>
              <div class="col-md-6  block--form">
                <div class="sg-component__label">Editable</div>
                <h3 class="text-size--19 padding-trailer--xsmall border--bottom">Date of birth</h3>
                <div class="container grid-row">
                  <div class="col-md-4">
                    <div data-module="form.select" class="form-item form-select">
                      <label class="form-select__label" for="select-day">Day</label>
                      <select id="select-day">
                        <option value="opt1" selected="">29</option>
                        <option value="opt2">2</option>
                        <option value="opt3">3</option>
                      </select>
                      <div class="form-select__field">Option 1</div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div data-module="form.select" class="form-item form-select">
                      <label class="form-select__label" for="select-month">Month</label>
                      <select id="select-month">
                        <option value="opt1" selected="">Januar</option>
                        <option value="opt2">2</option>
                        <option value="opt3">3</option>
                      </select>
                      <div class="form-select__field">Option 1</div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div data-module="form.select" class="form-item form-select">
                      <label class="form-select__label" for="select-year">Year</label>
                      <select id="select-year">
                        <option value="opt1" selected="">1983</option>
                        <option value="opt2">2</option>
                        <option value="opt3">3</option>
                      </select>
                      <div class="form-select__field">Option 1</div>
                    </div>
                  </div>
                </div>
                <div class="text--right padding-leader--large">
                  <button class="button button--naked toright--small">Cancel</button>
                  <button class="button button--action">Save changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="doc-compontent-box" id="contact">
      <div class="sg-component">
        <div class="sg-component__header">
          <h2 class="title--medium-small trailer--small">Contact</h2>
        </div>
        <div class="sg-component__status">
        </div>
        <div class="sg-component__markup sg-component__markup--no-padding">
          <div class="demo_content block">
            <div class="container grid-row">
              <div class="col-md-6 block--form">
                <div class="sg-component__label">Locled</div>
                <div class="text-size--19 padding-trailer--xsmall border--bottom">
                  <a href="/" class="icon icon-pencil pull-right color-gray text-size--11 leader--xsmall"></a>
                  <h3>Contact</h3>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing suspen disse faucibus eros non rutrum.</p>
                <ul class="form-item form-row border--bottom">
                  <li class="form-radio  ">
                    <input type="radio" name="radios-disabled" id="radio-1-disabled" value="" disabled>
                    <label class="text--med" for="radio-1-disabled"><span>By traditional mail</span></label>
                  </li>
                  <li class="form-radio  ">
                    <input type="radio" name="radios-disabled" id="radio-2-disabled" disabled checked >
                    <label class="text--med" for="radio-2-disabled"><span>By Email</span></label>
                  </li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing suspen disse faucibus eros non rutrum.</p>
                <div class="form-checkbox">
                  <input type="checkbox" disabled="" checked="" name="cbs-disabled-0" id="cbs-disabled-0" value="--some-value--">
                  <label class="text--med" for="cbs-disabled-0">Yes, I would like to recieve the newsletter</label>
                </div>
              </div>
              <div class="col-md-6 block--form">
                <div class="sg-component__label">Editable</div>
                <h3 class="text-size--19 padding-trailer--xsmall border--bottom">Contact</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing suspen disse faucibus eros non rutrum.</p>
                <ul class="form-item form-row border--bottom">
                  <li class="form-radio  ">
                    <input type="radio" name="radios-disabled-2" id="radio-1-disabled-2" value="">
                    <label class="text--med" for="radio-1-disabled-2"><span>By traditional mail</span></label>
                  </li>
                  <li class="form-radio  ">
                    <input type="radio" name="radios-disabled-2" id="radio-2-disabled-2" checked >
                    <label class="text--med" for="radio-2-disabled-2"><span>By Email</span></label>
                  </li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing suspen disse faucibus eros non rutrum.</p>
                <div class="form-checkbox">
                  <input type="checkbox" checked name="cbs-edit" id="cbs-edit" value="--some-value--">
                  <label class="text--med" for="cbs-edit">Yes, I would like to recieve the newsletter</label>
                </div>
                <div class="text--right padding-leader--large">
                  <button class="button button--naked toright--small">Cancel</button>
                  <button class="button button--action">Save changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="doc-compontent-box" id="sendMessage">
      <div class="sg-component">
        <div class="sg-component__header">
          <h2 class="title--medium-small trailer--small">Send message</h2>
        </div>
        <div class="sg-component__status">
        </div>
        <div class="sg-component__markup sg-component__markup--no-padding">
          <div class="demo_content block">
            <div class="sg-component__label">Send message form</div>
            <h3 class="text-size--19 padding-trailer--xsmall border--bottom">Send us a message</h3>
            <div class="form-item form-item--required">
              <label for="form-field-simple-with-label">Name</label>
              <input id="form-field-simple-with-label" type="text" value="John Johnson">
            </div>
            <div class="form-item form-item--required">
              <label for="area">Message</label>
              <textarea id="area" type="text">Lorem ipsum bla bla.. </textarea>
            </div>
            <div class="text--right padding-leader--large">
              <button class="button button--naked toright--small">Cancel</button>
              <button class="button button--action">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="doc-compontent-box" id="lockedFormData">
      <div class="sg-component">
        <div class="sg-component__header">
          <h2 class="title--medium-small trailer--small">Locked form data</h2>
        </div>
        <div class="sg-component__status">
        </div>
        <div class="sg-component__markup sg-component__markup--no-padding">
          <div class="demo_content block">
            <h3 class="text-size--19 padding-trailer--xsmall border--bottom">Company data</h3>
            <div class="grid-row">
              <dl class="col-md-6 col-sm-12 terms-list">
                <dt>Company name</dt>
                <dd>Aller Media A/S</dd>
              </dl>
              <dl class="col-md-6 col-sm-12 terms-list">
                <dt>Tax ID / CVR ID</dt>
                <dd>DK 29 40 95 01</dd>
              </dl>
              <dl class="col-md-6 col-sm-12 terms-list">
                <dt>Company address (CVR address):</dt>
                <dd>Havneholmen 33
                  <br>Copenhagen
                  <br>1561, Denmakr
                  <br>12345</dd>
              </dl>
            </div>
            <h3 class="text-size--19 padding-trailer--xsmall leader--large border--bottom">Contract data</h3>
            <div class="grid-row">
              <dl class="col-md-6 col-sm-12 terms-list">
                <dt>Contract number</dt>
                <dd>123456789-10</dd>
              </dl>
              <dl class="col-md-6 col-sm-12 terms-list">
                <dt>Payment term</dt>
                <dd>Net 30</dd>
              </dl>
              <dl class="col-md-6 col-sm-12 terms-list">
                <dt>Contract date</dt>
                <dd>2014.08.20</dd>
              </dl>
            </div>
            <h3 class="text-size--19 padding-trailer--xsmall leader--large trailer border--bottom">Beneficiaries</h3>
            <div class="beneficiaries-list">
              <ul class=" grid-row">
                <li class="col-md-6 col-sm-12"><a href="#" class="color-gray">Volkswagen Group</a>
                </li>
                <li class="col-md-6 col-sm-12" ><a href="#" class="color-gray">General Electric</a>
                </li>
                <li class="col-md-6 col-sm-12"><a href="#" class="color-gray">Samsung</a>
                </li>
                <li class="col-md-6 col-sm-12"><a href="#" class="color-gray">Amazon</a>
                </li>
                <li class="col-md-6 col-sm-12"><a href="#" class="color-gray">Toyota</a>
                </li>
                <li class="col-md-6 col-sm-12"><a href="#" class="color-gray">Nestle</a>
                </li>
              </ul>
              <ul id="beneficiaries01" class="is-collapsed grid-row">
                <li class="col-md-6 col-sm-12"><a href="#">Volkswagen Group</a>
                </li>
                <li class="col-md-6 col-sm-12"><a href="#">General Electric</a>
                </li>
                <li class="col-md-6 col-sm-12"><a href="#">Samsung</a>
                </li>
                <li class="col-md-6 col-sm-12"><a href="#">Amazon</a>
                </li>
                <li class="col-md-6 col-sm-12"><a href="#">Toyota</a>
                </li>
                <li class="col-md-6 col-sm-12"><a href="#">Nestle</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="doc-compontent-box" id="formBars">
      <div class="sg-component">
        <div class="sg-component__header">
          <h2 class="title--medium-small trailer--small">Form bars</h2>
        </div>
        <div class="sg-component__status">
        </div>
        <div class="sg-component__markup sg-component__markup--no-padding">
          <div class="demo_content block">
            <h3 class="text-size--19 padding-trailer--xsmall border--bottom">Sim options</h3>
            <ul class="form-item form-row form-inline">
              <li class="form-radio  ">
                <input type="radio" name="radios-inline" id="radio-inline-1" value="">
                <label class="text--med" for="radio-inline-1"><span>Normal</span></label>
              </li>
              <li class="form-radio  ">
                <input type="radio" name="radios-inline" id="radio-inline-2" value="" checked="">
                <label class="text--med" for="radio-inline-2"><span>Micro</span></label>
              </li>
              <li class="form-radio  ">
                <input type="radio" name="radios-inline" id="radio-inline-3" value="" checked="">
                <label class="text--med" for="radio-inline-3"><span>Nano</span></label>
              </li>
            </ul>
            <h3 class="text-size--19 padding-trailer--xsmall leader--large border--bottom">Sim options</h3>
            <ul class="form-item form-inline form-row">
              <li class="form-checkbox ">
                <input type="checkbox" checked="" name="cbs-inline-0" id="cbs-inline-0" value="--some-value--">
                <label class="text--med" for="cbs-inline-0">Lorem</label>
              </li>
              <li class="form-checkbox ">
                <input type="checkbox" name="cbs-inline-1" id="cbs-inline-1" value="--some-value--">
                <label class="text--med" for="cbs-inline-1">Ipsum</label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="doc-compontent-box" id="doubleColumn">
      <div class="sg-component">
        <div class="sg-component__header">
          <h2 class="title--medium-small trailer--small">Double column</h2>
        </div>
        <div class="sg-component__status">
        </div>
        <div class="sg-component__markup sg-component__markup--no-padding">
          <div class="demo_content block">
            <div class="block--form grid-row">
              <fieldset class="col-sm-12 col-md-6">
                <h3 class="text-size--19 padding-trailer--xsmall border--bottom">Navn &amp; adresse</h3>
                <div class="form-item--multi">
                  <div class="form-item form-col--med form-col--mobile-one-whole form-item--required">
                    <label for="firstname-2">Fornavn(e)</label>
                    <input id="firstname-2" type="text">
                  </div>
                  <div class="form-item form-item--required">
                    <label for="lastname-2">Efternavn(e)</label>
                    <input id="lastname-2" type="text">
                  </div>
                </div>
                <div class="form-item--multi">
                  <div class="form-item form-item--required">
                    <label for="address">Addresse</label>
                    <input id="address" type="text">
                  </div>
                  <div class="form-item form-col--med form-col--mobile-one-whole form-item--required">
                    <label for="floor">Nummer &amp; etage</label>
                    <input id="floor" type="text">
                  </div>
                </div>
                <div class="form-item--multi">
                  <div class="form-item form-col--med form-item--required">
                    <label for="zip">Postnummer</label>
                    <input id="zip" type="text">
                  </div>
                  <div class="form-item form-item--required">
                    <label for="city">By</label>
                    <input id="city" type="text">
                  </div>
                </div>
                <div class="form-item">
                  <div data-module="form.select" class="form-select" >
                    <label class="form-select__label" for="select-country">Country</label>
                    <select id="select-country" >
                      <option value="opt1" selected>Denmark</option>
                      <option value="opt2">Option 2</option>
                      <option value="opt3">Option 3</option>
                    </select>
                    <div class="form-select__field">--</div>
                  </div>
                </div>
                <h3 class="text-size--19 padding-trailer--xsmall leader--large border--bottom">Fødselsdag</h3>
                <div class="container grid-row">
                  <div class="col-md-4">
                    <div data-module="form.select" class="form-item form-select" >
                      <label class="form-select__label" for="select-year-2">Year</label>
                      <select id="select-year-2" >
                        <option value="opt1" selected>1981</option>
                        <option value="opt2">Option 2</option>
                        <option value="opt3">Option 3</option>
                      </select>
                      <div class="form-select__field">--</div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div data-module="form.select" class="form-item form-select" >
                      <label class="form-select__label" for="select-month-2">Month</label>
                      <select id="select-month-2" >
                        <option value="opt1" selected>April</option>
                        <option value="opt2">Option 2</option>
                        <option value="opt3">Option 3</option>
                      </select>
                      <div class="form-select__field">--</div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div data-module="form.select" class="form-item form-select" >
                      <label class="form-select__label" for="select-day-2">Day</label>
                      <select id="select-day-2" >
                        <option value="opt1" selected>16</option>
                        <option value="opt2">Option 2</option>
                        <option value="opt3">Option 3</option>
                      </select>
                      <div class="form-select__field">--</div>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset class="block--form__col--dark col-sm-12 col-md-6">
                <h3 class="text-size--19 padding-trailer--xsmall border--bottom">Kontaktinformationer</h3>
                <div class="form-item form-item--required">
                  <label for="email">E-mailadresse</label>
                  <input id="email" type="email">
                </div>
                <div class="form-item form-item--required">
                  <label for="phone">Telefonnummer (primær)</label>
                  <input id="phone" type="text">
                  <p class="form-item__description">You will receive login passwords to your primary number</p>
                </div>
                <div class="form-item form-item--required">
                  <label for="phone2">Telefonnummer (sekundær)</label>
                  <input id="phone2" type="text">
                </div>
              </fieldset>
              <fieldset class="col-md-12">
                <h3 class="text-size--19 padding-trailer--xsmall leader--large border--bottom">Må Telenor kontakte dig?</h3>
                <!-- : Checkboxes -->
                <ul class="form-item form-row">
                  <li class="form-checkbox">
                    <input type="checkbox" name="optionsCheck1" id="checkbox1option1" value="option1" checked="">
                    <label class="text--med" for="checkbox1option1">Ja tak. Jeg ønsker information om nye produkter hos telenor og tilbud.</label>
                  </li>
                  <li class="form-checkbox">
                    <input type="checkbox" name="optionsCheck1" id="checkbox1option2" value="option2">
                    <label class="text--med" for="checkbox1option2">Ja tak. Jeg ønsker information, når Telenor, på baggrund af mit forbrug, kan forbedre mit abonnement.</label>
                  </li>
                </ul>
              </fieldset>
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
