/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html, body {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n#todos {\\r\\n  width: 50%;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\n#todos header, section, footer {\\r\\n  width: 70%;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\n/* HEADER */\\r\\nheader h1 {\\r\\n  text-align: center;\\r\\n  font-family: 'Roboto Slab', serif, 'Times New Roman';\\r\\n  font-size: 7em;\\r\\n\\r\\n  /* makes h1 shrink */\\r\\n  overflow: hidden;\\r\\n  text-overflow: ellipsis;\\r\\n\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.newTodo {\\r\\n  font-family: Jost, sans-serif, Arial;\\r\\n  font-size: 1.5em;\\r\\n  width: 100%;\\r\\n  padding: 20px 5%;\\r\\n\\r\\n  /* aligns input width to\\r\\n  width of the block */\\r\\n  box-sizing: border-box;\\r\\n\\r\\n  border: none;\\r\\n  box-shadow: 3px 3px 4px #C6C6C6;\\r\\n}\\r\\n\\r\\n.newTodo:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n/* MAIN */\\r\\n.main {\\r\\n  font-family: Jost, sans-serif, Arial;\\r\\n  font-size: 1.5em;\\r\\n}\\r\\n\\r\\n.todoList {\\r\\n  list-style-type: none;\\r\\n  padding-inline-start: 0;\\r\\n}\\r\\n\\r\\n.todoList li {\\r\\n  box-sizing: border-box;\\r\\n  padding: 10px;\\r\\n  border-bottom: 1px solid #C7C7C7;\\r\\n\\r\\n  overflow: hidden;\\r\\n  text-overflow: ellipsis;\\r\\n}\\r\\n\\r\\n.todoList label {\\r\\n  padding-left: 40px;\\r\\n}\\r\\n\\r\\n/* custom checkboxes */\\r\\n@supports (-webkit-appearance: none) or (-moz-appearance: none) {\\r\\n  /* if the property \\\"appearance\\\"\\r\\n  isn`t supported the styles won`t apply\\r\\n  and default input style will be shown */\\r\\n  input[type='checkbox'] {\\r\\n    -webkit-appearance: none;\\r\\n    -moz-appearance: none;\\r\\n    position: relative;\\r\\n    cursor: pointer;\\r\\n  }\\r\\n\\r\\n  input[type='checkbox']:not(:checked)::after {\\r\\n    content: '';\\r\\n    position: absolute;\\r\\n    top: -15px;\\r\\n\\r\\n    width: 23px;\\r\\n    height: 23px;\\r\\n\\r\\n    border: 1px solid #C7C7C7;\\r\\n    border-radius: 100%;\\r\\n  }\\r\\n\\r\\n  input[type='checkbox']:checked::after {\\r\\n    content: '';\\r\\n    position: absolute;\\r\\n    top: -15px;\\r\\n\\r\\n    width: 25px;\\r\\n    height: 25px;\\r\\n\\r\\n    background-color: #A9DFBF ;\\r\\n    border-radius: 100%;\\r\\n  }\\r\\n}\\r\\n\\r\\n/* custom delete button */\\r\\n.todoList button {\\r\\n  /* reset default settings */\\r\\n  -webkit-appearance: none;\\r\\n  -moz-appearance: none;\\r\\n  appearance: none;\\r\\n\\r\\n  border: 1px solid #C7C7C7;\\r\\n  border-radius: 15px;\\r\\n\\r\\n  float: right;\\r\\n  min-width: 70px;\\r\\n  height: 35px;\\r\\n\\r\\n  font-size: 17px;\\r\\n  font-family: Jost, sans-serif, Arial;\\r\\n\\r\\n  opacity: 0.5;\\r\\n  transition: opacity 0.15s;\\r\\n}\\r\\n\\r\\n.todoList button:hover {\\r\\n  opacity: 1;\\r\\n}\\r\\n\\r\\n.todoList button:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.todoList button:active {\\r\\n  box-shadow: 1px 1px 2px #C6C6C6 inset;\\r\\n}\\r\\n\\r\\n/* text input when editing */\\r\\n.todoList input[type=\\\"text\\\"] {\\r\\n  font-family: Jost, sans-serif, Arial;\\r\\n  font-size: 0.8em;\\r\\n\\r\\n  width: 65%;\\r\\n  padding: 0 5px;\\r\\n  margin-left: 40px;\\r\\n}\\r\\n\\r\\n.todoList input[type=\\\"text\\\"]:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n/* FOOTER */\\r\\n\\r\\nfooter {\\r\\n  height: 40px;\\r\\n  margin-top: 20px;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.filters {\\r\\n  width: 50%;\\r\\n  float: right;\\r\\n}\\r\\n\\r\\n.filters button {\\r\\n  -webkit-appearance: none;\\r\\n  -moz-appearance: none;\\r\\n  appearance: none;\\r\\n  border: none;\\r\\n\\r\\n  height: 40px;\\r\\n  min-width: 45px;\\r\\n  float: right;\\r\\n\\r\\n  border-bottom: 1px solid #C7C7C7;\\r\\n  border-right: 1px solid #C7C7C7;\\r\\n  background-color: white;\\r\\n\\r\\n  font-size: 13px;\\r\\n  font-family: Jost, sans-serif, Arial;\\r\\n}\\r\\n\\r\\n.filters button:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.filters button:active {\\r\\n  box-shadow: 1px 1px 2px #C6C6C6 inset;\\r\\n}\\r\\n\\r\\n/* INFO */\\r\\n.info {\\r\\n  width: 50%;\\r\\n  margin: 130px auto 0;\\r\\n  text-align: center;\\r\\n\\r\\n  font-size: 0.8em;\\r\\n  font-family: Jost, sans-serif, Arial;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\n'use strict';\r\n\r\nconst newTodo = document.querySelector('.newTodo');\r\nconst todoList = document.querySelector('.todoList');\r\nconst filterBtns = document.querySelectorAll('footer .filters button');\r\n\r\n// Filters realization:\r\n\r\n// The object that controls\r\n// how filters works.\r\nconst filters = {\r\n  all(list) {\r\n    Array.from(list).forEach((item) => item.classList.remove('hide'));\r\n  },\r\n\r\n  unfinished(list) {\r\n    Array.from(list).forEach((item) => {\r\n      !item.classList.contains('done') ?\r\n      item.classList.remove('hide') :\r\n      item.classList.add('hide');\r\n    })\r\n  },\r\n\r\n  completed(list) {\r\n    Array.from(list).forEach((item) => {\r\n      item.classList.contains('done') ?\r\n      item.classList.remove('hide') :\r\n      item.classList.add('hide');\r\n    })\r\n  },\r\n\r\n  isHidden() { // Adjusts visibility of the filter buttons.\r\n    todoList.children.length == 0 ?\r\n    document.querySelector('.filters').classList.add('hide') :\r\n    document.querySelector('.filters').classList.remove('hide')\r\n  },\r\n};\r\n\r\nfor (let btn of filterBtns) {\r\n  switch (btn.value) {\r\n    case 'all':\r\n      btn.onclick = filters.all.bind(null, todoList.children);\r\n      break;\r\n    case 'unfinished':\r\n      btn.onclick = filters.unfinished.bind(null, todoList.children);\r\n      break;\r\n    case 'completed':\r\n      btn.onclick = filters.completed.bind(null, todoList.children);\r\n      break;\r\n  }\r\n};\r\n\r\n// \"Task\" component:\r\n// Functions that creates\r\n// separate parts of an \"Task\" component.\r\n\r\n// li part:\r\nfunction makeTodoLi() {\r\n  return document.createElement('li');\r\n}\r\n\r\n// label part:\r\nfunction makeLabel(text) {\r\n  let label = document.createElement('label');\r\n  label.className = '';\r\n  label.textContent = text;\r\n\r\n  return label;\r\n}\r\n\r\n// input part:\r\nfunction makeInput(type, state) {\r\n  let input = document.createElement('input');\r\n  input.type = type;\r\n  input.checked = state; // Means \"Task\" state (true(done) or false(undone)).\r\n\r\n  return input;\r\n}\r\n\r\n// Function that assemble the \"Task\" component\r\n// and put it into the task list.\r\n// The final node looks like:\r\n// <li>\r\n//  <input type=\"checkbox\"/><label>Text</label>\r\n// </li>\r\nfunction addTodo() {\r\n  if (newTodo.value) {\r\n    todoList.append(makeTodoLi());\r\n    todoList.lastChild.append(makeLabel(newTodo.value));\r\n    todoList.lastChild.prepend(makeInput('checkbox', false));\r\n  }\r\n\r\n  filters.isHidden();\r\n  newTodo.value = '';\r\n  _storage_js__WEBPACK_IMPORTED_MODULE_0__.default.save();\r\n}\r\n\r\nnewTodo.onkeyup = function(event) {\r\n  if (event.code == 'Enter') addTodo();\r\n};\r\n\r\n// Function that changes the \"Task\" state (done or undone).\r\n// Tied to the task list.\r\ntodoList.addEventListener('click', function(event) {\r\n  if (event.target.tagName == 'INPUT') {\r\n    let inp = event.target;\r\n\r\n    inp.checked ? inp.parentNode.classList = 'done' :\r\n    inp.parentNode.classList = '';\r\n\r\n    _storage_js__WEBPACK_IMPORTED_MODULE_0__.default.save();\r\n  }\r\n});\r\n\r\n// This listener create the\r\n// \"delete\" button to the right of\r\n// \"Task\" label part (task text).\r\ntodoList.addEventListener('mouseover', function(event) {\r\n  let li = event.target;\r\n\r\n  if ( li.tagName == 'LI' && !(li.children.length > 2) ) {\r\n    let btn = document.createElement('button');\r\n    btn.textContent = 'delete';\r\n\r\n    btn.onclick = function() {\r\n      li.remove();\r\n      filters.isHidden();\r\n      _storage_js__WEBPACK_IMPORTED_MODULE_0__.default.save();\r\n    };\r\n\r\n    li.append(btn);\r\n\r\n    li.onmouseleave = function() {\r\n      li.lastChild.remove();\r\n      li.onmouseleave = null;\r\n    };\r\n  }\r\n});\r\n\r\n// Function that changes \"Task\" text.\r\nfunction changeTodo(currentState) {\r\n  this.textContent = this.previousSibling.value;\r\n  this.previousSibling.replaceWith(makeInput('checkbox', currentState));\r\n}\r\n\r\n// That listeners allows to\r\n// edit \"Task\" text in double-click.\r\ntodoList.addEventListener('dblclick', function(event) {\r\n  let label = event.target;\r\n\r\n  if (label.tagName == 'LABEL') {\r\n    // label.previousSibling - checkbox input element\r\n    let state = label.previousSibling.checked;\r\n    label.previousSibling.replaceWith(makeInput('text', null));\r\n    // now label.previousSibling is text input element\r\n    let textInp = label.previousSibling;\r\n    textInp.value = label.textContent;\r\n    textInp.focus();\r\n\r\n    label.textContent = '';\r\n\r\n    // Applying changes with:\r\n    textInp.onblur = function() {\r\n      changeTodo.call(label, state);\r\n      _storage_js__WEBPACK_IMPORTED_MODULE_0__.default.save();\r\n    } // blur...\r\n    textInp.onkeyup = function(event) { // or \"Enter\" or \"Escape\" keybuttons.\r\n      if (event.code == 'Enter' || event.code == 'Escape') textInp.blur();\r\n    };\r\n  }\r\n});\r\n\r\n_storage_js__WEBPACK_IMPORTED_MODULE_0__.default.fetch(_storage_js__WEBPACK_IMPORTED_MODULE_0__.default.TODO_KEY);\r\nfilters.isHidden();\r\n\n\n//# sourceURL=webpack://to-do-list/./src/script.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Storage = {\r\n\tTODO_KEY: 'todo',\r\n\tbox: {}, // Reflection of the current tasks.\r\n  todoList: document.querySelector('.todoList'),\r\n\r\n  // Updates the box and localStorage\r\n  // every time todo list changes.\r\n  save() {\r\n  \tthis.box = {};\r\n  \tthis.update(this.todoList).forEach((task, index) => {\r\n    \tthis.box[index + 1] = {};\r\n    \tthis.box[index + 1].text = task.text;\r\n      this.box[index + 1].state = task.state;\r\n    });\r\n\r\n    let STORAGE = JSON.stringify(this.box);\r\n\r\n    window.localStorage.setItem(this.TODO_KEY, STORAGE);\r\n  },\r\n\r\n  fetch(key) {\r\n  \tif (!window.localStorage.length) return;\r\n\r\n    this.box = JSON.parse( window.localStorage.getItem(key) );\r\n\r\n    for ( let task in this.box ) {\r\n    \tthis.todoList.append(document.createElement('li'));\r\n\r\n      let label = document.createElement('label');\r\n      label.className = '';\r\n      label.textContent = this.box[task].text;\r\n\r\n      this.todoList.lastChild.append(label);\r\n\r\n      let input = document.createElement('input');\r\n      input.type = 'checkbox';\r\n      input.checked = this.box[task].state;\r\n\r\n      this.todoList.lastChild.prepend(input);\r\n\r\n      this.todoList.lastChild.firstChild.checked ?\r\n      this.todoList.lastChild.classList.add('done') :\r\n      null;\r\n    }\r\n  },\r\n\r\n  // Makes an array of object presentations\r\n  // of current tasks.\r\n  update(current) {\r\n  \tlet arrOfTasks = [];\r\n\r\n    for (let item of current.children) {\r\n    \tlet task = {};\r\n      let label = item.querySelector('label');\r\n      task.text = label.textContent;\r\n      task.state = item.classList.contains('done');\r\n\r\n      arrOfTasks.push(task);\r\n    }\r\n    return arrOfTasks\r\n  },\r\n});\r\n\n\n//# sourceURL=webpack://to-do-list/./src/storage.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;