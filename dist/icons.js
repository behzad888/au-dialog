System.register(['./Modal'], function (_export) {
  'use strict';

  var Modal, Icons;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_Modal) {
      Modal = _Modal.Modal;
    }],
    execute: function () {
      Icons = (function () {
        function Icons() {
          _classCallCheck(this, Icons);
        }

        _createClass(Icons, [{
          key: 'glyphicon',
          value: function glyphicon() {
            return new Modal({
              icon: 'glyphicon glyphicon-heart',
              title: 'Sample Title!',
              content: 'Simple alert!',
              confirmButton: 'Ok',
              cancelButton: 'Cancel'

            });
          }
        }, {
          key: 'fontAwesome',
          value: function fontAwesome() {
            return new Modal({
              icon: 'fa fa-warning',
              title: 'Sample Title!',
              content: 'Simple alert!',
              confirmButton: 'Ok',
              cancelButton: 'Cancel'
            });
          }
        }, {
          key: 'animfontAwesome',
          value: function animfontAwesome() {
            return new Modal({
              icon: 'fa fa-spinner fa-spin',
              title: 'Sample Title!',
              content: 'Simple alert!',
              confirmButton: 'Ok',
              cancelButton: 'Cancel'
            });
          }
        }]);

        return Icons;
      })();

      _export('Icons', Icons);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImljb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzthQUNhLEtBQUs7Ozs7Ozs7O3FCQURWLEtBQUs7OztBQUNBLFdBQUs7QUFDTCxpQkFEQSxLQUFLLEdBQ0Y7Z0NBREgsS0FBSztTQUdmOztxQkFIVSxLQUFLOztpQkFJUCxxQkFBRztBQUNWLG1CQUFPLElBQUksS0FBSyxDQUFDO0FBQ2Ysa0JBQUksRUFBRSwyQkFBMkI7QUFDakMsbUJBQUssRUFBRSxlQUFlO0FBQ3RCLHFCQUFPLEVBQUUsZUFBZTtBQUN4QiwyQkFBYSxFQUFFLElBQUk7QUFDbkIsMEJBQVksRUFBRSxRQUFROzthQUV2QixDQUFDLENBQUM7V0FDSjs7O2lCQUNVLHVCQUFHO0FBQ1osbUJBQU8sSUFBSSxLQUFLLENBQUM7QUFDZixrQkFBSSxFQUFFLGVBQWU7QUFDckIsbUJBQUssRUFBRSxlQUFlO0FBQ3RCLHFCQUFPLEVBQUUsZUFBZTtBQUN4QiwyQkFBYSxFQUFFLElBQUk7QUFDbkIsMEJBQVksRUFBRSxRQUFRO2FBQ3ZCLENBQUMsQ0FBQztXQUNKOzs7aUJBQ2MsMkJBQUc7QUFDaEIsbUJBQU8sSUFBSSxLQUFLLENBQUM7QUFDZixrQkFBSSxFQUFFLHVCQUF1QjtBQUM3QixtQkFBSyxFQUFFLGVBQWU7QUFDdEIscUJBQU8sRUFBRSxlQUFlO0FBQ3hCLDJCQUFhLEVBQUUsSUFBSTtBQUNuQiwwQkFBWSxFQUFFLFFBQVE7YUFDdkIsQ0FBQyxDQUFDO1dBQ0o7OztlQS9CVSxLQUFLOzs7dUJBQUwsS0FBSyIsImZpbGUiOiJpY29ucy5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIn0=