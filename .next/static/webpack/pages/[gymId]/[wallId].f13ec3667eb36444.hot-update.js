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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ClimbLogModal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n\n\n\nvar _s = $RefreshSig$();\nfunction ClimbLogModal(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), opened = ref[0], setOpened = ref[1];\n    var items = props.items;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Modal, {\n                opened: opened,\n                onClose: function() {\n                    return setOpened(false);\n                },\n                title: \"Introduce yourself!\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    align: \"center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                children: \"add this\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1-final\\\\components\\\\climb-log-modal.js\",\n                                lineNumber: 19,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                children: \"add that\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1-final\\\\components\\\\climb-log-modal.js\",\n                                lineNumber: 20,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                children: \"add some\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1-final\\\\components\\\\climb-log-modal.js\",\n                                lineNumber: 21,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: \"Submit\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1-final\\\\components\\\\climb-log-modal.js\",\n                                lineNumber: 22,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1-final\\\\components\\\\climb-log-modal.js\",\n                        lineNumber: 18,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1-final\\\\components\\\\climb-log-modal.js\",\n                    lineNumber: 17,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1-final\\\\components\\\\climb-log-modal.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Group, {\n                position: \"center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                    variant: \"light\",\n                    color: \"blue\",\n                    fullWidth: true,\n                    style: {\n                        marginTop: 14\n                    },\n                    onClick: function() {\n                        return setOpened(true);\n                    },\n                    children: \"Log Climb\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1-final\\\\components\\\\climb-log-modal.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1-final\\\\components\\\\climb-log-modal.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(ClimbLogModal, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = ClimbLogModal;\nvar _c;\n$RefreshReg$(_c, \"ClimbLogModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NsaW1iLWxvZy1tb2RhbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUFpQztBQUNvQjs7QUFFdEMsU0FBU0ksYUFBYSxDQUFDQyxLQUFLLEVBQUU7O0lBQzNDLElBQTRCTCxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBSjdDLE1BSWUsR0FBZUEsR0FBZSxHQUE5QixFQUpmLFNBSTBCLEdBQUlBLEdBQWUsR0FBbkI7SUFFeEIsSUFBTSxLQUFPLEdBQUtLLEtBQUssQ0FBZkcsS0FBSztJQUViLHFCQUNFOzswQkFDRSw4REFBQ1AsZ0RBQUs7Z0JBQ0pLLE1BQU0sRUFBRUEsTUFBTTtnQkFDZEcsT0FBTyxFQUFFOzJCQUFNRixTQUFTLENBQUMsS0FBSyxDQUFDO2lCQUFBO2dCQUMvQkcsS0FBSyxFQUFDLHFCQUFxQjswQkFHekIsNEVBQUNDLEtBQUc7b0JBQUNDLEtBQUssRUFBQyxRQUFROzhCQUNqQiw0RUFBQ0MsTUFBSTs7MENBQ0gsOERBQUNDLFFBQU07Z0NBQUNDLElBQUksRUFBQyxRQUFROzBDQUFDLFVBQVE7Ozs7O29DQUFTOzBDQUN2Qyw4REFBQ0QsUUFBTTtnQ0FBQ0MsSUFBSSxFQUFDLFFBQVE7MENBQUMsVUFBUTs7Ozs7b0NBQVM7MENBQ3ZDLDhEQUFDRCxRQUFNO2dDQUFDQyxJQUFJLEVBQUMsUUFBUTswQ0FBQyxVQUFROzs7OztvQ0FBUzswQ0FDdkMsOERBQUNELFFBQU07MENBQUMsUUFBTTs7Ozs7b0NBQVM7Ozs7Ozs0QkFDbEI7Ozs7O3dCQUNIOzs7OztvQkFFRjswQkFFUiw4REFBQ1gsZ0RBQUs7Z0JBQUNhLFFBQVEsRUFBQyxRQUFROzBCQUN0Qiw0RUFBQ2QsaURBQU07b0JBQ0xlLE9BQU8sRUFBQyxPQUFPO29CQUNmQyxLQUFLLEVBQUMsTUFBTTtvQkFDWkMsU0FBUztvQkFDVEMsS0FBSyxFQUFFO3dCQUFFQyxTQUFTLEVBQUUsRUFBRTtxQkFBRTtvQkFDeEJDLE9BQU8sRUFBRTsrQkFBTWYsU0FBUyxDQUFDLElBQUksQ0FBQztxQkFBQTs4QkFDL0IsV0FFRDs7Ozs7d0JBQVM7Ozs7O29CQUNIOztvQkFDUCxDQUNIO0NBQ0g7R0FyQ3VCSCxhQUFhO0FBQWJBLEtBQUFBLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jbGltYi1sb2ctbW9kYWwuanM/ZmJhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNb2RhbCwgQnV0dG9uLCBHcm91cCB9IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDbGltYkxvZ01vZGFsKHByb3BzKSB7XHJcbiAgY29uc3QgW29wZW5lZCwgc2V0T3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgeyBpdGVtcyB9ID0gcHJvcHM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuZWQ9e29wZW5lZH1cclxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRPcGVuZWQoZmFsc2UpfVxyXG4gICAgICAgIHRpdGxlPVwiSW50cm9kdWNlIHlvdXJzZWxmIVwiXHJcbiAgICAgID5cclxuICAgICAgICB7XHJcbiAgICAgICAgICA8ZGl2IGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiPmFkZCB0aGlzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+YWRkIHRoYXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIj5hZGQgc29tZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgPC9Nb2RhbD5cclxuXHJcbiAgICAgIDxHcm91cCBwb3NpdGlvbj1cImNlbnRlclwiPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHZhcmlhbnQ9XCJsaWdodFwiXHJcbiAgICAgICAgICBjb2xvcj1cImJsdWVcIlxyXG4gICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IDE0IH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuZWQodHJ1ZSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgTG9nIENsaW1iXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvR3JvdXA+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIk1vZGFsIiwiQnV0dG9uIiwiR3JvdXAiLCJDbGltYkxvZ01vZGFsIiwicHJvcHMiLCJvcGVuZWQiLCJzZXRPcGVuZWQiLCJpdGVtcyIsIm9uQ2xvc2UiLCJ0aXRsZSIsImRpdiIsImFsaWduIiwiZm9ybSIsImJ1dHRvbiIsInR5cGUiLCJwb3NpdGlvbiIsInZhcmlhbnQiLCJjb2xvciIsImZ1bGxXaWR0aCIsInN0eWxlIiwibWFyZ2luVG9wIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/climb-log-modal.js\n");

/***/ })

});