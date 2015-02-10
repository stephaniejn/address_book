addressBookApp.controller('ContactNewCtrl', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){

	$scope.createContact = function(){

		$scope.alert=false;

		var data = {
			firstName:$scope.firstName,
			lastName:$scope.lastName,
			email:$scope.email,
			streetAddress:$scope.streetAddress,
			city:$scope.city,
			state:$scope.state,
			zip:$scope.zip,
			phone:$scope.phone,
			notes:$scope.notes
		}
		$http.post('/.api/contact',data).success(function(data){
			$scope.alert="Your Contact has been created.";
			$scope.firstName= "";
			$scope.lastName= "";
			$scope.email= "";
			$scope.streetAddress= "";
			$scope.city= "";
			$scope.state= "";
			$scope.zip= "";
			$scope.phone= "";
			$scope.notes= "";

		}).error(function(err){
			alert(err);
		})
	}
}]);