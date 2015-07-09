'use strict';

angular.module('archives').controller('MediaController', ['$scope', '$modalInstance', 'media', '$stateParams', '$location', 'Authentication',
	function($scope, $modalInstance, media, $stateParams, $location, Authentication) {
		$scope.media = media;
		$scope.mediaType = 'vimeo';

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
				var uuid = guid();

				var media = {
					title: this.title,
					mediaType: this.mediaType,
					mediaInfo: this.mediaInfo,
					thumbnail: this.thumbnail,
					documentUrl: this.documentUrl,
					tempId: uuid
				};

				$modalInstance.close(media);
			}
		};


		function guid() {
		  function s4() {
		    return Math.floor((1 + Math.random()) * 0x10000)
		      .toString(16)
		      .substring(1);
		  }
		  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
		    s4() + '-' + s4() + s4() + s4();
		}

		$scope.cancel = function() {
			$modalInstance.dismiss('cancel');
		};
	}
]);