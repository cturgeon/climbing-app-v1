"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[gymId]",{

/***/ "./components/ui/wall-card.js":
/*!************************************!*\
  !*** ./components/ui/wall-card.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ WallCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n\n\nvar _s = $RefreshSig$();\nfunction WallCard(props) {\n    _s();\n    var id = props.id, name = props.name, image = props.image, gymId = props.gymId;\n    var theme = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.useMantineTheme)();\n    var secondaryColor = theme.colorScheme === \"dark\" ? theme.colors.dark[1] : theme.colors.gray[7];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        styles: {},\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Card, {\n            shadow: \"sm\",\n            p: \"lg\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Card.Section, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                        src: image,\n                        fit: \"contain\",\n                        alt: id\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\components\\\\ui\\\\wall-card.js\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\components\\\\ui\\\\wall-card.js\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Group, {\n                    position: \"apart\",\n                    style: {\n                        marginBottom: 5,\n                        marginTop: theme.spacing.sm\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                        weight: 500,\n                        style: {\n                            color: secondaryColor,\n                            lineHeight: 1.5\n                        },\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\components\\\\ui\\\\wall-card.js\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\components\\\\ui\\\\wall-card.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    variant: \"light\",\n                    color: \"blue\",\n                    fullWidth: true,\n                    style: {\n                        marginTop: 14\n                    },\n                    component: \"a\",\n                    href: \"/\".concat(gymId, \"/\").concat(id),\n                    children: \"Click me\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\components\\\\ui\\\\wall-card.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\components\\\\ui\\\\wall-card.js\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\components\\\\ui\\\\wall-card.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n};\n_s(WallCard, \"kCRuYVKwcrXADtav4WXKZqdBWfk=\", false, function() {\n    return [\n        _mantine_core__WEBPACK_IMPORTED_MODULE_1__.useMantineTheme\n    ];\n});\n_c = WallCard;\nvar _c;\n$RefreshReg$(_c, \"WallCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VpL3dhbGwtY2FyZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFPdUI7O0FBRVIsU0FBU00sUUFBUSxDQUFDQyxLQUFLLEVBQUU7O0lBQ3RDLElBQVFDLEVBQUUsR0FBeUJELEtBQUssQ0FBaENDLEVBQUUsRUFBRUMsSUFBSSxHQUFtQkYsS0FBSyxDQUE1QkUsSUFBSSxFQUFFQyxLQUFLLEdBQVlILEtBQUssQ0FBdEJHLEtBQUssRUFBRUMsS0FBSyxHQUFLSixLQUFLLENBQWZJLEtBQUs7SUFDOUIsSUFBTUMsS0FBSyxHQUFHUCw4REFBZSxFQUFFO0lBRS9CLElBQU1RLGNBQWMsR0FDbEJELEtBQUssQ0FBQ0UsV0FBVyxLQUFLLE1BQU0sR0FBR0YsS0FBSyxDQUFDRyxNQUFNLENBQUNDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBR0osS0FBSyxDQUFDRyxNQUFNLENBQUNFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFFNUUscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsTUFBTSxFQUFFLEVBQUU7a0JBQ2IsNEVBQUNuQiwrQ0FBSTtZQUFDb0IsTUFBTSxFQUFDLElBQUk7WUFBQ0MsQ0FBQyxFQUFDLElBQUk7OzhCQUN0Qiw4REFBQ3JCLHVEQUFZOzhCQUVYLDRFQUFDQyxnREFBSzt3QkFBQ3NCLEdBQUcsRUFBRWIsS0FBSzt3QkFBRWMsR0FBRyxFQUFDLFNBQVM7d0JBQUNDLEdBQUcsRUFBRWpCLEVBQUU7Ozs7OzRCQUFJOzs7Ozt3QkFDL0I7OEJBRWYsOERBQUNKLGdEQUFLO29CQUNKc0IsUUFBUSxFQUFDLE9BQU87b0JBQ2hCQyxLQUFLLEVBQUU7d0JBQUVDLFlBQVksRUFBRSxDQUFDO3dCQUFFQyxTQUFTLEVBQUVqQixLQUFLLENBQUNrQixPQUFPLENBQUNDLEVBQUU7cUJBQUU7OEJBRXZELDRFQUFDN0IsK0NBQUk7d0JBQUM4QixNQUFNLEVBQUUsR0FBRzt3QkFBRUwsS0FBSyxFQUFFOzRCQUFFTSxLQUFLLEVBQUVwQixjQUFjOzRCQUFFcUIsVUFBVSxFQUFFLEdBQUc7eUJBQUU7a0NBQ2pFekIsSUFBSTs7Ozs7NEJBQ0E7Ozs7O3dCQUNEOzhCQUVSLDhEQUFDTixpREFBTTtvQkFDTGdDLE9BQU8sRUFBQyxPQUFPO29CQUNmRixLQUFLLEVBQUMsTUFBTTtvQkFDWkcsU0FBUztvQkFDVFQsS0FBSyxFQUFFO3dCQUFFRSxTQUFTLEVBQUUsRUFBRTtxQkFBRTtvQkFDeEJRLFNBQVMsRUFBQyxHQUFHO29CQUNiQyxJQUFJLEVBQUUsR0FBRSxDQUFXOUIsTUFBRSxDQUFYRyxLQUFLLEVBQUMsR0FBQyxDQUFLLFFBQUhILEVBQUUsQ0FBRTs4QkFDeEIsVUFFRDs7Ozs7d0JBQVM7Ozs7OztnQkFDSjs7Ozs7WUFDSCxDQUNOO0NBQ0g7R0FyQ3VCRixRQUFROztRQUVoQkQsMERBQWU7OztBQUZQQyxLQUFBQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdWkvd2FsbC1jYXJkLmpzP2UzNDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDYXJkLFxyXG4gIEltYWdlLFxyXG4gIFRleHQsXHJcbiAgQnV0dG9uLFxyXG4gIEdyb3VwLFxyXG4gIHVzZU1hbnRpbmVUaGVtZSxcclxufSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2FsbENhcmQocHJvcHMpIHtcclxuICBjb25zdCB7IGlkLCBuYW1lLCBpbWFnZSwgZ3ltSWQgfSA9IHByb3BzO1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlTWFudGluZVRoZW1lKCk7XHJcblxyXG4gIGNvbnN0IHNlY29uZGFyeUNvbG9yID1cclxuICAgIHRoZW1lLmNvbG9yU2NoZW1lID09PSBcImRhcmtcIiA/IHRoZW1lLmNvbG9ycy5kYXJrWzFdIDogdGhlbWUuY29sb3JzLmdyYXlbN107XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlcz17e319PlxyXG4gICAgICA8Q2FyZCBzaGFkb3c9XCJzbVwiIHA9XCJsZ1wiPlxyXG4gICAgICAgIDxDYXJkLlNlY3Rpb24+XHJcbiAgICAgICAgICB7LyogVE9ETyBjaGFuZ2UgYWZ0ZXIgYWRkaW5nIG15IG93biBpbWFnZXMgKi99XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gZml0PVwiY29udGFpblwiIGFsdD17aWR9IC8+XHJcbiAgICAgICAgPC9DYXJkLlNlY3Rpb24+XHJcblxyXG4gICAgICAgIDxHcm91cFxyXG4gICAgICAgICAgcG9zaXRpb249XCJhcGFydFwiXHJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDUsIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy5zbSB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUZXh0IHdlaWdodD17NTAwfSBzdHlsZT17eyBjb2xvcjogc2Vjb25kYXJ5Q29sb3IsIGxpbmVIZWlnaHQ6IDEuNSB9fT5cclxuICAgICAgICAgICAge25hbWV9XHJcbiAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgPC9Hcm91cD5cclxuXHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgdmFyaWFudD1cImxpZ2h0XCJcclxuICAgICAgICAgIGNvbG9yPVwiYmx1ZVwiXHJcbiAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogMTQgfX1cclxuICAgICAgICAgIGNvbXBvbmVudD1cImFcIlxyXG4gICAgICAgICAgaHJlZj17YC8ke2d5bUlkfS8ke2lkfWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQ2xpY2sgbWVcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiQ2FyZCIsIkltYWdlIiwiVGV4dCIsIkJ1dHRvbiIsIkdyb3VwIiwidXNlTWFudGluZVRoZW1lIiwiV2FsbENhcmQiLCJwcm9wcyIsImlkIiwibmFtZSIsImltYWdlIiwiZ3ltSWQiLCJ0aGVtZSIsInNlY29uZGFyeUNvbG9yIiwiY29sb3JTY2hlbWUiLCJjb2xvcnMiLCJkYXJrIiwiZ3JheSIsImRpdiIsInN0eWxlcyIsInNoYWRvdyIsInAiLCJTZWN0aW9uIiwic3JjIiwiZml0IiwiYWx0IiwicG9zaXRpb24iLCJzdHlsZSIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblRvcCIsInNwYWNpbmciLCJzbSIsIndlaWdodCIsImNvbG9yIiwibGluZUhlaWdodCIsInZhcmlhbnQiLCJmdWxsV2lkdGgiLCJjb21wb25lbnQiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ui/wall-card.js\n");

/***/ })

});