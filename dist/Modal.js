System.register(['jquery'], function (_export) {
    'use strict';

    var $, Modal;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_jquery) {
            $ = _jquery['default'];
        }],
        execute: function () {
            Modal = (function () {
                function Modal(options) {
                    _classCallCheck(this, Modal);

                    this.modalRecord = {
                        opened: 0,
                        closed: 0,
                        currentlyOpen: 0
                    };
                    this.template = '<div class="au-modal"><div class="au-modal-bg"></div><div class="au-modal-scrollpane"><div class="container"><div class="row"><div class="au-modal-box-container span6 offset3"><div class="au-modal-box"><div class="closeIcon"><span class="glyphicon glyphicon-remove"></span></div><div class="title"></div><div class="content"></div><div class="buttons"></div><div class="jquery-clear"></div></div></div></div></div></div></div>';
                    this.title = 'Hello';
                    this.content = 'Are you sure to continue?';

                    this.contentLoaded = function () {};

                    this.icon = '';
                    this.confirmButtonClass = 'btn-default';
                    this.cancelButtonClass = 'btn-default';
                    this.theme = 'white';
                    this.animation = 'scale';
                    this.animationSpeed = 400;
                    this.animationBounce = 1.5;
                    this.keyboardEnabled = false;
                    this.container = 'body';

                    this.confirm = function () {};

                    this.cancel = function () {};

                    this.backgroundDismiss = true;
                    this.autoClose = false;
                    this.closeIcon = true;
                    this.columnClass = 'col-md-6 col-md-offset-3';
                    this.animations = ['anim-scale', 'anim-top', 'anim-bottom', 'anim-left', 'anim-right', 'anim-zoom', 'anim-opacity', 'anim-none', 'anim-rotate', 'anim-rotatex', 'anim-rotatey', 'anim-scalex', 'anim-scaley'];

                    this.options = options;
                    $.extend(this, options);
                    this.init();
                }

                _createClass(Modal, [{
                    key: 'init',
                    value: function init() {
                        var self = this;
                        this._rand = Math.round(Math.random() * 99999);
                        this.buildHtml();
                        this.bindEvents();
                        setTimeout(function () {
                            self.open();
                        }, 0);
                    }
                }, {
                    key: 'buildHtml',
                    value: function buildHtml() {
                        var self = this;

                        this.animation = 'anim-' + this.animation.toLowerCase();
                        if (this.animation === 'none') this.animationSpeed = 0;

                        this.$el = $(this.template).appendTo(this.container).addClass(this.theme);
                        this.$el.find('.au-modal-box-container').addClass(this.columnClass);
                        this.$b = this.$el.find('.au-modal-box').css({
                            '-webkit-transition-duration': this.animationSpeed / 1000 + 's',
                            'transition-duration': this.animationSpeed / 1000 + 's',
                            '-webkjit-transition-timing-function': 'cubic-bezier(0.27, 1.12, 0.32, ' + this.animationBounce + ')',
                            'transition-timing-function': 'cubic-bezier(0.27, 1.12, 0.32, ' + this.animationBounce + ')'
                        });
                        this.$b.addClass(this.animation);
                        if (this.title) {
                            this.$el.find('div.title').html('<i class="' + this.icon + '"></i> ' + this.title);
                        } else {
                            this.$el.find('div.title').remove();
                        }
                        this.contentDiv = this.$el.find('div.content');

                        this.$btnc = this.$el.find('.buttons');
                        if (this.confirmButton && this.confirmButton.trim() !== '') {
                            this.$confirmButton = $('<button class="btn">' + this.confirmButton + '</button>').appendTo(this.$btnc).addClass(this.confirmButtonClass);
                        }

                        if (this.cancelButton && this.cancelButton.trim() !== '') {
                            this.$cancelButton = $('<button class="btn">' + this.cancelButton + '</button>').appendTo(this.$btnc).addClass(this.cancelButtonClass);
                        }
                        if (!this.confirmButton && !this.cancelButton) {
                            this.$btnc.remove();
                            if (this.closeIcon) this.$closeButton = this.$b.find('.closeIcon').show();
                        }
                        this.setContent();
                        if (this.autoClose) this.startCountDown();
                    }
                }, {
                    key: 'startCountDown',
                    value: function startCountDown() {
                        var opt = this.autoClose.split('|');
                        if (/cancel/.test(opt[0]) && this.type === 'alert') {
                            return false;
                        } else if (/confirm|cancel/.test(opt[0])) {
                            this.$cd = $('<span class="countdown">').appendTo(this['$' + opt[0] + 'Button']);
                            var self = this;
                            self.$cd.parent().click();
                            var time = opt[1] / 1000;
                            this.interval = setInterval(function () {
                                self.$cd.html(' [' + (time -= 1) + ']');
                                if (time === 0) {
                                    self.$cd.parent().trigger('click');
                                    clearInterval(self.interval);
                                }
                            }, 1000);
                        } else {
                            console.error('Invalid option ' + opt[0] + ', must be confirm/cancel');
                        }
                    }
                }, {
                    key: 'setContent',
                    value: function setContent(string) {
                        var self = this;
                        if (typeof string !== undefined && typeof string === 'string') {
                            this.content = string;
                            this.setContent();
                        } else if (typeof this.content === 'boolean') {
                            if (!this.content) this.contentDiv.remove();else console.error('Invalid option for property content: passed TRUE');
                        } else if (typeof this.content === 'string') {
                            if (this.content.substr(0, 4).toLowerCase() === 'url:') {
                                this.contentDiv.html('');
                                this.$btnc.find('button').prop('disabled', true);
                                var url = this.content.substring(4, this.content.length);
                                $.get(url).done(function (html) {
                                    self.contentDiv.html(html);
                                }).always(function (data, status, xhr) {
                                    if (typeof self.contentLoaded === 'function') self.contentLoaded(data, status, xhr);
                                    self.$btnc.find('button').prop('disabled', false);
                                    self.setDialogCenter();
                                });
                            } else {
                                this.contentDiv.html(this.content);
                            }
                        } else if (typeof this.content === 'function') {
                            this.contentDiv.html('');
                            this.$btnc.find('button').attr('disabled', 'disabled');
                            var promise = this.content(this);
                            if (typeof promise !== 'object') {
                                console.error('The content function must return jquery promise.');
                            } else if (typeof promise.always !== 'function') {
                                console.error('The object returned is not a jquery promise.');
                            } else {
                                promise.always(function () {
                                    self.$btnc.find('button').removeAttr('disabled');
                                    self.setDialogCenter();
                                });
                            }
                        } else {
                            console.error('Invalid option for property content, passed: ' + typeof this.content);
                        }
                        this.setDialogCenter();
                    }
                }, {
                    key: 'setDialogCenter',
                    value: function setDialogCenter(animate) {
                        var windowHeight = $(window).height();
                        var boxHeight = this.$b.outerHeight();
                        var topMargin = (windowHeight - boxHeight) / 2;
                        var minMargin = 100;
                        if (boxHeight > windowHeight - minMargin) {
                            var style = {
                                'margin-top': minMargin / 2,
                                'margin-bottom': minMargin / 2
                            };
                        } else {
                            var style = {
                                'margin-top': topMargin
                            };
                        }
                        if (animate) {
                            this.$b.animate(style, {
                                duration: animate ? this.animationSpeed : 0,
                                queue: false
                            });
                        } else {
                            this.$b.css(style);
                        }
                    }
                }, {
                    key: 'bindEvents',
                    value: function bindEvents() {
                        var self = this;
                        this.$el.find('.au-modal-scrollpane').click(function (e) {
                            if (self.backgroundDismiss) {
                                self.cancel();
                                self.close();
                            } else {
                                self.$b.addClass('hilight');
                                setTimeout(function () {
                                    self.$b.removeClass('hilight');
                                }, 400);
                            }
                        });

                        this.$el.find('.au-modal-box').click(function (e) {
                            e.stopPropagation();
                        });
                        if (this.$confirmButton) {
                            this.$confirmButton.click(function (e) {
                                e.preventDefault();
                                var r = self.confirm(self.$b);
                                if (typeof r === 'undefined' || r) self.close();
                            });
                        }
                        if (this.$cancelButton) {
                            this.$cancelButton.click(function (e) {
                                e.preventDefault();
                                var r = self.cancel(self.$b);
                                if (typeof r === 'undefined' || r) self.close();
                            });
                        }
                        if (this.$closeButton) {
                            this.$closeButton.click(function (e) {
                                e.preventDefault();
                                self.cancel();
                                self.close();
                            });
                        }
                        if (this.keyboardEnabled) {
                            setTimeout(function () {
                                $(window).on('keyup.' + this._rand, function (e) {
                                    self.reactOnKey(e);
                                });
                            }, 500);
                        }
                        $(window).on('resize.' + this._rand, function () {
                            self.setDialogCenter(true);
                        });
                    }
                }, {
                    key: 'open',
                    value: function open() {
                        var self = this;
                        if (this.isClosed()) return false;

                        setTimeout(function () {
                            self.$el.find('.au-modal-bg').animate({
                                opacity: 1
                            }, self.animationSpeed / 3);
                        }, 1);

                        $('body').addClass('au-modal-noscroll');
                        this.$b.removeClass(this.animations.join(' '));

                        $('body :focus').trigger('blur');
                        this.$b.find('input[autofocus]:visible:first').focus();
                        this.modalRecord.opened += 1;
                        this.modalRecord.currentlyOpen += 1;
                        return true;
                    }
                }, {
                    key: 'isClosed',
                    value: function isClosed() {
                        return this.$el.css('display') === '' ? true : false;
                    }
                }, {
                    key: 'close',
                    value: function close() {
                        var self = this;

                        $(window).unbind('resize.' + this._rand);
                        if (this.keyboardEnabled) $(window).unbind('keyup.' + this._rand);

                        this.$el.find('.au-modal-bg').animate({
                            opacity: 0
                        }, this.animationSpeed / 3);
                        this.$b.addClass(this.animation);
                        $('body').removeClass('au-modal-noscroll');
                        setTimeout(function () {
                            self.$el.remove();
                        }, this.animationSpeed + 30);
                        this.modalRecord.closed += 1;
                        this.modalRecord.currentlyOpen -= 1;
                    }
                }, {
                    key: 'reactOnKey',
                    value: function reactOnKey(e) {
                        var a = $('.au-modal');
                        if (a.eq(a.length - 1)[0] !== this.$el[0]) return false;
                        var key = e.which;
                        if (key === 27) {
                            if (!this.backgroundDismiss) {
                                this.$el.find('.au-modal-bg').click();
                                return false;
                            }
                            if (this.$cancelButton) {
                                this.$cancelButton.click();
                            } else {
                                this.close();
                            }
                        }
                        if (key === 13 || key == 32) {
                            if (this.$confirmButton) {
                                this.$confirmButton.click();
                            }
                        }
                    }
                }]);

                return Modal;
            })();

            _export('Modal', Modal);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,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