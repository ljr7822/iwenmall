<template>
  <div class="nav-bar" :class="{'is_fixed':isFixed}">
    <div class="container">
      <div class="pro-title">
        标题
      </div>
      <div class="pro-param">
        <a href="javascript:;">概述</a><span>|</span>
        <a href="javascript:;">参数</a><span>|</span>
        <a href="javascript:;">用户评价</a>
        <slot name="buy"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name:'nav-bar',
    props:{
      title:String
    },
    data(){
      return {
        // 初始化定位：否
        isFixed:false
      }
    },
    mounted(){
      // 绑定浏览器滚动事件
      window.addEventListener('scroll',this.initHeight)
    },
    methods:{
      initHeight(){
        // 计算高度：当滚动高度大于152时就吸顶
        // document.documentElement.scrollTop：获取滚动高度（document.body.scrollTop：IE浏览器）
        // window.pageYOffset：Y轴偏移量
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        this.isFixed = scrollTop > 152? true:false;
      }
    },
    // 去掉组件：销毁定义好的吸顶组件
    destroyed(){
      window.removeEventListener('scroll',this.initHeight,false)
    }
  }
</script>


<style lang="scss">
  @import './../assets/sass/config.scss';
  @import './../assets/sass/mixin.scss';
  .nav-bar{
    height:70px;
    line-height:70px;
    border-top:1px solid $colorH;
    background-color:$colorG;
    z-index:10;
    &.is_fixed{
      position:fixed;
      top:0;
      width:100%;
      box-shadow: 0 5px 5px $colorE;
    }
    .container{
      @include flex();
      .pro-title{
        font-size:$fontH;
        color:$colorB;
        font-weight:bold;
      }
      .pro-param{
        font-size:$fontJ;
        span{
          margin:0 10px;
        }
        a{
          color:$colorC;
        }
      }
    }
  }
</style>