<template>
<div id="topbar">
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
  height: 15vh;
  width: 100%;
}
</style>
