<template>
  <div class="wrap">
    <lottery :list="list" :over="over" ></lottery>
    <TEST :lists="lists" @sendiptVal="sendiptVal" ></TEST>

    <my-select :options="options" :placeholder="'请选择'" @changeOption="onChangeOption"></my-select>
    <div>父组件的toCity{{toCity}}</div>
    <train-city @showCityName="updateCity" :sendData="toCity"></train-city>
  </div>
</template>

<script>
import { apiAddress } from '@/config/api'
import lottery from '../components/lottery'
import mySelect from '../components/mySelect'
import TEST from '../components/test'
import trainCity from '../components/TrainCity'
export default {
  name: 'App',
  data(){
    return{
      list:[{
          url:require("../assets/lottery/cj11.png"),
          displayStyle:"block"
        },{
          url:require("../assets/lottery/cj22.png"),
          displayStyle:"block"
        },{
          url:require("../assets/lottery/cj33.png"),
          displayStyle:"block"
        },{
          url:require("../assets/lottery/cj44.png"),
          displayStyle:"block"
        },{
          url:require("../assets/lottery/cj9.png"),
        },{
          url:require("../assets/lottery/cj77.png"),
          displayStyle:"block"
        },{
          url:require("../assets/lottery/cj66.png"),
          displayStyle:"block"
        },{
          url:require("../assets/lottery/cj55.png"),
          displayStyle:"block"
        },{
          url:require("../assets/lottery/cj88.png"),
          displayStyle:"block"
        }
      ],
      over:20,
      options:[{
        'index':0,
        'label':'选项1'
      },{
        'index':1,
        'label':'选项2'
      },{
        'index':1,
        'label':'选项3'
      }],
      lists:'',
      toCity:'北京'
    }
  },
  components: {
    lottery,
    mySelect,
    TEST,
    trainCity
  },
  mounted(){
     apiAddress({     
      type: 0,     
      sort: 1    
    }).then(res => {
      // 获取数据成功后的其他操作
      
    })   
  },
  methods:{
    onChangeOption(index){
    console.log(index)
    },
    sendiptVal(data){
      console.log(data)
    },
    updateCity(data){
        this.toCity = data.cityname
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
