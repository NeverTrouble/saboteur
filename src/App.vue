<template>
  <div id="app" v-on:click="change" >
    <TopBar/>  
    <GameTable :table-data="tableData"/>
    <player/>
    <BottomBar/>
  </div>
</template>

<script>
import {Data} from './lib/defaultData'

import GameTable from './components/Main'
import TopBar from './components/TopBar'
import Player from './components/Player'
import BottomBar from './components/BottomBar'
import {cards} from './lib/cardsToggle'
export default {
  name: 'app',
  data() {
    return{
      tableData:window.data.tableData,
      playerData:Data.playerData,
      isDrag:false
    }
  },
  components: {
    GameTable,TopBar,Player,BottomBar
  },

  created(){
    // alert('1')
     this.tableInit()
     this.init();
  },
  beforeMount(){
    //  this.tableInit()
  },
  mounted(){
    cards.toggle(121)
    // console.log(this.tableData)
  },
  methods:{
    // 初始化
    init(){
      this.remInit();
    },
    remInit(){
      const docEl = document.documentElement
      const windowH = window.screen.height
      const screenWidth = docEl.clientWidth || window.screen.width || 360
      docEl.style.fontSize = (100 * screenWidth / 720) + 'px'
    },
    // 初始化游戏桌面
    tableInit() {
    }
    ,change(){
      this.tableData[20].cardId='0-11111'
    }
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
