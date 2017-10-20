<template>
  <div class="card_start">
    {{data.title}}

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
.card_start{
  background: green;
  position: absolute;
  left: 1px;
  right: 1px;
  top: 1px;
  bottom: 1px;
}
</style>
