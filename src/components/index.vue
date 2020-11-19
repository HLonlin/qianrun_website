<template>
  <div class="Index" id="index">
    <Navbar></Navbar>
    <div class="banner_box">
      <img v-if="device==='Mobile' || screenWidth<=750" class="banner" src="../assets/site/img/banner_mobile.jpg">
      <img v-else class="banner" src="../assets/site/img/banner_pc.jpg">
    </div>
    <div class="container px-0 d-flex flex-column justify-content-md-center">
      <div class="tabBox" id="company">
        <i class="tabLogo"></i>
        <div class="tabTitle">公司简介</div>
        <div class="tabTitleE">COMPANY PROFILE</div>
      </div>

      <p class="titleBig">校企信息化建设服务商</p>
      <div class="introductionText_box">
        <p class="introductionText">广东乾润科技发展有限公司，是一家专注于校企信息化产品研发、校企信息化体系建设服务提供商。我们致力成为众多学校、政府与社会组织机构以及企业信赖的长期合作伙伴。</p>
        <p class="introductionText">乾润科技深耕于校企信息化建设领域，提供校企信息化产品、构建信息化体系服务。公司自主研发的智慧校园、智慧网络、智慧零售三大核心产品体系，适用于各大高校、大中专院校等不同体系的各类学校、政府与社会组织机构、现代化农贸市场等应用场景。我们不断创新，追求极致的产品体验，为全面提升校企信息管理水平、提升用户体验，为推动校企信息化建设赋能。</p>
        <p class="introductionText">我们通过资产重组，控股广州市乾润信息技术有限公司，广州斑驴文化传播有限公司两家分支机构，深层次的发展信息化建设项目型孵化、文化信息平台建设，更全面的满足用户以及合作伙伴在工作、生活、精神建设上深层次的需求。</p>
      </div>

      <p class="qianrunServer_title">乾润服务</p>
      <div class="qianrunServer_banner">
        <img v-if="device==='Mobile' || screenWidth<=750" class="banner" src="../assets/site/img/serverItemMobile.png"
          alt="乾润服务">
        <img v-else class="banner" src="../assets/site/img/serverItemPc.png" alt="乾润服务" style="margin-top: 3.125rem;">
      </div>


      <div class="tabBox tabBox_marginAround" id="content">
        <i class="tabLogo" style="margin-top: 2rem;"></i>
        <div class="tabTitle">服务内容</div>
        <div class="tabTitleE">SERVICE CONTENT</div>
      </div>

      <div class="service_introduction">
        <div class="server_text server_textBlack">乾润科技致力于通过长效的信息化技术手段，帮助客户构建优秀的、可持续发展的信息化建设系统。</div>
        <div class="server_title">
          <div class="server_logoBox">
            <img v-if="device==='Mobile' || screenWidth<=750" src="../assets/site/img/serveritem_mobile1.png" alt="">
            <img v-else class="server_logo" src="../assets/site/img/serveritem_pc1.png" alt="" style="margin-left: 0.125rem;">
          </div>以客户为中心，为客户创造价值
        </div>
        <div class="server_text ">乾润科技为学校、企业与社会组织机构提供校企信息化产品，构建校企信息化解决方案，为校企信息化建设与价值效益提升赋能。</div>
        <div class="server_title">
          <div class="server_logoBox">
            <img v-if="device==='Mobile' || screenWidth<=750" src="../assets/site/img/serveritem_mobile2.png" alt="">
            <img v-else class="server_logo" src="../assets/site/img/serveritem_pc2.png" alt=""></div>为您提供高性能的软件产品
        </div>
        <div class="server_text "><span class="server_textBlack">智慧校园：</span>以学校日常管理、师生基础为核心，融合学校数据中台（OpenAPI）、数字化校园系统、OA办公、教务系统、人力资源管理系统、评价考核系统、在线课堂、线上考试系统、教学资源管理系统、网站系统、校园安全等信息化管理系统,为学校提供一体化的综合解决方案，搭建智慧校园综合服务平台。优化校园一站式生活体验，提升校园安全系数，降低学校管理成本。</div>
        <div class="server_text "><span class="server_textBlack">智慧网络：</span>SmartPortal无线认证平台解决学校师生校园账号上网和计费功能，可集成AC、AP管理、可满足校园上网行为管理、日志数据追踪、等保要求。SmartCloud融合云安全平台集成堡垒机服务、WebProxy、密码审计、日志管理、服务器监控、一键巡检功能等。</div>
        <div class="server_text "><span class="server_textBlack">智慧零售：</span>以信息化手段建立长效的、可持续发展的社区菜市场、农贸商城销售、运营管理机制，结合清算支付系统、信息管理系统、溯源管理系统，构建示范性智能化农贸销售体系。</div>
        <div class="server_title">
          <div class="server_logoBox">
            <img v-if="device==='Mobile' || screenWidth<=750" src="../assets/site/img/serveritem_mobile3.png" alt="">
            <img v-else class="server_logo" src="../assets/site/img/serveritem_pc3.png" alt="">
          </div>为您构建一体化信息化体系
        </div>
        <div class="server_text ">乾润科技坚持统筹兼顾、分步实施、统一平台、统一管理、资源共享、稳定安全原则，在整合利用现有资源的基础上，不断优化、完善系统服务功能，构建集信息开发、应用、管理、服务与建设一体化的信息化体系。</div>
        <div class="server_title">
          <div class="server_logoBox">
            <img v-if="device==='Mobile' || screenWidth<=750" src="../assets/site/img/serveritem_mobile4.png" alt="">
            <img v-else class="server_logo" src="../assets/site/img/serveritem_pc4.png" alt="">
          </div>为您提供安全可靠的系统产品
        </div>
        <div class="server_text ">乾润科技产品 通过通信数据加密、基于ukey的数据加密解密、定期漏洞扫描等多种手段来确保软件系统安全；最高可满足计算机等级保护2.0三级要求。</div>
        <div class="server_title">
          <div class="server_logoBox">
            <img v-if="device==='Mobile' || screenWidth<=750" src="../assets/site/img/serveritem_mobile5.png" alt="">
            <img v-else class="server_logo" src="../assets/site/img/serveritem_pc5.png" alt="">
          </div>7*24无忧服务
        </div>
        <div class="server_text ">7*24小时无忧服务，技术大牛即呼即应，为系统安全保驾护航。</div>
      </div>

      <div class="tabBox" id="production">
        <i class="tabLogo"></i>
        <div class="tabTitle">产品介绍</div>
        <div class="tabTitleE">PRODUCTION</div>
      </div>

      <div class="production_box d-flex flex-wrap justify-content-center">
        <div class="production_imgBox">
          <div class="production_logoBox">
            <div class="production_logo"></div>
            <div class="production_textBox">
              <p class="production_text">智慧校园</p>
              <p class="production_textE">SMART CAMPUS</p>
            </div>
          </div>
          <div class="production_content">智慧校园是乾润科技公司自主研发的针对校内管理的整体解决方案。通过基础设施搭建和服务的配置，可以让学校快速完成基础信息化建设或者改造，让数据更快的能够流转和存储，并通过分析产生价值。解决方案能有效地帮助教师们提高工作效率和教学质量50%以上，目前已有较多高校和职校引入使用智慧校园平台。智慧校园移动端可提供app，小程序，公众号，企业微信整合方案。</div>
        </div>
        <div class="production_txtBox">
          <img src="../assets/site/img/campusBox_right.jpg" width="100%" height="100%" alt="">
        </div>
      </div>

      <div class="production_box d-flex flex-wrap justify-content-center" v-if="device==='Mobile' || screenWidth<=992">
        <div class="production_imgBox production_bgNetwork">
          <div class="production_logoBox">
            <div class="production_logo"></div>
            <div class="production_textBox">
              <p class="production_text">智慧网络</p>
              <p class="production_textE">SMART NETWORK</p>
            </div>
          </div>
          <div class="production_content">
            智慧化网络管理服务，涵盖无线认证、混合云一体化管理、网络安全、设备监控、日志监控和日志分析、口令管理平台等，让科技改变传统网络管理模式。<br>
            核心产品SmartPortal无线认证平台，计费平台，可让您轻松解决混合品牌无线网络认证，漫游不掉线。<br>
            核心产品SmartCloud融合云安全平台，提供堡垒机服务、安全WebProxy、安全内外网穿透，轻松管理、应用庞大网络，减低管理成本。
          </div>
        </div>
        <div class="production_txtBox">
          <img src="../assets/site/img/networkBox_left.png" width="100%" height="100%" alt="">
        </div>
      </div>

      <div class="production_box d-flex flex-wrap justify-content-center" v-else>
        <div class="production_txtBox ">
          <img src="../assets/site/img/networkBox_left.png" width="100%" height="100%" alt="">
        </div>
        <div class="production_imgBox production_bgNetwork">
          <div class="production_logoBox">
            <div class="production_logo"></div>
            <div class="production_textBox">
              <p class="production_text">智慧网络</p>
              <p class="production_textE">SMART NETWORK</p>
            </div>
          </div>
          <div class="production_content">
            智慧化网络管理服务，涵盖无线认证、混合云一体化管理、网络安全、设备监控、日志监控和日志分析、口令管理平台等，让科技改变传统网络管理模式。<br>
            核心产品SmartPortal无线认证平台，计费平台，可让您轻松解决混合品牌无线网络认证，漫游不掉线。<br>
            核心产品SmartCloud融合云安全平台，提供堡垒机服务、安全WebProxy、安全内外网穿透，轻松管理、应用庞大网络，减低管理成本。
          </div>
        </div>
      </div>
      <div class="production_box d-flex flex-wrap justify-content-center">
        <div class="production_imgBox production_bgCashier">
          <div class="production_logoBox">
            <div class="production_logo"></div>
            <div class="production_textBox">
              <p class="production_text">智慧零售</p>
              <p class="production_textE">SMART RETAIL</p>
            </div>
          </div>
          <div class="production_content">为社区菜市场、农贸商城提供收银体系自动结算及收银、商品信息管理、商户管理、溯源管理和智慧化运营管理整体解决方案。实现市场业务智能化、一体化、可持续发展的管理机制，全面提升市场的管理水平及用户购物体验，同时为监管部门提供食品安全、信息安全保驾护航。</div>
        </div>
        <div class="production_txtBox">
          <img src="../assets/site/img/cashierBox_right.jpg" width="100%" height="100%" alt="">
        </div>
      </div>

      <div class="tabBox" id="branch">
        <i class="tabLogo"></i>
        <div class="tabTitle">分支机构</div>
        <div class="tabTitleE">BRANCH</div>
      </div>
      <div class="logo_box">
        <div class="qianrun_logoBox">
          <img class="qianrun_logo" src="../assets/site/img/qianrunLogo.png">
        </div>
        <div class="banlv_logoBox">
          <img class="banlv_logo" src="../assets/site/img/banlvLogo.png">
        </div>
      </div>

    </div>
    <div class="bg-contact">
      <div class="container px-0 d-flex flex-column align-items-center justify-content-center">
        <div class="tabBox" id="contact">
          <i class="tabLogo"></i>
          <div class="tabTitle">联系我们</div>
          <div class="tabTitleE">CONTACT US</div>
        </div>
        <div class="contact-showbox d-flex flex-wrap justify-content-center">
          <div class="contact-detail box-shadow d-flex flex-column justify-content-center align-items-start">
            <div class="contact_title">联系方式</div>
            <div class="contact_companyName">广东乾润科技发展有限公司</div>
            <p class="contact_companyInfo text_indent2">公司地址：广州市天河区元岗路200号慧通产业园 B9栋503-504房</p>
            <p class="contact_companyInfo">联系电话：020-32378096</p>
            <p class="contact_companyInfo">服务邮箱：service@qianrun.com.cn</p>
          </div>
          <div class="map-detail box-shadow amap-container" id="map">
          </div>
        </div>
      </div>
      <div class="copyright">Copyright © 2020 广东乾润科技发展有限公司 版权所有
        <a href="http://beian.miit.gov.cn/" target="_blank" style="color: #6C757D;">粤ICP备2020088693号-1</a>
      </div>
    </div>
  </div>
</template>
<script>
  import Navbar from "../components/common/nav";
  export default {
    name: "Index",
    components: {
      Navbar,
    },
    data() {
      return {
        screenWidth: '',
        device: 'PC',
        AmapReady: false
      };
    },
    created() {
      if (this.isMobile()) {
        this.device = 'Mobile';
      } else {
        this.device = 'PC';
      }
      this.initMap();
    },
    mounted() {
      this.GaodeMap();
      this.listenWindowTouch();
      this.screenWidth = document.body.clientWidth;
      window.onresize = () => {
        return (() => {
          this.screenWidth = document.body.clientWidth;
        })();
      };
    },
    methods: {
      isMobile() { //检测是否移动端
        let flag = navigator.userAgent.match(
          /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
        )
        return flag;
      },
      initMap() { //异步加载高德地图
        let that = this;
        let url = 'https://webapi.amap.com/maps?v=1.4.15&key=ec80d96746ff5c0d00a94f5fb987ee59';
        let jsapi = document.createElement('script');
        jsapi.charset = 'utf-8';
        jsapi.src = url;
        document.head.appendChild(jsapi);
        if (jsapi.readyState) { //IE
          jsapi.onreadystatechange = function() {
            if (jsapi.readyState == 'complete' || jsapi.readyState == 'loaded') {
              jsapi.onreadystatechange = null;
              that.AmapReady = true;
            }
          }
        } else {
          jsapi.onload = function() {
            that.AmapReady = true;
          }
        }
      },
      GaodeMap() { //实例化高德地图
        let that = this;
        let timer = setInterval(function() {
          if (that.AmapReady) {
            var map = new AMap.Map('map', {
              zoom: 18, //级别
              center: [113.338303, 23.176417], //中心点坐标
              viewMode: '3D' //使用3D视图
            });
            // 创建一个 Marker 实例：
            var marker = new AMap.Marker({
              position: new AMap.LngLat(113.338303, 23.176417),
              title: '广东乾润科技发展有限公司'
            });
            marker.setLabel({
              offset: new AMap.Pixel(-10, 30), //设置文本标注偏移量
              content: "广东乾润科技发展有限公司", //设置文本标注内容
              direction: 'right' //设置文本标注方位
            });
            // 将创建的点标记添加到已有的地图实例：
            map.add(marker);
            clearInterval(timer);
          }
        }, 100)
      },
      listenWindowTouch() { //移动端点击导航栏以外内容收起导航栏
        window.addEventListener('touchend', function(e) {
          let touchTarget = e.target.className;
          if (touchTarget.indexOf('navBtn') !== -1 || touchTarget.indexOf('navbar-toggler-icon') !== -1) {
            return;
          }

          let navBtn = document.getElementsByClassName('navBtn')[0];
          let navBar = document.getElementsByClassName('navBar')[0];
          let navOpen = navBtn.getAttribute('aria-expanded');
          if (navOpen === "true") {
            if (touchTarget.indexOf('navItem') === -1) {
              navBar.className = 'navBar navbar-collapse justify-content-end collapse';
              navBtn.setAttribute('aria-expanded', 'false')
            }
          }
        });
      }
    }
  };
</script>
<style type="text/css">
  .amap-marker-label {
    padding: 8px !important;
    border: none !important;
    border-radius: 5px !important;
    box-shadow: 0 2px 6px 0 rgba(114, 124, 245, 0.5) !important;
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Index {
    padding-top: 3.6rem;
  }

  .banner_box {
    width: 100%;
  }

  .banner {
    width: 100%;
  }


  .tabBox {
    text-align: center;
  }

  .tabLogo {
    display: inline-block;
    width: 2.1875rem;
    height: 2.1875rem;
    background-color: #296EF0;
    transform: rotate(45deg);
    text-align: center;
    margin-top: 5.625rem;
    margin-bottom: 1rem;
  }

  .tabTitle {
    font-size: 1.875rem;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #212529;
    text-align: center;
    box-sizing: border-box;
    padding-bottom: 0.75rem;
  }

  .tabTitleE {
    position: relative;
    font-size: 1rem;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #212529;
    letter-spacing: 0.25rem;
    text-align: center;
    box-sizing: border-box;
    padding-bottom: 1.25rem;
  }

  .tabTitleE::after {
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    content: '';
    width: 2.25rem;
    height: 0.1875rem;
    background-color: #296EF0;
  }

  .titleBig {
    font-size: 1.5rem;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 600;
    color: #212529;
    text-align: center;
    box-sizing: border-box;
    padding-top: 1.375rem;
    padding-bottom: 1.5625rem;
  }

  .introductionText_box {
    padding: 0rem 1rem;
  }

  .introductionText {
    font-size: 1.125rem;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #666666;
    text-indent: 2.5rem;
    box-sizing: border-box;
    padding-bottom: 0.625rem;
  }

  .qianrunServer_title {
    font-size: 1.5rem;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 600;
    color: #333333;
    text-align: center;
    box-sizing: border-box;
    padding-top: 3.125rem;
  }

  .tabBox_marginAround {
    margin-bottom: 1rem;
    margin-top: 3.625rem;
    padding-top: 3.625rem;
    box-sizing: border-box;
  }

  .server_text {
    box-sizing: border-box;
    padding-left: 2.3125rem;
    padding-bottom: 1.25rem;
    font-size: 1.125rem;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #666666;
  }

  .server_textBlack {
    font-weight: 600;
    color: #333333;
  }

  .server_title {
    position: relative;
    box-sizing: border-box;
    padding: 0.625rem 0rem 0.75rem 2.3125rem;
    font-size: 1.25rem;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 600;
    color: #333333;
  }
  .server_logoBox {
    position: absolute;
    left: 0px;
    top: 50%;
    transform: translateY(-50%);
    display: inline-block;
    width: 2.3125rem;
    height: 100%;
    padding-top: 0.625rem;
    box-sizing: border-box;
  }



  .production_box {
    width: 100%;
    box-sizing: border-box;
    padding-top: 3.75rem;
  }

  .production_imgBox {
    width: 50%;
    min-width: 21.25rem;
    height: 100%;
    max-height: 25rem;
    min-height: 23.75rem;
    background-image: url(../assets/site/img/campus_left.png);
    background-repeat: no-repeat;
    background-size: cover;
    padding: 3.125rem 2.5rem;
    box-sizing: border-box;
  }

  .production_bgNetwork {
    background-image: url(../assets/site/img/network_right.png);
  }

  .production_bgCashier {
    background-image: url(../assets/site/img/cashier_left.png);
  }

  .production_txtBox {
    width: 50%;
    min-width: 21.25rem;
    box-shadow: 0.125rem 0 1rem 0.125rem rgba(0, 0, 0, 0.15);
  }

  .production_logoBox {
    height: 3.75rem;
    padding-bottom: 1.25rem;
    box-sizing: border-box;
  }

  .production_logo {
    float: left;
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 1.25rem;
    background-image: url(../assets/site/img/campus_logo.png);
    background-size: 100%;
    background-repeat: no-repeat;
  }

  .production_textBox {
    float: left;
    width: 7rem;
    height: 2.5rem;
  }

  .production_text {
    font-size: 1.5rem;
    line-height: 1.5rem;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #FFFFFF;
  }

  .production_textE {
    font-size: 0.75rem;
    line-height: 1.125rem;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #FFFFFF;
  }

  .production_content {
    font-size: 1.125rem;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #FFFFFF;
  }

  .logo_box {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0rem 1rem;
    margin-top: 3.75rem;
    text-align: center;
  }

  .logo_box::before {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 0.1875rem;
    height: 12.5rem;
    background-color: #296EF0;
    content: '';
  }

  .qianrun_logoBox,
  .banlv_logoBox {
    width: 45%;
  }

  .qianrun_logo,
  .banlv_logo {
    width: 100%;
  }

  .contcatBox {
    width: 93.75rem;
    height: 46.875rem;
    margin: 0 auto;
  }

  .bg-contact {
    min-height: 54.375rem;
    background-image: url(../assets/site/img/map.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: initial !important;
    position: relative;
    box-sizing: border-box;
    padding-bottom: 6rem;
  }

  .contact-showbox {
    width: 100%;
    max-width: 71.25rem;
    min-height: 21.25rem;
    margin-top: 4rem;
  }

  .contact-detail {
    width: 50%;
    min-width: 21.25rem;
    padding: 2.5rem;
    background-color: #f5f5f5;
  }

  .contact_title {
    font-size: 1.5rem;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #212529;
    margin-bottom: 2.5rem;
  }

  .contact_companyName {
    font-size: 1.25rem;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #212529;
    margin-bottom: 1.25rem;
  }

  .contact_companyInfo {
    font-size: 1.125rem;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #6C757D;
    margin-bottom: 1rem;
    letter-spacing: 0.0625rem;
  }

  .map-detail {
    width: 50%;
    min-width: 21.25rem;
    min-height: 21.25rem;
    position: relative;
  }

  .box-shadow {
    box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.05);
  }

  .copyright {
    position: absolute;
    bottom: 20px;
    width: 100%;
    padding: 0 3.8em;
    color: #666;
    font-size: 12px;
    text-align: center;
  }




  /* Large devices (desktops, less than 1200px) */
  @media (max-width: 1199.98px) {

    .production_imgBox,
    .production_txtBox {
      min-height: 20rem;
    }

    .production_imgBox {
      padding: 1.5rem 1.25rem;
    }

    .production_content {
      font-size: 1rem;
    }

    .middleLine {
      display: none;
    }
  }

  /* // Medium devices (tablets, less than 992px) */
  @media (max-width: 991.98px) {
    .production_box {
      width: 21.4375rem;
      margin: auto;
    }

    .production_imgBox,
    .production_txtBox {
      min-height: 15rem;
    }

    .contact-detail {
      padding: 1.875rem 1.25rem;
    }

    .contact_title {
      font-size: 1.25rem;
      margin-bottom: 1.25rem;
    }

    .contact_companyName {
      font-size: 1.125rem;
      margin-bottom: 0.625rem;
    }

    .contact_companyInfo {
      font-size: 1rem;
      margin-bottom: 0.625rem;
      letter-spacing: 0rem;
    }

    .text_indent2 {
      text-indent: -5em;
      margin-left: 5em;
    }

    .logo_box::before {
      display: none;
    }

  }

  /* less than 768px*/
  @media (max-width: 767.98px) {
    .tabLogo {
      width: 1.5625rem;
      height: 1.5625rem;
      margin-top: 1.875rem;
      margin-bottom: 0.75rem;
    }

    .tabTitle {
      font-size: 1.5rem;
      padding-bottom: 0.625rem;
    }

    .tabTitleE {
      font-size: 0.875rem;
      padding-bottom: 1.125rem;
    }

    .titleBig {
      padding-top: 1.375rem;
      padding-bottom: 0.8125rem;
      font-size: 1.25rem;
    }

    .introductionText {
      font-size: 1rem;
      letter-spacing: 0.115rem;
    }

    .qianrunServer_title {
      font-size: 1.25rem;
      padding-top: 1.25rem;
    }

    .tabBox_marginAround {
      margin-top: 0;
    }

    .server_textLine {
      font-size: 1rem;
      letter-spacing: 0.1rem;
    }

    .server_textTitle {
      font-size: 1.125rem;
    }

    .text_indent {
      text-indent: 2.2rem;
    }

    .server_marginAround {
      margin-bottom: 1.25rem;
    }


    .production_box {
      width: 100%;
      margin: auto;
    }

    .production_imgBox,
    .production_txtBox {
      width: 100%;
      min-height: 15rem;
      margin: 0rem 1rem;
    }

    .production_logoBox {
      height: 3.125rem;
      padding-bottom: 1.25rem;
    }

    .production_logo {
      width: 1.875rem;
      height: 1.875rem;
    }

    .production_text {
      font-size: 1.125rem;
      line-height: 0.8rem;
    }

    .production_textE {
      font-size: 0.75rem;
      line-height: 1.8rem;
    }

    .production_content {
      font-size: 0.875rem;
      letter-spacing: 0.16rem;
    }

    .logo_box {
      margin-top: 1rem;
    }

    .contact-detail,
    .map-detail {
      width: 100%;
      margin: 0 1rem;
    }

    .server_text {
      padding: 0rem 1rem 1.5625rem 1rem;
    }

    .server_title {
      padding: 0rem 1rem 0.75rem 2.6875rem;
    }
    .server_logoBox{
      width: 1.6875rem;
      left: 1rem;
      padding-top: 0rem;
    }
  }
</style>
