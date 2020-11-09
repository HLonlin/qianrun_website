<template>
  <div class="navBar_box">
    <nav class="navbar navbar-expand-lg fixed-top navbar-light box-shadow bg-white">
      <div class="container px-0 d-flex justify-content-between">
        <a href="#" class="logoBox d-flex align-items-center ">
          <img src="../../assets/site/img/logo.png" width="100%" height="100%" alt="广东乾润科技发展有限公司" />
          <h1 style="display: none">广东乾润科技发展有限公司</h1>
        </a>
        <button class="navBtn navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navBar navbar-collapse justify-content-end collapse" id="navbarSupportedContent" style="">
          <ul class="navbar-nav">
            <li :class="ontap==='#index'?'navItem onTap':'navItem'" @click="anchorTo('#index')">首页</li>
            <li :class="ontap==='#company'?'navItem onTap':'navItem'" @click="anchorTo('#company')">公司简介</li>
            <li :class="ontap==='#service'?'navItem onTap':'navItem'" @click="anchorTo('#service')">服务范围</li>
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
        ontap: '#index',
      };
    },
    created() {},
    methods: {
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
  }

  .navItem {
    position: relative;
    font-size: 1rem;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
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
</style>
