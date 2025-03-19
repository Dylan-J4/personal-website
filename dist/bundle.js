/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/m_stylesheet.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/m_stylesheet.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    color: white;\r\n}\r\n\r\nbody {\r\n    background-color: black;\r\n}\r\n\r\n#screen-container {\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    background-color: rgb(15,42,69);\r\n    color: #333;\r\n    box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.6);\r\n    border-radius: 20px;\r\n    border: 2px solid black;\r\n}\r\n\r\n.tab-content {\r\n    display: none;\r\n}\r\n\r\n/* ------- Content --------*/\r\n\r\nheader {\r\n    padding: 20px;\r\n    background-color: rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.header-welcome {\r\n    align-items: center;\r\n    display: flex;\r\n    gap: 22px;\r\n}\r\n/* -------- Tabs -------- */\r\n.tabs {\r\n    margin-top: 3%;\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 2%;\r\n}\r\n\r\n.tabs button { /* Buttons */\r\n    background-color: rgb(7, 24, 41);\r\n    border: none;\r\n    width: 30%;\r\n    height: 30px;\r\n    border-radius: 10px;\r\n    box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.6);\r\n}\r\n\r\n.tabs button:active {\r\n    background-color: rgb(5, 16, 28);\r\n}\r\n\r\n.tab-container {\r\n    padding: 2%;\r\n    margin-top: 5%;\r\n    height: 90%;\r\n    border-radius: 10px;\r\n    box-shadow: 2px -4px 10px 4px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n/* ----- Stardew Valley items ----- */\r\n.category {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.category h2 {\r\n    margin-top: 20px;\r\n}\r\n\r\n\r\n/* ----- Fitness tab content ----- */\r\n.days-tabs-container {\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n\r\n.days-container h2 {\r\n    padding: 4%;\r\n}\r\n\r\n.days-btn {\r\n    margin-top: 2%;\r\n    border: none;\r\n    width: 20%;\r\n    height: 25px;\r\n    border-radius: 10px;\r\n    justify-content: space-between;\r\n    background-color: rgb(7, 24, 41);\r\n}\r\n\r\n.days-content {\r\n    display: flex;\r\n    justify-content: center;\r\n    padding-left: 15px;\r\n}\r\n\r\n.workout {\r\n    padding-top: 20px;\r\n}\r\n\r\n/* ----- Calendar ----- */\r\n.calendar-container {\r\n    max-width: 800px;\r\n    margin: 20px auto;\r\n    padding: 20px;\r\n    background-color: rgb(15,42,69);\r\n    color: white;\r\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\r\n    border-radius: 10px;\r\n    border: 2px solid black;\r\n}\r\n\r\nh2 {\r\n    text-align: center;\r\n    margin-bottom: 20px;\r\n    color: white;\r\n}\r\n\r\n.calendar-table {\r\n    width: 100%;\r\n    table-layout: fixed;\r\n    border-collapse: collapse;\r\n}\r\n\r\n.calendar-table th,\r\n.calendar-table td {\r\n    padding: 15px;\r\n    text-align: center;\r\n    border: 1px solid #ddd;\r\n    font-size: 14px;\r\n}\r\n\r\n.calendar-table th {\r\n    background-color: rgba(0, 0, 0, 0.2);\r\n    color: white;\r\n}\r\n\r\n.calendar-table td {\r\n    background-color: rgb(7, 24, 41);\r\n    color: white;\r\n}\r\n\r\n.calendar-table td input[type=\"checkbox\"] {\r\n    margin-top: 5px;\r\n    background-color: rgb(7, 24, 41);\r\n    color: white;\r\n}\r\n\r\n.calendar-buttons {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.btn {\r\n    padding: 10px 20px;\r\n    background-color: rgb(7, 24, 41);\r\n    color: white;\r\n    border: none;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.6);\r\n}\r\n\r\n.btn:hover {\r\n    background-color: rgb(5, 16, 28);\r\n}\r\n\r\n/* Button active states */\r\n.btn:active {\r\n    background-color: rgb(5, 16, 28);\r\n}\r\n\r\n.file-btn {\r\n    background-color: rgb(19, 53, 87);\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://personal_website/./src/styles/m_stylesheet.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://personal_website/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://personal_website/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://personal_website/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://personal_website/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://personal_website/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://personal_website/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://personal_website/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://personal_website/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/calendar.js":
/*!*************************!*\
  !*** ./src/calendar.js ***!
  \*************************/
/***/ (() => {

eval("function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\nvar months = [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\", \"August\", \"September\", \"October\", \"November\", \"December\"];\nvar currentDate = new Date();\nfunction updateCalendar() {\n  var year = currentDate.getFullYear();\n  var month = currentDate.getMonth();\n  document.getElementById(\"month-year\").textContent = \"\".concat(months[month], \" \").concat(year);\n  var firstDayOfMonth = new Date(year, month, 1).getDay();\n  var lastDateOfMonth = new Date(year, month + 1, 0).getDate();\n  var calendarBody = document.getElementById(\"calendar-body\");\n  calendarBody.innerHTML = \"\";\n  var dayCounter = 1;\n  var totalRows = Math.ceil((firstDayOfMonth + lastDateOfMonth) / 7);\n  for (var i = 0; i < totalRows; i++) {\n    var row = document.createElement(\"tr\");\n    var _loop = function _loop() {\n      var cell = document.createElement(\"td\");\n      if (i === 0 && j < firstDayOfMonth || dayCounter > lastDateOfMonth) {\n        row.appendChild(cell);\n      } else {\n        var checkbox = document.createElement(\"input\");\n        checkbox.type = \"checkbox\";\n        checkbox.id = \"day-\".concat(dayCounter);\n        checkbox.classList.add(\"day-checkbox\");\n\n        // Load the saved state from localStorage (if exists)\n        var savedState = localStorage.getItem(\"day-\".concat(dayCounter));\n        if (savedState === \"true\") {\n          checkbox.checked = true;\n        } else {\n          checkbox.checked = false;\n        }\n\n        // Save the state when the checkbox is clicked\n        checkbox.addEventListener(\"change\", function () {\n          localStorage.setItem(\"day-\".concat(dayCounter), checkbox.checked);\n        });\n        cell.appendChild(checkbox);\n        cell.innerHTML += \" \".concat(dayCounter);\n        row.appendChild(cell);\n        dayCounter++;\n      }\n    };\n    for (var j = 0; j < 7; j++) {\n      _loop();\n    }\n    calendarBody.appendChild(row);\n  }\n}\nfunction changeMonth(direction) {\n  currentDate.setMonth(currentDate.getMonth() + direction);\n  updateCalendar();\n}\n\n// Set up event listeners for month change\ndocument.getElementById(\"prev-btn\").addEventListener(\"click\", function () {\n  return changeMonth(-1);\n});\ndocument.getElementById(\"next-btn\").addEventListener(\"click\", function () {\n  return changeMonth(1);\n});\n\n// Export the checkbox states to a JSON file\ndocument.getElementById(\"export-btn\").addEventListener(\"click\", function () {\n  var data = {};\n\n  // Loop through all the checkboxes and get their states\n  var checkboxes = document.querySelectorAll(\".day-checkbox\");\n  checkboxes.forEach(function (checkbox) {\n    data[checkbox.id] = checkbox.checked;\n  });\n\n  // Convert data to JSON\n  var jsonData = JSON.stringify(data);\n\n  // Create a blob from the JSON data\n  var blob = new Blob([jsonData], {\n    type: \"application/json\"\n  });\n  var link = document.createElement(\"a\");\n  link.href = URL.createObjectURL(blob);\n  link.download = \"calendar-data.json\";\n  link.click();\n});\n\n// Import the checkbox states from a JSON file\ndocument.getElementById(\"import-btn\").addEventListener(\"click\", function () {\n  document.getElementById(\"import-file\").click();\n});\ndocument.getElementById(\"import-file\").addEventListener(\"change\", function (event) {\n  var file = event.target.files[0];\n  if (file) {\n    var reader = new FileReader();\n    reader.onload = function (e) {\n      var importedData = JSON.parse(e.target.result);\n\n      // Update the checkbox states from the imported data\n      for (var _i = 0, _Object$entries = Object.entries(importedData); _i < _Object$entries.length; _i++) {\n        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),\n          id = _Object$entries$_i[0],\n          checked = _Object$entries$_i[1];\n        var checkbox = document.getElementById(id);\n        if (checkbox) {\n          checkbox.checked = checked;\n          // Optionally update localStorage as well\n          localStorage.setItem(id, checked);\n        }\n      }\n    };\n    reader.readAsText(file);\n  }\n});\n\n// Initialize the calendar on page load\nupdateCalendar();\n\n//# sourceURL=webpack://personal_website/./src/calendar.js?");

/***/ }),

/***/ "./src/dateTime.js":
/*!*************************!*\
  !*** ./src/dateTime.js ***!
  \*************************/
/***/ (() => {

eval("function updateDateTime() {\n  var now = new Date();\n  var options = {\n    hour: '2-digit',\n    minute: '2-digit',\n    year: 'numeric',\n    month: 'long',\n    day: 'numeric'\n  };\n  var formattedDateTime = now.toLocaleString('en-US', options);\n  document.getElementById('datetime').textContent = formattedDateTime;\n}\nsetInterval(updateDateTime, 60000);\nupdateDateTime();\n\n//# sourceURL=webpack://personal_website/./src/dateTime.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', function () {\n  function switchTab(tabId) {\n    document.querySelectorAll('.tab-content').forEach(function (content) {\n      return content.style.display = 'none';\n    });\n    var activeTab = document.getElementById(tabId);\n    if (activeTab) activeTab.style.display = 'block';\n  }\n  // Show the first tab on load\n  switchTab('tab2');\n  document.querySelectorAll('.tab').forEach(function (tab) {\n    var tabId = tab.getAttribute('data-tab');\n    tab.addEventListener('click', function () {\n      return switchTab(tabId);\n    });\n  });\n  function switchDay(dayId) {\n    document.querySelectorAll('.days-content').forEach(function (day) {\n      return day.style.display = 'none';\n    });\n    var activeDay = document.getElementById(dayId);\n    if (activeDay) activeDay.style.display = 'block';\n  }\n  switchDay('day1');\n  document.querySelectorAll('.days-btn').forEach(function (btn) {\n    var dayId = btn.getAttribute('data-tab');\n    btn.addEventListener('click', function () {\n      return switchDay(dayId);\n    });\n  });\n});\n\n//# sourceURL=webpack://personal_website/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_m_stylesheet_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/m_stylesheet.css */ \"./src/styles/m_stylesheet.css\");\n/* harmony import */ var _dateTime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dateTime.js */ \"./src/dateTime.js\");\n/* harmony import */ var _dateTime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dateTime_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dom_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _calendar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar.js */ \"./src/calendar.js\");\n/* harmony import */ var _calendar_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_calendar_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n//# sourceURL=webpack://personal_website/./src/index.js?");

/***/ }),

/***/ "./src/styles/m_stylesheet.css":
/*!*************************************!*\
  !*** ./src/styles/m_stylesheet.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_m_stylesheet_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./m_stylesheet.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/m_stylesheet.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_m_stylesheet_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_m_stylesheet_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_m_stylesheet_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_m_stylesheet_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://personal_website/./src/styles/m_stylesheet.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;