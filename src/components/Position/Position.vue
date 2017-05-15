<template lang="html">
  <div class="position">
    <!-- mint-ui 头部 -->
    <mt-header title="选择城市" fixed>
      <mt-button icon="back" slot="left" @click.native="getCity(currentCity)"></mt-button>
    </mt-header>
    <!-- 市区列表 -->
    <mt-tab-container>
      <mt-tab-container-item>
        <mt-cell v-for="city in citys" :title="city.city" :v-model="city.city" @click.native="getCity(city.city)"/>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
export default {
  name: 'position',
  props:['currentCity'],
  data(){
    return {
      citys: [
        {city: '北京市'},
        {city: '上海市'},
        {city: '广州市'},
        {city: '深圳市'},
        {city: '太原市'},
        {city: '大同市'}
      ]
    }
  },
  methods: {
    getCity(val){
      this.$emit('choseCity',{
        city: val,
        isShow: false
      });
    }
  }
}
</script>

<style lang="less" scope>
.position{
  position: absolute;
  background-color: #f1f3f4;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 1000;
  // 头部样式
  .mint-header{
    height: .5rem;
    background-color: #f1f3f4;
    border-bottom: .01rem solid #DDD;
    color: #000;
  }
  // 市区列表样式
  .mint-tab-container{
    padding-top: .5rem;
    a{
      background-color: #f5f4f9;
      border-bottom: .01rem solid #ccc;
    };
  }
}
</style>
