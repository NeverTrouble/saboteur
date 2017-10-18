<template>
  <component :is="switchCards(cardId)"></component>
</template>


<script>
import EndCard from './cards/End'
import StartCard from './cards/Start'
import PathCard from './cards/Path'
  export default {
    props:['cardId'],
    data(){
      return {
      }
    },
    components:{
      EndCard,StartCard,PathCard
    },
    methods:{
      switchCards(cardId){
        var id = cardId.split('-')[0]       
        switch(id){
          case '0' : return 'PathCard';break;
          case '1' : return 'StartCard';break;
          case '2' : return 'EndCard';break;
        }
      }
    }
  }
</script>
<style>

</style>
