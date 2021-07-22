((typeof self !== 'undefined' ? self : this)["webpackJsonpvue_ui"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpvue_ui"] || []).push([[10],{

/***/ "6fbe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1f15d2ca-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./docs/main.vue?vue&type=template&id=6eeccbb7&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('JmButton',{staticClass:"fixed",on:{"click":function($event){return _vm.$router.push('/example')}}},[_vm._v(" 快速开始 ")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./docs/main.vue?vue&type=template&id=6eeccbb7&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("d4ec");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("262e");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 3 modules
var createSuper = __webpack_require__("2caf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__("53ca");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__("e439");

// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/index.js + 15 modules
var lib = __webpack_require__("1b40");

// EXTERNAL MODULE: ./package/button/index.ts + 5 modules
var package_button = __webpack_require__("c5b5");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./docs/main.vue?vue&type=script&lang=ts&






var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : Object(esm_typeof["a" /* default */])(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var mainvue_type_script_lang_ts_Main = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(Main, _Vue);

  var _super = Object(createSuper["a" /* default */])(Main);

  function Main() {
    Object(classCallCheck["a" /* default */])(this, Main);

    return _super.apply(this, arguments);
  }

  return Main;
}(lib["c" /* Vue */]);

mainvue_type_script_lang_ts_Main = __decorate([Object(lib["a" /* Component */])({
  components: {
    JmButton: package_button["c" /* default */]
  }
})], mainvue_type_script_lang_ts_Main);
/* harmony default export */ var mainvue_type_script_lang_ts_ = (mainvue_type_script_lang_ts_Main);
// CONCATENATED MODULE: ./docs/main.vue?vue&type=script&lang=ts&
 /* harmony default export */ var docs_mainvue_type_script_lang_ts_ = (mainvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./docs/main.vue?vue&type=style&index=0&id=6eeccbb7&lang=less&scoped=true&
var mainvue_type_style_index_0_id_6eeccbb7_lang_less_scoped_true_ = __webpack_require__("a58f");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./docs/main.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  docs_mainvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "6eeccbb7",
  null
  
)

/* harmony default export */ var main = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "8418":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__("c04e");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "857a":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

var quot = /"/g;

// `CreateHTML` abstract operation
// https://tc39.es/ecma262/#sec-createhtml
module.exports = function (string, tag, attribute, value) {
  var S = String(requireObjectCoercible(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};


/***/ }),

/***/ "99af":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var createProperty = __webpack_require__("8418");
var arraySpeciesCreate = __webpack_require__("65f0");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "a58f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_id_6eeccbb7_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b249");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_id_6eeccbb7_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_id_6eeccbb7_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "a5e6":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a946":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_style_index_0_id_51e10762_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a5e6");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_style_index_0_id_51e10762_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_style_index_0_id_51e10762_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "ade3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "af03":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// check the existence of a method, lowercase
// of a tag and escaping quotes in arguments
module.exports = function (METHOD_NAME) {
  return fails(function () {
    var test = ''[METHOD_NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  });
};


/***/ }),

/***/ "b249":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ba65":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/loading.1963353e.svg";

/***/ }),

/***/ "c5b5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ Type; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Size; });

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.small.js
var es_string_small = __webpack_require__("c96a");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1f15d2ca-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./package/button/button.vue?vue&type=template&id=51e10762&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{class:_vm.classe,style:(_vm.componentStyle),attrs:{"disabled":_vm.disabled},on:{"click":_vm.handleClick}},[(_vm.loading)?_c('img',{staticClass:"jm-button-loading",attrs:{"src":__webpack_require__("ba65"),"width":"20","height":"20","alt":"loading"}}):_vm._e(),_c('div',{staticClass:"jm-button-label"},[_vm._t("default")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./package/button/button.vue?vue&type=template&id=51e10762&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("d4ec");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__("bee2");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("257e");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("262e");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 3 modules
var createSuper = __webpack_require__("2caf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("ade3");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__("53ca");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__("e439");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/index.js + 15 modules
var lib = __webpack_require__("1b40");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./package/button/button.vue?vue&type=script&lang=ts&










var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : Object(esm_typeof["a" /* default */])(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = undefined && undefined.__metadata || function (k, v) {
  if ((typeof Reflect === "undefined" ? "undefined" : Object(esm_typeof["a" /* default */])(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var _a;




var buttonvue_type_script_lang_ts_JmButton = /*#__PURE__*/function (_Vue) {
  Object(inherits["a" /* default */])(JmButton, _Vue);

  var _super = Object(createSuper["a" /* default */])(JmButton);

  function JmButton() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, JmButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "type", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "size", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "plain", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "disabled", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "round", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "loading", void 0);

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "componentStyle", void 0);

    return _this;
  }

  Object(createClass["a" /* default */])(JmButton, [{
    key: "classe",
    get: function get() {
      var _ref;

      return ["jm-button", "jm-button-".concat(this.type), "jm-button-".concat(this.size), (_ref = {}, Object(defineProperty["a" /* default */])(_ref, "jm-button-plain", this.plain), Object(defineProperty["a" /* default */])(_ref, "jm-button-disabled", this.disabled), Object(defineProperty["a" /* default */])(_ref, "jm-button-round", this.round), Object(defineProperty["a" /* default */])(_ref, "loading", this.loading), _ref)];
    }
  }, {
    key: "handleClick",
    value: function handleClick(evt) {
      if (this.disabled || this.loading) return;
      this.$emit("click", evt);
    }
  }]);

  return JmButton;
}(lib["c" /* Vue */]);

__decorate([Object(lib["b" /* Prop */])({
  type: String,
  default: "primary",
  validator: function validator(value) {
    return Type[value] ? true : false;
  }
}), __metadata("design:type", String)], buttonvue_type_script_lang_ts_JmButton.prototype, "type", void 0);

__decorate([Object(lib["b" /* Prop */])({
  type: String,
  default: "normal",
  validator: function validator(value) {
    return Size[value] ? true : false;
  }
}), __metadata("design:type", String)], buttonvue_type_script_lang_ts_JmButton.prototype, "size", void 0);

__decorate([Object(lib["b" /* Prop */])({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], buttonvue_type_script_lang_ts_JmButton.prototype, "plain", void 0);

__decorate([Object(lib["b" /* Prop */])({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], buttonvue_type_script_lang_ts_JmButton.prototype, "disabled", void 0);

__decorate([Object(lib["b" /* Prop */])({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], buttonvue_type_script_lang_ts_JmButton.prototype, "round", void 0);

__decorate([Object(lib["b" /* Prop */])({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], buttonvue_type_script_lang_ts_JmButton.prototype, "loading", void 0);

__decorate([Object(lib["b" /* Prop */])({
  type: Object
}), __metadata("design:type", typeof (_a = typeof Partial !== "undefined" && Partial) === "function" ? _a : Object)], buttonvue_type_script_lang_ts_JmButton.prototype, "componentStyle", void 0);

buttonvue_type_script_lang_ts_JmButton = __decorate([Object(lib["a" /* Component */])({})], buttonvue_type_script_lang_ts_JmButton);
/* harmony default export */ var buttonvue_type_script_lang_ts_ = (buttonvue_type_script_lang_ts_JmButton);
// CONCATENATED MODULE: ./package/button/button.vue?vue&type=script&lang=ts&
 /* harmony default export */ var button_buttonvue_type_script_lang_ts_ = (buttonvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./package/button/button.vue?vue&type=style&index=0&id=51e10762&lang=less&scoped=true&
var buttonvue_type_style_index_0_id_51e10762_lang_less_scoped_true_ = __webpack_require__("a946");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./package/button/button.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  button_buttonvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  "51e10762",
  null
  
)

/* harmony default export */ var button_button = (component.exports);
// CONCATENATED MODULE: ./package/button/index.ts


var Type;

(function (Type) {
  Type["primary"] = "primary";
  Type["info"] = "info";
  Type["default"] = "default";
  Type["error"] = "error";
  Type["warning"] = "warning";
  Type["success"] = "success";
})(Type || (Type = {}));

var Size;

(function (Size) {
  Size["normal"] = "normal";
  Size["small"] = "small";
  Size["large"] = "large";
})(Size || (Size = {}));

/* harmony default export */ var package_button = __webpack_exports__["c"] = (button_button);

/***/ }),

/***/ "c96a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var createHTML = __webpack_require__("857a");
var forcedStringHTMLMethod = __webpack_require__("af03");

// `String.prototype.small` method
// https://tc39.es/ecma262/#sec-string.prototype.small
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('small') }, {
  small: function small() {
    return createHTML(this, 'small', '', '');
  }
});


/***/ })

}]);