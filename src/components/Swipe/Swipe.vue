<template lang="html">
  <transition name="fade">
    <div class="swipe">
      <!-- 头部区域 -->
      <mt-header fixed title="孝顺父母 爱需要及时">
          <mt-button icon="back" slot="left" @click.native="$router.go(-1)"></mt-button>
      </mt-header>
      <!-- 广告栏区域 -->
      <div class="banner">
        <img v-for="bannerList in bannerSrc" :src="bannerList" alt="">
      </div>
      <!-- 产品列表区域 -->
      <div class="product">
        <!-- <img v-for="productList in productSrc" :src="productList" alt=""> -->
        <img v-for="productList in productSrc" v-lazy="productList" alt="">
      </div>
      <!-- 此处是爱康国宾的APP下载地址，Android和iOS都可以通过应用商店的下载链接，直接跳转到下载页去下载该APP -->
      <!-- <a href="https://itunes.apple.com/app/id1135398319">aikang</a> -->
    </div>
  </transition>
</template>

<script>
import Data from '@/data'
export default {
  name: 'swipe',
  data () {
    return {
      bannerSrc: [],
      productSrc:[]
    }
  },
  mounted(){
    let _this = this;
    Data.swipeInfo.forEach( (item, index, array) => {
      if ( item.id == _this.$route.params.id ) {
        _this.bannerSrc = item.publicize.banner
        _this.productSrc = item.publicize.product
      }
    } )

  }
}
</script>

<style lang="less">
.swipe{
  background-color: #fcf8cb;
  padding-bottom: .2rem;
  // 过度动画
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
  a{
    color: #000;
    text-decoration: none;
  }
  // 头部样式
  .mint-header{
    height: .5rem;
    background-color: #f1f3f4;
    border-bottom: .01rem solid #DDD;
    color: #000;
  }
  // 广告区域
  .banner{
    margin-top: .5rem;
    img{
      max-width: 100%;
      vertical-align: middle;
    }
  }
  // 产品列表区域
  .product{
    text-align: center;
    img{
      max-width: 45%;
      &:nth-child(odd){
        margin-right: .1rem;
      }
    }
  }
}
</style>
