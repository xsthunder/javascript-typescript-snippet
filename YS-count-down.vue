<template>
  <div :style="{color:activeColor, backgroud:activeColor}" @click="resetTime">
    <h1>{{time}}</h1>
  </div>
</template>
<script>

// To run 
// yarn global add @vue/cli
// yarn global add @vue/cli-service-global
// vue serve YS-count-down.vue

export default {
  name: 'YSCountDown',
  methods:{
    resetTime:function(){
      this.setTimeRun()
    },
    setTimeRun:function(){
      if(this.timeId){
        clearInterval(this.timeId)
        this.time=-1;
        this.timeId=null
      }
      this.timeId = setInterval(() => {
        this.time = (this.time+1)%12
      }, 1000)
    },
  },
  props: {
    msg: String
  },
  data(){
    return {
      time:0
    }
  },
  computed:{
    activeColor:function(){
      return this.time>10?"red":"black"
    }
  },
  mounted(){
    this.setTimeRun()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div{
  border: solid;
  text-align: center;
}
</style>
