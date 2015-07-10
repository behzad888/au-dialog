System.register(['./Modal'], function (_export) {
  'use strict';

  var Modal, Theme;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_Modal) {
      Modal = _Modal.Modal;
    }],
    execute: function () {
      Theme = (function () {
        function Theme() {
          _classCallCheck(this, Theme);
        }

        _createClass(Theme, [{
          key: 'white',
          value: function white() {
            return new Modal({
              title: 'Title Sample!',
              content: 'Simple alert!',
              confirmButton: 'Ok',
              cancelButton: 'Cancel',
              theme: 'white'
            });
          }
        }, {
          key: 'black',
          value: function black() {
            return new Modal({
              title: 'Title Sample!',
              content: 'Simple alert!',
              confirmButton: 'Ok',
              cancelButton: 'Cancel',
              theme: 'black'
            });
          }
        }, {
          key: 'hololight',
          value: function hololight() {
            return new Modal({
              title: 'Title Sample!',
              content: 'Simple alert!',
              confirmButton: 'Ok',
              cancelButton: 'Cancel',
              theme: 'hololight'
            });
          }
        }, {
          key: 'holodark',
          value: function holodark() {
            return new Modal({
              title: 'Title Sample!',
              content: 'Simple alert!',
              confirmButton: 'Ok',
              cancelButton: 'Cancel',
              theme: 'holodark'
            });
          }
        }, {
          key: 'supervan',
          value: function supervan() {
            return new Modal({
              title: 'Title Sample!',
              content: 'Simple alert!',
              confirmButton: 'Ok',
              cancelButton: 'Cancel',
              theme: 'supervan',
              animation: 'scalex'
            });
          }
        }]);

        return Theme;
      })();

      _export('Theme', Theme);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRoZW1lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzthQUNhLEtBQUs7Ozs7Ozs7O3FCQURWLEtBQUs7OztBQUNBLFdBQUs7QUFDTCxpQkFEQSxLQUFLLEdBQ0Y7Z0NBREgsS0FBSztTQUdmOztxQkFIVSxLQUFLOztpQkFJWCxpQkFBRztBQUNOLG1CQUFPLElBQUksS0FBSyxDQUFDO0FBQ2YsbUJBQUssRUFBRSxlQUFlO0FBQ3RCLHFCQUFPLEVBQUUsZUFBZTtBQUN4QiwyQkFBYSxFQUFFLElBQUk7QUFDbkIsMEJBQVksRUFBRSxRQUFRO0FBQ3RCLG1CQUFLLEVBQUUsT0FBTzthQUNmLENBQUMsQ0FBQztXQUNKOzs7aUJBQ0ksaUJBQUc7QUFDTixtQkFBTyxJQUFJLEtBQUssQ0FBQztBQUNmLG1CQUFLLEVBQUUsZUFBZTtBQUN0QixxQkFBTyxFQUFFLGVBQWU7QUFDeEIsMkJBQWEsRUFBRSxJQUFJO0FBQ25CLDBCQUFZLEVBQUUsUUFBUTtBQUN0QixtQkFBSyxFQUFFLE9BQU87YUFDZixDQUFDLENBQUM7V0FDSjs7O2lCQUNRLHFCQUFHO0FBQ1YsbUJBQU8sSUFBSSxLQUFLLENBQUM7QUFDZixtQkFBSyxFQUFFLGVBQWU7QUFDdEIscUJBQU8sRUFBRSxlQUFlO0FBQ3hCLDJCQUFhLEVBQUUsSUFBSTtBQUNuQiwwQkFBWSxFQUFFLFFBQVE7QUFDdEIsbUJBQUssRUFBRSxXQUFXO2FBQ25CLENBQUMsQ0FBQztXQUNKOzs7aUJBQ08sb0JBQUc7QUFDVCxtQkFBTyxJQUFJLEtBQUssQ0FBQztBQUNmLG1CQUFLLEVBQUUsZUFBZTtBQUN0QixxQkFBTyxFQUFFLGVBQWU7QUFDeEIsMkJBQWEsRUFBRSxJQUFJO0FBQ25CLDBCQUFZLEVBQUUsUUFBUTtBQUN0QixtQkFBSyxFQUFFLFVBQVU7YUFDbEIsQ0FBQyxDQUFDO1dBQ0o7OztpQkFDTyxvQkFBRztBQUNULG1CQUFPLElBQUksS0FBSyxDQUFDO0FBQ2YsbUJBQUssRUFBRSxlQUFlO0FBQ3RCLHFCQUFPLEVBQUUsZUFBZTtBQUN4QiwyQkFBYSxFQUFFLElBQUk7QUFDbkIsMEJBQVksRUFBRSxRQUFRO0FBQ3RCLG1CQUFLLEVBQUUsVUFBVTtBQUNqQix1QkFBUyxFQUFFLFFBQVE7YUFDcEIsQ0FBQyxDQUFDO1dBQ0o7OztlQWpEVSxLQUFLOzs7dUJBQUwsS0FBSyIsImZpbGUiOiJ0aGVtZS5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIn0=