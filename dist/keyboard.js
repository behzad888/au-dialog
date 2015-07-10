System.register(['./Modal'], function (_export) {
	'use strict';

	var Modal, Keyboard;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [function (_Modal) {
			Modal = _Modal.Modal;
		}],
		execute: function () {
			Keyboard = (function () {
				function Keyboard() {
					_classCallCheck(this, Keyboard);
				}

				_createClass(Keyboard, [{
					key: 'keyboard',
					value: function keyboard() {
						return new Modal({
							keyboardEnabled: true,
							icon: 'glyphicon glyphicon-heart',
							title: 'Sample Title!',
							content: 'Press ESC or ENTER to see it in action.',
							confirmButton: 'Ok',
							cancelButton: 'Cancel',
							cancel: function cancel() {
								alert('canceled');
							},
							confirm: function confirm() {
								alert('confirmed');
							}
						});
					}
				}]);

				return Keyboard;
			})();

			_export('Keyboard', Keyboard);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtleWJvYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztZQUNhLFFBQVE7Ozs7Ozs7O2tCQURiLEtBQUs7OztBQUNBLFdBQVE7QUFDVCxhQURDLFFBQVEsR0FDTjsyQkFERixRQUFRO0tBR25COztpQkFIVyxRQUFROztZQUlaLG9CQUFHO0FBQ1YsYUFBTyxJQUFJLEtBQUssQ0FBQztBQUNoQixzQkFBZSxFQUFFLElBQUk7QUFDckIsV0FBSSxFQUFFLDJCQUEyQjtBQUNqQyxZQUFLLEVBQUUsZUFBZTtBQUN0QixjQUFPLEVBQUUseUNBQXlDO0FBQ2xELG9CQUFhLEVBQUUsSUFBSTtBQUNuQixtQkFBWSxFQUFFLFFBQVE7QUFDdEIsYUFBTSxFQUFFLGtCQUFZO0FBQ25CLGFBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsQjtBQUNELGNBQU8sRUFBRSxtQkFBWTtBQUNwQixhQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbkI7T0FDRCxDQUFDLENBQUM7TUFDSDs7O1dBbkJXLFFBQVE7Ozt1QkFBUixRQUFRIiwiZmlsZSI6ImtleWJvYXJkLmpzIiwic291cmNlUm9vdCI6Ii4uL3NyYy8ifQ==