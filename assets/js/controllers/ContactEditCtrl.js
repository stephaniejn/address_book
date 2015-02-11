addressBookApp.controller('ContactEditModalCtrl', ['$scope', '$http', '$modalInstance', 'contact', 'AlertService', function($scope, $http, $modalInstance, contact, AlertService){

	$scope.firstName = contact.firstName
	$scope.lastName = contact.lastName
	$scope.email = contact.email
	$scope.streetAddress = contact.streetAddress
	$scope.city = contact.city
	$scope.state = contact.state
	$scope.zip = contact.zip
	$scope.phone = contact.phone
	$scope.notes = contact.notes

	$scope.save = function(){

		var contactData = {
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
		
		$http.put('/.api/contact/'+contact.id,contactData)
		.success(function(data){
			AlertService.add('success', 'Post has been updated')
			$modalInstance.close(data)
		})
		.error(function(err){
			alert(err);
		});
	}

	$scope.cancel = function(){
		$modalInstance.dismiss();
	}


}]);