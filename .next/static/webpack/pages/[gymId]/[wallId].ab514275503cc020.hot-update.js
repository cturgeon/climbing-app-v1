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

/***/ "./components/climb-list.js":
/*!**********************************!*\
  !*** ./components/climb-list.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ClimbList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _climb_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./climb-item */ \"./components/climb-item.js\");\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\n\nfunction ClimbList(props) {\n    var _this = this;\n    var climbingRoutes = props.items;\n    var climbs = [];\n    for(var key in climbingRoutes){\n        climbs.push(_objectSpread({\n            id: key\n        }, climbingRoutes[key]));\n    }\n    if (!climbs) {\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading routes...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1-final\\\\components\\\\climb-list.js\",\n            lineNumber: 16,\n            columnNumber: 5\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        style: {\n            padding: 0\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n            justify: \"center\",\n            spacing: \"md\",\n            children: climbs.map(function(route) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_climb_item__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    id: route.id,\n                    image: route.image,\n                    name: route.name,\n                    grade: route.grade,\n                    description: route.description,\n                    color: route.color\n                }, route.id, false, {\n                    fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1-final\\\\components\\\\climb-list.js\",\n                    lineNumber: 23,\n                    columnNumber: 11\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1-final\\\\components\\\\climb-list.js\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1-final\\\\components\\\\climb-list.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n};\n_c = ClimbList;\nvar _c;\n$RefreshReg$(_c, \"ClimbList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NsaW1iLWxpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUM7QUFDQTtBQUV0QixTQUFTRSxTQUFTLENBQUNDLEtBQUssRUFBRTs7SUFDdkMsSUFBTUMsY0FBYyxHQUFHRCxLQUFLLENBQUNFLEtBQUs7SUFFbEMsSUFBTUMsTUFBTSxHQUFHLEVBQUU7SUFDakIsSUFBSyxJQUFJQyxHQUFHLElBQUlILGNBQWMsQ0FBRTtRQUM5QkUsTUFBTSxDQUFDRSxJQUFJLENBQUM7WUFDVkMsRUFBRSxFQUFFRixHQUFHO1dBQ0pILGNBQWMsQ0FBQ0csR0FBRyxDQUFDLENBQ3ZCLENBQUMsQ0FBQztLQUNKO0lBRUQsSUFBSSxDQUFDRCxNQUFNLEVBQUU7c0JBQ1gsOERBQUNJLEdBQUM7c0JBQUMsbUJBQWlCOzs7OztnQkFBSSxDQUFDO0tBQzFCO0lBRUQscUJBQ0UsOERBQUNDLElBQUU7UUFBQ0MsS0FBSyxFQUFFO1lBQUVDLE9BQU8sRUFBRSxDQUFDO1NBQUU7a0JBQ3ZCLDRFQUFDWiwrQ0FBSTtZQUFDYSxPQUFPLEVBQUMsUUFBUTtZQUFDQyxPQUFPLEVBQUMsSUFBSTtzQkFDaENULE1BQU0sQ0FBQ1UsR0FBRyxDQUFDLFNBQUNDLEtBQUs7cUNBQ2hCLDhEQUFDakIsbURBQVM7b0JBRVJTLEVBQUUsRUFBRVEsS0FBSyxDQUFDUixFQUFFO29CQUNaUyxLQUFLLEVBQUVELEtBQUssQ0FBQ0MsS0FBSztvQkFDbEJDLElBQUksRUFBRUYsS0FBSyxDQUFDRSxJQUFJO29CQUNoQkMsS0FBSyxFQUFFSCxLQUFLLENBQUNHLEtBQUs7b0JBQ2xCQyxXQUFXLEVBQUVKLEtBQUssQ0FBQ0ksV0FBVztvQkFDOUJDLEtBQUssRUFBRUwsS0FBSyxDQUFDSyxLQUFLO21CQU5iTCxLQUFLLENBQUNSLEVBQUU7Ozs7eUJBT2I7YUFDSCxDQUFDOzs7OztnQkFDRzs7Ozs7WUFDSixDQUNMO0NBQ0g7QUFoQ3VCUCxLQUFBQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY2xpbWItbGlzdC5qcz9kZjA1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDbGltYkl0ZW0gZnJvbSBcIi4vY2xpbWItaXRlbVwiO1xuaW1wb3J0IHsgR3JpZCB9IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENsaW1iTGlzdChwcm9wcykge1xuICBjb25zdCBjbGltYmluZ1JvdXRlcyA9IHByb3BzLml0ZW1zO1xuXG4gIGNvbnN0IGNsaW1icyA9IFtdO1xuICBmb3IgKGxldCBrZXkgaW4gY2xpbWJpbmdSb3V0ZXMpIHtcbiAgICBjbGltYnMucHVzaCh7XG4gICAgICBpZDoga2V5LFxuICAgICAgLi4uY2xpbWJpbmdSb3V0ZXNba2V5XSxcbiAgICB9KTtcbiAgfVxuXG4gIGlmICghY2xpbWJzKSB7XG4gICAgPHA+TG9hZGluZyByb3V0ZXMuLi48L3A+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8dWwgc3R5bGU9e3sgcGFkZGluZzogMCB9fT5cbiAgICAgIDxHcmlkIGp1c3RpZnk9XCJjZW50ZXJcIiBzcGFjaW5nPVwibWRcIj5cbiAgICAgICAge2NsaW1icy5tYXAoKHJvdXRlKSA9PiAoXG4gICAgICAgICAgPENsaW1iSXRlbVxuICAgICAgICAgICAga2V5PXtyb3V0ZS5pZH1cbiAgICAgICAgICAgIGlkPXtyb3V0ZS5pZH1cbiAgICAgICAgICAgIGltYWdlPXtyb3V0ZS5pbWFnZX1cbiAgICAgICAgICAgIG5hbWU9e3JvdXRlLm5hbWV9XG4gICAgICAgICAgICBncmFkZT17cm91dGUuZ3JhZGV9XG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17cm91dGUuZGVzY3JpcHRpb259XG4gICAgICAgICAgICBjb2xvcj17cm91dGUuY29sb3J9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L0dyaWQ+XG4gICAgPC91bD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJDbGltYkl0ZW0iLCJHcmlkIiwiQ2xpbWJMaXN0IiwicHJvcHMiLCJjbGltYmluZ1JvdXRlcyIsIml0ZW1zIiwiY2xpbWJzIiwia2V5IiwicHVzaCIsImlkIiwicCIsInVsIiwic3R5bGUiLCJwYWRkaW5nIiwianVzdGlmeSIsInNwYWNpbmciLCJtYXAiLCJyb3V0ZSIsImltYWdlIiwibmFtZSIsImdyYWRlIiwiZGVzY3JpcHRpb24iLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/climb-list.js\n");

/***/ })

});