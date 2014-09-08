  angular.module('dragModule', [])
    .directive('myDraggable', ['$document', function($document) {
      return function(scope, element, attr) {
        var startX = 0, startY = 0, x = 0, y = 0;

        element.css({
         position: 'relative',
         border: '1px solid red',
         backgroundColor: 'lightgrey',
         cursor: 'pointer'
        });

        element.on('mousedown', function(event) {
          // Prevent default dragging of selected content
          event.preventDefault();
          startX = event.pageX - x;
          startY = event.pageY - y;
          $document.on('mousemove', mousemove);
          $document.on('mouseup', mouseup);
        });

        function mousemove(event) {
          y = event.pageY - startY;
          x = event.pageX - startX;
          
          // console.log('X: '+ x  + ' Y: '+ y);
          // console.log('startX '+ startX + ' startY '+ startY);
          // console.log('event.pageY '+ event.pageY + ' event.pageX '+ event.pageX);
          
          //var NewZoomLevel = localStorage.getItem("NewZoomLevel");
          //console.log('NewZoomLevel ' + NewZoomLevel);

          // if(NewZoomLevel < 1){
          //   event.preventDefault();
          //   y = event.pageY - startY;
          //   x = event.pageX - startX;
          //   console.log('1');
          //   element.css({
          //   top: y  + '0px',
          //   left:  x  + '0px'
          // });
          //   console.log('X: '+ x  + ' Y: '+ y);
          // }
          // else if(NewZoomLevel < 3){
          //   event.preventDefault();
          //   y = event.pageY - startY;
          //   x = event.pageX - startX;
          //   console.log('3');
          //   element.css({
          //   top: y * 3 + 'px',
          //   left:  x * 3 + 'px'
          // });
          //   console.log('X: '+ x  + ' Y: '+ y);
          // }
          // else if(NewZoomLevel < 11){
          //   event.preventDefault();
          //   y = event.pageY - startY;
          //   x = event.pageX - startX;
          //   console.log('11');
          //   element.css({
          //   top:  y + 'px',
          //   left: x + 'px'
          // });
          //   console.log('X: '+ x  + ' Y: '+ y);
          // }
          
          element.css({
            top:  y *3 + 'px',
            left: x *3 + 'px'
          });
          //console.log('X: '+ x  + ' Y: '+ y);       
        }

        function mouseup() {
          $document.off('mousemove', mousemove);
          $document.off('mouseup', mouseup);
        }
      };
    }]);
