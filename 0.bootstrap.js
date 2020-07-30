(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/snippets/wasm-nu-5001c71b3059696d/www/module.js":
/*!**************************************************************!*\
  !*** ../pkg/snippets/wasm-nu-5001c71b3059696d/www/module.js ***!
  \**************************************************************/
/*! exports provided: random, writefile, readfile, readdir, getPlatform, getBrowserCookiesEnabled, getUserAgent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"random\", function() { return random; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"writefile\", function() { return writefile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"readfile\", function() { return readfile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"readdir\", function() { return readdir; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPlatform\", function() { return getPlatform; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBrowserCookiesEnabled\", function() { return getBrowserCookiesEnabled; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUserAgent\", function() { return getUserAgent; });\nfunction getRandomInt(max) {\n  return Math.floor(Math.random() * Math.floor(max));\n}\n\nfunction random(start, end) {\n  return getRandomInt(end) + start;\n}\n\nfunction writefile(filename, contents) {\n  // Otherwise, BrowserFS is ready-to-use!\n  var fs = BrowserFS.BFSRequire(\"fs\");\n  fs.writeFileSync(filename, contents);\n}\n\nfunction readfile(filename) {\n  // Otherwise, BrowserFS is ready-to-use!\n  try {\n    var fs = BrowserFS.BFSRequire(\"fs\");\n    let contents = fs.readFileSync(filename);\n\n    let output = JSON.stringify({ Ok: contents });\n    return output;\n  } catch (e) {\n    let output = JSON.stringify({ Err: \"file not found\" });\n    return output;\n  }\n}\n\nfunction readdir(path) {\n  let results = [];\n\n  try {\n    var fs = BrowserFS.BFSRequire(\"fs\");\n    let contents = fs.readdirSync(path);\n\n    return JSON.stringify(contents);\n  } catch (e) {\n    let output = JSON.stringify({ error: e });\n    return output;\n  }\n}\n\nfunction getPlatform() {\n  return navigator.platform;\n}\n\nfunction getBrowserCookiesEnabled() {\n  return navigator.cookieEnabled;\n}\n\nfunction getUserAgent() {\n  return navigator.userAgent;\n}\n\n\n//# sourceURL=webpack:///../pkg/snippets/wasm-nu-5001c71b3059696d/www/module.js?");

/***/ }),

/***/ "../pkg/wasm_nu.js":
/*!*************************!*\
  !*** ../pkg/wasm_nu.js ***!
  \*************************/
/*! exports provided: run_nu, __wbindgen_object_drop_ref, __wbindgen_string_new, __wbg_readfile_e0e5a7f1684b16fb, __wbg_readdir_b761a4022877b2e0, __wbg_random_d00069ff62f1e55f, __wbg_getPlatform_3f8b01b5db808687, __wbg_getUserAgent_ce110b7d9a4fd729, __wbg_log_61ea781bd002cc41, __wbg_new_59cb74e423758ede, __wbg_stack_558ba5917b466edd, __wbg_error_4bb6c2a97407129a, __wbindgen_cb_drop, __wbg_call_0dad7db75ec90ae7, __wbg_new_7039bf8b99f049e1, __wbg_resolve_4df26938859b92e3, __wbg_then_ffb6e71f7a6735ad, __wbindgen_throw, __wbindgen_closure_wrapper458 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wasm_nu_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_nu_bg.wasm */ \"../pkg/wasm_nu_bg.wasm\");\n/* harmony import */ var _wasm_nu_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wasm_nu_bg.js */ \"../pkg/wasm_nu_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"run_nu\", function() { return _wasm_nu_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"run_nu\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return _wasm_nu_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_object_drop_ref\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return _wasm_nu_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_string_new\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_readfile_e0e5a7f1684b16fb\", function() { return _wasm_nu_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_readfile_e0e5a7f1684b16fb\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_readdir_b761a4022877b2e0\", function() { return _wasm_nu_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_readdir_b761a4022877b2e0\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_random_d00069ff62f1e55f\", function() { return _wasm_nu_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_random_d00069ff62f1e55f\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getPlatform_3f8b01b5db808687\", function() { return _wasm_nu_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_getPlatform_3f8b01b5db808687\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getUserAgent_ce110b7d9a4fd729\", function() { return _wasm_nu_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_getUserAgent_ce110b7d9a4fd729\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_log_61ea781bd002cc41\", function() { return _wasm_nu_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_log_61ea781bd002cc41\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_59cb74e423758ede\", function() { return _wasm_nu_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_new_59cb74e423758ede\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_stack_558ba5917b466edd\", function() { return _wasm_nu_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_stack_558ba5917b466edd\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_error_4bb6c2a97407129a\", function() { return _wasm_nu_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_error_4bb6c2a97407129a\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_cb_drop\", function() { return _wasm_nu_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_cb_drop\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_0dad7db75ec90ae7\", function() { return _wasm_nu_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_call_0dad7db75ec90ae7\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_7039bf8b99f049e1\", function() { return _wasm_nu_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_new_7039bf8b99f049e1\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_resolve_4df26938859b92e3\", function() { return _wasm_nu_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_resolve_4df26938859b92e3\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_then_ffb6e71f7a6735ad\", function() { return _wasm_nu_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_then_ffb6e71f7a6735ad\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _wasm_nu_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_closure_wrapper458\", function() { return _wasm_nu_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_closure_wrapper458\"]; });\n\n\n\n\n//# sourceURL=webpack:///../pkg/wasm_nu.js?");

/***/ }),

/***/ "../pkg/wasm_nu_bg.js":
/*!****************************!*\
  !*** ../pkg/wasm_nu_bg.js ***!
  \****************************/
/*! exports provided: run_nu, __wbindgen_object_drop_ref, __wbindgen_string_new, __wbg_readfile_e0e5a7f1684b16fb, __wbg_readdir_b761a4022877b2e0, __wbg_random_d00069ff62f1e55f, __wbg_getPlatform_3f8b01b5db808687, __wbg_getUserAgent_ce110b7d9a4fd729, __wbg_log_61ea781bd002cc41, __wbg_new_59cb74e423758ede, __wbg_stack_558ba5917b466edd, __wbg_error_4bb6c2a97407129a, __wbindgen_cb_drop, __wbg_call_0dad7db75ec90ae7, __wbg_new_7039bf8b99f049e1, __wbg_resolve_4df26938859b92e3, __wbg_then_ffb6e71f7a6735ad, __wbindgen_throw, __wbindgen_closure_wrapper458 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"run_nu\", function() { return run_nu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return __wbindgen_string_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_readfile_e0e5a7f1684b16fb\", function() { return __wbg_readfile_e0e5a7f1684b16fb; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_readdir_b761a4022877b2e0\", function() { return __wbg_readdir_b761a4022877b2e0; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_random_d00069ff62f1e55f\", function() { return __wbg_random_d00069ff62f1e55f; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getPlatform_3f8b01b5db808687\", function() { return __wbg_getPlatform_3f8b01b5db808687; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getUserAgent_ce110b7d9a4fd729\", function() { return __wbg_getUserAgent_ce110b7d9a4fd729; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_log_61ea781bd002cc41\", function() { return __wbg_log_61ea781bd002cc41; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_59cb74e423758ede\", function() { return __wbg_new_59cb74e423758ede; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_stack_558ba5917b466edd\", function() { return __wbg_stack_558ba5917b466edd; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_error_4bb6c2a97407129a\", function() { return __wbg_error_4bb6c2a97407129a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_cb_drop\", function() { return __wbindgen_cb_drop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_0dad7db75ec90ae7\", function() { return __wbg_call_0dad7db75ec90ae7; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_7039bf8b99f049e1\", function() { return __wbg_new_7039bf8b99f049e1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_resolve_4df26938859b92e3\", function() { return __wbg_resolve_4df26938859b92e3; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_then_ffb6e71f7a6735ad\", function() { return __wbg_then_ffb6e71f7a6735ad; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_closure_wrapper458\", function() { return __wbindgen_closure_wrapper458; });\n/* harmony import */ var _snippets_wasm_nu_5001c71b3059696d_www_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snippets/wasm-nu-5001c71b3059696d/www/module.js */ \"../pkg/snippets/wasm-nu-5001c71b3059696d/www/module.js\");\n/* harmony import */ var _wasm_nu_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wasm_nu_bg.wasm */ \"../pkg/wasm_nu_bg.wasm\");\n\n\n\nconst heap = new Array(32).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nfunction getObject(idx) { return heap[idx]; }\n\nlet heap_next = heap.length;\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _wasm_nu_bg_wasm__WEBPACK_IMPORTED_MODULE_1__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_wasm_nu_bg_wasm__WEBPACK_IMPORTED_MODULE_1__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction makeMutClosure(arg0, arg1, dtor, f) {\n    const state = { a: arg0, b: arg1, cnt: 1, dtor };\n    const real = (...args) => {\n        // First up with a closure we increment the internal reference\n        // count. This ensures that the Rust closure environment won't\n        // be deallocated while we're invoking it.\n        state.cnt++;\n        const a = state.a;\n        state.a = 0;\n        try {\n            return f(a, state.b, ...args);\n        } finally {\n            if (--state.cnt === 0) {\n                _wasm_nu_bg_wasm__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_export_0\"].get(state.dtor)(a, state.b);\n\n            } else {\n                state.a = a;\n            }\n        }\n    };\n    real.original = state;\n\n    return real;\n}\nfunction __wbg_adapter_10(arg0, arg1, arg2) {\n    _wasm_nu_bg_wasm__WEBPACK_IMPORTED_MODULE_1__[\"_dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h5fe616707d71fc36\"](arg0, arg1, addHeapObject(arg2));\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n/**\n* @param {string} line\n* @returns {any}\n*/\nfunction run_nu(line) {\n    var ptr0 = passStringToWasm0(line, _wasm_nu_bg_wasm__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_malloc\"], _wasm_nu_bg_wasm__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_realloc\"]);\n    var len0 = WASM_VECTOR_LEN;\n    var ret = _wasm_nu_bg_wasm__WEBPACK_IMPORTED_MODULE_1__[\"run_nu\"](ptr0, len0);\n    return takeObject(ret);\n}\n\nlet cachegetInt32Memory0 = null;\nfunction getInt32Memory0() {\n    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _wasm_nu_bg_wasm__WEBPACK_IMPORTED_MODULE_1__[\"memory\"].buffer) {\n        cachegetInt32Memory0 = new Int32Array(_wasm_nu_bg_wasm__WEBPACK_IMPORTED_MODULE_1__[\"memory\"].buffer);\n    }\n    return cachegetInt32Memory0;\n}\n\nfunction handleError(f) {\n    return function () {\n        try {\n            return f.apply(this, arguments);\n\n        } catch (e) {\n            _wasm_nu_bg_wasm__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_exn_store\"](addHeapObject(e));\n        }\n    };\n}\nfunction __wbg_adapter_34(arg0, arg1, arg2, arg3) {\n    _wasm_nu_bg_wasm__WEBPACK_IMPORTED_MODULE_1__[\"wasm_bindgen__convert__closures__invoke2_mut__hef1b2e8e7f7b7258\"](arg0, arg1, addHeapObject(arg2), addHeapObject(arg3));\n}\n\nconst __wbindgen_object_drop_ref = function(arg0) {\n    takeObject(arg0);\n};\n\nconst __wbindgen_string_new = function(arg0, arg1) {\n    var ret = getStringFromWasm0(arg0, arg1);\n    return addHeapObject(ret);\n};\n\nconst __wbg_readfile_e0e5a7f1684b16fb = function(arg0, arg1, arg2) {\n    try {\n        var ret = Object(_snippets_wasm_nu_5001c71b3059696d_www_module_js__WEBPACK_IMPORTED_MODULE_0__[\"readfile\"])(getStringFromWasm0(arg1, arg2));\n        var ptr0 = passStringToWasm0(ret, _wasm_nu_bg_wasm__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_malloc\"], _wasm_nu_bg_wasm__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_realloc\"]);\n        var len0 = WASM_VECTOR_LEN;\n        getInt32Memory0()[arg0 / 4 + 1] = len0;\n        getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n    } finally {\n        _wasm_nu_bg_wasm__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_free\"](arg1, arg2);\n    }\n};\n\nconst __wbg_readdir_b761a4022877b2e0 = function(arg0, arg1, arg2) {\n    try {\n        var ret = Object(_snippets_wasm_nu_5001c71b3059696d_www_module_js__WEBPACK_IMPORTED_MODULE_0__[\"readdir\"])(getStringFromWasm0(arg1, arg2));\n        var ptr0 = passStringToWasm0(ret, _wasm_nu_bg_wasm__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_malloc\"], _wasm_nu_bg_wasm__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_realloc\"]);\n        var len0 = WASM_VECTOR_LEN;\n        getInt32Memory0()[arg0 / 4 + 1] = len0;\n        getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n    } finally {\n        _wasm_nu_bg_wasm__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_free\"](arg1, arg2);\n    }\n};\n\nconst __wbg_random_d00069ff62f1e55f = function(arg0, arg1) {\n    var ret = Object(_snippets_wasm_nu_5001c71b3059696d_www_module_js__WEBPACK_IMPORTED_MODULE_0__[\"random\"])(arg0 >>> 0, arg1 >>> 0);\n    return ret;\n};\n\nconst __wbg_getPlatform_3f8b01b5db808687 = function(arg0) {\n    var ret = Object(_snippets_wasm_nu_5001c71b3059696d_www_module_js__WEBPACK_IMPORTED_MODULE_0__[\"getPlatform\"])();\n    var ptr0 = passStringToWasm0(ret, _wasm_nu_bg_wasm__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_malloc\"], _wasm_nu_bg_wasm__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_realloc\"]);\n    var len0 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len0;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n};\n\nconst __wbg_getUserAgent_ce110b7d9a4fd729 = function(arg0) {\n    var ret = Object(_snippets_wasm_nu_5001c71b3059696d_www_module_js__WEBPACK_IMPORTED_MODULE_0__[\"getUserAgent\"])();\n    var ptr0 = passStringToWasm0(ret, _wasm_nu_bg_wasm__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_malloc\"], _wasm_nu_bg_wasm__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_realloc\"]);\n    var len0 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len0;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n};\n\nconst __wbg_log_61ea781bd002cc41 = function(arg0) {\n    console.log(getObject(arg0));\n};\n\nconst __wbg_new_59cb74e423758ede = function() {\n    var ret = new Error();\n    return addHeapObject(ret);\n};\n\nconst __wbg_stack_558ba5917b466edd = function(arg0, arg1) {\n    var ret = getObject(arg1).stack;\n    var ptr0 = passStringToWasm0(ret, _wasm_nu_bg_wasm__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_malloc\"], _wasm_nu_bg_wasm__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_realloc\"]);\n    var len0 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len0;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n};\n\nconst __wbg_error_4bb6c2a97407129a = function(arg0, arg1) {\n    try {\n        console.error(getStringFromWasm0(arg0, arg1));\n    } finally {\n        _wasm_nu_bg_wasm__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_free\"](arg0, arg1);\n    }\n};\n\nconst __wbindgen_cb_drop = function(arg0) {\n    const obj = takeObject(arg0).original;\n    if (obj.cnt-- == 1) {\n        obj.a = 0;\n        return true;\n    }\n    var ret = false;\n    return ret;\n};\n\nconst __wbg_call_0dad7db75ec90ae7 = handleError(function(arg0, arg1, arg2) {\n    var ret = getObject(arg0).call(getObject(arg1), getObject(arg2));\n    return addHeapObject(ret);\n});\n\nconst __wbg_new_7039bf8b99f049e1 = function(arg0, arg1) {\n    try {\n        var state0 = {a: arg0, b: arg1};\n        var cb0 = (arg0, arg1) => {\n            const a = state0.a;\n            state0.a = 0;\n            try {\n                return __wbg_adapter_34(a, state0.b, arg0, arg1);\n            } finally {\n                state0.a = a;\n            }\n        };\n        var ret = new Promise(cb0);\n        return addHeapObject(ret);\n    } finally {\n        state0.a = state0.b = 0;\n    }\n};\n\nconst __wbg_resolve_4df26938859b92e3 = function(arg0) {\n    var ret = Promise.resolve(getObject(arg0));\n    return addHeapObject(ret);\n};\n\nconst __wbg_then_ffb6e71f7a6735ad = function(arg0, arg1) {\n    var ret = getObject(arg0).then(getObject(arg1));\n    return addHeapObject(ret);\n};\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\nconst __wbindgen_closure_wrapper458 = function(arg0, arg1, arg2) {\n    var ret = makeMutClosure(arg0, arg1, 109, __wbg_adapter_10);\n    return addHeapObject(ret);\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../www/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../pkg/wasm_nu_bg.js?");

/***/ }),

/***/ "../pkg/wasm_nu_bg.wasm":
/*!******************************!*\
  !*** ../pkg/wasm_nu_bg.wasm ***!
  \******************************/
/*! exports provided: memory, run_nu, __wbindgen_export_0, _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h5fe616707d71fc36, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_free, __wbindgen_exn_store, wasm_bindgen__convert__closures__invoke2_mut__hef1b2e8e7f7b7258 */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./wasm_nu_bg.js */ \"../pkg/wasm_nu_bg.js\");\n\n/* harmony import */ var m1 = __webpack_require__(/*! ./snippets/wasm-nu-5001c71b3059696d/www/module.js */ \"../pkg/snippets/wasm-nu-5001c71b3059696d/www/module.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/wasm_nu_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var wasm_nu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wasm-nu */ \"../pkg/wasm_nu.js\");\n\n\nconst data = [\n  { name: \"Bob\", age: 25 },\n  { name: \"Fred\", age: 35 },\n];\nconst examples = [\n  {\n    label: \"process json\",\n    command: `echo '${JSON.stringify(data)}' | from json`,\n  },\n  {\n    label: \"process json, with where filter\",\n    command: `echo '${JSON.stringify(data)}' | from json | where age > 30`,\n  },\n  {\n    label: \"process json, format as strings\",\n    command: `echo '${JSON.stringify(\n      data\n    )}' | from json | format \"{name} is {age} old\"`,\n  },\n];\n\nasync function run_nu(input) {\n  return await wasm_nu__WEBPACK_IMPORTED_MODULE_0__[\"run_nu\"](input);\n}\n\nvar nuinput = /** @type HTMLTextAreaElement */ (document.getElementById(\n  \"nuinput\"\n));\n\nasync function runCommand() {\n  var inputsRaw = nuinput.value.split(\"\\n\").filter(Boolean);\n  var inputs = inputsRaw.map((input) => {\n    return run_nu(input + \"| to html --html_color --theme 'blulocolight'\");\n  });\n  let outputs = await Promise.all(inputs);\n\n  document.getElementById(\"demo\").innerHTML = outputs\n    .map((rawOutput, index) => {\n      var output = JSON.parse(rawOutput);\n      if (output.Ok) {\n        var result = output.Ok.replace(\n          /<html><body>(.*)<\\/body><\\/html>/,\n          \"$1\"\n        );\n        // console.log(result);\n        if (result) {\n          return result;\n        }\n        return \"[no output]\";\n      }\n      const error = output.Error.error;\n      console.log(error);\n      return `<div class=\"output-error\">\n        <span class=\"output-error--inline\">error</span>: ${\n          (error.UntaggedRuntimeError && error.UntaggedRuntimeError.reason) ||\n          error.Diagnostic.diagnostic.message\n        }\n        <div>${index + 1}: ${inputsRaw[index]}</div>\n        ${\n          error.Diagnostic &&\n          error.Diagnostic.diagnostic.labels.map((label) => {\n            var padding = \"&nbsp;\".repeat(label.range.start + 3);\n            var marker = \"^\".repeat(label.range.end - label.range.start);\n            return `<div class=\"output-error--inline\">${padding}${marker} ${label.message}</div>`;\n          })\n        }\n      </div>`;\n    })\n    .join(\"<br/>\");\n  if (inputsRaw.some((input) => input === \"help commands\")) {\n    const commandCells = document.querySelectorAll(\n      \"tr:not(:first-child) td:first-child\"\n    );\n    for (const commandCell of commandCells) {\n      const command = commandCell.textContent;\n      const link = document.createElement(\"a\");\n      link.textContent = command;\n      link.href = `#${command}`;\n      link.addEventListener(\"click\", () => {\n        nuinput.value = `${command} --help`;\n        runCommand();\n      });\n      commandCell.textContent = \"\";\n      commandCell.appendChild(link);\n    }\n  }\n}\n\ndocument.getElementById(\"run-nu\").addEventListener(\"click\", (event) => {\n  runCommand();\n});\n\nconst examplesContainer = document.getElementById(\"examples\");\nfor (const example of examples) {\n  const button = document.createElement(\"button\");\n  button.setAttribute(\"data-command\", example.command);\n  button.getAttribute;\n  button.textContent = example.label;\n  examplesContainer.appendChild(button);\n}\nexamplesContainer.addEventListener(\"click\", (event) => {\n  nuinput.value = /** @type HTMLButtonElement */ (event.target).getAttribute(\n    \"data-command\"\n  );\n  runCommand();\n});\n\nnuinput.addEventListener(\"keydown\", (event) => {\n  if (event.key == \"Enter\") {\n    if (event.metaKey || event.ctrlKey) {\n      const startPos = nuinput.selectionStart;\n      const endPos = nuinput.selectionEnd;\n      nuinput.value =\n        nuinput.value.substring(0, nuinput.selectionStart) +\n        \"\\n\" +\n        nuinput.value.substring(nuinput.selectionEnd, nuinput.value.length);\n      nuinput.selectionStart = startPos + 1;\n      nuinput.selectionEnd = startPos + 1;\n    } else {\n      event.preventDefault();\n      try {\n        runCommand();\n      } catch (e) {\n        console.log(e);\n      }\n    }\n  }\n});\n\nrunCommand();\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ })

}]);