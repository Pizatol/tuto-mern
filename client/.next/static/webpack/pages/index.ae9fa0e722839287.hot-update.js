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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var Axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Axios */ \"./node_modules/Axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [friendAge, setFriendAge] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    const [friendName, setFriendName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const addFriend = async ()=>{\n        Axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://localhost:3001/addFriend\", {\n            name: friendName,\n            age: friendAge\n        }).then(()=>{\n            alert(\"yeah it worked\");\n        }).catch(()=>{\n            alert(\"aww , it did not work\");\n        });\n        setFriendAge(0);\n        setFri;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().global_container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/guillaume /developer/Tutos/MERN/client/pages/index.js\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/guillaume /developer/Tutos/MERN/client/pages/index.js\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/guillaume /developer/Tutos/MERN/client/pages/index.js\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/guillaume /developer/Tutos/MERN/client/pages/index.js\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/guillaume /developer/Tutos/MERN/client/pages/index.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().inputs),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onChange: (e)=>{\n                            setFriendName(e.target.value);\n                        },\n                        placeholder: \"Friend Name\",\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().input),\n                        type: \"text\"\n                    }, void 0, false, {\n                        fileName: \"/Users/guillaume /developer/Tutos/MERN/client/pages/index.js\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onChange: (e)=>{\n                            setFriendAge(e.target.value);\n                        },\n                        placeholder: \"Friend Age\",\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().input),\n                        type: \"number\"\n                    }, void 0, false, {\n                        fileName: \"/Users/guillaume /developer/Tutos/MERN/client/pages/index.js\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: addFriend,\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().submitButton),\n                        children: \"Add friend\"\n                    }, void 0, false, {\n                        fileName: \"/Users/guillaume /developer/Tutos/MERN/client/pages/index.js\",\n                        lineNumber: 59,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/guillaume /developer/Tutos/MERN/client/pages/index.js\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/guillaume /developer/Tutos/MERN/client/pages/index.js\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"v6lYjkMx8c2HXqFBuKlXBIHkJj4=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNkI7QUFDRTtBQUNhO0FBQ1g7QUFDUDtBQUVYLFNBQVNLLE9BQU87O0lBQzNCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNLLFlBQVlDLGNBQWMsR0FBR04sK0NBQVFBLENBQUM7SUFJN0MsTUFBTU8sWUFBWSxVQUFZO1FBQzFCTixrREFBVSxDQUFDLG1DQUFtQztZQUMxQ1EsTUFBTUo7WUFDTkssS0FBS1A7UUFDVCxHQUNLUSxJQUFJLENBQUMsSUFBTTtZQUNSQyxNQUFNO1FBQ1YsR0FDQ0MsS0FBSyxDQUFDLElBQU07WUFDVEQsTUFBTTtRQUNWO1FBRUFSLGFBQWE7UUFDYlU7SUFDUjtJQUNBLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFXakIsaUZBQW9COzswQkFDaEMsOERBQUNGLGtEQUFJQTs7a0NBQ0QsOERBQUNxQjtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFDR1YsTUFBSzt3QkFDTFcsU0FBUTs7Ozs7O2tDQUVaLDhEQUFDRDt3QkFDR1YsTUFBSzt3QkFDTFcsU0FBUTs7Ozs7O2tDQUVaLDhEQUFDQzt3QkFBS0MsS0FBSTt3QkFBT0MsTUFBSzs7Ozs7Ozs7Ozs7OzBCQUUxQiw4REFBQ1I7Z0JBQUlDLFdBQVdqQix1RUFBVTs7a0NBQ3RCLDhEQUFDMEI7d0JBQ0dDLFVBQVUsQ0FBQ0MsSUFBTTs0QkFDYnJCLGNBQWNxQixFQUFFQyxNQUFNLENBQUNDLEtBQUs7d0JBQ2hDO3dCQUNBQyxhQUFZO3dCQUNaZCxXQUFXakIsc0VBQVM7d0JBQ3BCZ0MsTUFBSzs7Ozs7O2tDQUVULDhEQUFDTjt3QkFDR0MsVUFBVSxDQUFDQyxJQUFNOzRCQUNidkIsYUFBYXVCLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSzt3QkFDL0I7d0JBQ0FDLGFBQVk7d0JBQ1pkLFdBQVdqQixzRUFBUzt3QkFDcEJnQyxNQUFLOzs7Ozs7a0NBRVQsOERBQUNDO3dCQUNHQyxTQUFTMUI7d0JBQ1RTLFdBQVdqQiw2RUFBZ0I7a0NBQzlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNakIsQ0FBQztHQTdEdUJHO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgY3NzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEF4aW9zIGZyb20gXCJBeGlvc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAgIGNvbnN0IFtmcmllbmRBZ2UsIHNldEZyaWVuZEFnZV0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbZnJpZW5kTmFtZSwgc2V0RnJpZW5kTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuIFxuXG4gICAgY29uc3QgYWRkRnJpZW5kID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBBeGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FkZEZyaWVuZFwiLCB7XG4gICAgICAgICAgICBuYW1lOiBmcmllbmROYW1lLFxuICAgICAgICAgICAgYWdlOiBmcmllbmRBZ2UsXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJ5ZWFoIGl0IHdvcmtlZFwiKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiYXd3ICwgaXQgZGlkIG5vdCB3b3JrXCIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHNldEZyaWVuZEFnZSgwKVxuICAgICAgICAgICAgc2V0RnJpXG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmdsb2JhbF9jb250YWluZXJ9PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuaW5wdXRzfT5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRGcmllbmROYW1lKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGcmllbmQgTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3NzLmlucHV0fVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRGcmllbmRBZ2UoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZyaWVuZCBBZ2VcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nzcy5pbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FkZEZyaWVuZH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjc3Muc3VibWl0QnV0dG9ufVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgQWRkIGZyaWVuZFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwiY3NzIiwidXNlU3RhdGUiLCJBeGlvcyIsIkhvbWUiLCJmcmllbmRBZ2UiLCJzZXRGcmllbmRBZ2UiLCJmcmllbmROYW1lIiwic2V0RnJpZW5kTmFtZSIsImFkZEZyaWVuZCIsInBvc3QiLCJuYW1lIiwiYWdlIiwidGhlbiIsImFsZXJ0IiwiY2F0Y2giLCJzZXRGcmkiLCJkaXYiLCJjbGFzc05hbWUiLCJnbG9iYWxfY29udGFpbmVyIiwidGl0bGUiLCJtZXRhIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwiaW5wdXRzIiwiaW5wdXQiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwidHlwZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzdWJtaXRCdXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});