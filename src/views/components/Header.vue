<template>
  <div class="header">
      <div class="header-left">
          <div class="iconfont span">&#xe624;</div>
      </div>
      <div class="header-input">
          <span class="iconfont">&#xe632;</span>
          请输入城市/景点/游玩主题</div>
      <router-link class="header-right" to="/city">
          {{this.$store.state.city}}
          <span class="iconfont xia">&#xe64a;</span>
      </router-link>
  </div>
</template>

<script>
export default{
    // props:{
    //     city:String
    // }
}
</script>
<style lang="less" scoped>
    @import "~@/assets/styles/varibles.less";
    .header{
        line-height: .86rem;
        display: flex;
        background:@bgColor;
        .header-left{
            color: #fff;
            width: @headerHeight;
            float: left;
            .span{
                text-align: center;
            }
        }
        .header-input{
            padding-left: .5em;
            flex:1;
            text-align: left;
            height:.62rem;
            line-height: .62rem;
            background: #fff;
            margin-top: .12rem;
            margin-left: .2rem;
            border-radius: .1rem;
        }
        .header-right{
            color: #fff;
            text-align: center;
            min-width:1.04rem;
            padding: 0 .1rem;
            float:right;
            .xia{
                margin-left: -.04rem;
                font-size: .24rem;
            }
        }


    }
</style>

