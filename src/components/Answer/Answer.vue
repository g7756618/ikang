<template lang="html">
  <transition name="fade">
    <div class="answer">
      <h3>{{answerDetail.question}}</h3>
      <p v-for="answer in answerDetail.answer">{{answer}}</p>
      <span>是否有用？</span>
      <div class="icon">
        <i class="fa fa-hand-pointer-o" aria-hidden="true" @click="toast"></i>
        <i class="fa fa-hand-rock-o" aria-hidden="true" @click="toast"></i>
      </div>
    </div>
  </transition>
</template>

<script>
import { Toast } from 'mint-ui';
import Data from '@/data'
export default {
  name: 'answer',
  data(){
    return {
      msg:'answer page',
      answerDetail:[],
      success:false
    }
  },
  methods:{
    toast(){
      if ( this.success ) {
        Toast({
          message: '您已评价完毕',
          iconClass: 'fa fa-smile-o',
          duration: '1000'
        });
      } else {
        this.success = true;
        // 此处需要跑接口，将成功信息传递到后台存储，通常存储在redis中
        Toast({
          message: '操作成功',
          iconClass: 'fa fa-smile-o',
          duration: '1000'
        });
      }
    }
  },
  mounted(){
    // axios通过$route.params.id和$route.params.answer来获取当前数据
    // 此处做数据模拟
    // axios.get('url/id/answer').then().catch()
    let _this = this;
    Data.helpInfo.forEach(function(item, index, array){
      if ( item.id == _this.$route.params.id ) {
        _this.answerDetail = item.detail[_this.$route.params.answer]
      }
    })
  }
}
</script>

<style lang="less" scope>
.answer{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  padding: .15rem;
  h3{
    font-size: .18rem;
    font-weight: 400;
  }
  p{
    font-size: .14rem;
    color: #666;
    margin: .1rem 0;
    line-height: .2rem;
  }
  span{
    float: right;
    color: #999;
    font-size: .14rem;
  }
  .icon{
    clear: both;
    float: right;
    margin-right: .1rem;
    margin-top: .05rem;
    i{
      padding: 0 .05rem;
    }
  }
}
</style>
