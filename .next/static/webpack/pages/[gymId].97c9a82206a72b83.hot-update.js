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

/***/ "./pages/[gymId]/index.js":
/*!********************************!*\
  !*** ./pages/[gymId]/index.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ SpecificGym; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_gym_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ui/gym-header */ \"./components/ui/gym-header.js\");\n/* harmony import */ var _components_wall_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/wall-list */ \"./components/wall-list.js\");\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n\n\n\n\n\nvar __N_SSG = true;\nfunction SpecificGym(props) {\n    var gym = props.gym;\n    if (!gym) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading....\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\pages\\\\[gymId]\\\\index.js\",\n            lineNumber: 13,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Group, {\n                direction: \"column\",\n                position: \"center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_gym_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        id: gym.id,\n                        name: gym.name,\n                        description: gym.description,\n                        image: gym.image,\n                        address: gym.address\n                    }, gym.id, false, {\n                        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\pages\\\\[gymId]\\\\index.js\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_wall_list__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        items: gym.walls\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\pages\\\\[gymId]\\\\index.js\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\pages\\\\[gymId]\\\\index.js\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\pages\\\\[gymId]\\\\index.js\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\pages\\\\[gymId]\\\\index.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n};\n_c = SpecificGym;\nvar _c;\n$RefreshReg$(_c, \"SpecificGym\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bZ3ltSWRdL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQWlDO0FBSXNCO0FBQ0w7QUFFWjs7QUFFdkIsU0FBU0ksV0FBVyxDQUFDQyxLQUFLLEVBQUU7SUFDekMsSUFBTUMsR0FBRyxHQUFHRCxLQUFLLENBQUNDLEdBQUc7SUFDckIsSUFBSSxDQUFDQSxHQUFHLEVBQUU7UUFDUixxQkFBTyw4REFBQ0MsR0FBQztzQkFBQyxhQUFXOzs7OztnQkFBSSxDQUFDO0tBQzNCO0lBRUQscUJBQ0UsOERBQUNDLEtBQUc7a0JBQ0YsNEVBQUNSLDJDQUFRO3NCQUNQLDRFQUFDRyxnREFBSztnQkFBQ00sU0FBUyxFQUFDLFFBQVE7Z0JBQUNDLFFBQVEsRUFBQyxRQUFROztrQ0FDekMsOERBQUNULGlFQUFTO3dCQUVSVSxFQUFFLEVBQUVMLEdBQUcsQ0FBQ0ssRUFBRTt3QkFDVkMsSUFBSSxFQUFFTixHQUFHLENBQUNNLElBQUk7d0JBQ2RDLFdBQVcsRUFBRVAsR0FBRyxDQUFDTyxXQUFXO3dCQUM1QkMsS0FBSyxFQUFFUixHQUFHLENBQUNRLEtBQUs7d0JBQ2hCQyxPQUFPLEVBQUVULEdBQUcsQ0FBQ1MsT0FBTzt1QkFMZlQsR0FBRyxDQUFDSyxFQUFFOzs7OzRCQU1YO2tDQUNGLDhEQUFDVCw2REFBUTt3QkFBQ2MsS0FBSyxFQUFFVixHQUFHLENBQUNXLEtBQUs7Ozs7OzRCQUFJOzs7Ozs7b0JBQ3hCOzs7OztnQkFDQzs7Ozs7WUFDUCxDQUNOO0NBQ0g7QUF2QnVCYixLQUFBQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1tneW1JZF0vaW5kZXguanM/OWFjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgZ2V0QWxsR3ltcywgZ2V0R3ltQnlJZCB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2FwaS11dGlsXCI7XHJcblxyXG5pbXBvcnQgR3ltSGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3VpL2d5bS1oZWFkZXJcIjtcclxuaW1wb3J0IFdhbGxMaXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3dhbGwtbGlzdFwiO1xyXG5cclxuaW1wb3J0IHsgR3JvdXAgfSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3BlY2lmaWNHeW0ocHJvcHMpIHtcclxuICBjb25zdCBneW0gPSBwcm9wcy5neW07XHJcbiAgaWYgKCFneW0pIHtcclxuICAgIHJldHVybiA8cD5Mb2FkaW5nLi4uLjwvcD47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgIDxHcm91cCBkaXJlY3Rpb249XCJjb2x1bW5cIiBwb3NpdGlvbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgPEd5bUhlYWRlclxyXG4gICAgICAgICAgICBrZXk9e2d5bS5pZH1cclxuICAgICAgICAgICAgaWQ9e2d5bS5pZH1cclxuICAgICAgICAgICAgbmFtZT17Z3ltLm5hbWV9XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtneW0uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIGltYWdlPXtneW0uaW1hZ2V9XHJcbiAgICAgICAgICAgIGFkZHJlc3M9e2d5bS5hZGRyZXNzfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxXYWxsTGlzdCBpdGVtcz17Z3ltLndhbGxzfSAvPlxyXG4gICAgICAgIDwvR3JvdXA+XHJcbiAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IGd5bUlkID0gY29udGV4dC5wYXJhbXMuZ3ltSWQ7XHJcbiAgY29uc3QgZ3ltRGF0YSA9IGF3YWl0IGdldEd5bUJ5SWQoZ3ltSWQpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBneW06IGd5bURhdGEsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICBjb25zdCBneW1EYXRhID0gYXdhaXQgZ2V0QWxsR3ltcygpO1xyXG4gIC8vIG1ha2Ugc3VyZSB0byByZXR1cm4gdGhlIGlkIHRoYXQgbWF0Y2hlcyB0aGUgZmlsZSBwYXRoLiBIZXJlIGZvciBleC4gaXMgW2d5bUlkXVxyXG4gIGNvbnN0IHBhdGhzID0gZ3ltRGF0YS5tYXAoKGd5bSkgPT4gKHsgcGFyYW1zOiB7IGd5bUlkOiBneW0uaWQgfSB9KSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzOiBwYXRocyxcclxuICAgIGZhbGxiYWNrOiBcImJsb2NraW5nXCIsXHJcbiAgfTtcclxufVxyXG4iXSwibmFtZXMiOlsiRnJhZ21lbnQiLCJHeW1IZWFkZXIiLCJXYWxsTGlzdCIsIkdyb3VwIiwiU3BlY2lmaWNHeW0iLCJwcm9wcyIsImd5bSIsInAiLCJkaXYiLCJkaXJlY3Rpb24iLCJwb3NpdGlvbiIsImlkIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJhZGRyZXNzIiwiaXRlbXMiLCJ3YWxscyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[gymId]/index.js\n");

/***/ })

});