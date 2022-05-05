"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 14:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "@mantine/core"
var core_ = __webpack_require__(247);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./pages/_app.tsx




function App(props) {
    const { Component , pageProps  } = props;
    const theme1 = (0,core_.useMantineTheme)();
    const { 0: opened , 1: setOpened  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Climbing App"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "minimum-scale=1, initial-scale=1, width=device-width"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(core_.AppShell, {
                padding: "md",
                header: /*#__PURE__*/ jsx_runtime_.jsx(core_.Header, {
                    height: 70,
                    p: "md",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            height: "100%"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.MediaQuery, {
                                largerThan: "sm",
                                styles: {
                                    display: "none"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Burger, {
                                    opened: opened,
                                    onClick: ()=>setOpened((o)=>!o
                                        )
                                    ,
                                    size: "sm",
                                    color: theme1.colors.gray[6],
                                    mr: "xl"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Group, {
                                position: "apart",
                                sx: {
                                    height: "100%"
                                },
                                px: 20,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                                        transform: "capitalize",
                                        children: "Welcome to the climbing app!"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                                        component: "a",
                                        href: "/",
                                        children: "Home"
                                    })
                                ]
                            })
                        ]
                    })
                }),
                styles: (theme)=>({
                        main: {
                            backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0]
                        }
                    })
                ,
                children: /*#__PURE__*/ jsx_runtime_.jsx(core_.MantineProvider, {
                    withGlobalStyles: true,
                    withNormalizeCSS: true,
                    theme: {
                        /** Put your mantine theme override here */ colorScheme: "light"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps
                    })
                })
            })
        ]
    });
};


/***/ }),

/***/ 247:
/***/ ((module) => {

module.exports = require("@mantine/core");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(14));
module.exports = __webpack_exports__;

})();