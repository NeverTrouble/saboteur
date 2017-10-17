<template>
<div id="topbar">
  <h1>{{msg}}</h1>
   <p></p>
</div>
</template>

<script>
  export default {
    props:{
    },
    data(){
      return{
        msg:'这是顶部栏'
      }
    }
  }
</script>
<style>
#topbar{
  background: green;
  height: 5vh;
  width: 100%;
}
</style>
