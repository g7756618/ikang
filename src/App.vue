<!-- 结构部分 -->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<!-- 逻辑部分 -->
<script>
// 导入初始化样式以及媒体查询样式
import '@/assets/css/reset.css';
import '@/assets/css/query.css';
// 数据导出
export default {
  name: 'app'
}
</script>
<!-- 样式部分 -->
<style>
  html,body{
    background: #f5f4f9;
    font-family: 'Microsoft Yahei',sans-serif;
    font-size: 100px;
  }
</style>
