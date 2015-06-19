'use strict';

// Archives Directive
angular.module('archives').directive('media', function() {
	return {
		restrict: 'E',
		link: function(scope, element, attrs) {
			var selectedMedia,
				media;

			scope.$watch(attrs.info, function(value) {
				scope.media = value;
				if(value) {
					scope.selectedMedia = value[0];
				}
			});

			scope.setMedia = function(media) {
				scope.selectedMedia = media;
			};
		},
		templateUrl: 'modules/archives/views/media/directive-media.client.view.html'
	};
});