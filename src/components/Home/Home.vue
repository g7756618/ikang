<template>
  <transition name="fade">
    <div class="home">
      <div v-show="!showPosition">
        <!-- mint-ui 头部 -->
        <mt-header title="爱康国宾" fixed>
          <mt-button @click.native="showPosition = true" slot="left">{{local}}</mt-button>
          <router-link to="/help" slot="right">
            <mt-button>帮助</mt-button>
          </router-link>
        </mt-header>
        <!-- 轮播区域 -->
        <mt-swipe :show-indicators="false" :auto="3000" :speed="1000" :stop-propagation="true">
            <mt-swipe-item v-for="swipeList in swipeSrc">
              <router-link :to="'swipe/'+swipeList.id">
                <img :src="swipeList.imgSrc" alt="">
              </router-link>
            </mt-swipe-item>
        </mt-swipe>
        <!-- 欢迎区域 -->
        <section class="welcome">
          <h2>您好 L.Mark</h2>
          <p>午后多饮水，促进代谢有活力。</p>
        </section>
        <!-- 导航区域 -->
        <nav>
          <article class="examination">体检</article>
          <article class="tooth">齿科</article>
          <article class="register">挂号</article>
        </nav>
        <!-- 产品列表区域 -->
        <div class="product">
          <h3>齿科</h3>
          <section class="">
            <article class="">
              <img src="http://ikang-app.b0.upaiyun.com/161117011453" alt="">
              <div class="desc">
                <span>￥1,500.00</span>
                <h4>洁牙美护系列（含冷光美白）</h4>
                <p>帮助变色牙恢复洁白靓丽色泽</p>
              </div>
            </article>
            <article class="">
              <img src="http://ikang-app.b0.upaiyun.com/161117011453" alt="">
              <div class="desc">
                <span>￥1,500.00</span>
                <h4>洁牙美护系列（含冷光美白）</h4>
                <p>帮助变色牙恢复洁白靓丽色泽</p>
              </div>
            </article>
            <article class="">
              <img src="http://ikang-app.b0.upaiyun.com/161117011453" alt="">
              <div class="desc">
                <span>￥1,500.00</span>
                <h4>洁牙美护系列（含冷光美白）</h4>
                <p>帮助变色牙恢复洁白靓丽色泽</p>
              </div>
            </article>
          </section>
          <h3>齿科</h3>
          <section class="">
            <article class="">
              <img src="http://ikang-app.b0.upaiyun.com/161117011453" alt="">
              <div class="desc">
                <span>￥1,500.00</span>
                <h4>洁牙美护系列（含冷光美白）</h4>
                <p>帮助变色牙恢复洁白靓丽色泽</p>
              </div>
            </article>
            <article class="">
              <img src="http://ikang-app.b0.upaiyun.com/161117011453" alt="">
              <div class="desc">
                <span>￥1,500.00</span>
                <h4>洁牙美护系列（含冷光美白）</h4>
                <p>帮助变色牙恢复洁白靓丽色泽</p>
              </div>
            </article>
            <article class="">
              <img src="http://ikang-app.b0.upaiyun.com/161117011453" alt="">
              <div class="desc">
                <span>￥1,500.00</span>
                <h4>洁牙美护系列（含冷光美白）</h4>
                <p>帮助变色牙恢复洁白靓丽色泽</p>
              </div>
            </article>
          </section>
        </div>
        <!-- 底部导航 -->
        <mt-tabbar v-model="current" fixed>
          <mt-tab-item id="首页">首页</mt-tab-item>
          <mt-tab-item id="订单">订单</mt-tab-item>
          <mt-tab-item id="我的">我的</mt-tab-item>
        </mt-tabbar>
      </div>
      <!-- 选择区域组件过度动画 -->
      <transition name="fade">
        <chose-city v-show="showPosition" :currentCity="local" @choseCity="setCity"></chose-city>
      </transition>
    </div>
  </transition>
</template>

<script>
import ChoseCity from '@/components/Position/Position'
import Data from '@/data'
export default {
  name: 'home',
  data () {
    return {
      current:'首页',
      // local:'定位中',
      local: this.$cookie.get('local') || '定位中',
      showPosition: false,
      swipeSrc:[]
    }
  },
  methods:{
    setCity(val){
      this.local = val.city;
      this.$cookie.set('local', val.city);
      this.showPosition = val.isShow;
    }
  },
  components:{
    'chose-city':ChoseCity
  },
  mounted(){
    let _this = this;
    // 定位
    if ( _this.$cookie.get('local') == undefined ) {
      let mapObj = new AMap.Map('iCenter');
      mapObj.plugin(["AMap.Geolocation"], function() {
        var geolocation = new AMap.Geolocation({
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        });
        geolocation.getCityInfo(function(status,result){
          if(status == 'complete'){
            _this.$cookie.set('local', result.city);
            _this.local = result.city
          } else {
            _this.local = '定位失败'
            _this.$cookie.set('local', '定位失败');
          }
        });
      });
    }

    // 轮播图地址获取
    Data.swipeInfo.forEach((item, index, array)=>{
      _this.swipeSrc.push({
        id: item.id,
        imgSrc: item.imgSrc
      })
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scope>
#app{
  .home{
    font-size: .16rem;
    background-color: #f5f4f9;
    padding-bottom: .3rem;
    // 过度动画
    .fade-enter-active, .fade-leave-active {
      transition: opacity 1s;
    }
    .fade-enter, .fade-leave-active {
      opacity: 0;
    }
    // 头部样式
    .mint-header{
      height: .5rem;
      background-color: #f1f3f4;
      border-bottom: .01rem solid #DDD;
      color: #000;
    }
    // 轮播样式
    .mint-swipe{
      margin-top: .5rem;
      .mint-swipe-items-wrap{
        height: 0;
        padding-bottom: 100%;
        .mint-swipe-item{
          height: 0;
          padding-bottom: 100%;
          a{
            display: block;
            overflow: hidden;
            img{
              max-width: 100%;
            }
          }
        }
      }
    }
    // 欢迎区域
    .welcome{
      padding: 0 .1rem;
      padding-bottom: .3rem;
      h2{
        font-size: .22rem;
        font-weight: 400;
        height: .4rem;
      }
      p{
        text-align: right;
        color: #737373;
      }
    }
    // 导航区域
    nav{
      display: flex;
      justify-content: space-around;
      article{
        flex: 0 1 auto;
        text-align: center;
        padding: .2rem;
        color: #fff;
        box-shadow: 0 0 .05rem #999;
        &:nth-child(1){
          background-color: #ff9f0a;
        }
        &:nth-child(2){
          background-color: #4982b7;
        }
        &:nth-child(3){
          background-color: #1bbcc6;
        }
      }
    }
    // 产品列表区域
    .product{
      padding: .2rem 0;
      h3{
        font-size: .20rem;
        font-weight: 500;
        padding-left: .1rem;
      }
      section{
        margin: .1rem;
        // flex之前的布局方式，需添加前缀
        display: -webkit-box;
        overflow-x: scroll;
        -webkit-overflow-scrolling: touch;
        article{
          padding: .05rem;
          line-height: .3rem;
          position: relative;
          box-shadow: 0 0 .05rem #ccc;
          background-color: #fff;
          border-radius: .05rem;
          margin: .03rem;
          img{
            max-width: 100%;
          }
          span{
            position: absolute;
            left: .05rem;
            top: 50%;
            background-color: #FF9931;
          }
          h4{
            font-size: .17rem;
            padding-left: .1rem;
          }
          p{
            color: #737373;
            padding-left: .1rem;
          }
        }
      }
    }
    .mint-tabbar{
      height: .5rem;
      line-height: .5rem;
      border-top: .01rem solid #eee;
      .mint-tab-item{
        padding: 0;
        .mint-tab-item-label{
          height: .5rem;
          line-height: .5rem;
          font-size: .14rem;
        }
        &.is-selected{
          background-color: transparent;
          color: #FF9F0A;
        }
      }
    }
  }
}
</style>
