<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="请输入城市名称" />
    </div>
    <div class="search-conent" ref="searchs" v-show="keyword">
      <ul>
        <li
          class="search-item"
          v-for="item in list"
          :key="item.id"
          @click="City(item.name)"
        >{{item.name}}</li>
        <li v-show="!list.length">暂无数据匹配</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
import { mapMutations } from "vuex";
export default {
  name: "citySearch",
  props: {
    city: Object
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null
    };
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.city) {
          this.city[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 ||value.name.indexOf(this.keyword) > -1) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 100);
    }
  },
  methods: {
    City(city) {
      // this.$store.commit("changeCity",city)
      this.changeCity(city);
      this.$router.push("/");
    },
    ...mapMutations(["changeCity"])
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.searchs,{click:true});
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/styles/varibles.less";
.search {
  height: 0.72rem;
  padding: 0 0.1rem;
  background: @bgColor;
  .search-input {
    box-sizing: border-box;
    width: 100%;
    line-height: 0.62rem;
    padding: 0 0.6rem;
    text-align: center;
    border-radius: 0.06rem;
    color: #666;
  }
}
.search-conent {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background: #ccc;
  .search-item {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    background: #fff;
  }
}
</style>
