/*! Buttons Bulma styling 4.0.0-beta.1 for DataTables
 * Copyright (c) SpryMedia Ltd - datatables.net/license
 */

(function(factory){
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['datatables.net-bm', 'datatables.net-buttons'], function (dt) {
			return factory(window, document, dt);
		});
	}
	else if (typeof exports === 'object') {
		// CommonJS
		var cjsRequires = function (root) {
			if (! root.DataTable) {
				require('datatables.net-bm')(root);
			}

			if (! window.DataTable.Buttons) {
				require('datatables.net-buttons')(root);
			}
		};

		if (typeof window === 'undefined') {
			module.exports = function (root) {
				if (! root) {
					// CommonJS environments without a window global must pass a
					// root. This will give an error otherwise
					root = window;
				}

				cjsRequires(root);
				return factory(root, root.document, root.DataTable);
			};
		}
		else {
			cjsRequires(window);
			module.exports = factory(window, window.document, window.DataTable);
		}
	}
	else {
		// Browser
		factory(window, document, window.DataTable);
	}
}(function(window, document, DataTable) {
'use strict';



var Dom = DataTable.Dom;
var util = DataTable.util;

util.object.assignDeep(DataTable.Buttons.defaults, {
	dom: {
		container: {
			className: 'dt-buttons field is-grouped'
		},
		button: {
			className: 'button',
			active: 'is-active',
			disabled: 'is-disabled',
			dropHtml:
				'<span class="icon is-small"><i class="fa fa-angle-down" aria-hidden="true"></i></span>',
			dropClass: ''
		},
		collection: {
			action: {
				tag: 'div',
				className: 'dropdown-content'
			},
			button: {
				tag: 'a',
				className: 'dt-button dropdown-item',
				active: 'dt-button-active',
				disabled: 'is-disabled',
				spacer: {
					className: 'dropdown-divider',
					tag: 'hr'
				}
			},
			closeButton: false,
			container: {
				className: 'dt-button-collection dropdown dropdown-menu',
				content: {
					className: 'dropdown-content'
				}
			}
		},
		split: {
			action: {
				tag: 'button',
				className: 'dt-button-split-drop-button button',
				closeButton: false
			},
			dropdown: {
				tag: 'button',
				className: 'button',
				closeButton: false,
				align: 'split-left',
				splitAlignClass: 'dt-button-split-left'
			},
			wrapper: {
				tag: 'div',
				className:
					'dt-button-split dropdown-trigger buttons has-addons',
				closeButton: false
			}
		}
	},
	buttonCreated: function (config, button) {
		// For collections
		if (config.buttons) {
			// Wrap the dropdown content in a menu element
			config._collection = Dom
				.c('div')
				.classAdd('dropdown-menu')
				.append(config._collection);
		}

		return button;
	}
});


return DataTable;
}));
