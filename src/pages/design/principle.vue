<template>
  <div>
    <div class="text-size--36 leader--section trailer--section title__color">Principle</div>
    <div class="catalog">
      <ul>
        <li><a href="#principle-1"><span>Visibility of system status</span></a></li>
        <li><a href="#principle-2"><span>Match between system and real world</span></a></li>
        <li><a href="#principle-3"><span>User control and freedom</span></a></li>
        <li><a href="#principle-4"><span>Consistency and standards</span></a></li>
        <li><a href="#principle-5"><span>Error prevention</span></a></li>
        <li><a href="#principle-6"><span>Recognition rather than recall</span></a></li>
        <li><a href="#principle-7"><span>Flexibility and efficiency of use</span></a></li>
        <li><a href="#principle-8"><span>Aesthetic and minimalist design</span></a></li>
        <li><a href="#principle-9"><span>Help user recgnize，diagnose，and recover form errors</span></a></li>
        <li><a href="#principle-10"><span>Help and documentation</span></a></li>
      </ul>
    </div>
    <div id="principle-1" class="trailer--med">
      <div class="block__header leader--large trailer">
        <h3 class="title--medium">1.状态可见原则（Visibility of system status）</h3>
      </div>
      <div class="grid-row trailer--section-base ">
        <div class="col-md-4">
          <p class="summary">
            当前操作反馈。系统应该不断告诉用户目前它正在做什么，他是如何响应用户输入的。不应当等到系统出错时才给出反馈：再用户操作正确时系统应当提供肯定的反馈，并且当产生部分信息时应当给出部分的反馈。</p>
        </div>
        <div class="col-md-4">
          <img src="/static/img/principle/1-1.png" alt="">
          <span class="desc">保存按钮点击之后立即进入loading状态，提示用户操作已经接受，避免重复提交。</span>
        </div>
        <div class="col-md-4">
          <img src="/static/img/principle/1-2.png" alt="">
          <span class="desc">输入即时给出反馈</span>
        </div>
      </div>
      <div class="grid-row trailer--section-base">
        <div class="col-md-4">
          <p class="summary">
            反馈时长。反馈的时间0.1秒让用户感觉到系统立即作出了响应；1.0秒，用户会感觉到延迟；10秒，用户再等待过程中执行其他任务。如果系统无法给出即使反馈，可使用进度条提供反馈。</p>
        </div>
        <div class="col-md-4">
          <img src="/static/img/principle/1-3.png" alt="">
          <span class="desc">不能给出具体进度的，也要给出等待的反馈。</span>
        </div>
        <div class="col-md-4">
          <img src="/static/img/principle/1-4.png" alt="">
          <span class="desc">上传过程中给出进度反馈。</span>
        </div>
      </div>
      <div class="grid-row trailer--section-base">
        <div class="col-md-4">
          <p class="summary">
            系统出错时应当给出信息反馈。出现问题时需要提示用户该地方出现了问题，出现了什么样的问题，以免让用户猜测出现了什么问题。
          </p>
        </div>
        <div class="col-md-8">
          <img src="/static/img/principle/1-5.png" alt="">
          <span class="desc">表单格式错误，即时给出错误校验提示。。</span>
        </div>
      </div>
    </div>
    <div id="principle-2" class="trailer--med">
      <div class="block__header leader--large trailer">
        <h3 class="title--medium">2.系统与现实匹配原则（Match between system and real world）</h3>
      </div>
      <div class="grid-row trailer--section-base">
        <div class="col-md-4">
          <p class="summary">
            作为以用户为中心设计的一部分，用户界面中的词汇应当使用用户的语言而不是面向系统的术语。尽可能用用户的母语而非外语，可包含一些非语言元素如图标</p>
        </div>
        <div class="col-md-8">
          <img src="/static/img/principle/2-1.png" alt="">
          <span class="desc">表单格式错误，即时给出错误校验提示。</span>
        </div>
      </div>
    </div>
    <div id="principle-3" class="trailer--med">
      <div class="block__header leader--large trailer">
        <h3 class="title--medium">3.用户控制与自由度原则（User control and freedom）</h3>
      </div>
      <div class="trailer">
        用户不喜欢有现在计算机中拔不出来的感觉。为了使用户感觉到自己能对系统对话完全掌控，无论何时都应当给用户提供一种方便的退出。
      </div>
      <div class="grid-row trailer--section-base">
        <div class="col-md-4">
          <p class="summary">
            在很多情况下，可以使用撤销机制返回前一系统状态。用户很快学会如何使用所提供的撤销功能，所以在整个系统中应当支持使用同一命令来撤销任何状态，而不仅仅局限于撤销某一类特定操作。</p>
        </div>
        <div class="col-md-8">
          <img src="/static/img/principle/3-1.png" alt="">
          <span class="desc">删除记录以后还允许用户撤回删除动作。</span>
        </div>

      </div>
      <div class="grid-row trailer--section-base">
        <div class="col-md-4">
          <p class="summary">
            如果撤销和退出机制无所不在，就可以鼓励用户进行探索学习。用户界面设计中的基本法则是，无论如何改进用户界面，用户依然会犯错误，因此应该让用户尽可能方便地从错误中恢复。</p>
        </div>
        <div class="col-md-8">
          <img src="/static/img/principle/3-2.png" alt="">
          <span class="desc">如果搜索过程十分漫长，允许用户取消搜索动作，回到之前的状态。</span>
        </div>
      </div>
    </div>
    <div id="principle-4" class="trailer--med">
      <div class="block__header leader--large trailer">
        <h3 class="title--medium">4.一致性和标准化原则（Consistency and standards）</h3>
      </div>
      <div class="trailer">
        如果用户知道同样的命令或同样的操作总会产生同样的效果，那么他们在使用系统时就会更加自信，同时也鼓励他们进行探索性学习，因为他们已经具备了使用系统新部分的基础知识。
      </div>
      <div class="grid-row trailer--section-base">
        <div class="col-md-4">
          <p class="summary">
            界面元素的位置要保持一致性。</p>
        </div>
        <div class="col-md-8">
          <img src="/static/img/principle/4-1.png" alt="">
          <span class="desc">删除记录以后还允许用户撤回删除动作。</span>
        </div>
      </div>
      <div class="trailer">
        如果用户知道同样的命令或同样的操作总会产生同样的效果，那么他们在使用系统时就会更加自信，同时也鼓励他们进行探索性学习，因为他们已经具备了使用系统新部分的基础知识。
      </div>
    </div>
    <div id="principle-5" class="trailer--med">
      <div class="block__header leader--large trailer">
        <h3 class="title--medium">5.防错原则（Error prevention）</h3>
      </div>
      <div class="trailer">
        用户在操作系统的时候，难免会出现错误，如何在第一时间避免错误的发生。经常导致用户出错，使用户感到挫折，可以在设计系统的时候避免把用户放在容易出错的状态
      </div>
      <div class="grid-row trailer--section-base">
        <div class="col-md-4">
          <p class="summary">
            当重要或操作不可逆的时候，询问用户让其知道操作的后果。
            增加不可逆操作的难度。</p>
        </div>
        <div class="col-md-8">
          <img src="/static/img/principle/5-1.png" alt="">
          <span class="desc">不可逆操作，预先提示用户。</span>
        </div>

      </div>
      <div class="grid-row trailer--section-base">
        <div class="col-md-4">
          <p class="summary">
            适当限制用户某些交互操作</p>
        </div>
        <div class="col-md-8">
          <img src="/static/img/principle/5-2.png" alt="">
          <span class="desc">没有填写密码，提交按钮不可点击</span>
        </div>
      </div>
    </div>
    <div id="principle-6" class="trailer--med">
      <div class="block__header leader--large trailer">
        <h3 class="title--medium">6.识别优于记忆原则（Recognition rather than recall）</h3>
      </div>
      <div class="trailer">
        <p>系统应当帮助用户记忆，提供辅助信息帮助用户识别，将用户记忆负担减到最小。</p>
        <p>在没有额外帮助的情况下让用户回忆信息与让用户识别屏幕上显示的信息相比，识别更加容易。</p>
      </div>
      <div class="grid-row trailer--section-base">
        <div class="col-md-4">
          <p class="summary">
            不要让用户去记忆或者猜测合法输入值的格式与单位</p>
        </div>
        <div class="col-md-4">
          <img src="/static/img/principle/6-1.png" alt="">
          <span class="desc"> 当要求输入时，系统应当给出输入格式的提示</span>
        </div>
        <div class="col-md-4">
          <img src="/static/img/principle/6-2.png" alt="">
          <span class="desc"> 或者直接将默认值填入，让用户去修改</span>
        </div>

      </div>
      <div class="grid-row trailer--section-base">
        <div class="col-md-4 col-md-offset-4">
          <img src="/static/img/principle/6-3.png" alt="">
          <span class="desc">系统提示用户当前使用的单位</span>
        </div>
      </div>
      <div class="grid-row trailer--section-base">
        <div class="col-md-12">

          <p class="summary">
            系统交互遵循少数几个普遍法则。</p>
          <p class="summary">
            如果系统行为充斥了大量的法则，用户就不得不学习和记忆，加重了用户的负担。如果用户没有学会和记住如何使用，就无法预期这些元素的行为。</p>
          <p class="summary">
            而使用通用命令可以这让用户通过学习少量命令就可以操作多种不同类型的数据。让用户把一个模块上获得的知识应用到另一个应用上去，而不需要重新学习。</p>
        </div>

      </div>
    </div>
    <div id="principle-7" class="trailer--med">
      <div class="block__header leader--large trailer">
        <h3 class="title--medium">
          7.灵活高效原则（Flexibility and efficiency of use）</h3>
      </div>
      <div class="trailer">
        不止为新手用户设计，同样要考虑中级用户与高级用户。你的界面80%的用户是中级用户。要为他们考虑更有效率的使用方式。
      </div>
      <div class="grid-row trailer--section-base">
        <div class="col-md-4">
          <p class="summary">
            训练模式</p>
        </div>
        <div class="col-md-8">
          <img src="/static/img/principle/7-1.png" alt="">
          <span class="desc"> 简单搜索，上手容易，适用于新手用户</span>
        </div>

      </div>
      <div class="grid-row trailer--section-base">
        <div class="col-md-8 col-md-offset-4">
          <img src="/static/img/principle/7-2.png" alt="">
          <span class="desc">高级查询，条件更多，适合中级用户。</span>
        </div>
      </div>
      <div class="grid-row trailer--section-base">
        <div class="col-md-4">
          <p class="summary">
            快捷方式</p>
        </div>
        <div class="col-md-8">
          <img src="/static/img/principle/7-3.png" alt="">
          <span class="desc"> 允许用户重用之前的输入，提高输入效率。</span>
        </div>

      </div>

    </div>
    <div id="principle-8" class="trailer--med">
      <div class="block__header leader--large trailer">
        <h3 class="title--medium">
          8.美学与简约原则（Aesthetic and minimalist design）</h3>
      </div>
      <div class="trailer">
        <p>用户界面应当尽可能简洁，因为屏幕上每增加一个额外的功能和信息，都意味着用户需要学习更多的东西，误解的可能性会增加。用户从中查找所需的信息就会更困难。</p>

        <p>理想情况是只提供用户当前所需的信息，并放置在所需的地方。</p>

        <p>好的图形设计是形成简洁自然对话过程的一个重要基础。屏幕布局应当利用人类认知领域中的完全形态法则，来增加人们对对话元素之间相互关系的理解。
      </div>
      <div class="grid-row trailer--section-base">
        <div class="col-md-4">
          <p class="summary">
            如果信息之间关联性越高，它们之间的距离就应该越接近，也越像一个视觉单元；反之，则它们的距离就应该越远，也越像多个视觉单元。亲密性的根本目的是实现组织性，让用户对页面结构和信息层次一目了然。</p>
        </div>
        <div class="col-md-8">
          <img src="/static/img/principle/8-1.png" alt="">
          <span class="desc"> 通过label与正文，标题与字段之间不同的间距来分组内容，拉开信息层次</span>
        </div>

      </div>
      <div class="grid-row trailer--section-base">
        <div class="col-md-4">
          <p class="summary">
            在界面设计中，将元素进行对齐，既符合用户的认知特性，也能引导视觉流向，让用户更流畅地接收信息</p>
        </div>
        <div class="col-md-8">
          <img src="/static/img/principle/8-2.png" alt="">
          <span class="desc"> 当要求输入时，系统应当给出输入格式的提示</span>
        </div>
      </div>
      <div class="grid-row trailer--section-base">
        <div class="col-md-4">
          <p class="summary">
            对比是增加视觉效果最有效方法之一，同时也能在不同元素之间建立一种有组织的层次结构，让用户快速识别关键信息。</p>
        </div>
        <div class="col-md-8">
          <img src="/static/img/principle/8-3.png" alt="">
        </div>
      </div>

    </div>
    <div id="principle-9" class="trailer--med">
      <div class="block__header leader--large trailer">
        <h3 class="title--medium">
          9.帮助用户识别，诊断，并从错误中恢复原则（Help user recgnize，diagnose，and recover form errors）</h3>
      </div>
      <div class="trailer">
        出错状态非常重要，用户遇到了麻烦，无法达成目标，系统应当告知用户当前发生的状况，并帮助用户从错误中恢复
      </div>
      <div class="grid-row trailer--section-base">
        <div class="col-md-4">
          <p class="summary">
            如果信息之间关联性越高，它们之间的距离就应该越接近，也越像一个视觉单元；反之，则它们的距离就应该越远，也越像多个视觉单元。亲密性的根本目的是实现组织性，让用户对页面结构和信息层次一目了然。</p>
        </div>
        <div class="col-md-8">
          <img src="/static/img/principle/9-1.png" alt="">
          <span class="desc"> 当要求输入时，系统应当给出输入格式的提示</span>
        </div>

      </div>
      <div class="grid-row trailer--section-base">
        <div class="col-md-4">
          <p class="summary">
            允许用户犯错，并提供可以撤销的指令。</p>
        </div>
        <div class="col-md-8">
          <img src="/static/img/principle/9-2.png" alt="">
          <span class="desc"> 应当允许用户撤销错误命令产生的结果，允许他们编辑并重新提交以前的命令，而不是从头再来。</span>
        </div>

      </div>
    </div>
    <div id="principle-10" class="trailer--med">
      <div class="block__header leader--large trailer">
        <h3 class="title--medium">
          10.人性化帮助原则（Help and documentation）</h3>
      </div>
      <div class="grid-row trailer--section-base">
        <div class="col-md-4">
          <p class="summary">
            没有帮助和文档的情况下就易于使用的目标很难完全达到。 用户在使用功能复杂的系统时仍然需要各种帮助和提示。</p>
        </div>
        <div class="col-md-4">
          <img src="/static/img/principle/10-1.png" alt="">
          <span class="desc">
上下文相关的提示</span>
        </div>
        <div class="col-md-4">
          <img src="/static/img/principle/10-2.png" alt="">
          <span class="desc"> 弹出式帮助</span>
        </div>

      </div>

    </div>
  </div>
</template>
<style lang="scss" scoped>
   .title__color {
      color: #474747
    }
    .catalog {
      ul {
        border-left: 3px solid #E8E8E8;
        background: #FBFBFB;
        display: block;
        li {
          display: block;
          padding: 5px 20px;
          a {
            color: #666;
            line-height: 18px;
            font-size: 13px;
          }
        }
      }

    }
</style>
<script>
export default{
}
</script>
