class ProgressCircle {
  config = {
    percent: 5,
    color: "#76cc34"
  }

  constructor (config) {
    config = Object.assign(this.config, config);
  }

  generate (config) {
    config = Object.assign({}, this.config, config);
    
    const color = config.color.replace("#", "%23") // シャープ変換
    const percent = config.percent

    return `data:image/svg+xml;charset=utf8,%3Csvg%20width%3D%2250%22%20height%3D%2250%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%3Ccircle%20cx%3D%2225%22%20cy%3D%2225%22%20r%3D%2216%22%20stroke%3D%22rgba(0%2C0%2C0%2C.1)%22%20fill%3D%22transparent%22%20stroke-width%3D%2214%22%2F%3E%20%3Ccircle%20cx%3D%2225%22%20cy%3D%2225%22%20r%3D%2216%22%20stroke%3D%22${color}%22%20fill%3D%22transparent%22%20stroke-width%3D%2214%22%20stroke-dasharray%3D%22${percent}%20100%22%20transform%3D%22rotate(-90%2C%2025%2C%2025)%22%2F%3E%3C%2Fsvg%3E`
  }
}

