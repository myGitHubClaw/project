<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <router-link class="item" v-for="item in list" :key="item.id" tag="li" :to=" '/detail/'+item.id">
                <img class="item-img" :src="item.imgUrl">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name:'Recommend',
    props:{
        list:Array
    },
    data () {
        return{
           
        }
    }
}
</script>

<style lang="less" scoped>
    @import '~@/assets/styles/mixins.less';
    .title{
        margin-top:.2rem;
        line-height: .8rem;
        background: #eee;
        text-indent: .2rem;
    }
    .item{
        display: flex;
        height: 1.9rem;
        border-bottom: 1px solid #ccc;
        .item-img{
            width: 1.7rem;
            height: 1.7rem;
            padding: .1rem;
        }
        .item-info{
            flex:1;
            min-width:0;
            margin-top: .09rem;
            padding:.1rem;
            .item-title{
                line-height: .54rem;
                font-size: .32rem;
                .ellipsis();
            }
            .item-desc{
                line-height: .4rem;
                color: #ccc;
                .ellipsis();
            }
            .item-button{
                line-height: .44rem;
                margin-top:.16rem;
                background: #ff9300;
                padding:0 .1rem;
                border-radius: .06rem;
                color:#fff;
                
            }
        }
    }
</style>
