/*! jQuery Validation Plugin - v1.19.5 - 7/1/2022
 * https://jqueryvalidation.org/
 * Copyright (c) 2022 Jörn Zaefferer; Licensed MIT */
!(function (a) {
  'function' == typeof define && define.amd
    ? define(['jquery'], a)
    : 'object' == typeof module && module.exports
    ? (module.exports = a(require('jquery')))
    : a(jQuery);
})(function (a) {
  a.extend(a.fn, {
    validate: function (b) {
      if (!this.length)
        return void (
          b &&
          b.debug &&
          window.console &&
          console.warn("Nothing selected, can't validate, returning nothing.")
        );
      var c = a.data(this[0], 'validator');
      return c
        ? c
        : (this.attr('novalidate', 'novalidate'),
          (c = new a.validator(b, this[0])),
          a.data(this[0], 'validator', c),
          c.settings.onsubmit &&
            (this.on('click.validate', ':submit', function (b) {
              (c.submitButton = b.currentTarget),
                a(this).hasClass('cancel') && (c.cancelSubmit = !0),
                void 0 !== a(this).attr('formnovalidate') &&
                  (c.cancelSubmit = !0);
            }),
            this.on('submit.validate', function (b) {
              function d() {
                var d, e;
                return (
                  c.submitButton &&
                    (c.settings.submitHandler || c.formSubmitted) &&
                    (d = a("<input type='hidden'/>")
                      .attr('name', c.submitButton.name)
                      .val(a(c.submitButton).val())
                      .appendTo(c.currentForm)),
                  !(c.settings.submitHandler && !c.settings.debug) ||
                    ((e = c.settings.submitHandler.call(c, c.currentForm, b)),
                    d && d.remove(),
                    void 0 !== e && e)
                );
              }
              return (
                c.settings.debug && b.preventDefault(),
                c.cancelSubmit
                  ? ((c.cancelSubmit = !1), d())
                  : c.form()
                  ? c.pendingRequest
                    ? ((c.formSubmitted = !0), !1)
                    : d()
                  : (c.focusInvalid(), !1)
              );
            })),
          c);
    },
    valid: function () {
      var b, c, d;
      return (
        a(this[0]).is('form')
          ? (b = this.validate().form())
          : ((d = []),
            (b = !0),
            (c = a(this[0].form).validate()),
            this.each(function () {
              (b = c.element(this) && b), b || (d = d.concat(c.errorList));
            }),
            (c.errorList = d)),
        b
      );
    },
    rules: function (b, c) {
      var d,
        e,
        f,
        g,
        h,
        i,
        j = this[0],
        k =
          'undefined' != typeof this.attr('contenteditable') &&
          'false' !== this.attr('contenteditable');
      if (
        null != j &&
        (!j.form &&
          k &&
          ((j.form = this.closest('form')[0]), (j.name = this.attr('name'))),
        null != j.form)
      ) {
        if (b)
          switch (
            ((d = a.data(j.form, 'validator').settings),
            (e = d.rules),
            (f = a.validator.staticRules(j)),
            b)
          ) {
            case 'add':
              a.extend(f, a.validator.normalizeRule(c)),
                delete f.messages,
                (e[j.name] = f),
                c.messages &&
                  (d.messages[j.name] = a.extend(
                    d.messages[j.name],
                    c.messages
                  ));
              break;
            case 'remove':
              return c
                ? ((i = {}),
                  a.each(c.split(/\s/), function (a, b) {
                    (i[b] = f[b]), delete f[b];
                  }),
                  i)
                : (delete e[j.name], f);
          }
        return (
          (g = a.validator.normalizeRules(
            a.extend(
              {},
              a.validator.classRules(j),
              a.validator.attributeRules(j),
              a.validator.dataRules(j),
              a.validator.staticRules(j)
            ),
            j
          )),
          g.required &&
            ((h = g.required),
            delete g.required,
            (g = a.extend({ required: h }, g))),
          g.remote &&
            ((h = g.remote), delete g.remote, (g = a.extend(g, { remote: h }))),
          g
        );
      }
    },
  });
  var b = function (a) {
    return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  };
  a.extend(a.expr.pseudos || a.expr[':'], {
    blank: function (c) {
      return !b('' + a(c).val());
    },
    filled: function (c) {
      var d = a(c).val();
      return null !== d && !!b('' + d);
    },
    unchecked: function (b) {
      return !a(b).prop('checked');
    },
  }),
    (a.validator = function (b, c) {
      (this.settings = a.extend(!0, {}, a.validator.defaults, b)),
        (this.currentForm = c),
        this.init();
    }),
    (a.validator.format = function (b, c) {
      return 1 === arguments.length
        ? function () {
            var c = a.makeArray(arguments);
            return c.unshift(b), a.validator.format.apply(this, c);
          }
        : void 0 === c
        ? b
        : (arguments.length > 2 &&
            c.constructor !== Array &&
            (c = a.makeArray(arguments).slice(1)),
          c.constructor !== Array && (c = [c]),
          a.each(c, function (a, c) {
            b = b.replace(new RegExp('\\{' + a + '\\}', 'g'), function () {
              return c;
            });
          }),
          b);
    }),
    a.extend(a.validator, {
      defaults: {
        messages: {},
        groups: {},
        rules: {},
        errorClass: 'error',
        pendingClass: 'pending',
        validClass: 'valid',
        errorElement: 'label',
        focusCleanup: !1,
        focusInvalid: !0,
        errorContainer: a([]),
        errorLabelContainer: a([]),
        onsubmit: !0,
        ignore: ':hidden',
        ignoreTitle: !1,
        onfocusin: function (a) {
          (this.lastActive = a),
            this.settings.focusCleanup &&
              (this.settings.unhighlight &&
                this.settings.unhighlight.call(
                  this,
                  a,
                  this.settings.errorClass,
                  this.settings.validClass
                ),
              this.hideThese(this.errorsFor(a)));
        },
        onfocusout: function (a) {
          this.checkable(a) ||
            (!(a.name in this.submitted) && this.optional(a)) ||
            this.element(a);
        },
        onkeyup: function (b, c) {
          var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
          (9 === c.which && '' === this.elementValue(b)) ||
            a.inArray(c.keyCode, d) !== -1 ||
            ((b.name in this.submitted || b.name in this.invalid) &&
              this.element(b));
        },
        onclick: function (a) {
          a.name in this.submitted
            ? this.element(a)
            : a.parentNode.name in this.submitted && this.element(a.parentNode);
        },
        highlight: function (b, c, d) {
          'radio' === b.type
            ? this.findByName(b.name).addClass(c).removeClass(d)
            : a(b).addClass(c).removeClass(d);
        },
        unhighlight: function (b, c, d) {
          'radio' === b.type
            ? this.findByName(b.name).removeClass(c).addClass(d)
            : a(b).removeClass(c).addClass(d);
        },
      },
      setDefaults: function (b) {
        a.extend(a.validator.defaults, b);
      },
      messages: {
        required: 'This field is required.',
        remote: 'Please fix this field.',
        email: 'Please enter a valid email address.',
        url: 'Please enter a valid URL.',
        date: 'Please enter a valid date.',
        dateISO: 'Please enter a valid date (ISO).',
        number: 'Please enter a valid number.',
        digits: 'Please enter only digits.',
        equalTo: 'Please enter the same value again.',
        maxlength: a.validator.format(
          'Please enter no more than {0} characters.'
        ),
        minlength: a.validator.format('Please enter at least {0} characters.'),
        rangelength: a.validator.format(
          'Please enter a value between {0} and {1} characters long.'
        ),
        range: a.validator.format('Please enter a value between {0} and {1}.'),
        max: a.validator.format(
          'Please enter a value less than or equal to {0}.'
        ),
        min: a.validator.format(
          'Please enter a value greater than or equal to {0}.'
        ),
        step: a.validator.format('Please enter a multiple of {0}.'),
      },
      autoCreateRanges: !1,
      prototype: {
        init: function () {
          function b(b) {
            var c =
              'undefined' != typeof a(this).attr('contenteditable') &&
              'false' !== a(this).attr('contenteditable');
            if (
              (!this.form &&
                c &&
                ((this.form = a(this).closest('form')[0]),
                (this.name = a(this).attr('name'))),
              d === this.form)
            ) {
              var e = a.data(this.form, 'validator'),
                f = 'on' + b.type.replace(/^validate/, ''),
                g = e.settings;
              g[f] && !a(this).is(g.ignore) && g[f].call(e, this, b);
            }
          }
          (this.labelContainer = a(this.settings.errorLabelContainer)),
            (this.errorContext =
              (this.labelContainer.length && this.labelContainer) ||
              a(this.currentForm)),
            (this.containers = a(this.settings.errorContainer).add(
              this.settings.errorLabelContainer
            )),
            (this.submitted = {}),
            (this.valueCache = {}),
            (this.pendingRequest = 0),
            (this.pending = {}),
            (this.invalid = {}),
            this.reset();
          var c,
            d = this.currentForm,
            e = (this.groups = {});
          a.each(this.settings.groups, function (b, c) {
            'string' == typeof c && (c = c.split(/\s/)),
              a.each(c, function (a, c) {
                e[c] = b;
              });
          }),
            (c = this.settings.rules),
            a.each(c, function (b, d) {
              c[b] = a.validator.normalizeRule(d);
            }),
            a(this.currentForm)
              .on(
                'focusin.validate focusout.validate keyup.validate',
                ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",
                b
              )
              .on(
                'click.validate',
                "select, option, [type='radio'], [type='checkbox']",
                b
              ),
            this.settings.invalidHandler &&
              a(this.currentForm).on(
                'invalid-form.validate',
                this.settings.invalidHandler
              );
        },
        form: function () {
          return (
            this.checkForm(),
            a.extend(this.submitted, this.errorMap),
            (this.invalid = a.extend({}, this.errorMap)),
            this.valid() ||
              a(this.currentForm).triggerHandler('invalid-form', [this]),
            this.showErrors(),
            this.valid()
          );
        },
        checkForm: function () {
          this.prepareForm();
          for (
            var a = 0, b = (this.currentElements = this.elements());
            b[a];
            a++
          )
            this.check(b[a]);
          return this.valid();
        },
        element: function (b) {
          var c,
            d,
            e = this.clean(b),
            f = this.validationTargetFor(e),
            g = this,
            h = !0;
          return (
            void 0 === f
              ? delete this.invalid[e.name]
              : (this.prepareElement(f),
                (this.currentElements = a(f)),
                (d = this.groups[f.name]),
                d &&
                  a.each(this.groups, function (a, b) {
                    b === d &&
                      a !== f.name &&
                      ((e = g.validationTargetFor(g.clean(g.findByName(a)))),
                      e &&
                        e.name in g.invalid &&
                        (g.currentElements.push(e), (h = g.check(e) && h)));
                  }),
                (c = this.check(f) !== !1),
                (h = h && c),
                c ? (this.invalid[f.name] = !1) : (this.invalid[f.name] = !0),
                this.numberOfInvalids() ||
                  (this.toHide = this.toHide.add(this.containers)),
                this.showErrors(),
                a(b).attr('aria-invalid', !c)),
            h
          );
        },
        showErrors: function (b) {
          if (b) {
            var c = this;
            a.extend(this.errorMap, b),
              (this.errorList = a.map(this.errorMap, function (a, b) {
                return { message: a, element: c.findByName(b)[0] };
              })),
              (this.successList = a.grep(this.successList, function (a) {
                return !(a.name in b);
              }));
          }
          this.settings.showErrors
            ? this.settings.showErrors.call(this, this.errorMap, this.errorList)
            : this.defaultShowErrors();
        },
        resetForm: function () {
          a.fn.resetForm && a(this.currentForm).resetForm(),
            (this.invalid = {}),
            (this.submitted = {}),
            this.prepareForm(),
            this.hideErrors();
          var b = this.elements()
            .removeData('previousValue')
            .removeAttr('aria-invalid');
          this.resetElements(b);
        },
        resetElements: function (a) {
          var b;
          if (this.settings.unhighlight)
            for (b = 0; a[b]; b++)
              this.settings.unhighlight.call(
                this,
                a[b],
                this.settings.errorClass,
                ''
              ),
                this.findByName(a[b].name).removeClass(
                  this.settings.validClass
                );
          else
            a.removeClass(this.settings.errorClass).removeClass(
              this.settings.validClass
            );
        },
        numberOfInvalids: function () {
          return this.objectLength(this.invalid);
        },
        objectLength: function (a) {
          var b,
            c = 0;
          for (b in a) void 0 !== a[b] && null !== a[b] && a[b] !== !1 && c++;
          return c;
        },
        hideErrors: function () {
          this.hideThese(this.toHide);
        },
        hideThese: function (a) {
          a.not(this.containers).text(''), this.addWrapper(a).hide();
        },
        valid: function () {
          return 0 === this.size();
        },
        size: function () {
          return this.errorList.length;
        },
        focusInvalid: function () {
          if (this.settings.focusInvalid)
            try {
              a(
                this.findLastActive() ||
                  (this.errorList.length && this.errorList[0].element) ||
                  []
              )
                .filter(':visible')
                .trigger('focus')
                .trigger('focusin');
            } catch (b) {}
        },
        findLastActive: function () {
          var b = this.lastActive;
          return (
            b &&
            1 ===
              a.grep(this.errorList, function (a) {
                return a.element.name === b.name;
              }).length &&
            b
          );
        },
        elements: function () {
          var b = this,
            c = {};
          return a(this.currentForm)
            .find('input, select, textarea, [contenteditable]')
            .not(':submit, :reset, :image, :disabled')
            .not(this.settings.ignore)
            .filter(function () {
              var d = this.name || a(this).attr('name'),
                e =
                  'undefined' != typeof a(this).attr('contenteditable') &&
                  'false' !== a(this).attr('contenteditable');
              return (
                !d &&
                  b.settings.debug &&
                  window.console &&
                  console.error('%o has no name assigned', this),
                e &&
                  ((this.form = a(this).closest('form')[0]), (this.name = d)),
                this.form === b.currentForm &&
                  !(d in c || !b.objectLength(a(this).rules())) &&
                  ((c[d] = !0), !0)
              );
            });
        },
        clean: function (b) {
          return a(b)[0];
        },
        errors: function () {
          var b = this.settings.errorClass.split(' ').join('.');
          return a(this.settings.errorElement + '.' + b, this.errorContext);
        },
        resetInternals: function () {
          (this.successList = []),
            (this.errorList = []),
            (this.errorMap = {}),
            (this.toShow = a([])),
            (this.toHide = a([]));
        },
        reset: function () {
          this.resetInternals(), (this.currentElements = a([]));
        },
        prepareForm: function () {
          this.reset(), (this.toHide = this.errors().add(this.containers));
        },
        prepareElement: function (a) {
          this.reset(), (this.toHide = this.errorsFor(a));
        },
        elementValue: function (b) {
          var c,
            d,
            e = a(b),
            f = b.type,
            g =
              'undefined' != typeof e.attr('contenteditable') &&
              'false' !== e.attr('contenteditable');
          return 'radio' === f || 'checkbox' === f
            ? this.findByName(b.name).filter(':checked').val()
            : 'number' === f && 'undefined' != typeof b.validity
            ? b.validity.badInput
              ? 'NaN'
              : e.val()
            : ((c = g ? e.text() : e.val()),
              'file' === f
                ? 'C:\\fakepath\\' === c.substr(0, 12)
                  ? c.substr(12)
                  : ((d = c.lastIndexOf('/')),
                    d >= 0
                      ? c.substr(d + 1)
                      : ((d = c.lastIndexOf('\\')),
                        d >= 0 ? c.substr(d + 1) : c))
                : 'string' == typeof c
                ? c.replace(/\r/g, '')
                : c);
        },
        check: function (b) {
          b = this.validationTargetFor(this.clean(b));
          var c,
            d,
            e,
            f,
            g = a(b).rules(),
            h = a.map(g, function (a, b) {
              return b;
            }).length,
            i = !1,
            j = this.elementValue(b);
          'function' == typeof g.normalizer
            ? (f = g.normalizer)
            : 'function' == typeof this.settings.normalizer &&
              (f = this.settings.normalizer),
            f && ((j = f.call(b, j)), delete g.normalizer);
          for (d in g) {
            e = { method: d, parameters: g[d] };
            try {
              if (
                ((c = a.validator.methods[d].call(this, j, b, e.parameters)),
                'dependency-mismatch' === c && 1 === h)
              ) {
                i = !0;
                continue;
              }
              if (((i = !1), 'pending' === c))
                return void (this.toHide = this.toHide.not(this.errorsFor(b)));
              if (!c) return this.formatAndAdd(b, e), !1;
            } catch (k) {
              throw (
                (this.settings.debug &&
                  window.console &&
                  console.log(
                    'Exception occurred when checking element ' +
                      b.id +
                      ", check the '" +
                      e.method +
                      "' method.",
                    k
                  ),
                k instanceof TypeError &&
                  (k.message +=
                    '.  Exception occurred when checking element ' +
                    b.id +
                    ", check the '" +
                    e.method +
                    "' method."),
                k)
              );
            }
          }
          if (!i) return this.objectLength(g) && this.successList.push(b), !0;
        },
        customDataMessage: function (b, c) {
          return (
            a(b).data(
              'msg' + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()
            ) || a(b).data('msg')
          );
        },
        customMessage: function (a, b) {
          var c = this.settings.messages[a];
          return c && (c.constructor === String ? c : c[b]);
        },
        findDefined: function () {
          for (var a = 0; a < arguments.length; a++)
            if (void 0 !== arguments[a]) return arguments[a];
        },
        defaultMessage: function (b, c) {
          'string' == typeof c && (c = { method: c });
          var d = this.findDefined(
              this.customMessage(b.name, c.method),
              this.customDataMessage(b, c.method),
              (!this.settings.ignoreTitle && b.title) || void 0,
              a.validator.messages[c.method],
              '<strong>Warning: No message defined for ' + b.name + '</strong>'
            ),
            e = /\$?\{(\d+)\}/g;
          return (
            'function' == typeof d
              ? (d = d.call(this, c.parameters, b))
              : e.test(d) &&
                (d = a.validator.format(d.replace(e, '{$1}'), c.parameters)),
            d
          );
        },
        formatAndAdd: function (a, b) {
          var c = this.defaultMessage(a, b);
          this.errorList.push({ message: c, element: a, method: b.method }),
            (this.errorMap[a.name] = c),
            (this.submitted[a.name] = c);
        },
        addWrapper: function (a) {
          return (
            this.settings.wrapper &&
              (a = a.add(a.parent(this.settings.wrapper))),
            a
          );
        },
        defaultShowErrors: function () {
          var a, b, c;
          for (a = 0; this.errorList[a]; a++)
            (c = this.errorList[a]),
              this.settings.highlight &&
                this.settings.highlight.call(
                  this,
                  c.element,
                  this.settings.errorClass,
                  this.settings.validClass
                ),
              this.showLabel(c.element, c.message);
          if (
            (this.errorList.length &&
              (this.toShow = this.toShow.add(this.containers)),
            this.settings.success)
          )
            for (a = 0; this.successList[a]; a++)
              this.showLabel(this.successList[a]);
          if (this.settings.unhighlight)
            for (a = 0, b = this.validElements(); b[a]; a++)
              this.settings.unhighlight.call(
                this,
                b[a],
                this.settings.errorClass,
                this.settings.validClass
              );
          (this.toHide = this.toHide.not(this.toShow)),
            this.hideErrors(),
            this.addWrapper(this.toShow).show();
        },
        validElements: function () {
          return this.currentElements.not(this.invalidElements());
        },
        invalidElements: function () {
          return a(this.errorList).map(function () {
            return this.element;
          });
        },
        showLabel: function (b, c) {
          var d,
            e,
            f,
            g,
            h = this.errorsFor(b),
            i = this.idOrName(b),
            j = a(b).attr('aria-describedby');
          h.length
            ? (h
                .removeClass(this.settings.validClass)
                .addClass(this.settings.errorClass),
              h.html(c))
            : ((h = a('<' + this.settings.errorElement + '>')
                .attr('id', i + '-error')
                .addClass(this.settings.errorClass)
                .html(c || '')),
              (d = h),
              this.settings.wrapper &&
                (d = h
                  .hide()
                  .show()
                  .wrap('<' + this.settings.wrapper + '/>')
                  .parent()),
              this.labelContainer.length
                ? this.labelContainer.append(d)
                : this.settings.errorPlacement
                ? this.settings.errorPlacement.call(this, d, a(b))
                : d.insertAfter(b),
              h.is('label')
                ? h.attr('for', i)
                : 0 ===
                    h.parents("label[for='" + this.escapeCssMeta(i) + "']")
                      .length &&
                  ((f = h.attr('id')),
                  j
                    ? j.match(
                        new RegExp('\\b' + this.escapeCssMeta(f) + '\\b')
                      ) || (j += ' ' + f)
                    : (j = f),
                  a(b).attr('aria-describedby', j),
                  (e = this.groups[b.name]),
                  e &&
                    ((g = this),
                    a.each(g.groups, function (b, c) {
                      c === e &&
                        a(
                          "[name='" + g.escapeCssMeta(b) + "']",
                          g.currentForm
                        ).attr('aria-describedby', h.attr('id'));
                    })))),
            !c &&
              this.settings.success &&
              (h.text(''),
              'string' == typeof this.settings.success
                ? h.addClass(this.settings.success)
                : this.settings.success(h, b)),
            (this.toShow = this.toShow.add(h));
        },
        errorsFor: function (b) {
          var c = this.escapeCssMeta(this.idOrName(b)),
            d = a(b).attr('aria-describedby'),
            e = "label[for='" + c + "'], label[for='" + c + "'] *";
          return (
            d && (e = e + ', #' + this.escapeCssMeta(d).replace(/\s+/g, ', #')),
            this.errors().filter(e)
          );
        },
        escapeCssMeta: function (a) {
          return void 0 === a
            ? ''
            : a.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, '\\$1');
        },
        idOrName: function (a) {
          return (
            this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
          );
        },
        validationTargetFor: function (b) {
          return (
            this.checkable(b) && (b = this.findByName(b.name)),
            a(b).not(this.settings.ignore)[0]
          );
        },
        checkable: function (a) {
          return /radio|checkbox/i.test(a.type);
        },
        findByName: function (b) {
          return a(this.currentForm).find(
            "[name='" + this.escapeCssMeta(b) + "']"
          );
        },
        getLength: function (b, c) {
          switch (c.nodeName.toLowerCase()) {
            case 'select':
              return a('option:selected', c).length;
            case 'input':
              if (this.checkable(c))
                return this.findByName(c.name).filter(':checked').length;
          }
          return b.length;
        },
        depend: function (a, b) {
          return (
            !this.dependTypes[typeof a] || this.dependTypes[typeof a](a, b)
          );
        },
        dependTypes: {
          boolean: function (a) {
            return a;
          },
          string: function (b, c) {
            return !!a(b, c.form).length;
          },
          function: function (a, b) {
            return a(b);
          },
        },
        optional: function (b) {
          var c = this.elementValue(b);
          return (
            !a.validator.methods.required.call(this, c, b) &&
            'dependency-mismatch'
          );
        },
        startRequest: function (b) {
          this.pending[b.name] ||
            (this.pendingRequest++,
            a(b).addClass(this.settings.pendingClass),
            (this.pending[b.name] = !0));
        },
        stopRequest: function (b, c) {
          this.pendingRequest--,
            this.pendingRequest < 0 && (this.pendingRequest = 0),
            delete this.pending[b.name],
            a(b).removeClass(this.settings.pendingClass),
            c &&
            0 === this.pendingRequest &&
            this.formSubmitted &&
            this.form() &&
            0 === this.pendingRequest
              ? (a(this.currentForm).trigger('submit'),
                this.submitButton &&
                  a(
                    "input:hidden[name='" + this.submitButton.name + "']",
                    this.currentForm
                  ).remove(),
                (this.formSubmitted = !1))
              : !c &&
                0 === this.pendingRequest &&
                this.formSubmitted &&
                (a(this.currentForm).triggerHandler('invalid-form', [this]),
                (this.formSubmitted = !1));
        },
        previousValue: function (b, c) {
          return (
            (c = ('string' == typeof c && c) || 'remote'),
            a.data(b, 'previousValue') ||
              a.data(b, 'previousValue', {
                old: null,
                valid: !0,
                message: this.defaultMessage(b, { method: c }),
              })
          );
        },
        destroy: function () {
          this.resetForm(),
            a(this.currentForm)
              .off('.validate')
              .removeData('validator')
              .find('.validate-equalTo-blur')
              .off('.validate-equalTo')
              .removeClass('validate-equalTo-blur')
              .find('.validate-lessThan-blur')
              .off('.validate-lessThan')
              .removeClass('validate-lessThan-blur')
              .find('.validate-lessThanEqual-blur')
              .off('.validate-lessThanEqual')
              .removeClass('validate-lessThanEqual-blur')
              .find('.validate-greaterThanEqual-blur')
              .off('.validate-greaterThanEqual')
              .removeClass('validate-greaterThanEqual-blur')
              .find('.validate-greaterThan-blur')
              .off('.validate-greaterThan')
              .removeClass('validate-greaterThan-blur');
        },
      },
      classRuleSettings: {
        required: { required: !0 },
        email: { email: !0 },
        url: { url: !0 },
        date: { date: !0 },
        dateISO: { dateISO: !0 },
        number: { number: !0 },
        digits: { digits: !0 },
        creditcard: { creditcard: !0 },
      },
      addClassRules: function (b, c) {
        b.constructor === String
          ? (this.classRuleSettings[b] = c)
          : a.extend(this.classRuleSettings, b);
      },
      classRules: function (b) {
        var c = {},
          d = a(b).attr('class');
        return (
          d &&
            a.each(d.split(' '), function () {
              this in a.validator.classRuleSettings &&
                a.extend(c, a.validator.classRuleSettings[this]);
            }),
          c
        );
      },
      normalizeAttributeRule: function (a, b, c, d) {
        /min|max|step/.test(c) &&
          (null === b || /number|range|text/.test(b)) &&
          ((d = Number(d)), isNaN(d) && (d = void 0)),
          d || 0 === d
            ? (a[c] = d)
            : b === c &&
              'range' !== b &&
              (a['date' === b ? 'dateISO' : c] = !0);
      },
      attributeRules: function (b) {
        var c,
          d,
          e = {},
          f = a(b),
          g = b.getAttribute('type');
        for (c in a.validator.methods)
          'required' === c
            ? ((d = b.getAttribute(c)), '' === d && (d = !0), (d = !!d))
            : (d = f.attr(c)),
            this.normalizeAttributeRule(e, g, c, d);
        return (
          e.maxlength &&
            /-1|2147483647|524288/.test(e.maxlength) &&
            delete e.maxlength,
          e
        );
      },
      dataRules: function (b) {
        var c,
          d,
          e = {},
          f = a(b),
          g = b.getAttribute('type');
        for (c in a.validator.methods)
          (d = f.data(
            'rule' + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()
          )),
            '' === d && (d = !0),
            this.normalizeAttributeRule(e, g, c, d);
        return e;
      },
      staticRules: function (b) {
        var c = {},
          d = a.data(b.form, 'validator');
        return (
          d.settings.rules &&
            (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}),
          c
        );
      },
      normalizeRules: function (b, c) {
        return (
          a.each(b, function (d, e) {
            if (e === !1) return void delete b[d];
            if (e.param || e.depends) {
              var f = !0;
              switch (typeof e.depends) {
                case 'string':
                  f = !!a(e.depends, c.form).length;
                  break;
                case 'function':
                  f = e.depends.call(c, c);
              }
              f
                ? (b[d] = void 0 === e.param || e.param)
                : (a.data(c.form, 'validator').resetElements(a(c)),
                  delete b[d]);
            }
          }),
          a.each(b, function (a, d) {
            b[a] = 'function' == typeof d && 'normalizer' !== a ? d(c) : d;
          }),
          a.each(['minlength', 'maxlength'], function () {
            b[this] && (b[this] = Number(b[this]));
          }),
          a.each(['rangelength', 'range'], function () {
            var a;
            b[this] &&
              (Array.isArray(b[this])
                ? (b[this] = [Number(b[this][0]), Number(b[this][1])])
                : 'string' == typeof b[this] &&
                  ((a = b[this].replace(/[\[\]]/g, '').split(/[\s,]+/)),
                  (b[this] = [Number(a[0]), Number(a[1])])));
          }),
          a.validator.autoCreateRanges &&
            (null != b.min &&
              null != b.max &&
              ((b.range = [b.min, b.max]), delete b.min, delete b.max),
            null != b.minlength &&
              null != b.maxlength &&
              ((b.rangelength = [b.minlength, b.maxlength]),
              delete b.minlength,
              delete b.maxlength)),
          b
        );
      },
      normalizeRule: function (b) {
        if ('string' == typeof b) {
          var c = {};
          a.each(b.split(/\s/), function () {
            c[this] = !0;
          }),
            (b = c);
        }
        return b;
      },
      addMethod: function (b, c, d) {
        (a.validator.methods[b] = c),
          (a.validator.messages[b] =
            void 0 !== d ? d : a.validator.messages[b]),
          c.length < 3 &&
            a.validator.addClassRules(b, a.validator.normalizeRule(b));
      },
      methods: {
        required: function (b, c, d) {
          if (!this.depend(d, c)) return 'dependency-mismatch';
          if ('select' === c.nodeName.toLowerCase()) {
            var e = a(c).val();
            return e && e.length > 0;
          }
          return this.checkable(c)
            ? this.getLength(b, c) > 0
            : void 0 !== b && null !== b && b.length > 0;
        },
        email: function (a, b) {
          return (
            this.optional(b) ||
            /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
              a
            )
          );
        },
        url: function (a, b) {
          return (
            this.optional(b) ||
            /^(?:(?:(?:https?|ftp):)?\/\/)(?:(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})+(?::(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
              a
            )
          );
        },
        date: (function () {
          var a = !1;
          return function (b, c) {
            return (
              a ||
                ((a = !0),
                this.settings.debug &&
                  window.console &&
                  console.warn(
                    "The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`."
                  )),
              this.optional(c) || !/Invalid|NaN/.test(new Date(b).toString())
            );
          };
        })(),
        dateISO: function (a, b) {
          return (
            this.optional(b) ||
            /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(
              a
            )
          );
        },
        number: function (a, b) {
          return (
            this.optional(b) ||
            /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
          );
        },
        digits: function (a, b) {
          return this.optional(b) || /^\d+$/.test(a);
        },
        minlength: function (a, b, c) {
          var d = Array.isArray(a) ? a.length : this.getLength(a, b);
          return this.optional(b) || d >= c;
        },
        maxlength: function (a, b, c) {
          var d = Array.isArray(a) ? a.length : this.getLength(a, b);
          return this.optional(b) || d <= c;
        },
        rangelength: function (a, b, c) {
          var d = Array.isArray(a) ? a.length : this.getLength(a, b);
          return this.optional(b) || (d >= c[0] && d <= c[1]);
        },
        min: function (a, b, c) {
          return this.optional(b) || a >= c;
        },
        max: function (a, b, c) {
          return this.optional(b) || a <= c;
        },
        range: function (a, b, c) {
          return this.optional(b) || (a >= c[0] && a <= c[1]);
        },
        step: function (b, c, d) {
          var e,
            f = a(c).attr('type'),
            g = 'Step attribute on input type ' + f + ' is not supported.',
            h = ['text', 'number', 'range'],
            i = new RegExp('\\b' + f + '\\b'),
            j = f && !i.test(h.join()),
            k = function (a) {
              var b = ('' + a).match(/(?:\.(\d+))?$/);
              return b && b[1] ? b[1].length : 0;
            },
            l = function (a) {
              return Math.round(a * Math.pow(10, e));
            },
            m = !0;
          if (j) throw new Error(g);
          return (
            (e = k(d)),
            (k(b) > e || l(b) % l(d) !== 0) && (m = !1),
            this.optional(c) || m
          );
        },
        equalTo: function (b, c, d) {
          var e = a(d);
          return (
            this.settings.onfocusout &&
              e.not('.validate-equalTo-blur').length &&
              e
                .addClass('validate-equalTo-blur')
                .on('blur.validate-equalTo', function () {
                  a(c).valid();
                }),
            b === e.val()
          );
        },
        remote: function (b, c, d, e) {
          if (this.optional(c)) return 'dependency-mismatch';
          e = ('string' == typeof e && e) || 'remote';
          var f,
            g,
            h,
            i = this.previousValue(c, e);
          return (
            this.settings.messages[c.name] ||
              (this.settings.messages[c.name] = {}),
            (i.originalMessage =
              i.originalMessage || this.settings.messages[c.name][e]),
            (this.settings.messages[c.name][e] = i.message),
            (d = ('string' == typeof d && { url: d }) || d),
            (h = a.param(a.extend({ data: b }, d.data))),
            i.old === h
              ? i.valid
              : ((i.old = h),
                (f = this),
                this.startRequest(c),
                (g = {}),
                (g[c.name] = b),
                a.ajax(
                  a.extend(
                    !0,
                    {
                      mode: 'abort',
                      port: 'validate' + c.name,
                      dataType: 'json',
                      data: g,
                      context: f.currentForm,
                      success: function (a) {
                        var d,
                          g,
                          h,
                          j = a === !0 || 'true' === a;
                        (f.settings.messages[c.name][e] = i.originalMessage),
                          j
                            ? ((h = f.formSubmitted),
                              f.resetInternals(),
                              (f.toHide = f.errorsFor(c)),
                              (f.formSubmitted = h),
                              f.successList.push(c),
                              (f.invalid[c.name] = !1),
                              f.showErrors())
                            : ((d = {}),
                              (g =
                                a ||
                                f.defaultMessage(c, {
                                  method: e,
                                  parameters: b,
                                })),
                              (d[c.name] = i.message = g),
                              (f.invalid[c.name] = !0),
                              f.showErrors(d)),
                          (i.valid = j),
                          f.stopRequest(c, j);
                      },
                    },
                    d
                  )
                ),
                'pending')
          );
        },
      },
    });
  var c,
    d = {};
  return (
    a.ajaxPrefilter
      ? a.ajaxPrefilter(function (a, b, c) {
          var e = a.port;
          'abort' === a.mode && (d[e] && d[e].abort(), (d[e] = c));
        })
      : ((c = a.ajax),
        (a.ajax = function (b) {
          var e = ('mode' in b ? b : a.ajaxSettings).mode,
            f = ('port' in b ? b : a.ajaxSettings).port;
          return 'abort' === e
            ? (d[f] && d[f].abort(), (d[f] = c.apply(this, arguments)), d[f])
            : c.apply(this, arguments);
        })),
    a
  );
});

/*! jQuery Validation Plugin - v1.19.5 - 7/1/2022
 * https://jqueryvalidation.org/
 * Copyright (c) 2022 Jörn Zaefferer; Licensed MIT */
!(function (a) {
  'function' == typeof define && define.amd
    ? define(['jquery', './jquery.validate.min'], a)
    : 'object' == typeof module && module.exports
    ? (module.exports = a(require('jquery')))
    : a(jQuery);
})(function (a) {
  return (
    (function () {
      function b(a) {
        return a
          .replace(/<.[^<>]*?>/g, ' ')
          .replace(/&nbsp;|&#160;/gi, ' ')
          .replace(/[.(),;:!?%#$'\"_+=\/\-“”’]*/g, '');
      }
      a.validator.addMethod(
        'maxWords',
        function (a, c, d) {
          return this.optional(c) || b(a).match(/\b\w+\b/g).length <= d;
        },
        a.validator.format('Please enter {0} words or less.')
      ),
        a.validator.addMethod(
          'minWords',
          function (a, c, d) {
            return this.optional(c) || b(a).match(/\b\w+\b/g).length >= d;
          },
          a.validator.format('Please enter at least {0} words.')
        ),
        a.validator.addMethod(
          'rangeWords',
          function (a, c, d) {
            var e = b(a),
              f = /\b\w+\b/g;
            return (
              this.optional(c) ||
              (e.match(f).length >= d[0] && e.match(f).length <= d[1])
            );
          },
          a.validator.format('Please enter between {0} and {1} words.')
        );
    })(),
    a.validator.addMethod(
      'abaRoutingNumber',
      function (a) {
        var b = 0,
          c = a.split(''),
          d = c.length;
        if (9 !== d) return !1;
        for (var e = 0; e < d; e += 3)
          b +=
            3 * parseInt(c[e], 10) +
            7 * parseInt(c[e + 1], 10) +
            parseInt(c[e + 2], 10);
        return 0 !== b && b % 10 === 0;
      },
      'Please enter a valid routing number.'
    ),
    a.validator.addMethod(
      'accept',
      function (b, c, d) {
        var e,
          f,
          g,
          h = 'string' == typeof d ? d.replace(/\s/g, '') : 'image/*',
          i = this.optional(c);
        if (i) return i;
        if (
          'file' === a(c).attr('type') &&
          ((h = h
            .replace(/[\-\[\]\/\{\}\(\)\+\?\.\\\^\$\|]/g, '\\$&')
            .replace(/,/g, '|')
            .replace(/\/\*/g, '/.*')),
          c.files && c.files.length)
        )
          for (
            g = new RegExp('.?(' + h + ')$', 'i'), e = 0;
            e < c.files.length;
            e++
          )
            if (((f = c.files[e]), !f.type.match(g))) return !1;
        return !0;
      },
      a.validator.format('Please enter a value with a valid mimetype.')
    ),
    a.validator.addMethod(
      'alphanumeric',
      function (a, b) {
        return this.optional(b) || /^\w+$/i.test(a);
      },
      'Letters, numbers, and underscores only please.'
    ),
    a.validator.addMethod(
      'bankaccountNL',
      function (a, b) {
        if (this.optional(b)) return !0;
        if (!/^[0-9]{9}|([0-9]{2} ){3}[0-9]{3}$/.test(a)) return !1;
        var c,
          d,
          e,
          f = a.replace(/ /g, ''),
          g = 0,
          h = f.length;
        for (c = 0; c < h; c++)
          (d = h - c), (e = f.substring(c, c + 1)), (g += d * e);
        return g % 11 === 0;
      },
      'Please specify a valid bank account number.'
    ),
    a.validator.addMethod(
      'bankorgiroaccountNL',
      function (b, c) {
        return (
          this.optional(c) ||
          a.validator.methods.bankaccountNL.call(this, b, c) ||
          a.validator.methods.giroaccountNL.call(this, b, c)
        );
      },
      'Please specify a valid bank or giro account number.'
    ),
    a.validator.addMethod(
      'bic',
      function (a, b) {
        return (
          this.optional(b) ||
          /^([A-Z]{6}[A-Z2-9][A-NP-Z1-9])(X{3}|[A-WY-Z0-9][A-Z0-9]{2})?$/.test(
            a.toUpperCase()
          )
        );
      },
      'Please specify a valid BIC code.'
    ),
    a.validator.addMethod(
      'cifES',
      function (a, b) {
        'use strict';
        function c(a) {
          return a % 2 === 0;
        }
        if (this.optional(b)) return !0;
        var d,
          e,
          f,
          g,
          h = new RegExp(/^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/gi),
          i = a.substring(0, 1),
          j = a.substring(1, 8),
          k = a.substring(8, 9),
          l = 0,
          m = 0,
          n = 0;
        if (9 !== a.length || !h.test(a)) return !1;
        for (d = 0; d < j.length; d++)
          (e = parseInt(j[d], 10)),
            c(d) ? ((e *= 2), (n += e < 10 ? e : e - 9)) : (m += e);
        return (
          (l = m + n),
          (f = (10 - l.toString().substr(-1)).toString()),
          (f = parseInt(f, 10) > 9 ? '0' : f),
          (g = 'JABCDEFGHI'.substr(f, 1).toString()),
          i.match(/[ABEH]/)
            ? k === f
            : i.match(/[KPQS]/)
            ? k === g
            : k === f || k === g
        );
      },
      'Please specify a valid CIF number.'
    ),
    a.validator.addMethod(
      'cnhBR',
      function (a) {
        if (
          ((a = a.replace(/([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g, '')),
          11 !== a.length)
        )
          return !1;
        var b,
          c,
          d,
          e,
          f,
          g,
          h = 0,
          i = 0;
        if (((b = a.charAt(0)), new Array(12).join(b) === a)) return !1;
        for (e = 0, f = 9, g = 0; e < 9; ++e, --f) h += +(a.charAt(e) * f);
        for (
          c = h % 11, c >= 10 && ((c = 0), (i = 2)), h = 0, e = 0, f = 1, g = 0;
          e < 9;
          ++e, ++f
        )
          h += +(a.charAt(e) * f);
        return (
          (d = h % 11),
          d >= 10 ? (d = 0) : (d -= i),
          String(c).concat(d) === a.substr(-2)
        );
      },
      'Please specify a valid CNH number.'
    ),
    a.validator.addMethod(
      'cnpjBR',
      function (a, b) {
        'use strict';
        if (this.optional(b)) return !0;
        if (((a = a.replace(/[^\d]+/g, '')), 14 !== a.length)) return !1;
        if (
          '00000000000000' === a ||
          '11111111111111' === a ||
          '22222222222222' === a ||
          '33333333333333' === a ||
          '44444444444444' === a ||
          '55555555555555' === a ||
          '66666666666666' === a ||
          '77777777777777' === a ||
          '88888888888888' === a ||
          '99999999999999' === a
        )
          return !1;
        for (
          var c = a.length - 2,
            d = a.substring(0, c),
            e = a.substring(c),
            f = 0,
            g = c - 7,
            h = c;
          h >= 1;
          h--
        )
          (f += d.charAt(c - h) * g--), g < 2 && (g = 9);
        var i = f % 11 < 2 ? 0 : 11 - (f % 11);
        if (i !== parseInt(e.charAt(0), 10)) return !1;
        (c += 1), (d = a.substring(0, c)), (f = 0), (g = c - 7);
        for (var j = c; j >= 1; j--)
          (f += d.charAt(c - j) * g--), g < 2 && (g = 9);
        return (
          (i = f % 11 < 2 ? 0 : 11 - (f % 11)), i === parseInt(e.charAt(1), 10)
        );
      },
      'Please specify a CNPJ value number.'
    ),
    a.validator.addMethod(
      'cpfBR',
      function (a, b) {
        'use strict';
        if (this.optional(b)) return !0;
        if (
          ((a = a.replace(/([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g, '')),
          11 !== a.length)
        )
          return !1;
        var c,
          d,
          e,
          f,
          g = 0;
        if (
          ((c = parseInt(a.substring(9, 10), 10)),
          (d = parseInt(a.substring(10, 11), 10)),
          (e = function (a, b) {
            var c = (10 * a) % 11;
            return (10 !== c && 11 !== c) || (c = 0), c === b;
          }),
          '' === a ||
            '00000000000' === a ||
            '11111111111' === a ||
            '22222222222' === a ||
            '33333333333' === a ||
            '44444444444' === a ||
            '55555555555' === a ||
            '66666666666' === a ||
            '77777777777' === a ||
            '88888888888' === a ||
            '99999999999' === a)
        )
          return !1;
        for (f = 1; f <= 9; f++)
          g += parseInt(a.substring(f - 1, f), 10) * (11 - f);
        if (e(g, c)) {
          for (g = 0, f = 1; f <= 10; f++)
            g += parseInt(a.substring(f - 1, f), 10) * (12 - f);
          return e(g, d);
        }
        return !1;
      },
      'Please specify a valid CPF number.'
    ),
    a.validator.addMethod(
      'creditcard',
      function (a, b) {
        if (this.optional(b)) return 'dependency-mismatch';
        if (/[^0-9 \-]+/.test(a)) return !1;
        var c,
          d,
          e = 0,
          f = 0,
          g = !1;
        if (((a = a.replace(/\D/g, '')), a.length < 13 || a.length > 19))
          return !1;
        for (c = a.length - 1; c >= 0; c--)
          (d = a.charAt(c)),
            (f = parseInt(d, 10)),
            g && (f *= 2) > 9 && (f -= 9),
            (e += f),
            (g = !g);
        return e % 10 === 0;
      },
      'Please enter a valid credit card number.'
    ),
    a.validator.addMethod(
      'creditcardtypes',
      function (a, b, c) {
        if (/[^0-9\-]+/.test(a)) return !1;
        a = a.replace(/\D/g, '');
        var d = 0;
        return (
          c.mastercard && (d |= 1),
          c.visa && (d |= 2),
          c.amex && (d |= 4),
          c.dinersclub && (d |= 8),
          c.enroute && (d |= 16),
          c.discover && (d |= 32),
          c.jcb && (d |= 64),
          c.unknown && (d |= 128),
          c.all && (d = 255),
          1 & d && (/^(5[12345])/.test(a) || /^(2[234567])/.test(a))
            ? 16 === a.length
            : 2 & d && /^(4)/.test(a)
            ? 16 === a.length
            : 4 & d && /^(3[47])/.test(a)
            ? 15 === a.length
            : 8 & d && /^(3(0[012345]|[68]))/.test(a)
            ? 14 === a.length
            : 16 & d && /^(2(014|149))/.test(a)
            ? 15 === a.length
            : 32 & d && /^(6011)/.test(a)
            ? 16 === a.length
            : 64 & d && /^(3)/.test(a)
            ? 16 === a.length
            : 64 & d && /^(2131|1800)/.test(a)
            ? 15 === a.length
            : !!(128 & d)
        );
      },
      'Please enter a valid credit card number.'
    ),
    a.validator.addMethod(
      'currency',
      function (a, b, c) {
        var d,
          e = 'string' == typeof c,
          f = e ? c : c[0],
          g = !!e || c[1];
        return (
          (f = f.replace(/,/g, '')),
          (f = g ? f + ']' : f + ']?'),
          (d =
            '^[' +
            f +
            '([1-9]{1}[0-9]{0,2}(\\,[0-9]{3})*(\\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\\.[0-9]{0,2})?|0(\\.[0-9]{0,2})?|(\\.[0-9]{1,2})?)$'),
          (d = new RegExp(d)),
          this.optional(b) || d.test(a)
        );
      },
      'Please specify a valid currency.'
    ),
    a.validator.addMethod(
      'dateFA',
      function (a, b) {
        return (
          this.optional(b) ||
          /^[1-4]\d{3}\/((0?[1-6]\/((3[0-1])|([1-2][0-9])|(0?[1-9])))|((1[0-2]|(0?[7-9]))\/(30|([1-2][0-9])|(0?[1-9]))))$/.test(
            a
          )
        );
      },
      a.validator.messages.date
    ),
    a.validator.addMethod(
      'dateITA',
      function (a, b) {
        var c,
          d,
          e,
          f,
          g,
          h = !1,
          i = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
        return (
          i.test(a)
            ? ((c = a.split('/')),
              (d = parseInt(c[0], 10)),
              (e = parseInt(c[1], 10)),
              (f = parseInt(c[2], 10)),
              (g = new Date(Date.UTC(f, e - 1, d, 12, 0, 0, 0))),
              (h =
                g.getUTCFullYear() === f &&
                g.getUTCMonth() === e - 1 &&
                g.getUTCDate() === d))
            : (h = !1),
          this.optional(b) || h
        );
      },
      a.validator.messages.date
    ),
    a.validator.addMethod(
      'dateNL',
      function (a, b) {
        return (
          this.optional(b) ||
          /^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test(
            a
          )
        );
      },
      a.validator.messages.date
    ),
    a.validator.addMethod(
      'extension',
      function (a, b, c) {
        return (
          (c = 'string' == typeof c ? c.replace(/,/g, '|') : 'png|jpe?g|gif'),
          this.optional(b) || a.match(new RegExp('\\.(' + c + ')$', 'i'))
        );
      },
      a.validator.format('Please enter a value with a valid extension.')
    ),
    a.validator.addMethod(
      'giroaccountNL',
      function (a, b) {
        return this.optional(b) || /^[0-9]{1,7}$/.test(a);
      },
      'Please specify a valid giro account number.'
    ),
    a.validator.addMethod(
      'greaterThan',
      function (b, c, d) {
        var e = a(d);
        return (
          this.settings.onfocusout &&
            e.not('.validate-greaterThan-blur').length &&
            e
              .addClass('validate-greaterThan-blur')
              .on('blur.validate-greaterThan', function () {
                a(c).valid();
              }),
          b > e.val()
        );
      },
      'Please enter a greater value.'
    ),
    a.validator.addMethod(
      'greaterThanEqual',
      function (b, c, d) {
        var e = a(d);
        return (
          this.settings.onfocusout &&
            e.not('.validate-greaterThanEqual-blur').length &&
            e
              .addClass('validate-greaterThanEqual-blur')
              .on('blur.validate-greaterThanEqual', function () {
                a(c).valid();
              }),
          b >= e.val()
        );
      },
      'Please enter a greater value.'
    ),
    a.validator.addMethod(
      'iban',
      function (a, b) {
        if (this.optional(b)) return !0;
        var c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l = a.replace(/ /g, '').toUpperCase(),
          m = '',
          n = !0,
          o = '',
          p = '',
          q = 5;
        if (l.length < q) return !1;
        if (
          ((c = l.substring(0, 2)),
          (h = {
            AL: '\\d{8}[\\dA-Z]{16}',
            AD: '\\d{8}[\\dA-Z]{12}',
            AT: '\\d{16}',
            AZ: '[\\dA-Z]{4}\\d{20}',
            BE: '\\d{12}',
            BH: '[A-Z]{4}[\\dA-Z]{14}',
            BA: '\\d{16}',
            BR: '\\d{23}[A-Z][\\dA-Z]',
            BG: '[A-Z]{4}\\d{6}[\\dA-Z]{8}',
            CR: '\\d{17}',
            HR: '\\d{17}',
            CY: '\\d{8}[\\dA-Z]{16}',
            CZ: '\\d{20}',
            DK: '\\d{14}',
            DO: '[A-Z]{4}\\d{20}',
            EE: '\\d{16}',
            FO: '\\d{14}',
            FI: '\\d{14}',
            FR: '\\d{10}[\\dA-Z]{11}\\d{2}',
            GE: '[\\dA-Z]{2}\\d{16}',
            DE: '\\d{18}',
            GI: '[A-Z]{4}[\\dA-Z]{15}',
            GR: '\\d{7}[\\dA-Z]{16}',
            GL: '\\d{14}',
            GT: '[\\dA-Z]{4}[\\dA-Z]{20}',
            HU: '\\d{24}',
            IS: '\\d{22}',
            IE: '[\\dA-Z]{4}\\d{14}',
            IL: '\\d{19}',
            IT: '[A-Z]\\d{10}[\\dA-Z]{12}',
            KZ: '\\d{3}[\\dA-Z]{13}',
            KW: '[A-Z]{4}[\\dA-Z]{22}',
            LV: '[A-Z]{4}[\\dA-Z]{13}',
            LB: '\\d{4}[\\dA-Z]{20}',
            LI: '\\d{5}[\\dA-Z]{12}',
            LT: '\\d{16}',
            LU: '\\d{3}[\\dA-Z]{13}',
            MK: '\\d{3}[\\dA-Z]{10}\\d{2}',
            MT: '[A-Z]{4}\\d{5}[\\dA-Z]{18}',
            MR: '\\d{23}',
            MU: '[A-Z]{4}\\d{19}[A-Z]{3}',
            MC: '\\d{10}[\\dA-Z]{11}\\d{2}',
            MD: '[\\dA-Z]{2}\\d{18}',
            ME: '\\d{18}',
            NL: '[A-Z]{4}\\d{10}',
            NO: '\\d{11}',
            PK: '[\\dA-Z]{4}\\d{16}',
            PS: '[\\dA-Z]{4}\\d{21}',
            PL: '\\d{24}',
            PT: '\\d{21}',
            RO: '[A-Z]{4}[\\dA-Z]{16}',
            SM: '[A-Z]\\d{10}[\\dA-Z]{12}',
            SA: '\\d{2}[\\dA-Z]{18}',
            RS: '\\d{18}',
            SK: '\\d{20}',
            SI: '\\d{15}',
            ES: '\\d{20}',
            SE: '\\d{20}',
            CH: '\\d{5}[\\dA-Z]{12}',
            TN: '\\d{20}',
            TR: '\\d{5}[\\dA-Z]{17}',
            AE: '\\d{3}\\d{16}',
            GB: '[A-Z]{4}\\d{14}',
            VG: '[\\dA-Z]{4}\\d{16}',
          }),
          (g = h[c]),
          'undefined' != typeof g &&
            ((i = new RegExp('^[A-Z]{2}\\d{2}' + g + '$', '')), !i.test(l)))
        )
          return !1;
        for (
          d = l.substring(4, l.length) + l.substring(0, 4), j = 0;
          j < d.length;
          j++
        )
          (e = d.charAt(j)),
            '0' !== e && (n = !1),
            n || (m += '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(e));
        for (k = 0; k < m.length; k++)
          (f = m.charAt(k)), (p = '' + o + f), (o = p % 97);
        return 1 === o;
      },
      'Please specify a valid IBAN.'
    ),
    a.validator.addMethod(
      'integer',
      function (a, b) {
        return this.optional(b) || /^-?\d+$/.test(a);
      },
      'A positive or negative non-decimal number please.'
    ),
    a.validator.addMethod(
      'ipv4',
      function (a, b) {
        return (
          this.optional(b) ||
          /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(
            a
          )
        );
      },
      'Please enter a valid IP v4 address.'
    ),
    a.validator.addMethod(
      'ipv6',
      function (a, b) {
        return (
          this.optional(b) ||
          /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(
            a
          )
        );
      },
      'Please enter a valid IP v6 address.'
    ),
    a.validator.addMethod(
      'lessThan',
      function (b, c, d) {
        var e = a(d);
        return (
          this.settings.onfocusout &&
            e.not('.validate-lessThan-blur').length &&
            e
              .addClass('validate-lessThan-blur')
              .on('blur.validate-lessThan', function () {
                a(c).valid();
              }),
          b < e.val()
        );
      },
      'Please enter a lesser value.'
    ),
    a.validator.addMethod(
      'lessThanEqual',
      function (b, c, d) {
        var e = a(d);
        return (
          this.settings.onfocusout &&
            e.not('.validate-lessThanEqual-blur').length &&
            e
              .addClass('validate-lessThanEqual-blur')
              .on('blur.validate-lessThanEqual', function () {
                a(c).valid();
              }),
          b <= e.val()
        );
      },
      'Please enter a lesser value.'
    ),
    a.validator.addMethod(
      'lettersonly',
      function (a, b) {
        return this.optional(b) || /^[a-z]+$/i.test(a);
      },
      'Letters only please.'
    ),
    a.validator.addMethod(
      'letterswithbasicpunc',
      function (a, b) {
        return this.optional(b) || /^[a-z\-.,()'"\s]+$/i.test(a);
      },
      'Letters or punctuation only please.'
    ),
    a.validator.addMethod(
      'maxfiles',
      function (b, c, d) {
        return (
          !!this.optional(c) ||
          !('file' === a(c).attr('type') && c.files && c.files.length > d)
        );
      },
      a.validator.format('Please select no more than {0} files.')
    ),
    a.validator.addMethod(
      'maxsize',
      function (b, c, d) {
        if (this.optional(c)) return !0;
        if ('file' === a(c).attr('type') && c.files && c.files.length)
          for (var e = 0; e < c.files.length; e++)
            if (c.files[e].size > d) return !1;
        return !0;
      },
      a.validator.format('File size must not exceed {0} bytes each.')
    ),
    a.validator.addMethod(
      'maxsizetotal',
      function (b, c, d) {
        if (this.optional(c)) return !0;
        if ('file' === a(c).attr('type') && c.files && c.files.length)
          for (var e = 0, f = 0; f < c.files.length; f++)
            if (((e += c.files[f].size), e > d)) return !1;
        return !0;
      },
      a.validator.format('Total size of all files must not exceed {0} bytes.')
    ),
    a.validator.addMethod(
      'mobileNL',
      function (a, b) {
        return (
          this.optional(b) ||
          /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)6((\s|\s?\-\s?)?[0-9]){8}$/.test(
            a
          )
        );
      },
      'Please specify a valid mobile number.'
    ),
    a.validator.addMethod(
      'mobileRU',
      function (a, b) {
        var c = a.replace(/\(|\)|\s+|-/g, '');
        return (
          this.optional(b) ||
          (c.length > 9 && /^((\+7|7|8)+([0-9]){10})$/.test(c))
        );
      },
      'Please specify a valid mobile number.'
    ),
    a.validator.addMethod(
      'mobileUK',
      function (a, b) {
        return (
          (a = a.replace(/\(|\)|\s+|-/g, '')),
          this.optional(b) ||
            (a.length > 9 &&
              a.match(
                /^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[1345789]\d{2}|624)\s?\d{3}\s?\d{3})$/
              ))
        );
      },
      'Please specify a valid mobile number.'
    ),
    a.validator.addMethod(
      'netmask',
      function (a, b) {
        return (
          this.optional(b) ||
          /^(254|252|248|240|224|192|128)\.0\.0\.0|255\.(254|252|248|240|224|192|128|0)\.0\.0|255\.255\.(254|252|248|240|224|192|128|0)\.0|255\.255\.255\.(254|252|248|240|224|192|128|0)/i.test(
            a
          )
        );
      },
      'Please enter a valid netmask.'
    ),
    a.validator.addMethod(
      'nieES',
      function (a, b) {
        'use strict';
        if (this.optional(b)) return !0;
        var c,
          d = new RegExp(
            /^[MXYZ]{1}[0-9]{7,8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/gi
          ),
          e = 'TRWAGMYFPDXBNJZSQVHLCKET',
          f = a.substr(a.length - 1).toUpperCase();
        return (
          (a = a.toString().toUpperCase()),
          !(a.length > 10 || a.length < 9 || !d.test(a)) &&
            ((a = a
              .replace(/^[X]/, '0')
              .replace(/^[Y]/, '1')
              .replace(/^[Z]/, '2')),
            (c = 9 === a.length ? a.substr(0, 8) : a.substr(0, 9)),
            e.charAt(parseInt(c, 10) % 23) === f)
        );
      },
      'Please specify a valid NIE number.'
    ),
    a.validator.addMethod(
      'nifES',
      function (a, b) {
        'use strict';
        return (
          !!this.optional(b) ||
          ((a = a.toUpperCase()),
          !!a.match(
            '((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)'
          ) &&
            (/^[0-9]{8}[A-Z]{1}$/.test(a)
              ? 'TRWAGMYFPDXBNJZSQVHLCKE'.charAt(a.substring(8, 0) % 23) ===
                a.charAt(8)
              : !!/^[KLM]{1}/.test(a) &&
                a[8] ===
                  'TRWAGMYFPDXBNJZSQVHLCKE'.charAt(a.substring(8, 1) % 23)))
        );
      },
      'Please specify a valid NIF number.'
    ),
    a.validator.addMethod(
      'nipPL',
      function (a) {
        'use strict';
        if (((a = a.replace(/[^0-9]/g, '')), 10 !== a.length)) return !1;
        for (var b = [6, 5, 7, 2, 3, 4, 5, 6, 7], c = 0, d = 0; d < 9; d++)
          c += b[d] * a[d];
        var e = c % 11,
          f = 10 === e ? 0 : e;
        return f === parseInt(a[9], 10);
      },
      'Please specify a valid NIP number.'
    ),
    a.validator.addMethod(
      'nisBR',
      function (a) {
        var b,
          c,
          d,
          e,
          f,
          g = 0;
        if (
          ((a = a.replace(/([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g, '')),
          11 !== a.length)
        )
          return !1;
        for (
          c = parseInt(a.substring(10, 11), 10),
            b = parseInt(a.substring(0, 10), 10),
            e = 2;
          e < 12;
          e++
        )
          (f = e),
            10 === e && (f = 2),
            11 === e && (f = 3),
            (g += (b % 10) * f),
            (b = parseInt(b / 10, 10));
        return (d = g % 11), (d = d > 1 ? 11 - d : 0), c === d;
      },
      'Please specify a valid NIS/PIS number.'
    ),
    a.validator.addMethod(
      'notEqualTo',
      function (b, c, d) {
        return (
          this.optional(c) || !a.validator.methods.equalTo.call(this, b, c, d)
        );
      },
      'Please enter a different value, values must not be the same.'
    ),
    a.validator.addMethod(
      'nowhitespace',
      function (a, b) {
        return this.optional(b) || /^\S+$/i.test(a);
      },
      'No white space please.'
    ),
    a.validator.addMethod(
      'pattern',
      function (a, b, c) {
        return (
          !!this.optional(b) ||
          ('string' == typeof c && (c = new RegExp('^(?:' + c + ')$')),
          c.test(a))
        );
      },
      'Invalid format.'
    ),
    a.validator.addMethod(
      'phoneNL',
      function (a, b) {
        return (
          this.optional(b) ||
          /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9]){8}$/.test(
            a
          )
        );
      },
      'Please specify a valid phone number.'
    ),
    a.validator.addMethod(
      'phonePL',
      function (a, b) {
        a = a.replace(/\s+/g, '');
        var c =
          /^(?:(?:(?:\+|00)?48)|(?:\(\+?48\)))?(?:1[2-8]|2[2-69]|3[2-49]|4[1-68]|5[0-9]|6[0-35-9]|[7-8][1-9]|9[145])\d{7}$/;
        return this.optional(b) || c.test(a);
      },
      'Please specify a valid phone number.'
    ),
    a.validator.addMethod(
      'phonesUK',
      function (a, b) {
        return (
          (a = a.replace(/\(|\)|\s+|-/g, '')),
          this.optional(b) ||
            (a.length > 9 &&
              a.match(
                /^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[1345789]\d{8}|624\d{6})))$/
              ))
        );
      },
      'Please specify a valid uk phone number.'
    ),
    a.validator.addMethod(
      'phoneUK',
      function (a, b) {
        return (
          (a = a.replace(/\(|\)|\s+|-/g, '')),
          this.optional(b) ||
            (a.length > 9 &&
              a.match(
                /^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/
              ))
        );
      },
      'Please specify a valid phone number.'
    ),
    a.validator.addMethod(
      'phoneUS',
      function (a, b) {
        return (
          (a = a.replace(/\s+/g, '')),
          this.optional(b) ||
            (a.length > 9 &&
              a.match(
                /^(\+?1-?)?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9]))-?[2-9]\d{2}-?\d{4}$/
              ))
        );
      },
      'Please specify a valid phone number.'
    ),
    a.validator.addMethod(
      'postalcodeBR',
      function (a, b) {
        return (
          this.optional(b) || /^\d{2}.\d{3}-\d{3}?$|^\d{5}-?\d{3}?$/.test(a)
        );
      },
      'Informe um CEP válido.'
    ),
    a.validator.addMethod(
      'postalCodeCA',
      function (a, b) {
        return (
          this.optional(b) ||
          /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ] *\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i.test(
            a
          )
        );
      },
      'Please specify a valid postal code.'
    ),
    a.validator.addMethod(
      'postalcodeIT',
      function (a, b) {
        return this.optional(b) || /^\d{5}$/.test(a);
      },
      'Please specify a valid postal code.'
    ),
    a.validator.addMethod(
      'postalcodeNL',
      function (a, b) {
        return this.optional(b) || /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(a);
      },
      'Please specify a valid postal code.'
    ),
    a.validator.addMethod(
      'postcodeUK',
      function (a, b) {
        return (
          this.optional(b) ||
          /^((([A-PR-UWYZ][0-9])|([A-PR-UWYZ][0-9][0-9])|([A-PR-UWYZ][A-HK-Y][0-9])|([A-PR-UWYZ][A-HK-Y][0-9][0-9])|([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?([0-9][ABD-HJLNP-UW-Z]{2})|(GIR)\s?(0AA))$/i.test(
            a
          )
        );
      },
      'Please specify a valid UK postcode.'
    ),
    a.validator.addMethod(
      'require_from_group',
      function (b, c, d) {
        var e = a(d[1], c.form),
          f = e.eq(0),
          g = f.data('valid_req_grp')
            ? f.data('valid_req_grp')
            : a.extend({}, this),
          h =
            e.filter(function () {
              return g.elementValue(this);
            }).length >= d[0];
        return (
          f.data('valid_req_grp', g),
          a(c).data('being_validated') ||
            (e.data('being_validated', !0),
            e.each(function () {
              g.element(this);
            }),
            e.data('being_validated', !1)),
          h
        );
      },
      a.validator.format('Please fill at least {0} of these fields.')
    ),
    a.validator.addMethod(
      'skip_or_fill_minimum',
      function (b, c, d) {
        var e = a(d[1], c.form),
          f = e.eq(0),
          g = f.data('valid_skip') ? f.data('valid_skip') : a.extend({}, this),
          h = e.filter(function () {
            return g.elementValue(this);
          }).length,
          i = 0 === h || h >= d[0];
        return (
          f.data('valid_skip', g),
          a(c).data('being_validated') ||
            (e.data('being_validated', !0),
            e.each(function () {
              g.element(this);
            }),
            e.data('being_validated', !1)),
          i
        );
      },
      a.validator.format(
        'Please either skip these fields or fill at least {0} of them.'
      )
    ),
    a.validator.addMethod(
      'stateUS',
      function (a, b, c) {
        var d,
          e = 'undefined' == typeof c,
          f = !e && 'undefined' != typeof c.caseSensitive && c.caseSensitive,
          g =
            !e &&
            'undefined' != typeof c.includeTerritories &&
            c.includeTerritories,
          h =
            !e && 'undefined' != typeof c.includeMilitary && c.includeMilitary;
        return (
          (d =
            g || h
              ? g && h
                ? '^(A[AEKLPRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$'
                : g
                ? '^(A[KLRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$'
                : '^(A[AEKLPRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$'
              : '^(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$'),
          (d = f ? new RegExp(d) : new RegExp(d, 'i')),
          this.optional(b) || d.test(a)
        );
      },
      'Please specify a valid state.'
    ),
    a.validator.addMethod(
      'strippedminlength',
      function (b, c, d) {
        return a(b).text().length >= d;
      },
      a.validator.format('Please enter at least {0} characters.')
    ),
    a.validator.addMethod(
      'time',
      function (a, b) {
        return (
          this.optional(b) || /^([01]\d|2[0-3]|[0-9])(:[0-5]\d){1,2}$/.test(a)
        );
      },
      'Please enter a valid time, between 00:00 and 23:59.'
    ),
    a.validator.addMethod(
      'time12h',
      function (a, b) {
        return (
          this.optional(b) ||
          /^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i.test(a)
        );
      },
      'Please enter a valid time in 12-hour am/pm format.'
    ),
    a.validator.addMethod(
      'url2',
      function (a, b) {
        return (
          this.optional(b) ||
          /^(?:(?:(?:https?|ftp):)?\/\/)(?:(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})+(?::(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?)|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff])|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62}\.)))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
            a
          )
        );
      },
      a.validator.messages.url
    ),
    a.validator.addMethod(
      'vinUS',
      function (a) {
        if (17 !== a.length) return !1;
        var b,
          c,
          d,
          e,
          f,
          g,
          h = [
            'A',
            'B',
            'C',
            'D',
            'E',
            'F',
            'G',
            'H',
            'J',
            'K',
            'L',
            'M',
            'N',
            'P',
            'R',
            'S',
            'T',
            'U',
            'V',
            'W',
            'X',
            'Y',
            'Z',
          ],
          i = [
            1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 7, 9, 2, 3, 4, 5, 6, 7, 8, 9,
          ],
          j = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2],
          k = 0;
        for (b = 0; b < 17; b++) {
          if (
            ((e = j[b]), (d = a.slice(b, b + 1)), 8 === b && (g = d), isNaN(d))
          ) {
            for (c = 0; c < h.length; c++)
              if (d.toUpperCase() === h[c]) {
                (d = i[c]), (d *= e), isNaN(g) && 8 === c && (g = h[c]);
                break;
              }
          } else d *= e;
          k += d;
        }
        return (f = k % 11), 10 === f && (f = 'X'), f === g;
      },
      'The specified vehicle identification number (VIN) is invalid.'
    ),
    a.validator.addMethod(
      'zipcodeUS',
      function (a, b) {
        return this.optional(b) || /^\d{5}(-\d{4})?$/.test(a);
      },
      'The specified US ZIP Code is invalid.'
    ),
    a.validator.addMethod(
      'ziprange',
      function (a, b) {
        return this.optional(b) || /^90[2-5]\d\{2\}-\d{4}$/.test(a);
      },
      'Your ZIP-code must be in the range 902xx-xxxx to 905xx-xxxx.'
    ),
    a
  );
});

/*!
 * Datepicker for Bootstrap v1.9.0 (https://github.com/uxsolutions/bootstrap-datepicker)
 *
 * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 */

!(function (a) {
  'function' == typeof define && define.amd
    ? define(['jquery'], a)
    : a('object' == typeof exports ? require('jquery') : jQuery);
})(function (a, b) {
  function c() {
    return new Date(Date.UTC.apply(Date, arguments));
  }
  function d() {
    var a = new Date();
    return c(a.getFullYear(), a.getMonth(), a.getDate());
  }
  function e(a, b) {
    return (
      a.getUTCFullYear() === b.getUTCFullYear() &&
      a.getUTCMonth() === b.getUTCMonth() &&
      a.getUTCDate() === b.getUTCDate()
    );
  }
  function f(c, d) {
    return function () {
      return (
        d !== b && a.fn.datepicker.deprecated(d), this[c].apply(this, arguments)
      );
    };
  }
  function g(a) {
    return a && !isNaN(a.getTime());
  }
  function h(b, c) {
    function d(a, b) {
      return b.toLowerCase();
    }
    var e,
      f = a(b).data(),
      g = {},
      h = new RegExp('^' + c.toLowerCase() + '([A-Z])');
    c = new RegExp('^' + c.toLowerCase());
    for (var i in f) c.test(i) && ((e = i.replace(h, d)), (g[e] = f[i]));
    return g;
  }
  function i(b) {
    var c = {};
    if (q[b] || ((b = b.split('-')[0]), q[b])) {
      var d = q[b];
      return (
        a.each(p, function (a, b) {
          b in d && (c[b] = d[b]);
        }),
        c
      );
    }
  }
  var j = (function () {
      var b = {
        get: function (a) {
          return this.slice(a)[0];
        },
        contains: function (a) {
          for (var b = a && a.valueOf(), c = 0, d = this.length; c < d; c++)
            if (0 <= this[c].valueOf() - b && this[c].valueOf() - b < 864e5)
              return c;
          return -1;
        },
        remove: function (a) {
          this.splice(a, 1);
        },
        replace: function (b) {
          b &&
            (a.isArray(b) || (b = [b]), this.clear(), this.push.apply(this, b));
        },
        clear: function () {
          this.length = 0;
        },
        copy: function () {
          var a = new j();
          return a.replace(this), a;
        },
      };
      return function () {
        var c = [];
        return c.push.apply(c, arguments), a.extend(c, b), c;
      };
    })(),
    k = function (b, c) {
      a.data(b, 'datepicker', this),
        (this._events = []),
        (this._secondaryEvents = []),
        this._process_options(c),
        (this.dates = new j()),
        (this.viewDate = this.o.defaultViewDate),
        (this.focusDate = null),
        (this.element = a(b)),
        (this.isInput = this.element.is('input')),
        (this.inputField = this.isInput
          ? this.element
          : this.element.find('input')),
        (this.component =
          !!this.element.hasClass('date') &&
          this.element.find(
            '.add-on, .input-group-addon, .input-group-append, .input-group-prepend, .btn'
          )),
        this.component && 0 === this.component.length && (this.component = !1),
        (this.isInline = !this.component && this.element.is('div')),
        (this.picker = a(r.template)),
        this._check_template(this.o.templates.leftArrow) &&
          this.picker.find('.prev').html(this.o.templates.leftArrow),
        this._check_template(this.o.templates.rightArrow) &&
          this.picker.find('.next').html(this.o.templates.rightArrow),
        this._buildEvents(),
        this._attachEvents(),
        this.isInline
          ? this.picker.addClass('datepicker-inline').appendTo(this.element)
          : this.picker.addClass('datepicker-dropdown dropdown-menu'),
        this.o.rtl && this.picker.addClass('datepicker-rtl'),
        this.o.calendarWeeks &&
          this.picker
            .find(
              '.datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear'
            )
            .attr('colspan', function (a, b) {
              return Number(b) + 1;
            }),
        this._process_options({
          startDate: this._o.startDate,
          endDate: this._o.endDate,
          daysOfWeekDisabled: this.o.daysOfWeekDisabled,
          daysOfWeekHighlighted: this.o.daysOfWeekHighlighted,
          datesDisabled: this.o.datesDisabled,
        }),
        (this._allow_update = !1),
        this.setViewMode(this.o.startView),
        (this._allow_update = !0),
        this.fillDow(),
        this.fillMonths(),
        this.update(),
        this.isInline && this.show();
    };
  k.prototype = {
    constructor: k,
    _resolveViewName: function (b) {
      return (
        a.each(r.viewModes, function (c, d) {
          if (b === c || -1 !== a.inArray(b, d.names)) return (b = c), !1;
        }),
        b
      );
    },
    _resolveDaysOfWeek: function (b) {
      return a.isArray(b) || (b = b.split(/[,\s]*/)), a.map(b, Number);
    },
    _check_template: function (c) {
      try {
        if (c === b || '' === c) return !1;
        if ((c.match(/[<>]/g) || []).length <= 0) return !0;
        return a(c).length > 0;
      } catch (a) {
        return !1;
      }
    },
    _process_options: function (b) {
      this._o = a.extend({}, this._o, b);
      var e = (this.o = a.extend({}, this._o)),
        f = e.language;
      q[f] || ((f = f.split('-')[0]), q[f] || (f = o.language)),
        (e.language = f),
        (e.startView = this._resolveViewName(e.startView)),
        (e.minViewMode = this._resolveViewName(e.minViewMode)),
        (e.maxViewMode = this._resolveViewName(e.maxViewMode)),
        (e.startView = Math.max(
          this.o.minViewMode,
          Math.min(this.o.maxViewMode, e.startView)
        )),
        !0 !== e.multidate &&
          ((e.multidate = Number(e.multidate) || !1),
          !1 !== e.multidate && (e.multidate = Math.max(0, e.multidate))),
        (e.multidateSeparator = String(e.multidateSeparator)),
        (e.weekStart %= 7),
        (e.weekEnd = (e.weekStart + 6) % 7);
      var g = r.parseFormat(e.format);
      e.startDate !== -1 / 0 &&
        (e.startDate
          ? e.startDate instanceof Date
            ? (e.startDate = this._local_to_utc(this._zero_time(e.startDate)))
            : (e.startDate = r.parseDate(
                e.startDate,
                g,
                e.language,
                e.assumeNearbyYear
              ))
          : (e.startDate = -1 / 0)),
        e.endDate !== 1 / 0 &&
          (e.endDate
            ? e.endDate instanceof Date
              ? (e.endDate = this._local_to_utc(this._zero_time(e.endDate)))
              : (e.endDate = r.parseDate(
                  e.endDate,
                  g,
                  e.language,
                  e.assumeNearbyYear
                ))
            : (e.endDate = 1 / 0)),
        (e.daysOfWeekDisabled = this._resolveDaysOfWeek(
          e.daysOfWeekDisabled || []
        )),
        (e.daysOfWeekHighlighted = this._resolveDaysOfWeek(
          e.daysOfWeekHighlighted || []
        )),
        (e.datesDisabled = e.datesDisabled || []),
        a.isArray(e.datesDisabled) ||
          (e.datesDisabled = e.datesDisabled.split(',')),
        (e.datesDisabled = a.map(e.datesDisabled, function (a) {
          return r.parseDate(a, g, e.language, e.assumeNearbyYear);
        }));
      var h = String(e.orientation).toLowerCase().split(/\s+/g),
        i = e.orientation.toLowerCase();
      if (
        ((h = a.grep(h, function (a) {
          return /^auto|left|right|top|bottom$/.test(a);
        })),
        (e.orientation = { x: 'auto', y: 'auto' }),
        i && 'auto' !== i)
      )
        if (1 === h.length)
          switch (h[0]) {
            case 'top':
            case 'bottom':
              e.orientation.y = h[0];
              break;
            case 'left':
            case 'right':
              e.orientation.x = h[0];
          }
        else
          (i = a.grep(h, function (a) {
            return /^left|right$/.test(a);
          })),
            (e.orientation.x = i[0] || 'auto'),
            (i = a.grep(h, function (a) {
              return /^top|bottom$/.test(a);
            })),
            (e.orientation.y = i[0] || 'auto');
      else;
      if (
        e.defaultViewDate instanceof Date ||
        'string' == typeof e.defaultViewDate
      )
        e.defaultViewDate = r.parseDate(
          e.defaultViewDate,
          g,
          e.language,
          e.assumeNearbyYear
        );
      else if (e.defaultViewDate) {
        var j = e.defaultViewDate.year || new Date().getFullYear(),
          k = e.defaultViewDate.month || 0,
          l = e.defaultViewDate.day || 1;
        e.defaultViewDate = c(j, k, l);
      } else e.defaultViewDate = d();
    },
    _applyEvents: function (a) {
      for (var c, d, e, f = 0; f < a.length; f++)
        (c = a[f][0]),
          2 === a[f].length
            ? ((d = b), (e = a[f][1]))
            : 3 === a[f].length && ((d = a[f][1]), (e = a[f][2])),
          c.on(e, d);
    },
    _unapplyEvents: function (a) {
      for (var c, d, e, f = 0; f < a.length; f++)
        (c = a[f][0]),
          2 === a[f].length
            ? ((e = b), (d = a[f][1]))
            : 3 === a[f].length && ((e = a[f][1]), (d = a[f][2])),
          c.off(d, e);
    },
    _buildEvents: function () {
      var b = {
        keyup: a.proxy(function (b) {
          -1 === a.inArray(b.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) &&
            this.update();
        }, this),
        keydown: a.proxy(this.keydown, this),
        paste: a.proxy(this.paste, this),
      };
      !0 === this.o.showOnFocus && (b.focus = a.proxy(this.show, this)),
        this.isInput
          ? (this._events = [[this.element, b]])
          : this.component && this.inputField.length
          ? (this._events = [
              [this.inputField, b],
              [this.component, { click: a.proxy(this.show, this) }],
            ])
          : (this._events = [
              [
                this.element,
                {
                  click: a.proxy(this.show, this),
                  keydown: a.proxy(this.keydown, this),
                },
              ],
            ]),
        this._events.push(
          [
            this.element,
            '*',
            {
              blur: a.proxy(function (a) {
                this._focused_from = a.target;
              }, this),
            },
          ],
          [
            this.element,
            {
              blur: a.proxy(function (a) {
                this._focused_from = a.target;
              }, this),
            },
          ]
        ),
        this.o.immediateUpdates &&
          this._events.push([
            this.element,
            {
              'changeYear changeMonth': a.proxy(function (a) {
                this.update(a.date);
              }, this),
            },
          ]),
        (this._secondaryEvents = [
          [this.picker, { click: a.proxy(this.click, this) }],
          [
            this.picker,
            '.prev, .next',
            { click: a.proxy(this.navArrowsClick, this) },
          ],
          [
            this.picker,
            '.day:not(.disabled)',
            { click: a.proxy(this.dayCellClick, this) },
          ],
          [a(window), { resize: a.proxy(this.place, this) }],
          [
            a(document),
            {
              'mousedown touchstart': a.proxy(function (a) {
                this.element.is(a.target) ||
                  this.element.find(a.target).length ||
                  this.picker.is(a.target) ||
                  this.picker.find(a.target).length ||
                  this.isInline ||
                  this.hide();
              }, this),
            },
          ],
        ]);
    },
    _attachEvents: function () {
      this._detachEvents(), this._applyEvents(this._events);
    },
    _detachEvents: function () {
      this._unapplyEvents(this._events);
    },
    _attachSecondaryEvents: function () {
      this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents);
    },
    _detachSecondaryEvents: function () {
      this._unapplyEvents(this._secondaryEvents);
    },
    _trigger: function (b, c) {
      var d = c || this.dates.get(-1),
        e = this._utc_to_local(d);
      this.element.trigger({
        type: b,
        date: e,
        viewMode: this.viewMode,
        dates: a.map(this.dates, this._utc_to_local),
        format: a.proxy(function (a, b) {
          0 === arguments.length
            ? ((a = this.dates.length - 1), (b = this.o.format))
            : 'string' == typeof a && ((b = a), (a = this.dates.length - 1)),
            (b = b || this.o.format);
          var c = this.dates.get(a);
          return r.formatDate(c, b, this.o.language);
        }, this),
      });
    },
    show: function () {
      if (
        !(
          this.inputField.is(':disabled') ||
          (this.inputField.prop('readonly') && !1 === this.o.enableOnReadonly)
        )
      )
        return (
          this.isInline || this.picker.appendTo(this.o.container),
          this.place(),
          this.picker.show(),
          this._attachSecondaryEvents(),
          this._trigger('show'),
          (window.navigator.msMaxTouchPoints || 'ontouchstart' in document) &&
            this.o.disableTouchKeyboard &&
            a(this.element).blur(),
          this
        );
    },
    hide: function () {
      return this.isInline || !this.picker.is(':visible')
        ? this
        : ((this.focusDate = null),
          this.picker.hide().detach(),
          this._detachSecondaryEvents(),
          this.setViewMode(this.o.startView),
          this.o.forceParse && this.inputField.val() && this.setValue(),
          this._trigger('hide'),
          this);
    },
    destroy: function () {
      return (
        this.hide(),
        this._detachEvents(),
        this._detachSecondaryEvents(),
        this.picker.remove(),
        delete this.element.data().datepicker,
        this.isInput || delete this.element.data().date,
        this
      );
    },
    paste: function (b) {
      var c;
      if (
        b.originalEvent.clipboardData &&
        b.originalEvent.clipboardData.types &&
        -1 !== a.inArray('text/plain', b.originalEvent.clipboardData.types)
      )
        c = b.originalEvent.clipboardData.getData('text/plain');
      else {
        if (!window.clipboardData) return;
        c = window.clipboardData.getData('Text');
      }
      this.setDate(c), this.update(), b.preventDefault();
    },
    _utc_to_local: function (a) {
      if (!a) return a;
      var b = new Date(a.getTime() + 6e4 * a.getTimezoneOffset());
      return (
        b.getTimezoneOffset() !== a.getTimezoneOffset() &&
          (b = new Date(a.getTime() + 6e4 * b.getTimezoneOffset())),
        b
      );
    },
    _local_to_utc: function (a) {
      return a && new Date(a.getTime() - 6e4 * a.getTimezoneOffset());
    },
    _zero_time: function (a) {
      return a && new Date(a.getFullYear(), a.getMonth(), a.getDate());
    },
    _zero_utc_time: function (a) {
      return a && c(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate());
    },
    getDates: function () {
      return a.map(this.dates, this._utc_to_local);
    },
    getUTCDates: function () {
      return a.map(this.dates, function (a) {
        return new Date(a);
      });
    },
    getDate: function () {
      return this._utc_to_local(this.getUTCDate());
    },
    getUTCDate: function () {
      var a = this.dates.get(-1);
      return a !== b ? new Date(a) : null;
    },
    clearDates: function () {
      this.inputField.val(''),
        this.update(),
        this._trigger('changeDate'),
        this.o.autoclose && this.hide();
    },
    setDates: function () {
      var b = a.isArray(arguments[0]) ? arguments[0] : arguments;
      return (
        this.update.apply(this, b),
        this._trigger('changeDate'),
        this.setValue(),
        this
      );
    },
    setUTCDates: function () {
      var b = a.isArray(arguments[0]) ? arguments[0] : arguments;
      return this.setDates.apply(this, a.map(b, this._utc_to_local)), this;
    },
    setDate: f('setDates'),
    setUTCDate: f('setUTCDates'),
    remove: f(
      'destroy',
      'Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead'
    ),
    setValue: function () {
      var a = this.getFormattedDate();
      return this.inputField.val(a), this;
    },
    getFormattedDate: function (c) {
      c === b && (c = this.o.format);
      var d = this.o.language;
      return a
        .map(this.dates, function (a) {
          return r.formatDate(a, c, d);
        })
        .join(this.o.multidateSeparator);
    },
    getStartDate: function () {
      return this.o.startDate;
    },
    setStartDate: function (a) {
      return (
        this._process_options({ startDate: a }),
        this.update(),
        this.updateNavArrows(),
        this
      );
    },
    getEndDate: function () {
      return this.o.endDate;
    },
    setEndDate: function (a) {
      return (
        this._process_options({ endDate: a }),
        this.update(),
        this.updateNavArrows(),
        this
      );
    },
    setDaysOfWeekDisabled: function (a) {
      return (
        this._process_options({ daysOfWeekDisabled: a }), this.update(), this
      );
    },
    setDaysOfWeekHighlighted: function (a) {
      return (
        this._process_options({ daysOfWeekHighlighted: a }), this.update(), this
      );
    },
    setDatesDisabled: function (a) {
      return this._process_options({ datesDisabled: a }), this.update(), this;
    },
    place: function () {
      if (this.isInline) return this;
      var b = this.picker.outerWidth(),
        c = this.picker.outerHeight(),
        d = a(this.o.container),
        e = d.width(),
        f =
          'body' === this.o.container ? a(document).scrollTop() : d.scrollTop(),
        g = d.offset(),
        h = [0];
      this.element.parents().each(function () {
        var b = a(this).css('z-index');
        'auto' !== b && 0 !== Number(b) && h.push(Number(b));
      });
      var i = Math.max.apply(Math, h) + this.o.zIndexOffset,
        j = this.component
          ? this.component.parent().offset()
          : this.element.offset(),
        k = this.component
          ? this.component.outerHeight(!0)
          : this.element.outerHeight(!1),
        l = this.component
          ? this.component.outerWidth(!0)
          : this.element.outerWidth(!1),
        m = j.left - g.left,
        n = j.top - g.top;
      'body' !== this.o.container && (n += f),
        this.picker.removeClass(
          'datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left'
        ),
        'auto' !== this.o.orientation.x
          ? (this.picker.addClass('datepicker-orient-' + this.o.orientation.x),
            'right' === this.o.orientation.x && (m -= b - l))
          : j.left < 0
          ? (this.picker.addClass('datepicker-orient-left'), (m -= j.left - 10))
          : m + b > e
          ? (this.picker.addClass('datepicker-orient-right'), (m += l - b))
          : this.o.rtl
          ? this.picker.addClass('datepicker-orient-right')
          : this.picker.addClass('datepicker-orient-left');
      var o,
        p = this.o.orientation.y;
      if (
        ('auto' === p && ((o = -f + n - c), (p = o < 0 ? 'bottom' : 'top')),
        this.picker.addClass('datepicker-orient-' + p),
        'top' === p
          ? (n -= c + parseInt(this.picker.css('padding-top')))
          : (n += k),
        this.o.rtl)
      ) {
        var q = e - (m + l);
        this.picker.css({ top: n, right: q, zIndex: i });
      } else this.picker.css({ top: n, left: m, zIndex: i });
      return this;
    },
    _allow_update: !0,
    update: function () {
      if (!this._allow_update) return this;
      var b = this.dates.copy(),
        c = [],
        d = !1;
      return (
        arguments.length
          ? (a.each(
              arguments,
              a.proxy(function (a, b) {
                b instanceof Date && (b = this._local_to_utc(b)), c.push(b);
              }, this)
            ),
            (d = !0))
          : ((c = this.isInput
              ? this.element.val()
              : this.element.data('date') || this.inputField.val()),
            (c =
              c && this.o.multidate ? c.split(this.o.multidateSeparator) : [c]),
            delete this.element.data().date),
        (c = a.map(
          c,
          a.proxy(function (a) {
            return r.parseDate(
              a,
              this.o.format,
              this.o.language,
              this.o.assumeNearbyYear
            );
          }, this)
        )),
        (c = a.grep(
          c,
          a.proxy(function (a) {
            return !this.dateWithinRange(a) || !a;
          }, this),
          !0
        )),
        this.dates.replace(c),
        this.o.updateViewDate &&
          (this.dates.length
            ? (this.viewDate = new Date(this.dates.get(-1)))
            : this.viewDate < this.o.startDate
            ? (this.viewDate = new Date(this.o.startDate))
            : this.viewDate > this.o.endDate
            ? (this.viewDate = new Date(this.o.endDate))
            : (this.viewDate = this.o.defaultViewDate)),
        d
          ? (this.setValue(), this.element.change())
          : this.dates.length &&
            String(b) !== String(this.dates) &&
            d &&
            (this._trigger('changeDate'), this.element.change()),
        !this.dates.length &&
          b.length &&
          (this._trigger('clearDate'), this.element.change()),
        this.fill(),
        this
      );
    },
    fillDow: function () {
      if (this.o.showWeekDays) {
        var b = this.o.weekStart,
          c = '<tr>';
        for (
          this.o.calendarWeeks && (c += '<th class="cw">&#160;</th>');
          b < this.o.weekStart + 7;

        )
          (c += '<th class="dow'),
            -1 !== a.inArray(b, this.o.daysOfWeekDisabled) &&
              (c += ' disabled'),
            (c += '">' + q[this.o.language].daysMin[b++ % 7] + '</th>');
        (c += '</tr>'), this.picker.find('.datepicker-days thead').append(c);
      }
    },
    fillMonths: function () {
      for (
        var a, b = this._utc_to_local(this.viewDate), c = '', d = 0;
        d < 12;
        d++
      )
        (a = b && b.getMonth() === d ? ' focused' : ''),
          (c +=
            '<span class="month' +
            a +
            '">' +
            q[this.o.language].monthsShort[d] +
            '</span>');
      this.picker.find('.datepicker-months td').html(c);
    },
    setRange: function (b) {
      b && b.length
        ? (this.range = a.map(b, function (a) {
            return a.valueOf();
          }))
        : delete this.range,
        this.fill();
    },
    getClassNames: function (b) {
      var c = [],
        f = this.viewDate.getUTCFullYear(),
        g = this.viewDate.getUTCMonth(),
        h = d();
      return (
        b.getUTCFullYear() < f ||
        (b.getUTCFullYear() === f && b.getUTCMonth() < g)
          ? c.push('old')
          : (b.getUTCFullYear() > f ||
              (b.getUTCFullYear() === f && b.getUTCMonth() > g)) &&
            c.push('new'),
        this.focusDate &&
          b.valueOf() === this.focusDate.valueOf() &&
          c.push('focused'),
        this.o.todayHighlight && e(b, h) && c.push('today'),
        -1 !== this.dates.contains(b) && c.push('active'),
        this.dateWithinRange(b) || c.push('disabled'),
        this.dateIsDisabled(b) && c.push('disabled', 'disabled-date'),
        -1 !== a.inArray(b.getUTCDay(), this.o.daysOfWeekHighlighted) &&
          c.push('highlighted'),
        this.range &&
          (b > this.range[0] &&
            b < this.range[this.range.length - 1] &&
            c.push('range'),
          -1 !== a.inArray(b.valueOf(), this.range) && c.push('selected'),
          b.valueOf() === this.range[0] && c.push('range-start'),
          b.valueOf() === this.range[this.range.length - 1] &&
            c.push('range-end')),
        c
      );
    },
    _fill_yearsView: function (c, d, e, f, g, h, i) {
      for (
        var j,
          k,
          l,
          m = '',
          n = e / 10,
          o = this.picker.find(c),
          p = Math.floor(f / e) * e,
          q = p + 9 * n,
          r = Math.floor(this.viewDate.getFullYear() / n) * n,
          s = a.map(this.dates, function (a) {
            return Math.floor(a.getUTCFullYear() / n) * n;
          }),
          t = p - n;
        t <= q + n;
        t += n
      )
        (j = [d]),
          (k = null),
          t === p - n ? j.push('old') : t === q + n && j.push('new'),
          -1 !== a.inArray(t, s) && j.push('active'),
          (t < g || t > h) && j.push('disabled'),
          t === r && j.push('focused'),
          i !== a.noop &&
            ((l = i(new Date(t, 0, 1))),
            l === b
              ? (l = {})
              : 'boolean' == typeof l
              ? (l = { enabled: l })
              : 'string' == typeof l && (l = { classes: l }),
            !1 === l.enabled && j.push('disabled'),
            l.classes && (j = j.concat(l.classes.split(/\s+/))),
            l.tooltip && (k = l.tooltip)),
          (m +=
            '<span class="' +
            j.join(' ') +
            '"' +
            (k ? ' title="' + k + '"' : '') +
            '>' +
            t +
            '</span>');
      o.find('.datepicker-switch').text(p + '-' + q), o.find('td').html(m);
    },
    fill: function () {
      var e,
        f,
        g = new Date(this.viewDate),
        h = g.getUTCFullYear(),
        i = g.getUTCMonth(),
        j =
          this.o.startDate !== -1 / 0
            ? this.o.startDate.getUTCFullYear()
            : -1 / 0,
        k =
          this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCMonth() : -1 / 0,
        l = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
        m = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
        n = q[this.o.language].today || q.en.today || '',
        o = q[this.o.language].clear || q.en.clear || '',
        p = q[this.o.language].titleFormat || q.en.titleFormat,
        s = d(),
        t =
          (!0 === this.o.todayBtn || 'linked' === this.o.todayBtn) &&
          s >= this.o.startDate &&
          s <= this.o.endDate &&
          !this.weekOfDateIsDisabled(s);
      if (!isNaN(h) && !isNaN(i)) {
        this.picker
          .find('.datepicker-days .datepicker-switch')
          .text(r.formatDate(g, p, this.o.language)),
          this.picker
            .find('tfoot .today')
            .text(n)
            .css('display', t ? 'table-cell' : 'none'),
          this.picker
            .find('tfoot .clear')
            .text(o)
            .css('display', !0 === this.o.clearBtn ? 'table-cell' : 'none'),
          this.picker
            .find('thead .datepicker-title')
            .text(this.o.title)
            .css(
              'display',
              'string' == typeof this.o.title && '' !== this.o.title
                ? 'table-cell'
                : 'none'
            ),
          this.updateNavArrows(),
          this.fillMonths();
        var u = c(h, i, 0),
          v = u.getUTCDate();
        u.setUTCDate(v - ((u.getUTCDay() - this.o.weekStart + 7) % 7));
        var w = new Date(u);
        u.getUTCFullYear() < 100 && w.setUTCFullYear(u.getUTCFullYear()),
          w.setUTCDate(w.getUTCDate() + 42),
          (w = w.valueOf());
        for (var x, y, z = []; u.valueOf() < w; ) {
          if (
            (x = u.getUTCDay()) === this.o.weekStart &&
            (z.push('<tr>'), this.o.calendarWeeks)
          ) {
            var A = new Date(+u + ((this.o.weekStart - x - 7) % 7) * 864e5),
              B = new Date(Number(A) + ((11 - A.getUTCDay()) % 7) * 864e5),
              C = new Date(
                Number((C = c(B.getUTCFullYear(), 0, 1))) +
                  ((11 - C.getUTCDay()) % 7) * 864e5
              ),
              D = (B - C) / 864e5 / 7 + 1;
            z.push('<td class="cw">' + D + '</td>');
          }
          (y = this.getClassNames(u)), y.push('day');
          var E = u.getUTCDate();
          this.o.beforeShowDay !== a.noop &&
            ((f = this.o.beforeShowDay(this._utc_to_local(u))),
            f === b
              ? (f = {})
              : 'boolean' == typeof f
              ? (f = { enabled: f })
              : 'string' == typeof f && (f = { classes: f }),
            !1 === f.enabled && y.push('disabled'),
            f.classes && (y = y.concat(f.classes.split(/\s+/))),
            f.tooltip && (e = f.tooltip),
            f.content && (E = f.content)),
            (y = a.isFunction(a.uniqueSort) ? a.uniqueSort(y) : a.unique(y)),
            z.push(
              '<td class="' +
                y.join(' ') +
                '"' +
                (e ? ' title="' + e + '"' : '') +
                ' data-date="' +
                u.getTime().toString() +
                '">' +
                E +
                '</td>'
            ),
            (e = null),
            x === this.o.weekEnd && z.push('</tr>'),
            u.setUTCDate(u.getUTCDate() + 1);
        }
        this.picker.find('.datepicker-days tbody').html(z.join(''));
        var F = q[this.o.language].monthsTitle || q.en.monthsTitle || 'Months',
          G = this.picker
            .find('.datepicker-months')
            .find('.datepicker-switch')
            .text(this.o.maxViewMode < 2 ? F : h)
            .end()
            .find('tbody span')
            .removeClass('active');
        if (
          (a.each(this.dates, function (a, b) {
            b.getUTCFullYear() === h &&
              G.eq(b.getUTCMonth()).addClass('active');
          }),
          (h < j || h > l) && G.addClass('disabled'),
          h === j && G.slice(0, k).addClass('disabled'),
          h === l && G.slice(m + 1).addClass('disabled'),
          this.o.beforeShowMonth !== a.noop)
        ) {
          var H = this;
          a.each(G, function (c, d) {
            var e = new Date(h, c, 1),
              f = H.o.beforeShowMonth(e);
            f === b
              ? (f = {})
              : 'boolean' == typeof f
              ? (f = { enabled: f })
              : 'string' == typeof f && (f = { classes: f }),
              !1 !== f.enabled ||
                a(d).hasClass('disabled') ||
                a(d).addClass('disabled'),
              f.classes && a(d).addClass(f.classes),
              f.tooltip && a(d).prop('title', f.tooltip);
          });
        }
        this._fill_yearsView(
          '.datepicker-years',
          'year',
          10,
          h,
          j,
          l,
          this.o.beforeShowYear
        ),
          this._fill_yearsView(
            '.datepicker-decades',
            'decade',
            100,
            h,
            j,
            l,
            this.o.beforeShowDecade
          ),
          this._fill_yearsView(
            '.datepicker-centuries',
            'century',
            1e3,
            h,
            j,
            l,
            this.o.beforeShowCentury
          );
      }
    },
    updateNavArrows: function () {
      if (this._allow_update) {
        var a,
          b,
          c = new Date(this.viewDate),
          d = c.getUTCFullYear(),
          e = c.getUTCMonth(),
          f =
            this.o.startDate !== -1 / 0
              ? this.o.startDate.getUTCFullYear()
              : -1 / 0,
          g =
            this.o.startDate !== -1 / 0
              ? this.o.startDate.getUTCMonth()
              : -1 / 0,
          h =
            this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
          i = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
          j = 1;
        switch (this.viewMode) {
          case 4:
            j *= 10;
          case 3:
            j *= 10;
          case 2:
            j *= 10;
          case 1:
            (a = Math.floor(d / j) * j <= f),
              (b = Math.floor(d / j) * j + j > h);
            break;
          case 0:
            (a = d <= f && e <= g), (b = d >= h && e >= i);
        }
        this.picker.find('.prev').toggleClass('disabled', a),
          this.picker.find('.next').toggleClass('disabled', b);
      }
    },
    click: function (b) {
      b.preventDefault(), b.stopPropagation();
      var e, f, g, h;
      (e = a(b.target)),
        e.hasClass('datepicker-switch') &&
          this.viewMode !== this.o.maxViewMode &&
          this.setViewMode(this.viewMode + 1),
        e.hasClass('today') &&
          !e.hasClass('day') &&
          (this.setViewMode(0),
          this._setDate(d(), 'linked' === this.o.todayBtn ? null : 'view')),
        e.hasClass('clear') && this.clearDates(),
        e.hasClass('disabled') ||
          ((e.hasClass('month') ||
            e.hasClass('year') ||
            e.hasClass('decade') ||
            e.hasClass('century')) &&
            (this.viewDate.setUTCDate(1),
            (f = 1),
            1 === this.viewMode
              ? ((h = e.parent().find('span').index(e)),
                (g = this.viewDate.getUTCFullYear()),
                this.viewDate.setUTCMonth(h))
              : ((h = 0),
                (g = Number(e.text())),
                this.viewDate.setUTCFullYear(g)),
            this._trigger(r.viewModes[this.viewMode - 1].e, this.viewDate),
            this.viewMode === this.o.minViewMode
              ? this._setDate(c(g, h, f))
              : (this.setViewMode(this.viewMode - 1), this.fill()))),
        this.picker.is(':visible') &&
          this._focused_from &&
          this._focused_from.focus(),
        delete this._focused_from;
    },
    dayCellClick: function (b) {
      var c = a(b.currentTarget),
        d = c.data('date'),
        e = new Date(d);
      this.o.updateViewDate &&
        (e.getUTCFullYear() !== this.viewDate.getUTCFullYear() &&
          this._trigger('changeYear', this.viewDate),
        e.getUTCMonth() !== this.viewDate.getUTCMonth() &&
          this._trigger('changeMonth', this.viewDate)),
        this._setDate(e);
    },
    navArrowsClick: function (b) {
      var c = a(b.currentTarget),
        d = c.hasClass('prev') ? -1 : 1;
      0 !== this.viewMode && (d *= 12 * r.viewModes[this.viewMode].navStep),
        (this.viewDate = this.moveMonth(this.viewDate, d)),
        this._trigger(r.viewModes[this.viewMode].e, this.viewDate),
        this.fill();
    },
    _toggle_multidate: function (a) {
      var b = this.dates.contains(a);
      if (
        (a || this.dates.clear(),
        -1 !== b
          ? (!0 === this.o.multidate ||
              this.o.multidate > 1 ||
              this.o.toggleActive) &&
            this.dates.remove(b)
          : !1 === this.o.multidate
          ? (this.dates.clear(), this.dates.push(a))
          : this.dates.push(a),
        'number' == typeof this.o.multidate)
      )
        for (; this.dates.length > this.o.multidate; ) this.dates.remove(0);
    },
    _setDate: function (a, b) {
      (b && 'date' !== b) || this._toggle_multidate(a && new Date(a)),
        ((!b && this.o.updateViewDate) || 'view' === b) &&
          (this.viewDate = a && new Date(a)),
        this.fill(),
        this.setValue(),
        (b && 'view' === b) || this._trigger('changeDate'),
        this.inputField.trigger('change'),
        !this.o.autoclose || (b && 'date' !== b) || this.hide();
    },
    moveDay: function (a, b) {
      var c = new Date(a);
      return c.setUTCDate(a.getUTCDate() + b), c;
    },
    moveWeek: function (a, b) {
      return this.moveDay(a, 7 * b);
    },
    moveMonth: function (a, b) {
      if (!g(a)) return this.o.defaultViewDate;
      if (!b) return a;
      var c,
        d,
        e = new Date(a.valueOf()),
        f = e.getUTCDate(),
        h = e.getUTCMonth(),
        i = Math.abs(b);
      if (((b = b > 0 ? 1 : -1), 1 === i))
        (d =
          -1 === b
            ? function () {
                return e.getUTCMonth() === h;
              }
            : function () {
                return e.getUTCMonth() !== c;
              }),
          (c = h + b),
          e.setUTCMonth(c),
          (c = (c + 12) % 12);
      else {
        for (var j = 0; j < i; j++) e = this.moveMonth(e, b);
        (c = e.getUTCMonth()),
          e.setUTCDate(f),
          (d = function () {
            return c !== e.getUTCMonth();
          });
      }
      for (; d(); ) e.setUTCDate(--f), e.setUTCMonth(c);
      return e;
    },
    moveYear: function (a, b) {
      return this.moveMonth(a, 12 * b);
    },
    moveAvailableDate: function (a, b, c) {
      do {
        if (((a = this[c](a, b)), !this.dateWithinRange(a))) return !1;
        c = 'moveDay';
      } while (this.dateIsDisabled(a));
      return a;
    },
    weekOfDateIsDisabled: function (b) {
      return -1 !== a.inArray(b.getUTCDay(), this.o.daysOfWeekDisabled);
    },
    dateIsDisabled: function (b) {
      return (
        this.weekOfDateIsDisabled(b) ||
        a.grep(this.o.datesDisabled, function (a) {
          return e(b, a);
        }).length > 0
      );
    },
    dateWithinRange: function (a) {
      return a >= this.o.startDate && a <= this.o.endDate;
    },
    keydown: function (a) {
      if (!this.picker.is(':visible'))
        return void (
          (40 !== a.keyCode && 27 !== a.keyCode) ||
          (this.show(), a.stopPropagation())
        );
      var b,
        c,
        d = !1,
        e = this.focusDate || this.viewDate;
      switch (a.keyCode) {
        case 27:
          this.focusDate
            ? ((this.focusDate = null),
              (this.viewDate = this.dates.get(-1) || this.viewDate),
              this.fill())
            : this.hide(),
            a.preventDefault(),
            a.stopPropagation();
          break;
        case 37:
        case 38:
        case 39:
        case 40:
          if (
            !this.o.keyboardNavigation ||
            7 === this.o.daysOfWeekDisabled.length
          )
            break;
          (b = 37 === a.keyCode || 38 === a.keyCode ? -1 : 1),
            0 === this.viewMode
              ? a.ctrlKey
                ? (c = this.moveAvailableDate(e, b, 'moveYear')) &&
                  this._trigger('changeYear', this.viewDate)
                : a.shiftKey
                ? (c = this.moveAvailableDate(e, b, 'moveMonth')) &&
                  this._trigger('changeMonth', this.viewDate)
                : 37 === a.keyCode || 39 === a.keyCode
                ? (c = this.moveAvailableDate(e, b, 'moveDay'))
                : this.weekOfDateIsDisabled(e) ||
                  (c = this.moveAvailableDate(e, b, 'moveWeek'))
              : 1 === this.viewMode
              ? ((38 !== a.keyCode && 40 !== a.keyCode) || (b *= 4),
                (c = this.moveAvailableDate(e, b, 'moveMonth')))
              : 2 === this.viewMode &&
                ((38 !== a.keyCode && 40 !== a.keyCode) || (b *= 4),
                (c = this.moveAvailableDate(e, b, 'moveYear'))),
            c &&
              ((this.focusDate = this.viewDate = c),
              this.setValue(),
              this.fill(),
              a.preventDefault());
          break;
        case 13:
          if (!this.o.forceParse) break;
          (e = this.focusDate || this.dates.get(-1) || this.viewDate),
            this.o.keyboardNavigation && (this._toggle_multidate(e), (d = !0)),
            (this.focusDate = null),
            (this.viewDate = this.dates.get(-1) || this.viewDate),
            this.setValue(),
            this.fill(),
            this.picker.is(':visible') &&
              (a.preventDefault(),
              a.stopPropagation(),
              this.o.autoclose && this.hide());
          break;
        case 9:
          (this.focusDate = null),
            (this.viewDate = this.dates.get(-1) || this.viewDate),
            this.fill(),
            this.hide();
      }
      d &&
        (this.dates.length
          ? this._trigger('changeDate')
          : this._trigger('clearDate'),
        this.inputField.trigger('change'));
    },
    setViewMode: function (a) {
      (this.viewMode = a),
        this.picker
          .children('div')
          .hide()
          .filter('.datepicker-' + r.viewModes[this.viewMode].clsName)
          .show(),
        this.updateNavArrows(),
        this._trigger('changeViewMode', new Date(this.viewDate));
    },
  };
  var l = function (b, c) {
    a.data(b, 'datepicker', this),
      (this.element = a(b)),
      (this.inputs = a.map(c.inputs, function (a) {
        return a.jquery ? a[0] : a;
      })),
      delete c.inputs,
      (this.keepEmptyValues = c.keepEmptyValues),
      delete c.keepEmptyValues,
      n
        .call(a(this.inputs), c)
        .on('changeDate', a.proxy(this.dateUpdated, this)),
      (this.pickers = a.map(this.inputs, function (b) {
        return a.data(b, 'datepicker');
      })),
      this.updateDates();
  };
  l.prototype = {
    updateDates: function () {
      (this.dates = a.map(this.pickers, function (a) {
        return a.getUTCDate();
      })),
        this.updateRanges();
    },
    updateRanges: function () {
      var b = a.map(this.dates, function (a) {
        return a.valueOf();
      });
      a.each(this.pickers, function (a, c) {
        c.setRange(b);
      });
    },
    clearDates: function () {
      a.each(this.pickers, function (a, b) {
        b.clearDates();
      });
    },
    dateUpdated: function (c) {
      if (!this.updating) {
        this.updating = !0;
        var d = a.data(c.target, 'datepicker');
        if (d !== b) {
          var e = d.getUTCDate(),
            f = this.keepEmptyValues,
            g = a.inArray(c.target, this.inputs),
            h = g - 1,
            i = g + 1,
            j = this.inputs.length;
          if (-1 !== g) {
            if (
              (a.each(this.pickers, function (a, b) {
                b.getUTCDate() || (b !== d && f) || b.setUTCDate(e);
              }),
              e < this.dates[h])
            )
              for (; h >= 0 && e < this.dates[h]; )
                this.pickers[h--].setUTCDate(e);
            else if (e > this.dates[i])
              for (; i < j && e > this.dates[i]; )
                this.pickers[i++].setUTCDate(e);
            this.updateDates(), delete this.updating;
          }
        }
      }
    },
    destroy: function () {
      a.map(this.pickers, function (a) {
        a.destroy();
      }),
        a(this.inputs).off('changeDate', this.dateUpdated),
        delete this.element.data().datepicker;
    },
    remove: f(
      'destroy',
      'Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead'
    ),
  };
  var m = a.fn.datepicker,
    n = function (c) {
      var d = Array.apply(null, arguments);
      d.shift();
      var e;
      if (
        (this.each(function () {
          var b = a(this),
            f = b.data('datepicker'),
            g = 'object' == typeof c && c;
          if (!f) {
            var j = h(this, 'date'),
              m = a.extend({}, o, j, g),
              n = i(m.language),
              p = a.extend({}, o, n, j, g);
            b.hasClass('input-daterange') || p.inputs
              ? (a.extend(p, { inputs: p.inputs || b.find('input').toArray() }),
                (f = new l(this, p)))
              : (f = new k(this, p)),
              b.data('datepicker', f);
          }
          'string' == typeof c &&
            'function' == typeof f[c] &&
            (e = f[c].apply(f, d));
        }),
        e === b || e instanceof k || e instanceof l)
      )
        return this;
      if (this.length > 1)
        throw new Error(
          'Using only allowed for the collection of a single element (' +
            c +
            ' function)'
        );
      return e;
    };
  a.fn.datepicker = n;
  var o = (a.fn.datepicker.defaults = {
      assumeNearbyYear: !1,
      autoclose: !1,
      beforeShowDay: a.noop,
      beforeShowMonth: a.noop,
      beforeShowYear: a.noop,
      beforeShowDecade: a.noop,
      beforeShowCentury: a.noop,
      calendarWeeks: !1,
      clearBtn: !1,
      toggleActive: !1,
      daysOfWeekDisabled: [],
      daysOfWeekHighlighted: [],
      datesDisabled: [],
      endDate: 1 / 0,
      forceParse: !0,
      format: 'mm/dd/yyyy',
      keepEmptyValues: !1,
      keyboardNavigation: !0,
      language: 'en',
      minViewMode: 0,
      maxViewMode: 4,
      multidate: !1,
      multidateSeparator: ',',
      orientation: 'auto',
      rtl: !1,
      startDate: -1 / 0,
      startView: 0,
      todayBtn: !1,
      todayHighlight: !1,
      updateViewDate: !0,
      weekStart: 0,
      disableTouchKeyboard: !1,
      enableOnReadonly: !0,
      showOnFocus: !0,
      zIndexOffset: 10,
      container: 'body',
      immediateUpdates: !1,
      title: '',
      templates: { leftArrow: '&#x00AB;', rightArrow: '&#x00BB;' },
      showWeekDays: !0,
    }),
    p = (a.fn.datepicker.locale_opts = ['format', 'rtl', 'weekStart']);
  a.fn.datepicker.Constructor = k;
  var q = (a.fn.datepicker.dates = {
      en: {
        days: [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        months: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
        monthsShort: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        today: 'Today',
        clear: 'Clear',
        titleFormat: 'MM yyyy',
      },
    }),
    r = {
      viewModes: [
        { names: ['days', 'month'], clsName: 'days', e: 'changeMonth' },
        {
          names: ['months', 'year'],
          clsName: 'months',
          e: 'changeYear',
          navStep: 1,
        },
        {
          names: ['years', 'decade'],
          clsName: 'years',
          e: 'changeDecade',
          navStep: 10,
        },
        {
          names: ['decades', 'century'],
          clsName: 'decades',
          e: 'changeCentury',
          navStep: 100,
        },
        {
          names: ['centuries', 'millennium'],
          clsName: 'centuries',
          e: 'changeMillennium',
          navStep: 1e3,
        },
      ],
      validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
      nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
      parseFormat: function (a) {
        if ('function' == typeof a.toValue && 'function' == typeof a.toDisplay)
          return a;
        var b = a.replace(this.validParts, '\0').split('\0'),
          c = a.match(this.validParts);
        if (!b || !b.length || !c || 0 === c.length)
          throw new Error('Invalid date format.');
        return { separators: b, parts: c };
      },
      parseDate: function (c, e, f, g) {
        function h(a, b) {
          return (
            !0 === b && (b = 10),
            a < 100 && (a += 2e3) > new Date().getFullYear() + b && (a -= 100),
            a
          );
        }
        function i() {
          var a = this.slice(0, j[n].length),
            b = j[n].slice(0, a.length);
          return a.toLowerCase() === b.toLowerCase();
        }
        if (!c) return b;
        if (c instanceof Date) return c;
        if (('string' == typeof e && (e = r.parseFormat(e)), e.toValue))
          return e.toValue(c, e, f);
        var j,
          l,
          m,
          n,
          o,
          p = { d: 'moveDay', m: 'moveMonth', w: 'moveWeek', y: 'moveYear' },
          s = { yesterday: '-1d', today: '+0d', tomorrow: '+1d' };
        if (
          (c in s && (c = s[c]),
          /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(c))
        ) {
          for (
            j = c.match(/([\-+]\d+)([dmwy])/gi), c = new Date(), n = 0;
            n < j.length;
            n++
          )
            (l = j[n].match(/([\-+]\d+)([dmwy])/i)),
              (m = Number(l[1])),
              (o = p[l[2].toLowerCase()]),
              (c = k.prototype[o](c, m));
          return k.prototype._zero_utc_time(c);
        }
        j = (c && c.match(this.nonpunctuation)) || [];
        var t,
          u,
          v = {},
          w = ['yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'd', 'dd'],
          x = {
            yyyy: function (a, b) {
              return a.setUTCFullYear(g ? h(b, g) : b);
            },
            m: function (a, b) {
              if (isNaN(a)) return a;
              for (b -= 1; b < 0; ) b += 12;
              for (b %= 12, a.setUTCMonth(b); a.getUTCMonth() !== b; )
                a.setUTCDate(a.getUTCDate() - 1);
              return a;
            },
            d: function (a, b) {
              return a.setUTCDate(b);
            },
          };
        (x.yy = x.yyyy), (x.M = x.MM = x.mm = x.m), (x.dd = x.d), (c = d());
        var y = e.parts.slice();
        if (
          (j.length !== y.length &&
            (y = a(y)
              .filter(function (b, c) {
                return -1 !== a.inArray(c, w);
              })
              .toArray()),
          j.length === y.length)
        ) {
          var z;
          for (n = 0, z = y.length; n < z; n++) {
            if (((t = parseInt(j[n], 10)), (l = y[n]), isNaN(t)))
              switch (l) {
                case 'MM':
                  (u = a(q[f].months).filter(i)),
                    (t = a.inArray(u[0], q[f].months) + 1);
                  break;
                case 'M':
                  (u = a(q[f].monthsShort).filter(i)),
                    (t = a.inArray(u[0], q[f].monthsShort) + 1);
              }
            v[l] = t;
          }
          var A, B;
          for (n = 0; n < w.length; n++)
            (B = w[n]) in v &&
              !isNaN(v[B]) &&
              ((A = new Date(c)), x[B](A, v[B]), isNaN(A) || (c = A));
        }
        return c;
      },
      formatDate: function (b, c, d) {
        if (!b) return '';
        if (('string' == typeof c && (c = r.parseFormat(c)), c.toDisplay))
          return c.toDisplay(b, c, d);
        var e = {
          d: b.getUTCDate(),
          D: q[d].daysShort[b.getUTCDay()],
          DD: q[d].days[b.getUTCDay()],
          m: b.getUTCMonth() + 1,
          M: q[d].monthsShort[b.getUTCMonth()],
          MM: q[d].months[b.getUTCMonth()],
          yy: b.getUTCFullYear().toString().substring(2),
          yyyy: b.getUTCFullYear(),
        };
        (e.dd = (e.d < 10 ? '0' : '') + e.d),
          (e.mm = (e.m < 10 ? '0' : '') + e.m),
          (b = []);
        for (
          var f = a.extend([], c.separators), g = 0, h = c.parts.length;
          g <= h;
          g++
        )
          f.length && b.push(f.shift()), b.push(e[c.parts[g]]);
        return b.join('');
      },
      headTemplate:
        '<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">' +
        o.templates.leftArrow +
        '</th><th colspan="5" class="datepicker-switch"></th><th class="next">' +
        o.templates.rightArrow +
        '</th></tr></thead>',
      contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
      footTemplate:
        '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>',
    };
  (r.template =
    '<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">' +
    r.headTemplate +
    '<tbody></tbody>' +
    r.footTemplate +
    '</table></div><div class="datepicker-months"><table class="table-condensed">' +
    r.headTemplate +
    r.contTemplate +
    r.footTemplate +
    '</table></div><div class="datepicker-years"><table class="table-condensed">' +
    r.headTemplate +
    r.contTemplate +
    r.footTemplate +
    '</table></div><div class="datepicker-decades"><table class="table-condensed">' +
    r.headTemplate +
    r.contTemplate +
    r.footTemplate +
    '</table></div><div class="datepicker-centuries"><table class="table-condensed">' +
    r.headTemplate +
    r.contTemplate +
    r.footTemplate +
    '</table></div></div>'),
    (a.fn.datepicker.DPGlobal = r),
    (a.fn.datepicker.noConflict = function () {
      return (a.fn.datepicker = m), this;
    }),
    (a.fn.datepicker.version = '1.9.0'),
    (a.fn.datepicker.deprecated = function (a) {
      var b = window.console;
      b && b.warn && b.warn('DEPRECATED: ' + a);
    }),
    a(document).on(
      'focus.datepicker.data-api click.datepicker.data-api',
      '[data-provide="datepicker"]',
      function (b) {
        var c = a(this);
        c.data('datepicker') || (b.preventDefault(), n.call(c, 'show'));
      }
    ),
    a(function () {
      n.call(a('[data-provide="datepicker-inline"]'));
    });
});
