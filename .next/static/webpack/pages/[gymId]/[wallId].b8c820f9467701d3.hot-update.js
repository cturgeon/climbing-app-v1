"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[gymId]/[wallId]",{

/***/ "./components/climb-log-modal.js":
/*!***************************************!*\
  !*** ./components/climb-log-modal.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ClimbLogModal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n\n\n\nvar _s = $RefreshSig$();\nfunction ClimbLogModal(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), opened = ref[0], setOpened = ref[1];\n    var items = props.items;\n    console.log(items);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Modal, {\n                opened: opened,\n                onClose: function() {\n                    return setOpened(false);\n                },\n                title: \"Introduce yourself!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1-final\\\\components\\\\climb-log-modal.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Group, {\n                position: \"center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                    variant: \"light\",\n                    color: \"blue\",\n                    fullWidth: true,\n                    style: {\n                        marginTop: 14\n                    },\n                    onClick: function() {\n                        return setOpened(true);\n                    },\n                    children: \"Log Climb\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1-final\\\\components\\\\climb-log-modal.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1-final\\\\components\\\\climb-log-modal.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(ClimbLogModal, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = ClimbLogModal;\nvar _c;\n$RefreshReg$(_c, \"ClimbLogModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NsaW1iLWxvZy1tb2RhbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUFpQztBQUNvQjs7QUFFdEMsU0FBU0ksYUFBYSxDQUFDQyxLQUFLLEVBQUU7O0lBQzNDLElBQTRCTCxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBSjdDLE1BSWUsR0FBZUEsR0FBZSxHQUE5QixFQUpmLFNBSTBCLEdBQUlBLEdBQWUsR0FBbkI7SUFFeEIsSUFBTSxLQUFPLEdBQUtLLEtBQUssQ0FBZkcsS0FBSztJQUViQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDLENBQUM7SUFFbkIscUJBQ0U7OzBCQUNFLDhEQUFDUCxnREFBSztnQkFDSkssTUFBTSxFQUFFQSxNQUFNO2dCQUNkSyxPQUFPLEVBQUU7MkJBQU1KLFNBQVMsQ0FBQyxLQUFLLENBQUM7aUJBQUE7Z0JBQy9CSyxLQUFLLEVBQUMscUJBQXFCOzs7OztvQkFHckI7MEJBRVIsOERBQUNULGdEQUFLO2dCQUFDVSxRQUFRLEVBQUMsUUFBUTswQkFDdEIsNEVBQUNYLGlEQUFNO29CQUNMWSxPQUFPLEVBQUMsT0FBTztvQkFDZkMsS0FBSyxFQUFDLE1BQU07b0JBQ1pDLFNBQVM7b0JBQ1RDLEtBQUssRUFBRTt3QkFBRUMsU0FBUyxFQUFFLEVBQUU7cUJBQUU7b0JBQ3hCQyxPQUFPLEVBQUU7K0JBQU1aLFNBQVMsQ0FBQyxJQUFJLENBQUM7cUJBQUE7OEJBQy9CLFdBRUQ7Ozs7O3dCQUFTOzs7OztvQkFDSDs7b0JBQ1AsQ0FDSDtDQUNIO0dBOUJ1QkgsYUFBYTtBQUFiQSxLQUFBQSxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY2xpbWItbG9nLW1vZGFsLmpzP2ZiYTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTW9kYWwsIEJ1dHRvbiwgR3JvdXAgfSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2xpbWJMb2dNb2RhbChwcm9wcykge1xyXG4gIGNvbnN0IFtvcGVuZWQsIHNldE9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHsgaXRlbXMgfSA9IHByb3BzO1xyXG5cclxuICBjb25zb2xlLmxvZyhpdGVtcyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuZWQ9e29wZW5lZH1cclxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRPcGVuZWQoZmFsc2UpfVxyXG4gICAgICAgIHRpdGxlPVwiSW50cm9kdWNlIHlvdXJzZWxmIVwiXHJcbiAgICAgID5cclxuICAgICAgICB7LyogTW9kYWwgY29udGVudCAqL31cclxuICAgICAgPC9Nb2RhbD5cclxuXHJcbiAgICAgIDxHcm91cCBwb3NpdGlvbj1cImNlbnRlclwiPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHZhcmlhbnQ9XCJsaWdodFwiXHJcbiAgICAgICAgICBjb2xvcj1cImJsdWVcIlxyXG4gICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IDE0IH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuZWQodHJ1ZSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgTG9nIENsaW1iXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvR3JvdXA+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIk1vZGFsIiwiQnV0dG9uIiwiR3JvdXAiLCJDbGltYkxvZ01vZGFsIiwicHJvcHMiLCJvcGVuZWQiLCJzZXRPcGVuZWQiLCJpdGVtcyIsImNvbnNvbGUiLCJsb2ciLCJvbkNsb3NlIiwidGl0bGUiLCJwb3NpdGlvbiIsInZhcmlhbnQiLCJjb2xvciIsImZ1bGxXaWR0aCIsInN0eWxlIiwibWFyZ2luVG9wIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/climb-log-modal.js\n");

/***/ })

});