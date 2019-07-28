<template>
  <div>
    <homeHeader></homeHeader>
    <home-swiper :listSwiper="listSwiper"></home-swiper>
    <homeIcon :list="iconList"></homeIcon>
    <homeRecommend :list="recommend"></homeRecommend>
    <homeWeekend :list="weekendList"></homeWeekend>
  </div>
</template>

<script>
import homeHeader from "./components/Header.vue";
import homeSwiper from "./components/Swiper.vue";
import homeIcon from "./components/Icons.vue";
import homeRecommend from "./components/Recommend.vue";
import homeWeekend from "./components/Weekend.vue";
import axios from "axios"
import { mapState } from 'vuex'

export default {
  name: "home",
  components: {
    homeHeader,
    homeSwiper,
    homeIcon,
    homeRecommend,
    homeWeekend
  },
  data(){
    return{
      lastCity:'',
      listSwiper:[],
      iconList:[],
      recommend:[],
      weekendList:[]
    }
  },
  computed:{
    ...mapState(['city'])
  },
  mounted(){
    this.lastCity = this.city
    this.getDate()
  },
  activated () {
    if(this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getDate()
    }
  },
  methods:{
    getDate(){
      axios.get('/mock/index.json?city=' + this.city).then(res => {
        res =res.data
        if(res.ret && res.data){
          const data = res.data
          this.listSwiper=data.swiperList
          this.iconList=data.iconList
          this.recommend = data.recommendList
          this.weekendList = data.weekendList
        }
      })
    }
  }
};
</script>
