"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\n\n\nvar _s = $RefreshSig$();\nfunction App(props) {\n    _s();\n    var Component = props.Component, pageProps = props.pageProps;\n    var theme1 = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_3__.useMantineTheme)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), opened = ref[0], setOpened = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Climbing App\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\pages\\\\_app.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"minimum-scale=1, initial-scale=1, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\pages\\\\_app.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\pages\\\\_app.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.AppShell, {\n                padding: \"md\",\n                header: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Header, {\n                    height: 70,\n                    p: \"md\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            alignItems: \"center\",\n                            height: \"100%\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.MediaQuery, {\n                                largerThan: \"sm\",\n                                styles: {\n                                    display: \"none\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Burger, {\n                                    opened: opened,\n                                    onClick: function() {\n                                        return setOpened(function(o) {\n                                            return !o;\n                                        });\n                                    },\n                                    size: \"sm\",\n                                    color: theme1.colors.gray[6],\n                                    mr: \"xl\"\n                                }, void 0, false, void 0, void 0)\n                            }, void 0, false, void 0, void 0),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Group, {\n                                position: \"apart\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                    transform: \"capitalize\",\n                                    children: \"Welcome to the climbing app!\"\n                                }, void 0, false, void 0, void 0)\n                            }, void 0, false, void 0, void 0)\n                        ]\n                    }, void 0, true, void 0, void 0)\n                }, void 0, false, void 0, void 0),\n                styles: function(theme) {\n                    return {\n                        main: {\n                            backgroundColor: theme.colorScheme === \"dark\" ? theme.colors.dark[8] : theme.colors.gray[0]\n                        }\n                    };\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.MantineProvider, {\n                    withGlobalStyles: true,\n                    withNormalizeCSS: true,\n                    theme: {\n                        /** Put your mantine theme override here */ colorScheme: \"light\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\pages\\\\_app.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\pages\\\\_app.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\pages\\\\_app.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(App, \"61wxeL5xRdQ6KAqlWWajHrBOJuQ=\", false, function() {\n    return [\n        _mantine_core__WEBPACK_IMPORTED_MODULE_3__.useMantineTheme\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUM2QjtBQUMrRjtBQUMzRjs7QUFFbEIsU0FBU1UsR0FBRyxDQUFDQyxLQUFlLEVBQUU7O0lBQzNDLElBQVFDLFNBQVMsR0FBZ0JELEtBQUssQ0FBOUJDLFNBQVMsRUFBRUMsU0FBUyxHQUFLRixLQUFLLENBQW5CRSxTQUFTO0lBQzVCLElBQU1DLE1BQUssR0FBR1IsOERBQWUsRUFBRTtJQUMvQixJQUE0QkcsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQVI3QyxNQVFlLEdBQWVBLEdBQWUsR0FBOUIsRUFSZixTQVEwQixHQUFJQSxHQUFlLEdBQW5CO0lBRXhCLHFCQUdFOzswQkFDRSw4REFBQ1Qsa0RBQUk7O2tDQUNILDhEQUFDaUIsT0FBSztrQ0FBQyxjQUFZOzs7Ozs0QkFBUTtrQ0FDM0IsOERBQUNDLE1BQUk7d0JBQUNDLElBQUksRUFBQyxVQUFVO3dCQUFDQyxPQUFPLEVBQUMsc0RBQXNEOzs7Ozs0QkFBRzs7Ozs7O29CQUNsRjswQkFDUCw4REFBQ2xCLG1EQUFRO2dCQUNQbUIsT0FBTyxFQUFDLElBQUk7Z0JBQ1pDLE1BQU0sZ0JBQUUsOERBQUNuQixpREFBTTtvQkFBQ29CLE1BQU0sRUFBRSxFQUFFO29CQUFFQyxDQUFDLEVBQUMsSUFBSTs4QkFDOUIsNEVBQUNDLEtBQUc7d0JBQUNDLEtBQUssRUFBRTs0QkFBRUMsT0FBTyxFQUFFLE1BQU07NEJBQUVDLFVBQVUsRUFBRSxRQUFROzRCQUFFTCxNQUFNLEVBQUUsTUFBTTt5QkFBRTs7MENBQ25FLDhEQUFDbkIscURBQVU7Z0NBQUN5QixVQUFVLEVBQUMsSUFBSTtnQ0FBQ0MsTUFBTSxFQUFFO29DQUFFSCxPQUFPLEVBQUUsTUFBTTtpQ0FBRTswQ0FDckQsNEVBQUN0QixpREFBTTtvQ0FDTFUsTUFBTSxFQUFFQSxNQUFNO29DQUNkZ0IsT0FBTyxFQUFFOytDQUFNZixTQUFTLENBQUMsU0FBQ2dCLENBQUM7bURBQUssQ0FBQ0EsQ0FBQzt5Q0FBQSxDQUFDO3FDQUFBO29DQUNuQ0MsSUFBSSxFQUFDLElBQUk7b0NBQ1RDLEtBQUssRUFBRXBCLE1BQUssQ0FBQ3FCLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLENBQUMsQ0FBQztvQ0FDM0JDLEVBQUUsRUFBQyxJQUFJO2lFQUNQOzZEQUNTOzBDQUNiLDhEQUFDN0IsZ0RBQUs7Z0NBQUM4QixRQUFRLEVBQUMsT0FBTzswQ0FDckIsNEVBQUMvQiwrQ0FBSTtvQ0FBQ2dDLFNBQVMsRUFBQyxZQUFZOzhDQUFDLDhCQUU3QjtpRUFBTzs2REFFRDs7b0RBRUo7aURBQ0M7Z0JBQ1hULE1BQU0sRUFBRSxTQUFDaEIsS0FBSzsyQkFBTTt3QkFDbEIwQixJQUFJLEVBQUU7NEJBQUVDLGVBQWUsRUFBRTNCLEtBQUssQ0FBQzRCLFdBQVcsS0FBSyxNQUFNLEdBQUc1QixLQUFLLENBQUNxQixNQUFNLENBQUNRLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRzdCLEtBQUssQ0FBQ3FCLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLENBQUMsQ0FBQzt5QkFBRTtxQkFDdEc7aUJBQUM7MEJBRUosNEVBQUNuQywwREFBZTtvQkFDZDJDLGdCQUFnQjtvQkFDaEJDLGdCQUFnQjtvQkFDaEIvQixLQUFLLEVBQUU7d0JBQ0wsMkNBQTJDLENBQzNDNEIsV0FBVyxFQUFFLE9BQU87cUJBQ3JCOzhCQUVELDRFQUFDOUIsU0FBUyxvQkFBS0MsU0FBUzs7Ozs0QkFBSTs7Ozs7d0JBQ1o7Ozs7O29CQUNQOztvQkFDVixDQUNIO0NBQ0g7R0FwRHVCSCxHQUFHOztRQUVYSiwwREFBZTs7O0FBRlBJLEtBQUFBLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgTWFudGluZVByb3ZpZGVyLCBBcHBTaGVsbCwgSGVhZGVyLCBNZWRpYVF1ZXJ5LCBCdXJnZXIsIHVzZU1hbnRpbmVUaGVtZSwgVGV4dCwgQnV0dG9uLCBHcm91cCB9IGZyb20gJ0BtYW50aW5lL2NvcmUnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcChwcm9wczogQXBwUHJvcHMpIHtcclxuICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSBwcm9wcztcclxuICBjb25zdCB0aGVtZSA9IHVzZU1hbnRpbmVUaGVtZSgpO1xyXG4gIGNvbnN0IFtvcGVuZWQsIHNldE9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHJldHVybiAoXHJcblxyXG4gICAgXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+Q2xpbWJpbmcgQXBwPC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwibWluaW11bS1zY2FsZT0xLCBpbml0aWFsLXNjYWxlPTEsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEFwcFNoZWxsXHJcbiAgICAgICAgcGFkZGluZz1cIm1kXCJcclxuICAgICAgICBoZWFkZXI9ezxIZWFkZXIgaGVpZ2h0PXs3MH0gcD1cIm1kXCI+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgaGVpZ2h0OiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgPE1lZGlhUXVlcnkgbGFyZ2VyVGhhbj1cInNtXCIgc3R5bGVzPXt7IGRpc3BsYXk6ICdub25lJyB9fT5cclxuICAgICAgICAgICAgICAgIDxCdXJnZXJcclxuICAgICAgICAgICAgICAgICAgb3BlbmVkPXtvcGVuZWR9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW5lZCgobykgPT4gIW8pfVxyXG4gICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj17dGhlbWUuY29sb3JzLmdyYXlbNl19XHJcbiAgICAgICAgICAgICAgICAgIG1yPVwieGxcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L01lZGlhUXVlcnk+XHJcbiAgICAgICAgICAgICAgPEdyb3VwIHBvc2l0aW9uPSdhcGFydCc+XHJcbiAgICAgICAgICAgICAgICA8VGV4dCB0cmFuc2Zvcm09J2NhcGl0YWxpemUnPlxyXG4gICAgICAgICAgICAgICAgICBXZWxjb21lIHRvIHRoZSBjbGltYmluZyBhcHAhXHJcbiAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L0dyb3VwPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvSGVhZGVyPn1cclxuICAgICAgICBzdHlsZXM9eyh0aGVtZSkgPT4gKHtcclxuICAgICAgICAgIG1haW46IHsgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvclNjaGVtZSA9PT0gJ2RhcmsnID8gdGhlbWUuY29sb3JzLmRhcmtbOF0gOiB0aGVtZS5jb2xvcnMuZ3JheVswXSB9LFxyXG4gICAgICAgIH0pfVxyXG4gICAgICA+XHJcbiAgICAgIDxNYW50aW5lUHJvdmlkZXJcclxuICAgICAgICB3aXRoR2xvYmFsU3R5bGVzXHJcbiAgICAgICAgd2l0aE5vcm1hbGl6ZUNTU1xyXG4gICAgICAgIHRoZW1lPXt7XHJcbiAgICAgICAgICAvKiogUHV0IHlvdXIgbWFudGluZSB0aGVtZSBvdmVycmlkZSBoZXJlICovXHJcbiAgICAgICAgICBjb2xvclNjaGVtZTogJ2xpZ2h0JyxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L01hbnRpbmVQcm92aWRlcj5cclxuICAgICAgPC9BcHBTaGVsbD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsiSGVhZCIsIk1hbnRpbmVQcm92aWRlciIsIkFwcFNoZWxsIiwiSGVhZGVyIiwiTWVkaWFRdWVyeSIsIkJ1cmdlciIsInVzZU1hbnRpbmVUaGVtZSIsIlRleHQiLCJHcm91cCIsInVzZVN0YXRlIiwiQXBwIiwicHJvcHMiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aGVtZSIsIm9wZW5lZCIsInNldE9wZW5lZCIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwicGFkZGluZyIsImhlYWRlciIsImhlaWdodCIsInAiLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwibGFyZ2VyVGhhbiIsInN0eWxlcyIsIm9uQ2xpY2siLCJvIiwic2l6ZSIsImNvbG9yIiwiY29sb3JzIiwiZ3JheSIsIm1yIiwicG9zaXRpb24iLCJ0cmFuc2Zvcm0iLCJtYWluIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3JTY2hlbWUiLCJkYXJrIiwid2l0aEdsb2JhbFN0eWxlcyIsIndpdGhOb3JtYWxpemVDU1MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ })

});