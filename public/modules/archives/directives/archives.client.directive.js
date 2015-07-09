'use strict';

// Archives Directive
angular.module('archives').directive('media', function() {
	return {
		restrict: 'E',
		link: function(scope, element, attrs) {
			var selectedMediaUrl,
				selectedMediaType,
				media;

			var vimeo = 'http://player.vimeo.com/video/',
				soundcloud = 'http://w.soundcloud.com/player/?url=soundcloud.com/soltree86/';
			scope.$watch(attrs.info, function(value) {
				scope.media = value;
				if(value) {
					scope.selectedMediaUrl = value[0].mediaType === 'vimeo' ? vimeo : soundcloud;
					scope.selectedMediaUrl += value[0].mediaInfo;
					scope.selectedMediaType = value[0].mediaType;
				}
			});

			scope.setMedia = function(media) {
				scope.selectedMediaUrl = media.mediaType === 'vimeo' ? vimeo : soundcloud;
				scope.selectedMediaUrl += media.mediaInfo;
				scope.selectedMediaType = media.mediaType;
			};
		},
		templateUrl: 'modules/archives/views/media/directive-media.client.view.html'
	};
});