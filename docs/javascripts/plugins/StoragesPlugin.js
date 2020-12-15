/* localStorageとsessionStorageの保存・取り出しを支援するメソッド */
StoragesPlugin = (function(){

  /**
   * 保存時のキーに使用する接頭辞です
   */
  let prefixKey = "" 

  /**
   * keyに保存した値を返します
   * @param {String} key 
   * @param  {Boolean} isLocal - localStorageか否か
   * @param  {Boolean} withoutPrefix - prefixを使わないか否か
   * @return {String}
   */
  const getItem = (key, isLocal, withoutPrefix) => {
    if (!withoutPrefix)
      key = prefixKey+key

    if (isLocal)
      return localStorage.getItem(key)
    else
      return sessionStorage.getItem(key)
  }

  /**
   * keyにvalueを保存します。
   * @param {String} key 
   * @param {String} value
   * @param  {Boolean} isLocal - localStorageか否か
   * @param  {Boolean} withoutPrefix - prefixを使わないか否か
   * @return {void}
   */
  const setItem = (key, item, isLocal, withoutPrefix) => {
    if (!withoutPrefix)
      key = prefixKey+key
      
    if (isLocal)
      return localStorage.setItem(key, item)
    else
      return sessionStorage.setItem(key, item)
  }

  /**
   * keyに保存された値を削除します。
   * @param {String} key 
   * @param  {Boolean} isLocal - localStorageか否か
   * @param  {Boolean} withoutPrefix - prefixを使わないか否か
   * @return {void}
   */
  const removeItem = (key, isLocal, withoutPrefix) => {
    if (!withoutPrefix)
      key = prefixKey+key
      
    if (isLocal)
      return localStorage.removeItem(key)
    else
      return sessionStorage.removeItem(key)
  }

  /**
   * regExpに一致したキーの保存された値を削除します。
   * @param {String} key
   * @param  {Boolean} isLocal - localStorageか否か
   * @param  {Boolean} withoutPrefix - prefixを使わないか否か
   * @return {void}
   */
  const removeAllItemWith = (key, isLocal, withoutPrefix) => {
    if (!withoutPrefix)
      key = prefixKey+key
    
    const storage = isLocal ? localStorage : sessionStorage

    for (var i = 0; i < storage.length; i++) {
      const match = storage.key(i).match(key)
      if (match && match.index === 0)
        storage.removeItem(storage.key(i))
    }
  }

  /**
   * 値がparseすべきものか否か。
   * @param  {String} item - 対象文字列
   * @return {Boolean}
   */
  const isShouldParse = (item) => {
    return item.match(/^[\[\{]/) || item.match(/true|false/) // ObjectまたはBoolean
  }


  return {
    /**
     * PrefixKeyを設定します。
     * @param {String} newPrefixKey 
     */
    setPrefixKey (newPrefixKey) {
      if (newPrefixKey)
        prefixKey = String(newPrefixKey) + ":"
      else
        prefixKey = "" 
    },

    /**
     * keyに保存した値があるかどうかを返します
     * @param {String} key 
     * @param {Object} config
     * @param  {Boolean} config.local - localStorageか否か
     * @param  {Boolean} config.withoutPrefix - prefixを使わないか否か
     * @return {Boolean}
     */
    has (key, config = {}) {
      return !!getItem(key, config.local, config.withoutPrefix)
    },

    /**
     * keyに保存した値を、必要があればパースして返します
     * @param {String} key 
     * @param {Object} config
     * @param  {Boolean} config.local - localStorageか否か
     * @param  {Boolean} config.string - 値をStringとして扱うか否か
     * @param  {Boolean} config.withoutPrefix - prefixを使わないか否か
     * @return {Object | String}
     */
    get (key, config = {}) {
      const item = getItem(key, config.local, config.withoutPrefix)
      
      if (!item)
        return null
      else if (config.string || !isShouldParse(item))
        return item
      else
        return JSON.parse(item)
    },

    /**
     * keyにvalueを保存します。必要あれば文字列化します。
     * @param {String} key 
     * @param {Object | String} value
     * @param {Object} config
     * @param  {Boolean} config.local - localStorageか否か
     * @param  {Boolean} config.string - 値をStringとして扱うか否か
     * @param  {Boolean} config.withoutPrefix - prefixを使わないか否か
     * @return {void}
     */
    set (key, value, config = {}) {
      let item = value

      if (!config.string && !_.isString(value))
        item = JSON.stringify(value)

      return setItem(key, item, config.local, config.withoutPrefix)
    },


    /**
     * keyに保存された値を削除します。
     * @param {String} key 
     * @param {Object} config
     * @param  {Boolean} config.local - localStorageか否か
     * @param  {Boolean} config.withoutPrefix - prefixを使わないか否か
     * @param  {Boolean} config.all - 前方一致をすべて消すか否か
     * @return {void}
     */
    remove (key, config = {}) {
      if (config.all)
        return removeAllItemWith(key, config.local, config.withoutPrefix)
      else
        return removeItem(key, config.local, config.withoutPrefix)
    },

    // localStorage用 ------------------
    hasLocal (key, config = {}) {
      config.local = true
      return this.has(key, config)
    },
    getLocal (key, config = {}) {
      config.local = true
      return this.get(key, config)
    },
    setLocal (key, value, config = {}) {
      config.local = true
      return this.set(key, value, config)
    },
    removeLocal (key, config = {}) {
      config.local = true
      return this.remove(key, config)
    },

    // sessionStorage用 ------------------
    hasSession (key, config = {}) {
      config.local = false
      return this.has(key, config)
    },
    getSession (key, config = {}) {
      config.local = false
      return this.get(key, config)
    },
    setSession (key, value, config = {}) {
      config.local = false
      return this.set(key, value, config)
    },
    removeSession (key, config = {}) {
      config.local = false
      return this.remove(key, config)
    },
  }
})()
