'use strict';

// Archives controller
angular.module('archives').controller('ArchivesController', ['$scope', '$modal', '$stateParams', '$location', 'Authentication', 'Archives',
	function($scope, $modal, $stateParams, $location, Authentication, Archives) {
		$scope.authentication = Authentication;

		// Create new Archive
		$scope.create = function() {
			// Create new Archive object
			var thumbnailUrl = null;
			if($scope.media && $scope.media.length) {
				thumbnailUrl = $scope.media[0].thumbnailUrl;
			}

			var archive = new Archives ({
				title: this.title,
				description: this.description,
				thumbnailUrl: thumbnailUrl,
				media:$scope.media
			});

			// Redirect after save
			archive.$save(function(response) {
				$location.path('archives/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Archive
		$scope.remove = function(archive) {
			if ( archive ) { 
				archive.$remove();

				for (var i in $scope.archives) {
					if ($scope.archives [i] === archive) {
						$scope.archives.splice(i, 1);
					}
				}
			} else {
				$scope.archive.$remove(function() {
					$location.path('archives');
				});
			}
		};

		// Update existing Archive
		$scope.update = function() {
			var archive = $scope.archive;

			archive.$update(function() {
				$location.path('archives/' + archive._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Archives
		$scope.find = function() {
			$scope.archives = Archives.query();
		};

		// Find existing Archive
		$scope.findOne = function() {
			$scope.archive = Archives.get({ 
				archiveId: $stateParams.archiveId
			});
		};

		$scope.createMedia = function() {
			var modalInstance = $modal.open({
				animation: true,
				templateUrl: 'modules/archives/views/media/create-media.client.view.html',
				controller: 'MediaController',
				resolve: {
					media: function () {
						return null;
					}
				}
			});

			modalInstance.result.then(function (media) {				
				if(media) {
					if(!$scope.media) {
						$scope.media = [];
					}
					$scope.media.push(media);
				}
				
		    }, function () {
		    	console.log('Modal dismissed at: ' + new Date());
		    });
		};

		$scope.editMedia = function(media) {
			var modalInstance = $modal.open({
				animation: true,
				templateUrl: 'modules/archives/views/media/edit-media.client.view.html',
				controller: 'MediaController',
				resolve: {
					media: function () {
						return media;
					}
				}
			});

			modalInstance.result.then(function (media) {				
				if(media) {
					for(var i in $scope.archive.media) {
						if($scope.archive.media[i]._id === media._id) {
							$scope.archive.media[i] = media;
							break;
						}
					}
				}
				
		    }, function () {
		    	console.log('Modal dismissed at: ' + new Date());
		    });
		};

		$scope.removeMedia = function(media) {
			for (var i in $scope.archive.media) {
				if ($scope.archive.media[i]._id === media._id) {
					$scope.archive.media.splice(i, 1);
				}
			}
		};

	}
]);