<template>
  <div>
    <div class="leader--large trailer--large">
      <h2 class="text-size--36 border--bottom padding-trailer--small">Taurus CSS/Sass规范<small class="text-size--19">（初稿）</small> </h2>
    </div>
    <div class="doc-css-guide trailer">
      <h2 class="text-size--24">目录</h2>
      <ol>
        <li><a href="#css">css规范</a>
          <ul>
            <li><a href="#format">格式</a></li>
            <li><a href="#annotate">注释</a></li>
            <li><a href="#zindex">层级定义</a></li>
            <li><a href="#bem">OOCSS及BEM命名</a></li>
          </ul>
        </li>
        <li><a href="#sass">sass规范</a>
          <ul>
            <li><a href="#sass-name">文件后缀名及导入</a></li>
            <li><a href="#">core变量设置</a></li>
            <li><a href="#icon">Icon字体的引用</a></li>
            <li><a href="#sass-annotate">注释</a></li>
            <li><a href="">混合(mixin)的使用</a></li>
            <li><a href="#sass-qt">嵌套选择器</a></li>
          </ul>
        </li>
        <li><a href="#html">html规范</a>
          <ul>
            <li><a href="#doc">DOC声明</a></li>
          </ul>
        </li>
      </ol>
    </div>
    <div>
      <h2 id="css" class="text-size--24 border--bottom trailer">CSS规范</h2>
      <div id="format" class="margin-whole">
        <h3 class="text-size--19 trailer--small">格式</h3>
        <ul class="list list--default toleft">
          <li>使用2个空格作为缩进</li>
          <li>不要使用ID选择器</li>
          <li>在一个规则声明中应用了多个选择器时，每个选择器独占一行。</li>
          <li>在规则声明的左大括号 { 前加上一个空格。</li>
          <li>在属性的冒号 : 后面加上一个空格，前面不加空格。</li>
          <li>规则声明的右大括号 } 独占一行。</li>
          <li>规则声明之间用空行分隔开。</li>
        </ul>
      </div>
      <div id="annotate" class="margin-whole">
        <h3 class="text-size--19 trailer--small">注释</h3>
        <ul class="list list--default toleft">
          <li>建议注释独占一行，(在Sass中使用//)</li>
          <li>给没有自注释的代码写上详细说明，比如：
            <ul>
              <li>为什么用到了 z-index</li>
              <li>兼容性处理或者针对特定浏览器的 hack</li>
            </ul>
          </li>
        </ul>
      </div>
      <div id="zindex" class="margin-whole">
        <h3 class="text-size--19 trailer--small">层级定义</h3>
        <div class="toleft trailer">
          <ul class="list list--defaul trailer--small">
            <li>样式框架里已对一些层级较高的元素设置了层级</li>
            <li>如需自定义元素层级，请先知晓以下设置，给元素定义合理的层级</li>
          </ul>
          <code class="html hljs xml">
                <span class="hljs-string">
                    $z-layers: (<br>
                    &nbsp;&nbsp;&nbsp;extra-modal: 5000,<span class="hljs-comment">//多模态弹出框</span><br>
                    &nbsp;&nbsp;&nbsp;modal: 1000,<span class="hljs-comment">//弹出框</span><br>
                    &nbsp;&nbsp;&nbsp;overlay: 800,<span class="hljs-comment">//遮罩层</span><br>
                    &nbsp;&nbsp;&nbsp;navbar-fixed: 600,<span class="hljs-comment">//随窗口滚动的导航</span><br>
                    &nbsp;&nbsp;&nbsp;navbar-sticky: 600,<span class="hljs-comment">//固定住的导航</span><br>
                    &nbsp;&nbsp;&nbsp;navbar:500,<span class="hljs-comment">//导航</span><br>
                    &nbsp;&nbsp;&nbsp;popup:500,<span class="hljs-comment">//气泡</span><br>
                    &nbsp;&nbsp;&nbsp;ui-top: 500,<span class="hljs-comment">//表单元素下拉框</span><br>
                    &nbsp;&nbsp;&nbsp;ui-middle: 300,<span class="hljs-comment">//表单元素hover状态,focus状态：ui-middle+1</span><br>
                    &nbsp;&nbsp;&nbsp;tooltip: 100 <span class="hljs-comment">//提示信息</span><br>
                    );
                </span>
          </code>
        </div>
      </div>
      <div id="bem" class="margin-whole">
        <h3 class="text-size--19 trailer--small">OOCSS及BEM命名</h3>
        <div class="toleft">
          <p class="trailer--small">建议使用OOCSS和BEM的相结合来定义</p>
          <h4 class="trailer--small"><strong>OOCSS</strong></h4>
          <p>OOCSS就是面向对象的CSS的理论，有两个原则：</p>
          <ul class="list list--default toleft trailer--small">
            <li>独立的结构和样式(布局样式和设计样式独立出来)</li>
            <li>独立的容器和内容(任何容器，应该适应任何形式的内容)</li>
            <p>提高灵活性和可重用行</p>
          </ul>
          <p class="trailer--small">OOCSS举例：</p>
          <code class="html hljs xml">
                <span class="hljs-string">
                .trailer{}   <span class="hljs-comment">//margin-bottom:20px</span></br>
                  .leader{}  <span class="hljs-comment">//margin-top:20px</span></br>
                  .text-size--24{}  <span class="hljs-comment">//font-size: 24px;line-height: 32px;</span></br>
                  .text-size--30{}  <span class="hljs-comment">//font-size: 30px;line-height: 38px;</span></br>
                  .box--green{}  <span class="hljs-comment">//background-color:#43c682</span></br>
                  .box--grey{}  <span class="hljs-comment">//background-color:#f5f5f5</span>
                </span>
          </code>
          <h4 class="trailer--small"><strong>BEM命名</strong></h4>
          <p>BEM的意思就是块（block）、元素（element）、修饰符（modifier）</p>
          <p class="trailer--small">命名约定模式:</p>
          <code class="html hljs xml">
                <span class="hljs-string">
                .block{}</br>
                  .block__element{}</br>
                  .block--modifier{}</br>
                    </span>
          </code>
          <ul class="leader trailer--small">
            <li>.block 代表了更高级别的抽象或组件。</li>
            <li>.block__element 代表.block的后代，用于形成一个完整的.block的整体。</li>
            <li>.block--modifier代表.block的不同状态或不同版本</li>
          </ul>
          <p class="trailer--small">Range组件BEM命名举例：</p>
          <code class="html hljs xml">
                <span class="hljs-string">
                .range-slider{}  <span class="hljs-comment">//range slider一个内容区块</span></br>
                  .range-slider__values{}  <span class="hljs-comment">//range slider内的一个元素</span></br>
                  .range-slider__value--empty  <span class="hljs-comment">//range slider内的一个元素的empty状态</span>
                </span>
          </code>
        </div>
      </div>
      <h2 id="sass" class="text-size--24 border--bottom trailer">Sass规范</h2>
      <div  class="margin-whole">
        <h3 id="sass-name" class="text-size--19 trailer--small">文件后缀名及导入</h3>
        <div class="toleft trailer">
          <ul class="list list--default">
            <li>sass文件统一后缀名.scss</li>
            <li>基础sass文件命名方法以_开头，如“_index.scss”,导入的时候可以不写下划线，写成@import "index";</li>
          </ul>
        </div>
        <h3 id="icon" class="text-size--19 trailer--small">Icon字体的引用</h3>
        <div class="toleft trailer">
          <p>Icon字体文件统一由gulp构建生成</p>
          <p>为了防止后续维护生成的字体的硬编码变化，影响字体的展示，sass中统一引入icon的方式：</p>
          <code  class="html hljs xml">
            <span class="hljs-name">
               &:after {</br>
              @extend %icon-base-styles;</br>
              @include icon-arrow-down;</br>
              }
            </span>
          </code>
        </div>
        <h3  class="text-size--19 trailer--small">注释</h3>
        <div class="toleft trailer">
          <ul class="list list--default">
            <li>一种是标准的css注释方式/* */</li>
            <li>一种则是//双斜杆形式的单行注释&nbsp;&nbsp;<strong class="color-red">注意：单行注释不会被转译出来</strong></li>
          </ul>
        </div>
        <h3 id="sass-qt" class="text-size--19 trailer--small">嵌套选择器</h3>
        <div class="toleft">
          <ul class="list list--default">
            <li>不要让嵌套选择器的深度超过 3 层</li>
            <li>不要嵌套 ID 选择器</li>
          </ul>
        </div>
      </div>
      <h2  id="html" class="text-size--24 border--bottom trailer">Html规范</h2>
      <div class="margin-whole">
        <h3 id="doc" class="text-size--19 trailer--small">DOC声明</h3>
        <div class="toleft">
          <ul class="list list--default">
            <li>统一H5的声明</li>
            <li>编码为“UTF-8”</li>
            <li>添加移动端的mate设置</li>
          </ul>
          <code class="html hljs xml">
                <span class="hljs-string">
                &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;</br>
                  ...
                </span>
          </code>
        </div>
      </div>
    </div>
  </div>
</template>
<style>

</style>
<script>
    export default {
    }
</script>
