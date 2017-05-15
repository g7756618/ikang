<template lang="html">
  <transition name="fade">
    <div class="help">
      <!-- 头部区域 -->
      <mt-header title="帮助中心">
        <router-link to slot="left" @click.native="$router.go(-1)">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <!-- 问题列表区域 -->
      <ul class="help-list">
        <router-link  v-for="helpList in helpInfo" :to="'/help/detail/'+helpList.id">
          <li>
            <h3>{{helpList.title}}</h3>
            <p>{{helpList.desc}}</p>
          </li>
        </router-link>
      </ul>
      <!-- 电话联系区域 -->
      <p>客服电话: <a href="tel:400-810-0122">400-810-0122</a></p>
      <!-- <input type="file" accept="image/*"/> -->
      <!-- <input type="file" capture="camera" accept="image/*"/> -->
      <!-- 问题详情 -->
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
  </transition>
</template>

<script>
import Data from '@/data'
export default {
  name: 'help',
  data(){
    return {
      helpInfo: []
    }
  },
  mounted(){
    // 当前help页面是由路由配置加载的页面，数据需要通过异步请求后台拿取数据
    // 此处后台接口未搭建，所以暂做数据的模拟,导入模拟好的json数据
    // this.$axios.get('url?param').then((response)=>{}).catch((error)=>{})
    this.helpInfo = Data.helpInfo;
  }
}
</script>

<style lang="less" scope>
#app{
  height: 100%;
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
  .help{
    height: 100%;
    font-size: .16rem;
    // 头部样式
    .mint-header{
      height: .5rem;
      background-color: #f1f3f4;
      border-bottom: .01rem solid #DDD;
      color: #000;
    }
    // 问题列表样式
    .help-list{
      margin: 0 .15rem;
      margin-top: .15rem;
      border: .01rem solid #ccc;
      box-shadow: 0 0 .05rem #ccc;
      li{
        border-bottom: .01rem solid #ddd;
        padding: .1rem;
        line-height: .2rem;
        h3{
          font-weight: 300;
        }
        p{
          font-size: .14rem;
          color: #737373;
        }
      }
    }
    &>p{
      margin: .15rem;
      a{
        color: orange;
      }
    }
  }
}
</style>
