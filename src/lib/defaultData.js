/*****************
  **** @tablData : 游戏桌面的数据
           @index : 当前位置索引，从左到右从上到下排序（00-45）
           @cardId : 当前位置的卡片的id；格式：0-00000
           》》》第一个位置的数字：0：路径卡；1：起点卡；2：终点卡
           》》》后面5位数字，每位分别表示上、右、下、左方向是否有开口（有1、无0），以及开了口的是否连通（是1、否0）；【起点卡和终点卡后5位默认为11111】
           》》》举例：路径卡+上通左》0-10011；
           》》》举例：路径卡+上下通》0-10101；
           》》》举例：路径卡+上下不通》0-10100；
           @gold : 当前位置是否有黄金（有1、无0）
           @title : 当前卡片名称
           @dsc : 当前卡片描述 
 
 ****************/

export class Data {
  static tableData = [{
      index: 43,
      card_classify: 1,
      card_number: '1-11111',
      card_status: {
        top: 1,
        left: 1,
        right: 1,
        bottom: 1,
        middle: 1
      },
      gold: 0,
      title: '起点卡',
      dsc: '这是起点卡，决定从哪里开始放置卡牌'
    }, {
      index: 1,
      card_classify: 2,
      card_number: '2-11111',
      cardId: {
        top: 1,
        left: 1,
        right: 1,
        bottom: 1,
        middle: 1
      },
      gold: 0,
      title: '终点卡',
      dsc: '这里是终点卡，只有一张终点卡有黄金'
    }, {
      index: 3,
      card_classify: 2,
      card_number: '2-11111',
      card_status: {
        top: 1,
        left: 1,
        right: 1,
        bottom: 1,
        middle: 1
      },
      gold: 0,
      title: '终点卡',
      dsc: '这里是终点卡，只有一张终点卡有黄金'
    },
    {
      index: 5,
      card_classify: 2,
      card_number: '2-11111',
      card_status: {
        top: 1,
        left: 1,
        right: 1,
        bottom: 1,
        middle: 1
      },
      gold: 0,
      title: '终点卡',
      dsc: '这里是终点卡，只有一张终点卡有黄金'
    }
  ]

  /*****************
  **** @playerData : 玩家数据
 
 ****************/
  static playerData = {
    actor: {
      name: '角色名',
      dsc: '你的角色需要做什么！',
      avator: '../assets/svg/avator.svg'
    },
    act_status: "000",
    cards_place: [],
  }

}
