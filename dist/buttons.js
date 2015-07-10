System.register(['./Modal'], function (_export) {
  'use strict';

  var Modal, Button;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_Modal) {
      Modal = _Modal.Modal;
    }],
    execute: function () {
      Button = (function () {
        function Button() {
          _classCallCheck(this, Button);
        }

        _createClass(Button, [{
          key: 'text',
          value: function text() {
            return new Modal({
              confirmButton: 'Yes i agree',
              cancelButton: 'NO never !'
            });
          }
        }, {
          key: 'info',
          value: function info() {
            return new Modal({
              title: 'Confirm!',
              content: 'Simple confirm!',
              confirm: function confirm() {
                alert('Confirmed!');
              },
              cancel: function cancel() {
                alert('Canceled!');
              },
              confirmButton: 'Ok',
              cancelButton: 'Cancel',
              confirmButtonClass: 'btn-info',
              cancelButtonClass: 'btn-danger'
            });
          }
        }, {
          key: 'warning',
          value: function warning() {
            return new Modal({
              title: 'Confirm!',
              content: 'Simple confirm!',
              confirm: function confirm() {
                alert('Confirmed!');
              },
              cancel: function cancel() {
                alert('Canceled!');
              },
              confirmButton: 'Ok',
              cancelButton: 'Cancel',
              confirmButtonClass: 'btn-warning',
              cancelButtonClass: 'btn-success'
            });
          }
        }]);

        return Button;
      })();

      _export('Button', Button);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2FBQ2EsTUFBTTs7Ozs7Ozs7cUJBRFgsS0FBSzs7O0FBQ0EsWUFBTTtBQUNOLGlCQURBLE1BQU0sR0FDSDtnQ0FESCxNQUFNO1NBR2hCOztxQkFIVSxNQUFNOztpQkFJYixnQkFBRztBQUNMLG1CQUFPLElBQUksS0FBSyxDQUFDO0FBQ2YsMkJBQWEsRUFBRSxhQUFhO0FBQzVCLDBCQUFZLEVBQUUsWUFBWTthQUMzQixDQUFDLENBQUM7V0FDSjs7O2lCQUNHLGdCQUFHO0FBQ0wsbUJBQU8sSUFBSSxLQUFLLENBQUM7QUFDZixtQkFBSyxFQUFFLFVBQVU7QUFDakIscUJBQU8sRUFBRSxpQkFBaUI7QUFDMUIscUJBQU8sRUFBRSxtQkFBWTtBQUNuQixxQkFBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO2VBQ3JCO0FBQ0Qsb0JBQU0sRUFBRSxrQkFBWTtBQUNsQixxQkFBSyxDQUFDLFdBQVcsQ0FBQyxDQUFBO2VBQ25CO0FBQ0QsMkJBQWEsRUFBRSxJQUFJO0FBQ25CLDBCQUFZLEVBQUUsUUFBUTtBQUN0QixnQ0FBa0IsRUFBRSxVQUFVO0FBQzlCLCtCQUFpQixFQUFFLFlBQVk7YUFDaEMsQ0FBQyxDQUFDO1dBQ0o7OztpQkFDTSxtQkFBRztBQUNSLG1CQUFPLElBQUksS0FBSyxDQUFDO0FBQ2YsbUJBQUssRUFBRSxVQUFVO0FBQ2pCLHFCQUFPLEVBQUUsaUJBQWlCO0FBQzFCLHFCQUFPLEVBQUUsbUJBQVk7QUFDbkIscUJBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztlQUNyQjtBQUNELG9CQUFNLEVBQUUsa0JBQVk7QUFDbEIscUJBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQTtlQUNuQjtBQUNELDJCQUFhLEVBQUUsSUFBSTtBQUNuQiwwQkFBWSxFQUFFLFFBQVE7QUFDdEIsZ0NBQWtCLEVBQUUsYUFBYTtBQUNqQywrQkFBaUIsRUFBRSxhQUFhO2FBQ2pDLENBQUMsQ0FBQztXQUNKOzs7ZUF6Q1UsTUFBTTs7O3dCQUFOLE1BQU0iLCJmaWxlIjoiYnV0dG9ucy5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIn0=