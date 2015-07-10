System.register(['./Modal'], function (_export) {
  'use strict';

  var Modal, HideElement;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_Modal) {
      Modal = _Modal.Modal;
    }],
    execute: function () {
      HideElement = (function () {
        function HideElement() {
          _classCallCheck(this, HideElement);
        }

        _createClass(HideElement, [{
          key: 'noTitle',
          value: function noTitle() {
            return new Modal({
              title: false,
              content: 'Simple alert!',
              confirmButton: 'Ok',
              cancelButton: 'Cancel'
            });
          }
        }, {
          key: 'noContent',
          value: function noContent() {
            return new Modal({
              title: 'Confirm!',
              content: false,
              confirmButton: 'Ok',
              cancelButton: 'Cancel'
            });
          }
        }, {
          key: 'noTitleCancel',
          value: function noTitleCancel() {
            return new Modal({
              title: false,
              content: 'Simple alert!',
              confirmButton: 'Ok',
              cancelButton: false
            });
          }
        }, {
          key: 'noTitleCancelConfirm',
          value: function noTitleCancelConfirm() {
            return new Modal({
              title: false,
              content: 'Simple alert!',
              confirmButton: false,
              cancelButton: false
            });
          }
        }]);

        return HideElement;
      })();

      _export('HideElement', HideElement);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpZGVFbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzthQUNhLFdBQVc7Ozs7Ozs7O3FCQURoQixLQUFLOzs7QUFDQSxpQkFBVztBQUNYLGlCQURBLFdBQVcsR0FDUjtnQ0FESCxXQUFXO1NBR3JCOztxQkFIVSxXQUFXOztpQkFJZixtQkFBRztBQUNSLG1CQUFPLElBQUksS0FBSyxDQUFDO0FBQ2YsbUJBQUssRUFBRSxLQUFLO0FBQ1oscUJBQU8sRUFBRSxlQUFlO0FBQ3hCLDJCQUFhLEVBQUUsSUFBSTtBQUNuQiwwQkFBWSxFQUFFLFFBQVE7YUFDdkIsQ0FBQyxDQUFDO1dBQ0o7OztpQkFDUSxxQkFBRztBQUNWLG1CQUFPLElBQUksS0FBSyxDQUFDO0FBQ2YsbUJBQUssRUFBRSxVQUFVO0FBQ2pCLHFCQUFPLEVBQUUsS0FBSztBQUNkLDJCQUFhLEVBQUUsSUFBSTtBQUNuQiwwQkFBWSxFQUFFLFFBQVE7YUFDdkIsQ0FBQyxDQUFDO1dBQ0o7OztpQkFDWSx5QkFBRztBQUNkLG1CQUFPLElBQUksS0FBSyxDQUFDO0FBQ2YsbUJBQUssRUFBRSxLQUFLO0FBQ1oscUJBQU8sRUFBRSxlQUFlO0FBQ3hCLDJCQUFhLEVBQUUsSUFBSTtBQUNuQiwwQkFBWSxFQUFFLEtBQUs7YUFDcEIsQ0FBQyxDQUFDO1dBQ0o7OztpQkFDbUIsZ0NBQUc7QUFDckIsbUJBQU8sSUFBSSxLQUFLLENBQUM7QUFDZixtQkFBSyxFQUFFLEtBQUs7QUFDWixxQkFBTyxFQUFFLGVBQWU7QUFDeEIsMkJBQWEsRUFBRSxLQUFLO0FBQ3BCLDBCQUFZLEVBQUUsS0FBSzthQUNwQixDQUFDLENBQUM7V0FDSjs7O2VBbkNVLFdBQVc7Ozs2QkFBWCxXQUFXIiwiZmlsZSI6ImhpZGVFbGVtZW50LmpzIiwic291cmNlUm9vdCI6Ii4uL3NyYy8ifQ==