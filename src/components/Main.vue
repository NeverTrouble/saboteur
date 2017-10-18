<template>
  <div id="game-table" >
   <ul class="table-map">
     <li v-for="(item,index) in tableData" :key="item.index" :data-cardid="item.cardId" :data-index="item.index" :data-status="item.status" >
       <!-- {{item}} -->
        <Cards class="cards" :cardId="item.cardId"></Cards>
     </li>
     
   </ul>
  </div>
</template>

<script>
import Mixin from '../lib/Mixin'
import Cards from './Cards'
export default {
  props: ['tableData'],
  mixins: [Mixin],
  name: 'game-table',
  data() {
    return {
      height: this.getHeight()
    }
  },
  created(){
    console.log(this.tableData)
    
  },
  mounted() {
    console.log(this.height)
    // console.log(this.props.kk)
  },
  updated(){
    
  },
  components:{
    Cards
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#game-table{
  /* background: red; */
  padding-top: 1vh;
  width: 100%;
  margin: 0 auto;
  height: 58vh;
}
ul.table-map{
  /* border: 1px solid red; */
  width: 95%;
  list-style: none;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;  
  align-items: flex-start;
  margin:0 auto;
}
ul.table-map li{
  flex: auto;
  width: 20%;
  height: 11.1%;
  background: #eee;
  box-sizing: border-box;
  background-clip: content-box;
  padding: 1px;
  position: relative;
}
ul.table-map li>.center{
  display: block;
  width:30%;
  height: 30%;
  margin: 25% auto;
  background: red;
}
li.fill{
  background:yellow;
}
</style>
