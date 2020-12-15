// import { formatDistance, subDays } from 'date-fns'
/*
  things necessarily

  Vue.js
  lodash
  date-fns
 */

class Frecuency {
  /**
   * @param {Number} months 月の間隔
   * @param {Number} weeks 週の間隔
   * @param {Number} dates 日の間隔
   */

  constructor (config) {
    try {
      config = config || {}

      this.months = config.months || 0;
      this.weeks = config.weeks || 0;
      this.dates = config.dates || 0;

    } catch (e) {
      console.log(e);
    }
  }
}
