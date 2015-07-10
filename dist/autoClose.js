System.register(['./Modal'], function (_export) {
  'use strict';

  var Modal, AutoClose;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_Modal) {
      Modal = _Modal.Modal;
    }],
    execute: function () {
      AutoClose = (function () {
        function AutoClose() {
          _classCallCheck(this, AutoClose);
        }

        _createClass(AutoClose, [{
          key: 'autocancel',
          value: function autocancel() {
            return new Modal({
              title: 'Sample Title!',
              content: 'Simple alert!',
              confirmButton: 'Ok',
              cancelButton: 'Cancel',
              autoClose: 'cancel|10000'
            });
          }
        }, {
          key: 'autook',
          value: function autook() {
            return new Modal({
              title: 'Sample Title!',
              content: 'Simple alert!',
              confirmButton: 'Ok',
              cancelButton: 'Cancel',
              autoClose: 'confirm|10000'
            });
          }
        }]);

        return AutoClose;
      })();

      _export('AutoClose', AutoClose);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dG9DbG9zZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7YUFDYSxTQUFTOzs7Ozs7OztxQkFEZCxLQUFLOzs7QUFDQSxlQUFTO0FBQ1QsaUJBREEsU0FBUyxHQUNOO2dDQURILFNBQVM7U0FHbkI7O3FCQUhVLFNBQVM7O2lCQUlWLHNCQUFHO0FBQ1gsbUJBQU8sSUFBSSxLQUFLLENBQUM7QUFDZixtQkFBSyxFQUFFLGVBQWU7QUFDdEIscUJBQU8sRUFBRSxlQUFlO0FBQ3hCLDJCQUFhLEVBQUUsSUFBSTtBQUNuQiwwQkFBWSxFQUFFLFFBQVE7QUFDekIsdUJBQVMsRUFBRyxjQUFjO2FBQ3hCLENBQUMsQ0FBQztXQUNKOzs7aUJBQ0ssa0JBQUc7QUFDUCxtQkFBTyxJQUFJLEtBQUssQ0FBQztBQUNmLG1CQUFLLEVBQUUsZUFBZTtBQUN0QixxQkFBTyxFQUFFLGVBQWU7QUFDeEIsMkJBQWEsRUFBRSxJQUFJO0FBQ25CLDBCQUFZLEVBQUUsUUFBUTtBQUN6Qix1QkFBUyxFQUFHLGVBQWU7YUFDekIsQ0FBQyxDQUFDO1dBQ0o7OztlQXJCVSxTQUFTOzs7MkJBQVQsU0FBUyIsImZpbGUiOiJhdXRvQ2xvc2UuanMiLCJzb3VyY2VSb290IjoiLi4vc3JjLyJ9