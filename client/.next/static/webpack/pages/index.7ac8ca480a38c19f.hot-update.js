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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var Axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Axios */ \"./node_modules/Axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [friendAge, setFriendAge] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    const [friendName, setFriendName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [listFriend, setListFriend] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        // READ DATA\n        Axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:3001/read\").then((response)=>{\n            setListFriend(response.data);\n        }).catch((error)=>{\n            console.log(error);\n        });\n    }, []);\n    const addFriend = async ()=>{\n        Axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://localhost:3001/addFriend\", {\n            name: friendName,\n            age: friendAge\n        });\n        setFriendAge(\"\");\n        setFriendName(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().global_container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/guillaume /developer/Tutos/MERN/client/pages/index.js\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/guillaume /developer/Tutos/MERN/client/pages/index.js\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/guillaume /developer/Tutos/MERN/client/pages/index.js\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/guillaume /developer/Tutos/MERN/client/pages/index.js\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/guillaume /developer/Tutos/MERN/client/pages/index.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().inputs),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onChange: (e)=>{\n                            setFriendName(e.target.value);\n                        },\n                        placeholder: \"Friend Name\",\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().input),\n                        type: \"text\",\n                        value: friendName\n                    }, void 0, false, {\n                        fileName: \"/Users/guillaume /developer/Tutos/MERN/client/pages/index.js\",\n                        lineNumber: 47,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onChange: (e)=>{\n                            setFriendAge(e.target.value);\n                        },\n                        placeholder: \"Friend Age\",\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().input),\n                        type: \"number\",\n                        value: friendAge\n                    }, void 0, false, {\n                        fileName: \"/Users/guillaume /developer/Tutos/MERN/client/pages/index.js\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: addFriend,\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().submitButton),\n                        children: \"Add friend\"\n                    }, void 0, false, {\n                        fileName: \"/Users/guillaume /developer/Tutos/MERN/client/pages/index.js\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \" Update Age\"\n                    }, void 0, false, {\n                        fileName: \"/Users/guillaume /developer/Tutos/MERN/client/pages/index.js\",\n                        lineNumber: 68,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/guillaume /developer/Tutos/MERN/client/pages/index.js\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: listFriend.map((value, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().friend_card),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: value.name\n                            }, void 0, false, {\n                                fileName: \"/Users/guillaume /developer/Tutos/MERN/client/pages/index.js\",\n                                lineNumber: 74,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    value.age,\n                                    \" !\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/guillaume /developer/Tutos/MERN/client/pages/index.js\",\n                                lineNumber: 75,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/guillaume /developer/Tutos/MERN/client/pages/index.js\",\n                        lineNumber: 73,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/guillaume /developer/Tutos/MERN/client/pages/index.js\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/guillaume /developer/Tutos/MERN/client/pages/index.js\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"HFczS3UAMZKRwo+a4BWlPSLQbjs=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNkI7QUFDRTtBQUNhO0FBQ0E7QUFDbEI7QUFFWCxTQUFTTSxPQUFPOztJQUMzQixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0osK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDSyxZQUFZQyxjQUFjLEdBQUdOLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ08sWUFBWUMsY0FBYyxHQUFHUiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRS9DRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ1osWUFBWTtRQUNaRSxpREFBUyxDQUFDLDhCQUNMUyxJQUFJLENBQUMsQ0FBQ0MsV0FBYTtZQUNoQkgsY0FBY0csU0FBU0MsSUFBSTtRQUMvQixHQUNDQyxLQUFLLENBQUMsQ0FBQ0MsUUFBVTtZQUNkQyxRQUFRQyxHQUFHLENBQUNGO1FBQ2hCO0lBQ1IsR0FBRyxFQUFFO0lBRUwsTUFBTUcsWUFBWSxVQUFZO1FBQzFCaEIsa0RBQVUsQ0FBQyxtQ0FBbUM7WUFDMUNrQixNQUFNZDtZQUNOZSxLQUFLakI7UUFDVDtRQUVBQyxhQUFhO1FBQ2JFLGNBQWM7SUFDbEI7SUFDQSxxQkFDSSw4REFBQ2U7UUFBSUMsV0FBV3hCLGlGQUFvQjs7MEJBQ2hDLDhEQUFDRixrREFBSUE7O2tDQUNELDhEQUFDNEI7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQ0dOLE1BQUs7d0JBQ0xPLFNBQVE7Ozs7OztrQ0FFWiw4REFBQ0Q7d0JBQ0dOLE1BQUs7d0JBQ0xPLFNBQVE7Ozs7OztrQ0FFWiw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFFMUIsOERBQUNSO2dCQUFJQyxXQUFXeEIsdUVBQVU7O2tDQUN0Qiw4REFBQ2lDO3dCQUNHQyxVQUFVLENBQUNDLElBQU07NEJBQ2IzQixjQUFjMkIsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO3dCQUNoQzt3QkFDQUMsYUFBWTt3QkFDWmQsV0FBV3hCLHNFQUFTO3dCQUNwQnVDLE1BQUs7d0JBQ0xGLE9BQU85Qjs7Ozs7O2tDQUVYLDhEQUFDMEI7d0JBQ0dDLFVBQVUsQ0FBQ0MsSUFBTTs0QkFDYjdCLGFBQWE2QixFQUFFQyxNQUFNLENBQUNDLEtBQUs7d0JBQy9CO3dCQUNBQyxhQUFZO3dCQUNaZCxXQUFXeEIsc0VBQVM7d0JBQ3BCdUMsTUFBSzt3QkFDTEYsT0FBT2hDOzs7Ozs7a0NBRVgsOERBQUNtQzt3QkFBT0MsU0FBU3RCO3dCQUFXSyxXQUFXeEIsNkVBQWdCO2tDQUFFOzs7Ozs7a0NBR3pELDhEQUFDd0M7a0NBQU87Ozs7Ozs7Ozs7OzswQkFHWiw4REFBQ2pCOzBCQUNJZCxXQUFXa0MsR0FBRyxDQUFDLENBQUNOLE9BQU9PLHNCQUNwQiw4REFBQ3JCO3dCQUFJQyxXQUFXeEIsNEVBQWU7OzBDQUMzQiw4REFBQzhDOzBDQUFJVCxNQUFNaEIsSUFBSTs7Ozs7OzBDQUNmLDhEQUFDMEI7O29DQUFHVixNQUFNZixHQUFHO29DQUFDOzs7Ozs7Ozt1QkFGb0JzQjs7Ozs7Ozs7Ozs7Ozs7OztBQVExRCxDQUFDO0dBMUV1QnhDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgY3NzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXhpb3MgZnJvbSBcIkF4aW9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgY29uc3QgW2ZyaWVuZEFnZSwgc2V0RnJpZW5kQWdlXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtmcmllbmROYW1lLCBzZXRGcmllbmROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtsaXN0RnJpZW5kLCBzZXRMaXN0RnJpZW5kXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIFJFQUQgREFUQVxuICAgICAgICBBeGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvcmVhZFwiKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0TGlzdEZyaWVuZChyZXNwb25zZS5kYXRhKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBhZGRGcmllbmQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIEF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvYWRkRnJpZW5kXCIsIHtcbiAgICAgICAgICAgIG5hbWU6IGZyaWVuZE5hbWUsXG4gICAgICAgICAgICBhZ2U6IGZyaWVuZEFnZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0RnJpZW5kQWdlKFwiXCIpO1xuICAgICAgICBzZXRGcmllbmROYW1lKFwiXCIpO1xuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5nbG9iYWxfY29udGFpbmVyfT5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmlucHV0c30+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RnJpZW5kTmFtZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRnJpZW5kIE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nzcy5pbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZnJpZW5kTmFtZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEZyaWVuZEFnZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRnJpZW5kIEFnZVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3NzLmlucHV0fVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZyaWVuZEFnZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17YWRkRnJpZW5kfSBjbGFzc05hbWU9e2Nzcy5zdWJtaXRCdXR0b259PlxuICAgICAgICAgICAgICAgICAgICBBZGQgZnJpZW5kXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbj4gVXBkYXRlIEFnZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge2xpc3RGcmllbmQubWFwKCh2YWx1ZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5mcmllbmRfY2FyZH0ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+e3ZhbHVlLm5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt2YWx1ZS5hZ2V9ICE8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwiY3NzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBeGlvcyIsIkhvbWUiLCJmcmllbmRBZ2UiLCJzZXRGcmllbmRBZ2UiLCJmcmllbmROYW1lIiwic2V0RnJpZW5kTmFtZSIsImxpc3RGcmllbmQiLCJzZXRMaXN0RnJpZW5kIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiYWRkRnJpZW5kIiwicG9zdCIsIm5hbWUiLCJhZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJnbG9iYWxfY29udGFpbmVyIiwidGl0bGUiLCJtZXRhIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwiaW5wdXRzIiwiaW5wdXQiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwidHlwZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzdWJtaXRCdXR0b24iLCJtYXAiLCJpbmRleCIsImZyaWVuZF9jYXJkIiwiaDEiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});