function dragAndResize() {
    $(".draggable").draggable({
      revert: "invalid",
      helper: "clone",
      cursor: "move",
      zIndex: 100
    });

    $(".droppable").droppable({
        drop: function (event, ui) {
            if (!ui.draggable.hasClass("canvas-item")) {
                var pos = this.getBoundingClientRect();
                var imagePath = ui.helper[0].dataset.imagepath;
                var dragImage = new Image();
                dragImage.src = imagePath;
                
                $(dragImage).css({
                    position: 'absolute',
                    left: (ui.offset.left - pos.left) + 'px',
                    top: (ui.offset.top - pos.top) + 'px'
                  })
                .addClass("canvas-item")
                .draggable({
                    cursor: "move",
                    stop: function (event, ui) {
                        if ($(this).hasClass("moved-canvas-item")) {
                            $(this).remove();
                        }
                    }
                 })
                .bind('mousewheel', (event) => {
                  var delta = event.originalEvent.wheelDelta;
                  $(event.currentTarget).css({
                     '-moz-transform':'rotate('+delta+'deg)',
                    '-webkit-transform':'rotate('+delta+'deg)',
                    '-o-transform':'rotate('+delta+'deg)',
                    '-ms-transform':'rotate('+delta+'deg)',
                    'transform':'rotate('+delta+'deg)'
                    })
                     event.preventDefault();
                     event.stopPropagation();
                  })
                .mousedown(function(event) {
                  switch (event.which) {
                      case 1:
                          this.width = this.width * 0.9;
                          break;
                      case 3:
                          this.width = this.width * 1.1;
                          break;
                        }
                      })
                .contextmenu(()  => {
                  return false;
                });
                $(".editor__canvas-container").append(dragImage);
              }
            },
             out: function (event, ui) {
               if (ui.draggable.hasClass("canvas-item")) {
                ui.draggable.removeClass("canvas-item");
                ui.draggable.addClass("moved-canvas-item");
            }
          }
       });
}