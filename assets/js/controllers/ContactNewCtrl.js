addressBookApp.controller('ContactNewCtrl', ['$scope', '$http', '$routeParams', '$location', 'AlertService', function($scope, $http, $routeParams, $location, AlertService){

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
			AlertService.add('success', 'Post has been created')
			$scope.firstName= "";
			$scope.lastName= "";
			$scope.email= "";
			$scope.streetAddress= "";
			$scope.city= "";
			$scope.state= "";
			$scope.zip= "";
			$scope.phone= "";
			$scope.notes= "";
			$location.path('/');

		}).error(function(err){
			alert(err);
		})
	}
}]);