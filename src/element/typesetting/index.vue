<template>
  <div>
    <!-- Page header -->
    <div class="block__header leader--large trailer--large">
      <h2 class="title--medium">Typesetting</h2>
    </div>
    <!-- SG Components -->
    <div id="float" class="doc-compontent-box">
      <div class="sg-component">
        <div class="sg-component__header">
          <h2 class="title--medium-small trailer--small">Float</h2>
        </div>
        <div class="sg-component__status">
        </div>
        <div class="sg-component__markup">
          <div class="demo_content">
            <!-- atoms:Float-start-->
            <div class="sg-component__label ">float-left,pull-left</div>
            <div class="float-left">Lorem ipsum dolor1,</div>
            <div class="pull-left">Lorem ipsum dolor2</div>
            <div class="sg-component__label">float-right,pull-right</div>
            <div class="float-right">Lorem ipsum dolor1</div>
            <div class="pull-right">Lorem ipsum dolor2,</div>
            <div class="sg-component__label">float--none</div>
            <div class="float--none">Lorem ipsum dolor1</div>
            <!-- atoms:Float -end-->
          </div>
        </div>
      </div>
    </div>

    <!-- SG Components -->
    <div id="margin" class="doc-compontent-box">
      <div class="sg-content">
        <div class="sg-component__header">
          <h2 class="title--medium-small trailer--small">Margin</h2>
        </div>
        <div class="sg-component__status trailer">
        </div>
        <div class="sg-content__markup">
          <!-- atoms:Margin -start-->
          <table class="table--small table--all-lines">
            <thead>
            <tr>
              <th><strong></strong></th>
              <th><strong>whole</strong></th>
              <th><strong>left</strong></th>
              <th><strong>right</strong></th>
              <th><strong>top</strong></th>
              <th><strong>bottom</strong></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td><strong>5px</strong>(xs)</td>
              <td>.margin-whole--xsmall</td>
              <td>.toleft--xsmall</td>
              <td>.toright--xsmall</td>
              <td>.leader--xsmall</td>
              <td>.trailer--xsmall</td>
            </tr>
            <tr>
              <td><strong>10px</strong>(sm)</td>
              <td>.margin-whole--small</td>
              <td>.toleft--small</td>
              <td>.toright--small</td>
              <td>.leader--small</td>
              <td>.trailer--small</td>
            </tr>
            <tr>
              <td><strong>15px</strong>(med)</td>
              <td>.margin-whole--med</td>
              <td>.toleft--med</td>
              <td>.toright--med</td>
              <td>.leader--med</td>
              <td>.trailer--med</td>
            </tr>
            <tr>
              <td><strong>20px</strong></td>
              <td>.margin-whole</td>
              <td>.toleft</td>
              <td>.toright</td>
              <td>.leader</td>
              <td>.trailer</td>
            </tr>
            <tr>
              <td><strong>30px</strong>(lg)</td>
              <td>.margin-whole--large</td>
              <td>.toleft--large</td>
              <td>.toright--large</td>
              <td>.leader--large</td>
              <td>.trailer--large</td>
            </tr>
            <tr>
              <td><strong>40px</strong>(xl)</td>
              <td>.margin-whole--xlarge</td>
              <td>.toleft--xlarge</td>
              <td>.toright--xlarge</td>
              <td>.leader--xlarge</td>
              <td>.trailer--xlarge</td>
            </tr>
            <tr>
              <td><strong>45px</strong>(xxl)</td>
              <td>.margin-whole--xxlarge</td>
              <td>.toleft--xxlarge</td>
              <td>.toright--xxlarge</td>
              <td>.leader--xxlarge</td>
              <td>.trailer--xxlarge</td>
            </tr>
            <tr>
              <td><strong>50px</strong>(section)</td>
              <td>.margin-whole--section</td>
              <td>.toleft--section</td>
              <td>.toright--section</td>
              <td>.leader--section</td>
              <td>.trailer--section</td>
            </tr>
            <tr>
              <td><strong>60px</strong>(section-base)</td>
              <td>.margin-whole--section-base</td>
              <td>.toleft--section-base</td>
              <td>.toright--section-base</td>
              <td>.leader--section-base</td>
              <td>.trailer--section-base</td>
            </tr>
            <tr>
              <td><strong>80px</strong>(huge)</td>
              <td>.margin-whole--huge</td>
              <td>.toleft--huge</td>
              <td>.toright--huge</td>
              <td>.leader--huge</td>
              <td>.trailer--huge</td>
            </tr>
            <tr>
              <td><strong>0(clear)</strong></td>
              <td>.margin-whole--none</td>
              <td>.toleft--none</td>
              <td>.toright--none</td>
              <td>.leader--none</td>
              <td>.trailer--none</td>
            </tr>
            </tbody>
          </table>
          <!-- atoms:Margin -end-->
        </div>
      </div>
    </div>

    <!-- SG Components -->
    <div id="padding" class="doc-compontent-box">
      <div class="sg-content">
        <div class="sg-component__header">
          <h2 class="title--medium-small trailer--small">Padding</h2>
        </div>
        <div class="sg-component__status trailer">
        </div>
        <div class="sg-content__markup">
          <!-- atoms:Padding -start-->
          <table class="table--small table--all-lines">
            <thead>
            <tr>
              <th><strong></strong></th>
              <th><strong>whole</strong></th>
              <th><strong>left</strong></th>
              <th><strong>right</strong></th>
              <th><strong>top</strong></th>
              <th><strong>bottom</strong></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td><strong>5px</strong>(xs)</td>
              <td>.padding-whole--xsmall</td>
              <td>.padding-toleft--xsmall</td>
              <td>.padding-toright--xsmall</td>
              <td>.padding-leader--xsmall</td>
              <td>.padding-trailer--xsmall</td>
            </tr>
            <tr>
              <td><strong>10px</strong>(sm)</td>
              <td>.padding-whole--small</td>
              <td>.padding-toleft--small</td>
              <td>.padding-toright--small</td>
              <td>.padding-leader--small</td>
              <td>.padding-trailer--small</td>
            </tr>
            <tr>
              <td><strong>15px</strong>(med)</td>
              <td>.padding-whole--med</td>
              <td>.padding-toleft--med</td>
              <td>.padding-toright--med</td>
              <td>.padding-leader--med</td>
              <td>.padding-trailer--med</td>
            </tr>
            <tr>
              <td><strong>20px</strong></td>
              <td>.padding-whole</td>
              <td>.padding-toleft</td>
              <td>.padding-toright</td>
              <td>.padding-leader</td>
              <td>.padding-trailer</td>
            </tr>
            <tr>
              <td><strong>30px</strong>(lg)</td>
              <td>.padding-whole--large</td>
              <td>.padding-toleft--large</td>
              <td>.padding-toright--large</td>
              <td>.padding-leader--large</td>
              <td>.padding-trailer--large</td>
            </tr>
            <tr>
              <td><strong>40px</strong>(xl)</td>
              <td>.padding-whole--xlarge</td>
              <td>.padding-toleft--xlarge</td>
              <td>.padding-toright--xlarge</td>
              <td>.padding-leader--xlarge</td>
              <td>.padding-trailer--xlarge</td>
            </tr>
            <tr>
              <td><strong>45px</strong>(xxl)</td>
              <td>.padding-whole--xxlarge</td>
              <td>.padding-toleft--xxlarge</td>
              <td>.padding-toright--xxlarge</td>
              <td>.padding-leader--xxlarge</td>
              <td>.padding-trailer--xxlarge</td>
            </tr>
            <tr>
              <td><strong>50px</strong>(section)</td>
              <td>.padding-whole--section</td>
              <td>.padding-toleft--section</td>
              <td>.padding-toright--section</td>
              <td>.padding-leader--section</td>
              <td>.padding-trailer--section</td>
            </tr>
            <tr>
              <td><strong>60px</strong>(section-base)</td>
              <td>.padding-whole--section-base</td>
              <td>.padding-toleft--section-base</td>
              <td>.padding-toright--section-base</td>
              <td>.padding-leader--section-base</td>
              <td>.padding-trailer--section-base</td>
            </tr>
            <tr>
              <td><strong>80px</strong>(huge)</td>
              <td>.padding-whole--huge</td>
              <td>.padding-toleft--huge</td>
              <td>.padding-toright--huge</td>
              <td>.padding-leader--huge</td>
              <td>.padding-trailer--huge</td>
            </tr>
            <tr>
              <td><strong>0(clear)</strong></td>
              <td>.padding-whole--none</td>
              <td>.padding-toleft--none</td>
              <td>.padding-toright--none</td>
              <td>.padding-leader--none</td>
              <td>.padding-trailer--none</td>
            </tr>
            </tbody>
          </table>
          <!-- atoms:Padding -end-->
        </div>
      </div>
    </div>

    <!-- SG Components -->
    <div id="box" class="doc-compontent-box">
      <div class="sg-component">
        <div class="sg-component__header">
          <h2 class="title--medium-small trailer--small">Box</h2>
        </div>
        <div class="sg-component__status">
        </div>
        <div class="sg-component__markup">
          <div class="demo_content">
            <!-- atoms:Box -start-->
            <div class="sg-component__label ">default box</div>
            <div class="box--default block">box--default</div>
            <div class="sg-component__label ">default box width dark border</div>
            <div class="box--default-dark-border block">box--default-dark-border</div>
            <!-- atoms:Box -end-->
          </div>
        </div>
      </div>
    </div>

    <!-- SG Components -->
    <div id="box-shadow" class="doc-compontent-box">
      <div class="sg-component">
        <div class="sg-component__header">
          <h2 class="title--medium-small trailer--small">Box shadow</h2>
        </div>
        <div class="sg-component__status">
        </div>
        <div class="sg-component__markup">
          <div class="demo_content">
            <!-- atoms:Box shadow-start-->
            <div class="sg-component__label ">left box-shadow</div>
            <div class="border box-shadow-gray padding-whole--med">box-shadow-gray</div>
            <div class="sg-component__label ">right box-shadow</div>
            <div class="border box-shadow-gray box-shadow-gray--right padding-whole--med">box-shadow-gray box-shadow-gray--right</div>
            <div class="sg-component__label ">left box-shadow</div>
            <div class="border box--inner-shadow-left padding-whole--med">box--inner-shadow-left</div>
            <div class="sg-component__label ">right box-shadow</div>
            <div class="border box--inner-shadow-right padding-whole--med">box--inner-shadow-right</div>
            <!-- atoms:Box shadow-end-->
          </div>
        </div>
      </div>
    </div>

    <div id="border" class="doc-compontent-box">
      <div class="sg-component">
        <div class="sg-component__header">
          <h2 class="title--medium-small trailer--small">Border</h2>
        </div>
        <div class="sg-component__status">
        </div>
        <div class="sg-component__markup">
          <div class="demo_content">
            <!-- atoms:Border -start-->
            <div class="sg-component__label ">top</div>
            <div class="border--top padding-whole--med">border--top</div>
            <div class="sg-component__label ">bottom</div>
            <div class="border--bottom padding-whole--med">border--bottom</div>
            <div class="sg-component__label ">left</div>
            <div class="border--left padding-whole--med">border--left</div>
            <div class="sg-component__label ">right</div>
            <div class="border--right padding-whole--med">border--right</div>
            <div class="sg-component__label ">without border</div>
            <div class="border border--without-top border--without-right padding-whole--med">border--without-top & border--without-right</div>
            <div class="sg-component__label ">without border</div>
            <div class="border border--without padding-whole--med">border--without</div>
            <div class="sg-component__label ">border light </div>
            <div class="border border--light padding-whole--med">border--light</div>
            <!-- atoms:Border -end-->
          </div>
        </div>
      </div>
    </div>
    <div id="width-hight" class="doc-compontent-box">
      <div class="sg-content">
        <div class="sg-component__header">
          <h2 class="title--medium-small trailer--small">Width/hight</h2>
        </div>
        <div class="sg-component__status trailer">
        </div>
        <div class="sg-content__markup">
          <table class="table table--all-lines">
            <thead>
            <tr>
              <th><strong>Class</strong></th>
              <th><strong>Description</strong></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>.full-width</td>
              <td>width:100%</td>
            </tr>
            <tr>
              <td>.full-height</td>
              <td>height:100%</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>


    <!-- SG Components -->
    <div id="block-inline" class="doc-compontent-box">
      <div class="sg-content">
        <div class="sg-component__header">
          <h2 class="title--medium-small trailer--small">Block/inline</h2>
        </div>
        <div class="sg-component__status trailer">
        </div>
        <div class="sg-content__markup">
          <!-- atoms:Block/inline-start-->
          <table class="table table--all-lines">
            <thead>
            <tr>
              <th><strong>Class</strong></th>
              <th><strong>Description</strong></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>.display--block</td>
              <td>set to block element</td>
            </tr>
            <tr>
              <td>.display--inline</td>
              <td>set to inline element</td>
            </tr>
            <tr>
              <td>.display--inline-block</td>
              <td>set to inline-block element</td>
            </tr>
            </tbody>
          </table>
          <!-- atoms:Block/inline-end-->
        </div>
      </div>
    </div>
    <!-- SG Components -->
    <div id="visible-hidden" class="doc-compontent-box">
      <div class="sg-content">
        <div class="sg-component__header">
          <h2 class="title--medium-small trailer--small">Visible/Hidden</h2>
        </div>
        <div class="sg-component__status trailer">
        </div>
        <div class="sg-content__markup">
          <!-- atoms:Visible/Hidden-start-->
          <table class="table table--all-lines">
            <thead>
            <tr>
              <th><strong>Class</strong></th>
              <th><strong>Description</strong></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>.desktop-visible / .desktop-hidden</td>
              <td>elements at the PC end shown/hidden</td>
            </tr>
            <tr>
              <td>.mobile-hidden</td>
              <td>elements at the mobile end hidden</td>
            </tr>
            <tr>
              <td>.is-shown&nbsp;&nbsp;&nbsp;&nbsp;.is-visible / .is-hidden&nbsp;&nbsp;&nbsp;&nbsp;.is-collapsed / .collapsing</td>
              <td>expand shown / collapsed hidden / collapsing</td>
            </tr>
            <tr>
              <td>.is-open</td>
              <td>shown</td>
            </tr>
            <tr>
              <td>.js-hidden</td>
              <td>hidden by JS control</td>
            </tr>
            </tbody>
          </table>
          <!-- atoms:Visible/Hidden-end-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
   export default {}
</script>
