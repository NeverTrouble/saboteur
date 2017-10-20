export class playGame {
  static start() {
    alert('游戏开始')
    switchIdentity()
  }
  static setPathCard(cardId) {
    
  }
  static setActCard(cardId) {

  }
  switchIdentity() {
    alert('请选择身份')
    // 1.弹出身份选择框，开始倒计时

    // 2.1点击牌面选择身份卡

    // 2.2倒计时结束自动分配身份卡

    // 3.进行游戏

  }
  showVoidPath(gameData={}) {
    // 从全局数据中查看可放置的位置
    // @travelPathIds : 存放当前已放置的路径卡
    // @voidPlaceIds : 存放当前路径周围可放置的空位，记录了该位置可接受什么朝向的卡片
    let travelPathIds = gameData.travelPathIds
    let voidPlace = gameData.viodPlace

    // 检查当前开口方向


    console.log(travelPathData)




    let tableData = window.data.tableData
    let voidPlaceIds = []
    // 检测路径周围可放置卡片的位置
    travelPathData.forEach(function (item) {
      // 找出周围的卡片
      if (item.id - 5 > 0) {
        item.OpenDc.top && voidPlaceIds.push(item.id - 5)
      }
      if (item.id + 5 < 45) {
        item.OpenDc.bottom && voidPlaceIds.push(item.id + 5)
      }
      if (item.id + 1 < 45) {
        item.OpenDc.right && voidPlaceIds.push(item.id + 5)
      }
      if (item.id - 1 > 0) {
        item.OpenDc.left && voidPlaceIds.push(item.id - 1)
      }
    })
    console.log(voidPlaceIds)
    // 去除已放置卡片的路径及去重
    voidPlaceIds = Array.from(new Set(voidPlaceIds))
    travelPathData.concat([0, 2, 4]).forEach(function (id) {
      voidPlaceIds.indexOf(id) && voidPlaceIds.slice(voidPlaceIds.indexOf(id), 1)
    })
    console.log(voidPlaceIds)
    // 更新全局的可放置
    // 查看当前的卡片

    // tableData
  }
}
