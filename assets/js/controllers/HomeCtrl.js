addressBookApp.controller('HomeCtrl', ['$scope', '$http', '$modal', function($scope, $http, $modal){
	$scope.contacts = [];

	// var req={
	// 	url:'/.api/contact/',
	// 	params:{
	// 		'sort':'createdAt Desc'
	// 	}
	// }

	$http.get('/.api/contact').success(function(data){
		$scope.contacts = data;
	});

	$scope.deleteContact = function(idx){
		var contactId= $scope.contacts[idx].id
		$http.delete('/.api/contact/'+contactId).success(function(data){
			$scope.contacts.splice(idx,1);
		}).error(function(err){
			alert(err)
		})
		
	}

	$scope.editContact = function(idx){
		var contactIdx = idx;
		$modal.open({
			templateUrl:'/views/contact/editModal.html',
			controller:'ContactEditModalCtrl',
			resolve:{
				contact:function(){
					return $scope.contacts[contactIdx]
				}
			}
		}).result.then(function(updateContact){
			$scope.contacts[contactIdx]=updateContact
		},function(){
			alert('modal closed with cancel')
		})
	}
	
}])