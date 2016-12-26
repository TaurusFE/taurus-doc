<template>
  <div class="home-content">
    <div class="doc-banner">
      <div class="masthead">
        <div class="masthead__logo"><img src="/static/img/logo-lg.png"></div>
        <h2 class="masthead__description text-light">
          A lightweight and modular front-end solution for developing fast and powerful web interfaces.<br>
          Build rich, smart HTML5 and JavaScript apps for any platform, browser, or device.
        </h2>
        <div class="masthead__button-links">
         <span class="masthead__button-portal">
           <router-link class="button button--action"  to="/desktop/design"><span><img src="/static/img/computer.png" alt=""></span>Desktop Documentation</router-link>
                <a class="portal-desc"  target="_blank" href="/static/file/ai-taurus-desktop.zip">Taurus Desktop（Version 0.1.11）</a>
              </span>
          <span class="masthead__button-portal">
            <router-link class="button button--info" to="/mobile/component"><span><img src="/static/img/smartphone.png" alt=""></span>Mobile Documentation</router-link>
                <a class="portal-desc" target="_blank" href="/static/file/ai-taurus-desktop.zip">Taurus Mobile（Version 0.1.11）</a>
              </span>
        </div>
      </div>
      <ul class="doc-banner-item" ref='hoverMove'>
        <li class="layer" data-depth="0.30"><img src="/static/img/home-banner-bg-hover.png"></li>
      </ul>
    </div>
    <!--banner end-->
    <!--feature start-->
    <div class="taurus-advantages">
      <dl>
        <dt><img src="/static/img/responsive.jpg" alt=""></dt>
        <dd class="text-size--30 text-light trailer ">Responsive</dd>
        <dd class="text-light text-size--16">With the mobile-first approach UIkit provides a consistent experience from phones and tablets to desktops.</dd>
      </dl>

      <dl>
        <dt><img src="/static/img/components.png" alt=""></dt>
        <dd class="text-size--30 text-light trailer">Components</dd>
        <dd class="text-light text-size--16">A collection of small, responsive components using consistent and conflict-free naming conventions.</dd>
      </dl>
      <dl>
        <dt><img src="/static/img/engineering.jpg" alt=""></dt>
        <dd class="text-size--30 text-light trailer">Engineering</dd>
        <dd class="text-light text-size--16">Taurus use Webpack as module bundler, use Gulp as task manage tool.UI Component is developed in SASS to write well-structured, extendable code which is easy to maintain.</dd>
      </dl>
      <dl>
        <dt><img src="/static/img/easy.png" alt=""></dt>
        <dd class="text-size--30 text-light trailer">Usability</dd>
        <dd class="text-light text-size--16">Taurus uses a common JavaScript language and standards so that it’s easy for any JavaScript developer to get started.</dd>
      </dl>
      <dl>
        <dt><img src="/static/img/customizer.jpg" alt=""></dt>
        <dd class="text-size--30 text-light trailer">Customizer</dd>
        <dd class="text-light text-size--16">You can customize your build to include or remove certain elements, as well as define the size of columns, colors, font size and more.</dd>
      </dl>
    </div>
    <!--feature end-->
    <!--vision start-->
    <div class="doc-vision text-light">Focus on improve UX for user and developer.</div>
    <!--vision end-->
    <!--case start-->
    <div class="doc-case">
      <div class="doc-case_mast">
        <h1>CASE</h1>
        <p>https://www.telenor.dk/</p>
        <a class="button button--accept" target="_blank" href="https://www.telenor.dk/">View</a>
      </div>
    </div>
    <!--case start-->
    <div class="doc-footer text-light">All Rights Reserved Copyright @2016 Asiainfo</div>
  </div>
</template>
<script>
    import THeader from '../../components/Header/'
    export default{
      components: {
        THeader
      },
      mounted () {
        var scene = this.$refs.hoverMove
        new Parallax(scene)
      }
    }

</script>
<style lang="scss" scoped>
  /*大图*/
  .doc-banner{
    /*padding-top:105px;*/
    background-image:url(/static/img/home-banner-bg.png);
    background-repeat: repeat-x;;
    background-position:center top;
    color:#fff;
    height: 907px;
    text-align: center;
    position: relative;
  }
  .doc-banner-item{
    position: absolute;
    top:0;
    right:0;
    left:0;
    bottom:0;
    background-image:url(/static/img/home-banner-bg1.png);
    background-repeat: no-repeat;
    background-position: center -70px;
    z-index: 1;
    overflow: hidden;
    /*width:100%;*/
  }
  .masthead {
    position: relative;
    z-index: 2;
    margin: 0 auto;
    padding:200px 50px 100px 50px;

  }
  .masthead__button-links .button{
    height: 50px;
    width: 100%;
    line-height: 48px;
    border:0 none;
    display: block;
  }
  .masthead__button-portal {
    display: inline-block;
    width: 280px;
  }
  .masthead__button-portal:first-child {
    margin-right:30px;
  }
  .portal-desc {
    display: block;
    text-align: center;
    font-size: 14px;
    line-height: 18px;
    margin-top:15px;
    opacity:.5;
    color:#c0e2f5;
    cursor: pointer;
  }
  .portal-desc:hover {
    opacity:1;
    text-decoration: underline;
  }
  .masthead__button-links .button--action{
    margin-right: 30px;
    border:0 none;
  }
  .button>span {
    display: inline-block;
    width: 28px;
    height:28px;
    margin-right:10px;
    vertical-align: middle;
  }
  .button>span img {
    width:100%;
  }
  .button--info{
    background-color: #29c0c2;
    color: #fff;
  }
  .button--info:hover{
    border-color: #29c0c2;
    background-image: -webkit-gradient(linear, left top, left bottom, from(#25bbbd), to(#36ccce));
    background-image: -webkit-linear-gradient(top, #25bbbd 0%, #36ccce 100%);
    background-image: linear-gradient(to bottom, #25bbbd 0%, #36ccce 100%);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF0296E5', endColorstr='#FF038CD6', GradientType=0);
    color: #fff;
  }

  .masthead__description{
    padding-top: 40px;
    padding-bottom: 60px;
    font-size: 21px;
    line-height: 30px;
    color: #c0e2f5;
  }

  /*特性*/
  .taurus-advantages{
    text-align: center;
    padding:90px 0;
    margin:0 auto;
  }
  .taurus-advantages dl{
    display: inline-block;
    width:310px;
    vertical-align: top;
    padding:0 50px;
  }
  .taurus-advantages dl.center{
    margin:0 90px;
  }
  .taurus-advantages dl dt,
  .taurus-advantages dl dd{
    margin:0;
  }
  .taurus-advantages dl dt {
    margin:20px;
  }
  .taurus-advantages dl dd.text-size--21{
    margin-top:30px;
    margin-bottom:20px;
  }
  /*愿景*/
  .doc-vision {
    background: #006ea7;
    text-align:center;
    font-size: 44px;
    color:white;
    padding:80px 50px;
    line-height: 1.5
  }
  /*案例*/
  .doc-case {
    background: url('/static/img/case.png') no-repeat center top;
    /*background-size: cover;*/
    height:1180px;
    position:relative;
  }
  .doc-case_mast {
    padding: 100px;
  }
  .doc-case_mast h1 {
    font-size:68px;
    color: white;
    font-weight: 100;
    margin-bottom: 40px;
  }
  .doc-case_mast p {
    color: #fff;
    margin-bottom: 30px;
    font-size:24px;
  }
  .doc-case_mast .button {
    border : 0 none;
    width:100px;
  }
  /*底部*/
  .doc-footer{
    background-color: #0d151c;
    height: 80px;
    margin: 0 auto;
    color: #14293c;
    text-align:center;
    font-size: 16px;
    line-height: 80px;
    color:#5780a6;
  }


  /*
	// Extra small devices (portrait phones, less than 544px)
	*/
  @media (max-width: 544px){
    .masthead {
      padding-top:120px;

    }
    .masthead__logo {
      width:300px;
      margin: 0 auto;
    }
    .masthead__button-links {
      padding-top:50px
    }
    .masthead__button-links .button {
      height:60px;
      line-height: 60px;
      font-size: 18px;
    }
    .masthead__button-portal {
      display: block;
      width: auto;
    }
    .masthead__button-portal:first-child {
      margin-right:0;
      margin-bottom:40px;
    }
    .masthead__description {
      font-size: 18px;
      line-height: 25px;
    }
    .doc-case_mast {
      padding:100px 50px;
      text-align: center;
    }
    .doc-case {
      height:600px;
    }
    .doc-vision {
      font-size: 34px;
    }
    .button>span {
      height:45px;
    }
  }
  /*
	// Small devices (landscape phones, 544px and up)
	*/
  @media (min-width: 545px) and (max-width:768px){
    .masthead {
      padding-top:120px;
    }
    .masthead__button-links {
      padding-top:30px
    }
    .doc-case_mast {
      padding:100px 50px;
      text-align: center;
    }
    .doc-case {
      height:600px;
    }
    .doc-vision {
      font-size:40px;
    }
    .masthead__button-links .button {
      height:60px;
      line-height: 60px;
      font-size: 18px;
    }
    .masthead__button-portal {
      display: block;
      width: auto;
    }
    .masthead__button-portal:first-child {
      margin-right:0;
      margin-bottom:40px;
    }
    .masthead__description {
      font-size: 18px;
      line-height: 25px;
    }
    .button>span {
      height:45px;
    }
  }
  /*
	// Medium devices (tablets, 768px and up)
	*/
  @media (min-width: 769px) and (max-width:992px){
    .doc-case_mast {
      padding:100px 100px;
      text-align: left;
    }
  }
  /*
	// Large devices (desktops, 992px and up)
	*/
  @media (min-width: 993px) and (max-width:1200px) {

  }
  /*
	// Extra large devices (large desktops, 1200px and up)
	*/
  @media (min-width: 1201px) {

  }

</style>
