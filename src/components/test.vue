<template>
  <div class="content">
    {{mylists}}
    <input v-model.trim="mylists" v-on:input="updateValue()">
  </div>
</template>
<script>
export default {
  name:'TEST',
  props:["lists"],
  data(){
    return{
       mylists:this.lists,    //prop是单向绑定，不能更改数据，只能由父组件传输过来
    }
  },
  mounted(){

  },
  created(){

  },
  methods:{
     updateValue(value2){
       this.$emit('sendiptVal',value2)
     }
  }
}
</script>
