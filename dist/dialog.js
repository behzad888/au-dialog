System.register(['./Modal'], function (_export) {
  'use strict';

  var Modal, Dialog;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_Modal) {
      Modal = _Modal.Modal;
    }],
    execute: function () {
      Dialog = (function () {
        function Dialog() {
          _classCallCheck(this, Dialog);
        }

        _createClass(Dialog, [{
          key: 'ok',
          value: function ok() {
            return new Modal({
              title: 'Alert',
              content: 'Simple alert!',
              confirmButton: 'Ok',
              confirm: function confirm() {
                alert('Confirmed!');
              }
            });
          }
        }, {
          key: 'okCancell',
          value: function okCancell() {
            return new Modal({
              title: 'Confirm!',
              content: 'Simple confirm!',
              confirmButton: 'Ok',
              cancelButton: 'Cancel',
              confirm: function confirm() {
                alert('Confirmed!');
              },
              cancel: function cancel() {
                alert('Canceled!');
              }
            });
          }
        }, {
          key: 'noButton',
          value: function noButton() {
            return new Modal({
              title: 'Text content!',
              content: 'Simple modal!'
            });
          }
        }]);

        return Dialog;
      })();

      _export('Dialog', Dialog);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWxvZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7YUFDYSxNQUFNOzs7Ozs7OztxQkFEWCxLQUFLOzs7QUFDQSxZQUFNO0FBQ04saUJBREEsTUFBTSxHQUNIO2dDQURILE1BQU07U0FHaEI7O3FCQUhVLE1BQU07O2lCQUlmLGNBQUc7QUFDSCxtQkFBTyxJQUFJLEtBQUssQ0FBQztBQUNmLG1CQUFLLEVBQUUsT0FBTztBQUNkLHFCQUFPLEVBQUUsZUFBZTtBQUN4QiwyQkFBYSxFQUFFLElBQUk7QUFDbkIscUJBQU8sRUFBRSxtQkFBWTtBQUNuQixxQkFBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO2VBQ3JCO2FBQ0YsQ0FBQyxDQUFDO1dBQ0o7OztpQkFDUSxxQkFBRztBQUNWLG1CQUFPLElBQUksS0FBSyxDQUFDO0FBQ2YsbUJBQUssRUFBRSxVQUFVO0FBQ2pCLHFCQUFPLEVBQUUsaUJBQWlCO0FBQzFCLDJCQUFhLEVBQUUsSUFBSTtBQUNuQiwwQkFBWSxFQUFFLFFBQVE7QUFDdEIscUJBQU8sRUFBRSxtQkFBWTtBQUNuQixxQkFBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO2VBQ3JCO0FBQ0Qsb0JBQU0sRUFBRSxrQkFBWTtBQUNsQixxQkFBSyxDQUFDLFdBQVcsQ0FBQyxDQUFBO2VBQ25CO2FBQ0YsQ0FBQyxDQUFDO1dBQ0o7OztpQkFDTyxvQkFBRztBQUNULG1CQUFPLElBQUksS0FBSyxDQUFDO0FBQ2YsbUJBQUssRUFBRSxlQUFlO0FBQ3RCLHFCQUFPLEVBQUUsZUFBZTthQUN6QixDQUFDLENBQUM7V0FDSjs7O2VBakNVLE1BQU07Ozt3QkFBTixNQUFNIiwiZmlsZSI6ImRpYWxvZy5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIn0=