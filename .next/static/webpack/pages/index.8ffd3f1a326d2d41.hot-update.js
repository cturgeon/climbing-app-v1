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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_gym_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/gym-list */ \"./components/gym-list.js\");\n\n\n\n\nvar __N_SSG = true;\nfunction Home(props) {\n    var gymData = props.gymData;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default()), {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\pages\\\\index.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                size: \"md\",\n                transform: \"capitalize\",\n                children: \"You can begin by selecting a gym below\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\pages\\\\index.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_gym_list__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                items: gymData\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\pages\\\\index.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\pages\\\\index.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQTJDO0FBQ2Q7QUFJZ0I7O0FBRTlCLFNBQVNJLElBQUksQ0FBQ0MsS0FBSyxFQUFFO0lBQ2xDLElBQU0sT0FBUyxHQUFLQSxLQUFLLENBQWpCQyxPQUFPO0lBQ2YscUJBQ0UsOERBQUNDLEtBQUc7OzBCQUNGLDhEQUFDTCw4Q0FBUTs7OztvQkFBWTswQkFDckIsOERBQUNGLCtDQUFJO2dCQUFDUSxJQUFJLEVBQUMsSUFBSTtnQkFBQ0MsU0FBUyxFQUFDLFlBQVk7MEJBQUMsd0NBRXZDOzs7OztvQkFBTzswQkFDUCw4REFBQ04sNERBQU87Z0JBQUNPLEtBQUssRUFBRUosT0FBTzs7Ozs7b0JBQUk7Ozs7OztZQUN2QixDQUNOO0NBQ0g7QUFYdUJGLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXh0LCBHcmlkIH0gZnJvbSBcIkBtYW50aW5lL2NvcmVcIjtcbmltcG9ydCBGcmFnbWVudCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgZ2V0QWxsR3ltcyB9IGZyb20gXCIuLi9oZWxwZXJzL2FwaS11dGlsXCI7XG5cbmltcG9ydCBHeW1MaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL2d5bS1saXN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcbiAgY29uc3QgeyBneW1EYXRhIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEZyYWdtZW50PjwvRnJhZ21lbnQ+XG4gICAgICA8VGV4dCBzaXplPVwibWRcIiB0cmFuc2Zvcm09XCJjYXBpdGFsaXplXCI+XG4gICAgICAgIFlvdSBjYW4gYmVnaW4gYnkgc2VsZWN0aW5nIGEgZ3ltIGJlbG93XG4gICAgICA8L1RleHQ+XG4gICAgICA8R3ltTGlzdCBpdGVtcz17Z3ltRGF0YX0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuLy8gcHJlLXJlbmRlciBzaW5jZSB0aGVyZSBhcmVuJ3QgbWFueSBneW1zIHRvIHNob3cgYW5kIHRoZXkgZG9uJ3QgY2hhbmdlIHZlcnkgb2Z0ZW5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgZ3ltRGF0YSA9IGF3YWl0IGdldEFsbEd5bXMoKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZ3ltRGF0YTogZ3ltRGF0YSxcbiAgICB9LFxuICB9O1xufVxuIl0sIm5hbWVzIjpbIlRleHQiLCJHcmlkIiwiRnJhZ21lbnQiLCJHeW1MaXN0IiwiSG9tZSIsInByb3BzIiwiZ3ltRGF0YSIsImRpdiIsInNpemUiLCJ0cmFuc2Zvcm0iLCJpdGVtcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});