<template>
  <div id="game-table" >
   <h1>{{msg}}</h1>
   <ul class="table-map">
     <li><span class="center"></span></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li><li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li><li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li><li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li><li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
     
   </ul>
  </div>
</template>

<script>
import Mixin from '../lib/Mixin'
export default {
  mixins:[Mixin],
  name: 'game-table',
  data () {
    return {
      msg: '这里是主界面',
      height: this.getHeight()
    }
  },
    mounted(){
    console.log(this.height)
    // console.log(this.props.kk)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#game-table{
  /* background: red; */
  width: 100%;
  margin: 0 auto;
  height: 70vh;
}
ul.table-map{
  /* border: 1px solid red; */
  width: 95%;
  list-style: none;
  height: 90%;
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
  padding: 5px;
}
ul.table-map li>.center{
  display: block;
  width:30%;
  height: 30%;
  margin: 25% auto;
  background: red;
}
</style>
