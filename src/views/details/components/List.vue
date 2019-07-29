<template>
    <div>
        <div class="item" v-for="(item,key) in list" :key="key">
            <div class="item-list">
                <span class="item-icon"></span>
                {{item.title}}
            </div>
            <div class="item-chilren" v-if="item.children">
                <detailList :list="item.children"></detailList>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"detailList",
    props:{
        list:Array
    }
}
</script>

<style lang="less" scoped>
    .item-icon{
    position: relative;
    left: .06rem;
    top: .06rem;
    display: inline-block;
    width: .36rem;
    height: .36rem;
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
    margin-right: .1rem;
    background-size: .4rem 3rem;
    }
    .item-list{
        border-bottom: 0.01rem solid #ccc;
        line-height: .8rem;
        font-size: .32rem;
        padding: 0 .2rem;
    }
    .item-chilren{
        padding:0 .4rem;
    }

</style>

