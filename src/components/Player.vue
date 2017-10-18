<template>
<div id="player">
  <div class="game_info">
    <div class="avator" style="">
      <p><span> {{actor.name}}</span><br><span>描述描述</span></p>
    </div>
    <div class="msg"></div>
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
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
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
    data() {
      return {
        msg:"玩家界面",
        actor:{
          name:'角色名'
        }
      }
    },
    component:{
      Cards
    }
  }
</script>
<style lang="less">
#player{
  background: #eeeeee;
  height: 18vh;
  width: 95%;
  margin: 0 auto;
  margin: 1vh auto;  
  display: flex;
  justify-content: flex-start;

  .game_info{
    width: 40%;
    height: 100%;
    background: #2b3422;

    .avator{
      height: 40%;
      background: #eee;
      
      p{
        display: block;
        height: 100%;
        background:url('../assets/logo.png')no-repeat 5%;
        background-size: contain;
        text-align: right;
        padding-right: 10%;
        span{
          line-height: 4rem;
          font-weight: bold;
          font-size: 2.5rem;
        }
        :last-child{
          line-height: 2rem;
          font-size: 2rem;
        }
      }
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
      padding-top: 4%;
      ul {
        width: 70%;
        height: 90%;
        margin: 0 auto;
        // padding: 10% 0;
        li {
          width: 100%;
          height: 30%;
          margin-bottom: 30%;
          background: #fff;
        }
      }
    }
    .game_cards-place{
      height: 100%;
      width: 90%;
      border-left:2px solid red;
      padding-left: 2%;
      ul{
        width: 100%;
        height: 90%;
        padding-top: 3%;
        display: flex;
        margin: 0 auto;
        margin-left: -2%;       
        flex-wrap: wrap;
        li{
          flex: auto;
          height: 30%;
          // margin-bottom: 5%;
          width: 40%;
          margin:2% ;
          background: #eee;
        }
      }

    }
  }
  .game_control{
    flex: auto;
    background:yellowgreen;
    display: flex;
    flex-direction: column;
    flex-flow: wrap;
    span{
      flex: auto;
      // display: block;
      // width: 80%;
      height: 30%;
    }
  }
}
</style>
