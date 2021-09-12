/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 258);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(36);
} else {}


/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.FIND_PREV = exports.FIND_NEXT = exports.FIND_START = exports.URLS_PASTE = exports.URLS_YANK = exports.ZOOM_NEUTRAL = exports.ZOOM_OUT = exports.ZOOM_IN = exports.TAB_TOGGLE_READER = exports.TAB_DUPLICATE = exports.TAB_TOGGLE_PINNED = exports.TAB_UNPIN = exports.TAB_PIN = exports.TAB_RELOAD = exports.TAB_PREV_SEL = exports.TAB_LAST = exports.TAB_FIRST = exports.TAB_NEXT = exports.TAB_PREV = exports.TAB_REOPEN = exports.TAB_CLOSE_RIGHT = exports.TAB_CLOSE_FORCE = exports.TAB_CLOSE = exports.PAGE_HOME = exports.PAGE_SOURCE = exports.FOCUS_INPUT = exports.NAVIGATE_ROOT = exports.NAVIGATE_PARENT = exports.NAVIGATE_LINK_NEXT = exports.NAVIGATE_LINK_PREV = exports.NAVIGATE_HISTORY_NEXT = exports.NAVIGATE_HISTORY_PREV = exports.FOLLOW_START = exports.SCROLL_END = exports.SCROLL_HOME = exports.SCROLL_BOTTOM = exports.SCROLL_TOP = exports.SCROLL_PAGES = exports.SCROLL_HORIZONALLY = exports.SCROLL_VERTICALLY = exports.COMMAND_SHOW_ADDBOOKMARK = exports.COMMAND_SHOW_BUFFER = exports.COMMAND_SHOW_WINOPEN = exports.COMMAND_SHOW_TABOPEN = exports.COMMAND_SHOW_OPEN = exports.COMMAND_SHOW = exports.ADDON_TOGGLE_ENABLED = exports.ADDON_DISABLE = exports.ADDON_ENABLE = exports.CANCEL = void 0;
exports.isNRepeatable = exports.valueOf = exports.INTERNAL_OPEN_URL = exports.REPEAT_LAST = exports.MARK_JUMP_PREFIX = exports.MARK_SET_PREFIX = void 0;
exports.CANCEL = "cancel";
exports.ADDON_ENABLE = "addon.enable";
exports.ADDON_DISABLE = "addon.disable";
exports.ADDON_TOGGLE_ENABLED = "addon.toggle.enabled";
exports.COMMAND_SHOW = "command.show";
exports.COMMAND_SHOW_OPEN = "command.show.open";
exports.COMMAND_SHOW_TABOPEN = "command.show.tabopen";
exports.COMMAND_SHOW_WINOPEN = "command.show.winopen";
exports.COMMAND_SHOW_BUFFER = "command.show.buffer";
exports.COMMAND_SHOW_ADDBOOKMARK = "command.show.addbookmark";
exports.SCROLL_VERTICALLY = "scroll.vertically";
exports.SCROLL_HORIZONALLY = "scroll.horizonally";
exports.SCROLL_PAGES = "scroll.pages";
exports.SCROLL_TOP = "scroll.top";
exports.SCROLL_BOTTOM = "scroll.bottom";
exports.SCROLL_HOME = "scroll.home";
exports.SCROLL_END = "scroll.end";
exports.FOLLOW_START = "follow.start";
exports.NAVIGATE_HISTORY_PREV = "navigate.history.prev";
exports.NAVIGATE_HISTORY_NEXT = "navigate.history.next";
exports.NAVIGATE_LINK_PREV = "navigate.link.prev";
exports.NAVIGATE_LINK_NEXT = "navigate.link.next";
exports.NAVIGATE_PARENT = "navigate.parent";
exports.NAVIGATE_ROOT = "navigate.root";
exports.FOCUS_INPUT = "focus.input";
exports.PAGE_SOURCE = "page.source";
exports.PAGE_HOME = "page.home";
exports.TAB_CLOSE = "tabs.close";
exports.TAB_CLOSE_FORCE = "tabs.close.force";
exports.TAB_CLOSE_RIGHT = "tabs.close.right";
exports.TAB_REOPEN = "tabs.reopen";
exports.TAB_PREV = "tabs.prev";
exports.TAB_NEXT = "tabs.next";
exports.TAB_FIRST = "tabs.first";
exports.TAB_LAST = "tabs.last";
exports.TAB_PREV_SEL = "tabs.prevsel";
exports.TAB_RELOAD = "tabs.reload";
exports.TAB_PIN = "tabs.pin";
exports.TAB_UNPIN = "tabs.unpin";
exports.TAB_TOGGLE_PINNED = "tabs.pin.toggle";
exports.TAB_DUPLICATE = "tabs.duplicate";
exports.TAB_TOGGLE_READER = "tabs.reader.toggle";
exports.ZOOM_IN = "zoom.in";
exports.ZOOM_OUT = "zoom.out";
exports.ZOOM_NEUTRAL = "zoom.neutral";
exports.URLS_YANK = "urls.yank";
exports.URLS_PASTE = "urls.paste";
exports.FIND_START = "find.start";
exports.FIND_NEXT = "find.next";
exports.FIND_PREV = "find.prev";
exports.MARK_SET_PREFIX = "mark.set.prefix";
exports.MARK_JUMP_PREFIX = "mark.jump.prefix";
exports.REPEAT_LAST = "repeat.last";
exports.INTERNAL_OPEN_URL = "internal.open.url";
const assertOptionalBoolean = (obj, name) => {
    if (Object.prototype.hasOwnProperty.call(obj, name) &&
        typeof obj[name] !== "boolean") {
        throw new TypeError(`Not a boolean parameter: '${name} (${typeof obj[name]})'`);
    }
};
const assertOptionalString = (obj, name, values) => {
    if (Object.prototype.hasOwnProperty.call(obj, name)) {
        const value = obj[name];
        if (typeof value !== "string") {
            throw new TypeError(`Not a string parameter: '${name}' (${typeof value})`);
        }
        if (values && values.length && values.indexOf(value) === -1) {
            throw new TypeError(`Invalid parameter for '${name}': '${value}'`);
        }
    }
};
const assertRequiredNumber = (obj, name) => {
    if (!Object.prototype.hasOwnProperty.call(obj, name) ||
        typeof obj[name] !== "number") {
        throw new TypeError(`Missing number parameter: '${name}`);
    }
};
const assertRequiredString = (obj, name) => {
    if (!Object.prototype.hasOwnProperty.call(obj, name) ||
        typeof obj[name] !== "string") {
        throw new TypeError(`Missing string parameter: '${name}`);
    }
};
const valueOf = (o) => {
    if (!Object.prototype.hasOwnProperty.call(o, "type")) {
        throw new TypeError(`Missing 'type' field`);
    }
    switch (o.type) {
        case exports.COMMAND_SHOW_OPEN:
        case exports.COMMAND_SHOW_TABOPEN:
        case exports.COMMAND_SHOW_WINOPEN:
        case exports.COMMAND_SHOW_ADDBOOKMARK:
            assertOptionalBoolean(o, "alter");
            return { type: o.type, alter: Boolean(o.alter) };
        case exports.SCROLL_VERTICALLY:
        case exports.SCROLL_HORIZONALLY:
        case exports.SCROLL_PAGES:
            assertRequiredNumber(o, "count");
            return { type: o.type, count: Number(o.count) };
        case exports.FOLLOW_START:
            assertOptionalBoolean(o, "newTab");
            assertOptionalBoolean(o, "background");
            return {
                type: exports.FOLLOW_START,
                newTab: Boolean(typeof o.newTab === "undefined" ? false : o.newTab),
                background: Boolean(typeof o.background === "undefined" ? true : o.background),
            };
        case exports.PAGE_HOME:
            assertOptionalBoolean(o, "newTab");
            return {
                type: exports.PAGE_HOME,
                newTab: Boolean(typeof o.newTab === "undefined" ? false : o.newTab),
            };
        case exports.TAB_CLOSE:
            assertOptionalString(o, "select", ["left", "right"]);
            return {
                type: exports.TAB_CLOSE,
                select: typeof o.select === "undefined" ? "right" : o.select,
            };
        case exports.TAB_RELOAD:
            assertOptionalBoolean(o, "cache");
            return {
                type: exports.TAB_RELOAD,
                cache: Boolean(typeof o.cache === "undefined" ? false : o.cache),
            };
        case exports.URLS_PASTE:
            assertOptionalBoolean(o, "newTab");
            return {
                type: exports.URLS_PASTE,
                newTab: Boolean(typeof o.newTab === "undefined" ? false : o.newTab),
            };
        case exports.INTERNAL_OPEN_URL:
            assertOptionalBoolean(o, "newTab");
            assertOptionalBoolean(o, "newWindow");
            assertOptionalBoolean(o, "background");
            assertRequiredString(o, "url");
            return {
                type: exports.INTERNAL_OPEN_URL,
                url: o.url,
                newTab: Boolean(typeof o.newTab === "undefined" ? false : o.newTab),
                newWindow: Boolean(typeof o.newWindow === "undefined" ? false : o.newWindow),
                background: Boolean(typeof o.background === "undefined" ? true : o.background),
            };
        case exports.CANCEL:
        case exports.ADDON_ENABLE:
        case exports.ADDON_DISABLE:
        case exports.ADDON_TOGGLE_ENABLED:
        case exports.COMMAND_SHOW:
        case exports.COMMAND_SHOW_BUFFER:
        case exports.SCROLL_TOP:
        case exports.SCROLL_BOTTOM:
        case exports.SCROLL_HOME:
        case exports.SCROLL_END:
        case exports.NAVIGATE_HISTORY_PREV:
        case exports.NAVIGATE_HISTORY_NEXT:
        case exports.NAVIGATE_LINK_PREV:
        case exports.NAVIGATE_LINK_NEXT:
        case exports.NAVIGATE_PARENT:
        case exports.NAVIGATE_ROOT:
        case exports.FOCUS_INPUT:
        case exports.PAGE_SOURCE:
        case exports.TAB_CLOSE_FORCE:
        case exports.TAB_CLOSE_RIGHT:
        case exports.TAB_REOPEN:
        case exports.TAB_PREV:
        case exports.TAB_NEXT:
        case exports.TAB_FIRST:
        case exports.TAB_LAST:
        case exports.TAB_PREV_SEL:
        case exports.TAB_PIN:
        case exports.TAB_UNPIN:
        case exports.TAB_TOGGLE_PINNED:
        case exports.TAB_DUPLICATE:
        case exports.TAB_TOGGLE_READER:
        case exports.ZOOM_IN:
        case exports.ZOOM_OUT:
        case exports.ZOOM_NEUTRAL:
        case exports.URLS_YANK:
        case exports.FIND_START:
        case exports.FIND_NEXT:
        case exports.FIND_PREV:
        case exports.MARK_SET_PREFIX:
        case exports.MARK_JUMP_PREFIX:
        case exports.REPEAT_LAST:
            return { type: o.type };
    }
    throw new TypeError("Unknown operation type: " + o.type);
};
exports.valueOf = valueOf;
const isNRepeatable = (type) => {
    switch (type) {
        case exports.SCROLL_VERTICALLY:
        case exports.SCROLL_HORIZONALLY:
        case exports.SCROLL_PAGES:
        case exports.NAVIGATE_HISTORY_PREV:
        case exports.NAVIGATE_HISTORY_NEXT:
        case exports.NAVIGATE_PARENT:
        case exports.TAB_CLOSE:
        case exports.TAB_CLOSE_FORCE:
        case exports.TAB_CLOSE_RIGHT:
        case exports.TAB_REOPEN:
        case exports.TAB_PREV:
        case exports.TAB_NEXT:
        case exports.TAB_DUPLICATE:
        case exports.ZOOM_IN:
        case exports.ZOOM_OUT:
        case exports.URLS_PASTE:
        case exports.FIND_NEXT:
        case exports.FIND_PREV:
        case exports.REPEAT_LAST:
            return true;
    }
    return false;
};
exports.isNRepeatable = isNRepeatable;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.valueOf = exports.NAVIGATE_LINK_PREV = exports.NAVIGATE_LINK_NEXT = exports.NAVIGATE_HISTORY_PREV = exports.NAVIGATE_HISTORY_NEXT = exports.CONSOLE_FRAME_MESSAGE = exports.SETTINGS_QUERY = exports.SETTINGS_CHANGED = exports.OPEN_URL = exports.ADDON_TOGGLE_ENABLED = exports.ADDON_ENABLED_RESPONSE = exports.ADDON_ENABLED_QUERY = exports.FIND_CLEAR_SELECTION = exports.FIND_PREV = exports.FIND_NEXT = exports.TAB_SCROLL_TO = exports.MARK_JUMP_GLOBAL = exports.MARK_SET_GLOBAL = exports.FOLLOW_KEY_PRESS = exports.FOLLOW_ACTIVATE = exports.FOLLOW_REMOVE_HINTS = exports.FOLLOW_SHOW_HINTS = exports.FOLLOW_CREATE_HINTS = exports.FOLLOW_RESPONSE_COUNT_TARGETS = exports.FOLLOW_REQUEST_COUNT_TARGETS = exports.FOLLOW_START = exports.CONSOLE_RESIZE = exports.CONSOLE_GET_PROPERTIES = exports.CONSOLE_REQUEST_TABS = exports.CONSOLE_REQUEST_HISTORY = exports.CONSOLE_REQUEST_BOOKMARKS = exports.CONSOLE_REQUEST_SEARCH_ENGINES_MESSAGE = exports.CONSOLE_GET_COMPLETION_TYPES = exports.CONSOLE_HIDE = exports.CONSOLE_SHOW_FIND = exports.CONSOLE_SHOW_INFO = exports.CONSOLE_SHOW_ERROR = exports.CONSOLE_SHOW_COMMAND = exports.CONSOLE_ENTER_FIND = exports.CONSOLE_ENTER_COMMAND = exports.CONSOLE_UNFOCUS = exports.BACKGROUND_OPERATION = void 0;
exports.BACKGROUND_OPERATION = "background.operation";
exports.CONSOLE_UNFOCUS = "console.unfocus";
exports.CONSOLE_ENTER_COMMAND = "console.enter.command";
exports.CONSOLE_ENTER_FIND = "console.enter.find";
exports.CONSOLE_SHOW_COMMAND = "console.show.command";
exports.CONSOLE_SHOW_ERROR = "console.show.error";
exports.CONSOLE_SHOW_INFO = "console.show.info";
exports.CONSOLE_SHOW_FIND = "console.show.find";
exports.CONSOLE_HIDE = "console.hide";
exports.CONSOLE_GET_COMPLETION_TYPES = "console.get.completion.types";
exports.CONSOLE_REQUEST_SEARCH_ENGINES_MESSAGE = "console.qresut.searchEngines";
exports.CONSOLE_REQUEST_BOOKMARKS = "console.request.bookmarks";
exports.CONSOLE_REQUEST_HISTORY = "console.request.history";
exports.CONSOLE_REQUEST_TABS = "console.request.tabs";
exports.CONSOLE_GET_PROPERTIES = "console.get.properties";
exports.CONSOLE_RESIZE = "console.resize";
exports.FOLLOW_START = "follow.start";
exports.FOLLOW_REQUEST_COUNT_TARGETS = "follow.request.count.targets";
exports.FOLLOW_RESPONSE_COUNT_TARGETS = "follow.response.count.targets";
exports.FOLLOW_CREATE_HINTS = "follow.create.hints";
exports.FOLLOW_SHOW_HINTS = "follow.update.hints";
exports.FOLLOW_REMOVE_HINTS = "follow.remove.hints";
exports.FOLLOW_ACTIVATE = "follow.activate";
exports.FOLLOW_KEY_PRESS = "follow.key.press";
exports.MARK_SET_GLOBAL = "mark.set.global";
exports.MARK_JUMP_GLOBAL = "mark.jump.global";
exports.TAB_SCROLL_TO = "tab.scroll.to";
exports.FIND_NEXT = "find.next";
exports.FIND_PREV = "find.prev";
exports.FIND_CLEAR_SELECTION = "find.clear.selection";
exports.ADDON_ENABLED_QUERY = "addon.enabled.query";
exports.ADDON_ENABLED_RESPONSE = "addon.enabled.response";
exports.ADDON_TOGGLE_ENABLED = "addon.toggle.enabled";
exports.OPEN_URL = "open.url";
exports.SETTINGS_CHANGED = "settings.changed";
exports.SETTINGS_QUERY = "settings.query";
exports.CONSOLE_FRAME_MESSAGE = "console.frame.message";
exports.NAVIGATE_HISTORY_NEXT = "navigate.history.next";
exports.NAVIGATE_HISTORY_PREV = "navigate.history.prev";
exports.NAVIGATE_LINK_NEXT = "navigate.link.next";
exports.NAVIGATE_LINK_PREV = "navigate.link.prev";
const valueOf = (o) => {
    switch (o.type) {
        case exports.CONSOLE_UNFOCUS:
        case exports.CONSOLE_ENTER_COMMAND:
        case exports.CONSOLE_ENTER_FIND:
        case exports.CONSOLE_SHOW_COMMAND:
        case exports.CONSOLE_SHOW_ERROR:
        case exports.CONSOLE_SHOW_INFO:
        case exports.CONSOLE_SHOW_FIND:
        case exports.CONSOLE_HIDE:
        case exports.FOLLOW_START:
        case exports.FOLLOW_REQUEST_COUNT_TARGETS:
        case exports.FOLLOW_RESPONSE_COUNT_TARGETS:
        case exports.FOLLOW_CREATE_HINTS:
        case exports.FOLLOW_SHOW_HINTS:
        case exports.FOLLOW_REMOVE_HINTS:
        case exports.FOLLOW_ACTIVATE:
        case exports.FOLLOW_KEY_PRESS:
        case exports.MARK_SET_GLOBAL:
        case exports.MARK_JUMP_GLOBAL:
        case exports.TAB_SCROLL_TO:
        case exports.FIND_NEXT:
        case exports.FIND_PREV:
        case exports.FIND_CLEAR_SELECTION:
        case exports.ADDON_ENABLED_QUERY:
        case exports.ADDON_ENABLED_RESPONSE:
        case exports.ADDON_TOGGLE_ENABLED:
        case exports.OPEN_URL:
        case exports.SETTINGS_CHANGED:
        case exports.SETTINGS_QUERY:
        case exports.CONSOLE_FRAME_MESSAGE:
        case exports.CONSOLE_RESIZE:
        case exports.NAVIGATE_HISTORY_NEXT:
        case exports.NAVIGATE_HISTORY_PREV:
        case exports.NAVIGATE_LINK_NEXT:
        case exports.NAVIGATE_LINK_PREV:
            return o;
    }
    throw new Error("unknown message type: " + o.type);
};
exports.valueOf = valueOf;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerStyleSheet", function() { return Ue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetConsumer", function() { return le; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetContext", function() { return ue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetManager", function() { return ye; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeConsumer", function() { return Le; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ze; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return Ge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__PRIVATE__", function() { return Ze; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGlobalStyle", function() { return $e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return Ae; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStyledComponent", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return We; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTheme", function() { return Xe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return Je; });
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29);
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30);
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__);
function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var g=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},S=function(t){return null!==t&&"object"==typeof t&&"[object Object]"===(t.toString?t.toString():Object.prototype.toString.call(t))&&!Object(react_is__WEBPACK_IMPORTED_MODULE_0__["typeOf"])(t)},w=Object.freeze([]),E=Object.freeze({});function b(e){return"function"==typeof e}function _(e){return false||e.displayName||e.name||"Component"}function N(e){return e&&"string"==typeof e.styledComponentId}var A="undefined"!=typeof process&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",C="5.3.0",I="undefined"!=typeof window&&"HTMLElement"in window,P=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY?"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY:"production"!=="production"),O={},R= false?undefined:{};function D(){for(var e=arguments.length<=0?void 0:arguments[0],t=[],n=1,r=arguments.length;n<r;n+=1)t.push(n<0||arguments.length<=n?void 0:arguments[n]);return t.forEach((function(t){e=e.replace(/%[a-z]/,t)})),e}function j(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw true?new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):"")):undefined}var T=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)(o<<=1)<0&&j(16,""+e);this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var i=r;i<o;i++)this.groupSizes[i]=0}for(var s=this.indexOfGroup(e+1),a=0,c=t.length;a<c;a++)this.tag.insertRule(s,t[a])&&(this.groupSizes[e]++,s++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,i=r;i<o;i++)t+=this.tag.getRule(i)+"/*!sc*/\n";return t},e}(),k=new Map,x=new Map,V=1,B=function(e){if(k.has(e))return k.get(e);for(;x.has(V);)V++;var t=V++;return false&&false,k.set(e,t),x.set(t,e),t},M=function(e){return x.get(e)},z=function(e,t){k.set(e,t),x.set(t,e)},L="style["+A+'][data-styled-version="5.3.0"]',G=new RegExp("^"+A+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),F=function(e,t,n){for(var r,o=n.split(","),i=0,s=o.length;i<s;i++)(r=o[i])&&e.registerName(t,r)},Y=function(e,t){for(var n=t.innerHTML.split("/*!sc*/\n"),r=[],o=0,i=n.length;o<i;o++){var s=n[o].trim();if(s){var a=s.match(G);if(a){var c=0|parseInt(a[1],10),u=a[2];0!==c&&(z(u,c),F(e,u,a[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(s)}}},q=function(){return"undefined"!=typeof window&&void 0!==window.__webpack_nonce__?window.__webpack_nonce__:null},H=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(A))return r}}(n),i=void 0!==o?o.nextSibling:null;r.setAttribute(A,"active"),r.setAttribute("data-styled-version","5.3.0");var s=q();return s&&r.setAttribute("nonce",s),n.insertBefore(r,i),r},$=function(){function e(e){var t=this.element=H(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}j(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),W=function(){function e(e){var t=this.element=H(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),U=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),J=I,X={isServer:!I,useCSSOMInjection:!P},Z=function(){function e(e,t,n){void 0===e&&(e=E),void 0===t&&(t={}),this.options=v({},X,{},e),this.gs=t,this.names=new Map(n),!this.options.isServer&&I&&J&&(J=!1,function(e){for(var t=document.querySelectorAll(L),n=0,r=t.length;n<r;n++){var o=t[n];o&&"active"!==o.getAttribute(A)&&(Y(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this))}e.registerId=function(e){return B(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(v({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,o=t.target,e=n?new U(o):r?new $(o):new W(o),new T(e)));var e,t,n,r,o},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(B(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(B(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(B(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=0;o<n;o++){var i=M(o);if(void 0!==i){var s=e.names.get(i),a=t.getGroup(o);if(void 0!==s&&0!==a.length){var c=A+".g"+o+'[id="'+i+'"]',u="";void 0!==s&&s.forEach((function(e){e.length>0&&(u+=e+",")})),r+=""+a+c+'{content:"'+u+'"}/*!sc*/\n'}}}return r}(this)},e}(),K=/(a)(d)/gi,Q=function(e){return String.fromCharCode(e+(e>25?39:97))};function ee(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Q(t%52)+n;return(Q(t%52)+n).replace(K,"$1-$2")}var te=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ne=function(e){return te(5381,e)};function re(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(b(n)&&!N(n))return!1}return!0}var oe=ne("5.3.0"),ie=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic= true&&(void 0===n||n.isStatic)&&re(e),this.componentId=t,this.baseHash=te(oe,t),this.baseStyle=n,Z.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))o.push(this.staticRulesId);else{var i=Ne(this.rules,e,t,n).join(""),s=ee(te(this.baseHash,i.length)>>>0);if(!t.hasNameForId(r,s)){var a=n(i,"."+s,void 0,r);t.insertRules(r,s,a)}o.push(s),this.staticRulesId=s}else{for(var c=this.rules.length,u=te(this.baseHash,n.hash),l="",d=0;d<c;d++){var h=this.rules[d];if("string"==typeof h)l+=h, false&&(false);else if(h){var p=Ne(h,e,t,n),f=Array.isArray(p)?p.join(""):p;u=te(u,f+d),l+=f}}if(l){var m=ee(u>>>0);if(!t.hasNameForId(r,m)){var y=n(l,"."+m,void 0,r);t.insertRules(r,m,y)}o.push(m)}}return o.join(" ")},e}(),se=/^\s*\/\/.*$/gm,ae=[":","[",".","#"];function ce(e){var t,n,r,o,i=void 0===e?E:e,s=i.options,a=void 0===s?E:s,c=i.plugins,u=void 0===c?w:c,l=new _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"](a),d=[],h=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(n,r,o,i,s,a,c,u,l,d){switch(n){case 1:if(0===l&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===u)return r+"/*|*/";break;case 3:switch(u){case 102:case 112:return e(o[0]+r),"";default:return r+(0===d?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t)}}}((function(e){d.push(e)})),f=function(e,r,i){return 0===r&&-1!==ae.indexOf(i[n.length])||i.match(o)?e:"."+t};function m(e,i,s,a){void 0===a&&(a="&");var c=e.replace(se,""),u=i&&s?s+" "+i+" { "+c+" }":c;return t=a,n=i,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),l(s||!i?"":i,u)}return l.use([].concat(u,[function(e,t,o){2===e&&o.length&&o[0].lastIndexOf(n)>0&&(o[0]=o[0].replace(r,f))},h,function(e){if(-2===e){var t=d;return d=[],t}}])),m.hash=u.length?u.reduce((function(e,t){return t.name||j(15),te(e,t.name)}),5381).toString():"",m}var ue=react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(),le=ue.Consumer,de=react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(),he=(de.Consumer,new Z),pe=ce();function fe(){return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ue)||he}function me(){return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(de)||pe}function ye(e){var t=Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(e.stylisPlugins),n=t[0],i=t[1],c=fe(),u=Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])((function(){var t=c;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target]),l=Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])((function(){return ce({options:{prefix:!e.disableVendorPrefixes},plugins:n})}),[e.disableVendorPrefixes,n]);return Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])((function(){shallowequal__WEBPACK_IMPORTED_MODULE_2___default()(n,e.stylisPlugins)||i(e.stylisPlugins)}),[e.stylisPlugins]),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ue.Provider,{value:u},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(de.Provider,{value:l}, false?undefined:e.children))}var ve=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=pe);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.toString=function(){return j(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=pe),this.name+e.hash},e}(),ge=/([A-Z])/,Se=/([A-Z])/g,we=/^ms-/,Ee=function(e){return"-"+e.toLowerCase()};function be(e){return ge.test(e)?e.replace(Se,Ee).replace(we,"-ms-"):e}var _e=function(e){return null==e||!1===e||""===e};function Ne(e,n,r,o){if(Array.isArray(e)){for(var i,s=[],a=0,c=e.length;a<c;a+=1)""!==(i=Ne(e[a],n,r,o))&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(_e(e))return"";if(N(e))return"."+e.styledComponentId;if(b(e)){if("function"!=typeof(l=e)||l.prototype&&l.prototype.isReactComponent||!n)return e;var u=e(n);return false&&false,Ne(u,n,r,o)}var l;return e instanceof ve?r?(e.inject(r,o),e.getName(o)):e:S(e)?function e(t,n){var r,o,i=[];for(var s in t)t.hasOwnProperty(s)&&!_e(t[s])&&(S(t[s])?i.push.apply(i,e(t[s],s)):b(t[s])?i.push(be(s)+":",t[s],";"):i.push(be(s)+": "+(r=s,null==(o=t[s])||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||r in _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]?String(o).trim():o+"px")+";"));return n?[n+" {"].concat(i,["}"]):i}(e):e.toString()}function Ae(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return b(e)||S(e)?Ne(g(w,[e].concat(n))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:Ne(g(e,n))}var Ce=/invalid hook call/i,Ie=new Set,Pe=function(e,t){if(false){ var n; }},Oe=function(e,t,n){return void 0===n&&(n=E),e.theme!==n.theme&&e.theme||t||n.theme},Re=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,De=/(^-|-$)/g;function je(e){return e.replace(Re,"-").replace(De,"")}var Te=function(e){return ee(ne(e)>>>0)};function ke(e){return"string"==typeof e&&( true||false)}var xe=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},Ve=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function Be(e,t,n){var r=e[n];xe(t)&&xe(r)?Me(r,t):e[n]=t}function Me(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,i=n;o<i.length;o++){var s=i[o];if(xe(s))for(var a in s)Ve(a)&&Be(e,s[a],a)}return e}var ze=react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(),Le=ze.Consumer;function Ge(e){var t=Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ze),n=Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])((function(){return function(e,t){if(!e)return j(14);if(b(e)){var n=e(t);return true?n:undefined}return Array.isArray(e)||"object"!=typeof e?j(8):t?v({},t,{},e):e}(e.theme,t)}),[e.theme,t]);return e.children?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ze.Provider,{value:n},e.children):null}var Fe={};function Ye(e,t,n){var o=N(e),s=!ke(e),a=t.attrs,c=void 0===a?w:a,d=t.componentId,h=void 0===d?function(e,t){var n="string"!=typeof e?"sc":je(e);Fe[n]=(Fe[n]||0)+1;var r=n+"-"+Te("5.3.0"+n+Fe[n]);return t?t+"-"+r:r}(t.displayName,t.parentComponentId):d,p=t.displayName,f=void 0===p?function(e){return ke(e)?"styled."+e:"Styled("+_(e)+")"}(e):p,g=t.displayName&&t.componentId?je(t.displayName)+"-"+t.componentId:t.componentId||h,S=o&&e.attrs?Array.prototype.concat(e.attrs,c).filter(Boolean):c,A=t.shouldForwardProp;o&&e.shouldForwardProp&&(A=t.shouldForwardProp?function(n,r,o){return e.shouldForwardProp(n,r,o)&&t.shouldForwardProp(n,r,o)}:e.shouldForwardProp);var C,I=new ie(n,g,o?e.componentStyle:void 0),P=I.isStatic&&0===c.length,O=function(e,t){return function(e,t,n,r){var o=e.attrs,s=e.componentStyle,a=e.defaultProps,c=e.foldedComponentIds,d=e.shouldForwardProp,h=e.styledComponentId,p=e.target; false&&false;var f=function(e,t,n){void 0===e&&(e=E);var r=v({},t,{theme:e}),o={};return n.forEach((function(e){var t,n,i,s=e;for(t in b(s)&&(s=s(r)),s)r[t]=o[t]="className"===t?(n=o[t],i=s[t],n&&i?n+" "+i:n||i):s[t]})),[r,o]}(Oe(t,Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ze),a)||E,t,o),y=f[0],g=f[1],S=function(e,t,n,r){var o=fe(),i=me(),s=t?e.generateAndInjectStyles(E,o,i):e.generateAndInjectStyles(n,o,i);return false&&false, false&&false,s}(s,r,y, false?undefined:void 0),w=n,_=g.$as||t.$as||g.as||t.as||p,N=ke(_),A=g!==t?v({},t,{},g):t,C={};for(var I in A)"$"!==I[0]&&"as"!==I&&("forwardedAs"===I?C.as=A[I]:(d?d(I,_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],_):!N||Object(_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(I))&&(C[I]=A[I]));return t.style&&g.style!==t.style&&(C.style=v({},t.style,{},g.style)),C.className=Array.prototype.concat(c,h,S!==h?S:null,t.className,g.className).filter(Boolean).join(" "),C.ref=w,Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_,C)}(C,e,t,P)};return O.displayName=f,(C=react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(O)).attrs=S,C.componentStyle=I,C.displayName=f,C.shouldForwardProp=A,C.foldedComponentIds=o?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):w,C.styledComponentId=g,C.target=o?e.target:e,C.withComponent=function(e){var r=t.componentId,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["componentId"]),i=r&&r+"-"+(ke(e)?e:je(_(e)));return Ye(e,v({},o,{attrs:S,componentId:i}),n)},Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=o?Me({},e.defaultProps,t):t}}), false&&(false),C.toString=function(){return"."+C.styledComponentId},s&&hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),C}var qe=function(e){return function e(t,r,o){if(void 0===o&&(o=E),!Object(react_is__WEBPACK_IMPORTED_MODULE_0__["isValidElementType"])(r))return j(1,String(r));var i=function(){return t(r,o,Ae.apply(void 0,arguments))};return i.withConfig=function(n){return e(t,r,v({},o,{},n))},i.attrs=function(n){return e(t,r,v({},o,{attrs:Array.prototype.concat(o.attrs,n).filter(Boolean)}))},i}(Ye,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){qe[e]=qe(e)}));var He=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=re(e),Z.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(e,t,n,r){var o=r(Ne(this.rules,t,n,r).join(""),""),i=this.componentId+e;n.insertRules(i,i,o)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,n,r){e>2&&Z.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function $e(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var s=Ae.apply(void 0,[e].concat(n)),a="sc-global-"+Te(JSON.stringify(s)),u=new He(s,a);function l(e){var t=fe(),n=me(),o=Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ze),l=Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(t.allocateGSInstance(a)).current;return false&&false, false&&false,Object(react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"])((function(){return h(l,e,t,o,n),function(){return u.removeStyles(l,t)}}),[l,e,t,o,n]),null}function h(e,t,n,r,o){if(u.isStatic)u.renderStyles(e,O,n,o);else{var i=v({},t,{theme:Oe(t,r,l.defaultProps)});u.renderStyles(e,i,n,o)}}return false&&false,react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(l)}function We(e){ false&&false;for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=Ae.apply(void 0,[e].concat(n)).join(""),i=Te(o);return new ve(i,o)}var Ue=function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),n=q();return"<style "+[n&&'nonce="'+n+'"',A+'="true"','data-styled-version="5.3.0"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?j(2):e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)return j(2);var n=((t={})[A]="",t["data-styled-version"]="5.3.0",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),o=q();return o&&(n.nonce=o),[react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style",v({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Z({isServer:!0}),this.sealed=!1}var t=e.prototype;return t.collectStyles=function(e){return this.sealed?j(2):react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ye,{sheet:this.instance},e)},t.interleaveWithNodeStream=function(e){return j(3)},e}(),Je=function(e){var t=react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef((function(t,n){var o=Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ze),s=e.defaultProps,a=Oe(t,o,s);return false&&false,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(e,v({},t,{theme:a,ref:n}))}));return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(t,e),t.displayName="WithTheme("+_(e)+")",t},Xe=function(){return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ze)},Ze={StyleSheet:Z,masterSheet:he}; false&&false, false&&(false);/* harmony default export */ __webpack_exports__["default"] = (qe);
//# sourceMappingURL=styled-components.browser.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(16)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const ColorScheme_1 = tslib_1.__importDefault(__webpack_require__(11));
const defs = [
    {
        name: "hintchars",
        defaultValue: "abcdefghijklmnopqrstuvwxyz",
        type: "string",
    },
    {
        name: "smoothscroll",
        defaultValue: false,
        type: "boolean",
    },
    {
        name: "complete",
        defaultValue: "sbh",
        type: "string",
    },
    {
        name: "colorscheme",
        defaultValue: ColorScheme_1.default.System,
        type: "string",
    },
];
const defaultValues = {
    hintchars: "abcdefghijklmnopqrstuvwxyz",
    smoothscroll: false,
    complete: "sbh",
    colorscheme: ColorScheme_1.default.System,
};
class Properties {
    constructor({ hintchars, smoothscroll, complete, colorscheme, } = {}) {
        this.hintchars = hintchars || defaultValues.hintchars;
        this.smoothscroll = smoothscroll || defaultValues.smoothscroll;
        this.complete = complete || defaultValues.complete;
        this.colorscheme = colorscheme || defaultValues.colorscheme;
    }
    static fromJSON(json) {
        return new Properties(json);
    }
    static types() {
        return {
            hintchars: "string",
            smoothscroll: "boolean",
            complete: "string",
            colorscheme: "string",
        };
    }
    static def(name) {
        return defs.find((p) => p.name === name);
    }
    static defs() {
        return defs;
    }
    toJSON() {
        return {
            hintchars: this.hintchars,
            smoothscroll: this.smoothscroll,
            complete: this.complete,
            colorscheme: this.colorscheme,
        };
    }
}
exports.default = Properties;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BlacklistItem = void 0;
const tslib_1 = __webpack_require__(0);
const Key_1 = tslib_1.__importDefault(__webpack_require__(13));
const regexFromWildcard = (pattern) => {
    const regexStr = "^" + pattern.replace(/\*/g, ".*") + "$";
    return new RegExp(regexStr);
};
class BlacklistItem {
    constructor(pattern, partial, keys) {
        this.pattern = pattern;
        this.regex = regexFromWildcard(pattern);
        this.partial = partial;
        this.keys = keys;
        this.keyEntities = this.keys.map(Key_1.default.fromMapKey);
    }
    static fromJSON(json) {
        return typeof json === "string"
            ? new BlacklistItem(json, false, [])
            : new BlacklistItem(json.url, true, json.keys);
    }
    toJSON() {
        if (!this.partial) {
            return this.pattern;
        }
        return { url: this.pattern, keys: this.keys };
    }
    matches(url) {
        return this.pattern.includes("/")
            ? this.regex.test(url.host + url.pathname)
            : this.regex.test(url.host);
    }
    includeKey(url, key) {
        if (!this.matches(url) || !this.partial) {
            return false;
        }
        return this.keyEntities.some((k) => k.equals(key));
    }
}
exports.BlacklistItem = BlacklistItem;
class Blacklist {
    constructor(items) {
        this.items = items;
    }
    static fromJSON(json) {
        const items = json.map((o) => BlacklistItem.fromJSON(o));
        return new Blacklist(items);
    }
    toJSON() {
        return this.items.map((item) => item.toJSON());
    }
    includesEntireBlacklist(url) {
        return this.items.some((item) => !item.partial && item.matches(url));
    }
    includeKey(url, key) {
        return this.items.some((item) => item.includeKey(url, key));
    }
}
exports.default = Blacklist;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(40);
} else {}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const operations = tslib_1.__importStar(__webpack_require__(3));
class Keymaps {
    constructor(data) {
        this.data = data;
    }
    static fromJSON(json) {
        const entries = {};
        for (const key of Object.keys(json)) {
            entries[key] = operations.valueOf(json[key]);
        }
        return new Keymaps(entries);
    }
    combine(other) {
        return new Keymaps(Object.assign(Object.assign({}, this.data), other.data));
    }
    toJSON() {
        return this.data;
    }
    entries() {
        return Object.entries(this.data);
    }
}
exports.default = Keymaps;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultSetting = exports.DefaultSettingJSONText = void 0;
const tslib_1 = __webpack_require__(0);
const Keymaps_1 = tslib_1.__importDefault(__webpack_require__(9));
const Search_1 = tslib_1.__importDefault(__webpack_require__(14));
const Properties_1 = tslib_1.__importDefault(__webpack_require__(6));
const Blacklist_1 = tslib_1.__importDefault(__webpack_require__(7));
const validate_1 = tslib_1.__importDefault(__webpack_require__(17));
class Settings {
    constructor({ keymaps, search, properties, blacklist, }) {
        this.keymaps = keymaps;
        this.search = search;
        this.properties = properties;
        this.blacklist = blacklist;
    }
    static fromJSON(json) {
        const valid = validate_1.default(json);
        if (!valid) {
            const message = validate_1.default
                .errors.map((err) => {
                return `'${err.dataPath}' ${err.message}`;
            })
                .join("; ");
            throw new TypeError(message);
        }
        const obj = json;
        const settings = Object.assign({}, exports.DefaultSetting);
        if (obj.keymaps) {
            settings.keymaps = Keymaps_1.default.fromJSON(obj.keymaps);
        }
        if (obj.search) {
            settings.search = Search_1.default.fromJSON(obj.search);
        }
        if (obj.properties) {
            settings.properties = Properties_1.default.fromJSON(obj.properties);
        }
        if (obj.blacklist) {
            settings.blacklist = Blacklist_1.default.fromJSON(obj.blacklist);
        }
        return new Settings(settings);
    }
    toJSON() {
        return {
            keymaps: this.keymaps.toJSON(),
            search: this.search.toJSON(),
            properties: this.properties.toJSON(),
            blacklist: this.blacklist.toJSON(),
        };
    }
}
exports.default = Settings;
exports.DefaultSettingJSONText = `{
  "keymaps": {
    "0": { "type": "scroll.home" },
    ":": { "type": "command.show" },
    "o": { "type": "command.show.open", "alter": false },
    "O": { "type": "command.show.open", "alter": true },
    "t": { "type": "command.show.tabopen", "alter": false },
    "T": { "type": "command.show.tabopen", "alter": true },
    "w": { "type": "command.show.winopen", "alter": false },
    "W": { "type": "command.show.winopen", "alter": true },
    "b": { "type": "command.show.buffer" },
    "a": { "type": "command.show.addbookmark", "alter": true },
    "k": { "type": "scroll.vertically", "count": -1 },
    "j": { "type": "scroll.vertically", "count": 1 },
    "h": { "type": "scroll.horizonally", "count": -1 },
    "l": { "type": "scroll.horizonally", "count": 1 },
    "<C-U>": { "type": "scroll.pages", "count": -0.5 },
    "<C-D>": { "type": "scroll.pages", "count": 0.5 },
    "<C-B>": { "type": "scroll.pages", "count": -1 },
    "<C-F>": { "type": "scroll.pages", "count": 1 },
    "gg": { "type": "scroll.top" },
    "G": { "type": "scroll.bottom" },
    "$": { "type": "scroll.end" },
    "d": { "type": "tabs.close" },
    "D": { "type": "tabs.close", "select": "left" },
    "x$": { "type": "tabs.close.right" },
    "!d": { "type": "tabs.close.force" },
    "u": { "type": "tabs.reopen" },
    "K": { "type": "tabs.prev" },
    "J": { "type": "tabs.next" },
    "gT": { "type": "tabs.prev" },
    "gt": { "type": "tabs.next" },
    "g0": { "type": "tabs.first" },
    "g$": { "type": "tabs.last" },
    "<C-6>": { "type": "tabs.prevsel" },
    "r": { "type": "tabs.reload", "cache": false },
    "R": { "type": "tabs.reload", "cache": true },
    "zp": { "type": "tabs.pin.toggle" },
    "zd": { "type": "tabs.duplicate" },
    "zi": { "type": "zoom.in" },
    "zo": { "type": "zoom.out" },
    "zz": { "type": "zoom.neutral" },
    "f": { "type": "follow.start", "newTab": false },
    "F": { "type": "follow.start", "newTab": true, "background": false },
    "m": { "type": "mark.set.prefix" },
    "'": { "type": "mark.jump.prefix" },
    "H": { "type": "navigate.history.prev" },
    "L": { "type": "navigate.history.next" },
    "[[": { "type": "navigate.link.prev" },
    "]]": { "type": "navigate.link.next" },
    "gu": { "type": "navigate.parent" },
    "gU": { "type": "navigate.root" },
    "gi": { "type": "focus.input" },
    "gf": { "type": "page.source" },
    "gh": { "type": "page.home" },
    "gH": { "type": "page.home", "newTab": true },
    "gr": { "type": "tabs.reader.toggle" },
    "y": { "type": "urls.yank" },
    "p": { "type": "urls.paste", "newTab": false },
    "P": { "type": "urls.paste", "newTab": true },
    "/": { "type": "find.start" },
    "n": { "type": "find.next" },
    "N": { "type": "find.prev" },
    ".": { "type": "repeat.last" },
    "<S-Esc>": { "type": "addon.toggle.enabled" }
  },
  "search": {
    "default": "google",
    "engines": {
      "google": "https://google.com/search?q={}",
      "yahoo": "https://search.yahoo.com/search?p={}",
      "bing": "https://www.bing.com/search?q={}",
      "duckduckgo": "https://duckduckgo.com/?q={}",
      "twitter": "https://twitter.com/search?q={}",
      "wikipedia": "https://en.wikipedia.org/w/index.php?search={}"
    }
  },
  "properties": {
    "hintchars": "abcdefghijklmnopqrstuvwxyz",
    "smoothscroll": false,
    "complete": "sbh",
    "colorscheme": "system"
  },
  "blacklist": [
  ]
}`;
exports.DefaultSetting = Settings.fromJSON(JSON.parse(exports.DefaultSettingJSONText));


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ColorScheme;
(function (ColorScheme) {
    ColorScheme["System"] = "system";
    ColorScheme["Light"] = "light";
    ColorScheme["Dark"] = "dark";
})(ColorScheme || (ColorScheme = {}));
exports.default = ColorScheme;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(8);

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
class Key {
    constructor({ key, shift = false, ctrl = false, alt = false, meta = false, }) {
        this.key = key;
        this.shift = shift;
        this.ctrl = ctrl;
        this.alt = alt;
        this.meta = meta;
    }
    static fromMapKey(str) {
        if (str.startsWith("<") && str.endsWith(">")) {
            const inner = str.slice(1, -1);
            const shift = inner.includes("S-");
            let base = inner.slice(inner.lastIndexOf("-") + 1);
            if (shift && base.length === 1) {
                base = base.toUpperCase();
            }
            else if (!shift && base.length === 1) {
                base = base.toLowerCase();
            }
            return new Key({
                key: base,
                shift: shift,
                ctrl: inner.includes("C-"),
                alt: inner.includes("A-"),
                meta: inner.includes("M-"),
            });
        }
        return new Key({
            key: str,
            shift: str.toLowerCase() !== str,
            ctrl: false,
            alt: false,
            meta: false,
        });
    }
    isDigit() {
        return digits.includes(this.key) && !this.ctrl && !this.alt && !this.meta;
    }
    equals(key) {
        return (this.key === key.key &&
            this.ctrl === key.ctrl &&
            this.meta === key.meta &&
            this.alt === key.alt &&
            this.shift === key.shift);
    }
}
exports.default = Key;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Search {
    constructor(defaultEngine, engines) {
        this.defaultEngine = defaultEngine;
        this.engines = engines;
    }
    static fromJSON(json) {
        for (const [name, url] of Object.entries(json.engines)) {
            if (!/^[a-zA-Z0-9]+$/.test(name)) {
                throw new TypeError("Search engine's name must be [a-zA-Z0-9]+");
            }
            const matches = url.match(/{}/g);
            if (matches === null) {
                throw new TypeError(`No {}-placeholders in URL of "${name}"`);
            }
            else if (matches.length > 1) {
                throw new TypeError(`Multiple {}-placeholders in URL of "${name}"`);
            }
        }
        if (!Object.keys(json.engines).includes(json.default)) {
            throw new TypeError(`Default engine "${json.default}" not found`);
        }
        return new Search(json.default, json.engines);
    }
    toJSON() {
        return {
            default: this.defaultEngine,
            engines: this.engines,
        };
    }
}
exports.default = Search;


/***/ }),
/* 15 */,
/* 16 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var equal = __webpack_require__(18);
var validate = (function() {
  var pattern0 = new RegExp('.*');
  var refVal = [];
  return function validate(data, dataPath, parentData, parentDataProperty, rootData) {
    'use strict';
    var vErrors = null;
    var errors = 0;
    if ((data && typeof data === "object" && !Array.isArray(data))) {
      var errs__0 = errors;
      var valid1 = true;
      for (var key0 in data) {
        var isAdditional0 = !( false || key0 == 'keymaps' || key0 == 'search' || key0 == 'properties' || key0 == 'blacklist');
        if (isAdditional0) {
          valid1 = false;
          validate.errors = [{
            keyword: 'additionalProperties',
            dataPath: (dataPath || '') + "",
            schemaPath: '#/additionalProperties',
            params: {
              additionalProperty: '' + key0 + ''
            },
            message: 'should NOT have additional properties'
          }];
          return false;
          break;
        }
      }
      if (valid1) {
        var data1 = data.keymaps;
        if (data1 === undefined) {
          valid1 = true;
        } else {
          var errs_1 = errors;
          if ((data1 && typeof data1 === "object" && !Array.isArray(data1))) {
            var errs__1 = errors;
            var valid2 = true;
            for (var key1 in data1) {
              if (pattern0.test(key1)) {
                var data2 = data1[key1];
                var errs_2 = errors;
                if ((data2 && typeof data2 === "object" && !Array.isArray(data2))) {
                  if (true) {
                    var errs__2 = errors;
                    var valid3 = true;
                    if (data2.type === undefined) {
                      valid3 = false;
                      validate.errors = [{
                        keyword: 'required',
                        dataPath: (dataPath || '') + '.keymaps[\'' + key1 + '\']',
                        schemaPath: '#/properties/keymaps/patternProperties/.*/required',
                        params: {
                          missingProperty: 'type'
                        },
                        message: 'should have required property \'type\''
                      }];
                      return false;
                    } else {
                      var errs_3 = errors;
                      if (typeof data2.type !== "string") {
                        validate.errors = [{
                          keyword: 'type',
                          dataPath: (dataPath || '') + '.keymaps[\'' + key1 + '\'].type',
                          schemaPath: '#/properties/keymaps/patternProperties/.*/properties/type/type',
                          params: {
                            type: 'string'
                          },
                          message: 'should be string'
                        }];
                        return false;
                      }
                      var valid3 = errors === errs_3;
                    }
                  }
                } else {
                  validate.errors = [{
                    keyword: 'type',
                    dataPath: (dataPath || '') + '.keymaps[\'' + key1 + '\']',
                    schemaPath: '#/properties/keymaps/patternProperties/.*/type',
                    params: {
                      type: 'object'
                    },
                    message: 'should be object'
                  }];
                  return false;
                }
                var valid2 = errors === errs_2;
                if (!valid2) break;
              } else valid2 = true;
            }
          } else {
            validate.errors = [{
              keyword: 'type',
              dataPath: (dataPath || '') + '.keymaps',
              schemaPath: '#/properties/keymaps/type',
              params: {
                type: 'object'
              },
              message: 'should be object'
            }];
            return false;
          }
          var valid1 = errors === errs_1;
        }
        if (valid1) {
          var data1 = data.search;
          if (data1 === undefined) {
            valid1 = true;
          } else {
            var errs_1 = errors;
            if ((data1 && typeof data1 === "object" && !Array.isArray(data1))) {
              if (true) {
                var errs__1 = errors;
                var valid2 = true;
                if (data1.default === undefined) {
                  valid2 = false;
                  validate.errors = [{
                    keyword: 'required',
                    dataPath: (dataPath || '') + '.search',
                    schemaPath: '#/properties/search/required',
                    params: {
                      missingProperty: 'default'
                    },
                    message: 'should have required property \'default\''
                  }];
                  return false;
                } else {
                  var errs_2 = errors;
                  if (typeof data1.default !== "string") {
                    validate.errors = [{
                      keyword: 'type',
                      dataPath: (dataPath || '') + '.search.default',
                      schemaPath: '#/properties/search/properties/default/type',
                      params: {
                        type: 'string'
                      },
                      message: 'should be string'
                    }];
                    return false;
                  }
                  var valid2 = errors === errs_2;
                }
                if (valid2) {
                  var data2 = data1.engines;
                  if (data2 === undefined) {
                    valid2 = false;
                    validate.errors = [{
                      keyword: 'required',
                      dataPath: (dataPath || '') + '.search',
                      schemaPath: '#/properties/search/required',
                      params: {
                        missingProperty: 'engines'
                      },
                      message: 'should have required property \'engines\''
                    }];
                    return false;
                  } else {
                    var errs_2 = errors;
                    if ((data2 && typeof data2 === "object" && !Array.isArray(data2))) {
                      var errs__2 = errors;
                      var valid3 = true;
                      for (var key2 in data2) {
                        if (pattern0.test(key2)) {
                          var errs_3 = errors;
                          if (typeof data2[key2] !== "string") {
                            validate.errors = [{
                              keyword: 'type',
                              dataPath: (dataPath || '') + '.search.engines[\'' + key2 + '\']',
                              schemaPath: '#/properties/search/properties/engines/patternProperties/.*/type',
                              params: {
                                type: 'string'
                              },
                              message: 'should be string'
                            }];
                            return false;
                          }
                          var valid3 = errors === errs_3;
                          if (!valid3) break;
                        } else valid3 = true;
                      }
                    } else {
                      validate.errors = [{
                        keyword: 'type',
                        dataPath: (dataPath || '') + '.search.engines',
                        schemaPath: '#/properties/search/properties/engines/type',
                        params: {
                          type: 'object'
                        },
                        message: 'should be object'
                      }];
                      return false;
                    }
                    var valid2 = errors === errs_2;
                  }
                }
              }
            } else {
              validate.errors = [{
                keyword: 'type',
                dataPath: (dataPath || '') + '.search',
                schemaPath: '#/properties/search/type',
                params: {
                  type: 'object'
                },
                message: 'should be object'
              }];
              return false;
            }
            var valid1 = errors === errs_1;
          }
          if (valid1) {
            var data1 = data.properties;
            if (data1 === undefined) {
              valid1 = true;
            } else {
              var errs_1 = errors;
              if ((data1 && typeof data1 === "object" && !Array.isArray(data1))) {
                var errs__1 = errors;
                var valid2 = true;
                if (data1.hintchars === undefined) {
                  valid2 = true;
                } else {
                  var errs_2 = errors;
                  if (typeof data1.hintchars !== "string") {
                    validate.errors = [{
                      keyword: 'type',
                      dataPath: (dataPath || '') + '.properties.hintchars',
                      schemaPath: '#/properties/properties/properties/hintchars/type',
                      params: {
                        type: 'string'
                      },
                      message: 'should be string'
                    }];
                    return false;
                  }
                  var valid2 = errors === errs_2;
                }
                if (valid2) {
                  if (data1.smoothscroll === undefined) {
                    valid2 = true;
                  } else {
                    var errs_2 = errors;
                    if (typeof data1.smoothscroll !== "boolean") {
                      validate.errors = [{
                        keyword: 'type',
                        dataPath: (dataPath || '') + '.properties.smoothscroll',
                        schemaPath: '#/properties/properties/properties/smoothscroll/type',
                        params: {
                          type: 'boolean'
                        },
                        message: 'should be boolean'
                      }];
                      return false;
                    }
                    var valid2 = errors === errs_2;
                  }
                  if (valid2) {
                    if (data1.complete === undefined) {
                      valid2 = true;
                    } else {
                      var errs_2 = errors;
                      if (typeof data1.complete !== "string") {
                        validate.errors = [{
                          keyword: 'type',
                          dataPath: (dataPath || '') + '.properties.complete',
                          schemaPath: '#/properties/properties/properties/complete/type',
                          params: {
                            type: 'string'
                          },
                          message: 'should be string'
                        }];
                        return false;
                      }
                      var valid2 = errors === errs_2;
                    }
                    if (valid2) {
                      var data2 = data1.colorscheme;
                      if (data2 === undefined) {
                        valid2 = true;
                      } else {
                        var errs_2 = errors;
                        if (typeof data2 !== "string") {
                          validate.errors = [{
                            keyword: 'type',
                            dataPath: (dataPath || '') + '.properties.colorscheme',
                            schemaPath: '#/properties/properties/properties/colorscheme/type',
                            params: {
                              type: 'string'
                            },
                            message: 'should be string'
                          }];
                          return false;
                        }
                        var schema2 = validate.schema.properties.properties.properties.colorscheme.enum;
                        var valid2;
                        valid2 = false;
                        for (var i2 = 0; i2 < schema2.length; i2++)
                          if (equal(data2, schema2[i2])) {
                            valid2 = true;
                            break;
                          } if (!valid2) {
                          validate.errors = [{
                            keyword: 'enum',
                            dataPath: (dataPath || '') + '.properties.colorscheme',
                            schemaPath: '#/properties/properties/properties/colorscheme/enum',
                            params: {
                              allowedValues: schema2
                            },
                            message: 'should be equal to one of the allowed values'
                          }];
                          return false;
                        }
                        var valid2 = errors === errs_2;
                      }
                    }
                  }
                }
              } else {
                validate.errors = [{
                  keyword: 'type',
                  dataPath: (dataPath || '') + '.properties',
                  schemaPath: '#/properties/properties/type',
                  params: {
                    type: 'object'
                  },
                  message: 'should be object'
                }];
                return false;
              }
              var valid1 = errors === errs_1;
            }
            if (valid1) {
              var data1 = data.blacklist;
              if (data1 === undefined) {
                valid1 = true;
              } else {
                var errs_1 = errors;
                if (Array.isArray(data1)) {
                  var errs__1 = errors;
                  var valid1;
                  for (var i1 = 0; i1 < data1.length; i1++) {
                    var data2 = data1[i1];
                    var errs_2 = errors;
                    var errs__2 = errors;
                    var valid2 = false;
                    var errs_3 = errors;
                    if (typeof data2 !== "string") {
                      var err = {
                        keyword: 'type',
                        dataPath: (dataPath || '') + '.blacklist[' + i1 + ']',
                        schemaPath: '#/properties/blacklist/items/anyOf/0/type',
                        params: {
                          type: 'string'
                        },
                        message: 'should be string'
                      };
                      if (vErrors === null) vErrors = [err];
                      else vErrors.push(err);
                      errors++;
                    }
                    var valid3 = errors === errs_3;
                    valid2 = valid2 || valid3;
                    if (!valid2) {
                      var errs_3 = errors;
                      if ((data2 && typeof data2 === "object" && !Array.isArray(data2))) {
                        if (true) {
                          var errs__3 = errors;
                          var valid4 = true;
                          if (data2.url === undefined) {
                            valid4 = false;
                            var err = {
                              keyword: 'required',
                              dataPath: (dataPath || '') + '.blacklist[' + i1 + ']',
                              schemaPath: '#/properties/blacklist/items/anyOf/1/required',
                              params: {
                                missingProperty: 'url'
                              },
                              message: 'should have required property \'url\''
                            };
                            if (vErrors === null) vErrors = [err];
                            else vErrors.push(err);
                            errors++;
                          } else {
                            var errs_4 = errors;
                            if (typeof data2.url !== "string") {
                              var err = {
                                keyword: 'type',
                                dataPath: (dataPath || '') + '.blacklist[' + i1 + '].url',
                                schemaPath: '#/properties/blacklist/items/anyOf/1/properties/url/type',
                                params: {
                                  type: 'string'
                                },
                                message: 'should be string'
                              };
                              if (vErrors === null) vErrors = [err];
                              else vErrors.push(err);
                              errors++;
                            }
                            var valid4 = errors === errs_4;
                          }
                          if (valid4) {
                            var data3 = data2.keys;
                            if (data3 === undefined) {
                              valid4 = false;
                              var err = {
                                keyword: 'required',
                                dataPath: (dataPath || '') + '.blacklist[' + i1 + ']',
                                schemaPath: '#/properties/blacklist/items/anyOf/1/required',
                                params: {
                                  missingProperty: 'keys'
                                },
                                message: 'should have required property \'keys\''
                              };
                              if (vErrors === null) vErrors = [err];
                              else vErrors.push(err);
                              errors++;
                            } else {
                              var errs_4 = errors;
                              if (Array.isArray(data3)) {
                                var errs__4 = errors;
                                var valid4;
                                for (var i4 = 0; i4 < data3.length; i4++) {
                                  var errs_5 = errors;
                                  if (typeof data3[i4] !== "string") {
                                    var err = {
                                      keyword: 'type',
                                      dataPath: (dataPath || '') + '.blacklist[' + i1 + '].keys[' + i4 + ']',
                                      schemaPath: '#/properties/blacklist/items/anyOf/1/properties/keys/items/type',
                                      params: {
                                        type: 'string'
                                      },
                                      message: 'should be string'
                                    };
                                    if (vErrors === null) vErrors = [err];
                                    else vErrors.push(err);
                                    errors++;
                                  }
                                  var valid5 = errors === errs_5;
                                  if (!valid5) break;
                                }
                              } else {
                                var err = {
                                  keyword: 'type',
                                  dataPath: (dataPath || '') + '.blacklist[' + i1 + '].keys',
                                  schemaPath: '#/properties/blacklist/items/anyOf/1/properties/keys/type',
                                  params: {
                                    type: 'array'
                                  },
                                  message: 'should be array'
                                };
                                if (vErrors === null) vErrors = [err];
                                else vErrors.push(err);
                                errors++;
                              }
                              var valid4 = errors === errs_4;
                            }
                          }
                        }
                      } else {
                        var err = {
                          keyword: 'type',
                          dataPath: (dataPath || '') + '.blacklist[' + i1 + ']',
                          schemaPath: '#/properties/blacklist/items/anyOf/1/type',
                          params: {
                            type: 'object'
                          },
                          message: 'should be object'
                        };
                        if (vErrors === null) vErrors = [err];
                        else vErrors.push(err);
                        errors++;
                      }
                      var valid3 = errors === errs_3;
                      valid2 = valid2 || valid3;
                    }
                    if (!valid2) {
                      var err = {
                        keyword: 'anyOf',
                        dataPath: (dataPath || '') + '.blacklist[' + i1 + ']',
                        schemaPath: '#/properties/blacklist/items/anyOf',
                        params: {},
                        message: 'should match some schema in anyOf'
                      };
                      if (vErrors === null) vErrors = [err];
                      else vErrors.push(err);
                      errors++;
                      validate.errors = vErrors;
                      return false;
                    } else {
                      errors = errs__2;
                      if (vErrors !== null) {
                        if (errs__2) vErrors.length = errs__2;
                        else vErrors = null;
                      }
                    }
                    var valid2 = errors === errs_2;
                    if (!valid2) break;
                  }
                } else {
                  validate.errors = [{
                    keyword: 'type',
                    dataPath: (dataPath || '') + '.blacklist',
                    schemaPath: '#/properties/blacklist/type',
                    params: {
                      type: 'array'
                    },
                    message: 'should be array'
                  }];
                  return false;
                }
                var valid1 = errors === errs_1;
              }
            }
          }
        }
      }
    } else {
      validate.errors = [{
        keyword: 'type',
        dataPath: (dataPath || '') + "",
        schemaPath: '#/type',
        params: {
          type: 'object'
        },
        message: 'should be object'
      }];
      return false;
    }
    validate.errors = vErrors;
    return errors === 0;
  };
})();
validate.schema = {
  "type": "object",
  "properties": {
    "keymaps": {
      "type": "object",
      "patternProperties": {
        ".*": {
          "type": "object",
          "properties": {
            "type": {
              "type": "string"
            }
          },
          "required": ["type"]
        }
      }
    },
    "search": {
      "type": "object",
      "properties": {
        "default": {
          "type": "string"
        },
        "engines": {
          "type": "object",
          "patternProperties": {
            ".*": {
              "type": "string"
            }
          }
        }
      },
      "required": ["default", "engines"]
    },
    "properties": {
      "type": "object",
      "properties": {
        "hintchars": {
          "type": "string"
        },
        "smoothscroll": {
          "type": "boolean"
        },
        "complete": {
          "type": "string"
        },
        "colorscheme": {
          "type": "string",
          "enum": ["system", "light", "dark"]
        }
      }
    },
    "blacklist": {
      "type": "array",
      "items": {
        "anyOf": [{
          "type": "string"
        }, {
          "type": "object",
          "properties": {
            "url": {
              "type": "string"
            },
            "keys": {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          },
          "required": ["url", "keys"]
        }]
      }
    }
  },
  "additionalProperties": false
};
validate.errors = null;
module.exports = validate;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// do NOT remove this file - it would break pre-compiled schemas
// https://github.com/ajv-validator/ajv/issues/889
module.exports = __webpack_require__(19)


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// do not edit .js files directly - edit src/index.jst



module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};


/***/ }),
/* 20 */,
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ var memoize_browser_esm = (memoize);

// CONCATENATED MODULE: ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = memoize_browser_esm(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ var is_prop_valid_browser_esm = __webpack_exports__["a"] = (index);


/***/ }),
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(37);
} else {}


/***/ }),
/* 26 */,
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const styled_components_1 = tslib_1.__importDefault(__webpack_require__(5));
const styled = styled_components_1.default;
exports.default = styled;


/***/ }),
/* 28 */
/***/ (function(module, exports) {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ __webpack_exports__["a"] = (stylis_min);


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["a"] = (unitlessKeys);


/***/ }),
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.useExecFind = exports.useExecCommand = exports.getInitialInputValue = exports.useErrorMessage = exports.useInfoMessage = exports.useFindMode = exports.useCommandMode = exports.useHide = void 0;
const tslib_1 = __webpack_require__(0);
const react_1 = tslib_1.__importDefault(__webpack_require__(1));
const actions = tslib_1.__importStar(__webpack_require__(55));
const contexts_1 = __webpack_require__(56);
const messages = tslib_1.__importStar(__webpack_require__(4));
const useHide = () => {
    const dispatch = react_1.default.useContext(contexts_1.AppDispatchContext);
    const hide = react_1.default.useCallback(() => {
        window.top.postMessage(JSON.stringify({
            type: messages.CONSOLE_UNFOCUS,
        }), "*");
        dispatch(actions.hide());
    }, [dispatch]);
    return hide;
};
exports.useHide = useHide;
const useCommandMode = () => {
    const state = react_1.default.useContext(contexts_1.AppStateContext);
    const dispatch = react_1.default.useContext(contexts_1.AppDispatchContext);
    const show = react_1.default.useCallback((initialInputValue) => {
        dispatch(actions.showCommand(initialInputValue));
    }, [dispatch]);
    return {
        visible: state.mode === "command",
        initialInputValue: state.consoleText,
        show,
    };
};
exports.useCommandMode = useCommandMode;
const useFindMode = () => {
    const state = react_1.default.useContext(contexts_1.AppStateContext);
    const dispatch = react_1.default.useContext(contexts_1.AppDispatchContext);
    const show = react_1.default.useCallback(() => {
        dispatch(actions.showFind());
    }, [dispatch]);
    return {
        visible: state.mode === "find",
        show,
    };
};
exports.useFindMode = useFindMode;
const useInfoMessage = () => {
    const state = react_1.default.useContext(contexts_1.AppStateContext);
    const dispatch = react_1.default.useContext(contexts_1.AppDispatchContext);
    const show = react_1.default.useCallback((message) => {
        dispatch(actions.showInfo(message));
    }, [dispatch]);
    return {
        visible: state.mode === "info",
        message: state.mode === "info" ? state.messageText : "",
        show,
    };
};
exports.useInfoMessage = useInfoMessage;
const useErrorMessage = () => {
    const state = react_1.default.useContext(contexts_1.AppStateContext);
    const dispatch = react_1.default.useContext(contexts_1.AppDispatchContext);
    const show = react_1.default.useCallback((message) => {
        dispatch(actions.showError(message));
    }, [dispatch]);
    return {
        visible: state.mode === "error",
        message: state.mode === "error" ? state.messageText : "",
        show,
    };
};
exports.useErrorMessage = useErrorMessage;
const getInitialInputValue = () => {
    const state = react_1.default.useContext(contexts_1.AppStateContext);
    return state.consoleText;
};
exports.getInitialInputValue = getInitialInputValue;
const useExecCommand = () => {
    const execCommand = react_1.default.useCallback((text) => {
        browser.runtime.sendMessage({
            type: messages.CONSOLE_ENTER_COMMAND,
            text,
        });
    }, []);
    return execCommand;
};
exports.useExecCommand = useExecCommand;
const useExecFind = () => {
    const execFind = react_1.default.useCallback((text) => {
        browser.runtime.sendMessage({
            type: messages.CONSOLE_ENTER_FIND,
            keyword: text,
        });
    }, []);
    return execFind;
};
exports.useExecFind = useExecFind;


/***/ }),
/* 34 */,
/* 35 */,
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=__webpack_require__(24),n=60103,p=60106;exports.Fragment=60107;exports.StrictMode=60108;exports.Profiler=60114;var q=60109,r=60110,t=60112;exports.Suspense=60113;var u=60115,v=60116;
if("function"===typeof Symbol&&Symbol.for){var w=Symbol.for;n=w("react.element");p=w("react.portal");exports.Fragment=w("react.fragment");exports.StrictMode=w("react.strict_mode");exports.Profiler=w("react.profiler");q=w("react.provider");r=w("react.context");t=w("react.forward_ref");exports.Suspense=w("react.suspense");u=w("react.memo");v=w("react.lazy")}var x="function"===typeof Symbol&&Symbol.iterator;
function y(a){if(null===a||"object"!==typeof a)return null;a=x&&a[x]||a["@@iterator"];return"function"===typeof a?a:null}function z(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B={};function C(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A}C.prototype.isReactComponent={};C.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(z(85));this.updater.enqueueSetState(this,a,b,"setState")};C.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
function D(){}D.prototype=C.prototype;function E(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A}var F=E.prototype=new D;F.constructor=E;l(F,C.prototype);F.isPureReactComponent=!0;var G={current:null},H=Object.prototype.hasOwnProperty,I={key:!0,ref:!0,__self:!0,__source:!0};
function J(a,b,c){var e,d={},k=null,h=null;if(null!=b)for(e in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)H.call(b,e)&&!I.hasOwnProperty(e)&&(d[e]=b[e]);var g=arguments.length-2;if(1===g)d.children=c;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];d.children=f}if(a&&a.defaultProps)for(e in g=a.defaultProps,g)void 0===d[e]&&(d[e]=g[e]);return{$$typeof:n,type:a,key:k,ref:h,props:d,_owner:G.current}}
function K(a,b){return{$$typeof:n,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function L(a){return"object"===typeof a&&null!==a&&a.$$typeof===n}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var M=/\/+/g;function N(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function O(a,b,c,e,d){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case n:case p:h=!0}}if(h)return h=a,d=d(h),a=""===e?"."+N(h,0):e,Array.isArray(d)?(c="",null!=a&&(c=a.replace(M,"$&/")+"/"),O(d,b,c,"",function(a){return a})):null!=d&&(L(d)&&(d=K(d,c+(!d.key||h&&h.key===d.key?"":(""+d.key).replace(M,"$&/")+"/")+a)),b.push(d)),1;h=0;e=""===e?".":e+":";if(Array.isArray(a))for(var g=
0;g<a.length;g++){k=a[g];var f=e+N(k,g);h+=O(k,b,c,f,d)}else if(f=y(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=e+N(k,g++),h+=O(k,b,c,f,d);else if("object"===k)throw b=""+a,Error(z(31,"[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b));return h}function P(a,b,c){if(null==a)return a;var e=[],d=0;O(a,e,"","",function(a){return b.call(c,a,d++)});return e}
function Q(a){if(-1===a._status){var b=a._result;b=b();a._status=0;a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)})}if(1===a._status)return a._result;throw a._result;}var R={current:null};function S(){var a=R.current;if(null===a)throw Error(z(321));return a}var T={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:G,IsSomeRendererActing:{current:!1},assign:l};
exports.Children={map:P,forEach:function(a,b,c){P(a,function(){b.apply(this,arguments)},c)},count:function(a){var b=0;P(a,function(){b++});return b},toArray:function(a){return P(a,function(a){return a})||[]},only:function(a){if(!L(a))throw Error(z(143));return a}};exports.Component=C;exports.PureComponent=E;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T;
exports.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(z(267,a));var e=l({},a.props),d=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=G.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)H.call(b,f)&&!I.hasOwnProperty(f)&&(e[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)e.children=c;else if(1<f){g=Array(f);for(var m=0;m<f;m++)g[m]=arguments[m+2];e.children=g}return{$$typeof:n,type:a.type,
key:d,ref:k,props:e,_owner:h}};exports.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:r,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:q,_context:a};return a.Consumer=a};exports.createElement=J;exports.createFactory=function(a){var b=J.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};exports.forwardRef=function(a){return{$$typeof:t,render:a}};exports.isValidElement=L;
exports.lazy=function(a){return{$$typeof:v,_payload:{_status:-1,_result:a},_init:Q}};exports.memo=function(a,b){return{$$typeof:u,type:a,compare:void 0===b?null:b}};exports.useCallback=function(a,b){return S().useCallback(a,b)};exports.useContext=function(a,b){return S().useContext(a,b)};exports.useDebugValue=function(){};exports.useEffect=function(a,b){return S().useEffect(a,b)};exports.useImperativeHandle=function(a,b,c){return S().useImperativeHandle(a,b,c)};
exports.useLayoutEffect=function(a,b){return S().useLayoutEffect(a,b)};exports.useMemo=function(a,b){return S().useMemo(a,b)};exports.useReducer=function(a,b,c){return S().useReducer(a,b,c)};exports.useRef=function(a){return S().useRef(a)};exports.useState=function(a){return S().useState(a)};exports.version="17.0.2";


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(1),m=__webpack_require__(24),r=__webpack_require__(38);function y(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!aa)throw Error(y(227));var ba=new Set,ca={};function da(a,b){ea(a,b);ea(a+"Capture",b)}
function ea(a,b){ca[a]=b;for(a=0;a<b.length;a++)ba.add(b[a])}
var fa=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ha=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ia=Object.prototype.hasOwnProperty,
ja={},ka={};function la(a){if(ia.call(ka,a))return!0;if(ia.call(ja,a))return!1;if(ha.test(a))return ka[a]=!0;ja[a]=!0;return!1}function ma(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function na(a,b,c,d){if(null===b||"undefined"===typeof b||ma(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function B(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g}var D={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){D[a]=new B(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];D[b]=new B(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){D[a]=new B(a,2,!1,a.toLowerCase(),null,!1,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){D[a]=new B(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){D[a]=new B(a,3,!1,a.toLowerCase(),null,!1,!1)});
["checked","multiple","muted","selected"].forEach(function(a){D[a]=new B(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){D[a]=new B(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){D[a]=new B(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){D[a]=new B(a,5,!1,a.toLowerCase(),null,!1,!1)});var oa=/[\-:]([a-z])/g;function pa(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(oa,
pa);D[b]=new B(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!1,!1)});
D.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!0,!0)});
function qa(a,b,c,d){var e=D.hasOwnProperty(b)?D[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(na(b,c,e,d)&&(c=null),d||null===e?la(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
var ra=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sa=60103,ta=60106,ua=60107,wa=60108,xa=60114,ya=60109,za=60110,Aa=60112,Ba=60113,Ca=60120,Da=60115,Ea=60116,Fa=60121,Ga=60128,Ha=60129,Ia=60130,Ja=60131;
if("function"===typeof Symbol&&Symbol.for){var E=Symbol.for;sa=E("react.element");ta=E("react.portal");ua=E("react.fragment");wa=E("react.strict_mode");xa=E("react.profiler");ya=E("react.provider");za=E("react.context");Aa=E("react.forward_ref");Ba=E("react.suspense");Ca=E("react.suspense_list");Da=E("react.memo");Ea=E("react.lazy");Fa=E("react.block");E("react.scope");Ga=E("react.opaque.id");Ha=E("react.debug_trace_mode");Ia=E("react.offscreen");Ja=E("react.legacy_hidden")}
var Ka="function"===typeof Symbol&&Symbol.iterator;function La(a){if(null===a||"object"!==typeof a)return null;a=Ka&&a[Ka]||a["@@iterator"];return"function"===typeof a?a:null}var Ma;function Na(a){if(void 0===Ma)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);Ma=b&&b[1]||""}return"\n"+Ma+a}var Oa=!1;
function Pa(a,b){if(!a||Oa)return"";Oa=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[])}catch(k){var d=k}Reflect.construct(a,[],b)}else{try{b.call()}catch(k){d=k}a.call(b.prototype)}else{try{throw Error();}catch(k){d=k}a()}}catch(k){if(k&&d&&"string"===typeof k.stack){for(var e=k.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h])return"\n"+e[g].replace(" at new "," at ");while(1<=g&&0<=h)}break}}}finally{Oa=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?Na(a):""}
function Qa(a){switch(a.tag){case 5:return Na(a.type);case 16:return Na("Lazy");case 13:return Na("Suspense");case 19:return Na("SuspenseList");case 0:case 2:case 15:return a=Pa(a.type,!1),a;case 11:return a=Pa(a.type.render,!1),a;case 22:return a=Pa(a.type._render,!1),a;case 1:return a=Pa(a.type,!0),a;default:return""}}
function Ra(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ua:return"Fragment";case ta:return"Portal";case xa:return"Profiler";case wa:return"StrictMode";case Ba:return"Suspense";case Ca:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case za:return(a.displayName||"Context")+".Consumer";case ya:return(a._context.displayName||"Context")+".Provider";case Aa:var b=a.render;b=b.displayName||b.name||"";
return a.displayName||(""!==b?"ForwardRef("+b+")":"ForwardRef");case Da:return Ra(a.type);case Fa:return Ra(a._render);case Ea:b=a._payload;a=a._init;try{return Ra(a(b))}catch(c){}}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function Ta(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a))}function Wa(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
function Ya(a,b){var c=b.checked;return m({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function $a(a,b){b=b.checked;null!=b&&qa(a,"checked",b,!1)}
function ab(a,b){$a(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?bb(a,b.type,c):b.hasOwnProperty("defaultValue")&&bb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function cb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function bb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}function db(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}function eb(a,b){a=m({children:void 0},b);if(b=db(b.children))a.children=b;return a}
function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(y(91));return m({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(y(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(y(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:Sa(c)}}
function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}var kb={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function lb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?lb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var nb,ob=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==kb.svg||"innerHTML"in a)a.innerHTML=b;else{nb=nb||document.createElement("div");nb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=nb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function pb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var qb={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rb=["Webkit","ms","Moz","O"];Object.keys(qb).forEach(function(a){rb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);qb[b]=qb[a]})});function sb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||qb.hasOwnProperty(a)&&qb[a]?(""+b).trim():b+"px"}
function tb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=sb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var ub=m({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function vb(a,b){if(b){if(ub[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(y(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(y(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(y(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(y(62));}}
function wb(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(y(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b))}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a])}}function Gb(a,b){return a(b)}function Hb(a,b,c,d,e){return a(b,c,d,e)}function Ib(){}var Jb=Gb,Kb=!1,Lb=!1;function Mb(){if(null!==zb||null!==Ab)Ib(),Fb()}
function Nb(a,b,c){if(Lb)return a(b,c);Lb=!0;try{return Jb(a,b,c)}finally{Lb=!1,Mb()}}
function Ob(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==
typeof c)throw Error(y(231,b,typeof c));return c}var Pb=!1;if(fa)try{var Qb={};Object.defineProperty(Qb,"passive",{get:function(){Pb=!0}});window.addEventListener("test",Qb,Qb);window.removeEventListener("test",Qb,Qb)}catch(a){Pb=!1}function Rb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(n){this.onError(n)}}var Sb=!1,Tb=null,Ub=!1,Vb=null,Wb={onError:function(a){Sb=!0;Tb=a}};function Xb(a,b,c,d,e,f,g,h,k){Sb=!1;Tb=null;Rb.apply(Wb,arguments)}
function Yb(a,b,c,d,e,f,g,h,k){Xb.apply(this,arguments);if(Sb){if(Sb){var l=Tb;Sb=!1;Tb=null}else throw Error(y(198));Ub||(Ub=!0,Vb=l)}}function Zb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.flags&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function $b(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function ac(a){if(Zb(a)!==a)throw Error(y(188));}
function bc(a){var b=a.alternate;if(!b){b=Zb(a);if(null===b)throw Error(y(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return ac(e),a;if(f===d)return ac(e),b;f=f.sibling}throw Error(y(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(y(189));}}if(c.alternate!==d)throw Error(y(190));}if(3!==c.tag)throw Error(y(188));return c.stateNode.current===c?a:b}function cc(a){a=bc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
function dc(a,b){for(var c=a.alternate;null!==b;){if(b===a||b===c)return!0;b=b.return}return!1}var ec,fc,gc,hc,ic=!1,jc=[],kc=null,lc=null,mc=null,nc=new Map,oc=new Map,pc=[],qc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function rc(a,b,c,d,e){return{blockedOn:a,domEventName:b,eventSystemFlags:c|16,nativeEvent:e,targetContainers:[d]}}function sc(a,b){switch(a){case "focusin":case "focusout":kc=null;break;case "dragenter":case "dragleave":lc=null;break;case "mouseover":case "mouseout":mc=null;break;case "pointerover":case "pointerout":nc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":oc.delete(b.pointerId)}}
function tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a=rc(b,c,d,e,f),null!==b&&(b=Cb(b),null!==b&&fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
function uc(a,b,c,d,e){switch(b){case "focusin":return kc=tc(kc,a,b,c,d,e),!0;case "dragenter":return lc=tc(lc,a,b,c,d,e),!0;case "mouseover":return mc=tc(mc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;nc.set(f,tc(nc.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,oc.set(f,tc(oc.get(f)||null,a,b,c,d,e)),!0}return!1}
function vc(a){var b=wc(a.target);if(null!==b){var c=Zb(b);if(null!==c)if(b=c.tag,13===b){if(b=$b(c),null!==b){a.blockedOn=b;hc(a.lanePriority,function(){r.unstable_runWithPriority(a.priority,function(){gc(c)})});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}
function xc(a){if(null!==a.blockedOn)return!1;for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c)return b=Cb(c),null!==b&&fc(b),a.blockedOn=c,!1;b.shift()}return!0}function zc(a,b,c){xc(a)&&c.delete(b)}
function Ac(){for(ic=!1;0<jc.length;){var a=jc[0];if(null!==a.blockedOn){a=Cb(a.blockedOn);null!==a&&ec(a);break}for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c){a.blockedOn=c;break}b.shift()}null===a.blockedOn&&jc.shift()}null!==kc&&xc(kc)&&(kc=null);null!==lc&&xc(lc)&&(lc=null);null!==mc&&xc(mc)&&(mc=null);nc.forEach(zc);oc.forEach(zc)}
function Bc(a,b){a.blockedOn===b&&(a.blockedOn=null,ic||(ic=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ac)))}
function Cc(a){function b(b){return Bc(b,a)}if(0<jc.length){Bc(jc[0],a);for(var c=1;c<jc.length;c++){var d=jc[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==kc&&Bc(kc,a);null!==lc&&Bc(lc,a);null!==mc&&Bc(mc,a);nc.forEach(b);oc.forEach(b);for(c=0;c<pc.length;c++)d=pc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<pc.length&&(c=pc[0],null===c.blockedOn);)vc(c),null===c.blockedOn&&pc.shift()}
function Dc(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Ec={animationend:Dc("Animation","AnimationEnd"),animationiteration:Dc("Animation","AnimationIteration"),animationstart:Dc("Animation","AnimationStart"),transitionend:Dc("Transition","TransitionEnd")},Fc={},Gc={};
fa&&(Gc=document.createElement("div").style,"AnimationEvent"in window||(delete Ec.animationend.animation,delete Ec.animationiteration.animation,delete Ec.animationstart.animation),"TransitionEvent"in window||delete Ec.transitionend.transition);function Hc(a){if(Fc[a])return Fc[a];if(!Ec[a])return a;var b=Ec[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Gc)return Fc[a]=b[c];return a}
var Ic=Hc("animationend"),Jc=Hc("animationiteration"),Kc=Hc("animationstart"),Lc=Hc("transitionend"),Mc=new Map,Nc=new Map,Oc=["abort","abort",Ic,"animationEnd",Jc,"animationIteration",Kc,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart",
"lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Lc,"transitionEnd","waiting","waiting"];function Pc(a,b){for(var c=0;c<a.length;c+=2){var d=a[c],e=a[c+1];e="on"+(e[0].toUpperCase()+e.slice(1));Nc.set(d,b);Mc.set(d,e);da(e,[d])}}var Qc=r.unstable_now;Qc();var F=8;
function Rc(a){if(0!==(1&a))return F=15,1;if(0!==(2&a))return F=14,2;if(0!==(4&a))return F=13,4;var b=24&a;if(0!==b)return F=12,b;if(0!==(a&32))return F=11,32;b=192&a;if(0!==b)return F=10,b;if(0!==(a&256))return F=9,256;b=3584&a;if(0!==b)return F=8,b;if(0!==(a&4096))return F=7,4096;b=4186112&a;if(0!==b)return F=6,b;b=62914560&a;if(0!==b)return F=5,b;if(a&67108864)return F=4,67108864;if(0!==(a&134217728))return F=3,134217728;b=805306368&a;if(0!==b)return F=2,b;if(0!==(1073741824&a))return F=1,1073741824;
F=8;return a}function Sc(a){switch(a){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function Tc(a){switch(a){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(y(358,a));}}
function Uc(a,b){var c=a.pendingLanes;if(0===c)return F=0;var d=0,e=0,f=a.expiredLanes,g=a.suspendedLanes,h=a.pingedLanes;if(0!==f)d=f,e=F=15;else if(f=c&134217727,0!==f){var k=f&~g;0!==k?(d=Rc(k),e=F):(h&=f,0!==h&&(d=Rc(h),e=F))}else f=c&~g,0!==f?(d=Rc(f),e=F):0!==h&&(d=Rc(h),e=F);if(0===d)return 0;d=31-Vc(d);d=c&((0>d?0:1<<d)<<1)-1;if(0!==b&&b!==d&&0===(b&g)){Rc(b);if(e<=F)return b;F=e}b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-Vc(b),e=1<<c,d|=a[c],b&=~e;return d}
function Wc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function Xc(a,b){switch(a){case 15:return 1;case 14:return 2;case 12:return a=Yc(24&~b),0===a?Xc(10,b):a;case 10:return a=Yc(192&~b),0===a?Xc(8,b):a;case 8:return a=Yc(3584&~b),0===a&&(a=Yc(4186112&~b),0===a&&(a=512)),a;case 2:return b=Yc(805306368&~b),0===b&&(b=268435456),b}throw Error(y(358,a));}function Yc(a){return a&-a}function Zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
function $c(a,b,c){a.pendingLanes|=b;var d=b-1;a.suspendedLanes&=d;a.pingedLanes&=d;a=a.eventTimes;b=31-Vc(b);a[b]=c}var Vc=Math.clz32?Math.clz32:ad,bd=Math.log,cd=Math.LN2;function ad(a){return 0===a?32:31-(bd(a)/cd|0)|0}var dd=r.unstable_UserBlockingPriority,ed=r.unstable_runWithPriority,fd=!0;function gd(a,b,c,d){Kb||Ib();var e=hd,f=Kb;Kb=!0;try{Hb(e,a,b,c,d)}finally{(Kb=f)||Mb()}}function id(a,b,c,d){ed(dd,hd.bind(null,a,b,c,d))}
function hd(a,b,c,d){if(fd){var e;if((e=0===(b&4))&&0<jc.length&&-1<qc.indexOf(a))a=rc(null,a,b,c,d),jc.push(a);else{var f=yc(a,b,c,d);if(null===f)e&&sc(a,d);else{if(e){if(-1<qc.indexOf(a)){a=rc(f,a,b,c,d);jc.push(a);return}if(uc(f,a,b,c,d))return;sc(a,d)}jd(a,b,d,null,c)}}}}
function yc(a,b,c,d){var e=xb(d);e=wc(e);if(null!==e){var f=Zb(e);if(null===f)e=null;else{var g=f.tag;if(13===g){e=$b(f);if(null!==e)return e;e=null}else if(3===g){if(f.stateNode.hydrate)return 3===f.tag?f.stateNode.containerInfo:null;e=null}else f!==e&&(e=null)}}jd(a,b,d,e,c);return null}var kd=null,ld=null,md=null;
function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return!0}function qd(){return!1}
function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}m(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
(a.returnValue=!1),this.isDefaultPrevented=pd)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd)},persist:function(){},isPersistent:pd});return b}
var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=m({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=m({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return"movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=m({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=m({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=m({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=m({},sd,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=m({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
var Qd=m({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return"keypress"===a.type?od(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=m({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=m({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=m({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=m({},Ad,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=fa&&"CompositionEvent"in window,be=null;fa&&"documentMode"in document&&(be=document.documentMode);var ce=fa&&"TextEvent"in window&&!be,de=fa&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;
function ge(a,b){switch(a){case "keyup":return-1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return!0;default:return!1}}function he(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var ie=!1;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=!0;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
function ke(a,b){if(ie)return"compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!le[a.type]:"textarea"===b?!0:!1}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}))}var pe=null,qe=null;function re(a){se(a,0)}function te(a){var b=ue(a);if(Wa(b))return a}
function ve(a,b){if("change"===a)return b}var we=!1;if(fa){var xe;if(fa){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput}xe=ye}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode)}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null)}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));a=re;if(Kb)a(b);else{Kb=!0;try{Gb(a,b)}finally{Kb=!1,Mb()}}}}
function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae()}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge,Ie=Object.prototype.hasOwnProperty;
function Je(a,b){if(He(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!Ie.call(b,c[d])||!He(a[c[d]],b[c[d]]))return!1;return!0}function Ke(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Le(a,b){var c=Ke(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Ke(c)}}function Me(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Me(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Ne(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Xa(a.document)}return b}function Oe(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
var Pe=fa&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;
function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Oe(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Je(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)))}
Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),
0);Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Pc(Oc,2);for(var Ve="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),We=0;We<Ve.length;We++)Nc.set(Ve[We],0);ea("onMouseEnter",["mouseout","mouseover"]);
ea("onMouseLeave",["mouseout","mouseover"]);ea("onPointerEnter",["pointerout","pointerover"]);ea("onPointerLeave",["pointerout","pointerover"]);da("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));da("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));da("onBeforeInput",["compositionend","keypress","textInput","paste"]);da("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));da("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xe="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ye=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
function Ze(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Yb(d,b,void 0,a);a.currentTarget=null}
function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;Ze(e,h,l);f=k}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;Ze(e,h,l);f=k}}}if(Ub)throw a=Vb,Ub=!1,Vb=null,a;}
function G(a,b){var c=$e(b),d=a+"__bubble";c.has(d)||(af(b,a,2,!1),c.add(d))}var bf="_reactListening"+Math.random().toString(36).slice(2);function cf(a){a[bf]||(a[bf]=!0,ba.forEach(function(b){Ye.has(b)||df(b,!1,a,null);df(b,!0,a,null)}))}
function df(a,b,c,d){var e=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,f=c;"selectionchange"===a&&9!==c.nodeType&&(f=c.ownerDocument);if(null!==d&&!b&&Ye.has(a)){if("scroll"!==a)return;e|=2;f=d}var g=$e(f),h=a+"__"+(b?"capture":"bubble");g.has(h)||(b&&(e|=4),af(f,a,e,b),g.add(h))}
function af(a,b,c,d){var e=Nc.get(b);switch(void 0===e?2:e){case 0:e=gd;break;case 1:e=id;break;default:e=hd}c=e.bind(null,b,c,a);e=void 0;!Pb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1)}
function jd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return}for(;null!==h;){g=wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode}}d=d.return}Nb(function(){var d=f,e=xb(c),g=[];
a:{var h=Mc.get(a);if(void 0!==h){var k=td,x=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":x="focus";k=Fd;break;case "focusout":x="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case Ic:case Jc:case Kc:k=Hd;break;case Lc:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td}var w=0!==(b&4),z=!w&&"scroll"===a,u=w?null!==h?h+"Capture":null:h;w=[];for(var t=d,q;null!==
t;){q=t;var v=q.stateNode;5===q.tag&&null!==v&&(q=v,null!==u&&(v=Ob(t,u),null!=v&&w.push(ef(t,v,q))));if(z)break;t=t.return}0<w.length&&(h=new k(h,x,null,c,e),g.push({event:h,listeners:w}))}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&0===(b&16)&&(x=c.relatedTarget||c.fromElement)&&(wc(x)||x[ff]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(x=c.relatedTarget||c.toElement,k=d,x=x?wc(x):null,null!==
x&&(z=Zb(x),x!==z||5!==x.tag&&6!==x.tag))x=null}else k=null,x=d;if(k!==x){w=Bd;v="onMouseLeave";u="onMouseEnter";t="mouse";if("pointerout"===a||"pointerover"===a)w=Td,v="onPointerLeave",u="onPointerEnter",t="pointer";z=null==k?h:ue(k);q=null==x?h:ue(x);h=new w(v,t+"leave",k,c,e);h.target=z;h.relatedTarget=q;v=null;wc(e)===d&&(w=new w(u,t+"enter",x,c,e),w.target=q,w.relatedTarget=z,v=w);z=v;if(k&&x)b:{w=k;u=x;t=0;for(q=w;q;q=gf(q))t++;q=0;for(v=u;v;v=gf(v))q++;for(;0<t-q;)w=gf(w),t--;for(;0<q-t;)u=
gf(u),q--;for(;t--;){if(w===u||null!==u&&w===u.alternate)break b;w=gf(w);u=gf(u)}w=null}else w=null;null!==k&&hf(g,h,k,w,!1);null!==x&&null!==z&&hf(g,z,x,w,!0)}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var J=ve;else if(me(h))if(we)J=Fe;else{J=De;var K=Ce}else(k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(J=Ee);if(J&&(J=J(a,d))){ne(g,J,c,e);break a}K&&K(a,h,d);"focusout"===a&&(K=h._wrapperState)&&
K.controlled&&"number"===h.type&&bb(h,"number",h.value)}K=d?ue(d):window;switch(a){case "focusin":if(me(K)||"true"===K.contentEditable)Qe=K,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=!0;break;case "contextmenu":case "mouseup":case "dragend":Te=!1;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e)}var Q;if(ae)b:{switch(a){case "compositionstart":var L="onCompositionStart";break b;case "compositionend":L="onCompositionEnd";break b;
case "compositionupdate":L="onCompositionUpdate";break b}L=void 0}else ie?ge(a,c)&&(L="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(L="onCompositionStart");L&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==L?"onCompositionEnd"===L&&ie&&(Q=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),K=oe(d,L),0<K.length&&(L=new Ld(L,a,null,c,e),g.push({event:L,listeners:K}),Q?L.data=Q:(Q=he(c),null!==Q&&(L.data=Q))));if(Q=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),0<d.length&&(e=new Ld("onBeforeInput",
"beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=Q)}se(g,b)})}function ef(a,b,c){return{instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Ob(a,c),null!=f&&d.unshift(ef(a,f,e)),f=Ob(a,b),null!=f&&d.push(ef(a,f,e)));a=a.return}return d}function gf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
function hf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Ob(c,f),null!=k&&g.unshift(ef(c,k,h))):e||(k=Ob(c,f),null!=k&&g.push(ef(c,k,h))));c=c.return}0!==g.length&&a.push({event:b,listeners:g})}function jf(){}var kf=null,lf=null;function mf(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}
function nf(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var of="function"===typeof setTimeout?setTimeout:void 0,pf="function"===typeof clearTimeout?clearTimeout:void 0;function qf(a){1===a.nodeType?a.textContent="":9===a.nodeType&&(a=a.body,null!=a&&(a.textContent=""))}
function rf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}function sf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--}else"/$"===c&&b++}a=a.previousSibling}return null}var tf=0;function uf(a){return{$$typeof:Ga,toString:a,valueOf:a}}var vf=Math.random().toString(36).slice(2),wf="__reactFiber$"+vf,xf="__reactProps$"+vf,ff="__reactContainer$"+vf,yf="__reactEvents$"+vf;
function wc(a){var b=a[wf];if(b)return b;for(var c=a.parentNode;c;){if(b=c[ff]||c[wf]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=sf(a);null!==a;){if(c=a[wf])return c;a=sf(a)}return b}a=c;c=a.parentNode}return null}function Cb(a){a=a[wf]||a[ff];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(y(33));}function Db(a){return a[xf]||null}
function $e(a){var b=a[yf];void 0===b&&(b=a[yf]=new Set);return b}var zf=[],Af=-1;function Bf(a){return{current:a}}function H(a){0>Af||(a.current=zf[Af],zf[Af]=null,Af--)}function I(a,b){Af++;zf[Af]=a.current;a.current=b}var Cf={},M=Bf(Cf),N=Bf(!1),Df=Cf;
function Ef(a,b){var c=a.type.contextTypes;if(!c)return Cf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function Ff(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Gf(){H(N);H(M)}function Hf(a,b,c){if(M.current!==Cf)throw Error(y(168));I(M,b);I(N,c)}
function If(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(y(108,Ra(b)||"Unknown",e));return m({},c,d)}function Jf(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Cf;Df=M.current;I(M,a);I(N,N.current);return!0}function Kf(a,b,c){var d=a.stateNode;if(!d)throw Error(y(169));c?(a=If(a,b,Df),d.__reactInternalMemoizedMergedChildContext=a,H(N),H(M),I(M,a)):H(N);I(N,c)}
var Lf=null,Mf=null,Nf=r.unstable_runWithPriority,Of=r.unstable_scheduleCallback,Pf=r.unstable_cancelCallback,Qf=r.unstable_shouldYield,Rf=r.unstable_requestPaint,Sf=r.unstable_now,Tf=r.unstable_getCurrentPriorityLevel,Uf=r.unstable_ImmediatePriority,Vf=r.unstable_UserBlockingPriority,Wf=r.unstable_NormalPriority,Xf=r.unstable_LowPriority,Yf=r.unstable_IdlePriority,Zf={},$f=void 0!==Rf?Rf:function(){},ag=null,bg=null,cg=!1,dg=Sf(),O=1E4>dg?Sf:function(){return Sf()-dg};
function eg(){switch(Tf()){case Uf:return 99;case Vf:return 98;case Wf:return 97;case Xf:return 96;case Yf:return 95;default:throw Error(y(332));}}function fg(a){switch(a){case 99:return Uf;case 98:return Vf;case 97:return Wf;case 96:return Xf;case 95:return Yf;default:throw Error(y(332));}}function gg(a,b){a=fg(a);return Nf(a,b)}function hg(a,b,c){a=fg(a);return Of(a,b,c)}function ig(){if(null!==bg){var a=bg;bg=null;Pf(a)}jg()}
function jg(){if(!cg&&null!==ag){cg=!0;var a=0;try{var b=ag;gg(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});ag=null}catch(c){throw null!==ag&&(ag=ag.slice(a+1)),Of(Uf,ig),c;}finally{cg=!1}}}var kg=ra.ReactCurrentBatchConfig;function lg(a,b){if(a&&a.defaultProps){b=m({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}var mg=Bf(null),ng=null,og=null,pg=null;function qg(){pg=og=ng=null}
function rg(a){var b=mg.current;H(mg);a.type._context._currentValue=b}function sg(a,b){for(;null!==a;){var c=a.alternate;if((a.childLanes&b)===b)if(null===c||(c.childLanes&b)===b)break;else c.childLanes|=b;else a.childLanes|=b,null!==c&&(c.childLanes|=b);a=a.return}}function tg(a,b){ng=a;pg=og=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(ug=!0),a.firstContext=null)}
function vg(a,b){if(pg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)pg=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===og){if(null===ng)throw Error(y(308));og=b;ng.dependencies={lanes:0,firstContext:b,responders:null}}else og=og.next=b}return a._currentValue}var wg=!1;function xg(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}
function yg(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function zg(a,b){return{eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}function Ag(a,b){a=a.updateQueue;if(null!==a){a=a.shared;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}}
function Bg(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next}while(null!==c);null===f?e=f=b:f=f.next=b}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
b;c.lastBaseUpdate=b}
function Cg(a,b,c,d){var e=a.updateQueue;wg=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var n=a.alternate;if(null!==n){n=n.updateQueue;var A=n.lastBaseUpdate;A!==g&&(null===A?n.firstBaseUpdate=l:A.next=l,n.lastBaseUpdate=k)}}if(null!==f){A=e.baseState;g=0;n=l=k=null;do{h=f.lane;var p=f.eventTime;if((d&h)===h){null!==n&&(n=n.next={eventTime:p,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,
next:null});a:{var C=a,x=f;h=b;p=c;switch(x.tag){case 1:C=x.payload;if("function"===typeof C){A=C.call(p,A,h);break a}A=C;break a;case 3:C.flags=C.flags&-4097|64;case 0:C=x.payload;h="function"===typeof C?C.call(p,A,h):C;if(null===h||void 0===h)break a;A=m({},A,h);break a;case 2:wg=!0}}null!==f.callback&&(a.flags|=32,h=e.effects,null===h?e.effects=[f]:h.push(f))}else p={eventTime:p,lane:h,tag:f.tag,payload:f.payload,callback:f.callback,next:null},null===n?(l=n=p,k=A):n=n.next=p,g|=h;f=f.next;if(null===
f)if(h=e.shared.pending,null===h)break;else f=h.next,h.next=null,e.lastBaseUpdate=h,e.shared.pending=null}while(1);null===n&&(k=A);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=n;Dg|=g;a.lanes=g;a.memoizedState=A}}function Eg(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(y(191,e));e.call(d)}}}var Fg=(new aa.Component).refs;
function Gg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:m({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c)}
var Kg={isMounted:function(a){return(a=a._reactInternals)?Zb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=Hg(),e=Ig(a),f=zg(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);Ag(a,f);Jg(a,e,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=Hg(),e=Ig(a),f=zg(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);Ag(a,f);Jg(a,e,d)},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=Hg(),d=Ig(a),e=zg(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=
b);Ag(a,e);Jg(a,d,c)}};function Lg(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Je(c,d)||!Je(e,f):!0}
function Mg(a,b,c){var d=!1,e=Cf;var f=b.contextType;"object"===typeof f&&null!==f?f=vg(f):(e=Ff(b)?Df:M.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Ef(a,e):Cf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Kg;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Ng(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Kg.enqueueReplaceState(b,b.state,null)}
function Og(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Fg;xg(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=vg(f):(f=Ff(b)?Df:M.current,e.context=Ef(a,f));Cg(a,c,e,d);e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Gg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||
(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Kg.enqueueReplaceState(e,e.state,null),Cg(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4)}var Pg=Array.isArray;
function Qg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(y(309));var d=c.stateNode}if(!d)throw Error(y(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Fg&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}if("string"!==typeof a)throw Error(y(284));if(!c._owner)throw Error(y(290,a));}return a}
function Rg(a,b){if("textarea"!==a.type)throw Error(y(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b));}
function Sg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.flags=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Tg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags=2,
c):d;b.flags=2;return c}function g(b){a&&null===b.alternate&&(b.flags=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Ug(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Qg(a,b,c),d.return=a,d;d=Vg(c.type,c.key,c.props,null,a.mode,d);d.ref=Qg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=
Wg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function n(a,b,c,d,f){if(null===b||7!==b.tag)return b=Xg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function A(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Ug(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case sa:return c=Vg(b.type,b.key,b.props,null,a.mode,c),c.ref=Qg(a,null,b),c.return=a,c;case ta:return b=Wg(b,a.mode,c),b.return=a,b}if(Pg(b)||La(b))return b=Xg(b,
a.mode,c,null),b.return=a,b;Rg(a,b)}return null}function p(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case sa:return c.key===e?c.type===ua?n(a,b,c.props.children,d,e):k(a,b,c,d):null;case ta:return c.key===e?l(a,b,c,d):null}if(Pg(c)||La(c))return null!==e?null:n(a,b,c,d,null);Rg(a,c)}return null}function C(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=a.get(c)||
null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case sa:return a=a.get(null===d.key?c:d.key)||null,d.type===ua?n(b,a,d.props.children,e,d.key):k(b,a,d,e);case ta:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Pg(d)||La(d))return a=a.get(c)||null,n(b,a,d,e,null);Rg(b,d)}return null}function x(e,g,h,k){for(var l=null,t=null,u=g,z=g=0,q=null;null!==u&&z<h.length;z++){u.index>z?(q=u,u=null):q=u.sibling;var n=p(e,u,h[z],k);if(null===n){null===u&&(u=q);break}a&&u&&null===
n.alternate&&b(e,u);g=f(n,g,z);null===t?l=n:t.sibling=n;t=n;u=q}if(z===h.length)return c(e,u),l;if(null===u){for(;z<h.length;z++)u=A(e,h[z],k),null!==u&&(g=f(u,g,z),null===t?l=u:t.sibling=u,t=u);return l}for(u=d(e,u);z<h.length;z++)q=C(u,e,z,h[z],k),null!==q&&(a&&null!==q.alternate&&u.delete(null===q.key?z:q.key),g=f(q,g,z),null===t?l=q:t.sibling=q,t=q);a&&u.forEach(function(a){return b(e,a)});return l}function w(e,g,h,k){var l=La(h);if("function"!==typeof l)throw Error(y(150));h=l.call(h);if(null==
h)throw Error(y(151));for(var t=l=null,u=g,z=g=0,q=null,n=h.next();null!==u&&!n.done;z++,n=h.next()){u.index>z?(q=u,u=null):q=u.sibling;var w=p(e,u,n.value,k);if(null===w){null===u&&(u=q);break}a&&u&&null===w.alternate&&b(e,u);g=f(w,g,z);null===t?l=w:t.sibling=w;t=w;u=q}if(n.done)return c(e,u),l;if(null===u){for(;!n.done;z++,n=h.next())n=A(e,n.value,k),null!==n&&(g=f(n,g,z),null===t?l=n:t.sibling=n,t=n);return l}for(u=d(e,u);!n.done;z++,n=h.next())n=C(u,e,z,n.value,k),null!==n&&(a&&null!==n.alternate&&
u.delete(null===n.key?z:n.key),g=f(n,g,z),null===t?l=n:t.sibling=n,t=n);a&&u.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ua&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case sa:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){switch(k.tag){case 7:if(f.type===ua){c(a,k.sibling);d=e(k,f.props.children);d.return=a;a=d;break a}break;default:if(k.elementType===f.type){c(a,k.sibling);
d=e(k,f.props);d.ref=Qg(a,k,f);d.return=a;a=d;break a}}c(a,k);break}else b(a,k);k=k.sibling}f.type===ua?(d=Xg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Vg(f.type,f.key,f.props,null,a.mode,h),h.ref=Qg(a,d,f),h.return=a,a=h)}return g(a);case ta:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=
Wg(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=Ug(f,a.mode,h),d.return=a,a=d),g(a);if(Pg(f))return x(a,d,f,h);if(La(f))return w(a,d,f,h);l&&Rg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 22:case 0:case 11:case 15:throw Error(y(152,Ra(a.type)||"Component"));}return c(a,d)}}var Yg=Sg(!0),Zg=Sg(!1),$g={},ah=Bf($g),bh=Bf($g),ch=Bf($g);
function dh(a){if(a===$g)throw Error(y(174));return a}function eh(a,b){I(ch,b);I(bh,a);I(ah,$g);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:mb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=mb(b,a)}H(ah);I(ah,b)}function fh(){H(ah);H(bh);H(ch)}function gh(a){dh(ch.current);var b=dh(ah.current);var c=mb(b,a.type);b!==c&&(I(bh,a),I(ah,c))}function hh(a){bh.current===a&&(H(ah),H(bh))}var P=Bf(0);
function ih(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}var jh=null,kh=null,lh=!1;
function mh(a,b){var c=nh(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.flags=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function oh(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
function ph(a){if(lh){var b=kh;if(b){var c=b;if(!oh(a,b)){b=rf(c.nextSibling);if(!b||!oh(a,b)){a.flags=a.flags&-1025|2;lh=!1;jh=a;return}mh(jh,c)}jh=a;kh=rf(b.firstChild)}else a.flags=a.flags&-1025|2,lh=!1,jh=a}}function qh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;jh=a}
function rh(a){if(a!==jh)return!1;if(!lh)return qh(a),lh=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!nf(b,a.memoizedProps))for(b=kh;b;)mh(a,b),b=rf(b.nextSibling);qh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(y(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){kh=rf(a.nextSibling);break a}b--}else"$"!==c&&"$!"!==c&&"$?"!==c||b++}a=a.nextSibling}kh=null}}else kh=jh?rf(a.stateNode.nextSibling):null;return!0}
function sh(){kh=jh=null;lh=!1}var th=[];function uh(){for(var a=0;a<th.length;a++)th[a]._workInProgressVersionPrimary=null;th.length=0}var vh=ra.ReactCurrentDispatcher,wh=ra.ReactCurrentBatchConfig,xh=0,R=null,S=null,T=null,yh=!1,zh=!1;function Ah(){throw Error(y(321));}function Bh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return!1;return!0}
function Ch(a,b,c,d,e,f){xh=f;R=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;vh.current=null===a||null===a.memoizedState?Dh:Eh;a=c(d,e);if(zh){f=0;do{zh=!1;if(!(25>f))throw Error(y(301));f+=1;T=S=null;b.updateQueue=null;vh.current=Fh;a=c(d,e)}while(zh)}vh.current=Gh;b=null!==S&&null!==S.next;xh=0;T=S=R=null;yh=!1;if(b)throw Error(y(300));return a}function Hh(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===T?R.memoizedState=T=a:T=T.next=a;return T}
function Ih(){if(null===S){var a=R.alternate;a=null!==a?a.memoizedState:null}else a=S.next;var b=null===T?R.memoizedState:T.next;if(null!==b)T=b,S=a;else{if(null===a)throw Error(y(310));S=a;a={memoizedState:S.memoizedState,baseState:S.baseState,baseQueue:S.baseQueue,queue:S.queue,next:null};null===T?R.memoizedState=T=a:T=T.next=a}return T}function Jh(a,b){return"function"===typeof b?b(a):b}
function Kh(a){var b=Ih(),c=b.queue;if(null===c)throw Error(y(311));c.lastRenderedReducer=a;var d=S,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){e=e.next;d=d.baseState;var h=g=f=null,k=e;do{var l=k.lane;if((xh&l)===l)null!==h&&(h=h.next={lane:0,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null}),d=k.eagerReducer===a?k.eagerState:a(d,k.action);else{var n={lane:l,action:k.action,eagerReducer:k.eagerReducer,
eagerState:k.eagerState,next:null};null===h?(g=h=n,f=d):h=h.next=n;R.lanes|=l;Dg|=l}k=k.next}while(null!==k&&k!==e);null===h?f=d:h.next=g;He(d,b.memoizedState)||(ug=!0);b.memoizedState=d;b.baseState=f;b.baseQueue=h;c.lastRenderedState=d}return[b.memoizedState,c.dispatch]}
function Lh(a){var b=Ih(),c=b.queue;if(null===c)throw Error(y(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(ug=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}
function Mh(a,b,c){var d=b._getVersion;d=d(b._source);var e=b._workInProgressVersionPrimary;if(null!==e)a=e===d;else if(a=a.mutableReadLanes,a=(xh&a)===a)b._workInProgressVersionPrimary=d,th.push(b);if(a)return c(b._source);th.push(b);throw Error(y(350));}
function Nh(a,b,c,d){var e=U;if(null===e)throw Error(y(349));var f=b._getVersion,g=f(b._source),h=vh.current,k=h.useState(function(){return Mh(e,b,c)}),l=k[1],n=k[0];k=T;var A=a.memoizedState,p=A.refs,C=p.getSnapshot,x=A.source;A=A.subscribe;var w=R;a.memoizedState={refs:p,source:b,subscribe:d};h.useEffect(function(){p.getSnapshot=c;p.setSnapshot=l;var a=f(b._source);if(!He(g,a)){a=c(b._source);He(n,a)||(l(a),a=Ig(w),e.mutableReadLanes|=a&e.pendingLanes);a=e.mutableReadLanes;e.entangledLanes|=a;for(var d=
e.entanglements,h=a;0<h;){var k=31-Vc(h),v=1<<k;d[k]|=a;h&=~v}}},[c,b,d]);h.useEffect(function(){return d(b._source,function(){var a=p.getSnapshot,c=p.setSnapshot;try{c(a(b._source));var d=Ig(w);e.mutableReadLanes|=d&e.pendingLanes}catch(q){c(function(){throw q;})}})},[b,d]);He(C,c)&&He(x,b)&&He(A,d)||(a={pending:null,dispatch:null,lastRenderedReducer:Jh,lastRenderedState:n},a.dispatch=l=Oh.bind(null,R,a),k.queue=a,k.baseQueue=null,n=Mh(e,b,c),k.memoizedState=k.baseState=n);return n}
function Ph(a,b,c){var d=Ih();return Nh(d,a,b,c)}function Qh(a){var b=Hh();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={pending:null,dispatch:null,lastRenderedReducer:Jh,lastRenderedState:a};a=a.dispatch=Oh.bind(null,R,a);return[b.memoizedState,a]}
function Rh(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=R.updateQueue;null===b?(b={lastEffect:null},R.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function Sh(a){var b=Hh();a={current:a};return b.memoizedState=a}function Th(){return Ih().memoizedState}function Uh(a,b,c,d){var e=Hh();R.flags|=a;e.memoizedState=Rh(1|b,c,void 0,void 0===d?null:d)}
function Vh(a,b,c,d){var e=Ih();d=void 0===d?null:d;var f=void 0;if(null!==S){var g=S.memoizedState;f=g.destroy;if(null!==d&&Bh(d,g.deps)){Rh(b,c,f,d);return}}R.flags|=a;e.memoizedState=Rh(1|b,c,f,d)}function Wh(a,b){return Uh(516,4,a,b)}function Xh(a,b){return Vh(516,4,a,b)}function Yh(a,b){return Vh(4,2,a,b)}function Zh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}
function $h(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Vh(4,2,Zh.bind(null,b,a),c)}function ai(){}function bi(a,b){var c=Ih();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Bh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}function ci(a,b){var c=Ih();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Bh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}
function di(a,b){var c=eg();gg(98>c?98:c,function(){a(!0)});gg(97<c?97:c,function(){var c=wh.transition;wh.transition=1;try{a(!1),b()}finally{wh.transition=c}})}
function Oh(a,b,c){var d=Hg(),e=Ig(a),f={lane:e,action:c,eagerReducer:null,eagerState:null,next:null},g=b.pending;null===g?f.next=f:(f.next=g.next,g.next=f);b.pending=f;g=a.alternate;if(a===R||null!==g&&g===R)zh=yh=!0;else{if(0===a.lanes&&(null===g||0===g.lanes)&&(g=b.lastRenderedReducer,null!==g))try{var h=b.lastRenderedState,k=g(h,c);f.eagerReducer=g;f.eagerState=k;if(He(k,h))return}catch(l){}finally{}Jg(a,e,d)}}
var Gh={readContext:vg,useCallback:Ah,useContext:Ah,useEffect:Ah,useImperativeHandle:Ah,useLayoutEffect:Ah,useMemo:Ah,useReducer:Ah,useRef:Ah,useState:Ah,useDebugValue:Ah,useDeferredValue:Ah,useTransition:Ah,useMutableSource:Ah,useOpaqueIdentifier:Ah,unstable_isNewReconciler:!1},Dh={readContext:vg,useCallback:function(a,b){Hh().memoizedState=[a,void 0===b?null:b];return a},useContext:vg,useEffect:Wh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Uh(4,2,Zh.bind(null,
b,a),c)},useLayoutEffect:function(a,b){return Uh(4,2,a,b)},useMemo:function(a,b){var c=Hh();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Hh();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={pending:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=Oh.bind(null,R,a);return[d.memoizedState,a]},useRef:Sh,useState:Qh,useDebugValue:ai,useDeferredValue:function(a){var b=Qh(a),c=b[0],d=b[1];Wh(function(){var b=wh.transition;
wh.transition=1;try{d(a)}finally{wh.transition=b}},[a]);return c},useTransition:function(){var a=Qh(!1),b=a[0];a=di.bind(null,a[1]);Sh(a);return[a,b]},useMutableSource:function(a,b,c){var d=Hh();d.memoizedState={refs:{getSnapshot:b,setSnapshot:null},source:a,subscribe:c};return Nh(d,a,b,c)},useOpaqueIdentifier:function(){if(lh){var a=!1,b=uf(function(){a||(a=!0,c("r:"+(tf++).toString(36)));throw Error(y(355));}),c=Qh(b)[1];0===(R.mode&2)&&(R.flags|=516,Rh(5,function(){c("r:"+(tf++).toString(36))},
void 0,null));return b}b="r:"+(tf++).toString(36);Qh(b);return b},unstable_isNewReconciler:!1},Eh={readContext:vg,useCallback:bi,useContext:vg,useEffect:Xh,useImperativeHandle:$h,useLayoutEffect:Yh,useMemo:ci,useReducer:Kh,useRef:Th,useState:function(){return Kh(Jh)},useDebugValue:ai,useDeferredValue:function(a){var b=Kh(Jh),c=b[0],d=b[1];Xh(function(){var b=wh.transition;wh.transition=1;try{d(a)}finally{wh.transition=b}},[a]);return c},useTransition:function(){var a=Kh(Jh)[0];return[Th().current,
a]},useMutableSource:Ph,useOpaqueIdentifier:function(){return Kh(Jh)[0]},unstable_isNewReconciler:!1},Fh={readContext:vg,useCallback:bi,useContext:vg,useEffect:Xh,useImperativeHandle:$h,useLayoutEffect:Yh,useMemo:ci,useReducer:Lh,useRef:Th,useState:function(){return Lh(Jh)},useDebugValue:ai,useDeferredValue:function(a){var b=Lh(Jh),c=b[0],d=b[1];Xh(function(){var b=wh.transition;wh.transition=1;try{d(a)}finally{wh.transition=b}},[a]);return c},useTransition:function(){var a=Lh(Jh)[0];return[Th().current,
a]},useMutableSource:Ph,useOpaqueIdentifier:function(){return Lh(Jh)[0]},unstable_isNewReconciler:!1},ei=ra.ReactCurrentOwner,ug=!1;function fi(a,b,c,d){b.child=null===a?Zg(b,null,c,d):Yg(b,a.child,c,d)}function gi(a,b,c,d,e){c=c.render;var f=b.ref;tg(b,e);d=Ch(a,b,c,d,f,e);if(null!==a&&!ug)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,hi(a,b,e);b.flags|=1;fi(a,b,d,e);return b.child}
function ii(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!ji(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ki(a,b,g,d,e,f);a=Vg(c.type,null,d,b,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(0===(e&f)&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:Je,c(e,d)&&a.ref===b.ref))return hi(a,b,f);b.flags|=1;a=Tg(g,d);a.ref=b.ref;a.return=b;return b.child=a}
function ki(a,b,c,d,e,f){if(null!==a&&Je(a.memoizedProps,d)&&a.ref===b.ref)if(ug=!1,0!==(f&e))0!==(a.flags&16384)&&(ug=!0);else return b.lanes=a.lanes,hi(a,b,f);return li(a,b,c,d,f)}
function mi(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode||"unstable-defer-without-hiding"===d.mode)if(0===(b.mode&4))b.memoizedState={baseLanes:0},ni(b,c);else if(0!==(c&1073741824))b.memoizedState={baseLanes:0},ni(b,null!==f?f.baseLanes:c);else return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a},ni(b,a),null;else null!==f?(d=f.baseLanes|c,b.memoizedState=null):d=c,ni(b,d);fi(a,b,e,c);return b.child}
function oi(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=128}function li(a,b,c,d,e){var f=Ff(c)?Df:M.current;f=Ef(b,f);tg(b,e);c=Ch(a,b,c,d,f,e);if(null!==a&&!ug)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,hi(a,b,e);b.flags|=1;fi(a,b,c,e);return b.child}
function pi(a,b,c,d,e){if(Ff(c)){var f=!0;Jf(b)}else f=!1;tg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),Mg(b,c,d),Og(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=vg(l):(l=Ff(c)?Df:M.current,l=Ef(b,l));var n=c.getDerivedStateFromProps,A="function"===typeof n||"function"===typeof g.getSnapshotBeforeUpdate;A||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Ng(b,g,d,l);wg=!1;var p=b.memoizedState;g.state=p;Cg(b,d,g,e);k=b.memoizedState;h!==d||p!==k||N.current||wg?("function"===typeof n&&(Gg(b,c,n,d),k=b.memoizedState),(h=wg||Lg(b,c,h,d,p,k,l))?(A||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===
typeof g.componentDidMount&&(b.flags|=4)):("function"===typeof g.componentDidMount&&(b.flags|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4),d=!1)}else{g=b.stateNode;yg(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:lg(b.type,h);g.props=l;A=b.pendingProps;p=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=vg(k):(k=Ff(c)?Df:M.current,k=Ef(b,k));var C=c.getDerivedStateFromProps;(n="function"===typeof C||
"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==A||p!==k)&&Ng(b,g,d,k);wg=!1;p=b.memoizedState;g.state=p;Cg(b,d,g,e);var x=b.memoizedState;h!==A||p!==x||N.current||wg?("function"===typeof C&&(Gg(b,c,C,d),x=b.memoizedState),(l=wg||Lg(b,c,l,d,p,x,k))?(n||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,
x,k),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||
h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),d=!1)}return qi(a,b,c,d,f,e)}
function qi(a,b,c,d,e,f){oi(a,b);var g=0!==(b.flags&64);if(!d&&!g)return e&&Kf(b,c,!1),hi(a,b,f);d=b.stateNode;ei.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Yg(b,a.child,null,f),b.child=Yg(b,null,h,f)):fi(a,b,h,f);b.memoizedState=d.state;e&&Kf(b,c,!0);return b.child}function ri(a){var b=a.stateNode;b.pendingContext?Hf(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Hf(a,b.context,!1);eh(a,b.containerInfo)}
var si={dehydrated:null,retryLane:0};
function ti(a,b,c){var d=b.pendingProps,e=P.current,f=!1,g;(g=0!==(b.flags&64))||(g=null!==a&&null===a.memoizedState?!1:0!==(e&2));g?(f=!0,b.flags&=-65):null!==a&&null===a.memoizedState||void 0===d.fallback||!0===d.unstable_avoidThisFallback||(e|=1);I(P,e&1);if(null===a){void 0!==d.fallback&&ph(b);a=d.children;e=d.fallback;if(f)return a=ui(b,a,e,c),b.child.memoizedState={baseLanes:c},b.memoizedState=si,a;if("number"===typeof d.unstable_expectedLoadTime)return a=ui(b,a,e,c),b.child.memoizedState={baseLanes:c},
b.memoizedState=si,b.lanes=33554432,a;c=vi({mode:"visible",children:a},b.mode,c,null);c.return=b;return b.child=c}if(null!==a.memoizedState){if(f)return d=wi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=si,d;c=xi(a,b,d.children,c);b.memoizedState=null;return c}if(f)return d=wi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:
{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=si,d;c=xi(a,b,d.children,c);b.memoizedState=null;return c}function ui(a,b,c,d){var e=a.mode,f=a.child;b={mode:"hidden",children:b};0===(e&2)&&null!==f?(f.childLanes=0,f.pendingProps=b):f=vi(b,e,0,null);c=Xg(c,e,d,null);f.return=a;c.return=a;f.sibling=c;a.child=f;return c}
function xi(a,b,c,d){var e=a.child;a=e.sibling;c=Tg(e,{mode:"visible",children:c});0===(b.mode&2)&&(c.lanes=d);c.return=b;c.sibling=null;null!==a&&(a.nextEffect=null,a.flags=8,b.firstEffect=b.lastEffect=a);return b.child=c}
function wi(a,b,c,d,e){var f=b.mode,g=a.child;a=g.sibling;var h={mode:"hidden",children:c};0===(f&2)&&b.child!==g?(c=b.child,c.childLanes=0,c.pendingProps=h,g=c.lastEffect,null!==g?(b.firstEffect=c.firstEffect,b.lastEffect=g,g.nextEffect=null):b.firstEffect=b.lastEffect=null):c=Tg(g,h);null!==a?d=Tg(a,d):(d=Xg(d,f,e,null),d.flags|=2);d.return=b;c.return=b;c.sibling=d;b.child=c;return d}function yi(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);sg(a.return,b)}
function zi(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=c,g.tailMode=e,g.lastEffect=f)}
function Ai(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;fi(a,b,d.children,c);d=P.current;if(0!==(d&2))d=d&1|2,b.flags|=64;else{if(null!==a&&0!==(a.flags&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&yi(a,c);else if(19===a.tag)yi(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}I(P,d);if(0===(b.mode&2))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===ih(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);zi(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===ih(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}zi(b,!0,c,null,f,b.lastEffect);break;case "together":zi(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null}return b.child}
function hi(a,b,c){null!==a&&(b.dependencies=a.dependencies);Dg|=b.lanes;if(0!==(c&b.childLanes)){if(null!==a&&b.child!==a.child)throw Error(y(153));if(null!==b.child){a=b.child;c=Tg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Tg(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}return null}var Bi,Ci,Di,Ei;
Bi=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Ci=function(){};
Di=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;dh(ah.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "option":e=eb(a,e);d=eb(a,d);f=[];break;case "select":e=m({},e,{value:void 0});d=m({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=jf)}vb(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===
l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&(c||(c={}),c[g]="")}else"dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ca.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||
(c={}),c[g]=k[g])}else c||(f||(f=[]),f.push(l,c)),c=k;else"dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ca.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&G("scroll",a),f||h===k||(f=[])):"object"===typeof k&&null!==k&&k.$$typeof===Ga?k.toString():(f=f||[]).push(l,k))}c&&(f=f||[]).push("style",
c);var l=f;if(b.updateQueue=l)b.flags|=4}};Ei=function(a,b,c,d){c!==d&&(b.flags|=4)};function Fi(a,b){if(!lh)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function Gi(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Ff(b.type)&&Gf(),null;case 3:fh();H(N);H(M);uh();d=b.stateNode;d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)rh(b)?b.flags|=4:d.hydrate||(b.flags|=256);Ci(b);return null;case 5:hh(b);var e=dh(ch.current);c=b.type;if(null!==a&&null!=b.stateNode)Di(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=128);else{if(!d){if(null===
b.stateNode)throw Error(y(166));return null}a=dh(ah.current);if(rh(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[wf]=b;d[xf]=f;switch(c){case "dialog":G("cancel",d);G("close",d);break;case "iframe":case "object":case "embed":G("load",d);break;case "video":case "audio":for(a=0;a<Xe.length;a++)G(Xe[a],d);break;case "source":G("error",d);break;case "img":case "image":case "link":G("error",d);G("load",d);break;case "details":G("toggle",d);break;case "input":Za(d,f);G("invalid",d);break;case "select":d._wrapperState=
{wasMultiple:!!f.multiple};G("invalid",d);break;case "textarea":hb(d,f),G("invalid",d)}vb(c,f);a=null;for(var g in f)f.hasOwnProperty(g)&&(e=f[g],"children"===g?"string"===typeof e?d.textContent!==e&&(a=["children",e]):"number"===typeof e&&d.textContent!==""+e&&(a=["children",""+e]):ca.hasOwnProperty(g)&&null!=e&&"onScroll"===g&&G("scroll",d));switch(c){case "input":Va(d);cb(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=
jf)}d=a;b.updateQueue=d;null!==d&&(b.flags|=4)}else{g=9===e.nodeType?e:e.ownerDocument;a===kb.html&&(a=lb(c));a===kb.html?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[wf]=b;a[xf]=d;Bi(a,b,!1,!1);b.stateNode=a;g=wb(c,d);switch(c){case "dialog":G("cancel",a);G("close",a);
e=d;break;case "iframe":case "object":case "embed":G("load",a);e=d;break;case "video":case "audio":for(e=0;e<Xe.length;e++)G(Xe[e],a);e=d;break;case "source":G("error",a);e=d;break;case "img":case "image":case "link":G("error",a);G("load",a);e=d;break;case "details":G("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);G("invalid",a);break;case "option":e=eb(a,d);break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=m({},d,{value:void 0});G("invalid",a);break;case "textarea":hb(a,d);e=
gb(a,d);G("invalid",a);break;default:e=d}vb(c,e);var h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?tb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&ob(a,k)):"children"===f?"string"===typeof k?("textarea"!==c||""!==k)&&pb(a,k):"number"===typeof k&&pb(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ca.hasOwnProperty(f)?null!=k&&"onScroll"===f&&G("scroll",a):null!=k&&qa(a,f,k,g))}switch(c){case "input":Va(a);cb(a,d,!1);
break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof e.onClick&&(a.onclick=jf)}mf(c,d)&&(b.flags|=4)}null!==b.ref&&(b.flags|=128)}return null;case 6:if(a&&null!=b.stateNode)Ei(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(y(166));
c=dh(ch.current);dh(ah.current);rh(b)?(d=b.stateNode,c=b.memoizedProps,d[wf]=b,d.nodeValue!==c&&(b.flags|=4)):(d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[wf]=b,b.stateNode=d)}return null;case 13:H(P);d=b.memoizedState;if(0!==(b.flags&64))return b.lanes=c,b;d=null!==d;c=!1;null===a?void 0!==b.memoizedProps.fallback&&rh(b):c=null!==a.memoizedState;if(d&&!c&&0!==(b.mode&2))if(null===a&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(P.current&1))0===V&&(V=3);else{if(0===V||3===V)V=
4;null===U||0===(Dg&134217727)&&0===(Hi&134217727)||Ii(U,W)}if(d||c)b.flags|=4;return null;case 4:return fh(),Ci(b),null===a&&cf(b.stateNode.containerInfo),null;case 10:return rg(b),null;case 17:return Ff(b.type)&&Gf(),null;case 19:H(P);d=b.memoizedState;if(null===d)return null;f=0!==(b.flags&64);g=d.rendering;if(null===g)if(f)Fi(d,!1);else{if(0!==V||null!==a&&0!==(a.flags&64))for(a=b.child;null!==a;){g=ih(a);if(null!==g){b.flags|=64;Fi(d,!1);f=g.updateQueue;null!==f&&(b.updateQueue=f,b.flags|=4);
null===d.lastEffect&&(b.firstEffect=null);b.lastEffect=d.lastEffect;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=2,f.nextEffect=null,f.firstEffect=null,f.lastEffect=null,g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,
f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;I(P,P.current&1|2);return b.child}a=a.sibling}null!==d.tail&&O()>Ji&&(b.flags|=64,f=!0,Fi(d,!1),b.lanes=33554432)}else{if(!f)if(a=ih(g),null!==a){if(b.flags|=64,f=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Fi(d,!0),null===d.tail&&"hidden"===d.tailMode&&!g.alternate&&!lh)return b=b.lastEffect=d.lastEffect,null!==b&&(b.nextEffect=null),null}else 2*O()-d.renderingStartTime>Ji&&1073741824!==c&&(b.flags|=
64,f=!0,Fi(d,!1),b.lanes=33554432);d.isBackwards?(g.sibling=b.child,b.child=g):(c=d.last,null!==c?c.sibling=g:b.child=g,d.last=g)}return null!==d.tail?(c=d.tail,d.rendering=c,d.tail=c.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=O(),c.sibling=null,b=P.current,I(P,f?b&1|2:b&1),c):null;case 23:case 24:return Ki(),null!==a&&null!==a.memoizedState!==(null!==b.memoizedState)&&"unstable-defer-without-hiding"!==d.mode&&(b.flags|=4),null}throw Error(y(156,b.tag));}
function Li(a){switch(a.tag){case 1:Ff(a.type)&&Gf();var b=a.flags;return b&4096?(a.flags=b&-4097|64,a):null;case 3:fh();H(N);H(M);uh();b=a.flags;if(0!==(b&64))throw Error(y(285));a.flags=b&-4097|64;return a;case 5:return hh(a),null;case 13:return H(P),b=a.flags,b&4096?(a.flags=b&-4097|64,a):null;case 19:return H(P),null;case 4:return fh(),null;case 10:return rg(a),null;case 23:case 24:return Ki(),null;default:return null}}
function Mi(a,b){try{var c="",d=b;do c+=Qa(d),d=d.return;while(d);var e=c}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack}return{value:a,source:b,stack:e}}function Ni(a,b){try{console.error(b.value)}catch(c){setTimeout(function(){throw c;})}}var Oi="function"===typeof WeakMap?WeakMap:Map;function Pi(a,b,c){c=zg(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Qi||(Qi=!0,Ri=d);Ni(a,b)};return c}
function Si(a,b,c){c=zg(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Ni(a,b);return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===Ti?Ti=new Set([this]):Ti.add(this),Ni(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}var Ui="function"===typeof WeakSet?WeakSet:Set;
function Vi(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Wi(a,c)}else b.current=null}function Xi(a,b){switch(b.tag){case 0:case 11:case 15:case 22:return;case 1:if(b.flags&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:lg(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}return;case 3:b.flags&256&&qf(b.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(y(163));}
function Yi(a,b,c){switch(c.tag){case 0:case 11:case 15:case 22:b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{if(3===(a.tag&3)){var d=a.create;a.destroy=d()}a=a.next}while(a!==b)}b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{var e=a;d=e.next;e=e.tag;0!==(e&4)&&0!==(e&1)&&(Zi(c,a),$i(c,a));a=d}while(a!==b)}return;case 1:a=c.stateNode;c.flags&4&&(null===b?a.componentDidMount():(d=c.elementType===c.type?b.memoizedProps:lg(c.type,b.memoizedProps),a.componentDidUpdate(d,
b.memoizedState,a.__reactInternalSnapshotBeforeUpdate)));b=c.updateQueue;null!==b&&Eg(c,b,a);return;case 3:b=c.updateQueue;if(null!==b){a=null;if(null!==c.child)switch(c.child.tag){case 5:a=c.child.stateNode;break;case 1:a=c.child.stateNode}Eg(c,b,a)}return;case 5:a=c.stateNode;null===b&&c.flags&4&&mf(c.type,c.memoizedProps)&&a.focus();return;case 6:return;case 4:return;case 12:return;case 13:null===c.memoizedState&&(c=c.alternate,null!==c&&(c=c.memoizedState,null!==c&&(c=c.dehydrated,null!==c&&Cc(c))));
return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(y(163));}
function aj(a,b){for(var c=a;;){if(5===c.tag){var d=c.stateNode;if(b)d=d.style,"function"===typeof d.setProperty?d.setProperty("display","none","important"):d.display="none";else{d=c.stateNode;var e=c.memoizedProps.style;e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null;d.style.display=sb("display",e)}}else if(6===c.tag)c.stateNode.nodeValue=b?"":c.memoizedProps;else if((23!==c.tag&&24!==c.tag||null===c.memoizedState||c===a)&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===
a)break;for(;null===c.sibling;){if(null===c.return||c.return===a)return;c=c.return}c.sibling.return=c.return;c=c.sibling}}
function bj(a,b){if(Mf&&"function"===typeof Mf.onCommitFiberUnmount)try{Mf.onCommitFiberUnmount(Lf,b)}catch(f){}switch(b.tag){case 0:case 11:case 14:case 15:case 22:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var c=a=a.next;do{var d=c,e=d.destroy;d=d.tag;if(void 0!==e)if(0!==(d&4))Zi(b,c);else{d=b;try{e()}catch(f){Wi(d,f)}}c=c.next}while(c!==a)}break;case 1:Vi(b);a=b.stateNode;if("function"===typeof a.componentWillUnmount)try{a.props=b.memoizedProps,a.state=b.memoizedState,a.componentWillUnmount()}catch(f){Wi(b,
f)}break;case 5:Vi(b);break;case 4:cj(a,b)}}function dj(a){a.alternate=null;a.child=null;a.dependencies=null;a.firstEffect=null;a.lastEffect=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.return=null;a.updateQueue=null}function ej(a){return 5===a.tag||3===a.tag||4===a.tag}
function fj(a){a:{for(var b=a.return;null!==b;){if(ej(b))break a;b=b.return}throw Error(y(160));}var c=b;b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(y(161));}c.flags&16&&(pb(b,""),c.flags&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||ej(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.flags&2)continue b;if(null===
c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.flags&2)){c=c.stateNode;break a}}d?gj(a,c,b):hj(a,c,b)}
function gj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=jf));else if(4!==d&&(a=a.child,null!==a))for(gj(a,b,c),a=a.sibling;null!==a;)gj(a,b,c),a=a.sibling}
function hj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(hj(a,b,c),a=a.sibling;null!==a;)hj(a,b,c),a=a.sibling}
function cj(a,b){for(var c=b,d=!1,e,f;;){if(!d){d=c.return;a:for(;;){if(null===d)throw Error(y(160));e=d.stateNode;switch(d.tag){case 5:f=!1;break a;case 3:e=e.containerInfo;f=!0;break a;case 4:e=e.containerInfo;f=!0;break a}d=d.return}d=!0}if(5===c.tag||6===c.tag){a:for(var g=a,h=c,k=h;;)if(bj(g,k),null!==k.child&&4!==k.tag)k.child.return=k,k=k.child;else{if(k===h)break a;for(;null===k.sibling;){if(null===k.return||k.return===h)break a;k=k.return}k.sibling.return=k.return;k=k.sibling}f?(g=e,h=c.stateNode,
8===g.nodeType?g.parentNode.removeChild(h):g.removeChild(h)):e.removeChild(c.stateNode)}else if(4===c.tag){if(null!==c.child){e=c.stateNode.containerInfo;f=!0;c.child.return=c;c=c.child;continue}}else if(bj(a,c),null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;4===c.tag&&(d=!1)}c.sibling.return=c.return;c=c.sibling}}
function ij(a,b){switch(b.tag){case 0:case 11:case 14:case 15:case 22:var c=b.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do 3===(d.tag&3)&&(a=d.destroy,d.destroy=void 0,void 0!==a&&a()),d=d.next;while(d!==c)}return;case 1:return;case 5:c=b.stateNode;if(null!=c){d=b.memoizedProps;var e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[xf]=d;"input"===a&&"radio"===d.type&&null!=d.name&&$a(c,d);wb(a,e);b=wb(a,d);for(e=0;e<f.length;e+=
2){var g=f[e],h=f[e+1];"style"===g?tb(c,h):"dangerouslySetInnerHTML"===g?ob(c,h):"children"===g?pb(c,h):qa(c,g,h,b)}switch(a){case "input":ab(c,d);break;case "textarea":ib(c,d);break;case "select":a=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,f=d.value,null!=f?fb(c,!!d.multiple,f,!1):a!==!!d.multiple&&(null!=d.defaultValue?fb(c,!!d.multiple,d.defaultValue,!0):fb(c,!!d.multiple,d.multiple?[]:"",!1))}}}return;case 6:if(null===b.stateNode)throw Error(y(162));b.stateNode.nodeValue=
b.memoizedProps;return;case 3:c=b.stateNode;c.hydrate&&(c.hydrate=!1,Cc(c.containerInfo));return;case 12:return;case 13:null!==b.memoizedState&&(jj=O(),aj(b.child,!0));kj(b);return;case 19:kj(b);return;case 17:return;case 23:case 24:aj(b,null!==b.memoizedState);return}throw Error(y(163));}function kj(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Ui);b.forEach(function(b){var d=lj.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
function mj(a,b){return null!==a&&(a=a.memoizedState,null===a||null!==a.dehydrated)?(b=b.memoizedState,null!==b&&null===b.dehydrated):!1}var nj=Math.ceil,oj=ra.ReactCurrentDispatcher,pj=ra.ReactCurrentOwner,X=0,U=null,Y=null,W=0,qj=0,rj=Bf(0),V=0,sj=null,tj=0,Dg=0,Hi=0,uj=0,vj=null,jj=0,Ji=Infinity;function wj(){Ji=O()+500}var Z=null,Qi=!1,Ri=null,Ti=null,xj=!1,yj=null,zj=90,Aj=[],Bj=[],Cj=null,Dj=0,Ej=null,Fj=-1,Gj=0,Hj=0,Ij=null,Jj=!1;function Hg(){return 0!==(X&48)?O():-1!==Fj?Fj:Fj=O()}
function Ig(a){a=a.mode;if(0===(a&2))return 1;if(0===(a&4))return 99===eg()?1:2;0===Gj&&(Gj=tj);if(0!==kg.transition){0!==Hj&&(Hj=null!==vj?vj.pendingLanes:0);a=Gj;var b=4186112&~Hj;b&=-b;0===b&&(a=4186112&~a,b=a&-a,0===b&&(b=8192));return b}a=eg();0!==(X&4)&&98===a?a=Xc(12,Gj):(a=Sc(a),a=Xc(a,Gj));return a}
function Jg(a,b,c){if(50<Dj)throw Dj=0,Ej=null,Error(y(185));a=Kj(a,b);if(null===a)return null;$c(a,b,c);a===U&&(Hi|=b,4===V&&Ii(a,W));var d=eg();1===b?0!==(X&8)&&0===(X&48)?Lj(a):(Mj(a,c),0===X&&(wj(),ig())):(0===(X&4)||98!==d&&99!==d||(null===Cj?Cj=new Set([a]):Cj.add(a)),Mj(a,c));vj=a}function Kj(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}
function Mj(a,b){for(var c=a.callbackNode,d=a.suspendedLanes,e=a.pingedLanes,f=a.expirationTimes,g=a.pendingLanes;0<g;){var h=31-Vc(g),k=1<<h,l=f[h];if(-1===l){if(0===(k&d)||0!==(k&e)){l=b;Rc(k);var n=F;f[h]=10<=n?l+250:6<=n?l+5E3:-1}}else l<=b&&(a.expiredLanes|=k);g&=~k}d=Uc(a,a===U?W:0);b=F;if(0===d)null!==c&&(c!==Zf&&Pf(c),a.callbackNode=null,a.callbackPriority=0);else{if(null!==c){if(a.callbackPriority===b)return;c!==Zf&&Pf(c)}15===b?(c=Lj.bind(null,a),null===ag?(ag=[c],bg=Of(Uf,jg)):ag.push(c),
c=Zf):14===b?c=hg(99,Lj.bind(null,a)):(c=Tc(b),c=hg(c,Nj.bind(null,a)));a.callbackPriority=b;a.callbackNode=c}}
function Nj(a){Fj=-1;Hj=Gj=0;if(0!==(X&48))throw Error(y(327));var b=a.callbackNode;if(Oj()&&a.callbackNode!==b)return null;var c=Uc(a,a===U?W:0);if(0===c)return null;var d=c;var e=X;X|=16;var f=Pj();if(U!==a||W!==d)wj(),Qj(a,d);do try{Rj();break}catch(h){Sj(a,h)}while(1);qg();oj.current=f;X=e;null!==Y?d=0:(U=null,W=0,d=V);if(0!==(tj&Hi))Qj(a,0);else if(0!==d){2===d&&(X|=64,a.hydrate&&(a.hydrate=!1,qf(a.containerInfo)),c=Wc(a),0!==c&&(d=Tj(a,c)));if(1===d)throw b=sj,Qj(a,0),Ii(a,c),Mj(a,O()),b;a.finishedWork=
a.current.alternate;a.finishedLanes=c;switch(d){case 0:case 1:throw Error(y(345));case 2:Uj(a);break;case 3:Ii(a,c);if((c&62914560)===c&&(d=jj+500-O(),10<d)){if(0!==Uc(a,0))break;e=a.suspendedLanes;if((e&c)!==c){Hg();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=of(Uj.bind(null,a),d);break}Uj(a);break;case 4:Ii(a,c);if((c&4186112)===c)break;d=a.eventTimes;for(e=-1;0<c;){var g=31-Vc(c);f=1<<g;g=d[g];g>e&&(e=g);c&=~f}c=e;c=O()-c;c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3E3>c?3E3:4320>
c?4320:1960*nj(c/1960))-c;if(10<c){a.timeoutHandle=of(Uj.bind(null,a),c);break}Uj(a);break;case 5:Uj(a);break;default:throw Error(y(329));}}Mj(a,O());return a.callbackNode===b?Nj.bind(null,a):null}function Ii(a,b){b&=~uj;b&=~Hi;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-Vc(b),d=1<<c;a[c]=-1;b&=~d}}
function Lj(a){if(0!==(X&48))throw Error(y(327));Oj();if(a===U&&0!==(a.expiredLanes&W)){var b=W;var c=Tj(a,b);0!==(tj&Hi)&&(b=Uc(a,b),c=Tj(a,b))}else b=Uc(a,0),c=Tj(a,b);0!==a.tag&&2===c&&(X|=64,a.hydrate&&(a.hydrate=!1,qf(a.containerInfo)),b=Wc(a),0!==b&&(c=Tj(a,b)));if(1===c)throw c=sj,Qj(a,0),Ii(a,b),Mj(a,O()),c;a.finishedWork=a.current.alternate;a.finishedLanes=b;Uj(a);Mj(a,O());return null}
function Vj(){if(null!==Cj){var a=Cj;Cj=null;a.forEach(function(a){a.expiredLanes|=24&a.pendingLanes;Mj(a,O())})}ig()}function Wj(a,b){var c=X;X|=1;try{return a(b)}finally{X=c,0===X&&(wj(),ig())}}function Xj(a,b){var c=X;X&=-2;X|=8;try{return a(b)}finally{X=c,0===X&&(wj(),ig())}}function ni(a,b){I(rj,qj);qj|=b;tj|=b}function Ki(){qj=rj.current;H(rj)}
function Qj(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,pf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&Gf();break;case 3:fh();H(N);H(M);uh();break;case 5:hh(d);break;case 4:fh();break;case 13:H(P);break;case 19:H(P);break;case 10:rg(d);break;case 23:case 24:Ki()}c=c.return}U=a;Y=Tg(a.current,null);W=qj=tj=b;V=0;sj=null;uj=Hi=Dg=0}
function Sj(a,b){do{var c=Y;try{qg();vh.current=Gh;if(yh){for(var d=R.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next}yh=!1}xh=0;T=S=R=null;zh=!1;pj.current=null;if(null===c||null===c.return){V=1;sj=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=W;h.flags|=2048;h.firstEffect=h.lastEffect=null;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k;if(0===(h.mode&2)){var n=h.alternate;n?(h.updateQueue=n.updateQueue,h.memoizedState=n.memoizedState,h.lanes=n.lanes):
(h.updateQueue=null,h.memoizedState=null)}var A=0!==(P.current&1),p=g;do{var C;if(C=13===p.tag){var x=p.memoizedState;if(null!==x)C=null!==x.dehydrated?!0:!1;else{var w=p.memoizedProps;C=void 0===w.fallback?!1:!0!==w.unstable_avoidThisFallback?!0:A?!1:!0}}if(C){var z=p.updateQueue;if(null===z){var u=new Set;u.add(l);p.updateQueue=u}else z.add(l);if(0===(p.mode&2)){p.flags|=64;h.flags|=16384;h.flags&=-2981;if(1===h.tag)if(null===h.alternate)h.tag=17;else{var t=zg(-1,1);t.tag=2;Ag(h,t)}h.lanes|=1;break a}k=
void 0;h=b;var q=f.pingCache;null===q?(q=f.pingCache=new Oi,k=new Set,q.set(l,k)):(k=q.get(l),void 0===k&&(k=new Set,q.set(l,k)));if(!k.has(h)){k.add(h);var v=Yj.bind(null,f,l,h);l.then(v,v)}p.flags|=4096;p.lanes=b;break a}p=p.return}while(null!==p);k=Error((Ra(h.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")}5!==V&&(V=2);k=Mi(k,h);p=
g;do{switch(p.tag){case 3:f=k;p.flags|=4096;b&=-b;p.lanes|=b;var J=Pi(p,f,b);Bg(p,J);break a;case 1:f=k;var K=p.type,Q=p.stateNode;if(0===(p.flags&64)&&("function"===typeof K.getDerivedStateFromError||null!==Q&&"function"===typeof Q.componentDidCatch&&(null===Ti||!Ti.has(Q)))){p.flags|=4096;b&=-b;p.lanes|=b;var L=Si(p,f,b);Bg(p,L);break a}}p=p.return}while(null!==p)}Zj(c)}catch(va){b=va;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}
function Pj(){var a=oj.current;oj.current=Gh;return null===a?Gh:a}function Tj(a,b){var c=X;X|=16;var d=Pj();U===a&&W===b||Qj(a,b);do try{ak();break}catch(e){Sj(a,e)}while(1);qg();X=c;oj.current=d;if(null!==Y)throw Error(y(261));U=null;W=0;return V}function ak(){for(;null!==Y;)bk(Y)}function Rj(){for(;null!==Y&&!Qf();)bk(Y)}function bk(a){var b=ck(a.alternate,a,qj);a.memoizedProps=a.pendingProps;null===b?Zj(a):Y=b;pj.current=null}
function Zj(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&2048)){c=Gi(c,b,qj);if(null!==c){Y=c;return}c=b;if(24!==c.tag&&23!==c.tag||null===c.memoizedState||0!==(qj&1073741824)||0===(c.mode&4)){for(var d=0,e=c.child;null!==e;)d|=e.lanes|e.childLanes,e=e.sibling;c.childLanes=d}null!==a&&0===(a.flags&2048)&&(null===a.firstEffect&&(a.firstEffect=b.firstEffect),null!==b.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=b.firstEffect),a.lastEffect=b.lastEffect),1<b.flags&&(null!==
a.lastEffect?a.lastEffect.nextEffect=b:a.firstEffect=b,a.lastEffect=b))}else{c=Li(b);if(null!==c){c.flags&=2047;Y=c;return}null!==a&&(a.firstEffect=a.lastEffect=null,a.flags|=2048)}b=b.sibling;if(null!==b){Y=b;return}Y=b=a}while(null!==b);0===V&&(V=5)}function Uj(a){var b=eg();gg(99,dk.bind(null,a,b));return null}
function dk(a,b){do Oj();while(null!==yj);if(0!==(X&48))throw Error(y(327));var c=a.finishedWork;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(y(177));a.callbackNode=null;var d=c.lanes|c.childLanes,e=d,f=a.pendingLanes&~e;a.pendingLanes=e;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=e;a.mutableReadLanes&=e;a.entangledLanes&=e;e=a.entanglements;for(var g=a.eventTimes,h=a.expirationTimes;0<f;){var k=31-Vc(f),l=1<<k;e[k]=0;g[k]=-1;h[k]=-1;f&=~l}null!==
Cj&&0===(d&24)&&Cj.has(a)&&Cj.delete(a);a===U&&(Y=U=null,W=0);1<c.flags?null!==c.lastEffect?(c.lastEffect.nextEffect=c,d=c.firstEffect):d=c:d=c.firstEffect;if(null!==d){e=X;X|=32;pj.current=null;kf=fd;g=Ne();if(Oe(g)){if("selectionStart"in g)h={start:g.selectionStart,end:g.selectionEnd};else a:if(h=(h=g.ownerDocument)&&h.defaultView||window,(l=h.getSelection&&h.getSelection())&&0!==l.rangeCount){h=l.anchorNode;f=l.anchorOffset;k=l.focusNode;l=l.focusOffset;try{h.nodeType,k.nodeType}catch(va){h=null;
break a}var n=0,A=-1,p=-1,C=0,x=0,w=g,z=null;b:for(;;){for(var u;;){w!==h||0!==f&&3!==w.nodeType||(A=n+f);w!==k||0!==l&&3!==w.nodeType||(p=n+l);3===w.nodeType&&(n+=w.nodeValue.length);if(null===(u=w.firstChild))break;z=w;w=u}for(;;){if(w===g)break b;z===h&&++C===f&&(A=n);z===k&&++x===l&&(p=n);if(null!==(u=w.nextSibling))break;w=z;z=w.parentNode}w=u}h=-1===A||-1===p?null:{start:A,end:p}}else h=null;h=h||{start:0,end:0}}else h=null;lf={focusedElem:g,selectionRange:h};fd=!1;Ij=null;Jj=!1;Z=d;do try{ek()}catch(va){if(null===
Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect}while(null!==Z);Ij=null;Z=d;do try{for(g=a;null!==Z;){var t=Z.flags;t&16&&pb(Z.stateNode,"");if(t&128){var q=Z.alternate;if(null!==q){var v=q.ref;null!==v&&("function"===typeof v?v(null):v.current=null)}}switch(t&1038){case 2:fj(Z);Z.flags&=-3;break;case 6:fj(Z);Z.flags&=-3;ij(Z.alternate,Z);break;case 1024:Z.flags&=-1025;break;case 1028:Z.flags&=-1025;ij(Z.alternate,Z);break;case 4:ij(Z.alternate,Z);break;case 8:h=Z;cj(g,h);var J=h.alternate;dj(h);null!==
J&&dj(J)}Z=Z.nextEffect}}catch(va){if(null===Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect}while(null!==Z);v=lf;q=Ne();t=v.focusedElem;g=v.selectionRange;if(q!==t&&t&&t.ownerDocument&&Me(t.ownerDocument.documentElement,t)){null!==g&&Oe(t)&&(q=g.start,v=g.end,void 0===v&&(v=q),"selectionStart"in t?(t.selectionStart=q,t.selectionEnd=Math.min(v,t.value.length)):(v=(q=t.ownerDocument||document)&&q.defaultView||window,v.getSelection&&(v=v.getSelection(),h=t.textContent.length,J=Math.min(g.start,h),g=void 0===
g.end?J:Math.min(g.end,h),!v.extend&&J>g&&(h=g,g=J,J=h),h=Le(t,J),f=Le(t,g),h&&f&&(1!==v.rangeCount||v.anchorNode!==h.node||v.anchorOffset!==h.offset||v.focusNode!==f.node||v.focusOffset!==f.offset)&&(q=q.createRange(),q.setStart(h.node,h.offset),v.removeAllRanges(),J>g?(v.addRange(q),v.extend(f.node,f.offset)):(q.setEnd(f.node,f.offset),v.addRange(q))))));q=[];for(v=t;v=v.parentNode;)1===v.nodeType&&q.push({element:v,left:v.scrollLeft,top:v.scrollTop});"function"===typeof t.focus&&t.focus();for(t=
0;t<q.length;t++)v=q[t],v.element.scrollLeft=v.left,v.element.scrollTop=v.top}fd=!!kf;lf=kf=null;a.current=c;Z=d;do try{for(t=a;null!==Z;){var K=Z.flags;K&36&&Yi(t,Z.alternate,Z);if(K&128){q=void 0;var Q=Z.ref;if(null!==Q){var L=Z.stateNode;switch(Z.tag){case 5:q=L;break;default:q=L}"function"===typeof Q?Q(q):Q.current=q}}Z=Z.nextEffect}}catch(va){if(null===Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect}while(null!==Z);Z=null;$f();X=e}else a.current=c;if(xj)xj=!1,yj=a,zj=b;else for(Z=d;null!==Z;)b=
Z.nextEffect,Z.nextEffect=null,Z.flags&8&&(K=Z,K.sibling=null,K.stateNode=null),Z=b;d=a.pendingLanes;0===d&&(Ti=null);1===d?a===Ej?Dj++:(Dj=0,Ej=a):Dj=0;c=c.stateNode;if(Mf&&"function"===typeof Mf.onCommitFiberRoot)try{Mf.onCommitFiberRoot(Lf,c,void 0,64===(c.current.flags&64))}catch(va){}Mj(a,O());if(Qi)throw Qi=!1,a=Ri,Ri=null,a;if(0!==(X&8))return null;ig();return null}
function ek(){for(;null!==Z;){var a=Z.alternate;Jj||null===Ij||(0!==(Z.flags&8)?dc(Z,Ij)&&(Jj=!0):13===Z.tag&&mj(a,Z)&&dc(Z,Ij)&&(Jj=!0));var b=Z.flags;0!==(b&256)&&Xi(a,Z);0===(b&512)||xj||(xj=!0,hg(97,function(){Oj();return null}));Z=Z.nextEffect}}function Oj(){if(90!==zj){var a=97<zj?97:zj;zj=90;return gg(a,fk)}return!1}function $i(a,b){Aj.push(b,a);xj||(xj=!0,hg(97,function(){Oj();return null}))}function Zi(a,b){Bj.push(b,a);xj||(xj=!0,hg(97,function(){Oj();return null}))}
function fk(){if(null===yj)return!1;var a=yj;yj=null;if(0!==(X&48))throw Error(y(331));var b=X;X|=32;var c=Bj;Bj=[];for(var d=0;d<c.length;d+=2){var e=c[d],f=c[d+1],g=e.destroy;e.destroy=void 0;if("function"===typeof g)try{g()}catch(k){if(null===f)throw Error(y(330));Wi(f,k)}}c=Aj;Aj=[];for(d=0;d<c.length;d+=2){e=c[d];f=c[d+1];try{var h=e.create;e.destroy=h()}catch(k){if(null===f)throw Error(y(330));Wi(f,k)}}for(h=a.current.firstEffect;null!==h;)a=h.nextEffect,h.nextEffect=null,h.flags&8&&(h.sibling=
null,h.stateNode=null),h=a;X=b;ig();return!0}function gk(a,b,c){b=Mi(c,b);b=Pi(a,b,1);Ag(a,b);b=Hg();a=Kj(a,1);null!==a&&($c(a,1,b),Mj(a,b))}
function Wi(a,b){if(3===a.tag)gk(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){gk(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ti||!Ti.has(d))){a=Mi(b,a);var e=Si(c,a,1);Ag(c,e);e=Hg();c=Kj(c,1);if(null!==c)$c(c,1,e),Mj(c,e);else if("function"===typeof d.componentDidCatch&&(null===Ti||!Ti.has(d)))try{d.componentDidCatch(b,a)}catch(f){}break}}c=c.return}}
function Yj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=Hg();a.pingedLanes|=a.suspendedLanes&c;U===a&&(W&c)===c&&(4===V||3===V&&(W&62914560)===W&&500>O()-jj?Qj(a,0):uj|=c);Mj(a,b)}function lj(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=a.mode,0===(b&2)?b=1:0===(b&4)?b=99===eg()?1:2:(0===Gj&&(Gj=tj),b=Yc(62914560&~Gj),0===b&&(b=4194304)));c=Hg();a=Kj(a,b);null!==a&&($c(a,b,c),Mj(a,c))}var ck;
ck=function(a,b,c){var d=b.lanes;if(null!==a)if(a.memoizedProps!==b.pendingProps||N.current)ug=!0;else if(0!==(c&d))ug=0!==(a.flags&16384)?!0:!1;else{ug=!1;switch(b.tag){case 3:ri(b);sh();break;case 5:gh(b);break;case 1:Ff(b.type)&&Jf(b);break;case 4:eh(b,b.stateNode.containerInfo);break;case 10:d=b.memoizedProps.value;var e=b.type._context;I(mg,e._currentValue);e._currentValue=d;break;case 13:if(null!==b.memoizedState){if(0!==(c&b.child.childLanes))return ti(a,b,c);I(P,P.current&1);b=hi(a,b,c);return null!==
b?b.sibling:null}I(P,P.current&1);break;case 19:d=0!==(c&b.childLanes);if(0!==(a.flags&64)){if(d)return Ai(a,b,c);b.flags|=64}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);I(P,P.current);if(d)break;else return null;case 23:case 24:return b.lanes=0,mi(a,b,c)}return hi(a,b,c)}else ug=!1;b.lanes=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);a=b.pendingProps;e=Ef(b,M.current);tg(b,c);e=Ch(null,b,d,a,e,c);b.flags|=1;if("object"===
typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;b.memoizedState=null;b.updateQueue=null;if(Ff(d)){var f=!0;Jf(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;xg(b);var g=d.getDerivedStateFromProps;"function"===typeof g&&Gg(b,d,g,a);e.updater=Kg;b.stateNode=e;e._reactInternals=b;Og(b,d,a,c);b=qi(null,b,d,!0,f,c)}else b.tag=0,fi(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;a:{null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);
a=b.pendingProps;f=e._init;e=f(e._payload);b.type=e;f=b.tag=hk(e);a=lg(e,a);switch(f){case 0:b=li(null,b,e,a,c);break a;case 1:b=pi(null,b,e,a,c);break a;case 11:b=gi(null,b,e,a,c);break a;case 14:b=ii(null,b,e,lg(e.type,a),d,c);break a}throw Error(y(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),li(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),pi(a,b,d,e,c);case 3:ri(b);d=b.updateQueue;if(null===a||null===d)throw Error(y(282));
d=b.pendingProps;e=b.memoizedState;e=null!==e?e.element:null;yg(a,b);Cg(b,d,null,c);d=b.memoizedState.element;if(d===e)sh(),b=hi(a,b,c);else{e=b.stateNode;if(f=e.hydrate)kh=rf(b.stateNode.containerInfo.firstChild),jh=b,f=lh=!0;if(f){a=e.mutableSourceEagerHydrationData;if(null!=a)for(e=0;e<a.length;e+=2)f=a[e],f._workInProgressVersionPrimary=a[e+1],th.push(f);c=Zg(b,null,d,c);for(b.child=c;c;)c.flags=c.flags&-3|1024,c=c.sibling}else fi(a,b,d,c),sh();b=b.child}return b;case 5:return gh(b),null===a&&
ph(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,nf(d,e)?g=null:null!==f&&nf(d,f)&&(b.flags|=16),oi(a,b),fi(a,b,g,c),b.child;case 6:return null===a&&ph(b),null;case 13:return ti(a,b,c);case 4:return eh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Yg(b,null,d,c):fi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),gi(a,b,d,e,c);case 7:return fi(a,b,b.pendingProps,c),b.child;case 8:return fi(a,b,b.pendingProps.children,
c),b.child;case 12:return fi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;var h=b.type._context;I(mg,h._currentValue);h._currentValue=f;if(null!==g)if(h=g.value,f=He(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0,0===f){if(g.children===e.children&&!N.current){b=hi(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==k){g=h.child;for(var l=
k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=zg(-1,c&-c),l.tag=2,Ag(h,l));h.lanes|=c;l=h.alternate;null!==l&&(l.lanes|=c);sg(h.return,c);k.lanes|=c;break}l=l.next}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=g}fi(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,tg(b,c),e=vg(e,
f.unstable_observedBits),d=d(e),b.flags|=1,fi(a,b,d,c),b.child;case 14:return e=b.type,f=lg(e,b.pendingProps),f=lg(e.type,f),ii(a,b,e,f,d,c);case 15:return ki(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),b.tag=1,Ff(d)?(a=!0,Jf(b)):a=!1,tg(b,c),Mg(b,d,e),Og(b,d,e,c),qi(null,b,d,!0,a,c);case 19:return Ai(a,b,c);case 23:return mi(a,b,c);case 24:return mi(a,b,c)}throw Error(y(156,b.tag));
};function ik(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.flags=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childLanes=this.lanes=0;this.alternate=null}function nh(a,b,c,d){return new ik(a,b,c,d)}function ji(a){a=a.prototype;return!(!a||!a.isReactComponent)}
function hk(a){if("function"===typeof a)return ji(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Aa)return 11;if(a===Da)return 14}return 2}
function Tg(a,b){var c=a.alternate;null===c?(c=nh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Vg(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)ji(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ua:return Xg(c.children,e,f,b);case Ha:g=8;e|=16;break;case wa:g=8;e|=1;break;case xa:return a=nh(12,c,b,e|8),a.elementType=xa,a.type=xa,a.lanes=f,a;case Ba:return a=nh(13,c,b,e),a.type=Ba,a.elementType=Ba,a.lanes=f,a;case Ca:return a=nh(19,c,b,e),a.elementType=Ca,a.lanes=f,a;case Ia:return vi(c,e,f,b);case Ja:return a=nh(24,c,b,e),a.elementType=Ja,a.lanes=f,a;default:if("object"===
typeof a&&null!==a)switch(a.$$typeof){case ya:g=10;break a;case za:g=9;break a;case Aa:g=11;break a;case Da:g=14;break a;case Ea:g=16;d=null;break a;case Fa:g=22;break a}throw Error(y(130,null==a?a:typeof a,""));}b=nh(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Xg(a,b,c,d){a=nh(7,a,d,b);a.lanes=c;return a}function vi(a,b,c,d){a=nh(23,a,d,b);a.elementType=Ia;a.lanes=c;return a}function Ug(a,b,c){a=nh(6,a,null,b);a.lanes=c;return a}
function Wg(a,b,c){b=nh(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function jk(a,b,c){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=0;this.eventTimes=Zc(0);this.expirationTimes=Zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=Zc(0);this.mutableSourceEagerHydrationData=null}
function kk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:ta,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
function lk(a,b,c,d){var e=b.current,f=Hg(),g=Ig(e);a:if(c){c=c._reactInternals;b:{if(Zb(c)!==c||1!==c.tag)throw Error(y(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(Ff(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return}while(null!==h);throw Error(y(171));}if(1===c.tag){var k=c.type;if(Ff(k)){c=If(c,k,h);break a}}c=h}else c=Cf;null===b.context?b.context=c:b.pendingContext=c;b=zg(f,g);b.payload={element:a};d=void 0===d?null:d;null!==
d&&(b.callback=d);Ag(e,b);Jg(e,g,f);return g}function mk(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function nk(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b}}function ok(a,b){nk(a,b);(a=a.alternate)&&nk(a,b)}function pk(){return null}
function qk(a,b,c){var d=null!=c&&null!=c.hydrationOptions&&c.hydrationOptions.mutableSources||null;c=new jk(a,b,null!=c&&!0===c.hydrate);b=nh(3,null,null,2===b?7:1===b?3:0);c.current=b;b.stateNode=c;xg(b);a[ff]=c.current;cf(8===a.nodeType?a.parentNode:a);if(d)for(a=0;a<d.length;a++){b=d[a];var e=b._getVersion;e=e(b._source);null==c.mutableSourceEagerHydrationData?c.mutableSourceEagerHydrationData=[b,e]:c.mutableSourceEagerHydrationData.push(b,e)}this._internalRoot=c}
qk.prototype.render=function(a){lk(a,this._internalRoot,null,null)};qk.prototype.unmount=function(){var a=this._internalRoot,b=a.containerInfo;lk(null,a,null,function(){b[ff]=null})};function rk(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}
function sk(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new qk(a,0,b?{hydrate:!0}:void 0)}
function tk(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=mk(g);h.call(a)}}lk(b,g,a,e)}else{f=c._reactRootContainer=sk(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=mk(g);k.call(a)}}Xj(function(){lk(b,g,a,e)})}return mk(g)}ec=function(a){if(13===a.tag){var b=Hg();Jg(a,4,b);ok(a,4)}};fc=function(a){if(13===a.tag){var b=Hg();Jg(a,67108864,b);ok(a,67108864)}};
gc=function(a){if(13===a.tag){var b=Hg(),c=Ig(a);Jg(a,c,b);ok(a,c)}};hc=function(a,b){return b()};
yb=function(a,b,c){switch(b){case "input":ab(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(y(90));Wa(d);ab(d,e)}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1)}};Gb=Wj;
Hb=function(a,b,c,d,e){var f=X;X|=4;try{return gg(98,a.bind(null,b,c,d,e))}finally{X=f,0===X&&(wj(),ig())}};Ib=function(){0===(X&49)&&(Vj(),Oj())};Jb=function(a,b){var c=X;X|=2;try{return a(b)}finally{X=c,0===X&&(wj(),ig())}};function uk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!rk(b))throw Error(y(200));return kk(a,b,null,c)}var vk={Events:[Cb,ue,Db,Eb,Fb,Oj,{current:!1}]},wk={findFiberByHostInstance:wc,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"};
var xk={bundleType:wk.bundleType,version:wk.version,rendererPackageName:wk.rendererPackageName,rendererConfig:wk.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ra.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=cc(a);return null===a?null:a.stateNode},findFiberByHostInstance:wk.findFiberByHostInstance||
pk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var yk=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yk.isDisabled&&yk.supportsFiber)try{Lf=yk.inject(xk),Mf=yk}catch(a){}}exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vk;exports.createPortal=uk;
exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(y(188));throw Error(y(268,Object.keys(a)));}a=cc(b);a=null===a?null:a.stateNode;return a};exports.flushSync=function(a,b){var c=X;if(0!==(c&48))return a(b);X|=1;try{if(a)return gg(99,a.bind(null,b))}finally{X=c,ig()}};exports.hydrate=function(a,b,c){if(!rk(b))throw Error(y(200));return tk(null,a,b,!0,c)};
exports.render=function(a,b,c){if(!rk(b))throw Error(y(200));return tk(null,a,b,!1,c)};exports.unmountComponentAtNode=function(a){if(!rk(a))throw Error(y(40));return a._reactRootContainer?(Xj(function(){tk(null,null,a,!1,function(){a._reactRootContainer=null;a[ff]=null})}),!0):!1};exports.unstable_batchedUpdates=Wj;exports.unstable_createPortal=function(a,b){return uk(a,b,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)};
exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!rk(c))throw Error(y(200));if(null==a||void 0===a._reactInternals)throw Error(y(38));return tk(a,b,c,!1,d)};exports.version="17.0.2";


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(39);
} else {}


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f,g,h,k;if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()}}else{var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q}}
if("undefined"===typeof window||"function"!==typeof MessageChannel){var t=null,u=null,w=function(){if(null!==t)try{var a=exports.unstable_now();t(!0,a);t=null}catch(b){throw setTimeout(w,0),b;}};f=function(a){null!==t?setTimeout(f,0,a):(t=a,setTimeout(w,0))};g=function(a,b){u=setTimeout(a,b)};h=function(){clearTimeout(u)};exports.unstable_shouldYield=function(){return!1};k=exports.unstable_forceFrameRate=function(){}}else{var x=window.setTimeout,y=window.clearTimeout;if("undefined"!==typeof console){var z=
window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");"function"!==typeof z&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var A=!1,B=null,C=-1,D=5,E=0;exports.unstable_shouldYield=function(){return exports.unstable_now()>=
E};k=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<a?Math.floor(1E3/a):5};var F=new MessageChannel,G=F.port2;F.port1.onmessage=function(){if(null!==B){var a=exports.unstable_now();E=a+D;try{B(!0,a)?G.postMessage(null):(A=!1,B=null)}catch(b){throw G.postMessage(null),b;}}else A=!1};f=function(a){B=a;A||(A=!0,G.postMessage(null))};g=function(a,b){C=
x(function(){a(exports.unstable_now())},b)};h=function(){y(C);C=-1}}function H(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(void 0!==e&&0<I(e,b))a[d]=b,a[c]=e,c=d;else break a}}function J(a){a=a[0];return void 0===a?null:a}
function K(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>I(n,c))void 0!==r&&0>I(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>I(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function I(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var L=[],M=[],N=1,O=null,P=3,Q=!1,R=!1,S=!1;
function T(a){for(var b=J(M);null!==b;){if(null===b.callback)K(M);else if(b.startTime<=a)K(M),b.sortIndex=b.expirationTime,H(L,b);else break;b=J(M)}}function U(a){S=!1;T(a);if(!R)if(null!==J(L))R=!0,f(V);else{var b=J(M);null!==b&&g(U,b.startTime-a)}}
function V(a,b){R=!1;S&&(S=!1,h());Q=!0;var c=P;try{T(b);for(O=J(L);null!==O&&(!(O.expirationTime>b)||a&&!exports.unstable_shouldYield());){var d=O.callback;if("function"===typeof d){O.callback=null;P=O.priorityLevel;var e=d(O.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?O.callback=e:O===J(L)&&K(L);T(b)}else K(L);O=J(L)}if(null!==O)var m=!0;else{var n=J(M);null!==n&&g(U,n.startTime-b);m=!1}return m}finally{O=null,P=c,Q=!1}}var W=k;exports.unstable_IdlePriority=5;
exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){R||Q||(R=!0,f(V))};exports.unstable_getCurrentPriorityLevel=function(){return P};exports.unstable_getFirstCallbackNode=function(){return J(L)};
exports.unstable_next=function(a){switch(P){case 1:case 2:case 3:var b=3;break;default:b=P}var c=P;P=b;try{return a()}finally{P=c}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=W;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=P;P=a;try{return b()}finally{P=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3}e=c+e;a={id:N++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,H(M,a),null===J(L)&&a===J(M)&&(S?h():S=!0,g(U,c-d))):(a.sortIndex=e,H(L,a),R||Q||(R=!0,f(V)));return a};
exports.unstable_wrapCallback=function(a){var b=P;return function(){var c=P;P=b;try{return a.apply(this,arguments)}finally{P=c}}};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;
exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isAsyncMode=function(a){return A(a)||z(a)===l};exports.isConcurrentMode=A;exports.isContextConsumer=function(a){return z(a)===k};exports.isContextProvider=function(a){return z(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return z(a)===n};exports.isFragment=function(a){return z(a)===e};exports.isLazy=function(a){return z(a)===t};
exports.isMemo=function(a){return z(a)===r};exports.isPortal=function(a){return z(a)===d};exports.isProfiler=function(a){return z(a)===g};exports.isStrictMode=function(a){return z(a)===f};exports.isSuspense=function(a){return z(a)===p};
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};exports.typeOf=z;


/***/ }),
/* 41 */,
/* 42 */,
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CompletionType;
(function (CompletionType) {
    CompletionType[CompletionType["SearchEngines"] = 0] = "SearchEngines";
    CompletionType[CompletionType["History"] = 1] = "History";
    CompletionType[CompletionType["Bookmarks"] = 2] = "Bookmarks";
})(CompletionType || (CompletionType = {}));
exports.default = CompletionType;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TabFlag;
(function (TabFlag) {
    TabFlag["CurrentTab"] = "%";
    TabFlag["LastTab"] = "#";
    TabFlag["None"] = "";
})(TabFlag || (TabFlag = {}));
exports.default = TabFlag;


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html, body, * {\n  margin: 0;\n  padding: 0;\n\n  font-style: normal;\n  font-family: monospace;\n  font-size: 12px;\n  line-height: 16px;\n}\n\ninput {\n  font-style: normal;\n  font-family: monospace;\n  font-size: 12px;\n  line-height: 16px;\n}\n\nbody {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow: hidden;\n}\n\n.vimvixen-console {\n  bottom: 0;\n  margin: 0;\n  padding: 0;\n}\n", "",{"version":3,"sources":["webpack://./src/console/index.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;;EAEV,kBAAkB;EAClB,sBAAsB;EACtB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,OAAO;EACP,QAAQ;EACR,gBAAgB;AAClB;;AAEA;EACE,SAAS;EACT,SAAS;EACT,UAAU;AACZ","sourcesContent":["html, body, * {\n  margin: 0;\n  padding: 0;\n\n  font-style: normal;\n  font-family: monospace;\n  font-size: 12px;\n  line-height: 16px;\n}\n\ninput {\n  font-style: normal;\n  font-family: monospace;\n  font-size: 12px;\n  line-height: 16px;\n}\n\nbody {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow: hidden;\n}\n\n.vimvixen-console {\n  bottom: 0;\n  margin: 0;\n  padding: 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const react_1 = tslib_1.__importDefault(__webpack_require__(1));
const styled_1 = tslib_1.__importDefault(__webpack_require__(27));
const Container = styled_1.default.div `
  background-color: ${({ theme }) => theme.commandBackground};
  color: ${({ theme }) => theme.commandForeground};
  display: flex;
`;
const Prompt = styled_1.default.i `
  font-style: normal;
`;
const InputInner = styled_1.default.input `
  border: none;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.commandBackground};
  color: ${({ theme }) => theme.commandForeground};
`;
const Input = (props) => {
    const input = react_1.default.useRef(null);
    react_1.default.useEffect(() => {
        var _a;
        (_a = input === null || input === void 0 ? void 0 : input.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, []);
    return (react_1.default.createElement(Container, null,
        react_1.default.createElement(Prompt, null, props.prompt),
        react_1.default.createElement(InputInner, { ref: input, onBlur: props.onBlur, onKeyDown: props.onKeyDown, onChange: props.onChange, value: props.value })));
};
exports.default = Input;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const react_1 = tslib_1.__importDefault(__webpack_require__(1));
const ConsoleFrameClient_1 = tslib_1.__importDefault(__webpack_require__(261));
const useAutoResize = () => {
    const [prevWidth, setPrevWidth] = react_1.default.useState(-1);
    const [prevHeight, setPrevHeight] = react_1.default.useState(-1);
    const consoleFrameClient = react_1.default.useMemo(() => {
        return new ConsoleFrameClient_1.default();
    }, []);
    react_1.default.useLayoutEffect(() => {
        const { scrollWidth: width, scrollHeight: height } = document.getElementById("vimvixen-console");
        consoleFrameClient.resize(width, height);
        if (width === prevWidth && height === prevHeight) {
            return;
        }
        setPrevWidth(width);
        setPrevHeight(height);
    });
};
exports.default = useAutoResize;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.hideCommand = exports.showInfo = exports.showError = exports.showFind = exports.showCommand = exports.hide = exports.HIDE = exports.SHOW_FIND = exports.HIDE_COMMAND = exports.SHOW_INFO = exports.SHOW_ERROR = exports.SHOW_COMMAND = void 0;
exports.SHOW_COMMAND = "show.command";
exports.SHOW_ERROR = "show.error";
exports.SHOW_INFO = "show.info";
exports.HIDE_COMMAND = "hide.command";
exports.SHOW_FIND = "show.find";
exports.HIDE = "hide";
const hide = () => {
    return {
        type: exports.HIDE,
    };
};
exports.hide = hide;
const showCommand = (text) => {
    return {
        type: exports.SHOW_COMMAND,
        text,
    };
};
exports.showCommand = showCommand;
const showFind = () => {
    return {
        type: exports.SHOW_FIND,
    };
};
exports.showFind = showFind;
const showError = (text) => {
    return {
        type: exports.SHOW_ERROR,
        text: text,
    };
};
exports.showError = showError;
const showInfo = (text) => {
    return {
        type: exports.SHOW_INFO,
        text: text,
    };
};
exports.showInfo = showInfo;
const hideCommand = () => {
    return {
        type: exports.HIDE_COMMAND,
    };
};
exports.hideCommand = hideCommand;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDispatchContext = exports.AppStateContext = void 0;
const tslib_1 = __webpack_require__(0);
const react_1 = tslib_1.__importDefault(__webpack_require__(1));
const recuer_1 = __webpack_require__(57);
exports.AppStateContext = react_1.default.createContext(recuer_1.defaultState);
exports.AppDispatchContext = react_1.default.createContext(() => { });


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultState = void 0;
const actions_1 = __webpack_require__(55);
exports.defaultState = {
    mode: "",
    messageText: "",
    consoleText: "",
};
function reducer(state = exports.defaultState, action) {
    switch (action.type) {
        case actions_1.HIDE:
            return Object.assign(Object.assign({}, state), { mode: "" });
        case actions_1.SHOW_COMMAND:
            return Object.assign(Object.assign({}, state), { mode: "command", consoleText: action.text });
        case actions_1.SHOW_FIND:
            return Object.assign(Object.assign({}, state), { mode: "find", consoleText: "" });
        case actions_1.SHOW_ERROR:
            return Object.assign(Object.assign({}, state), { mode: "error", messageText: action.text });
        case actions_1.SHOW_INFO:
            return Object.assign(Object.assign({}, state), { mode: "info", messageText: action.text });
        case actions_1.HIDE_COMMAND:
            return Object.assign(Object.assign({}, state), { mode: state.mode === "command" || state.mode === "find" ? "" : state.mode });
        default:
            return state;
    }
}
exports.default = reducer;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.selectPrev = exports.selectNext = exports.setCompletions = exports.setCompletionSource = exports.initCompletion = exports.COMPLETION_PREV = exports.COMPLETION_NEXT = exports.SET_COMPLETIONS = exports.SET_COMPLETION_SOURCE = exports.INIT_COMPLETIONS = void 0;
exports.INIT_COMPLETIONS = "reset.completions";
exports.SET_COMPLETION_SOURCE = "set.completion.source";
exports.SET_COMPLETIONS = "set.completions";
exports.COMPLETION_NEXT = "completion.next";
exports.COMPLETION_PREV = "completion.prev";
const initCompletion = (completionTypes) => {
    return {
        type: exports.INIT_COMPLETIONS,
        completionTypes,
    };
};
exports.initCompletion = initCompletion;
const setCompletionSource = (query) => {
    return {
        type: exports.SET_COMPLETION_SOURCE,
        completionSource: query,
    };
};
exports.setCompletionSource = setCompletionSource;
const setCompletions = (completions) => {
    return {
        type: exports.SET_COMPLETIONS,
        completions,
    };
};
exports.setCompletions = setCompletions;
const selectNext = () => {
    return {
        type: exports.COMPLETION_NEXT,
    };
};
exports.selectNext = selectNext;
const selectPrev = () => {
    return {
        type: exports.COMPLETION_PREV,
    };
};
exports.selectPrev = selectPrev;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
var Command;
(function (Command) {
    Command["Open"] = "open";
    Command["TabOpen"] = "tabopen";
    Command["WindowOpen"] = "winopen";
    Command["Buffer"] = "buffer";
    Command["BufferDelete"] = "bdelete";
    Command["BufferDeleteForce"] = "bdelete!";
    Command["BuffersDelete"] = "bdeletes";
    Command["BuffersDeleteForce"] = "bdeletes!";
    Command["AddBookmark"] = "addbookmark";
    Command["Quit"] = "quit";
    Command["QuitAll"] = "quitall";
    Command["Set"] = "set";
    Command["Help"] = "help";
})(Command = exports.Command || (exports.Command = {}));


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CompletionDispatchContext = exports.CompletionStateContext = void 0;
const tslib_1 = __webpack_require__(0);
const react_1 = tslib_1.__importDefault(__webpack_require__(1));
const reducer_1 = __webpack_require__(61);
exports.CompletionStateContext = react_1.default.createContext(reducer_1.defaultState);
exports.CompletionDispatchContext = react_1.default.createContext(() => { });


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultState = void 0;
const actions_1 = __webpack_require__(58);
exports.defaultState = {
    completionTypes: undefined,
    completionSource: "",
    completions: [],
    select: -1,
};
const nextSelection = (state) => {
    const length = state.completions
        .map((g) => g.items.length)
        .reduce((x, y) => x + y, 0);
    if (length === 0) {
        return -1;
    }
    if (state.select < 0) {
        return 0;
    }
    if (state.select + 1 < length) {
        return state.select + 1;
    }
    return -1;
};
const prevSelection = (state) => {
    if (state.completions.length === 0) {
        return -1;
    }
    const length = state.completions
        .map((g) => g.items.length)
        .reduce((x, y) => x + y);
    if (state.select < 0) {
        return length - 1;
    }
    return state.select - 1;
};
function reducer(state = exports.defaultState, action) {
    switch (action.type) {
        case actions_1.INIT_COMPLETIONS:
            return Object.assign(Object.assign({}, state), { completionTypes: action.completionTypes, completions: [], select: -1 });
        case actions_1.SET_COMPLETION_SOURCE:
            return Object.assign(Object.assign({}, state), { completionSource: action.completionSource, select: -1 });
        case actions_1.SET_COMPLETIONS:
            return Object.assign(Object.assign({}, state), { completions: action.completions });
        case actions_1.COMPLETION_NEXT: {
            const select = nextSelection(state);
            return Object.assign(Object.assign({}, state), { select: select });
        }
        case actions_1.COMPLETION_PREV: {
            const select = prevSelection(state);
            return Object.assign(Object.assign({}, state), { select: select });
        }
        default:
            return state;
    }
}
exports.default = reducer;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UnknownCommandError = void 0;
const Command_1 = __webpack_require__(59);
class UnknownCommandError extends Error {
    constructor(value) {
        super(`unknown command '${value}'`);
    }
}
exports.UnknownCommandError = UnknownCommandError;
class CommandParser {
    parse(value) {
        switch (value) {
            case "o":
            case "open":
                return Command_1.Command.Open;
            case "t":
            case "tabopen":
                return Command_1.Command.TabOpen;
            case "w":
            case "winopen":
                return Command_1.Command.WindowOpen;
            case "b":
            case "buffer":
                return Command_1.Command.Buffer;
            case "bd":
            case "bdel":
            case "bdelete":
                return Command_1.Command.BufferDelete;
            case "bd!":
            case "bdel!":
            case "bdelete!":
                return Command_1.Command.BufferDeleteForce;
            case "bdeletes":
                return Command_1.Command.BuffersDelete;
            case "bdeletes!":
                return Command_1.Command.BuffersDeleteForce;
            case "addbookmark":
                return Command_1.Command.AddBookmark;
            case "q":
            case "quit":
                return Command_1.Command.Quit;
            case "qa":
            case "quitall":
                return Command_1.Command.QuitAll;
            case "set":
                return Command_1.Command.Set;
            case "h":
            case "help":
                return Command_1.Command.Help;
        }
        throw new UnknownCommandError(value);
    }
}
exports.default = CommandParser;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorSchemeUpdateContext = exports.ColorSchemeContext = void 0;
const tslib_1 = __webpack_require__(0);
const react_1 = tslib_1.__importDefault(__webpack_require__(1));
const ColorScheme_1 = tslib_1.__importDefault(__webpack_require__(11));
exports.ColorSchemeContext = react_1.default.createContext(ColorScheme_1.default.System);
exports.ColorSchemeUpdateContext = react_1.default.createContext(() => { });


/***/ }),
/* 64 */,
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const messages = tslib_1.__importStar(__webpack_require__(4));
const Console_1 = tslib_1.__importDefault(__webpack_require__(259));
__webpack_require__(274);
const react_1 = tslib_1.__importDefault(__webpack_require__(1));
const react_dom_1 = tslib_1.__importDefault(__webpack_require__(25));
const providers_1 = tslib_1.__importDefault(__webpack_require__(275));
const provider_1 = __webpack_require__(277);
const hooks_1 = __webpack_require__(33);
const RootComponent = () => {
    const hide = hooks_1.useHide();
    const { show: showCommand } = hooks_1.useCommandMode();
    const { show: showFind } = hooks_1.useFindMode();
    const { show: showError } = hooks_1.useErrorMessage();
    const { show: showInfo } = hooks_1.useInfoMessage();
    react_1.default.useEffect(() => {
        const onMessage = async (message) => {
            const msg = messages.valueOf(message);
            switch (msg.type) {
                case messages.CONSOLE_SHOW_COMMAND:
                    showCommand(msg.command);
                    break;
                case messages.CONSOLE_SHOW_FIND:
                    showFind();
                    break;
                case messages.CONSOLE_SHOW_ERROR:
                    showError(msg.text);
                    break;
                case messages.CONSOLE_SHOW_INFO:
                    showInfo(msg.text);
                    break;
                case messages.CONSOLE_HIDE:
                    hide();
                    break;
            }
        };
        browser.runtime.onMessage.addListener(onMessage);
        const port = browser.runtime.connect(undefined, {
            name: "vimvixen-console",
        });
        port.onMessage.addListener(onMessage);
    }, []);
    return react_1.default.createElement(Console_1.default, null);
};
const App = () => (react_1.default.createElement(provider_1.AppProvider, null,
    react_1.default.createElement(providers_1.default, null,
        react_1.default.createElement(RootComponent, null))));
window.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.getElementById("vimvixen-console");
    react_dom_1.default.render(react_1.default.createElement(App, null), wrapper);
});


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const react_1 = tslib_1.__importDefault(__webpack_require__(1));
const FindPrompt_1 = tslib_1.__importDefault(__webpack_require__(260));
const CommandPrompt_1 = tslib_1.__importDefault(__webpack_require__(262));
const InfoMessage_1 = tslib_1.__importDefault(__webpack_require__(270));
const ErrorMessage_1 = tslib_1.__importDefault(__webpack_require__(271));
const hooks_1 = __webpack_require__(272);
const hooks_2 = __webpack_require__(33);
const Console = () => {
    const refreshColorScheme = hooks_1.useColorSchemeRefresh();
    const { visible: visibleCommand, initialInputValue } = hooks_2.useCommandMode();
    const { visible: visibleFind } = hooks_2.useFindMode();
    const { visible: visibleInfo, message: infoMessage } = hooks_2.useInfoMessage();
    const { visible: visibleError, message: errorMessage } = hooks_2.useErrorMessage();
    react_1.default.useEffect(() => {
        if (visibleCommand || visibleFind || visibleInfo || visibleError) {
            refreshColorScheme();
        }
    }, [visibleCommand, visibleFind, visibleInfo, visibleError]);
    if (visibleCommand) {
        return react_1.default.createElement(CommandPrompt_1.default, { initialInputValue: initialInputValue });
    }
    else if (visibleFind) {
        return react_1.default.createElement(FindPrompt_1.default, null);
    }
    else if (visibleInfo) {
        return react_1.default.createElement(InfoMessage_1.default, null, infoMessage);
    }
    else if (visibleError) {
        return react_1.default.createElement(ErrorMessage_1.default, null, errorMessage);
    }
    return null;
};
exports.default = Console;


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const react_1 = tslib_1.__importDefault(__webpack_require__(1));
const Input_1 = tslib_1.__importDefault(__webpack_require__(53));
const styled_components_1 = tslib_1.__importDefault(__webpack_require__(5));
const useAutoResize_1 = tslib_1.__importDefault(__webpack_require__(54));
const hooks_1 = __webpack_require__(33);
const ConsoleWrapper = styled_components_1.default.div `
  border-top: 1px solid gray;
`;
const FindPrompt = () => {
    const [inputValue, setInputValue] = react_1.default.useState("");
    const hide = hooks_1.useHide();
    const execFind = hooks_1.useExecFind();
    const onBlur = () => {
        hide();
    };
    useAutoResize_1.default();
    const doEnter = (e) => {
        e.stopPropagation();
        e.preventDefault();
        const value = e.target.value;
        execFind(value === "" ? undefined : value);
        hide();
    };
    const onKeyDown = (e) => {
        switch (e.key) {
            case "Escape":
                hide();
                break;
            case "Enter":
                doEnter(e);
                break;
        }
    };
    const onChange = (e) => {
        setInputValue(e.target.value);
    };
    return (react_1.default.createElement(ConsoleWrapper, null,
        react_1.default.createElement(Input_1.default, { prompt: "/", onBlur: onBlur, onKeyDown: onKeyDown, onChange: onChange, value: inputValue })));
};
exports.default = FindPrompt;


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const messages = tslib_1.__importStar(__webpack_require__(4));
class ConsoleFrameClient {
    async resize(width, height) {
        await browser.runtime.sendMessage({
            type: messages.CONSOLE_RESIZE,
            width,
            height,
        });
    }
}
exports.default = ConsoleFrameClient;


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const react_1 = tslib_1.__importDefault(__webpack_require__(1));
const Completion_1 = tslib_1.__importDefault(__webpack_require__(263));
const Input_1 = tslib_1.__importDefault(__webpack_require__(53));
const styled_components_1 = tslib_1.__importDefault(__webpack_require__(5));
const hooks_1 = __webpack_require__(266);
const useAutoResize_1 = tslib_1.__importDefault(__webpack_require__(54));
const provider_1 = __webpack_require__(269);
const hooks_2 = __webpack_require__(33);
const COMPLETION_MAX_ITEMS = 33;
const ConsoleWrapper = styled_components_1.default.div `
  border-top: 1px solid gray;
`;
const CommandPromptInner = ({ initialInputValue }) => {
    const hide = hooks_2.useHide();
    const [inputValue, setInputValue] = react_1.default.useState(initialInputValue);
    const { completions, updateCompletions } = hooks_1.useCompletions();
    const { select, currentValue, selectNext, selectPrev } = hooks_1.useSelectCompletion();
    const execCommand = hooks_2.useExecCommand();
    useAutoResize_1.default();
    const onBlur = () => {
        hide();
    };
    const isCancelKey = react_1.default.useCallback((e) => e.key === "Escape" ||
        (e.ctrlKey && e.key === "[") ||
        (e.ctrlKey && e.key === "c"), []);
    const isNextKey = react_1.default.useCallback((e) => (!e.shiftKey && e.key === "Tab") || (e.ctrlKey && e.key === "n"), []);
    const isPrevKey = react_1.default.useCallback((e) => (e.shiftKey && e.key === "Tab") || (e.ctrlKey && e.key === "p"), []);
    const isEnterKey = react_1.default.useCallback((e) => e.key === "Enter" || (e.ctrlKey && e.key === "m"), []);
    const onKeyDown = (e) => {
        if (isCancelKey(e)) {
            hide();
        }
        else if (isEnterKey(e)) {
            const value = e.target.value;
            execCommand(value);
            hide();
        }
        else if (isNextKey(e)) {
            selectNext();
        }
        else if (isPrevKey(e)) {
            selectPrev();
        }
        else {
            return;
        }
        e.stopPropagation();
        e.preventDefault();
    };
    const onChange = (e) => {
        const text = e.target.value;
        setInputValue(text);
    };
    react_1.default.useEffect(() => {
        updateCompletions(inputValue);
    }, [inputValue]);
    return (react_1.default.createElement(ConsoleWrapper, null,
        react_1.default.createElement(Completion_1.default, { size: COMPLETION_MAX_ITEMS, completions: completions, select: select }),
        react_1.default.createElement(Input_1.default, { prompt: ":", onBlur: onBlur, onKeyDown: onKeyDown, onChange: onChange, value: select == -1 ? inputValue : currentValue })));
};
const CommandPrompt = ({ initialInputValue }) => (react_1.default.createElement(provider_1.CompletionProvider, { initialInputValue: initialInputValue },
    react_1.default.createElement(CommandPromptInner, { initialInputValue: initialInputValue })));
exports.default = CommandPrompt;


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const react_1 = tslib_1.__importDefault(__webpack_require__(1));
const CompletionItem_1 = tslib_1.__importDefault(__webpack_require__(264));
const CompletionTitle_1 = tslib_1.__importDefault(__webpack_require__(265));
const Completion = ({ select, size, completions }) => {
    const [viewOffset, setViewOffset] = react_1.default.useState(0);
    const [prevSelect, setPrevSelect] = react_1.default.useState(-1);
    react_1.default.useEffect(() => {
        if (select === prevSelect) {
            return;
        }
        const viewSelect = (() => {
            let index = 0;
            for (let i = 0; i < completions.length; ++i) {
                ++index;
                const g = completions[i];
                if (select + i + 1 < index + g.items.length) {
                    return select + i + 1;
                }
                index += g.items.length;
            }
            return -1;
        })();
        const nextViewOffset = (() => {
            if (prevSelect < select) {
                return Math.max(viewOffset, viewSelect - size + 1);
            }
            else if (prevSelect > select) {
                return Math.min(viewOffset, viewSelect);
            }
            return 0;
        })();
        setPrevSelect(select);
        setViewOffset(nextViewOffset);
    }, [select]);
    let itemIndex = 0;
    let viewIndex = 0;
    const groups = [];
    completions.forEach((group, groupIndex) => {
        const items = [];
        const title = (react_1.default.createElement(CompletionTitle_1.default, { id: `title-${groupIndex}`, key: `group-${groupIndex}`, shown: viewOffset <= viewIndex && viewIndex < viewOffset + size, title: group.name }));
        ++viewIndex;
        for (const item of group.items) {
            items.push(react_1.default.createElement(CompletionItem_1.default, { shown: viewOffset <= viewIndex && viewIndex < viewOffset + size, key: `item-${itemIndex}`, icon: item.icon, caption: item.caption, url: item.url, highlight: itemIndex === select, "aria-selected": itemIndex === select, role: "menuitem" }));
            ++viewIndex;
            ++itemIndex;
        }
        groups.push(react_1.default.createElement("div", { key: `group-${groupIndex}`, role: "group", "aria-describedby": `title-${groupIndex}` },
            title,
            react_1.default.createElement("ul", null, items)));
    });
    return react_1.default.createElement("div", { role: "menu" }, groups);
};
exports.default = Completion;


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const react_1 = tslib_1.__importDefault(__webpack_require__(1));
const styled_1 = tslib_1.__importDefault(__webpack_require__(27));
const Container = styled_1.default.li `
  background-image: ${({ icon }) => "url(" + icon + ")"};
  background-color: ${({ highlight, theme }) => highlight
    ? theme.completionSelectedBackground
    : theme.completionItemBackground};
  color: ${({ highlight, theme }) => highlight
    ? theme.completionSelectedForeground
    : theme.completionItemForeground};
  display: ${({ shown }) => (shown ? "display" : "none")};
  padding-left: 1.8rem;
  background-position: 0 center;
  background-size: contain;
  background-repeat: no-repeat;
  white-space: pre;
`;
const Caption = styled_1.default.span `
  display: inline-block;
  width: 40%;
  text-overflow: ellipsis;
  overflow: hidden;
`;
const Description = styled_1.default.span `
  display: inline-block;
  color: ${({ theme }) => theme.completionItemDescriptionForeground};
  width: 60%;
  text-overflow: ellipsis;
  overflow: hidden;
`;
const CompletionItem = (props) => (react_1.default.createElement(Container, Object.assign({ icon: props.icon || "", "aria-labelledby": `completion-item-${props.caption}` }, props),
    react_1.default.createElement(Caption, { id: `completion-item-${props.caption}` }, props.caption),
    react_1.default.createElement(Description, null, props.url)));
exports.default = CompletionItem;


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const react_1 = tslib_1.__importDefault(__webpack_require__(1));
const styled_1 = tslib_1.__importDefault(__webpack_require__(27));
const Li = styled_1.default.li `
  display: ${({ shown }) => (shown ? "display" : "none")};
  background-color: ${({ theme }) => theme.completionTitleBackground};
  color: ${({ theme }) => theme.completionTitleForeground};
  font-weight: bold;
  margin: 0;
  padding: 0;
`;
const CompletionTitle = (props) => (react_1.default.createElement(Li, Object.assign({}, props), props.title));
exports.default = CompletionTitle;


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.useSelectCompletion = exports.useCompletions = exports.getPropertyCompletions = exports.getTabCompletions = void 0;
const tslib_1 = __webpack_require__(0);
const react_1 = tslib_1.__importDefault(__webpack_require__(1));
const actions = tslib_1.__importStar(__webpack_require__(58));
const Command_1 = __webpack_require__(59);
const TabFlag_1 = tslib_1.__importDefault(__webpack_require__(44));
const context_1 = __webpack_require__(60);
const CompletionClient_1 = tslib_1.__importDefault(__webpack_require__(267));
const CommandLineParser_1 = tslib_1.__importStar(__webpack_require__(268));
const CommandParser_1 = __webpack_require__(62);
const CompletionType_1 = tslib_1.__importDefault(__webpack_require__(43));
const commandDocs = {
    [Command_1.Command.Set]: "Set a value of the property",
    [Command_1.Command.Open]: "Open a URL or search by keywords in current tab",
    [Command_1.Command.TabOpen]: "Open a URL or search by keywords in new tab",
    [Command_1.Command.WindowOpen]: "Open a URL or search by keywords in new window",
    [Command_1.Command.Buffer]: "Select tabs by matched keywords",
    [Command_1.Command.BufferDelete]: "Close a certain tab matched by keywords",
    [Command_1.Command.BuffersDelete]: "Close all tabs matched by keywords",
    [Command_1.Command.Quit]: "Close the current tab",
    [Command_1.Command.QuitAll]: "Close all tabs",
    [Command_1.Command.AddBookmark]: "Add current page to bookmarks",
    [Command_1.Command.Help]: "Open Vim Vixen help in new tab",
};
const propertyDocs = {
    hintchars: "hint characters on follow mode",
    smoothscroll: "smooth scroll",
    complete: "which are completed at the open page",
    colorscheme: "color scheme of the console",
};
const completionClient = new CompletionClient_1.default();
const useDelayedCallback = (callback, timeout) => {
    const [timer, setTimer] = react_1.default.useState();
    const [enabled, setEnabled] = react_1.default.useState(false);
    const enableDelay = react_1.default.useCallback(() => {
        setEnabled(true);
    }, [setEnabled]);
    const delayedCallback = react_1.default.useCallback((arg1, arg2) => {
        if (enabled) {
            if (typeof timer !== "undefined") {
                clearTimeout(timer);
            }
            const id = setTimeout(() => {
                callback(arg1, arg2);
                clearTimeout(timer);
                setTimer(undefined);
            }, timeout);
            setTimer(id);
        }
        else {
            callback(arg1, arg2);
        }
    }, [enabled, timer]);
    return { enableDelay, delayedCallback };
};
const getCommandCompletions = async (query) => {
    const items = Object.entries(commandDocs)
        .filter(([name]) => name.startsWith(query))
        .map(([name, doc]) => ({
        caption: name,
        content: name,
        url: doc,
    }));
    return [
        {
            name: "Console Command",
            items,
        },
    ];
};
const getOpenCompletions = async (command, query, completionTypes) => {
    const completions = [];
    for (const type of completionTypes) {
        switch (type) {
            case CompletionType_1.default.SearchEngines: {
                const items = await completionClient.requestSearchEngines(query);
                if (items.length === 0) {
                    break;
                }
                completions.push({
                    name: "Search Engines",
                    items: items.map((key) => ({
                        caption: key.title,
                        content: command + " " + key.title,
                    })),
                });
                break;
            }
            case CompletionType_1.default.History: {
                const items = await completionClient.requestHistory(query);
                if (items.length === 0) {
                    break;
                }
                completions.push({
                    name: "History",
                    items: items.map((item) => ({
                        caption: item.title,
                        content: command + " " + item.url,
                        url: item.url,
                    })),
                });
                break;
            }
            case CompletionType_1.default.Bookmarks: {
                const items = await completionClient.requestBookmarks(query);
                if (items.length === 0) {
                    break;
                }
                completions.push({
                    name: "Bookmarks",
                    items: items.map((item) => ({
                        caption: item.title,
                        content: command + " " + item.url,
                        url: item.url,
                    })),
                });
                break;
            }
        }
    }
    return completions;
};
const getTabCompletions = async (command, query, excludePinned) => {
    const items = await completionClient.requestTabs(query, excludePinned);
    if (items.length === 0) {
        return [];
    }
    return [
        {
            name: "Buffers",
            items: items.map((item) => ({
                content: command + " " + item.url,
                caption: `${item.index}: ${item.flag != TabFlag_1.default.None ? item.flag : " "} ${item.title}`,
                url: item.url,
                icon: item.faviconUrl,
            })),
        },
    ];
};
exports.getTabCompletions = getTabCompletions;
const getPropertyCompletions = async (command, query) => {
    const properties = await completionClient.getProperties();
    const items = properties
        .map((item) => {
        const desc = propertyDocs[item.name] || "";
        if (item.type === "boolean") {
            return [
                {
                    caption: item.name,
                    content: command + " " + item.name,
                    url: "Enable " + desc,
                },
                {
                    caption: "no" + item.name,
                    content: command + " no" + item.name,
                    url: "Disable " + desc,
                },
            ];
        }
        else {
            return [
                {
                    caption: item.name,
                    content: command + " " + item.name,
                    url: "Set " + desc,
                },
            ];
        }
    })
        .reduce((acc, val) => acc.concat(val), [])
        .filter((item) => item.caption.startsWith(query));
    return [{ name: "Properties", items }];
};
exports.getPropertyCompletions = getPropertyCompletions;
const useCompletions = () => {
    const state = react_1.default.useContext(context_1.CompletionStateContext);
    const dispatch = react_1.default.useContext(context_1.CompletionDispatchContext);
    const commandLineParser = react_1.default.useMemo(() => new CommandLineParser_1.default(), []);
    const updateCompletions = react_1.default.useCallback((source) => {
        dispatch(actions.setCompletionSource(source));
    }, []);
    const initCompletion = react_1.default.useCallback((source) => {
        completionClient.getCompletionTypes().then((completionTypes) => {
            dispatch(actions.initCompletion(completionTypes));
            dispatch(actions.setCompletionSource(source));
        });
    }, []);
    const { delayedCallback: queryCompletions, enableDelay } = useDelayedCallback(react_1.default.useCallback((text, completionTypes) => {
        const phase = commandLineParser.inputPhase(text);
        if (phase === CommandLineParser_1.InputPhase.OnCommand) {
            getCommandCompletions(text).then((completions) => dispatch(actions.setCompletions(completions)));
        }
        else {
            let cmd = null;
            try {
                cmd = commandLineParser.parse(text);
            }
            catch (e) {
                if (e instanceof CommandParser_1.UnknownCommandError) {
                    return;
                }
            }
            switch (cmd === null || cmd === void 0 ? void 0 : cmd.command) {
                case Command_1.Command.Open:
                case Command_1.Command.TabOpen:
                case Command_1.Command.WindowOpen:
                    if (!completionTypes) {
                        initCompletion(text);
                        return;
                    }
                    getOpenCompletions(cmd.command, cmd.args, completionTypes).then((completions) => dispatch(actions.setCompletions(completions)));
                    break;
                case Command_1.Command.Buffer:
                    exports.getTabCompletions(cmd.command, cmd.args, false).then((completions) => dispatch(actions.setCompletions(completions)));
                    break;
                case Command_1.Command.BufferDelete:
                case Command_1.Command.BuffersDelete:
                    exports.getTabCompletions(cmd.command, cmd.args, true).then((completions) => dispatch(actions.setCompletions(completions)));
                    break;
                case Command_1.Command.BufferDeleteForce:
                case Command_1.Command.BuffersDeleteForce:
                    exports.getTabCompletions(cmd.command, cmd.args, false).then((completions) => dispatch(actions.setCompletions(completions)));
                    break;
                case Command_1.Command.Set:
                    exports.getPropertyCompletions(cmd.command, cmd.args).then((completions) => dispatch(actions.setCompletions(completions)));
                    break;
            }
            enableDelay();
        }
    }, [dispatch]), 100);
    react_1.default.useEffect(() => {
        queryCompletions(state.completionSource, state.completionTypes);
    }, [state.completionSource, state.completionTypes]);
    return {
        completions: state.completions,
        updateCompletions,
        initCompletion,
    };
};
exports.useCompletions = useCompletions;
const useSelectCompletion = () => {
    const state = react_1.default.useContext(context_1.CompletionStateContext);
    const dispatch = react_1.default.useContext(context_1.CompletionDispatchContext);
    const next = react_1.default.useCallback(() => dispatch(actions.selectNext()), [dispatch]);
    const prev = react_1.default.useCallback(() => dispatch(actions.selectPrev()), [dispatch]);
    const currentValue = react_1.default.useMemo(() => {
        var _a;
        if (state.select < 0) {
            return state.completionSource;
        }
        const items = state.completions.map((g) => g.items).flat();
        return ((_a = items[state.select]) === null || _a === void 0 ? void 0 : _a.content) || "";
    }, [state.completionSource, state.select]);
    return {
        select: state.select,
        currentValue,
        selectNext: next,
        selectPrev: prev,
    };
};
exports.useSelectCompletion = useSelectCompletion;


/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const messages = tslib_1.__importStar(__webpack_require__(4));
class CompletionClient {
    async getCompletionTypes() {
        const resp = (await browser.runtime.sendMessage({
            type: messages.CONSOLE_GET_COMPLETION_TYPES,
        }));
        return resp;
    }
    async requestSearchEngines(query) {
        const resp = (await browser.runtime.sendMessage({
            type: messages.CONSOLE_REQUEST_SEARCH_ENGINES_MESSAGE,
            query,
        }));
        return resp;
    }
    async requestBookmarks(query) {
        const resp = (await browser.runtime.sendMessage({
            type: messages.CONSOLE_REQUEST_BOOKMARKS,
            query,
        }));
        return resp;
    }
    async requestHistory(query) {
        const resp = (await browser.runtime.sendMessage({
            type: messages.CONSOLE_REQUEST_HISTORY,
            query,
        }));
        return resp;
    }
    async requestTabs(query, excludePinned) {
        const resp = (await browser.runtime.sendMessage({
            type: messages.CONSOLE_REQUEST_TABS,
            query,
            excludePinned,
        }));
        return resp;
    }
    async getProperties() {
        const resp = (await browser.runtime.sendMessage({
            type: messages.CONSOLE_GET_PROPERTIES,
        }));
        return resp;
    }
}
exports.default = CompletionClient;


/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.InputPhase = void 0;
const tslib_1 = __webpack_require__(0);
const CommandParser_1 = tslib_1.__importDefault(__webpack_require__(62));
var InputPhase;
(function (InputPhase) {
    InputPhase[InputPhase["OnCommand"] = 0] = "OnCommand";
    InputPhase[InputPhase["OnArgs"] = 1] = "OnArgs";
})(InputPhase = exports.InputPhase || (exports.InputPhase = {}));
class CommandLineParser {
    constructor() {
        this.commandParser = new CommandParser_1.default();
    }
    inputPhase(line) {
        line = line.trimLeft();
        if (line.length == 0) {
            return InputPhase.OnCommand;
        }
        const command = line.split(/\s+/, 1)[0];
        if (line.length == command.length) {
            return InputPhase.OnCommand;
        }
        return InputPhase.OnArgs;
    }
    parse(line) {
        const trimLeft = line.trimLeft();
        const command = trimLeft.split(/\s+/, 1)[0];
        const args = trimLeft.slice(command.length).trimLeft();
        return {
            command: this.commandParser.parse(command),
            args: args,
        };
    }
}
exports.default = CommandLineParser;


/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CompletionProvider = void 0;
const tslib_1 = __webpack_require__(0);
const reducer_1 = tslib_1.__importStar(__webpack_require__(61));
const react_1 = tslib_1.__importDefault(__webpack_require__(1));
const context_1 = __webpack_require__(60);
const CompletionProvider = ({ initialInputValue, children, }) => {
    const initialState = Object.assign(Object.assign({}, reducer_1.defaultState), { completionSource: initialInputValue });
    const [state, dispatch] = react_1.default.useReducer(reducer_1.default, initialState);
    return (react_1.default.createElement(context_1.CompletionStateContext.Provider, { value: state },
        react_1.default.createElement(context_1.CompletionDispatchContext.Provider, { value: dispatch }, children)));
};
exports.CompletionProvider = CompletionProvider;


/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const react_1 = tslib_1.__importDefault(__webpack_require__(1));
const styled_1 = tslib_1.__importDefault(__webpack_require__(27));
const Wrapper = styled_1.default.p `
  border-top: 1px solid gray;
  background-color: ${({ theme }) => theme.consoleInfoBackground};
  color: ${({ theme }) => theme.consoleInfoForeground};
  font-weight: normal;
`;
const InfoMessage = ({ children }) => {
    return react_1.default.createElement(Wrapper, { role: "status" }, children);
};
exports.default = InfoMessage;


/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const react_1 = tslib_1.__importDefault(__webpack_require__(1));
const styled_1 = tslib_1.__importDefault(__webpack_require__(27));
const Wrapper = styled_1.default.p `
  border-top: 1px solid gray;
  background-color: ${({ theme }) => theme.consoleErrorBackground};
  color: ${({ theme }) => theme.consoleErrorForeground};
  font-weight: bold;
`;
const ErrorMessage = ({ children }) => {
    return react_1.default.createElement(Wrapper, { role: "alert" }, children);
};
exports.default = ErrorMessage;


/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.useColorSchemeRefresh = void 0;
const tslib_1 = __webpack_require__(0);
const react_1 = tslib_1.__importDefault(__webpack_require__(1));
const contexts_1 = __webpack_require__(63);
const SettingClient_1 = tslib_1.__importDefault(__webpack_require__(273));
const useColorSchemeRefresh = () => {
    const update = react_1.default.useContext(contexts_1.ColorSchemeUpdateContext);
    const settingClient = new SettingClient_1.default();
    const refresh = react_1.default.useCallback(() => {
        settingClient.getColorScheme().then((newScheme) => {
            update(newScheme);
        });
    }, []);
    return refresh;
};
exports.useColorSchemeRefresh = useColorSchemeRefresh;


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const Settings_1 = tslib_1.__importDefault(__webpack_require__(10));
const messages = tslib_1.__importStar(__webpack_require__(4));
class SettingClient {
    async getColorScheme() {
        const json = await browser.runtime.sendMessage({
            type: messages.SETTINGS_QUERY,
        });
        const settings = Settings_1.default.fromJSON(json);
        return settings.properties.colorscheme;
    }
}
exports.default = SettingClient;


/***/ }),
/* 274 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].locals || {});

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorSchemeProvider = void 0;
const tslib_1 = __webpack_require__(0);
const react_1 = tslib_1.__importDefault(__webpack_require__(1));
const ColorScheme_1 = tslib_1.__importDefault(__webpack_require__(11));
const theme_1 = __webpack_require__(276);
const contexts_1 = __webpack_require__(63);
const styled_components_1 = __webpack_require__(5);
const ColorSchemeProvider = ({ children }) => {
    const [colorscheme, setColorScheme] = react_1.default.useState(ColorScheme_1.default.System);
    const theme = react_1.default.useMemo(() => {
        if (colorscheme === ColorScheme_1.default.System) {
            if (window.matchMedia &&
                window.matchMedia("(prefers-color-scheme: dark)").matches) {
                return theme_1.DarkTheme;
            }
        }
        else if (colorscheme === ColorScheme_1.default.Dark) {
            return theme_1.DarkTheme;
        }
        return theme_1.LightTheme;
    }, [colorscheme]);
    return (react_1.default.createElement(contexts_1.ColorSchemeContext.Provider, { value: colorscheme },
        react_1.default.createElement(contexts_1.ColorSchemeUpdateContext.Provider, { value: setColorScheme },
            react_1.default.createElement(styled_components_1.ThemeProvider, { theme: theme }, children))));
};
exports.ColorSchemeProvider = ColorSchemeProvider;
exports.default = exports.ColorSchemeProvider;


/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DarkTheme = exports.LightTheme = void 0;
exports.LightTheme = {
    completionTitleBackground: "lightgray",
    completionTitleForeground: "#000000",
    completionItemBackground: "#ffffff",
    completionItemForeground: "#000000",
    completionItemDescriptionForeground: "#008000",
    completionSelectedBackground: "#ffff00",
    completionSelectedForeground: "#000000",
    commandBackground: "#ffffff",
    commandForeground: "#000000",
    consoleErrorBackground: "#ff0000",
    consoleErrorForeground: "#ffffff",
    consoleInfoBackground: "#ffffff",
    consoleInfoForeground: "#018786",
};
exports.DarkTheme = {
    completionTitleBackground: "#052027",
    completionTitleForeground: "white",
    completionItemBackground: "#2f474f",
    completionItemForeground: "white",
    completionItemDescriptionForeground: "#86fab0",
    completionSelectedBackground: "#eeff41",
    completionSelectedForeground: "#000000",
    commandBackground: "#052027",
    commandForeground: "white",
    consoleErrorBackground: "red",
    consoleErrorForeground: "white",
    consoleInfoBackground: "#052027",
    consoleInfoForeground: "#ffffff",
};


/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AppProvider = void 0;
const tslib_1 = __webpack_require__(0);
const react_1 = tslib_1.__importDefault(__webpack_require__(1));
const recuer_1 = tslib_1.__importStar(__webpack_require__(57));
const contexts_1 = __webpack_require__(56);
const AppProvider = ({ children }) => {
    const [state, dispatch] = react_1.default.useReducer(recuer_1.default, recuer_1.defaultState);
    return (react_1.default.createElement(contexts_1.AppStateContext.Provider, { value: state },
        react_1.default.createElement(contexts_1.AppDispatchContext.Provider, { value: dispatch }, children)));
};
exports.AppProvider = AppProvider;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9vcGVyYXRpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvbWVzc2FnZXMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlZC1jb21wb25lbnRzL2Rpc3Qvc3R5bGVkLWNvbXBvbmVudHMuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9zZXR0aW5ncy9Qcm9wZXJ0aWVzLnRzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvc2V0dGluZ3MvQmxhY2tsaXN0LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3NldHRpbmdzL0tleW1hcHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9zZXR0aW5ncy9TZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL0NvbG9yU2NoZW1lLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy9kaXN0L2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzLmNqcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3NldHRpbmdzL0tleS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3NldHRpbmdzL1NlYXJjaC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvc2V0dGluZ3MvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Fqdi9saWIvY29tcGlsZS9lcXVhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmFzdC1kZWVwLWVxdWFsL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9tZW1vaXplL2Rpc3QvbWVtb2l6ZS5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vaXMtcHJvcC12YWxpZC9kaXN0L2lzLXByb3AtdmFsaWQuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9jb2xvcnNjaGVtZS9zdHlsZWQudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaGFsbG93ZXF1YWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3N0eWxpcy9kaXN0L3N0eWxpcy5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vdW5pdGxlc3MvZGlzdC91bml0bGVzcy5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9hcHAvaG9va3MudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL2Nqcy9yZWFjdC1kb20ucHJvZHVjdGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NjaGVkdWxlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2NoZWR1bGVyL2Nqcy9zY2hlZHVsZXIucHJvZHVjdGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL0NvbXBsZXRpb25UeXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvVGFiRmxhZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvY29tcG9uZW50cy9jb25zb2xlL0lucHV0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9ob29rcy91c2VBdXRvUmVzaXplLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL2FwcC9hY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL2FwcC9jb250ZXh0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9hcHAvcmVjdWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL2NvbXBsZXRpb24vYWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL0NvbW1hbmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvY29tcGxldGlvbi9jb250ZXh0LnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL2NvbXBsZXRpb24vcmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9jb21tYW5kbGluZS9Db21tYW5kUGFyc2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL2NvbG9yc2NoZW1lL2NvbnRleHRzLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvY29tcG9uZW50cy9Db25zb2xlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9jb21wb25lbnRzL0ZpbmRQcm9tcHQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL2NsaWVudHMvQ29uc29sZUZyYW1lQ2xpZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL2NvbXBvbmVudHMvQ29tbWFuZFByb21wdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvY29tcG9uZW50cy9jb25zb2xlL0NvbXBsZXRpb24udHN4Iiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL2NvbXBvbmVudHMvY29uc29sZS9Db21wbGV0aW9uSXRlbS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvY29tcG9uZW50cy9jb25zb2xlL0NvbXBsZXRpb25UaXRsZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvY29tcGxldGlvbi9ob29rcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9jbGllbnRzL0NvbXBsZXRpb25DbGllbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvY29tbWFuZGxpbmUvQ29tbWFuZExpbmVQYXJzZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvY29tcGxldGlvbi9wcm92aWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvY29tcG9uZW50cy9JbmZvTWVzc2FnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnNvbGUvY29tcG9uZW50cy9FcnJvck1lc3NhZ2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL2NvbG9yc2NoZW1lL2hvb2tzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL2NsaWVudHMvU2V0dGluZ0NsaWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9pbmRleC5jc3M/M2UyNCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc29sZS9jb2xvcnNjaGVtZS9wcm92aWRlcnMudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL2NvbG9yc2NoZW1lL3RoZW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zb2xlL2FwcC9wcm92aWRlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ25GLHlCQUF5Qix1REFBdUQ7QUFD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Q0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7QUN2THpCO0FBQ2IsWUFBWSxtQkFBTyxDQUFDLEVBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsTUFBSztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLHFCQUFxQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLG1CQUFtQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELG1CQUFtQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSwwQjs7Ozs7O0FDbm1CQTtBQUNBO0FBQ0EsaUJBQWlCLG1CQUFPLENBQUMsRUFBaUI7Ozs7Ozs7O0FDRjdCOztBQUViOzs7O0FBSUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFdBQVc7QUFDakM7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsV0FBVztBQUMvQjs7QUFFQSxvQkFBb0IsV0FBVztBQUMvQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSwrREFBTyxFQUFDOzs7QUNSZ0I7O0FBRXZDLGs3SEFBazdIOztBQUVsN0gsWUFBWSxtQkFBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLDhGQUFLLEVBQUM7Ozs7Ozs7Ozs7QUNkckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLHNCQUFzQjtBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0Isb0JBQW9CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ3pGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQyxFQUFFLEVBUzFDO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxJQUFxQztBQUN6QztBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbUJBQU8sQ0FBQyxFQUFtQztBQUM5RCxDQUFDLE1BQU0sRUFFTjs7Ozs7Ozs7Ozs7O0FDckNELDRFQUFzRTtBQUd0RSxNQUFNLE1BQU0sR0FBRywyQkFBb0QsQ0FBQztBQUVwRSxrQkFBZSxNQUFNLENBQUM7Ozs7Ozs7QUNMdEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLG1CQUFtQixvQkFBb0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3Q0E7QUFDQTtBQUNBLHlLQUF5SyxPQUFPO0FBQ2hMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLE9BQU87QUFDaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsT0FBTztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0Isa0NBQWtDO0FBQzFEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFVBQVU7QUFDeEM7O0FBRUE7QUFDQTtBQUNBLDhCQUE4QixVQUFVO0FBQ3hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FB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aGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyNTgpO1xuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY3JlYXRlQmluZGluZyhvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIGdldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIHNldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHByaXZhdGVNYXAuc2V0KHJlY2VpdmVyLCB2YWx1ZSk7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIvLyBIaWRlIGNvbnNvbGU7IG9yIGNhbmNlbCBzb21lIHVzZXIgYWN0aW9uc1xuZXhwb3J0IGNvbnN0IENBTkNFTCA9IFwiY2FuY2VsXCI7XG5cbi8vIEFkZG9uc1xuZXhwb3J0IGNvbnN0IEFERE9OX0VOQUJMRSA9IFwiYWRkb24uZW5hYmxlXCI7XG5leHBvcnQgY29uc3QgQURET05fRElTQUJMRSA9IFwiYWRkb24uZGlzYWJsZVwiO1xuZXhwb3J0IGNvbnN0IEFERE9OX1RPR0dMRV9FTkFCTEVEID0gXCJhZGRvbi50b2dnbGUuZW5hYmxlZFwiO1xuXG4vLyBDb21tYW5kXG5leHBvcnQgY29uc3QgQ09NTUFORF9TSE9XID0gXCJjb21tYW5kLnNob3dcIjtcbmV4cG9ydCBjb25zdCBDT01NQU5EX1NIT1dfT1BFTiA9IFwiY29tbWFuZC5zaG93Lm9wZW5cIjtcbmV4cG9ydCBjb25zdCBDT01NQU5EX1NIT1dfVEFCT1BFTiA9IFwiY29tbWFuZC5zaG93LnRhYm9wZW5cIjtcbmV4cG9ydCBjb25zdCBDT01NQU5EX1NIT1dfV0lOT1BFTiA9IFwiY29tbWFuZC5zaG93Lndpbm9wZW5cIjtcbmV4cG9ydCBjb25zdCBDT01NQU5EX1NIT1dfQlVGRkVSID0gXCJjb21tYW5kLnNob3cuYnVmZmVyXCI7XG5leHBvcnQgY29uc3QgQ09NTUFORF9TSE9XX0FEREJPT0tNQVJLID0gXCJjb21tYW5kLnNob3cuYWRkYm9va21hcmtcIjtcblxuLy8gU2Nyb2xsc1xuZXhwb3J0IGNvbnN0IFNDUk9MTF9WRVJUSUNBTExZID0gXCJzY3JvbGwudmVydGljYWxseVwiO1xuZXhwb3J0IGNvbnN0IFNDUk9MTF9IT1JJWk9OQUxMWSA9IFwic2Nyb2xsLmhvcml6b25hbGx5XCI7XG5leHBvcnQgY29uc3QgU0NST0xMX1BBR0VTID0gXCJzY3JvbGwucGFnZXNcIjtcbmV4cG9ydCBjb25zdCBTQ1JPTExfVE9QID0gXCJzY3JvbGwudG9wXCI7XG5leHBvcnQgY29uc3QgU0NST0xMX0JPVFRPTSA9IFwic2Nyb2xsLmJvdHRvbVwiO1xuZXhwb3J0IGNvbnN0IFNDUk9MTF9IT01FID0gXCJzY3JvbGwuaG9tZVwiO1xuZXhwb3J0IGNvbnN0IFNDUk9MTF9FTkQgPSBcInNjcm9sbC5lbmRcIjtcblxuLy8gRm9sbG93c1xuZXhwb3J0IGNvbnN0IEZPTExPV19TVEFSVCA9IFwiZm9sbG93LnN0YXJ0XCI7XG5cbi8vIE5hdmlnYXRpb25zXG5leHBvcnQgY29uc3QgTkFWSUdBVEVfSElTVE9SWV9QUkVWID0gXCJuYXZpZ2F0ZS5oaXN0b3J5LnByZXZcIjtcbmV4cG9ydCBjb25zdCBOQVZJR0FURV9ISVNUT1JZX05FWFQgPSBcIm5hdmlnYXRlLmhpc3RvcnkubmV4dFwiO1xuZXhwb3J0IGNvbnN0IE5BVklHQVRFX0xJTktfUFJFViA9IFwibmF2aWdhdGUubGluay5wcmV2XCI7XG5leHBvcnQgY29uc3QgTkFWSUdBVEVfTElOS19ORVhUID0gXCJuYXZpZ2F0ZS5saW5rLm5leHRcIjtcbmV4cG9ydCBjb25zdCBOQVZJR0FURV9QQVJFTlQgPSBcIm5hdmlnYXRlLnBhcmVudFwiO1xuZXhwb3J0IGNvbnN0IE5BVklHQVRFX1JPT1QgPSBcIm5hdmlnYXRlLnJvb3RcIjtcblxuLy8gRm9jdXNcbmV4cG9ydCBjb25zdCBGT0NVU19JTlBVVCA9IFwiZm9jdXMuaW5wdXRcIjtcblxuLy8gUGFnZVxuZXhwb3J0IGNvbnN0IFBBR0VfU09VUkNFID0gXCJwYWdlLnNvdXJjZVwiO1xuZXhwb3J0IGNvbnN0IFBBR0VfSE9NRSA9IFwicGFnZS5ob21lXCI7XG5cbi8vIFRhYnNcbmV4cG9ydCBjb25zdCBUQUJfQ0xPU0UgPSBcInRhYnMuY2xvc2VcIjtcbmV4cG9ydCBjb25zdCBUQUJfQ0xPU0VfRk9SQ0UgPSBcInRhYnMuY2xvc2UuZm9yY2VcIjtcbmV4cG9ydCBjb25zdCBUQUJfQ0xPU0VfUklHSFQgPSBcInRhYnMuY2xvc2UucmlnaHRcIjtcbmV4cG9ydCBjb25zdCBUQUJfUkVPUEVOID0gXCJ0YWJzLnJlb3BlblwiO1xuZXhwb3J0IGNvbnN0IFRBQl9QUkVWID0gXCJ0YWJzLnByZXZcIjtcbmV4cG9ydCBjb25zdCBUQUJfTkVYVCA9IFwidGFicy5uZXh0XCI7XG5leHBvcnQgY29uc3QgVEFCX0ZJUlNUID0gXCJ0YWJzLmZpcnN0XCI7XG5leHBvcnQgY29uc3QgVEFCX0xBU1QgPSBcInRhYnMubGFzdFwiO1xuZXhwb3J0IGNvbnN0IFRBQl9QUkVWX1NFTCA9IFwidGFicy5wcmV2c2VsXCI7XG5leHBvcnQgY29uc3QgVEFCX1JFTE9BRCA9IFwidGFicy5yZWxvYWRcIjtcbmV4cG9ydCBjb25zdCBUQUJfUElOID0gXCJ0YWJzLnBpblwiO1xuZXhwb3J0IGNvbnN0IFRBQl9VTlBJTiA9IFwidGFicy51bnBpblwiO1xuZXhwb3J0IGNvbnN0IFRBQl9UT0dHTEVfUElOTkVEID0gXCJ0YWJzLnBpbi50b2dnbGVcIjtcbmV4cG9ydCBjb25zdCBUQUJfRFVQTElDQVRFID0gXCJ0YWJzLmR1cGxpY2F0ZVwiO1xuZXhwb3J0IGNvbnN0IFRBQl9UT0dHTEVfUkVBREVSID0gXCJ0YWJzLnJlYWRlci50b2dnbGVcIjtcblxuLy8gWm9vbXNcbmV4cG9ydCBjb25zdCBaT09NX0lOID0gXCJ6b29tLmluXCI7XG5leHBvcnQgY29uc3QgWk9PTV9PVVQgPSBcInpvb20ub3V0XCI7XG5leHBvcnQgY29uc3QgWk9PTV9ORVVUUkFMID0gXCJ6b29tLm5ldXRyYWxcIjtcblxuLy8gVXJsIHlhbmsvcGFzdGVcbmV4cG9ydCBjb25zdCBVUkxTX1lBTksgPSBcInVybHMueWFua1wiO1xuZXhwb3J0IGNvbnN0IFVSTFNfUEFTVEUgPSBcInVybHMucGFzdGVcIjtcblxuLy8gRmluZFxuZXhwb3J0IGNvbnN0IEZJTkRfU1RBUlQgPSBcImZpbmQuc3RhcnRcIjtcbmV4cG9ydCBjb25zdCBGSU5EX05FWFQgPSBcImZpbmQubmV4dFwiO1xuZXhwb3J0IGNvbnN0IEZJTkRfUFJFViA9IFwiZmluZC5wcmV2XCI7XG5cbi8vIE1hcmtcbmV4cG9ydCBjb25zdCBNQVJLX1NFVF9QUkVGSVggPSBcIm1hcmsuc2V0LnByZWZpeFwiO1xuZXhwb3J0IGNvbnN0IE1BUktfSlVNUF9QUkVGSVggPSBcIm1hcmsuanVtcC5wcmVmaXhcIjtcblxuLy8gUmVwZWF0XG5leHBvcnQgY29uc3QgUkVQRUFUX0xBU1QgPSBcInJlcGVhdC5sYXN0XCI7XG5cbi8vIEludGVybmFsXG5leHBvcnQgY29uc3QgSU5URVJOQUxfT1BFTl9VUkwgPSBcImludGVybmFsLm9wZW4udXJsXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FuY2VsT3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIENBTkNFTDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBZGRvbkVuYWJsZU9wZXJhdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBBRERPTl9FTkFCTEU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRkb25EaXNhYmxlT3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIEFERE9OX0RJU0FCTEU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRkb25Ub2dnbGVFbmFibGVkT3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIEFERE9OX1RPR0dMRV9FTkFCTEVEO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbW1hbmRTaG93T3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIENPTU1BTkRfU0hPVztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb21tYW5kU2hvd09wZW5PcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgQ09NTUFORF9TSE9XX09QRU47XG4gIGFsdGVyOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbW1hbmRTaG93VGFib3Blbk9wZXJhdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBDT01NQU5EX1NIT1dfVEFCT1BFTjtcbiAgYWx0ZXI6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tbWFuZFNob3dXaW5vcGVuT3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIENPTU1BTkRfU0hPV19XSU5PUEVOO1xuICBhbHRlcjogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb21tYW5kU2hvd0J1ZmZlck9wZXJhdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBDT01NQU5EX1NIT1dfQlVGRkVSO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbW1hbmRTaG93QWRkYm9va21hcmtPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgQ09NTUFORF9TSE9XX0FEREJPT0tNQVJLO1xuICBhbHRlcjogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTY3JvbGxWZXJ0aWNhbGx5T3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIFNDUk9MTF9WRVJUSUNBTExZO1xuICBjb3VudDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNjcm9sbEhvcml6b25hbGx5T3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIFNDUk9MTF9IT1JJWk9OQUxMWTtcbiAgY291bnQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTY3JvbGxQYWdlc09wZXJhdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBTQ1JPTExfUEFHRVM7XG4gIGNvdW50OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2Nyb2xsVG9wT3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIFNDUk9MTF9UT1A7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2Nyb2xsQm90dG9tT3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIFNDUk9MTF9CT1RUT007XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2Nyb2xsSG9tZU9wZXJhdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBTQ1JPTExfSE9NRTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTY3JvbGxFbmRPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgU0NST0xMX0VORDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGb2xsb3dTdGFydE9wZXJhdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBGT0xMT1dfU1RBUlQ7XG4gIG5ld1RhYjogYm9vbGVhbjtcbiAgYmFja2dyb3VuZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOYXZpZ2F0ZUhpc3RvcnlQcmV2T3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIE5BVklHQVRFX0hJU1RPUllfUFJFVjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOYXZpZ2F0ZUhpc3RvcnlOZXh0T3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIE5BVklHQVRFX0hJU1RPUllfTkVYVDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOYXZpZ2F0ZUxpbmtQcmV2T3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIE5BVklHQVRFX0xJTktfUFJFVjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOYXZpZ2F0ZUxpbmtOZXh0T3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIE5BVklHQVRFX0xJTktfTkVYVDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOYXZpZ2F0ZVBhcmVudE9wZXJhdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBOQVZJR0FURV9QQVJFTlQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2aWdhdGVSb290T3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIE5BVklHQVRFX1JPT1Q7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9jdXNJbnB1dE9wZXJhdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBGT0NVU19JTlBVVDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYWdlU291cmNlT3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIFBBR0VfU09VUkNFO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2VIb21lT3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIFBBR0VfSE9NRTtcbiAgbmV3VGFiOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRhYkNsb3NlT3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIFRBQl9DTE9TRTtcbiAgc2VsZWN0PzogXCJsZWZ0XCIgfCBcInJpZ2h0XCI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFiQ2xvc2VGb3JjZU9wZXJhdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBUQUJfQ0xPU0VfRk9SQ0U7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFiQ2xvc2VSaWdodE9wZXJhdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBUQUJfQ0xPU0VfUklHSFQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFiUmVvcGVuT3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIFRBQl9SRU9QRU47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFiUHJldk9wZXJhdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBUQUJfUFJFVjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUYWJOZXh0T3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIFRBQl9ORVhUO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRhYkZpcnN0T3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIFRBQl9GSVJTVDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUYWJMYXN0T3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIFRBQl9MQVNUO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRhYlByZXZTZWxPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgVEFCX1BSRVZfU0VMO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRhYlJlbG9hZE9wZXJhdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBUQUJfUkVMT0FEO1xuICBjYWNoZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUYWJQaW5PcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgVEFCX1BJTjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUYWJVbnBpbk9wZXJhdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBUQUJfVU5QSU47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFiVG9nZ2xlUGlubmVkT3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIFRBQl9UT0dHTEVfUElOTkVEO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRhYkR1cGxpY2F0ZU9wZXJhdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBUQUJfRFVQTElDQVRFO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRhYlRvZ2dsZVJlYWRlck9wZXJhdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBUQUJfVE9HR0xFX1JFQURFUjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBab29tSW5PcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgWk9PTV9JTjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBab29tT3V0T3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIFpPT01fT1VUO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFpvb21OZXV0cmFsT3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIFpPT01fTkVVVFJBTDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcmxzWWFua09wZXJhdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBVUkxTX1lBTks7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXJsc1Bhc3RlT3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIFVSTFNfUEFTVEU7XG4gIG5ld1RhYjogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaW5kU3RhcnRPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgRklORF9TVEFSVDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaW5kTmV4dE9wZXJhdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBGSU5EX05FWFQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmluZFByZXZPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgRklORF9QUkVWO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1hcmtTZXRQcmVmaXhPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgTUFSS19TRVRfUFJFRklYO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1hcmtKdW1wUHJlZml4T3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIE1BUktfSlVNUF9QUkVGSVg7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVwZWF0TGFzdE9wZXJhdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBSRVBFQVRfTEFTVDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbnRlcm5hbE9wZW5Vcmwge1xuICB0eXBlOiB0eXBlb2YgSU5URVJOQUxfT1BFTl9VUkw7XG4gIHVybDogc3RyaW5nO1xuICBuZXdUYWI/OiBib29sZWFuO1xuICBuZXdXaW5kb3c/OiBib29sZWFuO1xuICBiYWNrZ3JvdW5kPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IHR5cGUgT3BlcmF0aW9uID1cbiAgfCBDYW5jZWxPcGVyYXRpb25cbiAgfCBBZGRvbkVuYWJsZU9wZXJhdGlvblxuICB8IEFkZG9uRGlzYWJsZU9wZXJhdGlvblxuICB8IEFkZG9uVG9nZ2xlRW5hYmxlZE9wZXJhdGlvblxuICB8IENvbW1hbmRTaG93T3BlcmF0aW9uXG4gIHwgQ29tbWFuZFNob3dPcGVuT3BlcmF0aW9uXG4gIHwgQ29tbWFuZFNob3dUYWJvcGVuT3BlcmF0aW9uXG4gIHwgQ29tbWFuZFNob3dXaW5vcGVuT3BlcmF0aW9uXG4gIHwgQ29tbWFuZFNob3dCdWZmZXJPcGVyYXRpb25cbiAgfCBDb21tYW5kU2hvd0FkZGJvb2ttYXJrT3BlcmF0aW9uXG4gIHwgU2Nyb2xsVmVydGljYWxseU9wZXJhdGlvblxuICB8IFNjcm9sbEhvcml6b25hbGx5T3BlcmF0aW9uXG4gIHwgU2Nyb2xsUGFnZXNPcGVyYXRpb25cbiAgfCBTY3JvbGxUb3BPcGVyYXRpb25cbiAgfCBTY3JvbGxCb3R0b21PcGVyYXRpb25cbiAgfCBTY3JvbGxIb21lT3BlcmF0aW9uXG4gIHwgU2Nyb2xsRW5kT3BlcmF0aW9uXG4gIHwgRm9sbG93U3RhcnRPcGVyYXRpb25cbiAgfCBOYXZpZ2F0ZUhpc3RvcnlQcmV2T3BlcmF0aW9uXG4gIHwgTmF2aWdhdGVIaXN0b3J5TmV4dE9wZXJhdGlvblxuICB8IE5hdmlnYXRlTGlua1ByZXZPcGVyYXRpb25cbiAgfCBOYXZpZ2F0ZUxpbmtOZXh0T3BlcmF0aW9uXG4gIHwgTmF2aWdhdGVQYXJlbnRPcGVyYXRpb25cbiAgfCBOYXZpZ2F0ZVJvb3RPcGVyYXRpb25cbiAgfCBGb2N1c0lucHV0T3BlcmF0aW9uXG4gIHwgUGFnZVNvdXJjZU9wZXJhdGlvblxuICB8IFBhZ2VIb21lT3BlcmF0aW9uXG4gIHwgVGFiQ2xvc2VPcGVyYXRpb25cbiAgfCBUYWJDbG9zZUZvcmNlT3BlcmF0aW9uXG4gIHwgVGFiQ2xvc2VSaWdodE9wZXJhdGlvblxuICB8IFRhYlJlb3Blbk9wZXJhdGlvblxuICB8IFRhYlByZXZPcGVyYXRpb25cbiAgfCBUYWJOZXh0T3BlcmF0aW9uXG4gIHwgVGFiRmlyc3RPcGVyYXRpb25cbiAgfCBUYWJMYXN0T3BlcmF0aW9uXG4gIHwgVGFiUHJldlNlbE9wZXJhdGlvblxuICB8IFRhYlJlbG9hZE9wZXJhdGlvblxuICB8IFRhYlBpbk9wZXJhdGlvblxuICB8IFRhYlVucGluT3BlcmF0aW9uXG4gIHwgVGFiVG9nZ2xlUGlubmVkT3BlcmF0aW9uXG4gIHwgVGFiRHVwbGljYXRlT3BlcmF0aW9uXG4gIHwgVGFiVG9nZ2xlUmVhZGVyT3BlcmF0aW9uXG4gIHwgWm9vbUluT3BlcmF0aW9uXG4gIHwgWm9vbU91dE9wZXJhdGlvblxuICB8IFpvb21OZXV0cmFsT3BlcmF0aW9uXG4gIHwgVXJsc1lhbmtPcGVyYXRpb25cbiAgfCBVcmxzUGFzdGVPcGVyYXRpb25cbiAgfCBGaW5kU3RhcnRPcGVyYXRpb25cbiAgfCBGaW5kTmV4dE9wZXJhdGlvblxuICB8IEZpbmRQcmV2T3BlcmF0aW9uXG4gIHwgTWFya1NldFByZWZpeE9wZXJhdGlvblxuICB8IE1hcmtKdW1wUHJlZml4T3BlcmF0aW9uXG4gIHwgUmVwZWF0TGFzdE9wZXJhdGlvblxuICB8IEludGVybmFsT3BlblVybDtcblxuY29uc3QgYXNzZXJ0T3B0aW9uYWxCb29sZWFuID0gKG9iajogYW55LCBuYW1lOiBzdHJpbmcpID0+IHtcbiAgaWYgKFxuICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIG5hbWUpICYmXG4gICAgdHlwZW9mIG9ialtuYW1lXSAhPT0gXCJib29sZWFuXCJcbiAgKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgIGBOb3QgYSBib29sZWFuIHBhcmFtZXRlcjogJyR7bmFtZX0gKCR7dHlwZW9mIG9ialtuYW1lXX0pJ2BcbiAgICApO1xuICB9XG59O1xuXG5jb25zdCBhc3NlcnRPcHRpb25hbFN0cmluZyA9IChvYmo6IGFueSwgbmFtZTogc3RyaW5nLCB2YWx1ZXM/OiBzdHJpbmdbXSkgPT4ge1xuICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgbmFtZSkpIHtcbiAgICBjb25zdCB2YWx1ZSA9IG9ialtuYW1lXTtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICBgTm90IGEgc3RyaW5nIHBhcmFtZXRlcjogJyR7bmFtZX0nICgke3R5cGVvZiB2YWx1ZX0pYFxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlcyAmJiB2YWx1ZXMubGVuZ3RoICYmIHZhbHVlcy5pbmRleE9mKHZhbHVlKSA9PT0gLTEpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBJbnZhbGlkIHBhcmFtZXRlciBmb3IgJyR7bmFtZX0nOiAnJHt2YWx1ZX0nYCk7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBhc3NlcnRSZXF1aXJlZE51bWJlciA9IChvYmo6IGFueSwgbmFtZTogc3RyaW5nKSA9PiB7XG4gIGlmIChcbiAgICAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgbmFtZSkgfHxcbiAgICB0eXBlb2Ygb2JqW25hbWVdICE9PSBcIm51bWJlclwiXG4gICkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE1pc3NpbmcgbnVtYmVyIHBhcmFtZXRlcjogJyR7bmFtZX1gKTtcbiAgfVxufTtcblxuY29uc3QgYXNzZXJ0UmVxdWlyZWRTdHJpbmcgPSAob2JqOiBhbnksIG5hbWU6IHN0cmluZykgPT4ge1xuICBpZiAoXG4gICAgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIG5hbWUpIHx8XG4gICAgdHlwZW9mIG9ialtuYW1lXSAhPT0gXCJzdHJpbmdcIlxuICApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBNaXNzaW5nIHN0cmluZyBwYXJhbWV0ZXI6ICcke25hbWV9YCk7XG4gIH1cbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5LCBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5leHBvcnQgY29uc3QgdmFsdWVPZiA9IChvOiBhbnkpOiBPcGVyYXRpb24gPT4ge1xuICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBcInR5cGVcIikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBNaXNzaW5nICd0eXBlJyBmaWVsZGApO1xuICB9XG4gIHN3aXRjaCAoby50eXBlKSB7XG4gICAgY2FzZSBDT01NQU5EX1NIT1dfT1BFTjpcbiAgICBjYXNlIENPTU1BTkRfU0hPV19UQUJPUEVOOlxuICAgIGNhc2UgQ09NTUFORF9TSE9XX1dJTk9QRU46XG4gICAgY2FzZSBDT01NQU5EX1NIT1dfQUREQk9PS01BUks6XG4gICAgICBhc3NlcnRPcHRpb25hbEJvb2xlYW4obywgXCJhbHRlclwiKTtcbiAgICAgIHJldHVybiB7IHR5cGU6IG8udHlwZSwgYWx0ZXI6IEJvb2xlYW4oby5hbHRlcikgfTtcbiAgICBjYXNlIFNDUk9MTF9WRVJUSUNBTExZOlxuICAgIGNhc2UgU0NST0xMX0hPUklaT05BTExZOlxuICAgIGNhc2UgU0NST0xMX1BBR0VTOlxuICAgICAgYXNzZXJ0UmVxdWlyZWROdW1iZXIobywgXCJjb3VudFwiKTtcbiAgICAgIHJldHVybiB7IHR5cGU6IG8udHlwZSwgY291bnQ6IE51bWJlcihvLmNvdW50KSB9O1xuICAgIGNhc2UgRk9MTE9XX1NUQVJUOlxuICAgICAgYXNzZXJ0T3B0aW9uYWxCb29sZWFuKG8sIFwibmV3VGFiXCIpO1xuICAgICAgYXNzZXJ0T3B0aW9uYWxCb29sZWFuKG8sIFwiYmFja2dyb3VuZFwiKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IEZPTExPV19TVEFSVCxcbiAgICAgICAgbmV3VGFiOiBCb29sZWFuKHR5cGVvZiBvLm5ld1RhYiA9PT0gXCJ1bmRlZmluZWRcIiA/IGZhbHNlIDogby5uZXdUYWIpLFxuICAgICAgICBiYWNrZ3JvdW5kOiBCb29sZWFuKFxuICAgICAgICAgIHR5cGVvZiBvLmJhY2tncm91bmQgPT09IFwidW5kZWZpbmVkXCIgPyB0cnVlIDogby5iYWNrZ3JvdW5kXG4gICAgICAgICksIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxlblxuICAgICAgfTtcbiAgICBjYXNlIFBBR0VfSE9NRTpcbiAgICAgIGFzc2VydE9wdGlvbmFsQm9vbGVhbihvLCBcIm5ld1RhYlwiKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFBBR0VfSE9NRSxcbiAgICAgICAgbmV3VGFiOiBCb29sZWFuKHR5cGVvZiBvLm5ld1RhYiA9PT0gXCJ1bmRlZmluZWRcIiA/IGZhbHNlIDogby5uZXdUYWIpLFxuICAgICAgfTtcbiAgICBjYXNlIFRBQl9DTE9TRTpcbiAgICAgIGFzc2VydE9wdGlvbmFsU3RyaW5nKG8sIFwic2VsZWN0XCIsIFtcImxlZnRcIiwgXCJyaWdodFwiXSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBUQUJfQ0xPU0UsXG4gICAgICAgIHNlbGVjdDogdHlwZW9mIG8uc2VsZWN0ID09PSBcInVuZGVmaW5lZFwiID8gXCJyaWdodFwiIDogby5zZWxlY3QsXG4gICAgICB9O1xuICAgIGNhc2UgVEFCX1JFTE9BRDpcbiAgICAgIGFzc2VydE9wdGlvbmFsQm9vbGVhbihvLCBcImNhY2hlXCIpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogVEFCX1JFTE9BRCxcbiAgICAgICAgY2FjaGU6IEJvb2xlYW4odHlwZW9mIG8uY2FjaGUgPT09IFwidW5kZWZpbmVkXCIgPyBmYWxzZSA6IG8uY2FjaGUpLFxuICAgICAgfTtcbiAgICBjYXNlIFVSTFNfUEFTVEU6XG4gICAgICBhc3NlcnRPcHRpb25hbEJvb2xlYW4obywgXCJuZXdUYWJcIik7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBVUkxTX1BBU1RFLFxuICAgICAgICBuZXdUYWI6IEJvb2xlYW4odHlwZW9mIG8ubmV3VGFiID09PSBcInVuZGVmaW5lZFwiID8gZmFsc2UgOiBvLm5ld1RhYiksXG4gICAgICB9O1xuICAgIGNhc2UgSU5URVJOQUxfT1BFTl9VUkw6XG4gICAgICBhc3NlcnRPcHRpb25hbEJvb2xlYW4obywgXCJuZXdUYWJcIik7XG4gICAgICBhc3NlcnRPcHRpb25hbEJvb2xlYW4obywgXCJuZXdXaW5kb3dcIik7XG4gICAgICBhc3NlcnRPcHRpb25hbEJvb2xlYW4obywgXCJiYWNrZ3JvdW5kXCIpO1xuICAgICAgYXNzZXJ0UmVxdWlyZWRTdHJpbmcobywgXCJ1cmxcIik7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBJTlRFUk5BTF9PUEVOX1VSTCxcbiAgICAgICAgdXJsOiBvLnVybCxcbiAgICAgICAgbmV3VGFiOiBCb29sZWFuKHR5cGVvZiBvLm5ld1RhYiA9PT0gXCJ1bmRlZmluZWRcIiA/IGZhbHNlIDogby5uZXdUYWIpLFxuICAgICAgICBuZXdXaW5kb3c6IEJvb2xlYW4oXG4gICAgICAgICAgdHlwZW9mIG8ubmV3V2luZG93ID09PSBcInVuZGVmaW5lZFwiID8gZmFsc2UgOiBvLm5ld1dpbmRvd1xuICAgICAgICApLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cbiAgICAgICAgYmFja2dyb3VuZDogQm9vbGVhbihcbiAgICAgICAgICB0eXBlb2Ygby5iYWNrZ3JvdW5kID09PSBcInVuZGVmaW5lZFwiID8gdHJ1ZSA6IG8uYmFja2dyb3VuZFxuICAgICAgICApLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cbiAgICAgIH07XG4gICAgY2FzZSBDQU5DRUw6XG4gICAgY2FzZSBBRERPTl9FTkFCTEU6XG4gICAgY2FzZSBBRERPTl9ESVNBQkxFOlxuICAgIGNhc2UgQURET05fVE9HR0xFX0VOQUJMRUQ6XG4gICAgY2FzZSBDT01NQU5EX1NIT1c6XG4gICAgY2FzZSBDT01NQU5EX1NIT1dfQlVGRkVSOlxuICAgIGNhc2UgU0NST0xMX1RPUDpcbiAgICBjYXNlIFNDUk9MTF9CT1RUT006XG4gICAgY2FzZSBTQ1JPTExfSE9NRTpcbiAgICBjYXNlIFNDUk9MTF9FTkQ6XG4gICAgY2FzZSBOQVZJR0FURV9ISVNUT1JZX1BSRVY6XG4gICAgY2FzZSBOQVZJR0FURV9ISVNUT1JZX05FWFQ6XG4gICAgY2FzZSBOQVZJR0FURV9MSU5LX1BSRVY6XG4gICAgY2FzZSBOQVZJR0FURV9MSU5LX05FWFQ6XG4gICAgY2FzZSBOQVZJR0FURV9QQVJFTlQ6XG4gICAgY2FzZSBOQVZJR0FURV9ST09UOlxuICAgIGNhc2UgRk9DVVNfSU5QVVQ6XG4gICAgY2FzZSBQQUdFX1NPVVJDRTpcbiAgICBjYXNlIFRBQl9DTE9TRV9GT1JDRTpcbiAgICBjYXNlIFRBQl9DTE9TRV9SSUdIVDpcbiAgICBjYXNlIFRBQl9SRU9QRU46XG4gICAgY2FzZSBUQUJfUFJFVjpcbiAgICBjYXNlIFRBQl9ORVhUOlxuICAgIGNhc2UgVEFCX0ZJUlNUOlxuICAgIGNhc2UgVEFCX0xBU1Q6XG4gICAgY2FzZSBUQUJfUFJFVl9TRUw6XG4gICAgY2FzZSBUQUJfUElOOlxuICAgIGNhc2UgVEFCX1VOUElOOlxuICAgIGNhc2UgVEFCX1RPR0dMRV9QSU5ORUQ6XG4gICAgY2FzZSBUQUJfRFVQTElDQVRFOlxuICAgIGNhc2UgVEFCX1RPR0dMRV9SRUFERVI6XG4gICAgY2FzZSBaT09NX0lOOlxuICAgIGNhc2UgWk9PTV9PVVQ6XG4gICAgY2FzZSBaT09NX05FVVRSQUw6XG4gICAgY2FzZSBVUkxTX1lBTks6XG4gICAgY2FzZSBGSU5EX1NUQVJUOlxuICAgIGNhc2UgRklORF9ORVhUOlxuICAgIGNhc2UgRklORF9QUkVWOlxuICAgIGNhc2UgTUFSS19TRVRfUFJFRklYOlxuICAgIGNhc2UgTUFSS19KVU1QX1BSRUZJWDpcbiAgICBjYXNlIFJFUEVBVF9MQVNUOlxuICAgICAgcmV0dXJuIHsgdHlwZTogby50eXBlIH07XG4gIH1cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVua25vd24gb3BlcmF0aW9uIHR5cGU6IFwiICsgby50eXBlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc05SZXBlYXRhYmxlID0gKHR5cGU6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFNDUk9MTF9WRVJUSUNBTExZOlxuICAgIGNhc2UgU0NST0xMX0hPUklaT05BTExZOlxuICAgIGNhc2UgU0NST0xMX1BBR0VTOlxuICAgIGNhc2UgTkFWSUdBVEVfSElTVE9SWV9QUkVWOlxuICAgIGNhc2UgTkFWSUdBVEVfSElTVE9SWV9ORVhUOlxuICAgIGNhc2UgTkFWSUdBVEVfUEFSRU5UOlxuICAgIGNhc2UgVEFCX0NMT1NFOlxuICAgIGNhc2UgVEFCX0NMT1NFX0ZPUkNFOlxuICAgIGNhc2UgVEFCX0NMT1NFX1JJR0hUOlxuICAgIGNhc2UgVEFCX1JFT1BFTjpcbiAgICBjYXNlIFRBQl9QUkVWOlxuICAgIGNhc2UgVEFCX05FWFQ6XG4gICAgY2FzZSBUQUJfRFVQTElDQVRFOlxuICAgIGNhc2UgWk9PTV9JTjpcbiAgICBjYXNlIFpPT01fT1VUOlxuICAgIGNhc2UgVVJMU19QQVNURTpcbiAgICBjYXNlIEZJTkRfTkVYVDpcbiAgICBjYXNlIEZJTkRfUFJFVjpcbiAgICBjYXNlIFJFUEVBVF9MQVNUOlxuICAgICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcbiIsImltcG9ydCAqIGFzIG9wZXJhdGlvbnMgZnJvbSBcIi4vb3BlcmF0aW9uc1wiO1xuaW1wb3J0IENvbXBsZXRpb25UeXBlIGZyb20gXCIuL0NvbXBsZXRpb25UeXBlXCI7XG5pbXBvcnQgVGFiRmxhZyBmcm9tIFwiLi9UYWJGbGFnXCI7XG5cbmV4cG9ydCBjb25zdCBCQUNLR1JPVU5EX09QRVJBVElPTiA9IFwiYmFja2dyb3VuZC5vcGVyYXRpb25cIjtcblxuZXhwb3J0IGNvbnN0IENPTlNPTEVfVU5GT0NVUyA9IFwiY29uc29sZS51bmZvY3VzXCI7XG5leHBvcnQgY29uc3QgQ09OU09MRV9FTlRFUl9DT01NQU5EID0gXCJjb25zb2xlLmVudGVyLmNvbW1hbmRcIjtcbmV4cG9ydCBjb25zdCBDT05TT0xFX0VOVEVSX0ZJTkQgPSBcImNvbnNvbGUuZW50ZXIuZmluZFwiO1xuZXhwb3J0IGNvbnN0IENPTlNPTEVfU0hPV19DT01NQU5EID0gXCJjb25zb2xlLnNob3cuY29tbWFuZFwiO1xuZXhwb3J0IGNvbnN0IENPTlNPTEVfU0hPV19FUlJPUiA9IFwiY29uc29sZS5zaG93LmVycm9yXCI7XG5leHBvcnQgY29uc3QgQ09OU09MRV9TSE9XX0lORk8gPSBcImNvbnNvbGUuc2hvdy5pbmZvXCI7XG5leHBvcnQgY29uc3QgQ09OU09MRV9TSE9XX0ZJTkQgPSBcImNvbnNvbGUuc2hvdy5maW5kXCI7XG5leHBvcnQgY29uc3QgQ09OU09MRV9ISURFID0gXCJjb25zb2xlLmhpZGVcIjtcbmV4cG9ydCBjb25zdCBDT05TT0xFX0dFVF9DT01QTEVUSU9OX1RZUEVTID0gXCJjb25zb2xlLmdldC5jb21wbGV0aW9uLnR5cGVzXCI7XG5leHBvcnQgY29uc3QgQ09OU09MRV9SRVFVRVNUX1NFQVJDSF9FTkdJTkVTX01FU1NBR0UgPVxuICBcImNvbnNvbGUucXJlc3V0LnNlYXJjaEVuZ2luZXNcIjtcbmV4cG9ydCBjb25zdCBDT05TT0xFX1JFUVVFU1RfQk9PS01BUktTID0gXCJjb25zb2xlLnJlcXVlc3QuYm9va21hcmtzXCI7XG5leHBvcnQgY29uc3QgQ09OU09MRV9SRVFVRVNUX0hJU1RPUlkgPSBcImNvbnNvbGUucmVxdWVzdC5oaXN0b3J5XCI7XG5leHBvcnQgY29uc3QgQ09OU09MRV9SRVFVRVNUX1RBQlMgPSBcImNvbnNvbGUucmVxdWVzdC50YWJzXCI7XG5leHBvcnQgY29uc3QgQ09OU09MRV9HRVRfUFJPUEVSVElFUyA9IFwiY29uc29sZS5nZXQucHJvcGVydGllc1wiO1xuZXhwb3J0IGNvbnN0IENPTlNPTEVfUkVTSVpFID0gXCJjb25zb2xlLnJlc2l6ZVwiO1xuXG5leHBvcnQgY29uc3QgRk9MTE9XX1NUQVJUID0gXCJmb2xsb3cuc3RhcnRcIjtcbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVF9DT1VOVF9UQVJHRVRTID0gXCJmb2xsb3cucmVxdWVzdC5jb3VudC50YXJnZXRzXCI7XG5leHBvcnQgY29uc3QgRk9MTE9XX1JFU1BPTlNFX0NPVU5UX1RBUkdFVFMgPSBcImZvbGxvdy5yZXNwb25zZS5jb3VudC50YXJnZXRzXCI7XG5leHBvcnQgY29uc3QgRk9MTE9XX0NSRUFURV9ISU5UUyA9IFwiZm9sbG93LmNyZWF0ZS5oaW50c1wiO1xuZXhwb3J0IGNvbnN0IEZPTExPV19TSE9XX0hJTlRTID0gXCJmb2xsb3cudXBkYXRlLmhpbnRzXCI7XG5leHBvcnQgY29uc3QgRk9MTE9XX1JFTU9WRV9ISU5UUyA9IFwiZm9sbG93LnJlbW92ZS5oaW50c1wiO1xuZXhwb3J0IGNvbnN0IEZPTExPV19BQ1RJVkFURSA9IFwiZm9sbG93LmFjdGl2YXRlXCI7XG5leHBvcnQgY29uc3QgRk9MTE9XX0tFWV9QUkVTUyA9IFwiZm9sbG93LmtleS5wcmVzc1wiO1xuXG5leHBvcnQgY29uc3QgTUFSS19TRVRfR0xPQkFMID0gXCJtYXJrLnNldC5nbG9iYWxcIjtcbmV4cG9ydCBjb25zdCBNQVJLX0pVTVBfR0xPQkFMID0gXCJtYXJrLmp1bXAuZ2xvYmFsXCI7XG5cbmV4cG9ydCBjb25zdCBUQUJfU0NST0xMX1RPID0gXCJ0YWIuc2Nyb2xsLnRvXCI7XG5cbmV4cG9ydCBjb25zdCBGSU5EX05FWFQgPSBcImZpbmQubmV4dFwiO1xuZXhwb3J0IGNvbnN0IEZJTkRfUFJFViA9IFwiZmluZC5wcmV2XCI7XG5leHBvcnQgY29uc3QgRklORF9DTEVBUl9TRUxFQ1RJT04gPSBcImZpbmQuY2xlYXIuc2VsZWN0aW9uXCI7XG5cbmV4cG9ydCBjb25zdCBBRERPTl9FTkFCTEVEX1FVRVJZID0gXCJhZGRvbi5lbmFibGVkLnF1ZXJ5XCI7XG5leHBvcnQgY29uc3QgQURET05fRU5BQkxFRF9SRVNQT05TRSA9IFwiYWRkb24uZW5hYmxlZC5yZXNwb25zZVwiO1xuZXhwb3J0IGNvbnN0IEFERE9OX1RPR0dMRV9FTkFCTEVEID0gXCJhZGRvbi50b2dnbGUuZW5hYmxlZFwiO1xuXG5leHBvcnQgY29uc3QgT1BFTl9VUkwgPSBcIm9wZW4udXJsXCI7XG5cbmV4cG9ydCBjb25zdCBTRVRUSU5HU19DSEFOR0VEID0gXCJzZXR0aW5ncy5jaGFuZ2VkXCI7XG5leHBvcnQgY29uc3QgU0VUVElOR1NfUVVFUlkgPSBcInNldHRpbmdzLnF1ZXJ5XCI7XG5cbmV4cG9ydCBjb25zdCBDT05TT0xFX0ZSQU1FX01FU1NBR0UgPSBcImNvbnNvbGUuZnJhbWUubWVzc2FnZVwiO1xuXG5leHBvcnQgY29uc3QgTkFWSUdBVEVfSElTVE9SWV9ORVhUID0gXCJuYXZpZ2F0ZS5oaXN0b3J5Lm5leHRcIjtcbmV4cG9ydCBjb25zdCBOQVZJR0FURV9ISVNUT1JZX1BSRVYgPSBcIm5hdmlnYXRlLmhpc3RvcnkucHJldlwiO1xuZXhwb3J0IGNvbnN0IE5BVklHQVRFX0xJTktfTkVYVCA9IFwibmF2aWdhdGUubGluay5uZXh0XCI7XG5leHBvcnQgY29uc3QgTkFWSUdBVEVfTElOS19QUkVWID0gXCJuYXZpZ2F0ZS5saW5rLnByZXZcIjtcblxuZXhwb3J0IGludGVyZmFjZSBCYWNrZ3JvdW5kT3BlcmF0aW9uTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBCQUNLR1JPVU5EX09QRVJBVElPTjtcbiAgcmVwZWF0OiBudW1iZXI7XG4gIG9wZXJhdGlvbjogb3BlcmF0aW9ucy5PcGVyYXRpb247XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uc29sZVVuZm9jdXNNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIENPTlNPTEVfVU5GT0NVUztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25zb2xlRW50ZXJDb21tYW5kTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBDT05TT0xFX0VOVEVSX0NPTU1BTkQ7XG4gIHRleHQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25zb2xlRW50ZXJGaW5kTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBDT05TT0xFX0VOVEVSX0ZJTkQ7XG4gIGtleXdvcmQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uc29sZVNob3dDb21tYW5kTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBDT05TT0xFX1NIT1dfQ09NTUFORDtcbiAgY29tbWFuZDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbnNvbGVTaG93RXJyb3JNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIENPTlNPTEVfU0hPV19FUlJPUjtcbiAgdGV4dDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbnNvbGVTaG93SW5mb01lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgQ09OU09MRV9TSE9XX0lORk87XG4gIHRleHQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25zb2xlU2hvd0ZpbmRNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIENPTlNPTEVfU0hPV19GSU5EO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbnNvbGVIaWRlTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBDT05TT0xFX0hJREU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uc29sZUdldENvbXBsZXRpb25UeXBlc01lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgQ09OU09MRV9HRVRfQ09NUExFVElPTl9UWVBFUztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25zb2xlUmVxdWVzdFNlYXJjaEVuZ2luZXNNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIENPTlNPTEVfUkVRVUVTVF9TRUFSQ0hfRU5HSU5FU19NRVNTQUdFO1xuICBxdWVyeTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbnNvbGVSZXF1ZXN0Qm9va21hcmtzTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBDT05TT0xFX1JFUVVFU1RfQk9PS01BUktTO1xuICBxdWVyeTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbnNvbGVSZXF1ZXN0SGlzdG9yeU1lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgQ09OU09MRV9SRVFVRVNUX0hJU1RPUlk7XG4gIHF1ZXJ5OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uc29sZVJlcXVlc3RUYWJzTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBDT05TT0xFX1JFUVVFU1RfVEFCUztcbiAgcXVlcnk6IHN0cmluZztcbiAgZXhjbHVkZVBpbm5lZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25zb2xlR2V0UHJvcGVydGllc01lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgQ09OU09MRV9HRVRfUFJPUEVSVElFUztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25zb2xlUmVzaXplTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBDT05TT0xFX1JFU0laRTtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG59XG5cbmV4cG9ydCB0eXBlIENvbnNvbGVSZXF1ZXN0VGFic1Jlc3BvbnNlID0ge1xuICBpbmRleDogbnVtYmVyO1xuICBmbGFnOiBUYWJGbGFnO1xuICB0aXRsZTogc3RyaW5nO1xuICB1cmw6IHN0cmluZztcbiAgZmF2aWNvblVybD86IHN0cmluZztcbn1bXTtcblxuZXhwb3J0IHR5cGUgQ29uc29sZUdldENvbXBsZXRpb25UeXBlc1Jlc3BvbnNlID0gQ29tcGxldGlvblR5cGVbXTtcblxuZXhwb3J0IHR5cGUgQ29uc29sZVJlcXVlc3RTZWFyY2hFbmdpbmVzUmVzcG9uc2UgPSB7XG4gIHRpdGxlOiBzdHJpbmc7XG59W107XG5cbmV4cG9ydCB0eXBlIENvbnNvbGVSZXF1ZXN0Qm9va21hcmtzUmVzcG9uc2UgPSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHVybDogc3RyaW5nO1xufVtdO1xuXG5leHBvcnQgdHlwZSBDb25zb2xlUmVxdWVzdEhpc3RvcnlSZXNwb25zZSA9IHtcbiAgdGl0bGU6IHN0cmluZztcbiAgdXJsOiBzdHJpbmc7XG59W107XG5cbmV4cG9ydCB0eXBlIENvbnNvbGVHZXRQcm9wZXJ0aWVzUmVzcG9uc2UgPSB7XG4gIG5hbWU6IHN0cmluZztcbiAgdHlwZTogXCJzdHJpbmdcIiB8IFwiYm9vbGVhblwiIHwgXCJudW1iZXJcIjtcbn1bXTtcblxuZXhwb3J0IGludGVyZmFjZSBGb2xsb3dTdGFydE1lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgRk9MTE9XX1NUQVJUO1xuICBuZXdUYWI6IGJvb2xlYW47XG4gIGJhY2tncm91bmQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9sbG93UmVxdWVzdENvdW50VGFyZ2V0c01lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgRk9MTE9XX1JFUVVFU1RfQ09VTlRfVEFSR0VUUztcbiAgdmlld1NpemU6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfTtcbiAgZnJhbWVQb3NpdGlvbjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZvbGxvd1Jlc3BvbnNlQ291bnRUYXJnZXRzTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBGT0xMT1dfUkVTUE9OU0VfQ09VTlRfVEFSR0VUUztcbiAgY291bnQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGb2xsb3dDcmVhdGVIaW50c01lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgRk9MTE9XX0NSRUFURV9ISU5UUztcbiAgdGFnczogc3RyaW5nW107XG4gIHZpZXdTaXplOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH07XG4gIGZyYW1lUG9zaXRpb246IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGb2xsb3dTaG93SGludHNNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIEZPTExPV19TSE9XX0hJTlRTO1xuICBwcmVmaXg6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGb2xsb3dSZW1vdmVIaW50c01lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgRk9MTE9XX1JFTU9WRV9ISU5UUztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGb2xsb3dBY3RpdmF0ZU1lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgRk9MTE9XX0FDVElWQVRFO1xuICB0YWc6IHN0cmluZztcbiAgbmV3VGFiOiBib29sZWFuO1xuICBiYWNrZ3JvdW5kOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZvbGxvd0tleVByZXNzTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBGT0xMT1dfS0VZX1BSRVNTO1xuICBrZXk6IHN0cmluZztcbiAgY3RybEtleTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNYXJrU2V0R2xvYmFsTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBNQVJLX1NFVF9HTE9CQUw7XG4gIGtleTogc3RyaW5nO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNYXJrSnVtcEdsb2JhbE1lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgTUFSS19KVU1QX0dMT0JBTDtcbiAga2V5OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFiU2Nyb2xsVG9NZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIFRBQl9TQ1JPTExfVE87XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpbmROZXh0TWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBGSU5EX05FWFQ7XG4gIGtleXdvcmQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaW5kUHJldk1lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgRklORF9QUkVWO1xuICBrZXl3b3JkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmluZENsZWFyU2VsZWN0aW9uIHtcbiAgdHlwZTogdHlwZW9mIEZJTkRfQ0xFQVJfU0VMRUNUSU9OO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFkZG9uRW5hYmxlZFF1ZXJ5TWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBBRERPTl9FTkFCTEVEX1FVRVJZO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFkZG9uRW5hYmxlZFJlc3BvbnNlTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBBRERPTl9FTkFCTEVEX1JFU1BPTlNFO1xuICBlbmFibGVkOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFkZG9uVG9nZ2xlRW5hYmxlZE1lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgQURET05fVE9HR0xFX0VOQUJMRUQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3BlblVybE1lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgT1BFTl9VUkw7XG4gIHVybDogc3RyaW5nO1xuICBuZXdUYWI6IGJvb2xlYW47XG4gIGJhY2tncm91bmQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2V0dGluZ3NDaGFuZ2VkTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBTRVRUSU5HU19DSEFOR0VEO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNldHRpbmdzUXVlcnlNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIFNFVFRJTkdTX1FVRVJZO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbnNvbGVGcmFtZU1lc3NhZ2VNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIENPTlNPTEVfRlJBTUVfTUVTU0FHRTtcbiAgbWVzc2FnZTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5hdmlnYXRlSGlzdG9yeU5leHRNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIE5BVklHQVRFX0hJU1RPUllfTkVYVDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOYXZpZ2F0ZUhpc3RvcnlQcmV2TWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBOQVZJR0FURV9ISVNUT1JZX1BSRVY7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2aWdhdGVMaW5rTmV4dCB7XG4gIHR5cGU6IHR5cGVvZiBOQVZJR0FURV9MSU5LX05FWFQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2aWdhdGVMaW5rUHJldiB7XG4gIHR5cGU6IHR5cGVvZiBOQVZJR0FURV9MSU5LX1BSRVY7XG59XG5cbmV4cG9ydCB0eXBlIE1lc3NhZ2UgPVxuICB8IEJhY2tncm91bmRPcGVyYXRpb25NZXNzYWdlXG4gIHwgQ29uc29sZVVuZm9jdXNNZXNzYWdlXG4gIHwgQ29uc29sZUVudGVyQ29tbWFuZE1lc3NhZ2VcbiAgfCBDb25zb2xlRW50ZXJGaW5kTWVzc2FnZVxuICB8IENvbnNvbGVTaG93Q29tbWFuZE1lc3NhZ2VcbiAgfCBDb25zb2xlU2hvd0Vycm9yTWVzc2FnZVxuICB8IENvbnNvbGVTaG93SW5mb01lc3NhZ2VcbiAgfCBDb25zb2xlU2hvd0ZpbmRNZXNzYWdlXG4gIHwgQ29uc29sZUhpZGVNZXNzYWdlXG4gIHwgQ29uc29sZVJlcXVlc3RCb29rbWFya3NNZXNzYWdlXG4gIHwgQ29uc29sZVJlcXVlc3RIaXN0b3J5TWVzc2FnZVxuICB8IENvbnNvbGVSZXF1ZXN0VGFic01lc3NhZ2VcbiAgfCBDb25zb2xlR2V0UHJvcGVydGllc01lc3NhZ2VcbiAgfCBDb25zb2xlUmVzaXplTWVzc2FnZVxuICB8IENvbnNvbGVHZXRDb21wbGV0aW9uVHlwZXNNZXNzYWdlXG4gIHwgQ29uc29sZVJlcXVlc3RTZWFyY2hFbmdpbmVzTWVzc2FnZVxuICB8IEZvbGxvd1N0YXJ0TWVzc2FnZVxuICB8IEZvbGxvd1JlcXVlc3RDb3VudFRhcmdldHNNZXNzYWdlXG4gIHwgRm9sbG93UmVzcG9uc2VDb3VudFRhcmdldHNNZXNzYWdlXG4gIHwgRm9sbG93Q3JlYXRlSGludHNNZXNzYWdlXG4gIHwgRm9sbG93U2hvd0hpbnRzTWVzc2FnZVxuICB8IEZvbGxvd1JlbW92ZUhpbnRzTWVzc2FnZVxuICB8IEZvbGxvd0FjdGl2YXRlTWVzc2FnZVxuICB8IEZvbGxvd0tleVByZXNzTWVzc2FnZVxuICB8IE1hcmtTZXRHbG9iYWxNZXNzYWdlXG4gIHwgTWFya0p1bXBHbG9iYWxNZXNzYWdlXG4gIHwgVGFiU2Nyb2xsVG9NZXNzYWdlXG4gIHwgRmluZE5leHRNZXNzYWdlXG4gIHwgRmluZFByZXZNZXNzYWdlXG4gIHwgRmluZENsZWFyU2VsZWN0aW9uXG4gIHwgQWRkb25FbmFibGVkUXVlcnlNZXNzYWdlXG4gIHwgQWRkb25FbmFibGVkUmVzcG9uc2VNZXNzYWdlXG4gIHwgQWRkb25Ub2dnbGVFbmFibGVkTWVzc2FnZVxuICB8IE9wZW5VcmxNZXNzYWdlXG4gIHwgU2V0dGluZ3NDaGFuZ2VkTWVzc2FnZVxuICB8IFNldHRpbmdzUXVlcnlNZXNzYWdlXG4gIHwgQ29uc29sZUZyYW1lTWVzc2FnZU1lc3NhZ2VcbiAgfCBOYXZpZ2F0ZUhpc3RvcnlOZXh0TWVzc2FnZVxuICB8IE5hdmlnYXRlSGlzdG9yeVByZXZNZXNzYWdlXG4gIHwgTmF2aWdhdGVMaW5rTmV4dFxuICB8IE5hdmlnYXRlTGlua1ByZXY7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG5leHBvcnQgY29uc3QgdmFsdWVPZiA9IChvOiBhbnkpOiBNZXNzYWdlID0+IHtcbiAgc3dpdGNoIChvLnR5cGUpIHtcbiAgICBjYXNlIENPTlNPTEVfVU5GT0NVUzpcbiAgICBjYXNlIENPTlNPTEVfRU5URVJfQ09NTUFORDpcbiAgICBjYXNlIENPTlNPTEVfRU5URVJfRklORDpcbiAgICBjYXNlIENPTlNPTEVfU0hPV19DT01NQU5EOlxuICAgIGNhc2UgQ09OU09MRV9TSE9XX0VSUk9SOlxuICAgIGNhc2UgQ09OU09MRV9TSE9XX0lORk86XG4gICAgY2FzZSBDT05TT0xFX1NIT1dfRklORDpcbiAgICBjYXNlIENPTlNPTEVfSElERTpcbiAgICBjYXNlIEZPTExPV19TVEFSVDpcbiAgICBjYXNlIEZPTExPV19SRVFVRVNUX0NPVU5UX1RBUkdFVFM6XG4gICAgY2FzZSBGT0xMT1dfUkVTUE9OU0VfQ09VTlRfVEFSR0VUUzpcbiAgICBjYXNlIEZPTExPV19DUkVBVEVfSElOVFM6XG4gICAgY2FzZSBGT0xMT1dfU0hPV19ISU5UUzpcbiAgICBjYXNlIEZPTExPV19SRU1PVkVfSElOVFM6XG4gICAgY2FzZSBGT0xMT1dfQUNUSVZBVEU6XG4gICAgY2FzZSBGT0xMT1dfS0VZX1BSRVNTOlxuICAgIGNhc2UgTUFSS19TRVRfR0xPQkFMOlxuICAgIGNhc2UgTUFSS19KVU1QX0dMT0JBTDpcbiAgICBjYXNlIFRBQl9TQ1JPTExfVE86XG4gICAgY2FzZSBGSU5EX05FWFQ6XG4gICAgY2FzZSBGSU5EX1BSRVY6XG4gICAgY2FzZSBGSU5EX0NMRUFSX1NFTEVDVElPTjpcbiAgICBjYXNlIEFERE9OX0VOQUJMRURfUVVFUlk6XG4gICAgY2FzZSBBRERPTl9FTkFCTEVEX1JFU1BPTlNFOlxuICAgIGNhc2UgQURET05fVE9HR0xFX0VOQUJMRUQ6XG4gICAgY2FzZSBPUEVOX1VSTDpcbiAgICBjYXNlIFNFVFRJTkdTX0NIQU5HRUQ6XG4gICAgY2FzZSBTRVRUSU5HU19RVUVSWTpcbiAgICBjYXNlIENPTlNPTEVfRlJBTUVfTUVTU0FHRTpcbiAgICBjYXNlIENPTlNPTEVfUkVTSVpFOlxuICAgIGNhc2UgTkFWSUdBVEVfSElTVE9SWV9ORVhUOlxuICAgIGNhc2UgTkFWSUdBVEVfSElTVE9SWV9QUkVWOlxuICAgIGNhc2UgTkFWSUdBVEVfTElOS19ORVhUOlxuICAgIGNhc2UgTkFWSUdBVEVfTElOS19QUkVWOlxuICAgICAgcmV0dXJuIG87XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKFwidW5rbm93biBtZXNzYWdlIHR5cGU6IFwiICsgby50eXBlKTtcbn07XG4iLCJpbXBvcnR7dHlwZU9mIGFzIGUsaXNFbGVtZW50IGFzIHQsaXNWYWxpZEVsZW1lbnRUeXBlIGFzIG59ZnJvbVwicmVhY3QtaXNcIjtpbXBvcnQgcix7dXNlU3RhdGUgYXMgbyx1c2VDb250ZXh0IGFzIGksdXNlTWVtbyBhcyBzLHVzZUVmZmVjdCBhcyBhLHVzZVJlZiBhcyBjLGNyZWF0ZUVsZW1lbnQgYXMgdSx1c2VEZWJ1Z1ZhbHVlIGFzIGwsdXNlTGF5b3V0RWZmZWN0IGFzIGR9ZnJvbVwicmVhY3RcIjtpbXBvcnQgaCBmcm9tXCJzaGFsbG93ZXF1YWxcIjtpbXBvcnQgcCBmcm9tXCJAZW1vdGlvbi9zdHlsaXNcIjtpbXBvcnQgZiBmcm9tXCJAZW1vdGlvbi91bml0bGVzc1wiO2ltcG9ydCBtIGZyb21cIkBlbW90aW9uL2lzLXByb3AtdmFsaWRcIjtpbXBvcnQgeSBmcm9tXCJob2lzdC1ub24tcmVhY3Qtc3RhdGljc1wiO2Z1bmN0aW9uIHYoKXtyZXR1cm4odj1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgbj1hcmd1bWVudHNbdF07Zm9yKHZhciByIGluIG4pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4scikmJihlW3JdPW5bcl0pfXJldHVybiBlfSkuYXBwbHkodGhpcyxhcmd1bWVudHMpfXZhciBnPWZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPVtlWzBdXSxyPTAsbz10Lmxlbmd0aDtyPG87cis9MSluLnB1c2godFtyXSxlW3IrMV0pO3JldHVybiBufSxTPWZ1bmN0aW9uKHQpe3JldHVybiBudWxsIT09dCYmXCJvYmplY3RcIj09dHlwZW9mIHQmJlwiW29iamVjdCBPYmplY3RdXCI9PT0odC50b1N0cmluZz90LnRvU3RyaW5nKCk6T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpKSYmIWUodCl9LHc9T2JqZWN0LmZyZWV6ZShbXSksRT1PYmplY3QuZnJlZXplKHt9KTtmdW5jdGlvbiBiKGUpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGV9ZnVuY3Rpb24gXyhlKXtyZXR1cm5cInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZcInN0cmluZ1wiPT10eXBlb2YgZSYmZXx8ZS5kaXNwbGF5TmFtZXx8ZS5uYW1lfHxcIkNvbXBvbmVudFwifWZ1bmN0aW9uIE4oZSl7cmV0dXJuIGUmJlwic3RyaW5nXCI9PXR5cGVvZiBlLnN0eWxlZENvbXBvbmVudElkfXZhciBBPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBwcm9jZXNzJiYocHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1NDX0FUVFJ8fHByb2Nlc3MuZW52LlNDX0FUVFIpfHxcImRhdGEtc3R5bGVkXCIsQz1cIjUuMy4wXCIsST1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZcIkhUTUxFbGVtZW50XCJpbiB3aW5kb3csUD1Cb29sZWFuKFwiYm9vbGVhblwiPT10eXBlb2YgU0NfRElTQUJMRV9TUEVFRFk/U0NfRElTQUJMRV9TUEVFRFk6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHByb2Nlc3MmJnZvaWQgMCE9PXByb2Nlc3MuZW52LlJFQUNUX0FQUF9TQ19ESVNBQkxFX1NQRUVEWSYmXCJcIiE9PXByb2Nlc3MuZW52LlJFQUNUX0FQUF9TQ19ESVNBQkxFX1NQRUVEWT9cImZhbHNlXCIhPT1wcm9jZXNzLmVudi5SRUFDVF9BUFBfU0NfRElTQUJMRV9TUEVFRFkmJnByb2Nlc3MuZW52LlJFQUNUX0FQUF9TQ19ESVNBQkxFX1NQRUVEWTpcInVuZGVmaW5lZFwiIT10eXBlb2YgcHJvY2VzcyYmdm9pZCAwIT09cHJvY2Vzcy5lbnYuU0NfRElTQUJMRV9TUEVFRFkmJlwiXCIhPT1wcm9jZXNzLmVudi5TQ19ESVNBQkxFX1NQRUVEWT9cImZhbHNlXCIhPT1wcm9jZXNzLmVudi5TQ19ESVNBQkxFX1NQRUVEWSYmcHJvY2Vzcy5lbnYuU0NfRElTQUJMRV9TUEVFRFk6XCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViksTz17fSxSPVwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlY/ezE6XCJDYW5ub3QgY3JlYXRlIHN0eWxlZC1jb21wb25lbnQgZm9yIGNvbXBvbmVudDogJXMuXFxuXFxuXCIsMjpcIkNhbid0IGNvbGxlY3Qgc3R5bGVzIG9uY2UgeW91J3ZlIGNvbnN1bWVkIGEgYFNlcnZlclN0eWxlU2hlZXRgJ3Mgc3R5bGVzISBgU2VydmVyU3R5bGVTaGVldGAgaXMgYSBvbmUgb2ZmIGluc3RhbmNlIGZvciBlYWNoIHNlcnZlci1zaWRlIHJlbmRlciBjeWNsZS5cXG5cXG4tIEFyZSB5b3UgdHJ5aW5nIHRvIHJldXNlIGl0IGFjcm9zcyByZW5kZXJzP1xcbi0gQXJlIHlvdSBhY2NpZGVudGFsbHkgY2FsbGluZyBjb2xsZWN0U3R5bGVzIHR3aWNlP1xcblxcblwiLDM6XCJTdHJlYW1pbmcgU1NSIGlzIG9ubHkgc3VwcG9ydGVkIGluIGEgTm9kZS5qcyBlbnZpcm9ubWVudDsgUGxlYXNlIGRvIG5vdCB0cnkgdG8gY2FsbCB0aGlzIG1ldGhvZCBpbiB0aGUgYnJvd3Nlci5cXG5cXG5cIiw0OlwiVGhlIGBTdHlsZVNoZWV0TWFuYWdlcmAgZXhwZWN0cyBhIHZhbGlkIHRhcmdldCBvciBzaGVldCBwcm9wIVxcblxcbi0gRG9lcyB0aGlzIGVycm9yIG9jY3VyIG9uIHRoZSBjbGllbnQgYW5kIGlzIHlvdXIgdGFyZ2V0IGZhbHN5P1xcbi0gRG9lcyB0aGlzIGVycm9yIG9jY3VyIG9uIHRoZSBzZXJ2ZXIgYW5kIGlzIHRoZSBzaGVldCBmYWxzeT9cXG5cXG5cIiw1OlwiVGhlIGNsb25lIG1ldGhvZCBjYW5ub3QgYmUgdXNlZCBvbiB0aGUgY2xpZW50IVxcblxcbi0gQXJlIHlvdSBydW5uaW5nIGluIGEgY2xpZW50LWxpa2UgZW52aXJvbm1lbnQgb24gdGhlIHNlcnZlcj9cXG4tIEFyZSB5b3UgdHJ5aW5nIHRvIHJ1biBTU1Igb24gdGhlIGNsaWVudD9cXG5cXG5cIiw2OlwiVHJ5aW5nIHRvIGluc2VydCBhIG5ldyBzdHlsZSB0YWcsIGJ1dCB0aGUgZ2l2ZW4gTm9kZSBpcyB1bm1vdW50ZWQhXFxuXFxuLSBBcmUgeW91IHVzaW5nIGEgY3VzdG9tIHRhcmdldCB0aGF0IGlzbid0IG1vdW50ZWQ/XFxuLSBEb2VzIHlvdXIgZG9jdW1lbnQgbm90IGhhdmUgYSB2YWxpZCBoZWFkIGVsZW1lbnQ/XFxuLSBIYXZlIHlvdSBhY2NpZGVudGFsbHkgcmVtb3ZlZCBhIHN0eWxlIHRhZyBtYW51YWxseT9cXG5cXG5cIiw3OidUaGVtZVByb3ZpZGVyOiBQbGVhc2UgcmV0dXJuIGFuIG9iamVjdCBmcm9tIHlvdXIgXCJ0aGVtZVwiIHByb3AgZnVuY3Rpb24sIGUuZy5cXG5cXG5gYGBqc1xcbnRoZW1lPXsoKSA9PiAoe30pfVxcbmBgYFxcblxcbicsODonVGhlbWVQcm92aWRlcjogUGxlYXNlIG1ha2UgeW91ciBcInRoZW1lXCIgcHJvcCBhbiBvYmplY3QuXFxuXFxuJyw5OlwiTWlzc2luZyBkb2N1bWVudCBgPGhlYWQ+YFxcblxcblwiLDEwOlwiQ2Fubm90IGZpbmQgYSBTdHlsZVNoZWV0IGluc3RhbmNlLiBVc3VhbGx5IHRoaXMgaGFwcGVucyBpZiB0aGVyZSBhcmUgbXVsdGlwbGUgY29waWVzIG9mIHN0eWxlZC1jb21wb25lbnRzIGxvYWRlZCBhdCBvbmNlLiBDaGVjayBvdXQgdGhpcyBpc3N1ZSBmb3IgaG93IHRvIHRyb3VibGVzaG9vdCBhbmQgZml4IHRoZSBjb21tb24gY2FzZXMgd2hlcmUgdGhpcyBzaXR1YXRpb24gY2FuIGhhcHBlbjogaHR0cHM6Ly9naXRodWIuY29tL3N0eWxlZC1jb21wb25lbnRzL3N0eWxlZC1jb21wb25lbnRzL2lzc3Vlcy8xOTQxI2lzc3VlY29tbWVudC00MTc4NjIwMjFcXG5cXG5cIiwxMTpcIl9UaGlzIGVycm9yIHdhcyByZXBsYWNlZCB3aXRoIGEgZGV2LXRpbWUgd2FybmluZywgaXQgd2lsbCBiZSBkZWxldGVkIGZvciB2NCBmaW5hbC5fIFtjcmVhdGVHbG9iYWxTdHlsZV0gcmVjZWl2ZWQgY2hpbGRyZW4gd2hpY2ggd2lsbCBub3QgYmUgcmVuZGVyZWQuIFBsZWFzZSB1c2UgdGhlIGNvbXBvbmVudCB3aXRob3V0IHBhc3NpbmcgY2hpbGRyZW4gZWxlbWVudHMuXFxuXFxuXCIsMTI6XCJJdCBzZWVtcyB5b3UgYXJlIGludGVycG9sYXRpbmcgYSBrZXlmcmFtZSBkZWNsYXJhdGlvbiAoJXMpIGludG8gYW4gdW50YWdnZWQgc3RyaW5nLiBUaGlzIHdhcyBzdXBwb3J0ZWQgaW4gc3R5bGVkLWNvbXBvbmVudHMgdjMsIGJ1dCBpcyBub3QgbG9uZ2VyIHN1cHBvcnRlZCBpbiB2NCBhcyBrZXlmcmFtZXMgYXJlIG5vdyBpbmplY3RlZCBvbi1kZW1hbmQuIFBsZWFzZSB3cmFwIHlvdXIgc3RyaW5nIGluIHRoZSBjc3NcXFxcYFxcXFxgIGhlbHBlciB3aGljaCBlbnN1cmVzIHRoZSBzdHlsZXMgYXJlIGluamVjdGVkIGNvcnJlY3RseS4gU2VlIGh0dHBzOi8vd3d3LnN0eWxlZC1jb21wb25lbnRzLmNvbS9kb2NzL2FwaSNjc3NcXG5cXG5cIiwxMzpcIiVzIGlzIG5vdCBhIHN0eWxlZCBjb21wb25lbnQgYW5kIGNhbm5vdCBiZSByZWZlcnJlZCB0byB2aWEgY29tcG9uZW50IHNlbGVjdG9yLiBTZWUgaHR0cHM6Ly93d3cuc3R5bGVkLWNvbXBvbmVudHMuY29tL2RvY3MvYWR2YW5jZWQjcmVmZXJyaW5nLXRvLW90aGVyLWNvbXBvbmVudHMgZm9yIG1vcmUgZGV0YWlscy5cXG5cXG5cIiwxNDonVGhlbWVQcm92aWRlcjogXCJ0aGVtZVwiIHByb3AgaXMgcmVxdWlyZWQuXFxuXFxuJywxNTpcIkEgc3R5bGlzIHBsdWdpbiBoYXMgYmVlbiBzdXBwbGllZCB0aGF0IGlzIG5vdCBuYW1lZC4gV2UgbmVlZCBhIG5hbWUgZm9yIGVhY2ggcGx1Z2luIHRvIGJlIGFibGUgdG8gcHJldmVudCBzdHlsaW5nIGNvbGxpc2lvbnMgYmV0d2VlbiBkaWZmZXJlbnQgc3R5bGlzIGNvbmZpZ3VyYXRpb25zIHdpdGhpbiB0aGUgc2FtZSBhcHAuIEJlZm9yZSB5b3UgcGFzcyB5b3VyIHBsdWdpbiB0byBgPFN0eWxlU2hlZXRNYW5hZ2VyIHN0eWxpc1BsdWdpbnM9e1tdfT5gLCBwbGVhc2UgbWFrZSBzdXJlIGVhY2ggcGx1Z2luIGlzIHVuaXF1ZWx5LW5hbWVkLCBlLmcuXFxuXFxuYGBganNcXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoaW1wb3J0ZWRQbHVnaW4sICduYW1lJywgeyB2YWx1ZTogJ3NvbWUtdW5pcXVlLW5hbWUnIH0pO1xcbmBgYFxcblxcblwiLDE2OlwiUmVhY2hlZCB0aGUgbGltaXQgb2YgaG93IG1hbnkgc3R5bGVkIGNvbXBvbmVudHMgbWF5IGJlIGNyZWF0ZWQgYXQgZ3JvdXAgJXMuXFxuWW91IG1heSBvbmx5IGNyZWF0ZSB1cCB0byAxLDA3Myw3NDEsODI0IGNvbXBvbmVudHMuIElmIHlvdSdyZSBjcmVhdGluZyBjb21wb25lbnRzIGR5bmFtaWNhbGx5LFxcbmFzIGZvciBpbnN0YW5jZSBpbiB5b3VyIHJlbmRlciBtZXRob2QgdGhlbiB5b3UgbWF5IGJlIHJ1bm5pbmcgaW50byB0aGlzIGxpbWl0YXRpb24uXFxuXFxuXCIsMTc6XCJDU1NTdHlsZVNoZWV0IGNvdWxkIG5vdCBiZSBmb3VuZCBvbiBIVE1MU3R5bGVFbGVtZW50LlxcbkhhcyBzdHlsZWQtY29tcG9uZW50cycgc3R5bGUgdGFnIGJlZW4gdW5tb3VudGVkIG9yIGFsdGVyZWQgYnkgYW5vdGhlciBzY3JpcHQ/XFxuXCJ9Ont9O2Z1bmN0aW9uIEQoKXtmb3IodmFyIGU9YXJndW1lbnRzLmxlbmd0aDw9MD92b2lkIDA6YXJndW1lbnRzWzBdLHQ9W10sbj0xLHI9YXJndW1lbnRzLmxlbmd0aDtuPHI7bis9MSl0LnB1c2gobjwwfHxhcmd1bWVudHMubGVuZ3RoPD1uP3ZvaWQgMDphcmd1bWVudHNbbl0pO3JldHVybiB0LmZvckVhY2goKGZ1bmN0aW9uKHQpe2U9ZS5yZXBsYWNlKC8lW2Etel0vLHQpfSkpLGV9ZnVuY3Rpb24gaihlKXtmb3IodmFyIHQ9YXJndW1lbnRzLmxlbmd0aCxuPW5ldyBBcnJheSh0PjE/dC0xOjApLHI9MTtyPHQ7cisrKW5bci0xXT1hcmd1bWVudHNbcl07dGhyb3dcInByb2R1Y3Rpb25cIj09PXByb2Nlc3MuZW52Lk5PREVfRU5WP25ldyBFcnJvcihcIkFuIGVycm9yIG9jY3VycmVkLiBTZWUgaHR0cHM6Ly9naXQuaW8vSlVJYUUjXCIrZStcIiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cIisobi5sZW5ndGg+MD9cIiBBcmdzOiBcIituLmpvaW4oXCIsIFwiKTpcIlwiKSk6bmV3IEVycm9yKEQuYXBwbHkodm9pZCAwLFtSW2VdXS5jb25jYXQobikpLnRyaW0oKSl9dmFyIFQ9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUpe3RoaXMuZ3JvdXBTaXplcz1uZXcgVWludDMyQXJyYXkoNTEyKSx0aGlzLmxlbmd0aD01MTIsdGhpcy50YWc9ZX12YXIgdD1lLnByb3RvdHlwZTtyZXR1cm4gdC5pbmRleE9mR3JvdXA9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTAsbj0wO248ZTtuKyspdCs9dGhpcy5ncm91cFNpemVzW25dO3JldHVybiB0fSx0Lmluc2VydFJ1bGVzPWZ1bmN0aW9uKGUsdCl7aWYoZT49dGhpcy5ncm91cFNpemVzLmxlbmd0aCl7Zm9yKHZhciBuPXRoaXMuZ3JvdXBTaXplcyxyPW4ubGVuZ3RoLG89cjtlPj1vOykobzw8PTEpPDAmJmooMTYsXCJcIitlKTt0aGlzLmdyb3VwU2l6ZXM9bmV3IFVpbnQzMkFycmF5KG8pLHRoaXMuZ3JvdXBTaXplcy5zZXQobiksdGhpcy5sZW5ndGg9bztmb3IodmFyIGk9cjtpPG87aSsrKXRoaXMuZ3JvdXBTaXplc1tpXT0wfWZvcih2YXIgcz10aGlzLmluZGV4T2ZHcm91cChlKzEpLGE9MCxjPXQubGVuZ3RoO2E8YzthKyspdGhpcy50YWcuaW5zZXJ0UnVsZShzLHRbYV0pJiYodGhpcy5ncm91cFNpemVzW2VdKysscysrKX0sdC5jbGVhckdyb3VwPWZ1bmN0aW9uKGUpe2lmKGU8dGhpcy5sZW5ndGgpe3ZhciB0PXRoaXMuZ3JvdXBTaXplc1tlXSxuPXRoaXMuaW5kZXhPZkdyb3VwKGUpLHI9bit0O3RoaXMuZ3JvdXBTaXplc1tlXT0wO2Zvcih2YXIgbz1uO288cjtvKyspdGhpcy50YWcuZGVsZXRlUnVsZShuKX19LHQuZ2V0R3JvdXA9ZnVuY3Rpb24oZSl7dmFyIHQ9XCJcIjtpZihlPj10aGlzLmxlbmd0aHx8MD09PXRoaXMuZ3JvdXBTaXplc1tlXSlyZXR1cm4gdDtmb3IodmFyIG49dGhpcy5ncm91cFNpemVzW2VdLHI9dGhpcy5pbmRleE9mR3JvdXAoZSksbz1yK24saT1yO2k8bztpKyspdCs9dGhpcy50YWcuZ2V0UnVsZShpKStcIi8qIXNjKi9cXG5cIjtyZXR1cm4gdH0sZX0oKSxrPW5ldyBNYXAseD1uZXcgTWFwLFY9MSxCPWZ1bmN0aW9uKGUpe2lmKGsuaGFzKGUpKXJldHVybiBrLmdldChlKTtmb3IoO3guaGFzKFYpOylWKys7dmFyIHQ9VisrO3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJigoMHx0KTwwfHx0PjE8PDMwKSYmaigxNixcIlwiK3QpLGsuc2V0KGUsdCkseC5zZXQodCxlKSx0fSxNPWZ1bmN0aW9uKGUpe3JldHVybiB4LmdldChlKX0sej1mdW5jdGlvbihlLHQpe2suc2V0KGUsdCkseC5zZXQodCxlKX0sTD1cInN0eWxlW1wiK0ErJ11bZGF0YS1zdHlsZWQtdmVyc2lvbj1cIjUuMy4wXCJdJyxHPW5ldyBSZWdFeHAoXCJeXCIrQSsnXFxcXC5nKFxcXFxkKylcXFxcW2lkPVwiKFtcXFxcd1xcXFxkLV0rKVwiXFxcXF0uKj9cIihbXlwiXSopJyksRj1mdW5jdGlvbihlLHQsbil7Zm9yKHZhciByLG89bi5zcGxpdChcIixcIiksaT0wLHM9by5sZW5ndGg7aTxzO2krKykocj1vW2ldKSYmZS5yZWdpc3Rlck5hbWUodCxyKX0sWT1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbj10LmlubmVySFRNTC5zcGxpdChcIi8qIXNjKi9cXG5cIikscj1bXSxvPTAsaT1uLmxlbmd0aDtvPGk7bysrKXt2YXIgcz1uW29dLnRyaW0oKTtpZihzKXt2YXIgYT1zLm1hdGNoKEcpO2lmKGEpe3ZhciBjPTB8cGFyc2VJbnQoYVsxXSwxMCksdT1hWzJdOzAhPT1jJiYoeih1LGMpLEYoZSx1LGFbM10pLGUuZ2V0VGFnKCkuaW5zZXJ0UnVsZXMoYyxyKSksci5sZW5ndGg9MH1lbHNlIHIucHVzaChzKX19fSxxPWZ1bmN0aW9uKCl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmdm9pZCAwIT09d2luZG93Ll9fd2VicGFja19ub25jZV9fP3dpbmRvdy5fX3dlYnBhY2tfbm9uY2VfXzpudWxsfSxIPWZ1bmN0aW9uKGUpe3ZhciB0PWRvY3VtZW50LmhlYWQsbj1lfHx0LHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpLG89ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWUuY2hpbGROb2RlcyxuPXQubGVuZ3RoO24+PTA7bi0tKXt2YXIgcj10W25dO2lmKHImJjE9PT1yLm5vZGVUeXBlJiZyLmhhc0F0dHJpYnV0ZShBKSlyZXR1cm4gcn19KG4pLGk9dm9pZCAwIT09bz9vLm5leHRTaWJsaW5nOm51bGw7ci5zZXRBdHRyaWJ1dGUoQSxcImFjdGl2ZVwiKSxyLnNldEF0dHJpYnV0ZShcImRhdGEtc3R5bGVkLXZlcnNpb25cIixcIjUuMy4wXCIpO3ZhciBzPXEoKTtyZXR1cm4gcyYmci5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLHMpLG4uaW5zZXJ0QmVmb3JlKHIsaSkscn0sJD1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSl7dmFyIHQ9dGhpcy5lbGVtZW50PUgoZSk7dC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKSksdGhpcy5zaGVldD1mdW5jdGlvbihlKXtpZihlLnNoZWV0KXJldHVybiBlLnNoZWV0O2Zvcih2YXIgdD1kb2N1bWVudC5zdHlsZVNoZWV0cyxuPTAscj10Lmxlbmd0aDtuPHI7bisrKXt2YXIgbz10W25dO2lmKG8ub3duZXJOb2RlPT09ZSlyZXR1cm4gb31qKDE3KX0odCksdGhpcy5sZW5ndGg9MH12YXIgdD1lLnByb3RvdHlwZTtyZXR1cm4gdC5pbnNlcnRSdWxlPWZ1bmN0aW9uKGUsdCl7dHJ5e3JldHVybiB0aGlzLnNoZWV0Lmluc2VydFJ1bGUodCxlKSx0aGlzLmxlbmd0aCsrLCEwfWNhdGNoKGUpe3JldHVybiExfX0sdC5kZWxldGVSdWxlPWZ1bmN0aW9uKGUpe3RoaXMuc2hlZXQuZGVsZXRlUnVsZShlKSx0aGlzLmxlbmd0aC0tfSx0LmdldFJ1bGU9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5zaGVldC5jc3NSdWxlc1tlXTtyZXR1cm4gdm9pZCAwIT09dCYmXCJzdHJpbmdcIj09dHlwZW9mIHQuY3NzVGV4dD90LmNzc1RleHQ6XCJcIn0sZX0oKSxXPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlKXt2YXIgdD10aGlzLmVsZW1lbnQ9SChlKTt0aGlzLm5vZGVzPXQuY2hpbGROb2Rlcyx0aGlzLmxlbmd0aD0wfXZhciB0PWUucHJvdG90eXBlO3JldHVybiB0Lmluc2VydFJ1bGU9ZnVuY3Rpb24oZSx0KXtpZihlPD10aGlzLmxlbmd0aCYmZT49MCl7dmFyIG49ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodCkscj10aGlzLm5vZGVzW2VdO3JldHVybiB0aGlzLmVsZW1lbnQuaW5zZXJ0QmVmb3JlKG4scnx8bnVsbCksdGhpcy5sZW5ndGgrKywhMH1yZXR1cm4hMX0sdC5kZWxldGVSdWxlPWZ1bmN0aW9uKGUpe3RoaXMuZWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLm5vZGVzW2VdKSx0aGlzLmxlbmd0aC0tfSx0LmdldFJ1bGU9ZnVuY3Rpb24oZSl7cmV0dXJuIGU8dGhpcy5sZW5ndGg/dGhpcy5ub2Rlc1tlXS50ZXh0Q29udGVudDpcIlwifSxlfSgpLFU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUpe3RoaXMucnVsZXM9W10sdGhpcy5sZW5ndGg9MH12YXIgdD1lLnByb3RvdHlwZTtyZXR1cm4gdC5pbnNlcnRSdWxlPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGU8PXRoaXMubGVuZ3RoJiYodGhpcy5ydWxlcy5zcGxpY2UoZSwwLHQpLHRoaXMubGVuZ3RoKyssITApfSx0LmRlbGV0ZVJ1bGU9ZnVuY3Rpb24oZSl7dGhpcy5ydWxlcy5zcGxpY2UoZSwxKSx0aGlzLmxlbmd0aC0tfSx0LmdldFJ1bGU9ZnVuY3Rpb24oZSl7cmV0dXJuIGU8dGhpcy5sZW5ndGg/dGhpcy5ydWxlc1tlXTpcIlwifSxlfSgpLEo9SSxYPXtpc1NlcnZlcjohSSx1c2VDU1NPTUluamVjdGlvbjohUH0sWj1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0LG4pe3ZvaWQgMD09PWUmJihlPUUpLHZvaWQgMD09PXQmJih0PXt9KSx0aGlzLm9wdGlvbnM9dih7fSxYLHt9LGUpLHRoaXMuZ3M9dCx0aGlzLm5hbWVzPW5ldyBNYXAobiksIXRoaXMub3B0aW9ucy5pc1NlcnZlciYmSSYmSiYmKEo9ITEsZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoTCksbj0wLHI9dC5sZW5ndGg7bjxyO24rKyl7dmFyIG89dFtuXTtvJiZcImFjdGl2ZVwiIT09by5nZXRBdHRyaWJ1dGUoQSkmJihZKGUsbyksby5wYXJlbnROb2RlJiZvLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobykpfX0odGhpcykpfWUucmVnaXN0ZXJJZD1mdW5jdGlvbihlKXtyZXR1cm4gQihlKX07dmFyIHQ9ZS5wcm90b3R5cGU7cmV0dXJuIHQucmVjb25zdHJ1Y3RXaXRoT3B0aW9ucz1mdW5jdGlvbih0LG4pe3JldHVybiB2b2lkIDA9PT1uJiYobj0hMCksbmV3IGUodih7fSx0aGlzLm9wdGlvbnMse30sdCksdGhpcy5ncyxuJiZ0aGlzLm5hbWVzfHx2b2lkIDApfSx0LmFsbG9jYXRlR1NJbnN0YW5jZT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5nc1tlXT0odGhpcy5nc1tlXXx8MCkrMX0sdC5nZXRUYWc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50YWd8fCh0aGlzLnRhZz0obj0odD10aGlzLm9wdGlvbnMpLmlzU2VydmVyLHI9dC51c2VDU1NPTUluamVjdGlvbixvPXQudGFyZ2V0LGU9bj9uZXcgVShvKTpyP25ldyAkKG8pOm5ldyBXKG8pLG5ldyBUKGUpKSk7dmFyIGUsdCxuLHIsb30sdC5oYXNOYW1lRm9ySWQ9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5uYW1lcy5oYXMoZSkmJnRoaXMubmFtZXMuZ2V0KGUpLmhhcyh0KX0sdC5yZWdpc3Rlck5hbWU9ZnVuY3Rpb24oZSx0KXtpZihCKGUpLHRoaXMubmFtZXMuaGFzKGUpKXRoaXMubmFtZXMuZ2V0KGUpLmFkZCh0KTtlbHNle3ZhciBuPW5ldyBTZXQ7bi5hZGQodCksdGhpcy5uYW1lcy5zZXQoZSxuKX19LHQuaW5zZXJ0UnVsZXM9ZnVuY3Rpb24oZSx0LG4pe3RoaXMucmVnaXN0ZXJOYW1lKGUsdCksdGhpcy5nZXRUYWcoKS5pbnNlcnRSdWxlcyhCKGUpLG4pfSx0LmNsZWFyTmFtZXM9ZnVuY3Rpb24oZSl7dGhpcy5uYW1lcy5oYXMoZSkmJnRoaXMubmFtZXMuZ2V0KGUpLmNsZWFyKCl9LHQuY2xlYXJSdWxlcz1mdW5jdGlvbihlKXt0aGlzLmdldFRhZygpLmNsZWFyR3JvdXAoQihlKSksdGhpcy5jbGVhck5hbWVzKGUpfSx0LmNsZWFyVGFnPWZ1bmN0aW9uKCl7dGhpcy50YWc9dm9pZCAwfSx0LnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1lLmdldFRhZygpLG49dC5sZW5ndGgscj1cIlwiLG89MDtvPG47bysrKXt2YXIgaT1NKG8pO2lmKHZvaWQgMCE9PWkpe3ZhciBzPWUubmFtZXMuZ2V0KGkpLGE9dC5nZXRHcm91cChvKTtpZih2b2lkIDAhPT1zJiYwIT09YS5sZW5ndGgpe3ZhciBjPUErXCIuZ1wiK28rJ1tpZD1cIicraSsnXCJdJyx1PVwiXCI7dm9pZCAwIT09cyYmcy5mb3JFYWNoKChmdW5jdGlvbihlKXtlLmxlbmd0aD4wJiYodSs9ZStcIixcIil9KSkscis9XCJcIithK2MrJ3tjb250ZW50OlwiJyt1KydcIn0vKiFzYyovXFxuJ319fXJldHVybiByfSh0aGlzKX0sZX0oKSxLPS8oYSkoZCkvZ2ksUT1mdW5jdGlvbihlKXtyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShlKyhlPjI1PzM5Ojk3KSl9O2Z1bmN0aW9uIGVlKGUpe3ZhciB0LG49XCJcIjtmb3IodD1NYXRoLmFicyhlKTt0PjUyO3Q9dC81MnwwKW49USh0JTUyKStuO3JldHVybihRKHQlNTIpK24pLnJlcGxhY2UoSyxcIiQxLSQyXCIpfXZhciB0ZT1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbj10Lmxlbmd0aDtuOyllPTMzKmVedC5jaGFyQ29kZUF0KC0tbik7cmV0dXJuIGV9LG5lPWZ1bmN0aW9uKGUpe3JldHVybiB0ZSg1MzgxLGUpfTtmdW5jdGlvbiByZShlKXtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrPTEpe3ZhciBuPWVbdF07aWYoYihuKSYmIU4obikpcmV0dXJuITF9cmV0dXJuITB9dmFyIG9lPW5lKFwiNS4zLjBcIiksaWU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCxuKXt0aGlzLnJ1bGVzPWUsdGhpcy5zdGF0aWNSdWxlc0lkPVwiXCIsdGhpcy5pc1N0YXRpYz1cInByb2R1Y3Rpb25cIj09PXByb2Nlc3MuZW52Lk5PREVfRU5WJiYodm9pZCAwPT09bnx8bi5pc1N0YXRpYykmJnJlKGUpLHRoaXMuY29tcG9uZW50SWQ9dCx0aGlzLmJhc2VIYXNoPXRlKG9lLHQpLHRoaXMuYmFzZVN0eWxlPW4sWi5yZWdpc3RlcklkKHQpfXJldHVybiBlLnByb3RvdHlwZS5nZW5lcmF0ZUFuZEluamVjdFN0eWxlcz1mdW5jdGlvbihlLHQsbil7dmFyIHI9dGhpcy5jb21wb25lbnRJZCxvPVtdO2lmKHRoaXMuYmFzZVN0eWxlJiZvLnB1c2godGhpcy5iYXNlU3R5bGUuZ2VuZXJhdGVBbmRJbmplY3RTdHlsZXMoZSx0LG4pKSx0aGlzLmlzU3RhdGljJiYhbi5oYXNoKWlmKHRoaXMuc3RhdGljUnVsZXNJZCYmdC5oYXNOYW1lRm9ySWQocix0aGlzLnN0YXRpY1J1bGVzSWQpKW8ucHVzaCh0aGlzLnN0YXRpY1J1bGVzSWQpO2Vsc2V7dmFyIGk9TmUodGhpcy5ydWxlcyxlLHQsbikuam9pbihcIlwiKSxzPWVlKHRlKHRoaXMuYmFzZUhhc2gsaS5sZW5ndGgpPj4+MCk7aWYoIXQuaGFzTmFtZUZvcklkKHIscykpe3ZhciBhPW4oaSxcIi5cIitzLHZvaWQgMCxyKTt0Lmluc2VydFJ1bGVzKHIscyxhKX1vLnB1c2gocyksdGhpcy5zdGF0aWNSdWxlc0lkPXN9ZWxzZXtmb3IodmFyIGM9dGhpcy5ydWxlcy5sZW5ndGgsdT10ZSh0aGlzLmJhc2VIYXNoLG4uaGFzaCksbD1cIlwiLGQ9MDtkPGM7ZCsrKXt2YXIgaD10aGlzLnJ1bGVzW2RdO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBoKWwrPWgsXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmKHU9dGUodSxoK2QpKTtlbHNlIGlmKGgpe3ZhciBwPU5lKGgsZSx0LG4pLGY9QXJyYXkuaXNBcnJheShwKT9wLmpvaW4oXCJcIik6cDt1PXRlKHUsZitkKSxsKz1mfX1pZihsKXt2YXIgbT1lZSh1Pj4+MCk7aWYoIXQuaGFzTmFtZUZvcklkKHIsbSkpe3ZhciB5PW4obCxcIi5cIittLHZvaWQgMCxyKTt0Lmluc2VydFJ1bGVzKHIsbSx5KX1vLnB1c2gobSl9fXJldHVybiBvLmpvaW4oXCIgXCIpfSxlfSgpLHNlPS9eXFxzKlxcL1xcLy4qJC9nbSxhZT1bXCI6XCIsXCJbXCIsXCIuXCIsXCIjXCJdO2Z1bmN0aW9uIGNlKGUpe3ZhciB0LG4scixvLGk9dm9pZCAwPT09ZT9FOmUscz1pLm9wdGlvbnMsYT12b2lkIDA9PT1zP0U6cyxjPWkucGx1Z2lucyx1PXZvaWQgMD09PWM/dzpjLGw9bmV3IHAoYSksZD1bXSxoPWZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQodCl7aWYodCl0cnl7ZSh0K1wifVwiKX1jYXRjaChlKXt9fXJldHVybiBmdW5jdGlvbihuLHIsbyxpLHMsYSxjLHUsbCxkKXtzd2l0Y2gobil7Y2FzZSAxOmlmKDA9PT1sJiY2ND09PXIuY2hhckNvZGVBdCgwKSlyZXR1cm4gZShyK1wiO1wiKSxcIlwiO2JyZWFrO2Nhc2UgMjppZigwPT09dSlyZXR1cm4gcitcIi8qfCovXCI7YnJlYWs7Y2FzZSAzOnN3aXRjaCh1KXtjYXNlIDEwMjpjYXNlIDExMjpyZXR1cm4gZShvWzBdK3IpLFwiXCI7ZGVmYXVsdDpyZXR1cm4gcisoMD09PWQ/XCIvKnwqL1wiOlwiXCIpfWNhc2UtMjpyLnNwbGl0KFwiLyp8Ki99XCIpLmZvckVhY2godCl9fX0oKGZ1bmN0aW9uKGUpe2QucHVzaChlKX0pKSxmPWZ1bmN0aW9uKGUscixpKXtyZXR1cm4gMD09PXImJi0xIT09YWUuaW5kZXhPZihpW24ubGVuZ3RoXSl8fGkubWF0Y2gobyk/ZTpcIi5cIit0fTtmdW5jdGlvbiBtKGUsaSxzLGEpe3ZvaWQgMD09PWEmJihhPVwiJlwiKTt2YXIgYz1lLnJlcGxhY2Uoc2UsXCJcIiksdT1pJiZzP3MrXCIgXCIraStcIiB7IFwiK2MrXCIgfVwiOmM7cmV0dXJuIHQ9YSxuPWkscj1uZXcgUmVnRXhwKFwiXFxcXFwiK24rXCJcXFxcYlwiLFwiZ1wiKSxvPW5ldyBSZWdFeHAoXCIoXFxcXFwiK24rXCJcXFxcYil7Mix9XCIpLGwoc3x8IWk/XCJcIjppLHUpfXJldHVybiBsLnVzZShbXS5jb25jYXQodSxbZnVuY3Rpb24oZSx0LG8pezI9PT1lJiZvLmxlbmd0aCYmb1swXS5sYXN0SW5kZXhPZihuKT4wJiYob1swXT1vWzBdLnJlcGxhY2UocixmKSl9LGgsZnVuY3Rpb24oZSl7aWYoLTI9PT1lKXt2YXIgdD1kO3JldHVybiBkPVtdLHR9fV0pKSxtLmhhc2g9dS5sZW5ndGg/dS5yZWR1Y2UoKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQubmFtZXx8aigxNSksdGUoZSx0Lm5hbWUpfSksNTM4MSkudG9TdHJpbmcoKTpcIlwiLG19dmFyIHVlPXIuY3JlYXRlQ29udGV4dCgpLGxlPXVlLkNvbnN1bWVyLGRlPXIuY3JlYXRlQ29udGV4dCgpLGhlPShkZS5Db25zdW1lcixuZXcgWikscGU9Y2UoKTtmdW5jdGlvbiBmZSgpe3JldHVybiBpKHVlKXx8aGV9ZnVuY3Rpb24gbWUoKXtyZXR1cm4gaShkZSl8fHBlfWZ1bmN0aW9uIHllKGUpe3ZhciB0PW8oZS5zdHlsaXNQbHVnaW5zKSxuPXRbMF0saT10WzFdLGM9ZmUoKSx1PXMoKGZ1bmN0aW9uKCl7dmFyIHQ9YztyZXR1cm4gZS5zaGVldD90PWUuc2hlZXQ6ZS50YXJnZXQmJih0PXQucmVjb25zdHJ1Y3RXaXRoT3B0aW9ucyh7dGFyZ2V0OmUudGFyZ2V0fSwhMSkpLGUuZGlzYWJsZUNTU09NSW5qZWN0aW9uJiYodD10LnJlY29uc3RydWN0V2l0aE9wdGlvbnMoe3VzZUNTU09NSW5qZWN0aW9uOiExfSkpLHR9KSxbZS5kaXNhYmxlQ1NTT01JbmplY3Rpb24sZS5zaGVldCxlLnRhcmdldF0pLGw9cygoZnVuY3Rpb24oKXtyZXR1cm4gY2Uoe29wdGlvbnM6e3ByZWZpeDohZS5kaXNhYmxlVmVuZG9yUHJlZml4ZXN9LHBsdWdpbnM6bn0pfSksW2UuZGlzYWJsZVZlbmRvclByZWZpeGVzLG5dKTtyZXR1cm4gYSgoZnVuY3Rpb24oKXtoKG4sZS5zdHlsaXNQbHVnaW5zKXx8aShlLnN0eWxpc1BsdWdpbnMpfSksW2Uuc3R5bGlzUGx1Z2luc10pLHIuY3JlYXRlRWxlbWVudCh1ZS5Qcm92aWRlcix7dmFsdWU6dX0sci5jcmVhdGVFbGVtZW50KGRlLlByb3ZpZGVyLHt2YWx1ZTpsfSxcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WP3IuQ2hpbGRyZW4ub25seShlLmNoaWxkcmVuKTplLmNoaWxkcmVuKSl9dmFyIHZlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe3ZhciBuPXRoaXM7dGhpcy5pbmplY3Q9ZnVuY3Rpb24oZSx0KXt2b2lkIDA9PT10JiYodD1wZSk7dmFyIHI9bi5uYW1lK3QuaGFzaDtlLmhhc05hbWVGb3JJZChuLmlkLHIpfHxlLmluc2VydFJ1bGVzKG4uaWQscix0KG4ucnVsZXMscixcIkBrZXlmcmFtZXNcIikpfSx0aGlzLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIGooMTIsU3RyaW5nKG4ubmFtZSkpfSx0aGlzLm5hbWU9ZSx0aGlzLmlkPVwic2Mta2V5ZnJhbWVzLVwiK2UsdGhpcy5ydWxlcz10fXJldHVybiBlLnByb3RvdHlwZS5nZXROYW1lPWZ1bmN0aW9uKGUpe3JldHVybiB2b2lkIDA9PT1lJiYoZT1wZSksdGhpcy5uYW1lK2UuaGFzaH0sZX0oKSxnZT0vKFtBLVpdKS8sU2U9LyhbQS1aXSkvZyx3ZT0vXm1zLS8sRWU9ZnVuY3Rpb24oZSl7cmV0dXJuXCItXCIrZS50b0xvd2VyQ2FzZSgpfTtmdW5jdGlvbiBiZShlKXtyZXR1cm4gZ2UudGVzdChlKT9lLnJlcGxhY2UoU2UsRWUpLnJlcGxhY2Uod2UsXCItbXMtXCIpOmV9dmFyIF9lPWZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lfHwhMT09PWV8fFwiXCI9PT1lfTtmdW5jdGlvbiBOZShlLG4scixvKXtpZihBcnJheS5pc0FycmF5KGUpKXtmb3IodmFyIGkscz1bXSxhPTAsYz1lLmxlbmd0aDthPGM7YSs9MSlcIlwiIT09KGk9TmUoZVthXSxuLHIsbykpJiYoQXJyYXkuaXNBcnJheShpKT9zLnB1c2guYXBwbHkocyxpKTpzLnB1c2goaSkpO3JldHVybiBzfWlmKF9lKGUpKXJldHVyblwiXCI7aWYoTihlKSlyZXR1cm5cIi5cIitlLnN0eWxlZENvbXBvbmVudElkO2lmKGIoZSkpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mKGw9ZSl8fGwucHJvdG90eXBlJiZsLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50fHwhbilyZXR1cm4gZTt2YXIgdT1lKG4pO3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJnQodSkmJmNvbnNvbGUud2FybihfKGUpK1wiIGlzIG5vdCBhIHN0eWxlZCBjb21wb25lbnQgYW5kIGNhbm5vdCBiZSByZWZlcnJlZCB0byB2aWEgY29tcG9uZW50IHNlbGVjdG9yLiBTZWUgaHR0cHM6Ly93d3cuc3R5bGVkLWNvbXBvbmVudHMuY29tL2RvY3MvYWR2YW5jZWQjcmVmZXJyaW5nLXRvLW90aGVyLWNvbXBvbmVudHMgZm9yIG1vcmUgZGV0YWlscy5cIiksTmUodSxuLHIsbyl9dmFyIGw7cmV0dXJuIGUgaW5zdGFuY2VvZiB2ZT9yPyhlLmluamVjdChyLG8pLGUuZ2V0TmFtZShvKSk6ZTpTKGUpP2Z1bmN0aW9uIGUodCxuKXt2YXIgcixvLGk9W107Zm9yKHZhciBzIGluIHQpdC5oYXNPd25Qcm9wZXJ0eShzKSYmIV9lKHRbc10pJiYoUyh0W3NdKT9pLnB1c2guYXBwbHkoaSxlKHRbc10scykpOmIodFtzXSk/aS5wdXNoKGJlKHMpK1wiOlwiLHRbc10sXCI7XCIpOmkucHVzaChiZShzKStcIjogXCIrKHI9cyxudWxsPT0obz10W3NdKXx8XCJib29sZWFuXCI9PXR5cGVvZiBvfHxcIlwiPT09bz9cIlwiOlwibnVtYmVyXCIhPXR5cGVvZiBvfHwwPT09b3x8ciBpbiBmP1N0cmluZyhvKS50cmltKCk6bytcInB4XCIpK1wiO1wiKSk7cmV0dXJuIG4/W24rXCIge1wiXS5jb25jYXQoaSxbXCJ9XCJdKTppfShlKTplLnRvU3RyaW5nKCl9ZnVuY3Rpb24gQWUoZSl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsbj1uZXcgQXJyYXkodD4xP3QtMTowKSxyPTE7cjx0O3IrKyluW3ItMV09YXJndW1lbnRzW3JdO3JldHVybiBiKGUpfHxTKGUpP05lKGcodyxbZV0uY29uY2F0KG4pKSk6MD09PW4ubGVuZ3RoJiYxPT09ZS5sZW5ndGgmJlwic3RyaW5nXCI9PXR5cGVvZiBlWzBdP2U6TmUoZyhlLG4pKX12YXIgQ2U9L2ludmFsaWQgaG9vayBjYWxsL2ksSWU9bmV3IFNldCxQZT1mdW5jdGlvbihlLHQpe2lmKFwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYpe3ZhciBuPVwiVGhlIGNvbXBvbmVudCBcIitlKyh0Pycgd2l0aCB0aGUgaWQgb2YgXCInK3QrJ1wiJzpcIlwiKStcIiBoYXMgYmVlbiBjcmVhdGVkIGR5bmFtaWNhbGx5LlxcbllvdSBtYXkgc2VlIHRoaXMgd2FybmluZyBiZWNhdXNlIHlvdSd2ZSBjYWxsZWQgc3R5bGVkIGluc2lkZSBhbm90aGVyIGNvbXBvbmVudC5cXG5UbyByZXNvbHZlIHRoaXMgb25seSBjcmVhdGUgbmV3IFN0eWxlZENvbXBvbmVudHMgb3V0c2lkZSBvZiBhbnkgcmVuZGVyIG1ldGhvZCBhbmQgZnVuY3Rpb24gY29tcG9uZW50LlwiO3RyeXtjKCksSWUuaGFzKG4pfHwoY29uc29sZS53YXJuKG4pLEllLmFkZChuKSl9Y2F0Y2goZSl7Q2UudGVzdChlLm1lc3NhZ2UpJiZJZS5kZWxldGUobil9fX0sT2U9ZnVuY3Rpb24oZSx0LG4pe3JldHVybiB2b2lkIDA9PT1uJiYobj1FKSxlLnRoZW1lIT09bi50aGVtZSYmZS50aGVtZXx8dHx8bi50aGVtZX0sUmU9L1shXCIjJCUmJygpKissLi86Ozw9Pj9AW1xcXFxcXF1eYHt8fX4tXSsvZyxEZT0vKF4tfC0kKS9nO2Z1bmN0aW9uIGplKGUpe3JldHVybiBlLnJlcGxhY2UoUmUsXCItXCIpLnJlcGxhY2UoRGUsXCJcIil9dmFyIFRlPWZ1bmN0aW9uKGUpe3JldHVybiBlZShuZShlKT4+PjApfTtmdW5jdGlvbiBrZShlKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZSYmKFwicHJvZHVjdGlvblwiPT09cHJvY2Vzcy5lbnYuTk9ERV9FTlZ8fGUuY2hhckF0KDApPT09ZS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSl9dmFyIHhlPWZ1bmN0aW9uKGUpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGV8fFwib2JqZWN0XCI9PXR5cGVvZiBlJiZudWxsIT09ZSYmIUFycmF5LmlzQXJyYXkoZSl9LFZlPWZ1bmN0aW9uKGUpe3JldHVyblwiX19wcm90b19fXCIhPT1lJiZcImNvbnN0cnVjdG9yXCIhPT1lJiZcInByb3RvdHlwZVwiIT09ZX07ZnVuY3Rpb24gQmUoZSx0LG4pe3ZhciByPWVbbl07eGUodCkmJnhlKHIpP01lKHIsdCk6ZVtuXT10fWZ1bmN0aW9uIE1lKGUpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLG49bmV3IEFycmF5KHQ+MT90LTE6MCkscj0xO3I8dDtyKyspbltyLTFdPWFyZ3VtZW50c1tyXTtmb3IodmFyIG89MCxpPW47bzxpLmxlbmd0aDtvKyspe3ZhciBzPWlbb107aWYoeGUocykpZm9yKHZhciBhIGluIHMpVmUoYSkmJkJlKGUsc1thXSxhKX1yZXR1cm4gZX12YXIgemU9ci5jcmVhdGVDb250ZXh0KCksTGU9emUuQ29uc3VtZXI7ZnVuY3Rpb24gR2UoZSl7dmFyIHQ9aSh6ZSksbj1zKChmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlLHQpe2lmKCFlKXJldHVybiBqKDE0KTtpZihiKGUpKXt2YXIgbj1lKHQpO3JldHVyblwicHJvZHVjdGlvblwiPT09cHJvY2Vzcy5lbnYuTk9ERV9FTlZ8fG51bGwhPT1uJiYhQXJyYXkuaXNBcnJheShuKSYmXCJvYmplY3RcIj09dHlwZW9mIG4/bjpqKDcpfXJldHVybiBBcnJheS5pc0FycmF5KGUpfHxcIm9iamVjdFwiIT10eXBlb2YgZT9qKDgpOnQ/dih7fSx0LHt9LGUpOmV9KGUudGhlbWUsdCl9KSxbZS50aGVtZSx0XSk7cmV0dXJuIGUuY2hpbGRyZW4/ci5jcmVhdGVFbGVtZW50KHplLlByb3ZpZGVyLHt2YWx1ZTpufSxlLmNoaWxkcmVuKTpudWxsfXZhciBGZT17fTtmdW5jdGlvbiBZZShlLHQsbil7dmFyIG89TihlKSxzPSFrZShlKSxhPXQuYXR0cnMsYz12b2lkIDA9PT1hP3c6YSxkPXQuY29tcG9uZW50SWQsaD12b2lkIDA9PT1kP2Z1bmN0aW9uKGUsdCl7dmFyIG49XCJzdHJpbmdcIiE9dHlwZW9mIGU/XCJzY1wiOmplKGUpO0ZlW25dPShGZVtuXXx8MCkrMTt2YXIgcj1uK1wiLVwiK1RlKFwiNS4zLjBcIituK0ZlW25dKTtyZXR1cm4gdD90K1wiLVwiK3I6cn0odC5kaXNwbGF5TmFtZSx0LnBhcmVudENvbXBvbmVudElkKTpkLHA9dC5kaXNwbGF5TmFtZSxmPXZvaWQgMD09PXA/ZnVuY3Rpb24oZSl7cmV0dXJuIGtlKGUpP1wic3R5bGVkLlwiK2U6XCJTdHlsZWQoXCIrXyhlKStcIilcIn0oZSk6cCxnPXQuZGlzcGxheU5hbWUmJnQuY29tcG9uZW50SWQ/amUodC5kaXNwbGF5TmFtZSkrXCItXCIrdC5jb21wb25lbnRJZDp0LmNvbXBvbmVudElkfHxoLFM9byYmZS5hdHRycz9BcnJheS5wcm90b3R5cGUuY29uY2F0KGUuYXR0cnMsYykuZmlsdGVyKEJvb2xlYW4pOmMsQT10LnNob3VsZEZvcndhcmRQcm9wO28mJmUuc2hvdWxkRm9yd2FyZFByb3AmJihBPXQuc2hvdWxkRm9yd2FyZFByb3A/ZnVuY3Rpb24obixyLG8pe3JldHVybiBlLnNob3VsZEZvcndhcmRQcm9wKG4scixvKSYmdC5zaG91bGRGb3J3YXJkUHJvcChuLHIsbyl9OmUuc2hvdWxkRm9yd2FyZFByb3ApO3ZhciBDLEk9bmV3IGllKG4sZyxvP2UuY29tcG9uZW50U3R5bGU6dm9pZCAwKSxQPUkuaXNTdGF0aWMmJjA9PT1jLmxlbmd0aCxPPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBvPWUuYXR0cnMscz1lLmNvbXBvbmVudFN0eWxlLGE9ZS5kZWZhdWx0UHJvcHMsYz1lLmZvbGRlZENvbXBvbmVudElkcyxkPWUuc2hvdWxkRm9yd2FyZFByb3AsaD1lLnN0eWxlZENvbXBvbmVudElkLHA9ZS50YXJnZXQ7XCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmbChoKTt2YXIgZj1mdW5jdGlvbihlLHQsbil7dm9pZCAwPT09ZSYmKGU9RSk7dmFyIHI9dih7fSx0LHt0aGVtZTplfSksbz17fTtyZXR1cm4gbi5mb3JFYWNoKChmdW5jdGlvbihlKXt2YXIgdCxuLGkscz1lO2Zvcih0IGluIGIocykmJihzPXMocikpLHMpclt0XT1vW3RdPVwiY2xhc3NOYW1lXCI9PT10PyhuPW9bdF0saT1zW3RdLG4mJmk/bitcIiBcIitpOm58fGkpOnNbdF19KSksW3Isb119KE9lKHQsaSh6ZSksYSl8fEUsdCxvKSx5PWZbMF0sZz1mWzFdLFM9ZnVuY3Rpb24oZSx0LG4scil7dmFyIG89ZmUoKSxpPW1lKCkscz10P2UuZ2VuZXJhdGVBbmRJbmplY3RTdHlsZXMoRSxvLGkpOmUuZ2VuZXJhdGVBbmRJbmplY3RTdHlsZXMobixvLGkpO3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJmwocyksXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmIXQmJnImJnIocyksc30ocyxyLHksXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOVj9lLndhcm5Ub29NYW55Q2xhc3Nlczp2b2lkIDApLHc9bixfPWcuJGFzfHx0LiRhc3x8Zy5hc3x8dC5hc3x8cCxOPWtlKF8pLEE9ZyE9PXQ/dih7fSx0LHt9LGcpOnQsQz17fTtmb3IodmFyIEkgaW4gQSlcIiRcIiE9PUlbMF0mJlwiYXNcIiE9PUkmJihcImZvcndhcmRlZEFzXCI9PT1JP0MuYXM9QVtJXTooZD9kKEksbSxfKTohTnx8bShJKSkmJihDW0ldPUFbSV0pKTtyZXR1cm4gdC5zdHlsZSYmZy5zdHlsZSE9PXQuc3R5bGUmJihDLnN0eWxlPXYoe30sdC5zdHlsZSx7fSxnLnN0eWxlKSksQy5jbGFzc05hbWU9QXJyYXkucHJvdG90eXBlLmNvbmNhdChjLGgsUyE9PWg/UzpudWxsLHQuY2xhc3NOYW1lLGcuY2xhc3NOYW1lKS5maWx0ZXIoQm9vbGVhbikuam9pbihcIiBcIiksQy5yZWY9dyx1KF8sQyl9KEMsZSx0LFApfTtyZXR1cm4gTy5kaXNwbGF5TmFtZT1mLChDPXIuZm9yd2FyZFJlZihPKSkuYXR0cnM9UyxDLmNvbXBvbmVudFN0eWxlPUksQy5kaXNwbGF5TmFtZT1mLEMuc2hvdWxkRm9yd2FyZFByb3A9QSxDLmZvbGRlZENvbXBvbmVudElkcz1vP0FycmF5LnByb3RvdHlwZS5jb25jYXQoZS5mb2xkZWRDb21wb25lbnRJZHMsZS5zdHlsZWRDb21wb25lbnRJZCk6dyxDLnN0eWxlZENvbXBvbmVudElkPWcsQy50YXJnZXQ9bz9lLnRhcmdldDplLEMud2l0aENvbXBvbmVudD1mdW5jdGlvbihlKXt2YXIgcj10LmNvbXBvbmVudElkLG89ZnVuY3Rpb24oZSx0KXtpZihudWxsPT1lKXJldHVybnt9O3ZhciBuLHIsbz17fSxpPU9iamVjdC5rZXlzKGUpO2ZvcihyPTA7cjxpLmxlbmd0aDtyKyspbj1pW3JdLHQuaW5kZXhPZihuKT49MHx8KG9bbl09ZVtuXSk7cmV0dXJuIG99KHQsW1wiY29tcG9uZW50SWRcIl0pLGk9ciYmcitcIi1cIisoa2UoZSk/ZTpqZShfKGUpKSk7cmV0dXJuIFllKGUsdih7fSxvLHthdHRyczpTLGNvbXBvbmVudElkOml9KSxuKX0sT2JqZWN0LmRlZmluZVByb3BlcnR5KEMsXCJkZWZhdWx0UHJvcHNcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2ZvbGRlZERlZmF1bHRQcm9wc30sc2V0OmZ1bmN0aW9uKHQpe3RoaXMuX2ZvbGRlZERlZmF1bHRQcm9wcz1vP01lKHt9LGUuZGVmYXVsdFByb3BzLHQpOnR9fSksXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmKFBlKGYsZyksQy53YXJuVG9vTWFueUNsYXNzZXM9ZnVuY3Rpb24oZSx0KXt2YXIgbj17fSxyPSExO3JldHVybiBmdW5jdGlvbihvKXtpZighciYmKG5bb109ITAsT2JqZWN0LmtleXMobikubGVuZ3RoPj0yMDApKXt2YXIgaT10Pycgd2l0aCB0aGUgaWQgb2YgXCInK3QrJ1wiJzpcIlwiO2NvbnNvbGUud2FybihcIk92ZXIgMjAwIGNsYXNzZXMgd2VyZSBnZW5lcmF0ZWQgZm9yIGNvbXBvbmVudCBcIitlK2krXCIuXFxuQ29uc2lkZXIgdXNpbmcgdGhlIGF0dHJzIG1ldGhvZCwgdG9nZXRoZXIgd2l0aCBhIHN0eWxlIG9iamVjdCBmb3IgZnJlcXVlbnRseSBjaGFuZ2VkIHN0eWxlcy5cXG5FeGFtcGxlOlxcbiAgY29uc3QgQ29tcG9uZW50ID0gc3R5bGVkLmRpdi5hdHRycyhwcm9wcyA9PiAoe1xcbiAgICBzdHlsZToge1xcbiAgICAgIGJhY2tncm91bmQ6IHByb3BzLmJhY2tncm91bmQsXFxuICAgIH0sXFxuICB9KSlgd2lkdGg6IDEwMCU7YFxcblxcbiAgPENvbXBvbmVudCAvPlwiKSxyPSEwLG49e319fX0oZixnKSksQy50b1N0cmluZz1mdW5jdGlvbigpe3JldHVyblwiLlwiK0Muc3R5bGVkQ29tcG9uZW50SWR9LHMmJnkoQyxlLHthdHRyczohMCxjb21wb25lbnRTdHlsZTohMCxkaXNwbGF5TmFtZTohMCxmb2xkZWRDb21wb25lbnRJZHM6ITAsc2hvdWxkRm9yd2FyZFByb3A6ITAsc3R5bGVkQ29tcG9uZW50SWQ6ITAsdGFyZ2V0OiEwLHdpdGhDb21wb25lbnQ6ITB9KSxDfXZhciBxZT1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24gZSh0LHIsbyl7aWYodm9pZCAwPT09byYmKG89RSksIW4ocikpcmV0dXJuIGooMSxTdHJpbmcocikpO3ZhciBpPWZ1bmN0aW9uKCl7cmV0dXJuIHQocixvLEFlLmFwcGx5KHZvaWQgMCxhcmd1bWVudHMpKX07cmV0dXJuIGkud2l0aENvbmZpZz1mdW5jdGlvbihuKXtyZXR1cm4gZSh0LHIsdih7fSxvLHt9LG4pKX0saS5hdHRycz1mdW5jdGlvbihuKXtyZXR1cm4gZSh0LHIsdih7fSxvLHthdHRyczpBcnJheS5wcm90b3R5cGUuY29uY2F0KG8uYXR0cnMsbikuZmlsdGVyKEJvb2xlYW4pfSkpfSxpfShZZSxlKX07W1wiYVwiLFwiYWJiclwiLFwiYWRkcmVzc1wiLFwiYXJlYVwiLFwiYXJ0aWNsZVwiLFwiYXNpZGVcIixcImF1ZGlvXCIsXCJiXCIsXCJiYXNlXCIsXCJiZGlcIixcImJkb1wiLFwiYmlnXCIsXCJibG9ja3F1b3RlXCIsXCJib2R5XCIsXCJiclwiLFwiYnV0dG9uXCIsXCJjYW52YXNcIixcImNhcHRpb25cIixcImNpdGVcIixcImNvZGVcIixcImNvbFwiLFwiY29sZ3JvdXBcIixcImRhdGFcIixcImRhdGFsaXN0XCIsXCJkZFwiLFwiZGVsXCIsXCJkZXRhaWxzXCIsXCJkZm5cIixcImRpYWxvZ1wiLFwiZGl2XCIsXCJkbFwiLFwiZHRcIixcImVtXCIsXCJlbWJlZFwiLFwiZmllbGRzZXRcIixcImZpZ2NhcHRpb25cIixcImZpZ3VyZVwiLFwiZm9vdGVyXCIsXCJmb3JtXCIsXCJoMVwiLFwiaDJcIixcImgzXCIsXCJoNFwiLFwiaDVcIixcImg2XCIsXCJoZWFkXCIsXCJoZWFkZXJcIixcImhncm91cFwiLFwiaHJcIixcImh0bWxcIixcImlcIixcImlmcmFtZVwiLFwiaW1nXCIsXCJpbnB1dFwiLFwiaW5zXCIsXCJrYmRcIixcImtleWdlblwiLFwibGFiZWxcIixcImxlZ2VuZFwiLFwibGlcIixcImxpbmtcIixcIm1haW5cIixcIm1hcFwiLFwibWFya1wiLFwibWFycXVlZVwiLFwibWVudVwiLFwibWVudWl0ZW1cIixcIm1ldGFcIixcIm1ldGVyXCIsXCJuYXZcIixcIm5vc2NyaXB0XCIsXCJvYmplY3RcIixcIm9sXCIsXCJvcHRncm91cFwiLFwib3B0aW9uXCIsXCJvdXRwdXRcIixcInBcIixcInBhcmFtXCIsXCJwaWN0dXJlXCIsXCJwcmVcIixcInByb2dyZXNzXCIsXCJxXCIsXCJycFwiLFwicnRcIixcInJ1YnlcIixcInNcIixcInNhbXBcIixcInNjcmlwdFwiLFwic2VjdGlvblwiLFwic2VsZWN0XCIsXCJzbWFsbFwiLFwic291cmNlXCIsXCJzcGFuXCIsXCJzdHJvbmdcIixcInN0eWxlXCIsXCJzdWJcIixcInN1bW1hcnlcIixcInN1cFwiLFwidGFibGVcIixcInRib2R5XCIsXCJ0ZFwiLFwidGV4dGFyZWFcIixcInRmb290XCIsXCJ0aFwiLFwidGhlYWRcIixcInRpbWVcIixcInRpdGxlXCIsXCJ0clwiLFwidHJhY2tcIixcInVcIixcInVsXCIsXCJ2YXJcIixcInZpZGVvXCIsXCJ3YnJcIixcImNpcmNsZVwiLFwiY2xpcFBhdGhcIixcImRlZnNcIixcImVsbGlwc2VcIixcImZvcmVpZ25PYmplY3RcIixcImdcIixcImltYWdlXCIsXCJsaW5lXCIsXCJsaW5lYXJHcmFkaWVudFwiLFwibWFya2VyXCIsXCJtYXNrXCIsXCJwYXRoXCIsXCJwYXR0ZXJuXCIsXCJwb2x5Z29uXCIsXCJwb2x5bGluZVwiLFwicmFkaWFsR3JhZGllbnRcIixcInJlY3RcIixcInN0b3BcIixcInN2Z1wiLFwidGV4dFwiLFwidGV4dFBhdGhcIixcInRzcGFuXCJdLmZvckVhY2goKGZ1bmN0aW9uKGUpe3FlW2VdPXFlKGUpfSkpO3ZhciBIZT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXt0aGlzLnJ1bGVzPWUsdGhpcy5jb21wb25lbnRJZD10LHRoaXMuaXNTdGF0aWM9cmUoZSksWi5yZWdpc3RlcklkKHRoaXMuY29tcG9uZW50SWQrMSl9dmFyIHQ9ZS5wcm90b3R5cGU7cmV0dXJuIHQuY3JlYXRlU3R5bGVzPWZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBvPXIoTmUodGhpcy5ydWxlcyx0LG4scikuam9pbihcIlwiKSxcIlwiKSxpPXRoaXMuY29tcG9uZW50SWQrZTtuLmluc2VydFJ1bGVzKGksaSxvKX0sdC5yZW1vdmVTdHlsZXM9ZnVuY3Rpb24oZSx0KXt0LmNsZWFyUnVsZXModGhpcy5jb21wb25lbnRJZCtlKX0sdC5yZW5kZXJTdHlsZXM9ZnVuY3Rpb24oZSx0LG4scil7ZT4yJiZaLnJlZ2lzdGVySWQodGhpcy5jb21wb25lbnRJZCtlKSx0aGlzLnJlbW92ZVN0eWxlcyhlLG4pLHRoaXMuY3JlYXRlU3R5bGVzKGUsdCxuLHIpfSxlfSgpO2Z1bmN0aW9uICRlKGUpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLG49bmV3IEFycmF5KHQ+MT90LTE6MCksbz0xO288dDtvKyspbltvLTFdPWFyZ3VtZW50c1tvXTt2YXIgcz1BZS5hcHBseSh2b2lkIDAsW2VdLmNvbmNhdChuKSksYT1cInNjLWdsb2JhbC1cIitUZShKU09OLnN0cmluZ2lmeShzKSksdT1uZXcgSGUocyxhKTtmdW5jdGlvbiBsKGUpe3ZhciB0PWZlKCksbj1tZSgpLG89aSh6ZSksbD1jKHQuYWxsb2NhdGVHU0luc3RhbmNlKGEpKS5jdXJyZW50O3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJnIuQ2hpbGRyZW4uY291bnQoZS5jaGlsZHJlbikmJmNvbnNvbGUud2FybihcIlRoZSBnbG9iYWwgc3R5bGUgY29tcG9uZW50IFwiK2ErXCIgd2FzIGdpdmVuIGNoaWxkIEpTWC4gY3JlYXRlR2xvYmFsU3R5bGUgZG9lcyBub3QgcmVuZGVyIGNoaWxkcmVuLlwiKSxcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZzLnNvbWUoKGZ1bmN0aW9uKGUpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlJiYtMSE9PWUuaW5kZXhPZihcIkBpbXBvcnRcIil9KSkmJmNvbnNvbGUud2FybihcIlBsZWFzZSBkbyBub3QgdXNlIEBpbXBvcnQgQ1NTIHN5bnRheCBpbiBjcmVhdGVHbG9iYWxTdHlsZSBhdCB0aGlzIHRpbWUsIGFzIHRoZSBDU1NPTSBBUElzIHdlIHVzZSBpbiBwcm9kdWN0aW9uIGRvIG5vdCBoYW5kbGUgaXQgd2VsbC4gSW5zdGVhZCwgd2UgcmVjb21tZW5kIHVzaW5nIGEgbGlicmFyeSBzdWNoIGFzIHJlYWN0LWhlbG1ldCB0byBpbmplY3QgYSB0eXBpY2FsIDxsaW5rPiBtZXRhIHRhZyB0byB0aGUgc3R5bGVzaGVldCwgb3Igc2ltcGx5IGVtYmVkZGluZyBpdCBtYW51YWxseSBpbiB5b3VyIGluZGV4Lmh0bWwgPGhlYWQ+IHNlY3Rpb24gZm9yIGEgc2ltcGxlciBhcHAuXCIpLGQoKGZ1bmN0aW9uKCl7cmV0dXJuIGgobCxlLHQsbyxuKSxmdW5jdGlvbigpe3JldHVybiB1LnJlbW92ZVN0eWxlcyhsLHQpfX0pLFtsLGUsdCxvLG5dKSxudWxsfWZ1bmN0aW9uIGgoZSx0LG4scixvKXtpZih1LmlzU3RhdGljKXUucmVuZGVyU3R5bGVzKGUsTyxuLG8pO2Vsc2V7dmFyIGk9dih7fSx0LHt0aGVtZTpPZSh0LHIsbC5kZWZhdWx0UHJvcHMpfSk7dS5yZW5kZXJTdHlsZXMoZSxpLG4sbyl9fXJldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJlBlKGEpLHIubWVtbyhsKX1mdW5jdGlvbiBXZShlKXtcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbmF2aWdhdG9yJiZcIlJlYWN0TmF0aXZlXCI9PT1uYXZpZ2F0b3IucHJvZHVjdCYmY29uc29sZS53YXJuKFwiYGtleWZyYW1lc2AgY2Fubm90IGJlIHVzZWQgb24gUmVhY3ROYXRpdmUsIG9ubHkgb24gdGhlIHdlYi4gVG8gZG8gYW5pbWF0aW9uIGluIFJlYWN0TmF0aXZlIHBsZWFzZSB1c2UgQW5pbWF0ZWQuXCIpO2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLG49bmV3IEFycmF5KHQ+MT90LTE6MCkscj0xO3I8dDtyKyspbltyLTFdPWFyZ3VtZW50c1tyXTt2YXIgbz1BZS5hcHBseSh2b2lkIDAsW2VdLmNvbmNhdChuKSkuam9pbihcIlwiKSxpPVRlKG8pO3JldHVybiBuZXcgdmUoaSxvKX12YXIgVWU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7dmFyIGU9dGhpczt0aGlzLl9lbWl0U2hlZXRDU1M9ZnVuY3Rpb24oKXt2YXIgdD1lLmluc3RhbmNlLnRvU3RyaW5nKCksbj1xKCk7cmV0dXJuXCI8c3R5bGUgXCIrW24mJidub25jZT1cIicrbisnXCInLEErJz1cInRydWVcIicsJ2RhdGEtc3R5bGVkLXZlcnNpb249XCI1LjMuMFwiJ10uZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpK1wiPlwiK3QrXCI8L3N0eWxlPlwifSx0aGlzLmdldFN0eWxlVGFncz1mdW5jdGlvbigpe3JldHVybiBlLnNlYWxlZD9qKDIpOmUuX2VtaXRTaGVldENTUygpfSx0aGlzLmdldFN0eWxlRWxlbWVudD1mdW5jdGlvbigpe3ZhciB0O2lmKGUuc2VhbGVkKXJldHVybiBqKDIpO3ZhciBuPSgodD17fSlbQV09XCJcIix0W1wiZGF0YS1zdHlsZWQtdmVyc2lvblwiXT1cIjUuMy4wXCIsdC5kYW5nZXJvdXNseVNldElubmVySFRNTD17X19odG1sOmUuaW5zdGFuY2UudG9TdHJpbmcoKX0sdCksbz1xKCk7cmV0dXJuIG8mJihuLm5vbmNlPW8pLFtyLmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLHYoe30sbix7a2V5Olwic2MtMC0wXCJ9KSldfSx0aGlzLnNlYWw9ZnVuY3Rpb24oKXtlLnNlYWxlZD0hMH0sdGhpcy5pbnN0YW5jZT1uZXcgWih7aXNTZXJ2ZXI6ITB9KSx0aGlzLnNlYWxlZD0hMX12YXIgdD1lLnByb3RvdHlwZTtyZXR1cm4gdC5jb2xsZWN0U3R5bGVzPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnNlYWxlZD9qKDIpOnIuY3JlYXRlRWxlbWVudCh5ZSx7c2hlZXQ6dGhpcy5pbnN0YW5jZX0sZSl9LHQuaW50ZXJsZWF2ZVdpdGhOb2RlU3RyZWFtPWZ1bmN0aW9uKGUpe3JldHVybiBqKDMpfSxlfSgpLEplPWZ1bmN0aW9uKGUpe3ZhciB0PXIuZm9yd2FyZFJlZigoZnVuY3Rpb24odCxuKXt2YXIgbz1pKHplKSxzPWUuZGVmYXVsdFByb3BzLGE9T2UodCxvLHMpO3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJnZvaWQgMD09PWEmJmNvbnNvbGUud2FybignW3dpdGhUaGVtZV0gWW91IGFyZSBub3QgdXNpbmcgYSBUaGVtZVByb3ZpZGVyIG5vciBwYXNzaW5nIGEgdGhlbWUgcHJvcCBvciBhIHRoZW1lIGluIGRlZmF1bHRQcm9wcyBpbiBjb21wb25lbnQgY2xhc3MgXCInK18oZSkrJ1wiJyksci5jcmVhdGVFbGVtZW50KGUsdih7fSx0LHt0aGVtZTphLHJlZjpufSkpfSkpO3JldHVybiB5KHQsZSksdC5kaXNwbGF5TmFtZT1cIldpdGhUaGVtZShcIitfKGUpK1wiKVwiLHR9LFhlPWZ1bmN0aW9uKCl7cmV0dXJuIGkoemUpfSxaZT17U3R5bGVTaGVldDpaLG1hc3RlclNoZWV0OmhlfTtcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbmF2aWdhdG9yJiZcIlJlYWN0TmF0aXZlXCI9PT1uYXZpZ2F0b3IucHJvZHVjdCYmY29uc29sZS53YXJuKFwiSXQgbG9va3MgbGlrZSB5b3UndmUgaW1wb3J0ZWQgJ3N0eWxlZC1jb21wb25lbnRzJyBvbiBSZWFjdCBOYXRpdmUuXFxuUGVyaGFwcyB5b3UncmUgbG9va2luZyB0byBpbXBvcnQgJ3N0eWxlZC1jb21wb25lbnRzL25hdGl2ZSc/XFxuUmVhZCBtb3JlIGFib3V0IHRoaXMgYXQgaHR0cHM6Ly93d3cuc3R5bGVkLWNvbXBvbmVudHMuY29tL2RvY3MvYmFzaWNzI3JlYWN0LW5hdGl2ZVwiKSxcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZcInRlc3RcIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiYod2luZG93W1wiX19zdHlsZWQtY29tcG9uZW50cy1pbml0X19cIl09d2luZG93W1wiX19zdHlsZWQtY29tcG9uZW50cy1pbml0X19cIl18fDAsMT09PXdpbmRvd1tcIl9fc3R5bGVkLWNvbXBvbmVudHMtaW5pdF9fXCJdJiZjb25zb2xlLndhcm4oXCJJdCBsb29rcyBsaWtlIHRoZXJlIGFyZSBzZXZlcmFsIGluc3RhbmNlcyBvZiAnc3R5bGVkLWNvbXBvbmVudHMnIGluaXRpYWxpemVkIGluIHRoaXMgYXBwbGljYXRpb24uIFRoaXMgbWF5IGNhdXNlIGR5bmFtaWMgc3R5bGVzIHRvIG5vdCByZW5kZXIgcHJvcGVybHksIGVycm9ycyBkdXJpbmcgdGhlIHJlaHlkcmF0aW9uIHByb2Nlc3MsIGEgbWlzc2luZyB0aGVtZSBwcm9wLCBhbmQgbWFrZXMgeW91ciBhcHBsaWNhdGlvbiBiaWdnZXIgd2l0aG91dCBnb29kIHJlYXNvbi5cXG5cXG5TZWUgaHR0cHM6Ly9zLWMuc2gvMkJBWHplZCBmb3IgbW9yZSBpbmZvLlwiKSx3aW5kb3dbXCJfX3N0eWxlZC1jb21wb25lbnRzLWluaXRfX1wiXSs9MSk7ZXhwb3J0IGRlZmF1bHQgcWU7ZXhwb3J0e1VlIGFzIFNlcnZlclN0eWxlU2hlZXQsbGUgYXMgU3R5bGVTaGVldENvbnN1bWVyLHVlIGFzIFN0eWxlU2hlZXRDb250ZXh0LHllIGFzIFN0eWxlU2hlZXRNYW5hZ2VyLExlIGFzIFRoZW1lQ29uc3VtZXIsemUgYXMgVGhlbWVDb250ZXh0LEdlIGFzIFRoZW1lUHJvdmlkZXIsWmUgYXMgX19QUklWQVRFX18sJGUgYXMgY3JlYXRlR2xvYmFsU3R5bGUsQWUgYXMgY3NzLE4gYXMgaXNTdHlsZWRDb21wb25lbnQsV2UgYXMga2V5ZnJhbWVzLFhlIGFzIHVzZVRoZW1lLEMgYXMgdmVyc2lvbixKZSBhcyB3aXRoVGhlbWV9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGVkLWNvbXBvbmVudHMuYnJvd3Nlci5lc20uanMubWFwXG4iLCJpbXBvcnQgQ29sb3JTY2hlbWUgZnJvbSBcIi4uL0NvbG9yU2NoZW1lXCI7XG5cbmV4cG9ydCB0eXBlIFByb3BlcnRpZXNKU09OID0ge1xuICBoaW50Y2hhcnM/OiBzdHJpbmc7XG4gIHNtb290aHNjcm9sbD86IGJvb2xlYW47XG4gIGNvbXBsZXRlPzogc3RyaW5nO1xuICBjb2xvcnNjaGVtZT86IENvbG9yU2NoZW1lO1xufTtcblxuZXhwb3J0IHR5cGUgUHJvcGVydHlUeXBlcyA9IHtcbiAgaGludGNoYXJzOiBzdHJpbmc7XG4gIHNtb290aHNjcm9sbDogc3RyaW5nO1xuICBjb21wbGV0ZTogc3RyaW5nO1xuICBjb2xvcnNjaGVtZTogc3RyaW5nO1xufTtcblxudHlwZSBQcm9wZXJ0eU5hbWUgPSBcImhpbnRjaGFyc1wiIHwgXCJzbW9vdGhzY3JvbGxcIiB8IFwiY29tcGxldGVcIiB8IFwiY29sb3JzY2hlbWVcIjtcblxudHlwZSBQcm9wZXJ0eURlZiA9IHtcbiAgbmFtZTogUHJvcGVydHlOYW1lO1xuICBkZWZhdWx0VmFsdWU6IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW47XG4gIHR5cGU6IFwic3RyaW5nXCIgfCBcIm51bWJlclwiIHwgXCJib29sZWFuXCI7XG59O1xuXG5jb25zdCBkZWZzOiBQcm9wZXJ0eURlZltdID0gW1xuICB7XG4gICAgbmFtZTogXCJoaW50Y2hhcnNcIixcbiAgICBkZWZhdWx0VmFsdWU6IFwiYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpcIixcbiAgICB0eXBlOiBcInN0cmluZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJzbW9vdGhzY3JvbGxcIixcbiAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICAgIHR5cGU6IFwiYm9vbGVhblwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJjb21wbGV0ZVwiLFxuICAgIGRlZmF1bHRWYWx1ZTogXCJzYmhcIixcbiAgICB0eXBlOiBcInN0cmluZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJjb2xvcnNjaGVtZVwiLFxuICAgIGRlZmF1bHRWYWx1ZTogQ29sb3JTY2hlbWUuU3lzdGVtLFxuICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gIH0sXG5dO1xuXG5jb25zdCBkZWZhdWx0VmFsdWVzID0ge1xuICBoaW50Y2hhcnM6IFwiYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpcIixcbiAgc21vb3Roc2Nyb2xsOiBmYWxzZSxcbiAgY29tcGxldGU6IFwic2JoXCIsXG4gIGNvbG9yc2NoZW1lOiBDb2xvclNjaGVtZS5TeXN0ZW0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9wZXJ0aWVzIHtcbiAgcHVibGljIGhpbnRjaGFyczogc3RyaW5nO1xuXG4gIHB1YmxpYyBzbW9vdGhzY3JvbGw6IGJvb2xlYW47XG5cbiAgcHVibGljIGNvbXBsZXRlOiBzdHJpbmc7XG5cbiAgcHVibGljIGNvbG9yc2NoZW1lOiBDb2xvclNjaGVtZTtcblxuICBjb25zdHJ1Y3Rvcih7XG4gICAgaGludGNoYXJzLFxuICAgIHNtb290aHNjcm9sbCxcbiAgICBjb21wbGV0ZSxcbiAgICBjb2xvcnNjaGVtZSxcbiAgfToge1xuICAgIGhpbnRjaGFycz86IHN0cmluZztcbiAgICBzbW9vdGhzY3JvbGw/OiBib29sZWFuO1xuICAgIGNvbXBsZXRlPzogc3RyaW5nO1xuICAgIGNvbG9yc2NoZW1lPzogQ29sb3JTY2hlbWU7XG4gIH0gPSB7fSkge1xuICAgIHRoaXMuaGludGNoYXJzID0gaGludGNoYXJzIHx8IGRlZmF1bHRWYWx1ZXMuaGludGNoYXJzO1xuICAgIHRoaXMuc21vb3Roc2Nyb2xsID0gc21vb3Roc2Nyb2xsIHx8IGRlZmF1bHRWYWx1ZXMuc21vb3Roc2Nyb2xsO1xuICAgIHRoaXMuY29tcGxldGUgPSBjb21wbGV0ZSB8fCBkZWZhdWx0VmFsdWVzLmNvbXBsZXRlO1xuICAgIHRoaXMuY29sb3JzY2hlbWUgPSBjb2xvcnNjaGVtZSB8fCBkZWZhdWx0VmFsdWVzLmNvbG9yc2NoZW1lO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb246IFByb3BlcnRpZXNKU09OKTogUHJvcGVydGllcyB7XG4gICAgcmV0dXJuIG5ldyBQcm9wZXJ0aWVzKGpzb24pO1xuICB9XG5cbiAgc3RhdGljIHR5cGVzKCk6IFByb3BlcnR5VHlwZXMge1xuICAgIHJldHVybiB7XG4gICAgICBoaW50Y2hhcnM6IFwic3RyaW5nXCIsXG4gICAgICBzbW9vdGhzY3JvbGw6IFwiYm9vbGVhblwiLFxuICAgICAgY29tcGxldGU6IFwic3RyaW5nXCIsXG4gICAgICBjb2xvcnNjaGVtZTogXCJzdHJpbmdcIixcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGRlZihuYW1lOiBzdHJpbmcpOiBQcm9wZXJ0eURlZiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIGRlZnMuZmluZCgocCkgPT4gcC5uYW1lID09PSBuYW1lKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZzKCk6IFByb3BlcnR5RGVmW10ge1xuICAgIHJldHVybiBkZWZzO1xuICB9XG5cbiAgdG9KU09OKCk6IFByb3BlcnRpZXNKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGludGNoYXJzOiB0aGlzLmhpbnRjaGFycyxcbiAgICAgIHNtb290aHNjcm9sbDogdGhpcy5zbW9vdGhzY3JvbGwsXG4gICAgICBjb21wbGV0ZTogdGhpcy5jb21wbGV0ZSxcbiAgICAgIGNvbG9yc2NoZW1lOiB0aGlzLmNvbG9yc2NoZW1lLFxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCBLZXkgZnJvbSBcIi4vS2V5XCI7XG5cbmV4cG9ydCB0eXBlIEJsYWNrbGlzdEl0ZW1KU09OID1cbiAgfCBzdHJpbmdcbiAgfCB7XG4gICAgICB1cmw6IHN0cmluZztcbiAgICAgIGtleXM6IHN0cmluZ1tdO1xuICAgIH07XG5cbmV4cG9ydCB0eXBlIEJsYWNrbGlzdEpTT04gPSBCbGFja2xpc3RJdGVtSlNPTltdO1xuXG5jb25zdCByZWdleEZyb21XaWxkY2FyZCA9IChwYXR0ZXJuOiBzdHJpbmcpOiBSZWdFeHAgPT4ge1xuICBjb25zdCByZWdleFN0ciA9IFwiXlwiICsgcGF0dGVybi5yZXBsYWNlKC9cXCovZywgXCIuKlwiKSArIFwiJFwiO1xuICByZXR1cm4gbmV3IFJlZ0V4cChyZWdleFN0cik7XG59O1xuXG5leHBvcnQgY2xhc3MgQmxhY2tsaXN0SXRlbSB7XG4gIHB1YmxpYyByZWFkb25seSBwYXR0ZXJuOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSByZWdleDogUmVnRXhwO1xuXG4gIHB1YmxpYyByZWFkb25seSBwYXJ0aWFsOiBib29sZWFuO1xuXG4gIHB1YmxpYyByZWFkb25seSBrZXlzOiBzdHJpbmdbXTtcblxuICBwcml2YXRlIHJlYWRvbmx5IGtleUVudGl0aWVzOiBLZXlbXTtcblxuICBjb25zdHJ1Y3RvcihwYXR0ZXJuOiBzdHJpbmcsIHBhcnRpYWw6IGJvb2xlYW4sIGtleXM6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5wYXR0ZXJuID0gcGF0dGVybjtcbiAgICB0aGlzLnJlZ2V4ID0gcmVnZXhGcm9tV2lsZGNhcmQocGF0dGVybik7XG4gICAgdGhpcy5wYXJ0aWFsID0gcGFydGlhbDtcbiAgICB0aGlzLmtleXMgPSBrZXlzO1xuICAgIHRoaXMua2V5RW50aXRpZXMgPSB0aGlzLmtleXMubWFwKEtleS5mcm9tTWFwS2V5KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uOiBCbGFja2xpc3RJdGVtSlNPTik6IEJsYWNrbGlzdEl0ZW0ge1xuICAgIHJldHVybiB0eXBlb2YganNvbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgPyBuZXcgQmxhY2tsaXN0SXRlbShqc29uLCBmYWxzZSwgW10pXG4gICAgICA6IG5ldyBCbGFja2xpc3RJdGVtKGpzb24udXJsLCB0cnVlLCBqc29uLmtleXMpO1xuICB9XG5cbiAgdG9KU09OKCk6IEJsYWNrbGlzdEl0ZW1KU09OIHtcbiAgICBpZiAoIXRoaXMucGFydGlhbCkge1xuICAgICAgcmV0dXJuIHRoaXMucGF0dGVybjtcbiAgICB9XG4gICAgcmV0dXJuIHsgdXJsOiB0aGlzLnBhdHRlcm4sIGtleXM6IHRoaXMua2V5cyB9O1xuICB9XG5cbiAgbWF0Y2hlcyh1cmw6IFVSTCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBhdHRlcm4uaW5jbHVkZXMoXCIvXCIpXG4gICAgICA/IHRoaXMucmVnZXgudGVzdCh1cmwuaG9zdCArIHVybC5wYXRobmFtZSlcbiAgICAgIDogdGhpcy5yZWdleC50ZXN0KHVybC5ob3N0KTtcbiAgfVxuXG4gIGluY2x1ZGVLZXkodXJsOiBVUkwsIGtleTogS2V5KTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLm1hdGNoZXModXJsKSB8fCAhdGhpcy5wYXJ0aWFsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmtleUVudGl0aWVzLnNvbWUoKGspID0+IGsuZXF1YWxzKGtleSkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsYWNrbGlzdCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBpdGVtczogQmxhY2tsaXN0SXRlbVtdKSB7fVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uOiBCbGFja2xpc3RKU09OKTogQmxhY2tsaXN0IHtcbiAgICBjb25zdCBpdGVtcyA9IGpzb24ubWFwKChvKSA9PiBCbGFja2xpc3RJdGVtLmZyb21KU09OKG8pKTtcbiAgICByZXR1cm4gbmV3IEJsYWNrbGlzdChpdGVtcyk7XG4gIH1cblxuICB0b0pTT04oKTogQmxhY2tsaXN0SlNPTiB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXMubWFwKChpdGVtKSA9PiBpdGVtLnRvSlNPTigpKTtcbiAgfVxuXG4gIGluY2x1ZGVzRW50aXJlQmxhY2tsaXN0KHVybDogVVJMKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXMuc29tZSgoaXRlbSkgPT4gIWl0ZW0ucGFydGlhbCAmJiBpdGVtLm1hdGNoZXModXJsKSk7XG4gIH1cblxuICBpbmNsdWRlS2V5KHVybDogVVJMLCBrZXk6IEtleSkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zLnNvbWUoKGl0ZW0pID0+IGl0ZW0uaW5jbHVkZUtleSh1cmwsIGtleSkpO1xuICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsImltcG9ydCAqIGFzIG9wZXJhdGlvbnMgZnJvbSBcIi4uL29wZXJhdGlvbnNcIjtcblxudHlwZSBPcGVyYXRpb25Kc29uID1cbiAgfCB7XG4gICAgICB0eXBlOiBzdHJpbmc7XG4gICAgfVxuICB8IHtcbiAgICAgIHR5cGU6IHN0cmluZztcbiAgICAgIFtwcm9wOiBzdHJpbmddOiBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuO1xuICAgIH07XG5leHBvcnQgdHlwZSBLZXltYXBzSlNPTiA9IHsgW2tleTogc3RyaW5nXTogT3BlcmF0aW9uSnNvbiB9O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZXltYXBzIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBkYXRhOiB7IFtrZXk6IHN0cmluZ106IG9wZXJhdGlvbnMuT3BlcmF0aW9uIH0pIHt9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb246IEtleW1hcHNKU09OKTogS2V5bWFwcyB7XG4gICAgY29uc3QgZW50cmllczogeyBba2V5OiBzdHJpbmddOiBvcGVyYXRpb25zLk9wZXJhdGlvbiB9ID0ge307XG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoanNvbikpIHtcbiAgICAgIGVudHJpZXNba2V5XSA9IG9wZXJhdGlvbnMudmFsdWVPZihqc29uW2tleV0pO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEtleW1hcHMoZW50cmllcyk7XG4gIH1cblxuICBjb21iaW5lKG90aGVyOiBLZXltYXBzKTogS2V5bWFwcyB7XG4gICAgcmV0dXJuIG5ldyBLZXltYXBzKHtcbiAgICAgIC4uLnRoaXMuZGF0YSxcbiAgICAgIC4uLm90aGVyLmRhdGEsXG4gICAgfSk7XG4gIH1cblxuICB0b0pTT04oKTogS2V5bWFwc0pTT04ge1xuICAgIHJldHVybiB0aGlzLmRhdGE7XG4gIH1cblxuICBlbnRyaWVzKCk6IFtzdHJpbmcsIG9wZXJhdGlvbnMuT3BlcmF0aW9uXVtdIHtcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXModGhpcy5kYXRhKTtcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgQWp2IGZyb20gXCJhanZcIjtcblxuaW1wb3J0IEtleW1hcHMsIHsgS2V5bWFwc0pTT04gfSBmcm9tIFwiLi9LZXltYXBzXCI7XG5pbXBvcnQgU2VhcmNoLCB7IFNlYXJjaEpTT04gfSBmcm9tIFwiLi9TZWFyY2hcIjtcbmltcG9ydCBQcm9wZXJ0aWVzLCB7IFByb3BlcnRpZXNKU09OIH0gZnJvbSBcIi4vUHJvcGVydGllc1wiO1xuaW1wb3J0IEJsYWNrbGlzdCwgeyBCbGFja2xpc3RKU09OIH0gZnJvbSBcIi4vQmxhY2tsaXN0XCI7XG5pbXBvcnQgdmFsaWRhdGUgZnJvbSBcIi4vdmFsaWRhdGVcIjtcblxuZXhwb3J0IHR5cGUgU2V0dGluZ3NKU09OID0ge1xuICBrZXltYXBzPzogS2V5bWFwc0pTT047XG4gIHNlYXJjaD86IFNlYXJjaEpTT047XG4gIHByb3BlcnRpZXM/OiBQcm9wZXJ0aWVzSlNPTjtcbiAgYmxhY2tsaXN0PzogQmxhY2tsaXN0SlNPTjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmdzIHtcbiAgcHVibGljIGtleW1hcHM6IEtleW1hcHM7XG5cbiAgcHVibGljIHNlYXJjaDogU2VhcmNoO1xuXG4gIHB1YmxpYyBwcm9wZXJ0aWVzOiBQcm9wZXJ0aWVzO1xuXG4gIHB1YmxpYyBibGFja2xpc3Q6IEJsYWNrbGlzdDtcblxuICBjb25zdHJ1Y3Rvcih7XG4gICAga2V5bWFwcyxcbiAgICBzZWFyY2gsXG4gICAgcHJvcGVydGllcyxcbiAgICBibGFja2xpc3QsXG4gIH06IHtcbiAgICBrZXltYXBzOiBLZXltYXBzO1xuICAgIHNlYXJjaDogU2VhcmNoO1xuICAgIHByb3BlcnRpZXM6IFByb3BlcnRpZXM7XG4gICAgYmxhY2tsaXN0OiBCbGFja2xpc3Q7XG4gIH0pIHtcbiAgICB0aGlzLmtleW1hcHMgPSBrZXltYXBzO1xuICAgIHRoaXMuc2VhcmNoID0gc2VhcmNoO1xuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gICAgdGhpcy5ibGFja2xpc3QgPSBibGFja2xpc3Q7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbjogdW5rbm93bik6IFNldHRpbmdzIHtcbiAgICBjb25zdCB2YWxpZCA9IHZhbGlkYXRlKGpzb24pO1xuICAgIGlmICghdmFsaWQpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSAodmFsaWRhdGUgYXMgYW55KVxuICAgICAgICAuZXJyb3JzIS5tYXAoKGVycjogQWp2LkVycm9yT2JqZWN0KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGAnJHtlcnIuZGF0YVBhdGh9JyAke2Vyci5tZXNzYWdlfWA7XG4gICAgICAgIH0pXG4gICAgICAgIC5qb2luKFwiOyBcIik7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGNvbnN0IG9iaiA9IGpzb24gYXMgU2V0dGluZ3NKU09OO1xuICAgIGNvbnN0IHNldHRpbmdzID0geyAuLi5EZWZhdWx0U2V0dGluZyB9O1xuICAgIGlmIChvYmoua2V5bWFwcykge1xuICAgICAgc2V0dGluZ3Mua2V5bWFwcyA9IEtleW1hcHMuZnJvbUpTT04ob2JqLmtleW1hcHMpO1xuICAgIH1cbiAgICBpZiAob2JqLnNlYXJjaCkge1xuICAgICAgc2V0dGluZ3Muc2VhcmNoID0gU2VhcmNoLmZyb21KU09OKG9iai5zZWFyY2gpO1xuICAgIH1cbiAgICBpZiAob2JqLnByb3BlcnRpZXMpIHtcbiAgICAgIHNldHRpbmdzLnByb3BlcnRpZXMgPSBQcm9wZXJ0aWVzLmZyb21KU09OKG9iai5wcm9wZXJ0aWVzKTtcbiAgICB9XG4gICAgaWYgKG9iai5ibGFja2xpc3QpIHtcbiAgICAgIHNldHRpbmdzLmJsYWNrbGlzdCA9IEJsYWNrbGlzdC5mcm9tSlNPTihvYmouYmxhY2tsaXN0KTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBTZXR0aW5ncyhzZXR0aW5ncyk7XG4gIH1cblxuICB0b0pTT04oKTogU2V0dGluZ3NKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAga2V5bWFwczogdGhpcy5rZXltYXBzLnRvSlNPTigpLFxuICAgICAgc2VhcmNoOiB0aGlzLnNlYXJjaC50b0pTT04oKSxcbiAgICAgIHByb3BlcnRpZXM6IHRoaXMucHJvcGVydGllcy50b0pTT04oKSxcbiAgICAgIGJsYWNrbGlzdDogdGhpcy5ibGFja2xpc3QudG9KU09OKCksXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgRGVmYXVsdFNldHRpbmdKU09OVGV4dCA9IGB7XG4gIFwia2V5bWFwc1wiOiB7XG4gICAgXCIwXCI6IHsgXCJ0eXBlXCI6IFwic2Nyb2xsLmhvbWVcIiB9LFxuICAgIFwiOlwiOiB7IFwidHlwZVwiOiBcImNvbW1hbmQuc2hvd1wiIH0sXG4gICAgXCJvXCI6IHsgXCJ0eXBlXCI6IFwiY29tbWFuZC5zaG93Lm9wZW5cIiwgXCJhbHRlclwiOiBmYWxzZSB9LFxuICAgIFwiT1wiOiB7IFwidHlwZVwiOiBcImNvbW1hbmQuc2hvdy5vcGVuXCIsIFwiYWx0ZXJcIjogdHJ1ZSB9LFxuICAgIFwidFwiOiB7IFwidHlwZVwiOiBcImNvbW1hbmQuc2hvdy50YWJvcGVuXCIsIFwiYWx0ZXJcIjogZmFsc2UgfSxcbiAgICBcIlRcIjogeyBcInR5cGVcIjogXCJjb21tYW5kLnNob3cudGFib3BlblwiLCBcImFsdGVyXCI6IHRydWUgfSxcbiAgICBcIndcIjogeyBcInR5cGVcIjogXCJjb21tYW5kLnNob3cud2lub3BlblwiLCBcImFsdGVyXCI6IGZhbHNlIH0sXG4gICAgXCJXXCI6IHsgXCJ0eXBlXCI6IFwiY29tbWFuZC5zaG93Lndpbm9wZW5cIiwgXCJhbHRlclwiOiB0cnVlIH0sXG4gICAgXCJiXCI6IHsgXCJ0eXBlXCI6IFwiY29tbWFuZC5zaG93LmJ1ZmZlclwiIH0sXG4gICAgXCJhXCI6IHsgXCJ0eXBlXCI6IFwiY29tbWFuZC5zaG93LmFkZGJvb2ttYXJrXCIsIFwiYWx0ZXJcIjogdHJ1ZSB9LFxuICAgIFwia1wiOiB7IFwidHlwZVwiOiBcInNjcm9sbC52ZXJ0aWNhbGx5XCIsIFwiY291bnRcIjogLTEgfSxcbiAgICBcImpcIjogeyBcInR5cGVcIjogXCJzY3JvbGwudmVydGljYWxseVwiLCBcImNvdW50XCI6IDEgfSxcbiAgICBcImhcIjogeyBcInR5cGVcIjogXCJzY3JvbGwuaG9yaXpvbmFsbHlcIiwgXCJjb3VudFwiOiAtMSB9LFxuICAgIFwibFwiOiB7IFwidHlwZVwiOiBcInNjcm9sbC5ob3Jpem9uYWxseVwiLCBcImNvdW50XCI6IDEgfSxcbiAgICBcIjxDLVU+XCI6IHsgXCJ0eXBlXCI6IFwic2Nyb2xsLnBhZ2VzXCIsIFwiY291bnRcIjogLTAuNSB9LFxuICAgIFwiPEMtRD5cIjogeyBcInR5cGVcIjogXCJzY3JvbGwucGFnZXNcIiwgXCJjb3VudFwiOiAwLjUgfSxcbiAgICBcIjxDLUI+XCI6IHsgXCJ0eXBlXCI6IFwic2Nyb2xsLnBhZ2VzXCIsIFwiY291bnRcIjogLTEgfSxcbiAgICBcIjxDLUY+XCI6IHsgXCJ0eXBlXCI6IFwic2Nyb2xsLnBhZ2VzXCIsIFwiY291bnRcIjogMSB9LFxuICAgIFwiZ2dcIjogeyBcInR5cGVcIjogXCJzY3JvbGwudG9wXCIgfSxcbiAgICBcIkdcIjogeyBcInR5cGVcIjogXCJzY3JvbGwuYm90dG9tXCIgfSxcbiAgICBcIiRcIjogeyBcInR5cGVcIjogXCJzY3JvbGwuZW5kXCIgfSxcbiAgICBcImRcIjogeyBcInR5cGVcIjogXCJ0YWJzLmNsb3NlXCIgfSxcbiAgICBcIkRcIjogeyBcInR5cGVcIjogXCJ0YWJzLmNsb3NlXCIsIFwic2VsZWN0XCI6IFwibGVmdFwiIH0sXG4gICAgXCJ4JFwiOiB7IFwidHlwZVwiOiBcInRhYnMuY2xvc2UucmlnaHRcIiB9LFxuICAgIFwiIWRcIjogeyBcInR5cGVcIjogXCJ0YWJzLmNsb3NlLmZvcmNlXCIgfSxcbiAgICBcInVcIjogeyBcInR5cGVcIjogXCJ0YWJzLnJlb3BlblwiIH0sXG4gICAgXCJLXCI6IHsgXCJ0eXBlXCI6IFwidGFicy5wcmV2XCIgfSxcbiAgICBcIkpcIjogeyBcInR5cGVcIjogXCJ0YWJzLm5leHRcIiB9LFxuICAgIFwiZ1RcIjogeyBcInR5cGVcIjogXCJ0YWJzLnByZXZcIiB9LFxuICAgIFwiZ3RcIjogeyBcInR5cGVcIjogXCJ0YWJzLm5leHRcIiB9LFxuICAgIFwiZzBcIjogeyBcInR5cGVcIjogXCJ0YWJzLmZpcnN0XCIgfSxcbiAgICBcImckXCI6IHsgXCJ0eXBlXCI6IFwidGFicy5sYXN0XCIgfSxcbiAgICBcIjxDLTY+XCI6IHsgXCJ0eXBlXCI6IFwidGFicy5wcmV2c2VsXCIgfSxcbiAgICBcInJcIjogeyBcInR5cGVcIjogXCJ0YWJzLnJlbG9hZFwiLCBcImNhY2hlXCI6IGZhbHNlIH0sXG4gICAgXCJSXCI6IHsgXCJ0eXBlXCI6IFwidGFicy5yZWxvYWRcIiwgXCJjYWNoZVwiOiB0cnVlIH0sXG4gICAgXCJ6cFwiOiB7IFwidHlwZVwiOiBcInRhYnMucGluLnRvZ2dsZVwiIH0sXG4gICAgXCJ6ZFwiOiB7IFwidHlwZVwiOiBcInRhYnMuZHVwbGljYXRlXCIgfSxcbiAgICBcInppXCI6IHsgXCJ0eXBlXCI6IFwiem9vbS5pblwiIH0sXG4gICAgXCJ6b1wiOiB7IFwidHlwZVwiOiBcInpvb20ub3V0XCIgfSxcbiAgICBcInp6XCI6IHsgXCJ0eXBlXCI6IFwiem9vbS5uZXV0cmFsXCIgfSxcbiAgICBcImZcIjogeyBcInR5cGVcIjogXCJmb2xsb3cuc3RhcnRcIiwgXCJuZXdUYWJcIjogZmFsc2UgfSxcbiAgICBcIkZcIjogeyBcInR5cGVcIjogXCJmb2xsb3cuc3RhcnRcIiwgXCJuZXdUYWJcIjogdHJ1ZSwgXCJiYWNrZ3JvdW5kXCI6IGZhbHNlIH0sXG4gICAgXCJtXCI6IHsgXCJ0eXBlXCI6IFwibWFyay5zZXQucHJlZml4XCIgfSxcbiAgICBcIidcIjogeyBcInR5cGVcIjogXCJtYXJrLmp1bXAucHJlZml4XCIgfSxcbiAgICBcIkhcIjogeyBcInR5cGVcIjogXCJuYXZpZ2F0ZS5oaXN0b3J5LnByZXZcIiB9LFxuICAgIFwiTFwiOiB7IFwidHlwZVwiOiBcIm5hdmlnYXRlLmhpc3RvcnkubmV4dFwiIH0sXG4gICAgXCJbW1wiOiB7IFwidHlwZVwiOiBcIm5hdmlnYXRlLmxpbmsucHJldlwiIH0sXG4gICAgXCJdXVwiOiB7IFwidHlwZVwiOiBcIm5hdmlnYXRlLmxpbmsubmV4dFwiIH0sXG4gICAgXCJndVwiOiB7IFwidHlwZVwiOiBcIm5hdmlnYXRlLnBhcmVudFwiIH0sXG4gICAgXCJnVVwiOiB7IFwidHlwZVwiOiBcIm5hdmlnYXRlLnJvb3RcIiB9LFxuICAgIFwiZ2lcIjogeyBcInR5cGVcIjogXCJmb2N1cy5pbnB1dFwiIH0sXG4gICAgXCJnZlwiOiB7IFwidHlwZVwiOiBcInBhZ2Uuc291cmNlXCIgfSxcbiAgICBcImdoXCI6IHsgXCJ0eXBlXCI6IFwicGFnZS5ob21lXCIgfSxcbiAgICBcImdIXCI6IHsgXCJ0eXBlXCI6IFwicGFnZS5ob21lXCIsIFwibmV3VGFiXCI6IHRydWUgfSxcbiAgICBcImdyXCI6IHsgXCJ0eXBlXCI6IFwidGFicy5yZWFkZXIudG9nZ2xlXCIgfSxcbiAgICBcInlcIjogeyBcInR5cGVcIjogXCJ1cmxzLnlhbmtcIiB9LFxuICAgIFwicFwiOiB7IFwidHlwZVwiOiBcInVybHMucGFzdGVcIiwgXCJuZXdUYWJcIjogZmFsc2UgfSxcbiAgICBcIlBcIjogeyBcInR5cGVcIjogXCJ1cmxzLnBhc3RlXCIsIFwibmV3VGFiXCI6IHRydWUgfSxcbiAgICBcIi9cIjogeyBcInR5cGVcIjogXCJmaW5kLnN0YXJ0XCIgfSxcbiAgICBcIm5cIjogeyBcInR5cGVcIjogXCJmaW5kLm5leHRcIiB9LFxuICAgIFwiTlwiOiB7IFwidHlwZVwiOiBcImZpbmQucHJldlwiIH0sXG4gICAgXCIuXCI6IHsgXCJ0eXBlXCI6IFwicmVwZWF0Lmxhc3RcIiB9LFxuICAgIFwiPFMtRXNjPlwiOiB7IFwidHlwZVwiOiBcImFkZG9uLnRvZ2dsZS5lbmFibGVkXCIgfVxuICB9LFxuICBcInNlYXJjaFwiOiB7XG4gICAgXCJkZWZhdWx0XCI6IFwiZ29vZ2xlXCIsXG4gICAgXCJlbmdpbmVzXCI6IHtcbiAgICAgIFwiZ29vZ2xlXCI6IFwiaHR0cHM6Ly9nb29nbGUuY29tL3NlYXJjaD9xPXt9XCIsXG4gICAgICBcInlhaG9vXCI6IFwiaHR0cHM6Ly9zZWFyY2gueWFob28uY29tL3NlYXJjaD9wPXt9XCIsXG4gICAgICBcImJpbmdcIjogXCJodHRwczovL3d3dy5iaW5nLmNvbS9zZWFyY2g/cT17fVwiLFxuICAgICAgXCJkdWNrZHVja2dvXCI6IFwiaHR0cHM6Ly9kdWNrZHVja2dvLmNvbS8/cT17fVwiLFxuICAgICAgXCJ0d2l0dGVyXCI6IFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9zZWFyY2g/cT17fVwiLFxuICAgICAgXCJ3aWtpcGVkaWFcIjogXCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvdy9pbmRleC5waHA/c2VhcmNoPXt9XCJcbiAgICB9XG4gIH0sXG4gIFwicHJvcGVydGllc1wiOiB7XG4gICAgXCJoaW50Y2hhcnNcIjogXCJhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5elwiLFxuICAgIFwic21vb3Roc2Nyb2xsXCI6IGZhbHNlLFxuICAgIFwiY29tcGxldGVcIjogXCJzYmhcIixcbiAgICBcImNvbG9yc2NoZW1lXCI6IFwic3lzdGVtXCJcbiAgfSxcbiAgXCJibGFja2xpc3RcIjogW1xuICBdXG59YDtcblxuZXhwb3J0IGNvbnN0IERlZmF1bHRTZXR0aW5nOiBTZXR0aW5ncyA9IFNldHRpbmdzLmZyb21KU09OKFxuICBKU09OLnBhcnNlKERlZmF1bHRTZXR0aW5nSlNPTlRleHQpXG4pO1xuIiwiZW51bSBDb2xvclNjaGVtZSB7XG4gIFN5c3RlbSA9IFwic3lzdGVtXCIsXG4gIExpZ2h0ID0gXCJsaWdodFwiLFxuICBEYXJrID0gXCJkYXJrXCIsXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbG9yU2NoZW1lO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG5cbi8qKlxuICogQ29weXJpZ2h0IDIwMTUsIFlhaG9vISBJbmMuXG4gKiBDb3B5cmlnaHRzIGxpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIExpY2Vuc2UuIFNlZSB0aGUgYWNjb21wYW55aW5nIExJQ0VOU0UgZmlsZSBmb3IgdGVybXMuXG4gKi9cbnZhciBSRUFDVF9TVEFUSUNTID0ge1xuICBjaGlsZENvbnRleHRUeXBlczogdHJ1ZSxcbiAgY29udGV4dFR5cGU6IHRydWUsXG4gIGNvbnRleHRUeXBlczogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgZ2V0RGVmYXVsdFByb3BzOiB0cnVlLFxuICBnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3I6IHRydWUsXG4gIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wczogdHJ1ZSxcbiAgbWl4aW5zOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWUsXG4gIHR5cGU6IHRydWVcbn07XG52YXIgS05PV05fU1RBVElDUyA9IHtcbiAgbmFtZTogdHJ1ZSxcbiAgbGVuZ3RoOiB0cnVlLFxuICBwcm90b3R5cGU6IHRydWUsXG4gIGNhbGxlcjogdHJ1ZSxcbiAgY2FsbGVlOiB0cnVlLFxuICBhcmd1bWVudHM6IHRydWUsXG4gIGFyaXR5OiB0cnVlXG59O1xudmFyIEZPUldBUkRfUkVGX1NUQVRJQ1MgPSB7XG4gICckJHR5cGVvZic6IHRydWUsXG4gIHJlbmRlcjogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlXG59O1xudmFyIE1FTU9fU1RBVElDUyA9IHtcbiAgJyQkdHlwZW9mJzogdHJ1ZSxcbiAgY29tcGFyZTogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlLFxuICB0eXBlOiB0cnVlXG59O1xudmFyIFRZUEVfU1RBVElDUyA9IHt9O1xuVFlQRV9TVEFUSUNTW3JlYWN0SXMuRm9yd2FyZFJlZl0gPSBGT1JXQVJEX1JFRl9TVEFUSUNTO1xuVFlQRV9TVEFUSUNTW3JlYWN0SXMuTWVtb10gPSBNRU1PX1NUQVRJQ1M7XG5cbmZ1bmN0aW9uIGdldFN0YXRpY3MoY29tcG9uZW50KSB7XG4gIC8vIFJlYWN0IHYxNi4xMSBhbmQgYmVsb3dcbiAgaWYgKHJlYWN0SXMuaXNNZW1vKGNvbXBvbmVudCkpIHtcbiAgICByZXR1cm4gTUVNT19TVEFUSUNTO1xuICB9IC8vIFJlYWN0IHYxNi4xMiBhbmQgYWJvdmVcblxuXG4gIHJldHVybiBUWVBFX1NUQVRJQ1NbY29tcG9uZW50WyckJHR5cGVvZiddXSB8fCBSRUFDVF9TVEFUSUNTO1xufVxuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbnZhciBvYmplY3RQcm90b3R5cGUgPSBPYmplY3QucHJvdG90eXBlO1xuZnVuY3Rpb24gaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBzb3VyY2VDb21wb25lbnQsIGJsYWNrbGlzdCkge1xuICBpZiAodHlwZW9mIHNvdXJjZUNvbXBvbmVudCAhPT0gJ3N0cmluZycpIHtcbiAgICAvLyBkb24ndCBob2lzdCBvdmVyIHN0cmluZyAoaHRtbCkgY29tcG9uZW50c1xuICAgIGlmIChvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgIHZhciBpbmhlcml0ZWRDb21wb25lbnQgPSBnZXRQcm90b3R5cGVPZihzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgICBpZiAoaW5oZXJpdGVkQ29tcG9uZW50ICYmIGluaGVyaXRlZENvbXBvbmVudCAhPT0gb2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICAgIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgaW5oZXJpdGVkQ29tcG9uZW50LCBibGFja2xpc3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgaWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAga2V5cyA9IGtleXMuY29uY2F0KGdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2VDb21wb25lbnQpKTtcbiAgICB9XG5cbiAgICB2YXIgdGFyZ2V0U3RhdGljcyA9IGdldFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50KTtcbiAgICB2YXIgc291cmNlU3RhdGljcyA9IGdldFN0YXRpY3Moc291cmNlQ29tcG9uZW50KTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmICghS05PV05fU1RBVElDU1trZXldICYmICEoYmxhY2tsaXN0ICYmIGJsYWNrbGlzdFtrZXldKSAmJiAhKHNvdXJjZVN0YXRpY3MgJiYgc291cmNlU3RhdGljc1trZXldKSAmJiAhKHRhcmdldFN0YXRpY3MgJiYgdGFyZ2V0U3RhdGljc1trZXldKSkge1xuICAgICAgICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2VDb21wb25lbnQsIGtleSk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBBdm9pZCBmYWlsdXJlcyBmcm9tIHJlYWQtb25seSBwcm9wZXJ0aWVzXG4gICAgICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0Q29tcG9uZW50LCBrZXksIGRlc2NyaXB0b3IpO1xuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXRDb21wb25lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaG9pc3ROb25SZWFjdFN0YXRpY3M7XG4iLCJjb25zdCBkaWdpdHMgPSBbXCIwXCIsIFwiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCJdO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZXkge1xuICBwdWJsaWMgcmVhZG9ubHkga2V5OiBzdHJpbmc7XG5cbiAgcHVibGljIHJlYWRvbmx5IHNoaWZ0OiBib29sZWFuO1xuXG4gIHB1YmxpYyByZWFkb25seSBjdHJsOiBib29sZWFuO1xuXG4gIHB1YmxpYyByZWFkb25seSBhbHQ6IGJvb2xlYW47XG5cbiAgcHVibGljIHJlYWRvbmx5IG1ldGE6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3Ioe1xuICAgIGtleSxcbiAgICBzaGlmdCA9IGZhbHNlLFxuICAgIGN0cmwgPSBmYWxzZSxcbiAgICBhbHQgPSBmYWxzZSxcbiAgICBtZXRhID0gZmFsc2UsXG4gIH06IHtcbiAgICBrZXk6IHN0cmluZztcbiAgICBzaGlmdD86IGJvb2xlYW47XG4gICAgY3RybD86IGJvb2xlYW47XG4gICAgYWx0PzogYm9vbGVhbjtcbiAgICBtZXRhPzogYm9vbGVhbjtcbiAgfSkge1xuICAgIHRoaXMua2V5ID0ga2V5O1xuICAgIHRoaXMuc2hpZnQgPSBzaGlmdDtcbiAgICB0aGlzLmN0cmwgPSBjdHJsO1xuICAgIHRoaXMuYWx0ID0gYWx0O1xuICAgIHRoaXMubWV0YSA9IG1ldGE7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1hcEtleShzdHI6IHN0cmluZyk6IEtleSB7XG4gICAgaWYgKHN0ci5zdGFydHNXaXRoKFwiPFwiKSAmJiBzdHIuZW5kc1dpdGgoXCI+XCIpKSB7XG4gICAgICBjb25zdCBpbm5lciA9IHN0ci5zbGljZSgxLCAtMSk7XG4gICAgICBjb25zdCBzaGlmdCA9IGlubmVyLmluY2x1ZGVzKFwiUy1cIik7XG4gICAgICBsZXQgYmFzZSA9IGlubmVyLnNsaWNlKGlubmVyLmxhc3RJbmRleE9mKFwiLVwiKSArIDEpO1xuICAgICAgaWYgKHNoaWZ0ICYmIGJhc2UubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGJhc2UgPSBiYXNlLnRvVXBwZXJDYXNlKCk7XG4gICAgICB9IGVsc2UgaWYgKCFzaGlmdCAmJiBiYXNlLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBiYXNlID0gYmFzZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBLZXkoe1xuICAgICAgICBrZXk6IGJhc2UsXG4gICAgICAgIHNoaWZ0OiBzaGlmdCxcbiAgICAgICAgY3RybDogaW5uZXIuaW5jbHVkZXMoXCJDLVwiKSxcbiAgICAgICAgYWx0OiBpbm5lci5pbmNsdWRlcyhcIkEtXCIpLFxuICAgICAgICBtZXRhOiBpbm5lci5pbmNsdWRlcyhcIk0tXCIpLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBLZXkoe1xuICAgICAga2V5OiBzdHIsXG4gICAgICBzaGlmdDogc3RyLnRvTG93ZXJDYXNlKCkgIT09IHN0cixcbiAgICAgIGN0cmw6IGZhbHNlLFxuICAgICAgYWx0OiBmYWxzZSxcbiAgICAgIG1ldGE6IGZhbHNlLFxuICAgIH0pO1xuICB9XG5cbiAgaXNEaWdpdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZGlnaXRzLmluY2x1ZGVzKHRoaXMua2V5KSAmJiAhdGhpcy5jdHJsICYmICF0aGlzLmFsdCAmJiAhdGhpcy5tZXRhO1xuICB9XG5cbiAgZXF1YWxzKGtleTogS2V5KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMua2V5ID09PSBrZXkua2V5ICYmXG4gICAgICB0aGlzLmN0cmwgPT09IGtleS5jdHJsICYmXG4gICAgICB0aGlzLm1ldGEgPT09IGtleS5tZXRhICYmXG4gICAgICB0aGlzLmFsdCA9PT0ga2V5LmFsdCAmJlxuICAgICAgdGhpcy5zaGlmdCA9PT0ga2V5LnNoaWZ0XG4gICAgKTtcbiAgfVxufVxuIiwidHlwZSBFbnRyaWVzID0geyBbbmFtZTogc3RyaW5nXTogc3RyaW5nIH07XG5cbmV4cG9ydCB0eXBlIFNlYXJjaEpTT04gPSB7XG4gIGRlZmF1bHQ6IHN0cmluZztcbiAgZW5naW5lczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkZWZhdWx0RW5naW5lOiBzdHJpbmcsIHB1YmxpYyBlbmdpbmVzOiBFbnRyaWVzKSB7fVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uOiBTZWFyY2hKU09OKTogU2VhcmNoIHtcbiAgICBmb3IgKGNvbnN0IFtuYW1lLCB1cmxdIG9mIE9iamVjdC5lbnRyaWVzKGpzb24uZW5naW5lcykpIHtcbiAgICAgIGlmICghL15bYS16QS1aMC05XSskLy50ZXN0KG5hbWUpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTZWFyY2ggZW5naW5lJ3MgbmFtZSBtdXN0IGJlIFthLXpBLVowLTldK1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG1hdGNoZXMgPSB1cmwubWF0Y2goL3t9L2cpO1xuICAgICAgaWYgKG1hdGNoZXMgPT09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8ge30tcGxhY2Vob2xkZXJzIGluIFVSTCBvZiBcIiR7bmFtZX1cImApO1xuICAgICAgfSBlbHNlIGlmIChtYXRjaGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTXVsdGlwbGUge30tcGxhY2Vob2xkZXJzIGluIFVSTCBvZiBcIiR7bmFtZX1cImApO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIU9iamVjdC5rZXlzKGpzb24uZW5naW5lcykuaW5jbHVkZXMoanNvbi5kZWZhdWx0KSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgRGVmYXVsdCBlbmdpbmUgXCIke2pzb24uZGVmYXVsdH1cIiBub3QgZm91bmRgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFNlYXJjaChqc29uLmRlZmF1bHQsIGpzb24uZW5naW5lcyk7XG4gIH1cblxuICB0b0pTT04oKTogU2VhcmNoSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRlZmF1bHQ6IHRoaXMuZGVmYXVsdEVuZ2luZSxcbiAgICAgIGVuZ2luZXM6IHRoaXMuZW5naW5lcyxcbiAgICB9O1xuICB9XG59XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGVxdWFsID0gcmVxdWlyZSgnYWp2L2xpYi9jb21waWxlL2VxdWFsJyk7XG52YXIgdmFsaWRhdGUgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciBwYXR0ZXJuMCA9IG5ldyBSZWdFeHAoJy4qJyk7XG4gIHZhciByZWZWYWwgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHZhbGlkYXRlKGRhdGEsIGRhdGFQYXRoLCBwYXJlbnREYXRhLCBwYXJlbnREYXRhUHJvcGVydHksIHJvb3REYXRhKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIHZhciB2RXJyb3JzID0gbnVsbDtcbiAgICB2YXIgZXJyb3JzID0gMDtcbiAgICBpZiAoKGRhdGEgJiYgdHlwZW9mIGRhdGEgPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkoZGF0YSkpKSB7XG4gICAgICB2YXIgZXJyc19fMCA9IGVycm9ycztcbiAgICAgIHZhciB2YWxpZDEgPSB0cnVlO1xuICAgICAgZm9yICh2YXIga2V5MCBpbiBkYXRhKSB7XG4gICAgICAgIHZhciBpc0FkZGl0aW9uYWwwID0gIShmYWxzZSB8fCBrZXkwID09ICdrZXltYXBzJyB8fCBrZXkwID09ICdzZWFyY2gnIHx8IGtleTAgPT0gJ3Byb3BlcnRpZXMnIHx8IGtleTAgPT0gJ2JsYWNrbGlzdCcpO1xuICAgICAgICBpZiAoaXNBZGRpdGlvbmFsMCkge1xuICAgICAgICAgIHZhbGlkMSA9IGZhbHNlO1xuICAgICAgICAgIHZhbGlkYXRlLmVycm9ycyA9IFt7XG4gICAgICAgICAgICBrZXl3b3JkOiAnYWRkaXRpb25hbFByb3BlcnRpZXMnLFxuICAgICAgICAgICAgZGF0YVBhdGg6IChkYXRhUGF0aCB8fCAnJykgKyBcIlwiLFxuICAgICAgICAgICAgc2NoZW1hUGF0aDogJyMvYWRkaXRpb25hbFByb3BlcnRpZXMnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGFkZGl0aW9uYWxQcm9wZXJ0eTogJycgKyBrZXkwICsgJydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZXNzYWdlOiAnc2hvdWxkIE5PVCBoYXZlIGFkZGl0aW9uYWwgcHJvcGVydGllcydcbiAgICAgICAgICB9XTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh2YWxpZDEpIHtcbiAgICAgICAgdmFyIGRhdGExID0gZGF0YS5rZXltYXBzO1xuICAgICAgICBpZiAoZGF0YTEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHZhbGlkMSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGVycnNfMSA9IGVycm9ycztcbiAgICAgICAgICBpZiAoKGRhdGExICYmIHR5cGVvZiBkYXRhMSA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheShkYXRhMSkpKSB7XG4gICAgICAgICAgICB2YXIgZXJyc19fMSA9IGVycm9ycztcbiAgICAgICAgICAgIHZhciB2YWxpZDIgPSB0cnVlO1xuICAgICAgICAgICAgZm9yICh2YXIga2V5MSBpbiBkYXRhMSkge1xuICAgICAgICAgICAgICBpZiAocGF0dGVybjAudGVzdChrZXkxKSkge1xuICAgICAgICAgICAgICAgIHZhciBkYXRhMiA9IGRhdGExW2tleTFdO1xuICAgICAgICAgICAgICAgIHZhciBlcnJzXzIgPSBlcnJvcnM7XG4gICAgICAgICAgICAgICAgaWYgKChkYXRhMiAmJiB0eXBlb2YgZGF0YTIgPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkoZGF0YTIpKSkge1xuICAgICAgICAgICAgICAgICAgaWYgKHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVycnNfXzIgPSBlcnJvcnM7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWxpZDMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YTIudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWQzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUuZXJyb3JzID0gW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleXdvcmQ6ICdyZXF1aXJlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhUGF0aDogKGRhdGFQYXRoIHx8ICcnKSArICcua2V5bWFwc1tcXCcnICsga2V5MSArICdcXCddJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYVBhdGg6ICcjL3Byb3BlcnRpZXMva2V5bWFwcy9wYXR0ZXJuUHJvcGVydGllcy8uKi9yZXF1aXJlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWlzc2luZ1Byb3BlcnR5OiAndHlwZSdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnc2hvdWxkIGhhdmUgcmVxdWlyZWQgcHJvcGVydHkgXFwndHlwZVxcJydcbiAgICAgICAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGVycnNfMyA9IGVycm9ycztcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRhdGEyLnR5cGUgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLmVycm9ycyA9IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleXdvcmQ6ICd0eXBlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVBhdGg6IChkYXRhUGF0aCB8fCAnJykgKyAnLmtleW1hcHNbXFwnJyArIGtleTEgKyAnXFwnXS50eXBlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hUGF0aDogJyMvcHJvcGVydGllcy9rZXltYXBzL3BhdHRlcm5Qcm9wZXJ0aWVzLy4qL3Byb3BlcnRpZXMvdHlwZS90eXBlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ3Nob3VsZCBiZSBzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbGlkMyA9IGVycm9ycyA9PT0gZXJyc18zO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLmVycm9ycyA9IFt7XG4gICAgICAgICAgICAgICAgICAgIGtleXdvcmQ6ICd0eXBlJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YVBhdGg6IChkYXRhUGF0aCB8fCAnJykgKyAnLmtleW1hcHNbXFwnJyArIGtleTEgKyAnXFwnXScsXG4gICAgICAgICAgICAgICAgICAgIHNjaGVtYVBhdGg6ICcjL3Byb3BlcnRpZXMva2V5bWFwcy9wYXR0ZXJuUHJvcGVydGllcy8uKi90eXBlJyxcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ29iamVjdCdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ3Nob3VsZCBiZSBvYmplY3QnXG4gICAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHZhbGlkMiA9IGVycm9ycyA9PT0gZXJyc18yO1xuICAgICAgICAgICAgICAgIGlmICghdmFsaWQyKSBicmVhaztcbiAgICAgICAgICAgICAgfSBlbHNlIHZhbGlkMiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbGlkYXRlLmVycm9ycyA9IFt7XG4gICAgICAgICAgICAgIGtleXdvcmQ6ICd0eXBlJyxcbiAgICAgICAgICAgICAgZGF0YVBhdGg6IChkYXRhUGF0aCB8fCAnJykgKyAnLmtleW1hcHMnLFxuICAgICAgICAgICAgICBzY2hlbWFQYXRoOiAnIy9wcm9wZXJ0aWVzL2tleW1hcHMvdHlwZScsXG4gICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG1lc3NhZ2U6ICdzaG91bGQgYmUgb2JqZWN0J1xuICAgICAgICAgICAgfV07XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciB2YWxpZDEgPSBlcnJvcnMgPT09IGVycnNfMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsaWQxKSB7XG4gICAgICAgICAgdmFyIGRhdGExID0gZGF0YS5zZWFyY2g7XG4gICAgICAgICAgaWYgKGRhdGExID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHZhbGlkMSA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBlcnJzXzEgPSBlcnJvcnM7XG4gICAgICAgICAgICBpZiAoKGRhdGExICYmIHR5cGVvZiBkYXRhMSA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheShkYXRhMSkpKSB7XG4gICAgICAgICAgICAgIGlmICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVycnNfXzEgPSBlcnJvcnM7XG4gICAgICAgICAgICAgICAgdmFyIHZhbGlkMiA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGExLmRlZmF1bHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgdmFsaWQyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB2YWxpZGF0ZS5lcnJvcnMgPSBbe1xuICAgICAgICAgICAgICAgICAgICBrZXl3b3JkOiAncmVxdWlyZWQnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhUGF0aDogKGRhdGFQYXRoIHx8ICcnKSArICcuc2VhcmNoJyxcbiAgICAgICAgICAgICAgICAgICAgc2NoZW1hUGF0aDogJyMvcHJvcGVydGllcy9zZWFyY2gvcmVxdWlyZWQnLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBtaXNzaW5nUHJvcGVydHk6ICdkZWZhdWx0J1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnc2hvdWxkIGhhdmUgcmVxdWlyZWQgcHJvcGVydHkgXFwnZGVmYXVsdFxcJydcbiAgICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICB2YXIgZXJyc18yID0gZXJyb3JzO1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhMS5kZWZhdWx0ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLmVycm9ycyA9IFt7XG4gICAgICAgICAgICAgICAgICAgICAga2V5d29yZDogJ3R5cGUnLFxuICAgICAgICAgICAgICAgICAgICAgIGRhdGFQYXRoOiAoZGF0YVBhdGggfHwgJycpICsgJy5zZWFyY2guZGVmYXVsdCcsXG4gICAgICAgICAgICAgICAgICAgICAgc2NoZW1hUGF0aDogJyMvcHJvcGVydGllcy9zZWFyY2gvcHJvcGVydGllcy9kZWZhdWx0L3R5cGUnLFxuICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdzaG91bGQgYmUgc3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgdmFyIHZhbGlkMiA9IGVycm9ycyA9PT0gZXJyc18yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsaWQyKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgZGF0YTIgPSBkYXRhMS5lbmdpbmVzO1xuICAgICAgICAgICAgICAgICAgaWYgKGRhdGEyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWQyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLmVycm9ycyA9IFt7XG4gICAgICAgICAgICAgICAgICAgICAga2V5d29yZDogJ3JlcXVpcmVkJyxcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhUGF0aDogKGRhdGFQYXRoIHx8ICcnKSArICcuc2VhcmNoJyxcbiAgICAgICAgICAgICAgICAgICAgICBzY2hlbWFQYXRoOiAnIy9wcm9wZXJ0aWVzL3NlYXJjaC9yZXF1aXJlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaXNzaW5nUHJvcGVydHk6ICdlbmdpbmVzJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ3Nob3VsZCBoYXZlIHJlcXVpcmVkIHByb3BlcnR5IFxcJ2VuZ2luZXNcXCcnXG4gICAgICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXJyc18yID0gZXJyb3JzO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKGRhdGEyICYmIHR5cGVvZiBkYXRhMiA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheShkYXRhMikpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGVycnNfXzIgPSBlcnJvcnM7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbGlkMyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIga2V5MiBpbiBkYXRhMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhdHRlcm4wLnRlc3Qoa2V5MikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVycnNfMyA9IGVycm9ycztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhMltrZXkyXSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLmVycm9ycyA9IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXl3b3JkOiAndHlwZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhUGF0aDogKGRhdGFQYXRoIHx8ICcnKSArICcuc2VhcmNoLmVuZ2luZXNbXFwnJyArIGtleTIgKyAnXFwnXScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWFQYXRoOiAnIy9wcm9wZXJ0aWVzL3NlYXJjaC9wcm9wZXJ0aWVzL2VuZ2luZXMvcGF0dGVyblByb3BlcnRpZXMvLiovdHlwZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnc2hvdWxkIGJlIHN0cmluZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbGlkMyA9IGVycm9ycyA9PT0gZXJyc18zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbGlkMykgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgdmFsaWQzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUuZXJyb3JzID0gW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleXdvcmQ6ICd0eXBlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFQYXRoOiAoZGF0YVBhdGggfHwgJycpICsgJy5zZWFyY2guZW5naW5lcycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWFQYXRoOiAnIy9wcm9wZXJ0aWVzL3NlYXJjaC9wcm9wZXJ0aWVzL2VuZ2luZXMvdHlwZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ29iamVjdCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnc2hvdWxkIGJlIG9iamVjdCdcbiAgICAgICAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbGlkMiA9IGVycm9ycyA9PT0gZXJyc18yO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGUuZXJyb3JzID0gW3tcbiAgICAgICAgICAgICAgICBrZXl3b3JkOiAndHlwZScsXG4gICAgICAgICAgICAgICAgZGF0YVBhdGg6IChkYXRhUGF0aCB8fCAnJykgKyAnLnNlYXJjaCcsXG4gICAgICAgICAgICAgICAgc2NoZW1hUGF0aDogJyMvcHJvcGVydGllcy9zZWFyY2gvdHlwZScsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiAnb2JqZWN0J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ3Nob3VsZCBiZSBvYmplY3QnXG4gICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsaWQxID0gZXJyb3JzID09PSBlcnJzXzE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh2YWxpZDEpIHtcbiAgICAgICAgICAgIHZhciBkYXRhMSA9IGRhdGEucHJvcGVydGllcztcbiAgICAgICAgICAgIGlmIChkYXRhMSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHZhbGlkMSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB2YXIgZXJyc18xID0gZXJyb3JzO1xuICAgICAgICAgICAgICBpZiAoKGRhdGExICYmIHR5cGVvZiBkYXRhMSA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheShkYXRhMSkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVycnNfXzEgPSBlcnJvcnM7XG4gICAgICAgICAgICAgICAgdmFyIHZhbGlkMiA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGExLmhpbnRjaGFycyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICB2YWxpZDIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICB2YXIgZXJyc18yID0gZXJyb3JzO1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhMS5oaW50Y2hhcnMgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUuZXJyb3JzID0gW3tcbiAgICAgICAgICAgICAgICAgICAgICBrZXl3b3JkOiAndHlwZScsXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YVBhdGg6IChkYXRhUGF0aCB8fCAnJykgKyAnLnByb3BlcnRpZXMuaGludGNoYXJzJyxcbiAgICAgICAgICAgICAgICAgICAgICBzY2hlbWFQYXRoOiAnIy9wcm9wZXJ0aWVzL3Byb3BlcnRpZXMvcHJvcGVydGllcy9oaW50Y2hhcnMvdHlwZScsXG4gICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ3Nob3VsZCBiZSBzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB2YXIgdmFsaWQyID0gZXJyb3JzID09PSBlcnJzXzI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWxpZDIpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChkYXRhMS5zbW9vdGhzY3JvbGwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZDIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVycnNfMiA9IGVycm9ycztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhMS5zbW9vdGhzY3JvbGwgIT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUuZXJyb3JzID0gW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleXdvcmQ6ICd0eXBlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFQYXRoOiAoZGF0YVBhdGggfHwgJycpICsgJy5wcm9wZXJ0aWVzLnNtb290aHNjcm9sbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWFQYXRoOiAnIy9wcm9wZXJ0aWVzL3Byb3BlcnRpZXMvcHJvcGVydGllcy9zbW9vdGhzY3JvbGwvdHlwZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ3Nob3VsZCBiZSBib29sZWFuJ1xuICAgICAgICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsaWQyID0gZXJyb3JzID09PSBlcnJzXzI7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAodmFsaWQyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhMS5jb21wbGV0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWQyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyc18yID0gZXJyb3JzO1xuICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YTEuY29tcGxldGUgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLmVycm9ycyA9IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleXdvcmQ6ICd0eXBlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVBhdGg6IChkYXRhUGF0aCB8fCAnJykgKyAnLnByb3BlcnRpZXMuY29tcGxldGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWFQYXRoOiAnIy9wcm9wZXJ0aWVzL3Byb3BlcnRpZXMvcHJvcGVydGllcy9jb21wbGV0ZS90eXBlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ3Nob3VsZCBiZSBzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbGlkMiA9IGVycm9ycyA9PT0gZXJyc18yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YTIgPSBkYXRhMS5jb2xvcnNjaGVtZTtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YTIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWQyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVycnNfMiA9IGVycm9ycztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YTIgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUuZXJyb3JzID0gW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXl3b3JkOiAndHlwZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVBhdGg6IChkYXRhUGF0aCB8fCAnJykgKyAnLnByb3BlcnRpZXMuY29sb3JzY2hlbWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYVBhdGg6ICcjL3Byb3BlcnRpZXMvcHJvcGVydGllcy9wcm9wZXJ0aWVzL2NvbG9yc2NoZW1lL3R5cGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdzaG91bGQgYmUgc3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNjaGVtYTIgPSB2YWxpZGF0ZS5zY2hlbWEucHJvcGVydGllcy5wcm9wZXJ0aWVzLnByb3BlcnRpZXMuY29sb3JzY2hlbWUuZW51bTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWxpZDI7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZDIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkyID0gMDsgaTIgPCBzY2hlbWEyLmxlbmd0aDsgaTIrKylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVxdWFsKGRhdGEyLCBzY2hlbWEyW2kyXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZDIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9IGlmICghdmFsaWQyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLmVycm9ycyA9IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5d29yZDogJ2VudW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFQYXRoOiAoZGF0YVBhdGggfHwgJycpICsgJy5wcm9wZXJ0aWVzLmNvbG9yc2NoZW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWFQYXRoOiAnIy9wcm9wZXJ0aWVzL3Byb3BlcnRpZXMvcHJvcGVydGllcy9jb2xvcnNjaGVtZS9lbnVtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IHNjaGVtYTJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdzaG91bGQgYmUgZXF1YWwgdG8gb25lIG9mIHRoZSBhbGxvd2VkIHZhbHVlcydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWxpZDIgPSBlcnJvcnMgPT09IGVycnNfMjtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdGUuZXJyb3JzID0gW3tcbiAgICAgICAgICAgICAgICAgIGtleXdvcmQ6ICd0eXBlJyxcbiAgICAgICAgICAgICAgICAgIGRhdGFQYXRoOiAoZGF0YVBhdGggfHwgJycpICsgJy5wcm9wZXJ0aWVzJyxcbiAgICAgICAgICAgICAgICAgIHNjaGVtYVBhdGg6ICcjL3Byb3BlcnRpZXMvcHJvcGVydGllcy90eXBlJyxcbiAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnb2JqZWN0J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdzaG91bGQgYmUgb2JqZWN0J1xuICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB2YXIgdmFsaWQxID0gZXJyb3JzID09PSBlcnJzXzE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsaWQxKSB7XG4gICAgICAgICAgICAgIHZhciBkYXRhMSA9IGRhdGEuYmxhY2tsaXN0O1xuICAgICAgICAgICAgICBpZiAoZGF0YTEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHZhbGlkMSA9IHRydWU7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGVycnNfMSA9IGVycm9ycztcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhMSkpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBlcnJzX18xID0gZXJyb3JzO1xuICAgICAgICAgICAgICAgICAgdmFyIHZhbGlkMTtcbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkxID0gMDsgaTEgPCBkYXRhMS5sZW5ndGg7IGkxKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEyID0gZGF0YTFbaTFdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXJyc18yID0gZXJyb3JzO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXJyc19fMiA9IGVycm9ycztcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbGlkMiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXJyc18zID0gZXJyb3JzO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRhdGEyICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGVyciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleXdvcmQ6ICd0eXBlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFQYXRoOiAoZGF0YVBhdGggfHwgJycpICsgJy5ibGFja2xpc3RbJyArIGkxICsgJ10nLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hUGF0aDogJyMvcHJvcGVydGllcy9ibGFja2xpc3QvaXRlbXMvYW55T2YvMC90eXBlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdzaG91bGQgYmUgc3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHZFcnJvcnMgPT09IG51bGwpIHZFcnJvcnMgPSBbZXJyXTtcbiAgICAgICAgICAgICAgICAgICAgICBlbHNlIHZFcnJvcnMucHVzaChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgIGVycm9ycysrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWxpZDMgPSBlcnJvcnMgPT09IGVycnNfMztcbiAgICAgICAgICAgICAgICAgICAgdmFsaWQyID0gdmFsaWQyIHx8IHZhbGlkMztcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWxpZDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyc18zID0gZXJyb3JzO1xuICAgICAgICAgICAgICAgICAgICAgIGlmICgoZGF0YTIgJiYgdHlwZW9mIGRhdGEyID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KGRhdGEyKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnJzX18zID0gZXJyb3JzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsaWQ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEyLnVybCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWQ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVyciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXdvcmQ6ICdyZXF1aXJlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhUGF0aDogKGRhdGFQYXRoIHx8ICcnKSArICcuYmxhY2tsaXN0WycgKyBpMSArICddJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYVBhdGg6ICcjL3Byb3BlcnRpZXMvYmxhY2tsaXN0L2l0ZW1zL2FueU9mLzEvcmVxdWlyZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pc3NpbmdQcm9wZXJ0eTogJ3VybCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnc2hvdWxkIGhhdmUgcmVxdWlyZWQgcHJvcGVydHkgXFwndXJsXFwnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZFcnJvcnMgPT09IG51bGwpIHZFcnJvcnMgPSBbZXJyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHZFcnJvcnMucHVzaChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycysrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnJzXzQgPSBlcnJvcnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhMi51cmwgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXdvcmQ6ICd0eXBlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVBhdGg6IChkYXRhUGF0aCB8fCAnJykgKyAnLmJsYWNrbGlzdFsnICsgaTEgKyAnXS51cmwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWFQYXRoOiAnIy9wcm9wZXJ0aWVzL2JsYWNrbGlzdC9pdGVtcy9hbnlPZi8xL3Byb3BlcnRpZXMvdXJsL3R5cGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnc2hvdWxkIGJlIHN0cmluZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodkVycm9ycyA9PT0gbnVsbCkgdkVycm9ycyA9IFtlcnJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB2RXJyb3JzLnB1c2goZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycysrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsaWQ0ID0gZXJyb3JzID09PSBlcnJzXzQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhMyA9IGRhdGEyLmtleXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkNCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVyciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5d29yZDogJ3JlcXVpcmVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVBhdGg6IChkYXRhUGF0aCB8fCAnJykgKyAnLmJsYWNrbGlzdFsnICsgaTEgKyAnXScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYVBhdGg6ICcjL3Byb3BlcnRpZXMvYmxhY2tsaXN0L2l0ZW1zL2FueU9mLzEvcmVxdWlyZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaXNzaW5nUHJvcGVydHk6ICdrZXlzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnc2hvdWxkIGhhdmUgcmVxdWlyZWQgcHJvcGVydHkgXFwna2V5c1xcJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodkVycm9ycyA9PT0gbnVsbCkgdkVycm9ycyA9IFtlcnJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB2RXJyb3JzLnB1c2goZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycysrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyc180ID0gZXJyb3JzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YTMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnJzX180ID0gZXJyb3JzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsaWQ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpNCA9IDA7IGk0IDwgZGF0YTMubGVuZ3RoOyBpNCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVycnNfNSA9IGVycm9ycztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRhdGEzW2k0XSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVyciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5d29yZDogJ3R5cGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhUGF0aDogKGRhdGFQYXRoIHx8ICcnKSArICcuYmxhY2tsaXN0WycgKyBpMSArICddLmtleXNbJyArIGk0ICsgJ10nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWFQYXRoOiAnIy9wcm9wZXJ0aWVzL2JsYWNrbGlzdC9pdGVtcy9hbnlPZi8xL3Byb3BlcnRpZXMva2V5cy9pdGVtcy90eXBlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ3Nob3VsZCBiZSBzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZFcnJvcnMgPT09IG51bGwpIHZFcnJvcnMgPSBbZXJyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgdkVycm9ycy5wdXNoKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbGlkNSA9IGVycm9ycyA9PT0gZXJyc181O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdmFsaWQ1KSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVyciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXl3b3JkOiAndHlwZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVBhdGg6IChkYXRhUGF0aCB8fCAnJykgKyAnLmJsYWNrbGlzdFsnICsgaTEgKyAnXS5rZXlzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWFQYXRoOiAnIy9wcm9wZXJ0aWVzL2JsYWNrbGlzdC9pdGVtcy9hbnlPZi8xL3Byb3BlcnRpZXMva2V5cy90eXBlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdhcnJheSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdzaG91bGQgYmUgYXJyYXknXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2RXJyb3JzID09PSBudWxsKSB2RXJyb3JzID0gW2Vycl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgdkVycm9ycy5wdXNoKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycysrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbGlkNCA9IGVycm9ycyA9PT0gZXJyc180O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXl3b3JkOiAndHlwZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFQYXRoOiAoZGF0YVBhdGggfHwgJycpICsgJy5ibGFja2xpc3RbJyArIGkxICsgJ10nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWFQYXRoOiAnIy9wcm9wZXJ0aWVzL2JsYWNrbGlzdC9pdGVtcy9hbnlPZi8xL3R5cGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnb2JqZWN0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnc2hvdWxkIGJlIG9iamVjdCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodkVycm9ycyA9PT0gbnVsbCkgdkVycm9ycyA9IFtlcnJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB2RXJyb3JzLnB1c2goZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycysrO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsaWQzID0gZXJyb3JzID09PSBlcnJzXzM7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWQyID0gdmFsaWQyIHx8IHZhbGlkMztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbGlkMikge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXl3b3JkOiAnYW55T2YnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVBhdGg6IChkYXRhUGF0aCB8fCAnJykgKyAnLmJsYWNrbGlzdFsnICsgaTEgKyAnXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWFQYXRoOiAnIy9wcm9wZXJ0aWVzL2JsYWNrbGlzdC9pdGVtcy9hbnlPZicsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ3Nob3VsZCBtYXRjaCBzb21lIHNjaGVtYSBpbiBhbnlPZidcbiAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgIGlmICh2RXJyb3JzID09PSBudWxsKSB2RXJyb3JzID0gW2Vycl07XG4gICAgICAgICAgICAgICAgICAgICAgZWxzZSB2RXJyb3JzLnB1c2goZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMrKztcbiAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZS5lcnJvcnMgPSB2RXJyb3JzO1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMgPSBlcnJzX18yO1xuICAgICAgICAgICAgICAgICAgICAgIGlmICh2RXJyb3JzICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyc19fMikgdkVycm9ycy5sZW5ndGggPSBlcnJzX18yO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB2RXJyb3JzID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbGlkMiA9IGVycm9ycyA9PT0gZXJyc18yO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbGlkMikgYnJlYWs7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLmVycm9ycyA9IFt7XG4gICAgICAgICAgICAgICAgICAgIGtleXdvcmQ6ICd0eXBlJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YVBhdGg6IChkYXRhUGF0aCB8fCAnJykgKyAnLmJsYWNrbGlzdCcsXG4gICAgICAgICAgICAgICAgICAgIHNjaGVtYVBhdGg6ICcjL3Byb3BlcnRpZXMvYmxhY2tsaXN0L3R5cGUnLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYXJyYXknXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdzaG91bGQgYmUgYXJyYXknXG4gICAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHZhbGlkMSA9IGVycm9ycyA9PT0gZXJyc18xO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkYXRlLmVycm9ycyA9IFt7XG4gICAgICAgIGtleXdvcmQ6ICd0eXBlJyxcbiAgICAgICAgZGF0YVBhdGg6IChkYXRhUGF0aCB8fCAnJykgKyBcIlwiLFxuICAgICAgICBzY2hlbWFQYXRoOiAnIy90eXBlJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgdHlwZTogJ29iamVjdCdcbiAgICAgICAgfSxcbiAgICAgICAgbWVzc2FnZTogJ3Nob3VsZCBiZSBvYmplY3QnXG4gICAgICB9XTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFsaWRhdGUuZXJyb3JzID0gdkVycm9ycztcbiAgICByZXR1cm4gZXJyb3JzID09PSAwO1xuICB9O1xufSkoKTtcbnZhbGlkYXRlLnNjaGVtYSA9IHtcbiAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gIFwicHJvcGVydGllc1wiOiB7XG4gICAgXCJrZXltYXBzXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgXCJwYXR0ZXJuUHJvcGVydGllc1wiOiB7XG4gICAgICAgIFwiLipcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgIFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXF1aXJlZFwiOiBbXCJ0eXBlXCJdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2VhcmNoXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgXCJkZWZhdWx0XCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICB9LFxuICAgICAgICBcImVuZ2luZXNcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgIFwicGF0dGVyblByb3BlcnRpZXNcIjoge1xuICAgICAgICAgICAgXCIuKlwiOiB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJyZXF1aXJlZFwiOiBbXCJkZWZhdWx0XCIsIFwiZW5naW5lc1wiXVxuICAgIH0sXG4gICAgXCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgXCJoaW50Y2hhcnNcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwic21vb3Roc2Nyb2xsXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJjb21wbGV0ZVwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJjb2xvcnNjaGVtZVwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgXCJlbnVtXCI6IFtcInN5c3RlbVwiLCBcImxpZ2h0XCIsIFwiZGFya1wiXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBcImJsYWNrbGlzdFwiOiB7XG4gICAgICBcInR5cGVcIjogXCJhcnJheVwiLFxuICAgICAgXCJpdGVtc1wiOiB7XG4gICAgICAgIFwiYW55T2ZcIjogW3tcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgIFwidXJsXCI6IHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImtleXNcIjoge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJhcnJheVwiLFxuICAgICAgICAgICAgICBcIml0ZW1zXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlcXVpcmVkXCI6IFtcInVybFwiLCBcImtleXNcIl1cbiAgICAgICAgfV1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIFwiYWRkaXRpb25hbFByb3BlcnRpZXNcIjogZmFsc2Vcbn07XG52YWxpZGF0ZS5lcnJvcnMgPSBudWxsO1xubW9kdWxlLmV4cG9ydHMgPSB2YWxpZGF0ZTsiLCIvLyBkbyBOT1QgcmVtb3ZlIHRoaXMgZmlsZSAtIGl0IHdvdWxkIGJyZWFrIHByZS1jb21waWxlZCBzY2hlbWFzXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYWp2LXZhbGlkYXRvci9hanYvaXNzdWVzLzg4OVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmFzdC1kZWVwLWVxdWFsXCIpXG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIGRvIG5vdCBlZGl0IC5qcyBmaWxlcyBkaXJlY3RseSAtIGVkaXQgc3JjL2luZGV4LmpzdFxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlcXVhbChhLCBiKSB7XG4gIGlmIChhID09PSBiKSByZXR1cm4gdHJ1ZTtcblxuICBpZiAoYSAmJiBiICYmIHR5cGVvZiBhID09ICdvYmplY3QnICYmIHR5cGVvZiBiID09ICdvYmplY3QnKSB7XG4gICAgaWYgKGEuY29uc3RydWN0b3IgIT09IGIuY29uc3RydWN0b3IpIHJldHVybiBmYWxzZTtcblxuICAgIHZhciBsZW5ndGgsIGksIGtleXM7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYSkpIHtcbiAgICAgIGxlbmd0aCA9IGEubGVuZ3RoO1xuICAgICAgaWYgKGxlbmd0aCAhPSBiLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gIT09IDA7KVxuICAgICAgICBpZiAoIWVxdWFsKGFbaV0sIGJbaV0pKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cblxuXG4gICAgaWYgKGEuY29uc3RydWN0b3IgPT09IFJlZ0V4cCkgcmV0dXJuIGEuc291cmNlID09PSBiLnNvdXJjZSAmJiBhLmZsYWdzID09PSBiLmZsYWdzO1xuICAgIGlmIChhLnZhbHVlT2YgIT09IE9iamVjdC5wcm90b3R5cGUudmFsdWVPZikgcmV0dXJuIGEudmFsdWVPZigpID09PSBiLnZhbHVlT2YoKTtcbiAgICBpZiAoYS50b1N0cmluZyAhPT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZykgcmV0dXJuIGEudG9TdHJpbmcoKSA9PT0gYi50b1N0cmluZygpO1xuXG4gICAga2V5cyA9IE9iamVjdC5rZXlzKGEpO1xuICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIGlmIChsZW5ndGggIT09IE9iamVjdC5rZXlzKGIpLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gIT09IDA7KVxuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwga2V5c1tpXSkpIHJldHVybiBmYWxzZTtcblxuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmICghZXF1YWwoYVtrZXldLCBiW2tleV0pKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyB0cnVlIGlmIGJvdGggTmFOLCBmYWxzZSBvdGhlcndpc2VcbiAgcmV0dXJuIGEhPT1hICYmIGIhPT1iO1xufTtcbiIsImZ1bmN0aW9uIG1lbW9pemUoZm4pIHtcbiAgdmFyIGNhY2hlID0ge307XG4gIHJldHVybiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgaWYgKGNhY2hlW2FyZ10gPT09IHVuZGVmaW5lZCkgY2FjaGVbYXJnXSA9IGZuKGFyZyk7XG4gICAgcmV0dXJuIGNhY2hlW2FyZ107XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW9pemU7XG4iLCJpbXBvcnQgbWVtb2l6ZSBmcm9tICdAZW1vdGlvbi9tZW1vaXplJztcblxudmFyIHJlYWN0UHJvcHNSZWdleCA9IC9eKChjaGlsZHJlbnxkYW5nZXJvdXNseVNldElubmVySFRNTHxrZXl8cmVmfGF1dG9Gb2N1c3xkZWZhdWx0VmFsdWV8ZGVmYXVsdENoZWNrZWR8aW5uZXJIVE1MfHN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZ3xzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmd8dmFsdWVMaW5rfGFjY2VwdHxhY2NlcHRDaGFyc2V0fGFjY2Vzc0tleXxhY3Rpb258YWxsb3d8YWxsb3dVc2VyTWVkaWF8YWxsb3dQYXltZW50UmVxdWVzdHxhbGxvd0Z1bGxTY3JlZW58YWxsb3dUcmFuc3BhcmVuY3l8YWx0fGFzeW5jfGF1dG9Db21wbGV0ZXxhdXRvUGxheXxjYXB0dXJlfGNlbGxQYWRkaW5nfGNlbGxTcGFjaW5nfGNoYWxsZW5nZXxjaGFyU2V0fGNoZWNrZWR8Y2l0ZXxjbGFzc0lEfGNsYXNzTmFtZXxjb2xzfGNvbFNwYW58Y29udGVudHxjb250ZW50RWRpdGFibGV8Y29udGV4dE1lbnV8Y29udHJvbHN8Y29udHJvbHNMaXN0fGNvb3Jkc3xjcm9zc09yaWdpbnxkYXRhfGRhdGVUaW1lfGRlY29kaW5nfGRlZmF1bHR8ZGVmZXJ8ZGlyfGRpc2FibGVkfGRpc2FibGVQaWN0dXJlSW5QaWN0dXJlfGRvd25sb2FkfGRyYWdnYWJsZXxlbmNUeXBlfGZvcm18Zm9ybUFjdGlvbnxmb3JtRW5jVHlwZXxmb3JtTWV0aG9kfGZvcm1Ob1ZhbGlkYXRlfGZvcm1UYXJnZXR8ZnJhbWVCb3JkZXJ8aGVhZGVyc3xoZWlnaHR8aGlkZGVufGhpZ2h8aHJlZnxocmVmTGFuZ3xodG1sRm9yfGh0dHBFcXVpdnxpZHxpbnB1dE1vZGV8aW50ZWdyaXR5fGlzfGtleVBhcmFtc3xrZXlUeXBlfGtpbmR8bGFiZWx8bGFuZ3xsaXN0fGxvYWRpbmd8bG9vcHxsb3d8bWFyZ2luSGVpZ2h0fG1hcmdpbldpZHRofG1heHxtYXhMZW5ndGh8bWVkaWF8bWVkaWFHcm91cHxtZXRob2R8bWlufG1pbkxlbmd0aHxtdWx0aXBsZXxtdXRlZHxuYW1lfG5vbmNlfG5vVmFsaWRhdGV8b3BlbnxvcHRpbXVtfHBhdHRlcm58cGxhY2Vob2xkZXJ8cGxheXNJbmxpbmV8cG9zdGVyfHByZWxvYWR8cHJvZmlsZXxyYWRpb0dyb3VwfHJlYWRPbmx5fHJlZmVycmVyUG9saWN5fHJlbHxyZXF1aXJlZHxyZXZlcnNlZHxyb2xlfHJvd3N8cm93U3BhbnxzYW5kYm94fHNjb3BlfHNjb3BlZHxzY3JvbGxpbmd8c2VhbWxlc3N8c2VsZWN0ZWR8c2hhcGV8c2l6ZXxzaXplc3xzbG90fHNwYW58c3BlbGxDaGVja3xzcmN8c3JjRG9jfHNyY0xhbmd8c3JjU2V0fHN0YXJ0fHN0ZXB8c3R5bGV8c3VtbWFyeXx0YWJJbmRleHx0YXJnZXR8dGl0bGV8dHlwZXx1c2VNYXB8dmFsdWV8d2lkdGh8d21vZGV8d3JhcHxhYm91dHxkYXRhdHlwZXxpbmxpc3R8cHJlZml4fHByb3BlcnR5fHJlc291cmNlfHR5cGVvZnx2b2NhYnxhdXRvQ2FwaXRhbGl6ZXxhdXRvQ29ycmVjdHxhdXRvU2F2ZXxjb2xvcnxpbmVydHxpdGVtUHJvcHxpdGVtU2NvcGV8aXRlbVR5cGV8aXRlbUlEfGl0ZW1SZWZ8b258cmVzdWx0c3xzZWN1cml0eXx1bnNlbGVjdGFibGV8YWNjZW50SGVpZ2h0fGFjY3VtdWxhdGV8YWRkaXRpdmV8YWxpZ25tZW50QmFzZWxpbmV8YWxsb3dSZW9yZGVyfGFscGhhYmV0aWN8YW1wbGl0dWRlfGFyYWJpY0Zvcm18YXNjZW50fGF0dHJpYnV0ZU5hbWV8YXR0cmlidXRlVHlwZXxhdXRvUmV2ZXJzZXxhemltdXRofGJhc2VGcmVxdWVuY3l8YmFzZWxpbmVTaGlmdHxiYXNlUHJvZmlsZXxiYm94fGJlZ2lufGJpYXN8Ynl8Y2FsY01vZGV8Y2FwSGVpZ2h0fGNsaXB8Y2xpcFBhdGhVbml0c3xjbGlwUGF0aHxjbGlwUnVsZXxjb2xvckludGVycG9sYXRpb258Y29sb3JJbnRlcnBvbGF0aW9uRmlsdGVyc3xjb2xvclByb2ZpbGV8Y29sb3JSZW5kZXJpbmd8Y29udGVudFNjcmlwdFR5cGV8Y29udGVudFN0eWxlVHlwZXxjdXJzb3J8Y3h8Y3l8ZHxkZWNlbGVyYXRlfGRlc2NlbnR8ZGlmZnVzZUNvbnN0YW50fGRpcmVjdGlvbnxkaXNwbGF5fGRpdmlzb3J8ZG9taW5hbnRCYXNlbGluZXxkdXJ8ZHh8ZHl8ZWRnZU1vZGV8ZWxldmF0aW9ufGVuYWJsZUJhY2tncm91bmR8ZW5kfGV4cG9uZW50fGV4dGVybmFsUmVzb3VyY2VzUmVxdWlyZWR8ZmlsbHxmaWxsT3BhY2l0eXxmaWxsUnVsZXxmaWx0ZXJ8ZmlsdGVyUmVzfGZpbHRlclVuaXRzfGZsb29kQ29sb3J8Zmxvb2RPcGFjaXR5fGZvY3VzYWJsZXxmb250RmFtaWx5fGZvbnRTaXplfGZvbnRTaXplQWRqdXN0fGZvbnRTdHJldGNofGZvbnRTdHlsZXxmb250VmFyaWFudHxmb250V2VpZ2h0fGZvcm1hdHxmcm9tfGZyfGZ4fGZ5fGcxfGcyfGdseXBoTmFtZXxnbHlwaE9yaWVudGF0aW9uSG9yaXpvbnRhbHxnbHlwaE9yaWVudGF0aW9uVmVydGljYWx8Z2x5cGhSZWZ8Z3JhZGllbnRUcmFuc2Zvcm18Z3JhZGllbnRVbml0c3xoYW5naW5nfGhvcml6QWR2WHxob3Jpek9yaWdpblh8aWRlb2dyYXBoaWN8aW1hZ2VSZW5kZXJpbmd8aW58aW4yfGludGVyY2VwdHxrfGsxfGsyfGszfGs0fGtlcm5lbE1hdHJpeHxrZXJuZWxVbml0TGVuZ3RofGtlcm5pbmd8a2V5UG9pbnRzfGtleVNwbGluZXN8a2V5VGltZXN8bGVuZ3RoQWRqdXN0fGxldHRlclNwYWNpbmd8bGlnaHRpbmdDb2xvcnxsaW1pdGluZ0NvbmVBbmdsZXxsb2NhbHxtYXJrZXJFbmR8bWFya2VyTWlkfG1hcmtlclN0YXJ0fG1hcmtlckhlaWdodHxtYXJrZXJVbml0c3xtYXJrZXJXaWR0aHxtYXNrfG1hc2tDb250ZW50VW5pdHN8bWFza1VuaXRzfG1hdGhlbWF0aWNhbHxtb2RlfG51bU9jdGF2ZXN8b2Zmc2V0fG9wYWNpdHl8b3BlcmF0b3J8b3JkZXJ8b3JpZW50fG9yaWVudGF0aW9ufG9yaWdpbnxvdmVyZmxvd3xvdmVybGluZVBvc2l0aW9ufG92ZXJsaW5lVGhpY2tuZXNzfHBhbm9zZTF8cGFpbnRPcmRlcnxwYXRoTGVuZ3RofHBhdHRlcm5Db250ZW50VW5pdHN8cGF0dGVyblRyYW5zZm9ybXxwYXR0ZXJuVW5pdHN8cG9pbnRlckV2ZW50c3xwb2ludHN8cG9pbnRzQXRYfHBvaW50c0F0WXxwb2ludHNBdFp8cHJlc2VydmVBbHBoYXxwcmVzZXJ2ZUFzcGVjdFJhdGlvfHByaW1pdGl2ZVVuaXRzfHJ8cmFkaXVzfHJlZlh8cmVmWXxyZW5kZXJpbmdJbnRlbnR8cmVwZWF0Q291bnR8cmVwZWF0RHVyfHJlcXVpcmVkRXh0ZW5zaW9uc3xyZXF1aXJlZEZlYXR1cmVzfHJlc3RhcnR8cmVzdWx0fHJvdGF0ZXxyeHxyeXxzY2FsZXxzZWVkfHNoYXBlUmVuZGVyaW5nfHNsb3BlfHNwYWNpbmd8c3BlY3VsYXJDb25zdGFudHxzcGVjdWxhckV4cG9uZW50fHNwZWVkfHNwcmVhZE1ldGhvZHxzdGFydE9mZnNldHxzdGREZXZpYXRpb258c3RlbWh8c3RlbXZ8c3RpdGNoVGlsZXN8c3RvcENvbG9yfHN0b3BPcGFjaXR5fHN0cmlrZXRocm91Z2hQb3NpdGlvbnxzdHJpa2V0aHJvdWdoVGhpY2tuZXNzfHN0cmluZ3xzdHJva2V8c3Ryb2tlRGFzaGFycmF5fHN0cm9rZURhc2hvZmZzZXR8c3Ryb2tlTGluZWNhcHxzdHJva2VMaW5lam9pbnxzdHJva2VNaXRlcmxpbWl0fHN0cm9rZU9wYWNpdHl8c3Ryb2tlV2lkdGh8c3VyZmFjZVNjYWxlfHN5c3RlbUxhbmd1YWdlfHRhYmxlVmFsdWVzfHRhcmdldFh8dGFyZ2V0WXx0ZXh0QW5jaG9yfHRleHREZWNvcmF0aW9ufHRleHRSZW5kZXJpbmd8dGV4dExlbmd0aHx0b3x0cmFuc2Zvcm18dTF8dTJ8dW5kZXJsaW5lUG9zaXRpb258dW5kZXJsaW5lVGhpY2tuZXNzfHVuaWNvZGV8dW5pY29kZUJpZGl8dW5pY29kZVJhbmdlfHVuaXRzUGVyRW18dkFscGhhYmV0aWN8dkhhbmdpbmd8dklkZW9ncmFwaGljfHZNYXRoZW1hdGljYWx8dmFsdWVzfHZlY3RvckVmZmVjdHx2ZXJzaW9ufHZlcnRBZHZZfHZlcnRPcmlnaW5YfHZlcnRPcmlnaW5ZfHZpZXdCb3h8dmlld1RhcmdldHx2aXNpYmlsaXR5fHdpZHRoc3x3b3JkU3BhY2luZ3x3cml0aW5nTW9kZXx4fHhIZWlnaHR8eDF8eDJ8eENoYW5uZWxTZWxlY3Rvcnx4bGlua0FjdHVhdGV8eGxpbmtBcmNyb2xlfHhsaW5rSHJlZnx4bGlua1JvbGV8eGxpbmtTaG93fHhsaW5rVGl0bGV8eGxpbmtUeXBlfHhtbEJhc2V8eG1sbnN8eG1sbnNYbGlua3x4bWxMYW5nfHhtbFNwYWNlfHl8eTF8eTJ8eUNoYW5uZWxTZWxlY3Rvcnx6fHpvb21BbmRQYW58Zm9yfGNsYXNzfGF1dG9mb2N1cyl8KChbRGRdW0FhXVtUdF1bQWFdfFtBYV1bUnJdW0lpXVtBYV18eCktLiopKSQvOyAvLyBodHRwczovL2VzYmVuY2guY29tL2JlbmNoLzViZmVlNjhhNGNkN2U2MDA5ZWY2MWQyM1xuXG52YXIgaW5kZXggPSBtZW1vaXplKGZ1bmN0aW9uIChwcm9wKSB7XG4gIHJldHVybiByZWFjdFByb3BzUmVnZXgudGVzdChwcm9wKSB8fCBwcm9wLmNoYXJDb2RlQXQoMCkgPT09IDExMVxuICAvKiBvICovXG4gICYmIHByb3AuY2hhckNvZGVBdCgxKSA9PT0gMTEwXG4gIC8qIG4gKi9cbiAgJiYgcHJvcC5jaGFyQ29kZUF0KDIpIDwgOTE7XG59XG4vKiBaKzEgKi9cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuIiwiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gY2hlY2tEQ0UoKSB7XG4gIC8qIGdsb2JhbCBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gKi9cbiAgaWYgKFxuICAgIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gPT09ICd1bmRlZmluZWQnIHx8XG4gICAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5jaGVja0RDRSAhPT0gJ2Z1bmN0aW9uJ1xuICApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBUaGlzIGJyYW5jaCBpcyB1bnJlYWNoYWJsZSBiZWNhdXNlIHRoaXMgZnVuY3Rpb24gaXMgb25seSBjYWxsZWRcbiAgICAvLyBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGNvbmRpdGlvbiBpcyB0cnVlIG9ubHkgaW4gZGV2ZWxvcG1lbnQuXG4gICAgLy8gVGhlcmVmb3JlIGlmIHRoZSBicmFuY2ggaXMgc3RpbGwgaGVyZSwgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdhc24ndFxuICAgIC8vIHByb3Blcmx5IGFwcGxpZWQuXG4gICAgLy8gRG9uJ3QgY2hhbmdlIHRoZSBtZXNzYWdlLiBSZWFjdCBEZXZUb29scyByZWxpZXMgb24gaXQuIEFsc28gbWFrZSBzdXJlXG4gICAgLy8gdGhpcyBtZXNzYWdlIGRvZXNuJ3Qgb2NjdXIgZWxzZXdoZXJlIGluIHRoaXMgZnVuY3Rpb24sIG9yIGl0IHdpbGwgY2F1c2VcbiAgICAvLyBhIGZhbHNlIHBvc2l0aXZlLlxuICAgIHRocm93IG5ldyBFcnJvcignXl9eJyk7XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBWZXJpZnkgdGhhdCB0aGUgY29kZSBhYm92ZSBoYXMgYmVlbiBkZWFkIGNvZGUgZWxpbWluYXRlZCAoRENFJ2QpLlxuICAgIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5jaGVja0RDRShjaGVja0RDRSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIERldlRvb2xzIHNob3VsZG4ndCBjcmFzaCBSZWFjdCwgbm8gbWF0dGVyIHdoYXQuXG4gICAgLy8gV2Ugc2hvdWxkIHN0aWxsIHJlcG9ydCBpbiBjYXNlIHdlIGJyZWFrIHRoaXMgY29kZS5cbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gIH1cbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgLy8gRENFIGNoZWNrIHNob3VsZCBoYXBwZW4gYmVmb3JlIFJlYWN0RE9NIGJ1bmRsZSBleGVjdXRlcyBzbyB0aGF0XG4gIC8vIERldlRvb2xzIGNhbiByZXBvcnQgYmFkIG1pbmlmaWNhdGlvbiBkdXJpbmcgaW5qZWN0aW9uLlxuICBjaGVja0RDRSgpO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWRvbS5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1kb20uZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsImltcG9ydCBiYXNlU3R5bGVkLCB7IFRoZW1lZFN0eWxlZEludGVyZmFjZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgVGhlbWVQcm9wZXJ0aWVzIH0gZnJvbSBcIi4vdGhlbWVcIjtcblxuY29uc3Qgc3R5bGVkID0gYmFzZVN0eWxlZCBhcyBUaGVtZWRTdHlsZWRJbnRlcmZhY2U8VGhlbWVQcm9wZXJ0aWVzPjtcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkO1xuIiwiLy9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzaGFsbG93RXF1YWwob2JqQSwgb2JqQiwgY29tcGFyZSwgY29tcGFyZUNvbnRleHQpIHtcbiAgdmFyIHJldCA9IGNvbXBhcmUgPyBjb21wYXJlLmNhbGwoY29tcGFyZUNvbnRleHQsIG9iakEsIG9iakIpIDogdm9pZCAwO1xuXG4gIGlmIChyZXQgIT09IHZvaWQgMCkge1xuICAgIHJldHVybiAhIXJldDtcbiAgfVxuXG4gIGlmIChvYmpBID09PSBvYmpCKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIG9iakEgIT09IFwib2JqZWN0XCIgfHwgIW9iakEgfHwgdHlwZW9mIG9iakIgIT09IFwib2JqZWN0XCIgfHwgIW9iakIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIga2V5c0EgPSBPYmplY3Qua2V5cyhvYmpBKTtcbiAgdmFyIGtleXNCID0gT2JqZWN0LmtleXMob2JqQik7XG5cbiAgaWYgKGtleXNBLmxlbmd0aCAhPT0ga2V5c0IubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGJIYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuYmluZChvYmpCKTtcblxuICAvLyBUZXN0IGZvciBBJ3Mga2V5cyBkaWZmZXJlbnQgZnJvbSBCLlxuICBmb3IgKHZhciBpZHggPSAwOyBpZHggPCBrZXlzQS5sZW5ndGg7IGlkeCsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNBW2lkeF07XG5cbiAgICBpZiAoIWJIYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlQSA9IG9iakFba2V5XTtcbiAgICB2YXIgdmFsdWVCID0gb2JqQltrZXldO1xuXG4gICAgcmV0ID0gY29tcGFyZSA/IGNvbXBhcmUuY2FsbChjb21wYXJlQ29udGV4dCwgdmFsdWVBLCB2YWx1ZUIsIGtleSkgOiB2b2lkIDA7XG5cbiAgICBpZiAocmV0ID09PSBmYWxzZSB8fCAocmV0ID09PSB2b2lkIDAgJiYgdmFsdWVBICE9PSB2YWx1ZUIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuIiwiZnVuY3Rpb24gc3R5bGlzX21pbiAoVykge1xuICBmdW5jdGlvbiBNKGQsIGMsIGUsIGgsIGEpIHtcbiAgICBmb3IgKHZhciBtID0gMCwgYiA9IDAsIHYgPSAwLCBuID0gMCwgcSwgZywgeCA9IDAsIEsgPSAwLCBrLCB1ID0gayA9IHEgPSAwLCBsID0gMCwgciA9IDAsIEkgPSAwLCB0ID0gMCwgQiA9IGUubGVuZ3RoLCBKID0gQiAtIDEsIHksIGYgPSAnJywgcCA9ICcnLCBGID0gJycsIEcgPSAnJywgQzsgbCA8IEI7KSB7XG4gICAgICBnID0gZS5jaGFyQ29kZUF0KGwpO1xuICAgICAgbCA9PT0gSiAmJiAwICE9PSBiICsgbiArIHYgKyBtICYmICgwICE9PSBiICYmIChnID0gNDcgPT09IGIgPyAxMCA6IDQ3KSwgbiA9IHYgPSBtID0gMCwgQisrLCBKKyspO1xuXG4gICAgICBpZiAoMCA9PT0gYiArIG4gKyB2ICsgbSkge1xuICAgICAgICBpZiAobCA9PT0gSiAmJiAoMCA8IHIgJiYgKGYgPSBmLnJlcGxhY2UoTiwgJycpKSwgMCA8IGYudHJpbSgpLmxlbmd0aCkpIHtcbiAgICAgICAgICBzd2l0Y2ggKGcpIHtcbiAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICBjYXNlIDU5OlxuICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBmICs9IGUuY2hhckF0KGwpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGcgPSA1OTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAoZykge1xuICAgICAgICAgIGNhc2UgMTIzOlxuICAgICAgICAgICAgZiA9IGYudHJpbSgpO1xuICAgICAgICAgICAgcSA9IGYuY2hhckNvZGVBdCgwKTtcbiAgICAgICAgICAgIGsgPSAxO1xuXG4gICAgICAgICAgICBmb3IgKHQgPSArK2w7IGwgPCBCOykge1xuICAgICAgICAgICAgICBzd2l0Y2ggKGcgPSBlLmNoYXJDb2RlQXQobCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDEyMzpcbiAgICAgICAgICAgICAgICAgIGsrKztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAxMjU6XG4gICAgICAgICAgICAgICAgICBrLS07XG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgNDc6XG4gICAgICAgICAgICAgICAgICBzd2l0Y2ggKGcgPSBlLmNoYXJDb2RlQXQobCArIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDI6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDc6XG4gICAgICAgICAgICAgICAgICAgICAgYToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh1ID0gbCArIDE7IHUgPCBKOyArK3UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChlLmNoYXJDb2RlQXQodSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDQyID09PSBnICYmIDQyID09PSBlLmNoYXJDb2RlQXQodSAtIDEpICYmIGwgKyAyICE9PSB1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwgPSB1ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWsgYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDQ3ID09PSBnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwgPSB1ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWsgYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGwgPSB1O1xuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgOTE6XG4gICAgICAgICAgICAgICAgICBnKys7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgICAgZysrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAzNDpcbiAgICAgICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgICAgZm9yICg7IGwrKyA8IEogJiYgZS5jaGFyQ29kZUF0KGwpICE9PSBnOykge1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoMCA9PT0gaykgYnJlYWs7XG4gICAgICAgICAgICAgIGwrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgayA9IGUuc3Vic3RyaW5nKHQsIGwpO1xuICAgICAgICAgICAgMCA9PT0gcSAmJiAocSA9IChmID0gZi5yZXBsYWNlKGNhLCAnJykudHJpbSgpKS5jaGFyQ29kZUF0KDApKTtcblxuICAgICAgICAgICAgc3dpdGNoIChxKSB7XG4gICAgICAgICAgICAgIGNhc2UgNjQ6XG4gICAgICAgICAgICAgICAgMCA8IHIgJiYgKGYgPSBmLnJlcGxhY2UoTiwgJycpKTtcbiAgICAgICAgICAgICAgICBnID0gZi5jaGFyQ29kZUF0KDEpO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChnKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIDEwMDpcbiAgICAgICAgICAgICAgICAgIGNhc2UgMTA5OlxuICAgICAgICAgICAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgICAgICAgICBjYXNlIDQ1OlxuICAgICAgICAgICAgICAgICAgICByID0gYztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHIgPSBPO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGsgPSBNKGMsIHIsIGssIGcsIGEgKyAxKTtcbiAgICAgICAgICAgICAgICB0ID0gay5sZW5ndGg7XG4gICAgICAgICAgICAgICAgMCA8IEEgJiYgKHIgPSBYKE8sIGYsIEkpLCBDID0gSCgzLCBrLCByLCBjLCBELCB6LCB0LCBnLCBhLCBoKSwgZiA9IHIuam9pbignJyksIHZvaWQgMCAhPT0gQyAmJiAwID09PSAodCA9IChrID0gQy50cmltKCkpLmxlbmd0aCkgJiYgKGcgPSAwLCBrID0gJycpKTtcbiAgICAgICAgICAgICAgICBpZiAoMCA8IHQpIHN3aXRjaCAoZykge1xuICAgICAgICAgICAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgICAgICAgICAgIGYgPSBmLnJlcGxhY2UoZGEsIGVhKTtcblxuICAgICAgICAgICAgICAgICAgY2FzZSAxMDA6XG4gICAgICAgICAgICAgICAgICBjYXNlIDEwOTpcbiAgICAgICAgICAgICAgICAgIGNhc2UgNDU6XG4gICAgICAgICAgICAgICAgICAgIGsgPSBmICsgJ3snICsgayArICd9JztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgMTA3OlxuICAgICAgICAgICAgICAgICAgICBmID0gZi5yZXBsYWNlKGZhLCAnJDEgJDInKTtcbiAgICAgICAgICAgICAgICAgICAgayA9IGYgKyAneycgKyBrICsgJ30nO1xuICAgICAgICAgICAgICAgICAgICBrID0gMSA9PT0gdyB8fCAyID09PSB3ICYmIEwoJ0AnICsgaywgMykgPyAnQC13ZWJraXQtJyArIGsgKyAnQCcgKyBrIDogJ0AnICsgaztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGsgPSBmICsgaywgMTEyID09PSBoICYmIChrID0gKHAgKz0gaywgJycpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgayA9ICcnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgayA9IE0oYywgWChjLCBmLCBJKSwgaywgaCwgYSArIDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBGICs9IGs7XG4gICAgICAgICAgICBrID0gSSA9IHIgPSB1ID0gcSA9IDA7XG4gICAgICAgICAgICBmID0gJyc7XG4gICAgICAgICAgICBnID0gZS5jaGFyQ29kZUF0KCsrbCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMTI1OlxuICAgICAgICAgIGNhc2UgNTk6XG4gICAgICAgICAgICBmID0gKDAgPCByID8gZi5yZXBsYWNlKE4sICcnKSA6IGYpLnRyaW0oKTtcbiAgICAgICAgICAgIGlmICgxIDwgKHQgPSBmLmxlbmd0aCkpIHN3aXRjaCAoMCA9PT0gdSAmJiAocSA9IGYuY2hhckNvZGVBdCgwKSwgNDUgPT09IHEgfHwgOTYgPCBxICYmIDEyMyA+IHEpICYmICh0ID0gKGYgPSBmLnJlcGxhY2UoJyAnLCAnOicpKS5sZW5ndGgpLCAwIDwgQSAmJiB2b2lkIDAgIT09IChDID0gSCgxLCBmLCBjLCBkLCBELCB6LCBwLmxlbmd0aCwgaCwgYSwgaCkpICYmIDAgPT09ICh0ID0gKGYgPSBDLnRyaW0oKSkubGVuZ3RoKSAmJiAoZiA9ICdcXHgwMFxceDAwJyksIHEgPSBmLmNoYXJDb2RlQXQoMCksIGcgPSBmLmNoYXJDb2RlQXQoMSksIHEpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgNjQ6XG4gICAgICAgICAgICAgICAgaWYgKDEwNSA9PT0gZyB8fCA5OSA9PT0gZykge1xuICAgICAgICAgICAgICAgICAgRyArPSBmICsgZS5jaGFyQXQobCk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICA1OCAhPT0gZi5jaGFyQ29kZUF0KHQgLSAxKSAmJiAocCArPSBQKGYsIHEsIGcsIGYuY2hhckNvZGVBdCgyKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgSSA9IHIgPSB1ID0gcSA9IDA7XG4gICAgICAgICAgICBmID0gJyc7XG4gICAgICAgICAgICBnID0gZS5jaGFyQ29kZUF0KCsrbCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc3dpdGNoIChnKSB7XG4gICAgICAgIGNhc2UgMTM6XG4gICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgNDcgPT09IGIgPyBiID0gMCA6IDAgPT09IDEgKyBxICYmIDEwNyAhPT0gaCAmJiAwIDwgZi5sZW5ndGggJiYgKHIgPSAxLCBmICs9ICdcXHgwMCcpO1xuICAgICAgICAgIDAgPCBBICogWSAmJiBIKDAsIGYsIGMsIGQsIEQsIHosIHAubGVuZ3RoLCBoLCBhLCBoKTtcbiAgICAgICAgICB6ID0gMTtcbiAgICAgICAgICBEKys7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA1OTpcbiAgICAgICAgY2FzZSAxMjU6XG4gICAgICAgICAgaWYgKDAgPT09IGIgKyBuICsgdiArIG0pIHtcbiAgICAgICAgICAgIHorKztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHorKztcbiAgICAgICAgICB5ID0gZS5jaGFyQXQobCk7XG5cbiAgICAgICAgICBzd2l0Y2ggKGcpIHtcbiAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICAgIGlmICgwID09PSBuICsgbSArIGIpIHN3aXRjaCAoeCkge1xuICAgICAgICAgICAgICAgIGNhc2UgNDQ6XG4gICAgICAgICAgICAgICAgY2FzZSA1ODpcbiAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgICAgICAgIHkgPSAnJztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIDMyICE9PSBnICYmICh5ID0gJyAnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICB5ID0gJ1xcXFwwJztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgIHkgPSAnXFxcXGYnO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgICAgeSA9ICdcXFxcdic7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAwID09PSBuICsgYiArIG0gJiYgKHIgPSBJID0gMSwgeSA9ICdcXGYnICsgeSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDEwODpcbiAgICAgICAgICAgICAgaWYgKDAgPT09IG4gKyBiICsgbSArIEUgJiYgMCA8IHUpIHN3aXRjaCAobCAtIHUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAxMTIgPT09IHggJiYgNTggPT09IGUuY2hhckNvZGVBdChsIC0gMykgJiYgKEUgPSB4KTtcblxuICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgIDExMSA9PT0gSyAmJiAoRSA9IEspO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDU4OlxuICAgICAgICAgICAgICAwID09PSBuICsgYiArIG0gJiYgKHUgPSBsKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNDQ6XG4gICAgICAgICAgICAgIDAgPT09IGIgKyB2ICsgbiArIG0gJiYgKHIgPSAxLCB5ICs9ICdcXHInKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMzQ6XG4gICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAwID09PSBiICYmIChuID0gbiA9PT0gZyA/IDAgOiAwID09PSBuID8gZyA6IG4pO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA5MTpcbiAgICAgICAgICAgICAgMCA9PT0gbiArIGIgKyB2ICYmIG0rKztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgOTM6XG4gICAgICAgICAgICAgIDAgPT09IG4gKyBiICsgdiAmJiBtLS07XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDQxOlxuICAgICAgICAgICAgICAwID09PSBuICsgYiArIG0gJiYgdi0tO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgaWYgKDAgPT09IG4gKyBiICsgbSkge1xuICAgICAgICAgICAgICAgIGlmICgwID09PSBxKSBzd2l0Y2ggKDIgKiB4ICsgMyAqIEspIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgNTMzOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcSA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHYrKztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDY0OlxuICAgICAgICAgICAgICAwID09PSBiICsgdiArIG4gKyBtICsgdSArIGsgJiYgKGsgPSAxKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNDI6XG4gICAgICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgICAgICBpZiAoISgwIDwgbiArIG0gKyB2KSkgc3dpdGNoIChiKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgc3dpdGNoICgyICogZyArIDMgKiBlLmNoYXJDb2RlQXQobCArIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjM1OlxuICAgICAgICAgICAgICAgICAgICAgIGIgPSA0NztcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIDIyMDpcbiAgICAgICAgICAgICAgICAgICAgICB0ID0gbCwgYiA9IDQyO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgNDI6XG4gICAgICAgICAgICAgICAgICA0NyA9PT0gZyAmJiA0MiA9PT0geCAmJiB0ICsgMiAhPT0gbCAmJiAoMzMgPT09IGUuY2hhckNvZGVBdCh0ICsgMikgJiYgKHAgKz0gZS5zdWJzdHJpbmcodCwgbCArIDEpKSwgeSA9ICcnLCBiID0gMCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAwID09PSBiICYmIChmICs9IHkpO1xuICAgICAgfVxuXG4gICAgICBLID0geDtcbiAgICAgIHggPSBnO1xuICAgICAgbCsrO1xuICAgIH1cblxuICAgIHQgPSBwLmxlbmd0aDtcblxuICAgIGlmICgwIDwgdCkge1xuICAgICAgciA9IGM7XG4gICAgICBpZiAoMCA8IEEgJiYgKEMgPSBIKDIsIHAsIHIsIGQsIEQsIHosIHQsIGgsIGEsIGgpLCB2b2lkIDAgIT09IEMgJiYgMCA9PT0gKHAgPSBDKS5sZW5ndGgpKSByZXR1cm4gRyArIHAgKyBGO1xuICAgICAgcCA9IHIuam9pbignLCcpICsgJ3snICsgcCArICd9JztcblxuICAgICAgaWYgKDAgIT09IHcgKiBFKSB7XG4gICAgICAgIDIgIT09IHcgfHwgTChwLCAyKSB8fCAoRSA9IDApO1xuXG4gICAgICAgIHN3aXRjaCAoRSkge1xuICAgICAgICAgIGNhc2UgMTExOlxuICAgICAgICAgICAgcCA9IHAucmVwbGFjZShoYSwgJzotbW96LSQxJykgKyBwO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDExMjpcbiAgICAgICAgICAgIHAgPSBwLnJlcGxhY2UoUSwgJzo6LXdlYmtpdC1pbnB1dC0kMScpICsgcC5yZXBsYWNlKFEsICc6Oi1tb3otJDEnKSArIHAucmVwbGFjZShRLCAnOi1tcy1pbnB1dC0kMScpICsgcDtcbiAgICAgICAgfVxuXG4gICAgICAgIEUgPSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBHICsgcCArIEY7XG4gIH1cblxuICBmdW5jdGlvbiBYKGQsIGMsIGUpIHtcbiAgICB2YXIgaCA9IGMudHJpbSgpLnNwbGl0KGlhKTtcbiAgICBjID0gaDtcbiAgICB2YXIgYSA9IGgubGVuZ3RoLFxuICAgICAgICBtID0gZC5sZW5ndGg7XG5cbiAgICBzd2l0Y2ggKG0pIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgdmFyIGIgPSAwO1xuXG4gICAgICAgIGZvciAoZCA9IDAgPT09IG0gPyAnJyA6IGRbMF0gKyAnICc7IGIgPCBhOyArK2IpIHtcbiAgICAgICAgICBjW2JdID0gWihkLCBjW2JdLCBlKS50cmltKCk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdmFyIHYgPSBiID0gMDtcblxuICAgICAgICBmb3IgKGMgPSBbXTsgYiA8IGE7ICsrYikge1xuICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgbTsgKytuKSB7XG4gICAgICAgICAgICBjW3YrK10gPSBaKGRbbl0gKyAnICcsIGhbYl0sIGUpLnRyaW0oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiBjO1xuICB9XG5cbiAgZnVuY3Rpb24gWihkLCBjLCBlKSB7XG4gICAgdmFyIGggPSBjLmNoYXJDb2RlQXQoMCk7XG4gICAgMzMgPiBoICYmIChoID0gKGMgPSBjLnRyaW0oKSkuY2hhckNvZGVBdCgwKSk7XG5cbiAgICBzd2l0Y2ggKGgpIHtcbiAgICAgIGNhc2UgMzg6XG4gICAgICAgIHJldHVybiBjLnJlcGxhY2UoRiwgJyQxJyArIGQudHJpbSgpKTtcblxuICAgICAgY2FzZSA1ODpcbiAgICAgICAgcmV0dXJuIGQudHJpbSgpICsgYy5yZXBsYWNlKEYsICckMScgKyBkLnRyaW0oKSk7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmICgwIDwgMSAqIGUgJiYgMCA8IGMuaW5kZXhPZignXFxmJykpIHJldHVybiBjLnJlcGxhY2UoRiwgKDU4ID09PSBkLmNoYXJDb2RlQXQoMCkgPyAnJyA6ICckMScpICsgZC50cmltKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBkICsgYztcbiAgfVxuXG4gIGZ1bmN0aW9uIFAoZCwgYywgZSwgaCkge1xuICAgIHZhciBhID0gZCArICc7JyxcbiAgICAgICAgbSA9IDIgKiBjICsgMyAqIGUgKyA0ICogaDtcblxuICAgIGlmICg5NDQgPT09IG0pIHtcbiAgICAgIGQgPSBhLmluZGV4T2YoJzonLCA5KSArIDE7XG4gICAgICB2YXIgYiA9IGEuc3Vic3RyaW5nKGQsIGEubGVuZ3RoIC0gMSkudHJpbSgpO1xuICAgICAgYiA9IGEuc3Vic3RyaW5nKDAsIGQpLnRyaW0oKSArIGIgKyAnOyc7XG4gICAgICByZXR1cm4gMSA9PT0gdyB8fCAyID09PSB3ICYmIEwoYiwgMSkgPyAnLXdlYmtpdC0nICsgYiArIGIgOiBiO1xuICAgIH1cblxuICAgIGlmICgwID09PSB3IHx8IDIgPT09IHcgJiYgIUwoYSwgMSkpIHJldHVybiBhO1xuXG4gICAgc3dpdGNoIChtKSB7XG4gICAgICBjYXNlIDEwMTU6XG4gICAgICAgIHJldHVybiA5NyA9PT0gYS5jaGFyQ29kZUF0KDEwKSA/ICctd2Via2l0LScgKyBhICsgYSA6IGE7XG5cbiAgICAgIGNhc2UgOTUxOlxuICAgICAgICByZXR1cm4gMTE2ID09PSBhLmNoYXJDb2RlQXQoMykgPyAnLXdlYmtpdC0nICsgYSArIGEgOiBhO1xuXG4gICAgICBjYXNlIDk2MzpcbiAgICAgICAgcmV0dXJuIDExMCA9PT0gYS5jaGFyQ29kZUF0KDUpID8gJy13ZWJraXQtJyArIGEgKyBhIDogYTtcblxuICAgICAgY2FzZSAxMDA5OlxuICAgICAgICBpZiAoMTAwICE9PSBhLmNoYXJDb2RlQXQoNCkpIGJyZWFrO1xuXG4gICAgICBjYXNlIDk2OTpcbiAgICAgIGNhc2UgOTQyOlxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyBhO1xuXG4gICAgICBjYXNlIDk3ODpcbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tb3otJyArIGEgKyBhO1xuXG4gICAgICBjYXNlIDEwMTk6XG4gICAgICBjYXNlIDk4MzpcbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tb3otJyArIGEgKyAnLW1zLScgKyBhICsgYTtcblxuICAgICAgY2FzZSA4ODM6XG4gICAgICAgIGlmICg0NSA9PT0gYS5jaGFyQ29kZUF0KDgpKSByZXR1cm4gJy13ZWJraXQtJyArIGEgKyBhO1xuICAgICAgICBpZiAoMCA8IGEuaW5kZXhPZignaW1hZ2Utc2V0KCcsIDExKSkgcmV0dXJuIGEucmVwbGFjZShqYSwgJyQxLXdlYmtpdC0kMicpICsgYTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTMyOlxuICAgICAgICBpZiAoNDUgPT09IGEuY2hhckNvZGVBdCg0KSkgc3dpdGNoIChhLmNoYXJDb2RlQXQoNSkpIHtcbiAgICAgICAgICBjYXNlIDEwMzpcbiAgICAgICAgICAgIHJldHVybiAnLXdlYmtpdC1ib3gtJyArIGEucmVwbGFjZSgnLWdyb3cnLCAnJykgKyAnLXdlYmtpdC0nICsgYSArICctbXMtJyArIGEucmVwbGFjZSgnZ3JvdycsICdwb3NpdGl2ZScpICsgYTtcblxuICAgICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy0nICsgYS5yZXBsYWNlKCdzaHJpbmsnLCAnbmVnYXRpdmUnKSArIGE7XG5cbiAgICAgICAgICBjYXNlIDk4OlxuICAgICAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy0nICsgYS5yZXBsYWNlKCdiYXNpcycsICdwcmVmZXJyZWQtc2l6ZScpICsgYTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLScgKyBhICsgYTtcblxuICAgICAgY2FzZSA5NjQ6XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtZmxleC0nICsgYSArIGE7XG5cbiAgICAgIGNhc2UgMTAyMzpcbiAgICAgICAgaWYgKDk5ICE9PSBhLmNoYXJDb2RlQXQoOCkpIGJyZWFrO1xuICAgICAgICBiID0gYS5zdWJzdHJpbmcoYS5pbmRleE9mKCc6JywgMTUpKS5yZXBsYWNlKCdmbGV4LScsICcnKS5yZXBsYWNlKCdzcGFjZS1iZXR3ZWVuJywgJ2p1c3RpZnknKTtcbiAgICAgICAgcmV0dXJuICctd2Via2l0LWJveC1wYWNrJyArIGIgKyAnLXdlYmtpdC0nICsgYSArICctbXMtZmxleC1wYWNrJyArIGIgKyBhO1xuXG4gICAgICBjYXNlIDEwMDU6XG4gICAgICAgIHJldHVybiBrYS50ZXN0KGEpID8gYS5yZXBsYWNlKGFhLCAnOi13ZWJraXQtJykgKyBhLnJlcGxhY2UoYWEsICc6LW1vei0nKSArIGEgOiBhO1xuXG4gICAgICBjYXNlIDFlMzpcbiAgICAgICAgYiA9IGEuc3Vic3RyaW5nKDEzKS50cmltKCk7XG4gICAgICAgIGMgPSBiLmluZGV4T2YoJy0nKSArIDE7XG5cbiAgICAgICAgc3dpdGNoIChiLmNoYXJDb2RlQXQoMCkgKyBiLmNoYXJDb2RlQXQoYykpIHtcbiAgICAgICAgICBjYXNlIDIyNjpcbiAgICAgICAgICAgIGIgPSBhLnJlcGxhY2UoRywgJ3RiJyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMjMyOlxuICAgICAgICAgICAgYiA9IGEucmVwbGFjZShHLCAndGItcmwnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAyMjA6XG4gICAgICAgICAgICBiID0gYS5yZXBsYWNlKEcsICdscicpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLScgKyBiICsgYTtcblxuICAgICAgY2FzZSAxMDE3OlxuICAgICAgICBpZiAoLTEgPT09IGEuaW5kZXhPZignc3RpY2t5JywgOSkpIGJyZWFrO1xuXG4gICAgICBjYXNlIDk3NTpcbiAgICAgICAgYyA9IChhID0gZCkubGVuZ3RoIC0gMTA7XG4gICAgICAgIGIgPSAoMzMgPT09IGEuY2hhckNvZGVBdChjKSA/IGEuc3Vic3RyaW5nKDAsIGMpIDogYSkuc3Vic3RyaW5nKGQuaW5kZXhPZignOicsIDcpICsgMSkudHJpbSgpO1xuXG4gICAgICAgIHN3aXRjaCAobSA9IGIuY2hhckNvZGVBdCgwKSArIChiLmNoYXJDb2RlQXQoNykgfCAwKSkge1xuICAgICAgICAgIGNhc2UgMjAzOlxuICAgICAgICAgICAgaWYgKDExMSA+IGIuY2hhckNvZGVBdCg4KSkgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDExNTpcbiAgICAgICAgICAgIGEgPSBhLnJlcGxhY2UoYiwgJy13ZWJraXQtJyArIGIpICsgJzsnICsgYTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAyMDc6XG4gICAgICAgICAgY2FzZSAxMDI6XG4gICAgICAgICAgICBhID0gYS5yZXBsYWNlKGIsICctd2Via2l0LScgKyAoMTAyIDwgbSA/ICdpbmxpbmUtJyA6ICcnKSArICdib3gnKSArICc7JyArIGEucmVwbGFjZShiLCAnLXdlYmtpdC0nICsgYikgKyAnOycgKyBhLnJlcGxhY2UoYiwgJy1tcy0nICsgYiArICdib3gnKSArICc7JyArIGE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYSArICc7JztcblxuICAgICAgY2FzZSA5Mzg6XG4gICAgICAgIGlmICg0NSA9PT0gYS5jaGFyQ29kZUF0KDUpKSBzd2l0Y2ggKGEuY2hhckNvZGVBdCg2KSkge1xuICAgICAgICAgIGNhc2UgMTA1OlxuICAgICAgICAgICAgcmV0dXJuIGIgPSBhLnJlcGxhY2UoJy1pdGVtcycsICcnKSwgJy13ZWJraXQtJyArIGEgKyAnLXdlYmtpdC1ib3gtJyArIGIgKyAnLW1zLWZsZXgtJyArIGIgKyBhO1xuXG4gICAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLWZsZXgtaXRlbS0nICsgYS5yZXBsYWNlKGJhLCAnJykgKyBhO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtZmxleC1saW5lLXBhY2snICsgYS5yZXBsYWNlKCdhbGlnbi1jb250ZW50JywgJycpLnJlcGxhY2UoYmEsICcnKSArIGE7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTczOlxuICAgICAgY2FzZSA5ODk6XG4gICAgICAgIGlmICg0NSAhPT0gYS5jaGFyQ29kZUF0KDMpIHx8IDEyMiA9PT0gYS5jaGFyQ29kZUF0KDQpKSBicmVhaztcblxuICAgICAgY2FzZSA5MzE6XG4gICAgICBjYXNlIDk1MzpcbiAgICAgICAgaWYgKCEwID09PSBsYS50ZXN0KGQpKSByZXR1cm4gMTE1ID09PSAoYiA9IGQuc3Vic3RyaW5nKGQuaW5kZXhPZignOicpICsgMSkpLmNoYXJDb2RlQXQoMCkgPyBQKGQucmVwbGFjZSgnc3RyZXRjaCcsICdmaWxsLWF2YWlsYWJsZScpLCBjLCBlLCBoKS5yZXBsYWNlKCc6ZmlsbC1hdmFpbGFibGUnLCAnOnN0cmV0Y2gnKSA6IGEucmVwbGFjZShiLCAnLXdlYmtpdC0nICsgYikgKyBhLnJlcGxhY2UoYiwgJy1tb3otJyArIGIucmVwbGFjZSgnZmlsbC0nLCAnJykpICsgYTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTYyOlxuICAgICAgICBpZiAoYSA9ICctd2Via2l0LScgKyBhICsgKDEwMiA9PT0gYS5jaGFyQ29kZUF0KDUpID8gJy1tcy0nICsgYSA6ICcnKSArIGEsIDIxMSA9PT0gZSArIGggJiYgMTA1ID09PSBhLmNoYXJDb2RlQXQoMTMpICYmIDAgPCBhLmluZGV4T2YoJ3RyYW5zZm9ybScsIDEwKSkgcmV0dXJuIGEuc3Vic3RyaW5nKDAsIGEuaW5kZXhPZignOycsIDI3KSArIDEpLnJlcGxhY2UobWEsICckMS13ZWJraXQtJDInKSArIGE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGE7XG4gIH1cblxuICBmdW5jdGlvbiBMKGQsIGMpIHtcbiAgICB2YXIgZSA9IGQuaW5kZXhPZigxID09PSBjID8gJzonIDogJ3snKSxcbiAgICAgICAgaCA9IGQuc3Vic3RyaW5nKDAsIDMgIT09IGMgPyBlIDogMTApO1xuICAgIGUgPSBkLnN1YnN0cmluZyhlICsgMSwgZC5sZW5ndGggLSAxKTtcbiAgICByZXR1cm4gUigyICE9PSBjID8gaCA6IGgucmVwbGFjZShuYSwgJyQxJyksIGUsIGMpO1xuICB9XG5cbiAgZnVuY3Rpb24gZWEoZCwgYykge1xuICAgIHZhciBlID0gUChjLCBjLmNoYXJDb2RlQXQoMCksIGMuY2hhckNvZGVBdCgxKSwgYy5jaGFyQ29kZUF0KDIpKTtcbiAgICByZXR1cm4gZSAhPT0gYyArICc7JyA/IGUucmVwbGFjZShvYSwgJyBvciAoJDEpJykuc3Vic3RyaW5nKDQpIDogJygnICsgYyArICcpJztcbiAgfVxuXG4gIGZ1bmN0aW9uIEgoZCwgYywgZSwgaCwgYSwgbSwgYiwgdiwgbiwgcSkge1xuICAgIGZvciAodmFyIGcgPSAwLCB4ID0gYywgdzsgZyA8IEE7ICsrZykge1xuICAgICAgc3dpdGNoICh3ID0gU1tnXS5jYWxsKEIsIGQsIHgsIGUsIGgsIGEsIG0sIGIsIHYsIG4sIHEpKSB7XG4gICAgICAgIGNhc2Ugdm9pZCAwOlxuICAgICAgICBjYXNlICExOlxuICAgICAgICBjYXNlICEwOlxuICAgICAgICBjYXNlIG51bGw6XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB4ID0gdztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoeCAhPT0gYykgcmV0dXJuIHg7XG4gIH1cblxuICBmdW5jdGlvbiBUKGQpIHtcbiAgICBzd2l0Y2ggKGQpIHtcbiAgICAgIGNhc2Ugdm9pZCAwOlxuICAgICAgY2FzZSBudWxsOlxuICAgICAgICBBID0gUy5sZW5ndGggPSAwO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBkKSBTW0ErK10gPSBkO2Vsc2UgaWYgKCdvYmplY3QnID09PSB0eXBlb2YgZCkgZm9yICh2YXIgYyA9IDAsIGUgPSBkLmxlbmd0aDsgYyA8IGU7ICsrYykge1xuICAgICAgICAgIFQoZFtjXSk7XG4gICAgICAgIH0gZWxzZSBZID0gISFkIHwgMDtcbiAgICB9XG5cbiAgICByZXR1cm4gVDtcbiAgfVxuXG4gIGZ1bmN0aW9uIFUoZCkge1xuICAgIGQgPSBkLnByZWZpeDtcbiAgICB2b2lkIDAgIT09IGQgJiYgKFIgPSBudWxsLCBkID8gJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGQgPyB3ID0gMSA6ICh3ID0gMiwgUiA9IGQpIDogdyA9IDApO1xuICAgIHJldHVybiBVO1xuICB9XG5cbiAgZnVuY3Rpb24gQihkLCBjKSB7XG4gICAgdmFyIGUgPSBkO1xuICAgIDMzID4gZS5jaGFyQ29kZUF0KDApICYmIChlID0gZS50cmltKCkpO1xuICAgIFYgPSBlO1xuICAgIGUgPSBbVl07XG5cbiAgICBpZiAoMCA8IEEpIHtcbiAgICAgIHZhciBoID0gSCgtMSwgYywgZSwgZSwgRCwgeiwgMCwgMCwgMCwgMCk7XG4gICAgICB2b2lkIDAgIT09IGggJiYgJ3N0cmluZycgPT09IHR5cGVvZiBoICYmIChjID0gaCk7XG4gICAgfVxuXG4gICAgdmFyIGEgPSBNKE8sIGUsIGMsIDAsIDApO1xuICAgIDAgPCBBICYmIChoID0gSCgtMiwgYSwgZSwgZSwgRCwgeiwgYS5sZW5ndGgsIDAsIDAsIDApLCB2b2lkIDAgIT09IGggJiYgKGEgPSBoKSk7XG4gICAgViA9ICcnO1xuICAgIEUgPSAwO1xuICAgIHogPSBEID0gMTtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG4gIHZhciBjYSA9IC9eXFwwKy9nLFxuICAgICAgTiA9IC9bXFwwXFxyXFxmXS9nLFxuICAgICAgYWEgPSAvOiAqL2csXG4gICAgICBrYSA9IC96b298Z3JhLyxcbiAgICAgIG1hID0gLyhbLDogXSkodHJhbnNmb3JtKS9nLFxuICAgICAgaWEgPSAvLFxccis/L2csXG4gICAgICBGID0gLyhbXFx0XFxyXFxuIF0pKlxcZj8mL2csXG4gICAgICBmYSA9IC9AKGtcXHcrKVxccyooXFxTKilcXHMqLyxcbiAgICAgIFEgPSAvOjoocGxhY2UpL2csXG4gICAgICBoYSA9IC86KHJlYWQtb25seSkvZyxcbiAgICAgIEcgPSAvW3N2aF1cXHcrLVt0YmxyXXsyfS8sXG4gICAgICBkYSA9IC9cXChcXHMqKC4qKVxccypcXCkvZyxcbiAgICAgIG9hID0gLyhbXFxzXFxTXSo/KTsvZyxcbiAgICAgIGJhID0gLy1zZWxmfGZsZXgtL2csXG4gICAgICBuYSA9IC9bXl0qPyg6W3JwXVtlbF1hW1xcdy1dKylbXl0qLyxcbiAgICAgIGxhID0gL3N0cmV0Y2h8OlxccypcXHcrXFwtKD86Y29udGV8YXZhaWwpLyxcbiAgICAgIGphID0gLyhbXi1dKShpbWFnZS1zZXRcXCgpLyxcbiAgICAgIHogPSAxLFxuICAgICAgRCA9IDEsXG4gICAgICBFID0gMCxcbiAgICAgIHcgPSAxLFxuICAgICAgTyA9IFtdLFxuICAgICAgUyA9IFtdLFxuICAgICAgQSA9IDAsXG4gICAgICBSID0gbnVsbCxcbiAgICAgIFkgPSAwLFxuICAgICAgViA9ICcnO1xuICBCLnVzZSA9IFQ7XG4gIEIuc2V0ID0gVTtcbiAgdm9pZCAwICE9PSBXICYmIFUoVyk7XG4gIHJldHVybiBCO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHlsaXNfbWluO1xuIiwidmFyIHVuaXRsZXNzS2V5cyA9IHtcbiAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6IDEsXG4gIGJvcmRlckltYWdlT3V0c2V0OiAxLFxuICBib3JkZXJJbWFnZVNsaWNlOiAxLFxuICBib3JkZXJJbWFnZVdpZHRoOiAxLFxuICBib3hGbGV4OiAxLFxuICBib3hGbGV4R3JvdXA6IDEsXG4gIGJveE9yZGluYWxHcm91cDogMSxcbiAgY29sdW1uQ291bnQ6IDEsXG4gIGNvbHVtbnM6IDEsXG4gIGZsZXg6IDEsXG4gIGZsZXhHcm93OiAxLFxuICBmbGV4UG9zaXRpdmU6IDEsXG4gIGZsZXhTaHJpbms6IDEsXG4gIGZsZXhOZWdhdGl2ZTogMSxcbiAgZmxleE9yZGVyOiAxLFxuICBncmlkUm93OiAxLFxuICBncmlkUm93RW5kOiAxLFxuICBncmlkUm93U3BhbjogMSxcbiAgZ3JpZFJvd1N0YXJ0OiAxLFxuICBncmlkQ29sdW1uOiAxLFxuICBncmlkQ29sdW1uRW5kOiAxLFxuICBncmlkQ29sdW1uU3BhbjogMSxcbiAgZ3JpZENvbHVtblN0YXJ0OiAxLFxuICBtc0dyaWRSb3c6IDEsXG4gIG1zR3JpZFJvd1NwYW46IDEsXG4gIG1zR3JpZENvbHVtbjogMSxcbiAgbXNHcmlkQ29sdW1uU3BhbjogMSxcbiAgZm9udFdlaWdodDogMSxcbiAgbGluZUhlaWdodDogMSxcbiAgb3BhY2l0eTogMSxcbiAgb3JkZXI6IDEsXG4gIG9ycGhhbnM6IDEsXG4gIHRhYlNpemU6IDEsXG4gIHdpZG93czogMSxcbiAgekluZGV4OiAxLFxuICB6b29tOiAxLFxuICBXZWJraXRMaW5lQ2xhbXA6IDEsXG4gIC8vIFNWRy1yZWxhdGVkIHByb3BlcnRpZXNcbiAgZmlsbE9wYWNpdHk6IDEsXG4gIGZsb29kT3BhY2l0eTogMSxcbiAgc3RvcE9wYWNpdHk6IDEsXG4gIHN0cm9rZURhc2hhcnJheTogMSxcbiAgc3Ryb2tlRGFzaG9mZnNldDogMSxcbiAgc3Ryb2tlTWl0ZXJsaW1pdDogMSxcbiAgc3Ryb2tlT3BhY2l0eTogMSxcbiAgc3Ryb2tlV2lkdGg6IDFcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVuaXRsZXNzS2V5cztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4vYWN0aW9uc1wiO1xuaW1wb3J0IHsgQXBwRGlzcGF0Y2hDb250ZXh0LCBBcHBTdGF0ZUNvbnRleHQgfSBmcm9tIFwiLi9jb250ZXh0c1wiO1xuaW1wb3J0ICogYXMgbWVzc2FnZXMgZnJvbSBcIi4uLy4uL3NoYXJlZC9tZXNzYWdlc1wiO1xuXG5leHBvcnQgY29uc3QgdXNlSGlkZSA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSBSZWFjdC51c2VDb250ZXh0KEFwcERpc3BhdGNoQ29udGV4dCk7XG4gIGNvbnN0IGhpZGUgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgd2luZG93LnRvcC5wb3N0TWVzc2FnZShcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdHlwZTogbWVzc2FnZXMuQ09OU09MRV9VTkZPQ1VTLFxuICAgICAgfSksXG4gICAgICBcIipcIlxuICAgICk7XG4gICAgZGlzcGF0Y2goYWN0aW9ucy5oaWRlKCkpO1xuICB9LCBbZGlzcGF0Y2hdKTtcblxuICByZXR1cm4gaGlkZTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VDb21tYW5kTW9kZSA9ICgpID0+IHtcbiAgY29uc3Qgc3RhdGUgPSBSZWFjdC51c2VDb250ZXh0KEFwcFN0YXRlQ29udGV4dCk7XG4gIGNvbnN0IGRpc3BhdGNoID0gUmVhY3QudXNlQ29udGV4dChBcHBEaXNwYXRjaENvbnRleHQpO1xuXG4gIGNvbnN0IHNob3cgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoaW5pdGlhbElucHV0VmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5zaG93Q29tbWFuZChpbml0aWFsSW5wdXRWYWx1ZSkpO1xuICAgIH0sXG4gICAgW2Rpc3BhdGNoXVxuICApO1xuXG4gIHJldHVybiB7XG4gICAgdmlzaWJsZTogc3RhdGUubW9kZSA9PT0gXCJjb21tYW5kXCIsXG4gICAgaW5pdGlhbElucHV0VmFsdWU6IHN0YXRlLmNvbnNvbGVUZXh0LFxuICAgIHNob3csXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgdXNlRmluZE1vZGUgPSAoKSA9PiB7XG4gIGNvbnN0IHN0YXRlID0gUmVhY3QudXNlQ29udGV4dChBcHBTdGF0ZUNvbnRleHQpO1xuICBjb25zdCBkaXNwYXRjaCA9IFJlYWN0LnVzZUNvbnRleHQoQXBwRGlzcGF0Y2hDb250ZXh0KTtcblxuICBjb25zdCBzaG93ID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGRpc3BhdGNoKGFjdGlvbnMuc2hvd0ZpbmQoKSk7XG4gIH0sIFtkaXNwYXRjaF0pO1xuXG4gIHJldHVybiB7XG4gICAgdmlzaWJsZTogc3RhdGUubW9kZSA9PT0gXCJmaW5kXCIsXG4gICAgc2hvdyxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VJbmZvTWVzc2FnZSA9ICgpID0+IHtcbiAgY29uc3Qgc3RhdGUgPSBSZWFjdC51c2VDb250ZXh0KEFwcFN0YXRlQ29udGV4dCk7XG4gIGNvbnN0IGRpc3BhdGNoID0gUmVhY3QudXNlQ29udGV4dChBcHBEaXNwYXRjaENvbnRleHQpO1xuXG4gIGNvbnN0IHNob3cgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAobWVzc2FnZTogc3RyaW5nKSA9PiB7XG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnNob3dJbmZvKG1lc3NhZ2UpKTtcbiAgICB9LFxuICAgIFtkaXNwYXRjaF1cbiAgKTtcblxuICByZXR1cm4ge1xuICAgIHZpc2libGU6IHN0YXRlLm1vZGUgPT09IFwiaW5mb1wiLFxuICAgIG1lc3NhZ2U6IHN0YXRlLm1vZGUgPT09IFwiaW5mb1wiID8gc3RhdGUubWVzc2FnZVRleHQgOiBcIlwiLFxuICAgIHNob3csXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgdXNlRXJyb3JNZXNzYWdlID0gKCkgPT4ge1xuICBjb25zdCBzdGF0ZSA9IFJlYWN0LnVzZUNvbnRleHQoQXBwU3RhdGVDb250ZXh0KTtcbiAgY29uc3QgZGlzcGF0Y2ggPSBSZWFjdC51c2VDb250ZXh0KEFwcERpc3BhdGNoQ29udGV4dCk7XG5cbiAgY29uc3Qgc2hvdyA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChtZXNzYWdlOiBzdHJpbmcpID0+IHtcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMuc2hvd0Vycm9yKG1lc3NhZ2UpKTtcbiAgICB9LFxuICAgIFtkaXNwYXRjaF1cbiAgKTtcblxuICByZXR1cm4ge1xuICAgIHZpc2libGU6IHN0YXRlLm1vZGUgPT09IFwiZXJyb3JcIixcbiAgICBtZXNzYWdlOiBzdGF0ZS5tb2RlID09PSBcImVycm9yXCIgPyBzdGF0ZS5tZXNzYWdlVGV4dCA6IFwiXCIsXG4gICAgc2hvdyxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRJbml0aWFsSW5wdXRWYWx1ZSA9ICgpID0+IHtcbiAgY29uc3Qgc3RhdGUgPSBSZWFjdC51c2VDb250ZXh0KEFwcFN0YXRlQ29udGV4dCk7XG4gIHJldHVybiBzdGF0ZS5jb25zb2xlVGV4dDtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VFeGVjQ29tbWFuZCA9ICgpID0+IHtcbiAgY29uc3QgZXhlY0NvbW1hbmQgPSBSZWFjdC51c2VDYWxsYmFjaygodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgIHR5cGU6IG1lc3NhZ2VzLkNPTlNPTEVfRU5URVJfQ09NTUFORCxcbiAgICAgIHRleHQsXG4gICAgfSk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIGV4ZWNDb21tYW5kO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUV4ZWNGaW5kID0gKCkgPT4ge1xuICBjb25zdCBleGVjRmluZCA9IFJlYWN0LnVzZUNhbGxiYWNrKCh0ZXh0Pzogc3RyaW5nKSA9PiB7XG4gICAgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgIHR5cGU6IG1lc3NhZ2VzLkNPTlNPTEVfRU5URVJfRklORCxcbiAgICAgIGtleXdvcmQ6IHRleHQsXG4gICAgfSk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIGV4ZWNGaW5kO1xufTtcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4yXG4gKiByZWFjdC5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG4ndXNlIHN0cmljdCc7dmFyIGw9cmVxdWlyZShcIm9iamVjdC1hc3NpZ25cIiksbj02MDEwMyxwPTYwMTA2O2V4cG9ydHMuRnJhZ21lbnQ9NjAxMDc7ZXhwb3J0cy5TdHJpY3RNb2RlPTYwMTA4O2V4cG9ydHMuUHJvZmlsZXI9NjAxMTQ7dmFyIHE9NjAxMDkscj02MDExMCx0PTYwMTEyO2V4cG9ydHMuU3VzcGVuc2U9NjAxMTM7dmFyIHU9NjAxMTUsdj02MDExNjtcbmlmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3Ipe3ZhciB3PVN5bWJvbC5mb3I7bj13KFwicmVhY3QuZWxlbWVudFwiKTtwPXcoXCJyZWFjdC5wb3J0YWxcIik7ZXhwb3J0cy5GcmFnbWVudD13KFwicmVhY3QuZnJhZ21lbnRcIik7ZXhwb3J0cy5TdHJpY3RNb2RlPXcoXCJyZWFjdC5zdHJpY3RfbW9kZVwiKTtleHBvcnRzLlByb2ZpbGVyPXcoXCJyZWFjdC5wcm9maWxlclwiKTtxPXcoXCJyZWFjdC5wcm92aWRlclwiKTtyPXcoXCJyZWFjdC5jb250ZXh0XCIpO3Q9dyhcInJlYWN0LmZvcndhcmRfcmVmXCIpO2V4cG9ydHMuU3VzcGVuc2U9dyhcInJlYWN0LnN1c3BlbnNlXCIpO3U9dyhcInJlYWN0Lm1lbW9cIik7dj13KFwicmVhY3QubGF6eVwiKX12YXIgeD1cImZ1bmN0aW9uXCI9PT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuaXRlcmF0b3I7XG5mdW5jdGlvbiB5KGEpe2lmKG51bGw9PT1hfHxcIm9iamVjdFwiIT09dHlwZW9mIGEpcmV0dXJuIG51bGw7YT14JiZhW3hdfHxhW1wiQEBpdGVyYXRvclwiXTtyZXR1cm5cImZ1bmN0aW9uXCI9PT10eXBlb2YgYT9hOm51bGx9ZnVuY3Rpb24geihhKXtmb3IodmFyIGI9XCJodHRwczovL3JlYWN0anMub3JnL2RvY3MvZXJyb3ItZGVjb2Rlci5odG1sP2ludmFyaWFudD1cIithLGM9MTtjPGFyZ3VtZW50cy5sZW5ndGg7YysrKWIrPVwiJmFyZ3NbXT1cIitlbmNvZGVVUklDb21wb25lbnQoYXJndW1lbnRzW2NdKTtyZXR1cm5cIk1pbmlmaWVkIFJlYWN0IGVycm9yICNcIithK1wiOyB2aXNpdCBcIitiK1wiIGZvciB0aGUgZnVsbCBtZXNzYWdlIG9yIHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCBmb3IgZnVsbCBlcnJvcnMgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy5cIn1cbnZhciBBPXtpc01vdW50ZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hMX0sZW5xdWV1ZUZvcmNlVXBkYXRlOmZ1bmN0aW9uKCl7fSxlbnF1ZXVlUmVwbGFjZVN0YXRlOmZ1bmN0aW9uKCl7fSxlbnF1ZXVlU2V0U3RhdGU6ZnVuY3Rpb24oKXt9fSxCPXt9O2Z1bmN0aW9uIEMoYSxiLGMpe3RoaXMucHJvcHM9YTt0aGlzLmNvbnRleHQ9Yjt0aGlzLnJlZnM9Qjt0aGlzLnVwZGF0ZXI9Y3x8QX1DLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PXt9O0MucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKGEsYil7aWYoXCJvYmplY3RcIiE9PXR5cGVvZiBhJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgYSYmbnVsbCE9YSl0aHJvdyBFcnJvcih6KDg1KSk7dGhpcy51cGRhdGVyLmVucXVldWVTZXRTdGF0ZSh0aGlzLGEsYixcInNldFN0YXRlXCIpfTtDLnByb3RvdHlwZS5mb3JjZVVwZGF0ZT1mdW5jdGlvbihhKXt0aGlzLnVwZGF0ZXIuZW5xdWV1ZUZvcmNlVXBkYXRlKHRoaXMsYSxcImZvcmNlVXBkYXRlXCIpfTtcbmZ1bmN0aW9uIEQoKXt9RC5wcm90b3R5cGU9Qy5wcm90b3R5cGU7ZnVuY3Rpb24gRShhLGIsYyl7dGhpcy5wcm9wcz1hO3RoaXMuY29udGV4dD1iO3RoaXMucmVmcz1CO3RoaXMudXBkYXRlcj1jfHxBfXZhciBGPUUucHJvdG90eXBlPW5ldyBEO0YuY29uc3RydWN0b3I9RTtsKEYsQy5wcm90b3R5cGUpO0YuaXNQdXJlUmVhY3RDb21wb25lbnQ9ITA7dmFyIEc9e2N1cnJlbnQ6bnVsbH0sSD1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LEk9e2tleTohMCxyZWY6ITAsX19zZWxmOiEwLF9fc291cmNlOiEwfTtcbmZ1bmN0aW9uIEooYSxiLGMpe3ZhciBlLGQ9e30saz1udWxsLGg9bnVsbDtpZihudWxsIT1iKWZvcihlIGluIHZvaWQgMCE9PWIucmVmJiYoaD1iLnJlZiksdm9pZCAwIT09Yi5rZXkmJihrPVwiXCIrYi5rZXkpLGIpSC5jYWxsKGIsZSkmJiFJLmhhc093blByb3BlcnR5KGUpJiYoZFtlXT1iW2VdKTt2YXIgZz1hcmd1bWVudHMubGVuZ3RoLTI7aWYoMT09PWcpZC5jaGlsZHJlbj1jO2Vsc2UgaWYoMTxnKXtmb3IodmFyIGY9QXJyYXkoZyksbT0wO208ZzttKyspZlttXT1hcmd1bWVudHNbbSsyXTtkLmNoaWxkcmVuPWZ9aWYoYSYmYS5kZWZhdWx0UHJvcHMpZm9yKGUgaW4gZz1hLmRlZmF1bHRQcm9wcyxnKXZvaWQgMD09PWRbZV0mJihkW2VdPWdbZV0pO3JldHVybnskJHR5cGVvZjpuLHR5cGU6YSxrZXk6ayxyZWY6aCxwcm9wczpkLF9vd25lcjpHLmN1cnJlbnR9fVxuZnVuY3Rpb24gSyhhLGIpe3JldHVybnskJHR5cGVvZjpuLHR5cGU6YS50eXBlLGtleTpiLHJlZjphLnJlZixwcm9wczphLnByb3BzLF9vd25lcjphLl9vd25lcn19ZnVuY3Rpb24gTChhKXtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiZhLiQkdHlwZW9mPT09bn1mdW5jdGlvbiBlc2NhcGUoYSl7dmFyIGI9e1wiPVwiOlwiPTBcIixcIjpcIjpcIj0yXCJ9O3JldHVyblwiJFwiK2EucmVwbGFjZSgvWz06XS9nLGZ1bmN0aW9uKGEpe3JldHVybiBiW2FdfSl9dmFyIE09L1xcLysvZztmdW5jdGlvbiBOKGEsYil7cmV0dXJuXCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSYmbnVsbCE9YS5rZXk/ZXNjYXBlKFwiXCIrYS5rZXkpOmIudG9TdHJpbmcoMzYpfVxuZnVuY3Rpb24gTyhhLGIsYyxlLGQpe3ZhciBrPXR5cGVvZiBhO2lmKFwidW5kZWZpbmVkXCI9PT1rfHxcImJvb2xlYW5cIj09PWspYT1udWxsO3ZhciBoPSExO2lmKG51bGw9PT1hKWg9ITA7ZWxzZSBzd2l0Y2goayl7Y2FzZSBcInN0cmluZ1wiOmNhc2UgXCJudW1iZXJcIjpoPSEwO2JyZWFrO2Nhc2UgXCJvYmplY3RcIjpzd2l0Y2goYS4kJHR5cGVvZil7Y2FzZSBuOmNhc2UgcDpoPSEwfX1pZihoKXJldHVybiBoPWEsZD1kKGgpLGE9XCJcIj09PWU/XCIuXCIrTihoLDApOmUsQXJyYXkuaXNBcnJheShkKT8oYz1cIlwiLG51bGwhPWEmJihjPWEucmVwbGFjZShNLFwiJCYvXCIpK1wiL1wiKSxPKGQsYixjLFwiXCIsZnVuY3Rpb24oYSl7cmV0dXJuIGF9KSk6bnVsbCE9ZCYmKEwoZCkmJihkPUsoZCxjKyghZC5rZXl8fGgmJmgua2V5PT09ZC5rZXk/XCJcIjooXCJcIitkLmtleSkucmVwbGFjZShNLFwiJCYvXCIpK1wiL1wiKSthKSksYi5wdXNoKGQpKSwxO2g9MDtlPVwiXCI9PT1lP1wiLlwiOmUrXCI6XCI7aWYoQXJyYXkuaXNBcnJheShhKSlmb3IodmFyIGc9XG4wO2c8YS5sZW5ndGg7ZysrKXtrPWFbZ107dmFyIGY9ZStOKGssZyk7aCs9TyhrLGIsYyxmLGQpfWVsc2UgaWYoZj15KGEpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBmKWZvcihhPWYuY2FsbChhKSxnPTA7IShrPWEubmV4dCgpKS5kb25lOylrPWsudmFsdWUsZj1lK04oayxnKyspLGgrPU8oayxiLGMsZixkKTtlbHNlIGlmKFwib2JqZWN0XCI9PT1rKXRocm93IGI9XCJcIithLEVycm9yKHooMzEsXCJbb2JqZWN0IE9iamVjdF1cIj09PWI/XCJvYmplY3Qgd2l0aCBrZXlzIHtcIitPYmplY3Qua2V5cyhhKS5qb2luKFwiLCBcIikrXCJ9XCI6YikpO3JldHVybiBofWZ1bmN0aW9uIFAoYSxiLGMpe2lmKG51bGw9PWEpcmV0dXJuIGE7dmFyIGU9W10sZD0wO08oYSxlLFwiXCIsXCJcIixmdW5jdGlvbihhKXtyZXR1cm4gYi5jYWxsKGMsYSxkKyspfSk7cmV0dXJuIGV9XG5mdW5jdGlvbiBRKGEpe2lmKC0xPT09YS5fc3RhdHVzKXt2YXIgYj1hLl9yZXN1bHQ7Yj1iKCk7YS5fc3RhdHVzPTA7YS5fcmVzdWx0PWI7Yi50aGVuKGZ1bmN0aW9uKGIpezA9PT1hLl9zdGF0dXMmJihiPWIuZGVmYXVsdCxhLl9zdGF0dXM9MSxhLl9yZXN1bHQ9Yil9LGZ1bmN0aW9uKGIpezA9PT1hLl9zdGF0dXMmJihhLl9zdGF0dXM9MixhLl9yZXN1bHQ9Yil9KX1pZigxPT09YS5fc3RhdHVzKXJldHVybiBhLl9yZXN1bHQ7dGhyb3cgYS5fcmVzdWx0O312YXIgUj17Y3VycmVudDpudWxsfTtmdW5jdGlvbiBTKCl7dmFyIGE9Ui5jdXJyZW50O2lmKG51bGw9PT1hKXRocm93IEVycm9yKHooMzIxKSk7cmV0dXJuIGF9dmFyIFQ9e1JlYWN0Q3VycmVudERpc3BhdGNoZXI6UixSZWFjdEN1cnJlbnRCYXRjaENvbmZpZzp7dHJhbnNpdGlvbjowfSxSZWFjdEN1cnJlbnRPd25lcjpHLElzU29tZVJlbmRlcmVyQWN0aW5nOntjdXJyZW50OiExfSxhc3NpZ246bH07XG5leHBvcnRzLkNoaWxkcmVuPXttYXA6UCxmb3JFYWNoOmZ1bmN0aW9uKGEsYixjKXtQKGEsZnVuY3Rpb24oKXtiLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sYyl9LGNvdW50OmZ1bmN0aW9uKGEpe3ZhciBiPTA7UChhLGZ1bmN0aW9uKCl7YisrfSk7cmV0dXJuIGJ9LHRvQXJyYXk6ZnVuY3Rpb24oYSl7cmV0dXJuIFAoYSxmdW5jdGlvbihhKXtyZXR1cm4gYX0pfHxbXX0sb25seTpmdW5jdGlvbihhKXtpZighTChhKSl0aHJvdyBFcnJvcih6KDE0MykpO3JldHVybiBhfX07ZXhwb3J0cy5Db21wb25lbnQ9QztleHBvcnRzLlB1cmVDb21wb25lbnQ9RTtleHBvcnRzLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEPVQ7XG5leHBvcnRzLmNsb25lRWxlbWVudD1mdW5jdGlvbihhLGIsYyl7aWYobnVsbD09PWF8fHZvaWQgMD09PWEpdGhyb3cgRXJyb3IoeigyNjcsYSkpO3ZhciBlPWwoe30sYS5wcm9wcyksZD1hLmtleSxrPWEucmVmLGg9YS5fb3duZXI7aWYobnVsbCE9Yil7dm9pZCAwIT09Yi5yZWYmJihrPWIucmVmLGg9Ry5jdXJyZW50KTt2b2lkIDAhPT1iLmtleSYmKGQ9XCJcIitiLmtleSk7aWYoYS50eXBlJiZhLnR5cGUuZGVmYXVsdFByb3BzKXZhciBnPWEudHlwZS5kZWZhdWx0UHJvcHM7Zm9yKGYgaW4gYilILmNhbGwoYixmKSYmIUkuaGFzT3duUHJvcGVydHkoZikmJihlW2ZdPXZvaWQgMD09PWJbZl0mJnZvaWQgMCE9PWc/Z1tmXTpiW2ZdKX12YXIgZj1hcmd1bWVudHMubGVuZ3RoLTI7aWYoMT09PWYpZS5jaGlsZHJlbj1jO2Vsc2UgaWYoMTxmKXtnPUFycmF5KGYpO2Zvcih2YXIgbT0wO208ZjttKyspZ1ttXT1hcmd1bWVudHNbbSsyXTtlLmNoaWxkcmVuPWd9cmV0dXJueyQkdHlwZW9mOm4sdHlwZTphLnR5cGUsXG5rZXk6ZCxyZWY6ayxwcm9wczplLF9vd25lcjpofX07ZXhwb3J0cy5jcmVhdGVDb250ZXh0PWZ1bmN0aW9uKGEsYil7dm9pZCAwPT09YiYmKGI9bnVsbCk7YT17JCR0eXBlb2Y6cixfY2FsY3VsYXRlQ2hhbmdlZEJpdHM6YixfY3VycmVudFZhbHVlOmEsX2N1cnJlbnRWYWx1ZTI6YSxfdGhyZWFkQ291bnQ6MCxQcm92aWRlcjpudWxsLENvbnN1bWVyOm51bGx9O2EuUHJvdmlkZXI9eyQkdHlwZW9mOnEsX2NvbnRleHQ6YX07cmV0dXJuIGEuQ29uc3VtZXI9YX07ZXhwb3J0cy5jcmVhdGVFbGVtZW50PUo7ZXhwb3J0cy5jcmVhdGVGYWN0b3J5PWZ1bmN0aW9uKGEpe3ZhciBiPUouYmluZChudWxsLGEpO2IudHlwZT1hO3JldHVybiBifTtleHBvcnRzLmNyZWF0ZVJlZj1mdW5jdGlvbigpe3JldHVybntjdXJyZW50Om51bGx9fTtleHBvcnRzLmZvcndhcmRSZWY9ZnVuY3Rpb24oYSl7cmV0dXJueyQkdHlwZW9mOnQscmVuZGVyOmF9fTtleHBvcnRzLmlzVmFsaWRFbGVtZW50PUw7XG5leHBvcnRzLmxhenk9ZnVuY3Rpb24oYSl7cmV0dXJueyQkdHlwZW9mOnYsX3BheWxvYWQ6e19zdGF0dXM6LTEsX3Jlc3VsdDphfSxfaW5pdDpRfX07ZXhwb3J0cy5tZW1vPWZ1bmN0aW9uKGEsYil7cmV0dXJueyQkdHlwZW9mOnUsdHlwZTphLGNvbXBhcmU6dm9pZCAwPT09Yj9udWxsOmJ9fTtleHBvcnRzLnVzZUNhbGxiYWNrPWZ1bmN0aW9uKGEsYil7cmV0dXJuIFMoKS51c2VDYWxsYmFjayhhLGIpfTtleHBvcnRzLnVzZUNvbnRleHQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gUygpLnVzZUNvbnRleHQoYSxiKX07ZXhwb3J0cy51c2VEZWJ1Z1ZhbHVlPWZ1bmN0aW9uKCl7fTtleHBvcnRzLnVzZUVmZmVjdD1mdW5jdGlvbihhLGIpe3JldHVybiBTKCkudXNlRWZmZWN0KGEsYil9O2V4cG9ydHMudXNlSW1wZXJhdGl2ZUhhbmRsZT1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIFMoKS51c2VJbXBlcmF0aXZlSGFuZGxlKGEsYixjKX07XG5leHBvcnRzLnVzZUxheW91dEVmZmVjdD1mdW5jdGlvbihhLGIpe3JldHVybiBTKCkudXNlTGF5b3V0RWZmZWN0KGEsYil9O2V4cG9ydHMudXNlTWVtbz1mdW5jdGlvbihhLGIpe3JldHVybiBTKCkudXNlTWVtbyhhLGIpfTtleHBvcnRzLnVzZVJlZHVjZXI9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBTKCkudXNlUmVkdWNlcihhLGIsYyl9O2V4cG9ydHMudXNlUmVmPWZ1bmN0aW9uKGEpe3JldHVybiBTKCkudXNlUmVmKGEpfTtleHBvcnRzLnVzZVN0YXRlPWZ1bmN0aW9uKGEpe3JldHVybiBTKCkudXNlU3RhdGUoYSl9O2V4cG9ydHMudmVyc2lvbj1cIjE3LjAuMlwiO1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjJcbiAqIHJlYWN0LWRvbS5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG4vKlxuIE1vZGVybml6ciAzLjAuMHByZSAoQ3VzdG9tIEJ1aWxkKSB8IE1JVFxuKi9cbid1c2Ugc3RyaWN0Jzt2YXIgYWE9cmVxdWlyZShcInJlYWN0XCIpLG09cmVxdWlyZShcIm9iamVjdC1hc3NpZ25cIikscj1yZXF1aXJlKFwic2NoZWR1bGVyXCIpO2Z1bmN0aW9uIHkoYSl7Zm9yKHZhciBiPVwiaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL2Vycm9yLWRlY29kZXIuaHRtbD9pbnZhcmlhbnQ9XCIrYSxjPTE7Yzxhcmd1bWVudHMubGVuZ3RoO2MrKyliKz1cIiZhcmdzW109XCIrZW5jb2RlVVJJQ29tcG9uZW50KGFyZ3VtZW50c1tjXSk7cmV0dXJuXCJNaW5pZmllZCBSZWFjdCBlcnJvciAjXCIrYStcIjsgdmlzaXQgXCIrYitcIiBmb3IgdGhlIGZ1bGwgbWVzc2FnZSBvciB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgZm9yIGZ1bGwgZXJyb3JzIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuXCJ9aWYoIWFhKXRocm93IEVycm9yKHkoMjI3KSk7dmFyIGJhPW5ldyBTZXQsY2E9e307ZnVuY3Rpb24gZGEoYSxiKXtlYShhLGIpO2VhKGErXCJDYXB0dXJlXCIsYil9XG5mdW5jdGlvbiBlYShhLGIpe2NhW2FdPWI7Zm9yKGE9MDthPGIubGVuZ3RoO2ErKyliYS5hZGQoYlthXSl9XG52YXIgZmE9IShcInVuZGVmaW5lZFwiPT09dHlwZW9mIHdpbmRvd3x8XCJ1bmRlZmluZWRcIj09PXR5cGVvZiB3aW5kb3cuZG9jdW1lbnR8fFwidW5kZWZpbmVkXCI9PT10eXBlb2Ygd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpLGhhPS9eWzpBLVpfYS16XFx1MDBDMC1cXHUwMEQ2XFx1MDBEOC1cXHUwMEY2XFx1MDBGOC1cXHUwMkZGXFx1MDM3MC1cXHUwMzdEXFx1MDM3Ri1cXHUxRkZGXFx1MjAwQy1cXHUyMDBEXFx1MjA3MC1cXHUyMThGXFx1MkMwMC1cXHUyRkVGXFx1MzAwMS1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkZEXVs6QS1aX2EtelxcdTAwQzAtXFx1MDBENlxcdTAwRDgtXFx1MDBGNlxcdTAwRjgtXFx1MDJGRlxcdTAzNzAtXFx1MDM3RFxcdTAzN0YtXFx1MUZGRlxcdTIwMEMtXFx1MjAwRFxcdTIwNzAtXFx1MjE4RlxcdTJDMDAtXFx1MkZFRlxcdTMwMDEtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZGRFxcLS4wLTlcXHUwMEI3XFx1MDMwMC1cXHUwMzZGXFx1MjAzRi1cXHUyMDQwXSokLyxpYT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LFxuamE9e30sa2E9e307ZnVuY3Rpb24gbGEoYSl7aWYoaWEuY2FsbChrYSxhKSlyZXR1cm4hMDtpZihpYS5jYWxsKGphLGEpKXJldHVybiExO2lmKGhhLnRlc3QoYSkpcmV0dXJuIGthW2FdPSEwO2phW2FdPSEwO3JldHVybiExfWZ1bmN0aW9uIG1hKGEsYixjLGQpe2lmKG51bGwhPT1jJiYwPT09Yy50eXBlKXJldHVybiExO3N3aXRjaCh0eXBlb2YgYil7Y2FzZSBcImZ1bmN0aW9uXCI6Y2FzZSBcInN5bWJvbFwiOnJldHVybiEwO2Nhc2UgXCJib29sZWFuXCI6aWYoZClyZXR1cm4hMTtpZihudWxsIT09YylyZXR1cm4hYy5hY2NlcHRzQm9vbGVhbnM7YT1hLnRvTG93ZXJDYXNlKCkuc2xpY2UoMCw1KTtyZXR1cm5cImRhdGEtXCIhPT1hJiZcImFyaWEtXCIhPT1hO2RlZmF1bHQ6cmV0dXJuITF9fVxuZnVuY3Rpb24gbmEoYSxiLGMsZCl7aWYobnVsbD09PWJ8fFwidW5kZWZpbmVkXCI9PT10eXBlb2YgYnx8bWEoYSxiLGMsZCkpcmV0dXJuITA7aWYoZClyZXR1cm4hMTtpZihudWxsIT09Yylzd2l0Y2goYy50eXBlKXtjYXNlIDM6cmV0dXJuIWI7Y2FzZSA0OnJldHVybiExPT09YjtjYXNlIDU6cmV0dXJuIGlzTmFOKGIpO2Nhc2UgNjpyZXR1cm4gaXNOYU4oYil8fDE+Yn1yZXR1cm4hMX1mdW5jdGlvbiBCKGEsYixjLGQsZSxmLGcpe3RoaXMuYWNjZXB0c0Jvb2xlYW5zPTI9PT1ifHwzPT09Ynx8ND09PWI7dGhpcy5hdHRyaWJ1dGVOYW1lPWQ7dGhpcy5hdHRyaWJ1dGVOYW1lc3BhY2U9ZTt0aGlzLm11c3RVc2VQcm9wZXJ0eT1jO3RoaXMucHJvcGVydHlOYW1lPWE7dGhpcy50eXBlPWI7dGhpcy5zYW5pdGl6ZVVSTD1mO3RoaXMucmVtb3ZlRW1wdHlTdHJpbmc9Z312YXIgRD17fTtcblwiY2hpbGRyZW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgZGVmYXVsdFZhbHVlIGRlZmF1bHRDaGVja2VkIGlubmVySFRNTCBzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmcgc3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nIHN0eWxlXCIuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQihhLDAsITEsYSxudWxsLCExLCExKX0pO1tbXCJhY2NlcHRDaGFyc2V0XCIsXCJhY2NlcHQtY2hhcnNldFwiXSxbXCJjbGFzc05hbWVcIixcImNsYXNzXCJdLFtcImh0bWxGb3JcIixcImZvclwiXSxbXCJodHRwRXF1aXZcIixcImh0dHAtZXF1aXZcIl1dLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGI9YVswXTtEW2JdPW5ldyBCKGIsMSwhMSxhWzFdLG51bGwsITEsITEpfSk7W1wiY29udGVudEVkaXRhYmxlXCIsXCJkcmFnZ2FibGVcIixcInNwZWxsQ2hlY2tcIixcInZhbHVlXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQihhLDIsITEsYS50b0xvd2VyQ2FzZSgpLG51bGwsITEsITEpfSk7XG5bXCJhdXRvUmV2ZXJzZVwiLFwiZXh0ZXJuYWxSZXNvdXJjZXNSZXF1aXJlZFwiLFwiZm9jdXNhYmxlXCIsXCJwcmVzZXJ2ZUFscGhhXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQihhLDIsITEsYSxudWxsLCExLCExKX0pO1wiYWxsb3dGdWxsU2NyZWVuIGFzeW5jIGF1dG9Gb2N1cyBhdXRvUGxheSBjb250cm9scyBkZWZhdWx0IGRlZmVyIGRpc2FibGVkIGRpc2FibGVQaWN0dXJlSW5QaWN0dXJlIGRpc2FibGVSZW1vdGVQbGF5YmFjayBmb3JtTm9WYWxpZGF0ZSBoaWRkZW4gbG9vcCBub01vZHVsZSBub1ZhbGlkYXRlIG9wZW4gcGxheXNJbmxpbmUgcmVhZE9ubHkgcmVxdWlyZWQgcmV2ZXJzZWQgc2NvcGVkIHNlYW1sZXNzIGl0ZW1TY29wZVwiLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0RbYV09bmV3IEIoYSwzLCExLGEudG9Mb3dlckNhc2UoKSxudWxsLCExLCExKX0pO1xuW1wiY2hlY2tlZFwiLFwibXVsdGlwbGVcIixcIm11dGVkXCIsXCJzZWxlY3RlZFwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0RbYV09bmV3IEIoYSwzLCEwLGEsbnVsbCwhMSwhMSl9KTtbXCJjYXB0dXJlXCIsXCJkb3dubG9hZFwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0RbYV09bmV3IEIoYSw0LCExLGEsbnVsbCwhMSwhMSl9KTtbXCJjb2xzXCIsXCJyb3dzXCIsXCJzaXplXCIsXCJzcGFuXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQihhLDYsITEsYSxudWxsLCExLCExKX0pO1tcInJvd1NwYW5cIixcInN0YXJ0XCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQihhLDUsITEsYS50b0xvd2VyQ2FzZSgpLG51bGwsITEsITEpfSk7dmFyIG9hPS9bXFwtOl0oW2Etel0pL2c7ZnVuY3Rpb24gcGEoYSl7cmV0dXJuIGFbMV0udG9VcHBlckNhc2UoKX1cblwiYWNjZW50LWhlaWdodCBhbGlnbm1lbnQtYmFzZWxpbmUgYXJhYmljLWZvcm0gYmFzZWxpbmUtc2hpZnQgY2FwLWhlaWdodCBjbGlwLXBhdGggY2xpcC1ydWxlIGNvbG9yLWludGVycG9sYXRpb24gY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzIGNvbG9yLXByb2ZpbGUgY29sb3ItcmVuZGVyaW5nIGRvbWluYW50LWJhc2VsaW5lIGVuYWJsZS1iYWNrZ3JvdW5kIGZpbGwtb3BhY2l0eSBmaWxsLXJ1bGUgZmxvb2QtY29sb3IgZmxvb2Qtb3BhY2l0eSBmb250LWZhbWlseSBmb250LXNpemUgZm9udC1zaXplLWFkanVzdCBmb250LXN0cmV0Y2ggZm9udC1zdHlsZSBmb250LXZhcmlhbnQgZm9udC13ZWlnaHQgZ2x5cGgtbmFtZSBnbHlwaC1vcmllbnRhdGlvbi1ob3Jpem9udGFsIGdseXBoLW9yaWVudGF0aW9uLXZlcnRpY2FsIGhvcml6LWFkdi14IGhvcml6LW9yaWdpbi14IGltYWdlLXJlbmRlcmluZyBsZXR0ZXItc3BhY2luZyBsaWdodGluZy1jb2xvciBtYXJrZXItZW5kIG1hcmtlci1taWQgbWFya2VyLXN0YXJ0IG92ZXJsaW5lLXBvc2l0aW9uIG92ZXJsaW5lLXRoaWNrbmVzcyBwYWludC1vcmRlciBwYW5vc2UtMSBwb2ludGVyLWV2ZW50cyByZW5kZXJpbmctaW50ZW50IHNoYXBlLXJlbmRlcmluZyBzdG9wLWNvbG9yIHN0b3Atb3BhY2l0eSBzdHJpa2V0aHJvdWdoLXBvc2l0aW9uIHN0cmlrZXRocm91Z2gtdGhpY2tuZXNzIHN0cm9rZS1kYXNoYXJyYXkgc3Ryb2tlLWRhc2hvZmZzZXQgc3Ryb2tlLWxpbmVjYXAgc3Ryb2tlLWxpbmVqb2luIHN0cm9rZS1taXRlcmxpbWl0IHN0cm9rZS1vcGFjaXR5IHN0cm9rZS13aWR0aCB0ZXh0LWFuY2hvciB0ZXh0LWRlY29yYXRpb24gdGV4dC1yZW5kZXJpbmcgdW5kZXJsaW5lLXBvc2l0aW9uIHVuZGVybGluZS10aGlja25lc3MgdW5pY29kZS1iaWRpIHVuaWNvZGUtcmFuZ2UgdW5pdHMtcGVyLWVtIHYtYWxwaGFiZXRpYyB2LWhhbmdpbmcgdi1pZGVvZ3JhcGhpYyB2LW1hdGhlbWF0aWNhbCB2ZWN0b3ItZWZmZWN0IHZlcnQtYWR2LXkgdmVydC1vcmlnaW4teCB2ZXJ0LW9yaWdpbi15IHdvcmQtc3BhY2luZyB3cml0aW5nLW1vZGUgeG1sbnM6eGxpbmsgeC1oZWlnaHRcIi5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2Uob2EsXG5wYSk7RFtiXT1uZXcgQihiLDEsITEsYSxudWxsLCExLCExKX0pO1wieGxpbms6YWN0dWF0ZSB4bGluazphcmNyb2xlIHhsaW5rOnJvbGUgeGxpbms6c2hvdyB4bGluazp0aXRsZSB4bGluazp0eXBlXCIuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKG9hLHBhKTtEW2JdPW5ldyBCKGIsMSwhMSxhLFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLCExLCExKX0pO1tcInhtbDpiYXNlXCIsXCJ4bWw6bGFuZ1wiLFwieG1sOnNwYWNlXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKG9hLHBhKTtEW2JdPW5ldyBCKGIsMSwhMSxhLFwiaHR0cDovL3d3dy53My5vcmcvWE1MLzE5OTgvbmFtZXNwYWNlXCIsITEsITEpfSk7W1widGFiSW5kZXhcIixcImNyb3NzT3JpZ2luXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQihhLDEsITEsYS50b0xvd2VyQ2FzZSgpLG51bGwsITEsITEpfSk7XG5ELnhsaW5rSHJlZj1uZXcgQihcInhsaW5rSHJlZlwiLDEsITEsXCJ4bGluazpocmVmXCIsXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsITAsITEpO1tcInNyY1wiLFwiaHJlZlwiLFwiYWN0aW9uXCIsXCJmb3JtQWN0aW9uXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQihhLDEsITEsYS50b0xvd2VyQ2FzZSgpLG51bGwsITAsITApfSk7XG5mdW5jdGlvbiBxYShhLGIsYyxkKXt2YXIgZT1ELmhhc093blByb3BlcnR5KGIpP0RbYl06bnVsbDt2YXIgZj1udWxsIT09ZT8wPT09ZS50eXBlOmQ/ITE6ISgyPGIubGVuZ3RoKXx8XCJvXCIhPT1iWzBdJiZcIk9cIiE9PWJbMF18fFwiblwiIT09YlsxXSYmXCJOXCIhPT1iWzFdPyExOiEwO2Z8fChuYShiLGMsZSxkKSYmKGM9bnVsbCksZHx8bnVsbD09PWU/bGEoYikmJihudWxsPT09Yz9hLnJlbW92ZUF0dHJpYnV0ZShiKTphLnNldEF0dHJpYnV0ZShiLFwiXCIrYykpOmUubXVzdFVzZVByb3BlcnR5P2FbZS5wcm9wZXJ0eU5hbWVdPW51bGw9PT1jPzM9PT1lLnR5cGU/ITE6XCJcIjpjOihiPWUuYXR0cmlidXRlTmFtZSxkPWUuYXR0cmlidXRlTmFtZXNwYWNlLG51bGw9PT1jP2EucmVtb3ZlQXR0cmlidXRlKGIpOihlPWUudHlwZSxjPTM9PT1lfHw0PT09ZSYmITA9PT1jP1wiXCI6XCJcIitjLGQ/YS5zZXRBdHRyaWJ1dGVOUyhkLGIsYyk6YS5zZXRBdHRyaWJ1dGUoYixjKSkpKX1cbnZhciByYT1hYS5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCxzYT02MDEwMyx0YT02MDEwNix1YT02MDEwNyx3YT02MDEwOCx4YT02MDExNCx5YT02MDEwOSx6YT02MDExMCxBYT02MDExMixCYT02MDExMyxDYT02MDEyMCxEYT02MDExNSxFYT02MDExNixGYT02MDEyMSxHYT02MDEyOCxIYT02MDEyOSxJYT02MDEzMCxKYT02MDEzMTtcbmlmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3Ipe3ZhciBFPVN5bWJvbC5mb3I7c2E9RShcInJlYWN0LmVsZW1lbnRcIik7dGE9RShcInJlYWN0LnBvcnRhbFwiKTt1YT1FKFwicmVhY3QuZnJhZ21lbnRcIik7d2E9RShcInJlYWN0LnN0cmljdF9tb2RlXCIpO3hhPUUoXCJyZWFjdC5wcm9maWxlclwiKTt5YT1FKFwicmVhY3QucHJvdmlkZXJcIik7emE9RShcInJlYWN0LmNvbnRleHRcIik7QWE9RShcInJlYWN0LmZvcndhcmRfcmVmXCIpO0JhPUUoXCJyZWFjdC5zdXNwZW5zZVwiKTtDYT1FKFwicmVhY3Quc3VzcGVuc2VfbGlzdFwiKTtEYT1FKFwicmVhY3QubWVtb1wiKTtFYT1FKFwicmVhY3QubGF6eVwiKTtGYT1FKFwicmVhY3QuYmxvY2tcIik7RShcInJlYWN0LnNjb3BlXCIpO0dhPUUoXCJyZWFjdC5vcGFxdWUuaWRcIik7SGE9RShcInJlYWN0LmRlYnVnX3RyYWNlX21vZGVcIik7SWE9RShcInJlYWN0Lm9mZnNjcmVlblwiKTtKYT1FKFwicmVhY3QubGVnYWN5X2hpZGRlblwiKX1cbnZhciBLYT1cImZ1bmN0aW9uXCI9PT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuaXRlcmF0b3I7ZnVuY3Rpb24gTGEoYSl7aWYobnVsbD09PWF8fFwib2JqZWN0XCIhPT10eXBlb2YgYSlyZXR1cm4gbnVsbDthPUthJiZhW0thXXx8YVtcIkBAaXRlcmF0b3JcIl07cmV0dXJuXCJmdW5jdGlvblwiPT09dHlwZW9mIGE/YTpudWxsfXZhciBNYTtmdW5jdGlvbiBOYShhKXtpZih2b2lkIDA9PT1NYSl0cnl7dGhyb3cgRXJyb3IoKTt9Y2F0Y2goYyl7dmFyIGI9Yy5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtNYT1iJiZiWzFdfHxcIlwifXJldHVyblwiXFxuXCIrTWErYX12YXIgT2E9ITE7XG5mdW5jdGlvbiBQYShhLGIpe2lmKCFhfHxPYSlyZXR1cm5cIlwiO09hPSEwO3ZhciBjPUVycm9yLnByZXBhcmVTdGFja1RyYWNlO0Vycm9yLnByZXBhcmVTdGFja1RyYWNlPXZvaWQgMDt0cnl7aWYoYilpZihiPWZ1bmN0aW9uKCl7dGhyb3cgRXJyb3IoKTt9LE9iamVjdC5kZWZpbmVQcm9wZXJ0eShiLnByb3RvdHlwZSxcInByb3BzXCIse3NldDpmdW5jdGlvbigpe3Rocm93IEVycm9yKCk7fX0pLFwib2JqZWN0XCI9PT10eXBlb2YgUmVmbGVjdCYmUmVmbGVjdC5jb25zdHJ1Y3Qpe3RyeXtSZWZsZWN0LmNvbnN0cnVjdChiLFtdKX1jYXRjaChrKXt2YXIgZD1rfVJlZmxlY3QuY29uc3RydWN0KGEsW10sYil9ZWxzZXt0cnl7Yi5jYWxsKCl9Y2F0Y2goayl7ZD1rfWEuY2FsbChiLnByb3RvdHlwZSl9ZWxzZXt0cnl7dGhyb3cgRXJyb3IoKTt9Y2F0Y2goayl7ZD1rfWEoKX19Y2F0Y2goayl7aWYoayYmZCYmXCJzdHJpbmdcIj09PXR5cGVvZiBrLnN0YWNrKXtmb3IodmFyIGU9ay5zdGFjay5zcGxpdChcIlxcblwiKSxcbmY9ZC5zdGFjay5zcGxpdChcIlxcblwiKSxnPWUubGVuZ3RoLTEsaD1mLmxlbmd0aC0xOzE8PWcmJjA8PWgmJmVbZ10hPT1mW2hdOyloLS07Zm9yKDsxPD1nJiYwPD1oO2ctLSxoLS0paWYoZVtnXSE9PWZbaF0pe2lmKDEhPT1nfHwxIT09aCl7ZG8gaWYoZy0tLGgtLSwwPmh8fGVbZ10hPT1mW2hdKXJldHVyblwiXFxuXCIrZVtnXS5yZXBsYWNlKFwiIGF0IG5ldyBcIixcIiBhdCBcIik7d2hpbGUoMTw9ZyYmMDw9aCl9YnJlYWt9fX1maW5hbGx5e09hPSExLEVycm9yLnByZXBhcmVTdGFja1RyYWNlPWN9cmV0dXJuKGE9YT9hLmRpc3BsYXlOYW1lfHxhLm5hbWU6XCJcIik/TmEoYSk6XCJcIn1cbmZ1bmN0aW9uIFFhKGEpe3N3aXRjaChhLnRhZyl7Y2FzZSA1OnJldHVybiBOYShhLnR5cGUpO2Nhc2UgMTY6cmV0dXJuIE5hKFwiTGF6eVwiKTtjYXNlIDEzOnJldHVybiBOYShcIlN1c3BlbnNlXCIpO2Nhc2UgMTk6cmV0dXJuIE5hKFwiU3VzcGVuc2VMaXN0XCIpO2Nhc2UgMDpjYXNlIDI6Y2FzZSAxNTpyZXR1cm4gYT1QYShhLnR5cGUsITEpLGE7Y2FzZSAxMTpyZXR1cm4gYT1QYShhLnR5cGUucmVuZGVyLCExKSxhO2Nhc2UgMjI6cmV0dXJuIGE9UGEoYS50eXBlLl9yZW5kZXIsITEpLGE7Y2FzZSAxOnJldHVybiBhPVBhKGEudHlwZSwhMCksYTtkZWZhdWx0OnJldHVyblwiXCJ9fVxuZnVuY3Rpb24gUmEoYSl7aWYobnVsbD09YSlyZXR1cm4gbnVsbDtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYSlyZXR1cm4gYS5kaXNwbGF5TmFtZXx8YS5uYW1lfHxudWxsO2lmKFwic3RyaW5nXCI9PT10eXBlb2YgYSlyZXR1cm4gYTtzd2l0Y2goYSl7Y2FzZSB1YTpyZXR1cm5cIkZyYWdtZW50XCI7Y2FzZSB0YTpyZXR1cm5cIlBvcnRhbFwiO2Nhc2UgeGE6cmV0dXJuXCJQcm9maWxlclwiO2Nhc2Ugd2E6cmV0dXJuXCJTdHJpY3RNb2RlXCI7Y2FzZSBCYTpyZXR1cm5cIlN1c3BlbnNlXCI7Y2FzZSBDYTpyZXR1cm5cIlN1c3BlbnNlTGlzdFwifWlmKFwib2JqZWN0XCI9PT10eXBlb2YgYSlzd2l0Y2goYS4kJHR5cGVvZil7Y2FzZSB6YTpyZXR1cm4oYS5kaXNwbGF5TmFtZXx8XCJDb250ZXh0XCIpK1wiLkNvbnN1bWVyXCI7Y2FzZSB5YTpyZXR1cm4oYS5fY29udGV4dC5kaXNwbGF5TmFtZXx8XCJDb250ZXh0XCIpK1wiLlByb3ZpZGVyXCI7Y2FzZSBBYTp2YXIgYj1hLnJlbmRlcjtiPWIuZGlzcGxheU5hbWV8fGIubmFtZXx8XCJcIjtcbnJldHVybiBhLmRpc3BsYXlOYW1lfHwoXCJcIiE9PWI/XCJGb3J3YXJkUmVmKFwiK2IrXCIpXCI6XCJGb3J3YXJkUmVmXCIpO2Nhc2UgRGE6cmV0dXJuIFJhKGEudHlwZSk7Y2FzZSBGYTpyZXR1cm4gUmEoYS5fcmVuZGVyKTtjYXNlIEVhOmI9YS5fcGF5bG9hZDthPWEuX2luaXQ7dHJ5e3JldHVybiBSYShhKGIpKX1jYXRjaChjKXt9fXJldHVybiBudWxsfWZ1bmN0aW9uIFNhKGEpe3N3aXRjaCh0eXBlb2YgYSl7Y2FzZSBcImJvb2xlYW5cIjpjYXNlIFwibnVtYmVyXCI6Y2FzZSBcIm9iamVjdFwiOmNhc2UgXCJzdHJpbmdcIjpjYXNlIFwidW5kZWZpbmVkXCI6cmV0dXJuIGE7ZGVmYXVsdDpyZXR1cm5cIlwifX1mdW5jdGlvbiBUYShhKXt2YXIgYj1hLnR5cGU7cmV0dXJuKGE9YS5ub2RlTmFtZSkmJlwiaW5wdXRcIj09PWEudG9Mb3dlckNhc2UoKSYmKFwiY2hlY2tib3hcIj09PWJ8fFwicmFkaW9cIj09PWIpfVxuZnVuY3Rpb24gVWEoYSl7dmFyIGI9VGEoYSk/XCJjaGVja2VkXCI6XCJ2YWx1ZVwiLGM9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihhLmNvbnN0cnVjdG9yLnByb3RvdHlwZSxiKSxkPVwiXCIrYVtiXTtpZighYS5oYXNPd25Qcm9wZXJ0eShiKSYmXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBjJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgYy5nZXQmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBjLnNldCl7dmFyIGU9Yy5nZXQsZj1jLnNldDtPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxiLHtjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGUuY2FsbCh0aGlzKX0sc2V0OmZ1bmN0aW9uKGEpe2Q9XCJcIithO2YuY2FsbCh0aGlzLGEpfX0pO09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLGIse2VudW1lcmFibGU6Yy5lbnVtZXJhYmxlfSk7cmV0dXJue2dldFZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIGR9LHNldFZhbHVlOmZ1bmN0aW9uKGEpe2Q9XCJcIithfSxzdG9wVHJhY2tpbmc6ZnVuY3Rpb24oKXthLl92YWx1ZVRyYWNrZXI9XG5udWxsO2RlbGV0ZSBhW2JdfX19fWZ1bmN0aW9uIFZhKGEpe2EuX3ZhbHVlVHJhY2tlcnx8KGEuX3ZhbHVlVHJhY2tlcj1VYShhKSl9ZnVuY3Rpb24gV2EoYSl7aWYoIWEpcmV0dXJuITE7dmFyIGI9YS5fdmFsdWVUcmFja2VyO2lmKCFiKXJldHVybiEwO3ZhciBjPWIuZ2V0VmFsdWUoKTt2YXIgZD1cIlwiO2EmJihkPVRhKGEpP2EuY2hlY2tlZD9cInRydWVcIjpcImZhbHNlXCI6YS52YWx1ZSk7YT1kO3JldHVybiBhIT09Yz8oYi5zZXRWYWx1ZShhKSwhMCk6ITF9ZnVuY3Rpb24gWGEoYSl7YT1hfHwoXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBkb2N1bWVudD9kb2N1bWVudDp2b2lkIDApO2lmKFwidW5kZWZpbmVkXCI9PT10eXBlb2YgYSlyZXR1cm4gbnVsbDt0cnl7cmV0dXJuIGEuYWN0aXZlRWxlbWVudHx8YS5ib2R5fWNhdGNoKGIpe3JldHVybiBhLmJvZHl9fVxuZnVuY3Rpb24gWWEoYSxiKXt2YXIgYz1iLmNoZWNrZWQ7cmV0dXJuIG0oe30sYix7ZGVmYXVsdENoZWNrZWQ6dm9pZCAwLGRlZmF1bHRWYWx1ZTp2b2lkIDAsdmFsdWU6dm9pZCAwLGNoZWNrZWQ6bnVsbCE9Yz9jOmEuX3dyYXBwZXJTdGF0ZS5pbml0aWFsQ2hlY2tlZH0pfWZ1bmN0aW9uIFphKGEsYil7dmFyIGM9bnVsbD09Yi5kZWZhdWx0VmFsdWU/XCJcIjpiLmRlZmF1bHRWYWx1ZSxkPW51bGwhPWIuY2hlY2tlZD9iLmNoZWNrZWQ6Yi5kZWZhdWx0Q2hlY2tlZDtjPVNhKG51bGwhPWIudmFsdWU/Yi52YWx1ZTpjKTthLl93cmFwcGVyU3RhdGU9e2luaXRpYWxDaGVja2VkOmQsaW5pdGlhbFZhbHVlOmMsY29udHJvbGxlZDpcImNoZWNrYm94XCI9PT1iLnR5cGV8fFwicmFkaW9cIj09PWIudHlwZT9udWxsIT1iLmNoZWNrZWQ6bnVsbCE9Yi52YWx1ZX19ZnVuY3Rpb24gJGEoYSxiKXtiPWIuY2hlY2tlZDtudWxsIT1iJiZxYShhLFwiY2hlY2tlZFwiLGIsITEpfVxuZnVuY3Rpb24gYWIoYSxiKXskYShhLGIpO3ZhciBjPVNhKGIudmFsdWUpLGQ9Yi50eXBlO2lmKG51bGwhPWMpaWYoXCJudW1iZXJcIj09PWQpe2lmKDA9PT1jJiZcIlwiPT09YS52YWx1ZXx8YS52YWx1ZSE9YylhLnZhbHVlPVwiXCIrY31lbHNlIGEudmFsdWUhPT1cIlwiK2MmJihhLnZhbHVlPVwiXCIrYyk7ZWxzZSBpZihcInN1Ym1pdFwiPT09ZHx8XCJyZXNldFwiPT09ZCl7YS5yZW1vdmVBdHRyaWJ1dGUoXCJ2YWx1ZVwiKTtyZXR1cm59Yi5oYXNPd25Qcm9wZXJ0eShcInZhbHVlXCIpP2JiKGEsYi50eXBlLGMpOmIuaGFzT3duUHJvcGVydHkoXCJkZWZhdWx0VmFsdWVcIikmJmJiKGEsYi50eXBlLFNhKGIuZGVmYXVsdFZhbHVlKSk7bnVsbD09Yi5jaGVja2VkJiZudWxsIT1iLmRlZmF1bHRDaGVja2VkJiYoYS5kZWZhdWx0Q2hlY2tlZD0hIWIuZGVmYXVsdENoZWNrZWQpfVxuZnVuY3Rpb24gY2IoYSxiLGMpe2lmKGIuaGFzT3duUHJvcGVydHkoXCJ2YWx1ZVwiKXx8Yi5oYXNPd25Qcm9wZXJ0eShcImRlZmF1bHRWYWx1ZVwiKSl7dmFyIGQ9Yi50eXBlO2lmKCEoXCJzdWJtaXRcIiE9PWQmJlwicmVzZXRcIiE9PWR8fHZvaWQgMCE9PWIudmFsdWUmJm51bGwhPT1iLnZhbHVlKSlyZXR1cm47Yj1cIlwiK2EuX3dyYXBwZXJTdGF0ZS5pbml0aWFsVmFsdWU7Y3x8Yj09PWEudmFsdWV8fChhLnZhbHVlPWIpO2EuZGVmYXVsdFZhbHVlPWJ9Yz1hLm5hbWU7XCJcIiE9PWMmJihhLm5hbWU9XCJcIik7YS5kZWZhdWx0Q2hlY2tlZD0hIWEuX3dyYXBwZXJTdGF0ZS5pbml0aWFsQ2hlY2tlZDtcIlwiIT09YyYmKGEubmFtZT1jKX1cbmZ1bmN0aW9uIGJiKGEsYixjKXtpZihcIm51bWJlclwiIT09Ynx8WGEoYS5vd25lckRvY3VtZW50KSE9PWEpbnVsbD09Yz9hLmRlZmF1bHRWYWx1ZT1cIlwiK2EuX3dyYXBwZXJTdGF0ZS5pbml0aWFsVmFsdWU6YS5kZWZhdWx0VmFsdWUhPT1cIlwiK2MmJihhLmRlZmF1bHRWYWx1ZT1cIlwiK2MpfWZ1bmN0aW9uIGRiKGEpe3ZhciBiPVwiXCI7YWEuQ2hpbGRyZW4uZm9yRWFjaChhLGZ1bmN0aW9uKGEpe251bGwhPWEmJihiKz1hKX0pO3JldHVybiBifWZ1bmN0aW9uIGViKGEsYil7YT1tKHtjaGlsZHJlbjp2b2lkIDB9LGIpO2lmKGI9ZGIoYi5jaGlsZHJlbikpYS5jaGlsZHJlbj1iO3JldHVybiBhfVxuZnVuY3Rpb24gZmIoYSxiLGMsZCl7YT1hLm9wdGlvbnM7aWYoYil7Yj17fTtmb3IodmFyIGU9MDtlPGMubGVuZ3RoO2UrKyliW1wiJFwiK2NbZV1dPSEwO2ZvcihjPTA7YzxhLmxlbmd0aDtjKyspZT1iLmhhc093blByb3BlcnR5KFwiJFwiK2FbY10udmFsdWUpLGFbY10uc2VsZWN0ZWQhPT1lJiYoYVtjXS5zZWxlY3RlZD1lKSxlJiZkJiYoYVtjXS5kZWZhdWx0U2VsZWN0ZWQ9ITApfWVsc2V7Yz1cIlwiK1NhKGMpO2I9bnVsbDtmb3IoZT0wO2U8YS5sZW5ndGg7ZSsrKXtpZihhW2VdLnZhbHVlPT09Yyl7YVtlXS5zZWxlY3RlZD0hMDtkJiYoYVtlXS5kZWZhdWx0U2VsZWN0ZWQ9ITApO3JldHVybn1udWxsIT09Ynx8YVtlXS5kaXNhYmxlZHx8KGI9YVtlXSl9bnVsbCE9PWImJihiLnNlbGVjdGVkPSEwKX19XG5mdW5jdGlvbiBnYihhLGIpe2lmKG51bGwhPWIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpdGhyb3cgRXJyb3IoeSg5MSkpO3JldHVybiBtKHt9LGIse3ZhbHVlOnZvaWQgMCxkZWZhdWx0VmFsdWU6dm9pZCAwLGNoaWxkcmVuOlwiXCIrYS5fd3JhcHBlclN0YXRlLmluaXRpYWxWYWx1ZX0pfWZ1bmN0aW9uIGhiKGEsYil7dmFyIGM9Yi52YWx1ZTtpZihudWxsPT1jKXtjPWIuY2hpbGRyZW47Yj1iLmRlZmF1bHRWYWx1ZTtpZihudWxsIT1jKXtpZihudWxsIT1iKXRocm93IEVycm9yKHkoOTIpKTtpZihBcnJheS5pc0FycmF5KGMpKXtpZighKDE+PWMubGVuZ3RoKSl0aHJvdyBFcnJvcih5KDkzKSk7Yz1jWzBdfWI9Y31udWxsPT1iJiYoYj1cIlwiKTtjPWJ9YS5fd3JhcHBlclN0YXRlPXtpbml0aWFsVmFsdWU6U2EoYyl9fVxuZnVuY3Rpb24gaWIoYSxiKXt2YXIgYz1TYShiLnZhbHVlKSxkPVNhKGIuZGVmYXVsdFZhbHVlKTtudWxsIT1jJiYoYz1cIlwiK2MsYyE9PWEudmFsdWUmJihhLnZhbHVlPWMpLG51bGw9PWIuZGVmYXVsdFZhbHVlJiZhLmRlZmF1bHRWYWx1ZSE9PWMmJihhLmRlZmF1bHRWYWx1ZT1jKSk7bnVsbCE9ZCYmKGEuZGVmYXVsdFZhbHVlPVwiXCIrZCl9ZnVuY3Rpb24gamIoYSl7dmFyIGI9YS50ZXh0Q29udGVudDtiPT09YS5fd3JhcHBlclN0YXRlLmluaXRpYWxWYWx1ZSYmXCJcIiE9PWImJm51bGwhPT1iJiYoYS52YWx1ZT1iKX12YXIga2I9e2h0bWw6XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCIsbWF0aG1sOlwiaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTFwiLHN2ZzpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJ9O1xuZnVuY3Rpb24gbGIoYSl7c3dpdGNoKGEpe2Nhc2UgXCJzdmdcIjpyZXR1cm5cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7Y2FzZSBcIm1hdGhcIjpyZXR1cm5cImh0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUxcIjtkZWZhdWx0OnJldHVyblwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwifX1mdW5jdGlvbiBtYihhLGIpe3JldHVybiBudWxsPT1hfHxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIj09PWE/bGIoYik6XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPT09YSYmXCJmb3JlaWduT2JqZWN0XCI9PT1iP1wiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiOmF9XG52YXIgbmIsb2I9ZnVuY3Rpb24oYSl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBNU0FwcCYmTVNBcHAuZXhlY1Vuc2FmZUxvY2FsRnVuY3Rpb24/ZnVuY3Rpb24oYixjLGQsZSl7TVNBcHAuZXhlY1Vuc2FmZUxvY2FsRnVuY3Rpb24oZnVuY3Rpb24oKXtyZXR1cm4gYShiLGMsZCxlKX0pfTphfShmdW5jdGlvbihhLGIpe2lmKGEubmFtZXNwYWNlVVJJIT09a2Iuc3ZnfHxcImlubmVySFRNTFwiaW4gYSlhLmlubmVySFRNTD1iO2Vsc2V7bmI9bmJ8fGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7bmIuaW5uZXJIVE1MPVwiPHN2Zz5cIitiLnZhbHVlT2YoKS50b1N0cmluZygpK1wiPC9zdmc+XCI7Zm9yKGI9bmIuZmlyc3RDaGlsZDthLmZpcnN0Q2hpbGQ7KWEucmVtb3ZlQ2hpbGQoYS5maXJzdENoaWxkKTtmb3IoO2IuZmlyc3RDaGlsZDspYS5hcHBlbmRDaGlsZChiLmZpcnN0Q2hpbGQpfX0pO1xuZnVuY3Rpb24gcGIoYSxiKXtpZihiKXt2YXIgYz1hLmZpcnN0Q2hpbGQ7aWYoYyYmYz09PWEubGFzdENoaWxkJiYzPT09Yy5ub2RlVHlwZSl7Yy5ub2RlVmFsdWU9YjtyZXR1cm59fWEudGV4dENvbnRlbnQ9Yn1cbnZhciBxYj17YW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6ITAsYm9yZGVySW1hZ2VPdXRzZXQ6ITAsYm9yZGVySW1hZ2VTbGljZTohMCxib3JkZXJJbWFnZVdpZHRoOiEwLGJveEZsZXg6ITAsYm94RmxleEdyb3VwOiEwLGJveE9yZGluYWxHcm91cDohMCxjb2x1bW5Db3VudDohMCxjb2x1bW5zOiEwLGZsZXg6ITAsZmxleEdyb3c6ITAsZmxleFBvc2l0aXZlOiEwLGZsZXhTaHJpbms6ITAsZmxleE5lZ2F0aXZlOiEwLGZsZXhPcmRlcjohMCxncmlkQXJlYTohMCxncmlkUm93OiEwLGdyaWRSb3dFbmQ6ITAsZ3JpZFJvd1NwYW46ITAsZ3JpZFJvd1N0YXJ0OiEwLGdyaWRDb2x1bW46ITAsZ3JpZENvbHVtbkVuZDohMCxncmlkQ29sdW1uU3BhbjohMCxncmlkQ29sdW1uU3RhcnQ6ITAsZm9udFdlaWdodDohMCxsaW5lQ2xhbXA6ITAsbGluZUhlaWdodDohMCxvcGFjaXR5OiEwLG9yZGVyOiEwLG9ycGhhbnM6ITAsdGFiU2l6ZTohMCx3aWRvd3M6ITAsekluZGV4OiEwLHpvb206ITAsZmlsbE9wYWNpdHk6ITAsXG5mbG9vZE9wYWNpdHk6ITAsc3RvcE9wYWNpdHk6ITAsc3Ryb2tlRGFzaGFycmF5OiEwLHN0cm9rZURhc2hvZmZzZXQ6ITAsc3Ryb2tlTWl0ZXJsaW1pdDohMCxzdHJva2VPcGFjaXR5OiEwLHN0cm9rZVdpZHRoOiEwfSxyYj1bXCJXZWJraXRcIixcIm1zXCIsXCJNb3pcIixcIk9cIl07T2JqZWN0LmtleXMocWIpLmZvckVhY2goZnVuY3Rpb24oYSl7cmIuZm9yRWFjaChmdW5jdGlvbihiKXtiPWIrYS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSthLnN1YnN0cmluZygxKTtxYltiXT1xYlthXX0pfSk7ZnVuY3Rpb24gc2IoYSxiLGMpe3JldHVybiBudWxsPT1ifHxcImJvb2xlYW5cIj09PXR5cGVvZiBifHxcIlwiPT09Yj9cIlwiOmN8fFwibnVtYmVyXCIhPT10eXBlb2YgYnx8MD09PWJ8fHFiLmhhc093blByb3BlcnR5KGEpJiZxYlthXT8oXCJcIitiKS50cmltKCk6YitcInB4XCJ9XG5mdW5jdGlvbiB0YihhLGIpe2E9YS5zdHlsZTtmb3IodmFyIGMgaW4gYilpZihiLmhhc093blByb3BlcnR5KGMpKXt2YXIgZD0wPT09Yy5pbmRleE9mKFwiLS1cIiksZT1zYihjLGJbY10sZCk7XCJmbG9hdFwiPT09YyYmKGM9XCJjc3NGbG9hdFwiKTtkP2Euc2V0UHJvcGVydHkoYyxlKTphW2NdPWV9fXZhciB1Yj1tKHttZW51aXRlbTohMH0se2FyZWE6ITAsYmFzZTohMCxicjohMCxjb2w6ITAsZW1iZWQ6ITAsaHI6ITAsaW1nOiEwLGlucHV0OiEwLGtleWdlbjohMCxsaW5rOiEwLG1ldGE6ITAscGFyYW06ITAsc291cmNlOiEwLHRyYWNrOiEwLHdicjohMH0pO1xuZnVuY3Rpb24gdmIoYSxiKXtpZihiKXtpZih1YlthXSYmKG51bGwhPWIuY2hpbGRyZW58fG51bGwhPWIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpKXRocm93IEVycm9yKHkoMTM3LGEpKTtpZihudWxsIT1iLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKXtpZihudWxsIT1iLmNoaWxkcmVuKXRocm93IEVycm9yKHkoNjApKTtpZighKFwib2JqZWN0XCI9PT10eXBlb2YgYi5kYW5nZXJvdXNseVNldElubmVySFRNTCYmXCJfX2h0bWxcImluIGIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpKXRocm93IEVycm9yKHkoNjEpKTt9aWYobnVsbCE9Yi5zdHlsZSYmXCJvYmplY3RcIiE9PXR5cGVvZiBiLnN0eWxlKXRocm93IEVycm9yKHkoNjIpKTt9fVxuZnVuY3Rpb24gd2IoYSxiKXtpZigtMT09PWEuaW5kZXhPZihcIi1cIikpcmV0dXJuXCJzdHJpbmdcIj09PXR5cGVvZiBiLmlzO3N3aXRjaChhKXtjYXNlIFwiYW5ub3RhdGlvbi14bWxcIjpjYXNlIFwiY29sb3ItcHJvZmlsZVwiOmNhc2UgXCJmb250LWZhY2VcIjpjYXNlIFwiZm9udC1mYWNlLXNyY1wiOmNhc2UgXCJmb250LWZhY2UtdXJpXCI6Y2FzZSBcImZvbnQtZmFjZS1mb3JtYXRcIjpjYXNlIFwiZm9udC1mYWNlLW5hbWVcIjpjYXNlIFwibWlzc2luZy1nbHlwaFwiOnJldHVybiExO2RlZmF1bHQ6cmV0dXJuITB9fWZ1bmN0aW9uIHhiKGEpe2E9YS50YXJnZXR8fGEuc3JjRWxlbWVudHx8d2luZG93O2EuY29ycmVzcG9uZGluZ1VzZUVsZW1lbnQmJihhPWEuY29ycmVzcG9uZGluZ1VzZUVsZW1lbnQpO3JldHVybiAzPT09YS5ub2RlVHlwZT9hLnBhcmVudE5vZGU6YX12YXIgeWI9bnVsbCx6Yj1udWxsLEFiPW51bGw7XG5mdW5jdGlvbiBCYihhKXtpZihhPUNiKGEpKXtpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgeWIpdGhyb3cgRXJyb3IoeSgyODApKTt2YXIgYj1hLnN0YXRlTm9kZTtiJiYoYj1EYihiKSx5YihhLnN0YXRlTm9kZSxhLnR5cGUsYikpfX1mdW5jdGlvbiBFYihhKXt6Yj9BYj9BYi5wdXNoKGEpOkFiPVthXTp6Yj1hfWZ1bmN0aW9uIEZiKCl7aWYoemIpe3ZhciBhPXpiLGI9QWI7QWI9emI9bnVsbDtCYihhKTtpZihiKWZvcihhPTA7YTxiLmxlbmd0aDthKyspQmIoYlthXSl9fWZ1bmN0aW9uIEdiKGEsYil7cmV0dXJuIGEoYil9ZnVuY3Rpb24gSGIoYSxiLGMsZCxlKXtyZXR1cm4gYShiLGMsZCxlKX1mdW5jdGlvbiBJYigpe312YXIgSmI9R2IsS2I9ITEsTGI9ITE7ZnVuY3Rpb24gTWIoKXtpZihudWxsIT09emJ8fG51bGwhPT1BYilJYigpLEZiKCl9XG5mdW5jdGlvbiBOYihhLGIsYyl7aWYoTGIpcmV0dXJuIGEoYixjKTtMYj0hMDt0cnl7cmV0dXJuIEpiKGEsYixjKX1maW5hbGx5e0xiPSExLE1iKCl9fVxuZnVuY3Rpb24gT2IoYSxiKXt2YXIgYz1hLnN0YXRlTm9kZTtpZihudWxsPT09YylyZXR1cm4gbnVsbDt2YXIgZD1EYihjKTtpZihudWxsPT09ZClyZXR1cm4gbnVsbDtjPWRbYl07YTpzd2l0Y2goYil7Y2FzZSBcIm9uQ2xpY2tcIjpjYXNlIFwib25DbGlja0NhcHR1cmVcIjpjYXNlIFwib25Eb3VibGVDbGlja1wiOmNhc2UgXCJvbkRvdWJsZUNsaWNrQ2FwdHVyZVwiOmNhc2UgXCJvbk1vdXNlRG93blwiOmNhc2UgXCJvbk1vdXNlRG93bkNhcHR1cmVcIjpjYXNlIFwib25Nb3VzZU1vdmVcIjpjYXNlIFwib25Nb3VzZU1vdmVDYXB0dXJlXCI6Y2FzZSBcIm9uTW91c2VVcFwiOmNhc2UgXCJvbk1vdXNlVXBDYXB0dXJlXCI6Y2FzZSBcIm9uTW91c2VFbnRlclwiOihkPSFkLmRpc2FibGVkKXx8KGE9YS50eXBlLGQ9IShcImJ1dHRvblwiPT09YXx8XCJpbnB1dFwiPT09YXx8XCJzZWxlY3RcIj09PWF8fFwidGV4dGFyZWFcIj09PWEpKTthPSFkO2JyZWFrIGE7ZGVmYXVsdDphPSExfWlmKGEpcmV0dXJuIG51bGw7aWYoYyYmXCJmdW5jdGlvblwiIT09XG50eXBlb2YgYyl0aHJvdyBFcnJvcih5KDIzMSxiLHR5cGVvZiBjKSk7cmV0dXJuIGN9dmFyIFBiPSExO2lmKGZhKXRyeXt2YXIgUWI9e307T2JqZWN0LmRlZmluZVByb3BlcnR5KFFiLFwicGFzc2l2ZVwiLHtnZXQ6ZnVuY3Rpb24oKXtQYj0hMH19KTt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRlc3RcIixRYixRYik7d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0ZXN0XCIsUWIsUWIpfWNhdGNoKGEpe1BiPSExfWZ1bmN0aW9uIFJiKGEsYixjLGQsZSxmLGcsaCxrKXt2YXIgbD1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMyk7dHJ5e2IuYXBwbHkoYyxsKX1jYXRjaChuKXt0aGlzLm9uRXJyb3Iobil9fXZhciBTYj0hMSxUYj1udWxsLFViPSExLFZiPW51bGwsV2I9e29uRXJyb3I6ZnVuY3Rpb24oYSl7U2I9ITA7VGI9YX19O2Z1bmN0aW9uIFhiKGEsYixjLGQsZSxmLGcsaCxrKXtTYj0hMTtUYj1udWxsO1JiLmFwcGx5KFdiLGFyZ3VtZW50cyl9XG5mdW5jdGlvbiBZYihhLGIsYyxkLGUsZixnLGgsayl7WGIuYXBwbHkodGhpcyxhcmd1bWVudHMpO2lmKFNiKXtpZihTYil7dmFyIGw9VGI7U2I9ITE7VGI9bnVsbH1lbHNlIHRocm93IEVycm9yKHkoMTk4KSk7VWJ8fChVYj0hMCxWYj1sKX19ZnVuY3Rpb24gWmIoYSl7dmFyIGI9YSxjPWE7aWYoYS5hbHRlcm5hdGUpZm9yKDtiLnJldHVybjspYj1iLnJldHVybjtlbHNle2E9YjtkbyBiPWEsMCE9PShiLmZsYWdzJjEwMjYpJiYoYz1iLnJldHVybiksYT1iLnJldHVybjt3aGlsZShhKX1yZXR1cm4gMz09PWIudGFnP2M6bnVsbH1mdW5jdGlvbiAkYihhKXtpZigxMz09PWEudGFnKXt2YXIgYj1hLm1lbW9pemVkU3RhdGU7bnVsbD09PWImJihhPWEuYWx0ZXJuYXRlLG51bGwhPT1hJiYoYj1hLm1lbW9pemVkU3RhdGUpKTtpZihudWxsIT09YilyZXR1cm4gYi5kZWh5ZHJhdGVkfXJldHVybiBudWxsfWZ1bmN0aW9uIGFjKGEpe2lmKFpiKGEpIT09YSl0aHJvdyBFcnJvcih5KDE4OCkpO31cbmZ1bmN0aW9uIGJjKGEpe3ZhciBiPWEuYWx0ZXJuYXRlO2lmKCFiKXtiPVpiKGEpO2lmKG51bGw9PT1iKXRocm93IEVycm9yKHkoMTg4KSk7cmV0dXJuIGIhPT1hP251bGw6YX1mb3IodmFyIGM9YSxkPWI7Oyl7dmFyIGU9Yy5yZXR1cm47aWYobnVsbD09PWUpYnJlYWs7dmFyIGY9ZS5hbHRlcm5hdGU7aWYobnVsbD09PWYpe2Q9ZS5yZXR1cm47aWYobnVsbCE9PWQpe2M9ZDtjb250aW51ZX1icmVha31pZihlLmNoaWxkPT09Zi5jaGlsZCl7Zm9yKGY9ZS5jaGlsZDtmOyl7aWYoZj09PWMpcmV0dXJuIGFjKGUpLGE7aWYoZj09PWQpcmV0dXJuIGFjKGUpLGI7Zj1mLnNpYmxpbmd9dGhyb3cgRXJyb3IoeSgxODgpKTt9aWYoYy5yZXR1cm4hPT1kLnJldHVybiljPWUsZD1mO2Vsc2V7Zm9yKHZhciBnPSExLGg9ZS5jaGlsZDtoOyl7aWYoaD09PWMpe2c9ITA7Yz1lO2Q9ZjticmVha31pZihoPT09ZCl7Zz0hMDtkPWU7Yz1mO2JyZWFrfWg9aC5zaWJsaW5nfWlmKCFnKXtmb3IoaD1mLmNoaWxkO2g7KXtpZihoPT09XG5jKXtnPSEwO2M9ZjtkPWU7YnJlYWt9aWYoaD09PWQpe2c9ITA7ZD1mO2M9ZTticmVha31oPWguc2libGluZ31pZighZyl0aHJvdyBFcnJvcih5KDE4OSkpO319aWYoYy5hbHRlcm5hdGUhPT1kKXRocm93IEVycm9yKHkoMTkwKSk7fWlmKDMhPT1jLnRhZyl0aHJvdyBFcnJvcih5KDE4OCkpO3JldHVybiBjLnN0YXRlTm9kZS5jdXJyZW50PT09Yz9hOmJ9ZnVuY3Rpb24gY2MoYSl7YT1iYyhhKTtpZighYSlyZXR1cm4gbnVsbDtmb3IodmFyIGI9YTs7KXtpZig1PT09Yi50YWd8fDY9PT1iLnRhZylyZXR1cm4gYjtpZihiLmNoaWxkKWIuY2hpbGQucmV0dXJuPWIsYj1iLmNoaWxkO2Vsc2V7aWYoYj09PWEpYnJlYWs7Zm9yKDshYi5zaWJsaW5nOyl7aWYoIWIucmV0dXJufHxiLnJldHVybj09PWEpcmV0dXJuIG51bGw7Yj1iLnJldHVybn1iLnNpYmxpbmcucmV0dXJuPWIucmV0dXJuO2I9Yi5zaWJsaW5nfX1yZXR1cm4gbnVsbH1cbmZ1bmN0aW9uIGRjKGEsYil7Zm9yKHZhciBjPWEuYWx0ZXJuYXRlO251bGwhPT1iOyl7aWYoYj09PWF8fGI9PT1jKXJldHVybiEwO2I9Yi5yZXR1cm59cmV0dXJuITF9dmFyIGVjLGZjLGdjLGhjLGljPSExLGpjPVtdLGtjPW51bGwsbGM9bnVsbCxtYz1udWxsLG5jPW5ldyBNYXAsb2M9bmV3IE1hcCxwYz1bXSxxYz1cIm1vdXNlZG93biBtb3VzZXVwIHRvdWNoY2FuY2VsIHRvdWNoZW5kIHRvdWNoc3RhcnQgYXV4Y2xpY2sgZGJsY2xpY2sgcG9pbnRlcmNhbmNlbCBwb2ludGVyZG93biBwb2ludGVydXAgZHJhZ2VuZCBkcmFnc3RhcnQgZHJvcCBjb21wb3NpdGlvbmVuZCBjb21wb3NpdGlvbnN0YXJ0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgaW5wdXQgdGV4dElucHV0IGNvcHkgY3V0IHBhc3RlIGNsaWNrIGNoYW5nZSBjb250ZXh0bWVudSByZXNldCBzdWJtaXRcIi5zcGxpdChcIiBcIik7XG5mdW5jdGlvbiByYyhhLGIsYyxkLGUpe3JldHVybntibG9ja2VkT246YSxkb21FdmVudE5hbWU6YixldmVudFN5c3RlbUZsYWdzOmN8MTYsbmF0aXZlRXZlbnQ6ZSx0YXJnZXRDb250YWluZXJzOltkXX19ZnVuY3Rpb24gc2MoYSxiKXtzd2l0Y2goYSl7Y2FzZSBcImZvY3VzaW5cIjpjYXNlIFwiZm9jdXNvdXRcIjprYz1udWxsO2JyZWFrO2Nhc2UgXCJkcmFnZW50ZXJcIjpjYXNlIFwiZHJhZ2xlYXZlXCI6bGM9bnVsbDticmVhaztjYXNlIFwibW91c2VvdmVyXCI6Y2FzZSBcIm1vdXNlb3V0XCI6bWM9bnVsbDticmVhaztjYXNlIFwicG9pbnRlcm92ZXJcIjpjYXNlIFwicG9pbnRlcm91dFwiOm5jLmRlbGV0ZShiLnBvaW50ZXJJZCk7YnJlYWs7Y2FzZSBcImdvdHBvaW50ZXJjYXB0dXJlXCI6Y2FzZSBcImxvc3Rwb2ludGVyY2FwdHVyZVwiOm9jLmRlbGV0ZShiLnBvaW50ZXJJZCl9fVxuZnVuY3Rpb24gdGMoYSxiLGMsZCxlLGYpe2lmKG51bGw9PT1hfHxhLm5hdGl2ZUV2ZW50IT09ZilyZXR1cm4gYT1yYyhiLGMsZCxlLGYpLG51bGwhPT1iJiYoYj1DYihiKSxudWxsIT09YiYmZmMoYikpLGE7YS5ldmVudFN5c3RlbUZsYWdzfD1kO2I9YS50YXJnZXRDb250YWluZXJzO251bGwhPT1lJiYtMT09PWIuaW5kZXhPZihlKSYmYi5wdXNoKGUpO3JldHVybiBhfVxuZnVuY3Rpb24gdWMoYSxiLGMsZCxlKXtzd2l0Y2goYil7Y2FzZSBcImZvY3VzaW5cIjpyZXR1cm4ga2M9dGMoa2MsYSxiLGMsZCxlKSwhMDtjYXNlIFwiZHJhZ2VudGVyXCI6cmV0dXJuIGxjPXRjKGxjLGEsYixjLGQsZSksITA7Y2FzZSBcIm1vdXNlb3ZlclwiOnJldHVybiBtYz10YyhtYyxhLGIsYyxkLGUpLCEwO2Nhc2UgXCJwb2ludGVyb3ZlclwiOnZhciBmPWUucG9pbnRlcklkO25jLnNldChmLHRjKG5jLmdldChmKXx8bnVsbCxhLGIsYyxkLGUpKTtyZXR1cm4hMDtjYXNlIFwiZ290cG9pbnRlcmNhcHR1cmVcIjpyZXR1cm4gZj1lLnBvaW50ZXJJZCxvYy5zZXQoZix0YyhvYy5nZXQoZil8fG51bGwsYSxiLGMsZCxlKSksITB9cmV0dXJuITF9XG5mdW5jdGlvbiB2YyhhKXt2YXIgYj13YyhhLnRhcmdldCk7aWYobnVsbCE9PWIpe3ZhciBjPVpiKGIpO2lmKG51bGwhPT1jKWlmKGI9Yy50YWcsMTM9PT1iKXtpZihiPSRiKGMpLG51bGwhPT1iKXthLmJsb2NrZWRPbj1iO2hjKGEubGFuZVByaW9yaXR5LGZ1bmN0aW9uKCl7ci51bnN0YWJsZV9ydW5XaXRoUHJpb3JpdHkoYS5wcmlvcml0eSxmdW5jdGlvbigpe2djKGMpfSl9KTtyZXR1cm59fWVsc2UgaWYoMz09PWImJmMuc3RhdGVOb2RlLmh5ZHJhdGUpe2EuYmxvY2tlZE9uPTM9PT1jLnRhZz9jLnN0YXRlTm9kZS5jb250YWluZXJJbmZvOm51bGw7cmV0dXJufX1hLmJsb2NrZWRPbj1udWxsfVxuZnVuY3Rpb24geGMoYSl7aWYobnVsbCE9PWEuYmxvY2tlZE9uKXJldHVybiExO2Zvcih2YXIgYj1hLnRhcmdldENvbnRhaW5lcnM7MDxiLmxlbmd0aDspe3ZhciBjPXljKGEuZG9tRXZlbnROYW1lLGEuZXZlbnRTeXN0ZW1GbGFncyxiWzBdLGEubmF0aXZlRXZlbnQpO2lmKG51bGwhPT1jKXJldHVybiBiPUNiKGMpLG51bGwhPT1iJiZmYyhiKSxhLmJsb2NrZWRPbj1jLCExO2Iuc2hpZnQoKX1yZXR1cm4hMH1mdW5jdGlvbiB6YyhhLGIsYyl7eGMoYSkmJmMuZGVsZXRlKGIpfVxuZnVuY3Rpb24gQWMoKXtmb3IoaWM9ITE7MDxqYy5sZW5ndGg7KXt2YXIgYT1qY1swXTtpZihudWxsIT09YS5ibG9ja2VkT24pe2E9Q2IoYS5ibG9ja2VkT24pO251bGwhPT1hJiZlYyhhKTticmVha31mb3IodmFyIGI9YS50YXJnZXRDb250YWluZXJzOzA8Yi5sZW5ndGg7KXt2YXIgYz15YyhhLmRvbUV2ZW50TmFtZSxhLmV2ZW50U3lzdGVtRmxhZ3MsYlswXSxhLm5hdGl2ZUV2ZW50KTtpZihudWxsIT09Yyl7YS5ibG9ja2VkT249YzticmVha31iLnNoaWZ0KCl9bnVsbD09PWEuYmxvY2tlZE9uJiZqYy5zaGlmdCgpfW51bGwhPT1rYyYmeGMoa2MpJiYoa2M9bnVsbCk7bnVsbCE9PWxjJiZ4YyhsYykmJihsYz1udWxsKTtudWxsIT09bWMmJnhjKG1jKSYmKG1jPW51bGwpO25jLmZvckVhY2goemMpO29jLmZvckVhY2goemMpfVxuZnVuY3Rpb24gQmMoYSxiKXthLmJsb2NrZWRPbj09PWImJihhLmJsb2NrZWRPbj1udWxsLGljfHwoaWM9ITAsci51bnN0YWJsZV9zY2hlZHVsZUNhbGxiYWNrKHIudW5zdGFibGVfTm9ybWFsUHJpb3JpdHksQWMpKSl9XG5mdW5jdGlvbiBDYyhhKXtmdW5jdGlvbiBiKGIpe3JldHVybiBCYyhiLGEpfWlmKDA8amMubGVuZ3RoKXtCYyhqY1swXSxhKTtmb3IodmFyIGM9MTtjPGpjLmxlbmd0aDtjKyspe3ZhciBkPWpjW2NdO2QuYmxvY2tlZE9uPT09YSYmKGQuYmxvY2tlZE9uPW51bGwpfX1udWxsIT09a2MmJkJjKGtjLGEpO251bGwhPT1sYyYmQmMobGMsYSk7bnVsbCE9PW1jJiZCYyhtYyxhKTtuYy5mb3JFYWNoKGIpO29jLmZvckVhY2goYik7Zm9yKGM9MDtjPHBjLmxlbmd0aDtjKyspZD1wY1tjXSxkLmJsb2NrZWRPbj09PWEmJihkLmJsb2NrZWRPbj1udWxsKTtmb3IoOzA8cGMubGVuZ3RoJiYoYz1wY1swXSxudWxsPT09Yy5ibG9ja2VkT24pOyl2YyhjKSxudWxsPT09Yy5ibG9ja2VkT24mJnBjLnNoaWZ0KCl9XG5mdW5jdGlvbiBEYyhhLGIpe3ZhciBjPXt9O2NbYS50b0xvd2VyQ2FzZSgpXT1iLnRvTG93ZXJDYXNlKCk7Y1tcIldlYmtpdFwiK2FdPVwid2Via2l0XCIrYjtjW1wiTW96XCIrYV09XCJtb3pcIitiO3JldHVybiBjfXZhciBFYz17YW5pbWF0aW9uZW5kOkRjKFwiQW5pbWF0aW9uXCIsXCJBbmltYXRpb25FbmRcIiksYW5pbWF0aW9uaXRlcmF0aW9uOkRjKFwiQW5pbWF0aW9uXCIsXCJBbmltYXRpb25JdGVyYXRpb25cIiksYW5pbWF0aW9uc3RhcnQ6RGMoXCJBbmltYXRpb25cIixcIkFuaW1hdGlvblN0YXJ0XCIpLHRyYW5zaXRpb25lbmQ6RGMoXCJUcmFuc2l0aW9uXCIsXCJUcmFuc2l0aW9uRW5kXCIpfSxGYz17fSxHYz17fTtcbmZhJiYoR2M9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKS5zdHlsZSxcIkFuaW1hdGlvbkV2ZW50XCJpbiB3aW5kb3d8fChkZWxldGUgRWMuYW5pbWF0aW9uZW5kLmFuaW1hdGlvbixkZWxldGUgRWMuYW5pbWF0aW9uaXRlcmF0aW9uLmFuaW1hdGlvbixkZWxldGUgRWMuYW5pbWF0aW9uc3RhcnQuYW5pbWF0aW9uKSxcIlRyYW5zaXRpb25FdmVudFwiaW4gd2luZG93fHxkZWxldGUgRWMudHJhbnNpdGlvbmVuZC50cmFuc2l0aW9uKTtmdW5jdGlvbiBIYyhhKXtpZihGY1thXSlyZXR1cm4gRmNbYV07aWYoIUVjW2FdKXJldHVybiBhO3ZhciBiPUVjW2FdLGM7Zm9yKGMgaW4gYilpZihiLmhhc093blByb3BlcnR5KGMpJiZjIGluIEdjKXJldHVybiBGY1thXT1iW2NdO3JldHVybiBhfVxudmFyIEljPUhjKFwiYW5pbWF0aW9uZW5kXCIpLEpjPUhjKFwiYW5pbWF0aW9uaXRlcmF0aW9uXCIpLEtjPUhjKFwiYW5pbWF0aW9uc3RhcnRcIiksTGM9SGMoXCJ0cmFuc2l0aW9uZW5kXCIpLE1jPW5ldyBNYXAsTmM9bmV3IE1hcCxPYz1bXCJhYm9ydFwiLFwiYWJvcnRcIixJYyxcImFuaW1hdGlvbkVuZFwiLEpjLFwiYW5pbWF0aW9uSXRlcmF0aW9uXCIsS2MsXCJhbmltYXRpb25TdGFydFwiLFwiY2FucGxheVwiLFwiY2FuUGxheVwiLFwiY2FucGxheXRocm91Z2hcIixcImNhblBsYXlUaHJvdWdoXCIsXCJkdXJhdGlvbmNoYW5nZVwiLFwiZHVyYXRpb25DaGFuZ2VcIixcImVtcHRpZWRcIixcImVtcHRpZWRcIixcImVuY3J5cHRlZFwiLFwiZW5jcnlwdGVkXCIsXCJlbmRlZFwiLFwiZW5kZWRcIixcImVycm9yXCIsXCJlcnJvclwiLFwiZ290cG9pbnRlcmNhcHR1cmVcIixcImdvdFBvaW50ZXJDYXB0dXJlXCIsXCJsb2FkXCIsXCJsb2FkXCIsXCJsb2FkZWRkYXRhXCIsXCJsb2FkZWREYXRhXCIsXCJsb2FkZWRtZXRhZGF0YVwiLFwibG9hZGVkTWV0YWRhdGFcIixcImxvYWRzdGFydFwiLFwibG9hZFN0YXJ0XCIsXG5cImxvc3Rwb2ludGVyY2FwdHVyZVwiLFwibG9zdFBvaW50ZXJDYXB0dXJlXCIsXCJwbGF5aW5nXCIsXCJwbGF5aW5nXCIsXCJwcm9ncmVzc1wiLFwicHJvZ3Jlc3NcIixcInNlZWtpbmdcIixcInNlZWtpbmdcIixcInN0YWxsZWRcIixcInN0YWxsZWRcIixcInN1c3BlbmRcIixcInN1c3BlbmRcIixcInRpbWV1cGRhdGVcIixcInRpbWVVcGRhdGVcIixMYyxcInRyYW5zaXRpb25FbmRcIixcIndhaXRpbmdcIixcIndhaXRpbmdcIl07ZnVuY3Rpb24gUGMoYSxiKXtmb3IodmFyIGM9MDtjPGEubGVuZ3RoO2MrPTIpe3ZhciBkPWFbY10sZT1hW2MrMV07ZT1cIm9uXCIrKGVbMF0udG9VcHBlckNhc2UoKStlLnNsaWNlKDEpKTtOYy5zZXQoZCxiKTtNYy5zZXQoZCxlKTtkYShlLFtkXSl9fXZhciBRYz1yLnVuc3RhYmxlX25vdztRYygpO3ZhciBGPTg7XG5mdW5jdGlvbiBSYyhhKXtpZigwIT09KDEmYSkpcmV0dXJuIEY9MTUsMTtpZigwIT09KDImYSkpcmV0dXJuIEY9MTQsMjtpZigwIT09KDQmYSkpcmV0dXJuIEY9MTMsNDt2YXIgYj0yNCZhO2lmKDAhPT1iKXJldHVybiBGPTEyLGI7aWYoMCE9PShhJjMyKSlyZXR1cm4gRj0xMSwzMjtiPTE5MiZhO2lmKDAhPT1iKXJldHVybiBGPTEwLGI7aWYoMCE9PShhJjI1NikpcmV0dXJuIEY9OSwyNTY7Yj0zNTg0JmE7aWYoMCE9PWIpcmV0dXJuIEY9OCxiO2lmKDAhPT0oYSY0MDk2KSlyZXR1cm4gRj03LDQwOTY7Yj00MTg2MTEyJmE7aWYoMCE9PWIpcmV0dXJuIEY9NixiO2I9NjI5MTQ1NjAmYTtpZigwIT09YilyZXR1cm4gRj01LGI7aWYoYSY2NzEwODg2NClyZXR1cm4gRj00LDY3MTA4ODY0O2lmKDAhPT0oYSYxMzQyMTc3MjgpKXJldHVybiBGPTMsMTM0MjE3NzI4O2I9ODA1MzA2MzY4JmE7aWYoMCE9PWIpcmV0dXJuIEY9MixiO2lmKDAhPT0oMTA3Mzc0MTgyNCZhKSlyZXR1cm4gRj0xLDEwNzM3NDE4MjQ7XG5GPTg7cmV0dXJuIGF9ZnVuY3Rpb24gU2MoYSl7c3dpdGNoKGEpe2Nhc2UgOTk6cmV0dXJuIDE1O2Nhc2UgOTg6cmV0dXJuIDEwO2Nhc2UgOTc6Y2FzZSA5NjpyZXR1cm4gODtjYXNlIDk1OnJldHVybiAyO2RlZmF1bHQ6cmV0dXJuIDB9fWZ1bmN0aW9uIFRjKGEpe3N3aXRjaChhKXtjYXNlIDE1OmNhc2UgMTQ6cmV0dXJuIDk5O2Nhc2UgMTM6Y2FzZSAxMjpjYXNlIDExOmNhc2UgMTA6cmV0dXJuIDk4O2Nhc2UgOTpjYXNlIDg6Y2FzZSA3OmNhc2UgNjpjYXNlIDQ6Y2FzZSA1OnJldHVybiA5NztjYXNlIDM6Y2FzZSAyOmNhc2UgMTpyZXR1cm4gOTU7Y2FzZSAwOnJldHVybiA5MDtkZWZhdWx0OnRocm93IEVycm9yKHkoMzU4LGEpKTt9fVxuZnVuY3Rpb24gVWMoYSxiKXt2YXIgYz1hLnBlbmRpbmdMYW5lcztpZigwPT09YylyZXR1cm4gRj0wO3ZhciBkPTAsZT0wLGY9YS5leHBpcmVkTGFuZXMsZz1hLnN1c3BlbmRlZExhbmVzLGg9YS5waW5nZWRMYW5lcztpZigwIT09ZilkPWYsZT1GPTE1O2Vsc2UgaWYoZj1jJjEzNDIxNzcyNywwIT09Zil7dmFyIGs9ZiZ+ZzswIT09az8oZD1SYyhrKSxlPUYpOihoJj1mLDAhPT1oJiYoZD1SYyhoKSxlPUYpKX1lbHNlIGY9YyZ+ZywwIT09Zj8oZD1SYyhmKSxlPUYpOjAhPT1oJiYoZD1SYyhoKSxlPUYpO2lmKDA9PT1kKXJldHVybiAwO2Q9MzEtVmMoZCk7ZD1jJigoMD5kPzA6MTw8ZCk8PDEpLTE7aWYoMCE9PWImJmIhPT1kJiYwPT09KGImZykpe1JjKGIpO2lmKGU8PUYpcmV0dXJuIGI7Rj1lfWI9YS5lbnRhbmdsZWRMYW5lcztpZigwIT09Yilmb3IoYT1hLmVudGFuZ2xlbWVudHMsYiY9ZDswPGI7KWM9MzEtVmMoYiksZT0xPDxjLGR8PWFbY10sYiY9fmU7cmV0dXJuIGR9XG5mdW5jdGlvbiBXYyhhKXthPWEucGVuZGluZ0xhbmVzJi0xMDczNzQxODI1O3JldHVybiAwIT09YT9hOmEmMTA3Mzc0MTgyND8xMDczNzQxODI0OjB9ZnVuY3Rpb24gWGMoYSxiKXtzd2l0Y2goYSl7Y2FzZSAxNTpyZXR1cm4gMTtjYXNlIDE0OnJldHVybiAyO2Nhc2UgMTI6cmV0dXJuIGE9WWMoMjQmfmIpLDA9PT1hP1hjKDEwLGIpOmE7Y2FzZSAxMDpyZXR1cm4gYT1ZYygxOTImfmIpLDA9PT1hP1hjKDgsYik6YTtjYXNlIDg6cmV0dXJuIGE9WWMoMzU4NCZ+YiksMD09PWEmJihhPVljKDQxODYxMTImfmIpLDA9PT1hJiYoYT01MTIpKSxhO2Nhc2UgMjpyZXR1cm4gYj1ZYyg4MDUzMDYzNjgmfmIpLDA9PT1iJiYoYj0yNjg0MzU0NTYpLGJ9dGhyb3cgRXJyb3IoeSgzNTgsYSkpO31mdW5jdGlvbiBZYyhhKXtyZXR1cm4gYSYtYX1mdW5jdGlvbiBaYyhhKXtmb3IodmFyIGI9W10sYz0wOzMxPmM7YysrKWIucHVzaChhKTtyZXR1cm4gYn1cbmZ1bmN0aW9uICRjKGEsYixjKXthLnBlbmRpbmdMYW5lc3w9Yjt2YXIgZD1iLTE7YS5zdXNwZW5kZWRMYW5lcyY9ZDthLnBpbmdlZExhbmVzJj1kO2E9YS5ldmVudFRpbWVzO2I9MzEtVmMoYik7YVtiXT1jfXZhciBWYz1NYXRoLmNsejMyP01hdGguY2x6MzI6YWQsYmQ9TWF0aC5sb2csY2Q9TWF0aC5MTjI7ZnVuY3Rpb24gYWQoYSl7cmV0dXJuIDA9PT1hPzMyOjMxLShiZChhKS9jZHwwKXwwfXZhciBkZD1yLnVuc3RhYmxlX1VzZXJCbG9ja2luZ1ByaW9yaXR5LGVkPXIudW5zdGFibGVfcnVuV2l0aFByaW9yaXR5LGZkPSEwO2Z1bmN0aW9uIGdkKGEsYixjLGQpe0tifHxJYigpO3ZhciBlPWhkLGY9S2I7S2I9ITA7dHJ5e0hiKGUsYSxiLGMsZCl9ZmluYWxseXsoS2I9Zil8fE1iKCl9fWZ1bmN0aW9uIGlkKGEsYixjLGQpe2VkKGRkLGhkLmJpbmQobnVsbCxhLGIsYyxkKSl9XG5mdW5jdGlvbiBoZChhLGIsYyxkKXtpZihmZCl7dmFyIGU7aWYoKGU9MD09PShiJjQpKSYmMDxqYy5sZW5ndGgmJi0xPHFjLmluZGV4T2YoYSkpYT1yYyhudWxsLGEsYixjLGQpLGpjLnB1c2goYSk7ZWxzZXt2YXIgZj15YyhhLGIsYyxkKTtpZihudWxsPT09ZillJiZzYyhhLGQpO2Vsc2V7aWYoZSl7aWYoLTE8cWMuaW5kZXhPZihhKSl7YT1yYyhmLGEsYixjLGQpO2pjLnB1c2goYSk7cmV0dXJufWlmKHVjKGYsYSxiLGMsZCkpcmV0dXJuO3NjKGEsZCl9amQoYSxiLGQsbnVsbCxjKX19fX1cbmZ1bmN0aW9uIHljKGEsYixjLGQpe3ZhciBlPXhiKGQpO2U9d2MoZSk7aWYobnVsbCE9PWUpe3ZhciBmPVpiKGUpO2lmKG51bGw9PT1mKWU9bnVsbDtlbHNle3ZhciBnPWYudGFnO2lmKDEzPT09Zyl7ZT0kYihmKTtpZihudWxsIT09ZSlyZXR1cm4gZTtlPW51bGx9ZWxzZSBpZigzPT09Zyl7aWYoZi5zdGF0ZU5vZGUuaHlkcmF0ZSlyZXR1cm4gMz09PWYudGFnP2Yuc3RhdGVOb2RlLmNvbnRhaW5lckluZm86bnVsbDtlPW51bGx9ZWxzZSBmIT09ZSYmKGU9bnVsbCl9fWpkKGEsYixkLGUsYyk7cmV0dXJuIG51bGx9dmFyIGtkPW51bGwsbGQ9bnVsbCxtZD1udWxsO1xuZnVuY3Rpb24gbmQoKXtpZihtZClyZXR1cm4gbWQ7dmFyIGEsYj1sZCxjPWIubGVuZ3RoLGQsZT1cInZhbHVlXCJpbiBrZD9rZC52YWx1ZTprZC50ZXh0Q29udGVudCxmPWUubGVuZ3RoO2ZvcihhPTA7YTxjJiZiW2FdPT09ZVthXTthKyspO3ZhciBnPWMtYTtmb3IoZD0xO2Q8PWcmJmJbYy1kXT09PWVbZi1kXTtkKyspO3JldHVybiBtZD1lLnNsaWNlKGEsMTxkPzEtZDp2b2lkIDApfWZ1bmN0aW9uIG9kKGEpe3ZhciBiPWEua2V5Q29kZTtcImNoYXJDb2RlXCJpbiBhPyhhPWEuY2hhckNvZGUsMD09PWEmJjEzPT09YiYmKGE9MTMpKTphPWI7MTA9PT1hJiYoYT0xMyk7cmV0dXJuIDMyPD1hfHwxMz09PWE/YTowfWZ1bmN0aW9uIHBkKCl7cmV0dXJuITB9ZnVuY3Rpb24gcWQoKXtyZXR1cm4hMX1cbmZ1bmN0aW9uIHJkKGEpe2Z1bmN0aW9uIGIoYixkLGUsZixnKXt0aGlzLl9yZWFjdE5hbWU9Yjt0aGlzLl90YXJnZXRJbnN0PWU7dGhpcy50eXBlPWQ7dGhpcy5uYXRpdmVFdmVudD1mO3RoaXMudGFyZ2V0PWc7dGhpcy5jdXJyZW50VGFyZ2V0PW51bGw7Zm9yKHZhciBjIGluIGEpYS5oYXNPd25Qcm9wZXJ0eShjKSYmKGI9YVtjXSx0aGlzW2NdPWI/YihmKTpmW2NdKTt0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD0obnVsbCE9Zi5kZWZhdWx0UHJldmVudGVkP2YuZGVmYXVsdFByZXZlbnRlZDohMT09PWYucmV0dXJuVmFsdWUpP3BkOnFkO3RoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQ9cWQ7cmV0dXJuIHRoaXN9bShiLnByb3RvdHlwZSx7cHJldmVudERlZmF1bHQ6ZnVuY3Rpb24oKXt0aGlzLmRlZmF1bHRQcmV2ZW50ZWQ9ITA7dmFyIGE9dGhpcy5uYXRpdmVFdmVudDthJiYoYS5wcmV2ZW50RGVmYXVsdD9hLnByZXZlbnREZWZhdWx0KCk6XCJ1bmtub3duXCIhPT10eXBlb2YgYS5yZXR1cm5WYWx1ZSYmXG4oYS5yZXR1cm5WYWx1ZT0hMSksdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9cGQpfSxzdG9wUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm5hdGl2ZUV2ZW50O2EmJihhLnN0b3BQcm9wYWdhdGlvbj9hLnN0b3BQcm9wYWdhdGlvbigpOlwidW5rbm93blwiIT09dHlwZW9mIGEuY2FuY2VsQnViYmxlJiYoYS5jYW5jZWxCdWJibGU9ITApLHRoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQ9cGQpfSxwZXJzaXN0OmZ1bmN0aW9uKCl7fSxpc1BlcnNpc3RlbnQ6cGR9KTtyZXR1cm4gYn1cbnZhciBzZD17ZXZlbnRQaGFzZTowLGJ1YmJsZXM6MCxjYW5jZWxhYmxlOjAsdGltZVN0YW1wOmZ1bmN0aW9uKGEpe3JldHVybiBhLnRpbWVTdGFtcHx8RGF0ZS5ub3coKX0sZGVmYXVsdFByZXZlbnRlZDowLGlzVHJ1c3RlZDowfSx0ZD1yZChzZCksdWQ9bSh7fSxzZCx7dmlldzowLGRldGFpbDowfSksdmQ9cmQodWQpLHdkLHhkLHlkLEFkPW0oe30sdWQse3NjcmVlblg6MCxzY3JlZW5ZOjAsY2xpZW50WDowLGNsaWVudFk6MCxwYWdlWDowLHBhZ2VZOjAsY3RybEtleTowLHNoaWZ0S2V5OjAsYWx0S2V5OjAsbWV0YUtleTowLGdldE1vZGlmaWVyU3RhdGU6emQsYnV0dG9uOjAsYnV0dG9uczowLHJlbGF0ZWRUYXJnZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIHZvaWQgMD09PWEucmVsYXRlZFRhcmdldD9hLmZyb21FbGVtZW50PT09YS5zcmNFbGVtZW50P2EudG9FbGVtZW50OmEuZnJvbUVsZW1lbnQ6YS5yZWxhdGVkVGFyZ2V0fSxtb3ZlbWVudFg6ZnVuY3Rpb24oYSl7aWYoXCJtb3ZlbWVudFhcImluXG5hKXJldHVybiBhLm1vdmVtZW50WDthIT09eWQmJih5ZCYmXCJtb3VzZW1vdmVcIj09PWEudHlwZT8od2Q9YS5zY3JlZW5YLXlkLnNjcmVlblgseGQ9YS5zY3JlZW5ZLXlkLnNjcmVlblkpOnhkPXdkPTAseWQ9YSk7cmV0dXJuIHdkfSxtb3ZlbWVudFk6ZnVuY3Rpb24oYSl7cmV0dXJuXCJtb3ZlbWVudFlcImluIGE/YS5tb3ZlbWVudFk6eGR9fSksQmQ9cmQoQWQpLENkPW0oe30sQWQse2RhdGFUcmFuc2ZlcjowfSksRGQ9cmQoQ2QpLEVkPW0oe30sdWQse3JlbGF0ZWRUYXJnZXQ6MH0pLEZkPXJkKEVkKSxHZD1tKHt9LHNkLHthbmltYXRpb25OYW1lOjAsZWxhcHNlZFRpbWU6MCxwc2V1ZG9FbGVtZW50OjB9KSxIZD1yZChHZCksSWQ9bSh7fSxzZCx7Y2xpcGJvYXJkRGF0YTpmdW5jdGlvbihhKXtyZXR1cm5cImNsaXBib2FyZERhdGFcImluIGE/YS5jbGlwYm9hcmREYXRhOndpbmRvdy5jbGlwYm9hcmREYXRhfX0pLEpkPXJkKElkKSxLZD1tKHt9LHNkLHtkYXRhOjB9KSxMZD1yZChLZCksTWQ9e0VzYzpcIkVzY2FwZVwiLFxuU3BhY2ViYXI6XCIgXCIsTGVmdDpcIkFycm93TGVmdFwiLFVwOlwiQXJyb3dVcFwiLFJpZ2h0OlwiQXJyb3dSaWdodFwiLERvd246XCJBcnJvd0Rvd25cIixEZWw6XCJEZWxldGVcIixXaW46XCJPU1wiLE1lbnU6XCJDb250ZXh0TWVudVwiLEFwcHM6XCJDb250ZXh0TWVudVwiLFNjcm9sbDpcIlNjcm9sbExvY2tcIixNb3pQcmludGFibGVLZXk6XCJVbmlkZW50aWZpZWRcIn0sTmQ9ezg6XCJCYWNrc3BhY2VcIiw5OlwiVGFiXCIsMTI6XCJDbGVhclwiLDEzOlwiRW50ZXJcIiwxNjpcIlNoaWZ0XCIsMTc6XCJDb250cm9sXCIsMTg6XCJBbHRcIiwxOTpcIlBhdXNlXCIsMjA6XCJDYXBzTG9ja1wiLDI3OlwiRXNjYXBlXCIsMzI6XCIgXCIsMzM6XCJQYWdlVXBcIiwzNDpcIlBhZ2VEb3duXCIsMzU6XCJFbmRcIiwzNjpcIkhvbWVcIiwzNzpcIkFycm93TGVmdFwiLDM4OlwiQXJyb3dVcFwiLDM5OlwiQXJyb3dSaWdodFwiLDQwOlwiQXJyb3dEb3duXCIsNDU6XCJJbnNlcnRcIiw0NjpcIkRlbGV0ZVwiLDExMjpcIkYxXCIsMTEzOlwiRjJcIiwxMTQ6XCJGM1wiLDExNTpcIkY0XCIsMTE2OlwiRjVcIiwxMTc6XCJGNlwiLDExODpcIkY3XCIsXG4xMTk6XCJGOFwiLDEyMDpcIkY5XCIsMTIxOlwiRjEwXCIsMTIyOlwiRjExXCIsMTIzOlwiRjEyXCIsMTQ0OlwiTnVtTG9ja1wiLDE0NTpcIlNjcm9sbExvY2tcIiwyMjQ6XCJNZXRhXCJ9LE9kPXtBbHQ6XCJhbHRLZXlcIixDb250cm9sOlwiY3RybEtleVwiLE1ldGE6XCJtZXRhS2V5XCIsU2hpZnQ6XCJzaGlmdEtleVwifTtmdW5jdGlvbiBQZChhKXt2YXIgYj10aGlzLm5hdGl2ZUV2ZW50O3JldHVybiBiLmdldE1vZGlmaWVyU3RhdGU/Yi5nZXRNb2RpZmllclN0YXRlKGEpOihhPU9kW2FdKT8hIWJbYV06ITF9ZnVuY3Rpb24gemQoKXtyZXR1cm4gUGR9XG52YXIgUWQ9bSh7fSx1ZCx7a2V5OmZ1bmN0aW9uKGEpe2lmKGEua2V5KXt2YXIgYj1NZFthLmtleV18fGEua2V5O2lmKFwiVW5pZGVudGlmaWVkXCIhPT1iKXJldHVybiBifXJldHVyblwia2V5cHJlc3NcIj09PWEudHlwZT8oYT1vZChhKSwxMz09PWE/XCJFbnRlclwiOlN0cmluZy5mcm9tQ2hhckNvZGUoYSkpOlwia2V5ZG93blwiPT09YS50eXBlfHxcImtleXVwXCI9PT1hLnR5cGU/TmRbYS5rZXlDb2RlXXx8XCJVbmlkZW50aWZpZWRcIjpcIlwifSxjb2RlOjAsbG9jYXRpb246MCxjdHJsS2V5OjAsc2hpZnRLZXk6MCxhbHRLZXk6MCxtZXRhS2V5OjAscmVwZWF0OjAsbG9jYWxlOjAsZ2V0TW9kaWZpZXJTdGF0ZTp6ZCxjaGFyQ29kZTpmdW5jdGlvbihhKXtyZXR1cm5cImtleXByZXNzXCI9PT1hLnR5cGU/b2QoYSk6MH0sa2V5Q29kZTpmdW5jdGlvbihhKXtyZXR1cm5cImtleWRvd25cIj09PWEudHlwZXx8XCJrZXl1cFwiPT09YS50eXBlP2Eua2V5Q29kZTowfSx3aGljaDpmdW5jdGlvbihhKXtyZXR1cm5cImtleXByZXNzXCI9PT1cbmEudHlwZT9vZChhKTpcImtleWRvd25cIj09PWEudHlwZXx8XCJrZXl1cFwiPT09YS50eXBlP2Eua2V5Q29kZTowfX0pLFJkPXJkKFFkKSxTZD1tKHt9LEFkLHtwb2ludGVySWQ6MCx3aWR0aDowLGhlaWdodDowLHByZXNzdXJlOjAsdGFuZ2VudGlhbFByZXNzdXJlOjAsdGlsdFg6MCx0aWx0WTowLHR3aXN0OjAscG9pbnRlclR5cGU6MCxpc1ByaW1hcnk6MH0pLFRkPXJkKFNkKSxVZD1tKHt9LHVkLHt0b3VjaGVzOjAsdGFyZ2V0VG91Y2hlczowLGNoYW5nZWRUb3VjaGVzOjAsYWx0S2V5OjAsbWV0YUtleTowLGN0cmxLZXk6MCxzaGlmdEtleTowLGdldE1vZGlmaWVyU3RhdGU6emR9KSxWZD1yZChVZCksV2Q9bSh7fSxzZCx7cHJvcGVydHlOYW1lOjAsZWxhcHNlZFRpbWU6MCxwc2V1ZG9FbGVtZW50OjB9KSxYZD1yZChXZCksWWQ9bSh7fSxBZCx7ZGVsdGFYOmZ1bmN0aW9uKGEpe3JldHVyblwiZGVsdGFYXCJpbiBhP2EuZGVsdGFYOlwid2hlZWxEZWx0YVhcImluIGE/LWEud2hlZWxEZWx0YVg6MH0sXG5kZWx0YVk6ZnVuY3Rpb24oYSl7cmV0dXJuXCJkZWx0YVlcImluIGE/YS5kZWx0YVk6XCJ3aGVlbERlbHRhWVwiaW4gYT8tYS53aGVlbERlbHRhWTpcIndoZWVsRGVsdGFcImluIGE/LWEud2hlZWxEZWx0YTowfSxkZWx0YVo6MCxkZWx0YU1vZGU6MH0pLFpkPXJkKFlkKSwkZD1bOSwxMywyNywzMl0sYWU9ZmEmJlwiQ29tcG9zaXRpb25FdmVudFwiaW4gd2luZG93LGJlPW51bGw7ZmEmJlwiZG9jdW1lbnRNb2RlXCJpbiBkb2N1bWVudCYmKGJlPWRvY3VtZW50LmRvY3VtZW50TW9kZSk7dmFyIGNlPWZhJiZcIlRleHRFdmVudFwiaW4gd2luZG93JiYhYmUsZGU9ZmEmJighYWV8fGJlJiY4PGJlJiYxMT49YmUpLGVlPVN0cmluZy5mcm9tQ2hhckNvZGUoMzIpLGZlPSExO1xuZnVuY3Rpb24gZ2UoYSxiKXtzd2l0Y2goYSl7Y2FzZSBcImtleXVwXCI6cmV0dXJuLTEhPT0kZC5pbmRleE9mKGIua2V5Q29kZSk7Y2FzZSBcImtleWRvd25cIjpyZXR1cm4gMjI5IT09Yi5rZXlDb2RlO2Nhc2UgXCJrZXlwcmVzc1wiOmNhc2UgXCJtb3VzZWRvd25cIjpjYXNlIFwiZm9jdXNvdXRcIjpyZXR1cm4hMDtkZWZhdWx0OnJldHVybiExfX1mdW5jdGlvbiBoZShhKXthPWEuZGV0YWlsO3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmXCJkYXRhXCJpbiBhP2EuZGF0YTpudWxsfXZhciBpZT0hMTtmdW5jdGlvbiBqZShhLGIpe3N3aXRjaChhKXtjYXNlIFwiY29tcG9zaXRpb25lbmRcIjpyZXR1cm4gaGUoYik7Y2FzZSBcImtleXByZXNzXCI6aWYoMzIhPT1iLndoaWNoKXJldHVybiBudWxsO2ZlPSEwO3JldHVybiBlZTtjYXNlIFwidGV4dElucHV0XCI6cmV0dXJuIGE9Yi5kYXRhLGE9PT1lZSYmZmU/bnVsbDphO2RlZmF1bHQ6cmV0dXJuIG51bGx9fVxuZnVuY3Rpb24ga2UoYSxiKXtpZihpZSlyZXR1cm5cImNvbXBvc2l0aW9uZW5kXCI9PT1hfHwhYWUmJmdlKGEsYik/KGE9bmQoKSxtZD1sZD1rZD1udWxsLGllPSExLGEpOm51bGw7c3dpdGNoKGEpe2Nhc2UgXCJwYXN0ZVwiOnJldHVybiBudWxsO2Nhc2UgXCJrZXlwcmVzc1wiOmlmKCEoYi5jdHJsS2V5fHxiLmFsdEtleXx8Yi5tZXRhS2V5KXx8Yi5jdHJsS2V5JiZiLmFsdEtleSl7aWYoYi5jaGFyJiYxPGIuY2hhci5sZW5ndGgpcmV0dXJuIGIuY2hhcjtpZihiLndoaWNoKXJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGIud2hpY2gpfXJldHVybiBudWxsO2Nhc2UgXCJjb21wb3NpdGlvbmVuZFwiOnJldHVybiBkZSYmXCJrb1wiIT09Yi5sb2NhbGU/bnVsbDpiLmRhdGE7ZGVmYXVsdDpyZXR1cm4gbnVsbH19XG52YXIgbGU9e2NvbG9yOiEwLGRhdGU6ITAsZGF0ZXRpbWU6ITAsXCJkYXRldGltZS1sb2NhbFwiOiEwLGVtYWlsOiEwLG1vbnRoOiEwLG51bWJlcjohMCxwYXNzd29yZDohMCxyYW5nZTohMCxzZWFyY2g6ITAsdGVsOiEwLHRleHQ6ITAsdGltZTohMCx1cmw6ITAsd2VlazohMH07ZnVuY3Rpb24gbWUoYSl7dmFyIGI9YSYmYS5ub2RlTmFtZSYmYS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PWI/ISFsZVthLnR5cGVdOlwidGV4dGFyZWFcIj09PWI/ITA6ITF9ZnVuY3Rpb24gbmUoYSxiLGMsZCl7RWIoZCk7Yj1vZShiLFwib25DaGFuZ2VcIik7MDxiLmxlbmd0aCYmKGM9bmV3IHRkKFwib25DaGFuZ2VcIixcImNoYW5nZVwiLG51bGwsYyxkKSxhLnB1c2goe2V2ZW50OmMsbGlzdGVuZXJzOmJ9KSl9dmFyIHBlPW51bGwscWU9bnVsbDtmdW5jdGlvbiByZShhKXtzZShhLDApfWZ1bmN0aW9uIHRlKGEpe3ZhciBiPXVlKGEpO2lmKFdhKGIpKXJldHVybiBhfVxuZnVuY3Rpb24gdmUoYSxiKXtpZihcImNoYW5nZVwiPT09YSlyZXR1cm4gYn12YXIgd2U9ITE7aWYoZmEpe3ZhciB4ZTtpZihmYSl7dmFyIHllPVwib25pbnB1dFwiaW4gZG9jdW1lbnQ7aWYoIXllKXt2YXIgemU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTt6ZS5zZXRBdHRyaWJ1dGUoXCJvbmlucHV0XCIsXCJyZXR1cm47XCIpO3llPVwiZnVuY3Rpb25cIj09PXR5cGVvZiB6ZS5vbmlucHV0fXhlPXllfWVsc2UgeGU9ITE7d2U9eGUmJighZG9jdW1lbnQuZG9jdW1lbnRNb2RlfHw5PGRvY3VtZW50LmRvY3VtZW50TW9kZSl9ZnVuY3Rpb24gQWUoKXtwZSYmKHBlLmRldGFjaEV2ZW50KFwib25wcm9wZXJ0eWNoYW5nZVwiLEJlKSxxZT1wZT1udWxsKX1mdW5jdGlvbiBCZShhKXtpZihcInZhbHVlXCI9PT1hLnByb3BlcnR5TmFtZSYmdGUocWUpKXt2YXIgYj1bXTtuZShiLHFlLGEseGIoYSkpO2E9cmU7aWYoS2IpYShiKTtlbHNle0tiPSEwO3RyeXtHYihhLGIpfWZpbmFsbHl7S2I9ITEsTWIoKX19fX1cbmZ1bmN0aW9uIENlKGEsYixjKXtcImZvY3VzaW5cIj09PWE/KEFlKCkscGU9YixxZT1jLHBlLmF0dGFjaEV2ZW50KFwib25wcm9wZXJ0eWNoYW5nZVwiLEJlKSk6XCJmb2N1c291dFwiPT09YSYmQWUoKX1mdW5jdGlvbiBEZShhKXtpZihcInNlbGVjdGlvbmNoYW5nZVwiPT09YXx8XCJrZXl1cFwiPT09YXx8XCJrZXlkb3duXCI9PT1hKXJldHVybiB0ZShxZSl9ZnVuY3Rpb24gRWUoYSxiKXtpZihcImNsaWNrXCI9PT1hKXJldHVybiB0ZShiKX1mdW5jdGlvbiBGZShhLGIpe2lmKFwiaW5wdXRcIj09PWF8fFwiY2hhbmdlXCI9PT1hKXJldHVybiB0ZShiKX1mdW5jdGlvbiBHZShhLGIpe3JldHVybiBhPT09YiYmKDAhPT1hfHwxL2E9PT0xL2IpfHxhIT09YSYmYiE9PWJ9dmFyIEhlPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBPYmplY3QuaXM/T2JqZWN0LmlzOkdlLEllPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5mdW5jdGlvbiBKZShhLGIpe2lmKEhlKGEsYikpcmV0dXJuITA7aWYoXCJvYmplY3RcIiE9PXR5cGVvZiBhfHxudWxsPT09YXx8XCJvYmplY3RcIiE9PXR5cGVvZiBifHxudWxsPT09YilyZXR1cm4hMTt2YXIgYz1PYmplY3Qua2V5cyhhKSxkPU9iamVjdC5rZXlzKGIpO2lmKGMubGVuZ3RoIT09ZC5sZW5ndGgpcmV0dXJuITE7Zm9yKGQ9MDtkPGMubGVuZ3RoO2QrKylpZighSWUuY2FsbChiLGNbZF0pfHwhSGUoYVtjW2RdXSxiW2NbZF1dKSlyZXR1cm4hMTtyZXR1cm4hMH1mdW5jdGlvbiBLZShhKXtmb3IoO2EmJmEuZmlyc3RDaGlsZDspYT1hLmZpcnN0Q2hpbGQ7cmV0dXJuIGF9XG5mdW5jdGlvbiBMZShhLGIpe3ZhciBjPUtlKGEpO2E9MDtmb3IodmFyIGQ7Yzspe2lmKDM9PT1jLm5vZGVUeXBlKXtkPWErYy50ZXh0Q29udGVudC5sZW5ndGg7aWYoYTw9YiYmZD49YilyZXR1cm57bm9kZTpjLG9mZnNldDpiLWF9O2E9ZH1hOntmb3IoO2M7KXtpZihjLm5leHRTaWJsaW5nKXtjPWMubmV4dFNpYmxpbmc7YnJlYWsgYX1jPWMucGFyZW50Tm9kZX1jPXZvaWQgMH1jPUtlKGMpfX1mdW5jdGlvbiBNZShhLGIpe3JldHVybiBhJiZiP2E9PT1iPyEwOmEmJjM9PT1hLm5vZGVUeXBlPyExOmImJjM9PT1iLm5vZGVUeXBlP01lKGEsYi5wYXJlbnROb2RlKTpcImNvbnRhaW5zXCJpbiBhP2EuY29udGFpbnMoYik6YS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbj8hIShhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGIpJjE2KTohMTohMX1cbmZ1bmN0aW9uIE5lKCl7Zm9yKHZhciBhPXdpbmRvdyxiPVhhKCk7YiBpbnN0YW5jZW9mIGEuSFRNTElGcmFtZUVsZW1lbnQ7KXt0cnl7dmFyIGM9XCJzdHJpbmdcIj09PXR5cGVvZiBiLmNvbnRlbnRXaW5kb3cubG9jYXRpb24uaHJlZn1jYXRjaChkKXtjPSExfWlmKGMpYT1iLmNvbnRlbnRXaW5kb3c7ZWxzZSBicmVhaztiPVhhKGEuZG9jdW1lbnQpfXJldHVybiBifWZ1bmN0aW9uIE9lKGEpe3ZhciBiPWEmJmEubm9kZU5hbWUmJmEubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm4gYiYmKFwiaW5wdXRcIj09PWImJihcInRleHRcIj09PWEudHlwZXx8XCJzZWFyY2hcIj09PWEudHlwZXx8XCJ0ZWxcIj09PWEudHlwZXx8XCJ1cmxcIj09PWEudHlwZXx8XCJwYXNzd29yZFwiPT09YS50eXBlKXx8XCJ0ZXh0YXJlYVwiPT09Ynx8XCJ0cnVlXCI9PT1hLmNvbnRlbnRFZGl0YWJsZSl9XG52YXIgUGU9ZmEmJlwiZG9jdW1lbnRNb2RlXCJpbiBkb2N1bWVudCYmMTE+PWRvY3VtZW50LmRvY3VtZW50TW9kZSxRZT1udWxsLFJlPW51bGwsU2U9bnVsbCxUZT0hMTtcbmZ1bmN0aW9uIFVlKGEsYixjKXt2YXIgZD1jLndpbmRvdz09PWM/Yy5kb2N1bWVudDo5PT09Yy5ub2RlVHlwZT9jOmMub3duZXJEb2N1bWVudDtUZXx8bnVsbD09UWV8fFFlIT09WGEoZCl8fChkPVFlLFwic2VsZWN0aW9uU3RhcnRcImluIGQmJk9lKGQpP2Q9e3N0YXJ0OmQuc2VsZWN0aW9uU3RhcnQsZW5kOmQuc2VsZWN0aW9uRW5kfTooZD0oZC5vd25lckRvY3VtZW50JiZkLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXd8fHdpbmRvdykuZ2V0U2VsZWN0aW9uKCksZD17YW5jaG9yTm9kZTpkLmFuY2hvck5vZGUsYW5jaG9yT2Zmc2V0OmQuYW5jaG9yT2Zmc2V0LGZvY3VzTm9kZTpkLmZvY3VzTm9kZSxmb2N1c09mZnNldDpkLmZvY3VzT2Zmc2V0fSksU2UmJkplKFNlLGQpfHwoU2U9ZCxkPW9lKFJlLFwib25TZWxlY3RcIiksMDxkLmxlbmd0aCYmKGI9bmV3IHRkKFwib25TZWxlY3RcIixcInNlbGVjdFwiLG51bGwsYixjKSxhLnB1c2goe2V2ZW50OmIsbGlzdGVuZXJzOmR9KSxiLnRhcmdldD1RZSkpKX1cblBjKFwiY2FuY2VsIGNhbmNlbCBjbGljayBjbGljayBjbG9zZSBjbG9zZSBjb250ZXh0bWVudSBjb250ZXh0TWVudSBjb3B5IGNvcHkgY3V0IGN1dCBhdXhjbGljayBhdXhDbGljayBkYmxjbGljayBkb3VibGVDbGljayBkcmFnZW5kIGRyYWdFbmQgZHJhZ3N0YXJ0IGRyYWdTdGFydCBkcm9wIGRyb3AgZm9jdXNpbiBmb2N1cyBmb2N1c291dCBibHVyIGlucHV0IGlucHV0IGludmFsaWQgaW52YWxpZCBrZXlkb3duIGtleURvd24ga2V5cHJlc3Mga2V5UHJlc3Mga2V5dXAga2V5VXAgbW91c2Vkb3duIG1vdXNlRG93biBtb3VzZXVwIG1vdXNlVXAgcGFzdGUgcGFzdGUgcGF1c2UgcGF1c2UgcGxheSBwbGF5IHBvaW50ZXJjYW5jZWwgcG9pbnRlckNhbmNlbCBwb2ludGVyZG93biBwb2ludGVyRG93biBwb2ludGVydXAgcG9pbnRlclVwIHJhdGVjaGFuZ2UgcmF0ZUNoYW5nZSByZXNldCByZXNldCBzZWVrZWQgc2Vla2VkIHN1Ym1pdCBzdWJtaXQgdG91Y2hjYW5jZWwgdG91Y2hDYW5jZWwgdG91Y2hlbmQgdG91Y2hFbmQgdG91Y2hzdGFydCB0b3VjaFN0YXJ0IHZvbHVtZWNoYW5nZSB2b2x1bWVDaGFuZ2VcIi5zcGxpdChcIiBcIiksXG4wKTtQYyhcImRyYWcgZHJhZyBkcmFnZW50ZXIgZHJhZ0VudGVyIGRyYWdleGl0IGRyYWdFeGl0IGRyYWdsZWF2ZSBkcmFnTGVhdmUgZHJhZ292ZXIgZHJhZ092ZXIgbW91c2Vtb3ZlIG1vdXNlTW92ZSBtb3VzZW91dCBtb3VzZU91dCBtb3VzZW92ZXIgbW91c2VPdmVyIHBvaW50ZXJtb3ZlIHBvaW50ZXJNb3ZlIHBvaW50ZXJvdXQgcG9pbnRlck91dCBwb2ludGVyb3ZlciBwb2ludGVyT3ZlciBzY3JvbGwgc2Nyb2xsIHRvZ2dsZSB0b2dnbGUgdG91Y2htb3ZlIHRvdWNoTW92ZSB3aGVlbCB3aGVlbFwiLnNwbGl0KFwiIFwiKSwxKTtQYyhPYywyKTtmb3IodmFyIFZlPVwiY2hhbmdlIHNlbGVjdGlvbmNoYW5nZSB0ZXh0SW5wdXQgY29tcG9zaXRpb25zdGFydCBjb21wb3NpdGlvbmVuZCBjb21wb3NpdGlvbnVwZGF0ZVwiLnNwbGl0KFwiIFwiKSxXZT0wO1dlPFZlLmxlbmd0aDtXZSsrKU5jLnNldChWZVtXZV0sMCk7ZWEoXCJvbk1vdXNlRW50ZXJcIixbXCJtb3VzZW91dFwiLFwibW91c2VvdmVyXCJdKTtcbmVhKFwib25Nb3VzZUxlYXZlXCIsW1wibW91c2VvdXRcIixcIm1vdXNlb3ZlclwiXSk7ZWEoXCJvblBvaW50ZXJFbnRlclwiLFtcInBvaW50ZXJvdXRcIixcInBvaW50ZXJvdmVyXCJdKTtlYShcIm9uUG9pbnRlckxlYXZlXCIsW1wicG9pbnRlcm91dFwiLFwicG9pbnRlcm92ZXJcIl0pO2RhKFwib25DaGFuZ2VcIixcImNoYW5nZSBjbGljayBmb2N1c2luIGZvY3Vzb3V0IGlucHV0IGtleWRvd24ga2V5dXAgc2VsZWN0aW9uY2hhbmdlXCIuc3BsaXQoXCIgXCIpKTtkYShcIm9uU2VsZWN0XCIsXCJmb2N1c291dCBjb250ZXh0bWVudSBkcmFnZW5kIGZvY3VzaW4ga2V5ZG93biBrZXl1cCBtb3VzZWRvd24gbW91c2V1cCBzZWxlY3Rpb25jaGFuZ2VcIi5zcGxpdChcIiBcIikpO2RhKFwib25CZWZvcmVJbnB1dFwiLFtcImNvbXBvc2l0aW9uZW5kXCIsXCJrZXlwcmVzc1wiLFwidGV4dElucHV0XCIsXCJwYXN0ZVwiXSk7ZGEoXCJvbkNvbXBvc2l0aW9uRW5kXCIsXCJjb21wb3NpdGlvbmVuZCBmb2N1c291dCBrZXlkb3duIGtleXByZXNzIGtleXVwIG1vdXNlZG93blwiLnNwbGl0KFwiIFwiKSk7XG5kYShcIm9uQ29tcG9zaXRpb25TdGFydFwiLFwiY29tcG9zaXRpb25zdGFydCBmb2N1c291dCBrZXlkb3duIGtleXByZXNzIGtleXVwIG1vdXNlZG93blwiLnNwbGl0KFwiIFwiKSk7ZGEoXCJvbkNvbXBvc2l0aW9uVXBkYXRlXCIsXCJjb21wb3NpdGlvbnVwZGF0ZSBmb2N1c291dCBrZXlkb3duIGtleXByZXNzIGtleXVwIG1vdXNlZG93blwiLnNwbGl0KFwiIFwiKSk7dmFyIFhlPVwiYWJvcnQgY2FucGxheSBjYW5wbGF5dGhyb3VnaCBkdXJhdGlvbmNoYW5nZSBlbXB0aWVkIGVuY3J5cHRlZCBlbmRlZCBlcnJvciBsb2FkZWRkYXRhIGxvYWRlZG1ldGFkYXRhIGxvYWRzdGFydCBwYXVzZSBwbGF5IHBsYXlpbmcgcHJvZ3Jlc3MgcmF0ZWNoYW5nZSBzZWVrZWQgc2Vla2luZyBzdGFsbGVkIHN1c3BlbmQgdGltZXVwZGF0ZSB2b2x1bWVjaGFuZ2Ugd2FpdGluZ1wiLnNwbGl0KFwiIFwiKSxZZT1uZXcgU2V0KFwiY2FuY2VsIGNsb3NlIGludmFsaWQgbG9hZCBzY3JvbGwgdG9nZ2xlXCIuc3BsaXQoXCIgXCIpLmNvbmNhdChYZSkpO1xuZnVuY3Rpb24gWmUoYSxiLGMpe3ZhciBkPWEudHlwZXx8XCJ1bmtub3duLWV2ZW50XCI7YS5jdXJyZW50VGFyZ2V0PWM7WWIoZCxiLHZvaWQgMCxhKTthLmN1cnJlbnRUYXJnZXQ9bnVsbH1cbmZ1bmN0aW9uIHNlKGEsYil7Yj0wIT09KGImNCk7Zm9yKHZhciBjPTA7YzxhLmxlbmd0aDtjKyspe3ZhciBkPWFbY10sZT1kLmV2ZW50O2Q9ZC5saXN0ZW5lcnM7YTp7dmFyIGY9dm9pZCAwO2lmKGIpZm9yKHZhciBnPWQubGVuZ3RoLTE7MDw9ZztnLS0pe3ZhciBoPWRbZ10saz1oLmluc3RhbmNlLGw9aC5jdXJyZW50VGFyZ2V0O2g9aC5saXN0ZW5lcjtpZihrIT09ZiYmZS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKWJyZWFrIGE7WmUoZSxoLGwpO2Y9a31lbHNlIGZvcihnPTA7ZzxkLmxlbmd0aDtnKyspe2g9ZFtnXTtrPWguaW5zdGFuY2U7bD1oLmN1cnJlbnRUYXJnZXQ7aD1oLmxpc3RlbmVyO2lmKGshPT1mJiZlLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpYnJlYWsgYTtaZShlLGgsbCk7Zj1rfX19aWYoVWIpdGhyb3cgYT1WYixVYj0hMSxWYj1udWxsLGE7fVxuZnVuY3Rpb24gRyhhLGIpe3ZhciBjPSRlKGIpLGQ9YStcIl9fYnViYmxlXCI7Yy5oYXMoZCl8fChhZihiLGEsMiwhMSksYy5hZGQoZCkpfXZhciBiZj1cIl9yZWFjdExpc3RlbmluZ1wiK01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpO2Z1bmN0aW9uIGNmKGEpe2FbYmZdfHwoYVtiZl09ITAsYmEuZm9yRWFjaChmdW5jdGlvbihiKXtZZS5oYXMoYil8fGRmKGIsITEsYSxudWxsKTtkZihiLCEwLGEsbnVsbCl9KSl9XG5mdW5jdGlvbiBkZihhLGIsYyxkKXt2YXIgZT00PGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PWFyZ3VtZW50c1s0XT9hcmd1bWVudHNbNF06MCxmPWM7XCJzZWxlY3Rpb25jaGFuZ2VcIj09PWEmJjkhPT1jLm5vZGVUeXBlJiYoZj1jLm93bmVyRG9jdW1lbnQpO2lmKG51bGwhPT1kJiYhYiYmWWUuaGFzKGEpKXtpZihcInNjcm9sbFwiIT09YSlyZXR1cm47ZXw9MjtmPWR9dmFyIGc9JGUoZiksaD1hK1wiX19cIisoYj9cImNhcHR1cmVcIjpcImJ1YmJsZVwiKTtnLmhhcyhoKXx8KGImJihlfD00KSxhZihmLGEsZSxiKSxnLmFkZChoKSl9XG5mdW5jdGlvbiBhZihhLGIsYyxkKXt2YXIgZT1OYy5nZXQoYik7c3dpdGNoKHZvaWQgMD09PWU/MjplKXtjYXNlIDA6ZT1nZDticmVhaztjYXNlIDE6ZT1pZDticmVhaztkZWZhdWx0OmU9aGR9Yz1lLmJpbmQobnVsbCxiLGMsYSk7ZT12b2lkIDA7IVBifHxcInRvdWNoc3RhcnRcIiE9PWImJlwidG91Y2htb3ZlXCIhPT1iJiZcIndoZWVsXCIhPT1ifHwoZT0hMCk7ZD92b2lkIDAhPT1lP2EuYWRkRXZlbnRMaXN0ZW5lcihiLGMse2NhcHR1cmU6ITAscGFzc2l2ZTplfSk6YS5hZGRFdmVudExpc3RlbmVyKGIsYywhMCk6dm9pZCAwIT09ZT9hLmFkZEV2ZW50TGlzdGVuZXIoYixjLHtwYXNzaXZlOmV9KTphLmFkZEV2ZW50TGlzdGVuZXIoYixjLCExKX1cbmZ1bmN0aW9uIGpkKGEsYixjLGQsZSl7dmFyIGY9ZDtpZigwPT09KGImMSkmJjA9PT0oYiYyKSYmbnVsbCE9PWQpYTpmb3IoOzspe2lmKG51bGw9PT1kKXJldHVybjt2YXIgZz1kLnRhZztpZigzPT09Z3x8ND09PWcpe3ZhciBoPWQuc3RhdGVOb2RlLmNvbnRhaW5lckluZm87aWYoaD09PWV8fDg9PT1oLm5vZGVUeXBlJiZoLnBhcmVudE5vZGU9PT1lKWJyZWFrO2lmKDQ9PT1nKWZvcihnPWQucmV0dXJuO251bGwhPT1nOyl7dmFyIGs9Zy50YWc7aWYoMz09PWt8fDQ9PT1rKWlmKGs9Zy5zdGF0ZU5vZGUuY29udGFpbmVySW5mbyxrPT09ZXx8OD09PWsubm9kZVR5cGUmJmsucGFyZW50Tm9kZT09PWUpcmV0dXJuO2c9Zy5yZXR1cm59Zm9yKDtudWxsIT09aDspe2c9d2MoaCk7aWYobnVsbD09PWcpcmV0dXJuO2s9Zy50YWc7aWYoNT09PWt8fDY9PT1rKXtkPWY9Zztjb250aW51ZSBhfWg9aC5wYXJlbnROb2RlfX1kPWQucmV0dXJufU5iKGZ1bmN0aW9uKCl7dmFyIGQ9ZixlPXhiKGMpLGc9W107XG5hOnt2YXIgaD1NYy5nZXQoYSk7aWYodm9pZCAwIT09aCl7dmFyIGs9dGQseD1hO3N3aXRjaChhKXtjYXNlIFwia2V5cHJlc3NcIjppZigwPT09b2QoYykpYnJlYWsgYTtjYXNlIFwia2V5ZG93blwiOmNhc2UgXCJrZXl1cFwiOms9UmQ7YnJlYWs7Y2FzZSBcImZvY3VzaW5cIjp4PVwiZm9jdXNcIjtrPUZkO2JyZWFrO2Nhc2UgXCJmb2N1c291dFwiOng9XCJibHVyXCI7az1GZDticmVhaztjYXNlIFwiYmVmb3JlYmx1clwiOmNhc2UgXCJhZnRlcmJsdXJcIjprPUZkO2JyZWFrO2Nhc2UgXCJjbGlja1wiOmlmKDI9PT1jLmJ1dHRvbilicmVhayBhO2Nhc2UgXCJhdXhjbGlja1wiOmNhc2UgXCJkYmxjbGlja1wiOmNhc2UgXCJtb3VzZWRvd25cIjpjYXNlIFwibW91c2Vtb3ZlXCI6Y2FzZSBcIm1vdXNldXBcIjpjYXNlIFwibW91c2VvdXRcIjpjYXNlIFwibW91c2VvdmVyXCI6Y2FzZSBcImNvbnRleHRtZW51XCI6az1CZDticmVhaztjYXNlIFwiZHJhZ1wiOmNhc2UgXCJkcmFnZW5kXCI6Y2FzZSBcImRyYWdlbnRlclwiOmNhc2UgXCJkcmFnZXhpdFwiOmNhc2UgXCJkcmFnbGVhdmVcIjpjYXNlIFwiZHJhZ292ZXJcIjpjYXNlIFwiZHJhZ3N0YXJ0XCI6Y2FzZSBcImRyb3BcIjprPVxuRGQ7YnJlYWs7Y2FzZSBcInRvdWNoY2FuY2VsXCI6Y2FzZSBcInRvdWNoZW5kXCI6Y2FzZSBcInRvdWNobW92ZVwiOmNhc2UgXCJ0b3VjaHN0YXJ0XCI6az1WZDticmVhaztjYXNlIEljOmNhc2UgSmM6Y2FzZSBLYzprPUhkO2JyZWFrO2Nhc2UgTGM6az1YZDticmVhaztjYXNlIFwic2Nyb2xsXCI6az12ZDticmVhaztjYXNlIFwid2hlZWxcIjprPVpkO2JyZWFrO2Nhc2UgXCJjb3B5XCI6Y2FzZSBcImN1dFwiOmNhc2UgXCJwYXN0ZVwiOms9SmQ7YnJlYWs7Y2FzZSBcImdvdHBvaW50ZXJjYXB0dXJlXCI6Y2FzZSBcImxvc3Rwb2ludGVyY2FwdHVyZVwiOmNhc2UgXCJwb2ludGVyY2FuY2VsXCI6Y2FzZSBcInBvaW50ZXJkb3duXCI6Y2FzZSBcInBvaW50ZXJtb3ZlXCI6Y2FzZSBcInBvaW50ZXJvdXRcIjpjYXNlIFwicG9pbnRlcm92ZXJcIjpjYXNlIFwicG9pbnRlcnVwXCI6az1UZH12YXIgdz0wIT09KGImNCksej0hdyYmXCJzY3JvbGxcIj09PWEsdT13P251bGwhPT1oP2grXCJDYXB0dXJlXCI6bnVsbDpoO3c9W107Zm9yKHZhciB0PWQscTtudWxsIT09XG50Oyl7cT10O3ZhciB2PXEuc3RhdGVOb2RlOzU9PT1xLnRhZyYmbnVsbCE9PXYmJihxPXYsbnVsbCE9PXUmJih2PU9iKHQsdSksbnVsbCE9diYmdy5wdXNoKGVmKHQsdixxKSkpKTtpZih6KWJyZWFrO3Q9dC5yZXR1cm59MDx3Lmxlbmd0aCYmKGg9bmV3IGsoaCx4LG51bGwsYyxlKSxnLnB1c2goe2V2ZW50OmgsbGlzdGVuZXJzOnd9KSl9fWlmKDA9PT0oYiY3KSl7YTp7aD1cIm1vdXNlb3ZlclwiPT09YXx8XCJwb2ludGVyb3ZlclwiPT09YTtrPVwibW91c2VvdXRcIj09PWF8fFwicG9pbnRlcm91dFwiPT09YTtpZihoJiYwPT09KGImMTYpJiYoeD1jLnJlbGF0ZWRUYXJnZXR8fGMuZnJvbUVsZW1lbnQpJiYod2MoeCl8fHhbZmZdKSlicmVhayBhO2lmKGt8fGgpe2g9ZS53aW5kb3c9PT1lP2U6KGg9ZS5vd25lckRvY3VtZW50KT9oLmRlZmF1bHRWaWV3fHxoLnBhcmVudFdpbmRvdzp3aW5kb3c7aWYoayl7aWYoeD1jLnJlbGF0ZWRUYXJnZXR8fGMudG9FbGVtZW50LGs9ZCx4PXg/d2MoeCk6bnVsbCxudWxsIT09XG54JiYoej1aYih4KSx4IT09enx8NSE9PXgudGFnJiY2IT09eC50YWcpKXg9bnVsbH1lbHNlIGs9bnVsbCx4PWQ7aWYoayE9PXgpe3c9QmQ7dj1cIm9uTW91c2VMZWF2ZVwiO3U9XCJvbk1vdXNlRW50ZXJcIjt0PVwibW91c2VcIjtpZihcInBvaW50ZXJvdXRcIj09PWF8fFwicG9pbnRlcm92ZXJcIj09PWEpdz1UZCx2PVwib25Qb2ludGVyTGVhdmVcIix1PVwib25Qb2ludGVyRW50ZXJcIix0PVwicG9pbnRlclwiO3o9bnVsbD09az9oOnVlKGspO3E9bnVsbD09eD9oOnVlKHgpO2g9bmV3IHcodix0K1wibGVhdmVcIixrLGMsZSk7aC50YXJnZXQ9ejtoLnJlbGF0ZWRUYXJnZXQ9cTt2PW51bGw7d2MoZSk9PT1kJiYodz1uZXcgdyh1LHQrXCJlbnRlclwiLHgsYyxlKSx3LnRhcmdldD1xLHcucmVsYXRlZFRhcmdldD16LHY9dyk7ej12O2lmKGsmJngpYjp7dz1rO3U9eDt0PTA7Zm9yKHE9dztxO3E9Z2YocSkpdCsrO3E9MDtmb3Iodj11O3Y7dj1nZih2KSlxKys7Zm9yKDswPHQtcTspdz1nZih3KSx0LS07Zm9yKDswPHEtdDspdT1cbmdmKHUpLHEtLTtmb3IoO3QtLTspe2lmKHc9PT11fHxudWxsIT09dSYmdz09PXUuYWx0ZXJuYXRlKWJyZWFrIGI7dz1nZih3KTt1PWdmKHUpfXc9bnVsbH1lbHNlIHc9bnVsbDtudWxsIT09ayYmaGYoZyxoLGssdywhMSk7bnVsbCE9PXgmJm51bGwhPT16JiZoZihnLHoseCx3LCEwKX19fWE6e2g9ZD91ZShkKTp3aW5kb3c7az1oLm5vZGVOYW1lJiZoLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7aWYoXCJzZWxlY3RcIj09PWt8fFwiaW5wdXRcIj09PWsmJlwiZmlsZVwiPT09aC50eXBlKXZhciBKPXZlO2Vsc2UgaWYobWUoaCkpaWYod2UpSj1GZTtlbHNle0o9RGU7dmFyIEs9Q2V9ZWxzZShrPWgubm9kZU5hbWUpJiZcImlucHV0XCI9PT1rLnRvTG93ZXJDYXNlKCkmJihcImNoZWNrYm94XCI9PT1oLnR5cGV8fFwicmFkaW9cIj09PWgudHlwZSkmJihKPUVlKTtpZihKJiYoSj1KKGEsZCkpKXtuZShnLEosYyxlKTticmVhayBhfUsmJksoYSxoLGQpO1wiZm9jdXNvdXRcIj09PWEmJihLPWguX3dyYXBwZXJTdGF0ZSkmJlxuSy5jb250cm9sbGVkJiZcIm51bWJlclwiPT09aC50eXBlJiZiYihoLFwibnVtYmVyXCIsaC52YWx1ZSl9Sz1kP3VlKGQpOndpbmRvdztzd2l0Y2goYSl7Y2FzZSBcImZvY3VzaW5cIjppZihtZShLKXx8XCJ0cnVlXCI9PT1LLmNvbnRlbnRFZGl0YWJsZSlRZT1LLFJlPWQsU2U9bnVsbDticmVhaztjYXNlIFwiZm9jdXNvdXRcIjpTZT1SZT1RZT1udWxsO2JyZWFrO2Nhc2UgXCJtb3VzZWRvd25cIjpUZT0hMDticmVhaztjYXNlIFwiY29udGV4dG1lbnVcIjpjYXNlIFwibW91c2V1cFwiOmNhc2UgXCJkcmFnZW5kXCI6VGU9ITE7VWUoZyxjLGUpO2JyZWFrO2Nhc2UgXCJzZWxlY3Rpb25jaGFuZ2VcIjppZihQZSlicmVhaztjYXNlIFwia2V5ZG93blwiOmNhc2UgXCJrZXl1cFwiOlVlKGcsYyxlKX12YXIgUTtpZihhZSliOntzd2l0Y2goYSl7Y2FzZSBcImNvbXBvc2l0aW9uc3RhcnRcIjp2YXIgTD1cIm9uQ29tcG9zaXRpb25TdGFydFwiO2JyZWFrIGI7Y2FzZSBcImNvbXBvc2l0aW9uZW5kXCI6TD1cIm9uQ29tcG9zaXRpb25FbmRcIjticmVhayBiO1xuY2FzZSBcImNvbXBvc2l0aW9udXBkYXRlXCI6TD1cIm9uQ29tcG9zaXRpb25VcGRhdGVcIjticmVhayBifUw9dm9pZCAwfWVsc2UgaWU/Z2UoYSxjKSYmKEw9XCJvbkNvbXBvc2l0aW9uRW5kXCIpOlwia2V5ZG93blwiPT09YSYmMjI5PT09Yy5rZXlDb2RlJiYoTD1cIm9uQ29tcG9zaXRpb25TdGFydFwiKTtMJiYoZGUmJlwia29cIiE9PWMubG9jYWxlJiYoaWV8fFwib25Db21wb3NpdGlvblN0YXJ0XCIhPT1MP1wib25Db21wb3NpdGlvbkVuZFwiPT09TCYmaWUmJihRPW5kKCkpOihrZD1lLGxkPVwidmFsdWVcImluIGtkP2tkLnZhbHVlOmtkLnRleHRDb250ZW50LGllPSEwKSksSz1vZShkLEwpLDA8Sy5sZW5ndGgmJihMPW5ldyBMZChMLGEsbnVsbCxjLGUpLGcucHVzaCh7ZXZlbnQ6TCxsaXN0ZW5lcnM6S30pLFE/TC5kYXRhPVE6KFE9aGUoYyksbnVsbCE9PVEmJihMLmRhdGE9USkpKSk7aWYoUT1jZT9qZShhLGMpOmtlKGEsYykpZD1vZShkLFwib25CZWZvcmVJbnB1dFwiKSwwPGQubGVuZ3RoJiYoZT1uZXcgTGQoXCJvbkJlZm9yZUlucHV0XCIsXG5cImJlZm9yZWlucHV0XCIsbnVsbCxjLGUpLGcucHVzaCh7ZXZlbnQ6ZSxsaXN0ZW5lcnM6ZH0pLGUuZGF0YT1RKX1zZShnLGIpfSl9ZnVuY3Rpb24gZWYoYSxiLGMpe3JldHVybntpbnN0YW5jZTphLGxpc3RlbmVyOmIsY3VycmVudFRhcmdldDpjfX1mdW5jdGlvbiBvZShhLGIpe2Zvcih2YXIgYz1iK1wiQ2FwdHVyZVwiLGQ9W107bnVsbCE9PWE7KXt2YXIgZT1hLGY9ZS5zdGF0ZU5vZGU7NT09PWUudGFnJiZudWxsIT09ZiYmKGU9ZixmPU9iKGEsYyksbnVsbCE9ZiYmZC51bnNoaWZ0KGVmKGEsZixlKSksZj1PYihhLGIpLG51bGwhPWYmJmQucHVzaChlZihhLGYsZSkpKTthPWEucmV0dXJufXJldHVybiBkfWZ1bmN0aW9uIGdmKGEpe2lmKG51bGw9PT1hKXJldHVybiBudWxsO2RvIGE9YS5yZXR1cm47d2hpbGUoYSYmNSE9PWEudGFnKTtyZXR1cm4gYT9hOm51bGx9XG5mdW5jdGlvbiBoZihhLGIsYyxkLGUpe2Zvcih2YXIgZj1iLl9yZWFjdE5hbWUsZz1bXTtudWxsIT09YyYmYyE9PWQ7KXt2YXIgaD1jLGs9aC5hbHRlcm5hdGUsbD1oLnN0YXRlTm9kZTtpZihudWxsIT09ayYmaz09PWQpYnJlYWs7NT09PWgudGFnJiZudWxsIT09bCYmKGg9bCxlPyhrPU9iKGMsZiksbnVsbCE9ayYmZy51bnNoaWZ0KGVmKGMsayxoKSkpOmV8fChrPU9iKGMsZiksbnVsbCE9ayYmZy5wdXNoKGVmKGMsayxoKSkpKTtjPWMucmV0dXJufTAhPT1nLmxlbmd0aCYmYS5wdXNoKHtldmVudDpiLGxpc3RlbmVyczpnfSl9ZnVuY3Rpb24gamYoKXt9dmFyIGtmPW51bGwsbGY9bnVsbDtmdW5jdGlvbiBtZihhLGIpe3N3aXRjaChhKXtjYXNlIFwiYnV0dG9uXCI6Y2FzZSBcImlucHV0XCI6Y2FzZSBcInNlbGVjdFwiOmNhc2UgXCJ0ZXh0YXJlYVwiOnJldHVybiEhYi5hdXRvRm9jdXN9cmV0dXJuITF9XG5mdW5jdGlvbiBuZihhLGIpe3JldHVyblwidGV4dGFyZWFcIj09PWF8fFwib3B0aW9uXCI9PT1hfHxcIm5vc2NyaXB0XCI9PT1hfHxcInN0cmluZ1wiPT09dHlwZW9mIGIuY2hpbGRyZW58fFwibnVtYmVyXCI9PT10eXBlb2YgYi5jaGlsZHJlbnx8XCJvYmplY3RcIj09PXR5cGVvZiBiLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MJiZudWxsIT09Yi5kYW5nZXJvdXNseVNldElubmVySFRNTCYmbnVsbCE9Yi5kYW5nZXJvdXNseVNldElubmVySFRNTC5fX2h0bWx9dmFyIG9mPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBzZXRUaW1lb3V0P3NldFRpbWVvdXQ6dm9pZCAwLHBmPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBjbGVhclRpbWVvdXQ/Y2xlYXJUaW1lb3V0OnZvaWQgMDtmdW5jdGlvbiBxZihhKXsxPT09YS5ub2RlVHlwZT9hLnRleHRDb250ZW50PVwiXCI6OT09PWEubm9kZVR5cGUmJihhPWEuYm9keSxudWxsIT1hJiYoYS50ZXh0Q29udGVudD1cIlwiKSl9XG5mdW5jdGlvbiByZihhKXtmb3IoO251bGwhPWE7YT1hLm5leHRTaWJsaW5nKXt2YXIgYj1hLm5vZGVUeXBlO2lmKDE9PT1ifHwzPT09YilicmVha31yZXR1cm4gYX1mdW5jdGlvbiBzZihhKXthPWEucHJldmlvdXNTaWJsaW5nO2Zvcih2YXIgYj0wO2E7KXtpZig4PT09YS5ub2RlVHlwZSl7dmFyIGM9YS5kYXRhO2lmKFwiJFwiPT09Y3x8XCIkIVwiPT09Y3x8XCIkP1wiPT09Yyl7aWYoMD09PWIpcmV0dXJuIGE7Yi0tfWVsc2VcIi8kXCI9PT1jJiZiKyt9YT1hLnByZXZpb3VzU2libGluZ31yZXR1cm4gbnVsbH12YXIgdGY9MDtmdW5jdGlvbiB1ZihhKXtyZXR1cm57JCR0eXBlb2Y6R2EsdG9TdHJpbmc6YSx2YWx1ZU9mOmF9fXZhciB2Zj1NYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyKSx3Zj1cIl9fcmVhY3RGaWJlciRcIit2Zix4Zj1cIl9fcmVhY3RQcm9wcyRcIit2ZixmZj1cIl9fcmVhY3RDb250YWluZXIkXCIrdmYseWY9XCJfX3JlYWN0RXZlbnRzJFwiK3ZmO1xuZnVuY3Rpb24gd2MoYSl7dmFyIGI9YVt3Zl07aWYoYilyZXR1cm4gYjtmb3IodmFyIGM9YS5wYXJlbnROb2RlO2M7KXtpZihiPWNbZmZdfHxjW3dmXSl7Yz1iLmFsdGVybmF0ZTtpZihudWxsIT09Yi5jaGlsZHx8bnVsbCE9PWMmJm51bGwhPT1jLmNoaWxkKWZvcihhPXNmKGEpO251bGwhPT1hOyl7aWYoYz1hW3dmXSlyZXR1cm4gYzthPXNmKGEpfXJldHVybiBifWE9YztjPWEucGFyZW50Tm9kZX1yZXR1cm4gbnVsbH1mdW5jdGlvbiBDYihhKXthPWFbd2ZdfHxhW2ZmXTtyZXR1cm4hYXx8NSE9PWEudGFnJiY2IT09YS50YWcmJjEzIT09YS50YWcmJjMhPT1hLnRhZz9udWxsOmF9ZnVuY3Rpb24gdWUoYSl7aWYoNT09PWEudGFnfHw2PT09YS50YWcpcmV0dXJuIGEuc3RhdGVOb2RlO3Rocm93IEVycm9yKHkoMzMpKTt9ZnVuY3Rpb24gRGIoYSl7cmV0dXJuIGFbeGZdfHxudWxsfVxuZnVuY3Rpb24gJGUoYSl7dmFyIGI9YVt5Zl07dm9pZCAwPT09YiYmKGI9YVt5Zl09bmV3IFNldCk7cmV0dXJuIGJ9dmFyIHpmPVtdLEFmPS0xO2Z1bmN0aW9uIEJmKGEpe3JldHVybntjdXJyZW50OmF9fWZ1bmN0aW9uIEgoYSl7MD5BZnx8KGEuY3VycmVudD16ZltBZl0semZbQWZdPW51bGwsQWYtLSl9ZnVuY3Rpb24gSShhLGIpe0FmKys7emZbQWZdPWEuY3VycmVudDthLmN1cnJlbnQ9Yn12YXIgQ2Y9e30sTT1CZihDZiksTj1CZighMSksRGY9Q2Y7XG5mdW5jdGlvbiBFZihhLGIpe3ZhciBjPWEudHlwZS5jb250ZXh0VHlwZXM7aWYoIWMpcmV0dXJuIENmO3ZhciBkPWEuc3RhdGVOb2RlO2lmKGQmJmQuX19yZWFjdEludGVybmFsTWVtb2l6ZWRVbm1hc2tlZENoaWxkQ29udGV4dD09PWIpcmV0dXJuIGQuX19yZWFjdEludGVybmFsTWVtb2l6ZWRNYXNrZWRDaGlsZENvbnRleHQ7dmFyIGU9e30sZjtmb3IoZiBpbiBjKWVbZl09YltmXTtkJiYoYT1hLnN0YXRlTm9kZSxhLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkVW5tYXNrZWRDaGlsZENvbnRleHQ9YixhLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkTWFza2VkQ2hpbGRDb250ZXh0PWUpO3JldHVybiBlfWZ1bmN0aW9uIEZmKGEpe2E9YS5jaGlsZENvbnRleHRUeXBlcztyZXR1cm4gbnVsbCE9PWEmJnZvaWQgMCE9PWF9ZnVuY3Rpb24gR2YoKXtIKE4pO0goTSl9ZnVuY3Rpb24gSGYoYSxiLGMpe2lmKE0uY3VycmVudCE9PUNmKXRocm93IEVycm9yKHkoMTY4KSk7SShNLGIpO0koTixjKX1cbmZ1bmN0aW9uIElmKGEsYixjKXt2YXIgZD1hLnN0YXRlTm9kZTthPWIuY2hpbGRDb250ZXh0VHlwZXM7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIGQuZ2V0Q2hpbGRDb250ZXh0KXJldHVybiBjO2Q9ZC5nZXRDaGlsZENvbnRleHQoKTtmb3IodmFyIGUgaW4gZClpZighKGUgaW4gYSkpdGhyb3cgRXJyb3IoeSgxMDgsUmEoYil8fFwiVW5rbm93blwiLGUpKTtyZXR1cm4gbSh7fSxjLGQpfWZ1bmN0aW9uIEpmKGEpe2E9KGE9YS5zdGF0ZU5vZGUpJiZhLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkTWVyZ2VkQ2hpbGRDb250ZXh0fHxDZjtEZj1NLmN1cnJlbnQ7SShNLGEpO0koTixOLmN1cnJlbnQpO3JldHVybiEwfWZ1bmN0aW9uIEtmKGEsYixjKXt2YXIgZD1hLnN0YXRlTm9kZTtpZighZCl0aHJvdyBFcnJvcih5KDE2OSkpO2M/KGE9SWYoYSxiLERmKSxkLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkTWVyZ2VkQ2hpbGRDb250ZXh0PWEsSChOKSxIKE0pLEkoTSxhKSk6SChOKTtJKE4sYyl9XG52YXIgTGY9bnVsbCxNZj1udWxsLE5mPXIudW5zdGFibGVfcnVuV2l0aFByaW9yaXR5LE9mPXIudW5zdGFibGVfc2NoZWR1bGVDYWxsYmFjayxQZj1yLnVuc3RhYmxlX2NhbmNlbENhbGxiYWNrLFFmPXIudW5zdGFibGVfc2hvdWxkWWllbGQsUmY9ci51bnN0YWJsZV9yZXF1ZXN0UGFpbnQsU2Y9ci51bnN0YWJsZV9ub3csVGY9ci51bnN0YWJsZV9nZXRDdXJyZW50UHJpb3JpdHlMZXZlbCxVZj1yLnVuc3RhYmxlX0ltbWVkaWF0ZVByaW9yaXR5LFZmPXIudW5zdGFibGVfVXNlckJsb2NraW5nUHJpb3JpdHksV2Y9ci51bnN0YWJsZV9Ob3JtYWxQcmlvcml0eSxYZj1yLnVuc3RhYmxlX0xvd1ByaW9yaXR5LFlmPXIudW5zdGFibGVfSWRsZVByaW9yaXR5LFpmPXt9LCRmPXZvaWQgMCE9PVJmP1JmOmZ1bmN0aW9uKCl7fSxhZz1udWxsLGJnPW51bGwsY2c9ITEsZGc9U2YoKSxPPTFFND5kZz9TZjpmdW5jdGlvbigpe3JldHVybiBTZigpLWRnfTtcbmZ1bmN0aW9uIGVnKCl7c3dpdGNoKFRmKCkpe2Nhc2UgVWY6cmV0dXJuIDk5O2Nhc2UgVmY6cmV0dXJuIDk4O2Nhc2UgV2Y6cmV0dXJuIDk3O2Nhc2UgWGY6cmV0dXJuIDk2O2Nhc2UgWWY6cmV0dXJuIDk1O2RlZmF1bHQ6dGhyb3cgRXJyb3IoeSgzMzIpKTt9fWZ1bmN0aW9uIGZnKGEpe3N3aXRjaChhKXtjYXNlIDk5OnJldHVybiBVZjtjYXNlIDk4OnJldHVybiBWZjtjYXNlIDk3OnJldHVybiBXZjtjYXNlIDk2OnJldHVybiBYZjtjYXNlIDk1OnJldHVybiBZZjtkZWZhdWx0OnRocm93IEVycm9yKHkoMzMyKSk7fX1mdW5jdGlvbiBnZyhhLGIpe2E9ZmcoYSk7cmV0dXJuIE5mKGEsYil9ZnVuY3Rpb24gaGcoYSxiLGMpe2E9ZmcoYSk7cmV0dXJuIE9mKGEsYixjKX1mdW5jdGlvbiBpZygpe2lmKG51bGwhPT1iZyl7dmFyIGE9Ymc7Ymc9bnVsbDtQZihhKX1qZygpfVxuZnVuY3Rpb24gamcoKXtpZighY2cmJm51bGwhPT1hZyl7Y2c9ITA7dmFyIGE9MDt0cnl7dmFyIGI9YWc7Z2coOTksZnVuY3Rpb24oKXtmb3IoO2E8Yi5sZW5ndGg7YSsrKXt2YXIgYz1iW2FdO2RvIGM9YyghMCk7d2hpbGUobnVsbCE9PWMpfX0pO2FnPW51bGx9Y2F0Y2goYyl7dGhyb3cgbnVsbCE9PWFnJiYoYWc9YWcuc2xpY2UoYSsxKSksT2YoVWYsaWcpLGM7fWZpbmFsbHl7Y2c9ITF9fX12YXIga2c9cmEuUmVhY3RDdXJyZW50QmF0Y2hDb25maWc7ZnVuY3Rpb24gbGcoYSxiKXtpZihhJiZhLmRlZmF1bHRQcm9wcyl7Yj1tKHt9LGIpO2E9YS5kZWZhdWx0UHJvcHM7Zm9yKHZhciBjIGluIGEpdm9pZCAwPT09YltjXSYmKGJbY109YVtjXSk7cmV0dXJuIGJ9cmV0dXJuIGJ9dmFyIG1nPUJmKG51bGwpLG5nPW51bGwsb2c9bnVsbCxwZz1udWxsO2Z1bmN0aW9uIHFnKCl7cGc9b2c9bmc9bnVsbH1cbmZ1bmN0aW9uIHJnKGEpe3ZhciBiPW1nLmN1cnJlbnQ7SChtZyk7YS50eXBlLl9jb250ZXh0Ll9jdXJyZW50VmFsdWU9Yn1mdW5jdGlvbiBzZyhhLGIpe2Zvcig7bnVsbCE9PWE7KXt2YXIgYz1hLmFsdGVybmF0ZTtpZigoYS5jaGlsZExhbmVzJmIpPT09YilpZihudWxsPT09Y3x8KGMuY2hpbGRMYW5lcyZiKT09PWIpYnJlYWs7ZWxzZSBjLmNoaWxkTGFuZXN8PWI7ZWxzZSBhLmNoaWxkTGFuZXN8PWIsbnVsbCE9PWMmJihjLmNoaWxkTGFuZXN8PWIpO2E9YS5yZXR1cm59fWZ1bmN0aW9uIHRnKGEsYil7bmc9YTtwZz1vZz1udWxsO2E9YS5kZXBlbmRlbmNpZXM7bnVsbCE9PWEmJm51bGwhPT1hLmZpcnN0Q29udGV4dCYmKDAhPT0oYS5sYW5lcyZiKSYmKHVnPSEwKSxhLmZpcnN0Q29udGV4dD1udWxsKX1cbmZ1bmN0aW9uIHZnKGEsYil7aWYocGchPT1hJiYhMSE9PWImJjAhPT1iKXtpZihcIm51bWJlclwiIT09dHlwZW9mIGJ8fDEwNzM3NDE4MjM9PT1iKXBnPWEsYj0xMDczNzQxODIzO2I9e2NvbnRleHQ6YSxvYnNlcnZlZEJpdHM6YixuZXh0Om51bGx9O2lmKG51bGw9PT1vZyl7aWYobnVsbD09PW5nKXRocm93IEVycm9yKHkoMzA4KSk7b2c9YjtuZy5kZXBlbmRlbmNpZXM9e2xhbmVzOjAsZmlyc3RDb250ZXh0OmIscmVzcG9uZGVyczpudWxsfX1lbHNlIG9nPW9nLm5leHQ9Yn1yZXR1cm4gYS5fY3VycmVudFZhbHVlfXZhciB3Zz0hMTtmdW5jdGlvbiB4ZyhhKXthLnVwZGF0ZVF1ZXVlPXtiYXNlU3RhdGU6YS5tZW1vaXplZFN0YXRlLGZpcnN0QmFzZVVwZGF0ZTpudWxsLGxhc3RCYXNlVXBkYXRlOm51bGwsc2hhcmVkOntwZW5kaW5nOm51bGx9LGVmZmVjdHM6bnVsbH19XG5mdW5jdGlvbiB5ZyhhLGIpe2E9YS51cGRhdGVRdWV1ZTtiLnVwZGF0ZVF1ZXVlPT09YSYmKGIudXBkYXRlUXVldWU9e2Jhc2VTdGF0ZTphLmJhc2VTdGF0ZSxmaXJzdEJhc2VVcGRhdGU6YS5maXJzdEJhc2VVcGRhdGUsbGFzdEJhc2VVcGRhdGU6YS5sYXN0QmFzZVVwZGF0ZSxzaGFyZWQ6YS5zaGFyZWQsZWZmZWN0czphLmVmZmVjdHN9KX1mdW5jdGlvbiB6ZyhhLGIpe3JldHVybntldmVudFRpbWU6YSxsYW5lOmIsdGFnOjAscGF5bG9hZDpudWxsLGNhbGxiYWNrOm51bGwsbmV4dDpudWxsfX1mdW5jdGlvbiBBZyhhLGIpe2E9YS51cGRhdGVRdWV1ZTtpZihudWxsIT09YSl7YT1hLnNoYXJlZDt2YXIgYz1hLnBlbmRpbmc7bnVsbD09PWM/Yi5uZXh0PWI6KGIubmV4dD1jLm5leHQsYy5uZXh0PWIpO2EucGVuZGluZz1ifX1cbmZ1bmN0aW9uIEJnKGEsYil7dmFyIGM9YS51cGRhdGVRdWV1ZSxkPWEuYWx0ZXJuYXRlO2lmKG51bGwhPT1kJiYoZD1kLnVwZGF0ZVF1ZXVlLGM9PT1kKSl7dmFyIGU9bnVsbCxmPW51bGw7Yz1jLmZpcnN0QmFzZVVwZGF0ZTtpZihudWxsIT09Yyl7ZG97dmFyIGc9e2V2ZW50VGltZTpjLmV2ZW50VGltZSxsYW5lOmMubGFuZSx0YWc6Yy50YWcscGF5bG9hZDpjLnBheWxvYWQsY2FsbGJhY2s6Yy5jYWxsYmFjayxuZXh0Om51bGx9O251bGw9PT1mP2U9Zj1nOmY9Zi5uZXh0PWc7Yz1jLm5leHR9d2hpbGUobnVsbCE9PWMpO251bGw9PT1mP2U9Zj1iOmY9Zi5uZXh0PWJ9ZWxzZSBlPWY9YjtjPXtiYXNlU3RhdGU6ZC5iYXNlU3RhdGUsZmlyc3RCYXNlVXBkYXRlOmUsbGFzdEJhc2VVcGRhdGU6ZixzaGFyZWQ6ZC5zaGFyZWQsZWZmZWN0czpkLmVmZmVjdHN9O2EudXBkYXRlUXVldWU9YztyZXR1cm59YT1jLmxhc3RCYXNlVXBkYXRlO251bGw9PT1hP2MuZmlyc3RCYXNlVXBkYXRlPWI6YS5uZXh0PVxuYjtjLmxhc3RCYXNlVXBkYXRlPWJ9XG5mdW5jdGlvbiBDZyhhLGIsYyxkKXt2YXIgZT1hLnVwZGF0ZVF1ZXVlO3dnPSExO3ZhciBmPWUuZmlyc3RCYXNlVXBkYXRlLGc9ZS5sYXN0QmFzZVVwZGF0ZSxoPWUuc2hhcmVkLnBlbmRpbmc7aWYobnVsbCE9PWgpe2Uuc2hhcmVkLnBlbmRpbmc9bnVsbDt2YXIgaz1oLGw9ay5uZXh0O2submV4dD1udWxsO251bGw9PT1nP2Y9bDpnLm5leHQ9bDtnPWs7dmFyIG49YS5hbHRlcm5hdGU7aWYobnVsbCE9PW4pe249bi51cGRhdGVRdWV1ZTt2YXIgQT1uLmxhc3RCYXNlVXBkYXRlO0EhPT1nJiYobnVsbD09PUE/bi5maXJzdEJhc2VVcGRhdGU9bDpBLm5leHQ9bCxuLmxhc3RCYXNlVXBkYXRlPWspfX1pZihudWxsIT09Zil7QT1lLmJhc2VTdGF0ZTtnPTA7bj1sPWs9bnVsbDtkb3toPWYubGFuZTt2YXIgcD1mLmV2ZW50VGltZTtpZigoZCZoKT09PWgpe251bGwhPT1uJiYobj1uLm5leHQ9e2V2ZW50VGltZTpwLGxhbmU6MCx0YWc6Zi50YWcscGF5bG9hZDpmLnBheWxvYWQsY2FsbGJhY2s6Zi5jYWxsYmFjayxcbm5leHQ6bnVsbH0pO2E6e3ZhciBDPWEseD1mO2g9YjtwPWM7c3dpdGNoKHgudGFnKXtjYXNlIDE6Qz14LnBheWxvYWQ7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIEMpe0E9Qy5jYWxsKHAsQSxoKTticmVhayBhfUE9QzticmVhayBhO2Nhc2UgMzpDLmZsYWdzPUMuZmxhZ3MmLTQwOTd8NjQ7Y2FzZSAwOkM9eC5wYXlsb2FkO2g9XCJmdW5jdGlvblwiPT09dHlwZW9mIEM/Qy5jYWxsKHAsQSxoKTpDO2lmKG51bGw9PT1ofHx2b2lkIDA9PT1oKWJyZWFrIGE7QT1tKHt9LEEsaCk7YnJlYWsgYTtjYXNlIDI6d2c9ITB9fW51bGwhPT1mLmNhbGxiYWNrJiYoYS5mbGFnc3w9MzIsaD1lLmVmZmVjdHMsbnVsbD09PWg/ZS5lZmZlY3RzPVtmXTpoLnB1c2goZikpfWVsc2UgcD17ZXZlbnRUaW1lOnAsbGFuZTpoLHRhZzpmLnRhZyxwYXlsb2FkOmYucGF5bG9hZCxjYWxsYmFjazpmLmNhbGxiYWNrLG5leHQ6bnVsbH0sbnVsbD09PW4/KGw9bj1wLGs9QSk6bj1uLm5leHQ9cCxnfD1oO2Y9Zi5uZXh0O2lmKG51bGw9PT1cbmYpaWYoaD1lLnNoYXJlZC5wZW5kaW5nLG51bGw9PT1oKWJyZWFrO2Vsc2UgZj1oLm5leHQsaC5uZXh0PW51bGwsZS5sYXN0QmFzZVVwZGF0ZT1oLGUuc2hhcmVkLnBlbmRpbmc9bnVsbH13aGlsZSgxKTtudWxsPT09biYmKGs9QSk7ZS5iYXNlU3RhdGU9aztlLmZpcnN0QmFzZVVwZGF0ZT1sO2UubGFzdEJhc2VVcGRhdGU9bjtEZ3w9ZzthLmxhbmVzPWc7YS5tZW1vaXplZFN0YXRlPUF9fWZ1bmN0aW9uIEVnKGEsYixjKXthPWIuZWZmZWN0cztiLmVmZmVjdHM9bnVsbDtpZihudWxsIT09YSlmb3IoYj0wO2I8YS5sZW5ndGg7YisrKXt2YXIgZD1hW2JdLGU9ZC5jYWxsYmFjaztpZihudWxsIT09ZSl7ZC5jYWxsYmFjaz1udWxsO2Q9YztpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgZSl0aHJvdyBFcnJvcih5KDE5MSxlKSk7ZS5jYWxsKGQpfX19dmFyIEZnPShuZXcgYWEuQ29tcG9uZW50KS5yZWZzO1xuZnVuY3Rpb24gR2coYSxiLGMsZCl7Yj1hLm1lbW9pemVkU3RhdGU7Yz1jKGQsYik7Yz1udWxsPT09Y3x8dm9pZCAwPT09Yz9iOm0oe30sYixjKTthLm1lbW9pemVkU3RhdGU9YzswPT09YS5sYW5lcyYmKGEudXBkYXRlUXVldWUuYmFzZVN0YXRlPWMpfVxudmFyIEtnPXtpc01vdW50ZWQ6ZnVuY3Rpb24oYSl7cmV0dXJuKGE9YS5fcmVhY3RJbnRlcm5hbHMpP1piKGEpPT09YTohMX0sZW5xdWV1ZVNldFN0YXRlOmZ1bmN0aW9uKGEsYixjKXthPWEuX3JlYWN0SW50ZXJuYWxzO3ZhciBkPUhnKCksZT1JZyhhKSxmPXpnKGQsZSk7Zi5wYXlsb2FkPWI7dm9pZCAwIT09YyYmbnVsbCE9PWMmJihmLmNhbGxiYWNrPWMpO0FnKGEsZik7SmcoYSxlLGQpfSxlbnF1ZXVlUmVwbGFjZVN0YXRlOmZ1bmN0aW9uKGEsYixjKXthPWEuX3JlYWN0SW50ZXJuYWxzO3ZhciBkPUhnKCksZT1JZyhhKSxmPXpnKGQsZSk7Zi50YWc9MTtmLnBheWxvYWQ9Yjt2b2lkIDAhPT1jJiZudWxsIT09YyYmKGYuY2FsbGJhY2s9Yyk7QWcoYSxmKTtKZyhhLGUsZCl9LGVucXVldWVGb3JjZVVwZGF0ZTpmdW5jdGlvbihhLGIpe2E9YS5fcmVhY3RJbnRlcm5hbHM7dmFyIGM9SGcoKSxkPUlnKGEpLGU9emcoYyxkKTtlLnRhZz0yO3ZvaWQgMCE9PWImJm51bGwhPT1iJiYoZS5jYWxsYmFjaz1cbmIpO0FnKGEsZSk7SmcoYSxkLGMpfX07ZnVuY3Rpb24gTGcoYSxiLGMsZCxlLGYsZyl7YT1hLnN0YXRlTm9kZTtyZXR1cm5cImZ1bmN0aW9uXCI9PT10eXBlb2YgYS5zaG91bGRDb21wb25lbnRVcGRhdGU/YS5zaG91bGRDb21wb25lbnRVcGRhdGUoZCxmLGcpOmIucHJvdG90eXBlJiZiLnByb3RvdHlwZS5pc1B1cmVSZWFjdENvbXBvbmVudD8hSmUoYyxkKXx8IUplKGUsZik6ITB9XG5mdW5jdGlvbiBNZyhhLGIsYyl7dmFyIGQ9ITEsZT1DZjt2YXIgZj1iLmNvbnRleHRUeXBlO1wib2JqZWN0XCI9PT10eXBlb2YgZiYmbnVsbCE9PWY/Zj12ZyhmKTooZT1GZihiKT9EZjpNLmN1cnJlbnQsZD1iLmNvbnRleHRUeXBlcyxmPShkPW51bGwhPT1kJiZ2b2lkIDAhPT1kKT9FZihhLGUpOkNmKTtiPW5ldyBiKGMsZik7YS5tZW1vaXplZFN0YXRlPW51bGwhPT1iLnN0YXRlJiZ2b2lkIDAhPT1iLnN0YXRlP2Iuc3RhdGU6bnVsbDtiLnVwZGF0ZXI9S2c7YS5zdGF0ZU5vZGU9YjtiLl9yZWFjdEludGVybmFscz1hO2QmJihhPWEuc3RhdGVOb2RlLGEuX19yZWFjdEludGVybmFsTWVtb2l6ZWRVbm1hc2tlZENoaWxkQ29udGV4dD1lLGEuX19yZWFjdEludGVybmFsTWVtb2l6ZWRNYXNrZWRDaGlsZENvbnRleHQ9Zik7cmV0dXJuIGJ9XG5mdW5jdGlvbiBOZyhhLGIsYyxkKXthPWIuc3RhdGU7XCJmdW5jdGlvblwiPT09dHlwZW9mIGIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmYi5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKGMsZCk7XCJmdW5jdGlvblwiPT09dHlwZW9mIGIuVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMmJmIuVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoYyxkKTtiLnN0YXRlIT09YSYmS2cuZW5xdWV1ZVJlcGxhY2VTdGF0ZShiLGIuc3RhdGUsbnVsbCl9XG5mdW5jdGlvbiBPZyhhLGIsYyxkKXt2YXIgZT1hLnN0YXRlTm9kZTtlLnByb3BzPWM7ZS5zdGF0ZT1hLm1lbW9pemVkU3RhdGU7ZS5yZWZzPUZnO3hnKGEpO3ZhciBmPWIuY29udGV4dFR5cGU7XCJvYmplY3RcIj09PXR5cGVvZiBmJiZudWxsIT09Zj9lLmNvbnRleHQ9dmcoZik6KGY9RmYoYik/RGY6TS5jdXJyZW50LGUuY29udGV4dD1FZihhLGYpKTtDZyhhLGMsZSxkKTtlLnN0YXRlPWEubWVtb2l6ZWRTdGF0ZTtmPWIuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBmJiYoR2coYSxiLGYsYyksZS5zdGF0ZT1hLm1lbW9pemVkU3RhdGUpO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBiLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc3x8XCJmdW5jdGlvblwiPT09dHlwZW9mIGUuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBlLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBlLmNvbXBvbmVudFdpbGxNb3VudHx8XG4oYj1lLnN0YXRlLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBlLmNvbXBvbmVudFdpbGxNb3VudCYmZS5jb21wb25lbnRXaWxsTW91bnQoKSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZS5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50JiZlLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQoKSxiIT09ZS5zdGF0ZSYmS2cuZW5xdWV1ZVJlcGxhY2VTdGF0ZShlLGUuc3RhdGUsbnVsbCksQ2coYSxjLGUsZCksZS5zdGF0ZT1hLm1lbW9pemVkU3RhdGUpO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBlLmNvbXBvbmVudERpZE1vdW50JiYoYS5mbGFnc3w9NCl9dmFyIFBnPUFycmF5LmlzQXJyYXk7XG5mdW5jdGlvbiBRZyhhLGIsYyl7YT1jLnJlZjtpZihudWxsIT09YSYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGEmJlwib2JqZWN0XCIhPT10eXBlb2YgYSl7aWYoYy5fb3duZXIpe2M9Yy5fb3duZXI7aWYoYyl7aWYoMSE9PWMudGFnKXRocm93IEVycm9yKHkoMzA5KSk7dmFyIGQ9Yy5zdGF0ZU5vZGV9aWYoIWQpdGhyb3cgRXJyb3IoeSgxNDcsYSkpO3ZhciBlPVwiXCIrYTtpZihudWxsIT09YiYmbnVsbCE9PWIucmVmJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgYi5yZWYmJmIucmVmLl9zdHJpbmdSZWY9PT1lKXJldHVybiBiLnJlZjtiPWZ1bmN0aW9uKGEpe3ZhciBiPWQucmVmcztiPT09RmcmJihiPWQucmVmcz17fSk7bnVsbD09PWE/ZGVsZXRlIGJbZV06YltlXT1hfTtiLl9zdHJpbmdSZWY9ZTtyZXR1cm4gYn1pZihcInN0cmluZ1wiIT09dHlwZW9mIGEpdGhyb3cgRXJyb3IoeSgyODQpKTtpZighYy5fb3duZXIpdGhyb3cgRXJyb3IoeSgyOTAsYSkpO31yZXR1cm4gYX1cbmZ1bmN0aW9uIFJnKGEsYil7aWYoXCJ0ZXh0YXJlYVwiIT09YS50eXBlKXRocm93IEVycm9yKHkoMzEsXCJbb2JqZWN0IE9iamVjdF1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChiKT9cIm9iamVjdCB3aXRoIGtleXMge1wiK09iamVjdC5rZXlzKGIpLmpvaW4oXCIsIFwiKStcIn1cIjpiKSk7fVxuZnVuY3Rpb24gU2coYSl7ZnVuY3Rpb24gYihiLGMpe2lmKGEpe3ZhciBkPWIubGFzdEVmZmVjdDtudWxsIT09ZD8oZC5uZXh0RWZmZWN0PWMsYi5sYXN0RWZmZWN0PWMpOmIuZmlyc3RFZmZlY3Q9Yi5sYXN0RWZmZWN0PWM7Yy5uZXh0RWZmZWN0PW51bGw7Yy5mbGFncz04fX1mdW5jdGlvbiBjKGMsZCl7aWYoIWEpcmV0dXJuIG51bGw7Zm9yKDtudWxsIT09ZDspYihjLGQpLGQ9ZC5zaWJsaW5nO3JldHVybiBudWxsfWZ1bmN0aW9uIGQoYSxiKXtmb3IoYT1uZXcgTWFwO251bGwhPT1iOyludWxsIT09Yi5rZXk/YS5zZXQoYi5rZXksYik6YS5zZXQoYi5pbmRleCxiKSxiPWIuc2libGluZztyZXR1cm4gYX1mdW5jdGlvbiBlKGEsYil7YT1UZyhhLGIpO2EuaW5kZXg9MDthLnNpYmxpbmc9bnVsbDtyZXR1cm4gYX1mdW5jdGlvbiBmKGIsYyxkKXtiLmluZGV4PWQ7aWYoIWEpcmV0dXJuIGM7ZD1iLmFsdGVybmF0ZTtpZihudWxsIT09ZClyZXR1cm4gZD1kLmluZGV4LGQ8Yz8oYi5mbGFncz0yLFxuYyk6ZDtiLmZsYWdzPTI7cmV0dXJuIGN9ZnVuY3Rpb24gZyhiKXthJiZudWxsPT09Yi5hbHRlcm5hdGUmJihiLmZsYWdzPTIpO3JldHVybiBifWZ1bmN0aW9uIGgoYSxiLGMsZCl7aWYobnVsbD09PWJ8fDYhPT1iLnRhZylyZXR1cm4gYj1VZyhjLGEubW9kZSxkKSxiLnJldHVybj1hLGI7Yj1lKGIsYyk7Yi5yZXR1cm49YTtyZXR1cm4gYn1mdW5jdGlvbiBrKGEsYixjLGQpe2lmKG51bGwhPT1iJiZiLmVsZW1lbnRUeXBlPT09Yy50eXBlKXJldHVybiBkPWUoYixjLnByb3BzKSxkLnJlZj1RZyhhLGIsYyksZC5yZXR1cm49YSxkO2Q9VmcoYy50eXBlLGMua2V5LGMucHJvcHMsbnVsbCxhLm1vZGUsZCk7ZC5yZWY9UWcoYSxiLGMpO2QucmV0dXJuPWE7cmV0dXJuIGR9ZnVuY3Rpb24gbChhLGIsYyxkKXtpZihudWxsPT09Ynx8NCE9PWIudGFnfHxiLnN0YXRlTm9kZS5jb250YWluZXJJbmZvIT09Yy5jb250YWluZXJJbmZvfHxiLnN0YXRlTm9kZS5pbXBsZW1lbnRhdGlvbiE9PWMuaW1wbGVtZW50YXRpb24pcmV0dXJuIGI9XG5XZyhjLGEubW9kZSxkKSxiLnJldHVybj1hLGI7Yj1lKGIsYy5jaGlsZHJlbnx8W10pO2IucmV0dXJuPWE7cmV0dXJuIGJ9ZnVuY3Rpb24gbihhLGIsYyxkLGYpe2lmKG51bGw9PT1ifHw3IT09Yi50YWcpcmV0dXJuIGI9WGcoYyxhLm1vZGUsZCxmKSxiLnJldHVybj1hLGI7Yj1lKGIsYyk7Yi5yZXR1cm49YTtyZXR1cm4gYn1mdW5jdGlvbiBBKGEsYixjKXtpZihcInN0cmluZ1wiPT09dHlwZW9mIGJ8fFwibnVtYmVyXCI9PT10eXBlb2YgYilyZXR1cm4gYj1VZyhcIlwiK2IsYS5tb2RlLGMpLGIucmV0dXJuPWEsYjtpZihcIm9iamVjdFwiPT09dHlwZW9mIGImJm51bGwhPT1iKXtzd2l0Y2goYi4kJHR5cGVvZil7Y2FzZSBzYTpyZXR1cm4gYz1WZyhiLnR5cGUsYi5rZXksYi5wcm9wcyxudWxsLGEubW9kZSxjKSxjLnJlZj1RZyhhLG51bGwsYiksYy5yZXR1cm49YSxjO2Nhc2UgdGE6cmV0dXJuIGI9V2coYixhLm1vZGUsYyksYi5yZXR1cm49YSxifWlmKFBnKGIpfHxMYShiKSlyZXR1cm4gYj1YZyhiLFxuYS5tb2RlLGMsbnVsbCksYi5yZXR1cm49YSxiO1JnKGEsYil9cmV0dXJuIG51bGx9ZnVuY3Rpb24gcChhLGIsYyxkKXt2YXIgZT1udWxsIT09Yj9iLmtleTpudWxsO2lmKFwic3RyaW5nXCI9PT10eXBlb2YgY3x8XCJudW1iZXJcIj09PXR5cGVvZiBjKXJldHVybiBudWxsIT09ZT9udWxsOmgoYSxiLFwiXCIrYyxkKTtpZihcIm9iamVjdFwiPT09dHlwZW9mIGMmJm51bGwhPT1jKXtzd2l0Y2goYy4kJHR5cGVvZil7Y2FzZSBzYTpyZXR1cm4gYy5rZXk9PT1lP2MudHlwZT09PXVhP24oYSxiLGMucHJvcHMuY2hpbGRyZW4sZCxlKTprKGEsYixjLGQpOm51bGw7Y2FzZSB0YTpyZXR1cm4gYy5rZXk9PT1lP2woYSxiLGMsZCk6bnVsbH1pZihQZyhjKXx8TGEoYykpcmV0dXJuIG51bGwhPT1lP251bGw6bihhLGIsYyxkLG51bGwpO1JnKGEsYyl9cmV0dXJuIG51bGx9ZnVuY3Rpb24gQyhhLGIsYyxkLGUpe2lmKFwic3RyaW5nXCI9PT10eXBlb2YgZHx8XCJudW1iZXJcIj09PXR5cGVvZiBkKXJldHVybiBhPWEuZ2V0KGMpfHxcbm51bGwsaChiLGEsXCJcIitkLGUpO2lmKFwib2JqZWN0XCI9PT10eXBlb2YgZCYmbnVsbCE9PWQpe3N3aXRjaChkLiQkdHlwZW9mKXtjYXNlIHNhOnJldHVybiBhPWEuZ2V0KG51bGw9PT1kLmtleT9jOmQua2V5KXx8bnVsbCxkLnR5cGU9PT11YT9uKGIsYSxkLnByb3BzLmNoaWxkcmVuLGUsZC5rZXkpOmsoYixhLGQsZSk7Y2FzZSB0YTpyZXR1cm4gYT1hLmdldChudWxsPT09ZC5rZXk/YzpkLmtleSl8fG51bGwsbChiLGEsZCxlKX1pZihQZyhkKXx8TGEoZCkpcmV0dXJuIGE9YS5nZXQoYyl8fG51bGwsbihiLGEsZCxlLG51bGwpO1JnKGIsZCl9cmV0dXJuIG51bGx9ZnVuY3Rpb24geChlLGcsaCxrKXtmb3IodmFyIGw9bnVsbCx0PW51bGwsdT1nLHo9Zz0wLHE9bnVsbDtudWxsIT09dSYmejxoLmxlbmd0aDt6Kyspe3UuaW5kZXg+ej8ocT11LHU9bnVsbCk6cT11LnNpYmxpbmc7dmFyIG49cChlLHUsaFt6XSxrKTtpZihudWxsPT09bil7bnVsbD09PXUmJih1PXEpO2JyZWFrfWEmJnUmJm51bGw9PT1cbm4uYWx0ZXJuYXRlJiZiKGUsdSk7Zz1mKG4sZyx6KTtudWxsPT09dD9sPW46dC5zaWJsaW5nPW47dD1uO3U9cX1pZih6PT09aC5sZW5ndGgpcmV0dXJuIGMoZSx1KSxsO2lmKG51bGw9PT11KXtmb3IoO3o8aC5sZW5ndGg7eisrKXU9QShlLGhbel0sayksbnVsbCE9PXUmJihnPWYodSxnLHopLG51bGw9PT10P2w9dTp0LnNpYmxpbmc9dSx0PXUpO3JldHVybiBsfWZvcih1PWQoZSx1KTt6PGgubGVuZ3RoO3orKylxPUModSxlLHosaFt6XSxrKSxudWxsIT09cSYmKGEmJm51bGwhPT1xLmFsdGVybmF0ZSYmdS5kZWxldGUobnVsbD09PXEua2V5P3o6cS5rZXkpLGc9ZihxLGcseiksbnVsbD09PXQ/bD1xOnQuc2libGluZz1xLHQ9cSk7YSYmdS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3JldHVybiBiKGUsYSl9KTtyZXR1cm4gbH1mdW5jdGlvbiB3KGUsZyxoLGspe3ZhciBsPUxhKGgpO2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBsKXRocm93IEVycm9yKHkoMTUwKSk7aD1sLmNhbGwoaCk7aWYobnVsbD09XG5oKXRocm93IEVycm9yKHkoMTUxKSk7Zm9yKHZhciB0PWw9bnVsbCx1PWcsej1nPTAscT1udWxsLG49aC5uZXh0KCk7bnVsbCE9PXUmJiFuLmRvbmU7eisrLG49aC5uZXh0KCkpe3UuaW5kZXg+ej8ocT11LHU9bnVsbCk6cT11LnNpYmxpbmc7dmFyIHc9cChlLHUsbi52YWx1ZSxrKTtpZihudWxsPT09dyl7bnVsbD09PXUmJih1PXEpO2JyZWFrfWEmJnUmJm51bGw9PT13LmFsdGVybmF0ZSYmYihlLHUpO2c9Zih3LGcseik7bnVsbD09PXQ/bD13OnQuc2libGluZz13O3Q9dzt1PXF9aWYobi5kb25lKXJldHVybiBjKGUsdSksbDtpZihudWxsPT09dSl7Zm9yKDshbi5kb25lO3orKyxuPWgubmV4dCgpKW49QShlLG4udmFsdWUsayksbnVsbCE9PW4mJihnPWYobixnLHopLG51bGw9PT10P2w9bjp0LnNpYmxpbmc9bix0PW4pO3JldHVybiBsfWZvcih1PWQoZSx1KTshbi5kb25lO3orKyxuPWgubmV4dCgpKW49Qyh1LGUseixuLnZhbHVlLGspLG51bGwhPT1uJiYoYSYmbnVsbCE9PW4uYWx0ZXJuYXRlJiZcbnUuZGVsZXRlKG51bGw9PT1uLmtleT96Om4ua2V5KSxnPWYobixnLHopLG51bGw9PT10P2w9bjp0LnNpYmxpbmc9bix0PW4pO2EmJnUuZm9yRWFjaChmdW5jdGlvbihhKXtyZXR1cm4gYihlLGEpfSk7cmV0dXJuIGx9cmV0dXJuIGZ1bmN0aW9uKGEsZCxmLGgpe3ZhciBrPVwib2JqZWN0XCI9PT10eXBlb2YgZiYmbnVsbCE9PWYmJmYudHlwZT09PXVhJiZudWxsPT09Zi5rZXk7ayYmKGY9Zi5wcm9wcy5jaGlsZHJlbik7dmFyIGw9XCJvYmplY3RcIj09PXR5cGVvZiBmJiZudWxsIT09ZjtpZihsKXN3aXRjaChmLiQkdHlwZW9mKXtjYXNlIHNhOmE6e2w9Zi5rZXk7Zm9yKGs9ZDtudWxsIT09azspe2lmKGsua2V5PT09bCl7c3dpdGNoKGsudGFnKXtjYXNlIDc6aWYoZi50eXBlPT09dWEpe2MoYSxrLnNpYmxpbmcpO2Q9ZShrLGYucHJvcHMuY2hpbGRyZW4pO2QucmV0dXJuPWE7YT1kO2JyZWFrIGF9YnJlYWs7ZGVmYXVsdDppZihrLmVsZW1lbnRUeXBlPT09Zi50eXBlKXtjKGEsay5zaWJsaW5nKTtcbmQ9ZShrLGYucHJvcHMpO2QucmVmPVFnKGEsayxmKTtkLnJldHVybj1hO2E9ZDticmVhayBhfX1jKGEsayk7YnJlYWt9ZWxzZSBiKGEsayk7az1rLnNpYmxpbmd9Zi50eXBlPT09dWE/KGQ9WGcoZi5wcm9wcy5jaGlsZHJlbixhLm1vZGUsaCxmLmtleSksZC5yZXR1cm49YSxhPWQpOihoPVZnKGYudHlwZSxmLmtleSxmLnByb3BzLG51bGwsYS5tb2RlLGgpLGgucmVmPVFnKGEsZCxmKSxoLnJldHVybj1hLGE9aCl9cmV0dXJuIGcoYSk7Y2FzZSB0YTphOntmb3Ioaz1mLmtleTtudWxsIT09ZDspe2lmKGQua2V5PT09aylpZig0PT09ZC50YWcmJmQuc3RhdGVOb2RlLmNvbnRhaW5lckluZm89PT1mLmNvbnRhaW5lckluZm8mJmQuc3RhdGVOb2RlLmltcGxlbWVudGF0aW9uPT09Zi5pbXBsZW1lbnRhdGlvbil7YyhhLGQuc2libGluZyk7ZD1lKGQsZi5jaGlsZHJlbnx8W10pO2QucmV0dXJuPWE7YT1kO2JyZWFrIGF9ZWxzZXtjKGEsZCk7YnJlYWt9ZWxzZSBiKGEsZCk7ZD1kLnNpYmxpbmd9ZD1cbldnKGYsYS5tb2RlLGgpO2QucmV0dXJuPWE7YT1kfXJldHVybiBnKGEpfWlmKFwic3RyaW5nXCI9PT10eXBlb2YgZnx8XCJudW1iZXJcIj09PXR5cGVvZiBmKXJldHVybiBmPVwiXCIrZixudWxsIT09ZCYmNj09PWQudGFnPyhjKGEsZC5zaWJsaW5nKSxkPWUoZCxmKSxkLnJldHVybj1hLGE9ZCk6KGMoYSxkKSxkPVVnKGYsYS5tb2RlLGgpLGQucmV0dXJuPWEsYT1kKSxnKGEpO2lmKFBnKGYpKXJldHVybiB4KGEsZCxmLGgpO2lmKExhKGYpKXJldHVybiB3KGEsZCxmLGgpO2wmJlJnKGEsZik7aWYoXCJ1bmRlZmluZWRcIj09PXR5cGVvZiBmJiYhaylzd2l0Y2goYS50YWcpe2Nhc2UgMTpjYXNlIDIyOmNhc2UgMDpjYXNlIDExOmNhc2UgMTU6dGhyb3cgRXJyb3IoeSgxNTIsUmEoYS50eXBlKXx8XCJDb21wb25lbnRcIikpO31yZXR1cm4gYyhhLGQpfX12YXIgWWc9U2coITApLFpnPVNnKCExKSwkZz17fSxhaD1CZigkZyksYmg9QmYoJGcpLGNoPUJmKCRnKTtcbmZ1bmN0aW9uIGRoKGEpe2lmKGE9PT0kZyl0aHJvdyBFcnJvcih5KDE3NCkpO3JldHVybiBhfWZ1bmN0aW9uIGVoKGEsYil7SShjaCxiKTtJKGJoLGEpO0koYWgsJGcpO2E9Yi5ub2RlVHlwZTtzd2l0Y2goYSl7Y2FzZSA5OmNhc2UgMTE6Yj0oYj1iLmRvY3VtZW50RWxlbWVudCk/Yi5uYW1lc3BhY2VVUkk6bWIobnVsbCxcIlwiKTticmVhaztkZWZhdWx0OmE9OD09PWE/Yi5wYXJlbnROb2RlOmIsYj1hLm5hbWVzcGFjZVVSSXx8bnVsbCxhPWEudGFnTmFtZSxiPW1iKGIsYSl9SChhaCk7SShhaCxiKX1mdW5jdGlvbiBmaCgpe0goYWgpO0goYmgpO0goY2gpfWZ1bmN0aW9uIGdoKGEpe2RoKGNoLmN1cnJlbnQpO3ZhciBiPWRoKGFoLmN1cnJlbnQpO3ZhciBjPW1iKGIsYS50eXBlKTtiIT09YyYmKEkoYmgsYSksSShhaCxjKSl9ZnVuY3Rpb24gaGgoYSl7YmguY3VycmVudD09PWEmJihIKGFoKSxIKGJoKSl9dmFyIFA9QmYoMCk7XG5mdW5jdGlvbiBpaChhKXtmb3IodmFyIGI9YTtudWxsIT09Yjspe2lmKDEzPT09Yi50YWcpe3ZhciBjPWIubWVtb2l6ZWRTdGF0ZTtpZihudWxsIT09YyYmKGM9Yy5kZWh5ZHJhdGVkLG51bGw9PT1jfHxcIiQ/XCI9PT1jLmRhdGF8fFwiJCFcIj09PWMuZGF0YSkpcmV0dXJuIGJ9ZWxzZSBpZigxOT09PWIudGFnJiZ2b2lkIDAhPT1iLm1lbW9pemVkUHJvcHMucmV2ZWFsT3JkZXIpe2lmKDAhPT0oYi5mbGFncyY2NCkpcmV0dXJuIGJ9ZWxzZSBpZihudWxsIT09Yi5jaGlsZCl7Yi5jaGlsZC5yZXR1cm49YjtiPWIuY2hpbGQ7Y29udGludWV9aWYoYj09PWEpYnJlYWs7Zm9yKDtudWxsPT09Yi5zaWJsaW5nOyl7aWYobnVsbD09PWIucmV0dXJufHxiLnJldHVybj09PWEpcmV0dXJuIG51bGw7Yj1iLnJldHVybn1iLnNpYmxpbmcucmV0dXJuPWIucmV0dXJuO2I9Yi5zaWJsaW5nfXJldHVybiBudWxsfXZhciBqaD1udWxsLGtoPW51bGwsbGg9ITE7XG5mdW5jdGlvbiBtaChhLGIpe3ZhciBjPW5oKDUsbnVsbCxudWxsLDApO2MuZWxlbWVudFR5cGU9XCJERUxFVEVEXCI7Yy50eXBlPVwiREVMRVRFRFwiO2Muc3RhdGVOb2RlPWI7Yy5yZXR1cm49YTtjLmZsYWdzPTg7bnVsbCE9PWEubGFzdEVmZmVjdD8oYS5sYXN0RWZmZWN0Lm5leHRFZmZlY3Q9YyxhLmxhc3RFZmZlY3Q9Yyk6YS5maXJzdEVmZmVjdD1hLmxhc3RFZmZlY3Q9Y31mdW5jdGlvbiBvaChhLGIpe3N3aXRjaChhLnRhZyl7Y2FzZSA1OnZhciBjPWEudHlwZTtiPTEhPT1iLm5vZGVUeXBlfHxjLnRvTG93ZXJDYXNlKCkhPT1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk/bnVsbDpiO3JldHVybiBudWxsIT09Yj8oYS5zdGF0ZU5vZGU9YiwhMCk6ITE7Y2FzZSA2OnJldHVybiBiPVwiXCI9PT1hLnBlbmRpbmdQcm9wc3x8MyE9PWIubm9kZVR5cGU/bnVsbDpiLG51bGwhPT1iPyhhLnN0YXRlTm9kZT1iLCEwKTohMTtjYXNlIDEzOnJldHVybiExO2RlZmF1bHQ6cmV0dXJuITF9fVxuZnVuY3Rpb24gcGgoYSl7aWYobGgpe3ZhciBiPWtoO2lmKGIpe3ZhciBjPWI7aWYoIW9oKGEsYikpe2I9cmYoYy5uZXh0U2libGluZyk7aWYoIWJ8fCFvaChhLGIpKXthLmZsYWdzPWEuZmxhZ3MmLTEwMjV8MjtsaD0hMTtqaD1hO3JldHVybn1taChqaCxjKX1qaD1hO2toPXJmKGIuZmlyc3RDaGlsZCl9ZWxzZSBhLmZsYWdzPWEuZmxhZ3MmLTEwMjV8MixsaD0hMSxqaD1hfX1mdW5jdGlvbiBxaChhKXtmb3IoYT1hLnJldHVybjtudWxsIT09YSYmNSE9PWEudGFnJiYzIT09YS50YWcmJjEzIT09YS50YWc7KWE9YS5yZXR1cm47amg9YX1cbmZ1bmN0aW9uIHJoKGEpe2lmKGEhPT1qaClyZXR1cm4hMTtpZighbGgpcmV0dXJuIHFoKGEpLGxoPSEwLCExO3ZhciBiPWEudHlwZTtpZig1IT09YS50YWd8fFwiaGVhZFwiIT09YiYmXCJib2R5XCIhPT1iJiYhbmYoYixhLm1lbW9pemVkUHJvcHMpKWZvcihiPWtoO2I7KW1oKGEsYiksYj1yZihiLm5leHRTaWJsaW5nKTtxaChhKTtpZigxMz09PWEudGFnKXthPWEubWVtb2l6ZWRTdGF0ZTthPW51bGwhPT1hP2EuZGVoeWRyYXRlZDpudWxsO2lmKCFhKXRocm93IEVycm9yKHkoMzE3KSk7YTp7YT1hLm5leHRTaWJsaW5nO2ZvcihiPTA7YTspe2lmKDg9PT1hLm5vZGVUeXBlKXt2YXIgYz1hLmRhdGE7aWYoXCIvJFwiPT09Yyl7aWYoMD09PWIpe2toPXJmKGEubmV4dFNpYmxpbmcpO2JyZWFrIGF9Yi0tfWVsc2VcIiRcIiE9PWMmJlwiJCFcIiE9PWMmJlwiJD9cIiE9PWN8fGIrK31hPWEubmV4dFNpYmxpbmd9a2g9bnVsbH19ZWxzZSBraD1qaD9yZihhLnN0YXRlTm9kZS5uZXh0U2libGluZyk6bnVsbDtyZXR1cm4hMH1cbmZ1bmN0aW9uIHNoKCl7a2g9amg9bnVsbDtsaD0hMX12YXIgdGg9W107ZnVuY3Rpb24gdWgoKXtmb3IodmFyIGE9MDthPHRoLmxlbmd0aDthKyspdGhbYV0uX3dvcmtJblByb2dyZXNzVmVyc2lvblByaW1hcnk9bnVsbDt0aC5sZW5ndGg9MH12YXIgdmg9cmEuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcix3aD1yYS5SZWFjdEN1cnJlbnRCYXRjaENvbmZpZyx4aD0wLFI9bnVsbCxTPW51bGwsVD1udWxsLHloPSExLHpoPSExO2Z1bmN0aW9uIEFoKCl7dGhyb3cgRXJyb3IoeSgzMjEpKTt9ZnVuY3Rpb24gQmgoYSxiKXtpZihudWxsPT09YilyZXR1cm4hMTtmb3IodmFyIGM9MDtjPGIubGVuZ3RoJiZjPGEubGVuZ3RoO2MrKylpZighSGUoYVtjXSxiW2NdKSlyZXR1cm4hMTtyZXR1cm4hMH1cbmZ1bmN0aW9uIENoKGEsYixjLGQsZSxmKXt4aD1mO1I9YjtiLm1lbW9pemVkU3RhdGU9bnVsbDtiLnVwZGF0ZVF1ZXVlPW51bGw7Yi5sYW5lcz0wO3ZoLmN1cnJlbnQ9bnVsbD09PWF8fG51bGw9PT1hLm1lbW9pemVkU3RhdGU/RGg6RWg7YT1jKGQsZSk7aWYoemgpe2Y9MDtkb3t6aD0hMTtpZighKDI1PmYpKXRocm93IEVycm9yKHkoMzAxKSk7Zis9MTtUPVM9bnVsbDtiLnVwZGF0ZVF1ZXVlPW51bGw7dmguY3VycmVudD1GaDthPWMoZCxlKX13aGlsZSh6aCl9dmguY3VycmVudD1HaDtiPW51bGwhPT1TJiZudWxsIT09Uy5uZXh0O3hoPTA7VD1TPVI9bnVsbDt5aD0hMTtpZihiKXRocm93IEVycm9yKHkoMzAwKSk7cmV0dXJuIGF9ZnVuY3Rpb24gSGgoKXt2YXIgYT17bWVtb2l6ZWRTdGF0ZTpudWxsLGJhc2VTdGF0ZTpudWxsLGJhc2VRdWV1ZTpudWxsLHF1ZXVlOm51bGwsbmV4dDpudWxsfTtudWxsPT09VD9SLm1lbW9pemVkU3RhdGU9VD1hOlQ9VC5uZXh0PWE7cmV0dXJuIFR9XG5mdW5jdGlvbiBJaCgpe2lmKG51bGw9PT1TKXt2YXIgYT1SLmFsdGVybmF0ZTthPW51bGwhPT1hP2EubWVtb2l6ZWRTdGF0ZTpudWxsfWVsc2UgYT1TLm5leHQ7dmFyIGI9bnVsbD09PVQ/Ui5tZW1vaXplZFN0YXRlOlQubmV4dDtpZihudWxsIT09YilUPWIsUz1hO2Vsc2V7aWYobnVsbD09PWEpdGhyb3cgRXJyb3IoeSgzMTApKTtTPWE7YT17bWVtb2l6ZWRTdGF0ZTpTLm1lbW9pemVkU3RhdGUsYmFzZVN0YXRlOlMuYmFzZVN0YXRlLGJhc2VRdWV1ZTpTLmJhc2VRdWV1ZSxxdWV1ZTpTLnF1ZXVlLG5leHQ6bnVsbH07bnVsbD09PVQ/Ui5tZW1vaXplZFN0YXRlPVQ9YTpUPVQubmV4dD1hfXJldHVybiBUfWZ1bmN0aW9uIEpoKGEsYil7cmV0dXJuXCJmdW5jdGlvblwiPT09dHlwZW9mIGI/YihhKTpifVxuZnVuY3Rpb24gS2goYSl7dmFyIGI9SWgoKSxjPWIucXVldWU7aWYobnVsbD09PWMpdGhyb3cgRXJyb3IoeSgzMTEpKTtjLmxhc3RSZW5kZXJlZFJlZHVjZXI9YTt2YXIgZD1TLGU9ZC5iYXNlUXVldWUsZj1jLnBlbmRpbmc7aWYobnVsbCE9PWYpe2lmKG51bGwhPT1lKXt2YXIgZz1lLm5leHQ7ZS5uZXh0PWYubmV4dDtmLm5leHQ9Z31kLmJhc2VRdWV1ZT1lPWY7Yy5wZW5kaW5nPW51bGx9aWYobnVsbCE9PWUpe2U9ZS5uZXh0O2Q9ZC5iYXNlU3RhdGU7dmFyIGg9Zz1mPW51bGwsaz1lO2Rve3ZhciBsPWsubGFuZTtpZigoeGgmbCk9PT1sKW51bGwhPT1oJiYoaD1oLm5leHQ9e2xhbmU6MCxhY3Rpb246ay5hY3Rpb24sZWFnZXJSZWR1Y2VyOmsuZWFnZXJSZWR1Y2VyLGVhZ2VyU3RhdGU6ay5lYWdlclN0YXRlLG5leHQ6bnVsbH0pLGQ9ay5lYWdlclJlZHVjZXI9PT1hP2suZWFnZXJTdGF0ZTphKGQsay5hY3Rpb24pO2Vsc2V7dmFyIG49e2xhbmU6bCxhY3Rpb246ay5hY3Rpb24sZWFnZXJSZWR1Y2VyOmsuZWFnZXJSZWR1Y2VyLFxuZWFnZXJTdGF0ZTprLmVhZ2VyU3RhdGUsbmV4dDpudWxsfTtudWxsPT09aD8oZz1oPW4sZj1kKTpoPWgubmV4dD1uO1IubGFuZXN8PWw7RGd8PWx9az1rLm5leHR9d2hpbGUobnVsbCE9PWsmJmshPT1lKTtudWxsPT09aD9mPWQ6aC5uZXh0PWc7SGUoZCxiLm1lbW9pemVkU3RhdGUpfHwodWc9ITApO2IubWVtb2l6ZWRTdGF0ZT1kO2IuYmFzZVN0YXRlPWY7Yi5iYXNlUXVldWU9aDtjLmxhc3RSZW5kZXJlZFN0YXRlPWR9cmV0dXJuW2IubWVtb2l6ZWRTdGF0ZSxjLmRpc3BhdGNoXX1cbmZ1bmN0aW9uIExoKGEpe3ZhciBiPUloKCksYz1iLnF1ZXVlO2lmKG51bGw9PT1jKXRocm93IEVycm9yKHkoMzExKSk7Yy5sYXN0UmVuZGVyZWRSZWR1Y2VyPWE7dmFyIGQ9Yy5kaXNwYXRjaCxlPWMucGVuZGluZyxmPWIubWVtb2l6ZWRTdGF0ZTtpZihudWxsIT09ZSl7Yy5wZW5kaW5nPW51bGw7dmFyIGc9ZT1lLm5leHQ7ZG8gZj1hKGYsZy5hY3Rpb24pLGc9Zy5uZXh0O3doaWxlKGchPT1lKTtIZShmLGIubWVtb2l6ZWRTdGF0ZSl8fCh1Zz0hMCk7Yi5tZW1vaXplZFN0YXRlPWY7bnVsbD09PWIuYmFzZVF1ZXVlJiYoYi5iYXNlU3RhdGU9Zik7Yy5sYXN0UmVuZGVyZWRTdGF0ZT1mfXJldHVybltmLGRdfVxuZnVuY3Rpb24gTWgoYSxiLGMpe3ZhciBkPWIuX2dldFZlcnNpb247ZD1kKGIuX3NvdXJjZSk7dmFyIGU9Yi5fd29ya0luUHJvZ3Jlc3NWZXJzaW9uUHJpbWFyeTtpZihudWxsIT09ZSlhPWU9PT1kO2Vsc2UgaWYoYT1hLm11dGFibGVSZWFkTGFuZXMsYT0oeGgmYSk9PT1hKWIuX3dvcmtJblByb2dyZXNzVmVyc2lvblByaW1hcnk9ZCx0aC5wdXNoKGIpO2lmKGEpcmV0dXJuIGMoYi5fc291cmNlKTt0aC5wdXNoKGIpO3Rocm93IEVycm9yKHkoMzUwKSk7fVxuZnVuY3Rpb24gTmgoYSxiLGMsZCl7dmFyIGU9VTtpZihudWxsPT09ZSl0aHJvdyBFcnJvcih5KDM0OSkpO3ZhciBmPWIuX2dldFZlcnNpb24sZz1mKGIuX3NvdXJjZSksaD12aC5jdXJyZW50LGs9aC51c2VTdGF0ZShmdW5jdGlvbigpe3JldHVybiBNaChlLGIsYyl9KSxsPWtbMV0sbj1rWzBdO2s9VDt2YXIgQT1hLm1lbW9pemVkU3RhdGUscD1BLnJlZnMsQz1wLmdldFNuYXBzaG90LHg9QS5zb3VyY2U7QT1BLnN1YnNjcmliZTt2YXIgdz1SO2EubWVtb2l6ZWRTdGF0ZT17cmVmczpwLHNvdXJjZTpiLHN1YnNjcmliZTpkfTtoLnVzZUVmZmVjdChmdW5jdGlvbigpe3AuZ2V0U25hcHNob3Q9YztwLnNldFNuYXBzaG90PWw7dmFyIGE9ZihiLl9zb3VyY2UpO2lmKCFIZShnLGEpKXthPWMoYi5fc291cmNlKTtIZShuLGEpfHwobChhKSxhPUlnKHcpLGUubXV0YWJsZVJlYWRMYW5lc3w9YSZlLnBlbmRpbmdMYW5lcyk7YT1lLm11dGFibGVSZWFkTGFuZXM7ZS5lbnRhbmdsZWRMYW5lc3w9YTtmb3IodmFyIGQ9XG5lLmVudGFuZ2xlbWVudHMsaD1hOzA8aDspe3ZhciBrPTMxLVZjKGgpLHY9MTw8aztkW2tdfD1hO2gmPX52fX19LFtjLGIsZF0pO2gudXNlRWZmZWN0KGZ1bmN0aW9uKCl7cmV0dXJuIGQoYi5fc291cmNlLGZ1bmN0aW9uKCl7dmFyIGE9cC5nZXRTbmFwc2hvdCxjPXAuc2V0U25hcHNob3Q7dHJ5e2MoYShiLl9zb3VyY2UpKTt2YXIgZD1JZyh3KTtlLm11dGFibGVSZWFkTGFuZXN8PWQmZS5wZW5kaW5nTGFuZXN9Y2F0Y2gocSl7YyhmdW5jdGlvbigpe3Rocm93IHE7fSl9fSl9LFtiLGRdKTtIZShDLGMpJiZIZSh4LGIpJiZIZShBLGQpfHwoYT17cGVuZGluZzpudWxsLGRpc3BhdGNoOm51bGwsbGFzdFJlbmRlcmVkUmVkdWNlcjpKaCxsYXN0UmVuZGVyZWRTdGF0ZTpufSxhLmRpc3BhdGNoPWw9T2guYmluZChudWxsLFIsYSksay5xdWV1ZT1hLGsuYmFzZVF1ZXVlPW51bGwsbj1NaChlLGIsYyksay5tZW1vaXplZFN0YXRlPWsuYmFzZVN0YXRlPW4pO3JldHVybiBufVxuZnVuY3Rpb24gUGgoYSxiLGMpe3ZhciBkPUloKCk7cmV0dXJuIE5oKGQsYSxiLGMpfWZ1bmN0aW9uIFFoKGEpe3ZhciBiPUhoKCk7XCJmdW5jdGlvblwiPT09dHlwZW9mIGEmJihhPWEoKSk7Yi5tZW1vaXplZFN0YXRlPWIuYmFzZVN0YXRlPWE7YT1iLnF1ZXVlPXtwZW5kaW5nOm51bGwsZGlzcGF0Y2g6bnVsbCxsYXN0UmVuZGVyZWRSZWR1Y2VyOkpoLGxhc3RSZW5kZXJlZFN0YXRlOmF9O2E9YS5kaXNwYXRjaD1PaC5iaW5kKG51bGwsUixhKTtyZXR1cm5bYi5tZW1vaXplZFN0YXRlLGFdfVxuZnVuY3Rpb24gUmgoYSxiLGMsZCl7YT17dGFnOmEsY3JlYXRlOmIsZGVzdHJveTpjLGRlcHM6ZCxuZXh0Om51bGx9O2I9Ui51cGRhdGVRdWV1ZTtudWxsPT09Yj8oYj17bGFzdEVmZmVjdDpudWxsfSxSLnVwZGF0ZVF1ZXVlPWIsYi5sYXN0RWZmZWN0PWEubmV4dD1hKTooYz1iLmxhc3RFZmZlY3QsbnVsbD09PWM/Yi5sYXN0RWZmZWN0PWEubmV4dD1hOihkPWMubmV4dCxjLm5leHQ9YSxhLm5leHQ9ZCxiLmxhc3RFZmZlY3Q9YSkpO3JldHVybiBhfWZ1bmN0aW9uIFNoKGEpe3ZhciBiPUhoKCk7YT17Y3VycmVudDphfTtyZXR1cm4gYi5tZW1vaXplZFN0YXRlPWF9ZnVuY3Rpb24gVGgoKXtyZXR1cm4gSWgoKS5tZW1vaXplZFN0YXRlfWZ1bmN0aW9uIFVoKGEsYixjLGQpe3ZhciBlPUhoKCk7Ui5mbGFnc3w9YTtlLm1lbW9pemVkU3RhdGU9UmgoMXxiLGMsdm9pZCAwLHZvaWQgMD09PWQ/bnVsbDpkKX1cbmZ1bmN0aW9uIFZoKGEsYixjLGQpe3ZhciBlPUloKCk7ZD12b2lkIDA9PT1kP251bGw6ZDt2YXIgZj12b2lkIDA7aWYobnVsbCE9PVMpe3ZhciBnPVMubWVtb2l6ZWRTdGF0ZTtmPWcuZGVzdHJveTtpZihudWxsIT09ZCYmQmgoZCxnLmRlcHMpKXtSaChiLGMsZixkKTtyZXR1cm59fVIuZmxhZ3N8PWE7ZS5tZW1vaXplZFN0YXRlPVJoKDF8YixjLGYsZCl9ZnVuY3Rpb24gV2goYSxiKXtyZXR1cm4gVWgoNTE2LDQsYSxiKX1mdW5jdGlvbiBYaChhLGIpe3JldHVybiBWaCg1MTYsNCxhLGIpfWZ1bmN0aW9uIFloKGEsYil7cmV0dXJuIFZoKDQsMixhLGIpfWZ1bmN0aW9uIFpoKGEsYil7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGIpcmV0dXJuIGE9YSgpLGIoYSksZnVuY3Rpb24oKXtiKG51bGwpfTtpZihudWxsIT09YiYmdm9pZCAwIT09YilyZXR1cm4gYT1hKCksYi5jdXJyZW50PWEsZnVuY3Rpb24oKXtiLmN1cnJlbnQ9bnVsbH19XG5mdW5jdGlvbiAkaChhLGIsYyl7Yz1udWxsIT09YyYmdm9pZCAwIT09Yz9jLmNvbmNhdChbYV0pOm51bGw7cmV0dXJuIFZoKDQsMixaaC5iaW5kKG51bGwsYixhKSxjKX1mdW5jdGlvbiBhaSgpe31mdW5jdGlvbiBiaShhLGIpe3ZhciBjPUloKCk7Yj12b2lkIDA9PT1iP251bGw6Yjt2YXIgZD1jLm1lbW9pemVkU3RhdGU7aWYobnVsbCE9PWQmJm51bGwhPT1iJiZCaChiLGRbMV0pKXJldHVybiBkWzBdO2MubWVtb2l6ZWRTdGF0ZT1bYSxiXTtyZXR1cm4gYX1mdW5jdGlvbiBjaShhLGIpe3ZhciBjPUloKCk7Yj12b2lkIDA9PT1iP251bGw6Yjt2YXIgZD1jLm1lbW9pemVkU3RhdGU7aWYobnVsbCE9PWQmJm51bGwhPT1iJiZCaChiLGRbMV0pKXJldHVybiBkWzBdO2E9YSgpO2MubWVtb2l6ZWRTdGF0ZT1bYSxiXTtyZXR1cm4gYX1cbmZ1bmN0aW9uIGRpKGEsYil7dmFyIGM9ZWcoKTtnZyg5OD5jPzk4OmMsZnVuY3Rpb24oKXthKCEwKX0pO2dnKDk3PGM/OTc6YyxmdW5jdGlvbigpe3ZhciBjPXdoLnRyYW5zaXRpb247d2gudHJhbnNpdGlvbj0xO3RyeXthKCExKSxiKCl9ZmluYWxseXt3aC50cmFuc2l0aW9uPWN9fSl9XG5mdW5jdGlvbiBPaChhLGIsYyl7dmFyIGQ9SGcoKSxlPUlnKGEpLGY9e2xhbmU6ZSxhY3Rpb246YyxlYWdlclJlZHVjZXI6bnVsbCxlYWdlclN0YXRlOm51bGwsbmV4dDpudWxsfSxnPWIucGVuZGluZztudWxsPT09Zz9mLm5leHQ9ZjooZi5uZXh0PWcubmV4dCxnLm5leHQ9Zik7Yi5wZW5kaW5nPWY7Zz1hLmFsdGVybmF0ZTtpZihhPT09Unx8bnVsbCE9PWcmJmc9PT1SKXpoPXloPSEwO2Vsc2V7aWYoMD09PWEubGFuZXMmJihudWxsPT09Z3x8MD09PWcubGFuZXMpJiYoZz1iLmxhc3RSZW5kZXJlZFJlZHVjZXIsbnVsbCE9PWcpKXRyeXt2YXIgaD1iLmxhc3RSZW5kZXJlZFN0YXRlLGs9ZyhoLGMpO2YuZWFnZXJSZWR1Y2VyPWc7Zi5lYWdlclN0YXRlPWs7aWYoSGUoayxoKSlyZXR1cm59Y2F0Y2gobCl7fWZpbmFsbHl7fUpnKGEsZSxkKX19XG52YXIgR2g9e3JlYWRDb250ZXh0OnZnLHVzZUNhbGxiYWNrOkFoLHVzZUNvbnRleHQ6QWgsdXNlRWZmZWN0OkFoLHVzZUltcGVyYXRpdmVIYW5kbGU6QWgsdXNlTGF5b3V0RWZmZWN0OkFoLHVzZU1lbW86QWgsdXNlUmVkdWNlcjpBaCx1c2VSZWY6QWgsdXNlU3RhdGU6QWgsdXNlRGVidWdWYWx1ZTpBaCx1c2VEZWZlcnJlZFZhbHVlOkFoLHVzZVRyYW5zaXRpb246QWgsdXNlTXV0YWJsZVNvdXJjZTpBaCx1c2VPcGFxdWVJZGVudGlmaWVyOkFoLHVuc3RhYmxlX2lzTmV3UmVjb25jaWxlcjohMX0sRGg9e3JlYWRDb250ZXh0OnZnLHVzZUNhbGxiYWNrOmZ1bmN0aW9uKGEsYil7SGgoKS5tZW1vaXplZFN0YXRlPVthLHZvaWQgMD09PWI/bnVsbDpiXTtyZXR1cm4gYX0sdXNlQ29udGV4dDp2Zyx1c2VFZmZlY3Q6V2gsdXNlSW1wZXJhdGl2ZUhhbmRsZTpmdW5jdGlvbihhLGIsYyl7Yz1udWxsIT09YyYmdm9pZCAwIT09Yz9jLmNvbmNhdChbYV0pOm51bGw7cmV0dXJuIFVoKDQsMixaaC5iaW5kKG51bGwsXG5iLGEpLGMpfSx1c2VMYXlvdXRFZmZlY3Q6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gVWgoNCwyLGEsYil9LHVzZU1lbW86ZnVuY3Rpb24oYSxiKXt2YXIgYz1IaCgpO2I9dm9pZCAwPT09Yj9udWxsOmI7YT1hKCk7Yy5tZW1vaXplZFN0YXRlPVthLGJdO3JldHVybiBhfSx1c2VSZWR1Y2VyOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1IaCgpO2I9dm9pZCAwIT09Yz9jKGIpOmI7ZC5tZW1vaXplZFN0YXRlPWQuYmFzZVN0YXRlPWI7YT1kLnF1ZXVlPXtwZW5kaW5nOm51bGwsZGlzcGF0Y2g6bnVsbCxsYXN0UmVuZGVyZWRSZWR1Y2VyOmEsbGFzdFJlbmRlcmVkU3RhdGU6Yn07YT1hLmRpc3BhdGNoPU9oLmJpbmQobnVsbCxSLGEpO3JldHVybltkLm1lbW9pemVkU3RhdGUsYV19LHVzZVJlZjpTaCx1c2VTdGF0ZTpRaCx1c2VEZWJ1Z1ZhbHVlOmFpLHVzZURlZmVycmVkVmFsdWU6ZnVuY3Rpb24oYSl7dmFyIGI9UWgoYSksYz1iWzBdLGQ9YlsxXTtXaChmdW5jdGlvbigpe3ZhciBiPXdoLnRyYW5zaXRpb247XG53aC50cmFuc2l0aW9uPTE7dHJ5e2QoYSl9ZmluYWxseXt3aC50cmFuc2l0aW9uPWJ9fSxbYV0pO3JldHVybiBjfSx1c2VUcmFuc2l0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9UWgoITEpLGI9YVswXTthPWRpLmJpbmQobnVsbCxhWzFdKTtTaChhKTtyZXR1cm5bYSxiXX0sdXNlTXV0YWJsZVNvdXJjZTpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9SGgoKTtkLm1lbW9pemVkU3RhdGU9e3JlZnM6e2dldFNuYXBzaG90OmIsc2V0U25hcHNob3Q6bnVsbH0sc291cmNlOmEsc3Vic2NyaWJlOmN9O3JldHVybiBOaChkLGEsYixjKX0sdXNlT3BhcXVlSWRlbnRpZmllcjpmdW5jdGlvbigpe2lmKGxoKXt2YXIgYT0hMSxiPXVmKGZ1bmN0aW9uKCl7YXx8KGE9ITAsYyhcInI6XCIrKHRmKyspLnRvU3RyaW5nKDM2KSkpO3Rocm93IEVycm9yKHkoMzU1KSk7fSksYz1RaChiKVsxXTswPT09KFIubW9kZSYyKSYmKFIuZmxhZ3N8PTUxNixSaCg1LGZ1bmN0aW9uKCl7YyhcInI6XCIrKHRmKyspLnRvU3RyaW5nKDM2KSl9LFxudm9pZCAwLG51bGwpKTtyZXR1cm4gYn1iPVwicjpcIisodGYrKykudG9TdHJpbmcoMzYpO1FoKGIpO3JldHVybiBifSx1bnN0YWJsZV9pc05ld1JlY29uY2lsZXI6ITF9LEVoPXtyZWFkQ29udGV4dDp2Zyx1c2VDYWxsYmFjazpiaSx1c2VDb250ZXh0OnZnLHVzZUVmZmVjdDpYaCx1c2VJbXBlcmF0aXZlSGFuZGxlOiRoLHVzZUxheW91dEVmZmVjdDpZaCx1c2VNZW1vOmNpLHVzZVJlZHVjZXI6S2gsdXNlUmVmOlRoLHVzZVN0YXRlOmZ1bmN0aW9uKCl7cmV0dXJuIEtoKEpoKX0sdXNlRGVidWdWYWx1ZTphaSx1c2VEZWZlcnJlZFZhbHVlOmZ1bmN0aW9uKGEpe3ZhciBiPUtoKEpoKSxjPWJbMF0sZD1iWzFdO1hoKGZ1bmN0aW9uKCl7dmFyIGI9d2gudHJhbnNpdGlvbjt3aC50cmFuc2l0aW9uPTE7dHJ5e2QoYSl9ZmluYWxseXt3aC50cmFuc2l0aW9uPWJ9fSxbYV0pO3JldHVybiBjfSx1c2VUcmFuc2l0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9S2goSmgpWzBdO3JldHVybltUaCgpLmN1cnJlbnQsXG5hXX0sdXNlTXV0YWJsZVNvdXJjZTpQaCx1c2VPcGFxdWVJZGVudGlmaWVyOmZ1bmN0aW9uKCl7cmV0dXJuIEtoKEpoKVswXX0sdW5zdGFibGVfaXNOZXdSZWNvbmNpbGVyOiExfSxGaD17cmVhZENvbnRleHQ6dmcsdXNlQ2FsbGJhY2s6YmksdXNlQ29udGV4dDp2Zyx1c2VFZmZlY3Q6WGgsdXNlSW1wZXJhdGl2ZUhhbmRsZTokaCx1c2VMYXlvdXRFZmZlY3Q6WWgsdXNlTWVtbzpjaSx1c2VSZWR1Y2VyOkxoLHVzZVJlZjpUaCx1c2VTdGF0ZTpmdW5jdGlvbigpe3JldHVybiBMaChKaCl9LHVzZURlYnVnVmFsdWU6YWksdXNlRGVmZXJyZWRWYWx1ZTpmdW5jdGlvbihhKXt2YXIgYj1MaChKaCksYz1iWzBdLGQ9YlsxXTtYaChmdW5jdGlvbigpe3ZhciBiPXdoLnRyYW5zaXRpb247d2gudHJhbnNpdGlvbj0xO3RyeXtkKGEpfWZpbmFsbHl7d2gudHJhbnNpdGlvbj1ifX0sW2FdKTtyZXR1cm4gY30sdXNlVHJhbnNpdGlvbjpmdW5jdGlvbigpe3ZhciBhPUxoKEpoKVswXTtyZXR1cm5bVGgoKS5jdXJyZW50LFxuYV19LHVzZU11dGFibGVTb3VyY2U6UGgsdXNlT3BhcXVlSWRlbnRpZmllcjpmdW5jdGlvbigpe3JldHVybiBMaChKaClbMF19LHVuc3RhYmxlX2lzTmV3UmVjb25jaWxlcjohMX0sZWk9cmEuUmVhY3RDdXJyZW50T3duZXIsdWc9ITE7ZnVuY3Rpb24gZmkoYSxiLGMsZCl7Yi5jaGlsZD1udWxsPT09YT9aZyhiLG51bGwsYyxkKTpZZyhiLGEuY2hpbGQsYyxkKX1mdW5jdGlvbiBnaShhLGIsYyxkLGUpe2M9Yy5yZW5kZXI7dmFyIGY9Yi5yZWY7dGcoYixlKTtkPUNoKGEsYixjLGQsZixlKTtpZihudWxsIT09YSYmIXVnKXJldHVybiBiLnVwZGF0ZVF1ZXVlPWEudXBkYXRlUXVldWUsYi5mbGFncyY9LTUxNyxhLmxhbmVzJj1+ZSxoaShhLGIsZSk7Yi5mbGFnc3w9MTtmaShhLGIsZCxlKTtyZXR1cm4gYi5jaGlsZH1cbmZ1bmN0aW9uIGlpKGEsYixjLGQsZSxmKXtpZihudWxsPT09YSl7dmFyIGc9Yy50eXBlO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnJiYhamkoZykmJnZvaWQgMD09PWcuZGVmYXVsdFByb3BzJiZudWxsPT09Yy5jb21wYXJlJiZ2b2lkIDA9PT1jLmRlZmF1bHRQcm9wcylyZXR1cm4gYi50YWc9MTUsYi50eXBlPWcsa2koYSxiLGcsZCxlLGYpO2E9VmcoYy50eXBlLG51bGwsZCxiLGIubW9kZSxmKTthLnJlZj1iLnJlZjthLnJldHVybj1iO3JldHVybiBiLmNoaWxkPWF9Zz1hLmNoaWxkO2lmKDA9PT0oZSZmKSYmKGU9Zy5tZW1vaXplZFByb3BzLGM9Yy5jb21wYXJlLGM9bnVsbCE9PWM/YzpKZSxjKGUsZCkmJmEucmVmPT09Yi5yZWYpKXJldHVybiBoaShhLGIsZik7Yi5mbGFnc3w9MTthPVRnKGcsZCk7YS5yZWY9Yi5yZWY7YS5yZXR1cm49YjtyZXR1cm4gYi5jaGlsZD1hfVxuZnVuY3Rpb24ga2koYSxiLGMsZCxlLGYpe2lmKG51bGwhPT1hJiZKZShhLm1lbW9pemVkUHJvcHMsZCkmJmEucmVmPT09Yi5yZWYpaWYodWc9ITEsMCE9PShmJmUpKTAhPT0oYS5mbGFncyYxNjM4NCkmJih1Zz0hMCk7ZWxzZSByZXR1cm4gYi5sYW5lcz1hLmxhbmVzLGhpKGEsYixmKTtyZXR1cm4gbGkoYSxiLGMsZCxmKX1cbmZ1bmN0aW9uIG1pKGEsYixjKXt2YXIgZD1iLnBlbmRpbmdQcm9wcyxlPWQuY2hpbGRyZW4sZj1udWxsIT09YT9hLm1lbW9pemVkU3RhdGU6bnVsbDtpZihcImhpZGRlblwiPT09ZC5tb2RlfHxcInVuc3RhYmxlLWRlZmVyLXdpdGhvdXQtaGlkaW5nXCI9PT1kLm1vZGUpaWYoMD09PShiLm1vZGUmNCkpYi5tZW1vaXplZFN0YXRlPXtiYXNlTGFuZXM6MH0sbmkoYixjKTtlbHNlIGlmKDAhPT0oYyYxMDczNzQxODI0KSliLm1lbW9pemVkU3RhdGU9e2Jhc2VMYW5lczowfSxuaShiLG51bGwhPT1mP2YuYmFzZUxhbmVzOmMpO2Vsc2UgcmV0dXJuIGE9bnVsbCE9PWY/Zi5iYXNlTGFuZXN8YzpjLGIubGFuZXM9Yi5jaGlsZExhbmVzPTEwNzM3NDE4MjQsYi5tZW1vaXplZFN0YXRlPXtiYXNlTGFuZXM6YX0sbmkoYixhKSxudWxsO2Vsc2UgbnVsbCE9PWY/KGQ9Zi5iYXNlTGFuZXN8YyxiLm1lbW9pemVkU3RhdGU9bnVsbCk6ZD1jLG5pKGIsZCk7ZmkoYSxiLGUsYyk7cmV0dXJuIGIuY2hpbGR9XG5mdW5jdGlvbiBvaShhLGIpe3ZhciBjPWIucmVmO2lmKG51bGw9PT1hJiZudWxsIT09Y3x8bnVsbCE9PWEmJmEucmVmIT09YyliLmZsYWdzfD0xMjh9ZnVuY3Rpb24gbGkoYSxiLGMsZCxlKXt2YXIgZj1GZihjKT9EZjpNLmN1cnJlbnQ7Zj1FZihiLGYpO3RnKGIsZSk7Yz1DaChhLGIsYyxkLGYsZSk7aWYobnVsbCE9PWEmJiF1ZylyZXR1cm4gYi51cGRhdGVRdWV1ZT1hLnVwZGF0ZVF1ZXVlLGIuZmxhZ3MmPS01MTcsYS5sYW5lcyY9fmUsaGkoYSxiLGUpO2IuZmxhZ3N8PTE7ZmkoYSxiLGMsZSk7cmV0dXJuIGIuY2hpbGR9XG5mdW5jdGlvbiBwaShhLGIsYyxkLGUpe2lmKEZmKGMpKXt2YXIgZj0hMDtKZihiKX1lbHNlIGY9ITE7dGcoYixlKTtpZihudWxsPT09Yi5zdGF0ZU5vZGUpbnVsbCE9PWEmJihhLmFsdGVybmF0ZT1udWxsLGIuYWx0ZXJuYXRlPW51bGwsYi5mbGFnc3w9MiksTWcoYixjLGQpLE9nKGIsYyxkLGUpLGQ9ITA7ZWxzZSBpZihudWxsPT09YSl7dmFyIGc9Yi5zdGF0ZU5vZGUsaD1iLm1lbW9pemVkUHJvcHM7Zy5wcm9wcz1oO3ZhciBrPWcuY29udGV4dCxsPWMuY29udGV4dFR5cGU7XCJvYmplY3RcIj09PXR5cGVvZiBsJiZudWxsIT09bD9sPXZnKGwpOihsPUZmKGMpP0RmOk0uY3VycmVudCxsPUVmKGIsbCkpO3ZhciBuPWMuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzLEE9XCJmdW5jdGlvblwiPT09dHlwZW9mIG58fFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlO0F8fFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZcblwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHN8fChoIT09ZHx8ayE9PWwpJiZOZyhiLGcsZCxsKTt3Zz0hMTt2YXIgcD1iLm1lbW9pemVkU3RhdGU7Zy5zdGF0ZT1wO0NnKGIsZCxnLGUpO2s9Yi5tZW1vaXplZFN0YXRlO2ghPT1kfHxwIT09a3x8Ti5jdXJyZW50fHx3Zz8oXCJmdW5jdGlvblwiPT09dHlwZW9mIG4mJihHZyhiLGMsbixkKSxrPWIubWVtb2l6ZWRTdGF0ZSksKGg9d2d8fExnKGIsYyxoLGQscCxrLGwpKT8oQXx8XCJmdW5jdGlvblwiIT09dHlwZW9mIGcuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuY29tcG9uZW50V2lsbE1vdW50fHwoXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuY29tcG9uZW50V2lsbE1vdW50JiZnLmNvbXBvbmVudFdpbGxNb3VudCgpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQmJmcuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpKSxcImZ1bmN0aW9uXCI9PT1cbnR5cGVvZiBnLmNvbXBvbmVudERpZE1vdW50JiYoYi5mbGFnc3w9NCkpOihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5jb21wb25lbnREaWRNb3VudCYmKGIuZmxhZ3N8PTQpLGIubWVtb2l6ZWRQcm9wcz1kLGIubWVtb2l6ZWRTdGF0ZT1rKSxnLnByb3BzPWQsZy5zdGF0ZT1rLGcuY29udGV4dD1sLGQ9aCk6KFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmNvbXBvbmVudERpZE1vdW50JiYoYi5mbGFnc3w9NCksZD0hMSl9ZWxzZXtnPWIuc3RhdGVOb2RlO3lnKGEsYik7aD1iLm1lbW9pemVkUHJvcHM7bD1iLnR5cGU9PT1iLmVsZW1lbnRUeXBlP2g6bGcoYi50eXBlLGgpO2cucHJvcHM9bDtBPWIucGVuZGluZ1Byb3BzO3A9Zy5jb250ZXh0O2s9Yy5jb250ZXh0VHlwZTtcIm9iamVjdFwiPT09dHlwZW9mIGsmJm51bGwhPT1rP2s9dmcoayk6KGs9RmYoYyk/RGY6TS5jdXJyZW50LGs9RWYoYixrKSk7dmFyIEM9Yy5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM7KG49XCJmdW5jdGlvblwiPT09dHlwZW9mIEN8fFxuXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUpfHxcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5VTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wc3x8KGghPT1BfHxwIT09aykmJk5nKGIsZyxkLGspO3dnPSExO3A9Yi5tZW1vaXplZFN0YXRlO2cuc3RhdGU9cDtDZyhiLGQsZyxlKTt2YXIgeD1iLm1lbW9pemVkU3RhdGU7aCE9PUF8fHAhPT14fHxOLmN1cnJlbnR8fHdnPyhcImZ1bmN0aW9uXCI9PT10eXBlb2YgQyYmKEdnKGIsYyxDLGQpLHg9Yi5tZW1vaXplZFN0YXRlKSwobD13Z3x8TGcoYixjLGwsZCxwLHgsaykpPyhufHxcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5VTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZSYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuY29tcG9uZW50V2lsbFVwZGF0ZXx8KFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmNvbXBvbmVudFdpbGxVcGRhdGUmJmcuY29tcG9uZW50V2lsbFVwZGF0ZShkLFxueCxrKSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5VTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZSYmZy5VTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZShkLHgsaykpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmNvbXBvbmVudERpZFVwZGF0ZSYmKGIuZmxhZ3N8PTQpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlJiYoYi5mbGFnc3w9MjU2KSk6KFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmNvbXBvbmVudERpZFVwZGF0ZXx8aD09PWEubWVtb2l6ZWRQcm9wcyYmcD09PWEubWVtb2l6ZWRTdGF0ZXx8KGIuZmxhZ3N8PTQpLFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlfHxoPT09YS5tZW1vaXplZFByb3BzJiZwPT09YS5tZW1vaXplZFN0YXRlfHwoYi5mbGFnc3w9MjU2KSxiLm1lbW9pemVkUHJvcHM9ZCxiLm1lbW9pemVkU3RhdGU9eCksZy5wcm9wcz1kLGcuc3RhdGU9eCxnLmNvbnRleHQ9ayxkPWwpOihcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5jb21wb25lbnREaWRVcGRhdGV8fFxuaD09PWEubWVtb2l6ZWRQcm9wcyYmcD09PWEubWVtb2l6ZWRTdGF0ZXx8KGIuZmxhZ3N8PTQpLFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlfHxoPT09YS5tZW1vaXplZFByb3BzJiZwPT09YS5tZW1vaXplZFN0YXRlfHwoYi5mbGFnc3w9MjU2KSxkPSExKX1yZXR1cm4gcWkoYSxiLGMsZCxmLGUpfVxuZnVuY3Rpb24gcWkoYSxiLGMsZCxlLGYpe29pKGEsYik7dmFyIGc9MCE9PShiLmZsYWdzJjY0KTtpZighZCYmIWcpcmV0dXJuIGUmJktmKGIsYywhMSksaGkoYSxiLGYpO2Q9Yi5zdGF0ZU5vZGU7ZWkuY3VycmVudD1iO3ZhciBoPWcmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBjLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcj9udWxsOmQucmVuZGVyKCk7Yi5mbGFnc3w9MTtudWxsIT09YSYmZz8oYi5jaGlsZD1ZZyhiLGEuY2hpbGQsbnVsbCxmKSxiLmNoaWxkPVlnKGIsbnVsbCxoLGYpKTpmaShhLGIsaCxmKTtiLm1lbW9pemVkU3RhdGU9ZC5zdGF0ZTtlJiZLZihiLGMsITApO3JldHVybiBiLmNoaWxkfWZ1bmN0aW9uIHJpKGEpe3ZhciBiPWEuc3RhdGVOb2RlO2IucGVuZGluZ0NvbnRleHQ/SGYoYSxiLnBlbmRpbmdDb250ZXh0LGIucGVuZGluZ0NvbnRleHQhPT1iLmNvbnRleHQpOmIuY29udGV4dCYmSGYoYSxiLmNvbnRleHQsITEpO2VoKGEsYi5jb250YWluZXJJbmZvKX1cbnZhciBzaT17ZGVoeWRyYXRlZDpudWxsLHJldHJ5TGFuZTowfTtcbmZ1bmN0aW9uIHRpKGEsYixjKXt2YXIgZD1iLnBlbmRpbmdQcm9wcyxlPVAuY3VycmVudCxmPSExLGc7KGc9MCE9PShiLmZsYWdzJjY0KSl8fChnPW51bGwhPT1hJiZudWxsPT09YS5tZW1vaXplZFN0YXRlPyExOjAhPT0oZSYyKSk7Zz8oZj0hMCxiLmZsYWdzJj0tNjUpOm51bGwhPT1hJiZudWxsPT09YS5tZW1vaXplZFN0YXRlfHx2b2lkIDA9PT1kLmZhbGxiYWNrfHwhMD09PWQudW5zdGFibGVfYXZvaWRUaGlzRmFsbGJhY2t8fChlfD0xKTtJKFAsZSYxKTtpZihudWxsPT09YSl7dm9pZCAwIT09ZC5mYWxsYmFjayYmcGgoYik7YT1kLmNoaWxkcmVuO2U9ZC5mYWxsYmFjaztpZihmKXJldHVybiBhPXVpKGIsYSxlLGMpLGIuY2hpbGQubWVtb2l6ZWRTdGF0ZT17YmFzZUxhbmVzOmN9LGIubWVtb2l6ZWRTdGF0ZT1zaSxhO2lmKFwibnVtYmVyXCI9PT10eXBlb2YgZC51bnN0YWJsZV9leHBlY3RlZExvYWRUaW1lKXJldHVybiBhPXVpKGIsYSxlLGMpLGIuY2hpbGQubWVtb2l6ZWRTdGF0ZT17YmFzZUxhbmVzOmN9LFxuYi5tZW1vaXplZFN0YXRlPXNpLGIubGFuZXM9MzM1NTQ0MzIsYTtjPXZpKHttb2RlOlwidmlzaWJsZVwiLGNoaWxkcmVuOmF9LGIubW9kZSxjLG51bGwpO2MucmV0dXJuPWI7cmV0dXJuIGIuY2hpbGQ9Y31pZihudWxsIT09YS5tZW1vaXplZFN0YXRlKXtpZihmKXJldHVybiBkPXdpKGEsYixkLmNoaWxkcmVuLGQuZmFsbGJhY2ssYyksZj1iLmNoaWxkLGU9YS5jaGlsZC5tZW1vaXplZFN0YXRlLGYubWVtb2l6ZWRTdGF0ZT1udWxsPT09ZT97YmFzZUxhbmVzOmN9OntiYXNlTGFuZXM6ZS5iYXNlTGFuZXN8Y30sZi5jaGlsZExhbmVzPWEuY2hpbGRMYW5lcyZ+YyxiLm1lbW9pemVkU3RhdGU9c2ksZDtjPXhpKGEsYixkLmNoaWxkcmVuLGMpO2IubWVtb2l6ZWRTdGF0ZT1udWxsO3JldHVybiBjfWlmKGYpcmV0dXJuIGQ9d2koYSxiLGQuY2hpbGRyZW4sZC5mYWxsYmFjayxjKSxmPWIuY2hpbGQsZT1hLmNoaWxkLm1lbW9pemVkU3RhdGUsZi5tZW1vaXplZFN0YXRlPW51bGw9PT1lP3tiYXNlTGFuZXM6Y306XG57YmFzZUxhbmVzOmUuYmFzZUxhbmVzfGN9LGYuY2hpbGRMYW5lcz1hLmNoaWxkTGFuZXMmfmMsYi5tZW1vaXplZFN0YXRlPXNpLGQ7Yz14aShhLGIsZC5jaGlsZHJlbixjKTtiLm1lbW9pemVkU3RhdGU9bnVsbDtyZXR1cm4gY31mdW5jdGlvbiB1aShhLGIsYyxkKXt2YXIgZT1hLm1vZGUsZj1hLmNoaWxkO2I9e21vZGU6XCJoaWRkZW5cIixjaGlsZHJlbjpifTswPT09KGUmMikmJm51bGwhPT1mPyhmLmNoaWxkTGFuZXM9MCxmLnBlbmRpbmdQcm9wcz1iKTpmPXZpKGIsZSwwLG51bGwpO2M9WGcoYyxlLGQsbnVsbCk7Zi5yZXR1cm49YTtjLnJldHVybj1hO2Yuc2libGluZz1jO2EuY2hpbGQ9ZjtyZXR1cm4gY31cbmZ1bmN0aW9uIHhpKGEsYixjLGQpe3ZhciBlPWEuY2hpbGQ7YT1lLnNpYmxpbmc7Yz1UZyhlLHttb2RlOlwidmlzaWJsZVwiLGNoaWxkcmVuOmN9KTswPT09KGIubW9kZSYyKSYmKGMubGFuZXM9ZCk7Yy5yZXR1cm49YjtjLnNpYmxpbmc9bnVsbDtudWxsIT09YSYmKGEubmV4dEVmZmVjdD1udWxsLGEuZmxhZ3M9OCxiLmZpcnN0RWZmZWN0PWIubGFzdEVmZmVjdD1hKTtyZXR1cm4gYi5jaGlsZD1jfVxuZnVuY3Rpb24gd2koYSxiLGMsZCxlKXt2YXIgZj1iLm1vZGUsZz1hLmNoaWxkO2E9Zy5zaWJsaW5nO3ZhciBoPXttb2RlOlwiaGlkZGVuXCIsY2hpbGRyZW46Y307MD09PShmJjIpJiZiLmNoaWxkIT09Zz8oYz1iLmNoaWxkLGMuY2hpbGRMYW5lcz0wLGMucGVuZGluZ1Byb3BzPWgsZz1jLmxhc3RFZmZlY3QsbnVsbCE9PWc/KGIuZmlyc3RFZmZlY3Q9Yy5maXJzdEVmZmVjdCxiLmxhc3RFZmZlY3Q9ZyxnLm5leHRFZmZlY3Q9bnVsbCk6Yi5maXJzdEVmZmVjdD1iLmxhc3RFZmZlY3Q9bnVsbCk6Yz1UZyhnLGgpO251bGwhPT1hP2Q9VGcoYSxkKTooZD1YZyhkLGYsZSxudWxsKSxkLmZsYWdzfD0yKTtkLnJldHVybj1iO2MucmV0dXJuPWI7Yy5zaWJsaW5nPWQ7Yi5jaGlsZD1jO3JldHVybiBkfWZ1bmN0aW9uIHlpKGEsYil7YS5sYW5lc3w9Yjt2YXIgYz1hLmFsdGVybmF0ZTtudWxsIT09YyYmKGMubGFuZXN8PWIpO3NnKGEucmV0dXJuLGIpfVxuZnVuY3Rpb24gemkoYSxiLGMsZCxlLGYpe3ZhciBnPWEubWVtb2l6ZWRTdGF0ZTtudWxsPT09Zz9hLm1lbW9pemVkU3RhdGU9e2lzQmFja3dhcmRzOmIscmVuZGVyaW5nOm51bGwscmVuZGVyaW5nU3RhcnRUaW1lOjAsbGFzdDpkLHRhaWw6Yyx0YWlsTW9kZTplLGxhc3RFZmZlY3Q6Zn06KGcuaXNCYWNrd2FyZHM9YixnLnJlbmRlcmluZz1udWxsLGcucmVuZGVyaW5nU3RhcnRUaW1lPTAsZy5sYXN0PWQsZy50YWlsPWMsZy50YWlsTW9kZT1lLGcubGFzdEVmZmVjdD1mKX1cbmZ1bmN0aW9uIEFpKGEsYixjKXt2YXIgZD1iLnBlbmRpbmdQcm9wcyxlPWQucmV2ZWFsT3JkZXIsZj1kLnRhaWw7ZmkoYSxiLGQuY2hpbGRyZW4sYyk7ZD1QLmN1cnJlbnQ7aWYoMCE9PShkJjIpKWQ9ZCYxfDIsYi5mbGFnc3w9NjQ7ZWxzZXtpZihudWxsIT09YSYmMCE9PShhLmZsYWdzJjY0KSlhOmZvcihhPWIuY2hpbGQ7bnVsbCE9PWE7KXtpZigxMz09PWEudGFnKW51bGwhPT1hLm1lbW9pemVkU3RhdGUmJnlpKGEsYyk7ZWxzZSBpZigxOT09PWEudGFnKXlpKGEsYyk7ZWxzZSBpZihudWxsIT09YS5jaGlsZCl7YS5jaGlsZC5yZXR1cm49YTthPWEuY2hpbGQ7Y29udGludWV9aWYoYT09PWIpYnJlYWsgYTtmb3IoO251bGw9PT1hLnNpYmxpbmc7KXtpZihudWxsPT09YS5yZXR1cm58fGEucmV0dXJuPT09YilicmVhayBhO2E9YS5yZXR1cm59YS5zaWJsaW5nLnJldHVybj1hLnJldHVybjthPWEuc2libGluZ31kJj0xfUkoUCxkKTtpZigwPT09KGIubW9kZSYyKSliLm1lbW9pemVkU3RhdGU9XG5udWxsO2Vsc2Ugc3dpdGNoKGUpe2Nhc2UgXCJmb3J3YXJkc1wiOmM9Yi5jaGlsZDtmb3IoZT1udWxsO251bGwhPT1jOylhPWMuYWx0ZXJuYXRlLG51bGwhPT1hJiZudWxsPT09aWgoYSkmJihlPWMpLGM9Yy5zaWJsaW5nO2M9ZTtudWxsPT09Yz8oZT1iLmNoaWxkLGIuY2hpbGQ9bnVsbCk6KGU9Yy5zaWJsaW5nLGMuc2libGluZz1udWxsKTt6aShiLCExLGUsYyxmLGIubGFzdEVmZmVjdCk7YnJlYWs7Y2FzZSBcImJhY2t3YXJkc1wiOmM9bnVsbDtlPWIuY2hpbGQ7Zm9yKGIuY2hpbGQ9bnVsbDtudWxsIT09ZTspe2E9ZS5hbHRlcm5hdGU7aWYobnVsbCE9PWEmJm51bGw9PT1paChhKSl7Yi5jaGlsZD1lO2JyZWFrfWE9ZS5zaWJsaW5nO2Uuc2libGluZz1jO2M9ZTtlPWF9emkoYiwhMCxjLG51bGwsZixiLmxhc3RFZmZlY3QpO2JyZWFrO2Nhc2UgXCJ0b2dldGhlclwiOnppKGIsITEsbnVsbCxudWxsLHZvaWQgMCxiLmxhc3RFZmZlY3QpO2JyZWFrO2RlZmF1bHQ6Yi5tZW1vaXplZFN0YXRlPW51bGx9cmV0dXJuIGIuY2hpbGR9XG5mdW5jdGlvbiBoaShhLGIsYyl7bnVsbCE9PWEmJihiLmRlcGVuZGVuY2llcz1hLmRlcGVuZGVuY2llcyk7RGd8PWIubGFuZXM7aWYoMCE9PShjJmIuY2hpbGRMYW5lcykpe2lmKG51bGwhPT1hJiZiLmNoaWxkIT09YS5jaGlsZCl0aHJvdyBFcnJvcih5KDE1MykpO2lmKG51bGwhPT1iLmNoaWxkKXthPWIuY2hpbGQ7Yz1UZyhhLGEucGVuZGluZ1Byb3BzKTtiLmNoaWxkPWM7Zm9yKGMucmV0dXJuPWI7bnVsbCE9PWEuc2libGluZzspYT1hLnNpYmxpbmcsYz1jLnNpYmxpbmc9VGcoYSxhLnBlbmRpbmdQcm9wcyksYy5yZXR1cm49YjtjLnNpYmxpbmc9bnVsbH1yZXR1cm4gYi5jaGlsZH1yZXR1cm4gbnVsbH12YXIgQmksQ2ksRGksRWk7XG5CaT1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYz1iLmNoaWxkO251bGwhPT1jOyl7aWYoNT09PWMudGFnfHw2PT09Yy50YWcpYS5hcHBlbmRDaGlsZChjLnN0YXRlTm9kZSk7ZWxzZSBpZig0IT09Yy50YWcmJm51bGwhPT1jLmNoaWxkKXtjLmNoaWxkLnJldHVybj1jO2M9Yy5jaGlsZDtjb250aW51ZX1pZihjPT09YilicmVhaztmb3IoO251bGw9PT1jLnNpYmxpbmc7KXtpZihudWxsPT09Yy5yZXR1cm58fGMucmV0dXJuPT09YilyZXR1cm47Yz1jLnJldHVybn1jLnNpYmxpbmcucmV0dXJuPWMucmV0dXJuO2M9Yy5zaWJsaW5nfX07Q2k9ZnVuY3Rpb24oKXt9O1xuRGk9ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9YS5tZW1vaXplZFByb3BzO2lmKGUhPT1kKXthPWIuc3RhdGVOb2RlO2RoKGFoLmN1cnJlbnQpO3ZhciBmPW51bGw7c3dpdGNoKGMpe2Nhc2UgXCJpbnB1dFwiOmU9WWEoYSxlKTtkPVlhKGEsZCk7Zj1bXTticmVhaztjYXNlIFwib3B0aW9uXCI6ZT1lYihhLGUpO2Q9ZWIoYSxkKTtmPVtdO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjplPW0oe30sZSx7dmFsdWU6dm9pZCAwfSk7ZD1tKHt9LGQse3ZhbHVlOnZvaWQgMH0pO2Y9W107YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6ZT1nYihhLGUpO2Q9Z2IoYSxkKTtmPVtdO2JyZWFrO2RlZmF1bHQ6XCJmdW5jdGlvblwiIT09dHlwZW9mIGUub25DbGljayYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGQub25DbGljayYmKGEub25jbGljaz1qZil9dmIoYyxkKTt2YXIgZztjPW51bGw7Zm9yKGwgaW4gZSlpZighZC5oYXNPd25Qcm9wZXJ0eShsKSYmZS5oYXNPd25Qcm9wZXJ0eShsKSYmbnVsbCE9ZVtsXSlpZihcInN0eWxlXCI9PT1cbmwpe3ZhciBoPWVbbF07Zm9yKGcgaW4gaCloLmhhc093blByb3BlcnR5KGcpJiYoY3x8KGM9e30pLGNbZ109XCJcIil9ZWxzZVwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIiE9PWwmJlwiY2hpbGRyZW5cIiE9PWwmJlwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nXCIhPT1sJiZcInN1cHByZXNzSHlkcmF0aW9uV2FybmluZ1wiIT09bCYmXCJhdXRvRm9jdXNcIiE9PWwmJihjYS5oYXNPd25Qcm9wZXJ0eShsKT9mfHwoZj1bXSk6KGY9Znx8W10pLnB1c2gobCxudWxsKSk7Zm9yKGwgaW4gZCl7dmFyIGs9ZFtsXTtoPW51bGwhPWU/ZVtsXTp2b2lkIDA7aWYoZC5oYXNPd25Qcm9wZXJ0eShsKSYmayE9PWgmJihudWxsIT1rfHxudWxsIT1oKSlpZihcInN0eWxlXCI9PT1sKWlmKGgpe2ZvcihnIGluIGgpIWguaGFzT3duUHJvcGVydHkoZyl8fGsmJmsuaGFzT3duUHJvcGVydHkoZyl8fChjfHwoYz17fSksY1tnXT1cIlwiKTtmb3IoZyBpbiBrKWsuaGFzT3duUHJvcGVydHkoZykmJmhbZ10hPT1rW2ddJiYoY3x8XG4oYz17fSksY1tnXT1rW2ddKX1lbHNlIGN8fChmfHwoZj1bXSksZi5wdXNoKGwsYykpLGM9aztlbHNlXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiPT09bD8oaz1rP2suX19odG1sOnZvaWQgMCxoPWg/aC5fX2h0bWw6dm9pZCAwLG51bGwhPWsmJmghPT1rJiYoZj1mfHxbXSkucHVzaChsLGspKTpcImNoaWxkcmVuXCI9PT1sP1wic3RyaW5nXCIhPT10eXBlb2YgayYmXCJudW1iZXJcIiE9PXR5cGVvZiBrfHwoZj1mfHxbXSkucHVzaChsLFwiXCIrayk6XCJzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmdcIiE9PWwmJlwic3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nXCIhPT1sJiYoY2EuaGFzT3duUHJvcGVydHkobCk/KG51bGwhPWsmJlwib25TY3JvbGxcIj09PWwmJkcoXCJzY3JvbGxcIixhKSxmfHxoPT09a3x8KGY9W10pKTpcIm9iamVjdFwiPT09dHlwZW9mIGsmJm51bGwhPT1rJiZrLiQkdHlwZW9mPT09R2E/ay50b1N0cmluZygpOihmPWZ8fFtdKS5wdXNoKGwsaykpfWMmJihmPWZ8fFtdKS5wdXNoKFwic3R5bGVcIixcbmMpO3ZhciBsPWY7aWYoYi51cGRhdGVRdWV1ZT1sKWIuZmxhZ3N8PTR9fTtFaT1mdW5jdGlvbihhLGIsYyxkKXtjIT09ZCYmKGIuZmxhZ3N8PTQpfTtmdW5jdGlvbiBGaShhLGIpe2lmKCFsaClzd2l0Y2goYS50YWlsTW9kZSl7Y2FzZSBcImhpZGRlblwiOmI9YS50YWlsO2Zvcih2YXIgYz1udWxsO251bGwhPT1iOyludWxsIT09Yi5hbHRlcm5hdGUmJihjPWIpLGI9Yi5zaWJsaW5nO251bGw9PT1jP2EudGFpbD1udWxsOmMuc2libGluZz1udWxsO2JyZWFrO2Nhc2UgXCJjb2xsYXBzZWRcIjpjPWEudGFpbDtmb3IodmFyIGQ9bnVsbDtudWxsIT09YzspbnVsbCE9PWMuYWx0ZXJuYXRlJiYoZD1jKSxjPWMuc2libGluZztudWxsPT09ZD9ifHxudWxsPT09YS50YWlsP2EudGFpbD1udWxsOmEudGFpbC5zaWJsaW5nPW51bGw6ZC5zaWJsaW5nPW51bGx9fVxuZnVuY3Rpb24gR2koYSxiLGMpe3ZhciBkPWIucGVuZGluZ1Byb3BzO3N3aXRjaChiLnRhZyl7Y2FzZSAyOmNhc2UgMTY6Y2FzZSAxNTpjYXNlIDA6Y2FzZSAxMTpjYXNlIDc6Y2FzZSA4OmNhc2UgMTI6Y2FzZSA5OmNhc2UgMTQ6cmV0dXJuIG51bGw7Y2FzZSAxOnJldHVybiBGZihiLnR5cGUpJiZHZigpLG51bGw7Y2FzZSAzOmZoKCk7SChOKTtIKE0pO3VoKCk7ZD1iLnN0YXRlTm9kZTtkLnBlbmRpbmdDb250ZXh0JiYoZC5jb250ZXh0PWQucGVuZGluZ0NvbnRleHQsZC5wZW5kaW5nQ29udGV4dD1udWxsKTtpZihudWxsPT09YXx8bnVsbD09PWEuY2hpbGQpcmgoYik/Yi5mbGFnc3w9NDpkLmh5ZHJhdGV8fChiLmZsYWdzfD0yNTYpO0NpKGIpO3JldHVybiBudWxsO2Nhc2UgNTpoaChiKTt2YXIgZT1kaChjaC5jdXJyZW50KTtjPWIudHlwZTtpZihudWxsIT09YSYmbnVsbCE9Yi5zdGF0ZU5vZGUpRGkoYSxiLGMsZCxlKSxhLnJlZiE9PWIucmVmJiYoYi5mbGFnc3w9MTI4KTtlbHNle2lmKCFkKXtpZihudWxsPT09XG5iLnN0YXRlTm9kZSl0aHJvdyBFcnJvcih5KDE2NikpO3JldHVybiBudWxsfWE9ZGgoYWguY3VycmVudCk7aWYocmgoYikpe2Q9Yi5zdGF0ZU5vZGU7Yz1iLnR5cGU7dmFyIGY9Yi5tZW1vaXplZFByb3BzO2Rbd2ZdPWI7ZFt4Zl09Zjtzd2l0Y2goYyl7Y2FzZSBcImRpYWxvZ1wiOkcoXCJjYW5jZWxcIixkKTtHKFwiY2xvc2VcIixkKTticmVhaztjYXNlIFwiaWZyYW1lXCI6Y2FzZSBcIm9iamVjdFwiOmNhc2UgXCJlbWJlZFwiOkcoXCJsb2FkXCIsZCk7YnJlYWs7Y2FzZSBcInZpZGVvXCI6Y2FzZSBcImF1ZGlvXCI6Zm9yKGE9MDthPFhlLmxlbmd0aDthKyspRyhYZVthXSxkKTticmVhaztjYXNlIFwic291cmNlXCI6RyhcImVycm9yXCIsZCk7YnJlYWs7Y2FzZSBcImltZ1wiOmNhc2UgXCJpbWFnZVwiOmNhc2UgXCJsaW5rXCI6RyhcImVycm9yXCIsZCk7RyhcImxvYWRcIixkKTticmVhaztjYXNlIFwiZGV0YWlsc1wiOkcoXCJ0b2dnbGVcIixkKTticmVhaztjYXNlIFwiaW5wdXRcIjpaYShkLGYpO0coXCJpbnZhbGlkXCIsZCk7YnJlYWs7Y2FzZSBcInNlbGVjdFwiOmQuX3dyYXBwZXJTdGF0ZT1cbnt3YXNNdWx0aXBsZTohIWYubXVsdGlwbGV9O0coXCJpbnZhbGlkXCIsZCk7YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6aGIoZCxmKSxHKFwiaW52YWxpZFwiLGQpfXZiKGMsZik7YT1udWxsO2Zvcih2YXIgZyBpbiBmKWYuaGFzT3duUHJvcGVydHkoZykmJihlPWZbZ10sXCJjaGlsZHJlblwiPT09Zz9cInN0cmluZ1wiPT09dHlwZW9mIGU/ZC50ZXh0Q29udGVudCE9PWUmJihhPVtcImNoaWxkcmVuXCIsZV0pOlwibnVtYmVyXCI9PT10eXBlb2YgZSYmZC50ZXh0Q29udGVudCE9PVwiXCIrZSYmKGE9W1wiY2hpbGRyZW5cIixcIlwiK2VdKTpjYS5oYXNPd25Qcm9wZXJ0eShnKSYmbnVsbCE9ZSYmXCJvblNjcm9sbFwiPT09ZyYmRyhcInNjcm9sbFwiLGQpKTtzd2l0Y2goYyl7Y2FzZSBcImlucHV0XCI6VmEoZCk7Y2IoZCxmLCEwKTticmVhaztjYXNlIFwidGV4dGFyZWFcIjpWYShkKTtqYihkKTticmVhaztjYXNlIFwic2VsZWN0XCI6Y2FzZSBcIm9wdGlvblwiOmJyZWFrO2RlZmF1bHQ6XCJmdW5jdGlvblwiPT09dHlwZW9mIGYub25DbGljayYmKGQub25jbGljaz1cbmpmKX1kPWE7Yi51cGRhdGVRdWV1ZT1kO251bGwhPT1kJiYoYi5mbGFnc3w9NCl9ZWxzZXtnPTk9PT1lLm5vZGVUeXBlP2U6ZS5vd25lckRvY3VtZW50O2E9PT1rYi5odG1sJiYoYT1sYihjKSk7YT09PWtiLmh0bWw/XCJzY3JpcHRcIj09PWM/KGE9Zy5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGEuaW5uZXJIVE1MPVwiPHNjcmlwdD5cXHgzYy9zY3JpcHQ+XCIsYT1hLnJlbW92ZUNoaWxkKGEuZmlyc3RDaGlsZCkpOlwic3RyaW5nXCI9PT10eXBlb2YgZC5pcz9hPWcuY3JlYXRlRWxlbWVudChjLHtpczpkLmlzfSk6KGE9Zy5jcmVhdGVFbGVtZW50KGMpLFwic2VsZWN0XCI9PT1jJiYoZz1hLGQubXVsdGlwbGU/Zy5tdWx0aXBsZT0hMDpkLnNpemUmJihnLnNpemU9ZC5zaXplKSkpOmE9Zy5jcmVhdGVFbGVtZW50TlMoYSxjKTthW3dmXT1iO2FbeGZdPWQ7QmkoYSxiLCExLCExKTtiLnN0YXRlTm9kZT1hO2c9d2IoYyxkKTtzd2l0Y2goYyl7Y2FzZSBcImRpYWxvZ1wiOkcoXCJjYW5jZWxcIixhKTtHKFwiY2xvc2VcIixhKTtcbmU9ZDticmVhaztjYXNlIFwiaWZyYW1lXCI6Y2FzZSBcIm9iamVjdFwiOmNhc2UgXCJlbWJlZFwiOkcoXCJsb2FkXCIsYSk7ZT1kO2JyZWFrO2Nhc2UgXCJ2aWRlb1wiOmNhc2UgXCJhdWRpb1wiOmZvcihlPTA7ZTxYZS5sZW5ndGg7ZSsrKUcoWGVbZV0sYSk7ZT1kO2JyZWFrO2Nhc2UgXCJzb3VyY2VcIjpHKFwiZXJyb3JcIixhKTtlPWQ7YnJlYWs7Y2FzZSBcImltZ1wiOmNhc2UgXCJpbWFnZVwiOmNhc2UgXCJsaW5rXCI6RyhcImVycm9yXCIsYSk7RyhcImxvYWRcIixhKTtlPWQ7YnJlYWs7Y2FzZSBcImRldGFpbHNcIjpHKFwidG9nZ2xlXCIsYSk7ZT1kO2JyZWFrO2Nhc2UgXCJpbnB1dFwiOlphKGEsZCk7ZT1ZYShhLGQpO0coXCJpbnZhbGlkXCIsYSk7YnJlYWs7Y2FzZSBcIm9wdGlvblwiOmU9ZWIoYSxkKTticmVhaztjYXNlIFwic2VsZWN0XCI6YS5fd3JhcHBlclN0YXRlPXt3YXNNdWx0aXBsZTohIWQubXVsdGlwbGV9O2U9bSh7fSxkLHt2YWx1ZTp2b2lkIDB9KTtHKFwiaW52YWxpZFwiLGEpO2JyZWFrO2Nhc2UgXCJ0ZXh0YXJlYVwiOmhiKGEsZCk7ZT1cbmdiKGEsZCk7RyhcImludmFsaWRcIixhKTticmVhaztkZWZhdWx0OmU9ZH12YihjLGUpO3ZhciBoPWU7Zm9yKGYgaW4gaClpZihoLmhhc093blByb3BlcnR5KGYpKXt2YXIgaz1oW2ZdO1wic3R5bGVcIj09PWY/dGIoYSxrKTpcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCI9PT1mPyhrPWs/ay5fX2h0bWw6dm9pZCAwLG51bGwhPWsmJm9iKGEsaykpOlwiY2hpbGRyZW5cIj09PWY/XCJzdHJpbmdcIj09PXR5cGVvZiBrPyhcInRleHRhcmVhXCIhPT1jfHxcIlwiIT09aykmJnBiKGEsayk6XCJudW1iZXJcIj09PXR5cGVvZiBrJiZwYihhLFwiXCIrayk6XCJzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmdcIiE9PWYmJlwic3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nXCIhPT1mJiZcImF1dG9Gb2N1c1wiIT09ZiYmKGNhLmhhc093blByb3BlcnR5KGYpP251bGwhPWsmJlwib25TY3JvbGxcIj09PWYmJkcoXCJzY3JvbGxcIixhKTpudWxsIT1rJiZxYShhLGYsayxnKSl9c3dpdGNoKGMpe2Nhc2UgXCJpbnB1dFwiOlZhKGEpO2NiKGEsZCwhMSk7XG5icmVhaztjYXNlIFwidGV4dGFyZWFcIjpWYShhKTtqYihhKTticmVhaztjYXNlIFwib3B0aW9uXCI6bnVsbCE9ZC52YWx1ZSYmYS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwiXCIrU2EoZC52YWx1ZSkpO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjphLm11bHRpcGxlPSEhZC5tdWx0aXBsZTtmPWQudmFsdWU7bnVsbCE9Zj9mYihhLCEhZC5tdWx0aXBsZSxmLCExKTpudWxsIT1kLmRlZmF1bHRWYWx1ZSYmZmIoYSwhIWQubXVsdGlwbGUsZC5kZWZhdWx0VmFsdWUsITApO2JyZWFrO2RlZmF1bHQ6XCJmdW5jdGlvblwiPT09dHlwZW9mIGUub25DbGljayYmKGEub25jbGljaz1qZil9bWYoYyxkKSYmKGIuZmxhZ3N8PTQpfW51bGwhPT1iLnJlZiYmKGIuZmxhZ3N8PTEyOCl9cmV0dXJuIG51bGw7Y2FzZSA2OmlmKGEmJm51bGwhPWIuc3RhdGVOb2RlKUVpKGEsYixhLm1lbW9pemVkUHJvcHMsZCk7ZWxzZXtpZihcInN0cmluZ1wiIT09dHlwZW9mIGQmJm51bGw9PT1iLnN0YXRlTm9kZSl0aHJvdyBFcnJvcih5KDE2NikpO1xuYz1kaChjaC5jdXJyZW50KTtkaChhaC5jdXJyZW50KTtyaChiKT8oZD1iLnN0YXRlTm9kZSxjPWIubWVtb2l6ZWRQcm9wcyxkW3dmXT1iLGQubm9kZVZhbHVlIT09YyYmKGIuZmxhZ3N8PTQpKTooZD0oOT09PWMubm9kZVR5cGU/YzpjLm93bmVyRG9jdW1lbnQpLmNyZWF0ZVRleHROb2RlKGQpLGRbd2ZdPWIsYi5zdGF0ZU5vZGU9ZCl9cmV0dXJuIG51bGw7Y2FzZSAxMzpIKFApO2Q9Yi5tZW1vaXplZFN0YXRlO2lmKDAhPT0oYi5mbGFncyY2NCkpcmV0dXJuIGIubGFuZXM9YyxiO2Q9bnVsbCE9PWQ7Yz0hMTtudWxsPT09YT92b2lkIDAhPT1iLm1lbW9pemVkUHJvcHMuZmFsbGJhY2smJnJoKGIpOmM9bnVsbCE9PWEubWVtb2l6ZWRTdGF0ZTtpZihkJiYhYyYmMCE9PShiLm1vZGUmMikpaWYobnVsbD09PWEmJiEwIT09Yi5tZW1vaXplZFByb3BzLnVuc3RhYmxlX2F2b2lkVGhpc0ZhbGxiYWNrfHwwIT09KFAuY3VycmVudCYxKSkwPT09ViYmKFY9Myk7ZWxzZXtpZigwPT09Vnx8Mz09PVYpVj1cbjQ7bnVsbD09PVV8fDA9PT0oRGcmMTM0MjE3NzI3KSYmMD09PShIaSYxMzQyMTc3MjcpfHxJaShVLFcpfWlmKGR8fGMpYi5mbGFnc3w9NDtyZXR1cm4gbnVsbDtjYXNlIDQ6cmV0dXJuIGZoKCksQ2koYiksbnVsbD09PWEmJmNmKGIuc3RhdGVOb2RlLmNvbnRhaW5lckluZm8pLG51bGw7Y2FzZSAxMDpyZXR1cm4gcmcoYiksbnVsbDtjYXNlIDE3OnJldHVybiBGZihiLnR5cGUpJiZHZigpLG51bGw7Y2FzZSAxOTpIKFApO2Q9Yi5tZW1vaXplZFN0YXRlO2lmKG51bGw9PT1kKXJldHVybiBudWxsO2Y9MCE9PShiLmZsYWdzJjY0KTtnPWQucmVuZGVyaW5nO2lmKG51bGw9PT1nKWlmKGYpRmkoZCwhMSk7ZWxzZXtpZigwIT09Vnx8bnVsbCE9PWEmJjAhPT0oYS5mbGFncyY2NCkpZm9yKGE9Yi5jaGlsZDtudWxsIT09YTspe2c9aWgoYSk7aWYobnVsbCE9PWcpe2IuZmxhZ3N8PTY0O0ZpKGQsITEpO2Y9Zy51cGRhdGVRdWV1ZTtudWxsIT09ZiYmKGIudXBkYXRlUXVldWU9ZixiLmZsYWdzfD00KTtcbm51bGw9PT1kLmxhc3RFZmZlY3QmJihiLmZpcnN0RWZmZWN0PW51bGwpO2IubGFzdEVmZmVjdD1kLmxhc3RFZmZlY3Q7ZD1jO2ZvcihjPWIuY2hpbGQ7bnVsbCE9PWM7KWY9YyxhPWQsZi5mbGFncyY9MixmLm5leHRFZmZlY3Q9bnVsbCxmLmZpcnN0RWZmZWN0PW51bGwsZi5sYXN0RWZmZWN0PW51bGwsZz1mLmFsdGVybmF0ZSxudWxsPT09Zz8oZi5jaGlsZExhbmVzPTAsZi5sYW5lcz1hLGYuY2hpbGQ9bnVsbCxmLm1lbW9pemVkUHJvcHM9bnVsbCxmLm1lbW9pemVkU3RhdGU9bnVsbCxmLnVwZGF0ZVF1ZXVlPW51bGwsZi5kZXBlbmRlbmNpZXM9bnVsbCxmLnN0YXRlTm9kZT1udWxsKTooZi5jaGlsZExhbmVzPWcuY2hpbGRMYW5lcyxmLmxhbmVzPWcubGFuZXMsZi5jaGlsZD1nLmNoaWxkLGYubWVtb2l6ZWRQcm9wcz1nLm1lbW9pemVkUHJvcHMsZi5tZW1vaXplZFN0YXRlPWcubWVtb2l6ZWRTdGF0ZSxmLnVwZGF0ZVF1ZXVlPWcudXBkYXRlUXVldWUsZi50eXBlPWcudHlwZSxhPWcuZGVwZW5kZW5jaWVzLFxuZi5kZXBlbmRlbmNpZXM9bnVsbD09PWE/bnVsbDp7bGFuZXM6YS5sYW5lcyxmaXJzdENvbnRleHQ6YS5maXJzdENvbnRleHR9KSxjPWMuc2libGluZztJKFAsUC5jdXJyZW50JjF8Mik7cmV0dXJuIGIuY2hpbGR9YT1hLnNpYmxpbmd9bnVsbCE9PWQudGFpbCYmTygpPkppJiYoYi5mbGFnc3w9NjQsZj0hMCxGaShkLCExKSxiLmxhbmVzPTMzNTU0NDMyKX1lbHNle2lmKCFmKWlmKGE9aWgoZyksbnVsbCE9PWEpe2lmKGIuZmxhZ3N8PTY0LGY9ITAsYz1hLnVwZGF0ZVF1ZXVlLG51bGwhPT1jJiYoYi51cGRhdGVRdWV1ZT1jLGIuZmxhZ3N8PTQpLEZpKGQsITApLG51bGw9PT1kLnRhaWwmJlwiaGlkZGVuXCI9PT1kLnRhaWxNb2RlJiYhZy5hbHRlcm5hdGUmJiFsaClyZXR1cm4gYj1iLmxhc3RFZmZlY3Q9ZC5sYXN0RWZmZWN0LG51bGwhPT1iJiYoYi5uZXh0RWZmZWN0PW51bGwpLG51bGx9ZWxzZSAyKk8oKS1kLnJlbmRlcmluZ1N0YXJ0VGltZT5KaSYmMTA3Mzc0MTgyNCE9PWMmJihiLmZsYWdzfD1cbjY0LGY9ITAsRmkoZCwhMSksYi5sYW5lcz0zMzU1NDQzMik7ZC5pc0JhY2t3YXJkcz8oZy5zaWJsaW5nPWIuY2hpbGQsYi5jaGlsZD1nKTooYz1kLmxhc3QsbnVsbCE9PWM/Yy5zaWJsaW5nPWc6Yi5jaGlsZD1nLGQubGFzdD1nKX1yZXR1cm4gbnVsbCE9PWQudGFpbD8oYz1kLnRhaWwsZC5yZW5kZXJpbmc9YyxkLnRhaWw9Yy5zaWJsaW5nLGQubGFzdEVmZmVjdD1iLmxhc3RFZmZlY3QsZC5yZW5kZXJpbmdTdGFydFRpbWU9TygpLGMuc2libGluZz1udWxsLGI9UC5jdXJyZW50LEkoUCxmP2ImMXwyOmImMSksYyk6bnVsbDtjYXNlIDIzOmNhc2UgMjQ6cmV0dXJuIEtpKCksbnVsbCE9PWEmJm51bGwhPT1hLm1lbW9pemVkU3RhdGUhPT0obnVsbCE9PWIubWVtb2l6ZWRTdGF0ZSkmJlwidW5zdGFibGUtZGVmZXItd2l0aG91dC1oaWRpbmdcIiE9PWQubW9kZSYmKGIuZmxhZ3N8PTQpLG51bGx9dGhyb3cgRXJyb3IoeSgxNTYsYi50YWcpKTt9XG5mdW5jdGlvbiBMaShhKXtzd2l0Y2goYS50YWcpe2Nhc2UgMTpGZihhLnR5cGUpJiZHZigpO3ZhciBiPWEuZmxhZ3M7cmV0dXJuIGImNDA5Nj8oYS5mbGFncz1iJi00MDk3fDY0LGEpOm51bGw7Y2FzZSAzOmZoKCk7SChOKTtIKE0pO3VoKCk7Yj1hLmZsYWdzO2lmKDAhPT0oYiY2NCkpdGhyb3cgRXJyb3IoeSgyODUpKTthLmZsYWdzPWImLTQwOTd8NjQ7cmV0dXJuIGE7Y2FzZSA1OnJldHVybiBoaChhKSxudWxsO2Nhc2UgMTM6cmV0dXJuIEgoUCksYj1hLmZsYWdzLGImNDA5Nj8oYS5mbGFncz1iJi00MDk3fDY0LGEpOm51bGw7Y2FzZSAxOTpyZXR1cm4gSChQKSxudWxsO2Nhc2UgNDpyZXR1cm4gZmgoKSxudWxsO2Nhc2UgMTA6cmV0dXJuIHJnKGEpLG51bGw7Y2FzZSAyMzpjYXNlIDI0OnJldHVybiBLaSgpLG51bGw7ZGVmYXVsdDpyZXR1cm4gbnVsbH19XG5mdW5jdGlvbiBNaShhLGIpe3RyeXt2YXIgYz1cIlwiLGQ9YjtkbyBjKz1RYShkKSxkPWQucmV0dXJuO3doaWxlKGQpO3ZhciBlPWN9Y2F0Y2goZil7ZT1cIlxcbkVycm9yIGdlbmVyYXRpbmcgc3RhY2s6IFwiK2YubWVzc2FnZStcIlxcblwiK2Yuc3RhY2t9cmV0dXJue3ZhbHVlOmEsc291cmNlOmIsc3RhY2s6ZX19ZnVuY3Rpb24gTmkoYSxiKXt0cnl7Y29uc29sZS5lcnJvcihiLnZhbHVlKX1jYXRjaChjKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhyb3cgYzt9KX19dmFyIE9pPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBXZWFrTWFwP1dlYWtNYXA6TWFwO2Z1bmN0aW9uIFBpKGEsYixjKXtjPXpnKC0xLGMpO2MudGFnPTM7Yy5wYXlsb2FkPXtlbGVtZW50Om51bGx9O3ZhciBkPWIudmFsdWU7Yy5jYWxsYmFjaz1mdW5jdGlvbigpe1FpfHwoUWk9ITAsUmk9ZCk7TmkoYSxiKX07cmV0dXJuIGN9XG5mdW5jdGlvbiBTaShhLGIsYyl7Yz16ZygtMSxjKTtjLnRhZz0zO3ZhciBkPWEudHlwZS5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3I7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGQpe3ZhciBlPWIudmFsdWU7Yy5wYXlsb2FkPWZ1bmN0aW9uKCl7TmkoYSxiKTtyZXR1cm4gZChlKX19dmFyIGY9YS5zdGF0ZU5vZGU7bnVsbCE9PWYmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBmLmNvbXBvbmVudERpZENhdGNoJiYoYy5jYWxsYmFjaz1mdW5jdGlvbigpe1wiZnVuY3Rpb25cIiE9PXR5cGVvZiBkJiYobnVsbD09PVRpP1RpPW5ldyBTZXQoW3RoaXNdKTpUaS5hZGQodGhpcyksTmkoYSxiKSk7dmFyIGM9Yi5zdGFjazt0aGlzLmNvbXBvbmVudERpZENhdGNoKGIudmFsdWUse2NvbXBvbmVudFN0YWNrOm51bGwhPT1jP2M6XCJcIn0pfSk7cmV0dXJuIGN9dmFyIFVpPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBXZWFrU2V0P1dlYWtTZXQ6U2V0O1xuZnVuY3Rpb24gVmkoYSl7dmFyIGI9YS5yZWY7aWYobnVsbCE9PWIpaWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGIpdHJ5e2IobnVsbCl9Y2F0Y2goYyl7V2koYSxjKX1lbHNlIGIuY3VycmVudD1udWxsfWZ1bmN0aW9uIFhpKGEsYil7c3dpdGNoKGIudGFnKXtjYXNlIDA6Y2FzZSAxMTpjYXNlIDE1OmNhc2UgMjI6cmV0dXJuO2Nhc2UgMTppZihiLmZsYWdzJjI1NiYmbnVsbCE9PWEpe3ZhciBjPWEubWVtb2l6ZWRQcm9wcyxkPWEubWVtb2l6ZWRTdGF0ZTthPWIuc3RhdGVOb2RlO2I9YS5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZShiLmVsZW1lbnRUeXBlPT09Yi50eXBlP2M6bGcoYi50eXBlLGMpLGQpO2EuX19yZWFjdEludGVybmFsU25hcHNob3RCZWZvcmVVcGRhdGU9Yn1yZXR1cm47Y2FzZSAzOmIuZmxhZ3MmMjU2JiZxZihiLnN0YXRlTm9kZS5jb250YWluZXJJbmZvKTtyZXR1cm47Y2FzZSA1OmNhc2UgNjpjYXNlIDQ6Y2FzZSAxNzpyZXR1cm59dGhyb3cgRXJyb3IoeSgxNjMpKTt9XG5mdW5jdGlvbiBZaShhLGIsYyl7c3dpdGNoKGMudGFnKXtjYXNlIDA6Y2FzZSAxMTpjYXNlIDE1OmNhc2UgMjI6Yj1jLnVwZGF0ZVF1ZXVlO2I9bnVsbCE9PWI/Yi5sYXN0RWZmZWN0Om51bGw7aWYobnVsbCE9PWIpe2E9Yj1iLm5leHQ7ZG97aWYoMz09PShhLnRhZyYzKSl7dmFyIGQ9YS5jcmVhdGU7YS5kZXN0cm95PWQoKX1hPWEubmV4dH13aGlsZShhIT09Yil9Yj1jLnVwZGF0ZVF1ZXVlO2I9bnVsbCE9PWI/Yi5sYXN0RWZmZWN0Om51bGw7aWYobnVsbCE9PWIpe2E9Yj1iLm5leHQ7ZG97dmFyIGU9YTtkPWUubmV4dDtlPWUudGFnOzAhPT0oZSY0KSYmMCE9PShlJjEpJiYoWmkoYyxhKSwkaShjLGEpKTthPWR9d2hpbGUoYSE9PWIpfXJldHVybjtjYXNlIDE6YT1jLnN0YXRlTm9kZTtjLmZsYWdzJjQmJihudWxsPT09Yj9hLmNvbXBvbmVudERpZE1vdW50KCk6KGQ9Yy5lbGVtZW50VHlwZT09PWMudHlwZT9iLm1lbW9pemVkUHJvcHM6bGcoYy50eXBlLGIubWVtb2l6ZWRQcm9wcyksYS5jb21wb25lbnREaWRVcGRhdGUoZCxcbmIubWVtb2l6ZWRTdGF0ZSxhLl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90QmVmb3JlVXBkYXRlKSkpO2I9Yy51cGRhdGVRdWV1ZTtudWxsIT09YiYmRWcoYyxiLGEpO3JldHVybjtjYXNlIDM6Yj1jLnVwZGF0ZVF1ZXVlO2lmKG51bGwhPT1iKXthPW51bGw7aWYobnVsbCE9PWMuY2hpbGQpc3dpdGNoKGMuY2hpbGQudGFnKXtjYXNlIDU6YT1jLmNoaWxkLnN0YXRlTm9kZTticmVhaztjYXNlIDE6YT1jLmNoaWxkLnN0YXRlTm9kZX1FZyhjLGIsYSl9cmV0dXJuO2Nhc2UgNTphPWMuc3RhdGVOb2RlO251bGw9PT1iJiZjLmZsYWdzJjQmJm1mKGMudHlwZSxjLm1lbW9pemVkUHJvcHMpJiZhLmZvY3VzKCk7cmV0dXJuO2Nhc2UgNjpyZXR1cm47Y2FzZSA0OnJldHVybjtjYXNlIDEyOnJldHVybjtjYXNlIDEzOm51bGw9PT1jLm1lbW9pemVkU3RhdGUmJihjPWMuYWx0ZXJuYXRlLG51bGwhPT1jJiYoYz1jLm1lbW9pemVkU3RhdGUsbnVsbCE9PWMmJihjPWMuZGVoeWRyYXRlZCxudWxsIT09YyYmQ2MoYykpKSk7XG5yZXR1cm47Y2FzZSAxOTpjYXNlIDE3OmNhc2UgMjA6Y2FzZSAyMTpjYXNlIDIzOmNhc2UgMjQ6cmV0dXJufXRocm93IEVycm9yKHkoMTYzKSk7fVxuZnVuY3Rpb24gYWooYSxiKXtmb3IodmFyIGM9YTs7KXtpZig1PT09Yy50YWcpe3ZhciBkPWMuc3RhdGVOb2RlO2lmKGIpZD1kLnN0eWxlLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBkLnNldFByb3BlcnR5P2Quc2V0UHJvcGVydHkoXCJkaXNwbGF5XCIsXCJub25lXCIsXCJpbXBvcnRhbnRcIik6ZC5kaXNwbGF5PVwibm9uZVwiO2Vsc2V7ZD1jLnN0YXRlTm9kZTt2YXIgZT1jLm1lbW9pemVkUHJvcHMuc3R5bGU7ZT12b2lkIDAhPT1lJiZudWxsIT09ZSYmZS5oYXNPd25Qcm9wZXJ0eShcImRpc3BsYXlcIik/ZS5kaXNwbGF5Om51bGw7ZC5zdHlsZS5kaXNwbGF5PXNiKFwiZGlzcGxheVwiLGUpfX1lbHNlIGlmKDY9PT1jLnRhZyljLnN0YXRlTm9kZS5ub2RlVmFsdWU9Yj9cIlwiOmMubWVtb2l6ZWRQcm9wcztlbHNlIGlmKCgyMyE9PWMudGFnJiYyNCE9PWMudGFnfHxudWxsPT09Yy5tZW1vaXplZFN0YXRlfHxjPT09YSkmJm51bGwhPT1jLmNoaWxkKXtjLmNoaWxkLnJldHVybj1jO2M9Yy5jaGlsZDtjb250aW51ZX1pZihjPT09XG5hKWJyZWFrO2Zvcig7bnVsbD09PWMuc2libGluZzspe2lmKG51bGw9PT1jLnJldHVybnx8Yy5yZXR1cm49PT1hKXJldHVybjtjPWMucmV0dXJufWMuc2libGluZy5yZXR1cm49Yy5yZXR1cm47Yz1jLnNpYmxpbmd9fVxuZnVuY3Rpb24gYmooYSxiKXtpZihNZiYmXCJmdW5jdGlvblwiPT09dHlwZW9mIE1mLm9uQ29tbWl0RmliZXJVbm1vdW50KXRyeXtNZi5vbkNvbW1pdEZpYmVyVW5tb3VudChMZixiKX1jYXRjaChmKXt9c3dpdGNoKGIudGFnKXtjYXNlIDA6Y2FzZSAxMTpjYXNlIDE0OmNhc2UgMTU6Y2FzZSAyMjphPWIudXBkYXRlUXVldWU7aWYobnVsbCE9PWEmJihhPWEubGFzdEVmZmVjdCxudWxsIT09YSkpe3ZhciBjPWE9YS5uZXh0O2Rve3ZhciBkPWMsZT1kLmRlc3Ryb3k7ZD1kLnRhZztpZih2b2lkIDAhPT1lKWlmKDAhPT0oZCY0KSlaaShiLGMpO2Vsc2V7ZD1iO3RyeXtlKCl9Y2F0Y2goZil7V2koZCxmKX19Yz1jLm5leHR9d2hpbGUoYyE9PWEpfWJyZWFrO2Nhc2UgMTpWaShiKTthPWIuc3RhdGVOb2RlO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhLmNvbXBvbmVudFdpbGxVbm1vdW50KXRyeXthLnByb3BzPWIubWVtb2l6ZWRQcm9wcyxhLnN0YXRlPWIubWVtb2l6ZWRTdGF0ZSxhLmNvbXBvbmVudFdpbGxVbm1vdW50KCl9Y2F0Y2goZil7V2koYixcbmYpfWJyZWFrO2Nhc2UgNTpWaShiKTticmVhaztjYXNlIDQ6Y2ooYSxiKX19ZnVuY3Rpb24gZGooYSl7YS5hbHRlcm5hdGU9bnVsbDthLmNoaWxkPW51bGw7YS5kZXBlbmRlbmNpZXM9bnVsbDthLmZpcnN0RWZmZWN0PW51bGw7YS5sYXN0RWZmZWN0PW51bGw7YS5tZW1vaXplZFByb3BzPW51bGw7YS5tZW1vaXplZFN0YXRlPW51bGw7YS5wZW5kaW5nUHJvcHM9bnVsbDthLnJldHVybj1udWxsO2EudXBkYXRlUXVldWU9bnVsbH1mdW5jdGlvbiBlaihhKXtyZXR1cm4gNT09PWEudGFnfHwzPT09YS50YWd8fDQ9PT1hLnRhZ31cbmZ1bmN0aW9uIGZqKGEpe2E6e2Zvcih2YXIgYj1hLnJldHVybjtudWxsIT09Yjspe2lmKGVqKGIpKWJyZWFrIGE7Yj1iLnJldHVybn10aHJvdyBFcnJvcih5KDE2MCkpO312YXIgYz1iO2I9Yy5zdGF0ZU5vZGU7c3dpdGNoKGMudGFnKXtjYXNlIDU6dmFyIGQ9ITE7YnJlYWs7Y2FzZSAzOmI9Yi5jb250YWluZXJJbmZvO2Q9ITA7YnJlYWs7Y2FzZSA0OmI9Yi5jb250YWluZXJJbmZvO2Q9ITA7YnJlYWs7ZGVmYXVsdDp0aHJvdyBFcnJvcih5KDE2MSkpO31jLmZsYWdzJjE2JiYocGIoYixcIlwiKSxjLmZsYWdzJj0tMTcpO2E6Yjpmb3IoYz1hOzspe2Zvcig7bnVsbD09PWMuc2libGluZzspe2lmKG51bGw9PT1jLnJldHVybnx8ZWooYy5yZXR1cm4pKXtjPW51bGw7YnJlYWsgYX1jPWMucmV0dXJufWMuc2libGluZy5yZXR1cm49Yy5yZXR1cm47Zm9yKGM9Yy5zaWJsaW5nOzUhPT1jLnRhZyYmNiE9PWMudGFnJiYxOCE9PWMudGFnOyl7aWYoYy5mbGFncyYyKWNvbnRpbnVlIGI7aWYobnVsbD09PVxuYy5jaGlsZHx8ND09PWMudGFnKWNvbnRpbnVlIGI7ZWxzZSBjLmNoaWxkLnJldHVybj1jLGM9Yy5jaGlsZH1pZighKGMuZmxhZ3MmMikpe2M9Yy5zdGF0ZU5vZGU7YnJlYWsgYX19ZD9naihhLGMsYik6aGooYSxjLGIpfVxuZnVuY3Rpb24gZ2ooYSxiLGMpe3ZhciBkPWEudGFnLGU9NT09PWR8fDY9PT1kO2lmKGUpYT1lP2Euc3RhdGVOb2RlOmEuc3RhdGVOb2RlLmluc3RhbmNlLGI/OD09PWMubm9kZVR5cGU/Yy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLGIpOmMuaW5zZXJ0QmVmb3JlKGEsYik6KDg9PT1jLm5vZGVUeXBlPyhiPWMucGFyZW50Tm9kZSxiLmluc2VydEJlZm9yZShhLGMpKTooYj1jLGIuYXBwZW5kQ2hpbGQoYSkpLGM9Yy5fcmVhY3RSb290Q29udGFpbmVyLG51bGwhPT1jJiZ2b2lkIDAhPT1jfHxudWxsIT09Yi5vbmNsaWNrfHwoYi5vbmNsaWNrPWpmKSk7ZWxzZSBpZig0IT09ZCYmKGE9YS5jaGlsZCxudWxsIT09YSkpZm9yKGdqKGEsYixjKSxhPWEuc2libGluZztudWxsIT09YTspZ2ooYSxiLGMpLGE9YS5zaWJsaW5nfVxuZnVuY3Rpb24gaGooYSxiLGMpe3ZhciBkPWEudGFnLGU9NT09PWR8fDY9PT1kO2lmKGUpYT1lP2Euc3RhdGVOb2RlOmEuc3RhdGVOb2RlLmluc3RhbmNlLGI/Yy5pbnNlcnRCZWZvcmUoYSxiKTpjLmFwcGVuZENoaWxkKGEpO2Vsc2UgaWYoNCE9PWQmJihhPWEuY2hpbGQsbnVsbCE9PWEpKWZvcihoaihhLGIsYyksYT1hLnNpYmxpbmc7bnVsbCE9PWE7KWhqKGEsYixjKSxhPWEuc2libGluZ31cbmZ1bmN0aW9uIGNqKGEsYil7Zm9yKHZhciBjPWIsZD0hMSxlLGY7Oyl7aWYoIWQpe2Q9Yy5yZXR1cm47YTpmb3IoOzspe2lmKG51bGw9PT1kKXRocm93IEVycm9yKHkoMTYwKSk7ZT1kLnN0YXRlTm9kZTtzd2l0Y2goZC50YWcpe2Nhc2UgNTpmPSExO2JyZWFrIGE7Y2FzZSAzOmU9ZS5jb250YWluZXJJbmZvO2Y9ITA7YnJlYWsgYTtjYXNlIDQ6ZT1lLmNvbnRhaW5lckluZm87Zj0hMDticmVhayBhfWQ9ZC5yZXR1cm59ZD0hMH1pZig1PT09Yy50YWd8fDY9PT1jLnRhZyl7YTpmb3IodmFyIGc9YSxoPWMsaz1oOzspaWYoYmooZyxrKSxudWxsIT09ay5jaGlsZCYmNCE9PWsudGFnKWsuY2hpbGQucmV0dXJuPWssaz1rLmNoaWxkO2Vsc2V7aWYoaz09PWgpYnJlYWsgYTtmb3IoO251bGw9PT1rLnNpYmxpbmc7KXtpZihudWxsPT09ay5yZXR1cm58fGsucmV0dXJuPT09aClicmVhayBhO2s9ay5yZXR1cm59ay5zaWJsaW5nLnJldHVybj1rLnJldHVybjtrPWsuc2libGluZ31mPyhnPWUsaD1jLnN0YXRlTm9kZSxcbjg9PT1nLm5vZGVUeXBlP2cucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChoKTpnLnJlbW92ZUNoaWxkKGgpKTplLnJlbW92ZUNoaWxkKGMuc3RhdGVOb2RlKX1lbHNlIGlmKDQ9PT1jLnRhZyl7aWYobnVsbCE9PWMuY2hpbGQpe2U9Yy5zdGF0ZU5vZGUuY29udGFpbmVySW5mbztmPSEwO2MuY2hpbGQucmV0dXJuPWM7Yz1jLmNoaWxkO2NvbnRpbnVlfX1lbHNlIGlmKGJqKGEsYyksbnVsbCE9PWMuY2hpbGQpe2MuY2hpbGQucmV0dXJuPWM7Yz1jLmNoaWxkO2NvbnRpbnVlfWlmKGM9PT1iKWJyZWFrO2Zvcig7bnVsbD09PWMuc2libGluZzspe2lmKG51bGw9PT1jLnJldHVybnx8Yy5yZXR1cm49PT1iKXJldHVybjtjPWMucmV0dXJuOzQ9PT1jLnRhZyYmKGQ9ITEpfWMuc2libGluZy5yZXR1cm49Yy5yZXR1cm47Yz1jLnNpYmxpbmd9fVxuZnVuY3Rpb24gaWooYSxiKXtzd2l0Y2goYi50YWcpe2Nhc2UgMDpjYXNlIDExOmNhc2UgMTQ6Y2FzZSAxNTpjYXNlIDIyOnZhciBjPWIudXBkYXRlUXVldWU7Yz1udWxsIT09Yz9jLmxhc3RFZmZlY3Q6bnVsbDtpZihudWxsIT09Yyl7dmFyIGQ9Yz1jLm5leHQ7ZG8gMz09PShkLnRhZyYzKSYmKGE9ZC5kZXN0cm95LGQuZGVzdHJveT12b2lkIDAsdm9pZCAwIT09YSYmYSgpKSxkPWQubmV4dDt3aGlsZShkIT09Yyl9cmV0dXJuO2Nhc2UgMTpyZXR1cm47Y2FzZSA1OmM9Yi5zdGF0ZU5vZGU7aWYobnVsbCE9Yyl7ZD1iLm1lbW9pemVkUHJvcHM7dmFyIGU9bnVsbCE9PWE/YS5tZW1vaXplZFByb3BzOmQ7YT1iLnR5cGU7dmFyIGY9Yi51cGRhdGVRdWV1ZTtiLnVwZGF0ZVF1ZXVlPW51bGw7aWYobnVsbCE9PWYpe2NbeGZdPWQ7XCJpbnB1dFwiPT09YSYmXCJyYWRpb1wiPT09ZC50eXBlJiZudWxsIT1kLm5hbWUmJiRhKGMsZCk7d2IoYSxlKTtiPXdiKGEsZCk7Zm9yKGU9MDtlPGYubGVuZ3RoO2UrPVxuMil7dmFyIGc9ZltlXSxoPWZbZSsxXTtcInN0eWxlXCI9PT1nP3RiKGMsaCk6XCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiPT09Zz9vYihjLGgpOlwiY2hpbGRyZW5cIj09PWc/cGIoYyxoKTpxYShjLGcsaCxiKX1zd2l0Y2goYSl7Y2FzZSBcImlucHV0XCI6YWIoYyxkKTticmVhaztjYXNlIFwidGV4dGFyZWFcIjppYihjLGQpO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjphPWMuX3dyYXBwZXJTdGF0ZS53YXNNdWx0aXBsZSxjLl93cmFwcGVyU3RhdGUud2FzTXVsdGlwbGU9ISFkLm11bHRpcGxlLGY9ZC52YWx1ZSxudWxsIT1mP2ZiKGMsISFkLm11bHRpcGxlLGYsITEpOmEhPT0hIWQubXVsdGlwbGUmJihudWxsIT1kLmRlZmF1bHRWYWx1ZT9mYihjLCEhZC5tdWx0aXBsZSxkLmRlZmF1bHRWYWx1ZSwhMCk6ZmIoYywhIWQubXVsdGlwbGUsZC5tdWx0aXBsZT9bXTpcIlwiLCExKSl9fX1yZXR1cm47Y2FzZSA2OmlmKG51bGw9PT1iLnN0YXRlTm9kZSl0aHJvdyBFcnJvcih5KDE2MikpO2Iuc3RhdGVOb2RlLm5vZGVWYWx1ZT1cbmIubWVtb2l6ZWRQcm9wcztyZXR1cm47Y2FzZSAzOmM9Yi5zdGF0ZU5vZGU7Yy5oeWRyYXRlJiYoYy5oeWRyYXRlPSExLENjKGMuY29udGFpbmVySW5mbykpO3JldHVybjtjYXNlIDEyOnJldHVybjtjYXNlIDEzOm51bGwhPT1iLm1lbW9pemVkU3RhdGUmJihqaj1PKCksYWooYi5jaGlsZCwhMCkpO2tqKGIpO3JldHVybjtjYXNlIDE5OmtqKGIpO3JldHVybjtjYXNlIDE3OnJldHVybjtjYXNlIDIzOmNhc2UgMjQ6YWooYixudWxsIT09Yi5tZW1vaXplZFN0YXRlKTtyZXR1cm59dGhyb3cgRXJyb3IoeSgxNjMpKTt9ZnVuY3Rpb24ga2ooYSl7dmFyIGI9YS51cGRhdGVRdWV1ZTtpZihudWxsIT09Yil7YS51cGRhdGVRdWV1ZT1udWxsO3ZhciBjPWEuc3RhdGVOb2RlO251bGw9PT1jJiYoYz1hLnN0YXRlTm9kZT1uZXcgVWkpO2IuZm9yRWFjaChmdW5jdGlvbihiKXt2YXIgZD1sai5iaW5kKG51bGwsYSxiKTtjLmhhcyhiKXx8KGMuYWRkKGIpLGIudGhlbihkLGQpKX0pfX1cbmZ1bmN0aW9uIG1qKGEsYil7cmV0dXJuIG51bGwhPT1hJiYoYT1hLm1lbW9pemVkU3RhdGUsbnVsbD09PWF8fG51bGwhPT1hLmRlaHlkcmF0ZWQpPyhiPWIubWVtb2l6ZWRTdGF0ZSxudWxsIT09YiYmbnVsbD09PWIuZGVoeWRyYXRlZCk6ITF9dmFyIG5qPU1hdGguY2VpbCxvaj1yYS5SZWFjdEN1cnJlbnREaXNwYXRjaGVyLHBqPXJhLlJlYWN0Q3VycmVudE93bmVyLFg9MCxVPW51bGwsWT1udWxsLFc9MCxxaj0wLHJqPUJmKDApLFY9MCxzaj1udWxsLHRqPTAsRGc9MCxIaT0wLHVqPTAsdmo9bnVsbCxqaj0wLEppPUluZmluaXR5O2Z1bmN0aW9uIHdqKCl7Smk9TygpKzUwMH12YXIgWj1udWxsLFFpPSExLFJpPW51bGwsVGk9bnVsbCx4aj0hMSx5aj1udWxsLHpqPTkwLEFqPVtdLEJqPVtdLENqPW51bGwsRGo9MCxFaj1udWxsLEZqPS0xLEdqPTAsSGo9MCxJaj1udWxsLEpqPSExO2Z1bmN0aW9uIEhnKCl7cmV0dXJuIDAhPT0oWCY0OCk/TygpOi0xIT09Rmo/Rmo6Rmo9TygpfVxuZnVuY3Rpb24gSWcoYSl7YT1hLm1vZGU7aWYoMD09PShhJjIpKXJldHVybiAxO2lmKDA9PT0oYSY0KSlyZXR1cm4gOTk9PT1lZygpPzE6MjswPT09R2omJihHaj10aik7aWYoMCE9PWtnLnRyYW5zaXRpb24pezAhPT1IaiYmKEhqPW51bGwhPT12aj92ai5wZW5kaW5nTGFuZXM6MCk7YT1Hajt2YXIgYj00MTg2MTEyJn5IajtiJj0tYjswPT09YiYmKGE9NDE4NjExMiZ+YSxiPWEmLWEsMD09PWImJihiPTgxOTIpKTtyZXR1cm4gYn1hPWVnKCk7MCE9PShYJjQpJiY5OD09PWE/YT1YYygxMixHaik6KGE9U2MoYSksYT1YYyhhLEdqKSk7cmV0dXJuIGF9XG5mdW5jdGlvbiBKZyhhLGIsYyl7aWYoNTA8RGopdGhyb3cgRGo9MCxFaj1udWxsLEVycm9yKHkoMTg1KSk7YT1LaihhLGIpO2lmKG51bGw9PT1hKXJldHVybiBudWxsOyRjKGEsYixjKTthPT09VSYmKEhpfD1iLDQ9PT1WJiZJaShhLFcpKTt2YXIgZD1lZygpOzE9PT1iPzAhPT0oWCY4KSYmMD09PShYJjQ4KT9MaihhKTooTWooYSxjKSwwPT09WCYmKHdqKCksaWcoKSkpOigwPT09KFgmNCl8fDk4IT09ZCYmOTkhPT1kfHwobnVsbD09PUNqP0NqPW5ldyBTZXQoW2FdKTpDai5hZGQoYSkpLE1qKGEsYykpO3ZqPWF9ZnVuY3Rpb24gS2ooYSxiKXthLmxhbmVzfD1iO3ZhciBjPWEuYWx0ZXJuYXRlO251bGwhPT1jJiYoYy5sYW5lc3w9Yik7Yz1hO2ZvcihhPWEucmV0dXJuO251bGwhPT1hOylhLmNoaWxkTGFuZXN8PWIsYz1hLmFsdGVybmF0ZSxudWxsIT09YyYmKGMuY2hpbGRMYW5lc3w9YiksYz1hLGE9YS5yZXR1cm47cmV0dXJuIDM9PT1jLnRhZz9jLnN0YXRlTm9kZTpudWxsfVxuZnVuY3Rpb24gTWooYSxiKXtmb3IodmFyIGM9YS5jYWxsYmFja05vZGUsZD1hLnN1c3BlbmRlZExhbmVzLGU9YS5waW5nZWRMYW5lcyxmPWEuZXhwaXJhdGlvblRpbWVzLGc9YS5wZW5kaW5nTGFuZXM7MDxnOyl7dmFyIGg9MzEtVmMoZyksaz0xPDxoLGw9ZltoXTtpZigtMT09PWwpe2lmKDA9PT0oayZkKXx8MCE9PShrJmUpKXtsPWI7UmMoayk7dmFyIG49RjtmW2hdPTEwPD1uP2wrMjUwOjY8PW4/bCs1RTM6LTF9fWVsc2UgbDw9YiYmKGEuZXhwaXJlZExhbmVzfD1rKTtnJj1+a31kPVVjKGEsYT09PVU/VzowKTtiPUY7aWYoMD09PWQpbnVsbCE9PWMmJihjIT09WmYmJlBmKGMpLGEuY2FsbGJhY2tOb2RlPW51bGwsYS5jYWxsYmFja1ByaW9yaXR5PTApO2Vsc2V7aWYobnVsbCE9PWMpe2lmKGEuY2FsbGJhY2tQcmlvcml0eT09PWIpcmV0dXJuO2MhPT1aZiYmUGYoYyl9MTU9PT1iPyhjPUxqLmJpbmQobnVsbCxhKSxudWxsPT09YWc/KGFnPVtjXSxiZz1PZihVZixqZykpOmFnLnB1c2goYyksXG5jPVpmKToxND09PWI/Yz1oZyg5OSxMai5iaW5kKG51bGwsYSkpOihjPVRjKGIpLGM9aGcoYyxOai5iaW5kKG51bGwsYSkpKTthLmNhbGxiYWNrUHJpb3JpdHk9YjthLmNhbGxiYWNrTm9kZT1jfX1cbmZ1bmN0aW9uIE5qKGEpe0ZqPS0xO0hqPUdqPTA7aWYoMCE9PShYJjQ4KSl0aHJvdyBFcnJvcih5KDMyNykpO3ZhciBiPWEuY2FsbGJhY2tOb2RlO2lmKE9qKCkmJmEuY2FsbGJhY2tOb2RlIT09YilyZXR1cm4gbnVsbDt2YXIgYz1VYyhhLGE9PT1VP1c6MCk7aWYoMD09PWMpcmV0dXJuIG51bGw7dmFyIGQ9Yzt2YXIgZT1YO1h8PTE2O3ZhciBmPVBqKCk7aWYoVSE9PWF8fFchPT1kKXdqKCksUWooYSxkKTtkbyB0cnl7UmooKTticmVha31jYXRjaChoKXtTaihhLGgpfXdoaWxlKDEpO3FnKCk7b2ouY3VycmVudD1mO1g9ZTtudWxsIT09WT9kPTA6KFU9bnVsbCxXPTAsZD1WKTtpZigwIT09KHRqJkhpKSlRaihhLDApO2Vsc2UgaWYoMCE9PWQpezI9PT1kJiYoWHw9NjQsYS5oeWRyYXRlJiYoYS5oeWRyYXRlPSExLHFmKGEuY29udGFpbmVySW5mbykpLGM9V2MoYSksMCE9PWMmJihkPVRqKGEsYykpKTtpZigxPT09ZCl0aHJvdyBiPXNqLFFqKGEsMCksSWkoYSxjKSxNaihhLE8oKSksYjthLmZpbmlzaGVkV29yaz1cbmEuY3VycmVudC5hbHRlcm5hdGU7YS5maW5pc2hlZExhbmVzPWM7c3dpdGNoKGQpe2Nhc2UgMDpjYXNlIDE6dGhyb3cgRXJyb3IoeSgzNDUpKTtjYXNlIDI6VWooYSk7YnJlYWs7Y2FzZSAzOklpKGEsYyk7aWYoKGMmNjI5MTQ1NjApPT09YyYmKGQ9amorNTAwLU8oKSwxMDxkKSl7aWYoMCE9PVVjKGEsMCkpYnJlYWs7ZT1hLnN1c3BlbmRlZExhbmVzO2lmKChlJmMpIT09Yyl7SGcoKTthLnBpbmdlZExhbmVzfD1hLnN1c3BlbmRlZExhbmVzJmU7YnJlYWt9YS50aW1lb3V0SGFuZGxlPW9mKFVqLmJpbmQobnVsbCxhKSxkKTticmVha31VaihhKTticmVhaztjYXNlIDQ6SWkoYSxjKTtpZigoYyY0MTg2MTEyKT09PWMpYnJlYWs7ZD1hLmV2ZW50VGltZXM7Zm9yKGU9LTE7MDxjOyl7dmFyIGc9MzEtVmMoYyk7Zj0xPDxnO2c9ZFtnXTtnPmUmJihlPWcpO2MmPX5mfWM9ZTtjPU8oKS1jO2M9KDEyMD5jPzEyMDo0ODA+Yz80ODA6MTA4MD5jPzEwODA6MTkyMD5jPzE5MjA6M0UzPmM/M0UzOjQzMjA+XG5jPzQzMjA6MTk2MCpuaihjLzE5NjApKS1jO2lmKDEwPGMpe2EudGltZW91dEhhbmRsZT1vZihVai5iaW5kKG51bGwsYSksYyk7YnJlYWt9VWooYSk7YnJlYWs7Y2FzZSA1OlVqKGEpO2JyZWFrO2RlZmF1bHQ6dGhyb3cgRXJyb3IoeSgzMjkpKTt9fU1qKGEsTygpKTtyZXR1cm4gYS5jYWxsYmFja05vZGU9PT1iP05qLmJpbmQobnVsbCxhKTpudWxsfWZ1bmN0aW9uIElpKGEsYil7YiY9fnVqO2ImPX5IaTthLnN1c3BlbmRlZExhbmVzfD1iO2EucGluZ2VkTGFuZXMmPX5iO2ZvcihhPWEuZXhwaXJhdGlvblRpbWVzOzA8Yjspe3ZhciBjPTMxLVZjKGIpLGQ9MTw8YzthW2NdPS0xO2ImPX5kfX1cbmZ1bmN0aW9uIExqKGEpe2lmKDAhPT0oWCY0OCkpdGhyb3cgRXJyb3IoeSgzMjcpKTtPaigpO2lmKGE9PT1VJiYwIT09KGEuZXhwaXJlZExhbmVzJlcpKXt2YXIgYj1XO3ZhciBjPVRqKGEsYik7MCE9PSh0aiZIaSkmJihiPVVjKGEsYiksYz1UaihhLGIpKX1lbHNlIGI9VWMoYSwwKSxjPVRqKGEsYik7MCE9PWEudGFnJiYyPT09YyYmKFh8PTY0LGEuaHlkcmF0ZSYmKGEuaHlkcmF0ZT0hMSxxZihhLmNvbnRhaW5lckluZm8pKSxiPVdjKGEpLDAhPT1iJiYoYz1UaihhLGIpKSk7aWYoMT09PWMpdGhyb3cgYz1zaixRaihhLDApLElpKGEsYiksTWooYSxPKCkpLGM7YS5maW5pc2hlZFdvcms9YS5jdXJyZW50LmFsdGVybmF0ZTthLmZpbmlzaGVkTGFuZXM9YjtVaihhKTtNaihhLE8oKSk7cmV0dXJuIG51bGx9XG5mdW5jdGlvbiBWaigpe2lmKG51bGwhPT1Dail7dmFyIGE9Q2o7Q2o9bnVsbDthLmZvckVhY2goZnVuY3Rpb24oYSl7YS5leHBpcmVkTGFuZXN8PTI0JmEucGVuZGluZ0xhbmVzO01qKGEsTygpKX0pfWlnKCl9ZnVuY3Rpb24gV2ooYSxiKXt2YXIgYz1YO1h8PTE7dHJ5e3JldHVybiBhKGIpfWZpbmFsbHl7WD1jLDA9PT1YJiYod2ooKSxpZygpKX19ZnVuY3Rpb24gWGooYSxiKXt2YXIgYz1YO1gmPS0yO1h8PTg7dHJ5e3JldHVybiBhKGIpfWZpbmFsbHl7WD1jLDA9PT1YJiYod2ooKSxpZygpKX19ZnVuY3Rpb24gbmkoYSxiKXtJKHJqLHFqKTtxanw9Yjt0anw9Yn1mdW5jdGlvbiBLaSgpe3FqPXJqLmN1cnJlbnQ7SChyail9XG5mdW5jdGlvbiBRaihhLGIpe2EuZmluaXNoZWRXb3JrPW51bGw7YS5maW5pc2hlZExhbmVzPTA7dmFyIGM9YS50aW1lb3V0SGFuZGxlOy0xIT09YyYmKGEudGltZW91dEhhbmRsZT0tMSxwZihjKSk7aWYobnVsbCE9PVkpZm9yKGM9WS5yZXR1cm47bnVsbCE9PWM7KXt2YXIgZD1jO3N3aXRjaChkLnRhZyl7Y2FzZSAxOmQ9ZC50eXBlLmNoaWxkQ29udGV4dFR5cGVzO251bGwhPT1kJiZ2b2lkIDAhPT1kJiZHZigpO2JyZWFrO2Nhc2UgMzpmaCgpO0goTik7SChNKTt1aCgpO2JyZWFrO2Nhc2UgNTpoaChkKTticmVhaztjYXNlIDQ6ZmgoKTticmVhaztjYXNlIDEzOkgoUCk7YnJlYWs7Y2FzZSAxOTpIKFApO2JyZWFrO2Nhc2UgMTA6cmcoZCk7YnJlYWs7Y2FzZSAyMzpjYXNlIDI0OktpKCl9Yz1jLnJldHVybn1VPWE7WT1UZyhhLmN1cnJlbnQsbnVsbCk7Vz1xaj10aj1iO1Y9MDtzaj1udWxsO3VqPUhpPURnPTB9XG5mdW5jdGlvbiBTaihhLGIpe2Rve3ZhciBjPVk7dHJ5e3FnKCk7dmguY3VycmVudD1HaDtpZih5aCl7Zm9yKHZhciBkPVIubWVtb2l6ZWRTdGF0ZTtudWxsIT09ZDspe3ZhciBlPWQucXVldWU7bnVsbCE9PWUmJihlLnBlbmRpbmc9bnVsbCk7ZD1kLm5leHR9eWg9ITF9eGg9MDtUPVM9Uj1udWxsO3poPSExO3BqLmN1cnJlbnQ9bnVsbDtpZihudWxsPT09Y3x8bnVsbD09PWMucmV0dXJuKXtWPTE7c2o9YjtZPW51bGw7YnJlYWt9YTp7dmFyIGY9YSxnPWMucmV0dXJuLGg9YyxrPWI7Yj1XO2guZmxhZ3N8PTIwNDg7aC5maXJzdEVmZmVjdD1oLmxhc3RFZmZlY3Q9bnVsbDtpZihudWxsIT09ayYmXCJvYmplY3RcIj09PXR5cGVvZiBrJiZcImZ1bmN0aW9uXCI9PT10eXBlb2Ygay50aGVuKXt2YXIgbD1rO2lmKDA9PT0oaC5tb2RlJjIpKXt2YXIgbj1oLmFsdGVybmF0ZTtuPyhoLnVwZGF0ZVF1ZXVlPW4udXBkYXRlUXVldWUsaC5tZW1vaXplZFN0YXRlPW4ubWVtb2l6ZWRTdGF0ZSxoLmxhbmVzPW4ubGFuZXMpOlxuKGgudXBkYXRlUXVldWU9bnVsbCxoLm1lbW9pemVkU3RhdGU9bnVsbCl9dmFyIEE9MCE9PShQLmN1cnJlbnQmMSkscD1nO2Rve3ZhciBDO2lmKEM9MTM9PT1wLnRhZyl7dmFyIHg9cC5tZW1vaXplZFN0YXRlO2lmKG51bGwhPT14KUM9bnVsbCE9PXguZGVoeWRyYXRlZD8hMDohMTtlbHNle3ZhciB3PXAubWVtb2l6ZWRQcm9wcztDPXZvaWQgMD09PXcuZmFsbGJhY2s/ITE6ITAhPT13LnVuc3RhYmxlX2F2b2lkVGhpc0ZhbGxiYWNrPyEwOkE/ITE6ITB9fWlmKEMpe3ZhciB6PXAudXBkYXRlUXVldWU7aWYobnVsbD09PXope3ZhciB1PW5ldyBTZXQ7dS5hZGQobCk7cC51cGRhdGVRdWV1ZT11fWVsc2Ugei5hZGQobCk7aWYoMD09PShwLm1vZGUmMikpe3AuZmxhZ3N8PTY0O2guZmxhZ3N8PTE2Mzg0O2guZmxhZ3MmPS0yOTgxO2lmKDE9PT1oLnRhZylpZihudWxsPT09aC5hbHRlcm5hdGUpaC50YWc9MTc7ZWxzZXt2YXIgdD16ZygtMSwxKTt0LnRhZz0yO0FnKGgsdCl9aC5sYW5lc3w9MTticmVhayBhfWs9XG52b2lkIDA7aD1iO3ZhciBxPWYucGluZ0NhY2hlO251bGw9PT1xPyhxPWYucGluZ0NhY2hlPW5ldyBPaSxrPW5ldyBTZXQscS5zZXQobCxrKSk6KGs9cS5nZXQobCksdm9pZCAwPT09ayYmKGs9bmV3IFNldCxxLnNldChsLGspKSk7aWYoIWsuaGFzKGgpKXtrLmFkZChoKTt2YXIgdj1Zai5iaW5kKG51bGwsZixsLGgpO2wudGhlbih2LHYpfXAuZmxhZ3N8PTQwOTY7cC5sYW5lcz1iO2JyZWFrIGF9cD1wLnJldHVybn13aGlsZShudWxsIT09cCk7az1FcnJvcigoUmEoaC50eXBlKXx8XCJBIFJlYWN0IGNvbXBvbmVudFwiKStcIiBzdXNwZW5kZWQgd2hpbGUgcmVuZGVyaW5nLCBidXQgbm8gZmFsbGJhY2sgVUkgd2FzIHNwZWNpZmllZC5cXG5cXG5BZGQgYSA8U3VzcGVuc2UgZmFsbGJhY2s9Li4uPiBjb21wb25lbnQgaGlnaGVyIGluIHRoZSB0cmVlIHRvIHByb3ZpZGUgYSBsb2FkaW5nIGluZGljYXRvciBvciBwbGFjZWhvbGRlciB0byBkaXNwbGF5LlwiKX01IT09ViYmKFY9Mik7az1NaShrLGgpO3A9XG5nO2Rve3N3aXRjaChwLnRhZyl7Y2FzZSAzOmY9aztwLmZsYWdzfD00MDk2O2ImPS1iO3AubGFuZXN8PWI7dmFyIEo9UGkocCxmLGIpO0JnKHAsSik7YnJlYWsgYTtjYXNlIDE6Zj1rO3ZhciBLPXAudHlwZSxRPXAuc3RhdGVOb2RlO2lmKDA9PT0ocC5mbGFncyY2NCkmJihcImZ1bmN0aW9uXCI9PT10eXBlb2YgSy5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3J8fG51bGwhPT1RJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgUS5jb21wb25lbnREaWRDYXRjaCYmKG51bGw9PT1UaXx8IVRpLmhhcyhRKSkpKXtwLmZsYWdzfD00MDk2O2ImPS1iO3AubGFuZXN8PWI7dmFyIEw9U2kocCxmLGIpO0JnKHAsTCk7YnJlYWsgYX19cD1wLnJldHVybn13aGlsZShudWxsIT09cCl9WmooYyl9Y2F0Y2godmEpe2I9dmE7WT09PWMmJm51bGwhPT1jJiYoWT1jPWMucmV0dXJuKTtjb250aW51ZX1icmVha313aGlsZSgxKX1cbmZ1bmN0aW9uIFBqKCl7dmFyIGE9b2ouY3VycmVudDtvai5jdXJyZW50PUdoO3JldHVybiBudWxsPT09YT9HaDphfWZ1bmN0aW9uIFRqKGEsYil7dmFyIGM9WDtYfD0xNjt2YXIgZD1QaigpO1U9PT1hJiZXPT09Ynx8UWooYSxiKTtkbyB0cnl7YWsoKTticmVha31jYXRjaChlKXtTaihhLGUpfXdoaWxlKDEpO3FnKCk7WD1jO29qLmN1cnJlbnQ9ZDtpZihudWxsIT09WSl0aHJvdyBFcnJvcih5KDI2MSkpO1U9bnVsbDtXPTA7cmV0dXJuIFZ9ZnVuY3Rpb24gYWsoKXtmb3IoO251bGwhPT1ZOyliayhZKX1mdW5jdGlvbiBSaigpe2Zvcig7bnVsbCE9PVkmJiFRZigpOyliayhZKX1mdW5jdGlvbiBiayhhKXt2YXIgYj1jayhhLmFsdGVybmF0ZSxhLHFqKTthLm1lbW9pemVkUHJvcHM9YS5wZW5kaW5nUHJvcHM7bnVsbD09PWI/WmooYSk6WT1iO3BqLmN1cnJlbnQ9bnVsbH1cbmZ1bmN0aW9uIFpqKGEpe3ZhciBiPWE7ZG97dmFyIGM9Yi5hbHRlcm5hdGU7YT1iLnJldHVybjtpZigwPT09KGIuZmxhZ3MmMjA0OCkpe2M9R2koYyxiLHFqKTtpZihudWxsIT09Yyl7WT1jO3JldHVybn1jPWI7aWYoMjQhPT1jLnRhZyYmMjMhPT1jLnRhZ3x8bnVsbD09PWMubWVtb2l6ZWRTdGF0ZXx8MCE9PShxaiYxMDczNzQxODI0KXx8MD09PShjLm1vZGUmNCkpe2Zvcih2YXIgZD0wLGU9Yy5jaGlsZDtudWxsIT09ZTspZHw9ZS5sYW5lc3xlLmNoaWxkTGFuZXMsZT1lLnNpYmxpbmc7Yy5jaGlsZExhbmVzPWR9bnVsbCE9PWEmJjA9PT0oYS5mbGFncyYyMDQ4KSYmKG51bGw9PT1hLmZpcnN0RWZmZWN0JiYoYS5maXJzdEVmZmVjdD1iLmZpcnN0RWZmZWN0KSxudWxsIT09Yi5sYXN0RWZmZWN0JiYobnVsbCE9PWEubGFzdEVmZmVjdCYmKGEubGFzdEVmZmVjdC5uZXh0RWZmZWN0PWIuZmlyc3RFZmZlY3QpLGEubGFzdEVmZmVjdD1iLmxhc3RFZmZlY3QpLDE8Yi5mbGFncyYmKG51bGwhPT1cbmEubGFzdEVmZmVjdD9hLmxhc3RFZmZlY3QubmV4dEVmZmVjdD1iOmEuZmlyc3RFZmZlY3Q9YixhLmxhc3RFZmZlY3Q9YikpfWVsc2V7Yz1MaShiKTtpZihudWxsIT09Yyl7Yy5mbGFncyY9MjA0NztZPWM7cmV0dXJufW51bGwhPT1hJiYoYS5maXJzdEVmZmVjdD1hLmxhc3RFZmZlY3Q9bnVsbCxhLmZsYWdzfD0yMDQ4KX1iPWIuc2libGluZztpZihudWxsIT09Yil7WT1iO3JldHVybn1ZPWI9YX13aGlsZShudWxsIT09Yik7MD09PVYmJihWPTUpfWZ1bmN0aW9uIFVqKGEpe3ZhciBiPWVnKCk7Z2coOTksZGsuYmluZChudWxsLGEsYikpO3JldHVybiBudWxsfVxuZnVuY3Rpb24gZGsoYSxiKXtkbyBPaigpO3doaWxlKG51bGwhPT15aik7aWYoMCE9PShYJjQ4KSl0aHJvdyBFcnJvcih5KDMyNykpO3ZhciBjPWEuZmluaXNoZWRXb3JrO2lmKG51bGw9PT1jKXJldHVybiBudWxsO2EuZmluaXNoZWRXb3JrPW51bGw7YS5maW5pc2hlZExhbmVzPTA7aWYoYz09PWEuY3VycmVudCl0aHJvdyBFcnJvcih5KDE3NykpO2EuY2FsbGJhY2tOb2RlPW51bGw7dmFyIGQ9Yy5sYW5lc3xjLmNoaWxkTGFuZXMsZT1kLGY9YS5wZW5kaW5nTGFuZXMmfmU7YS5wZW5kaW5nTGFuZXM9ZTthLnN1c3BlbmRlZExhbmVzPTA7YS5waW5nZWRMYW5lcz0wO2EuZXhwaXJlZExhbmVzJj1lO2EubXV0YWJsZVJlYWRMYW5lcyY9ZTthLmVudGFuZ2xlZExhbmVzJj1lO2U9YS5lbnRhbmdsZW1lbnRzO2Zvcih2YXIgZz1hLmV2ZW50VGltZXMsaD1hLmV4cGlyYXRpb25UaW1lczswPGY7KXt2YXIgaz0zMS1WYyhmKSxsPTE8PGs7ZVtrXT0wO2dba109LTE7aFtrXT0tMTtmJj1+bH1udWxsIT09XG5DaiYmMD09PShkJjI0KSYmQ2ouaGFzKGEpJiZDai5kZWxldGUoYSk7YT09PVUmJihZPVU9bnVsbCxXPTApOzE8Yy5mbGFncz9udWxsIT09Yy5sYXN0RWZmZWN0PyhjLmxhc3RFZmZlY3QubmV4dEVmZmVjdD1jLGQ9Yy5maXJzdEVmZmVjdCk6ZD1jOmQ9Yy5maXJzdEVmZmVjdDtpZihudWxsIT09ZCl7ZT1YO1h8PTMyO3BqLmN1cnJlbnQ9bnVsbDtrZj1mZDtnPU5lKCk7aWYoT2UoZykpe2lmKFwic2VsZWN0aW9uU3RhcnRcImluIGcpaD17c3RhcnQ6Zy5zZWxlY3Rpb25TdGFydCxlbmQ6Zy5zZWxlY3Rpb25FbmR9O2Vsc2UgYTppZihoPShoPWcub3duZXJEb2N1bWVudCkmJmguZGVmYXVsdFZpZXd8fHdpbmRvdywobD1oLmdldFNlbGVjdGlvbiYmaC5nZXRTZWxlY3Rpb24oKSkmJjAhPT1sLnJhbmdlQ291bnQpe2g9bC5hbmNob3JOb2RlO2Y9bC5hbmNob3JPZmZzZXQ7az1sLmZvY3VzTm9kZTtsPWwuZm9jdXNPZmZzZXQ7dHJ5e2gubm9kZVR5cGUsay5ub2RlVHlwZX1jYXRjaCh2YSl7aD1udWxsO1xuYnJlYWsgYX12YXIgbj0wLEE9LTEscD0tMSxDPTAseD0wLHc9Zyx6PW51bGw7Yjpmb3IoOzspe2Zvcih2YXIgdTs7KXt3IT09aHx8MCE9PWYmJjMhPT13Lm5vZGVUeXBlfHwoQT1uK2YpO3chPT1rfHwwIT09bCYmMyE9PXcubm9kZVR5cGV8fChwPW4rbCk7Mz09PXcubm9kZVR5cGUmJihuKz13Lm5vZGVWYWx1ZS5sZW5ndGgpO2lmKG51bGw9PT0odT13LmZpcnN0Q2hpbGQpKWJyZWFrO3o9dzt3PXV9Zm9yKDs7KXtpZih3PT09ZylicmVhayBiO3o9PT1oJiYrK0M9PT1mJiYoQT1uKTt6PT09ayYmKyt4PT09bCYmKHA9bik7aWYobnVsbCE9PSh1PXcubmV4dFNpYmxpbmcpKWJyZWFrO3c9ejt6PXcucGFyZW50Tm9kZX13PXV9aD0tMT09PUF8fC0xPT09cD9udWxsOntzdGFydDpBLGVuZDpwfX1lbHNlIGg9bnVsbDtoPWh8fHtzdGFydDowLGVuZDowfX1lbHNlIGg9bnVsbDtsZj17Zm9jdXNlZEVsZW06ZyxzZWxlY3Rpb25SYW5nZTpofTtmZD0hMTtJaj1udWxsO0pqPSExO1o9ZDtkbyB0cnl7ZWsoKX1jYXRjaCh2YSl7aWYobnVsbD09PVxuWil0aHJvdyBFcnJvcih5KDMzMCkpO1dpKFosdmEpO1o9Wi5uZXh0RWZmZWN0fXdoaWxlKG51bGwhPT1aKTtJaj1udWxsO1o9ZDtkbyB0cnl7Zm9yKGc9YTtudWxsIT09Wjspe3ZhciB0PVouZmxhZ3M7dCYxNiYmcGIoWi5zdGF0ZU5vZGUsXCJcIik7aWYodCYxMjgpe3ZhciBxPVouYWx0ZXJuYXRlO2lmKG51bGwhPT1xKXt2YXIgdj1xLnJlZjtudWxsIT09diYmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiB2P3YobnVsbCk6di5jdXJyZW50PW51bGwpfX1zd2l0Y2godCYxMDM4KXtjYXNlIDI6ZmooWik7Wi5mbGFncyY9LTM7YnJlYWs7Y2FzZSA2OmZqKFopO1ouZmxhZ3MmPS0zO2lqKFouYWx0ZXJuYXRlLFopO2JyZWFrO2Nhc2UgMTAyNDpaLmZsYWdzJj0tMTAyNTticmVhaztjYXNlIDEwMjg6Wi5mbGFncyY9LTEwMjU7aWooWi5hbHRlcm5hdGUsWik7YnJlYWs7Y2FzZSA0OmlqKFouYWx0ZXJuYXRlLFopO2JyZWFrO2Nhc2UgODpoPVo7Y2ooZyxoKTt2YXIgSj1oLmFsdGVybmF0ZTtkaihoKTtudWxsIT09XG5KJiZkaihKKX1aPVoubmV4dEVmZmVjdH19Y2F0Y2godmEpe2lmKG51bGw9PT1aKXRocm93IEVycm9yKHkoMzMwKSk7V2koWix2YSk7Wj1aLm5leHRFZmZlY3R9d2hpbGUobnVsbCE9PVopO3Y9bGY7cT1OZSgpO3Q9di5mb2N1c2VkRWxlbTtnPXYuc2VsZWN0aW9uUmFuZ2U7aWYocSE9PXQmJnQmJnQub3duZXJEb2N1bWVudCYmTWUodC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCx0KSl7bnVsbCE9PWcmJk9lKHQpJiYocT1nLnN0YXJ0LHY9Zy5lbmQsdm9pZCAwPT09diYmKHY9cSksXCJzZWxlY3Rpb25TdGFydFwiaW4gdD8odC5zZWxlY3Rpb25TdGFydD1xLHQuc2VsZWN0aW9uRW5kPU1hdGgubWluKHYsdC52YWx1ZS5sZW5ndGgpKToodj0ocT10Lm93bmVyRG9jdW1lbnR8fGRvY3VtZW50KSYmcS5kZWZhdWx0Vmlld3x8d2luZG93LHYuZ2V0U2VsZWN0aW9uJiYodj12LmdldFNlbGVjdGlvbigpLGg9dC50ZXh0Q29udGVudC5sZW5ndGgsSj1NYXRoLm1pbihnLnN0YXJ0LGgpLGc9dm9pZCAwPT09XG5nLmVuZD9KOk1hdGgubWluKGcuZW5kLGgpLCF2LmV4dGVuZCYmSj5nJiYoaD1nLGc9SixKPWgpLGg9TGUodCxKKSxmPUxlKHQsZyksaCYmZiYmKDEhPT12LnJhbmdlQ291bnR8fHYuYW5jaG9yTm9kZSE9PWgubm9kZXx8di5hbmNob3JPZmZzZXQhPT1oLm9mZnNldHx8di5mb2N1c05vZGUhPT1mLm5vZGV8fHYuZm9jdXNPZmZzZXQhPT1mLm9mZnNldCkmJihxPXEuY3JlYXRlUmFuZ2UoKSxxLnNldFN0YXJ0KGgubm9kZSxoLm9mZnNldCksdi5yZW1vdmVBbGxSYW5nZXMoKSxKPmc/KHYuYWRkUmFuZ2UocSksdi5leHRlbmQoZi5ub2RlLGYub2Zmc2V0KSk6KHEuc2V0RW5kKGYubm9kZSxmLm9mZnNldCksdi5hZGRSYW5nZShxKSkpKSkpO3E9W107Zm9yKHY9dDt2PXYucGFyZW50Tm9kZTspMT09PXYubm9kZVR5cGUmJnEucHVzaCh7ZWxlbWVudDp2LGxlZnQ6di5zY3JvbGxMZWZ0LHRvcDp2LnNjcm9sbFRvcH0pO1wiZnVuY3Rpb25cIj09PXR5cGVvZiB0LmZvY3VzJiZ0LmZvY3VzKCk7Zm9yKHQ9XG4wO3Q8cS5sZW5ndGg7dCsrKXY9cVt0XSx2LmVsZW1lbnQuc2Nyb2xsTGVmdD12LmxlZnQsdi5lbGVtZW50LnNjcm9sbFRvcD12LnRvcH1mZD0hIWtmO2xmPWtmPW51bGw7YS5jdXJyZW50PWM7Wj1kO2RvIHRyeXtmb3IodD1hO251bGwhPT1aOyl7dmFyIEs9Wi5mbGFncztLJjM2JiZZaSh0LFouYWx0ZXJuYXRlLFopO2lmKEsmMTI4KXtxPXZvaWQgMDt2YXIgUT1aLnJlZjtpZihudWxsIT09USl7dmFyIEw9Wi5zdGF0ZU5vZGU7c3dpdGNoKFoudGFnKXtjYXNlIDU6cT1MO2JyZWFrO2RlZmF1bHQ6cT1MfVwiZnVuY3Rpb25cIj09PXR5cGVvZiBRP1EocSk6US5jdXJyZW50PXF9fVo9Wi5uZXh0RWZmZWN0fX1jYXRjaCh2YSl7aWYobnVsbD09PVopdGhyb3cgRXJyb3IoeSgzMzApKTtXaShaLHZhKTtaPVoubmV4dEVmZmVjdH13aGlsZShudWxsIT09Wik7Wj1udWxsOyRmKCk7WD1lfWVsc2UgYS5jdXJyZW50PWM7aWYoeGopeGo9ITEseWo9YSx6aj1iO2Vsc2UgZm9yKFo9ZDtudWxsIT09WjspYj1cbloubmV4dEVmZmVjdCxaLm5leHRFZmZlY3Q9bnVsbCxaLmZsYWdzJjgmJihLPVosSy5zaWJsaW5nPW51bGwsSy5zdGF0ZU5vZGU9bnVsbCksWj1iO2Q9YS5wZW5kaW5nTGFuZXM7MD09PWQmJihUaT1udWxsKTsxPT09ZD9hPT09RWo/RGorKzooRGo9MCxFaj1hKTpEaj0wO2M9Yy5zdGF0ZU5vZGU7aWYoTWYmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBNZi5vbkNvbW1pdEZpYmVyUm9vdCl0cnl7TWYub25Db21taXRGaWJlclJvb3QoTGYsYyx2b2lkIDAsNjQ9PT0oYy5jdXJyZW50LmZsYWdzJjY0KSl9Y2F0Y2godmEpe31NaihhLE8oKSk7aWYoUWkpdGhyb3cgUWk9ITEsYT1SaSxSaT1udWxsLGE7aWYoMCE9PShYJjgpKXJldHVybiBudWxsO2lnKCk7cmV0dXJuIG51bGx9XG5mdW5jdGlvbiBlaygpe2Zvcig7bnVsbCE9PVo7KXt2YXIgYT1aLmFsdGVybmF0ZTtKanx8bnVsbD09PUlqfHwoMCE9PShaLmZsYWdzJjgpP2RjKFosSWopJiYoSmo9ITApOjEzPT09Wi50YWcmJm1qKGEsWikmJmRjKFosSWopJiYoSmo9ITApKTt2YXIgYj1aLmZsYWdzOzAhPT0oYiYyNTYpJiZYaShhLFopOzA9PT0oYiY1MTIpfHx4anx8KHhqPSEwLGhnKDk3LGZ1bmN0aW9uKCl7T2ooKTtyZXR1cm4gbnVsbH0pKTtaPVoubmV4dEVmZmVjdH19ZnVuY3Rpb24gT2ooKXtpZig5MCE9PXpqKXt2YXIgYT05Nzx6aj85Nzp6ajt6aj05MDtyZXR1cm4gZ2coYSxmayl9cmV0dXJuITF9ZnVuY3Rpb24gJGkoYSxiKXtBai5wdXNoKGIsYSk7eGp8fCh4aj0hMCxoZyg5NyxmdW5jdGlvbigpe09qKCk7cmV0dXJuIG51bGx9KSl9ZnVuY3Rpb24gWmkoYSxiKXtCai5wdXNoKGIsYSk7eGp8fCh4aj0hMCxoZyg5NyxmdW5jdGlvbigpe09qKCk7cmV0dXJuIG51bGx9KSl9XG5mdW5jdGlvbiBmaygpe2lmKG51bGw9PT15ailyZXR1cm4hMTt2YXIgYT15ajt5aj1udWxsO2lmKDAhPT0oWCY0OCkpdGhyb3cgRXJyb3IoeSgzMzEpKTt2YXIgYj1YO1h8PTMyO3ZhciBjPUJqO0JqPVtdO2Zvcih2YXIgZD0wO2Q8Yy5sZW5ndGg7ZCs9Mil7dmFyIGU9Y1tkXSxmPWNbZCsxXSxnPWUuZGVzdHJveTtlLmRlc3Ryb3k9dm9pZCAwO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnKXRyeXtnKCl9Y2F0Y2goayl7aWYobnVsbD09PWYpdGhyb3cgRXJyb3IoeSgzMzApKTtXaShmLGspfX1jPUFqO0FqPVtdO2ZvcihkPTA7ZDxjLmxlbmd0aDtkKz0yKXtlPWNbZF07Zj1jW2QrMV07dHJ5e3ZhciBoPWUuY3JlYXRlO2UuZGVzdHJveT1oKCl9Y2F0Y2goayl7aWYobnVsbD09PWYpdGhyb3cgRXJyb3IoeSgzMzApKTtXaShmLGspfX1mb3IoaD1hLmN1cnJlbnQuZmlyc3RFZmZlY3Q7bnVsbCE9PWg7KWE9aC5uZXh0RWZmZWN0LGgubmV4dEVmZmVjdD1udWxsLGguZmxhZ3MmOCYmKGguc2libGluZz1cbm51bGwsaC5zdGF0ZU5vZGU9bnVsbCksaD1hO1g9YjtpZygpO3JldHVybiEwfWZ1bmN0aW9uIGdrKGEsYixjKXtiPU1pKGMsYik7Yj1QaShhLGIsMSk7QWcoYSxiKTtiPUhnKCk7YT1LaihhLDEpO251bGwhPT1hJiYoJGMoYSwxLGIpLE1qKGEsYikpfVxuZnVuY3Rpb24gV2koYSxiKXtpZigzPT09YS50YWcpZ2soYSxhLGIpO2Vsc2UgZm9yKHZhciBjPWEucmV0dXJuO251bGwhPT1jOyl7aWYoMz09PWMudGFnKXtnayhjLGEsYik7YnJlYWt9ZWxzZSBpZigxPT09Yy50YWcpe3ZhciBkPWMuc3RhdGVOb2RlO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBjLnR5cGUuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yfHxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZC5jb21wb25lbnREaWRDYXRjaCYmKG51bGw9PT1UaXx8IVRpLmhhcyhkKSkpe2E9TWkoYixhKTt2YXIgZT1TaShjLGEsMSk7QWcoYyxlKTtlPUhnKCk7Yz1LaihjLDEpO2lmKG51bGwhPT1jKSRjKGMsMSxlKSxNaihjLGUpO2Vsc2UgaWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGQuY29tcG9uZW50RGlkQ2F0Y2gmJihudWxsPT09VGl8fCFUaS5oYXMoZCkpKXRyeXtkLmNvbXBvbmVudERpZENhdGNoKGIsYSl9Y2F0Y2goZil7fWJyZWFrfX1jPWMucmV0dXJufX1cbmZ1bmN0aW9uIFlqKGEsYixjKXt2YXIgZD1hLnBpbmdDYWNoZTtudWxsIT09ZCYmZC5kZWxldGUoYik7Yj1IZygpO2EucGluZ2VkTGFuZXN8PWEuc3VzcGVuZGVkTGFuZXMmYztVPT09YSYmKFcmYyk9PT1jJiYoND09PVZ8fDM9PT1WJiYoVyY2MjkxNDU2MCk9PT1XJiY1MDA+TygpLWpqP1FqKGEsMCk6dWp8PWMpO01qKGEsYil9ZnVuY3Rpb24gbGooYSxiKXt2YXIgYz1hLnN0YXRlTm9kZTtudWxsIT09YyYmYy5kZWxldGUoYik7Yj0wOzA9PT1iJiYoYj1hLm1vZGUsMD09PShiJjIpP2I9MTowPT09KGImNCk/Yj05OT09PWVnKCk/MToyOigwPT09R2omJihHaj10aiksYj1ZYyg2MjkxNDU2MCZ+R2opLDA9PT1iJiYoYj00MTk0MzA0KSkpO2M9SGcoKTthPUtqKGEsYik7bnVsbCE9PWEmJigkYyhhLGIsYyksTWooYSxjKSl9dmFyIGNrO1xuY2s9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWIubGFuZXM7aWYobnVsbCE9PWEpaWYoYS5tZW1vaXplZFByb3BzIT09Yi5wZW5kaW5nUHJvcHN8fE4uY3VycmVudCl1Zz0hMDtlbHNlIGlmKDAhPT0oYyZkKSl1Zz0wIT09KGEuZmxhZ3MmMTYzODQpPyEwOiExO2Vsc2V7dWc9ITE7c3dpdGNoKGIudGFnKXtjYXNlIDM6cmkoYik7c2goKTticmVhaztjYXNlIDU6Z2goYik7YnJlYWs7Y2FzZSAxOkZmKGIudHlwZSkmJkpmKGIpO2JyZWFrO2Nhc2UgNDplaChiLGIuc3RhdGVOb2RlLmNvbnRhaW5lckluZm8pO2JyZWFrO2Nhc2UgMTA6ZD1iLm1lbW9pemVkUHJvcHMudmFsdWU7dmFyIGU9Yi50eXBlLl9jb250ZXh0O0kobWcsZS5fY3VycmVudFZhbHVlKTtlLl9jdXJyZW50VmFsdWU9ZDticmVhaztjYXNlIDEzOmlmKG51bGwhPT1iLm1lbW9pemVkU3RhdGUpe2lmKDAhPT0oYyZiLmNoaWxkLmNoaWxkTGFuZXMpKXJldHVybiB0aShhLGIsYyk7SShQLFAuY3VycmVudCYxKTtiPWhpKGEsYixjKTtyZXR1cm4gbnVsbCE9PVxuYj9iLnNpYmxpbmc6bnVsbH1JKFAsUC5jdXJyZW50JjEpO2JyZWFrO2Nhc2UgMTk6ZD0wIT09KGMmYi5jaGlsZExhbmVzKTtpZigwIT09KGEuZmxhZ3MmNjQpKXtpZihkKXJldHVybiBBaShhLGIsYyk7Yi5mbGFnc3w9NjR9ZT1iLm1lbW9pemVkU3RhdGU7bnVsbCE9PWUmJihlLnJlbmRlcmluZz1udWxsLGUudGFpbD1udWxsLGUubGFzdEVmZmVjdD1udWxsKTtJKFAsUC5jdXJyZW50KTtpZihkKWJyZWFrO2Vsc2UgcmV0dXJuIG51bGw7Y2FzZSAyMzpjYXNlIDI0OnJldHVybiBiLmxhbmVzPTAsbWkoYSxiLGMpfXJldHVybiBoaShhLGIsYyl9ZWxzZSB1Zz0hMTtiLmxhbmVzPTA7c3dpdGNoKGIudGFnKXtjYXNlIDI6ZD1iLnR5cGU7bnVsbCE9PWEmJihhLmFsdGVybmF0ZT1udWxsLGIuYWx0ZXJuYXRlPW51bGwsYi5mbGFnc3w9Mik7YT1iLnBlbmRpbmdQcm9wcztlPUVmKGIsTS5jdXJyZW50KTt0ZyhiLGMpO2U9Q2gobnVsbCxiLGQsYSxlLGMpO2IuZmxhZ3N8PTE7aWYoXCJvYmplY3RcIj09PVxudHlwZW9mIGUmJm51bGwhPT1lJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgZS5yZW5kZXImJnZvaWQgMD09PWUuJCR0eXBlb2Ype2IudGFnPTE7Yi5tZW1vaXplZFN0YXRlPW51bGw7Yi51cGRhdGVRdWV1ZT1udWxsO2lmKEZmKGQpKXt2YXIgZj0hMDtKZihiKX1lbHNlIGY9ITE7Yi5tZW1vaXplZFN0YXRlPW51bGwhPT1lLnN0YXRlJiZ2b2lkIDAhPT1lLnN0YXRlP2Uuc3RhdGU6bnVsbDt4ZyhiKTt2YXIgZz1kLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcztcImZ1bmN0aW9uXCI9PT10eXBlb2YgZyYmR2coYixkLGcsYSk7ZS51cGRhdGVyPUtnO2Iuc3RhdGVOb2RlPWU7ZS5fcmVhY3RJbnRlcm5hbHM9YjtPZyhiLGQsYSxjKTtiPXFpKG51bGwsYixkLCEwLGYsYyl9ZWxzZSBiLnRhZz0wLGZpKG51bGwsYixlLGMpLGI9Yi5jaGlsZDtyZXR1cm4gYjtjYXNlIDE2OmU9Yi5lbGVtZW50VHlwZTthOntudWxsIT09YSYmKGEuYWx0ZXJuYXRlPW51bGwsYi5hbHRlcm5hdGU9bnVsbCxiLmZsYWdzfD0yKTtcbmE9Yi5wZW5kaW5nUHJvcHM7Zj1lLl9pbml0O2U9ZihlLl9wYXlsb2FkKTtiLnR5cGU9ZTtmPWIudGFnPWhrKGUpO2E9bGcoZSxhKTtzd2l0Y2goZil7Y2FzZSAwOmI9bGkobnVsbCxiLGUsYSxjKTticmVhayBhO2Nhc2UgMTpiPXBpKG51bGwsYixlLGEsYyk7YnJlYWsgYTtjYXNlIDExOmI9Z2kobnVsbCxiLGUsYSxjKTticmVhayBhO2Nhc2UgMTQ6Yj1paShudWxsLGIsZSxsZyhlLnR5cGUsYSksZCxjKTticmVhayBhfXRocm93IEVycm9yKHkoMzA2LGUsXCJcIikpO31yZXR1cm4gYjtjYXNlIDA6cmV0dXJuIGQ9Yi50eXBlLGU9Yi5wZW5kaW5nUHJvcHMsZT1iLmVsZW1lbnRUeXBlPT09ZD9lOmxnKGQsZSksbGkoYSxiLGQsZSxjKTtjYXNlIDE6cmV0dXJuIGQ9Yi50eXBlLGU9Yi5wZW5kaW5nUHJvcHMsZT1iLmVsZW1lbnRUeXBlPT09ZD9lOmxnKGQsZSkscGkoYSxiLGQsZSxjKTtjYXNlIDM6cmkoYik7ZD1iLnVwZGF0ZVF1ZXVlO2lmKG51bGw9PT1hfHxudWxsPT09ZCl0aHJvdyBFcnJvcih5KDI4MikpO1xuZD1iLnBlbmRpbmdQcm9wcztlPWIubWVtb2l6ZWRTdGF0ZTtlPW51bGwhPT1lP2UuZWxlbWVudDpudWxsO3lnKGEsYik7Q2coYixkLG51bGwsYyk7ZD1iLm1lbW9pemVkU3RhdGUuZWxlbWVudDtpZihkPT09ZSlzaCgpLGI9aGkoYSxiLGMpO2Vsc2V7ZT1iLnN0YXRlTm9kZTtpZihmPWUuaHlkcmF0ZSlraD1yZihiLnN0YXRlTm9kZS5jb250YWluZXJJbmZvLmZpcnN0Q2hpbGQpLGpoPWIsZj1saD0hMDtpZihmKXthPWUubXV0YWJsZVNvdXJjZUVhZ2VySHlkcmF0aW9uRGF0YTtpZihudWxsIT1hKWZvcihlPTA7ZTxhLmxlbmd0aDtlKz0yKWY9YVtlXSxmLl93b3JrSW5Qcm9ncmVzc1ZlcnNpb25QcmltYXJ5PWFbZSsxXSx0aC5wdXNoKGYpO2M9WmcoYixudWxsLGQsYyk7Zm9yKGIuY2hpbGQ9YztjOyljLmZsYWdzPWMuZmxhZ3MmLTN8MTAyNCxjPWMuc2libGluZ31lbHNlIGZpKGEsYixkLGMpLHNoKCk7Yj1iLmNoaWxkfXJldHVybiBiO2Nhc2UgNTpyZXR1cm4gZ2goYiksbnVsbD09PWEmJlxucGgoYiksZD1iLnR5cGUsZT1iLnBlbmRpbmdQcm9wcyxmPW51bGwhPT1hP2EubWVtb2l6ZWRQcm9wczpudWxsLGc9ZS5jaGlsZHJlbixuZihkLGUpP2c9bnVsbDpudWxsIT09ZiYmbmYoZCxmKSYmKGIuZmxhZ3N8PTE2KSxvaShhLGIpLGZpKGEsYixnLGMpLGIuY2hpbGQ7Y2FzZSA2OnJldHVybiBudWxsPT09YSYmcGgoYiksbnVsbDtjYXNlIDEzOnJldHVybiB0aShhLGIsYyk7Y2FzZSA0OnJldHVybiBlaChiLGIuc3RhdGVOb2RlLmNvbnRhaW5lckluZm8pLGQ9Yi5wZW5kaW5nUHJvcHMsbnVsbD09PWE/Yi5jaGlsZD1ZZyhiLG51bGwsZCxjKTpmaShhLGIsZCxjKSxiLmNoaWxkO2Nhc2UgMTE6cmV0dXJuIGQ9Yi50eXBlLGU9Yi5wZW5kaW5nUHJvcHMsZT1iLmVsZW1lbnRUeXBlPT09ZD9lOmxnKGQsZSksZ2koYSxiLGQsZSxjKTtjYXNlIDc6cmV0dXJuIGZpKGEsYixiLnBlbmRpbmdQcm9wcyxjKSxiLmNoaWxkO2Nhc2UgODpyZXR1cm4gZmkoYSxiLGIucGVuZGluZ1Byb3BzLmNoaWxkcmVuLFxuYyksYi5jaGlsZDtjYXNlIDEyOnJldHVybiBmaShhLGIsYi5wZW5kaW5nUHJvcHMuY2hpbGRyZW4sYyksYi5jaGlsZDtjYXNlIDEwOmE6e2Q9Yi50eXBlLl9jb250ZXh0O2U9Yi5wZW5kaW5nUHJvcHM7Zz1iLm1lbW9pemVkUHJvcHM7Zj1lLnZhbHVlO3ZhciBoPWIudHlwZS5fY29udGV4dDtJKG1nLGguX2N1cnJlbnRWYWx1ZSk7aC5fY3VycmVudFZhbHVlPWY7aWYobnVsbCE9PWcpaWYoaD1nLnZhbHVlLGY9SGUoaCxmKT8wOihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZC5fY2FsY3VsYXRlQ2hhbmdlZEJpdHM/ZC5fY2FsY3VsYXRlQ2hhbmdlZEJpdHMoaCxmKToxMDczNzQxODIzKXwwLDA9PT1mKXtpZihnLmNoaWxkcmVuPT09ZS5jaGlsZHJlbiYmIU4uY3VycmVudCl7Yj1oaShhLGIsYyk7YnJlYWsgYX19ZWxzZSBmb3IoaD1iLmNoaWxkLG51bGwhPT1oJiYoaC5yZXR1cm49Yik7bnVsbCE9PWg7KXt2YXIgaz1oLmRlcGVuZGVuY2llcztpZihudWxsIT09ayl7Zz1oLmNoaWxkO2Zvcih2YXIgbD1cbmsuZmlyc3RDb250ZXh0O251bGwhPT1sOyl7aWYobC5jb250ZXh0PT09ZCYmMCE9PShsLm9ic2VydmVkQml0cyZmKSl7MT09PWgudGFnJiYobD16ZygtMSxjJi1jKSxsLnRhZz0yLEFnKGgsbCkpO2gubGFuZXN8PWM7bD1oLmFsdGVybmF0ZTtudWxsIT09bCYmKGwubGFuZXN8PWMpO3NnKGgucmV0dXJuLGMpO2subGFuZXN8PWM7YnJlYWt9bD1sLm5leHR9fWVsc2UgZz0xMD09PWgudGFnP2gudHlwZT09PWIudHlwZT9udWxsOmguY2hpbGQ6aC5jaGlsZDtpZihudWxsIT09ZylnLnJldHVybj1oO2Vsc2UgZm9yKGc9aDtudWxsIT09Zzspe2lmKGc9PT1iKXtnPW51bGw7YnJlYWt9aD1nLnNpYmxpbmc7aWYobnVsbCE9PWgpe2gucmV0dXJuPWcucmV0dXJuO2c9aDticmVha31nPWcucmV0dXJufWg9Z31maShhLGIsZS5jaGlsZHJlbixjKTtiPWIuY2hpbGR9cmV0dXJuIGI7Y2FzZSA5OnJldHVybiBlPWIudHlwZSxmPWIucGVuZGluZ1Byb3BzLGQ9Zi5jaGlsZHJlbix0ZyhiLGMpLGU9dmcoZSxcbmYudW5zdGFibGVfb2JzZXJ2ZWRCaXRzKSxkPWQoZSksYi5mbGFnc3w9MSxmaShhLGIsZCxjKSxiLmNoaWxkO2Nhc2UgMTQ6cmV0dXJuIGU9Yi50eXBlLGY9bGcoZSxiLnBlbmRpbmdQcm9wcyksZj1sZyhlLnR5cGUsZiksaWkoYSxiLGUsZixkLGMpO2Nhc2UgMTU6cmV0dXJuIGtpKGEsYixiLnR5cGUsYi5wZW5kaW5nUHJvcHMsZCxjKTtjYXNlIDE3OnJldHVybiBkPWIudHlwZSxlPWIucGVuZGluZ1Byb3BzLGU9Yi5lbGVtZW50VHlwZT09PWQ/ZTpsZyhkLGUpLG51bGwhPT1hJiYoYS5hbHRlcm5hdGU9bnVsbCxiLmFsdGVybmF0ZT1udWxsLGIuZmxhZ3N8PTIpLGIudGFnPTEsRmYoZCk/KGE9ITAsSmYoYikpOmE9ITEsdGcoYixjKSxNZyhiLGQsZSksT2coYixkLGUsYykscWkobnVsbCxiLGQsITAsYSxjKTtjYXNlIDE5OnJldHVybiBBaShhLGIsYyk7Y2FzZSAyMzpyZXR1cm4gbWkoYSxiLGMpO2Nhc2UgMjQ6cmV0dXJuIG1pKGEsYixjKX10aHJvdyBFcnJvcih5KDE1NixiLnRhZykpO1xufTtmdW5jdGlvbiBpayhhLGIsYyxkKXt0aGlzLnRhZz1hO3RoaXMua2V5PWM7dGhpcy5zaWJsaW5nPXRoaXMuY2hpbGQ9dGhpcy5yZXR1cm49dGhpcy5zdGF0ZU5vZGU9dGhpcy50eXBlPXRoaXMuZWxlbWVudFR5cGU9bnVsbDt0aGlzLmluZGV4PTA7dGhpcy5yZWY9bnVsbDt0aGlzLnBlbmRpbmdQcm9wcz1iO3RoaXMuZGVwZW5kZW5jaWVzPXRoaXMubWVtb2l6ZWRTdGF0ZT10aGlzLnVwZGF0ZVF1ZXVlPXRoaXMubWVtb2l6ZWRQcm9wcz1udWxsO3RoaXMubW9kZT1kO3RoaXMuZmxhZ3M9MDt0aGlzLmxhc3RFZmZlY3Q9dGhpcy5maXJzdEVmZmVjdD10aGlzLm5leHRFZmZlY3Q9bnVsbDt0aGlzLmNoaWxkTGFuZXM9dGhpcy5sYW5lcz0wO3RoaXMuYWx0ZXJuYXRlPW51bGx9ZnVuY3Rpb24gbmgoYSxiLGMsZCl7cmV0dXJuIG5ldyBpayhhLGIsYyxkKX1mdW5jdGlvbiBqaShhKXthPWEucHJvdG90eXBlO3JldHVybiEoIWF8fCFhLmlzUmVhY3RDb21wb25lbnQpfVxuZnVuY3Rpb24gaGsoYSl7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGEpcmV0dXJuIGppKGEpPzE6MDtpZih2b2lkIDAhPT1hJiZudWxsIT09YSl7YT1hLiQkdHlwZW9mO2lmKGE9PT1BYSlyZXR1cm4gMTE7aWYoYT09PURhKXJldHVybiAxNH1yZXR1cm4gMn1cbmZ1bmN0aW9uIFRnKGEsYil7dmFyIGM9YS5hbHRlcm5hdGU7bnVsbD09PWM/KGM9bmgoYS50YWcsYixhLmtleSxhLm1vZGUpLGMuZWxlbWVudFR5cGU9YS5lbGVtZW50VHlwZSxjLnR5cGU9YS50eXBlLGMuc3RhdGVOb2RlPWEuc3RhdGVOb2RlLGMuYWx0ZXJuYXRlPWEsYS5hbHRlcm5hdGU9Yyk6KGMucGVuZGluZ1Byb3BzPWIsYy50eXBlPWEudHlwZSxjLmZsYWdzPTAsYy5uZXh0RWZmZWN0PW51bGwsYy5maXJzdEVmZmVjdD1udWxsLGMubGFzdEVmZmVjdD1udWxsKTtjLmNoaWxkTGFuZXM9YS5jaGlsZExhbmVzO2MubGFuZXM9YS5sYW5lcztjLmNoaWxkPWEuY2hpbGQ7Yy5tZW1vaXplZFByb3BzPWEubWVtb2l6ZWRQcm9wcztjLm1lbW9pemVkU3RhdGU9YS5tZW1vaXplZFN0YXRlO2MudXBkYXRlUXVldWU9YS51cGRhdGVRdWV1ZTtiPWEuZGVwZW5kZW5jaWVzO2MuZGVwZW5kZW5jaWVzPW51bGw9PT1iP251bGw6e2xhbmVzOmIubGFuZXMsZmlyc3RDb250ZXh0OmIuZmlyc3RDb250ZXh0fTtcbmMuc2libGluZz1hLnNpYmxpbmc7Yy5pbmRleD1hLmluZGV4O2MucmVmPWEucmVmO3JldHVybiBjfVxuZnVuY3Rpb24gVmcoYSxiLGMsZCxlLGYpe3ZhciBnPTI7ZD1hO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhKWppKGEpJiYoZz0xKTtlbHNlIGlmKFwic3RyaW5nXCI9PT10eXBlb2YgYSlnPTU7ZWxzZSBhOnN3aXRjaChhKXtjYXNlIHVhOnJldHVybiBYZyhjLmNoaWxkcmVuLGUsZixiKTtjYXNlIEhhOmc9ODtlfD0xNjticmVhaztjYXNlIHdhOmc9ODtlfD0xO2JyZWFrO2Nhc2UgeGE6cmV0dXJuIGE9bmgoMTIsYyxiLGV8OCksYS5lbGVtZW50VHlwZT14YSxhLnR5cGU9eGEsYS5sYW5lcz1mLGE7Y2FzZSBCYTpyZXR1cm4gYT1uaCgxMyxjLGIsZSksYS50eXBlPUJhLGEuZWxlbWVudFR5cGU9QmEsYS5sYW5lcz1mLGE7Y2FzZSBDYTpyZXR1cm4gYT1uaCgxOSxjLGIsZSksYS5lbGVtZW50VHlwZT1DYSxhLmxhbmVzPWYsYTtjYXNlIElhOnJldHVybiB2aShjLGUsZixiKTtjYXNlIEphOnJldHVybiBhPW5oKDI0LGMsYixlKSxhLmVsZW1lbnRUeXBlPUphLGEubGFuZXM9ZixhO2RlZmF1bHQ6aWYoXCJvYmplY3RcIj09PVxudHlwZW9mIGEmJm51bGwhPT1hKXN3aXRjaChhLiQkdHlwZW9mKXtjYXNlIHlhOmc9MTA7YnJlYWsgYTtjYXNlIHphOmc9OTticmVhayBhO2Nhc2UgQWE6Zz0xMTticmVhayBhO2Nhc2UgRGE6Zz0xNDticmVhayBhO2Nhc2UgRWE6Zz0xNjtkPW51bGw7YnJlYWsgYTtjYXNlIEZhOmc9MjI7YnJlYWsgYX10aHJvdyBFcnJvcih5KDEzMCxudWxsPT1hP2E6dHlwZW9mIGEsXCJcIikpO31iPW5oKGcsYyxiLGUpO2IuZWxlbWVudFR5cGU9YTtiLnR5cGU9ZDtiLmxhbmVzPWY7cmV0dXJuIGJ9ZnVuY3Rpb24gWGcoYSxiLGMsZCl7YT1uaCg3LGEsZCxiKTthLmxhbmVzPWM7cmV0dXJuIGF9ZnVuY3Rpb24gdmkoYSxiLGMsZCl7YT1uaCgyMyxhLGQsYik7YS5lbGVtZW50VHlwZT1JYTthLmxhbmVzPWM7cmV0dXJuIGF9ZnVuY3Rpb24gVWcoYSxiLGMpe2E9bmgoNixhLG51bGwsYik7YS5sYW5lcz1jO3JldHVybiBhfVxuZnVuY3Rpb24gV2coYSxiLGMpe2I9bmgoNCxudWxsIT09YS5jaGlsZHJlbj9hLmNoaWxkcmVuOltdLGEua2V5LGIpO2IubGFuZXM9YztiLnN0YXRlTm9kZT17Y29udGFpbmVySW5mbzphLmNvbnRhaW5lckluZm8scGVuZGluZ0NoaWxkcmVuOm51bGwsaW1wbGVtZW50YXRpb246YS5pbXBsZW1lbnRhdGlvbn07cmV0dXJuIGJ9XG5mdW5jdGlvbiBqayhhLGIsYyl7dGhpcy50YWc9Yjt0aGlzLmNvbnRhaW5lckluZm89YTt0aGlzLmZpbmlzaGVkV29yaz10aGlzLnBpbmdDYWNoZT10aGlzLmN1cnJlbnQ9dGhpcy5wZW5kaW5nQ2hpbGRyZW49bnVsbDt0aGlzLnRpbWVvdXRIYW5kbGU9LTE7dGhpcy5wZW5kaW5nQ29udGV4dD10aGlzLmNvbnRleHQ9bnVsbDt0aGlzLmh5ZHJhdGU9Yzt0aGlzLmNhbGxiYWNrTm9kZT1udWxsO3RoaXMuY2FsbGJhY2tQcmlvcml0eT0wO3RoaXMuZXZlbnRUaW1lcz1aYygwKTt0aGlzLmV4cGlyYXRpb25UaW1lcz1aYygtMSk7dGhpcy5lbnRhbmdsZWRMYW5lcz10aGlzLmZpbmlzaGVkTGFuZXM9dGhpcy5tdXRhYmxlUmVhZExhbmVzPXRoaXMuZXhwaXJlZExhbmVzPXRoaXMucGluZ2VkTGFuZXM9dGhpcy5zdXNwZW5kZWRMYW5lcz10aGlzLnBlbmRpbmdMYW5lcz0wO3RoaXMuZW50YW5nbGVtZW50cz1aYygwKTt0aGlzLm11dGFibGVTb3VyY2VFYWdlckh5ZHJhdGlvbkRhdGE9bnVsbH1cbmZ1bmN0aW9uIGtrKGEsYixjKXt2YXIgZD0zPGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PWFyZ3VtZW50c1szXT9hcmd1bWVudHNbM106bnVsbDtyZXR1cm57JCR0eXBlb2Y6dGEsa2V5Om51bGw9PWQ/bnVsbDpcIlwiK2QsY2hpbGRyZW46YSxjb250YWluZXJJbmZvOmIsaW1wbGVtZW50YXRpb246Y319XG5mdW5jdGlvbiBsayhhLGIsYyxkKXt2YXIgZT1iLmN1cnJlbnQsZj1IZygpLGc9SWcoZSk7YTppZihjKXtjPWMuX3JlYWN0SW50ZXJuYWxzO2I6e2lmKFpiKGMpIT09Y3x8MSE9PWMudGFnKXRocm93IEVycm9yKHkoMTcwKSk7dmFyIGg9Yztkb3tzd2l0Y2goaC50YWcpe2Nhc2UgMzpoPWguc3RhdGVOb2RlLmNvbnRleHQ7YnJlYWsgYjtjYXNlIDE6aWYoRmYoaC50eXBlKSl7aD1oLnN0YXRlTm9kZS5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZE1lcmdlZENoaWxkQ29udGV4dDticmVhayBifX1oPWgucmV0dXJufXdoaWxlKG51bGwhPT1oKTt0aHJvdyBFcnJvcih5KDE3MSkpO31pZigxPT09Yy50YWcpe3ZhciBrPWMudHlwZTtpZihGZihrKSl7Yz1JZihjLGssaCk7YnJlYWsgYX19Yz1ofWVsc2UgYz1DZjtudWxsPT09Yi5jb250ZXh0P2IuY29udGV4dD1jOmIucGVuZGluZ0NvbnRleHQ9YztiPXpnKGYsZyk7Yi5wYXlsb2FkPXtlbGVtZW50OmF9O2Q9dm9pZCAwPT09ZD9udWxsOmQ7bnVsbCE9PVxuZCYmKGIuY2FsbGJhY2s9ZCk7QWcoZSxiKTtKZyhlLGcsZik7cmV0dXJuIGd9ZnVuY3Rpb24gbWsoYSl7YT1hLmN1cnJlbnQ7aWYoIWEuY2hpbGQpcmV0dXJuIG51bGw7c3dpdGNoKGEuY2hpbGQudGFnKXtjYXNlIDU6cmV0dXJuIGEuY2hpbGQuc3RhdGVOb2RlO2RlZmF1bHQ6cmV0dXJuIGEuY2hpbGQuc3RhdGVOb2RlfX1mdW5jdGlvbiBuayhhLGIpe2E9YS5tZW1vaXplZFN0YXRlO2lmKG51bGwhPT1hJiZudWxsIT09YS5kZWh5ZHJhdGVkKXt2YXIgYz1hLnJldHJ5TGFuZTthLnJldHJ5TGFuZT0wIT09YyYmYzxiP2M6Yn19ZnVuY3Rpb24gb2soYSxiKXtuayhhLGIpOyhhPWEuYWx0ZXJuYXRlKSYmbmsoYSxiKX1mdW5jdGlvbiBwaygpe3JldHVybiBudWxsfVxuZnVuY3Rpb24gcWsoYSxiLGMpe3ZhciBkPW51bGwhPWMmJm51bGwhPWMuaHlkcmF0aW9uT3B0aW9ucyYmYy5oeWRyYXRpb25PcHRpb25zLm11dGFibGVTb3VyY2VzfHxudWxsO2M9bmV3IGprKGEsYixudWxsIT1jJiYhMD09PWMuaHlkcmF0ZSk7Yj1uaCgzLG51bGwsbnVsbCwyPT09Yj83OjE9PT1iPzM6MCk7Yy5jdXJyZW50PWI7Yi5zdGF0ZU5vZGU9Yzt4ZyhiKTthW2ZmXT1jLmN1cnJlbnQ7Y2YoOD09PWEubm9kZVR5cGU/YS5wYXJlbnROb2RlOmEpO2lmKGQpZm9yKGE9MDthPGQubGVuZ3RoO2ErKyl7Yj1kW2FdO3ZhciBlPWIuX2dldFZlcnNpb247ZT1lKGIuX3NvdXJjZSk7bnVsbD09Yy5tdXRhYmxlU291cmNlRWFnZXJIeWRyYXRpb25EYXRhP2MubXV0YWJsZVNvdXJjZUVhZ2VySHlkcmF0aW9uRGF0YT1bYixlXTpjLm11dGFibGVTb3VyY2VFYWdlckh5ZHJhdGlvbkRhdGEucHVzaChiLGUpfXRoaXMuX2ludGVybmFsUm9vdD1jfVxucWsucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihhKXtsayhhLHRoaXMuX2ludGVybmFsUm9vdCxudWxsLG51bGwpfTtxay5wcm90b3R5cGUudW5tb3VudD1mdW5jdGlvbigpe3ZhciBhPXRoaXMuX2ludGVybmFsUm9vdCxiPWEuY29udGFpbmVySW5mbztsayhudWxsLGEsbnVsbCxmdW5jdGlvbigpe2JbZmZdPW51bGx9KX07ZnVuY3Rpb24gcmsoYSl7cmV0dXJuISghYXx8MSE9PWEubm9kZVR5cGUmJjkhPT1hLm5vZGVUeXBlJiYxMSE9PWEubm9kZVR5cGUmJig4IT09YS5ub2RlVHlwZXx8XCIgcmVhY3QtbW91bnQtcG9pbnQtdW5zdGFibGUgXCIhPT1hLm5vZGVWYWx1ZSkpfVxuZnVuY3Rpb24gc2soYSxiKXtifHwoYj1hPzk9PT1hLm5vZGVUeXBlP2EuZG9jdW1lbnRFbGVtZW50OmEuZmlyc3RDaGlsZDpudWxsLGI9ISghYnx8MSE9PWIubm9kZVR5cGV8fCFiLmhhc0F0dHJpYnV0ZShcImRhdGEtcmVhY3Ryb290XCIpKSk7aWYoIWIpZm9yKHZhciBjO2M9YS5sYXN0Q2hpbGQ7KWEucmVtb3ZlQ2hpbGQoYyk7cmV0dXJuIG5ldyBxayhhLDAsYj97aHlkcmF0ZTohMH06dm9pZCAwKX1cbmZ1bmN0aW9uIHRrKGEsYixjLGQsZSl7dmFyIGY9Yy5fcmVhY3RSb290Q29udGFpbmVyO2lmKGYpe3ZhciBnPWYuX2ludGVybmFsUm9vdDtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZSl7dmFyIGg9ZTtlPWZ1bmN0aW9uKCl7dmFyIGE9bWsoZyk7aC5jYWxsKGEpfX1sayhiLGcsYSxlKX1lbHNle2Y9Yy5fcmVhY3RSb290Q29udGFpbmVyPXNrKGMsZCk7Zz1mLl9pbnRlcm5hbFJvb3Q7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGUpe3ZhciBrPWU7ZT1mdW5jdGlvbigpe3ZhciBhPW1rKGcpO2suY2FsbChhKX19WGooZnVuY3Rpb24oKXtsayhiLGcsYSxlKX0pfXJldHVybiBtayhnKX1lYz1mdW5jdGlvbihhKXtpZigxMz09PWEudGFnKXt2YXIgYj1IZygpO0pnKGEsNCxiKTtvayhhLDQpfX07ZmM9ZnVuY3Rpb24oYSl7aWYoMTM9PT1hLnRhZyl7dmFyIGI9SGcoKTtKZyhhLDY3MTA4ODY0LGIpO29rKGEsNjcxMDg4NjQpfX07XG5nYz1mdW5jdGlvbihhKXtpZigxMz09PWEudGFnKXt2YXIgYj1IZygpLGM9SWcoYSk7SmcoYSxjLGIpO29rKGEsYyl9fTtoYz1mdW5jdGlvbihhLGIpe3JldHVybiBiKCl9O1xueWI9ZnVuY3Rpb24oYSxiLGMpe3N3aXRjaChiKXtjYXNlIFwiaW5wdXRcIjphYihhLGMpO2I9Yy5uYW1lO2lmKFwicmFkaW9cIj09PWMudHlwZSYmbnVsbCE9Yil7Zm9yKGM9YTtjLnBhcmVudE5vZGU7KWM9Yy5wYXJlbnROb2RlO2M9Yy5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbbmFtZT1cIitKU09OLnN0cmluZ2lmeShcIlwiK2IpKyddW3R5cGU9XCJyYWRpb1wiXScpO2ZvcihiPTA7YjxjLmxlbmd0aDtiKyspe3ZhciBkPWNbYl07aWYoZCE9PWEmJmQuZm9ybT09PWEuZm9ybSl7dmFyIGU9RGIoZCk7aWYoIWUpdGhyb3cgRXJyb3IoeSg5MCkpO1dhKGQpO2FiKGQsZSl9fX1icmVhaztjYXNlIFwidGV4dGFyZWFcIjppYihhLGMpO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjpiPWMudmFsdWUsbnVsbCE9YiYmZmIoYSwhIWMubXVsdGlwbGUsYiwhMSl9fTtHYj1XajtcbkhiPWZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGY9WDtYfD00O3RyeXtyZXR1cm4gZ2coOTgsYS5iaW5kKG51bGwsYixjLGQsZSkpfWZpbmFsbHl7WD1mLDA9PT1YJiYod2ooKSxpZygpKX19O0liPWZ1bmN0aW9uKCl7MD09PShYJjQ5KSYmKFZqKCksT2ooKSl9O0piPWZ1bmN0aW9uKGEsYil7dmFyIGM9WDtYfD0yO3RyeXtyZXR1cm4gYShiKX1maW5hbGx5e1g9YywwPT09WCYmKHdqKCksaWcoKSl9fTtmdW5jdGlvbiB1ayhhLGIpe3ZhciBjPTI8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09YXJndW1lbnRzWzJdP2FyZ3VtZW50c1syXTpudWxsO2lmKCFyayhiKSl0aHJvdyBFcnJvcih5KDIwMCkpO3JldHVybiBrayhhLGIsbnVsbCxjKX12YXIgdms9e0V2ZW50czpbQ2IsdWUsRGIsRWIsRmIsT2ose2N1cnJlbnQ6ITF9XX0sd2s9e2ZpbmRGaWJlckJ5SG9zdEluc3RhbmNlOndjLGJ1bmRsZVR5cGU6MCx2ZXJzaW9uOlwiMTcuMC4yXCIscmVuZGVyZXJQYWNrYWdlTmFtZTpcInJlYWN0LWRvbVwifTtcbnZhciB4az17YnVuZGxlVHlwZTp3ay5idW5kbGVUeXBlLHZlcnNpb246d2sudmVyc2lvbixyZW5kZXJlclBhY2thZ2VOYW1lOndrLnJlbmRlcmVyUGFja2FnZU5hbWUscmVuZGVyZXJDb25maWc6d2sucmVuZGVyZXJDb25maWcsb3ZlcnJpZGVIb29rU3RhdGU6bnVsbCxvdmVycmlkZUhvb2tTdGF0ZURlbGV0ZVBhdGg6bnVsbCxvdmVycmlkZUhvb2tTdGF0ZVJlbmFtZVBhdGg6bnVsbCxvdmVycmlkZVByb3BzOm51bGwsb3ZlcnJpZGVQcm9wc0RlbGV0ZVBhdGg6bnVsbCxvdmVycmlkZVByb3BzUmVuYW1lUGF0aDpudWxsLHNldFN1c3BlbnNlSGFuZGxlcjpudWxsLHNjaGVkdWxlVXBkYXRlOm51bGwsY3VycmVudERpc3BhdGNoZXJSZWY6cmEuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcixmaW5kSG9zdEluc3RhbmNlQnlGaWJlcjpmdW5jdGlvbihhKXthPWNjKGEpO3JldHVybiBudWxsPT09YT9udWxsOmEuc3RhdGVOb2RlfSxmaW5kRmliZXJCeUhvc3RJbnN0YW5jZTp3ay5maW5kRmliZXJCeUhvc3RJbnN0YW5jZXx8XG5wayxmaW5kSG9zdEluc3RhbmNlc0ZvclJlZnJlc2g6bnVsbCxzY2hlZHVsZVJlZnJlc2g6bnVsbCxzY2hlZHVsZVJvb3Q6bnVsbCxzZXRSZWZyZXNoSGFuZGxlcjpudWxsLGdldEN1cnJlbnRGaWJlcjpudWxsfTtpZihcInVuZGVmaW5lZFwiIT09dHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyl7dmFyIHlrPV9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztpZigheWsuaXNEaXNhYmxlZCYmeWsuc3VwcG9ydHNGaWJlcil0cnl7TGY9eWsuaW5qZWN0KHhrKSxNZj15a31jYXRjaChhKXt9fWV4cG9ydHMuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ9dms7ZXhwb3J0cy5jcmVhdGVQb3J0YWw9dWs7XG5leHBvcnRzLmZpbmRET01Ob2RlPWZ1bmN0aW9uKGEpe2lmKG51bGw9PWEpcmV0dXJuIG51bGw7aWYoMT09PWEubm9kZVR5cGUpcmV0dXJuIGE7dmFyIGI9YS5fcmVhY3RJbnRlcm5hbHM7aWYodm9pZCAwPT09Yil7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGEucmVuZGVyKXRocm93IEVycm9yKHkoMTg4KSk7dGhyb3cgRXJyb3IoeSgyNjgsT2JqZWN0LmtleXMoYSkpKTt9YT1jYyhiKTthPW51bGw9PT1hP251bGw6YS5zdGF0ZU5vZGU7cmV0dXJuIGF9O2V4cG9ydHMuZmx1c2hTeW5jPWZ1bmN0aW9uKGEsYil7dmFyIGM9WDtpZigwIT09KGMmNDgpKXJldHVybiBhKGIpO1h8PTE7dHJ5e2lmKGEpcmV0dXJuIGdnKDk5LGEuYmluZChudWxsLGIpKX1maW5hbGx5e1g9YyxpZygpfX07ZXhwb3J0cy5oeWRyYXRlPWZ1bmN0aW9uKGEsYixjKXtpZighcmsoYikpdGhyb3cgRXJyb3IoeSgyMDApKTtyZXR1cm4gdGsobnVsbCxhLGIsITAsYyl9O1xuZXhwb3J0cy5yZW5kZXI9ZnVuY3Rpb24oYSxiLGMpe2lmKCFyayhiKSl0aHJvdyBFcnJvcih5KDIwMCkpO3JldHVybiB0ayhudWxsLGEsYiwhMSxjKX07ZXhwb3J0cy51bm1vdW50Q29tcG9uZW50QXROb2RlPWZ1bmN0aW9uKGEpe2lmKCFyayhhKSl0aHJvdyBFcnJvcih5KDQwKSk7cmV0dXJuIGEuX3JlYWN0Um9vdENvbnRhaW5lcj8oWGooZnVuY3Rpb24oKXt0ayhudWxsLG51bGwsYSwhMSxmdW5jdGlvbigpe2EuX3JlYWN0Um9vdENvbnRhaW5lcj1udWxsO2FbZmZdPW51bGx9KX0pLCEwKTohMX07ZXhwb3J0cy51bnN0YWJsZV9iYXRjaGVkVXBkYXRlcz1XajtleHBvcnRzLnVuc3RhYmxlX2NyZWF0ZVBvcnRhbD1mdW5jdGlvbihhLGIpe3JldHVybiB1ayhhLGIsMjxhcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOm51bGwpfTtcbmV4cG9ydHMudW5zdGFibGVfcmVuZGVyU3VidHJlZUludG9Db250YWluZXI9ZnVuY3Rpb24oYSxiLGMsZCl7aWYoIXJrKGMpKXRocm93IEVycm9yKHkoMjAwKSk7aWYobnVsbD09YXx8dm9pZCAwPT09YS5fcmVhY3RJbnRlcm5hbHMpdGhyb3cgRXJyb3IoeSgzOCkpO3JldHVybiB0ayhhLGIsYywhMSxkKX07ZXhwb3J0cy52ZXJzaW9uPVwiMTcuMC4yXCI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvc2NoZWR1bGVyLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3NjaGVkdWxlci5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYwLjIwLjJcbiAqIHNjaGVkdWxlci5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG4ndXNlIHN0cmljdCc7dmFyIGYsZyxoLGs7aWYoXCJvYmplY3RcIj09PXR5cGVvZiBwZXJmb3JtYW5jZSYmXCJmdW5jdGlvblwiPT09dHlwZW9mIHBlcmZvcm1hbmNlLm5vdyl7dmFyIGw9cGVyZm9ybWFuY2U7ZXhwb3J0cy51bnN0YWJsZV9ub3c9ZnVuY3Rpb24oKXtyZXR1cm4gbC5ub3coKX19ZWxzZXt2YXIgcD1EYXRlLHE9cC5ub3coKTtleHBvcnRzLnVuc3RhYmxlX25vdz1mdW5jdGlvbigpe3JldHVybiBwLm5vdygpLXF9fVxuaWYoXCJ1bmRlZmluZWRcIj09PXR5cGVvZiB3aW5kb3d8fFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBNZXNzYWdlQ2hhbm5lbCl7dmFyIHQ9bnVsbCx1PW51bGwsdz1mdW5jdGlvbigpe2lmKG51bGwhPT10KXRyeXt2YXIgYT1leHBvcnRzLnVuc3RhYmxlX25vdygpO3QoITAsYSk7dD1udWxsfWNhdGNoKGIpe3Rocm93IHNldFRpbWVvdXQodywwKSxiO319O2Y9ZnVuY3Rpb24oYSl7bnVsbCE9PXQ/c2V0VGltZW91dChmLDAsYSk6KHQ9YSxzZXRUaW1lb3V0KHcsMCkpfTtnPWZ1bmN0aW9uKGEsYil7dT1zZXRUaW1lb3V0KGEsYil9O2g9ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQodSl9O2V4cG9ydHMudW5zdGFibGVfc2hvdWxkWWllbGQ9ZnVuY3Rpb24oKXtyZXR1cm4hMX07az1leHBvcnRzLnVuc3RhYmxlX2ZvcmNlRnJhbWVSYXRlPWZ1bmN0aW9uKCl7fX1lbHNle3ZhciB4PXdpbmRvdy5zZXRUaW1lb3V0LHk9d2luZG93LmNsZWFyVGltZW91dDtpZihcInVuZGVmaW5lZFwiIT09dHlwZW9mIGNvbnNvbGUpe3ZhciB6PVxud2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lO1wiZnVuY3Rpb25cIiE9PXR5cGVvZiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lJiZjb25zb2xlLmVycm9yKFwiVGhpcyBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUuIE1ha2Ugc3VyZSB0aGF0IHlvdSBsb2FkIGEgcG9seWZpbGwgaW4gb2xkZXIgYnJvd3NlcnMuIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9yZWFjdC1wb2x5ZmlsbHNcIik7XCJmdW5jdGlvblwiIT09dHlwZW9mIHomJmNvbnNvbGUuZXJyb3IoXCJUaGlzIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IGNhbmNlbEFuaW1hdGlvbkZyYW1lLiBNYWtlIHN1cmUgdGhhdCB5b3UgbG9hZCBhIHBvbHlmaWxsIGluIG9sZGVyIGJyb3dzZXJzLiBodHRwczovL3JlYWN0anMub3JnL2xpbmsvcmVhY3QtcG9seWZpbGxzXCIpfXZhciBBPSExLEI9bnVsbCxDPS0xLEQ9NSxFPTA7ZXhwb3J0cy51bnN0YWJsZV9zaG91bGRZaWVsZD1mdW5jdGlvbigpe3JldHVybiBleHBvcnRzLnVuc3RhYmxlX25vdygpPj1cbkV9O2s9ZnVuY3Rpb24oKXt9O2V4cG9ydHMudW5zdGFibGVfZm9yY2VGcmFtZVJhdGU9ZnVuY3Rpb24oYSl7MD5hfHwxMjU8YT9jb25zb2xlLmVycm9yKFwiZm9yY2VGcmFtZVJhdGUgdGFrZXMgYSBwb3NpdGl2ZSBpbnQgYmV0d2VlbiAwIGFuZCAxMjUsIGZvcmNpbmcgZnJhbWUgcmF0ZXMgaGlnaGVyIHRoYW4gMTI1IGZwcyBpcyBub3Qgc3VwcG9ydGVkXCIpOkQ9MDxhP01hdGguZmxvb3IoMUUzL2EpOjV9O3ZhciBGPW5ldyBNZXNzYWdlQ2hhbm5lbCxHPUYucG9ydDI7Ri5wb3J0MS5vbm1lc3NhZ2U9ZnVuY3Rpb24oKXtpZihudWxsIT09Qil7dmFyIGE9ZXhwb3J0cy51bnN0YWJsZV9ub3coKTtFPWErRDt0cnl7QighMCxhKT9HLnBvc3RNZXNzYWdlKG51bGwpOihBPSExLEI9bnVsbCl9Y2F0Y2goYil7dGhyb3cgRy5wb3N0TWVzc2FnZShudWxsKSxiO319ZWxzZSBBPSExfTtmPWZ1bmN0aW9uKGEpe0I9YTtBfHwoQT0hMCxHLnBvc3RNZXNzYWdlKG51bGwpKX07Zz1mdW5jdGlvbihhLGIpe0M9XG54KGZ1bmN0aW9uKCl7YShleHBvcnRzLnVuc3RhYmxlX25vdygpKX0sYil9O2g9ZnVuY3Rpb24oKXt5KEMpO0M9LTF9fWZ1bmN0aW9uIEgoYSxiKXt2YXIgYz1hLmxlbmd0aDthLnB1c2goYik7YTpmb3IoOzspe3ZhciBkPWMtMT4+PjEsZT1hW2RdO2lmKHZvaWQgMCE9PWUmJjA8SShlLGIpKWFbZF09YixhW2NdPWUsYz1kO2Vsc2UgYnJlYWsgYX19ZnVuY3Rpb24gSihhKXthPWFbMF07cmV0dXJuIHZvaWQgMD09PWE/bnVsbDphfVxuZnVuY3Rpb24gSyhhKXt2YXIgYj1hWzBdO2lmKHZvaWQgMCE9PWIpe3ZhciBjPWEucG9wKCk7aWYoYyE9PWIpe2FbMF09YzthOmZvcih2YXIgZD0wLGU9YS5sZW5ndGg7ZDxlOyl7dmFyIG09MiooZCsxKS0xLG49YVttXSx2PW0rMSxyPWFbdl07aWYodm9pZCAwIT09biYmMD5JKG4sYykpdm9pZCAwIT09ciYmMD5JKHIsbik/KGFbZF09cixhW3ZdPWMsZD12KTooYVtkXT1uLGFbbV09YyxkPW0pO2Vsc2UgaWYodm9pZCAwIT09ciYmMD5JKHIsYykpYVtkXT1yLGFbdl09YyxkPXY7ZWxzZSBicmVhayBhfX1yZXR1cm4gYn1yZXR1cm4gbnVsbH1mdW5jdGlvbiBJKGEsYil7dmFyIGM9YS5zb3J0SW5kZXgtYi5zb3J0SW5kZXg7cmV0dXJuIDAhPT1jP2M6YS5pZC1iLmlkfXZhciBMPVtdLE09W10sTj0xLE89bnVsbCxQPTMsUT0hMSxSPSExLFM9ITE7XG5mdW5jdGlvbiBUKGEpe2Zvcih2YXIgYj1KKE0pO251bGwhPT1iOyl7aWYobnVsbD09PWIuY2FsbGJhY2spSyhNKTtlbHNlIGlmKGIuc3RhcnRUaW1lPD1hKUsoTSksYi5zb3J0SW5kZXg9Yi5leHBpcmF0aW9uVGltZSxIKEwsYik7ZWxzZSBicmVhaztiPUooTSl9fWZ1bmN0aW9uIFUoYSl7Uz0hMTtUKGEpO2lmKCFSKWlmKG51bGwhPT1KKEwpKVI9ITAsZihWKTtlbHNle3ZhciBiPUooTSk7bnVsbCE9PWImJmcoVSxiLnN0YXJ0VGltZS1hKX19XG5mdW5jdGlvbiBWKGEsYil7Uj0hMTtTJiYoUz0hMSxoKCkpO1E9ITA7dmFyIGM9UDt0cnl7VChiKTtmb3IoTz1KKEwpO251bGwhPT1PJiYoIShPLmV4cGlyYXRpb25UaW1lPmIpfHxhJiYhZXhwb3J0cy51bnN0YWJsZV9zaG91bGRZaWVsZCgpKTspe3ZhciBkPU8uY2FsbGJhY2s7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGQpe08uY2FsbGJhY2s9bnVsbDtQPU8ucHJpb3JpdHlMZXZlbDt2YXIgZT1kKE8uZXhwaXJhdGlvblRpbWU8PWIpO2I9ZXhwb3J0cy51bnN0YWJsZV9ub3coKTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgZT9PLmNhbGxiYWNrPWU6Tz09PUooTCkmJksoTCk7VChiKX1lbHNlIEsoTCk7Tz1KKEwpfWlmKG51bGwhPT1PKXZhciBtPSEwO2Vsc2V7dmFyIG49SihNKTtudWxsIT09biYmZyhVLG4uc3RhcnRUaW1lLWIpO209ITF9cmV0dXJuIG19ZmluYWxseXtPPW51bGwsUD1jLFE9ITF9fXZhciBXPWs7ZXhwb3J0cy51bnN0YWJsZV9JZGxlUHJpb3JpdHk9NTtcbmV4cG9ydHMudW5zdGFibGVfSW1tZWRpYXRlUHJpb3JpdHk9MTtleHBvcnRzLnVuc3RhYmxlX0xvd1ByaW9yaXR5PTQ7ZXhwb3J0cy51bnN0YWJsZV9Ob3JtYWxQcmlvcml0eT0zO2V4cG9ydHMudW5zdGFibGVfUHJvZmlsaW5nPW51bGw7ZXhwb3J0cy51bnN0YWJsZV9Vc2VyQmxvY2tpbmdQcmlvcml0eT0yO2V4cG9ydHMudW5zdGFibGVfY2FuY2VsQ2FsbGJhY2s9ZnVuY3Rpb24oYSl7YS5jYWxsYmFjaz1udWxsfTtleHBvcnRzLnVuc3RhYmxlX2NvbnRpbnVlRXhlY3V0aW9uPWZ1bmN0aW9uKCl7Unx8UXx8KFI9ITAsZihWKSl9O2V4cG9ydHMudW5zdGFibGVfZ2V0Q3VycmVudFByaW9yaXR5TGV2ZWw9ZnVuY3Rpb24oKXtyZXR1cm4gUH07ZXhwb3J0cy51bnN0YWJsZV9nZXRGaXJzdENhbGxiYWNrTm9kZT1mdW5jdGlvbigpe3JldHVybiBKKEwpfTtcbmV4cG9ydHMudW5zdGFibGVfbmV4dD1mdW5jdGlvbihhKXtzd2l0Y2goUCl7Y2FzZSAxOmNhc2UgMjpjYXNlIDM6dmFyIGI9MzticmVhaztkZWZhdWx0OmI9UH12YXIgYz1QO1A9Yjt0cnl7cmV0dXJuIGEoKX1maW5hbGx5e1A9Y319O2V4cG9ydHMudW5zdGFibGVfcGF1c2VFeGVjdXRpb249ZnVuY3Rpb24oKXt9O2V4cG9ydHMudW5zdGFibGVfcmVxdWVzdFBhaW50PVc7ZXhwb3J0cy51bnN0YWJsZV9ydW5XaXRoUHJpb3JpdHk9ZnVuY3Rpb24oYSxiKXtzd2l0Y2goYSl7Y2FzZSAxOmNhc2UgMjpjYXNlIDM6Y2FzZSA0OmNhc2UgNTpicmVhaztkZWZhdWx0OmE9M312YXIgYz1QO1A9YTt0cnl7cmV0dXJuIGIoKX1maW5hbGx5e1A9Y319O1xuZXhwb3J0cy51bnN0YWJsZV9zY2hlZHVsZUNhbGxiYWNrPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1leHBvcnRzLnVuc3RhYmxlX25vdygpO1wib2JqZWN0XCI9PT10eXBlb2YgYyYmbnVsbCE9PWM/KGM9Yy5kZWxheSxjPVwibnVtYmVyXCI9PT10eXBlb2YgYyYmMDxjP2QrYzpkKTpjPWQ7c3dpdGNoKGEpe2Nhc2UgMTp2YXIgZT0tMTticmVhaztjYXNlIDI6ZT0yNTA7YnJlYWs7Y2FzZSA1OmU9MTA3Mzc0MTgyMzticmVhaztjYXNlIDQ6ZT0xRTQ7YnJlYWs7ZGVmYXVsdDplPTVFM31lPWMrZTthPXtpZDpOKyssY2FsbGJhY2s6Yixwcmlvcml0eUxldmVsOmEsc3RhcnRUaW1lOmMsZXhwaXJhdGlvblRpbWU6ZSxzb3J0SW5kZXg6LTF9O2M+ZD8oYS5zb3J0SW5kZXg9YyxIKE0sYSksbnVsbD09PUooTCkmJmE9PT1KKE0pJiYoUz9oKCk6Uz0hMCxnKFUsYy1kKSkpOihhLnNvcnRJbmRleD1lLEgoTCxhKSxSfHxRfHwoUj0hMCxmKFYpKSk7cmV0dXJuIGF9O1xuZXhwb3J0cy51bnN0YWJsZV93cmFwQ2FsbGJhY2s9ZnVuY3Rpb24oYSl7dmFyIGI9UDtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgYz1QO1A9Yjt0cnl7cmV0dXJuIGEuYXBwbHkodGhpcyxhcmd1bWVudHMpfWZpbmFsbHl7UD1jfX19O1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi4xMy4xXG4gKiByZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0Jzt2YXIgYj1cImZ1bmN0aW9uXCI9PT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yLGM9Yj9TeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKTo2MDEwMyxkPWI/U3ltYm9sLmZvcihcInJlYWN0LnBvcnRhbFwiKTo2MDEwNixlPWI/U3ltYm9sLmZvcihcInJlYWN0LmZyYWdtZW50XCIpOjYwMTA3LGY9Yj9TeW1ib2wuZm9yKFwicmVhY3Quc3RyaWN0X21vZGVcIik6NjAxMDgsZz1iP1N5bWJvbC5mb3IoXCJyZWFjdC5wcm9maWxlclwiKTo2MDExNCxoPWI/U3ltYm9sLmZvcihcInJlYWN0LnByb3ZpZGVyXCIpOjYwMTA5LGs9Yj9TeW1ib2wuZm9yKFwicmVhY3QuY29udGV4dFwiKTo2MDExMCxsPWI/U3ltYm9sLmZvcihcInJlYWN0LmFzeW5jX21vZGVcIik6NjAxMTEsbT1iP1N5bWJvbC5mb3IoXCJyZWFjdC5jb25jdXJyZW50X21vZGVcIik6NjAxMTEsbj1iP1N5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKTo2MDExMixwPWI/U3ltYm9sLmZvcihcInJlYWN0LnN1c3BlbnNlXCIpOjYwMTEzLHE9Yj9cblN5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZV9saXN0XCIpOjYwMTIwLHI9Yj9TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKTo2MDExNSx0PWI/U3ltYm9sLmZvcihcInJlYWN0LmxhenlcIik6NjAxMTYsdj1iP1N5bWJvbC5mb3IoXCJyZWFjdC5ibG9ja1wiKTo2MDEyMSx3PWI/U3ltYm9sLmZvcihcInJlYWN0LmZ1bmRhbWVudGFsXCIpOjYwMTE3LHg9Yj9TeW1ib2wuZm9yKFwicmVhY3QucmVzcG9uZGVyXCIpOjYwMTE4LHk9Yj9TeW1ib2wuZm9yKFwicmVhY3Quc2NvcGVcIik6NjAxMTk7XG5mdW5jdGlvbiB6KGEpe2lmKFwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEpe3ZhciB1PWEuJCR0eXBlb2Y7c3dpdGNoKHUpe2Nhc2UgYzpzd2l0Y2goYT1hLnR5cGUsYSl7Y2FzZSBsOmNhc2UgbTpjYXNlIGU6Y2FzZSBnOmNhc2UgZjpjYXNlIHA6cmV0dXJuIGE7ZGVmYXVsdDpzd2l0Y2goYT1hJiZhLiQkdHlwZW9mLGEpe2Nhc2UgazpjYXNlIG46Y2FzZSB0OmNhc2UgcjpjYXNlIGg6cmV0dXJuIGE7ZGVmYXVsdDpyZXR1cm4gdX19Y2FzZSBkOnJldHVybiB1fX19ZnVuY3Rpb24gQShhKXtyZXR1cm4geihhKT09PW19ZXhwb3J0cy5Bc3luY01vZGU9bDtleHBvcnRzLkNvbmN1cnJlbnRNb2RlPW07ZXhwb3J0cy5Db250ZXh0Q29uc3VtZXI9aztleHBvcnRzLkNvbnRleHRQcm92aWRlcj1oO2V4cG9ydHMuRWxlbWVudD1jO2V4cG9ydHMuRm9yd2FyZFJlZj1uO2V4cG9ydHMuRnJhZ21lbnQ9ZTtleHBvcnRzLkxhenk9dDtleHBvcnRzLk1lbW89cjtleHBvcnRzLlBvcnRhbD1kO1xuZXhwb3J0cy5Qcm9maWxlcj1nO2V4cG9ydHMuU3RyaWN0TW9kZT1mO2V4cG9ydHMuU3VzcGVuc2U9cDtleHBvcnRzLmlzQXN5bmNNb2RlPWZ1bmN0aW9uKGEpe3JldHVybiBBKGEpfHx6KGEpPT09bH07ZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlPUE7ZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lcj1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PWt9O2V4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXI9ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT1ofTtleHBvcnRzLmlzRWxlbWVudD1mdW5jdGlvbihhKXtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiZhLiQkdHlwZW9mPT09Y307ZXhwb3J0cy5pc0ZvcndhcmRSZWY9ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT1ufTtleHBvcnRzLmlzRnJhZ21lbnQ9ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT1lfTtleHBvcnRzLmlzTGF6eT1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PXR9O1xuZXhwb3J0cy5pc01lbW89ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT1yfTtleHBvcnRzLmlzUG9ydGFsPWZ1bmN0aW9uKGEpe3JldHVybiB6KGEpPT09ZH07ZXhwb3J0cy5pc1Byb2ZpbGVyPWZ1bmN0aW9uKGEpe3JldHVybiB6KGEpPT09Z307ZXhwb3J0cy5pc1N0cmljdE1vZGU9ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT1mfTtleHBvcnRzLmlzU3VzcGVuc2U9ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT1wfTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlPWZ1bmN0aW9uKGEpe3JldHVyblwic3RyaW5nXCI9PT10eXBlb2YgYXx8XCJmdW5jdGlvblwiPT09dHlwZW9mIGF8fGE9PT1lfHxhPT09bXx8YT09PWd8fGE9PT1mfHxhPT09cHx8YT09PXF8fFwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJihhLiQkdHlwZW9mPT09dHx8YS4kJHR5cGVvZj09PXJ8fGEuJCR0eXBlb2Y9PT1ofHxhLiQkdHlwZW9mPT09a3x8YS4kJHR5cGVvZj09PW58fGEuJCR0eXBlb2Y9PT13fHxhLiQkdHlwZW9mPT09eHx8YS4kJHR5cGVvZj09PXl8fGEuJCR0eXBlb2Y9PT12KX07ZXhwb3J0cy50eXBlT2Y9ejtcbiIsImVudW0gQ29tcGxldGlvblR5cGUge1xuICBTZWFyY2hFbmdpbmVzLFxuICBIaXN0b3J5LFxuICBCb29rbWFya3MsXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBsZXRpb25UeXBlO1xuIiwiZW51bSBUYWJGbGFnIHtcbiAgQ3VycmVudFRhYiA9IFwiJVwiLFxuICBMYXN0VGFiID0gXCIjXCIsXG4gIE5vbmUgPSBcIlwiLFxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJGbGFnO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLCBib2R5LCAqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XFxufVxcblxcbmlucHV0IHtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBsaW5lLWhlaWdodDogMTZweDtcXG59XFxuXFxuYm9keSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4udmltdml4ZW4tY29uc29sZSB7XFxuICBib3R0b206IDA7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29uc29sZS9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTs7RUFFVixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsU0FBUztFQUNULFNBQVM7RUFDVCxVQUFVO0FBQ1pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCwgYm9keSwgKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcblxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbn1cXG5cXG5pbnB1dCB7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XFxufVxcblxcbmJvZHkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnZpbXZpeGVuLWNvbnNvbGUge1xcbiAgYm90dG9tOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIi4uLy4uL2NvbG9yc2NoZW1lL3N0eWxlZFwiO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbW1hbmRCYWNrZ3JvdW5kfTtcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29tbWFuZEZvcmVncm91bmR9O1xuICBkaXNwbGF5OiBmbGV4O1xuYDtcblxuY29uc3QgUHJvbXB0ID0gc3R5bGVkLmlgXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbmA7XG5cbmNvbnN0IElucHV0SW5uZXIgPSBzdHlsZWQuaW5wdXRgXG4gIGJvcmRlcjogbm9uZTtcbiAgZmxleC1ncm93OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbW1hbmRCYWNrZ3JvdW5kfTtcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29tbWFuZEZvcmVncm91bmR9O1xuYDtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcHJvbXB0OiBzdHJpbmc7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIG9uQmx1cjogKGU6IFJlYWN0LkZvY3VzRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHZvaWQ7XG4gIG9uS2V5RG93bjogKGU6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHZvaWQ7XG4gIG9uQ2hhbmdlOiAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHZvaWQ7XG59XG5cbmNvbnN0IElucHV0OiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgaW5wdXQgPSBSZWFjdC51c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpbnB1dD8uY3VycmVudD8uZm9jdXMoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxQcm9tcHQ+e3Byb3BzLnByb21wdH08L1Byb21wdD5cbiAgICAgIDxJbnB1dElubmVyXG4gICAgICAgIHJlZj17aW5wdXR9XG4gICAgICAgIG9uQmx1cj17cHJvcHMub25CbHVyfVxuICAgICAgICBvbktleURvd249e3Byb3BzLm9uS2V5RG93bn1cbiAgICAgICAgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfVxuICAgICAgICB2YWx1ZT17cHJvcHMudmFsdWV9XG4gICAgICAvPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29uc29sZUZyYW1lQ2xpZW50IGZyb20gXCIuLi9jbGllbnRzL0NvbnNvbGVGcmFtZUNsaWVudFwiO1xuXG5jb25zdCB1c2VBdXRvUmVzaXplID0gKCkgPT4ge1xuICBjb25zdCBbcHJldldpZHRoLCBzZXRQcmV2V2lkdGhdID0gUmVhY3QudXNlU3RhdGUoLTEpO1xuICBjb25zdCBbcHJldkhlaWdodCwgc2V0UHJldkhlaWdodF0gPSBSZWFjdC51c2VTdGF0ZSgtMSk7XG5cbiAgY29uc3QgY29uc29sZUZyYW1lQ2xpZW50ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBDb25zb2xlRnJhbWVDbGllbnQoKTtcbiAgfSwgW10pO1xuXG4gIFJlYWN0LnVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgeyBzY3JvbGxXaWR0aDogd2lkdGgsIHNjcm9sbEhlaWdodDogaGVpZ2h0IH0gPVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aW12aXhlbi1jb25zb2xlXCIpITtcbiAgICBjb25zb2xlRnJhbWVDbGllbnQucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgaWYgKHdpZHRoID09PSBwcmV2V2lkdGggJiYgaGVpZ2h0ID09PSBwcmV2SGVpZ2h0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0UHJldldpZHRoKHdpZHRoKTtcbiAgICBzZXRQcmV2SGVpZ2h0KGhlaWdodCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlQXV0b1Jlc2l6ZTtcbiIsImV4cG9ydCBjb25zdCBTSE9XX0NPTU1BTkQgPSBcInNob3cuY29tbWFuZFwiO1xuZXhwb3J0IGNvbnN0IFNIT1dfRVJST1IgPSBcInNob3cuZXJyb3JcIjtcbmV4cG9ydCBjb25zdCBTSE9XX0lORk8gPSBcInNob3cuaW5mb1wiO1xuZXhwb3J0IGNvbnN0IEhJREVfQ09NTUFORCA9IFwiaGlkZS5jb21tYW5kXCI7XG5leHBvcnQgY29uc3QgU0hPV19GSU5EID0gXCJzaG93LmZpbmRcIjtcbmV4cG9ydCBjb25zdCBISURFID0gXCJoaWRlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGlkZUFjdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBISURFO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNob3dDb21tYW5kIHtcbiAgdHlwZTogdHlwZW9mIFNIT1dfQ09NTUFORDtcbiAgdGV4dDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNob3dGaW5kQWN0aW9uIHtcbiAgdHlwZTogdHlwZW9mIFNIT1dfRklORDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaG93RXJyb3JBY3Rpb24ge1xuICB0eXBlOiB0eXBlb2YgU0hPV19FUlJPUjtcbiAgdGV4dDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNob3dJbmZvQWN0aW9uIHtcbiAgdHlwZTogdHlwZW9mIFNIT1dfSU5GTztcbiAgdGV4dDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEhpZGVDb21tYW5kQWN0aW9uIHtcbiAgdHlwZTogdHlwZW9mIEhJREVfQ09NTUFORDtcbn1cblxuZXhwb3J0IHR5cGUgQXBwQWN0aW9uID1cbiAgfCBIaWRlQWN0aW9uXG4gIHwgU2hvd0NvbW1hbmRcbiAgfCBTaG93RmluZEFjdGlvblxuICB8IFNob3dFcnJvckFjdGlvblxuICB8IFNob3dJbmZvQWN0aW9uXG4gIHwgSGlkZUNvbW1hbmRBY3Rpb247XG5cbmNvbnN0IGhpZGUgPSAoKTogSGlkZUFjdGlvbiA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogSElERSxcbiAgfTtcbn07XG5cbmNvbnN0IHNob3dDb21tYW5kID0gKHRleHQ6IHN0cmluZyk6IFNob3dDb21tYW5kID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBTSE9XX0NPTU1BTkQsXG4gICAgdGV4dCxcbiAgfTtcbn07XG5cbmNvbnN0IHNob3dGaW5kID0gKCk6IFNob3dGaW5kQWN0aW9uID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBTSE9XX0ZJTkQsXG4gIH07XG59O1xuXG5jb25zdCBzaG93RXJyb3IgPSAodGV4dDogc3RyaW5nKTogU2hvd0Vycm9yQWN0aW9uID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBTSE9XX0VSUk9SLFxuICAgIHRleHQ6IHRleHQsXG4gIH07XG59O1xuXG5jb25zdCBzaG93SW5mbyA9ICh0ZXh0OiBzdHJpbmcpOiBTaG93SW5mb0FjdGlvbiA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogU0hPV19JTkZPLFxuICAgIHRleHQ6IHRleHQsXG4gIH07XG59O1xuXG5jb25zdCBoaWRlQ29tbWFuZCA9ICgpOiBIaWRlQ29tbWFuZEFjdGlvbiA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogSElERV9DT01NQU5ELFxuICB9O1xufTtcblxuZXhwb3J0IHsgaGlkZSwgc2hvd0NvbW1hbmQsIHNob3dGaW5kLCBzaG93RXJyb3IsIHNob3dJbmZvLCBoaWRlQ29tbWFuZCB9O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU3RhdGUsIGRlZmF1bHRTdGF0ZSB9IGZyb20gXCIuL3JlY3VlclwiO1xuaW1wb3J0IHsgQXBwQWN0aW9uIH0gZnJvbSBcIi4vYWN0aW9uc1wiO1xuXG5leHBvcnQgY29uc3QgQXBwU3RhdGVDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxTdGF0ZT4oZGVmYXVsdFN0YXRlKTtcblxuZXhwb3J0IGNvbnN0IEFwcERpc3BhdGNoQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8XG4gIChhY3Rpb246IEFwcEFjdGlvbikgPT4gdm9pZFxuPigoKSA9PiB7fSk7XG4iLCJpbXBvcnQge1xuICBISURFLFxuICBISURFX0NPTU1BTkQsXG4gIFNIT1dfQ09NTUFORCxcbiAgU0hPV19FUlJPUixcbiAgU0hPV19GSU5ELFxuICBTSE9XX0lORk8sXG4gIEFwcEFjdGlvbixcbn0gZnJvbSBcIi4vYWN0aW9uc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcbiAgbW9kZTogc3RyaW5nO1xuICBtZXNzYWdlVGV4dDogc3RyaW5nO1xuICBjb25zb2xlVGV4dDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdFN0YXRlID0ge1xuICBtb2RlOiBcIlwiLFxuICBtZXNzYWdlVGV4dDogXCJcIixcbiAgY29uc29sZVRleHQ6IFwiXCIsXG59O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGU6IFN0YXRlID0gZGVmYXVsdFN0YXRlLFxuICBhY3Rpb246IEFwcEFjdGlvblxuKTogU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBISURFOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIG1vZGU6IFwiXCIgfTtcbiAgICBjYXNlIFNIT1dfQ09NTUFORDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBtb2RlOiBcImNvbW1hbmRcIixcbiAgICAgICAgY29uc29sZVRleHQ6IGFjdGlvbi50ZXh0LFxuICAgICAgfTtcbiAgICBjYXNlIFNIT1dfRklORDpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBtb2RlOiBcImZpbmRcIiwgY29uc29sZVRleHQ6IFwiXCIgfTtcbiAgICBjYXNlIFNIT1dfRVJST1I6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbW9kZTogXCJlcnJvclwiLCBtZXNzYWdlVGV4dDogYWN0aW9uLnRleHQgfTtcbiAgICBjYXNlIFNIT1dfSU5GTzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBtb2RlOiBcImluZm9cIiwgbWVzc2FnZVRleHQ6IGFjdGlvbi50ZXh0IH07XG4gICAgY2FzZSBISURFX0NPTU1BTkQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbW9kZTpcbiAgICAgICAgICBzdGF0ZS5tb2RlID09PSBcImNvbW1hbmRcIiB8fCBzdGF0ZS5tb2RlID09PSBcImZpbmRcIiA/IFwiXCIgOiBzdGF0ZS5tb2RlLFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iLCJpbXBvcnQgQ29tcGxldGlvblR5cGUgZnJvbSBcIi4uLy4uL3NoYXJlZC9Db21wbGV0aW9uVHlwZVwiO1xuaW1wb3J0IENvbXBsZXRpb25zIGZyb20gXCIuLi9Db21wbGV0aW9uc1wiO1xuXG5leHBvcnQgY29uc3QgSU5JVF9DT01QTEVUSU9OUyA9IFwicmVzZXQuY29tcGxldGlvbnNcIjtcbmV4cG9ydCBjb25zdCBTRVRfQ09NUExFVElPTl9TT1VSQ0UgPSBcInNldC5jb21wbGV0aW9uLnNvdXJjZVwiO1xuZXhwb3J0IGNvbnN0IFNFVF9DT01QTEVUSU9OUyA9IFwic2V0LmNvbXBsZXRpb25zXCI7XG5leHBvcnQgY29uc3QgQ09NUExFVElPTl9ORVhUID0gXCJjb21wbGV0aW9uLm5leHRcIjtcbmV4cG9ydCBjb25zdCBDT01QTEVUSU9OX1BSRVYgPSBcImNvbXBsZXRpb24ucHJldlwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEluaXRDb21wbGV0aW9uQWN0aW9uIHtcbiAgdHlwZTogdHlwZW9mIElOSVRfQ09NUExFVElPTlM7XG4gIGNvbXBsZXRpb25UeXBlczogQ29tcGxldGlvblR5cGVbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZXRDb21wbGV0aW9uU291cmNlQWN0aW9uIHtcbiAgdHlwZTogdHlwZW9mIFNFVF9DT01QTEVUSU9OX1NPVVJDRTtcbiAgY29tcGxldGlvblNvdXJjZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNldENvbXBsZXRpb25zQWN0aW9uIHtcbiAgdHlwZTogdHlwZW9mIFNFVF9DT01QTEVUSU9OUztcbiAgY29tcGxldGlvbnM6IENvbXBsZXRpb25zO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBsZXRpb25OZXh0QWN0aW9uIHtcbiAgdHlwZTogdHlwZW9mIENPTVBMRVRJT05fTkVYVDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb21wbGV0aW9uUHJldkFjdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBDT01QTEVUSU9OX1BSRVY7XG59XG5cbmV4cG9ydCB0eXBlIENvbXBsZXRpb25BY3Rpb24gPVxuICB8IEluaXRDb21wbGV0aW9uQWN0aW9uXG4gIHwgU2V0Q29tcGxldGlvblNvdXJjZUFjdGlvblxuICB8IFNldENvbXBsZXRpb25zQWN0aW9uXG4gIHwgQ29tcGxldGlvbk5leHRBY3Rpb25cbiAgfCBDb21wbGV0aW9uUHJldkFjdGlvbjtcblxuZXhwb3J0IGNvbnN0IGluaXRDb21wbGV0aW9uID0gKFxuICBjb21wbGV0aW9uVHlwZXM6IENvbXBsZXRpb25UeXBlW11cbik6IEluaXRDb21wbGV0aW9uQWN0aW9uID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBJTklUX0NPTVBMRVRJT05TLFxuICAgIGNvbXBsZXRpb25UeXBlcyxcbiAgfTtcbn07XG5leHBvcnQgY29uc3Qgc2V0Q29tcGxldGlvblNvdXJjZSA9IChcbiAgcXVlcnk6IHN0cmluZ1xuKTogU2V0Q29tcGxldGlvblNvdXJjZUFjdGlvbiA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogU0VUX0NPTVBMRVRJT05fU09VUkNFLFxuICAgIGNvbXBsZXRpb25Tb3VyY2U6IHF1ZXJ5LFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHNldENvbXBsZXRpb25zID0gKFxuICBjb21wbGV0aW9uczogQ29tcGxldGlvbnNcbik6IFNldENvbXBsZXRpb25zQWN0aW9uID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBTRVRfQ09NUExFVElPTlMsXG4gICAgY29tcGxldGlvbnMsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0TmV4dCA9ICgpOiBDb21wbGV0aW9uTmV4dEFjdGlvbiA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQ09NUExFVElPTl9ORVhULFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHNlbGVjdFByZXYgPSAoKTogQ29tcGxldGlvblByZXZBY3Rpb24gPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IENPTVBMRVRJT05fUFJFVixcbiAgfTtcbn07XG4iLCJleHBvcnQgZW51bSBDb21tYW5kIHtcbiAgT3BlbiA9IFwib3BlblwiLFxuICBUYWJPcGVuID0gXCJ0YWJvcGVuXCIsXG4gIFdpbmRvd09wZW4gPSBcIndpbm9wZW5cIixcbiAgQnVmZmVyID0gXCJidWZmZXJcIixcbiAgQnVmZmVyRGVsZXRlID0gXCJiZGVsZXRlXCIsXG4gIEJ1ZmZlckRlbGV0ZUZvcmNlID0gXCJiZGVsZXRlIVwiLFxuICBCdWZmZXJzRGVsZXRlID0gXCJiZGVsZXRlc1wiLFxuICBCdWZmZXJzRGVsZXRlRm9yY2UgPSBcImJkZWxldGVzIVwiLFxuICBBZGRCb29rbWFyayA9IFwiYWRkYm9va21hcmtcIixcbiAgUXVpdCA9IFwicXVpdFwiLFxuICBRdWl0QWxsID0gXCJxdWl0YWxsXCIsXG4gIFNldCA9IFwic2V0XCIsXG4gIEhlbHAgPSBcImhlbHBcIixcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFN0YXRlLCBkZWZhdWx0U3RhdGUgfSBmcm9tIFwiLi9yZWR1Y2VyXCI7XG5pbXBvcnQgeyBDb21wbGV0aW9uQWN0aW9uIH0gZnJvbSBcIi4vYWN0aW9uc1wiO1xuXG5leHBvcnQgY29uc3QgQ29tcGxldGlvblN0YXRlQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8U3RhdGU+KGRlZmF1bHRTdGF0ZSk7XG5cbmV4cG9ydCBjb25zdCBDb21wbGV0aW9uRGlzcGF0Y2hDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxcbiAgKGFjdGlvbjogQ29tcGxldGlvbkFjdGlvbikgPT4gdm9pZFxuPigoKSA9PiB7fSk7XG4iLCJpbXBvcnQgQ29tcGxldGlvbnMgZnJvbSBcIi4uL0NvbXBsZXRpb25zXCI7XG5pbXBvcnQgQ29tcGxldGlvblR5cGUgZnJvbSBcIi4uLy4uL3NoYXJlZC9Db21wbGV0aW9uVHlwZVwiO1xuaW1wb3J0IHtcbiAgSU5JVF9DT01QTEVUSU9OUyxcbiAgU0VUX0NPTVBMRVRJT05fU09VUkNFLFxuICBTRVRfQ09NUExFVElPTlMsXG4gIENPTVBMRVRJT05fTkVYVCxcbiAgQ09NUExFVElPTl9QUkVWLFxuICBDb21wbGV0aW9uQWN0aW9uLFxufSBmcm9tIFwiLi9hY3Rpb25zXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xuICBjb21wbGV0aW9uVHlwZXM/OiBDb21wbGV0aW9uVHlwZVtdO1xuICBjb21wbGV0aW9uU291cmNlOiBzdHJpbmc7XG4gIGNvbXBsZXRpb25zOiBDb21wbGV0aW9ucztcbiAgc2VsZWN0OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0U3RhdGUgPSB7XG4gIGNvbXBsZXRpb25UeXBlczogdW5kZWZpbmVkLFxuICBjb21wbGV0aW9uU291cmNlOiBcIlwiLFxuICBjb21wbGV0aW9uczogW10sXG4gIHNlbGVjdDogLTEsXG59O1xuXG5jb25zdCBuZXh0U2VsZWN0aW9uID0gKHN0YXRlOiBTdGF0ZSk6IG51bWJlciA9PiB7XG4gIGNvbnN0IGxlbmd0aCA9IHN0YXRlLmNvbXBsZXRpb25zXG4gICAgLm1hcCgoZykgPT4gZy5pdGVtcy5sZW5ndGgpXG4gICAgLnJlZHVjZSgoeCwgeSkgPT4geCArIHksIDApO1xuICBpZiAobGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIGlmIChzdGF0ZS5zZWxlY3QgPCAwKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgaWYgKHN0YXRlLnNlbGVjdCArIDEgPCBsZW5ndGgpIHtcbiAgICByZXR1cm4gc3RhdGUuc2VsZWN0ICsgMTtcbiAgfVxuICByZXR1cm4gLTE7XG59O1xuXG5jb25zdCBwcmV2U2VsZWN0aW9uID0gKHN0YXRlOiBTdGF0ZSk6IG51bWJlciA9PiB7XG4gIGlmIChzdGF0ZS5jb21wbGV0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgY29uc3QgbGVuZ3RoID0gc3RhdGUuY29tcGxldGlvbnNcbiAgICAubWFwKChnKSA9PiBnLml0ZW1zLmxlbmd0aClcbiAgICAucmVkdWNlKCh4LCB5KSA9PiB4ICsgeSk7XG4gIGlmIChzdGF0ZS5zZWxlY3QgPCAwKSB7XG4gICAgcmV0dXJuIGxlbmd0aCAtIDE7XG4gIH1cbiAgcmV0dXJuIHN0YXRlLnNlbGVjdCAtIDE7XG59O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGU6IFN0YXRlID0gZGVmYXVsdFN0YXRlLFxuICBhY3Rpb246IENvbXBsZXRpb25BY3Rpb25cbik6IFN0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgSU5JVF9DT01QTEVUSU9OUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjb21wbGV0aW9uVHlwZXM6IGFjdGlvbi5jb21wbGV0aW9uVHlwZXMsXG4gICAgICAgIGNvbXBsZXRpb25zOiBbXSxcbiAgICAgICAgc2VsZWN0OiAtMSxcbiAgICAgIH07XG4gICAgY2FzZSBTRVRfQ09NUExFVElPTl9TT1VSQ0U6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY29tcGxldGlvblNvdXJjZTogYWN0aW9uLmNvbXBsZXRpb25Tb3VyY2UsXG4gICAgICAgIHNlbGVjdDogLTEsXG4gICAgICB9O1xuICAgIGNhc2UgU0VUX0NPTVBMRVRJT05TOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNvbXBsZXRpb25zOiBhY3Rpb24uY29tcGxldGlvbnMsXG4gICAgICB9O1xuICAgIGNhc2UgQ09NUExFVElPTl9ORVhUOiB7XG4gICAgICBjb25zdCBzZWxlY3QgPSBuZXh0U2VsZWN0aW9uKHN0YXRlKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzZWxlY3Q6IHNlbGVjdCxcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgQ09NUExFVElPTl9QUkVWOiB7XG4gICAgICBjb25zdCBzZWxlY3QgPSBwcmV2U2VsZWN0aW9uKHN0YXRlKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzZWxlY3Q6IHNlbGVjdCxcbiAgICAgIH07XG4gICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbW1hbmQgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL0NvbW1hbmRcIjtcblxuZXhwb3J0IGNsYXNzIFVua25vd25Db21tYW5kRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBzdXBlcihgdW5rbm93biBjb21tYW5kICcke3ZhbHVlfSdgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tYW5kUGFyc2VyIHtcbiAgcGFyc2UodmFsdWU6IHN0cmluZyk6IENvbW1hbmQge1xuICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgIGNhc2UgXCJvXCI6XG4gICAgICBjYXNlIFwib3BlblwiOlxuICAgICAgICByZXR1cm4gQ29tbWFuZC5PcGVuO1xuICAgICAgY2FzZSBcInRcIjpcbiAgICAgIGNhc2UgXCJ0YWJvcGVuXCI6XG4gICAgICAgIHJldHVybiBDb21tYW5kLlRhYk9wZW47XG4gICAgICBjYXNlIFwid1wiOlxuICAgICAgY2FzZSBcIndpbm9wZW5cIjpcbiAgICAgICAgcmV0dXJuIENvbW1hbmQuV2luZG93T3BlbjtcbiAgICAgIGNhc2UgXCJiXCI6XG4gICAgICBjYXNlIFwiYnVmZmVyXCI6XG4gICAgICAgIHJldHVybiBDb21tYW5kLkJ1ZmZlcjtcbiAgICAgIGNhc2UgXCJiZFwiOlxuICAgICAgY2FzZSBcImJkZWxcIjpcbiAgICAgIGNhc2UgXCJiZGVsZXRlXCI6XG4gICAgICAgIHJldHVybiBDb21tYW5kLkJ1ZmZlckRlbGV0ZTtcbiAgICAgIGNhc2UgXCJiZCFcIjpcbiAgICAgIGNhc2UgXCJiZGVsIVwiOlxuICAgICAgY2FzZSBcImJkZWxldGUhXCI6XG4gICAgICAgIHJldHVybiBDb21tYW5kLkJ1ZmZlckRlbGV0ZUZvcmNlO1xuICAgICAgY2FzZSBcImJkZWxldGVzXCI6XG4gICAgICAgIHJldHVybiBDb21tYW5kLkJ1ZmZlcnNEZWxldGU7XG4gICAgICBjYXNlIFwiYmRlbGV0ZXMhXCI6XG4gICAgICAgIHJldHVybiBDb21tYW5kLkJ1ZmZlcnNEZWxldGVGb3JjZTtcbiAgICAgIGNhc2UgXCJhZGRib29rbWFya1wiOlxuICAgICAgICByZXR1cm4gQ29tbWFuZC5BZGRCb29rbWFyaztcbiAgICAgIGNhc2UgXCJxXCI6XG4gICAgICBjYXNlIFwicXVpdFwiOlxuICAgICAgICByZXR1cm4gQ29tbWFuZC5RdWl0O1xuICAgICAgY2FzZSBcInFhXCI6XG4gICAgICBjYXNlIFwicXVpdGFsbFwiOlxuICAgICAgICByZXR1cm4gQ29tbWFuZC5RdWl0QWxsO1xuICAgICAgY2FzZSBcInNldFwiOlxuICAgICAgICByZXR1cm4gQ29tbWFuZC5TZXQ7XG4gICAgICBjYXNlIFwiaFwiOlxuICAgICAgY2FzZSBcImhlbHBcIjpcbiAgICAgICAgcmV0dXJuIENvbW1hbmQuSGVscDtcbiAgICB9XG4gICAgdGhyb3cgbmV3IFVua25vd25Db21tYW5kRXJyb3IodmFsdWUpO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29sb3JTY2hlbWUgZnJvbSBcIi4uLy4uL3NoYXJlZC9Db2xvclNjaGVtZVwiO1xuXG5leHBvcnQgY29uc3QgQ29sb3JTY2hlbWVDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxDb2xvclNjaGVtZT4oXG4gIENvbG9yU2NoZW1lLlN5c3RlbVxuKTtcblxuZXhwb3J0IGNvbnN0IENvbG9yU2NoZW1lVXBkYXRlQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8XG4gIChjb2xvcnNjaGVtZTogQ29sb3JTY2hlbWUpID0+IHZvaWRcbj4oKCkgPT4ge30pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsImltcG9ydCAqIGFzIG1lc3NhZ2VzIGZyb20gXCIuLi9zaGFyZWQvbWVzc2FnZXNcIjtcbmltcG9ydCBDb25zb2xlIGZyb20gXCIuL2NvbXBvbmVudHMvQ29uc29sZVwiO1xuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgQ29sb3JTY2hlbWVQcm92aWRlciBmcm9tIFwiLi9jb2xvcnNjaGVtZS9wcm92aWRlcnNcIjtcbmltcG9ydCB7IEFwcFByb3ZpZGVyIH0gZnJvbSBcIi4vYXBwL3Byb3ZpZGVyXCI7XG5pbXBvcnQge1xuICB1c2VDb21tYW5kTW9kZSxcbiAgdXNlRmluZE1vZGUsXG4gIHVzZUluZm9NZXNzYWdlLFxuICB1c2VFcnJvck1lc3NhZ2UsXG4gIHVzZUhpZGUsXG59IGZyb20gXCIuL2FwcC9ob29rc1wiO1xuXG5jb25zdCBSb290Q29tcG9uZW50OiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgaGlkZSA9IHVzZUhpZGUoKTtcbiAgY29uc3QgeyBzaG93OiBzaG93Q29tbWFuZCB9ID0gdXNlQ29tbWFuZE1vZGUoKTtcbiAgY29uc3QgeyBzaG93OiBzaG93RmluZCB9ID0gdXNlRmluZE1vZGUoKTtcbiAgY29uc3QgeyBzaG93OiBzaG93RXJyb3IgfSA9IHVzZUVycm9yTWVzc2FnZSgpO1xuICBjb25zdCB7IHNob3c6IHNob3dJbmZvIH0gPSB1c2VJbmZvTWVzc2FnZSgpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgb25NZXNzYWdlID0gYXN5bmMgKG1lc3NhZ2U6IGFueSk6IFByb21pc2U8YW55PiA9PiB7XG4gICAgICBjb25zdCBtc2cgPSBtZXNzYWdlcy52YWx1ZU9mKG1lc3NhZ2UpO1xuICAgICAgc3dpdGNoIChtc2cudHlwZSkge1xuICAgICAgICBjYXNlIG1lc3NhZ2VzLkNPTlNPTEVfU0hPV19DT01NQU5EOlxuICAgICAgICAgIHNob3dDb21tYW5kKG1zZy5jb21tYW5kKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBtZXNzYWdlcy5DT05TT0xFX1NIT1dfRklORDpcbiAgICAgICAgICBzaG93RmluZCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIG1lc3NhZ2VzLkNPTlNPTEVfU0hPV19FUlJPUjpcbiAgICAgICAgICBzaG93RXJyb3IobXNnLnRleHQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIG1lc3NhZ2VzLkNPTlNPTEVfU0hPV19JTkZPOlxuICAgICAgICAgIHNob3dJbmZvKG1zZy50ZXh0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBtZXNzYWdlcy5DT05TT0xFX0hJREU6XG4gICAgICAgICAgaGlkZSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKG9uTWVzc2FnZSk7XG4gICAgY29uc3QgcG9ydCA9IGJyb3dzZXIucnVudGltZS5jb25uZWN0KHVuZGVmaW5lZCwge1xuICAgICAgbmFtZTogXCJ2aW12aXhlbi1jb25zb2xlXCIsXG4gICAgfSk7XG4gICAgcG9ydC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIob25NZXNzYWdlKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiA8Q29uc29sZSAvPjtcbn07XG5cbmNvbnN0IEFwcDogUmVhY3QuRkMgPSAoKSA9PiAoXG4gIDxBcHBQcm92aWRlcj5cbiAgICA8Q29sb3JTY2hlbWVQcm92aWRlcj5cbiAgICAgIDxSb290Q29tcG9uZW50IC8+XG4gICAgPC9Db2xvclNjaGVtZVByb3ZpZGVyPlxuICA8L0FwcFByb3ZpZGVyPlxuKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmltdml4ZW4tY29uc29sZVwiKTtcbiAgUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIHdyYXBwZXIpO1xufSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRmluZFByb21wdCBmcm9tIFwiLi9GaW5kUHJvbXB0XCI7XG5pbXBvcnQgQ29tbWFuZFByb21wdCBmcm9tIFwiLi9Db21tYW5kUHJvbXB0XCI7XG5pbXBvcnQgSW5mb01lc3NhZ2UgZnJvbSBcIi4vSW5mb01lc3NhZ2VcIjtcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSBcIi4vRXJyb3JNZXNzYWdlXCI7XG5pbXBvcnQgeyB1c2VDb2xvclNjaGVtZVJlZnJlc2ggfSBmcm9tIFwiLi4vY29sb3JzY2hlbWUvaG9va3NcIjtcbmltcG9ydCB7XG4gIHVzZUNvbW1hbmRNb2RlLFxuICB1c2VFcnJvck1lc3NhZ2UsXG4gIHVzZUZpbmRNb2RlLFxuICB1c2VJbmZvTWVzc2FnZSxcbn0gZnJvbSBcIi4uL2FwcC9ob29rc1wiO1xuXG5jb25zdCBDb25zb2xlOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgcmVmcmVzaENvbG9yU2NoZW1lID0gdXNlQ29sb3JTY2hlbWVSZWZyZXNoKCk7XG4gIGNvbnN0IHsgdmlzaWJsZTogdmlzaWJsZUNvbW1hbmQsIGluaXRpYWxJbnB1dFZhbHVlIH0gPSB1c2VDb21tYW5kTW9kZSgpO1xuICBjb25zdCB7IHZpc2libGU6IHZpc2libGVGaW5kIH0gPSB1c2VGaW5kTW9kZSgpO1xuICBjb25zdCB7IHZpc2libGU6IHZpc2libGVJbmZvLCBtZXNzYWdlOiBpbmZvTWVzc2FnZSB9ID0gdXNlSW5mb01lc3NhZ2UoKTtcbiAgY29uc3QgeyB2aXNpYmxlOiB2aXNpYmxlRXJyb3IsIG1lc3NhZ2U6IGVycm9yTWVzc2FnZSB9ID0gdXNlRXJyb3JNZXNzYWdlKCk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodmlzaWJsZUNvbW1hbmQgfHwgdmlzaWJsZUZpbmQgfHwgdmlzaWJsZUluZm8gfHwgdmlzaWJsZUVycm9yKSB7XG4gICAgICByZWZyZXNoQ29sb3JTY2hlbWUoKTtcbiAgICB9XG4gIH0sIFt2aXNpYmxlQ29tbWFuZCwgdmlzaWJsZUZpbmQsIHZpc2libGVJbmZvLCB2aXNpYmxlRXJyb3JdKTtcblxuICBpZiAodmlzaWJsZUNvbW1hbmQpIHtcbiAgICByZXR1cm4gPENvbW1hbmRQcm9tcHQgaW5pdGlhbElucHV0VmFsdWU9e2luaXRpYWxJbnB1dFZhbHVlfSAvPjtcbiAgfSBlbHNlIGlmICh2aXNpYmxlRmluZCkge1xuICAgIHJldHVybiA8RmluZFByb21wdCAvPjtcbiAgfSBlbHNlIGlmICh2aXNpYmxlSW5mbykge1xuICAgIHJldHVybiA8SW5mb01lc3NhZ2U+e2luZm9NZXNzYWdlfTwvSW5mb01lc3NhZ2U+O1xuICB9IGVsc2UgaWYgKHZpc2libGVFcnJvcikge1xuICAgIHJldHVybiA8RXJyb3JNZXNzYWdlPntlcnJvck1lc3NhZ2V9PC9FcnJvck1lc3NhZ2U+O1xuICB9XG4gIHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29uc29sZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi9jb25zb2xlL0lucHV0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHVzZUF1dG9SZXNpemUgZnJvbSBcIi4uL2hvb2tzL3VzZUF1dG9SZXNpemVcIjtcbmltcG9ydCB7IHVzZUV4ZWNGaW5kLCB1c2VIaWRlIH0gZnJvbSBcIi4uL2FwcC9ob29rc1wiO1xuXG5jb25zdCBDb25zb2xlV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmF5O1xuYDtcblxuY29uc3QgRmluZFByb21wdDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBoaWRlID0gdXNlSGlkZSgpO1xuICBjb25zdCBleGVjRmluZCA9IHVzZUV4ZWNGaW5kKCk7XG5cbiAgY29uc3Qgb25CbHVyID0gKCkgPT4ge1xuICAgIGhpZGUoKTtcbiAgfTtcblxuICB1c2VBdXRvUmVzaXplKCk7XG5cbiAgY29uc3QgZG9FbnRlciA9IChlOiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCB2YWx1ZSA9IChlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcbiAgICBleGVjRmluZCh2YWx1ZSA9PT0gXCJcIiA/IHVuZGVmaW5lZCA6IHZhbHVlKTtcbiAgICBoaWRlKCk7XG4gIH07XG5cbiAgY29uc3Qgb25LZXlEb3duID0gKGU6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICBjYXNlIFwiRXNjYXBlXCI6XG4gICAgICAgIGhpZGUoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiRW50ZXJcIjpcbiAgICAgICAgZG9FbnRlcihlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG9uQ2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0SW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29uc29sZVdyYXBwZXI+XG4gICAgICA8SW5wdXRcbiAgICAgICAgcHJvbXB0PXtcIi9cIn1cbiAgICAgICAgb25CbHVyPXtvbkJsdXJ9XG4gICAgICAgIG9uS2V5RG93bj17b25LZXlEb3dufVxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgLz5cbiAgICA8L0NvbnNvbGVXcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmluZFByb21wdDtcbiIsImltcG9ydCAqIGFzIG1lc3NhZ2VzIGZyb20gXCIuLi8uLi9zaGFyZWQvbWVzc2FnZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uc29sZUZyYW1lQ2xpZW50IHtcbiAgYXN5bmMgcmVzaXplKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgIHR5cGU6IG1lc3NhZ2VzLkNPTlNPTEVfUkVTSVpFLFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQsXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb21wbGV0aW9uIGZyb20gXCIuL2NvbnNvbGUvQ29tcGxldGlvblwiO1xuaW1wb3J0IElucHV0IGZyb20gXCIuL2NvbnNvbGUvL0lucHV0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgdXNlQ29tcGxldGlvbnMsIHVzZVNlbGVjdENvbXBsZXRpb24gfSBmcm9tIFwiLi4vY29tcGxldGlvbi9ob29rc1wiO1xuaW1wb3J0IHVzZUF1dG9SZXNpemUgZnJvbSBcIi4uL2hvb2tzL3VzZUF1dG9SZXNpemVcIjtcbmltcG9ydCB7IENvbXBsZXRpb25Qcm92aWRlciB9IGZyb20gXCIuLi9jb21wbGV0aW9uL3Byb3ZpZGVyXCI7XG5pbXBvcnQgeyB1c2VFeGVjQ29tbWFuZCwgdXNlSGlkZSB9IGZyb20gXCIuLi9hcHAvaG9va3NcIjtcblxuY29uc3QgQ09NUExFVElPTl9NQVhfSVRFTVMgPSAzMztcblxuY29uc3QgQ29uc29sZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBib3JkZXItdG9wOiAxcHggc29saWQgZ3JheTtcbmA7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGluaXRpYWxJbnB1dFZhbHVlOiBzdHJpbmc7XG59XG5cbmNvbnN0IENvbW1hbmRQcm9tcHRJbm5lcjogUmVhY3QuRkM8UHJvcHM+ID0gKHsgaW5pdGlhbElucHV0VmFsdWUgfSkgPT4ge1xuICBjb25zdCBoaWRlID0gdXNlSGlkZSgpO1xuICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZShpbml0aWFsSW5wdXRWYWx1ZSk7XG4gIGNvbnN0IHsgY29tcGxldGlvbnMsIHVwZGF0ZUNvbXBsZXRpb25zIH0gPSB1c2VDb21wbGV0aW9ucygpO1xuICBjb25zdCB7IHNlbGVjdCwgY3VycmVudFZhbHVlLCBzZWxlY3ROZXh0LCBzZWxlY3RQcmV2IH0gPVxuICAgIHVzZVNlbGVjdENvbXBsZXRpb24oKTtcbiAgY29uc3QgZXhlY0NvbW1hbmQgPSB1c2VFeGVjQ29tbWFuZCgpO1xuXG4gIHVzZUF1dG9SZXNpemUoKTtcblxuICBjb25zdCBvbkJsdXIgPSAoKSA9PiB7XG4gICAgaGlkZSgpO1xuICB9O1xuXG4gIGNvbnN0IGlzQ2FuY2VsS2V5ID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGU6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+XG4gICAgICBlLmtleSA9PT0gXCJFc2NhcGVcIiB8fFxuICAgICAgKGUuY3RybEtleSAmJiBlLmtleSA9PT0gXCJbXCIpIHx8XG4gICAgICAoZS5jdHJsS2V5ICYmIGUua2V5ID09PSBcImNcIiksXG4gICAgW11cbiAgKTtcblxuICBjb25zdCBpc05leHRLZXkgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoZTogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT5cbiAgICAgICghZS5zaGlmdEtleSAmJiBlLmtleSA9PT0gXCJUYWJcIikgfHwgKGUuY3RybEtleSAmJiBlLmtleSA9PT0gXCJuXCIpLFxuICAgIFtdXG4gICk7XG5cbiAgY29uc3QgaXNQcmV2S2V5ID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGU6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+XG4gICAgICAoZS5zaGlmdEtleSAmJiBlLmtleSA9PT0gXCJUYWJcIikgfHwgKGUuY3RybEtleSAmJiBlLmtleSA9PT0gXCJwXCIpLFxuICAgIFtdXG4gICk7XG5cbiAgY29uc3QgaXNFbnRlcktleSA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChlOiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PlxuICAgICAgZS5rZXkgPT09IFwiRW50ZXJcIiB8fCAoZS5jdHJsS2V5ICYmIGUua2V5ID09PSBcIm1cIiksXG4gICAgW11cbiAgKTtcblxuICBjb25zdCBvbktleURvd24gPSAoZTogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGlmIChpc0NhbmNlbEtleShlKSkge1xuICAgICAgaGlkZSgpO1xuICAgIH0gZWxzZSBpZiAoaXNFbnRlcktleShlKSkge1xuICAgICAgY29uc3QgdmFsdWUgPSAoZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XG4gICAgICBleGVjQ29tbWFuZCh2YWx1ZSk7XG4gICAgICBoaWRlKCk7XG4gICAgfSBlbHNlIGlmIChpc05leHRLZXkoZSkpIHtcbiAgICAgIHNlbGVjdE5leHQoKTtcbiAgICB9IGVsc2UgaWYgKGlzUHJldktleShlKSkge1xuICAgICAgc2VsZWN0UHJldigpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG5cbiAgY29uc3Qgb25DaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB0ZXh0ID0gZS50YXJnZXQudmFsdWU7XG4gICAgc2V0SW5wdXRWYWx1ZSh0ZXh0KTtcbiAgfTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHVwZGF0ZUNvbXBsZXRpb25zKGlucHV0VmFsdWUpO1xuICB9LCBbaW5wdXRWYWx1ZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnNvbGVXcmFwcGVyPlxuICAgICAgPENvbXBsZXRpb25cbiAgICAgICAgc2l6ZT17Q09NUExFVElPTl9NQVhfSVRFTVN9XG4gICAgICAgIGNvbXBsZXRpb25zPXtjb21wbGV0aW9uc31cbiAgICAgICAgc2VsZWN0PXtzZWxlY3R9XG4gICAgICAvPlxuICAgICAgPElucHV0XG4gICAgICAgIHByb21wdD17XCI6XCJ9XG4gICAgICAgIG9uQmx1cj17b25CbHVyfVxuICAgICAgICBvbktleURvd249e29uS2V5RG93bn1cbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICB2YWx1ZT17c2VsZWN0ID09IC0xID8gaW5wdXRWYWx1ZSA6IGN1cnJlbnRWYWx1ZX1cbiAgICAgIC8+XG4gICAgPC9Db25zb2xlV3JhcHBlcj5cbiAgKTtcbn07XG5cbmNvbnN0IENvbW1hbmRQcm9tcHQ6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGluaXRpYWxJbnB1dFZhbHVlIH0pID0+IChcbiAgPENvbXBsZXRpb25Qcm92aWRlciBpbml0aWFsSW5wdXRWYWx1ZT17aW5pdGlhbElucHV0VmFsdWV9PlxuICAgIDxDb21tYW5kUHJvbXB0SW5uZXIgaW5pdGlhbElucHV0VmFsdWU9e2luaXRpYWxJbnB1dFZhbHVlfSAvPlxuICA8L0NvbXBsZXRpb25Qcm92aWRlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1hbmRQcm9tcHQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29tcGxldGlvbkl0ZW0gZnJvbSBcIi4vQ29tcGxldGlvbkl0ZW1cIjtcbmltcG9ydCBDb21wbGV0aW9uVGl0bGUgZnJvbSBcIi4vQ29tcGxldGlvblRpdGxlXCI7XG5cbmludGVyZmFjZSBJdGVtIHtcbiAgaWNvbj86IHN0cmluZztcbiAgY2FwdGlvbj86IHN0cmluZztcbiAgdXJsPzogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgR3JvdXAge1xuICBuYW1lOiBzdHJpbmc7XG4gIGl0ZW1zOiBJdGVtW107XG59XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHNlbGVjdDogbnVtYmVyO1xuICBzaXplOiBudW1iZXI7XG4gIGNvbXBsZXRpb25zOiBHcm91cFtdO1xufVxuXG5jb25zdCBDb21wbGV0aW9uOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBzZWxlY3QsIHNpemUsIGNvbXBsZXRpb25zIH0pID0+IHtcbiAgY29uc3QgW3ZpZXdPZmZzZXQsIHNldFZpZXdPZmZzZXRdID0gUmVhY3QudXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtwcmV2U2VsZWN0LCBzZXRQcmV2U2VsZWN0XSA9IFJlYWN0LnVzZVN0YXRlKC0xKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzZWxlY3QgPT09IHByZXZTZWxlY3QpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB2aWV3U2VsZWN0ID0gKCgpID0+IHtcbiAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbXBsZXRpb25zLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICsraW5kZXg7XG4gICAgICAgIGNvbnN0IGcgPSBjb21wbGV0aW9uc1tpXTtcbiAgICAgICAgaWYgKHNlbGVjdCArIGkgKyAxIDwgaW5kZXggKyBnLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiBzZWxlY3QgKyBpICsgMTtcbiAgICAgICAgfVxuICAgICAgICBpbmRleCArPSBnLml0ZW1zLmxlbmd0aDtcbiAgICAgIH1cbiAgICAgIHJldHVybiAtMTtcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgbmV4dFZpZXdPZmZzZXQgPSAoKCkgPT4ge1xuICAgICAgaWYgKHByZXZTZWxlY3QgPCBzZWxlY3QpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KHZpZXdPZmZzZXQsIHZpZXdTZWxlY3QgLSBzaXplICsgMSk7XG4gICAgICB9IGVsc2UgaWYgKHByZXZTZWxlY3QgPiBzZWxlY3QpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWluKHZpZXdPZmZzZXQsIHZpZXdTZWxlY3QpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfSkoKTtcblxuICAgIHNldFByZXZTZWxlY3Qoc2VsZWN0KTtcbiAgICBzZXRWaWV3T2Zmc2V0KG5leHRWaWV3T2Zmc2V0KTtcbiAgfSwgW3NlbGVjdF0pO1xuXG4gIGxldCBpdGVtSW5kZXggPSAwO1xuICBsZXQgdmlld0luZGV4ID0gMDtcbiAgY29uc3QgZ3JvdXBzOiBBcnJheTxKU1guRWxlbWVudD4gPSBbXTtcblxuICBjb21wbGV0aW9ucy5mb3JFYWNoKChncm91cCwgZ3JvdXBJbmRleCkgPT4ge1xuICAgIGNvbnN0IGl0ZW1zID0gW107XG4gICAgY29uc3QgdGl0bGUgPSAoXG4gICAgICA8Q29tcGxldGlvblRpdGxlXG4gICAgICAgIGlkPXtgdGl0bGUtJHtncm91cEluZGV4fWB9XG4gICAgICAgIGtleT17YGdyb3VwLSR7Z3JvdXBJbmRleH1gfVxuICAgICAgICBzaG93bj17dmlld09mZnNldCA8PSB2aWV3SW5kZXggJiYgdmlld0luZGV4IDwgdmlld09mZnNldCArIHNpemV9XG4gICAgICAgIHRpdGxlPXtncm91cC5uYW1lfVxuICAgICAgLz5cbiAgICApO1xuICAgICsrdmlld0luZGV4O1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBncm91cC5pdGVtcykge1xuICAgICAgaXRlbXMucHVzaChcbiAgICAgICAgPENvbXBsZXRpb25JdGVtXG4gICAgICAgICAgc2hvd249e3ZpZXdPZmZzZXQgPD0gdmlld0luZGV4ICYmIHZpZXdJbmRleCA8IHZpZXdPZmZzZXQgKyBzaXplfVxuICAgICAgICAgIGtleT17YGl0ZW0tJHtpdGVtSW5kZXh9YH1cbiAgICAgICAgICBpY29uPXtpdGVtLmljb259XG4gICAgICAgICAgY2FwdGlvbj17aXRlbS5jYXB0aW9ufVxuICAgICAgICAgIHVybD17aXRlbS51cmx9XG4gICAgICAgICAgaGlnaGxpZ2h0PXtpdGVtSW5kZXggPT09IHNlbGVjdH1cbiAgICAgICAgICBhcmlhLXNlbGVjdGVkPXtpdGVtSW5kZXggPT09IHNlbGVjdH1cbiAgICAgICAgICByb2xlPVwibWVudWl0ZW1cIlxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICAgICsrdmlld0luZGV4O1xuICAgICAgKytpdGVtSW5kZXg7XG4gICAgfVxuICAgIGdyb3Vwcy5wdXNoKFxuICAgICAgPGRpdlxuICAgICAgICBrZXk9e2Bncm91cC0ke2dyb3VwSW5kZXh9YH1cbiAgICAgICAgcm9sZT1cImdyb3VwXCJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT17YHRpdGxlLSR7Z3JvdXBJbmRleH1gfVxuICAgICAgPlxuICAgICAgICB7dGl0bGV9XG4gICAgICAgIDx1bD57aXRlbXN9PC91bD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0pO1xuXG4gIHJldHVybiA8ZGl2IHJvbGU9XCJtZW51XCI+e2dyb3Vwc308L2Rpdj47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21wbGV0aW9uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiLi4vLi4vY29sb3JzY2hlbWUvc3R5bGVkXCI7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5saTx7XG4gIHNob3duOiBib29sZWFuO1xuICBpY29uOiBzdHJpbmc7XG4gIGhpZ2hsaWdodDogYm9vbGVhbjtcbn0+YFxuICBiYWNrZ3JvdW5kLWltYWdlOiAkeyh7IGljb24gfSkgPT4gXCJ1cmwoXCIgKyBpY29uICsgXCIpXCJ9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IGhpZ2hsaWdodCwgdGhlbWUgfSkgPT5cbiAgICBoaWdobGlnaHRcbiAgICAgID8gdGhlbWUuY29tcGxldGlvblNlbGVjdGVkQmFja2dyb3VuZFxuICAgICAgOiB0aGVtZS5jb21wbGV0aW9uSXRlbUJhY2tncm91bmR9O1xuICBjb2xvcjogJHsoeyBoaWdobGlnaHQsIHRoZW1lIH0pID0+XG4gICAgaGlnaGxpZ2h0XG4gICAgICA/IHRoZW1lLmNvbXBsZXRpb25TZWxlY3RlZEZvcmVncm91bmRcbiAgICAgIDogdGhlbWUuY29tcGxldGlvbkl0ZW1Gb3JlZ3JvdW5kfTtcbiAgZGlzcGxheTogJHsoeyBzaG93biB9KSA9PiAoc2hvd24gPyBcImRpc3BsYXlcIiA6IFwibm9uZVwiKX07XG4gIHBhZGRpbmctbGVmdDogMS44cmVtO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aGl0ZS1zcGFjZTogcHJlO1xuYDtcblxuY29uc3QgQ2FwdGlvbiA9IHN0eWxlZC5zcGFuYFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA0MCU7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuYDtcblxuY29uc3QgRGVzY3JpcHRpb24gPSBzdHlsZWQuc3BhbmBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb21wbGV0aW9uSXRlbURlc2NyaXB0aW9uRm9yZWdyb3VuZH07XG4gIHdpZHRoOiA2MCU7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuYDtcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgUmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTEVsZW1lbnQ+IHtcbiAgc2hvd246IGJvb2xlYW47XG4gIGhpZ2hsaWdodDogYm9vbGVhbjtcbiAgY2FwdGlvbj86IHN0cmluZztcbiAgdXJsPzogc3RyaW5nO1xuICBpY29uPzogc3RyaW5nO1xufVxuXG5jb25zdCBDb21wbGV0aW9uSXRlbTogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiAoXG4gIDxDb250YWluZXJcbiAgICBpY29uPXtwcm9wcy5pY29uIHx8IFwiXCJ9XG4gICAgYXJpYS1sYWJlbGxlZGJ5PXtgY29tcGxldGlvbi1pdGVtLSR7cHJvcHMuY2FwdGlvbn1gfVxuICAgIHsuLi5wcm9wc31cbiAgPlxuICAgIDxDYXB0aW9uIGlkPXtgY29tcGxldGlvbi1pdGVtLSR7cHJvcHMuY2FwdGlvbn1gfT57cHJvcHMuY2FwdGlvbn08L0NhcHRpb24+XG4gICAgPERlc2NyaXB0aW9uPntwcm9wcy51cmx9PC9EZXNjcmlwdGlvbj5cbiAgPC9Db250YWluZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBDb21wbGV0aW9uSXRlbTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIi4uLy4uL2NvbG9yc2NoZW1lL3N0eWxlZFwiO1xuXG5jb25zdCBMaSA9IHN0eWxlZC5saTx7IHNob3duOiBib29sZWFuIH0+YFxuICBkaXNwbGF5OiAkeyh7IHNob3duIH0pID0+IChzaG93biA/IFwiZGlzcGxheVwiIDogXCJub25lXCIpfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb21wbGV0aW9uVGl0bGVCYWNrZ3JvdW5kfTtcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29tcGxldGlvblRpdGxlRm9yZWdyb3VuZH07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG5gO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MRWxlbWVudD4ge1xuICBzaG93bjogYm9vbGVhbjtcbiAgdGl0bGU6IHN0cmluZztcbn1cblxuY29uc3QgQ29tcGxldGlvblRpdGxlOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IChcbiAgPExpIHsuLi5wcm9wc30+e3Byb3BzLnRpdGxlfTwvTGk+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBDb21wbGV0aW9uVGl0bGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gXCIuL2FjdGlvbnNcIjtcbmltcG9ydCB7IENvbW1hbmQgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL0NvbW1hbmRcIjtcbmltcG9ydCBUYWJGbGFnIGZyb20gXCIuLi8uLi9zaGFyZWQvVGFiRmxhZ1wiO1xuaW1wb3J0IHsgQ29tcGxldGlvblN0YXRlQ29udGV4dCwgQ29tcGxldGlvbkRpc3BhdGNoQ29udGV4dCB9IGZyb20gXCIuL2NvbnRleHRcIjtcbmltcG9ydCBDb21wbGV0aW9uQ2xpZW50IGZyb20gXCIuLi9jbGllbnRzL0NvbXBsZXRpb25DbGllbnRcIjtcbmltcG9ydCBDb21tYW5kTGluZVBhcnNlciwge1xuICBDb21tYW5kTGluZSxcbiAgSW5wdXRQaGFzZSxcbn0gZnJvbSBcIi4uL2NvbW1hbmRsaW5lL0NvbW1hbmRMaW5lUGFyc2VyXCI7XG5pbXBvcnQgeyBVbmtub3duQ29tbWFuZEVycm9yIH0gZnJvbSBcIi4uL2NvbW1hbmRsaW5lL0NvbW1hbmRQYXJzZXJcIjtcbmltcG9ydCBDb21wbGV0aW9ucyBmcm9tIFwiLi4vQ29tcGxldGlvbnNcIjtcbmltcG9ydCBDb21wbGV0aW9uVHlwZSBmcm9tIFwiLi4vLi4vc2hhcmVkL0NvbXBsZXRpb25UeXBlXCI7XG5cbmNvbnN0IGNvbW1hbmREb2NzID0ge1xuICBbQ29tbWFuZC5TZXRdOiBcIlNldCBhIHZhbHVlIG9mIHRoZSBwcm9wZXJ0eVwiLFxuICBbQ29tbWFuZC5PcGVuXTogXCJPcGVuIGEgVVJMIG9yIHNlYXJjaCBieSBrZXl3b3JkcyBpbiBjdXJyZW50IHRhYlwiLFxuICBbQ29tbWFuZC5UYWJPcGVuXTogXCJPcGVuIGEgVVJMIG9yIHNlYXJjaCBieSBrZXl3b3JkcyBpbiBuZXcgdGFiXCIsXG4gIFtDb21tYW5kLldpbmRvd09wZW5dOiBcIk9wZW4gYSBVUkwgb3Igc2VhcmNoIGJ5IGtleXdvcmRzIGluIG5ldyB3aW5kb3dcIixcbiAgW0NvbW1hbmQuQnVmZmVyXTogXCJTZWxlY3QgdGFicyBieSBtYXRjaGVkIGtleXdvcmRzXCIsXG4gIFtDb21tYW5kLkJ1ZmZlckRlbGV0ZV06IFwiQ2xvc2UgYSBjZXJ0YWluIHRhYiBtYXRjaGVkIGJ5IGtleXdvcmRzXCIsXG4gIFtDb21tYW5kLkJ1ZmZlcnNEZWxldGVdOiBcIkNsb3NlIGFsbCB0YWJzIG1hdGNoZWQgYnkga2V5d29yZHNcIixcbiAgW0NvbW1hbmQuUXVpdF06IFwiQ2xvc2UgdGhlIGN1cnJlbnQgdGFiXCIsXG4gIFtDb21tYW5kLlF1aXRBbGxdOiBcIkNsb3NlIGFsbCB0YWJzXCIsXG4gIFtDb21tYW5kLkFkZEJvb2ttYXJrXTogXCJBZGQgY3VycmVudCBwYWdlIHRvIGJvb2ttYXJrc1wiLFxuICBbQ29tbWFuZC5IZWxwXTogXCJPcGVuIFZpbSBWaXhlbiBoZWxwIGluIG5ldyB0YWJcIixcbn07XG5cbmNvbnN0IHByb3BlcnR5RG9jczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHtcbiAgaGludGNoYXJzOiBcImhpbnQgY2hhcmFjdGVycyBvbiBmb2xsb3cgbW9kZVwiLFxuICBzbW9vdGhzY3JvbGw6IFwic21vb3RoIHNjcm9sbFwiLFxuICBjb21wbGV0ZTogXCJ3aGljaCBhcmUgY29tcGxldGVkIGF0IHRoZSBvcGVuIHBhZ2VcIixcbiAgY29sb3JzY2hlbWU6IFwiY29sb3Igc2NoZW1lIG9mIHRoZSBjb25zb2xlXCIsXG59O1xuXG5jb25zdCBjb21wbGV0aW9uQ2xpZW50ID0gbmV3IENvbXBsZXRpb25DbGllbnQoKTtcblxuY29uc3QgdXNlRGVsYXllZENhbGxiYWNrID0gPFQgZXh0ZW5kcyB1bmtub3duLCBVIGV4dGVuZHMgdW5rbm93bj4oXG4gIGNhbGxiYWNrOiAoYXJnMTogVCwgYXJnMjogVSkgPT4gdm9pZCxcbiAgdGltZW91dDogbnVtYmVyXG4pID0+IHtcbiAgY29uc3QgW3RpbWVyLCBzZXRUaW1lcl0gPSBSZWFjdC51c2VTdGF0ZTxcbiAgICBSZXR1cm5UeXBlPHR5cGVvZiBzZXRUaW1lb3V0PiB8IHVuZGVmaW5lZFxuICA+KCk7XG4gIGNvbnN0IFtlbmFibGVkLCBzZXRFbmFibGVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBlbmFibGVEZWxheSA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRFbmFibGVkKHRydWUpO1xuICB9LCBbc2V0RW5hYmxlZF0pO1xuXG4gIGNvbnN0IGRlbGF5ZWRDYWxsYmFjayA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChhcmcxOiBULCBhcmcyOiBVKSA9PiB7XG4gICAgICBpZiAoZW5hYmxlZCkge1xuICAgICAgICBpZiAodHlwZW9mIHRpbWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGNhbGxiYWNrKGFyZzEsIGFyZzIpO1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lciEpO1xuICAgICAgICAgIHNldFRpbWVyKHVuZGVmaW5lZCk7XG4gICAgICAgIH0sIHRpbWVvdXQpO1xuICAgICAgICBzZXRUaW1lcihpZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjayhhcmcxLCBhcmcyKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtlbmFibGVkLCB0aW1lcl1cbiAgKTtcblxuICByZXR1cm4geyBlbmFibGVEZWxheSwgZGVsYXllZENhbGxiYWNrIH07XG59O1xuXG5jb25zdCBnZXRDb21tYW5kQ29tcGxldGlvbnMgPSBhc3luYyAocXVlcnk6IHN0cmluZyk6IFByb21pc2U8Q29tcGxldGlvbnM+ID0+IHtcbiAgY29uc3QgaXRlbXMgPSBPYmplY3QuZW50cmllcyhjb21tYW5kRG9jcylcbiAgICAuZmlsdGVyKChbbmFtZV0pID0+IG5hbWUuc3RhcnRzV2l0aChxdWVyeSkpXG4gICAgLm1hcCgoW25hbWUsIGRvY10pID0+ICh7XG4gICAgICBjYXB0aW9uOiBuYW1lLFxuICAgICAgY29udGVudDogbmFtZSxcbiAgICAgIHVybDogZG9jLFxuICAgIH0pKTtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICBuYW1lOiBcIkNvbnNvbGUgQ29tbWFuZFwiLFxuICAgICAgaXRlbXMsXG4gICAgfSxcbiAgXTtcbn07XG5cbmNvbnN0IGdldE9wZW5Db21wbGV0aW9ucyA9IGFzeW5jIChcbiAgY29tbWFuZDogc3RyaW5nLFxuICBxdWVyeTogc3RyaW5nLFxuICBjb21wbGV0aW9uVHlwZXM6IENvbXBsZXRpb25UeXBlW11cbik6IFByb21pc2U8Q29tcGxldGlvbnM+ID0+IHtcbiAgY29uc3QgY29tcGxldGlvbnM6IENvbXBsZXRpb25zID0gW107XG4gIGZvciAoY29uc3QgdHlwZSBvZiBjb21wbGV0aW9uVHlwZXMpIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgQ29tcGxldGlvblR5cGUuU2VhcmNoRW5naW5lczoge1xuICAgICAgICBjb25zdCBpdGVtcyA9IGF3YWl0IGNvbXBsZXRpb25DbGllbnQucmVxdWVzdFNlYXJjaEVuZ2luZXMocXVlcnkpO1xuICAgICAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY29tcGxldGlvbnMucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJTZWFyY2ggRW5naW5lc1wiLFxuICAgICAgICAgIGl0ZW1zOiBpdGVtcy5tYXAoKGtleSkgPT4gKHtcbiAgICAgICAgICAgIGNhcHRpb246IGtleS50aXRsZSxcbiAgICAgICAgICAgIGNvbnRlbnQ6IGNvbW1hbmQgKyBcIiBcIiArIGtleS50aXRsZSxcbiAgICAgICAgICB9KSksXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgQ29tcGxldGlvblR5cGUuSGlzdG9yeToge1xuICAgICAgICBjb25zdCBpdGVtcyA9IGF3YWl0IGNvbXBsZXRpb25DbGllbnQucmVxdWVzdEhpc3RvcnkocXVlcnkpO1xuICAgICAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY29tcGxldGlvbnMucHVzaCh7XG4gICAgICAgICAgbmFtZTogXCJIaXN0b3J5XCIsXG4gICAgICAgICAgaXRlbXM6IGl0ZW1zLm1hcCgoaXRlbSkgPT4gKHtcbiAgICAgICAgICAgIGNhcHRpb246IGl0ZW0udGl0bGUsXG4gICAgICAgICAgICBjb250ZW50OiBjb21tYW5kICsgXCIgXCIgKyBpdGVtLnVybCxcbiAgICAgICAgICAgIHVybDogaXRlbS51cmwsXG4gICAgICAgICAgfSkpLFxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIENvbXBsZXRpb25UeXBlLkJvb2ttYXJrczoge1xuICAgICAgICBjb25zdCBpdGVtcyA9IGF3YWl0IGNvbXBsZXRpb25DbGllbnQucmVxdWVzdEJvb2ttYXJrcyhxdWVyeSk7XG4gICAgICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb21wbGV0aW9ucy5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBcIkJvb2ttYXJrc1wiLFxuICAgICAgICAgIGl0ZW1zOiBpdGVtcy5tYXAoKGl0ZW0pID0+ICh7XG4gICAgICAgICAgICBjYXB0aW9uOiBpdGVtLnRpdGxlLFxuICAgICAgICAgICAgY29udGVudDogY29tbWFuZCArIFwiIFwiICsgaXRlbS51cmwsXG4gICAgICAgICAgICB1cmw6IGl0ZW0udXJsLFxuICAgICAgICAgIH0pKSxcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gY29tcGxldGlvbnM7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0VGFiQ29tcGxldGlvbnMgPSBhc3luYyAoXG4gIGNvbW1hbmQ6IHN0cmluZyxcbiAgcXVlcnk6IHN0cmluZyxcbiAgZXhjbHVkZVBpbm5lZDogYm9vbGVhblxuKTogUHJvbWlzZTxDb21wbGV0aW9ucz4gPT4ge1xuICBjb25zdCBpdGVtcyA9IGF3YWl0IGNvbXBsZXRpb25DbGllbnQucmVxdWVzdFRhYnMocXVlcnksIGV4Y2x1ZGVQaW5uZWQpO1xuICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICBuYW1lOiBcIkJ1ZmZlcnNcIixcbiAgICAgIGl0ZW1zOiBpdGVtcy5tYXAoKGl0ZW0pID0+ICh7XG4gICAgICAgIGNvbnRlbnQ6IGNvbW1hbmQgKyBcIiBcIiArIGl0ZW0udXJsLFxuICAgICAgICBjYXB0aW9uOiBgJHtpdGVtLmluZGV4fTogJHtcbiAgICAgICAgICBpdGVtLmZsYWcgIT0gVGFiRmxhZy5Ob25lID8gaXRlbS5mbGFnIDogXCIgXCJcbiAgICAgICAgfSAke2l0ZW0udGl0bGV9YCxcbiAgICAgICAgdXJsOiBpdGVtLnVybCxcbiAgICAgICAgaWNvbjogaXRlbS5mYXZpY29uVXJsLFxuICAgICAgfSkpLFxuICAgIH0sXG4gIF07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UHJvcGVydHlDb21wbGV0aW9ucyA9IGFzeW5jIChcbiAgY29tbWFuZDogc3RyaW5nLFxuICBxdWVyeTogc3RyaW5nXG4pOiBQcm9taXNlPENvbXBsZXRpb25zPiA9PiB7XG4gIGNvbnN0IHByb3BlcnRpZXMgPSBhd2FpdCBjb21wbGV0aW9uQ2xpZW50LmdldFByb3BlcnRpZXMoKTtcbiAgY29uc3QgaXRlbXMgPSBwcm9wZXJ0aWVzXG4gICAgLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgZGVzYyA9IHByb3BlcnR5RG9jc1tpdGVtLm5hbWVdIHx8IFwiXCI7XG4gICAgICBpZiAoaXRlbS50eXBlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNhcHRpb246IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgIGNvbnRlbnQ6IGNvbW1hbmQgKyBcIiBcIiArIGl0ZW0ubmFtZSxcbiAgICAgICAgICAgIHVybDogXCJFbmFibGUgXCIgKyBkZXNjLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2FwdGlvbjogXCJub1wiICsgaXRlbS5uYW1lLFxuICAgICAgICAgICAgY29udGVudDogY29tbWFuZCArIFwiIG5vXCIgKyBpdGVtLm5hbWUsXG4gICAgICAgICAgICB1cmw6IFwiRGlzYWJsZSBcIiArIGRlc2MsXG4gICAgICAgICAgfSxcbiAgICAgICAgXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2FwdGlvbjogaXRlbS5uYW1lLFxuICAgICAgICAgICAgY29udGVudDogY29tbWFuZCArIFwiIFwiICsgaXRlbS5uYW1lLFxuICAgICAgICAgICAgdXJsOiBcIlNldCBcIiArIGRlc2MsXG4gICAgICAgICAgfSxcbiAgICAgICAgXTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC5yZWR1Y2UoKGFjYywgdmFsKSA9PiBhY2MuY29uY2F0KHZhbCksIFtdKVxuICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uY2FwdGlvbi5zdGFydHNXaXRoKHF1ZXJ5KSk7XG4gIHJldHVybiBbeyBuYW1lOiBcIlByb3BlcnRpZXNcIiwgaXRlbXMgfV07XG59O1xuXG5leHBvcnQgY29uc3QgdXNlQ29tcGxldGlvbnMgPSAoKSA9PiB7XG4gIGNvbnN0IHN0YXRlID0gUmVhY3QudXNlQ29udGV4dChDb21wbGV0aW9uU3RhdGVDb250ZXh0KTtcbiAgY29uc3QgZGlzcGF0Y2ggPSBSZWFjdC51c2VDb250ZXh0KENvbXBsZXRpb25EaXNwYXRjaENvbnRleHQpO1xuICBjb25zdCBjb21tYW5kTGluZVBhcnNlciA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gbmV3IENvbW1hbmRMaW5lUGFyc2VyKCksIFtdKTtcblxuICBjb25zdCB1cGRhdGVDb21wbGV0aW9ucyA9IFJlYWN0LnVzZUNhbGxiYWNrKChzb3VyY2U6IHN0cmluZykgPT4ge1xuICAgIGRpc3BhdGNoKGFjdGlvbnMuc2V0Q29tcGxldGlvblNvdXJjZShzb3VyY2UpKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGluaXRDb21wbGV0aW9uID0gUmVhY3QudXNlQ2FsbGJhY2soKHNvdXJjZTogc3RyaW5nKSA9PiB7XG4gICAgY29tcGxldGlvbkNsaWVudC5nZXRDb21wbGV0aW9uVHlwZXMoKS50aGVuKChjb21wbGV0aW9uVHlwZXMpID0+IHtcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMuaW5pdENvbXBsZXRpb24oY29tcGxldGlvblR5cGVzKSk7XG4gICAgICBkaXNwYXRjaChhY3Rpb25zLnNldENvbXBsZXRpb25Tb3VyY2Uoc291cmNlKSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCB7IGRlbGF5ZWRDYWxsYmFjazogcXVlcnlDb21wbGV0aW9ucywgZW5hYmxlRGVsYXkgfSA9IHVzZURlbGF5ZWRDYWxsYmFjayhcbiAgICBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAgICh0ZXh0OiBzdHJpbmcsIGNvbXBsZXRpb25UeXBlcz86IENvbXBsZXRpb25UeXBlW10pID0+IHtcbiAgICAgICAgY29uc3QgcGhhc2UgPSBjb21tYW5kTGluZVBhcnNlci5pbnB1dFBoYXNlKHRleHQpO1xuICAgICAgICBpZiAocGhhc2UgPT09IElucHV0UGhhc2UuT25Db21tYW5kKSB7XG4gICAgICAgICAgZ2V0Q29tbWFuZENvbXBsZXRpb25zKHRleHQpLnRoZW4oKGNvbXBsZXRpb25zKSA9PlxuICAgICAgICAgICAgZGlzcGF0Y2goYWN0aW9ucy5zZXRDb21wbGV0aW9ucyhjb21wbGV0aW9ucykpXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgY21kOiBDb21tYW5kTGluZSB8IG51bGwgPSBudWxsO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjbWQgPSBjb21tYW5kTGluZVBhcnNlci5wYXJzZSh0ZXh0KTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIFVua25vd25Db21tYW5kRXJyb3IpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBzd2l0Y2ggKGNtZD8uY29tbWFuZCkge1xuICAgICAgICAgICAgY2FzZSBDb21tYW5kLk9wZW46XG4gICAgICAgICAgICBjYXNlIENvbW1hbmQuVGFiT3BlbjpcbiAgICAgICAgICAgIGNhc2UgQ29tbWFuZC5XaW5kb3dPcGVuOlxuICAgICAgICAgICAgICBpZiAoIWNvbXBsZXRpb25UeXBlcykge1xuICAgICAgICAgICAgICAgIGluaXRDb21wbGV0aW9uKHRleHQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGdldE9wZW5Db21wbGV0aW9ucyhjbWQuY29tbWFuZCwgY21kLmFyZ3MsIGNvbXBsZXRpb25UeXBlcykudGhlbihcbiAgICAgICAgICAgICAgICAoY29tcGxldGlvbnMpID0+IGRpc3BhdGNoKGFjdGlvbnMuc2V0Q29tcGxldGlvbnMoY29tcGxldGlvbnMpKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQ29tbWFuZC5CdWZmZXI6XG4gICAgICAgICAgICAgIGdldFRhYkNvbXBsZXRpb25zKGNtZC5jb21tYW5kLCBjbWQuYXJncywgZmFsc2UpLnRoZW4oXG4gICAgICAgICAgICAgICAgKGNvbXBsZXRpb25zKSA9PiBkaXNwYXRjaChhY3Rpb25zLnNldENvbXBsZXRpb25zKGNvbXBsZXRpb25zKSlcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIENvbW1hbmQuQnVmZmVyRGVsZXRlOlxuICAgICAgICAgICAgY2FzZSBDb21tYW5kLkJ1ZmZlcnNEZWxldGU6XG4gICAgICAgICAgICAgIGdldFRhYkNvbXBsZXRpb25zKGNtZC5jb21tYW5kLCBjbWQuYXJncywgdHJ1ZSkudGhlbihcbiAgICAgICAgICAgICAgICAoY29tcGxldGlvbnMpID0+IGRpc3BhdGNoKGFjdGlvbnMuc2V0Q29tcGxldGlvbnMoY29tcGxldGlvbnMpKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQ29tbWFuZC5CdWZmZXJEZWxldGVGb3JjZTpcbiAgICAgICAgICAgIGNhc2UgQ29tbWFuZC5CdWZmZXJzRGVsZXRlRm9yY2U6XG4gICAgICAgICAgICAgIGdldFRhYkNvbXBsZXRpb25zKGNtZC5jb21tYW5kLCBjbWQuYXJncywgZmFsc2UpLnRoZW4oXG4gICAgICAgICAgICAgICAgKGNvbXBsZXRpb25zKSA9PiBkaXNwYXRjaChhY3Rpb25zLnNldENvbXBsZXRpb25zKGNvbXBsZXRpb25zKSlcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIENvbW1hbmQuU2V0OlxuICAgICAgICAgICAgICBnZXRQcm9wZXJ0eUNvbXBsZXRpb25zKGNtZC5jb21tYW5kLCBjbWQuYXJncykudGhlbihcbiAgICAgICAgICAgICAgICAoY29tcGxldGlvbnMpID0+IGRpc3BhdGNoKGFjdGlvbnMuc2V0Q29tcGxldGlvbnMoY29tcGxldGlvbnMpKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgZW5hYmxlRGVsYXkoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtkaXNwYXRjaF1cbiAgICApLFxuICAgIDEwMFxuICApO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcXVlcnlDb21wbGV0aW9ucyhzdGF0ZS5jb21wbGV0aW9uU291cmNlLCBzdGF0ZS5jb21wbGV0aW9uVHlwZXMpO1xuICB9LCBbc3RhdGUuY29tcGxldGlvblNvdXJjZSwgc3RhdGUuY29tcGxldGlvblR5cGVzXSk7XG5cbiAgcmV0dXJuIHtcbiAgICBjb21wbGV0aW9uczogc3RhdGUuY29tcGxldGlvbnMsXG4gICAgdXBkYXRlQ29tcGxldGlvbnMsXG4gICAgaW5pdENvbXBsZXRpb24sXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgdXNlU2VsZWN0Q29tcGxldGlvbiA9ICgpID0+IHtcbiAgY29uc3Qgc3RhdGUgPSBSZWFjdC51c2VDb250ZXh0KENvbXBsZXRpb25TdGF0ZUNvbnRleHQpO1xuICBjb25zdCBkaXNwYXRjaCA9IFJlYWN0LnVzZUNvbnRleHQoQ29tcGxldGlvbkRpc3BhdGNoQ29udGV4dCk7XG4gIGNvbnN0IG5leHQgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoKSA9PiBkaXNwYXRjaChhY3Rpb25zLnNlbGVjdE5leHQoKSksXG4gICAgW2Rpc3BhdGNoXVxuICApO1xuICBjb25zdCBwcmV2ID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKCkgPT4gZGlzcGF0Y2goYWN0aW9ucy5zZWxlY3RQcmV2KCkpLFxuICAgIFtkaXNwYXRjaF1cbiAgKTtcbiAgY29uc3QgY3VycmVudFZhbHVlID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKHN0YXRlLnNlbGVjdCA8IDApIHtcbiAgICAgIHJldHVybiBzdGF0ZS5jb21wbGV0aW9uU291cmNlO1xuICAgIH1cbiAgICBjb25zdCBpdGVtcyA9IHN0YXRlLmNvbXBsZXRpb25zLm1hcCgoZykgPT4gZy5pdGVtcykuZmxhdCgpO1xuICAgIHJldHVybiBpdGVtc1tzdGF0ZS5zZWxlY3RdPy5jb250ZW50IHx8IFwiXCI7XG4gIH0sIFtzdGF0ZS5jb21wbGV0aW9uU291cmNlLCBzdGF0ZS5zZWxlY3RdKTtcblxuICByZXR1cm4ge1xuICAgIHNlbGVjdDogc3RhdGUuc2VsZWN0LFxuICAgIGN1cnJlbnRWYWx1ZSxcbiAgICBzZWxlY3ROZXh0OiBuZXh0LFxuICAgIHNlbGVjdFByZXY6IHByZXYsXG4gIH07XG59O1xuIiwiaW1wb3J0ICogYXMgbWVzc2FnZXMgZnJvbSBcIi4uLy4uL3NoYXJlZC9tZXNzYWdlc1wiO1xuaW1wb3J0IHtcbiAgQ29uc29sZUdldENvbXBsZXRpb25UeXBlc1Jlc3BvbnNlLFxuICBDb25zb2xlR2V0UHJvcGVydGllc1Jlc3BvbnNlLFxuICBDb25zb2xlUmVxdWVzdEJvb2ttYXJrc1Jlc3BvbnNlLFxuICBDb25zb2xlUmVxdWVzdEhpc3RvcnlSZXNwb25zZSxcbiAgQ29uc29sZVJlcXVlc3RTZWFyY2hFbmdpbmVzUmVzcG9uc2UsXG4gIENvbnNvbGVSZXF1ZXN0VGFic1Jlc3BvbnNlLFxufSBmcm9tIFwiLi4vLi4vc2hhcmVkL21lc3NhZ2VzXCI7XG5pbXBvcnQgQ29tcGxldGlvblR5cGUgZnJvbSBcIi4uLy4uL3NoYXJlZC9Db21wbGV0aW9uVHlwZVwiO1xuaW1wb3J0IFRhYkZsYWcgZnJvbSBcIi4uLy4uL3NoYXJlZC9UYWJGbGFnXCI7XG5cbmV4cG9ydCB0eXBlIFNlYXJjaEVuZ2luZXMgPSB7XG4gIHRpdGxlOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBCb29rbWFya0l0ZW0gPSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHVybDogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgSGlzdG9yeUl0ZW0gPSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHVybDogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgVGFiSXRlbSA9IHtcbiAgaW5kZXg6IG51bWJlcjtcbiAgZmxhZzogVGFiRmxhZztcbiAgdGl0bGU6IHN0cmluZztcbiAgdXJsOiBzdHJpbmc7XG4gIGZhdmljb25Vcmw/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBQcm9wZXJ0eSA9IHtcbiAgbmFtZTogc3RyaW5nO1xuICB0eXBlOiBcInN0cmluZ1wiIHwgXCJib29sZWFuXCIgfCBcIm51bWJlclwiO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcGxldGlvbkNsaWVudCB7XG4gIGFzeW5jIGdldENvbXBsZXRpb25UeXBlcygpOiBQcm9taXNlPENvbXBsZXRpb25UeXBlW10+IHtcbiAgICBjb25zdCByZXNwID0gKGF3YWl0IGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICB0eXBlOiBtZXNzYWdlcy5DT05TT0xFX0dFVF9DT01QTEVUSU9OX1RZUEVTLFxuICAgIH0pKSBhcyBDb25zb2xlR2V0Q29tcGxldGlvblR5cGVzUmVzcG9uc2U7XG4gICAgcmV0dXJuIHJlc3A7XG4gIH1cblxuICBhc3luYyByZXF1ZXN0U2VhcmNoRW5naW5lcyhxdWVyeTogc3RyaW5nKTogUHJvbWlzZTxTZWFyY2hFbmdpbmVzW10+IHtcbiAgICBjb25zdCByZXNwID0gKGF3YWl0IGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICB0eXBlOiBtZXNzYWdlcy5DT05TT0xFX1JFUVVFU1RfU0VBUkNIX0VOR0lORVNfTUVTU0FHRSxcbiAgICAgIHF1ZXJ5LFxuICAgIH0pKSBhcyBDb25zb2xlUmVxdWVzdFNlYXJjaEVuZ2luZXNSZXNwb25zZTtcbiAgICByZXR1cm4gcmVzcDtcbiAgfVxuXG4gIGFzeW5jIHJlcXVlc3RCb29rbWFya3MocXVlcnk6IHN0cmluZyk6IFByb21pc2U8Qm9va21hcmtJdGVtW10+IHtcbiAgICBjb25zdCByZXNwID0gKGF3YWl0IGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICB0eXBlOiBtZXNzYWdlcy5DT05TT0xFX1JFUVVFU1RfQk9PS01BUktTLFxuICAgICAgcXVlcnksXG4gICAgfSkpIGFzIENvbnNvbGVSZXF1ZXN0Qm9va21hcmtzUmVzcG9uc2U7XG4gICAgcmV0dXJuIHJlc3A7XG4gIH1cblxuICBhc3luYyByZXF1ZXN0SGlzdG9yeShxdWVyeTogc3RyaW5nKTogUHJvbWlzZTxIaXN0b3J5SXRlbVtdPiB7XG4gICAgY29uc3QgcmVzcCA9IChhd2FpdCBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgdHlwZTogbWVzc2FnZXMuQ09OU09MRV9SRVFVRVNUX0hJU1RPUlksXG4gICAgICBxdWVyeSxcbiAgICB9KSkgYXMgQ29uc29sZVJlcXVlc3RIaXN0b3J5UmVzcG9uc2U7XG4gICAgcmV0dXJuIHJlc3A7XG4gIH1cblxuICBhc3luYyByZXF1ZXN0VGFicyhxdWVyeTogc3RyaW5nLCBleGNsdWRlUGlubmVkOiBib29sZWFuKTogUHJvbWlzZTxUYWJJdGVtW10+IHtcbiAgICBjb25zdCByZXNwID0gKGF3YWl0IGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICB0eXBlOiBtZXNzYWdlcy5DT05TT0xFX1JFUVVFU1RfVEFCUyxcbiAgICAgIHF1ZXJ5LFxuICAgICAgZXhjbHVkZVBpbm5lZCxcbiAgICB9KSkgYXMgQ29uc29sZVJlcXVlc3RUYWJzUmVzcG9uc2U7XG4gICAgcmV0dXJuIHJlc3A7XG4gIH1cblxuICBhc3luYyBnZXRQcm9wZXJ0aWVzKCk6IFByb21pc2U8UHJvcGVydHlbXT4ge1xuICAgIGNvbnN0IHJlc3AgPSAoYXdhaXQgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgIHR5cGU6IG1lc3NhZ2VzLkNPTlNPTEVfR0VUX1BST1BFUlRJRVMsXG4gICAgfSkpIGFzIENvbnNvbGVHZXRQcm9wZXJ0aWVzUmVzcG9uc2U7XG4gICAgcmV0dXJuIHJlc3A7XG4gIH1cbn1cbiIsImltcG9ydCBDb21tYW5kUGFyc2VyIGZyb20gXCIuL0NvbW1hbmRQYXJzZXJcIjtcbmltcG9ydCB7IENvbW1hbmQgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL0NvbW1hbmRcIjtcblxuZXhwb3J0IHR5cGUgQ29tbWFuZExpbmUgPSB7XG4gIHJlYWRvbmx5IGNvbW1hbmQ6IENvbW1hbmQ7XG4gIHJlYWRvbmx5IGFyZ3M6IHN0cmluZztcbn07XG5cbmV4cG9ydCBlbnVtIElucHV0UGhhc2Uge1xuICBPbkNvbW1hbmQsXG4gIE9uQXJncyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbWFuZExpbmVQYXJzZXIge1xuICBwcml2YXRlIGNvbW1hbmRQYXJzZXI6IENvbW1hbmRQYXJzZXIgPSBuZXcgQ29tbWFuZFBhcnNlcigpO1xuXG4gIGlucHV0UGhhc2UobGluZTogc3RyaW5nKTogSW5wdXRQaGFzZSB7XG4gICAgbGluZSA9IGxpbmUudHJpbUxlZnQoKTtcbiAgICBpZiAobGluZS5sZW5ndGggPT0gMCkge1xuICAgICAgcmV0dXJuIElucHV0UGhhc2UuT25Db21tYW5kO1xuICAgIH1cbiAgICBjb25zdCBjb21tYW5kID0gbGluZS5zcGxpdCgvXFxzKy8sIDEpWzBdO1xuICAgIGlmIChsaW5lLmxlbmd0aCA9PSBjb21tYW5kLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIElucHV0UGhhc2UuT25Db21tYW5kO1xuICAgIH1cbiAgICByZXR1cm4gSW5wdXRQaGFzZS5PbkFyZ3M7XG4gIH1cblxuICBwYXJzZShsaW5lOiBzdHJpbmcpOiBDb21tYW5kTGluZSB7XG4gICAgY29uc3QgdHJpbUxlZnQgPSBsaW5lLnRyaW1MZWZ0KCk7XG4gICAgY29uc3QgY29tbWFuZCA9IHRyaW1MZWZ0LnNwbGl0KC9cXHMrLywgMSlbMF07XG4gICAgY29uc3QgYXJncyA9IHRyaW1MZWZ0LnNsaWNlKGNvbW1hbmQubGVuZ3RoKS50cmltTGVmdCgpO1xuICAgIHJldHVybiB7XG4gICAgICBjb21tYW5kOiB0aGlzLmNvbW1hbmRQYXJzZXIucGFyc2UoY29tbWFuZCksXG4gICAgICBhcmdzOiBhcmdzLFxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCByZWR1Y2VyLCB7IGRlZmF1bHRTdGF0ZSB9IGZyb20gXCIuL3JlZHVjZXJcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbXBsZXRpb25EaXNwYXRjaENvbnRleHQsIENvbXBsZXRpb25TdGF0ZUNvbnRleHQgfSBmcm9tIFwiLi9jb250ZXh0XCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGluaXRpYWxJbnB1dFZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBDb21wbGV0aW9uUHJvdmlkZXI6IFJlYWN0LkZDPFByb3BzPiA9ICh7XG4gIGluaXRpYWxJbnB1dFZhbHVlLFxuICBjaGlsZHJlbixcbn0pID0+IHtcbiAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIC4uLmRlZmF1bHRTdGF0ZSxcbiAgICBjb21wbGV0aW9uU291cmNlOiBpbml0aWFsSW5wdXRWYWx1ZSxcbiAgfTtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSBSZWFjdC51c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XG4gIHJldHVybiAoXG4gICAgPENvbXBsZXRpb25TdGF0ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT5cbiAgICAgIDxDb21wbGV0aW9uRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtkaXNwYXRjaH0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvQ29tcGxldGlvbkRpc3BhdGNoQ29udGV4dC5Qcm92aWRlcj5cbiAgICA8L0NvbXBsZXRpb25TdGF0ZUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiLi4vY29sb3JzY2hlbWUvc3R5bGVkXCI7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQucGBcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyYXk7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29uc29sZUluZm9CYWNrZ3JvdW5kfTtcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29uc29sZUluZm9Gb3JlZ3JvdW5kfTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbmA7XG5cbmNvbnN0IEluZm9NZXNzYWdlOiBSZWFjdC5GQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgcmV0dXJuIDxXcmFwcGVyIHJvbGU9XCJzdGF0dXNcIj57Y2hpbGRyZW59PC9XcmFwcGVyPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZm9NZXNzYWdlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiLi4vY29sb3JzY2hlbWUvc3R5bGVkXCI7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQucGBcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyYXk7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29uc29sZUVycm9yQmFja2dyb3VuZH07XG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbnNvbGVFcnJvckZvcmVncm91bmR9O1xuICBmb250LXdlaWdodDogYm9sZDtcbmA7XG5cbmNvbnN0IEVycm9yTWVzc2FnZTogUmVhY3QuRkMgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIHJldHVybiA8V3JhcHBlciByb2xlPVwiYWxlcnRcIj57Y2hpbGRyZW59PC9XcmFwcGVyPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9yTWVzc2FnZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbG9yU2NoZW1lVXBkYXRlQ29udGV4dCB9IGZyb20gXCIuL2NvbnRleHRzXCI7XG5pbXBvcnQgU2V0dGluZ0NsaWVudCBmcm9tIFwiLi4vY2xpZW50cy9TZXR0aW5nQ2xpZW50XCI7XG5cbmV4cG9ydCBjb25zdCB1c2VDb2xvclNjaGVtZVJlZnJlc2ggPSAoKSA9PiB7XG4gIGNvbnN0IHVwZGF0ZSA9IFJlYWN0LnVzZUNvbnRleHQoQ29sb3JTY2hlbWVVcGRhdGVDb250ZXh0KTtcbiAgY29uc3Qgc2V0dGluZ0NsaWVudCA9IG5ldyBTZXR0aW5nQ2xpZW50KCk7XG4gIGNvbnN0IHJlZnJlc2ggPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0dGluZ0NsaWVudC5nZXRDb2xvclNjaGVtZSgpLnRoZW4oKG5ld1NjaGVtZSkgPT4ge1xuICAgICAgdXBkYXRlKG5ld1NjaGVtZSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gcmVmcmVzaDtcbn07XG4iLCJpbXBvcnQgU2V0dGluZ3MgZnJvbSBcIi4uLy4uL3NoYXJlZC9zZXR0aW5ncy9TZXR0aW5nc1wiO1xuaW1wb3J0ICogYXMgbWVzc2FnZXMgZnJvbSBcIi4uLy4uL3NoYXJlZC9tZXNzYWdlc1wiO1xuaW1wb3J0IENvbG9yU2NoZW1lIGZyb20gXCIuLi8uLi9zaGFyZWQvQ29sb3JTY2hlbWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZ0NsaWVudCB7XG4gIGFzeW5jIGdldENvbG9yU2NoZW1lKCk6IFByb21pc2U8Q29sb3JTY2hlbWU+IHtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgIHR5cGU6IG1lc3NhZ2VzLlNFVFRJTkdTX1FVRVJZLFxuICAgIH0pO1xuICAgIGNvbnN0IHNldHRpbmdzID0gU2V0dGluZ3MuZnJvbUpTT04oanNvbik7XG4gICAgcmV0dXJuIHNldHRpbmdzLnByb3BlcnRpZXMuY29sb3JzY2hlbWU7XG4gIH1cbn1cbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvbG9yU2NoZW1lIGZyb20gXCIuLi8uLi9zaGFyZWQvQ29sb3JTY2hlbWVcIjtcbmltcG9ydCB7IERhcmtUaGVtZSwgTGlnaHRUaGVtZSB9IGZyb20gXCIuL3RoZW1lXCI7XG5pbXBvcnQgeyBDb2xvclNjaGVtZUNvbnRleHQsIENvbG9yU2NoZW1lVXBkYXRlQ29udGV4dCB9IGZyb20gXCIuL2NvbnRleHRzXCI7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBDb2xvclNjaGVtZVByb3ZpZGVyOiBSZWFjdC5GQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW2NvbG9yc2NoZW1lLCBzZXRDb2xvclNjaGVtZV0gPSBSZWFjdC51c2VTdGF0ZShDb2xvclNjaGVtZS5TeXN0ZW0pO1xuICBjb25zdCB0aGVtZSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGlmIChjb2xvcnNjaGVtZSA9PT0gQ29sb3JTY2hlbWUuU3lzdGVtKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHdpbmRvdy5tYXRjaE1lZGlhICYmXG4gICAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiKS5tYXRjaGVzXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIERhcmtUaGVtZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNvbG9yc2NoZW1lID09PSBDb2xvclNjaGVtZS5EYXJrKSB7XG4gICAgICByZXR1cm4gRGFya1RoZW1lO1xuICAgIH1cbiAgICByZXR1cm4gTGlnaHRUaGVtZTtcbiAgfSwgW2NvbG9yc2NoZW1lXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29sb3JTY2hlbWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb2xvcnNjaGVtZX0+XG4gICAgICA8Q29sb3JTY2hlbWVVcGRhdGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzZXRDb2xvclNjaGVtZX0+XG4gICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+e2NoaWxkcmVufTwvVGhlbWVQcm92aWRlcj5cbiAgICAgIDwvQ29sb3JTY2hlbWVVcGRhdGVDb250ZXh0LlByb3ZpZGVyPlxuICAgIDwvQ29sb3JTY2hlbWVDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IENvbG9yU2NoZW1lUHJvdmlkZXI7XG4iLCJleHBvcnQgdHlwZSBUaGVtZVByb3BlcnRpZXMgPSB7XG4gIGNvbXBsZXRpb25UaXRsZUJhY2tncm91bmQ6IHN0cmluZztcbiAgY29tcGxldGlvblRpdGxlRm9yZWdyb3VuZDogc3RyaW5nO1xuICBjb21wbGV0aW9uSXRlbUJhY2tncm91bmQ6IHN0cmluZztcbiAgY29tcGxldGlvbkl0ZW1Gb3JlZ3JvdW5kOiBzdHJpbmc7XG4gIGNvbXBsZXRpb25JdGVtRGVzY3JpcHRpb25Gb3JlZ3JvdW5kOiBzdHJpbmc7XG4gIGNvbXBsZXRpb25TZWxlY3RlZEJhY2tncm91bmQ6IHN0cmluZztcbiAgY29tcGxldGlvblNlbGVjdGVkRm9yZWdyb3VuZDogc3RyaW5nO1xuICBjb21tYW5kQmFja2dyb3VuZDogc3RyaW5nO1xuICBjb21tYW5kRm9yZWdyb3VuZDogc3RyaW5nO1xuICBjb25zb2xlRXJyb3JCYWNrZ3JvdW5kOiBzdHJpbmc7XG4gIGNvbnNvbGVFcnJvckZvcmVncm91bmQ6IHN0cmluZztcbiAgY29uc29sZUluZm9CYWNrZ3JvdW5kOiBzdHJpbmc7XG4gIGNvbnNvbGVJbmZvRm9yZWdyb3VuZDogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNvbnN0IExpZ2h0VGhlbWU6IFRoZW1lUHJvcGVydGllcyA9IHtcbiAgY29tcGxldGlvblRpdGxlQmFja2dyb3VuZDogXCJsaWdodGdyYXlcIixcbiAgY29tcGxldGlvblRpdGxlRm9yZWdyb3VuZDogXCIjMDAwMDAwXCIsXG4gIGNvbXBsZXRpb25JdGVtQmFja2dyb3VuZDogXCIjZmZmZmZmXCIsXG4gIGNvbXBsZXRpb25JdGVtRm9yZWdyb3VuZDogXCIjMDAwMDAwXCIsXG4gIGNvbXBsZXRpb25JdGVtRGVzY3JpcHRpb25Gb3JlZ3JvdW5kOiBcIiMwMDgwMDBcIixcbiAgY29tcGxldGlvblNlbGVjdGVkQmFja2dyb3VuZDogXCIjZmZmZjAwXCIsXG4gIGNvbXBsZXRpb25TZWxlY3RlZEZvcmVncm91bmQ6IFwiIzAwMDAwMFwiLFxuICBjb21tYW5kQmFja2dyb3VuZDogXCIjZmZmZmZmXCIsXG4gIGNvbW1hbmRGb3JlZ3JvdW5kOiBcIiMwMDAwMDBcIixcbiAgY29uc29sZUVycm9yQmFja2dyb3VuZDogXCIjZmYwMDAwXCIsXG4gIGNvbnNvbGVFcnJvckZvcmVncm91bmQ6IFwiI2ZmZmZmZlwiLFxuICBjb25zb2xlSW5mb0JhY2tncm91bmQ6IFwiI2ZmZmZmZlwiLFxuICBjb25zb2xlSW5mb0ZvcmVncm91bmQ6IFwiIzAxODc4NlwiLFxufTtcblxuZXhwb3J0IGNvbnN0IERhcmtUaGVtZTogVGhlbWVQcm9wZXJ0aWVzID0ge1xuICBjb21wbGV0aW9uVGl0bGVCYWNrZ3JvdW5kOiBcIiMwNTIwMjdcIixcbiAgY29tcGxldGlvblRpdGxlRm9yZWdyb3VuZDogXCJ3aGl0ZVwiLFxuICBjb21wbGV0aW9uSXRlbUJhY2tncm91bmQ6IFwiIzJmNDc0ZlwiLFxuICBjb21wbGV0aW9uSXRlbUZvcmVncm91bmQ6IFwid2hpdGVcIixcbiAgY29tcGxldGlvbkl0ZW1EZXNjcmlwdGlvbkZvcmVncm91bmQ6IFwiIzg2ZmFiMFwiLFxuICBjb21wbGV0aW9uU2VsZWN0ZWRCYWNrZ3JvdW5kOiBcIiNlZWZmNDFcIixcbiAgY29tcGxldGlvblNlbGVjdGVkRm9yZWdyb3VuZDogXCIjMDAwMDAwXCIsXG4gIGNvbW1hbmRCYWNrZ3JvdW5kOiBcIiMwNTIwMjdcIixcbiAgY29tbWFuZEZvcmVncm91bmQ6IFwid2hpdGVcIixcbiAgY29uc29sZUVycm9yQmFja2dyb3VuZDogXCJyZWRcIixcbiAgY29uc29sZUVycm9yRm9yZWdyb3VuZDogXCJ3aGl0ZVwiLFxuICBjb25zb2xlSW5mb0JhY2tncm91bmQ6IFwiIzA1MjAyN1wiLFxuICBjb25zb2xlSW5mb0ZvcmVncm91bmQ6IFwiI2ZmZmZmZlwiLFxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCByZWR1Y2VyLCB7IGRlZmF1bHRTdGF0ZSB9IGZyb20gXCIuL3JlY3VlclwiO1xuaW1wb3J0IHsgQXBwRGlzcGF0Y2hDb250ZXh0LCBBcHBTdGF0ZUNvbnRleHQgfSBmcm9tIFwiLi9jb250ZXh0c1wiO1xuXG5leHBvcnQgY29uc3QgQXBwUHJvdmlkZXI6IFJlYWN0LkZDID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IFJlYWN0LnVzZVJlZHVjZXIocmVkdWNlciwgZGVmYXVsdFN0YXRlKTtcbiAgcmV0dXJuIChcbiAgICA8QXBwU3RhdGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdGF0ZX0+XG4gICAgICA8QXBwRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtkaXNwYXRjaH0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvQXBwRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyPlxuICAgIDwvQXBwU3RhdGVDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=