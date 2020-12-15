// import { formatDistance, subDays } from 'date-fns'
/*
  things necessarily

  Vue.js
  lodash
  date-fns

  Frecuency
 */

class Routine {
  /**
   * @param {String} name ルーチンの名前
   * @param {Number} categoryId カテゴリーのID
   * @param {Number} placeId 場所のID
   * @param {Frecuency} frecuency 最低限の頻度
   * @param {Date} updatedActionDate 最新の実行日
   * @param {Array(Date)} actionDates 実行日の記録
   * @param {Date} updatededDate 変更日
   * @param {Date} createdDate 登録日
   */

  constructor (config) {
    try {
      config = config || {}
      
      this.id = _.uniqueId()
      this.name = config.name;
      this.categoryId = config.categoryId;
      this.placeId = config.placeId;
      this.frecuency = config.frecuency ? config.frecuency : new Frecuency();

    } catch (e) {
      console.log(e);
    }
  }

  update () {
    const datetime = new Date();
    this.actionDate = datetime;
    this.actionDates.push(datetime);
  }

  checkDeadLine () { // 期限から何日過ぎているか日数を返す。当日なら0日
    
  }
}
