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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ WallCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n\n\nvar _s = $RefreshSig$();\nfunction WallCard(props) {\n    _s();\n    var id = props.id, name = props.name, image = props.image, gymId = props.gymId;\n    var theme = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.useMantineTheme)();\n    var secondaryColor = theme.colorScheme === \"dark\" ? theme.colors.dark[1] : theme.colors.gray[7];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Card, {\n            shadow: \"sm\",\n            p: \"lg\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Card.Section, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                        src: image,\n                        height: 200,\n                        width: \"md\",\n                        alt: id\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\components\\\\ui\\\\wall-card.js\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\components\\\\ui\\\\wall-card.js\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Group, {\n                    position: \"apart\",\n                    style: {\n                        marginBottom: 5,\n                        marginTop: theme.spacing.sm\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                        weight: 500,\n                        style: {\n                            color: secondaryColor,\n                            lineHeight: 1.5\n                        },\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\components\\\\ui\\\\wall-card.js\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\components\\\\ui\\\\wall-card.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    variant: \"light\",\n                    color: \"blue\",\n                    fullWidth: true,\n                    style: {\n                        marginTop: 14\n                    },\n                    component: \"a\",\n                    href: \"/\".concat(gymId, \"/\").concat(id),\n                    children: \"Click me\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\components\\\\ui\\\\wall-card.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\components\\\\ui\\\\wall-card.js\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\components\\\\ui\\\\wall-card.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n};\n_s(WallCard, \"kCRuYVKwcrXADtav4WXKZqdBWfk=\", false, function() {\n    return [\n        _mantine_core__WEBPACK_IMPORTED_MODULE_1__.useMantineTheme\n    ];\n});\n_c = WallCard;\nvar _c;\n$RefreshReg$(_c, \"WallCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VpL3dhbGwtY2FyZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFPdUI7O0FBRVIsU0FBU00sUUFBUSxDQUFDQyxLQUFLLEVBQUU7O0lBQ3RDLElBQVFDLEVBQUUsR0FBeUJELEtBQUssQ0FBaENDLEVBQUUsRUFBRUMsSUFBSSxHQUFtQkYsS0FBSyxDQUE1QkUsSUFBSSxFQUFFQyxLQUFLLEdBQVlILEtBQUssQ0FBdEJHLEtBQUssRUFBRUMsS0FBSyxHQUFLSixLQUFLLENBQWZJLEtBQUs7SUFDOUIsSUFBTUMsS0FBSyxHQUFHUCw4REFBZSxFQUFFO0lBRS9CLElBQU1RLGNBQWMsR0FDbEJELEtBQUssQ0FBQ0UsV0FBVyxLQUFLLE1BQU0sR0FBR0YsS0FBSyxDQUFDRyxNQUFNLENBQUNDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBR0osS0FBSyxDQUFDRyxNQUFNLENBQUNFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFFNUUscUJBQ0UsOERBQUNDLEtBQUc7a0JBQ0YsNEVBQUNsQiwrQ0FBSTtZQUFDbUIsTUFBTSxFQUFDLElBQUk7WUFBQ0MsQ0FBQyxFQUFDLElBQUk7OzhCQUN0Qiw4REFBQ3BCLHVEQUFZOzhCQUVYLDRFQUFDQyxnREFBSzt3QkFBQ3FCLEdBQUcsRUFBRVosS0FBSzt3QkFBRWEsTUFBTSxFQUFFLEdBQUc7d0JBQUVDLEtBQUssRUFBQyxJQUFJO3dCQUFDQyxHQUFHLEVBQUVqQixFQUFFOzs7Ozs0QkFBSTs7Ozs7d0JBQ3pDOzhCQUVmLDhEQUFDSixnREFBSztvQkFDSnNCLFFBQVEsRUFBQyxPQUFPO29CQUNoQkMsS0FBSyxFQUFFO3dCQUFFQyxZQUFZLEVBQUUsQ0FBQzt3QkFBRUMsU0FBUyxFQUFFakIsS0FBSyxDQUFDa0IsT0FBTyxDQUFDQyxFQUFFO3FCQUFFOzhCQUV2RCw0RUFBQzdCLCtDQUFJO3dCQUFDOEIsTUFBTSxFQUFFLEdBQUc7d0JBQUVMLEtBQUssRUFBRTs0QkFBRU0sS0FBSyxFQUFFcEIsY0FBYzs0QkFBRXFCLFVBQVUsRUFBRSxHQUFHO3lCQUFFO2tDQUNqRXpCLElBQUk7Ozs7OzRCQUNBOzs7Ozt3QkFDRDs4QkFFUiw4REFBQ04saURBQU07b0JBQ0xnQyxPQUFPLEVBQUMsT0FBTztvQkFDZkYsS0FBSyxFQUFDLE1BQU07b0JBQ1pHLFNBQVM7b0JBQ1RULEtBQUssRUFBRTt3QkFBRUUsU0FBUyxFQUFFLEVBQUU7cUJBQUU7b0JBQ3hCUSxTQUFTLEVBQUMsR0FBRztvQkFDYkMsSUFBSSxFQUFFLEdBQUUsQ0FBVzlCLE1BQUUsQ0FBWEcsS0FBSyxFQUFDLEdBQUMsQ0FBSyxRQUFISCxFQUFFLENBQUU7OEJBQ3hCLFVBRUQ7Ozs7O3dCQUFTOzs7Ozs7Z0JBQ0o7Ozs7O1lBQ0gsQ0FDTjtDQUNIO0dBckN1QkYsUUFBUTs7UUFFaEJELDBEQUFlOzs7QUFGUEMsS0FBQUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VpL3dhbGwtY2FyZC5qcz9lMzQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2FyZCxcclxuICBJbWFnZSxcclxuICBUZXh0LFxyXG4gIEJ1dHRvbixcclxuICBHcm91cCxcclxuICB1c2VNYW50aW5lVGhlbWUsXHJcbn0gZnJvbSBcIkBtYW50aW5lL2NvcmVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdhbGxDYXJkKHByb3BzKSB7XHJcbiAgY29uc3QgeyBpZCwgbmFtZSwgaW1hZ2UsIGd5bUlkIH0gPSBwcm9wcztcclxuICBjb25zdCB0aGVtZSA9IHVzZU1hbnRpbmVUaGVtZSgpO1xyXG5cclxuICBjb25zdCBzZWNvbmRhcnlDb2xvciA9XHJcbiAgICB0aGVtZS5jb2xvclNjaGVtZSA9PT0gXCJkYXJrXCIgPyB0aGVtZS5jb2xvcnMuZGFya1sxXSA6IHRoZW1lLmNvbG9ycy5ncmF5WzddO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPENhcmQgc2hhZG93PVwic21cIiBwPVwibGdcIj5cclxuICAgICAgICA8Q2FyZC5TZWN0aW9uPlxyXG4gICAgICAgICAgey8qIFRPRE8gY2hhbmdlIGFmdGVyIGFkZGluZyBteSBvd24gaW1hZ2VzICovfVxyXG4gICAgICAgICAgPEltYWdlIHNyYz17aW1hZ2V9IGhlaWdodD17MjAwfSB3aWR0aD1cIm1kXCIgYWx0PXtpZH0gLz5cclxuICAgICAgICA8L0NhcmQuU2VjdGlvbj5cclxuXHJcbiAgICAgICAgPEdyb3VwXHJcbiAgICAgICAgICBwb3NpdGlvbj1cImFwYXJ0XCJcclxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogNSwgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnNtIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFRleHQgd2VpZ2h0PXs1MDB9IHN0eWxlPXt7IGNvbG9yOiBzZWNvbmRhcnlDb2xvciwgbGluZUhlaWdodDogMS41IH19PlxyXG4gICAgICAgICAgICB7bmFtZX1cclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICA8L0dyb3VwPlxyXG5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICB2YXJpYW50PVwibGlnaHRcIlxyXG4gICAgICAgICAgY29sb3I9XCJibHVlXCJcclxuICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiAxNCB9fVxyXG4gICAgICAgICAgY29tcG9uZW50PVwiYVwiXHJcbiAgICAgICAgICBocmVmPXtgLyR7Z3ltSWR9LyR7aWR9YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBDbGljayBtZVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJDYXJkIiwiSW1hZ2UiLCJUZXh0IiwiQnV0dG9uIiwiR3JvdXAiLCJ1c2VNYW50aW5lVGhlbWUiLCJXYWxsQ2FyZCIsInByb3BzIiwiaWQiLCJuYW1lIiwiaW1hZ2UiLCJneW1JZCIsInRoZW1lIiwic2Vjb25kYXJ5Q29sb3IiLCJjb2xvclNjaGVtZSIsImNvbG9ycyIsImRhcmsiLCJncmF5IiwiZGl2Iiwic2hhZG93IiwicCIsIlNlY3Rpb24iLCJzcmMiLCJoZWlnaHQiLCJ3aWR0aCIsImFsdCIsInBvc2l0aW9uIiwic3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwic20iLCJ3ZWlnaHQiLCJjb2xvciIsImxpbmVIZWlnaHQiLCJ2YXJpYW50IiwiZnVsbFdpZHRoIiwiY29tcG9uZW50IiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ui/wall-card.js\n");

/***/ })

});