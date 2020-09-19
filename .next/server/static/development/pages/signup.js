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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/signup.js":
/*!******************************!*\
  !*** ./components/signup.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/TextField */ \"@material-ui/core/TextField\");\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__[\"makeStyles\"])(theme => ({\n  field: {\n    marginTop: '5%',\n    marginLeft: '5%',\n    textAlign: \"center\",\n    width: '50%'\n  },\n  button: {\n    width: '105px',\n    height: '25px',\n    background: '#202020 0% 0% no-repeat padding-box',\n    borderRadius: '80px',\n    opacity: '1',\n    display: \"flex\",\n    justifyContent: \"center\",\n    margin: 'auto',\n    marginTop: '5%',\n    color: 'white'\n  }\n}));\n\nconst SignUp = props => {\n  const classes = useStyles();\n  const {\n    0: email,\n    1: setEmail\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  const {\n    0: password,\n    1: setPassword\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  const {\n    0: displayName,\n    1: setDisplayName\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  const {\n    0: error,\n    1: setError\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n\n  const createUserWithEmailAndPasswordHandler = async (event, displayName, email, password) => {\n    event.preventDefault();\n\n    try {\n      props.signupDetails(displayName, email, password);\n    } catch (error) {\n      setError('Error Signing up with email and password');\n    }\n\n    setEmail(\"\");\n    setPassword(\"\");\n    setDisplayName(\"\");\n  };\n\n  const onChangeHandler = event => {\n    const {\n      name,\n      value\n    } = event.currentTarget;\n\n    if (name === \"userEmail\") {\n      setEmail(value);\n    } else if (name === \"userPassword\") {\n      setPassword(value);\n    } else if (name === \"displayName\") {\n      setDisplayName(value);\n    }\n  };\n\n  return __jsx(\"div\", null, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, null, \"Sign Up\"), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    id: \"outlined-basic\",\n    type: \"text\",\n    className: classes.field,\n    name: \"displayName\",\n    variant: \"outlined\",\n    placeholder: \"Display Name\",\n    value: displayName,\n    id: \"displayName\",\n    onChange: event => onChangeHandler(event)\n  }), __jsx(\"br\", null), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    id: \"outlined-basic\",\n    type: \"email\",\n    variant: \"outlined\",\n    className: classes.field,\n    name: \"userEmail\",\n    value: email,\n    placeholder: \"Email\",\n    id: \"userEmail\",\n    onChange: event => onChangeHandler(event)\n  }), __jsx(\"br\", null), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    id: \"outlined-basic\",\n    type: \"password\",\n    variant: \"outlined\",\n    className: classes.field,\n    name: \"userPassword\",\n    value: password,\n    placeholder: \"Password\",\n    id: \"userPassword\",\n    onChange: event => onChangeHandler(event)\n  }), __jsx(\"br\", null), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    variant: \"contained\",\n    className: classes.button,\n    color: \"primary\",\n    onClick: event => {\n      createUserWithEmailAndPasswordHandler(event, displayName, email, password);\n    }\n  }, \"Log On\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignUp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NpZ251cC5qcz9iMTFhIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImZpZWxkIiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsInRleHRBbGlnbiIsIndpZHRoIiwiYnV0dG9uIiwiaGVpZ2h0IiwiYmFja2dyb3VuZCIsImJvcmRlclJhZGl1cyIsIm9wYWNpdHkiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW4iLCJjb2xvciIsIlNpZ25VcCIsInByb3BzIiwiY2xhc3NlcyIsImVtYWlsIiwic2V0RW1haWwiLCJ1c2VTdGF0ZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJkaXNwbGF5TmFtZSIsInNldERpc3BsYXlOYW1lIiwiZXJyb3IiLCJzZXRFcnJvciIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZEhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2lnbnVwRGV0YWlscyIsIm9uQ2hhbmdlSGFuZGxlciIsIm5hbWUiLCJ2YWx1ZSIsImN1cnJlbnRUYXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxNQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUVDLEtBQUQsS0FBWTtBQUV2Q0MsT0FBSyxFQUFFO0FBRUxDLGFBQVMsRUFBRSxJQUZOO0FBR0xDLGNBQVUsRUFBRSxJQUhQO0FBSUxDLGFBQVMsRUFBRSxRQUpOO0FBS0xDLFNBQUssRUFBRTtBQUxGLEdBRmdDO0FBU3ZDQyxRQUFNLEVBQUU7QUFFTkQsU0FBSyxFQUFFLE9BRkQ7QUFHTkUsVUFBTSxFQUFFLE1BSEY7QUFJTkMsY0FBVSxFQUFFLHFDQUpOO0FBS05DLGdCQUFZLEVBQUUsTUFMUjtBQU1OQyxXQUFPLEVBQUUsR0FOSDtBQU9OQyxXQUFPLEVBQUUsTUFQSDtBQVFOQyxrQkFBYyxFQUFFLFFBUlY7QUFTTkMsVUFB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LEVBQUMsY0FQTDtBQVFFLFlBQVEsRUFBRU8sS0FBSyxJQUFJRyxlQUFlLENBQUNILEtBQUQ7QUFScEMsSUF2QkYsRUFpQ0UsaUJBakNGLEVBa0NFLE1BQUMsK0RBQUQ7QUFDRSxXQUFPLEVBQUMsV0FEVjtBQUVFLGFBQVMsRUFBRVgsT0FBTyxDQUFDWCxNQUZyQjtBQUdFLFNBQUssRUFBQyxTQUhSO0FBS0UsV0FBTyxFQUFFc0IsS0FBSyxJQUFJO0FBQ2hCRCwyQ0FBcUMsQ0FBQ0MsS0FBRCxFQUFRTCxXQUFSLEVBQXFCTCxLQUFyQixFQUE0QkcsUUFBNUIsQ0FBckM7QUFDRDtBQVBILGNBbENGLENBRkY7QUFpREQsQ0FuRkQ7O0FBcUZlTixxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvc2lnbnVwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuXG4gIGZpZWxkOiB7XG5cbiAgICBtYXJnaW5Ub3A6ICc1JScsXG4gICAgbWFyZ2luTGVmdDogJzUlJyxcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgd2lkdGg6ICc1MCUnXG4gIH0sXG4gIGJ1dHRvbjoge1xuXG4gICAgd2lkdGg6ICcxMDVweCcsXG4gICAgaGVpZ2h0OiAnMjVweCcsXG4gICAgYmFja2dyb3VuZDogJyMyMDIwMjAgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94JyxcbiAgICBib3JkZXJSYWRpdXM6ICc4MHB4JyxcbiAgICBvcGFjaXR5OiAnMScsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgbWFyZ2luOiAnYXV0bycsXG4gICAgbWFyZ2luVG9wOiAnNSUnLFxuICAgIGNvbG9yOiAnd2hpdGUnXG4gIH1cbn0pKTtcblxuXG5jb25zdCBTaWduVXAgPSAocHJvcHMpID0+IHtcblxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtkaXNwbGF5TmFtZSwgc2V0RGlzcGxheU5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkSGFuZGxlciA9IGFzeW5jIChldmVudCwgZGlzcGxheU5hbWUsIGVtYWlsLCBwYXNzd29yZCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdHJ5IHtcbiAgICAgIHByb3BzLnNpZ251cERldGFpbHMoZGlzcGxheU5hbWUsIGVtYWlsLCBwYXNzd29yZCk7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgc2V0RXJyb3IoJ0Vycm9yIFNpZ25pbmcgdXAgd2l0aCBlbWFpbCBhbmQgcGFzc3dvcmQnKTtcbiAgICB9XG5cbiAgICBzZXRFbWFpbChcIlwiKTtcbiAgICBzZXRQYXNzd29yZChcIlwiKTtcbiAgICBzZXREaXNwbGF5TmFtZShcIlwiKTtcbiAgfTtcblxuICBjb25zdCBvbkNoYW5nZUhhbmRsZXIgPSBldmVudCA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQuY3VycmVudFRhcmdldDtcblxuICAgIGlmIChuYW1lID09PSBcInVzZXJFbWFpbFwiKSB7XG4gICAgICBzZXRFbWFpbCh2YWx1ZSk7XG4gICAgfSBlbHNlIGlmIChuYW1lID09PSBcInVzZXJQYXNzd29yZFwiKSB7XG4gICAgICBzZXRQYXNzd29yZCh2YWx1ZSk7XG4gICAgfSBlbHNlIGlmIChuYW1lID09PSBcImRpc3BsYXlOYW1lXCIpIHtcbiAgICAgIHNldERpc3BsYXlOYW1lKHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcblxuICAgIDxkaXY+XG4gICAgICA8VHlwb2dyYXBoeT5TaWduIFVwPC9UeXBvZ3JhcGh5PlxuICAgICAgPFRleHRGaWVsZCBpZD1cIm91dGxpbmVkLWJhc2ljXCJcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZmllbGR9XG4gICAgICAgIG5hbWU9XCJkaXNwbGF5TmFtZVwiXG4gICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRGlzcGxheSBOYW1lXCJcbiAgICAgICAgdmFsdWU9e2Rpc3BsYXlOYW1lfVxuICAgICAgICBpZD1cImRpc3BsYXlOYW1lXCJcbiAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IG9uQ2hhbmdlSGFuZGxlcihldmVudCl9IC8+XG4gICAgICA8YnIgLz5cbiAgICAgIDxUZXh0RmllbGQgaWQ9XCJvdXRsaW5lZC1iYXNpY1wiXG4gICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5maWVsZH1cbiAgICAgICAgbmFtZT1cInVzZXJFbWFpbFwiXG4gICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXG4gICAgICAgIGlkPVwidXNlckVtYWlsXCJcbiAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IG9uQ2hhbmdlSGFuZGxlcihldmVudCl9XG4gICAgICAvPlxuICAgICAgPGJyIC8+XG4gICAgICA8VGV4dEZpZWxkIGlkPVwib3V0bGluZWQtYmFzaWNcIlxuICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZmllbGR9XG4gICAgICAgIG5hbWU9XCJ1c2VyUGFzc3dvcmRcIlxuICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICBpZD1cInVzZXJQYXNzd29yZFwiXG4gICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBvbkNoYW5nZUhhbmRsZXIoZXZlbnQpfVxuICAgICAgLz5cbiAgICAgIDxiciAvPlxuICAgICAgPEJ1dHRvblxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCIgXG5cbiAgICAgICAgb25DbGljaz17ZXZlbnQgPT4ge1xuICAgICAgICAgIGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZEhhbmRsZXIoZXZlbnQsIGRpc3BsYXlOYW1lLCBlbWFpbCwgcGFzc3dvcmQpO1xuICAgICAgICB9fT5cbiAgICAgICAgTG9nIE9uXG4gICAgIDwvQnV0dG9uPlxuICAgIDwvZGl2PlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWduVXA7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/signup.js\n");

/***/ }),

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return signup; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_signup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/signup */ \"./components/signup.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Box */ \"@material-ui/core/Box\");\n/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__);\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nfunction signup() {\n  const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__[\"makeStyles\"])(theme => ({\n    box: {\n      display: \"flex\",\n      flexDirection: \"column\",\n      justifyContent: \"center\",\n      marginTop: '5%',\n      marginLeft: '20%',\n      marginRight: '20%',\n      textAlign: \"center\"\n    },\n    card: {\n      display: \"flex\",\n      flexDirection: \"column\",\n      justifyContent: \"center\",\n      marginTop: '5%',\n      marginLeft: '20%',\n      marginRight: '20%',\n      textAlign: \"center\"\n    }\n  }));\n  const classes = useStyles();\n\n  const createUserWithEmailAndPasswordHandler = async (displayName, email, password) => {\n    try {\n      console.log({\n        displayName,\n        email,\n        password\n      });\n      await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`/api/auth/signup`, {\n        params: {\n          displayName,\n          email,\n          password\n        }\n      }, {\n        headers: {\n          'Content-Type': 'application/json'\n        }\n      }).then(response => console.log(response));\n    } catch (error) {}\n  };\n\n  return __jsx(\"div\", null, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    Container: true,\n    className: classes.box\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Card\"], null, __jsx(_components_signup__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    signupDetails: createUserWithEmailAndPasswordHandler\n  }))));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zaWdudXAuanM/YmNiZiJdLCJuYW1lcyI6WyJzaWdudXAiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJib3giLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwidGV4dEFsaWduIiwiY2FyZCIsImNsYXNzZXMiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmRIYW5kbGVyIiwiZGlzcGxheU5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiY29uc29sZSIsImxvZyIsImF4aW9zIiwiZ2V0IiwicGFyYW1zIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxHQUFrQjtBQUUvQixRQUFNQyxTQUFTLEdBQUdDLDJFQUFVLENBQUVDLEtBQUQsS0FBWTtBQUV2Q0MsT0FBRyxFQUFFO0FBRUhDLGFBQU8sRUFBRSxNQUZOO0FBR0hDLG1CQUFhLEVBQUUsUUFIWjtBQUlIQyxvQkFBYyxFQUFFLFFBSmI7QUFLSEMsZUFBUyxFQUFFLElBTFI7QUFNSEMsZ0JBQVUsRUFBRSxLQU5UO0FBT0hDLGlCQUFXLEVBQUUsS0FQVjtBQVFIQyxlQUFTLEVBQUU7QUFSUixLQUZrQztBQVl2Q0MsUUFBSSxFQUFFO0FBRUpQLGFBQU8sRUFBRSxNQUZMO0FBR0pDLG1CQUFhLEVBQUUsUUFIWDtBQUlKQyxvQkFBYyxFQUFFLFFBSlo7QUFLSkMsZUFBUyxFQUFFLElBTFA7QUFNSkMsZ0JBQVUsRUFBRSxLQU5SO0FBT0pDLGlCQUFXLEVBQUUsS0FQVDtBQVFKQyxlQUFTLEVBQUU7QUFSUDtBQVppQyxHQUFaLENBQUQsQ0FBNUI7QUF3QkEsUUFBTUUsT0FBTyxHQUFHWixTQUFTLEVBQXpCOztBQUVBLFFBQU1hLHFDQUFxQyxHQUFHLE9BQU9DLFdBQVAsRUFBb0JDLEtBQXBCLEVBQTJCQyxRQUEzQixLQUF3QztBQUNwRixRQUFJO0FBQ0ZDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUVKLG1CQUFGO0FBQWVDLGFBQWY7QUFBc0JDO0FBQXRCLE9BQVo7QUFDQSxZQUFNRyw0Q0FBSyxDQUFDQyxHQUFOLENBQVcsa0JBQVgsRUFBOEI7QUFBRUMsY0FBTSxFQUFFO0FBQUVQLHFCQUFGO0FBQWVDLGVBQWY7QUFBc0JDO0FBQXRCO0FBQVYsT0FBOUIsRUFDOEI7QUFBRU0sZUFBTyxFQUFFO0FBQUUsMEJBQWdCO0FBQWxCO0FBQVgsT0FEOUIsRUFFSEMsSUFGRyxDQUVFQyxRQUFRLElBQUtQLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTSxRQUFaLENBRmYsQ0FBTjtBQUlELEtBTkQsQ0FPQSxPQUFPQyxLQUFQLEVBQWMsQ0FFYjtBQUNGLEdBWEQ7O0FBYUEsU0FDRSxtQkFDRSxNQUFDLDREQUFEO0FBQUssYUFBUyxNQUFkO0FBQWUsYUFBUyxFQUFFYixPQUFPLENBQUNUO0FBQWxDLEtBQ0UsTUFBQyxzREFBRCxRQUNFLE1BQUMsMERBQUQ7QUFBUSxpQkFBYSxFQUFFVTtBQUF2QixJQURGLENBREYsQ0FERixDQURGO0FBVUQiLCJmaWxlIjoiLi9wYWdlcy9zaWdudXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2lnbnVwIGZyb20gJy4uL2NvbXBvbmVudHMvc2lnbnVwJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IENhcmQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBCb3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQm94JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2lnbnVwKCkge1xuXG4gIGNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuXG4gICAgYm94OiB7XG5cbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgbWFyZ2luVG9wOiAnNSUnLFxuICAgICAgbWFyZ2luTGVmdDogJzIwJScsXG4gICAgICBtYXJnaW5SaWdodDogJzIwJScsXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgICB9LFxuICAgIGNhcmQ6IHtcblxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICBtYXJnaW5Ub3A6ICc1JScsXG4gICAgICBtYXJnaW5MZWZ0OiAnMjAlJyxcbiAgICAgIG1hcmdpblJpZ2h0OiAnMjAlJyxcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICAgIH1cbiAgfSkpO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICBjb25zdCBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmRIYW5kbGVyID0gYXN5bmMgKGRpc3BsYXlOYW1lLCBlbWFpbCwgcGFzc3dvcmQpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc29sZS5sb2coeyBkaXNwbGF5TmFtZSwgZW1haWwsIHBhc3N3b3JkIH0pXG4gICAgICBhd2FpdCBheGlvcy5nZXQoYC9hcGkvYXV0aC9zaWdudXBgLCB7IHBhcmFtczogeyBkaXNwbGF5TmFtZSwgZW1haWwsIHBhc3N3b3JkIH0gfSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9IH0pXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IChjb25zb2xlLmxvZyhyZXNwb25zZSkpKVxuXG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuXG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxCb3ggQ29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5ib3h9PlxuICAgICAgICA8Q2FyZD5cbiAgICAgICAgICA8U2lnbnVwIHNpZ251cERldGFpbHM9e2NyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZEhhbmRsZXJ9ID48L1NpZ251cD5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgPC9Cb3g+XG4gICAgPC9kaXY+XG4gIClcblxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/signup.js\n");

/***/ }),

/***/ 5:
/*!*******************************!*\
  !*** multi ./pages/signup.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/salahabdallah/Desktop/Dev/Jargon/pages/signup.js */"./pages/signup.js");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiP2I2OTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core\n");

/***/ }),

/***/ "@material-ui/core/Box":
/*!****************************************!*\
  !*** external "@material-ui/core/Box" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Box\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Cb3hcIj81MDZmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL0JveC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0JveFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Box\n");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Button\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIj81NzBmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Button\n");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/TextField\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIj85MTFhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/TextField\n");

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

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });