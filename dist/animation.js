System.register(['./Modal'], function (_export) {
  'use strict';

  var Modal, Animation;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_Modal) {
      Modal = _Modal.Modal;
    }],
    execute: function () {
      Animation = (function () {
        function Animation() {
          _classCallCheck(this, Animation);
        }

        _createClass(Animation, [{
          key: 'scale',
          value: function scale() {
            return new Modal({
              title: 'Title Sample!',
              content: 'Simple alert!',
              confirmButton: 'Ok',
              animation: 'scale'

            });
          }
        }, {
          key: 'top',
          value: function top() {
            return new Modal({
              title: 'Title Sample!',
              content: 'Simple alert!',
              confirmButton: 'Ok',
              animation: 'top'

            });
          }
        }, {
          key: 'bottom',
          value: function bottom() {
            return new Modal({
              title: 'Title Sample!',
              content: 'Simple alert!',
              confirmButton: 'Ok',
              animation: 'bottom'

            });
          }
        }, {
          key: 'left',
          value: function left() {
            return new Modal({
              title: 'Title Sample!',
              content: 'Simple alert!',
              confirmButton: 'Ok',
              animation: 'left'

            });
          }
        }, {
          key: 'right',
          value: function right() {
            return new Modal({
              title: 'Title Sample!',
              content: 'Simple alert!',
              confirmButton: 'Ok',
              animation: 'right'

            });
          }
        }, {
          key: 'zoom',
          value: function zoom() {
            return new Modal({
              title: 'Title Sample!',
              content: 'Simple alert!',
              confirmButton: 'Ok',
              animation: 'zoom'

            });
          }
        }, {
          key: 'opacity',
          value: function opacity() {
            return new Modal({
              title: 'Title Sample!',
              content: 'Simple alert!',
              confirmButton: 'Ok',
              animation: 'opacity'

            });
          }
        }, {
          key: 'none',
          value: function none() {
            return new Modal({
              title: 'Title Sample!',
              content: 'Simple alert!',
              confirmButton: 'Ok',
              animation: 'none'

            });
          }
        }, {
          key: 'rotate',
          value: function rotate() {
            return new Modal({
              title: 'Title Sample!',
              content: 'Simple alert!',
              confirmButton: 'Ok',
              animation: 'rotate'

            });
          }
        }, {
          key: 'rotatex',
          value: function rotatex() {
            return new Modal({
              title: 'Title Sample!',
              content: 'Simple alert!',
              confirmButton: 'Ok',
              animation: 'rotatex'

            });
          }
        }, {
          key: 'rotatey',
          value: function rotatey() {
            return new Modal({
              title: 'Title Sample!',
              content: 'Simple alert!',
              confirmButton: 'Ok',
              animation: 'rotatey'

            });
          }
        }, {
          key: 'scalex',
          value: function scalex() {
            return new Modal({
              title: 'Title Sample!',
              content: 'Simple alert!',
              confirmButton: 'Ok',
              animation: 'scalex'

            });
          }
        }, {
          key: 'scaley',
          value: function scaley() {
            return new Modal({
              title: 'Title Sample!',
              content: 'Simple alert!',
              confirmButton: 'Ok',
              animation: 'scaley'

            });
          }
        }, {
          key: 'slow',
          value: function slow() {
            return new Modal({
              title: 'Title Sample!',
              content: 'Simple alert!',
              confirmButton: 'Ok',
              animation: 'zoom',
              animationSpeed: 800

            });
          }
        }, {
          key: 'fast',
          value: function fast() {
            return new Modal({
              title: 'Title Sample!',
              content: 'Simple alert!',
              confirmButton: 'Ok',
              animation: 'zoom',
              animationSpeed: 50
            });
          }
        }, {
          key: 'bounce',
          value: function bounce() {
            return new Modal({
              title: 'Title Sample!',
              content: 'Simple alert!',
              confirmButton: 'Ok',
              animation: 'scalex',
              animationBounce: 5
            });
          }
        }]);

        return Animation;
      })();

      _export('Animation', Animation);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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