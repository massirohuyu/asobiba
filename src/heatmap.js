import heatmap from "heatmap.js"

document.addEventListener('DOMContentLoaded', () => {
  var heatmapInstance = heatmap.create({
    container: document.querySelector('.Heatmap'),
    radius: 90
  });

  document.querySelector('.Heatmap').onclick = function(event) {
    heatmapInstance.addData({
      x: event.layerX,
      y: event.layerY,
      value: 1
    });
  };

  window.h337Ins = heatmapInstance

  heatmapInstance.hide = function () {
    heatmapInstance._renderer.canvas.style.display = 'none'
  }
  heatmapInstance.show = function () {
    heatmapInstance._renderer.canvas.style.display = ''
  }
})

export default heatmap
