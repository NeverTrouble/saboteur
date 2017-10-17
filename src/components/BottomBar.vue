<template>
  <div id="bottombar">
    <h1>{{msg}}</h1>
  </div>
</template>
<script>
  export default {
    data (){
      return{
        msg:'这是底部'
      }
    }    
  }
</script>

<style>
#bottombar{
  height: 10vh;
  background:green;
  width: 100%;
}
</style>

