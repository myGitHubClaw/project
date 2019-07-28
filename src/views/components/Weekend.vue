<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li v-for="item in list" :key="item.id">
                <img class="item-img" :src="item.imgUrl">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'Weekend',
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
        line-height: .8rem;
        background: #eee;
        text-indent: .2rem;
    }
        .item-img{
            width: 100%;
        }
        .item-info{
            min-width:0;
            margin-top: .05rem;
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
        }
</style>
