<template>
<div>
    <div class="banner" @click="handleBannerClick">
        
        <img class="banner-img" :src="bannerImg" />
        <div class="banner-info">
            <div class="banner-tittle">
                {{this.sightName}}
            </div>
            <div class="banner-number">
                <span class="iconfont banner-icon">&#xe692;</span>
                {{this.gallaryImgs.length}}
            </div>
        </div>
    </div>
    <gallary
    :imgs="gallaryImgs"
    v-show="showGallary"
    @close="handleGallaryClose"
    ></gallary>
</div>
</template>
<script>
import gallary from '@/common/gallary/gallary'

export default {
    name:"detailBanner",
    props:{
        sightName:String,
        bannerImg:String,
        gallaryImgs:Array
    },
    data () {
    return {
      showGallary: false
    }
  },
    methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
    components:{
        gallary
    }
}
</script>



<style lang="less" scoped>
    .banner{
        position: relative;
        overflow:hidden;
        height:0;
        padding-bottom: 55%;
        .banner-img{
            width: 100%
        }
        .banner-info{
            color: #fff;
            display: flex;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            line-height: .6rem;
            background-image: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8)) ;
            .banner-tittle{
                flex:1;
                font-size: .32rem;
                padding: 0 .2rem;
            }
            .banner-number{
                margin-top:.2rem; 
                padding:0 .4rem;
                height: .32rem;
                line-height: .32rem;
                border-radius: .2rem;
                font-size: .24rem;
                background: rgba(0,0,0,0.8);
                .banner-icon{
                    font-size: .24rem
                }
            }
        }
    };
</style>
