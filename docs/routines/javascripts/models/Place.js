/*
  things necessarily

  Vue.js
  lodash
 */

class Place {
  /**
   * @param {Number} id id
   * @param {Number} name 名前
   */

  constructor (config) {
    try {
      config = config || {}

      this.id = config.id; // TODO: uniqあいでーにする
      this.name = config.name;

    } catch (e) {
      console.log(e);
    }
  }
}
