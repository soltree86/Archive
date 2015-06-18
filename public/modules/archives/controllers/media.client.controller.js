'use strict';

angular.module('archives').controller('MediaController', ['$scope', '$modalInstance', 'media', '$stateParams', '$location', 'Authentication',
	function($scope, $modalInstance, media, $stateParams, $location, Authentication) {
		$scope.media = media;

		$scope.updateMedia = function() {
			if(!$scope.media.title) {
				$scope.error = 'Title cannot be blank';
			} else {
				$modalInstance.close($scope.media);
			}
		};

		$scope.addMedia = function() {
			if(!this.title) {
				$scope.error = 'Title cannot be blank';
			} else {
				var media = {
					title: this.title,
					thumbnailUrl: this.thumbnailUrl,
					videoUrl: this.videoUrl,
					documentUrl: this.documentUrl
				};

				$modalInstance.close(media);
			}
		};

		$scope.cancel = function() {
			$modalInstance.dismiss('cancel');
		};
	}
]);