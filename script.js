AFRAME.registerComponent('click-handler', {
    init: function () {
      this.el.addEventListener('click', function () {
        console.log('Artwork clicked!');
        
      });
    }
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    var clickableEntities = document.querySelectorAll('.clickable');
  
    clickableEntities.forEach(function (entity) {
      entity.setAttribute('click-handler', '');
    });
  });
  