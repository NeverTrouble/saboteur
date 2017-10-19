export class playGame {
  static setPathCard(cardId) {

  }
  static setActCard(cardId) {

  }
  showVoidPath(travelPathData = [], id, cardId) {
    let aroundCardsId = {
      top: parseInt(id) - 5 > 0 ? parseInt(id) - 5 : null,
      bottom: parseInt(id) + 5 < 45 ? parseInt(id) + 5 : null,
      left: parseInt(id) - 1 > 0 ? parseInt(id) - 1 : null,
      right: parseInt(id) + 1 < 45 ? parseInt(id) + 1 : null
    }
    let tableData = window.data.tableData
    let voidPlaceIds = []
    // 检测路径周围可放置卡片的位置
    travelPathData.forEach(function (id) {
      // 找出周围的卡片
      if (id - 5 > 0) {
        voidPlaceIds.push(id - 5)
      }
      if (id + 5 < 45) {
        voidPlaceIds.push(id + 5)
      }
      if (id + 1 < 45) {
        voidPlaceIds.push(id + 5)
      }
      if (id - 1 > 0) {
        voidPlaceIds.push(id - 1)
      }

    })

    // 去除已放置卡片的路径及去重
    travelPathData.concat([0,2,4]).forEach(function(id){
      
    })

    // 检查这些卡片是否为空？===> data-status===0
    // tableData
  }
}
