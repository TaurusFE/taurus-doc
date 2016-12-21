<template>
  <div>
    <div class="block__header leader--large trailer--large">
      <h2 class="title--medium">Atom buttons</h2>
    </div>
    <div class="doc-compontent-box" id="buttons">
      <div class="sg-component">
        <div class="sg-component__header">
          <h2 class="title--medium-small trailer--small">Buttons</h2>
        </div>
        <div class="sg-component__status">
          <p class="mobile-one-half mobile-pull-right mobile-text-right">
            <a class="pull-right" href="http://10.19.18.95:48888/examples/button-demo/index.html" target="_blank">View Demo</a>
          </p>
        </div>
        <div class="sg-component__markup sg-component__markup--no-padding">
          <div class="demo_content">
            <div class="grid-row container block">
              <div class="col-md-2">
                <div class="sg-component__label">Default</div>
              </div>
              <div class="col-md-2">
                <button class="button button--action">Action</button>
              </div>
              <div class="col-md-2">
                <button class="button button--accept text-truncate" type="submit"  id="testButton">
                  <span class="button__label icon--right icon-arrow-next"><span class="button__text">Accept</span></span>
                  <span class="button__label--success icon-thumb_up">Saved</span>
                  <span class="button__spinner"><span class="spinner-holder"><span class="spinner-container"><em><span></span></em></span></span></span>
                </button>
              </div>
              <div class="col-md-2">
                <button class="button button--default">Default</button>
              </div>
              <div class="col-md-2 block--content box--grey">
                <button class="button button--default button--white">Default</button>
              </div>
              <div class="col-md-2">
                <button class="button button--naked">Cancel</button>
              </div>
            </div>
            <div class="grid-row container block">
              <div class="col-md-2">
                <div class="sg-component__label">Small</div>
              </div>
              <div class="col-md-2">
                <button class="button button--small button--action">Action</button>
              </div>
              <div class="col-md-2">
                <button class="button button--small button--accept text-truncate" type="submit">
                  <span class="button__label icon--right icon-arrow-next"><span class="button__text">Accept</span></span>
                  <span class="button__spinner"><span class="spinner-holder"><span class="spinner-container"><em><span></span></em></span></span></span>
                </button>
              </div>
              <div class="col-md-2">
                <button class="button button--small button--default">Default</button>
              </div>
              <div class="col-md-2 block--content box--grey">
                <button class="button button--small button--default button--white">Default</button>
              </div>
              <div class="col-md-2">
                <button class="button button--small button--naked">Cancel</button>
              </div>
            </div>
            <div class="grid-row container block">
              <div class="col-md-2">
                <div class="sg-component__label">Stretch</div>
              </div>
              <div class="col-md-2">
                <button class="button button--action button--stretch">Action</button>
              </div>
              <div class="col-md-2">
                <button class="button button--accept button--stretch text-truncate" type="submit">
                  <span class="button__label icon--right icon-arrow-next"><span class="button__text">Accept</span></span>
                  <span class="button__spinner"><span class="spinner-holder"><span class="spinner-container"><em><span></span></em></span></span></span>
                </button>
              </div>
              <div class="col-md-2">
                <button class="button button--default button--stretch">Default</button>
              </div>
              <div class="col-md-2 block--content box--grey">
                <button class="button button--default button--white button--stretch">Default</button>
              </div>
              <div class="col-md-2">
                <button class="button button--naked button--stretch">Cancel</button>
              </div>
            </div>
            <div class="grid-row container block">
              <div class="col-md-2">
                <div class="sg-component__label">Disabled</div>
              </div>
              <div class="col-md-2">
                <button disabled class="button button--action">Action</button>
              </div>
              <div class="col-md-2">
                <button disabled class="button button--accept text-truncate" type="submit">
                  <span class="button__label icon--right icon-arrow-next"><span class="button__text">Accept</span></span>
                  <span class="button__spinner"><span class="spinner-holder"><span class="spinner-container"><em><span></span></em></span></span></span>
                </button>
              </div>
              <div class="col-md-2">
                <button disabled class="button button--default">Default</button>
              </div>
              <div class="col-md-2 block--content box--grey">
                <button disabled class="button button--default button--white">Default</button>
              </div>
              <div class="col-md-2">
                <button disabled class="button button--naked">Cancel</button>
              </div>
            </div>

            <div class="block">
              <div class="sg-component__label">Micro steppers grey and blue</div>
              <button class="button button--default button--micro icon icon-arrow-prev"></button>
              <button class="button button--default button--micro icon icon-arrow-next"></button>
              <button class="button button--action button--micro icon icon-arrow-prev"></button>
              <button class="button button--action button--micro icon icon-arrow-next"></button>
            </div>

            <div class="grid-row box--blue section--negative box--expand-above-border">
              <div class="col-md-2">
                <div class="sg-component__label">Default</div>
              </div>
              <div class="col-md-2">
                <button class="button button--action-dark">Action</button>
              </div>
              <div class="col-md-2">
                <button class="button button--accept text-truncate" type="submit">
                  <span class="button__label icon--right icon-arrow-next"><span class="button__text">Accept</span></span>
                  <span class="button__spinner"><span class="spinner-holder"><span class="spinner-container"><em><span></span></em></span></span></span>
                </button>
              </div>
              <div class="col-md-2">
                <button class="button button--default">Default</button>
              </div>
              <div class="col-md-2">
                <button class="button button--naked">Cancel</button>
              </div>
            </div>
            <div class="grid-row box--blue section--negative box--expand-above-border">
              <div class="col-md-2">
                <div class="sg-component__label">Small</div>
              </div>
              <div class="col-md-2">
                <button class="button button--small button--action-dark">Action</button>
              </div>
              <div class="col-md-2">
                <button class="button button--small button--accept text-truncate" type="submit">
                  <span class="button__label icon--right icon-arrow-next"><span class="button__text">Accept</span></span>
                  <span class="button__spinner"><span class="spinner-holder"><span class="spinner-container"><em><span></span></em></span></span></span>
                </button>
              </div>
              <div class="col-md-2">
                <button class="button button--small button--default">Default</button>
              </div>
              <div class="col-md-2">
                <button class="button button--small button--naked">Cancel</button>
              </div>
            </div>
            <div class="grid-row box--blue section--negative box--expand-above-border">
              <div class="col-md-2">
                <div class="sg-component__label">Stretch</div>
              </div>
              <div class="col-md-2">
                <button class="button button--stretch button--action-dark">Action</button>
              </div>
              <div class="col-md-2">
                <button class="button button--stretch button--accept text-truncate" type="submit">
                  <span class="button__label icon--right icon-arrow-next"><span class="button__text">Accept</span></span>
                  <span class="button__spinner"><span class="spinner-holder"><span class="spinner-container"><em><span></span></em></span></span></span>
                </button>
              </div>
              <div class="col-md-2">
                <button class="button button--stretch button--default">Default</button>
              </div>
              <div class="col-md-2">
                <button class="button button--stretch button--naked">Cancel</button>
              </div>
            </div>
            <div class="grid-row box--blue section--negative box--expand-above-border">
              <div class="col-md-2">
                <div class="sg-component__label">Disabled</div>
              </div>
              <div class="col-md-2">
                <button disabled class="button button--action-dark">Action</button>
              </div>
              <div class="col-md-2">
                <button disabled class="button button--accept text-truncate" type="submit">
                  <span class="button__label icon--right icon-arrow-next"><span class="button__text">Accept</span></span>
                  <span class="button__spinner"><span class="spinner-holder"><span class="spinner-container"><em><span></span></em></span></span></span>
                </button>
              </div>
              <div class="col-md-2">
                <button disabled class="button button--default">Default</button>
              </div>
              <div class="col-md-2">
                <button disabled class="button button--naked">Cancel</button>
              </div>
            </div>

            <div class="box--blue section--negative box--expand-above-border">
              <div class="sg-component__label">Micro steppers in negative box</div>
              <button class="button button--default button--micro icon icon-arrow-prev"></button>
              <button class="button button--default button--micro icon icon-arrow-next"></button>
              <button class="button button--action-dark button--micro icon icon-arrow-prev"></button>
              <button class="button button--action-dark button--micro icon icon-arrow-next"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="doc-compontent-box" id="buttonsBar">
      <div class="sg-component">
        <div class="sg-component__header">
          <h2 class="title--medium-small trailer--small">Buttons bar</h2>
        </div>
        <div class="sg-component__status">
        </div>
        <div class="sg-component__markup sg-component__markup--no-padding">
          <div class="block">
            <div class="demo_content">
              <div class="sg-component__label">Buttons bar</div>
              <div class="container grid-row">
                <div class="col-md-8">
                  <button class="button button--bar">Yes, the page helped me</button>
                  <button class="button button--bar">No, I didn't find it usefull</button>
                </div>
                <div class="col-md-4">
                  <button class="button button--bar button--no-label"><span class="icon icon-zoom"></span></button>
                  <button class="button button--bar button--no-label"><span class="icon icon-zoom-out"></span></button>
                </div>
              </div>
              <div class="sg-component__label">Buttons bar small</div>
              <div class="container grid-row">
                <div class="col-md-8">
                  <button class="button button--bar button--small">Yes, the page helped me</button>
                  <button class="button button--bar button--small">No, I didn't find it usefull</button>
                  <button class="button button--bar button--small">No, I didn't find it usefull</button>
                </div>
                <div class="col-md-4">
                  <button class="button button--bar button--small button--no-label"><span class="icon icon-telephone"></span></button>
                  <button class="button button--bar button--small button--no-label"><span class="icon icon-tv"></span></button>
                  <button class="button button--bar button--small button--no-label"><span class="icon icon-tablet-mobile"></span></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="doc-compontent-box" id="radioButtonsBar">
      <div class="sg-component">
        <div class="sg-component__header">
          <h2 class="title--medium-small trailer--small">Radio Buttons Bar</h2>
        </div>
        <div class="sg-component__status">
        </div>
        <div class="sg-component__markup sg-component__markup--no-padding">
          <div class="block">
            <div class="demo_content">
              <div class="container grid-row">
                <div class="col-md-8">
                  <div class="sg-component__label">Radiobutton bar</div>
                  <div class="radiobutton-row  ">
                    <input type="radio" name="small-group" value="yes" id="small-group_0">
                    <label class="text--medium" for="small-group_0">
                      <span class="icon icon-thumb_up"></span>
                      Yes, the page helped me
                    </label>
                    <input type="radio" name="small-group" value="no" id="small-group_1">
                    <label class="text--medium" for="small-group_1">
                      <span class="icon icon-thumb_down"></span>
                      No, I didn’t find it usefull
                    </label>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="sg-component__label">Radiobutton bar icons only</div>
                  <div class="radiobutton-row radiobutton-row--icons-only ">
                    <input type="radio" name="small-group-icons" value="yes" id="small-group-icons_0">
                    <label class="text--medium" for="small-group-icons_0">
                      <span class="icon icon-thumb_up"></span>
                      <span class="aria--visible">Yes, the page helped me</span>
                    </label>
                    <input type="radio" name="small-group-icons" value="no" id="small-group-icons_1">
                    <label class="text--medium" for="small-group-icons_1">
                      <span class="icon icon-thumb_down"></span>
                      <span class="aria--visible">No, I didn’t find it usefull</span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="container grid-row">
                <div class="col-md-8">
                  <div class="sg-component__label">Radiobutton bar small</div>
                  <div class="radiobutton-row  radiobutton-row--small">
                    <input type="radio" name="small-group-small" value="yes" id="small-group-small_0">
                    <label class="text--small" for="small-group-small_0">
                      <span class="icon icon-thumb_up"></span>
                      Yes, the page helped me
                    </label>
                    <input type="radio" name="small-group-small" value="no" id="small-group-small_1">
                    <label class="text--small" for="small-group-small_1">
                      <span class="icon icon-thumb_down"></span>
                      No, I didn’t find it usefull
                    </label>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="sg-component__label">Radiobutton bar small icons only</div>
                  <div class="radiobutton-row radiobutton-row--icons-only radiobutton-row--small">
                    <input type="radio" name="small-group-small-icons" value="yes" id="small-group-small-icons_0">
                    <label class="text--small" for="small-group-small-icons_0">
                      <span class="icon icon-thumb_up"></span>
                      <span class="aria--visible">Yes, the page helped me</span>
                    </label>
                    <input type="radio" name="small-group-small-icons" value="no" id="small-group-small-icons_1">
                    <label class="text--small" for="small-group-small-icons_1">
                      <span class="icon icon-thumb_down"></span>
                      <span class="aria--visible">No, I didn’t find it usefull</span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="container grid-row">
                <div class="col-md-8">
                  <div class="sg-component__label">Radiobutton bar type</div>
                  <div class="radiobutton-row  radiobutton-row--small radiobutton-row--type">
                    <input type="radio" checked="checked" name="small-group-small-type" value="yes" id="small-group-small-type_0">
                    <label class="text--small" for="small-group-small-type_0">
                      <span class="icon icon-thumb_up"></span>
                      Yes, the page helped me
                    </label>
                    <input type="radio" name="small-group-small-type" value="no" id="small-group-small-type_1">
                    <label class="text--small" for="small-group-small-type_1">
                      <span class="icon icon-thumb_down"></span>
                      No, I didn’t find it usefull
                    </label>
                    <input type="radio" name="small-group-small-type" value="no" id="small-group-small-type_2">
                    <label class="text--small" for="small-group-small-type_2">
                      <span class="icon icon-thumb_down"></span>
                      No, I didn’t find it usefull
                    </label>
                  </div>
                </div>
              </div>
              <div class="container grid-row">
                <div class="col-md-8">
                  <div class="sg-component__label">Radiobutton bar type color</div>
                  <div class="radiobutton-row  radiobutton-row--small radiobutton-row--typecolor">
                    <input type="radio" checked="checked" name="small-group-small-typecolor" value="yes" id="small-group-small-typecolor_0">
                    <label class="text--small" for="small-group-small-typecolor_0">
                      <span class="icon icon-thumb_up"></span>
                      Yes, the page helped me
                    </label>
                    <input type="radio" name="small-group-small-typecolor" value="no" id="small-group-small-typecolor_1">
                    <label class="text--small" for="small-group-small-typecolor_1">
                      <span class="icon icon-thumb_down"></span>
                      No, I didn’t find it usefull
                    </label>
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
   export default {
     mounted () {
       $('#testButton').click(function () {
         $(this).attr('data-loading', 'true')
         setTimeout(function () {
           $(this).attr('data-loaded', 'true')
         }.bind(this), 2000)
       })
     }
   }
</script>
