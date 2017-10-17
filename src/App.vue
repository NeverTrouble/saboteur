<template>
  <div id="app">
    <TopBar/>  
    <GameTable/>
    <player/>
    <BottomBar/>
  </div>
</template>

<script>
import GameTable from './components/Main'
import TopBar from './components/TopBar'
import Player from './components/Player'
import BottomBar from './components/BottomBar'
import {cards} from './lib/cardsToggle'
export default {
  name: 'app',
  components: {
    GameTable,TopBar,Player,BottomBar
  },
  created(){
    
  },
  mounted(){
    cards.toggle(121)
  },
  methods:{
    
  }
}
</script>

<style>
*{
  margin: 0;padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
