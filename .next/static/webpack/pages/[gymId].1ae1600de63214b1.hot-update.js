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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ SpecificGym; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_gym_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ui/gym-header */ \"./components/ui/gym-header.js\");\n/* harmony import */ var _components_wall_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/wall-list */ \"./components/wall-list.js\");\n\n\n\n\nvar __N_SSG = true;\nfunction SpecificGym(props) {\n    var gym = props.gym;\n    if (!gym) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading....\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\pages\\\\[gymId]\\\\index.js\",\n            lineNumber: 11,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    width: {\n                        sm: 200,\n                        lg: 300\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_gym_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        id: gym.id,\n                        name: gym.name,\n                        description: gym.description,\n                        image: gym.image,\n                        address: gym.address\n                    }, gym.id, false, {\n                        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\pages\\\\[gymId]\\\\index.js\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\pages\\\\[gymId]\\\\index.js\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_wall_list__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    items: gym.walls\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\pages\\\\[gymId]\\\\index.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\pages\\\\[gymId]\\\\index.js\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v1\\\\pages\\\\[gymId]\\\\index.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n};\n_c = SpecificGym;\nvar _c;\n$RefreshReg$(_c, \"SpecificGym\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bZ3ltSWRdL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBaUM7QUFJc0I7QUFDTDs7QUFFbkMsU0FBU0csV0FBVyxDQUFDQyxLQUFLLEVBQUU7SUFDekMsSUFBTUMsR0FBRyxHQUFHRCxLQUFLLENBQUNDLEdBQUc7SUFDckIsSUFBSSxDQUFDQSxHQUFHLEVBQUU7UUFDUixxQkFBTyw4REFBQ0MsR0FBQztzQkFBQyxhQUFXOzs7OztnQkFBSSxDQUFDO0tBQzNCO0lBRUQscUJBQ0UsOERBQUNDLEtBQUc7a0JBQ0YsNEVBQUNQLDJDQUFROzs4QkFDUCw4REFBQ08sS0FBRztvQkFBQ0MsS0FBSyxFQUFFO3dCQUFFQyxFQUFFLEVBQUUsR0FBRzt3QkFBRUMsRUFBRSxFQUFFLEdBQUc7cUJBQUU7OEJBQzlCLDRFQUFDVCxpRUFBUzt3QkFFUlUsRUFBRSxFQUFFTixHQUFHLENBQUNNLEVBQUU7d0JBQ1ZDLElBQUksRUFBRVAsR0FBRyxDQUFDTyxJQUFJO3dCQUNkQyxXQUFXLEVBQUVSLEdBQUcsQ0FBQ1EsV0FBVzt3QkFDNUJDLEtBQUssRUFBRVQsR0FBRyxDQUFDUyxLQUFLO3dCQUNoQkMsT0FBTyxFQUFFVixHQUFHLENBQUNVLE9BQU87dUJBTGZWLEdBQUcsQ0FBQ00sRUFBRTs7Ozs0QkFNWDs7Ozs7d0JBQ0U7OEJBQ04sOERBQUNULDZEQUFRO29CQUFDYyxLQUFLLEVBQUVYLEdBQUcsQ0FBQ1ksS0FBSzs7Ozs7d0JBQUk7Ozs7OztnQkFDckI7Ozs7O1lBQ1AsQ0FDTjtDQUNIO0FBdkJ1QmQsS0FBQUEsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9bZ3ltSWRdL2luZGV4LmpzPzlhYzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IGdldEFsbEd5bXMsIGdldEd5bUJ5SWQgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9hcGktdXRpbFwiO1xyXG5cclxuaW1wb3J0IEd5bUhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91aS9neW0taGVhZGVyXCI7XHJcbmltcG9ydCBXYWxsTGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy93YWxsLWxpc3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNwZWNpZmljR3ltKHByb3BzKSB7XHJcbiAgY29uc3QgZ3ltID0gcHJvcHMuZ3ltO1xyXG4gIGlmICghZ3ltKSB7XHJcbiAgICByZXR1cm4gPHA+TG9hZGluZy4uLi48L3A+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICA8ZGl2IHdpZHRoPXt7IHNtOiAyMDAsIGxnOiAzMDAgfX0+XHJcbiAgICAgICAgICA8R3ltSGVhZGVyXHJcbiAgICAgICAgICAgIGtleT17Z3ltLmlkfVxyXG4gICAgICAgICAgICBpZD17Z3ltLmlkfVxyXG4gICAgICAgICAgICBuYW1lPXtneW0ubmFtZX1cclxuICAgICAgICAgICAgZGVzY3JpcHRpb249e2d5bS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgaW1hZ2U9e2d5bS5pbWFnZX1cclxuICAgICAgICAgICAgYWRkcmVzcz17Z3ltLmFkZHJlc3N9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxXYWxsTGlzdCBpdGVtcz17Z3ltLndhbGxzfSAvPlxyXG4gICAgICA8L0ZyYWdtZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCBneW1JZCA9IGNvbnRleHQucGFyYW1zLmd5bUlkO1xyXG4gIGNvbnN0IGd5bURhdGEgPSBhd2FpdCBnZXRHeW1CeUlkKGd5bUlkKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgZ3ltOiBneW1EYXRhLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgY29uc3QgZ3ltRGF0YSA9IGF3YWl0IGdldEFsbEd5bXMoKTtcclxuICAvLyBtYWtlIHN1cmUgdG8gcmV0dXJuIHRoZSBpZCB0aGF0IG1hdGNoZXMgdGhlIGZpbGUgcGF0aC4gSGVyZSBmb3IgZXguIGlzIFtneW1JZF1cclxuICBjb25zdCBwYXRocyA9IGd5bURhdGEubWFwKChneW0pID0+ICh7IHBhcmFtczogeyBneW1JZDogZ3ltLmlkIH0gfSkpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwYXRoczogcGF0aHMsXHJcbiAgICBmYWxsYmFjazogXCJibG9ja2luZ1wiLFxyXG4gIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbIkZyYWdtZW50IiwiR3ltSGVhZGVyIiwiV2FsbExpc3QiLCJTcGVjaWZpY0d5bSIsInByb3BzIiwiZ3ltIiwicCIsImRpdiIsIndpZHRoIiwic20iLCJsZyIsImlkIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJhZGRyZXNzIiwiaXRlbXMiLCJ3YWxscyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[gymId]/index.js\n");

/***/ })

});