<template>
  <div>
    <div class="trailer--large">
      <div class="text-size--36 trailer--section title__color text--telenor-light">Atom controls</div>
    </div>
    <div class="doc-compontent-box" id="checkboxes-filter">
      <!-- Checkboxes filter start-->
      <div class="sg-component">
        <div class="leader--large trailer">
          <h3 class="doc-text-size--24">Checkboxes filter</h3>
        </div>
        <div class="sg-component__status">
          <p class="mobile-one-half mobile-pull-right mobile-text-right">
            <a class="pull-right" href="http://10.19.18.95:48888/examples/box-group-demo/index.html" target="_blank">View Demo</a>
          </p>
        </div>
        <div class="sg-component__markup sg-component__markup--no-padding">
          <div class="block">
            <div class="demo_content">
              <!-- checkboxes filter component start-->
              <ul id="filters-brand" class="form-item form-inline">
                <li class="form-checkbox--filter form-checkbox--filter--primary">
                  <input type="checkbox" name="" id="apple" value="apple">
                  <label class="text" for="apple">Apple<span class="filter-count">(10)</span></label>
                </li>
                <li class="form-checkbox--filter form-checkbox--filter--primary">
                  <input type="checkbox" name="" id="samsung" value="samsung">
                  <label class="text" for="samsung">Samsung <span class="filter-count">(3)</span></label>
                </li>
                <li class="form-checkbox--filter form-checkbox--filter--primary">
                  <input type="checkbox" name="" id="htc" value="htc">
                  <label class="text" for="htc">HTC <span class="filter-count">(6)</span></label>
                </li>
              </ul>
              <!-- checkboxes filter component end-->
            </div>
          </div>
        </div>
      </div>
      <!-- Checkboxes filter end-->
    </div>
    <div class="doc-compontent-box" id="toggleButtons">
      <div class="sg-component">
        <div class="leader--large trailer">
          <h3 class="doc-text-size--24">Toggle buttons</h3>
        </div>
        <div class="sg-component__status">
          <p class="mobile-one-half mobile-pull-right mobile-text-right">
            <a class="pull-right" href="http://10.19.18.95:48888/examples/switcher-demo/index.html" target="_blank">View Demo</a>
          </p>
        </div>
        <div class="sg-component__markup sg-component__markup--no-padding">
          <div class="demo_content">
            <div class="block">
              <div class="sg-component__label text-size--19">Radio button toggle wide in white box</div>
              <div class="sg-component__label">Radio button toggle</div>
              <div class="form-item--toggle ">
                <input class="toggle__radio" data-toggle-value="on" id="toggle1" type="radio" name="radioGroup1" checked><label for="toggle1">Yes</label>
                <input class="toggle__radio" data-toggle-value="off" id="toggle2" type="radio" name="radioGroup1" ><label for="toggle2">No</label>
                <div class="form-item--toggle__switch"><span class="icon icon-hamburger-menu"></span></div>
                <div class="form-item--toggle__track"></div>
              </div>
              <div class="sg-component__label">Radio button toggle 2nd option checked</div>
              <div class="form-item--toggle ">
                <input class="toggle__radio" data-toggle-value="on" id="toggle3" type="radio" name="radioGroup2" ><label for="toggle1">Yes</label>
                <input class="toggle__radio" data-toggle-value="off" id="toggle4" type="radio" name="radioGroup2" checked><label for="toggle2">No</label>
                <div class="form-item--toggle__switch"><span class="icon icon-hamburger-menu"></span></div>
                <div class="form-item--toggle__track"></div>
              </div>
              <div class="sg-component__label">Radio button toggle disabled</div>
              <div class="form-item--toggle ">
                <input class="toggle__radio" data-toggle-value="on" id="toggle5" type="radio" name="radioGroup3" disabled><label for="toggle1">Yes</label>
                <input class="toggle__radio" data-toggle-value="off" id="toggle6" type="radio" name="radioGroup3" disabled checked><label for="toggle2">No</label>
                <div class="form-item--toggle__switch"><span class="icon icon-hamburger-menu"></span></div>
                <div class="form-item--toggle__track"></div>
              </div>
              <div class="sg-component__label">Radio button toggle wide</div>
              <div class="form-item--toggle form-item--toggle--wide">
                <input class="toggle__radio" data-toggle-value="on" id="toggle-long1" type="radio" name="radioGroup4" ><label for="toggle-long1">Some long</label>
                <input class="toggle__radio" data-toggle-value="off" id="toggle-long2" type="radio" name="radioGroup4" checked><label for="toggle-long2">Some other</label>
                <div class="form-item--toggle__switch"><span class="icon icon-hamburger-menu"></span></div>
                <div class="form-item--toggle__track"></div>
              </div>
            </div>
            <div class="section--negative box--blue box--expand-above-border">
              <div class="sg-component__label text-size--19">Radio button toggle wide in negative box</div>
              <div class="sg-component__label">Radio button toggle</div>
              <div class="form-item--toggle ">
                <input class="toggle__radio" data-toggle-value="on" id="toggle1-negative" type="radio" name="radioGroup5" checked><label for="toggle1">Yes</label>
                <input class="toggle__radio" data-toggle-value="off" id="toggle2-negative" type="radio" name="radioGroup5" ><label for="toggle2">No</label>
                <div class="form-item--toggle__switch"><span class="icon icon-hamburger-menu"></span></div>
                <div class="form-item--toggle__track"></div>
              </div>
              <div class="sg-component__label">Radio button toggle 2nd option checked</div>
              <div class="form-item--toggle ">
                <input class="toggle__radio" data-toggle-value="on" id="toggle3-negative" type="radio" name="radioGroup6" ><label for="toggle1">Yes</label>
                <input class="toggle__radio" data-toggle-value="off" id="toggle4-negative" type="radio" name="radioGroup6" checked><label for="toggle2">No</label>
                <div class="form-item--toggle__switch"><span class="icon icon-hamburger-menu"></span></div>
                <div class="form-item--toggle__track"></div>
              </div>
              <div class="sg-component__label">Radio button toggle disabled</div>
              <div class="form-item--toggle ">
                <input class="toggle__radio" data-toggle-value="on" id="toggle5-negative" type="radio" name="radioGroup7" disabled><label for="toggle1">Yes</label>
                <input class="toggle__radio" data-toggle-value="off" id="toggle6-negative" type="radio" name="radioGroup7" disabled checked><label for="toggle2">No</label>
                <div class="form-item--toggle__switch"><span class="icon icon-hamburger-menu"></span></div>
                <div class="form-item--toggle__track"></div>
              </div>
              <div class="sg-component__label">Radio button toggle wide</div>
              <div class="form-item--toggle form-item--toggle--wide">
                <input class="toggle__radio" data-toggle-value="on" id="toggle-long1-negative" type="radio" name="radioGroup8" checked><label for="toggle-long1-negative">Some long</label>
                <input class="toggle__radio" data-toggle-value="off" id="toggle-long2-negative" type="radio" name="radioGroup8" ><label for="toggle-long2-negative">Some other</label>
                <div class="form-item--toggle__switch"><span class="icon icon-hamburger-menu"></span></div>
                <div class="form-item--toggle__track"></div>
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
