"use strict";
(() => {
var exports = {};
exports.id = 134;
exports.ids = [134];
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

/***/ 425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SpecificGym),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./helpers/api-util.js
var api_util = __webpack_require__(446);
// EXTERNAL MODULE: external "@mantine/core"
var core_ = __webpack_require__(247);
;// CONCATENATED MODULE: ./components/ui/gym-header.js


function GymHeader(props) {
    const { id , name , image , description , address  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Stack, {
            align: "center",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(core_.Image, {
                    alt: id,
                    width: 500,
                    height: 200,
                    fit: "contain",
                    // withPlaceholder
                    // placeholder={
                    //   <Text>This is where I would put my image... if I had one!</Text>
                    // }
                    src: image
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                    children: name
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                    children: address
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                    children: description
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(core_.Divider, {
                    my: "sm"
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/ui/wall-card.js


function WallCard(props) {
    const { id , name , image , gymId  } = props;
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
                /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                    variant: "light",
                    color: "blue",
                    fullWidth: true,
                    style: {
                        marginTop: 14
                    },
                    component: "a",
                    href: `/${gymId}/${id}`,
                    children: "Click me"
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./components/wall-item.js



// would it be better to query to get the wallId or to have gym:{wall:{gymId}} -- the gymId nested inside the wall
// should a wall always be tied to a gym?
function WallItem(props) {
    const { id , image , name  } = props;
    const router = (0,router_namespaceObject.useRouter)();
    const gym = router.query.gymId;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(WallCard, {
                id: id,
                name: name,
                image: image,
                gymId: gym
            })
        })
    });
};

;// CONCATENATED MODULE: ./components/wall-list.js


function WallList(props) {
    const wallsData = props.items;
    const walls = [];
    // not quite sure I needed to collect the data here. might be an api thing. TODO look up later
    for(let key in wallsData){
        walls.push({
            id: key,
            ...wallsData[key]
        });
    }
    if (!walls) {
        return /*#__PURE__*/ jsx_runtime_.jsx("p", {
            children: "loading... "
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: walls.map((wall)=>/*#__PURE__*/ jsx_runtime_.jsx(WallItem, {
                id: wall.id,
                image: wall.image,
                name: wall.name
            }, wall.id)
        )
    });
};

;// CONCATENATED MODULE: ./pages/[gymId]/index.js





function SpecificGym(props) {
    const gym = props.gym;
    if (!gym) {
        return /*#__PURE__*/ jsx_runtime_.jsx("p", {
            children: "Loading...."
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(GymHeader, {
                    id: gym.id,
                    name: gym.name,
                    description: gym.description,
                    image: gym.image,
                    address: gym.address
                }, gym.id),
                /*#__PURE__*/ jsx_runtime_.jsx(WallList, {
                    items: gym.walls
                })
            ]
        })
    });
};
async function getStaticProps(context) {
    const gymId = context.params.gymId;
    const gymData = await (0,api_util/* getGymById */.U)(gymId);
    return {
        props: {
            gym: gymData
        }
    };
}
async function getStaticPaths() {
    const gymData = await (0,api_util/* getAllGyms */.X)();
    // make sure to return the id that matches the file path. Here for ex. is [gymId]
    const paths = gymData.map((gym)=>({
            params: {
                gymId: gym.id
            }
        })
    );
    return {
        paths: paths,
        fallback: "blocking"
    };
}


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
var __webpack_exports__ = (__webpack_exec__(425));
module.exports = __webpack_exports__;

})();