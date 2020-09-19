module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/appbar.js":
/*!******************************!*\
  !*** ./components/appbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ButtonAppBar; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ \"@material-ui/core/AppBar\");\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ \"@material-ui/core/Toolbar\");\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Link */ \"@material-ui/core/Link\");\n/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Select */ \"@material-ui/core/Select\");\n/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(theme => ({\n  root: {\n    flexGrow: 1\n  },\n  appBar: {\n    top: \"0px\",\n    left: \"0px\",\n    background: \"#202020\",\n    border: \"1px solid #707070\",\n    opacity: \"1\",\n    position: \"static\"\n  },\n  rightside: {\n    flexGrow: 1,\n    marginRight: theme.spacing(1),\n    primary: {\n      main: \"white\"\n    }\n  },\n  leftside: {\n    marginLeft: theme.spacing(2)\n  },\n  menuButton: {\n    marginRight: theme.spacing(2)\n  },\n  title: {\n    flexGrow: 1\n  }\n}));\nfunction ButtonAppBar(props) {\n  const classes = useStyles();\n  const {\n    0: loggedInUser,\n    1: setLoggedInUser\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n  const {\n    0: loggedIn,\n    1: setLoggedIn\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n\n  const loggedInStatus = () => {\n    setLoggedInUser(null);\n    props.logout(true);\n  };\n\n  const handleChange = () => {};\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    setLoggedInUser(props.user);\n    setLoggedIn(props.loggedInState);\n  }, []);\n  return __jsx(\"div\", {\n    className: classes.root\n  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    className: classes.appBar\n  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    className: classes.rightside\n  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    style: {\n      textDecoration: \"none\",\n      color: \"white\"\n    },\n    underline: \"none\",\n    href: \"./\"\n  }, \"Palabra\")), props.loggedInState == false ? __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, null, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    className: classes.leftside,\n    style: {\n      textDecoration: \"none\",\n      color: \"white\"\n    },\n    underline: \"none\",\n    href: \"../login\"\n  }, \"Login\"), __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    className: classes.leftside,\n    style: {\n      textDecoration: \"none\",\n      color: \"white\"\n    },\n    underline: \"none\",\n    href: \"../signup\"\n  }, \"Sign Up\")) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    variant: \"outlined\",\n    onChange: handleChange,\n    className: classes.select\n  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    href: \"../userprofile\",\n    color: \"inherit\"\n  }, props.user), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    href: \"../console\",\n    color: \"inherit\"\n  }, \"Console\"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    color: \"inherit\",\n    onClick: loggedInStatus\n  }, \"Logout\")))));\n}\n/*         {teamMenu(teamCol)}*///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FwcGJhci5qcz83ZDNmIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJmbGV4R3JvdyIsImFwcEJhciIsInRvcCIsImxlZnQiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwib3BhY2l0eSIsInBvc2l0aW9uIiwicmlnaHRzaWRlIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwicHJpbWFyeSIsIm1haW4iLCJsZWZ0c2lkZSIsIm1hcmdpbkxlZnQiLCJtZW51QnV0dG9uIiwidGl0bGUiLCJCdXR0b25BcHBCYXIiLCJwcm9wcyIsImNsYXNzZXMiLCJsb2dnZWRJblVzZXIiLCJzZXRMb2dnZWRJblVzZXIiLCJ1c2VTdGF0ZSIsImxvZ2dlZEluIiwic2V0TG9nZ2VkSW4iLCJsb2dnZWRJblN0YXR1cyIsImxvZ291dCIsImhhbmRsZUNoYW5nZSIsInVzZUVmZmVjdCIsInVzZXIiLCJsb2dnZWRJblN0YXRlIiwidGV4dERlY29yYXRpb24iLCJjb2xvciIsInNlbGVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUVDLEtBQUQsS0FBWTtBQUN2Q0MsTUFBSSxFQUFFO0FBQ0pDLFlBQVEsRUFBRTtBQUROLEdBRGlDO0FBSXZDQyxRQUFNLEVBQUU7QUFDTkMsT0FBRyxFQUFFLEtBREM7QUFFTkMsUUFBSSxFQUFFLEtBRkE7QUFHTkMsY0FBVSxFQUFFLFNBSE47QUFJTkMsVUFBTSxFQUFFLG1CQUpGO0FBS05DLFdBQU8sRUFBRSxHQUxIO0FBTU5DLFlBQVEsRUFBRTtBQU5KLEdBSitCO0FBWXZDQyxXQUFTLEVBQUU7QUFDVFIsWUFBUSxFQUFFLENBREQ7QUFFVFMsZUFBVyxFQUFFWCxLQUFLLENBQUNZLE9BQU4sQ0FBYyxDQUFkLENBRko7QUFH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ZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IEFwcEJhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCI7XG5pbXBvcnQgVG9vbGJhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmtcIjtcbmltcG9ydCBTZWxlY3QgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1NlbGVjdFwiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgcm9vdDoge1xuICAgIGZsZXhHcm93OiAxLFxuICB9LFxuICBhcHBCYXI6IHtcbiAgICB0b3A6IFwiMHB4XCIsXG4gICAgbGVmdDogXCIwcHhcIixcbiAgICBiYWNrZ3JvdW5kOiBcIiMyMDIwMjBcIixcbiAgICBib3JkZXI6IFwiMXB4IHNvbGlkICM3MDcwNzBcIixcbiAgICBvcGFjaXR5OiBcIjFcIixcbiAgICBwb3NpdGlvbjogXCJzdGF0aWNcIixcbiAgfSxcbiAgcmlnaHRzaWRlOiB7XG4gICAgZmxleEdyb3c6IDEsXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgcHJpbWFyeToge1xuICAgICAgbWFpbjogXCJ3aGl0ZVwiLFxuICAgIH0sXG4gIH0sXG4gIGxlZnRzaWRlOiB7XG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygyKSxcbiAgfSxcblxuICBtZW51QnV0dG9uOiB7XG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgZmxleEdyb3c6IDEsXG4gIH0sXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbkFwcEJhcihwcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgY29uc3QgW2xvZ2dlZEluVXNlciwgc2V0TG9nZ2VkSW5Vc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbbG9nZ2VkSW4sIHNldExvZ2dlZEluXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBsb2dnZWRJblN0YXR1cyA9ICgpID0+IHtcbiAgICBzZXRMb2dnZWRJblVzZXIobnVsbCk7XG5cbiAgICBwcm9wcy5sb2dvdXQodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKCkgPT4ge307XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRMb2dnZWRJblVzZXIocHJvcHMudXNlcik7XG4gICAgc2V0TG9nZ2VkSW4ocHJvcHMubG9nZ2VkSW5TdGF0ZSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPEFwcEJhciBjbGFzc05hbWU9e2NsYXNzZXMuYXBwQmFyfT5cbiAgICAgICAgPFRvb2xiYXI+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnJpZ2h0c2lkZX0+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsIGNvbG9yOiBcIndoaXRlXCIgfX1cbiAgICAgICAgICAgICAgdW5kZXJsaW5lPVwibm9uZVwiXG4gICAgICAgICAgICAgIGhyZWY9XCIuL1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFBhbGFicmFcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG5cbiAgICAgICAgICB7cHJvcHMubG9nZ2VkSW5TdGF0ZSA9PSBmYWxzZSA/IChcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5sZWZ0c2lkZX1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsIGNvbG9yOiBcIndoaXRlXCIgfX1cbiAgICAgICAgICAgICAgICB1bmRlcmxpbmU9XCJub25lXCJcbiAgICAgICAgICAgICAgICBocmVmPVwiLi4vbG9naW5cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5sZWZ0c2lkZX1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsIGNvbG9yOiBcIndoaXRlXCIgfX1cbiAgICAgICAgICAgICAgICB1bmRlcmxpbmU9XCJub25lXCJcbiAgICAgICAgICAgICAgICBocmVmPVwiLi4vc2lnbnVwXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFNpZ24gVXBcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgdmFyaWFudD17XCJvdXRsaW5lZFwifVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnNlbGVjdH1cbiAgICAgICAgICAgICAgPjwvU2VsZWN0PlxuICAgICAgICAgICAgICA8QnV0dG9uIGhyZWY9XCIuLi91c2VycHJvZmlsZVwiIGNvbG9yPVwiaW5oZXJpdFwiPlxuICAgICAgICAgICAgICAgIHtwcm9wcy51c2VyfVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBocmVmPVwiLi4vY29uc29sZVwiIGNvbG9yPVwiaW5oZXJpdFwiPlxuICAgICAgICAgICAgICAgIHtcIkNvbnNvbGVcIn1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJpbmhlcml0XCIgb25DbGljaz17bG9nZ2VkSW5TdGF0dXN9PlxuICAgICAgICAgICAgICAgIExvZ291dFxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvVG9vbGJhcj5cbiAgICAgIDwvQXBwQmFyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG4vKiAgICAgICAgIHt0ZWFtTWVudSh0ZWFtQ29sKX0qL1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/appbar.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _providers_userProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../providers/userProvider */ \"./providers/userProvider.jsx\");\n/* harmony import */ var _components_appbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/appbar */ \"./components/appbar.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_useLocalStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/useLocalStorage */ \"./utils/useLocalStorage.js\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-cookie */ \"react-cookie\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_5__);\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  function removeCookies() {\n    var res = document.cookie;\n    var multiple = res.split(\";\");\n\n    for (var i = 0; i < multiple.length; i++) {\n      var key = multiple[i].split(\"=\");\n      document.cookie = key[0] + \" =; expires = Thu, 01 Jan 1970 00:00:00 UTC\";\n    }\n  }\n\n  const handleLogout = () => {\n    removeCookies();\n    setLoggedUser(\"\");\n    setStatus([false]);\n    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/');\n    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.reload();\n  };\n\n  const {\n    0: loggedinuser,\n    1: setLoggedUser\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n  const {\n    0: loggedin,\n    1: setStatus\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    let user = null;\n\n    if (document.cookie.length > 0) {\n      user = document.cookie.split('; ').find(row => row.startsWith('username')).split('=')[1];\n    }\n\n    if (user != null) {\n      setLoggedUser(user);\n      setStatus(true);\n    }\n  }, [loggedinuser, loggedin]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_appbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    user: loggedinuser,\n    loggedInState: loggedin,\n    logout: handleLogout\n  }, \"   \"), __jsx(Component, pageProps));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyZW1vdmVDb29raWVzIiwicmVzIiwiZG9jdW1lbnQiLCJjb29raWUiLCJtdWx0aXBsZSIsInNwbGl0IiwiaSIsImxlbmd0aCIsImtleSIsImhhbmRsZUxvZ291dCIsInNldExvZ2dlZFVzZXIiLCJzZXRTdGF0dXMiLCJyb3V0ZXIiLCJwdXNoIiwicmVsb2FkIiwibG9nZ2VkaW51c2VyIiwidXNlU3RhdGUiLCJsb2dnZWRpbiIsInVzZUVmZmVjdCIsInVzZXIiLCJmaW5kIiwicm93Iiwic3RhcnRzV2l0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBeUM7QUFFckMsV0FBU0MsYUFBVCxHQUF5QjtBQUNyQixRQUFJQyxHQUFHLEdBQUdDLFFBQVEsQ0FBQ0MsTUFBbkI7QUFDQSxRQUFJQyxRQUFRLEdBQUdILEdBQUcsQ0FBQ0ksS0FBSixDQUFVLEdBQVYsQ0FBZjs7QUFDQSxTQUFJLElBQUlDLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBR0YsUUFBUSxDQUFDRyxNQUE1QixFQUFvQ0QsQ0FBQyxFQUFyQyxFQUF5QztBQUN0QyxVQUFJRSxHQUFHLEdBQUdKLFFBQVEsQ0FBQ0UsQ0FBRCxDQUFSLENBQVlELEtBQVosQ0FBa0IsR0FBbEIsQ0FBVjtBQUNBSCxjQUFRLENBQUNDLE1BQVQsR0FBa0JLLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBTyw2Q0FBekI7QUFDRjtBQUNIOztBQUVGLFFBQU1DLFlBQVksR0FBRyxNQUFNO0FBRXZCVCxpQkFBYTtBQUNiVSxpQkFBYSxDQUFDLEVBQUQsQ0FBYjtBQUNBQyxhQUFTLENBQUMsQ0FBQyxLQUFELENBQUQsQ0FBVDtBQUVBQyxzREFBTSxDQUFDQyxJQUFQLENBQVksR0FBWjtBQUNBRCxzREFBTSxDQUFDRSxNQUFQO0FBQ0gsR0FSRDs7QUFVQSxRQUFNO0FBQUEsT0FBQ0MsWUFBRDtBQUFBLE9BQWVMO0FBQWYsTUFBZ0NNLHNEQUFRLENBQUMsSUFBRCxDQUE5QztBQUVBLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV047QUFBWCxNQUF3Qkssc0RBQVEsQ0FBQyxLQUFELENBQXRDO0FBRUFFLHlEQUFTLENBQUMsTUFBTTtBQUVaLFFBQUlDLElBQUksR0FBSSxJQUFaOztBQUVBLFFBQUlqQixRQUFRLENBQUNDLE1BQVQsQ0FBZ0JJLE1BQWhCLEdBQXlCLENBQTdCLEVBQ0E7QUFDS1ksVUFBSSxHQUFLakIsUUFBUSxDQUFDQyxNQUFULENBQWdCRSxLQUFoQixDQUFzQixJQUF0QixFQUNUZSxJQURTLENBQ0pDLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFKLENBQWUsVUFBZixDQURILEVBRVRqQixLQUZTLENBRUgsR0FGRyxFQUVFLENBRkYsQ0FBVDtBQUlKOztBQUdELFFBQUljLElBQUksSUFBSSxJQUFaLEVBQWlCO0FBRWJULG1CQUFhLENBQUNTLElBQUQsQ0FBYjtBQUNBUixlQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0g7QUFFSixHQW5CUSxFQW1CTixDQUFDSSxZQUFELEVBQWNFLFFBQWQsQ0FuQk0sQ0FBVDtBQXNCQSxTQUNJLG1FQUNJLE1BQUMsMERBQUQ7QUFBUSxRQUFJLEVBQUVGLFlBQWQ7QUFBNEIsaUJBQWEsRUFBRUUsUUFBM0M7QUFBcUQsVUFBTSxFQUFFUjtBQUE3RCxXQURKLEVBRUksTUFBQyxTQUFELEVBQWVWLFNBQWYsQ0FGSixDQURKO0FBT0g7O0FBS2NGLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tICcuLi9wcm92aWRlcnMvdXNlclByb3ZpZGVyJztcbmltcG9ydCBBcHBiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9hcHBiYXInO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgdXNlTG9jYWxTdG9yYWdlIGZyb20gJy4uL3V0aWxzL3VzZUxvY2FsU3RvcmFnZSc7XG5pbXBvcnQgcm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHVzZUNvb2tpZXMgfSBmcm9tICdyZWFjdC1jb29raWUnO1xuaW1wb3J0IHsgQ29va2llc1Byb3ZpZGVyIH0gZnJvbSAncmVhY3QtY29va2llJztcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG5cbiAgICBmdW5jdGlvbiByZW1vdmVDb29raWVzKCkge1xuICAgICAgICB2YXIgcmVzID0gZG9jdW1lbnQuY29va2llO1xuICAgICAgICB2YXIgbXVsdGlwbGUgPSByZXMuc3BsaXQoXCI7XCIpO1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgbXVsdGlwbGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgdmFyIGtleSA9IG11bHRpcGxlW2ldLnNwbGl0KFwiPVwiKTtcbiAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0ga2V5WzBdK1wiID07IGV4cGlyZXMgPSBUaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAwIFVUQ1wiO1xuICAgICAgICB9XG4gICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcblxuICAgICAgICByZW1vdmVDb29raWVzKCk7IFxuICAgICAgICBzZXRMb2dnZWRVc2VyKFwiXCIpO1xuICAgICAgICBzZXRTdGF0dXMoW2ZhbHNlXSk7XG4gICAgXG4gICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XG4gICAgICAgIHJvdXRlci5yZWxvYWQoKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgW2xvZ2dlZGludXNlciwgc2V0TG9nZ2VkVXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgIFxuICAgIGNvbnN0IFtsb2dnZWRpbiwgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICAgICAgbGV0IHVzZXIgID0gbnVsbFxuXG4gICAgICAgIGlmIChkb2N1bWVudC5jb29raWUubGVuZ3RoID4gMClcbiAgICAgICAge1xuICAgICAgICAgICAgIHVzZXIgID0gIGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOyAnKVxuICAgICAgICAgICAgLmZpbmQocm93ID0+IHJvdy5zdGFydHNXaXRoKCd1c2VybmFtZScpKVxuICAgICAgICAgICAgLnNwbGl0KCc9JylbMV1cblxuICAgICAgICB9XG5cblxuICAgICAgICBpZiAodXNlciAhPSBudWxsKXtcblxuICAgICAgICAgICAgc2V0TG9nZ2VkVXNlcih1c2VyKTtcbiAgICAgICAgICAgIHNldFN0YXR1cyh0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgfSwgW2xvZ2dlZGludXNlcixsb2dnZWRpbl0pO1xuXG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD4gIFxuICAgICAgICAgICAgPEFwcGJhciB1c2VyPXtsb2dnZWRpbnVzZXJ9IGxvZ2dlZEluU3RhdGU9e2xvZ2dlZGlufSBsb2dvdXQ9e2hhbmRsZUxvZ291dH0gPiAgIDwvQXBwYmFyPlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSA+PC9Db21wb25lbnQ+XG4gICAgICAgICAgIFxuICAgICAgICA8Lz5cbiAgICApXG59XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./providers/userProvider.jsx":
/*!************************************!*\
  !*** ./providers/userProvider.jsx ***!
  \************************************/
/*! exports provided: UserContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserContext\", function() { return UserContext; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])({\n  user: null\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcm92aWRlcnMvdXNlclByb3ZpZGVyLmpzeD8wMmNmIl0sIm5hbWVzIjpbIlVzZXJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNQSxXQUFXLEdBQUdDLDJEQUFhLENBQUM7QUFBQ0MsTUFBSSxFQUFFO0FBQVAsQ0FBRCxDQUFqQyIsImZpbGUiOiIuL3Byb3ZpZGVycy91c2VyUHJvdmlkZXIuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt1c2VyOiBudWxsfSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./providers/userProvider.jsx\n");

/***/ }),

/***/ "./utils/useLocalStorage.js":
/*!**********************************!*\
  !*** ./utils/useLocalStorage.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return useLocalStorage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction useLocalStorage(key, initialValue) {\n  const {\n    0: storedValue,\n    1: setStoredValue\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(() => {\n    try {\n      if (window != 'undefined') {\n        const item = localStorage.getItem(key);\n        console.log(item);\n        return JSON.parse(item);\n      }\n    } catch (error) {\n      console.log(error);\n      return initialValue;\n    }\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy91c2VMb2NhbFN0b3JhZ2UuanM/Y2IwYyJdLCJuYW1lcyI6WyJ1c2VMb2NhbFN0b3JhZ2UiLCJrZXkiLCJpbml0aWFsVmFsdWUiLCJzdG9yZWRWYWx1ZSIsInNldFN0b3JlZFZhbHVlIiwidXNlU3RhdGUiLCJ3aW5kb3ciLCJpdGVtIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwicGFyc2UiLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdlLFNBQVNBLGVBQVQsQ0FBMEJDLEdBQTFCLEVBQStCQyxZQUEvQixFQUE2QztBQUd4RCxRQUFNO0FBQUEsT0FBQ0MsV0FBRDtBQUFBLE9BQWNDO0FBQWQsTUFBZ0NDLHNEQUFRLENBQUMsTUFBTTtBQUVuRCxRQUFJO0FBRUYsVUFBSUMsTUFBTSxJQUFJLFdBQWQsRUFBMEI7QUFHMUIsY0FBTUMsSUFBSSxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUJSLEdBQXJCLENBQWI7QUFDQVMsZUFBTyxDQUFDQyxHQUFSLENBQVlKLElBQVo7QUFDQSxlQUFPSyxJQUFJLENBQUNDLEtBQUwsQ0FBV04sSUFBWCxDQUFQO0FBRUM7QUFHRixLQVpELENBWUUsT0FBT08sS0FBUCxFQUFjO0FBRWRKLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRyxLQUFaO0FBRUEsYUFBT1osWUFBUDtBQUVEO0FBRUYsR0F0QjZDLENBQTlDO0FBdUJIIiwiZmlsZSI6Ii4vdXRpbHMvdXNlTG9jYWxTdG9yYWdlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgcmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUxvY2FsU3RvcmFnZSAoa2V5LCBpbml0aWFsVmFsdWUpIHtcblxuICBcbiAgICBjb25zdCBbc3RvcmVkVmFsdWUsIHNldFN0b3JlZFZhbHVlXSA9IHVzZVN0YXRlKCgpID0+IHtcbiAgXG4gICAgICB0cnkge1xuXG4gICAgICAgIGlmICh3aW5kb3cgIT0gJ3VuZGVmaW5lZCcpe1xuXG5cbiAgICAgICAgY29uc3QgaXRlbSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGl0ZW0pXG5cbiAgICAgICAgfVxuXG4gIFxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgXG4gICAgICAgIHJldHVybiBpbml0aWFsVmFsdWU7XG4gIFxuICAgICAgfVxuICBcbiAgICB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/useLocalStorage.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/AppBar\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIj85MWNkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/AppBar\n");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Button\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIj81NzBmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Button\n");

/***/ }),

/***/ "@material-ui/core/Link":
/*!*****************************************!*\
  !*** external "@material-ui/core/Link" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Link\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaW5rXCI/YjIxZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvY29yZS9MaW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlua1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Link\n");

/***/ }),

/***/ "@material-ui/core/Select":
/*!*******************************************!*\
  !*** external "@material-ui/core/Select" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Select\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9TZWxlY3RcIj8zY2U0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL1NlbGVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1NlbGVjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Select\n");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Toolbar\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCI/MzZlMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Toolbar\n");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Typography\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI/MGJlYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Typography\n");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/styles\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIj80MTAyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/styles\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-cookie":
/*!*******************************!*\
  !*** external "react-cookie" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-cookie\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jb29raWVcIj9lMjliIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWNvb2tpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNvb2tpZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-cookie\n");

/***/ })

/******/ });