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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\n\n\nvar _s = $RefreshSig$();\nfunction App(props) {\n    _s();\n    var Component = props.Component, pageProps = props.pageProps;\n    var theme1 = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_3__.useMantineTheme)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), opened = ref[0], setOpened = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Climbing App\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\pages\\\\_app.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"minimum-scale=1, initial-scale=1, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\pages\\\\_app.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\pages\\\\_app.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.AppShell, {\n                padding: \"md\",\n                navbarOffsetBreakpoint: \"sm\",\n                fixed: true,\n                navbar: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Navbar, {\n                    position: {\n                        right: 0\n                    },\n                    p: \"md\",\n                    hiddenBreakpoint: \"sm\",\n                    hidden: !opened,\n                    width: {\n                        sm: 200,\n                        lg: 300\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                            children: \"View Home Gym\"\n                        }, void 0, false, void 0, void 0),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                            children: \"View Logs\"\n                        }, void 0, false, void 0, void 0),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                            children: \"Settings\"\n                        }, void 0, false, void 0, void 0),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Navbar.Section, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                children: \"Log in/out\"\n                            }, void 0, false, void 0, void 0)\n                        }, void 0, false, void 0, void 0),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Navbar.Section, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                children: \"Log in/out\"\n                            }, void 0, false, void 0, void 0)\n                        }, void 0, false, void 0, void 0),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Navbar.Section, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                children: \"Log in/out\"\n                            }, void 0, false, void 0, void 0)\n                        }, void 0, false, void 0, void 0)\n                    ]\n                }, void 0, true, void 0, void 0),\n                header: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Header, {\n                    height: 70,\n                    p: \"md\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            justifyContent: \"space-between\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                        component: \"a\",\n                                        href: \"/\",\n                                        children: \"Climb Logs\"\n                                    }, void 0, false, void 0, void 0)\n                                }, void 0, false, void 0, void 0)\n                            }, void 0, false, void 0, void 0),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.MediaQuery, {\n                                largerThan: \"sm\",\n                                styles: {\n                                    display: \"none\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Burger, {\n                                    opened: opened,\n                                    onClick: function() {\n                                        return setOpened(function(o) {\n                                            return !o;\n                                        });\n                                    },\n                                    size: \"sm\",\n                                    color: theme1.colors.gray[6],\n                                    mr: \"xl\"\n                                }, void 0, false, void 0, void 0)\n                            }, void 0, false, void 0, void 0)\n                        ]\n                    }, void 0, true, void 0, void 0)\n                }, void 0, false, void 0, void 0),\n                styles: function(theme) {\n                    return {\n                        main: {\n                            backgroundColor: theme.colorScheme === \"dark\" ? theme.colors.dark[8] : theme.colors.gray[0]\n                        }\n                    };\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.MantineProvider, {\n                    withGlobalStyles: true,\n                    withNormalizeCSS: true,\n                    theme: {\n                        /** Put your mantine theme override here */ colorScheme: \"light\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\pages\\\\_app.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\pages\\\\_app.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\pages\\\\_app.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(App, \"61wxeL5xRdQ6KAqlWWajHrBOJuQ=\", false, function() {\n    return [\n        _mantine_core__WEBPACK_IMPORTED_MODULE_3__.useMantineTheme\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUs7MkJBQU07d0JBQ2xCcUMsSUFBSSxFQUFFOzRCQUFFQyxlQUFlLEVBQUV0QyxLQUFLLENBQUN1QyxXQUFXLEtBQUssTUFBTSxHQUFHdkMsS0FBSyxDQUFDa0MsTUFBTSxDQUFDTSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUd4QyxLQUFLLENBQUNrQyxNQUFNLENBQUNDLElBQUksQ0FBQyxDQUFDLENBQUM7eUJBQUU7cUJBQ3RHO2lCQUFDOzBCQUVGLDRFQUFDbEQsMERBQWU7b0JBQ2R3RCxnQkFBZ0I7b0JBQ2hCQyxnQkFBZ0I7b0JBQ2hCMUMsS0FBSyxFQUFFO3dCQUNMLDJDQUEyQyxDQUMzQ3VDLFdBQVcsRUFBRSxPQUFPO3FCQUNyQjs4QkFFRCw0RUFBQ3pDLFNBQVMsb0JBQUtDLFNBQVM7Ozs7NEJBQUk7Ozs7O3dCQUNaOzs7OztvQkFDVDs7b0JBQ1YsQ0FDSDtDQUNIO0dBOUR1QkgsR0FBRzs7UUFFWE4sMERBQWU7OztBQUZQTSxLQUFBQSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IE1hbnRpbmVQcm92aWRlciwgQXBwU2hlbGwsIEhlYWRlciwgTWVkaWFRdWVyeSwgQnVyZ2VyLCB1c2VNYW50aW5lVGhlbWUsIFRleHQsIEJ1dHRvbiwgR3JvdXAsIEFuY2hvciwgTmF2YmFyLCBTaW1wbGVHcmlkLCBTcGFjZSwgR3JpZCwgQXNpZGUgfSBmcm9tICdAbWFudGluZS9jb3JlJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAocHJvcHM6IEFwcFByb3BzKSB7XHJcbiAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gcHJvcHM7XHJcbiAgY29uc3QgdGhlbWUgPSB1c2VNYW50aW5lVGhlbWUoKTtcclxuICBjb25zdCBbb3BlbmVkLCBzZXRPcGVuZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkNsaW1iaW5nIEFwcDwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIm1pbmltdW0tc2NhbGU9MSwgaW5pdGlhbC1zY2FsZT0xLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIFxyXG4gICAgICA8QXBwU2hlbGxcclxuICAgICAgICBwYWRkaW5nPVwibWRcIlxyXG4gICAgICAgIG5hdmJhck9mZnNldEJyZWFrcG9pbnQ9XCJzbVwiXHJcbiAgICAgICAgZml4ZWRcclxuICAgICAgICBuYXZiYXI9e1xyXG4gICAgICAgICAgPE5hdmJhciBwb3NpdGlvbj17e3JpZ2h0OiAwfX0gcD1cIm1kXCIgaGlkZGVuQnJlYWtwb2ludD1cInNtXCIgaGlkZGVuPXshb3BlbmVkfSB3aWR0aD17eyBzbTogMjAwLCBsZzogMzAwIH19PlxyXG4gICAgICAgICAgICA8VGV4dD5WaWV3IEhvbWUgR3ltPC9UZXh0PlxyXG4gICAgICAgICAgICA8VGV4dD5WaWV3IExvZ3M8L1RleHQ+XHJcbiAgICAgICAgICAgIDxUZXh0PlNldHRpbmdzPC9UZXh0PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPE5hdmJhci5TZWN0aW9uPns8VGV4dD5Mb2cgaW4vb3V0PC9UZXh0Pn08L05hdmJhci5TZWN0aW9uPlxyXG4gICAgICAgICAgICA8TmF2YmFyLlNlY3Rpb24+ezxUZXh0PkxvZyBpbi9vdXQ8L1RleHQ+fTwvTmF2YmFyLlNlY3Rpb24+XHJcbiAgICAgICAgICAgIDxOYXZiYXIuU2VjdGlvbj57PFRleHQ+TG9nIGluL291dDwvVGV4dD59PC9OYXZiYXIuU2VjdGlvbj5cclxuICAgICAgICAgIDwvTmF2YmFyPlxyXG4gICAgICAgIH1cclxuICAgICAgICBoZWFkZXI9ezxIZWFkZXIgaGVpZ2h0PXs3MH0gcD1cIm1kXCI+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6J3NwYWNlLWJldHdlZW4nIH19PlxyXG4gICAgICAgICAgPEdyaWQ+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBjb21wb25lbnQ9J2EnIGhyZWY9Jy8nPkNsaW1iIExvZ3M8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxNZWRpYVF1ZXJ5IGxhcmdlclRoYW49XCJzbVwiIHN0eWxlcz17eyBkaXNwbGF5OiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgICAgPEJ1cmdlclxyXG4gICAgICAgICAgICAgICAgb3BlbmVkPXtvcGVuZWR9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuZWQoKG8pID0+ICFvKX1cclxuICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj17dGhlbWUuY29sb3JzLmdyYXlbNl19XHJcbiAgICAgICAgICAgICAgICBtcj1cInhsXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L01lZGlhUXVlcnk+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvSGVhZGVyPn1cclxuICAgICAgICBzdHlsZXM9eyh0aGVtZSkgPT4gKHtcclxuICAgICAgICAgIG1haW46IHsgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5jb2xvclNjaGVtZSA9PT0gJ2RhcmsnID8gdGhlbWUuY29sb3JzLmRhcmtbOF0gOiB0aGVtZS5jb2xvcnMuZ3JheVswXSB9LFxyXG4gICAgICAgIH0pfVxyXG4gICAgICA+XHJcbiAgICAgICAgPE1hbnRpbmVQcm92aWRlclxyXG4gICAgICAgICAgd2l0aEdsb2JhbFN0eWxlc1xyXG4gICAgICAgICAgd2l0aE5vcm1hbGl6ZUNTU1xyXG4gICAgICAgICAgdGhlbWU9e3tcclxuICAgICAgICAgICAgLyoqIFB1dCB5b3VyIG1hbnRpbmUgdGhlbWUgb3ZlcnJpZGUgaGVyZSAqL1xyXG4gICAgICAgICAgICBjb2xvclNjaGVtZTogJ2xpZ2h0JyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgIDwvTWFudGluZVByb3ZpZGVyPlxyXG4gICAgICA8L0FwcFNoZWxsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufSJdLCJuYW1lcyI6WyJIZWFkIiwiTWFudGluZVByb3ZpZGVyIiwiQXBwU2hlbGwiLCJIZWFkZXIiLCJNZWRpYVF1ZXJ5IiwiQnVyZ2VyIiwidXNlTWFudGluZVRoZW1lIiwiVGV4dCIsIkJ1dHRvbiIsIk5hdmJhciIsIkdyaWQiLCJ1c2VTdGF0ZSIsIkFwcCIsInByb3BzIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidGhlbWUiLCJvcGVuZWQiLCJzZXRPcGVuZWQiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsInBhZGRpbmciLCJuYXZiYXJPZmZzZXRCcmVha3BvaW50IiwiZml4ZWQiLCJuYXZiYXIiLCJwb3NpdGlvbiIsInJpZ2h0IiwicCIsImhpZGRlbkJyZWFrcG9pbnQiLCJoaWRkZW4iLCJ3aWR0aCIsInNtIiwibGciLCJTZWN0aW9uIiwiaGVhZGVyIiwiaGVpZ2h0IiwiZGl2Iiwic3R5bGUiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJjb21wb25lbnQiLCJocmVmIiwibGFyZ2VyVGhhbiIsInN0eWxlcyIsIm9uQ2xpY2siLCJvIiwic2l6ZSIsImNvbG9yIiwiY29sb3JzIiwiZ3JheSIsIm1yIiwibWFpbiIsImJhY2tncm91bmRDb2xvciIsImNvbG9yU2NoZW1lIiwiZGFyayIsIndpdGhHbG9iYWxTdHlsZXMiLCJ3aXRoTm9ybWFsaXplQ1NTIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ })

});