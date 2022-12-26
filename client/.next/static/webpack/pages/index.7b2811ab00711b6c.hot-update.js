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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var Axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Axios */ \"./node_modules/Axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [friendAge, setFriendAge] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    const [friendName, setFriendName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const addFriend = async ()=>{\n        Axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://localhost:3001/addFriend\", {\n            name: friendName,\n            age: friendAge\n        }).then(()=>{\n            alert(\"yeah it worked\");\n        }).catch(()=>{\n            alert(\"aww , it did not work\");\n        });\n        setFriendAge(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().global_container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/guillaume /developer/Tutos/MERN/client/pages/index.js\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/guillaume /developer/Tutos/MERN/client/pages/index.js\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/guillaume /developer/Tutos/MERN/client/pages/index.js\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/guillaume /developer/Tutos/MERN/client/pages/index.js\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/guillaume /developer/Tutos/MERN/client/pages/index.js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().inputs),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onChange: (e)=>{\n                            setFriendName(e.target.value);\n                        },\n                        placeholder: \"Friend Name\",\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().input),\n                        type: \"text\"\n                    }, void 0, false, {\n                        fileName: \"/Users/guillaume /developer/Tutos/MERN/client/pages/index.js\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onChange: (e)=>{\n                            setFriendAge(e.target.value);\n                        },\n                        placeholder: \"Friend Age\",\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().input),\n                        type: \"number\"\n                    }, void 0, false, {\n                        fileName: \"/Users/guillaume /developer/Tutos/MERN/client/pages/index.js\",\n                        lineNumber: 50,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: addFriend,\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().submitButton),\n                        children: \"Add friend\"\n                    }, void 0, false, {\n                        fileName: \"/Users/guillaume /developer/Tutos/MERN/client/pages/index.js\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/guillaume /developer/Tutos/MERN/client/pages/index.js\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/guillaume /developer/Tutos/MERN/client/pages/index.js\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"v6lYjkMx8c2HXqFBuKlXBIHkJj4=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNkI7QUFDRTtBQUNhO0FBQ1g7QUFDUDtBQUVYLFNBQVNLLE9BQU87O0lBQzNCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNLLFlBQVlDLGNBQWMsR0FBR04sK0NBQVFBLENBQUM7SUFJN0MsTUFBTU8sWUFBWSxVQUFZO1FBQzFCTixrREFBVSxDQUFDLG1DQUFtQztZQUMxQ1EsTUFBTUo7WUFDTkssS0FBS1A7UUFDVCxHQUNLUSxJQUFJLENBQUMsSUFBTTtZQUNSQyxNQUFNO1FBQ1YsR0FDQ0MsS0FBSyxDQUFDLElBQU07WUFDVEQsTUFBTTtRQUNWO1FBRUFSLGFBQWE7SUFDckI7SUFDQSxxQkFDSSw4REFBQ1U7UUFBSUMsV0FBV2hCLGlGQUFvQjs7MEJBQ2hDLDhEQUFDRixrREFBSUE7O2tDQUNELDhEQUFDb0I7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQ0dULE1BQUs7d0JBQ0xVLFNBQVE7Ozs7OztrQ0FFWiw4REFBQ0Q7d0JBQ0dULE1BQUs7d0JBQ0xVLFNBQVE7Ozs7OztrQ0FFWiw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFFMUIsOERBQUNSO2dCQUFJQyxXQUFXaEIsdUVBQVU7O2tDQUN0Qiw4REFBQ3lCO3dCQUNHQyxVQUFVLENBQUNDLElBQU07NEJBQ2JwQixjQUFjb0IsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO3dCQUNoQzt3QkFDQUMsYUFBWTt3QkFDWmQsV0FBV2hCLHNFQUFTO3dCQUNwQitCLE1BQUs7Ozs7OztrQ0FFVCw4REFBQ047d0JBQ0dDLFVBQVUsQ0FBQ0MsSUFBTTs0QkFDYnRCLGFBQWFzQixFQUFFQyxNQUFNLENBQUNDLEtBQUs7d0JBQy9CO3dCQUNBQyxhQUFZO3dCQUNaZCxXQUFXaEIsc0VBQVM7d0JBQ3BCK0IsTUFBSzs7Ozs7O2tDQUVULDhEQUFDQzt3QkFDR0MsU0FBU3pCO3dCQUNUUSxXQUFXaEIsNkVBQWdCO2tDQUM5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWpCLENBQUM7R0E1RHVCRztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IGNzcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBeGlvcyBmcm9tIFwiQXhpb3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgICBjb25zdCBbZnJpZW5kQWdlLCBzZXRGcmllbmRBZ2VdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW2ZyaWVuZE5hbWUsIHNldEZyaWVuZE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiBcblxuICAgIGNvbnN0IGFkZEZyaWVuZCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgQXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hZGRGcmllbmRcIiwge1xuICAgICAgICAgICAgbmFtZTogZnJpZW5kTmFtZSxcbiAgICAgICAgICAgIGFnZTogZnJpZW5kQWdlLFxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwieWVhaCBpdCB3b3JrZWRcIik7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydChcImF3dyAsIGl0IGRpZCBub3Qgd29ya1wiKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBzZXRGcmllbmRBZ2UoXCJcIilcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuZ2xvYmFsX2NvbnRhaW5lcn0+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5pbnB1dHN9PlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEZyaWVuZE5hbWUoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZyaWVuZCBOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjc3MuaW5wdXR9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEZyaWVuZEFnZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRnJpZW5kIEFnZVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3NzLmlucHV0fVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17YWRkRnJpZW5kfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nzcy5zdWJtaXRCdXR0b259XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBBZGQgZnJpZW5kXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJjc3MiLCJ1c2VTdGF0ZSIsIkF4aW9zIiwiSG9tZSIsImZyaWVuZEFnZSIsInNldEZyaWVuZEFnZSIsImZyaWVuZE5hbWUiLCJzZXRGcmllbmROYW1lIiwiYWRkRnJpZW5kIiwicG9zdCIsIm5hbWUiLCJhZ2UiLCJ0aGVuIiwiYWxlcnQiLCJjYXRjaCIsImRpdiIsImNsYXNzTmFtZSIsImdsb2JhbF9jb250YWluZXIiLCJ0aXRsZSIsIm1ldGEiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJpbnB1dHMiLCJpbnB1dCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwiYnV0dG9uIiwib25DbGljayIsInN1Ym1pdEJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});