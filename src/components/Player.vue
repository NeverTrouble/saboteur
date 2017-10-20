<template>
<div id="player">
  <div class="game_info">
    <div class="avator">
      <p v-bind:style="{backgroundImage:`url('${actor.img}')`}">
        <span> {{actor.name}}</span>
        <span>描述描述</span>
      </p>
    </div>
    <div class="msg">
      <li>第一个信息信息</li>
      <li>第二个信息喝辣的水力发电萨拉</li>
      <li>地上打发的撒</li>
      <li>地上打发的撒</li>

    </div>
  </div>
  <div class="game_content">
    <div class="game_player-status">
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div class="game_cards-place">
      <ul>
        <li v-for="(item,index) in playerData.cardPlace" :key="item.index" :data-cardid="item.card_number" :data-index="item.index"
          :data-classify="item.card_classify">
          <!-- {{item}} -->
          <Cards class="cards" :cardData="item">
          </Cards>
        </li>
      </ul>
    </div>

  </div>

  <div class="game_control">
    <span></span>
    <span></span>
    <span></span>
    
  </div>
</div>
</template>
<script>
import Cards from './Cards'
  export default {
    props:['playerData'],
    data() {
      return {
        msg:"玩家界面",
        actor:{
          name:'角色名',
          img:require('../assets/svg/avator.svg')
        }
      }
    },
    mounted(){
      console.log(this.playerData)
    },
    components:{
      Cards
    }
  }
</script>
<style lang="less">
@nameTitle:0.3rem;
@nameDsc:0.2rem;
#player{
  background: #eeeeee;
  height: 18vh;
  width: 95%;
  margin: 1vh auto;  
  overflow: hidden;
  display: flex;
  justify-content: flex-start;

  .game_info{
    width: 40%;
    height: 100%;
    background: #1e1e1e;

    .avator{
      height: 30%;
      background: #eee;
      
      p{
        display: block;
        height: 100%;      
        background-repeat: no-repeat;
        background-position:0 0; 
        background-size: contain;
        text-align: left;
        padding-left: 28%;
        span{
          display: block;
          padding-top: 0.1rem;
          line-height: 100%;
          font-weight: bold;
          font-size: @nameTitle;
        }
        :last-child{
          padding-top: 0.05rem;
          font-size: @nameDsc;
        }
      }
    }
    .msg{
      text-align: left;
      color: #fff;
      line-height: 145%;
      font-size: @nameDsc;
      padding-left: 0.15rem;
      padding-top: 0.05rem;
    }
  }
  .game_content{
    width: 45%;
    height: 100%;
    background:wheat;
    display: flex;
    .game_player-status{
      height: 100%;
      width: 20%;
      padding-top: 0.1rem;
      ul {
        width: 70%;
        height: 90%;
        margin: 0 auto;
        // padding: 10% 0;
        li {
          width: 100%;
          height: 30%;
          margin-bottom: 30%;
          background: #333;
        }
      }
    }
    .game_cards-place{
      height: 100%;
      width: 90%;
      border-left:1px solid red;
      padding-left: 2%;
        padding-top: 0.1rem;
      
      ul{
        width: 100%;
        height: 90%;
        display: flex;
        margin: 0 auto;
        margin-left: -0.03rem;       
        margin-top: -0.05rem;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-content: flex-start;
        li{
          flex: auto;
          height: 30%;
          // margin-bottom: 5%;
          width: 40%;
          margin:0.05rem ;
          background: #eee;
          position: relative;
        }
      }

    }
  }
  .game_control{
    flex: auto;
    background:yellowgreen;
    display: flex;
    flex-direction: column;
    padding-top: 2%;
    span{
      flex: auto;
      margin:  15% 10%;
      margin-top: 0;
      background: #eee;
    }
  }
}
</style>
