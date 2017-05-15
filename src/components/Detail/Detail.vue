<template lang="html">
  <div class="detail">
    <!-- 问题列表区域 -->
    <ul class="help-list">
      <router-link  v-for="detailList,index in helpDetail" :to="$route.params.id+'/'+index">
        <li>
          <h3>{{detailList.question}}</h3>
        </li>
      </router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import Data from '@/data'
export default {
  name: 'detal',
  data(){
    return {
      helpDetail:[]
    }
  },
  mounted(){
    // let id = this.$route.params.id;
    // axios请求数据接口拿取对应id的数据详情
    // 此处做数据模拟
    // this.$axios.get('url/id').then().catch()
    let _this = this;
    Data.helpInfo.forEach(function(item, index, array){
      if (item.id == _this.$route.params.id) {
        _this.helpDetail = item.detail;
      }
    })
  }
}
</script>

<style lang="less" scope>
.detail{
  position: absolute;
  left: 0;
  right: 0;
  top: .5rem;
  bottom: 0;
  background-color: #fff;
  .help-list{
    li{
      height: .4rem;
      font-size: .14rem;
      font-weight: 00;
    }
  }
}
</style>
