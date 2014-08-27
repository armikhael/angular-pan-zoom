var example = angular.module('test', ['panzoom','panzoomwidget','dragModule','ngDragDrop']);
// var example = angular.module('test', ['ngDragDrop']);


example.controller('TestController', ['$scope',
                               function($scope) {
	var shark = { x : 391, y: 371, width: 206, height: 136 };
	var chopper = { x : 88, y: 213, width: 660, height: 144 };
	var ladder = { x : 333, y: 325, width: 75, height: 200 };

	$scope.rects = [ chopper, shark, ladder ];

	// Instantiate models which will be passed to <panzoom> and <panzoomwidget>

	// The panzoom config model can be used to override default configuration values
	$scope.panzoomConfig = {
		zoomLevels: 12,
		neutralZoomLevel: 5,
		scalePerZoomLevel: 1.5,
		initialZoomToFit: chopper
	};

	// The panzoom model should initialle be empty; it is initialized by the <panzoom>
	// directive. It can be used to read the current state of pan and zoom. Also, it will
	// contain methods for manipulating this state.
	$scope.panzoomModel = {};

	$scope.zoomToShark = function() {
		$scope.panzoomModel.zoomToFit(shark);
	};

	$scope.zoomToChopper = function() {
		$scope.panzoomModel.zoomToFit(chopper);
	};

	$scope.zoomToLadder = function() {
		$scope.panzoomModel.zoomToFit(ladder);
	};

}
]);

example.controller('MainCtrl', function($scope) {
  $scope.men = [
      'John',
      'Jack',
      'Mark',
      'Ernie'
      ];
      
      
      $scope.women = ['hola'];  
      
      $scope.addText = "";
      
      
      $scope.dropSuccessHandler = function($event,index,array){
          array.splice(index,1);
      };
      
      $scope.onDrop = function($event,$data,array){
          array.push($data);
      };
  
});
