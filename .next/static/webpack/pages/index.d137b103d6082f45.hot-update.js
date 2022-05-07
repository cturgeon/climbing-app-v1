"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/gym-list.js":
/*!********************************!*\
  !*** ./components/gym-list.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GymList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _gym_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gym-item */ \"./components/gym-item.js\");\n\n\n\nfunction GymList(props) {\n    var _this = this;\n    var items = props.items;\n    if (!items) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading gym data\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\components\\\\gym-list.js\",\n            lineNumber: 8,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        children: items.map(function(gym) {\n            return(// !TODO should the key be in the fragment?\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_gym_item__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    id: gym.id,\n                    name: gym.name,\n                    description: gym.description,\n                    image: gym.image,\n                    address: gym.address\n                }, gym.id, false, {\n                    fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\components\\\\gym-list.js\",\n                    lineNumber: 16,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\components\\\\gym-list.js\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, _this));\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\components\\\\gym-list.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n};\n_c = GymList;\nvar _c;\n$RefreshReg$(_c, \"GymList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2d5bS1saXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQWlDO0FBQ0E7QUFFbEIsU0FBU0UsT0FBTyxDQUFDQyxLQUFLLEVBQUU7O0lBQ3JDLElBQU0sS0FBTyxHQUFLQSxLQUFLLENBQWZDLEtBQUs7SUFFYixJQUFJLENBQUNBLEtBQUssRUFBRTtRQUNWLHFCQUFPLDhEQUFDQyxHQUFDO3NCQUFDLGtCQUFnQjs7Ozs7Z0JBQUksQ0FBQztLQUNoQztJQUVELHFCQUNFLDhEQUFDQyxJQUFFO2tCQUNBRixLQUFLLENBQUNHLEdBQUcsQ0FBQyxTQUFDQyxHQUFHO21CQUNiLDJDQUEyQzswQkFDM0MsOERBQUNSLDJDQUFROzBCQUNQLDRFQUFDQyxpREFBTztvQkFFTlEsRUFBRSxFQUFFRCxHQUFHLENBQUNDLEVBQUU7b0JBQ1ZDLElBQUksRUFBRUYsR0FBRyxDQUFDRSxJQUFJO29CQUNkQyxXQUFXLEVBQUVILEdBQUcsQ0FBQ0csV0FBVztvQkFDNUJDLEtBQUssRUFBRUosR0FBRyxDQUFDSSxLQUFLO29CQUNoQkMsT0FBTyxFQUFFTCxHQUFHLENBQUNLLE9BQU87bUJBTGZMLEdBQUcsQ0FBQ0MsRUFBRTs7Ozt5QkFNWDs7Ozs7cUJBQ087U0FDWixDQUFDOzs7OztZQUNDLENBQ0w7Q0FDSDtBQXhCdUJQLEtBQUFBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9neW0tbGlzdC5qcz8xM2YwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBHeW1JdGVtIGZyb20gXCIuL2d5bS1pdGVtXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHeW1MaXN0KHByb3BzKSB7XHJcbiAgY29uc3QgeyBpdGVtcyB9ID0gcHJvcHM7XHJcblxyXG4gIGlmICghaXRlbXMpIHtcclxuICAgIHJldHVybiA8cD5Mb2FkaW5nIGd5bSBkYXRhPC9wPjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8dWw+XHJcbiAgICAgIHtpdGVtcy5tYXAoKGd5bSkgPT4gKFxyXG4gICAgICAgIC8vICFUT0RPIHNob3VsZCB0aGUga2V5IGJlIGluIHRoZSBmcmFnbWVudD9cclxuICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICA8R3ltSXRlbVxyXG4gICAgICAgICAgICBrZXk9e2d5bS5pZH1cclxuICAgICAgICAgICAgaWQ9e2d5bS5pZH1cclxuICAgICAgICAgICAgbmFtZT17Z3ltLm5hbWV9XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtneW0uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIGltYWdlPXtneW0uaW1hZ2V9XHJcbiAgICAgICAgICAgIGFkZHJlc3M9e2d5bS5hZGRyZXNzfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICApKX1cclxuICAgIDwvdWw+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiRnJhZ21lbnQiLCJHeW1JdGVtIiwiR3ltTGlzdCIsInByb3BzIiwiaXRlbXMiLCJwIiwidWwiLCJtYXAiLCJneW0iLCJpZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwiYWRkcmVzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/gym-list.js\n");

/***/ })

});