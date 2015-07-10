System.register(['bootstrap', 'bootstrap/css/bootstrap.css!'], function (_export) {
	'use strict';

	var App;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [function (_bootstrap) {}, function (_bootstrapCssBootstrapCss) {}],
		execute: function () {
			App = (function () {
				function App() {
					_classCallCheck(this, App);
				}

				_createClass(App, [{
					key: 'configureRouter',
					value: function configureRouter(config, router) {
						config.title = 'Contacts';
						config.map([{ route: '', moduleId: 'dialog', title: 'Quick Satrt' }, { route: 'buttons', moduleId: 'buttons', title: 'BUTTONS' }, { route: 'hideelem', moduleId: 'hideElement', title: 'Hide Elements' }, { route: 'theme', moduleId: 'theme', title: 'Theme' }, { route: 'customwidth', moduleId: 'customWidth', title: 'CustomWidth' }, { route: 'animations', moduleId: 'animation', title: 'Animations' }, { route: 'autoclose', moduleId: 'autoClose', title: 'AutoClose' }, { route: 'icons', moduleId: 'icons', title: 'Icons' }, { route: 'keyboard', moduleId: 'keyboard', title: 'Keyboard Actions' }]);

						this.router = router;
					}
				}]);

				return App;
			})();

			_export('App', App);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7S0FHYSxHQUFHOzs7Ozs7Ozs7QUFBSCxNQUFHO2FBQUgsR0FBRzsyQkFBSCxHQUFHOzs7aUJBQUgsR0FBRzs7WUFHQSx5QkFBQyxNQUFNLEVBQUUsTUFBTSxFQUFFO0FBQy9CLFlBQU0sQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO0FBQzFCLFlBQU0sQ0FBQyxHQUFHLENBQUMsQ0FDVixFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLEVBQ3ZELEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsRUFDM0QsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxFQUN0RSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQ3JELEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsRUFDdkUsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxFQUNuRSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLEVBQ2pFLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsRUFDckQsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLGtCQUFrQixFQUFFLENBQ3RFLENBQUMsQ0FBQzs7QUFFSCxVQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztNQUNyQjs7O1dBbEJXLEdBQUc7OztrQkFBSCxHQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIn0=