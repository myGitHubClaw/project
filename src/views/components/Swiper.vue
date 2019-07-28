<template>
    <div class="wapper">
        <swiper :options="swiperOption" v-if="listSwiper.length">
            <swiper-slide v-for="item in listSwiper" :key="item.id">
                <img class="swiper-img" :src='item.imgUrl'>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    props:{
        listSwiper:Array
    },
    data () {
        return {
             swiperOption:{
                 pagination: '.swiper-pagination',
                 loop:true,
                 autoplay:3000
             }
        }
    }
}
</script>
<style lang="less" scoped>
     .wapper /deep/ .swiper-pagination-bullet-active{
         background:#fff !important;
     }      
    .wapper{
        //防止塌陷
        overflow: hidden;
        width: 100%;
        height: 0;
        padding-bottom: 32%;
        background: #eee;
        .swiper-img{
            width: 100%;
            height:100%;
        }       
    }
</style>
