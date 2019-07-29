<template>
    <div>
        <detailHeader 
        :sightName="sightName"
        :bannerImg="bannerImg"
        :gallaryImgs="gallaryImgs"
        >
        </detailHeader>
        <detailBanner></detailBanner>
        <div class="connet">
        <detailList :list="list"></detailList>
        </div>
    </div>
</template>
<script>

import detailHeader from './components/Header.vue'
import detailBanner from './components/banner.vue'
import detailList from './components/List.vue'
import axiso from 'axios'


export default {
    name:"detaills",
    components:{
        detailHeader,
        detailBanner,
        detailList
    },
    data () {
        return{
            sightName:'',
            bannerImg:'',
            gallaryImgs:[],
            list:[]
        }
    },
    methods:{
        getDetails() {
            axiso.get('/api/detail.json',{
                params:{
                    id:this.$route.params.id
                }
            }).then( res => {
                res = res.data
                if(res.ret && res.data){
                    const data =res.data
                    // console.log(data)
                    this.sightName = data.sightName
                    this.bannerImg = data.bannerImg
                    this.gallaryImgs = data.gallaryImgs
                    this.list = data.categoryList
                }
            })
        }
    },
    mounted() {
        this.getDetails()
    }
}
</script>

<style lang="less" scoped>
    .connet{
        height: 50rem
    }
</style>
