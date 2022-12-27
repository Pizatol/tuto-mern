"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var Axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Axios */ \"./node_modules/Axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [friendAge, setFriendAge] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    const [friendName, setFriendName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [listFriend, setListFriend] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        // READ DATA\n        Axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:3001/read\").then((response)=>{\n            setListFriend(response.data);\n        }).catch((error)=>{\n            console.log(error);\n        });\n    }, []);\n    // ADD\n    const addFriend = async ()=>{\n        Axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://localhost:3001/addFriend\", {\n            name: friendName,\n            age: friendAge\n        });\n        setFriendAge(\"\");\n        setFriendName(\"\");\n    };\n    // UPDATE\n    const updateAge = (id)=>{\n        // prompt ouvre une fenetre pour entrer une nouvelle info\n        const newAge = prompt(\"Enter new age : \");\n        Axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].put(\"http://localhost:3001/update\", {\n            newAge: newAge,\n            id: id\n        }).then(()=>{\n            setListFriend(listFriend.map((val)=>val._id === id ? {\n                    _id: id,\n                    name: val.name,\n                    age: newAge\n                } : val));\n        });\n    };\n    // DELETE\n    const handleDelete = (id)=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().global_container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/guillaume /developer/Tutos/MERN/client/pages/index.js\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/guillaume /developer/Tutos/MERN/client/pages/index.js\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/guillaume /developer/Tutos/MERN/client/pages/index.js\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/guillaume /developer/Tutos/MERN/client/pages/index.js\",\n                        lineNumber: 69,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/guillaume /developer/Tutos/MERN/client/pages/index.js\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().inputs),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onChange: (e)=>{\n                            setFriendName(e.target.value);\n                        },\n                        placeholder: \"Friend Name\",\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().input),\n                        type: \"text\",\n                        value: friendName\n                    }, void 0, false, {\n                        fileName: \"/Users/guillaume /developer/Tutos/MERN/client/pages/index.js\",\n                        lineNumber: 72,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onChange: (e)=>{\n                            setFriendAge(e.target.value);\n                        },\n                        placeholder: \"Friend Age\",\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().input),\n                        type: \"number\",\n                        value: friendAge\n                    }, void 0, false, {\n                        fileName: \"/Users/guillaume /developer/Tutos/MERN/client/pages/index.js\",\n                        lineNumber: 81,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: addFriend,\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().submitButton),\n                        children: \"Add friend\"\n                    }, void 0, false, {\n                        fileName: \"/Users/guillaume /developer/Tutos/MERN/client/pages/index.js\",\n                        lineNumber: 90,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/guillaume /developer/Tutos/MERN/client/pages/index.js\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: listFriend.map((value, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().friend_card),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: value.name\n                            }, void 0, false, {\n                                fileName: \"/Users/guillaume /developer/Tutos/MERN/client/pages/index.js\",\n                                lineNumber: 98,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    value.age,\n                                    \" !\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/guillaume /developer/Tutos/MERN/client/pages/index.js\",\n                                lineNumber: 99,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>updateAge(value._id),\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().submitButton),\n                                children: [\n                                    \" \",\n                                    \"Update Age\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/guillaume /developer/Tutos/MERN/client/pages/index.js\",\n                                lineNumber: 100,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleDelete(value._id),\n                                children: \"Delete\"\n                            }, void 0, false, {\n                                fileName: \"/Users/guillaume /developer/Tutos/MERN/client/pages/index.js\",\n                                lineNumber: 108,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/guillaume /developer/Tutos/MERN/client/pages/index.js\",\n                        lineNumber: 97,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/guillaume /developer/Tutos/MERN/client/pages/index.js\",\n                lineNumber: 95,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/guillaume /developer/Tutos/MERN/client/pages/index.js\",\n        lineNumber: 58,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"HFczS3UAMZKRwo+a4BWlPSLQbjs=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTLElBQU1uQixhQUFhZSxNQUFNaEIsR0FBRzswQ0FBSTs7Ozs7Ozt1QkFYZnNCOzs7Ozs7Ozs7Ozs7Ozs7O0FBaUIxRCxDQUFDO0dBM0d1QmhEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgY3NzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXhpb3MgZnJvbSBcIkF4aW9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgY29uc3QgW2ZyaWVuZEFnZSwgc2V0RnJpZW5kQWdlXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtmcmllbmROYW1lLCBzZXRGcmllbmROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtsaXN0RnJpZW5kLCBzZXRMaXN0RnJpZW5kXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIFJFQUQgREFUQVxuICAgICAgICBBeGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvcmVhZFwiKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0TGlzdEZyaWVuZChyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgfSwgW10pO1xuXG4gICAgLy8gQUREXG4gICAgY29uc3QgYWRkRnJpZW5kID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBBeGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FkZEZyaWVuZFwiLCB7XG4gICAgICAgICAgICBuYW1lOiBmcmllbmROYW1lLFxuICAgICAgICAgICAgYWdlOiBmcmllbmRBZ2UsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldEZyaWVuZEFnZShcIlwiKTtcbiAgICAgICAgc2V0RnJpZW5kTmFtZShcIlwiKTtcbiAgICB9O1xuXG4gICAgLy8gVVBEQVRFXG4gICAgY29uc3QgdXBkYXRlQWdlID0gIChpZCkgPT4ge1xuICAgICAgICAvLyBwcm9tcHQgb3V2cmUgdW5lIGZlbmV0cmUgcG91ciBlbnRyZXIgdW5lIG5vdXZlbGxlIGluZm9cbiAgICAgICAgY29uc3QgbmV3QWdlID0gcHJvbXB0KFwiRW50ZXIgbmV3IGFnZSA6IFwiKTtcblxuICAgICAgICBBeGlvcy5wdXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvdXBkYXRlXCIsIHtcbiAgICAgICAgICAgIG5ld0FnZTogbmV3QWdlLFxuICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgc2V0TGlzdEZyaWVuZChsaXN0RnJpZW5kLm1hcCh2YWwgPT4gXG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgdmFsLl9pZCA9PT0gaWQgPyB7X2lkIDogaWQsIG5hbWUgOiB2YWwubmFtZSwgYWdlIDogbmV3QWdlfSA6IHZhbCBcbiAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkpXG4gICAgICAgIH0pXG4gICAgfTtcblxuLy8gREVMRVRFXG5cbmNvbnN0IGhhbmRsZURlbGV0ZSA9IChpZCkgPT4ge1xuICAgIFxufVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5nbG9iYWxfY29udGFpbmVyfT5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmlucHV0c30+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RnJpZW5kTmFtZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRnJpZW5kIE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nzcy5pbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZnJpZW5kTmFtZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEZyaWVuZEFnZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRnJpZW5kIEFnZVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3NzLmlucHV0fVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZyaWVuZEFnZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17YWRkRnJpZW5kfSBjbGFzc05hbWU9e2Nzcy5zdWJtaXRCdXR0b259PlxuICAgICAgICAgICAgICAgICAgICBBZGQgZnJpZW5kXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7bGlzdEZyaWVuZC5tYXAoKHZhbHVlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmZyaWVuZF9jYXJkfSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57dmFsdWUubmFtZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3ZhbHVlLmFnZX0gITwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB1cGRhdGVBZ2UodmFsdWUuX2lkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nzcy5zdWJtaXRCdXR0b259XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVwZGF0ZSBBZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZSh2YWx1ZS5faWQpfSA+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwiY3NzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBeGlvcyIsIkhvbWUiLCJmcmllbmRBZ2UiLCJzZXRGcmllbmRBZ2UiLCJmcmllbmROYW1lIiwic2V0RnJpZW5kTmFtZSIsImxpc3RGcmllbmQiLCJzZXRMaXN0RnJpZW5kIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiYWRkRnJpZW5kIiwicG9zdCIsIm5hbWUiLCJhZ2UiLCJ1cGRhdGVBZ2UiLCJpZCIsIm5ld0FnZSIsInByb21wdCIsInB1dCIsIm1hcCIsInZhbCIsIl9pZCIsImhhbmRsZURlbGV0ZSIsImRpdiIsImNsYXNzTmFtZSIsImdsb2JhbF9jb250YWluZXIiLCJ0aXRsZSIsIm1ldGEiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJpbnB1dHMiLCJpbnB1dCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwiYnV0dG9uIiwib25DbGljayIsInN1Ym1pdEJ1dHRvbiIsImluZGV4IiwiZnJpZW5kX2NhcmQiLCJoMSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});