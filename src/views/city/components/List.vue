<template>
  <div class="list"  ref="wrapper">
    <div>
    <div class="area">
      <div class="title">当前城市</div>
      <div class="button-list">
        <div class="button-wapper">
          <div class="button">{{this.currCity}}</div>
        </div>
      </div>
    </div>

    <div class="area">
    <div class="title">热门城市</div>
      <div class="button-list">
        <div class="button-wapper" v-for="item in hot" :key="item.id" @click="City(item.name)">
          <div class="button">{{item.name}}</div>
        </div>
    </div>
    </div>

    <div class="area" v-for="(item,key) in city" :key="key" :ref="key">
        <div class="title">{{key}}</div>
        <div class="item-list" v-for="cit in item" :key="cit.id" @click="City(cit.name)">
            <div class="item">{{cit.name}}</div>
        </div>
    </div>

    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState,mapMutations } from 'vuex'
export default {
  name: "cityList",
  props:{
      hot:Array,
      city:Object,
      letter:String
  },
  computed:{
    ...mapState({currCity:'city'})
  },
  methods:{
    City(city) {
      // this.$store.commit("changeCity",city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  watch:{
      letter () {
          const ele = this.$refs[this.letter][0]
          this.scroll.scrollToElement(ele)  
      }
  },
  mounted () {
          this.scroll = new Bscroll(this.$refs.wrapper,{click: true})
  }
};
</script>

<style lang="less" scoped>
.list {
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
    .title {
        line-height: .54rem;
        background: #eee;
        color: #666;
        font-size: .26rem;
        padding-left: .2rem;
    }
    .button-list{
        overflow: hidden;
        padding:.1rem .6rem .1rem .1rem;
        .button-wapper{
            float: left;
            width: 33.33%;
            .button{
                margin: .1rem;
                padding: .1rem;
                border-radius: .06rem;
                text-align: center;
                border: .02rem solid #ccc;
            }
        }
    }
    .item-list{
        .item{
            line-height: .76rem;
            color:black;
            padding-left: .2rem;
            border-bottom: .02rem solid #eee;
        }
    }
  }
</style>

