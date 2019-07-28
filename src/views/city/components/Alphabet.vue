<template>
  <ul class="list">
    <li class="item" 
    v-for="item in letters" 
    :key="item"
    :ref="item"
    @touchstart.prevent="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
    @click="handleLetterClick"
    >
        {{item}}
    </li>
  </ul>
</template>

<script>
import { clearTimeout, setTimeout } from 'timers';
export default {
  name: "cityAlphabet",
  props: {
    citys: Object
  },
  data(){
      return{
        touchStatus: false,
        startY:0,
        timer:null
      }
  },
  computed:{
      letters () {
           const letters =[]
        for (let i in this.citys) {
            letters.push(i)
        }
        return letters
        //数据是这样的['A','B','C'...]
      }
  },
  updated(){
          this.startY = this.$refs['A'][0].offsetTop
  },
  methods:{
      handleLetterClick (e) {
          this.$emit("change",e.target.innerText)
      },
      handleTouchStart(){
          this.touchStatus=true;
      },
      handleTouchMove(e) {
          if(this.touchStatus) {
              // const startY = this.$refs['A'][0].offsetTop
              if(this.timer){
                clearTimeout(this.timer)
              }
              this.timer = setTimeout(() => {
                const touchY = e.touches[0].clientY - 79
                const index = Math.floor((touchY - this.startY)/20)
                if(index >= 0 && index <= this.letters.length){
                  this.$emit('change',this.letters[index])                  
                }
              },16)             
          }
      },
      handleTouchEnd() {
          this.touchStatus=false;
      }
  }
  }
</script>
<style lang="less" scoped>
@import "~@/assets/styles/varibles.less";
.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  right: 0;
  bottom: 0;
  top: 1.58rem;
  width: 0.4rem;
  .item {
    line-height: 0.4rem;
    text-align: center;
    color: @bgColor;
  }
}
</style>


