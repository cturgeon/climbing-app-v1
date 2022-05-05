"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 446:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ getGymById),
/* harmony export */   "X": () => (/* binding */ getAllGyms)
/* harmony export */ });
async function getAllGyms() {
    const response = await fetch("https://nextjs-course-cc72c-default-rtdb.firebaseio.com/gymData.json");
    const data = await response.json();
    const gymData = [];
    for(const key in data){
        gymData.push({
            id: key,
            ...data[key]
        });
    }
    return gymData;
}
async function getGymById(id) {
    let gymData = await getAllGyms();
    return gymData.find((gym)=>gym.id === id
    );
}


/***/ }),

/***/ 66:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mantine/core"
var core_ = __webpack_require__(247);
// EXTERNAL MODULE: ./helpers/api-util.js
var api_util = __webpack_require__(446);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: ./components/ui/gym-card.js



function GymCard(props) {
    const { id , name , image , description  } = props;
    const theme = (0,core_.useMantineTheme)();
    const secondaryColor = theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            width: 340,
            margin: "auto"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Card, {
            shadow: "sm",
            p: "lg",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(core_.Card.Section, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Image, {
                        src: image,
                        height: 160,
                        alt: id
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(core_.Group, {
                    position: "apart",
                    style: {
                        marginBottom: 5,
                        marginTop: theme.spacing.sm
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                        weight: 500,
                        children: name
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                    size: "sm",
                    style: {
                        color: secondaryColor,
                        lineHeight: 1.5
                    },
                    children: description
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                    variant: "light",
                    color: "blue",
                    fullWidth: true,
                    style: {
                        marginTop: 14
                    },
                    component: "a",
                    href: `/${id}`,
                    children: "Click me"
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/gym-item.js


function GymItem(props) {
    const { id , name , description , image , address  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(GymCard, {
            id: id,
            name: name,
            description: description,
            image: image,
            address: address
        })
    });
};

;// CONCATENATED MODULE: ./components/gym-list.js



function GymList(props) {
    const { items  } = props;
    if (!items) {
        return /*#__PURE__*/ jsx_runtime_.jsx("p", {
            children: "Loading gym data"
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        children: items.map((gym)=>// !TODO should the key be in the fragment?
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(GymItem, {
                    id: gym.id,
                    name: gym.name,
                    description: gym.description,
                    image: gym.image,
                    address: gym.address
                })
            }, gym.id)
        )
    });
};

;// CONCATENATED MODULE: ./pages/index.js




function Home(props) {
    const { gymData  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                size: "md",
                align: "center",
                transform: "capitalize",
                children: "You can begin by selecting a gym below"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(GymList, {
                items: gymData
            })
        ]
    });
};
// pre-render since there aren't many gyms to show and they don't change very often
async function getStaticProps() {
    const gymData = await (0,api_util/* getAllGyms */.X)();
    return {
        props: {
            gymData: gymData
        }
    };
}


/***/ }),

/***/ 247:
/***/ ((module) => {

module.exports = require("@mantine/core");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 925:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [895,664], () => (__webpack_exec__(66)));
module.exports = __webpack_exports__;

})();