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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\n\n\nvar _s = $RefreshSig$();\nfunction App(props) {\n    _s();\n    var Component = props.Component, pageProps = props.pageProps;\n    var theme1 = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_3__.useMantineTheme)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), opened = ref[0], setOpened = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Climbing App\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\pages\\\\_app.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"minimum-scale=1, initial-scale=1, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\pages\\\\_app.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\pages\\\\_app.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.AppShell, {\n                navbarOffsetBreakpoint: \"sm\",\n                fixed: true,\n                navbar: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Navbar, {\n                    position: {\n                        right: 0\n                    },\n                    p: \"md\",\n                    hiddenBreakpoint: \"sm\",\n                    hidden: !opened,\n                    width: {\n                        sm: 200,\n                        lg: 300\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Navbar.Section, {\n                            grow: true,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                    children: \"View Home Gym\"\n                                }, void 0, false, void 0, void 0),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                    children: \"View Logs\"\n                                }, void 0, false, void 0, void 0),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                    children: \"Settings\"\n                                }, void 0, false, void 0, void 0)\n                            ]\n                        }, void 0, true, void 0, void 0),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Navbar.Section, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                children: \"Log in/out\"\n                            }, void 0, false, void 0, void 0)\n                        }, void 0, false, void 0, void 0)\n                    ]\n                }, void 0, true, void 0, void 0),\n                header: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Header, {\n                    height: 70,\n                    p: \"md\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            justifyContent: \"space-between\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                        component: \"a\",\n                                        href: \"/\",\n                                        children: \"Climb Logs\"\n                                    }, void 0, false, void 0, void 0)\n                                }, void 0, false, void 0, void 0)\n                            }, void 0, false, void 0, void 0),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.MediaQuery, {\n                                largerThan: \"sm\",\n                                styles: {\n                                    display: \"none\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Burger, {\n                                    opened: opened,\n                                    onClick: function() {\n                                        return setOpened(function(o) {\n                                            return !o;\n                                        });\n                                    },\n                                    size: \"sm\",\n                                    color: theme1.colors.gray[6],\n                                    mr: \"xl\"\n                                }, void 0, false, void 0, void 0)\n                            }, void 0, false, void 0, void 0)\n                        ]\n                    }, void 0, true, void 0, void 0)\n                }, void 0, false, void 0, void 0),\n                styles: function(theme) {\n                    return {\n                        main: {\n                            backgroundColor: theme.colorScheme === \"dark\" ? theme.colors.dark[8] : theme.colors.gray[0]\n                        }\n                    };\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.MantineProvider, {\n                    withGlobalStyles: true,\n                    withNormalizeCSS: true,\n                    theme: {\n                        /** Put your mantine theme override here */ colorScheme: \"light\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\pages\\\\_app.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\pages\\\\_app.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\pages\\\\_app.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(App, \"61wxeL5xRdQ6KAqlWWajHrBOJuQ=\", false, function() {\n    return [\n        _mantine_core__WEBPACK_IMPORTED_MODULE_3__.useMantineTheme\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q00sSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHeEMsS0FBSyxDQUFDa0MsTUFBTSxDQUFDQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3lCQUFFO3FCQUN0RztpQkFBQzswQkFFRiw0RUFBQ2xELDBEQUFlO29CQUNkd0QsZ0JBQWdCO29CQUNoQkMsZ0JBQWdCO29CQUNoQjFDLEtBQUssRUFBRTt3QkFDTCwyQ0FBMkMsQ0FDM0N1QyxXQUFXLEVBQUUsT0FBTztxQkFDckI7OEJBRUQsNEVBQUN6QyxTQUFTLG9CQUFLQyxTQUFTOzs7OzRCQUFJOzs7Ozt3QkFDWjs7Ozs7b0JBQ1Q7O29CQUNWLENBQ0g7Q0FDSDtHQWpFdUJILEdBQUc7O1FBRVhOLDBEQUFlOzs7QUFGUE0sS0FBQUEsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBNYW50aW5lUHJvdmlkZXIsIEFwcFNoZWxsLCBIZWFkZXIsIE1lZGlhUXVlcnksIEJ1cmdlciwgdXNlTWFudGluZVRoZW1lLCBUZXh0LCBCdXR0b24sIEdyb3VwLCBBbmNob3IsIE5hdmJhciwgU2ltcGxlR3JpZCwgU3BhY2UsIEdyaWQsIEFzaWRlIH0gZnJvbSAnQG1hbnRpbmUvY29yZSc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHByb3BzOiBBcHBQcm9wcykge1xyXG4gIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHByb3BzO1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlTWFudGluZVRoZW1lKCk7XHJcbiAgY29uc3QgW29wZW5lZCwgc2V0T3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5DbGltYmluZyBBcHA8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJtaW5pbXVtLXNjYWxlPTEsIGluaXRpYWwtc2NhbGU9MSwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgPC9IZWFkPiAgIFxyXG4gICAgICA8QXBwU2hlbGxcclxuICAgICAgICBuYXZiYXJPZmZzZXRCcmVha3BvaW50PVwic21cIlxyXG4gICAgICAgIGZpeGVkXHJcbiAgICAgICAgbmF2YmFyPXtcclxuICAgICAgICAgIDxOYXZiYXIgXHJcbiAgICAgICAgICAgIHBvc2l0aW9uPXt7cmlnaHQ6IDB9fSBcclxuICAgICAgICAgICAgcD1cIm1kXCIgXHJcbiAgICAgICAgICAgIGhpZGRlbkJyZWFrcG9pbnQ9XCJzbVwiIFxyXG4gICAgICAgICAgICBoaWRkZW49eyFvcGVuZWR9IFxyXG4gICAgICAgICAgICB3aWR0aD17eyBzbTogMjAwLCBsZzogMzAwIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxOYXZiYXIuU2VjdGlvbiBncm93ID5cclxuICAgICAgICAgICAgICA8VGV4dD5WaWV3IEhvbWUgR3ltPC9UZXh0PlxyXG4gICAgICAgICAgICAgIDxUZXh0PlZpZXcgTG9nczwvVGV4dD5cclxuICAgICAgICAgICAgICA8VGV4dD5TZXR0aW5nczwvVGV4dD5cclxuICAgICAgICAgICAgPC9OYXZiYXIuU2VjdGlvbj5cclxuICAgICAgICAgICAgPE5hdmJhci5TZWN0aW9uPns8VGV4dD5Mb2cgaW4vb3V0PC9UZXh0Pn08L05hdmJhci5TZWN0aW9uPlxyXG4gICAgICAgICAgPC9OYXZiYXI+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhlYWRlcj17PEhlYWRlciBoZWlnaHQ9ezcwfSBwPVwibWRcIj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDonc3BhY2UtYmV0d2VlbicgfX0+XHJcbiAgICAgICAgICA8R3JpZD5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8QnV0dG9uIGNvbXBvbmVudD0nYScgaHJlZj0nLyc+Q2xpbWIgTG9nczwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPE1lZGlhUXVlcnkgbGFyZ2VyVGhhbj1cInNtXCIgc3R5bGVzPXt7IGRpc3BsYXk6ICdub25lJyB9fT5cclxuICAgICAgICAgICAgICA8QnVyZ2VyXHJcbiAgICAgICAgICAgICAgICBvcGVuZWQ9e29wZW5lZH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW5lZCgobykgPT4gIW8pfVxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPXt0aGVtZS5jb2xvcnMuZ3JheVs2XX1cclxuICAgICAgICAgICAgICAgIG1yPVwieGxcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvTWVkaWFRdWVyeT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9IZWFkZXI+fVxyXG4gICAgICAgIHN0eWxlcz17KHRoZW1lKSA9PiAoe1xyXG4gICAgICAgICAgbWFpbjogeyBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmNvbG9yU2NoZW1lID09PSAnZGFyaycgPyB0aGVtZS5jb2xvcnMuZGFya1s4XSA6IHRoZW1lLmNvbG9ycy5ncmF5WzBdIH0sXHJcbiAgICAgICAgfSl9XHJcbiAgICAgID5cclxuICAgICAgICA8TWFudGluZVByb3ZpZGVyXHJcbiAgICAgICAgICB3aXRoR2xvYmFsU3R5bGVzXHJcbiAgICAgICAgICB3aXRoTm9ybWFsaXplQ1NTXHJcbiAgICAgICAgICB0aGVtZT17e1xyXG4gICAgICAgICAgICAvKiogUHV0IHlvdXIgbWFudGluZSB0aGVtZSBvdmVycmlkZSBoZXJlICovXHJcbiAgICAgICAgICAgIGNvbG9yU2NoZW1lOiAnbGlnaHQnLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgPC9NYW50aW5lUHJvdmlkZXI+XHJcbiAgICAgIDwvQXBwU2hlbGw+XHJcbiAgICA8Lz5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbIkhlYWQiLCJNYW50aW5lUHJvdmlkZXIiLCJBcHBTaGVsbCIsIkhlYWRlciIsIk1lZGlhUXVlcnkiLCJCdXJnZXIiLCJ1c2VNYW50aW5lVGhlbWUiLCJUZXh0IiwiQnV0dG9uIiwiTmF2YmFyIiwiR3JpZCIsInVzZVN0YXRlIiwiQXBwIiwicHJvcHMiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aGVtZSIsIm9wZW5lZCIsInNldE9wZW5lZCIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibmF2YmFyT2Zmc2V0QnJlYWtwb2ludCIsImZpeGVkIiwibmF2YmFyIiwicG9zaXRpb24iLCJyaWdodCIsInAiLCJoaWRkZW5CcmVha3BvaW50IiwiaGlkZGVuIiwid2lkdGgiLCJzbSIsImxnIiwiU2VjdGlvbiIsImdyb3ciLCJoZWFkZXIiLCJoZWlnaHQiLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImNvbXBvbmVudCIsImhyZWYiLCJsYXJnZXJUaGFuIiwic3R5bGVzIiwib25DbGljayIsIm8iLCJzaXplIiwiY29sb3IiLCJjb2xvcnMiLCJncmF5IiwibXIiLCJtYWluIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3JTY2hlbWUiLCJkYXJrIiwid2l0aEdsb2JhbFN0eWxlcyIsIndpdGhOb3JtYWxpemVDU1MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ })

});