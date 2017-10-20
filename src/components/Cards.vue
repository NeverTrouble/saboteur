<template>
  <component :is="switchCards(cardData.card_classify)" :data="cardData"></component>
</template>


<script>
import EndCard from './cards/End'
import StartCard from './cards/Start'
import PathCard from './cards/Path'
  export default {
    props:['cardData'],
    data(){
      return {
      }
    },
    components:{
      EndCard,StartCard,PathCard
    },
    methods:{
      switchCards(cardClassify = -1){  
        console.log(cardClassify)   
        switch(cardClassify){
          case 0 : return 'PathCard';break;
          case 1 : return 'StartCard';break;
          case 2 : return 'EndCard';break;
        }
      }
    }
  }
</script>
<style>
.cards{
  font-size: 0.05rem;
}
</style>
