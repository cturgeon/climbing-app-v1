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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ClimbLogModal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n\n\n\nvar _s = $RefreshSig$();\nfunction ClimbLogModal(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), opened = ref[0], setOpened = ref[1];\n    var _items = props.items, id = _items.id, name = _items.name, grade = _items.grade, description = _items.description, image = _items.image;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Modal, {\n                opened: opened,\n                onClose: function() {\n                    return setOpened(false);\n                },\n                title: \"Log your climb\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    align: \"center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1-final\\\\components\\\\climb-log-modal.js\",\n                                lineNumber: 19,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: grade\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1-final\\\\components\\\\climb-log-modal.js\",\n                                lineNumber: 20,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: description\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1-final\\\\components\\\\climb-log-modal.js\",\n                                lineNumber: 21,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                children: \"Comments\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1-final\\\\components\\\\climb-log-modal.js\",\n                                lineNumber: 22,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                children: \"add that\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1-final\\\\components\\\\climb-log-modal.js\",\n                                lineNumber: 23,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                children: \"add some\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1-final\\\\components\\\\climb-log-modal.js\",\n                                lineNumber: 24,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: \"Submit\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1-final\\\\components\\\\climb-log-modal.js\",\n                                lineNumber: 25,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1-final\\\\components\\\\climb-log-modal.js\",\n                        lineNumber: 18,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1-final\\\\components\\\\climb-log-modal.js\",\n                    lineNumber: 17,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1-final\\\\components\\\\climb-log-modal.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Group, {\n                position: \"center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                    variant: \"light\",\n                    color: \"blue\",\n                    fullWidth: true,\n                    style: {\n                        marginTop: 14\n                    },\n                    onClick: function() {\n                        return setOpened(true);\n                    },\n                    children: \"Log Climb\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1-final\\\\components\\\\climb-log-modal.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1-final\\\\components\\\\climb-log-modal.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(ClimbLogModal, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = ClimbLogModal;\nvar _c;\n$RefreshReg$(_c, \"ClimbLogModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NsaW1iLWxvZy1tb2RhbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUFpQztBQUNvQjs7QUFFdEMsU0FBU0ksYUFBYSxDQUFDQyxLQUFLLEVBQUU7O0lBQzNDLElBQTRCTCxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBSjdDLE1BSWUsR0FBZUEsR0FBZSxHQUE5QixFQUpmLFNBSTBCLEdBQUlBLEdBQWUsR0FBbkI7SUFFeEIsSUFBZ0RLLE1BQVcsR0FBWEEsS0FBSyxDQUFDRyxLQUFLLEVBQW5EQyxFQUFFLEdBQXNDSixNQUFXLENBQW5ESSxFQUFFLEVBQUVDLElBQUksR0FBZ0NMLE1BQVcsQ0FBL0NLLElBQUksRUFBRUMsS0FBSyxHQUF5Qk4sTUFBVyxDQUF6Q00sS0FBSyxFQUFFQyxXQUFXLEdBQVlQLE1BQVcsQ0FBbENPLFdBQVcsRUFBRUMsS0FBSyxHQUFLUixNQUFXLENBQXJCUSxLQUFLO0lBRTNDLHFCQUNFOzswQkFDRSw4REFBQ1osZ0RBQUs7Z0JBQ0pLLE1BQU0sRUFBRUEsTUFBTTtnQkFDZFEsT0FBTyxFQUFFOzJCQUFNUCxTQUFTLENBQUMsS0FBSyxDQUFDO2lCQUFBO2dCQUMvQlEsS0FBSyxFQUFDLGdCQUFnQjswQkFHcEIsNEVBQUNDLEtBQUc7b0JBQUNDLEtBQUssRUFBQyxRQUFROzhCQUNqQiw0RUFBQ0MsTUFBSTs7MENBQ0gsOERBQUNDLElBQUU7MENBQUVULElBQUk7Ozs7O29DQUFNOzBDQUNmLDhEQUFDVSxHQUFDOzBDQUFFVCxLQUFLOzs7OztvQ0FBSzswQ0FDZCw4REFBQ1MsR0FBQzswQ0FBRVIsV0FBVzs7Ozs7b0NBQUs7MENBQ3BCLDhEQUFDUyxRQUFNO2dDQUFDQyxJQUFJLEVBQUMsUUFBUTswQ0FBQyxVQUFROzs7OztvQ0FBUzswQ0FDdkMsOERBQUNELFFBQU07Z0NBQUNDLElBQUksRUFBQyxRQUFROzBDQUFDLFVBQVE7Ozs7O29DQUFTOzBDQUN2Qyw4REFBQ0QsUUFBTTtnQ0FBQ0MsSUFBSSxFQUFDLFFBQVE7MENBQUMsVUFBUTs7Ozs7b0NBQVM7MENBQ3ZDLDhEQUFDRCxRQUFNOzBDQUFDLFFBQU07Ozs7O29DQUFTOzs7Ozs7NEJBQ2xCOzs7Ozt3QkFDSDs7Ozs7b0JBRUY7MEJBRVIsOERBQUNsQixnREFBSztnQkFBQ29CLFFBQVEsRUFBQyxRQUFROzBCQUN0Qiw0RUFBQ3JCLGlEQUFNO29CQUNMc0IsT0FBTyxFQUFDLE9BQU87b0JBQ2ZDLEtBQUssRUFBQyxNQUFNO29CQUNaQyxTQUFTO29CQUNUQyxLQUFLLEVBQUU7d0JBQUVDLFNBQVMsRUFBRSxFQUFFO3FCQUFFO29CQUN4QkMsT0FBTyxFQUFFOytCQUFNdEIsU0FBUyxDQUFDLElBQUksQ0FBQztxQkFBQTs4QkFDL0IsV0FFRDs7Ozs7d0JBQVM7Ozs7O29CQUNIOztvQkFDUCxDQUNIO0NBQ0g7R0F4Q3VCSCxhQUFhO0FBQWJBLEtBQUFBLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jbGltYi1sb2ctbW9kYWwuanM/ZmJhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNb2RhbCwgQnV0dG9uLCBHcm91cCB9IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDbGltYkxvZ01vZGFsKHByb3BzKSB7XHJcbiAgY29uc3QgW29wZW5lZCwgc2V0T3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgeyBpZCwgbmFtZSwgZ3JhZGUsIGRlc2NyaXB0aW9uLCBpbWFnZSB9ID0gcHJvcHMuaXRlbXM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuZWQ9e29wZW5lZH1cclxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRPcGVuZWQoZmFsc2UpfVxyXG4gICAgICAgIHRpdGxlPVwiTG9nIHlvdXIgY2xpbWJcIlxyXG4gICAgICA+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgPGRpdiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICA8aDE+e25hbWV9PC9oMT5cclxuICAgICAgICAgICAgICA8cD57Z3JhZGV9PC9wPlxyXG4gICAgICAgICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+Q29tbWVudHM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIj5hZGQgdGhhdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiPmFkZCBzb21lPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICA8L01vZGFsPlxyXG5cclxuICAgICAgPEdyb3VwIHBvc2l0aW9uPVwiY2VudGVyXCI+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgdmFyaWFudD1cImxpZ2h0XCJcclxuICAgICAgICAgIGNvbG9yPVwiYmx1ZVwiXHJcbiAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogMTQgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW5lZCh0cnVlKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBMb2cgQ2xpbWJcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9Hcm91cD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTW9kYWwiLCJCdXR0b24iLCJHcm91cCIsIkNsaW1iTG9nTW9kYWwiLCJwcm9wcyIsIm9wZW5lZCIsInNldE9wZW5lZCIsIml0ZW1zIiwiaWQiLCJuYW1lIiwiZ3JhZGUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwib25DbG9zZSIsInRpdGxlIiwiZGl2IiwiYWxpZ24iLCJmb3JtIiwiaDEiLCJwIiwiYnV0dG9uIiwidHlwZSIsInBvc2l0aW9uIiwidmFyaWFudCIsImNvbG9yIiwiZnVsbFdpZHRoIiwic3R5bGUiLCJtYXJnaW5Ub3AiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/climb-log-modal.js\n");

/***/ })

});