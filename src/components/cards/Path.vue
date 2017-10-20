<template>
  <div class="card_path" >
    {{data.dsc}}
  </div>
</template>


<script>
  export default {
    props:['data'],
    data(){
      return {
      }
    }
  }
</script>
<style>
.card_path{
  background: pink;
  position: absolute;
  left: 1px;
  right: 1px;
  top: 1px;
  bottom: 1px;
}
</style>
