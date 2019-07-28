<template>
<div>
    <cityHeader></cityHeader>
    <citySearch :city="cities"></citySearch>
    <cityList 
    :hot="hotCities" 
    :city="cities"
    :letter="letter"
    >
    </cityList>
    <city-alphabet 
    :citys="cities"
    @change="handleLetterClick"
    >
    </city-alphabet>
</div>
    
</template>

<script>
import cityHeader from './components/Header.vue'
import citySearch from './components/Search.vue'
import cityList from './components/List.vue'
import cityAlphabet from './components/Alphabet.vue'
import axios from 'axios'

export default {
    name:"City",
    data(){
        return{
            hotCities:[],
            cities:{},
            letter:''
        }
    },
    methods:{
        handleLetterClick(letter){
            this.letter=letter
            // console.log(this.letter)
        },
        getData() {
            axios.get('api/city.json').then(res => {
                res = res.data
                if(res.ret && res.data) {
                    const data =res.data
                    this.hotCities =  data.hotCities
                    this.cities = data.cities
                }
            })
        }
    },
    mounted(){
        this.getData()
    }, 
    components:{
        cityHeader,
        citySearch,
        cityList,
        cityAlphabet
    }
}
</script>

<style lang="less" scoped>

</style>
