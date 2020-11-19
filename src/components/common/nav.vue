<template>
  <div class="navBar_box">
    <nav class="navbar navbar-expand-lg fixed-top navbar-light box-shadow bg-white">
      <div class="container px-0 d-flex justify-content-between">
        <a @click="anchorTo('#index')" class="logoBox d-flex align-items-center" >
          <img src="../../assets/site/img/logo_mobile.png" width="100%" height="100%" alt="广东乾润科技发展有限公司"  v-if="device==='Mobile' || screenWidth<=750"/>
          <img src="../../assets/site/img/logo.png" width="100%" height="100%" alt="广东乾润科技发展有限公司" v-else/>
        </a>
        <button class="navBtn navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navBar navbar-collapse justify-content-end collapse" id="navbarSupportedContent" style="">
          <ul class="navbar-nav">
            <li :class="ontap==='#index'?'navItem onTap':'navItem'" @click="anchorTo('#index')">首页</li>
            <li :class="ontap==='#company'?'navItem onTap':'navItem'" @click="anchorTo('#company')">公司简介</li>
            <li :class="ontap==='#content'?'navItem onTap':'navItem'" @click="anchorTo('#content')">服务内容</li>
            <li :class="ontap==='#production'?'navItem onTap':'navItem'" @click="anchorTo('#production')">产品介绍</li>
            <li :class="ontap==='#branch'?'navItem onTap':'navItem'" @click="anchorTo('#branch')">分支机构</li>
            <li :class="ontap==='#contact'?'navItem onTap':'navItem'" @click="anchorTo('#contact')">联系我们</li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: "navBar",
    data() {
      return {
        device: '',
        screenWidth: '',
        ontap: '#index',
      };
    },
    created() {
      if (this.isMobile()) {
        this.device = 'Mobile';
      } else {
        this.device = 'PC';
      }
    },
    mounted() {
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
      anchorTo(name) {
        this.ontap = name;
        document.querySelector(name).scrollIntoView(true);
      }
    }
  };
</script>


<style scoped>
  button:focus {
    outline: none;
  }

  .logoBox {
    width: 10rem;
    height: 1.875rem;
    cursor: pointer;
  }

  .navItem {
    position: relative;
    font-size: 1rem;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 600;
    color: #333333;
    line-height: 2.5rem;
    box-sizing: border-box;
    margin: 0px 1.5rem;
    cursor: pointer;
  }

  .navItem:hover,
  .onTap {
    color: #296EF0;
  }

  .navItem:hover::after,
  .onTap::before {
    position: absolute;
    bottom: 0px;
    left: 0px;
    content: '';
    width: 100%;
    height: 3px;
    background-color: #296EF0;
  }

  @media (max-width: 767.98px) {
    .logoBox {
      width: 9.375rem;
      height: 1.75rem;
    }
  }
</style>
