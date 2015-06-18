'use strict';

// Configuring the Articles module
angular.module('archives').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		//menuId, menuItemTitle, menuItemURL, menuItemType, menuItemUIRoute, isPublic, roles, position
		//Menus.addMenuItem('topbar', 'Archives', 'archives', 'dropdown', '/archives(/create)?');
		// Menus.addSubMenuItem('topbar', 'archives', 'List Archives', 'archives');
		// Menus.addSubMenuItem('topbar', 'archives', 'New Archive', 'archives/create');
		Menus.addMenuItem('topbar', 'Archives', 'archives', null, '/archives', true, null, 0);
		
	}
]);