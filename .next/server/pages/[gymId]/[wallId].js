"use strict";
(() => {
var exports = {};
exports.id = 332;
exports.ids = [332];
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

/***/ 842:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SpecificWall),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./helpers/api-util.js
var api_util = __webpack_require__(446);
// EXTERNAL MODULE: external "@mantine/core"
var core_ = __webpack_require__(247);
;// CONCATENATED MODULE: ./components/ui/climb-card.js


function ClimbCard(props) {
    const { id , name , grade , description , image  } = props;
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
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Group, {
                    position: "apart",
                    style: {
                        marginBottom: 5,
                        marginTop: theme.spacing.sm
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                            weight: 500,
                            children: name
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                            weight: 500,
                            children: grade
                        })
                    ]
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
                    children: "Click me"
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/climb-item.js


function ClimbItem(props) {
    const { id , grade , name , description , image  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx(ClimbCard, {
        id: id,
        grade: grade,
        name: name,
        description: description,
        image: image
    });
};

;// CONCATENATED MODULE: ./components/climb-list.js


function ClimbList(props) {
    const climbingRoutes = props.items;
    const climbs = [];
    for(let key in climbingRoutes){
        climbs.push({
            id: key,
            ...climbingRoutes[key]
        });
    }
    if (!climbs) {
        /*#__PURE__*/ jsx_runtime_.jsx("p", {
            children: "Loading routes..."
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        children: climbs.map((route)=>/*#__PURE__*/ jsx_runtime_.jsx(ClimbItem, {
                id: route.id,
                image: route.image,
                name: route.name,
                grade: route.grade,
                description: route.description
            }, route.id)
        )
    });
};

;// CONCATENATED MODULE: ./pages/[gymId]/[wallId]/index.js




// we don't care to pre-render these walls, the data is not that important
// so lets use SWR instead.
function SpecificWall(props) {
    const { wall  } = props;
    if (wall) {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(core_.Title, {
                    order: 1,
                    align: "center",
                    children: wall.name
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(ClimbList, {
                    items: wall.climbs
                })
            ]
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: "wall not found"
    });
};
async function getServerSideProps(context) {
    const gym = await (0,api_util/* getGymById */.U)(context.params.gymId);
    const wallsData = gym.walls;
    const walls = [];
    // not quite sure I needed to collect the data here. might be an api thing. TODO look up later
    for(let key in wallsData){
        walls.push({
            id: key,
            ...wallsData[key]
        });
    }
    const wallId = context.params.wallId;
    const wall1 = walls.find((wall)=>wall.id === wallId
    );
    if (!wall1) {
        return {
            props: {
                hasError: true
            }
        };
    }
    return {
        props: {
            wall: wall1
        }
    };
}


/***/ }),

/***/ 247:
/***/ ((module) => {

module.exports = require("@mantine/core");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(842));
module.exports = __webpack_exports__;

})();