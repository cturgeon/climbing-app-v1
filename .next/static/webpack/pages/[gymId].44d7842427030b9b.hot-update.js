/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[gymId]",{

/***/ "./components/ui/gym-header.js":
/*!*************************************!*\
  !*** ./components/ui/gym-header.js ***!
  \*************************************/
/***/ (function(module) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./pages/[gymId]/index.js":
/*!********************************!*\
  !*** ./pages/[gymId]/index.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SpecificGym; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ui_gym_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ui/gym-header */ \"./components/ui/gym-header.js\");\n/* harmony import */ var _components_ui_gym_header__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_ui_gym_header__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _gym_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../gym-data */ \"./gym-data.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_wall_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/wall-list */ \"./components/wall-list.js\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction SpecificGym(props) {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var gymId = router.query.gymId;\n    var gym = (0,_gym_data__WEBPACK_IMPORTED_MODULE_3__.getGymData)(gymId);\n    if (!gym) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading....\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\pages\\\\[gymId]\\\\index.js\",\n            lineNumber: 12,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_ui_gym_header__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    id: gym.id,\n                    name: gym.name,\n                    description: gym.description,\n                    image: gym.image,\n                    address: gym.address\n                }, gym.id, false, {\n                    fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\pages\\\\[gymId]\\\\index.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_wall_list__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    items: gym.walls\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\pages\\\\[gymId]\\\\index.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\pages\\\\[gymId]\\\\index.js\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\pages\\\\[gymId]\\\\index.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n};\n_s(SpecificGym, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = SpecificGym;\nvar _c;\n$RefreshReg$(_c, \"SpecificGym\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bZ3ltSWRdL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBdUQ7QUFDZjtBQUNJO0FBQ1g7QUFDaUI7O0FBRW5DLFNBQVNLLFdBQVcsQ0FBQ0MsS0FBSyxFQUFFOztJQUN6QyxJQUFNQyxNQUFNLEdBQUdOLHNEQUFTLEVBQUU7SUFDMUIsSUFBTU8sS0FBSyxHQUFHRCxNQUFNLENBQUNFLEtBQUssQ0FBQ0QsS0FBSztJQUNoQyxJQUFNRSxHQUFHLEdBQUdSLHFEQUFVLENBQUNNLEtBQUssQ0FBQztJQUM3QixJQUFJLENBQUNFLEdBQUcsRUFBRTtRQUNSLHFCQUFPLDhEQUFDQyxHQUFDO3NCQUFDLGFBQVc7Ozs7O2dCQUFJLENBQUM7S0FDM0I7SUFFRCxxQkFDRSw4REFBQ0MsS0FBRztrQkFDRiw0RUFBQ1QsMkNBQVE7OzhCQUNQLDhEQUFDSCxrRUFBUztvQkFFUmEsRUFBRSxFQUFFSCxHQUFHLENBQUNHLEVBQUU7b0JBQ1ZDLElBQUksRUFBRUosR0FBRyxDQUFDSSxJQUFJO29CQUNkQyxXQUFXLEVBQUVMLEdBQUcsQ0FBQ0ssV0FBVztvQkFDNUJDLEtBQUssRUFBRU4sR0FBRyxDQUFDTSxLQUFLO29CQUNoQkMsT0FBTyxFQUFFUCxHQUFHLENBQUNPLE9BQU87bUJBTGZQLEdBQUcsQ0FBQ0csRUFBRTs7Ozt3QkFNWDs4QkFDRiw4REFBQ1QsNkRBQVE7b0JBQUNjLEtBQUssRUFBRVIsR0FBRyxDQUFDUyxLQUFLOzs7Ozt3QkFBSTs7Ozs7O2dCQUNyQjs7Ozs7WUFDUCxDQUNOO0NBQ0g7R0F2QnVCZCxXQUFXOztRQUNsQkosa0RBQVM7OztBQURGSSxLQUFBQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1tneW1JZF0vaW5kZXguanM/OWFjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR3ltSGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3VpL2d5bS1oZWFkZXJcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IGdldEd5bURhdGEgfSBmcm9tIFwiLi4vLi4vZ3ltLWRhdGFcIjtcclxuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFdhbGxMaXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3dhbGwtbGlzdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3BlY2lmaWNHeW0ocHJvcHMpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBneW1JZCA9IHJvdXRlci5xdWVyeS5neW1JZDtcclxuICBjb25zdCBneW0gPSBnZXRHeW1EYXRhKGd5bUlkKTtcclxuICBpZiAoIWd5bSkge1xyXG4gICAgcmV0dXJuIDxwPkxvYWRpbmcuLi4uPC9wPjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgPEd5bUhlYWRlclxyXG4gICAgICAgICAga2V5PXtneW0uaWR9XHJcbiAgICAgICAgICBpZD17Z3ltLmlkfVxyXG4gICAgICAgICAgbmFtZT17Z3ltLm5hbWV9XHJcbiAgICAgICAgICBkZXNjcmlwdGlvbj17Z3ltLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgaW1hZ2U9e2d5bS5pbWFnZX1cclxuICAgICAgICAgIGFkZHJlc3M9e2d5bS5hZGRyZXNzfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFdhbGxMaXN0IGl0ZW1zPXtneW0ud2FsbHN9IC8+XHJcbiAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJHeW1IZWFkZXIiLCJ1c2VSb3V0ZXIiLCJnZXRHeW1EYXRhIiwiRnJhZ21lbnQiLCJXYWxsTGlzdCIsIlNwZWNpZmljR3ltIiwicHJvcHMiLCJyb3V0ZXIiLCJneW1JZCIsInF1ZXJ5IiwiZ3ltIiwicCIsImRpdiIsImlkIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJhZGRyZXNzIiwiaXRlbXMiLCJ3YWxscyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[gymId]/index.js\n");

/***/ })

});