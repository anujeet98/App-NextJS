"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/aboutus/[developerId]",{

/***/ "./pages/aboutus/[developerId].js":
/*!****************************************!*\
  !*** ./pages/aboutus/[developerId].js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n//for our-domain.com/aboutus/developer\n\nvar _s = $RefreshSig$();\n\nfunction AboutUs() {\n    _s();\n    const details = [\n        {\n            id: 1,\n            name: \"Anujeet\",\n            role: \"Senior Developer\"\n        },\n        {\n            id: 2,\n            name: \"Kevin\",\n            role: \"Backend Developer\"\n        },\n        {\n            id: 3,\n            name: \"Brian\",\n            role: \"Frontend Developer\"\n        }\n    ];\n    const developerId = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().query.developerId;\n    if (!developerId || developerId === NaN || developerId < 1 || developerId > details.length) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"Developer doesn't exist\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\anujeet\\\\Desktop\\\\work\\\\SHARPNER\\\\NEXTJS\\\\nextjs-app\\\\pages\\\\aboutus\\\\[developerId].js\",\n        lineNumber: 12,\n        columnNumber: 16\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: [\n            details[developerId - 1].name,\n            \" \",\n            details[developerId - 1].role\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\anujeet\\\\Desktop\\\\work\\\\SHARPNER\\\\NEXTJS\\\\nextjs-app\\\\pages\\\\aboutus\\\\[developerId].js\",\n        lineNumber: 13,\n        columnNumber: 12\n    }, this);\n}\n_s(AboutUs, \"CeygcqajjFExIxFEzW4x/gfWEGQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = AboutUs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AboutUs);\nvar _c;\n$RefreshReg$(_c, \"AboutUs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hYm91dHVzL1tkZXZlbG9wZXJJZF0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzQ0FBc0M7OztBQUNFO0FBRXhDLFNBQVNDOztJQUNMLE1BQU1DLFVBQVU7UUFDWjtZQUFFQyxJQUFLO1lBQUdDLE1BQU07WUFBV0MsTUFBTTtRQUFrQjtRQUNuRDtZQUFFRixJQUFLO1lBQUdDLE1BQU07WUFBU0MsTUFBTTtRQUFtQjtRQUNsRDtZQUFFRixJQUFLO1lBQUdDLE1BQU07WUFBU0MsTUFBTTtRQUFvQjtLQUN0RDtJQUNELE1BQU1DLGNBQWNOLHNEQUFTQSxHQUFHTyxLQUFLLENBQUNELFdBQVc7SUFDakQsSUFBRyxDQUFDQSxlQUFlQSxnQkFBY0UsT0FBT0YsY0FBWSxLQUFLQSxjQUFZSixRQUFRTyxNQUFNLEVBQy9FLHFCQUFPLDhEQUFDQztrQkFBRzs7Ozs7O0lBQ2YscUJBQU8sOERBQUNBOztZQUFJUixPQUFPLENBQUNJLGNBQVksRUFBRSxDQUFDRixJQUFJO1lBQUM7WUFBRUYsT0FBTyxDQUFDSSxjQUFZLEVBQUUsQ0FBQ0QsSUFBSTs7Ozs7OztBQUN6RTtHQVZTSjs7UUFNZUQsa0RBQVNBOzs7S0FOeEJDO0FBWVQsK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXR1cy9bZGV2ZWxvcGVySWRdLmpzP2ZkYzIiXSwic291cmNlc0NvbnRlbnQiOlsiLy9mb3Igb3VyLWRvbWFpbi5jb20vYWJvdXR1cy9kZXZlbG9wZXJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5mdW5jdGlvbiBBYm91dFVzKCl7XHJcbiAgICBjb25zdCBkZXRhaWxzID0gW1xyXG4gICAgICAgIHsgaWQgOiAxLCBuYW1lOiAnQW51amVldCcsIHJvbGU6ICdTZW5pb3IgRGV2ZWxvcGVyJ30sXHJcbiAgICAgICAgeyBpZCA6IDIsIG5hbWU6ICdLZXZpbicsIHJvbGU6ICdCYWNrZW5kIERldmVsb3Blcid9LFxyXG4gICAgICAgIHsgaWQgOiAzLCBuYW1lOiAnQnJpYW4nLCByb2xlOiAnRnJvbnRlbmQgRGV2ZWxvcGVyJ30sXHJcbiAgICBdXHJcbiAgICBjb25zdCBkZXZlbG9wZXJJZCA9IHVzZVJvdXRlcigpLnF1ZXJ5LmRldmVsb3BlcklkO1xyXG4gICAgaWYoIWRldmVsb3BlcklkIHx8IGRldmVsb3BlcklkPT09TmFOIHx8IGRldmVsb3BlcklkPDEgfHwgZGV2ZWxvcGVySWQ+ZGV0YWlscy5sZW5ndGgpXHJcbiAgICAgICAgcmV0dXJuIDxoMT5EZXZlbG9wZXIgZG9lc24ndCBleGlzdDwvaDE+O1xyXG4gICAgcmV0dXJuIDxoMT57ZGV0YWlsc1tkZXZlbG9wZXJJZC0xXS5uYW1lfSB7ZGV0YWlsc1tkZXZlbG9wZXJJZC0xXS5yb2xlfTwvaDE+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYm91dFVzO1xyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiQWJvdXRVcyIsImRldGFpbHMiLCJpZCIsIm5hbWUiLCJyb2xlIiwiZGV2ZWxvcGVySWQiLCJxdWVyeSIsIk5hTiIsImxlbmd0aCIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/aboutus/[developerId].js\n"));

/***/ })

});