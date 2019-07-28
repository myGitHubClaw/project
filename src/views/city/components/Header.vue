<template>
  <div class="header">
      城市选择
      <router-link class="iconfont span" to="/">&#xe624;</router-link> 
  </div>
</template>
<script>
export default {
  name: "cityHeader"
};
</script>

<style lang="less" scoped>
    @import "~@/assets/styles/varibles.less";
    .header{
        position: relative;
        color: #fff;
        text-align: center;
        line-height: @headerHeight;
        background:@bgColor;                                 
            .span{
                position:absolute;
                top:0;
                left:.11rem;
                width: .64rem;
                text-align: center;
                color: #fff;
            }
    }
</style>


