addressBookApp.controller('HomeCtrl', ['$scope', '$http', '$modal', '$location', 'AlertService', function($scope, $http, $modal, $location, AlertService){
	$scope.contacts = [];

	var queryData = $location.search();
	var searchTerm = queryData.q || false;

	var req={
		url:'/.api/contact/',
		params:{
			'sort':'createdAt Desc'
		}
	}

	if (searchTerm){
	req.params.firstName='%'+searchTerm+'%'
	}

	$http(req).success(function(data){
		$scope.contacts = data;
	});

	$scope.deleteContact = function(idx){
		var contactId= $scope.contacts[idx].id
		$http.delete('/.api/contact/'+contactId).success(function(data){
			$scope.contacts.splice(idx,1);
			AlertService.add('danger', 'Post has been deleted')
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