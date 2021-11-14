(this["webpackJsonpfoxtel"] = this["webpackJsonpfoxtel"] || []).push([["main"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _common_CustomAppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/CustomAppBar */ "./src/common/CustomAppBar.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/colors/red */ "./node_modules/@material-ui/core/colors/red.js");
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/colors/green */ "./node_modules/@material-ui/core/colors/green.js");
/* harmony import */ var _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Home */ "./src/components/Home.js");
/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/About */ "./src/components/About.js");
/* harmony import */ var _components_Product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Product */ "./src/components/Product.js");
/* harmony import */ var _components_Price__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Price */ "./src/components/Price.js");
/* harmony import */ var _components_Compatibility__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Compatibility */ "./src/components/Compatibility.js");
/* harmony import */ var _common_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/Footer */ "./src/common/Footer.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "C:\\xampp1\\htdocs\\wp-content\\themes\\foxtel\\react-src\\src\\App.js";














const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["createTheme"])({
  palette: {
    primary: _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_4___default.a,
    secondary: _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_5___default.a
  }
});

function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: theme,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_CustomAppBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Switch"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Route"], {
    path: "/home",
    render: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Home__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({}, props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 50
      }
    })),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Route"], {
    path: "/aboutus",
    render: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_About__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({}, props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 53
      }
    })),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Route"], {
    path: "/product",
    render: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Product__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({}, props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 53
      }
    })),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Route"], {
    path: "/compatibility",
    render: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Compatibility__WEBPACK_IMPORTED_MODULE_10__["default"], Object.assign({}, props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 32
      }
    })),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Route"], {
    path: "/price",
    render: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Price__WEBPACK_IMPORTED_MODULE_9__["default"], Object.assign({}, props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 51
      }
    })),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["Redirect"], {
    to: "/home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/common/CustomAppBar.js":
/*!************************************!*\
  !*** ./src/common/CustomAppBar.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomAppBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/index.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/index.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/index.js");
/* harmony import */ var _mui_material_InputBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/InputBase */ "./node_modules/@mui/material/InputBase/index.js");
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Search */ "./node_modules/@mui/icons-material/Search.js");
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/InputLabel */ "./node_modules/@mui/material/InputLabel/index.js");
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/MenuItem */ "./node_modules/@mui/material/MenuItem/index.js");
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/FormControl */ "./node_modules/@mui/material/FormControl/index.js");
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Select */ "./node_modules/@mui/material/Select/index.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
var _jsxFileName = "C:\\xampp1\\htdocs\\wp-content\\themes\\foxtel\\react-src\\src\\common\\CustomAppBar.js";


 // import Container from "@mui/material/Container";










const Search = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_10__["styled"])("div")(({
  theme
}) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_10__["alpha"])(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_10__["alpha"])(theme.palette.common.white, 0.25)
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto"
  }
}));
const SearchIconWrapper = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_10__["styled"])("div")(({
  theme
}) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));
const StyledInputBase = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_10__["styled"])(_mui_material_InputBase__WEBPACK_IMPORTED_MODULE_4__["default"])(({
  theme
}) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(3)})`,
    transition: theme.transitions.create("width"),
    width: "100%"
  }
}));
function CustomAppBar() {
  const [age, setAge] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");

  const handleChange = event => {
    setAge(event.target.value);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    position: "static",
    color: "transparent",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "h6",
    noWrap: true,
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sx: {
      color: "#FF4D00",
      fontSize: {
        xs: "20px",
        sm: "30px",
        md: "40px"
      },
      fontFamily: "serif",
      fontWeight: "bold"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 21
    }
  }, "Foxtel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sx: {
      color: "black",
      fontSize: {
        xs: "20px",
        sm: "30px",
        md: "40px"
      },
      fontFamily: "serif",
      fontWeight: "bold"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 21
    }
  }, "PBX"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginLeft: "10%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sx: {
      display: {
        xs: "none",
        sm: "block",
        md: "block"
      },
      fontSize: "17px",
      color: "rgb(50 50 50)",
      letterSpacing: "0px",
      paddingRight: "30px"
    },
    noWrap: true,
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 19
    }
  }, "Talk to an expert: 000-000-000"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sx: {
      display: {
        xs: "none",
        sm: "block",
        md: "block"
      },
      fontSize: "17px",
      color: "rgb(50 50 50)",
      letterSpacing: "0px",
      paddingRight: "30px"
    },
    noWrap: true,
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 19
    }
  }, "Support"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "standard",
    sx: {
      display: {
        xs: "none",
        sm: "none",
        md: "flex"
      },
      m: 1,
      minWidth: 100
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "demo-simple-select-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 21
    }
  }, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Select__WEBPACK_IMPORTED_MODULE_9__["default"], {
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    value: age,
    label: "Login",
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    value: 10,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 23
    }
  }, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    value: 20,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 23
    }
  }, "Twenty"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    value: 30,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 23
    }
  }, "Thirty"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Search, {
    sx: {
      display: {
        xs: "none",
        sm: "none",
        md: "flex"
      },
      alignItems: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SearchIconWrapper, {
    sx: {
      position: "relative"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 23
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledInputBase, {
    placeholder: "Search\u2026",
    inputProps: {
      "aria-label": "search"
    },
    size: "small",
    autoFocus: true,
    color: "primary",
    style: {
      backgroundColor: "#f8f9fa",
      borderRadius: "5px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 21
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Navbar"], {
    expand: "lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Navbar"].Toggle, {
    "aria-controls": "basic-navbar-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Navbar"].Collapse, {
    id: "basic-navbar-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Nav"], {
    className: "me-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 23
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Nav"].Link, {
    href: "/home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 25
    }
  }, "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Nav"].Link, {
    href: "/aboutus",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 25
    }
  }, " About Us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Nav"].Link, {
    href: "/compatibility",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 25
    }
  }, "Compatibility"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NavDropdown"], {
    title: "Products and Services",
    id: "basic-nav-dropdown",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NavDropdown"].Item, {
    href: "/product",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 27
    }
  }, "Products and Services"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NavDropdown"].Item, {
    href: "#action/3.3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 27
    }
  }, "Pricing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NavDropdown"].Item, {
    href: "#action/3.4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 27
    }
  }, "Full Account access")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Nav"].Link, {
    href: "/price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 25
    }
  }, " Pricing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NavDropdown"], {
    title: " Full Account access",
    id: "basic-nav-dropdown",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NavDropdown"].Item, {
    href: "#action/3.1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 27
    }
  }, "Products and Services"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NavDropdown"].Item, {
    href: "#action/3.2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 27
    }
  }, "Products and Services"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NavDropdown"].Item, {
    href: "#action/3.3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 27
    }
  }, "Pricing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NavDropdown"].Item, {
    href: "#action/3.4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 27
    }
  }, "Full Account access")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Nav"].Link, {
    href: "#backbone",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 25
    }
  }, "Backbone Infrastructure")))))))))));
}

/***/ }),

/***/ "./src/common/Footer.js":
/*!******************************!*\
  !*** ./src/common/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/index.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/index.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_social_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-social-icons */ "./node_modules/react-social-icons/build/react-social-icons.js");
/* harmony import */ var react_social_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_social_icons__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\xampp1\\htdocs\\wp-content\\themes\\foxtel\\react-src\\src\\common\\Footer.js";






function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    position: "static",
    style: {
      backgroundColor: "rgb(233, 233, 233)"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      paddingTop: "20px",
      paddingBottom: "20px",
      display: "flex",
      justifyContent: "space-between"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    component: "span",
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto",
      borderRightWidth: "2px",
      borderRightStyle: "solid",
      paddingRight: "4px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, "@2020 Foxtel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    component: "span",
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto",
      marginLeft: "4px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, "All rights reserved")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_social_icons__WEBPACK_IMPORTED_MODULE_5__["SocialIcon"], {
    url: "https://www.facebook.com/CreativeTim?ref=creativetim",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_social_icons__WEBPACK_IMPORTED_MODULE_5__["SocialIcon"], {
    url: "https://twitter.com/CreativeTim?ref=creativetim",
    style: {
      marginLeft: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_social_icons__WEBPACK_IMPORTED_MODULE_5__["SocialIcon"], {
    url: "https://www.linkedin.com/CreativeTim?ref=creativetim",
    style: {
      marginLeft: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_social_icons__WEBPACK_IMPORTED_MODULE_5__["SocialIcon"], {
    url: "https://www.instagram.com/CreativeTimOfficial?ref=creativetim",
    style: {
      marginLeft: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  })))));
}

/***/ }),

/***/ "./src/components/About.js":
/*!*********************************!*\
  !*** ./src/components/About.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _img_antoine_barres_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/antoine-barres.jpg */ "./src/img/antoine-barres.jpg");
/* harmony import */ var _img_antoine_barres_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_antoine_barres_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _img_Screenshot_15_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/Screenshot_15.png */ "./src/img/Screenshot_15.png");
/* harmony import */ var _img_Screenshot_15_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_Screenshot_15_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _img_Screenshot_16_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/Screenshot_16.png */ "./src/img/Screenshot_16.png");
/* harmony import */ var _img_Screenshot_16_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_img_Screenshot_16_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _img_Screenshot_17_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/Screenshot_17.png */ "./src/img/Screenshot_17.png");
/* harmony import */ var _img_Screenshot_17_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_img_Screenshot_17_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _img_Screenshot_18_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/Screenshot_18.png */ "./src/img/Screenshot_18.png");
/* harmony import */ var _img_Screenshot_18_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_Screenshot_18_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _img_avatar3_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/avatar3.png */ "./src/img/avatar3.png");
/* harmony import */ var _img_avatar3_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_img_avatar3_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _img_avatar2_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/avatar2.png */ "./src/img/avatar2.png");
/* harmony import */ var _img_avatar2_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_img_avatar2_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _img_avatar1_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/avatar1.png */ "./src/img/avatar1.png");
/* harmony import */ var _img_avatar1_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_img_avatar1_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _img_world_map_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/world_map.jpg */ "./src/img/world_map.jpg");
/* harmony import */ var _img_world_map_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_img_world_map_jpg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/index.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/index.js");
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/Stack */ "./node_modules/@mui/material/Stack/index.js");
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material/Card */ "./node_modules/@mui/material/Card/index.js");
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material/CardContent */ "./node_modules/@mui/material/CardContent/index.js");
/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material/CardMedia */ "./node_modules/@mui/material/CardMedia/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
var _jsxFileName = "C:\\xampp1\\htdocs\\wp-content\\themes\\foxtel\\react-src\\src\\components\\About.js";




















const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    padding: "10px",
    minHeight: "100vh                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              "
  },
  imagefield: {
    minHeight: "40vh"
  },
  imagefield1: {
    minHeight: "80vh"
  },
  image1: {
    width: "23%",
    height: "20%"
  },
  howwecan: {
    marginTop: "10%",
    background: "linear-gradient(to right,#FF4D00,  rgb(251 161 122))",
    minHeight: "40vh"
  },
  image2: {
    width: "26%",
    height: "30%"
  },
  image3: {
    width: "23%",
    height: "30%"
  },
  arrowstyle: {
    width: "32px",
    height: "20px",
    marginLeft: "20px",
    cursor: "pointer"
  },
  footerbaraboive: {
    minHeight: "50vh",
    backgroundColor: "#E9E9E9",
    marginTop: "10%"
  },
  learnmore: {
    color: "#FF4D00",
    fontFamily: "Roboto"
  },
  cardspan: {
    fontFamily: "Roboto",
    color: "#7a7878"
  },
  whatfield: {
    minHeight: "95vh"
  },
  faststyle: {
    fontFamily: "sans-serif",
    fontSize: "2vw",
    color: "#FFFFFF"
  }
}));
const Spanblow = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_14__["styled"])("hr")(({
  theme
}) => ({
  color: "#FF4D00",
  width: "10%",
  height: "2px !important",
  position: "relative",
  opacity: "inherit",
  left: "45%",
  transitionProperty: "width,left",
  transitionDuration: "1s",
  transitionTimingFunction: "linear"
}));
const Upgardeef = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_14__["styled"])("hr")(({
  theme
}) => ({
  width: "27%",
  position: "absolute",
  top: "90%",
  color: "#FF4D00",
  height: "3px !important",
  opacity: "inherit",
  transitionProperty: "width",
  transitionDuration: "1s",
  transitionTimingFunction: "linear"
}));
const Whattextstyle = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_14__["styled"])("h2")(({
  theme
}) => ({
  fontFamily: "Roboto",
  color: "black",
  fontWeight: "bold",
  "&:hover": {
    "& + hr": {
      width: "15% !important",
      position: "relative",
      left: "42% !important"
    }
  }
}));
const Trustedsyle = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_14__["styled"])("h2")(({
  theme
}) => ({
  fontFamily: "Roboto",
  color: "black",
  fontWeight: "bold",
  "&:hover": {
    "& + hr": {
      width: "10% !important",
      position: "relative",
      left: "45% !important"
    }
  }
}));
const ButtonField2 = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_14__["styled"])(_mui_material_Button__WEBPACK_IMPORTED_MODULE_13__["default"])(({
  theme
}) => ({
  color: "#FFFFFF",
  borderColor: "#FFFFFF",
  border: "solid",
  fontSize: "1.5vw",
  borderWidth: "2px",
  borderRadius: "5px",
  backgroundColor: Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_14__["alpha"])(theme.palette.common.white, 0),
  "&:hover": {
    backgroundColor: Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_14__["alpha"])("#FFFFFF", 1),
    borderColor: "#FFFFFF !important",
    color: "#FF4D00 !important",
    border: "solid",
    borderWidth: "2px",
    borderRadius: "5px"
  },
  marginLeft: 0,
  width: "60%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(0),
    width: "auto"
  }
}));

function About() {
  const classes = useStyles();
  const [age, setAge] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");

  const handleChange = event => {
    setAge(event.target.value);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.imagefield,
    style: {
      backgroundImage: `url(${_img_antoine_barres_jpg__WEBPACK_IMPORTED_MODULE_4___default.a})`,
      backgroundSize: "100% 100%",
      position: "relative"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      backgroundColor: "rgba(255, 77, 0, 0.6)",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: " 100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    align: "center",
    sx: {
      paddingTop: "10%"
    },
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      fontSize: {
        xs: "15px",
        sm: "30px",
        md: "3vw"
      },
      fontFamily: "Roboto",
      color: "#FFFFFF",
      fontWeight: "bold"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 15
    }
  }, "About US")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    align: "center",
    sx: {
      marginTop: "2%"
    },
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      fontSize: {
        xs: "10px",
        sm: "15px",
        md: "20px"
      },
      fontFamily: "Roboto",
      color: "#FFFFFF"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 15
    }
  }, "Home ", ">", " About us"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.whatfield,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    align: "center",
    sx: {
      paddingTop: "5%"
    },
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Whattextstyle, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 13
    }
  }, "What is FoxtelPBX All About? "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Spanblow, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    align: "center",
    sx: {
      marginTop: "5%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      width: "100%",
      height: "100%",
      marginTop: "5%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      textAlign: "left"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "p",
    sx: {
      color: "#686666",
      fontWeight: "600",
      fontFamily: "unset"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 23
    }
  }, "FoxtelPBX is a business phone provider powered by tomorrow's technology."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "p",
    sx: {
      color: "#686666",
      fontWeight: "600",
      fontFamily: "unset",
      marginTop: "3%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 23
    }
  }, "Our mission is to take your business communication to the next level. Make the most of flexible,cost-effective,hardware-free communication system."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "p",
    sx: {
      color: "#686666",
      fontWeight: "600",
      fontFamily: "unset",
      marginTop: "3%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 23
    }
  }, "FoxtelPBX ensure end-to-end encrypted technology to provide secure communication between users and business users and business. Make your business more productive between users and businesses.Make your business more productive and efficient,so you can start focusing on what really matters."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "p",
    sx: {
      color: "#686666",
      fontWeight: "600",
      fontFamily: "unset",
      marginTop: "3%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 23
    }
  }, "FoxtelPBX also offers online faxing.No need a fax machine or a separate fax line. Make everything."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "p",
    sx: {
      color: "#686666",
      fontWeight: "600",
      fontFamily: "unset",
      marginTop: "3%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 23
    }
  }, "FoxtelPBX also offers online faxing.No need a fax machine or a separate fax line.Make everything virtual and become an eco-friendly company with Velantro today.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      overflow: "hidden",
      paddingBottom: "100%",
      position: "relative",
      height: 0,
      marginTop: "5%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    width: "853",
    style: {
      left: 0,
      top: 0,
      height: "100%",
      width: "100%",
      position: "absolute"
    },
    height: "480",
    src: `https://www.youtube.com/embed/rokGy0huYEA`,
    frameBorder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true,
    title: "Embedded youtube",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 21
    }
  })))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      marginTop: "40px",
      minHeight: "40vh",
      backgroundColor: "#F2F2F2"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 5,
    style: {
      paddingBottom: "7%",
      paddingTop: "7%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    align: "left",
    sx: {},
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "span",
    sx: {
      fontSize: {
        xs: "13px",
        sm: "20px",
        md: "30px"
      },
      fontFamily: "Roboto",
      position: "relative",
      color: "black",
      "&:hover": {
        "& > hr": {
          width: "50% !important",
          position: "absolute"
        }
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 17
    }
  }, "Why Choose FoxtelPBX", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Upgardeef, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 19
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      marginTop: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "span",
    sx: {
      fontFamily: "sans-serif",
      fontSize: {
        xs: "13px",
        sm: "15px",
        md: "18px"
      },
      fontWeight: 200,
      color: "#60605f"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 19
    }
  }, "FoxtelPBX is a business phone service provider powered by tomorrow automation.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      marginTop: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#FF4D00",
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 19
    }
  }, "Checkout Our Price List"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-long-arrow-right",
    style: {
      color: "rgb(255, 77, 0)",
      fontSize: {
        xs: "13px",
        sm: "15px",
        md: "20px"
      },
      marginLeft: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 19
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 7,
    style: {
      display: "flex",
      paddingBottom: "7%",
      paddingTop: "7%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Card__WEBPACK_IMPORTED_MODULE_16__["default"], {
    sx: {
      width: "40%",
      "&:hover": {
        backgroundColor: "#F0FFF0",
        "& > div": {
          backgroundColor: "#FFFFFF"
        }
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["CardActionArea"], {
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_18__["default"], {
    component: "img",
    height: "140",
    image: _img_Screenshot_15_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    sx: {
      width: "50%",
      height: "100%",
      marginLeft: "20%"
    },
    alt: "green",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437,
      columnNumber: 19
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_17__["default"], {
    component: "div",
    sx: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    gutterBottom: true,
    sx: {
      color: "black",
      fontSize: {
        xs: "13px",
        sm: "15px",
        md: "20px"
      },
      fontFamily: "Roboto",
      fontWeight: "bold"
    },
    component: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 21
    }
  }, "Advanced"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "span",
    sx: {
      color: "#5e5c5c",
      fontSize: {
        xs: "10px",
        sm: "13px",
        md: "15px"
      },
      fontFamily: "Roboto",
      fontWeight: "bold"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457,
      columnNumber: 21
    }
  }, "Business Mobilitys")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Card__WEBPACK_IMPORTED_MODULE_16__["default"], {
    sx: {
      width: "40%",
      marginLeft: "5%",
      "&:hover": {
        backgroundColor: "#F0FFF0",
        "& > div": {
          backgroundColor: "#FFFFFF"
        }
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["CardActionArea"], {
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 483,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_18__["default"], {
    component: "img",
    height: "140",
    image: _img_Screenshot_16_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    sx: {
      width: "50%",
      height: "100%",
      marginLeft: "20%"
    },
    alt: "green",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 484,
      columnNumber: 19
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_17__["default"], {
    component: "div",
    sx: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 491,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    gutterBottom: true,
    sx: {
      color: "black",
      fontSize: {
        xs: "13px",
        sm: "15px",
        md: "20px"
      },
      fontFamily: "Roboto",
      fontWeight: "bold"
    },
    component: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492,
      columnNumber: 21
    }
  }, "All-Inclusive"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "span",
    sx: {
      color: "#5e5c5c",
      fontSize: {
        xs: "10px",
        sm: "13px",
        md: "15px"
      },
      fontFamily: "Roboto",
      fontWeight: "bold"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504,
      columnNumber: 21
    }
  }, "Business Phone Features")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Card__WEBPACK_IMPORTED_MODULE_16__["default"], {
    sx: {
      width: "40%",
      marginLeft: "5%",
      "&:hover": {
        backgroundColor: "#F0FFF0",
        "& > div": {
          backgroundColor: "#FFFFFF"
        }
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 518,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["CardActionArea"], {
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 530,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_18__["default"], {
    component: "img",
    height: "140",
    image: _img_Screenshot_17_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    sx: {
      width: "50%",
      height: "100%",
      marginLeft: "20%"
    },
    alt: "green",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 531,
      columnNumber: 19
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_17__["default"], {
    component: "div",
    sx: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    gutterBottom: true,
    sx: {
      color: "black",
      fontSize: {
        xs: "13px",
        sm: "15px",
        md: "20px"
      },
      fontFamily: "Roboto",
      fontWeight: "bold"
    },
    component: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539,
      columnNumber: 21
    }
  }, "No Hidden"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "span",
    sx: {
      color: "#5e5c5c",
      fontSize: {
        xs: "10px",
        sm: "13px",
        md: "15px"
      },
      fontFamily: "Roboto",
      fontWeight: "bold"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 551,
      columnNumber: 21
    }
  }, "Charges")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.trued,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 569,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 570,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    align: "center",
    sx: {
      paddingTop: "5%"
    },
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 571,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      fontFamily: "Roboto",
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 572,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Trustedsyle, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 579,
      columnNumber: 15
    }
  }, "Testimonials"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    style: {
      width: "5%",
      color: "#FF4D00",
      height: "3px",
      position: "relative",
      opacity: "inherit",
      left: "47%",
      transitionProperty: "width,left",
      transitionDuration: "1s",
      transitionTimingFunction: "linear"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 580,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "4%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 594,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 603,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 4,
    style: {
      paddingTop: "25px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 604,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      textAlign: "left",
      borderStyle: "solid",
      padding: "25px",
      borderColor: "#c1bcbc",
      borderRadius: "5px",
      borderWidth: "2px",
      position: "relative"
    },
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 605,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-quote-right ",
    style: {
      color: "rgb(255, 77, 0)",
      borderStyle: "solid",
      paddingLeft: "24px",
      paddingTop: "10px",
      paddingRight: "24px",
      fontSize: {
        xs: "13px",
        sm: "15px",
        md: "25px"
      },
      backgroundColor: "#ffffff",
      borderRadius: "50%",
      position: "absolute",
      paddingBottom: "10px",
      top: "-25px",
      left: "35%",
      borderColor: "#b1aaaa"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 617,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "span",
    sx: {
      color: "#979191",
      fontFamily: "Roboto",
      fontSize: {
        xs: "10px",
        sm: "13px",
        md: "15px"
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 635,
      columnNumber: 21
    }
  }, "I think we were one of the fitst clients that FoxtelPBX signed up back in 2010.we wanted to try a few lines before switching everything over."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      marginTop: "10px",
      display: "flex",
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 647,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star",
    style: {
      color: "#FF4D00"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 657,
      columnNumber: 23
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star",
    style: {
      color: "#FF4D00"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 661,
      columnNumber: 23
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star",
    style: {
      color: "#FF4D00"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 665,
      columnNumber: 23
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star",
    style: {
      color: "#FF4D00"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 669,
      columnNumber: 23
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star-o",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 673,
      columnNumber: 23
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 675,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      display: "flex",
      textAlign: "center",
      alignItems: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 676,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_avatar3_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    alt: "avatar1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 684,
      columnNumber: 23
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      width: "60%",
      display: "grid"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 685,
      columnNumber: 23
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "span",
    sx: {
      color: "black",
      fontFamily: "Roboto",
      fontSize: {
        xs: "10px",
        sm: "13px",
        md: "15px"
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 692,
      columnNumber: 25
    }
  }, "Gina Stepman"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "span",
    sx: {
      color: "#979191",
      fontFamily: "Roboto",
      fontSize: {
        xs: "10px",
        sm: "13px",
        md: "15px"
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 702,
      columnNumber: 25
    }
  }, "Transportation Brokerage EGL Logistics"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 4,
    style: {
      paddingTop: "25px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 716,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      textAlign: "left",
      borderStyle: "solid",
      padding: "25px",
      borderColor: "#c1bcbc",
      borderRadius: "5px",
      borderWidth: "2px",
      position: "relative"
    },
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 717,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-quote-right ",
    style: {
      color: "rgb(255, 77, 0)",
      borderStyle: "solid",
      paddingLeft: "24px",
      paddingTop: "10px",
      paddingRight: "24px",
      fontSize: {
        xs: "13px",
        sm: "15px",
        md: "25px"
      },
      backgroundColor: "#ffffff",
      borderRadius: "50%",
      position: "absolute",
      paddingBottom: "10px",
      top: "-25px",
      left: "35%",
      borderColor: "#b1aaaa"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 729,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "span",
    sx: {
      color: "#979191",
      fontFamily: "Roboto",
      fontSize: {
        xs: "10px",
        sm: "13px",
        md: "15px"
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 747,
      columnNumber: 21
    }
  }, "FoxtelPBX is a fantastic phone service company with a strong and friendly Team of efficient individuals."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      marginTop: "29px",
      display: "flex",
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 758,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star",
    style: {
      color: "#FF4D00"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 768,
      columnNumber: 23
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star",
    style: {
      color: "#FF4D00"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 772,
      columnNumber: 23
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star",
    style: {
      color: "#FF4D00"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 776,
      columnNumber: 23
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star",
    style: {
      color: "#FF4D00"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 780,
      columnNumber: 23
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star-o",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 784,
      columnNumber: 23
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 786,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      display: "flex",
      textAlign: "center",
      alignItems: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 787,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_avatar2_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    alt: "avatar1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 795,
      columnNumber: 23
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      width: "60%",
      display: "grid"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 796,
      columnNumber: 23
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "span",
    sx: {
      color: "black",
      fontFamily: "Roboto",
      fontSize: {
        xs: "10px",
        sm: "13px",
        md: "15px"
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 803,
      columnNumber: 25
    }
  }, "Shaunt Bejanian"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "span",
    sx: {
      color: "#979191",
      fontFamily: "Roboto",
      fontSize: {
        xs: "10px",
        sm: "13px",
        md: "15px"
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 813,
      columnNumber: 25
    }
  }, "Transportation Brokerage EGL Logistics"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 4,
    style: {
      paddingTop: "25px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 827,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      textAlign: "left",
      borderStyle: "solid",
      padding: "25px",
      borderColor: "#c1bcbc",
      borderRadius: "5px",
      borderWidth: "2px",
      position: "relative"
    },
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 828,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-quote-right ",
    style: {
      color: "rgb(255, 77, 0)",
      borderStyle: "solid",
      paddingLeft: "24px",
      paddingTop: "10px",
      paddingRight: "24px",
      fontSize: {
        xs: "13px",
        sm: "15px",
        md: "25px"
      },
      backgroundColor: "#ffffff",
      borderRadius: "50%",
      position: "absolute",
      paddingBottom: "10px",
      top: "-25px",
      left: "35%",
      borderColor: "#b1aaaa"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 840,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "span",
    sx: {
      color: "#979191",
      fontFamily: "Roboto",
      fontSize: {
        xs: "10px",
        sm: "13px",
        md: "15px"
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 858,
      columnNumber: 21
    }
  }, "I have been using FoxtelPBX service for 3 of my dental offices for the last 4 years.The service is superb.Teech support is very knowledgeables."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      marginTop: "10px",
      display: "flex",
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 870,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star",
    style: {
      color: "#FF4D00"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 880,
      columnNumber: 23
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star",
    style: {
      color: "#FF4D00"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 884,
      columnNumber: 23
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star",
    style: {
      color: "#FF4D00"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 888,
      columnNumber: 23
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star",
    style: {
      color: "#FF4D00"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 892,
      columnNumber: 23
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-star-o",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 896,
      columnNumber: 23
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 898,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      display: "flex",
      textAlign: "center",
      alignItems: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 899,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_avatar1_png__WEBPACK_IMPORTED_MODULE_11___default.a,
    alt: "avatar1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 907,
      columnNumber: 23
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      width: "60%",
      display: "grid"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 908,
      columnNumber: 23
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "span",
    sx: {
      color: "black",
      fontFamily: "Roboto",
      fontSize: {
        xs: "10px",
        sm: "13px",
        md: "15px"
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 915,
      columnNumber: 25
    }
  }, "Kristina Jonson"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "span",
    sx: {
      color: "#979191",
      fontFamily: "Roboto",
      fontSize: {
        xs: "10px",
        sm: "13px",
        md: "15px"
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 925,
      columnNumber: 25
    }
  }, "Transportation Brokerage EGL Logistics")))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      position: "relative"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 944,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "img",
    sx: {
      backgroundColor: " #fff",
      borderRadius: "10px",
      display: {
        xs: "none",
        sm: "none",
        md: "block"
      },
      position: "absolute",
      left: {
        sm: "29%",
        md: "9%"
      },
      height: {
        sm: "25vh",
        md: "47vh"
      },
      top: {
        sm: "174px",
        md: "98px"
      },
      width: "20%",
      boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
      zIndex: "3"
    },
    src: _img_Screenshot_18_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    alt: "avatar1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 945,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.howwecan,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 964,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 965,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    align: "center",
    sx: {
      paddingTop: "5%",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center"
    },
    component: "div",
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 966,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    className: "col-md-5",
    sx: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 977,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "img",
    sx: {
      backgroundColor: " #fff",
      display: {
        xs: "block",
        sm: "block",
        md: "none"
      },
      borderRadius: "10px",
      width: {
        xs: "30%",
        sm: "60%"
      },
      boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
      zIndex: "3"
    },
    src: _img_Screenshot_18_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    alt: "avatar1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 986,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    className: "col-md-7",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1001,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1002,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "p",
    sx: {
      fontSize: {
        xs: "13px",
        sm: "15px",
        md: "25px"
      },
      fontFamily: "Roboto",
      color: "white",
      textAlign: "left"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1003,
      columnNumber: 17
    }
  }, "Get your 30 day money-back guarantee No contact.No commitment"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      display: "flex",
      marginTop: "3%",
      marginBottom: "5%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1014,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_15__["default"], {
    direction: "row",
    spacing: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1018,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonField2, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1019,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      fontSize: {
        xs: "10px",
        sm: "20px",
        md: "20px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1020,
      columnNumber: 23
    }
  }, "REQUEST A QUOTE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonField2, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1030,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      fontSize: {
        xs: "10px",
        sm: "20px",
        md: "20px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1031,
      columnNumber: 23
    }
  }, "Live Support"))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      height: "70vh",
      backgroundColor: "#FFFFFF"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1048,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1054,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    style: {
      height: "70vh"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1055,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 3,
    style: {
      marginTop: "11%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1056,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    style: {
      width: "40%",
      color: "#FF4D00",
      height: "3px",
      opacity: "inherit",
      position: "relative",
      top: "3%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1057,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "span",
    sx: {
      color: "black",
      fontSize: {
        xs: "13px",
        sm: "20px",
        md: "25px"
      },
      fontFamily: "Robote",
      fontWeight: "bold"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1067,
      columnNumber: 15
    }
  }, "Our Active Users on"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1078,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "span",
    sx: {
      color: "#FF4D00",
      fontSize: {
        xs: "15px",
        sm: "25px",
        md: "35px"
      },
      fontFamily: "Robote",
      fontWeight: "bold"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1079,
      columnNumber: 15
    }
  }, "GLOBALLY")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 9,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1091,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_world_map_jpg__WEBPACK_IMPORTED_MODULE_12___default.a,
    style: {
      width: "100%",
      height: "100%",
      marginLeft: {
        xs: "0%",
        sm: "5%",
        md: "10%"
      }
    },
    alt: "avatar1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1092,
      columnNumber: 15
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.footerbaraboive,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1105,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1106,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      paddingTop: "10%",
      paddingBottom: "10%"
    },
    component: "div",
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1107,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      display: "grid",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "left"
    },
    component: "div",
    className: "col-md-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1115,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "black",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto",
      position: "relative"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1125,
      columnNumber: 15
    }
  }, "Support", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    style: {
      width: "50%",
      position: "absolute",
      top: "10px",
      color: "#FF4D00",
      height: "2px",
      opacity: "inherit"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1135,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto",
      marginTop: "20px"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1146,
      columnNumber: 15
    }
  }, "Open New"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1157,
      columnNumber: 15
    }
  }, "Ticket"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1167,
      columnNumber: 15
    }
  }, "Check Ticket"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1177,
      columnNumber: 15
    }
  }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1187,
      columnNumber: 15
    }
  }, "SMS Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1197,
      columnNumber: 15
    }
  }, "FAX Login")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      display: "grid",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "left"
    },
    component: "div",
    className: "col-md-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1208,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "black",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto",
      position: "relative"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1218,
      columnNumber: 15
    }
  }, "RESOURCES", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    style: {
      width: "38%",
      position: "absolute",
      top: "10px",
      color: "#FF4D00",
      height: "2px",
      opacity: "inherit"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1228,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto",
      marginTop: "20px"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1239,
      columnNumber: 15
    }
  }, "Blog"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1250,
      columnNumber: 15
    }
  }, "Videos"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1260,
      columnNumber: 15
    }
  }, "How Volp Works"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1270,
      columnNumber: 15
    }
  }, "Business SMS & MMS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1280,
      columnNumber: 15
    }
  }, "Chat"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1290,
      columnNumber: 15
    }
  }, "FAQ"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1300,
      columnNumber: 15
    }
  }, "Downloads")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      display: "grid",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "left"
    },
    component: "div",
    className: "col-md-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1311,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "black",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto",
      position: "relative"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1321,
      columnNumber: 15
    }
  }, "COMPANY", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    style: {
      width: "65%",
      position: "absolute",
      top: "10px",
      color: "#FF4D00",
      height: "2px",
      opacity: "inherit"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1331,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto",
      marginTop: "20px"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1342,
      columnNumber: 15
    }
  }, "About us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1353,
      columnNumber: 15
    }
  }, "Contact Us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1363,
      columnNumber: 15
    }
  }, "Privacy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1373,
      columnNumber: 15
    }
  }, "Terms OF Use"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1383,
      columnNumber: 15
    }
  }, "Press Release")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      display: "grid",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "left"
    },
    component: "div",
    className: "col-md-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1394,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "black",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto",
      position: "relative"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1404,
      columnNumber: 15
    }
  }, "PRODUCTS", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    style: {
      width: "34%",
      position: "absolute",
      top: "10px",
      color: "#FF4D00",
      height: "2px",
      opacity: "inherit"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1414,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto",
      marginTop: "20px"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1425,
      columnNumber: 15
    }
  }, "Business Phone Features"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1436,
      columnNumber: 15
    }
  }, "Business SMS & SMS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1446,
      columnNumber: 15
    }
  }, "Chat"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1456,
      columnNumber: 15
    }
  }, "Click To Call"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1466,
      columnNumber: 15
    }
  }, "Velantro Review Tool"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1476,
      columnNumber: 15
    }
  }, "IP Phones & Headsets"))))));
}

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./src/components/Compatibility.js":
/*!*****************************************!*\
  !*** ./src/components/Compatibility.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _img_antoine_barres_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/antoine-barres.jpg */ "./src/img/antoine-barres.jpg");
/* harmony import */ var _img_antoine_barres_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_antoine_barres_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _img_Screenshot_15_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/Screenshot_15.png */ "./src/img/Screenshot_15.png");
/* harmony import */ var _img_Screenshot_15_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_Screenshot_15_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _img_Screenshot_16_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/Screenshot_16.png */ "./src/img/Screenshot_16.png");
/* harmony import */ var _img_Screenshot_16_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_img_Screenshot_16_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _img_Screenshot_17_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/Screenshot_17.png */ "./src/img/Screenshot_17.png");
/* harmony import */ var _img_Screenshot_17_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_img_Screenshot_17_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _img_Screenshot_18_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/Screenshot_18.png */ "./src/img/Screenshot_18.png");
/* harmony import */ var _img_Screenshot_18_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_Screenshot_18_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _img_chatting_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/chatting.png */ "./src/img/chatting.png");
/* harmony import */ var _img_chatting_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_img_chatting_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _img_arraw_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/arraw.png */ "./src/img/arraw.png");
/* harmony import */ var _img_arraw_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_img_arraw_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _img_product8_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/product8.png */ "./src/img/product8.png");
/* harmony import */ var _img_product8_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_img_product8_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _img_product9_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/product9.png */ "./src/img/product9.png");
/* harmony import */ var _img_product9_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_img_product9_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _img_product10_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../img/product10.png */ "./src/img/product10.png");
/* harmony import */ var _img_product10_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_img_product10_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _img_product11_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../img/product11.png */ "./src/img/product11.png");
/* harmony import */ var _img_product11_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_img_product11_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _img_product4_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../img/product4.png */ "./src/img/product4.png");
/* harmony import */ var _img_product4_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_img_product4_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _img_product5_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../img/product5.png */ "./src/img/product5.png");
/* harmony import */ var _img_product5_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_img_product5_png__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _img_product6_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../img/product6.png */ "./src/img/product6.png");
/* harmony import */ var _img_product6_png__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_img_product6_png__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _img_product7_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../img/product7.png */ "./src/img/product7.png");
/* harmony import */ var _img_product7_png__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_img_product7_png__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _img_product1_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../img/product1.png */ "./src/img/product1.png");
/* harmony import */ var _img_product1_png__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_img_product1_png__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _img_product2_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../img/product2.png */ "./src/img/product2.png");
/* harmony import */ var _img_product2_png__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_img_product2_png__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _img_product3_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../img/product3.png */ "./src/img/product3.png");
/* harmony import */ var _img_product3_png__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_img_product3_png__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _img_phone1_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../img/phone1.png */ "./src/img/phone1.png");
/* harmony import */ var _img_phone1_png__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_img_phone1_png__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _img_phone2_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../img/phone2.png */ "./src/img/phone2.png");
/* harmony import */ var _img_phone2_png__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_img_phone2_png__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _img_phone3_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../img/phone3.png */ "./src/img/phone3.png");
/* harmony import */ var _img_phone3_png__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_img_phone3_png__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _img_phone4_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../img/phone4.png */ "./src/img/phone4.png");
/* harmony import */ var _img_phone4_png__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_img_phone4_png__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _img_phone5_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../img/phone5.png */ "./src/img/phone5.png");
/* harmony import */ var _img_phone5_png__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_img_phone5_png__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _img_phone6_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../img/phone6.png */ "./src/img/phone6.png");
/* harmony import */ var _img_phone6_png__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_img_phone6_png__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/index.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/index.js");
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @mui/material/Stack */ "./node_modules/@mui/material/Stack/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @mui/material/FormControl */ "./node_modules/@mui/material/FormControl/index.js");
/* harmony import */ var _mui_material_Input__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @mui/material/Input */ "./node_modules/@mui/material/Input/index.js");
/* harmony import */ var _mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @mui/material/InputAdornment */ "./node_modules/@mui/material/InputAdornment/index.js");
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/index.js");
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @mui/material/Card */ "./node_modules/@mui/material/Card/index.js");
/* harmony import */ var _mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @mui/material/CardHeader */ "./node_modules/@mui/material/CardHeader/index.js");
/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @mui/material/CardMedia */ "./node_modules/@mui/material/CardMedia/index.js");
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @mui/material/CardContent */ "./node_modules/@mui/material/CardContent/index.js");
/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @mui/material/CardActions */ "./node_modules/@mui/material/CardActions/index.js");
/* harmony import */ var _mui_material_Collapse__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @mui/material/Collapse */ "./node_modules/@mui/material/Collapse/index.js");
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @mui/material/Avatar */ "./node_modules/@mui/material/Avatar/index.js");
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @mui/material/IconButton */ "./node_modules/@mui/material/IconButton/index.js");
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @mui/material/colors */ "./node_modules/@mui/material/colors/index.js");
/* harmony import */ var _mui_icons_material_Favorite__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @mui/icons-material/Favorite */ "./node_modules/@mui/icons-material/Favorite.js");
/* harmony import */ var _mui_icons_material_Favorite__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Favorite__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var _mui_icons_material_Share__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @mui/icons-material/Share */ "./node_modules/@mui/icons-material/Share.js");
/* harmony import */ var _mui_icons_material_Share__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Share__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @mui/icons-material/ExpandMore */ "./node_modules/@mui/icons-material/ExpandMore.js");
/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var _mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @mui/icons-material/MoreVert */ "./node_modules/@mui/icons-material/MoreVert.js");
/* harmony import */ var _mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_48__);
var _jsxFileName = "C:\\xampp1\\htdocs\\wp-content\\themes\\foxtel\\react-src\\src\\components\\Compatibility.js";


















































const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    padding: "10px",
    minHeight: "100vh                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              "
  },
  imagefield: {
    minHeight: "40vh"
  },
  imagefield1: {
    minHeight: "80vh"
  },
  image1: {
    width: "23%",
    height: "20%"
  },
  howwecan: {
    marginTop: "10%",
    background: "linear-gradient(to right,#FF4D00,  rgb(251 161 122))",
    minHeight: "40vh"
  },
  image2: {
    width: "26%",
    height: "30%"
  },
  image3: {
    width: "23%",
    height: "30%"
  },
  arrowstyle: {
    width: "32px",
    height: "20px",
    marginLeft: "20px",
    cursor: "pointer"
  },
  footerbaraboive: {
    minHeight: "50vh",
    backgroundColor: "#E9E9E9",
    marginTop: "10%"
  },
  learnmore: {
    color: "#FF4D00",
    fontFamily: "Roboto"
  },
  cardspan: {
    fontFamily: "Roboto",
    color: "#7a7878"
  },
  faststyle: {
    fontFamily: "sans-serif",
    fontSize: "2vw",
    color: "#FFFFFF"
  }
}));
const Spanblow = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_29__["styled"])("hr")(({
  theme
}) => ({
  color: "#FF4D00",
  width: "10%",
  height: "2px !important",
  position: "relative",
  opacity: "inherit",
  left: "45%",
  transitionProperty: "width,left",
  transitionDuration: "1s",
  transitionTimingFunction: "linear"
}));
const Upgardeef = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_29__["styled"])("hr")(({
  theme
}) => ({
  width: "27%",
  position: "relative",
  color: "#FF4D00",
  height: "3px !important",
  opacity: "inherit",
  transitionProperty: "width",
  transitionDuration: "1s",
  transitionTimingFunction: "linear"
}));
const Whattextstyle = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_29__["styled"])("h2")(({
  theme
}) => ({
  fontFamily: "Roboto",
  color: "black",
  fontWeight: "bold",
  "&:hover": {
    "& + hr": {
      width: "15% !important",
      position: "relative",
      left: "42% !important"
    }
  }
}));
const Whattextstyle1 = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_29__["styled"])("h2")(({
  theme
}) => ({
  fontFamily: "Roboto",
  color: "black",
  fontWeight: "bold",
  "&:hover": {
    "& + hr": {
      width: "20% !important",
      position: "relative",
      left: "40% !important"
    }
  }
}));
const Whattextstyle2 = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_29__["styled"])("h2")(({
  theme
}) => ({
  fontFamily: "Roboto",
  color: "black",
  fontWeight: "bold",
  "&:hover": {
    "& + hr": {
      width: "14% !important",
      position: "relative",
      left: "43% !important"
    }
  }
}));
const Requested = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_29__["styled"])("h2")(({
  theme
}) => ({
  fontFamily: "Roboto",
  color: "black",
  fontWeight: "bold",
  "&:hover": {
    "& + hr": {
      width: "16% !important",
      position: "relative",
      left: "42% !important"
    }
  }
}));
const Trustedsyle = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_29__["styled"])("h2")(({
  theme
}) => ({
  fontFamily: "Roboto",
  color: "black",
  fontWeight: "bold",
  "&:hover": {
    "& + hr": {
      width: "10% !important",
      position: "relative",
      left: "45% !important"
    }
  }
}));
const ButtonField = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_29__["styled"])(_mui_material_Button__WEBPACK_IMPORTED_MODULE_28__["default"])(({
  theme
}) => ({
  color: "#FFFFFF",
  borderColor: "aliceblue",
  border: "solid",
  fontSize: "1.5vw",
  borderWidth: "2px",
  borderRadius: "5px",
  backgroundColor: Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_29__["alpha"])(theme.palette.common.white, 0),
  "&:hover": {
    backgroundColor: Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_29__["alpha"])("#FF4D00", 1),
    borderColor: "#FF4D00 !important",
    border: "solid",
    borderWidth: "2px",
    borderRadius: "5px"
  },
  marginLeft: 0,
  width: "70%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(0),
    width: "auto"
  }
}));
const ButtonField1 = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_29__["styled"])(_mui_material_Button__WEBPACK_IMPORTED_MODULE_28__["default"])(({
  theme
}) => ({
  color: "black",
  borderColor: "white !important",
  border: "solid",
  fontSize: "1.5vw",
  borderWidth: "2px",
  borderRadius: "5px",
  backgroundColor: "#FFFFFF",
  "&:hover": {
    backgroundColor: "cornsilk",
    borderColor: "#FF4D00 !important",
    color: "black !important",
    border: "solid",
    borderWidth: "2px",
    borderRadius: "5px"
  },
  marginLeft: 0,
  width: "50%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(0),
    width: "auto"
  }
}));
const ButtonField2 = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_29__["styled"])(_mui_material_Button__WEBPACK_IMPORTED_MODULE_28__["default"])(({
  theme
}) => ({
  color: "#FFFFFF",
  borderColor: "#FFFFFF",
  border: "solid",
  fontSize: "1.5vw",
  borderWidth: "2px",
  borderRadius: "5px",
  backgroundColor: Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_29__["alpha"])(theme.palette.common.white, 0),
  "&:hover": {
    backgroundColor: Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_29__["alpha"])("#FFFFFF", 1),
    borderColor: "#FFFFFF !important",
    color: "#FF4D00 !important",
    border: "solid",
    borderWidth: "2px",
    borderRadius: "5px"
  },
  marginLeft: 0,
  width: "60%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(0),
    width: "auto"
  }
}));
const ButtonField3 = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_29__["styled"])(_mui_material_Button__WEBPACK_IMPORTED_MODULE_28__["default"])(({
  theme
}) => ({
  color: "#FF4D00",
  borderColor: "#FF4D00",
  border: "solid",
  fontSize: "1.2vw",
  borderWidth: "2px",
  borderRadius: "5px",
  backgroundColor: Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_29__["alpha"])(theme.palette.common.white, 0),
  "&:hover": {
    backgroundColor: Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_29__["alpha"])("#FF4D00", 1),
    borderColor: "#FF4D00 !important",
    color: "#FFFFFF !important",
    border: "solid",
    borderWidth: "2px",
    borderRadius: "5px"
  },
  marginLeft: 0,
  width: "60%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(0),
    width: "auto"
  }
}));
const ButtonField4 = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_29__["styled"])(_mui_material_Button__WEBPACK_IMPORTED_MODULE_28__["default"])(({
  theme
}) => ({
  color: "#FFFFFF",
  borderColor: "#FF4D00",
  border: "solid",
  fontSize: "1.5vw",
  borderWidth: "2px",
  borderRadius: "5px",
  backgroundColor: "#FF4D00",
  "&:hover": {
    backgroundColor: Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_29__["alpha"])("#FF4D00", 1),
    borderColor: "#FF4D00 !important",
    color: "#FFFFFF !important",
    border: "solid",
    borderWidth: "2px",
    borderRadius: "5px"
  },
  marginLeft: 0,
  width: "60%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(0),
    width: "auto"
  }
}));
const phonedata = [{
  id: "1",
  description: "GrandStream GRP2612W Carrier-Grade IP Phone",
  price: "97.99",
  imagesrc: _img_phone1_png__WEBPACK_IMPORTED_MODULE_22___default.a,
  expanded: false
}, {
  id: "2",
  description: "GrandStream GRP2612W Carrier-Grade IP Phonessss",
  price: "588.99",
  imagesrc: _img_phone2_png__WEBPACK_IMPORTED_MODULE_23___default.a,
  expanded: false
}, {
  id: "3",
  description: "GrandStream GRP2612W Carrier-Grade IP Phone",
  price: "123.99",
  imagesrc: _img_phone3_png__WEBPACK_IMPORTED_MODULE_24___default.a,
  expanded: false
}, {
  id: "4",
  description: "GrandStream GRP2612W Carrier-Grade IP Phone",
  price: "97.99",
  imagesrc: _img_phone4_png__WEBPACK_IMPORTED_MODULE_25___default.a,
  expanded: false
}, {
  id: "5",
  description: "GrandStream GRP2612W Carrier-Grade IP Phone",
  price: "588.99",
  imagesrc: _img_phone5_png__WEBPACK_IMPORTED_MODULE_26___default.a,
  expanded: false
}, {
  id: "6",
  description: "GrandStream GRP2612W Carrier-Grade IP Phone",
  price: "123.99",
  imagesrc: _img_phone6_png__WEBPACK_IMPORTED_MODULE_27___default.a,
  expanded: false
}, {
  id: "7",
  description: "GrandStream GRP2612W Carrier-Grade IP Phone",
  price: "588.99",
  imagesrc: _img_phone2_png__WEBPACK_IMPORTED_MODULE_23___default.a,
  expanded: false
}, {
  id: "8",
  description: "GrandStream GRP2612W Carrier-Grade IP Phone",
  price: "123.99",
  imagesrc: _img_phone4_png__WEBPACK_IMPORTED_MODULE_25___default.a,
  expanded: false
}];
const limitdata = [{
  id: "1",
  description: "GrandStream GRP2612W Carrier-Grade IP Phone",
  price: "97.99",
  imagesrc: _img_phone1_png__WEBPACK_IMPORTED_MODULE_22___default.a,
  expanded: false
}, {
  id: "2",
  description: "GrandStream GRP2612W Carrier-Grade IP Phonessss",
  price: "588.99",
  imagesrc: _img_phone2_png__WEBPACK_IMPORTED_MODULE_23___default.a,
  expanded: false
}, {
  id: "3",
  description: "GrandStream GRP2612W Carrier-Grade IP Phone",
  price: "123.99",
  imagesrc: _img_phone3_png__WEBPACK_IMPORTED_MODULE_24___default.a,
  expanded: false
}, {
  id: "4",
  description: "GrandStream GRP2612W Carrier-Grade IP Phone",
  price: "97.99",
  imagesrc: _img_phone4_png__WEBPACK_IMPORTED_MODULE_25___default.a,
  expanded: false
}, {
  id: "5",
  description: "GrandStream GRP2612W Carrier-Grade IP Phone",
  price: "588.99",
  imagesrc: _img_phone5_png__WEBPACK_IMPORTED_MODULE_26___default.a,
  expanded: false
}, {
  id: "6",
  description: "GrandStream GRP2612W Carrier-Grade IP Phone",
  price: "123.99",
  imagesrc: _img_phone6_png__WEBPACK_IMPORTED_MODULE_27___default.a,
  expanded: false
}];
const currencies = [{
  value: "price",
  label: "price"
}, {
  value: "number",
  label: "number"
}];
const ExpandMore = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_29__["styled"])(props => {
  const {
    expand,
    ...other
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_43__["default"], Object.assign({}, other, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 10
    }
  }));
})(({
  theme,
  expand
}) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest
  })
}));

function Compatibility() {
  const classes = useStyles();
  const [expanded, setExpanded] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);

  const handleExpandClick = value => {
    value.expanded = !value.expanded;
    setExpanded(!expanded);
  };

  const [values, setValues] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    searchvalue: ""
  }); //   let copyphonedata = phonedata;

  const [searchphonedata, setSearchphonedata] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [realdata, setRealdata] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(phonedata);
  const [searcharray, setSearcharray] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(limitdata);
  const [currency, setCurrency] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("price");

  const handleChange1 = event => {
    setCurrency(event.target.value);
    const types = {
      price: "price",
      number: "id"
    };
    const sortProperty = types[event.target.value];
    const sorted = phonedata.sort((a, b) => b[sortProperty] - a[sortProperty]);
    setSearchphonedata(sorted);
  };

  const handleChange = prop => event => {
    setValues({ ...values,
      [prop]: event.target.value
    });
    const searcharray_ = phonedata.filter(value => value.description.toLowerCase().indexOf(event.target.value.toLowerCase()) != -1);
    setSearcharray(searcharray_);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setSearchphonedata(searcharray);
  }, [searcharray]);

  const handleviewclick = () => {
    setSearchphonedata(phonedata);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setSearchphonedata(searcharray);
  }, [searcharray]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.imagefield,
    style: {
      backgroundImage: `url(${_img_antoine_barres_jpg__WEBPACK_IMPORTED_MODULE_4___default.a})`,
      backgroundSize: "100% 100%",
      position: "relative"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 476,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      backgroundColor: "rgba(255, 77, 0, 0.6)",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: " 100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 484,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 494,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    align: "center",
    sx: {
      paddingTop: "10%"
    },
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 495,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      fontSize: {
        xs: "15px",
        sm: "30px",
        md: "3vw"
      },
      fontFamily: "Roboto",
      color: "#FFFFFF",
      fontWeight: "bold"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500,
      columnNumber: 15
    }
  }, "Compatibility")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    align: "center",
    sx: {
      marginTop: "2%"
    },
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      fontSize: {
        xs: "10px",
        sm: "15px",
        md: "20px"
      },
      fontFamily: "Roboto",
      color: "#FFFFFF"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 512,
      columnNumber: 15
    }
  }, "Home ", ">", " Compatibility"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 526,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    align: "center",
    sx: {
      paddingTop: "5%"
    },
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 527,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Whattextstyle, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 528,
      columnNumber: 13
    }
  }, "Bring your own devices"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Spanblow, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 529,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    align: "center",
    sx: {
      marginTop: "5%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 530,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      height: "100%",
      marginTop: "4%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 542,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      width: "80%",
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "p",
    sx: {
      color: "#686666",
      fontWeight: "300",
      fontFamily: "unset",
      textAlign: "center",
      fontSize: {
        xs: "12px",
        sm: "15px",
        md: "20px"
      },
      marginTop: "-30px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556,
      columnNumber: 23
    }
  }, "Velantro offers enterprise-grade IP phones to meet your most business needs.Whether you want a desk phone,a headset to connect to your softphone,Velantro offers a variety of IP phone to optimize your VolP system. With Velantro,you can bring your own device (BYOD).You might not experience all of the advanced features your VolP system offers,but you can use your existing VolP Compatible equipment."))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      marginTop: "10%",
      backgroundColor: "#FF4D00",
      padding: "5%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 582,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 593,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 594,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 6,
    style: {
      display: "flex",
      justifyContent: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 595,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "span",
    sx: {
      color: "white",
      fontSize: {
        xs: "13px",
        sm: "15px",
        md: "20px"
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 599,
      columnNumber: 19
    }
  }, "FREE IP PHONE WITH 3-YEAR CONTRACT")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 6,
    style: {
      display: "flex",
      justifyContent: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 613,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonField1, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 617,
      columnNumber: 19
    }
  }, "Try Now"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      marginTop: "5%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 624,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 630,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 631,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 632,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_32__["default"], {
    variant: "standard",
    sx: {
      m: 1,
      mt: 3,
      width: "100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 633,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Input__WEBPACK_IMPORTED_MODULE_33__["default"], {
    id: "standard-adornment-weight",
    value: values.searchvalue,
    onChange: handleChange("searchvalue"),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_InputAdornment__WEBPACK_IMPORTED_MODULE_34__["default"], {
      position: "end",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 642,
        columnNumber: 21
      }
    }, "Device List:"),
    "aria-describedby": "standard-weight-helper-text",
    inputProps: {
      "aria-label": "weight"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 637,
      columnNumber: 17
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 651,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_35__["default"], {
    id: "standard-select-currency-native",
    select: true,
    label: "Sort",
    sx: {
      marginTop: "3%"
    },
    value: currency,
    onChange: handleChange1,
    SelectProps: {
      native: true
    },
    helperText: "Please sort data",
    variant: "standard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 652,
      columnNumber: 15
    }
  }, currencies.map(option => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    key: option.value,
    value: option.value,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 668,
      columnNumber: 19
    }
  }, option.label))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      marginTop: "4%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 675,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 676,
      columnNumber: 13
    }
  }, searchphonedata.map(value => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 4,
    key: value.id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 678,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Card__WEBPACK_IMPORTED_MODULE_36__["default"], {
    sx: {
      width: "100%",
      marginTop: "4%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 679,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    align: "center",
    sx: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 680,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_38__["default"], {
    component: "img",
    height: "194",
    image: value.imagesrc,
    alt: "Paella dish",
    sx: {
      width: "60%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 689,
      columnNumber: 23
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_39__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 699,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "body2",
    color: "text.secondary",
    align: "center",
    sx: {
      color: "black",
      fontSize: {
        xs: "13px",
        sm: "15px",
        md: "20px"
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 700,
      columnNumber: 23
    }
  }, value.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_40__["default"], {
    disableSpacing: true,
    sx: {
      display: "flex",
      justifyContent: "space-between"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 712,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "span",
    color: "text.secondary",
    align: "center",
    sx: {
      color: "#FF4D00",
      fontSize: {
        xs: "10px",
        sm: "13px",
        md: "20px"
      },
      fontWeight: "bold"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 716,
      columnNumber: 23
    }
  }, "$", value.price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonField3, {
    onClick: () => handleExpandClick(value),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 728,
      columnNumber: 23
    }
  }, "Know More +")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Collapse__WEBPACK_IMPORTED_MODULE_41__["default"], {
    in: value.expanded,
    timeout: "auto",
    unmountOnExit: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 732,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_39__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 733,
      columnNumber: 23
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 734,
      columnNumber: 25
    }
  }, "Method:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 735,
      columnNumber: 25
    }
  }, "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 739,
      columnNumber: 25
    }
  }, "Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add piment\xF3n, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "4%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 758,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonField4, {
    onClick: handleviewclick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 767,
      columnNumber: 13
    }
  }, "View More +")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      marginTop: "4%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 771,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    style: {
      backgroundColor: "#F2F2F2",
      paddingTop: "5%",
      paddingBottom: "5%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 780,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 787,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 6,
    style: {
      display: "flex",
      justifyContent: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 788,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "span",
    sx: {
      width: "60%",
      fontSize: {
        xs: "13px",
        sm: "20px",
        md: "25px"
      },
      fontFamily: "Roboto",
      position: "relative",
      color: "black",
      "&:hover": {
        "& > hr": {
          width: "50% !important",
          position: "absolute"
        }
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 795,
      columnNumber: 15
    }
  }, "Download Guide to VolP Headset & Phone Compatibility", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Upgardeef, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 812,
      columnNumber: 17
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 6,
    style: {
      display: "grid",
      justifyContent: "left"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 815,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      alignItems: "center",
      display: "grid",
      justifyContent: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 816,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_35__["default"], {
    id: "outlined-basic",
    label: "Company Name",
    variant: "outlined",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 824,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_35__["default"], {
    id: "outlined-basic",
    label: "Full Name",
    variant: "outlined",
    sx: {
      marginTop: "10%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 829,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_35__["default"], {
    id: "outlined-basic",
    label: "Email ID",
    variant: "outlined",
    sx: {
      marginTop: "10%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 837,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      marginTop: "4%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 846,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonField4, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 847,
      columnNumber: 17
    }
  }, "Download Now")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.footerbaraboive,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 853,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 854,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      paddingTop: "10%",
      paddingBottom: "10%"
    },
    component: "div",
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 855,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      display: "grid",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "left"
    },
    component: "div",
    className: "col-md-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 863,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "black",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto",
      position: "relative"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 873,
      columnNumber: 15
    }
  }, "Support", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    style: {
      width: "50%",
      position: "absolute",
      top: "10px",
      color: "#FF4D00",
      height: "2px",
      opacity: "inherit"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 883,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto",
      marginTop: "20px"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 894,
      columnNumber: 15
    }
  }, "Open New"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 905,
      columnNumber: 15
    }
  }, "Ticket"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 915,
      columnNumber: 15
    }
  }, "Check Ticket"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 925,
      columnNumber: 15
    }
  }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 935,
      columnNumber: 15
    }
  }, "SMS Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 945,
      columnNumber: 15
    }
  }, "FAX Login")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      display: "grid",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "left"
    },
    component: "div",
    className: "col-md-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 956,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "black",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto",
      position: "relative"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 966,
      columnNumber: 15
    }
  }, "RESOURCES", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    style: {
      width: "38%",
      position: "absolute",
      top: "10px",
      color: "#FF4D00",
      height: "2px",
      opacity: "inherit"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 976,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto",
      marginTop: "20px"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 987,
      columnNumber: 15
    }
  }, "Blog"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 998,
      columnNumber: 15
    }
  }, "Videos"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1008,
      columnNumber: 15
    }
  }, "How Volp Works"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1018,
      columnNumber: 15
    }
  }, "Business SMS & MMS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1028,
      columnNumber: 15
    }
  }, "Chat"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1038,
      columnNumber: 15
    }
  }, "FAQ"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1048,
      columnNumber: 15
    }
  }, "Downloads")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      display: "grid",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "left"
    },
    component: "div",
    className: "col-md-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1059,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "black",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto",
      position: "relative"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1069,
      columnNumber: 15
    }
  }, "COMPANY", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    style: {
      width: "65%",
      position: "absolute",
      top: "10px",
      color: "#FF4D00",
      height: "2px",
      opacity: "inherit"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1079,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto",
      marginTop: "20px"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1090,
      columnNumber: 15
    }
  }, "About us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1101,
      columnNumber: 15
    }
  }, "Contact Us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1111,
      columnNumber: 15
    }
  }, "Privacy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1121,
      columnNumber: 15
    }
  }, "Terms OF Use"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1131,
      columnNumber: 15
    }
  }, "Press Release")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      display: "grid",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "left"
    },
    component: "div",
    className: "col-md-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1142,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "black",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto",
      position: "relative"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1152,
      columnNumber: 15
    }
  }, "PRODUCTS", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    style: {
      width: "34%",
      position: "absolute",
      top: "10px",
      color: "#FF4D00",
      height: "2px",
      opacity: "inherit"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1162,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto",
      marginTop: "20px"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1173,
      columnNumber: 15
    }
  }, "Business Phone Features"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1184,
      columnNumber: 15
    }
  }, "Business SMS & SMS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1194,
      columnNumber: 15
    }
  }, "Chat"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1204,
      columnNumber: 15
    }
  }, "Click To Call"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1214,
      columnNumber: 15
    }
  }, "Velantro Review Tool"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1224,
      columnNumber: 15
    }
  }, "IP Phones & Headsets"))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Compatibility);

/***/ }),

/***/ "./src/components/Home.js":
/*!********************************!*\
  !*** ./src/components/Home.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _img_antoine_barres_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/antoine-barres.jpg */ "./src/img/antoine-barres.jpg");
/* harmony import */ var _img_antoine_barres_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_antoine_barres_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _img_Screenshot_11_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/Screenshot_11.png */ "./src/img/Screenshot_11.png");
/* harmony import */ var _img_Screenshot_11_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_Screenshot_11_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _img_Screenshot_12_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/Screenshot_12.png */ "./src/img/Screenshot_12.png");
/* harmony import */ var _img_Screenshot_12_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_img_Screenshot_12_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _img_Screenshot_13_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/Screenshot_13.png */ "./src/img/Screenshot_13.png");
/* harmony import */ var _img_Screenshot_13_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_img_Screenshot_13_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _img_1_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/1.png */ "./src/img/1.png");
/* harmony import */ var _img_1_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_1_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _img_2_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/2.png */ "./src/img/2.png");
/* harmony import */ var _img_2_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_img_2_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _img_3_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/3.png */ "./src/img/3.png");
/* harmony import */ var _img_3_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_img_3_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _img_4_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/4.png */ "./src/img/4.png");
/* harmony import */ var _img_4_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_img_4_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _img_5_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/5.png */ "./src/img/5.png");
/* harmony import */ var _img_5_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_img_5_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _img_arraw_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../img/arraw.png */ "./src/img/arraw.png");
/* harmony import */ var _img_arraw_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_img_arraw_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/index.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/index.js");
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material/Stack */ "./node_modules/@mui/material/Stack/index.js");
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material/Card */ "./node_modules/@mui/material/Card/index.js");
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material/CardContent */ "./node_modules/@mui/material/CardContent/index.js");
/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material/CardMedia */ "./node_modules/@mui/material/CardMedia/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var react_fast_marquee__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-fast-marquee */ "./node_modules/react-fast-marquee/dist/index.js");
/* harmony import */ var react_fast_marquee__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_fast_marquee__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/index.js");
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material/InputLabel */ "./node_modules/@mui/material/InputLabel/index.js");
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material/MenuItem */ "./node_modules/@mui/material/MenuItem/index.js");
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material/FormControl */ "./node_modules/@mui/material/FormControl/index.js");
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material/Select */ "./node_modules/@mui/material/Select/index.js");
var _jsxFileName = "C:\\xampp1\\htdocs\\wp-content\\themes\\foxtel\\react-src\\src\\components\\Home.js";



























const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    padding: "10px",
    minHeight: "100vh                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              "
  },
  imagefield: {
    minHeight: "85vh"
  },
  imagefield1: {
    minHeight: "80vh"
  },
  image1: {
    width: "23%",
    height: "20%"
  },
  howwecan: {
    marginTop: "10%",
    background: "linear-gradient(to right,#FF4D00,  rgb(251 161 122))",
    minHeight: "40vh"
  },
  image2: {
    width: "26%",
    height: "30%"
  },
  image3: {
    width: "23%",
    height: "30%"
  },
  arrowstyle: {
    width: "32px",
    height: "20px",
    marginLeft: "20px",
    cursor: "pointer"
  },
  footerbaraboive: {
    minHeight: "50vh",
    backgroundColor: "#E9E9E9"
  },
  learnmore: {
    color: "#FF4D00",
    fontFamily: "Roboto"
  },
  cardspan: {
    fontFamily: "Roboto",
    color: "#7a7878"
  },
  whatfield: {
    minHeight: "95vh"
  },
  faststyle: {
    fontFamily: "sans-serif",
    fontSize: "2vw",
    color: "#FFFFFF"
  }
}));
const Spanblow = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_15__["styled"])("hr")(({
  theme
}) => ({
  color: "#FF4D00",
  width: "10%",
  height: "2px !important",
  position: "relative",
  opacity: "inherit",
  left: "45%",
  transitionProperty: "width,left",
  transitionDuration: "1s",
  transitionTimingFunction: "linear"
}));
const Upgardeef = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_15__["styled"])("hr")(({
  theme
}) => ({
  width: "50%",
  position: "absolute",
  top: "90%",
  color: "#FF4D00",
  height: "3px !important",
  opacity: "inherit",
  transitionProperty: "width",
  transitionDuration: "1s",
  transitionTimingFunction: "linear"
}));
const Whattextstyle = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_15__["styled"])("h2")(({
  theme
}) => ({
  fontFamily: "Roboto",
  color: "black",
  fontWeight: "bold",
  "&:hover": {
    "& + hr": {
      width: "15% !important",
      position: "relative",
      left: "42% !important"
    }
  }
}));
const Requested = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_15__["styled"])("h2")(({
  theme
}) => ({
  fontFamily: "Roboto",
  color: "black",
  fontWeight: "bold",
  "&:hover": {
    "& + hr": {
      width: "16% !important",
      position: "relative",
      left: "42% !important"
    }
  }
}));
const Trustedsyle = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_15__["styled"])("h2")(({
  theme
}) => ({
  fontFamily: "Roboto",
  color: "black",
  fontWeight: "bold",
  "&:hover": {
    "& + hr": {
      width: "35% !important",
      position: "relative",
      left: "30% !important"
    }
  }
}));
const ButtonField = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_15__["styled"])(_mui_material_Button__WEBPACK_IMPORTED_MODULE_14__["default"])(({
  theme
}) => ({
  color: "#FFFFFF",
  borderColor: "aliceblue",
  border: "solid",
  fontSize: "1.5vw",
  borderWidth: "2px",
  borderRadius: "5px",
  backgroundColor: Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_15__["alpha"])(theme.palette.common.white, 0),
  "&:hover": {
    backgroundColor: Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_15__["alpha"])("#FF4D00", 1),
    borderColor: "#FF4D00 !important",
    border: "solid",
    borderWidth: "2px",
    borderRadius: "5px"
  },
  marginLeft: 0,
  width: "70%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(0),
    width: "auto"
  }
}));
const ButtonField1 = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_15__["styled"])(_mui_material_Button__WEBPACK_IMPORTED_MODULE_14__["default"])(({
  theme
}) => ({
  color: "black",
  borderColor: "black",
  border: "solid",
  fontSize: "1.5vw",
  borderWidth: "2px",
  borderRadius: "5px",
  backgroundColor: Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_15__["alpha"])(theme.palette.common.white, 0),
  "&:hover": {
    backgroundColor: Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_15__["alpha"])("#FF4D00", 1),
    borderColor: "#FF4D00 !important",
    color: "#FFFFFF !important",
    border: "solid",
    borderWidth: "2px",
    borderRadius: "5px"
  },
  marginLeft: 0,
  width: "50%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(0),
    width: "auto"
  }
}));
const ButtonField2 = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_15__["styled"])(_mui_material_Button__WEBPACK_IMPORTED_MODULE_14__["default"])(({
  theme
}) => ({
  color: "#FFFFFF",
  borderColor: "#FFFFFF",
  border: "solid",
  fontSize: "1.5vw",
  borderWidth: "2px",
  borderRadius: "5px",
  backgroundColor: Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_15__["alpha"])(theme.palette.common.white, 0),
  "&:hover": {
    backgroundColor: Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_15__["alpha"])("#FFFFFF", 1),
    borderColor: "#FFFFFF !important",
    color: "#FF4D00 !important",
    border: "solid",
    borderWidth: "2px",
    borderRadius: "5px"
  },
  marginLeft: 0,
  width: "60%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(0),
    width: "auto"
  }
}));
function Home() {
  const classes = useStyles();
  const [age, setAge] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");

  const handleChange = event => {
    setAge(event.target.value);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.imagefield,
    style: {
      backgroundImage: `url(${_img_antoine_barres_jpg__WEBPACK_IMPORTED_MODULE_4___default.a})`,
      backgroundSize: "100% 100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    align: "left",
    sx: {
      width: "60%",
      paddingTop: "10%"
    },
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      fontSize: {
        xs: "15px",
        sm: "30px",
        md: "3vw"
      },
      fontFamily: "Roboto",
      color: "#FFFFFF",
      fontWeight: "bold"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 13
    }
  }, "INTELLIGENT BUSINESS PHONE SERVICE WITH BUSINESS SMS")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    align: "left",
    sx: {
      width: "60%",
      marginTop: "2%"
    },
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      fontSize: {
        xs: "10px",
        sm: "25px",
        md: "30px"
      },
      fontFamily: "Roboto",
      color: "#FFFFFF"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 13
    }
  }, "FAST,FLEXIBLE,SECURE VOIP PHONE SYSTEM")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-3",
    style: {
      marginTop: "3%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonField, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      fontSize: {
        xs: "15px",
        sm: "20px",
        md: "20px"
      },
      fontFamily: "Roboto",
      color: "#FFFFFF"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 19
    }
  }, "SEE PRICING"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-5",
    style: {
      marginTop: "3%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonField, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      fontSize: {
        xs: "15px",
        sm: "20px",
        md: "20px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 19
    }
  }, "REQUEST A QUOTE"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.whatfield,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    align: "center",
    sx: {
      paddingTop: "5%"
    },
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Whattextstyle, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 13
    }
  }, "What do we do? "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Spanblow, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    align: "center",
    sx: {
      marginTop: "5%",
      display: "flex",
      justifyContent: "center"
    },
    component: "div",
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Card__WEBPACK_IMPORTED_MODULE_17__["default"], {
    sx: {
      maxWidth: 290,
      height: "50vh",
      marginTop: "5%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["CardActionArea"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_19__["default"], {
    component: "img",
    height: "140",
    image: _img_Screenshot_11_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    className: classes.image1,
    alt: "green iguana",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_18__["default"], {
    sx: {
      textAlign: "left"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    gutterBottom: true,
    variant: "h6",
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 23
    }
  }, "BUSINESS VOIP"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "span",
    className: classes.cardspan,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 23
    }
  }, "Cloud based hosted PBX system designed by seasoned engineeers and developers.Enjoy the untimate convenience of easy-scalable and highly flexible VoLP phone service"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["CardActions"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "span",
    className: classes.learnmore,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 21
    }
  }, "Learn More"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: "...",
    className: classes.arrowstyle,
    src: _img_arraw_png__WEBPACK_IMPORTED_MODULE_13___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 21
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Card__WEBPACK_IMPORTED_MODULE_17__["default"], {
    sx: {
      maxWidth: 290,
      height: "50vh",
      marginTop: "5%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["CardActionArea"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_19__["default"], {
    component: "img",
    height: "140",
    image: _img_Screenshot_12_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    className: classes.image3,
    alt: "green iguana",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_18__["default"], {
    sx: {
      textAlign: "left"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    gutterBottom: true,
    variant: "h6",
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 23
    }
  }, "CLICK TO CALL"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "span",
    className: classes.cardspan,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 23
    }
  }, "Make calls instantly from your desktop,Velantro's Click2Call allows you to call any telephone number on the internet instantly"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["CardActions"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "span",
    className: classes.learnmore,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 21
    }
  }, "Learn More"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: "...",
    className: classes.arrowstyle,
    src: _img_arraw_png__WEBPACK_IMPORTED_MODULE_13___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 21
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Card__WEBPACK_IMPORTED_MODULE_17__["default"], {
    sx: {
      maxWidth: 290,
      height: "50vh",
      marginTop: "5%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["CardActionArea"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_19__["default"], {
    component: "img",
    height: "140",
    image: _img_Screenshot_13_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    className: classes.image2,
    alt: "green iguana",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_18__["default"], {
    sx: {
      textAlign: "left"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    gutterBottom: true,
    variant: "h6",
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 23
    }
  }, "VIRTUAL NUMBERS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "span",
    className: classes.cardspan,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 23
    }
  }, "Get a virtual number and make unlimited calls within US and Canda. Choose your local,toll-free,or vanity numbers"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["CardActions"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "span",
    className: classes.learnmore,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 21
    }
  }, "Learn More"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: "...",
    className: classes.arrowstyle,
    src: _img_arraw_png__WEBPACK_IMPORTED_MODULE_13___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 21
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    align: "center",
    sx: {
      paddingTop: "5%"
    },
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonField1, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      fontSize: {
        xs: "15px",
        sm: "20px",
        md: "20px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 17
    }
  }, "REQUEST A QUOTE")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.imagefield1,
    style: {
      backgroundImage: `url(${_img_antoine_barres_jpg__WEBPACK_IMPORTED_MODULE_4___default.a})`,
      backgroundSize: "100% 100%",
      marginTop: "5%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    align: "left",
    sx: {
      width: "60%",
      paddingTop: "10%"
    },
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      fontSize: {
        xs: "15px",
        sm: "30px",
        md: "3vw"
      },
      fontFamily: "Roboto",
      color: "#FFFFFF",
      fontWeight: "bold",
      "&:hover": {
        "& > hr": {
          width: "100% !important",
          position: "absolute"
        }
      },
      position: "relative"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 13
    }
  }, "UPGRADE YOUR SYSTEM NOW", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Upgardeef, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447,
      columnNumber: 15
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    align: "left",
    sx: {
      width: "60%",
      marginTop: "2%"
    },
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      fontSize: {
        xs: "15px",
        sm: "25px",
        md: "25px"
      },
      fontFamily: "Roboto",
      color: "#FFFFFF"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455,
      columnNumber: 13
    }
  }, "Foxtel Voice is a flexible cloud based hosted PBX platform that is integrated with Google's dialogflow allowing an ocean of possibities for sms marketing,customer service and sales automation.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.trued,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    align: "center",
    sx: {
      paddingTop: "5%"
    },
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      fontFamily: "Roboto",
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Trustedsyle, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481,
      columnNumber: 15
    }
  }, "Trusted by more than 1 million business users worldwide"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    style: {
      width: "27%",
      color: "#FF4D00",
      height: "3px",
      position: "relative",
      opacity: "inherit",
      left: "35%",
      transitionProperty: "width,left",
      transitionDuration: "1s",
      transitionTimingFunction: "linear"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 484,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "4%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_fast_marquee__WEBPACK_IMPORTED_MODULE_21___default.a, {
    loop: 0,
    style: {
      width: "100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      width: "20%",
      height: "100%",
      backgroundColor: "rgb(235 235 235)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: "...",
    src: _img_1_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520,
      columnNumber: 19
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      width: "20%",
      height: "100%",
      backgroundColor: "rgb(235 235 235)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 522,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: "...",
    src: _img_2_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 534,
      columnNumber: 19
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      width: "20%",
      height: "100%",
      backgroundColor: "rgb(235 235 235)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 536,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: "...",
    src: _img_3_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 548,
      columnNumber: 19
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      width: "20%",
      height: "100%",
      backgroundColor: "rgb(235 235 235)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: "...",
    src: _img_4_png__WEBPACK_IMPORTED_MODULE_11___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562,
      columnNumber: 19
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      width: "20%",
      height: "100%",
      backgroundColor: "rgb(235 235 235)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 564,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: "...",
    src: _img_5_png__WEBPACK_IMPORTED_MODULE_12___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 576,
      columnNumber: 19
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    align: "center",
    sx: {
      marginTop: "5%"
    },
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 581,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    align: "center",
    sx: {
      marginTop: "5%",
      fontFamily: "Roboto",
      color: "black"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 582,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Requested, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 587,
      columnNumber: 15
    }
  }, "Request A Quote"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    style: {
      width: "10%",
      color: "#FF4D00",
      height: "3px",
      opacity: "inherit",
      left: "45%",
      position: "relative",
      transitionProperty: "width,left",
      transitionDuration: "1s",
      transitionTimingFunction: "linear"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 588,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    align: "center",
    sx: {
      marginTop: "5%",
      display: "flex",
      justifyContent: "center"
    },
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 602,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Card__WEBPACK_IMPORTED_MODULE_17__["default"], {
    sx: {
      maxWidth: 400,
      height: "50vh",
      marginTop: "5%",
      backgroundImage: `url(${_img_antoine_barres_jpg__WEBPACK_IMPORTED_MODULE_4___default.a})`,
      backgroundSize: "100% 100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 611,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["CardActionArea"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 620,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_18__["default"], {
    sx: {
      textAlign: "left"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 621,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    gutterBottom: true,
    component: "div",
    sx: {
      width: "80%",
      marginTop: "20%",
      textAlign: "left",
      marginBottom: "20%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 622,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "span",
    gutterBottom: true,
    sx: {
      fontSize: {
        xs: "13px",
        sm: "20px",
        md: "25px"
      },
      fontFamily: "Roboto",
      color: "#FFFFFF",
      fontWeight: "bold",
      position: "relative"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 632,
      columnNumber: 23
    }
  }, "HAVE A QUESTION? Contact us RIGHT NOW", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    style: {
      width: "27%",
      position: "relative",
      top: "40%",
      color: "#FF4D00",
      height: "3px",
      opacity: "inherit"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 644,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      position: "relative",
      marginTop: "5%",
      display: "flex",
      alignItems: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 655,
      columnNumber: 23
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-whatsapp",
    style: {
      fontSize: "20px",
      color: "#FF4D00",
      position: "relative"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 664,
      columnNumber: 25
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    gutterBottom: true,
    noWrap: true,
    component: "span",
    sx: {
      fontSize: {
        xs: "13px",
        sm: "20px",
        md: "25px"
      },
      fontFamily: "Roboto",
      position: "relative",
      color: "#FFFFFF",
      marginLeft: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 672,
      columnNumber: 25
    }
  }, "1-818-578-4000")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      position: "relative",
      marginTop: "5%",
      display: "flex",
      alignItems: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 687,
      columnNumber: 23
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-envelope-o",
    style: {
      fontSize: "20px",
      color: "#FF4D00",
      position: "relative"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 696,
      columnNumber: 25
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    gutterBottom: true,
    noWrap: true,
    component: "span",
    sx: {
      fontSize: {
        xs: "10px",
        sm: "20px",
        md: "25px"
      },
      fontFamily: "Roboto",
      position: "relative",
      color: "#FFFFFF",
      marginLeft: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 704,
      columnNumber: 25
    }
  }, "info@foxtelpbx.com")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Card__WEBPACK_IMPORTED_MODULE_17__["default"], {
    sx: {
      maxWidth: 400
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 723,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["CardActionArea"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 728,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_18__["default"], {
    sx: {
      textAlign: "left"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 729,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    gutterBottom: true,
    component: "div",
    sx: {
      width: "80%",
      marginTop: "5%",
      textAlign: "left",
      marginBottom: "5%"
    },
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 730,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    className: "col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 741,
      columnNumber: 23
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_22__["default"], {
    id: "filled-basic",
    label: "Name",
    variant: "filled",
    sx: {
      width: "100%",
      marginTop: "3%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 742,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    className: "col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 752,
      columnNumber: 23
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_22__["default"], {
    id: "filled-basic",
    label: "Phone",
    variant: "filled",
    sx: {
      width: "100%",
      marginTop: "3%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 753,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    className: "col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 763,
      columnNumber: 23
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_22__["default"], {
    id: "filled-basic",
    label: "Email",
    variant: "filled",
    sx: {
      width: "100%",
      marginTop: "3%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 764,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    className: "col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 774,
      columnNumber: 23
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_22__["default"], {
    id: "filled-basic",
    label: "Company",
    variant: "filled",
    sx: {
      width: "100%",
      marginTop: "3%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 775,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    className: "col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 785,
      columnNumber: 23
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_25__["default"], {
    fullWidth: true,
    sx: {
      marginTop: "4%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 786,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_23__["default"], {
    id: "demo-simple-select-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 792,
      columnNumber: 27
    }
  }, "Primary Interest"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Select__WEBPACK_IMPORTED_MODULE_26__["default"], {
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    value: age,
    label: "Primary Interest",
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 795,
      columnNumber: 27
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_24__["default"], {
    value: 10,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 802,
      columnNumber: 29
    }
  }, "Ten"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_24__["default"], {
    value: 20,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 803,
      columnNumber: 29
    }
  }, "Twenty"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_24__["default"], {
    value: 30,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 804,
      columnNumber: 29
    }
  }, "Thirty"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["CardActions"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 811,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      marginLeft: "5%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 812,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonField1, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 813,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      fontSize: {
        xs: "15px",
        sm: "20px",
        md: "20px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 814,
      columnNumber: 23
    }
  }, "REQUEST A QUOTE"))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.howwecan,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 831,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 832,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    align: "center",
    sx: {
      paddingTop: "5%",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center"
    },
    component: "div",
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 833,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    component: "div",
    className: "col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 844,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "span",
    sx: {
      fontSize: {
        xs: "15px",
        sm: "30px",
        md: "35px"
      },
      fontFamily: "Roboto",
      color: "white",
      textAlign: "left"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 853,
      columnNumber: 15
    }
  }, "How we can ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 862,
      columnNumber: 28
    }
  }), "change the way", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 864,
      columnNumber: 17
    }
  }), " you operate")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    component: "div",
    className: "col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 867,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      display: "flex"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 876,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_16__["default"], {
    direction: "row",
    spacing: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 882,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonField2, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 883,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      fontSize: {
        xs: "15px",
        sm: "20px",
        md: "20px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 884,
      columnNumber: 21
    }
  }, "REQUEST A QUOTE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonField2, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 894,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      fontSize: {
        xs: "15px",
        sm: "20px",
        md: "20px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 895,
      columnNumber: 21
    }
  }, "Live Support")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.footerbaraboive,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 911,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 912,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      paddingTop: "10%",
      paddingBottom: "10%"
    },
    component: "div",
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 913,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      display: "grid",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "left"
    },
    component: "div",
    className: "col-md-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 921,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "black",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto",
      position: "relative"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 931,
      columnNumber: 15
    }
  }, "Support", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    style: {
      width: "50%",
      position: "absolute",
      top: "10px",
      color: "#FF4D00",
      height: "2px",
      opacity: "inherit"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 941,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto",
      marginTop: "20px"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 952,
      columnNumber: 15
    }
  }, "Open New"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 963,
      columnNumber: 15
    }
  }, "Ticket"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 973,
      columnNumber: 15
    }
  }, "Check Ticket"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 983,
      columnNumber: 15
    }
  }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 993,
      columnNumber: 15
    }
  }, "SMS Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1003,
      columnNumber: 15
    }
  }, "FAX Login")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      display: "grid",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "left"
    },
    component: "div",
    className: "col-md-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1014,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "black",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto",
      position: "relative"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1024,
      columnNumber: 15
    }
  }, "RESOURCES", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    style: {
      width: "38%",
      position: "absolute",
      top: "10px",
      color: "#FF4D00",
      height: "2px",
      opacity: "inherit"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1034,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto",
      marginTop: "20px"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1045,
      columnNumber: 15
    }
  }, "Blog"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1056,
      columnNumber: 15
    }
  }, "Videos"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1066,
      columnNumber: 15
    }
  }, "How Volp Works"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1076,
      columnNumber: 15
    }
  }, "Business SMS & MMS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1086,
      columnNumber: 15
    }
  }, "Chat"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1096,
      columnNumber: 15
    }
  }, "FAQ"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1106,
      columnNumber: 15
    }
  }, "Downloads")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      display: "grid",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "left"
    },
    component: "div",
    className: "col-md-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1117,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "black",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto",
      position: "relative"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1127,
      columnNumber: 15
    }
  }, "COMPANY", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    style: {
      width: "65%",
      position: "absolute",
      top: "10px",
      color: "#FF4D00",
      height: "2px",
      opacity: "inherit"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1137,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto",
      marginTop: "20px"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1148,
      columnNumber: 15
    }
  }, "About us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1159,
      columnNumber: 15
    }
  }, "Contact Us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1169,
      columnNumber: 15
    }
  }, "Privacy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1179,
      columnNumber: 15
    }
  }, "Terms OF Use"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1189,
      columnNumber: 15
    }
  }, "Press Release")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      display: "grid",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "left"
    },
    component: "div",
    className: "col-md-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1200,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "black",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto",
      position: "relative"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1210,
      columnNumber: 15
    }
  }, "PRODUCTS", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    style: {
      width: "34%",
      position: "absolute",
      top: "10px",
      color: "#FF4D00",
      height: "2px",
      opacity: "inherit"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1220,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto",
      marginTop: "20px"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1231,
      columnNumber: 15
    }
  }, "Business Phone Features"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1242,
      columnNumber: 15
    }
  }, "Business SMS & SMS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1252,
      columnNumber: 15
    }
  }, "Chat"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1262,
      columnNumber: 15
    }
  }, "Click To Call"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1272,
      columnNumber: 15
    }
  }, "Velantro Review Tool"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1282,
      columnNumber: 15
    }
  }, "IP Phones & Headsets"))))));
}

/***/ }),

/***/ "./src/components/Price.js":
/*!*********************************!*\
  !*** ./src/components/Price.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _img_antoine_barres_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/antoine-barres.jpg */ "./src/img/antoine-barres.jpg");
/* harmony import */ var _img_antoine_barres_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_antoine_barres_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _img_backgrodunprocing_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/backgrodunprocing.jpg */ "./src/img/backgrodunprocing.jpg");
/* harmony import */ var _img_backgrodunprocing_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_backgrodunprocing_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _img_pricing1_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/pricing1.png */ "./src/img/pricing1.png");
/* harmony import */ var _img_pricing1_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_img_pricing1_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _img_pricing2_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/pricing2.png */ "./src/img/pricing2.png");
/* harmony import */ var _img_pricing2_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_img_pricing2_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _img_pricing3_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/pricing3.png */ "./src/img/pricing3.png");
/* harmony import */ var _img_pricing3_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_pricing3_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _img_pricing4_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/pricing4.png */ "./src/img/pricing4.png");
/* harmony import */ var _img_pricing4_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_img_pricing4_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _img_pricing5_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/pricing5.png */ "./src/img/pricing5.png");
/* harmony import */ var _img_pricing5_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_img_pricing5_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _img_pricing6_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/pricing6.png */ "./src/img/pricing6.png");
/* harmony import */ var _img_pricing6_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_img_pricing6_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/FormControl */ "./node_modules/@mui/material/FormControl/index.js");
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Select */ "./node_modules/@mui/material/Select/index.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/index.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/index.js");
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material/Card */ "./node_modules/@mui/material/Card/index.js");
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material/CardContent */ "./node_modules/@mui/material/CardContent/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/index.js");
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material/MenuItem */ "./node_modules/@mui/material/MenuItem/index.js");
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material/InputLabel */ "./node_modules/@mui/material/InputLabel/index.js");
var _jsxFileName = "C:\\xampp1\\htdocs\\wp-content\\themes\\foxtel\\react-src\\src\\components\\Price.js";






















const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    padding: "10px",
    minHeight: "100vh                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              "
  },
  imagefield: {
    minHeight: "40vh"
  },
  imagefield1: {
    minHeight: "80vh"
  },
  image1: {
    width: "23%",
    height: "20%"
  },
  howwecan: {
    marginTop: "10%",
    background: "linear-gradient(to right,#FF4D00,  rgb(251 161 122))",
    minHeight: "40vh"
  },
  image2: {
    width: "26%",
    height: "30%"
  },
  image3: {
    width: "23%",
    height: "30%"
  },
  arrowstyle: {
    width: "32px",
    height: "20px",
    marginLeft: "20px",
    cursor: "pointer"
  },
  footerbaraboive: {
    minHeight: "50vh",
    backgroundColor: "#E9E9E9",
    marginTop: "10%"
  },
  learnmore: {
    color: "#FF4D00",
    fontFamily: "Roboto"
  },
  cardspan: {
    fontFamily: "Roboto",
    color: "#7a7878"
  },
  faststyle: {
    fontFamily: "sans-serif",
    fontSize: "2vw",
    color: "#FFFFFF"
  }
}));
const Spanblow = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_15__["styled"])("hr")(({
  theme
}) => ({
  color: "#FF4D00",
  width: "10%",
  height: "2px !important",
  position: "relative",
  opacity: "inherit",
  left: "45%",
  transitionProperty: "width,left",
  transitionDuration: "1s",
  transitionTimingFunction: "linear"
}));
const Whattextstyle = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_15__["styled"])("h2")(({
  theme
}) => ({
  fontFamily: "Roboto",
  color: "black",
  fontWeight: "bold",
  "&:hover": {
    "& + hr": {
      width: "15% !important",
      position: "relative",
      left: "42% !important"
    }
  }
}));
const Requested = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_15__["styled"])("h2")(({
  theme
}) => ({
  fontFamily: "Roboto",
  color: "black",
  fontWeight: "bold",
  "&:hover": {
    "& + hr": {
      width: "16% !important",
      position: "relative",
      left: "42% !important"
    }
  }
}));
const ButtonField1 = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_15__["styled"])(_mui_material_Button__WEBPACK_IMPORTED_MODULE_14__["default"])(({
  theme
}) => ({
  color: "black",
  borderColor: "black",
  border: "solid",
  fontSize: "1.5vw",
  borderWidth: "2px",
  borderRadius: "5px",
  backgroundColor: Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_15__["alpha"])(theme.palette.common.white, 0),
  "&:hover": {
    backgroundColor: Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_15__["alpha"])("#FF4D00", 1),
    borderColor: "#FF4D00 !important",
    color: "#FFFFFF !important",
    border: "solid",
    borderWidth: "2px",
    borderRadius: "5px"
  },
  marginLeft: 0,
  width: "50%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(0),
    width: "auto"
  }
}));
const ButtonField3 = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_15__["styled"])(_mui_material_Button__WEBPACK_IMPORTED_MODULE_14__["default"])(({
  theme
}) => ({
  color: "#FFFFFF",
  borderColor: "#FFFFFF",
  border: "solid",
  fontSize: "1.5vw",
  borderWidth: "2px",
  borderRadius: "5px",
  padding: "10px",
  background: "linear-gradient(to right,#FF4D00,  rgb(251 161 122))",
  "&:hover": {
    background: "linear-gradient(to right,#FF4D00,  rgb(240 151 112)) !important",
    borderColor: "#FFFFFF !important",
    color: "#FF4D00 !important",
    border: "solid",
    borderWidth: "2px",
    borderRadius: "5px"
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(0),
    width: "auto"
  }
}));

function Price() {
  const classes = useStyles();
  const [age, setAge] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");

  const handleChange = event => {
    setAge(event.target.value);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.imagefield,
    style: {
      backgroundImage: `url(${_img_antoine_barres_jpg__WEBPACK_IMPORTED_MODULE_4___default.a})`,
      backgroundSize: "100% 100%",
      position: "relative"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      backgroundColor: "rgba(255, 77, 0, 0.6)",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: " 100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    align: "center",
    sx: {
      paddingTop: "10%"
    },
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      fontSize: {
        xs: "15px",
        sm: "30px",
        md: "3vw"
      },
      fontFamily: "Roboto",
      color: "#FFFFFF",
      fontWeight: "bold"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 15
    }
  }, "Pricing")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    align: "center",
    sx: {
      marginTop: "2%"
    },
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      fontSize: {
        xs: "10px",
        sm: "15px",
        md: "20px"
      },
      fontFamily: "Roboto",
      color: "#FFFFFF"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 15
    }
  }, "Home ", ">", " Pricing"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    align: "center",
    sx: {
      paddingTop: "5%"
    },
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Whattextstyle, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 13
    }
  }, "FotelPBX Business Voip Plans And Pricing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Spanblow, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    align: "center",
    sx: {
      marginTop: "5%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      height: "100%",
      marginTop: "5%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      width: "80%",
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "p",
    sx: {
      color: "#686666",
      fontWeight: "300",
      fontFamily: "unset",
      textAlign: "center",
      fontSize: {
        xs: "12px",
        sm: "15px",
        md: "20px"
      },
      marginTop: "-30px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 23
    }
  }, "FotelPBX is the leading business VolP provider in the US & Canda.We provide all-in-one solutions for small and mid-sized business.Find the best plan for your business needs.If you expand your business later,we will keep up with you.Our team of dedicated VolP engineers is available 24/7 to reslove any issues,simple or complex,in a matter of minutes.All of our plans include 45+ business VolP features,so you won't pay extra for premium features."))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      marginTop: "10%",
      backgroundColor: "#F2F2F2"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      paddingBottom: "7%",
      paddingTop: "7%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    style: {
      width: "100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Card__WEBPACK_IMPORTED_MODULE_16__["default"], {
    sx: {
      width: "100%",
      marginTop: "10%",
      padding: "20px",
      "&:hover": {
        backgroundColor: "#FF4D00",
        "& > div.MuiTypography-root.MuiTypography-body1.css-ahj2mt-MuiTypography-root>div.MuiTypography-root.MuiTypography-body1.css-1uwgr7b-MuiTypography-root>p": {
          color: "#FFFFFF"
        }
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "p",
    sx: {
      color: "#848484",
      fontSize: {
        xs: "13px",
        sm: "15px",
        md: "20px"
      },
      fontFamily: "Roboto",
      fontWeight: "bold"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 23
    }
  }, "STARTER"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    gutterBottom: true,
    component: "p",
    sx: {
      color: "black",
      fontFamily: "Roboto",
      fontWeight: "bold",
      fontSize: {
        xs: "15px",
        sm: "25px",
        md: "35px"
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 23
    }
  }, "$29.99"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    gutterBottom: true,
    component: "p",
    sx: {
      color: "black",
      fontFamily: "Roboto",
      fontWeight: "bold",
      fontSize: {
        xs: "10px",
        sm: "13px",
        md: "15px"
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 23
    }
  }, "/user/month"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonField3, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 23
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      textTransform: "initial",
      fontSize: {
        xs: "13px",
        sm: "15px",
        md: "17px"
      },
      letterSpacing: "-0.9px !important",
      fontFamily: "monospace",
      color: "white"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 25
    }
  }, "Order Now")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "p",
    sx: {
      color: "#848484",
      marginTop: "10px",
      fontSize: {
        xs: "10px",
        sm: "13px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 23
    }
  }, "1-4 Users", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 25
    }
  }), "Unlimited Calling in 50 States", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
      columnNumber: 25
    }
  }), "No Risk 30-day trial", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 25
    }
  }), "Free Cloud Anti Virus", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 25
    }
  }), "100% Managed Service", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 25
    }
  }), "Click To Call Automation", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 25
    }
  }), "Free Professional Recording", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 25
    }
  }), "Velantro Review Tool", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 25
    }
  }), "45+ Business Features"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 4,
    style: {
      position: "relative"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Card__WEBPACK_IMPORTED_MODULE_16__["default"], {
    sx: {
      width: "100%",
      marginTop: "10%",
      padding: "20px",
      "&:hover": {
        backgroundColor: "#FF4D00",
        "& > div.MuiTypography-root.MuiTypography-body1.css-ahj2mt-MuiTypography-root>div.MuiTypography-root.MuiTypography-body1.css-1uwgr7b-MuiTypography-root>p": {
          color: "#FFFFFF"
        }
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonField3, {
    style: {
      position: "absolute",
      top: "0%",
      left: "10%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      textTransform: "initial",
      fontSize: {
        xs: "13px",
        sm: "15px",
        md: "17px"
      },
      letterSpacing: "-0.9px !important",
      fontFamily: "monospace",
      color: "white"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 21
    }
  }, "Best Seller Order Now")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "p",
    sx: {
      color: "#848484",
      fontSize: {
        xs: "13px",
        sm: "15px",
        md: "20px"
      },
      fontFamily: "Roboto",
      fontWeight: "bold"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447,
      columnNumber: 23
    }
  }, "Pro"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    gutterBottom: true,
    component: "p",
    sx: {
      color: "black",
      fontFamily: "Roboto",
      fontWeight: "bold",
      fontSize: {
        xs: "15px",
        sm: "25px",
        md: "35px"
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458,
      columnNumber: 23
    }
  }, "$24.99"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    gutterBottom: true,
    component: "p",
    sx: {
      color: "black",
      fontFamily: "Roboto",
      fontWeight: "bold",
      fontSize: {
        xs: "10px",
        sm: "13px",
        md: "15px"
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470,
      columnNumber: 23
    }
  }, "/user/month"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonField3, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482,
      columnNumber: 23
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      textTransform: "initial",
      fontSize: {
        xs: "13px",
        sm: "15px",
        md: "17px"
      },
      letterSpacing: "-0.9px !important",
      fontFamily: "monospace",
      color: "white"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 483,
      columnNumber: 25
    }
  }, "Order Now")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "p",
    sx: {
      color: "#848484",
      marginTop: "10px",
      fontSize: {
        xs: "10px",
        sm: "13px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496,
      columnNumber: 23
    }
  }, "4-9 Users", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506,
      columnNumber: 25
    }
  }), "Unlimited Calling in 50 States", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508,
      columnNumber: 25
    }
  }), "No Risk 30-day trial", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510,
      columnNumber: 25
    }
  }), "Free Cloud Anti Virus", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 512,
      columnNumber: 25
    }
  }), "100% Managed Service", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514,
      columnNumber: 25
    }
  }), "Click To Call Automation", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516,
      columnNumber: 25
    }
  }), "Free Professional Recording", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 518,
      columnNumber: 25
    }
  }), "Velantro Review Tool", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520,
      columnNumber: 25
    }
  }), "45+ Business Features"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 527,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Card__WEBPACK_IMPORTED_MODULE_16__["default"], {
    sx: {
      width: "100%",
      marginTop: "10%",
      padding: "20px",
      "&:hover": {
        backgroundColor: "#FF4D00",
        "& > div.MuiTypography-root.MuiTypography-body1.css-ahj2mt-MuiTypography-root>div.MuiTypography-root.MuiTypography-body1.css-1uwgr7b-MuiTypography-root>p": {
          color: "#FFFFFF"
        }
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 528,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 542,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 543,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "p",
    sx: {
      color: "#848484",
      fontSize: {
        xs: "13px",
        sm: "15px",
        md: "20px"
      },
      fontFamily: "Roboto",
      fontWeight: "bold"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 544,
      columnNumber: 23
    }
  }, "STARTER"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    gutterBottom: true,
    component: "p",
    sx: {
      color: "black",
      fontFamily: "Roboto",
      fontWeight: "bold",
      fontSize: {
        xs: "15px",
        sm: "25px",
        md: "35px"
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 555,
      columnNumber: 23
    }
  }, "$19.99"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    gutterBottom: true,
    component: "p",
    sx: {
      color: "black",
      fontFamily: "Roboto",
      fontWeight: "bold",
      fontSize: {
        xs: "10px",
        sm: "13px",
        md: "15px"
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 567,
      columnNumber: 23
    }
  }, "/user/month"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonField3, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 579,
      columnNumber: 23
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      textTransform: "initial",
      fontSize: {
        xs: "13px",
        sm: "15px",
        md: "17px"
      },
      letterSpacing: "-0.9px !important",
      fontFamily: "monospace",
      color: "white"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 580,
      columnNumber: 25
    }
  }, "Order Now")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "p",
    sx: {
      color: "#848484",
      marginTop: "10px",
      fontSize: {
        xs: "10px",
        sm: "13px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 593,
      columnNumber: 23
    }
  }, "20 Users", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 603,
      columnNumber: 25
    }
  }), "Unlimited Calling in 50 States", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 605,
      columnNumber: 25
    }
  }), "No Risk 30-day trial", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 607,
      columnNumber: 25
    }
  }), "Free Cloud Anti Virus", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 609,
      columnNumber: 25
    }
  }), "100% Managed Service", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 611,
      columnNumber: 25
    }
  }), "Click To Call Automation", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 613,
      columnNumber: 25
    }
  }), "Free Professional Recording", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 615,
      columnNumber: 25
    }
  }), "Velantro Review Tool", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 617,
      columnNumber: 25
    }
  }), "45+ Business Features"))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      backgroundImage: `url(${_img_backgrodunprocing_jpg__WEBPACK_IMPORTED_MODULE_5___default.a})`,
      opacity: "0.8",
      backgroundSize: "100% 100%",
      paddingBottom: "5%",
      paddingTop: "5%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 628,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    style: {
      paddingTop: "5%",
      paddingBottom: "5%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 638,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    style: {
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 644,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 12,
    style: {
      textAlign: "center",
      position: "relative"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 651,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Whattextstyle, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 652,
      columnNumber: 15
    }
  }, "FoxtelPBX Voip Premium Features"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Spanblow, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 653,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 2,
    style: {
      marginTop: "3%",
      display: "flex",
      justifyContent: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 655,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      height: "100%",
      position: "relative"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 663,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_pricing1_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "avatar1",
    style: {
      backgroundColor: "#FFFFFF",
      borderRadius: "5px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 669,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      color: "black",
      fontWeight: "bold",
      marginTop: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 677,
      columnNumber: 17
    }
  }, "Reliable phone & fax service"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 2,
    style: {
      marginTop: "5%",
      display: "flex",
      justifyContent: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 688,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      height: "100%",
      position: "relative"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 696,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_pricing2_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "avatar1",
    style: {
      backgroundColor: "#FFFFFF",
      borderRadius: "5px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 702,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      color: "black",
      fontWeight: "bold",
      marginTop: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 710,
      columnNumber: 17
    }
  }, "24/7 free customer service"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 2,
    style: {
      marginTop: "7%",
      display: "flex",
      justifyContent: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 721,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      height: "100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 729,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_pricing3_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    alt: "avatar1",
    style: {
      backgroundColor: "#FFFFFF",
      borderRadius: "5px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 734,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      color: "black",
      fontWeight: "bold",
      marginTop: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 742,
      columnNumber: 17
    }
  }, "No setup fees,no contacts requried"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 2,
    style: {
      marginTop: "7%",
      display: "flex",
      justifyContent: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 753,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      height: "100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 761,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_pricing4_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    alt: "avatar1",
    style: {
      backgroundColor: "#FFFFFF",
      borderRadius: "5px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 766,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      color: "black",
      fontWeight: "bold",
      marginTop: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 774,
      columnNumber: 17
    }
  }, "45+ business phone features"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 2,
    style: {
      marginTop: "5%",
      display: "flex",
      justifyContent: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 785,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      height: "100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 793,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_pricing5_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    alt: "avatar1",
    style: {
      backgroundColor: "#FFFFFF",
      borderRadius: "5px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 798,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      color: "black",
      marginTop: "10px",
      fontWeight: "bold"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 806,
      columnNumber: 17
    }
  }, "Access to real-time call activity"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 2,
    style: {
      marginTop: "3%",
      display: "flex",
      justifyContent: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 817,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      height: "100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 825,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_pricing6_png__WEBPACK_IMPORTED_MODULE_11___default.a,
    alt: "avatar1",
    style: {
      backgroundColor: "#FFFFFF",
      borderRadius: "5px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 830,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      color: "black",
      marginTop: "10px",
      fontWeight: "bold"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 838,
      columnNumber: 17
    }
  }, "Free call consultation")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 852,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    style: {
      display: "flex",
      justifyContent: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 853,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      width: "80%",
      marginTop: "10%",
      backgroundColor: "#F2F2F2",
      padding: "20px",
      textAlign: "center",
      paddingBottom: "7%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 854,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "p",
    sx: {
      color: "black",
      fontFamily: "sans-serif",
      fontWeight: "bold",
      fontSize: "20px",
      marginTop: "10%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 865,
      columnNumber: 13
    }
  }, "Want to keep your existing number?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "p",
    sx: {
      color: "black",
      fontFamily: "sans-serif",
      fontWeight: "bold",
      fontSize: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 877,
      columnNumber: 13
    }
  }, "Switch to Velantro and port your number for free"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonField3, {
    style: {
      marginTop: "5%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 888,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      textTransform: "initial",
      fontSize: {
        xs: "10px",
        sm: "15px",
        md: "19px"
      },
      letterSpacing: "-0.9px !important",
      fontFamily: "monospace",
      color: "white"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 893,
      columnNumber: 15
    }
  }, "Get a free consultation")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    align: "center",
    sx: {
      marginTop: "5%"
    },
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 908,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    align: "center",
    sx: {
      marginTop: "5%",
      fontFamily: "Roboto",
      color: "black"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 909,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Requested, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 914,
      columnNumber: 13
    }
  }, "Request A Quote"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    style: {
      width: "10%",
      color: "#FF4D00",
      height: "3px",
      opacity: "inherit",
      left: "45%",
      position: "relative",
      transitionProperty: "width,left",
      transitionDuration: "1s",
      transitionTimingFunction: "linear"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 915,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    align: "center",
    sx: {
      marginTop: "5%",
      display: "flex",
      justifyContent: "center"
    },
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 929,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Card__WEBPACK_IMPORTED_MODULE_16__["default"], {
    sx: {
      maxWidth: 400,
      height: "50vh",
      marginTop: "5%",
      backgroundImage: `url(${_img_antoine_barres_jpg__WEBPACK_IMPORTED_MODULE_4___default.a})`,
      backgroundSize: "100% 100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 938,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["CardActionArea"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 947,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_17__["default"], {
    sx: {
      textAlign: "left"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 948,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    gutterBottom: true,
    component: "div",
    sx: {
      width: "80%",
      marginTop: "20%",
      textAlign: "left",
      marginBottom: "20%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 949,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "span",
    gutterBottom: true,
    sx: {
      fontSize: {
        xs: "13px",
        sm: "20px",
        md: "25px"
      },
      fontFamily: "Roboto",
      color: "#FFFFFF",
      fontWeight: "bold",
      position: "relative"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 959,
      columnNumber: 21
    }
  }, "HAVE A QUESTION? Contact us RIGHT NOW", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    style: {
      width: "27%",
      position: "relative",
      top: "40%",
      color: "#FF4D00",
      height: "3px",
      opacity: "inherit"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 971,
      columnNumber: 23
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      position: "relative",
      marginTop: "5%",
      display: "flex",
      alignItems: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 982,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-whatsapp",
    style: {
      fontSize: "20px",
      color: "#FF4D00",
      position: "relative"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 991,
      columnNumber: 23
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    gutterBottom: true,
    noWrap: true,
    component: "span",
    sx: {
      fontSize: {
        xs: "13px",
        sm: "20px",
        md: "25px"
      },
      fontFamily: "Roboto",
      position: "relative",
      color: "#FFFFFF",
      marginLeft: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 999,
      columnNumber: 23
    }
  }, "1-818-578-4000")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      position: "relative",
      marginTop: "5%",
      display: "flex",
      alignItems: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1014,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-envelope-o",
    style: {
      fontSize: "20px",
      color: "#FF4D00",
      position: "relative"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1023,
      columnNumber: 23
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    gutterBottom: true,
    noWrap: true,
    component: "span",
    sx: {
      fontSize: {
        xs: "10px",
        sm: "20px",
        md: "25px"
      },
      fontFamily: "Roboto",
      position: "relative",
      color: "#FFFFFF",
      marginLeft: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1031,
      columnNumber: 23
    }
  }, "info@foxtelpbx.com")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Card__WEBPACK_IMPORTED_MODULE_16__["default"], {
    sx: {
      maxWidth: 400
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1050,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["CardActionArea"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1055,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_17__["default"], {
    sx: {
      textAlign: "left"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1056,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    gutterBottom: true,
    component: "div",
    sx: {
      width: "80%",
      marginTop: "5%",
      textAlign: "left",
      marginBottom: "5%"
    },
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1057,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    className: "col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1068,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_19__["default"], {
    id: "filled-basic",
    label: "Name",
    variant: "filled",
    sx: {
      width: "100%",
      marginTop: "3%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1069,
      columnNumber: 23
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    className: "col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1079,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_19__["default"], {
    id: "filled-basic",
    label: "Phone",
    variant: "filled",
    sx: {
      width: "100%",
      marginTop: "3%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1080,
      columnNumber: 23
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    className: "col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1090,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_19__["default"], {
    id: "filled-basic",
    label: "Email",
    variant: "filled",
    sx: {
      width: "100%",
      marginTop: "3%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1091,
      columnNumber: 23
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    className: "col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1101,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_19__["default"], {
    id: "filled-basic",
    label: "Company",
    variant: "filled",
    sx: {
      width: "100%",
      marginTop: "3%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1102,
      columnNumber: 23
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    className: "col-md-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1112,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_12__["default"], {
    fullWidth: true,
    sx: {
      marginTop: "4%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1113,
      columnNumber: 23
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_21__["default"], {
    id: "demo-simple-select-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1119,
      columnNumber: 25
    }
  }, "Primary Interest"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Select__WEBPACK_IMPORTED_MODULE_13__["default"], {
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    value: age,
    label: "Primary Interest",
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1122,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_20__["default"], {
    value: 10,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1129,
      columnNumber: 27
    }
  }, "Ten"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_20__["default"], {
    value: 20,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1130,
      columnNumber: 27
    }
  }, "Twenty"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_20__["default"], {
    value: 30,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1131,
      columnNumber: 27
    }
  }, "Thirty"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["CardActions"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1138,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      marginLeft: "5%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1139,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonField1, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1140,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      fontSize: {
        xs: "15px",
        sm: "20px",
        md: "20px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1141,
      columnNumber: 21
    }
  }, "REQUEST A QUOTE")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.footerbaraboive,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1158,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1159,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      paddingTop: "10%",
      paddingBottom: "10%"
    },
    component: "div",
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1160,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      display: "grid",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "left"
    },
    component: "div",
    className: "col-md-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1168,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "black",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto",
      position: "relative"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1178,
      columnNumber: 15
    }
  }, "Support", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    style: {
      width: "50%",
      position: "absolute",
      top: "10px",
      color: "#FF4D00",
      height: "2px",
      opacity: "inherit"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1188,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto",
      marginTop: "20px"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1199,
      columnNumber: 15
    }
  }, "Open New"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1210,
      columnNumber: 15
    }
  }, "Ticket"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1220,
      columnNumber: 15
    }
  }, "Check Ticket"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1230,
      columnNumber: 15
    }
  }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1240,
      columnNumber: 15
    }
  }, "SMS Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1250,
      columnNumber: 15
    }
  }, "FAX Login")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      display: "grid",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "left"
    },
    component: "div",
    className: "col-md-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1261,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "black",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto",
      position: "relative"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1271,
      columnNumber: 15
    }
  }, "RESOURCES", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    style: {
      width: "38%",
      position: "absolute",
      top: "10px",
      color: "#FF4D00",
      height: "2px",
      opacity: "inherit"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1281,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto",
      marginTop: "20px"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1292,
      columnNumber: 15
    }
  }, "Blog"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1303,
      columnNumber: 15
    }
  }, "Videos"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1313,
      columnNumber: 15
    }
  }, "How Volp Works"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1323,
      columnNumber: 15
    }
  }, "Business SMS & MMS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1333,
      columnNumber: 15
    }
  }, "Chat"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1343,
      columnNumber: 15
    }
  }, "FAQ"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1353,
      columnNumber: 15
    }
  }, "Downloads")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      display: "grid",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "left"
    },
    component: "div",
    className: "col-md-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1364,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "black",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto",
      position: "relative"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1374,
      columnNumber: 15
    }
  }, "COMPANY", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    style: {
      width: "65%",
      position: "absolute",
      top: "10px",
      color: "#FF4D00",
      height: "2px",
      opacity: "inherit"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1384,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto",
      marginTop: "20px"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1395,
      columnNumber: 15
    }
  }, "About us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1406,
      columnNumber: 15
    }
  }, "Contact Us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1416,
      columnNumber: 15
    }
  }, "Privacy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1426,
      columnNumber: 15
    }
  }, "Terms OF Use"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1436,
      columnNumber: 15
    }
  }, "Press Release")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      display: "grid",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "left"
    },
    component: "div",
    className: "col-md-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1447,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "black",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto",
      position: "relative"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1457,
      columnNumber: 15
    }
  }, "PRODUCTS", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    style: {
      width: "34%",
      position: "absolute",
      top: "10px",
      color: "#FF4D00",
      height: "2px",
      opacity: "inherit"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1467,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto",
      marginTop: "20px"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1478,
      columnNumber: 15
    }
  }, "Business Phone Features"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1489,
      columnNumber: 15
    }
  }, "Business SMS & SMS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1499,
      columnNumber: 15
    }
  }, "Chat"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1509,
      columnNumber: 15
    }
  }, "Click To Call"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1519,
      columnNumber: 15
    }
  }, "Velantro Review Tool"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1529,
      columnNumber: 15
    }
  }, "IP Phones & Headsets"))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Price);

/***/ }),

/***/ "./src/components/Product.js":
/*!***********************************!*\
  !*** ./src/components/Product.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _img_antoine_barres_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/antoine-barres.jpg */ "./src/img/antoine-barres.jpg");
/* harmony import */ var _img_antoine_barres_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_antoine_barres_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _img_Screenshot_15_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/Screenshot_15.png */ "./src/img/Screenshot_15.png");
/* harmony import */ var _img_Screenshot_15_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_Screenshot_15_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _img_Screenshot_16_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/Screenshot_16.png */ "./src/img/Screenshot_16.png");
/* harmony import */ var _img_Screenshot_16_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_img_Screenshot_16_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _img_Screenshot_17_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/Screenshot_17.png */ "./src/img/Screenshot_17.png");
/* harmony import */ var _img_Screenshot_17_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_img_Screenshot_17_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _img_Screenshot_18_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/Screenshot_18.png */ "./src/img/Screenshot_18.png");
/* harmony import */ var _img_Screenshot_18_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_Screenshot_18_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _img_chatting_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/chatting.png */ "./src/img/chatting.png");
/* harmony import */ var _img_chatting_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_img_chatting_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _img_arraw_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/arraw.png */ "./src/img/arraw.png");
/* harmony import */ var _img_arraw_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_img_arraw_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _img_product8_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/product8.png */ "./src/img/product8.png");
/* harmony import */ var _img_product8_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_img_product8_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _img_product9_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/product9.png */ "./src/img/product9.png");
/* harmony import */ var _img_product9_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_img_product9_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _img_product10_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../img/product10.png */ "./src/img/product10.png");
/* harmony import */ var _img_product10_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_img_product10_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _img_product11_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../img/product11.png */ "./src/img/product11.png");
/* harmony import */ var _img_product11_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_img_product11_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _img_product4_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../img/product4.png */ "./src/img/product4.png");
/* harmony import */ var _img_product4_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_img_product4_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _img_product5_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../img/product5.png */ "./src/img/product5.png");
/* harmony import */ var _img_product5_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_img_product5_png__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _img_product6_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../img/product6.png */ "./src/img/product6.png");
/* harmony import */ var _img_product6_png__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_img_product6_png__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _img_product7_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../img/product7.png */ "./src/img/product7.png");
/* harmony import */ var _img_product7_png__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_img_product7_png__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _img_product1_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../img/product1.png */ "./src/img/product1.png");
/* harmony import */ var _img_product1_png__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_img_product1_png__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _img_product2_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../img/product2.png */ "./src/img/product2.png");
/* harmony import */ var _img_product2_png__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_img_product2_png__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _img_product3_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../img/product3.png */ "./src/img/product3.png");
/* harmony import */ var _img_product3_png__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_img_product3_png__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/index.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/index.js");
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material/Stack */ "./node_modules/@mui/material/Stack/index.js");
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material/Card */ "./node_modules/@mui/material/Card/index.js");
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material/CardContent */ "./node_modules/@mui/material/CardContent/index.js");
/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/material/CardMedia */ "./node_modules/@mui/material/CardMedia/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
var _jsxFileName = "C:\\xampp1\\htdocs\\wp-content\\themes\\foxtel\\react-src\\src\\components\\Product.js";






























const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    padding: "10px",
    minHeight: "100vh                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              "
  },
  imagefield: {
    minHeight: "40vh"
  },
  imagefield1: {
    minHeight: "80vh"
  },
  image1: {
    width: "23%",
    height: "20%"
  },
  howwecan: {
    marginTop: "10%",
    background: "linear-gradient(to right,#FF4D00,  rgb(251 161 122))",
    minHeight: "40vh"
  },
  image2: {
    width: "26%",
    height: "30%"
  },
  image3: {
    width: "23%",
    height: "30%"
  },
  arrowstyle: {
    width: "32px",
    height: "20px",
    marginLeft: "20px",
    cursor: "pointer"
  },
  footerbaraboive: {
    minHeight: "50vh",
    backgroundColor: "#E9E9E9",
    marginTop: "10%"
  },
  learnmore: {
    color: "#FF4D00",
    fontFamily: "Roboto"
  },
  cardspan: {
    fontFamily: "Roboto",
    color: "#7a7878"
  },
  faststyle: {
    fontFamily: "sans-serif",
    fontSize: "2vw",
    color: "#FFFFFF"
  }
}));
const Spanblow = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_23__["styled"])("hr")(({
  theme
}) => ({
  color: "#FF4D00",
  width: "10%",
  height: "2px !important",
  position: "relative",
  opacity: "inherit",
  left: "45%",
  transitionProperty: "width,left",
  transitionDuration: "1s",
  transitionTimingFunction: "linear"
}));
const Upgardeef = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_23__["styled"])("hr")(({
  theme
}) => ({
  width: "27%",
  position: "absolute",
  top: "90%",
  color: "#FF4D00",
  height: "3px !important",
  opacity: "inherit",
  transitionProperty: "width",
  transitionDuration: "1s",
  transitionTimingFunction: "linear"
}));
const Whattextstyle = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_23__["styled"])("h2")(({
  theme
}) => ({
  fontFamily: "Roboto",
  color: "black",
  fontWeight: "bold",
  "&:hover": {
    "& + hr": {
      width: "15% !important",
      position: "relative",
      left: "42% !important"
    }
  }
}));
const Whattextstyle1 = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_23__["styled"])("h2")(({
  theme
}) => ({
  fontFamily: "Roboto",
  color: "black",
  fontWeight: "bold",
  "&:hover": {
    "& + hr": {
      width: "20% !important",
      position: "relative",
      left: "40% !important"
    }
  }
}));
const Whattextstyle2 = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_23__["styled"])("h2")(({
  theme
}) => ({
  fontFamily: "Roboto",
  color: "black",
  fontWeight: "bold",
  "&:hover": {
    "& + hr": {
      width: "14% !important",
      position: "relative",
      left: "43% !important"
    }
  }
}));
const Requested = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_23__["styled"])("h2")(({
  theme
}) => ({
  fontFamily: "Roboto",
  color: "black",
  fontWeight: "bold",
  "&:hover": {
    "& + hr": {
      width: "16% !important",
      position: "relative",
      left: "42% !important"
    }
  }
}));
const Trustedsyle = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_23__["styled"])("h2")(({
  theme
}) => ({
  fontFamily: "Roboto",
  color: "black",
  fontWeight: "bold",
  "&:hover": {
    "& + hr": {
      width: "10% !important",
      position: "relative",
      left: "45% !important"
    }
  }
}));
const ButtonField = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_23__["styled"])(_mui_material_Button__WEBPACK_IMPORTED_MODULE_22__["default"])(({
  theme
}) => ({
  color: "#FFFFFF",
  borderColor: "aliceblue",
  border: "solid",
  fontSize: "1.5vw",
  borderWidth: "2px",
  borderRadius: "5px",
  backgroundColor: Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_23__["alpha"])(theme.palette.common.white, 0),
  "&:hover": {
    backgroundColor: Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_23__["alpha"])("#FF4D00", 1),
    borderColor: "#FF4D00 !important",
    border: "solid",
    borderWidth: "2px",
    borderRadius: "5px"
  },
  marginLeft: 0,
  width: "70%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(0),
    width: "auto"
  }
}));
const ButtonField1 = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_23__["styled"])(_mui_material_Button__WEBPACK_IMPORTED_MODULE_22__["default"])(({
  theme
}) => ({
  color: "black",
  borderColor: "black",
  border: "solid",
  fontSize: "1.5vw",
  borderWidth: "2px",
  borderRadius: "5px",
  backgroundColor: Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_23__["alpha"])(theme.palette.common.white, 0),
  "&:hover": {
    backgroundColor: Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_23__["alpha"])("#FF4D00", 1),
    borderColor: "#FF4D00 !important",
    color: "#FFFFFF !important",
    border: "solid",
    borderWidth: "2px",
    borderRadius: "5px"
  },
  marginLeft: 0,
  width: "50%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(0),
    width: "auto"
  }
}));
const ButtonField2 = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_23__["styled"])(_mui_material_Button__WEBPACK_IMPORTED_MODULE_22__["default"])(({
  theme
}) => ({
  color: "#FFFFFF",
  borderColor: "#FFFFFF",
  border: "solid",
  fontSize: "1.5vw",
  borderWidth: "2px",
  borderRadius: "5px",
  backgroundColor: Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_23__["alpha"])(theme.palette.common.white, 0),
  "&:hover": {
    backgroundColor: Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_23__["alpha"])("#FFFFFF", 1),
    borderColor: "#FFFFFF !important",
    color: "#FF4D00 !important",
    border: "solid",
    borderWidth: "2px",
    borderRadius: "5px"
  },
  marginLeft: 0,
  width: "60%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(0),
    width: "auto"
  }
}));

function Product() {
  const classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.imagefield,
    style: {
      backgroundImage: `url(${_img_antoine_barres_jpg__WEBPACK_IMPORTED_MODULE_4___default.a})`,
      backgroundSize: "100% 100%",
      position: "relative"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      backgroundColor: "rgba(255, 77, 0, 0.6)",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: " 100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    align: "center",
    sx: {
      paddingTop: "10%"
    },
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      fontSize: {
        xs: "15px",
        sm: "30px",
        md: "3vw"
      },
      fontFamily: "Roboto",
      color: "#FFFFFF",
      fontWeight: "bold"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 15
    }
  }, "Products & Services")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    align: "center",
    sx: {
      marginTop: "2%"
    },
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      fontSize: {
        xs: "10px",
        sm: "15px",
        md: "20px"
      },
      fontFamily: "Roboto",
      color: "#FFFFFF"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 15
    }
  }, "Home ", ">", " Products & Services"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    align: "center",
    sx: {
      paddingTop: "5%"
    },
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Whattextstyle, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 13
    }
  }, "Introducing FoxtelPBX For All Solution"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Spanblow, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    align: "center",
    sx: {
      marginTop: "5%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      height: "100%",
      marginTop: "5%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      width: "80%",
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "p",
    sx: {
      color: "#686666",
      fontWeight: "300",
      fontFamily: "unset",
      textAlign: "center",
      fontSize: {
        xs: "12px",
        sm: "15px",
        md: "20px"
      },
      marginTop: "-30px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 23
    }
  }, "FoxtelPBX is a business phone service provider by tomorrow's technology.Our mission is to take your business communication to the next level.Make the most of flexible,cost-effective,hardware-free communication system."))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      marginTop: "40px",
      backgroundColor: "#FFFFFF"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      paddingBottom: "7%",
      paddingTop: "7%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    style: {
      width: "100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      width: "100%",
      height: "40vh",
      backgroundColor: "#FFFFFF",
      marginTop: "5%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_27__["default"], {
    component: "img",
    image: _img_product8_png__WEBPACK_IMPORTED_MODULE_11___default.a,
    sx: {
      width: "20%",
      height: "100%",
      marginLeft: "4%"
    },
    alt: "green",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_26__["default"], {
    component: "div",
    sx: {
      textAlign: "left"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    gutterBottom: true,
    sx: {
      color: "black",
      fontSize: {
        xs: "10px",
        sm: "13px",
        md: "18px"
      },
      fontWeight: "bold"
    },
    component: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 23
    }
  }, "Complete Business Communication Services"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "span",
    sx: {
      fontFamily: "Roboto",
      color: "#7a7878"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 23
    }
  }, "FoxtelPBX is a business phone service provider powered by tomorrow's technology."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      backgroundColor: "#FFFFFF",
      border: "none"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408,
      columnNumber: 23
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "span",
    sx: {
      color: "black",
      fontFamily: "Roboto"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 25
    }
  }, "Learn More"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: "...",
    className: "creative-tim-logo",
    style: {
      width: "32px",
      height: "20px",
      marginLeft: "20px",
      cursor: "pointer"
    },
    src: _img_arraw_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 25
    }
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      width: "100%",
      height: "40vh",
      backgroundColor: "#FFFFFF",
      marginTop: "5%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_27__["default"], {
    component: "img",
    image: _img_product9_png__WEBPACK_IMPORTED_MODULE_12___default.a,
    sx: {
      width: "20%",
      height: "100%",
      marginLeft: "4%"
    },
    alt: "green",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_26__["default"], {
    component: "div",
    sx: {
      textAlign: "left"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    gutterBottom: true,
    sx: {
      color: "black",
      fontSize: {
        xs: "10px",
        sm: "13px",
        md: "18px"
      },
      fontWeight: "bold"
    },
    component: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458,
      columnNumber: 23
    }
  }, "Business Class HD Phone"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "span",
    sx: {
      fontFamily: "Roboto",
      color: "#7a7878"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469,
      columnNumber: 23
    }
  }, "FoxtelPBX is a business phone service provider powered by tomorrow's technology."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      backgroundColor: "#FFFFFF",
      border: "none"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479,
      columnNumber: 23
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "span",
    sx: {
      color: "black",
      fontFamily: "Roboto"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 486,
      columnNumber: 25
    }
  }, "Learn More"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: "...",
    className: "creative-tim-logo",
    style: {
      width: "32px",
      height: "20px",
      marginLeft: "20px",
      cursor: "pointer"
    },
    src: _img_arraw_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 495,
      columnNumber: 25
    }
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      width: "100%",
      height: "40vh",
      backgroundColor: "#FFFFFF",
      marginTop: "5%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 512,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_27__["default"], {
    component: "img",
    image: _img_product10_png__WEBPACK_IMPORTED_MODULE_13___default.a,
    sx: {
      width: "20%",
      height: "100%",
      marginLeft: "4%"
    },
    alt: "green",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 522,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_26__["default"], {
    component: "div",
    sx: {
      textAlign: "left"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 528,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    gutterBottom: true,
    sx: {
      color: "black",
      fontSize: {
        xs: "10px",
        sm: "13px",
        md: "18px"
      },
      fontWeight: "bold"
    },
    component: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 529,
      columnNumber: 23
    }
  }, "Ring Group/Call Queues"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "span",
    sx: {
      fontFamily: "Roboto",
      color: "#7a7878"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540,
      columnNumber: 23
    }
  }, "FoxtelPBX is a business phone service provider powered by tomorrow's technology."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      backgroundColor: "#FFFFFF",
      border: "none"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550,
      columnNumber: 23
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "span",
    sx: {
      color: "black",
      fontFamily: "Roboto"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557,
      columnNumber: 25
    }
  }, "Learn More"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: "...",
    className: "creative-tim-logo",
    style: {
      width: "32px",
      height: "20px",
      marginLeft: "20px",
      cursor: "pointer"
    },
    src: _img_arraw_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 566,
      columnNumber: 25
    }
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 582,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      width: "100%",
      height: "40vh",
      backgroundColor: "#FFFFFF",
      marginTop: "5%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 583,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 592,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_27__["default"], {
    component: "img",
    image: _img_product11_png__WEBPACK_IMPORTED_MODULE_14___default.a,
    sx: {
      width: "20%",
      height: "100%",
      marginLeft: "4%"
    },
    alt: "green",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 593,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_26__["default"], {
    component: "div",
    sx: {
      textAlign: "left"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 599,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    gutterBottom: true,
    sx: {
      color: "black",
      fontSize: {
        xs: "10px",
        sm: "13px",
        md: "18px"
      },
      fontWeight: "bold"
    },
    component: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 600,
      columnNumber: 23
    }
  }, "iPhone & Android Access"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "span",
    sx: {
      fontFamily: "Roboto",
      color: "#7a7878"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 611,
      columnNumber: 23
    }
  }, "FoxtelPBX is a business phone service provider powered by tomorrow's technology."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      backgroundColor: "#FFFFFF",
      border: "none"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 621,
      columnNumber: 23
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "span",
    sx: {
      color: "black",
      fontFamily: "Roboto"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 628,
      columnNumber: 25
    }
  }, "Learn More"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: "...",
    className: "creative-tim-logo",
    style: {
      width: "32px",
      height: "20px",
      marginLeft: "20px",
      cursor: "pointer"
    },
    src: _img_arraw_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 637,
      columnNumber: 25
    }
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 3,
    style: {
      marginTop: "3%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 653,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      width: "100%",
      height: "40vh",
      backgroundColor: "#FFFFFF",
      marginTop: "5%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 654,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 663,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_27__["default"], {
    component: "img",
    image: _img_product4_png__WEBPACK_IMPORTED_MODULE_15___default.a,
    sx: {
      width: "20%",
      height: "100%",
      marginLeft: "4%"
    },
    alt: "green",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 664,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_26__["default"], {
    component: "div",
    sx: {
      textAlign: "left"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 670,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    gutterBottom: true,
    sx: {
      color: "black",
      fontSize: {
        xs: "10px",
        sm: "13px",
        md: "18px"
      },
      fontWeight: "bold"
    },
    component: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 671,
      columnNumber: 23
    }
  }, "E-fax"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "span",
    sx: {
      fontFamily: "Roboto",
      color: "#7a7878"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 682,
      columnNumber: 23
    }
  }, "FoxtelPBX is a business phone service provider powered by tomorrow's technology."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      backgroundColor: "#FFFFFF",
      border: "none"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 692,
      columnNumber: 23
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "span",
    sx: {
      color: "black",
      fontFamily: "Roboto"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 699,
      columnNumber: 25
    }
  }, "Learn More"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: "...",
    className: "creative-tim-logo",
    style: {
      width: "32px",
      height: "20px",
      marginLeft: "20px",
      cursor: "pointer"
    },
    src: _img_arraw_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 708,
      columnNumber: 25
    }
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 3,
    style: {
      marginTop: "3%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 724,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      width: "100%",
      height: "40vh",
      backgroundColor: "#FFFFFF",
      marginTop: "5%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 725,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 734,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_27__["default"], {
    component: "img",
    image: _img_product5_png__WEBPACK_IMPORTED_MODULE_16___default.a,
    sx: {
      width: "20%",
      height: "100%",
      marginLeft: "4%"
    },
    alt: "green",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 735,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_26__["default"], {
    component: "div",
    sx: {
      textAlign: "left"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 741,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    gutterBottom: true,
    sx: {
      color: "black",
      fontSize: {
        xs: "10px",
        sm: "13px",
        md: "18px"
      },
      fontWeight: "bold"
    },
    component: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 742,
      columnNumber: 23
    }
  }, "IVR Services"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "span",
    sx: {
      fontFamily: "Roboto",
      color: "#7a7878"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 753,
      columnNumber: 23
    }
  }, "FoxtelPBX is a business phone service provider powered by tomorrow's technology."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      backgroundColor: "#FFFFFF",
      border: "none"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 763,
      columnNumber: 23
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "span",
    sx: {
      color: "black",
      fontFamily: "Roboto"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 770,
      columnNumber: 25
    }
  }, "Learn More"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: "...",
    className: "creative-tim-logo",
    style: {
      width: "32px",
      height: "20px",
      marginLeft: "20px",
      cursor: "pointer"
    },
    src: _img_arraw_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 779,
      columnNumber: 25
    }
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 3,
    style: {
      marginTop: "3%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 795,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      width: "100%",
      height: "40vh",
      backgroundColor: "#FFFFFF",
      marginTop: "5%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 796,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 805,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_27__["default"], {
    component: "img",
    image: _img_product6_png__WEBPACK_IMPORTED_MODULE_17___default.a,
    sx: {
      width: "20%",
      height: "100%",
      marginLeft: "4%"
    },
    alt: "green",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 806,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_26__["default"], {
    component: "div",
    sx: {
      textAlign: "left"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 812,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    gutterBottom: true,
    sx: {
      color: "black",
      fontSize: {
        xs: "10px",
        sm: "13px",
        md: "18px"
      },
      fontWeight: "bold"
    },
    component: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 813,
      columnNumber: 23
    }
  }, "Call Recording"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "span",
    sx: {
      fontFamily: "Roboto",
      color: "#7a7878"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 824,
      columnNumber: 23
    }
  }, "FoxtelPBX is a business phone service provider powered by tomorrow's technology."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      backgroundColor: "#FFFFFF",
      border: "none"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 834,
      columnNumber: 23
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "span",
    sx: {
      color: "black",
      fontFamily: "Roboto"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 841,
      columnNumber: 25
    }
  }, "Learn More"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: "...",
    className: "creative-tim-logo",
    style: {
      width: "32px",
      height: "20px",
      marginLeft: "20px",
      cursor: "pointer"
    },
    src: _img_arraw_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 850,
      columnNumber: 25
    }
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 3,
    style: {
      marginTop: "3%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 866,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      width: "100%",
      height: "40vh",
      backgroundColor: "#FFFFFF",
      marginTop: "5%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 867,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 876,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_27__["default"], {
    component: "img",
    image: _img_product7_png__WEBPACK_IMPORTED_MODULE_18___default.a,
    sx: {
      width: "20%",
      height: "100%",
      marginLeft: "4%"
    },
    alt: "green",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 877,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_26__["default"], {
    component: "div",
    sx: {
      textAlign: "left"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 883,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    gutterBottom: true,
    sx: {
      color: "black",
      fontSize: {
        xs: "10px",
        sm: "13px",
        md: "18px"
      },
      fontWeight: "bold"
    },
    component: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 884,
      columnNumber: 23
    }
  }, "Full Messaging Services"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "span",
    sx: {
      fontFamily: "Roboto",
      color: "#7a7878"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 895,
      columnNumber: 23
    }
  }, "FoxtelPBX is a business phone service provider powered by tomorrow's technology."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      backgroundColor: "#FFFFFF",
      border: "none"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 905,
      columnNumber: 23
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "span",
    sx: {
      color: "black",
      fontFamily: "Roboto"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 912,
      columnNumber: 25
    }
  }, "Learn More"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: "...",
    className: "creative-tim-logo",
    style: {
      width: "32px",
      height: "20px",
      marginLeft: "20px",
      cursor: "pointer"
    },
    src: _img_arraw_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 921,
      columnNumber: 25
    }
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 3,
    style: {
      marginTop: "3%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 937,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      width: "100%",
      height: "40vh",
      backgroundColor: "#FFFFFF",
      marginTop: "5%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 938,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 947,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_27__["default"], {
    component: "img",
    image: _img_product1_png__WEBPACK_IMPORTED_MODULE_19___default.a,
    sx: {
      width: "20%",
      height: "100%",
      marginLeft: "4%"
    },
    alt: "green",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 948,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_26__["default"], {
    component: "div",
    sx: {
      textAlign: "left"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 954,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    gutterBottom: true,
    sx: {
      color: "black",
      fontSize: {
        xs: "10px",
        sm: "13px",
        md: "18px"
      },
      fontWeight: "bold"
    },
    component: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 955,
      columnNumber: 23
    }
  }, "Call Screening"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "span",
    sx: {
      fontFamily: "Roboto",
      color: "#7a7878"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 966,
      columnNumber: 23
    }
  }, "FoxtelPBX is a business phone service provider powered by tomorrow's technology."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      backgroundColor: "#FFFFFF",
      border: "none"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 976,
      columnNumber: 23
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "span",
    sx: {
      color: "black",
      fontFamily: "Roboto"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 983,
      columnNumber: 25
    }
  }, "Learn More"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: "...",
    className: "creative-tim-logo",
    style: {
      width: "32px",
      height: "20px",
      marginLeft: "20px",
      cursor: "pointer"
    },
    src: _img_arraw_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 992,
      columnNumber: 25
    }
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 3,
    style: {
      marginTop: "3%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1008,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      width: "100%",
      height: "40vh",
      backgroundColor: "#FFFFFF",
      marginTop: "5%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1009,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1018,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_27__["default"], {
    component: "img",
    image: _img_product2_png__WEBPACK_IMPORTED_MODULE_20___default.a,
    sx: {
      width: "20%",
      height: "100%",
      marginLeft: "4%"
    },
    alt: "green",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1019,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_26__["default"], {
    component: "div",
    sx: {
      textAlign: "left"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1025,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    gutterBottom: true,
    sx: {
      color: "black",
      fontSize: {
        xs: "10px",
        sm: "13px",
        md: "18px"
      },
      fontWeight: "bold"
    },
    component: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1026,
      columnNumber: 23
    }
  }, "PC Soft-Phone Support"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "span",
    sx: {
      fontFamily: "Roboto",
      color: "#7a7878"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1037,
      columnNumber: 23
    }
  }, "FoxtelPBX is a business phone service provider powered by tomorrow's technology."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      backgroundColor: "#FFFFFF",
      border: "none"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1047,
      columnNumber: 23
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "span",
    sx: {
      color: "black",
      fontFamily: "Roboto"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1054,
      columnNumber: 25
    }
  }, "Learn More"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: "...",
    className: "creative-tim-logo",
    style: {
      width: "32px",
      height: "20px",
      marginLeft: "20px",
      cursor: "pointer"
    },
    src: _img_arraw_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1063,
      columnNumber: 25
    }
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 3,
    style: {
      marginTop: "3%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1079,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      width: "100%",
      height: "40vh",
      backgroundColor: "#FFFFFF",
      marginTop: "5%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1080,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1089,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_27__["default"], {
    component: "img",
    image: _img_product3_png__WEBPACK_IMPORTED_MODULE_21___default.a,
    sx: {
      width: "20%",
      height: "100%",
      marginLeft: "4%"
    },
    alt: "green",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1090,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_26__["default"], {
    component: "div",
    sx: {
      textAlign: "left"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1096,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    gutterBottom: true,
    sx: {
      color: "black",
      fontSize: {
        xs: "10px",
        sm: "13px",
        md: "18px"
      },
      fontWeight: "bold"
    },
    component: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1097,
      columnNumber: 23
    }
  }, "Follow Me Feature"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "span",
    sx: {
      fontFamily: "Roboto",
      color: "#7a7878"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1108,
      columnNumber: 23
    }
  }, "FoxtelPBX is a business phone service provider powered by tomorrow's technology."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      backgroundColor: "#FFFFFF",
      border: "none"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1118,
      columnNumber: 23
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "span",
    sx: {
      color: "black",
      fontFamily: "Roboto"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1125,
      columnNumber: 25
    }
  }, "Learn More"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: "...",
    className: "creative-tim-logo",
    style: {
      width: "32px",
      height: "20px",
      marginLeft: "20px",
      cursor: "pointer"
    },
    src: _img_arraw_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1134,
      columnNumber: 25
    }
  })))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      backgroundColor: "#F2F2F2",
      paddingBottom: "10%",
      paddingTop: "7%",
      position: "relative"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1154,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    style: {
      display: "grid",
      justifyContent: "center",
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1163,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1170,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Whattextstyle1, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1171,
      columnNumber: 13
    }
  }, "FoxtelPBX Operator Panel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    style: {
      color: "#FF4D00",
      width: "15%",
      height: "2px",
      position: "relative",
      opacity: "inherit",
      left: "42%",
      transitionProperty: "width,left",
      transitionDuration: "1s",
      transitionTimingFunction: "linear"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1172,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1186,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    style: {
      width: "100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1194,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 12,
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1195,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      width: "80%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1203,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "span",
    sx: {
      color: "#686666",
      fontWeight: "300",
      fontFamily: "unset",
      textAlign: "center",
      fontSize: {
        xs: "13px",
        sm: "15px",
        md: "20px"
      },
      marginTop: "-30px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1209,
      columnNumber: 19
    }
  }, "FoxtelPBX is a business phone service provider by tomorrow's technology.Our mission is to take your business communication to the next level.Make the most of flexible,cost-effective,hardware-free communication system."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 6,
    style: {
      marginTop: "5%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1227,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_chatting_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    alt: "avatar1",
    style: {
      borderRadius: "5px",
      width: "90%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1228,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 6,
    style: {
      marginTop: "5%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1237,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      display: "flex",
      alignItems: "center",
      justifyContent: "left"
    },
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1238,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-circle",
    style: {
      fontSize: "10px",
      color: "#FF4D00"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1246,
      columnNumber: 19
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      color: "black",
      fontSize: "20px",
      fontWeight: "bold",
      marginLeft: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1250,
      columnNumber: 19
    }
  }, "Real time live call status")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      display: "flex",
      alignItems: "center",
      justifyContent: "left",
      marginTop: "20px"
    },
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1261,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-circle",
    style: {
      fontSize: "10px",
      color: "#FF4D00"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1270,
      columnNumber: 19
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      color: "black",
      fontSize: "20px",
      fontWeight: "bold",
      marginLeft: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1274,
      columnNumber: 19
    }
  }, "Understand monthly extension usage")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      display: "flex",
      alignItems: "center",
      justifyContent: "left",
      marginTop: "20px"
    },
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1285,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-circle",
    style: {
      fontSize: "10px",
      color: "#FF4D00"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1294,
      columnNumber: 19
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      color: "black",
      fontSize: "20px",
      fontWeight: "bold",
      marginLeft: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1298,
      columnNumber: 19
    }
  }, "Monthly,weekly,daily and custom charts")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      display: "flex",
      alignItems: "center",
      justifyContent: "left",
      marginTop: "20px"
    },
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1309,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-circle",
    style: {
      fontSize: "10px",
      color: "#FF4D00"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1318,
      columnNumber: 19
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      color: "black",
      fontSize: "20px",
      fontWeight: "bold",
      marginLeft: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1322,
      columnNumber: 19
    }
  }, "Display company voicemail count")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      display: "flex",
      alignItems: "center",
      justifyContent: "left",
      marginTop: "20px"
    },
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1333,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-circle",
    style: {
      fontSize: "10px",
      color: "#FF4D00"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1342,
      columnNumber: 19
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      color: "black",
      fontSize: "20px",
      fontWeight: "bold",
      marginLeft: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1346,
      columnNumber: 19
    }
  }, "Track average call duration")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      display: "flex",
      alignItems: "center",
      justifyContent: "left",
      marginTop: "20px"
    },
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1357,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-circle",
    style: {
      fontSize: "10px",
      color: "#FF4D00"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1366,
      columnNumber: 19
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      color: "black",
      fontSize: "20px",
      fontWeight: "bold",
      marginLeft: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1370,
      columnNumber: 19
    }
  }, "Call reports based on departments"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      width: "50%",
      padding: "35px",
      //   backgroundColor: "#FF4D00",
      background: "linear-gradient(to left, #FF4D00, #f57d16, #f7aa67)",
      position: "absolute",
      borderRadius: "5px",
      bottom: "-10%",
      left: "25%",
      height: "30vh",
      textAlign: "center",
      display: {
        xs: "none",
        sm: "none",
        md: "block"
      }
    },
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1384,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      color: "#FFFFFF",
      fontSize: "18px",
      fontWeight: "bold"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1400,
      columnNumber: 13
    }
  }, "GET ALL HIGHLY REGARDED FEATURES OF VOlP INCLUDED IN YOUR MONTHLY PLAN,NO HIDDEN CHARGES"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonField, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1406,
      columnNumber: 13
    }
  }, "Try Now")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      marginTop: "15%",
      display: "flex",
      justifyContent: "center",
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1410,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1419,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1420,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Whattextstyle2, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1421,
      columnNumber: 13
    }
  }, "VOlP Features"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    style: {
      color: "#FF4D00",
      width: "10%",
      height: "2px",
      position: "relative",
      opacity: "inherit",
      left: "45%",
      transitionProperty: "width,left",
      transitionDuration: "1s",
      transitionTimingFunction: "linear"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1422,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      display: "block",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      paddingTop: "6%",
      paddingBottom: "6%",
      marginTop: "-5%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1436,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    style: {
      width: "100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1448,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1453,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Select, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1454,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1455,
      columnNumber: 19
    }
  }, "Automated Attendant"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1456,
      columnNumber: 19
    }
  }, "Black Lists"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1457,
      columnNumber: 19
    }
  }, "Bind Transfer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1458,
      columnNumber: 19
    }
  }, "Call Transfer"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1461,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Select, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1462,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1463,
      columnNumber: 19
    }
  }, "Call Waiting"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1464,
      columnNumber: 19
    }
  }, "Black Lists"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1465,
      columnNumber: 19
    }
  }, "Bind Transfer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1466,
      columnNumber: 19
    }
  }, "Call Transfer"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1469,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Select, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1470,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1471,
      columnNumber: 19
    }
  }, "Dial by Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1472,
      columnNumber: 19
    }
  }, "Black Lists"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1473,
      columnNumber: 19
    }
  }, "Bind Transfer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1474,
      columnNumber: 19
    }
  }, "Call Transfer"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 4,
    style: {
      marginTop: "3%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1477,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Select, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1478,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1479,
      columnNumber: 19
    }
  }, "Black Lists"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1480,
      columnNumber: 19
    }
  }, "Black Lists"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1481,
      columnNumber: 19
    }
  }, "Bind Transfer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1482,
      columnNumber: 19
    }
  }, "Call Transfer"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 4,
    style: {
      marginTop: "3%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1485,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Select, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1486,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1487,
      columnNumber: 19
    }
  }, "Caller ID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1488,
      columnNumber: 19
    }
  }, "Black Lists"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1489,
      columnNumber: 19
    }
  }, "Bind Transfer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1490,
      columnNumber: 19
    }
  }, "Call Transfer"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 4,
    style: {
      marginTop: "3%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1493,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Select, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1494,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1495,
      columnNumber: 19
    }
  }, "Distintive Ring"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1496,
      columnNumber: 19
    }
  }, "Black Lists"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1497,
      columnNumber: 19
    }
  }, "Bind Transfer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1498,
      columnNumber: 19
    }
  }, "Call Transfer"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 4,
    style: {
      marginTop: "3%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1501,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Select, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1502,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1503,
      columnNumber: 19
    }
  }, "Blind Transfer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1504,
      columnNumber: 19
    }
  }, "Black Lists"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1505,
      columnNumber: 19
    }
  }, "Bind Transfer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1506,
      columnNumber: 19
    }
  }, "Call Transfer"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 4,
    style: {
      marginTop: "3%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1509,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Select, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1510,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1511,
      columnNumber: 19
    }
  }, "Caller ID Blocking"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1512,
      columnNumber: 19
    }
  }, "Black Lists"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1513,
      columnNumber: 19
    }
  }, "Bind Transfer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1514,
      columnNumber: 19
    }
  }, "Call Transfer"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 4,
    style: {
      marginTop: "3%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1517,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Select, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1518,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1519,
      columnNumber: 19
    }
  }, "Visual Indicator for Messaging Waiting"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1520,
      columnNumber: 19
    }
  }, "Black Lists"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1521,
      columnNumber: 19
    }
  }, "Bind Transfer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1522,
      columnNumber: 19
    }
  }, "Call Transfer"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 4,
    style: {
      marginTop: "3%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1525,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Select, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1526,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1527,
      columnNumber: 19
    }
  }, "Call Detail Records"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1528,
      columnNumber: 19
    }
  }, "Black Lists"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1529,
      columnNumber: 19
    }
  }, "Bind Transfer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1530,
      columnNumber: 19
    }
  }, "Call Transfer"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 4,
    style: {
      marginTop: "3%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1533,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Select, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1534,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1535,
      columnNumber: 19
    }
  }, "Protocol Conversion"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1536,
      columnNumber: 19
    }
  }, "Black Lists"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1537,
      columnNumber: 19
    }
  }, "Bind Transfer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1538,
      columnNumber: 19
    }
  }, "Call Transfer"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 4,
    style: {
      marginTop: "3%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1541,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Select, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1542,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1543,
      columnNumber: 19
    }
  }, "Stutter Dialtone For Messaging Waiting"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1544,
      columnNumber: 19
    }
  }, "Black Lists"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1545,
      columnNumber: 19
    }
  }, "Bind Transfer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1546,
      columnNumber: 19
    }
  }, "Call Transfer"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      marginTop: "40px",
      minHeight: "40vh",
      backgroundColor: "#F2F2F2"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1553,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1564,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1565,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 5,
    style: {
      paddingBottom: "7%",
      paddingTop: "7%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1566,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    align: "left",
    sx: {},
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1573,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "span",
    sx: {
      fontSize: {
        xs: "13px",
        sm: "20px",
        md: "30px"
      },
      fontFamily: "Roboto",
      position: "relative",
      color: "black",
      "&:hover": {
        "& > hr": {
          width: "50% !important",
          position: "absolute"
        }
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1574,
      columnNumber: 17
    }
  }, "Why Choose FoxtelPBX", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Upgardeef, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1590,
      columnNumber: 19
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      marginTop: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1592,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "span",
    sx: {
      fontFamily: "sans-serif",
      fontSize: {
        xs: "13px",
        sm: "15px",
        md: "18px"
      },
      fontWeight: 200,
      color: "#60605f"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1598,
      columnNumber: 19
    }
  }, "FoxtelPBX is a business phone service provider powered by tomorrow automation.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      marginTop: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1611,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#FF4D00",
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1612,
      columnNumber: 19
    }
  }, "Checkout Our Price List"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-long-arrow-right",
    style: {
      color: "rgb(255, 77, 0)",
      fontSize: {
        xs: "13px",
        sm: "15px",
        md: "20px"
      },
      marginLeft: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1621,
      columnNumber: 19
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: 7,
    style: {
      display: "flex",
      paddingBottom: "7%",
      paddingTop: "7%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1632,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Card__WEBPACK_IMPORTED_MODULE_25__["default"], {
    sx: {
      width: "40%",
      "&:hover": {
        backgroundColor: "#F0FFF0",
        "& > div": {
          backgroundColor: "#FFFFFF"
        }
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1640,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_28__["CardActionArea"], {
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1651,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_27__["default"], {
    component: "img",
    height: "140",
    image: _img_Screenshot_15_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    sx: {
      width: "50%",
      height: "100%",
      marginLeft: "20%"
    },
    alt: "green",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1652,
      columnNumber: 19
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_26__["default"], {
    component: "div",
    sx: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1659,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    gutterBottom: true,
    sx: {
      color: "black",
      fontSize: {
        xs: "13px",
        sm: "15px",
        md: "20px"
      },
      fontFamily: "Roboto",
      fontWeight: "bold"
    },
    component: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1660,
      columnNumber: 21
    }
  }, "Advanced"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "span",
    sx: {
      color: "#5e5c5c",
      fontSize: {
        xs: "10px",
        sm: "13px",
        md: "15px"
      },
      fontFamily: "Roboto",
      fontWeight: "bold"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1672,
      columnNumber: 21
    }
  }, "Business Mobilitys")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Card__WEBPACK_IMPORTED_MODULE_25__["default"], {
    sx: {
      width: "40%",
      marginLeft: "5%",
      "&:hover": {
        backgroundColor: "#F0FFF0",
        "& > div": {
          backgroundColor: "#FFFFFF"
        }
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1686,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_28__["CardActionArea"], {
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1698,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_27__["default"], {
    component: "img",
    height: "140",
    image: _img_Screenshot_16_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    sx: {
      width: "50%",
      height: "100%",
      marginLeft: "20%"
    },
    alt: "green",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1699,
      columnNumber: 19
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_26__["default"], {
    component: "div",
    sx: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1706,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    gutterBottom: true,
    sx: {
      color: "black",
      fontSize: {
        xs: "13px",
        sm: "15px",
        md: "20px"
      },
      fontFamily: "Roboto",
      fontWeight: "bold"
    },
    component: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1707,
      columnNumber: 21
    }
  }, "All-Inclusive"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "span",
    sx: {
      color: "#5e5c5c",
      fontSize: {
        xs: "10px",
        sm: "13px",
        md: "15px"
      },
      fontFamily: "Roboto",
      fontWeight: "bold"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1719,
      columnNumber: 21
    }
  }, "Business Phone Features")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Card__WEBPACK_IMPORTED_MODULE_25__["default"], {
    sx: {
      width: "40%",
      marginLeft: "5%",
      "&:hover": {
        backgroundColor: "#F0FFF0",
        "& > div": {
          backgroundColor: "#FFFFFF"
        }
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1733,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_28__["CardActionArea"], {
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1745,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_27__["default"], {
    component: "img",
    height: "140",
    image: _img_Screenshot_17_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    sx: {
      width: "50%",
      height: "100%",
      marginLeft: "20%"
    },
    alt: "green",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1746,
      columnNumber: 19
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_26__["default"], {
    component: "div",
    sx: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1753,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    gutterBottom: true,
    sx: {
      color: "black",
      fontSize: {
        xs: "13px",
        sm: "15px",
        md: "20px"
      },
      fontFamily: "Roboto",
      fontWeight: "bold"
    },
    component: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1754,
      columnNumber: 21
    }
  }, "No Hidden"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "span",
    sx: {
      color: "#5e5c5c",
      fontSize: {
        xs: "10px",
        sm: "13px",
        md: "15px"
      },
      fontFamily: "Roboto",
      fontWeight: "bold"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1766,
      columnNumber: 21
    }
  }, "Charges")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      position: "relative"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1784,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "img",
    sx: {
      backgroundColor: " #fff",
      borderRadius: "10px",
      display: {
        xs: "none",
        sm: "none",
        md: "block"
      },
      position: "absolute",
      left: {
        sm: "29%",
        md: "9%"
      },
      height: {
        sm: "25vh",
        md: "47vh"
      },
      top: {
        sm: "174px",
        md: "98px"
      },
      width: "20%",
      boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
      zIndex: "3"
    },
    src: _img_Screenshot_18_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    alt: "avatar1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1785,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.howwecan,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1804,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1805,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    align: "center",
    sx: {
      paddingTop: "5%",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center"
    },
    component: "div",
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1806,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    className: "col-md-5",
    sx: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1817,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "img",
    sx: {
      backgroundColor: " #fff",
      display: {
        xs: "block",
        sm: "block",
        md: "none"
      },
      borderRadius: "10px",
      width: {
        xs: "30%",
        sm: "60%"
      },
      boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
      zIndex: "3"
    },
    src: _img_Screenshot_18_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    alt: "avatar1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1826,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    className: "col-md-7",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1841,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1842,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "p",
    sx: {
      fontSize: {
        xs: "13px",
        sm: "15px",
        md: "25px"
      },
      fontFamily: "Roboto",
      color: "white",
      textAlign: "left"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1843,
      columnNumber: 17
    }
  }, "Get your 30 day money-back guarantee No contact.No commitment"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "div",
    sx: {
      display: "flex",
      marginTop: "3%",
      marginBottom: "5%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1854,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_24__["default"], {
    direction: "row",
    spacing: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1858,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonField2, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1859,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      fontSize: {
        xs: "10px",
        sm: "20px",
        md: "20px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1860,
      columnNumber: 23
    }
  }, "REQUEST A QUOTE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonField2, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1870,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      fontSize: {
        xs: "10px",
        sm: "20px",
        md: "20px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1871,
      columnNumber: 23
    }
  }, "Live Support"))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.footerbaraboive,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1888,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1889,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      paddingTop: "10%",
      paddingBottom: "10%"
    },
    component: "div",
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1890,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      display: "grid",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "left"
    },
    component: "div",
    className: "col-md-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1898,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "black",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto",
      position: "relative"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1908,
      columnNumber: 15
    }
  }, "Support", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    style: {
      width: "50%",
      position: "absolute",
      top: "10px",
      color: "#FF4D00",
      height: "2px",
      opacity: "inherit"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1918,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto",
      marginTop: "20px"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1929,
      columnNumber: 15
    }
  }, "Open New"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1940,
      columnNumber: 15
    }
  }, "Ticket"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1950,
      columnNumber: 15
    }
  }, "Check Ticket"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1960,
      columnNumber: 15
    }
  }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1970,
      columnNumber: 15
    }
  }, "SMS Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1980,
      columnNumber: 15
    }
  }, "FAX Login")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      display: "grid",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "left"
    },
    component: "div",
    className: "col-md-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1991,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "black",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto",
      position: "relative"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2001,
      columnNumber: 15
    }
  }, "RESOURCES", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    style: {
      width: "38%",
      position: "absolute",
      top: "10px",
      color: "#FF4D00",
      height: "2px",
      opacity: "inherit"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2011,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto",
      marginTop: "20px"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2022,
      columnNumber: 15
    }
  }, "Blog"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2033,
      columnNumber: 15
    }
  }, "Videos"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2043,
      columnNumber: 15
    }
  }, "How Volp Works"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2053,
      columnNumber: 15
    }
  }, "Business SMS & MMS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2063,
      columnNumber: 15
    }
  }, "Chat"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2073,
      columnNumber: 15
    }
  }, "FAQ"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2083,
      columnNumber: 15
    }
  }, "Downloads")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      display: "grid",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "left"
    },
    component: "div",
    className: "col-md-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2094,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "black",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto",
      position: "relative"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2104,
      columnNumber: 15
    }
  }, "COMPANY", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    style: {
      width: "65%",
      position: "absolute",
      top: "10px",
      color: "#FF4D00",
      height: "2px",
      opacity: "inherit"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2114,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto",
      marginTop: "20px"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2125,
      columnNumber: 15
    }
  }, "About us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2136,
      columnNumber: 15
    }
  }, "Contact Us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2146,
      columnNumber: 15
    }
  }, "Privacy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2156,
      columnNumber: 15
    }
  }, "Terms OF Use"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2166,
      columnNumber: 15
    }
  }, "Press Release")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      display: "grid",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "left"
    },
    component: "div",
    className: "col-md-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2177,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "black",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto",
      position: "relative"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2187,
      columnNumber: 15
    }
  }, "PRODUCTS", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    style: {
      width: "34%",
      position: "absolute",
      top: "10px",
      color: "#FF4D00",
      height: "2px",
      opacity: "inherit"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2197,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto",
      marginTop: "20px"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2208,
      columnNumber: 15
    }
  }, "Business Phone Features"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2219,
      columnNumber: 15
    }
  }, "Business SMS & SMS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2229,
      columnNumber: 15
    }
  }, "Chat"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2239,
      columnNumber: 15
    }
  }, "Click To Call"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2249,
      columnNumber: 15
    }
  }, "Velantro Review Tool"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      color: "#767575",
      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "15px"
      },
      fontFamily: "Roboto"
    },
    component: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2259,
      columnNumber: 15
    }
  }, "IP Phones & Headsets"))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Product);

/***/ }),

/***/ "./src/img/1.png":
/*!***********************!*\
  !*** ./src/img/1.png ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAABwCAYAAAB/2LBGAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF+mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEwLTIyVDIxOjQ1OjMxKzA5OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTEwLTIyVDIxOjQ1OjMxKzA5OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMC0yMlQyMTo0NTozMSswOTowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDphZjQyNWRhYy1lMzhmLTMzNDItOTEzNy0zNjA4NzZkYmMxZDUiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDowZTNjMzZmNS0xMTMzLWExNDctODgxNC0xYTYwYzc2OTk4N2QiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5MWFjZDk1OC03YWRkLTA2NGUtODc3ZC0xNDE2MGVlYTBmNDciIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjkxYWNkOTU4LTdhZGQtMDY0ZS04NzdkLTE0MTYwZWVhMGY0NyIgc3RFdnQ6d2hlbj0iMjAyMS0xMC0yMlQyMTo0NTozMSswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphZjQyNWRhYy1lMzhmLTMzNDItOTEzNy0zNjA4NzZkYmMxZDUiIHN0RXZ0OndoZW49IjIwMjEtMTAtMjJUMjE6NDU6MzErMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7uh6P5AAAQ20lEQVR4nO3deZQcdYHA8W9dXX3Olbkzk8k5Q2BIJCGToBAgEsUYFUE848q6y2bf010RlvW96LIo+nTFgCuPP3BdUROXjXIoRCSwSBQlyQwJ5E4nmWQy9913V3d1HftHTRABSVyOqYXf5728F2Yq3b+u+tbvV9X0m5Fc10UQ/ESe7gEIwkuJKAXfEVEKviOiFHxHRCn4johS8B0RpeA76pk2MAyj2nGcyJsxGOGtS9O04UAgUDybbc8YJYDjOPprG5LwdidJknO2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"

/***/ }),

/***/ "./src/img/2.png":
/*!***********************!*\
  !*** ./src/img/2.png ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAABwCAYAAAB/2LBGAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF+mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEwLTIyVDIxOjQ2OjEzKzA5OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTEwLTIyVDIxOjQ2OjEzKzA5OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMC0yMlQyMTo0NjoxMyswOTowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1MTYwYmI2My0wMjQ3LTQwNDktYmE0Ny1iMDEzMjZhMTNhODYiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo1OWIwYTUzZS0wNzI3LWFmNDMtYjFhYy1iOWZkZjViNzUyMjQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0OGFmMzk2My1iMzQ2LTg1NDUtYmU4Ni03OWRiODQ1NDgyNWMiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjQ4YWYzOTYzLWIzNDYtODU0NS1iZTg2LTc5ZGI4NDU0ODI1YyIgc3RFdnQ6d2hlbj0iMjAyMS0xMC0yMlQyMTo0NjoxMyswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1MTYwYmI2My0wMjQ3LTQwNDktYmE0Ny1iMDEzMjZhMTNhODYiIHN0RXZ0OndoZW49IjIwMjEtMTAtMjJUMjE6NDY6MTMrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6AIZiRAAARuklEQVR4nO3deXQV9aHA8e9vZu5+b/aQxLBctiRsEUQQiEDdEC2ulKe20tpXt5ZatbRWfWo91ae2lb5ja23F9tUqrSIVRVAC1ELYxI0linDDEgghITu5N3e/M7/3R4RSlSN9Vpi2v0/+m3Pv+c3c+eY3c2fmJEJKiaLYiXaqV0BRPkpFqdiOilKxHRWlYjsqSsV2VJSK7agoFdtRUSq2o6JUbEdFqdiOcSIvikajAz7vFVH+9Xk8ngZN0z71vvYJRWlZluuzr5Ly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"

/***/ }),

/***/ "./src/img/3.png":
/*!***********************!*\
  !*** ./src/img/3.png ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/3.efb2d242.png";

/***/ }),

/***/ "./src/img/4.png":
/*!***********************!*\
  !*** ./src/img/4.png ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAABwCAYAAAB/2LBGAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF+mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEwLTIyVDIxOjQ3OjAzKzA5OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTEwLTIyVDIxOjQ3OjAzKzA5OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMC0yMlQyMTo0NzowMyswOTowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpmZWQ1MzQ1Ni05YjZkLWI2NGEtYWI5Ny01Yjc0NmFjOWUxNGQiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDphN2QxODI0Ni1mNmY5LTQyNDctYmNmZS0yNjFhNGQ5NzgzNWUiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmMTI0MDM2Ni04YmMzLWU4NDQtYmVlMi1iN2VhYWJhYjAwYjYiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmYxMjQwMzY2LThiYzMtZTg0NC1iZWUyLWI3ZWFhYmFiMDBiNiIgc3RFdnQ6d2hlbj0iMjAyMS0xMC0yMlQyMTo0NzowMyswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmZWQ1MzQ1Ni05YjZkLWI2NGEtYWI5Ny01Yjc0NmFjOWUxNGQiIHN0RXZ0OndoZW49IjIwMjEtMTAtMjJUMjE6NDc6MDMrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7q2d1/AAAbaElEQVR4nO3deVxU5cIH8N9zzpl9YGZgYFjFhV1AUMEFQxQJNMsrLqWiRabkvS5dqW5l3Zfb8mZ2rddcumZmpi1m2oKZpiVqmokrgqyyCMi+DMPsZ855/1B6ub3W5S7KKOf7B/BhnvPMc87n93nOPGee8xzC8zwEAmdC9XUDBIJfEkIpcDpCKAVORwilwOkIoRQ4HSGUAqcjhFLgdIRQCpyOEEqB0xFCKXA6TG8LWiwWlcPhUN/Ctgj6AYZhWiQSifE3y/wzFXIc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"

/***/ }),

/***/ "./src/img/5.png":
/*!***********************!*\
  !*** ./src/img/5.png ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAABwCAYAAAB/2LBGAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF+mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEwLTIyVDIxOjQ3OjM2KzA5OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTEwLTIyVDIxOjQ3OjM2KzA5OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMC0yMlQyMTo0NzozNiswOTowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxNjYwNWUwOC1iZTAwLTM3NDEtYWMzMC05YWU0ZTdmNWM3NGIiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpjN2YyOGU5Ni1iZDUyLTVkNGUtODU4MC0xYWJjOWRjMWQzYTciIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2YWI1ZmFkOS03NzBjLWMyNDAtOGQ0OC0zYTU1YzRmMjQwZmUiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjZhYjVmYWQ5LTc3MGMtYzI0MC04ZDQ4LTNhNTVjNGYyNDBmZSIgc3RFdnQ6d2hlbj0iMjAyMS0xMC0yMlQyMTo0NzozNiswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxNjYwNWUwOC1iZTAwLTM3NDEtYWMzMC05YWU0ZTdmNWM3NGIiIHN0RXZ0OndoZW49IjIwMjEtMTAtMjJUMjE6NDc6MzYrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7P5D4IAAAZCklEQVR4nO2deVxU1/33P/fOyjIgqwNuMwKOCAUxAiYaBUmiMdU8LvFxocZUq4nxMWmMio0vpbUuicFXY/prRWO01JZEbUoCPgGDNtJoVIisAsMgEJYZhmFYdBZmuXOfP3QmbFqzINen5/16+XrJveeec+7lPWf5nnMZimVZEAhcgh7uChAI/SFSEjgHkZLAOYiUBM5BpCRwDiIlgXMQKQmcg0hJ4BxESgLnIFISOAf/QRIZDIYJFEVZhroyhP+/cXNza6Rp+j+u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"

/***/ }),

/***/ "./src/img/Screenshot_11.png":
/*!***********************************!*\
  !*** ./src/img/Screenshot_11.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFHGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEwLTIyVDAyOjAzOjM3KzAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMC0yMlQwMjowODo0OCswMzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0xMC0yMlQwMjowODo0OCswMzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyYzNiMmVhZS1iNjU1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"

/***/ }),

/***/ "./src/img/Screenshot_12.png":
/*!***********************************!*\
  !*** ./src/img/Screenshot_12.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFHGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEwLTIyVDAyOjAzOjM4KzAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMC0yMlQwMjowNzo1MyswMzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0xMC0yMlQwMjowNzo1MyswMzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZjAxNWVlYy00MDA4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"

/***/ }),

/***/ "./src/img/Screenshot_13.png":
/*!***********************************!*\
  !*** ./src/img/Screenshot_13.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAABJCAYAAABxcwvcAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFHGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEwLTIyVDAyOjAzOjM2KzAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMC0yMlQwMjowNzowOSswMzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0xMC0yMlQwMjowNzowOSswMzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpkODMzYmEyYy1hMmFk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"

/***/ }),

/***/ "./src/img/Screenshot_15.png":
/*!***********************************!*\
  !*** ./src/img/Screenshot_15.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAACBCAYAAAAPDK4+AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAGvGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEwLTI2VDA3OjQ4OjQwKzA5OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMC0yNlQwNzo1MDo0NSswOTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0xMC0yNlQwNzo1MDo0NSswOTowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5YjUyMzMyNS04ODExLTc3NGEtOGQwMi1jNTZhMTVkYzk1OGUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6YWViMWRjMWUtMDEwYy00MzRkLWIxNDQtNWU2YWIwYjE3Mzc5IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6YWViMWRjMWUtMDEwYy00MzRkLWIxNDQtNWU2YWIwYjE3Mzc5Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphZWIxZGMxZS0wMTBjLTQzNGQtYjE0NC01ZTZhYjBiMTczNzkiIHN0RXZ0OndoZW49IjIwMjEtMTAtMjZUMDc6NDg6NDArMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZmE0MDNlNmMtYTE3My1jODQyLTgzYjAtMjAyZTZkM2FhNTgwIiBzdEV2dDp3aGVuPSIyMDIxLTEwLTI2VDA3OjQ5OjQ0KzA5OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjliNTIzMzI1LTg4MTEtNzc0YS04ZDAyLWM1NmExNWRjOTU4ZSIgc3RFdnQ6d2hlbj0iMjAyMS0xMC0yNlQwNzo1MDo0NSswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ptfq9bUAABF8SURBVHic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"

/***/ }),

/***/ "./src/img/Screenshot_16.png":
/*!***********************************!*\
  !*** ./src/img/Screenshot_16.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAABwCAYAAADbsgiVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF7GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEwLTI2VDA3OjUxOjE5KzA5OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMC0yNlQwODowMzo1MSswOTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0xMC0yNlQwODowMzo1MSswOTowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1MjdlZGMxNi1lN2E0LWViNDAtYmI3Mi04N2MyNjhhYzE5YzgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ZGZiMjVmNWQtNzY5Yi1hMjQwLWI0NTgtYWUzMDdhN2EzZjA0IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZGZiMjVmNWQtNzY5Yi1hMjQwLWI0NTgtYWUzMDdhN2EzZjA0Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpkZmIyNWY1ZC03NjliLWEyNDAtYjQ1OC1hZTMwN2E3YTNmMDQiIHN0RXZ0OndoZW49IjIwMjEtMTAtMjZUMDc6NTE6MTkrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NTI3ZWRjMTYtZTdhNC1lYjQwLWJiNzItODdjMjY4YWMxOWM4IiBzdEV2dDp3aGVuPSIyMDIxLTEwLTI2VDA4OjAzOjUxKzA5OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+VlGHngAADhBJREFUeJztnXuMVcUdxz/n8lhA4KKB3QVZVlleCrtLixYBKz4otOofWh8NJWnt+6WJ1WqaxqT/aKo1NU1q08bYmGqsr9hWaqsY2kZEkFqUl8gbWVDYJUVWWN0F7jn9Y2bO+Z25s/jAfczNfJN7zzkzc849s/M9v/m9zmyUJAkBATYKfX0DAf0TgRgBTgRiBDgRiBHgRCBGgBOBGAFOBGIEOBGIEeBEIEaAE4EYAU4EYgQ4EYgR4EQgRoATgRgBTgRiBDgRiBHgRCBGgBOBGAFOBGIEOBGIEeBEIEaAE4EYAU4EYgQ4EYgR4EQgRoATA/v6Bk4Ja55KiCK1X/ZGXXKSw8TZpNtzTVFknTt3cfSR79UzRB6/otg/bnzTP2HGZRVHED+J0fV+QtUwWPMU7N1E9xzRj7npY2SadicxEve+629UrIVLvg1Vp8Hzv4Yv3lxR5PBzKqkaBuv+Aasf1QVm8MUARuIwSdRx1XAo1sCB7TB0JIyeSEqe9v3qY06K9DVzpIj19fTXB0fg6jtgzNk91NG+g5/EAOjq0IMH6ksOaJyOoSpDDfCim6Hhc/Dwj2HeYrUvr/eba7PjWF7A7BfUtUnU73QdVcXVEz/VrvUH+EsMM9i2mE8SITisqeS1pdDeBge3wY41MHhYdt6+Tflr5JTaAoocghQezsAfB37qGJCw+UXY/C/K9AJzGFnTi7EqXNaJ69hMP7I4saaZ6ga49DuwdyPUNVaUjuEvMfoTKpAY/k4lRw6qaeFjQUuUbn0f3ZzTHapOq0j9AnwmxuZ/w+o/ZYNrWyVGT0ikEukwU82UIU1aEMqnNQfFCRQita3/LCz+5afXp34Ef4khlcrqiXDlz6A4prxZ+0F45k44uCOzYKTEkKQATSQdKYgiGDgYEk2MUgmiEjkrqELhMTHEwDTMcZMCVPml34XHb9MFkXsKKQyAM8bDqPFwxpnQ2QGFApw9C451Qm0D7N8GW1bC9pfKbqHS4C8xErLpw4j/J++Afeuz6aNuJlx/F4yfDrOugbVPawmhJUCSQHEczLoKaifBgEEwul6RJIrgxDFo3QVxCYadDlPmweS5MPjnsGk5HG7tg473DvwlBlD2yE5fAHWNWd3IGrXbfhB2riJVPhOgOBbmLoEZl6k2peNwaB/sXAN7NsC7LUBBKZjH34fn74Mp86HhPJjQDDMW9EoP+wp+E8PoCubJnX6xu91rz8Dhd7Lj866BuYvVoHd1wNql8MZyONqmpAQJlITSWtASZt0z8Ppf1e82XQ6NCxUR6xph++qEyXMqxmT114/xyhMqVhKXVMmkCy3TUfervRXeWKamjaoRcPmt0DBb1a16DP77Z+hq7yZsH2nrRFglSQxRIZuu6s+HK34CxWpFsqrTKoIcHhPjSVj1iGWOqiqlYJoB1WVVI+Ar90D12dC2G567D9q2Q1Iqv3pqklrXtn/L/O2GjoQFNyoJouA9OTzO4DJ+B9EFEydJpO/BQYrHb9OkEAMdad8EZH6KdHwjcmMdFTI/SQR0vgd/uwv+fq91c/7CY2KQDazMrErHTzi+Lr81T4pjR7MoqYHRKWKjnSaCODJ6SyZlDAHNdv2z8KwmR1eH1+TwlxhpYCvOxs12VgGcd63SKdp2w+O3q6c7LmkC2VEyDSM5UkeYPV0J6SHJk8Sw4Vl49S9KsW3d6S05/CVGCktSRNJHMVZZH6B0iq4jWZucC12qBFq/KAvnx6osTrJ2uTpBnmW/gpb1UNMAK/7oJTk8JoYR92bfFIlxmLNEPbmrHju5omkPtplO0gEX5DPEi7rRLxMtjZbeo45nX+tu18/hMTFEsoxM2DHkKI5TzquuDnj1aWGlJJniaKwPAyMpUt2lIH4ryRMvQZHADtIZQXS4BTYsU8T0UGp4TAwJqSvoMZh1ldquXaqUTVNvnvSSpTeYJC0JM+hp0o6RJOJ3Zi+BYh2Z9BK3tOIh3cY/qeExMaT4tx7IKIJJF6j9jcv0FCKsFCkp4kSTQkuKKMokRS510Jo6khjOOh8WfB8uusGtrhzeC1tfVlLDM3hMDISgsJ7ikbXKE9m2C9rfzp9g9InY6A5JnhS2ImmCdOkUouvnfw8W/EiVTZ0HX/stDC2K0/Q1t61Ux/952qvpxG9iJACRMCsBYqhrUsd7N1qNLZ1CInVzO6RPdvEMNQ3qA0oi1ExSrydAXsnd85puP+mj9amfwG9ipJaD0R10kk2xVlW37cqaGiGQOrAsX0QqJewXlJK8Qmrw5O3w6C1qf+squHchHN6n70X8Wd9tUdv65lPsa+/CX2LYgjm1GmKom6HK2nXUNZ0+HPqItEAMCSJBDrutnL72b4EVD8PKh05+o3vWf+Ru9Rf4SwxpdgKpSIisLsXdTO05U1NLhKmXwHW/ULGVCGi6Aq67O2s3+6vwhVtIrZvO92DFA7B/MyljjPRxTUsewWNiaBiHUiKOT9reYWmYw5oGmDwHRo1VbaZcqI5Pr1P19c3QtFBeTP+2JkF3Pg0P4XeiDgAFZWG44iQpHOUypwJ97ooH4aUHs7Knfgojz4T2veoaS+9S0kRaQCY0nwu4gbqhUrkE8wR+3rVBol8blIZGnGRKZ44oVjxE7kvLI+dFjTUp9PkftEP7vrw7/GSucXMNowx7BL+JERXybmpQ5mhXh9qvbyLnCDO+CtA6hvRWakulW6EjHGRlrxuIayR2GTCqxrvEYb+JIV8yhkzRNFZAtfYz2E4rkz8hLQy1o64plcccESxCpFaKMIHTKK/+0541R20P7Di1rvYy/CaGTJSRiTZ716r9usbypzcpibUvIFUgwf30mywt6VK3SRaZDC9RZ7ZTP6+2e14/1d72KvwmBijlL2eSahf3xuXKI9l8Zb5OLrKSi71Z2WCpkIgzAkova3oi2qXuskqSjBiLbvQqD9R/YhgXt3R1JwlsfEHtNy4kmxKw9AMsf4NoZ/Iu8o1Js8QleayU0LT5zC8r/WLLylPtZa/DY2KIpzVN3jX6QAIta9Xb8HWNUDNNTwkiQRjy1odM9knrHBFVuY3sOqGTRMD8b6q6aRd6JS3Aa2LgdnVLUT9Eh7sPbFHbssGW3lLx2Ke7kjhkksJ2Xsk4i8H8HyppsWfdJ+lZn8NvYgBOCRAVYNQ4pWOU+TTE9JDmXVgOMnvKMW1MFlgCuawemb8BUHsuzP+G2q+f6Z20AJ+JYccipFs6iaF6sipv3UmmaAo/Qy6eISwUW0rY04ZcgsmYtnEpI8XQUeodFoBl93+KHe5d+OsSz+mFMkKq983rinu1T8OVy5kOvvkSCqe5VlRQJm6qaEbk4jEykDe4CF//HYyqhfXPeWeJSPhLjPhEflDsAZygk3UOmAVTdK5GlpiRn15yoXZhfaTTh2zjSBCtnQ7X3630ivXPQfOXvCUF+EqM+IRa2iC1QsgG0OgKhhj73yRbftFIiFLeJC0zYyUpZHlCGSGiAsz/Acy/QR1XACnAV2JEA2DwYHFc0G+X6fGonaoGtWVj3roAldFdOwmqJ8FZzSqGseIPOvtK6BNpEEz+LmSLwALNV8PF34KRo1XDZffDopu8JwX4Sgw7VT8XHIuVRXKsE947AA1zYdw5UDtZ6R3FmvylJqByLLa+rBJ331qr3gkx+obUKRJg4hyYcpFaWedoGwwdDu9sgTPPjVh0U4/3vLfgJzGiCKqK+bI0R0IPZNUwaFwE51wKAwdl7Vp3qk/bTjiwDSbMVO99TJ2nPgZ2Ol6xVukPBp2H4YVH4Jo78yStEPhJDCIYJG9d+qaB3a/CEz+DsZOV9GhvVY6m1q0qp0Iqm7tfgRd/D9Mug/rPqGzu+mZ38u7hVqXM7nkdNi9X0duBQ2Dw0J7tbh/AU2JouJZjJFKLv+94SX1cMQ2jbEqH2Jbl8OZykaqHCJm/CR+8m5+uABrOhxNd2WLzFQS/iQGUBcWQOZ+2LpJ+CW8nmQ6RujG0n+Ot1YI8duZ4ATr+B8c7lTJcYfDX8wlkTilI0/wMImubtreQkkGatCZlsFAeNU09oCVlMg8aotYDrTB43iPhh8ghKW9W5j4n84Cn9XZST5xJGSlhzMljJkJhoJpOKgyeE4OTBLTMx3aCmXbpyUIHKaD8FNIjauqi7H3XJFaEqJumpEXZijv+w19iJInWDayQuFy6wDV1pME2yESADKqJ82VyjySXcb/vWqfXF/dfVbPhcY+S/DsbRuxHYhBlnYF0ddvSBvLSQp4riZaU1GnvH+FDX3DyFP4So1ir1qfobu1NuZxjbp+sXuaKOheAdV1XYEKjKj925OPffz+Hv8RoWmi9LtjbKMH+HeTWB60g+EuMlg3Km/lhFokst1Iusvaut9Rc+onYj48rBbRYDcOK5W09h9/EePEBUeAwR3NwWCZplczDMO5ySy8plfJpGIOHwgVLoHRCBeuY8Ul70i/hLzHKUu5EXWqyOkLnpj4WSqPMyyj7d1lkpCCCQqLM1hFjYMRo6DgEh96m0uAxMRDTguNJj/RXmuUlfBa5ML1l4uZeWNZmaSopSqQWfum4ajuiGoaP7rl+9hH89WM0LYLieH0QlT/p8m0zM/iJ7aPQbeyUPoNSKfOQF9Cub11fNQyGDIeDu+CMcT3Wzb6Cn/+WYuuqhKlz+/YejnXCgAEqzbB1O4xvqojMLQM/JcbUuRErHu7bpQUKBZXbcagFdr7Sd/fRQ/BTYgT0OPyUGAE9jkCMACcCMQKcCMQIcCIQI8CJQIwAJwIxApwIxAhwIhAjwIlAjAAnAjECnAjECHAiECPAiUCMACcCMQKcCMQIcCIQI8CJQIwAJwIxApwIxAhw4v8qyY4dOzOqlwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/img/Screenshot_17.png":
/*!***********************************!*\
  !*** ./src/img/Screenshot_17.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB1CAYAAABj0+5IAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFHGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEwLTI2VDA4OjA0OjIzKzA5OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMC0yNlQwODowNDozOSswOTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0xMC0yNlQwODowNDozOSswOTowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2YTAxMjAxOC02ZTIy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"

/***/ }),

/***/ "./src/img/Screenshot_18.png":
/*!***********************************!*\
  !*** ./src/img/Screenshot_18.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Screenshot_18.cae0b5ec.png";

/***/ }),

/***/ "./src/img/antoine-barres.jpg":
/*!************************************!*\
  !*** ./src/img/antoine-barres.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/antoine-barres.dfbf459c.jpg";

/***/ }),

/***/ "./src/img/arraw.png":
/*!***************************!*\
  !*** ./src/img/arraw.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN4AAADjCAYAAADqg6rEAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAAa8aVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMTAtMjJUMDk6MDM6MjErMDk6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTEwLTIyVDA5OjQ2OjAyKzA5OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTEwLTIyVDA5OjQ2OjAyKzA5OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMiIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmM5ODRhZGUzLTUzNjktMzI0NS05MjZmLTkzNmM1Y2YyZWM0OCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowZmRiN2E0ZC1hNGE5LTJhNDItODExMi04YTg5NTdhZDg2YTMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowZmRiN2E0ZC1hNGE5LTJhNDItODExMi04YTg5NTdhZDg2YTMiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjBmZGI3YTRkLWE0YTktMmE0Mi04MTEyLThhODk1N2FkODZhMyIgc3RFdnQ6d2hlbj0iMjAyMS0xMC0yMlQwOTowMzoyMSswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpkNjU4ZDcxYS1iNDMwLWExNGEtOTk3Mi1lZjA4ZDMxNmJkOGIiIHN0RXZ0OndoZW49IjIwMjEtMTAtMjJUMDk6MzY6MTQrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6Yzk4NGFkZTMtNTM2OS0zMjQ1LTkyNmYtOTM2YzVjZjJlYzQ4IiBzdEV2dDp3aGVuPSIyMDIxLTEwLTIyVDA5OjQ2OjAyKzA5OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+iKPXwQAABXVJREFUeF7t3TFrVWccx/GjEESUvATBxa0d2heQ7i1dIjgIdewL6NilL8AOHTuayQvepTR77+DqIgjt0KzOIog4WJ/raaISJTE59/c8z/l8QM7zJOFcDPnyP/dcb7zw+o0B2KiL4xHYIOFBgPAgQHgQIDwIEB4ECA8ChAcBwoMA4UGA8CBAeBAgPAgQHgQIDwKEBwHCgwDhQYDwIEB4ECA8CBAeBAgPAoQHAcKDAOFBgPAgQHgQIDwIEB4ECA8ChAcBwoMA4UGA8CBAeBAgPAgQHgQIDwKEBwHCgwDhQYDwIEB4ECA8CBAeBAgPAoQHAcKDAOFBgPAgQHgQIDwIEB4ECA8ChAcBwoMA4UGA8CBAeBAgPAgQHgQIDwKEBwHCgwDh0YxHjx4Nw/cX3vuzXC7Hz7blwus3xjVUabVaDTu/fjPujre882DY3d0dd/UTHlXb29sbfnhwZ9ydwB9t/DgLj2qVS8uvfvl63J1CA/EJj3qV53Gfq/L43FyhSg8fPhxXn+ks0W6AiUedziucSiefiUffKp18wqN/FcYnPOahsviER5X2bt4bV+eoovjcXKFeU4VSwQ0XE49qTTL1igomn4lH3aaMJDj5TDzqNmUcwcknPOrXYXzCow2dxSc82tFRfMKjLZ3EJzza00F8wqNNjccnPNrVcHzCo22Nxic82tdgfMKjD43FJzz60VB8wqMvjcQnPPrTQHzCo0+Vxyc8+lVxfMKjb5XGJzz6V2F8wmMeKotPeMxHRfEJj3mpJD7hMT8VxCc85ikcn/CYr2B8wmPeQvF98jdJHxwcDM+fP1+vX716Nbx48WK9ftf29va4OvLs2bNxdeTy5cvD1tbWuHtrinMWNT7+cees8fHT39NiU9+r/89ZPvdZ/9f6SR0T9/HhneLuDHACH8T33qXm48ePRQdT+KCrw/BKdF/8/OW4A87dO/Edhic6mN7+/v76uA5vsVisN8C0vv39u/Xx7c0Vz+tgYw5++9freLBpT548GS6W1+qAzbp4/fr1cQlswtWrV11qwqZdu3ZNeLBp5SrzbXhT/kNR4NDi9v318XDirX76a1wBU7l169b6eBjezs7OsP/jn+MOOHfvXFl6dwJswgdP5z75frzVajU8ffp03A3Dy5cvx9WRS5cujasjJ/264iznLFp+/B7/TsUUj1+c5byfOueVK1eG3Xs3x49M4MTvx4M5mfIK7yM3Lr2cwLwFoiuEx3yFoiuExzwFoyuEx/yEoyuEx7xUEF0hPOajkugK4TEPFUVXCI/+VRZdITz6VmF0hfDoV6XRFcKjTxVHVwiP/lQeXSE8+tJAdIXw6Ecj0RXCow8NRVcIj/Y1Fl0hPNrWYHSF8GhXo9EVwqNNDUdXCI/2NB5dITza0kF0hfBoRyfRFcKjDR1FVwiP+nUWXSE86tZhdIXwqNZyuRxXEwhGV/gV7tRrqmkXjq4w8ajSYrEYV+esgugKE486TTHtKomuMPGYh4qiK4RH/yqLrhAefaswukJ4VGl558G4OoNKoyvcXKFeZ7nBUnF0hYlHtRa374+rU6o8usLEo26nnXoNRFeYeNTtNCE1El1h4tGOj0y/f+7+Pdy4cWPctUF4EOBSEwKEBwHCgwDhQYDwIEB4ECA8CBAeBAgPAoQHAcKDAOFBgPAgQHgQIDwIEB4ECA8ChAcBwoMA4UGA8CBAeBAgPAgQHgQIDwKEBwHCgwDhQYDwIEB4ECA8CBAeBAgPAoQHAcKDAOFBgPAgQHgQIDwIEB4ECA8ChAcBwoMA4UGA8CBAeBAgPAgQHgQIDwKEBwHCgwDhQYDwIEB4ECA8CBAeBAgPAoQHAcKDAOFBgPAgQHgQIDwIEB4ECA82bhj+A94mtn74IzzGAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/img/avatar1.png":
/*!*****************************!*\
  !*** ./src/img/avatar1.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABCCAYAAAD5aOBmAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF62lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEwLTI3VDAyOjU3KzA5OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTEwLTI3VDAyOjU3KzA5OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMC0yN1QwMjo1NyswOTowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpmZjYwMGUyMS0zYmJmLWRhNDktYTU4Yy1lMWRhOWE3NzY3ZjkiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo5YmU1ZTE5NS01YzFmLWRiNDEtYmU0Zi00ZjVjNmJiOGIyOGQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjZjg0Mjg1MS1hZTViLTVjNDktODRlZi03NWM5YjQxZTgzMjIiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmNmODQyODUxLWFlNWItNWM0OS04NGVmLTc1YzliNDFlODMyMiIgc3RFdnQ6d2hlbj0iMjAyMS0xMC0yN1QwMjo1NyswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmZjYwMGUyMS0zYmJmLWRhNDktYTU4Yy1lMWRhOWE3NzY3ZjkiIHN0RXZ0OndoZW49IjIwMjEtMTAtMjdUMDI6NTcrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7EzbeQAAAPaUlEQVR4nO2ceXBd1X3HP+fc+/ZFq7V4wQu25H1RHcAGZLAbmxoMhEAoATyTaUsnJKWTZsIfmaRQkmYyk0kyHaadpoVOSJOGQskwEwrFUJPEkGJsvIEXebdk2ZJsS3qS3tNb7j2nf9wnvUVPlnjvyQ4z/s48zb3n3HvO73zv7/x+v7NJaK25hk8OebUF+LTiGnFF4hpxReIacUXiGnFFwrzaAkwaVspo2/GuteeNN4gNDtGyaROr7tg0F6/39NUQR3wawpHeY8faXvnBD5ra9+9H2AoEuH1+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"

/***/ }),

/***/ "./src/img/avatar2.png":
/*!*****************************!*\
  !*** ./src/img/avatar2.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABCCAYAAAD5aOBmAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF+mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEwLTI3VDAyOjU2OjE1KzA5OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTEwLTI3VDAyOjU2OjE1KzA5OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMC0yN1QwMjo1NjoxNSswOTowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpjNjZkYWExOS1kNGRlLWEyNGYtYjE1MS0zODc3ODljM2Q2YTMiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo3NTYwMjZlOS05NjFjLTY4NDItOWY0Mi1iYzBmNmRiOGQyNTIiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjZjg0MWMyMS04NDc1LTk0NDctYWI4NS1kNjI2MWQxZWJjNTIiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmNmODQxYzIxLTg0NzUtOTQ0Ny1hYjg1LWQ2MjYxZDFlYmM1MiIgc3RFdnQ6d2hlbj0iMjAyMS0xMC0yN1QwMjo1NjoxNSswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpjNjZkYWExOS1kNGRlLWEyNGYtYjE1MS0zODc3ODljM2Q2YTMiIHN0RXZ0OndoZW49IjIwMjEtMTAtMjdUMDI6NTY6MTUrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6DJQrEAAANmUlEQVR4nO2ceZAc1X3HP+91z8zOzO7sodlh70NCt2QhpGAQmCOygi0oK9hgmeBUyknFCUUq4LKdhL8MhqpUUnH4SynbCYHCikPAio9wGGwk0GGBhIS0Qiuha2/tfc/d0/3yR8+sZi/tzrFaXKWvamq2u+e993vf97ve0RJKKa4jc8jFFuD3FdeJyxLXicsS14nLEp9O4pSloSxtscW4GvTFFgDL0pRQCCP4EOHO/2boPAxexIoHke4A+G8E/8ow7oq1CGfrYoub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"

/***/ }),

/***/ "./src/img/avatar3.png":
/*!*****************************!*\
  !*** ./src/img/avatar3.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABCCAYAAAD5aOBmAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF+mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEwLTI3VDAyOjU4OjEzKzA5OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTEwLTI3VDAyOjU4OjEzKzA5OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMC0yN1QwMjo1ODoxMyswOTowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpjNDAxNmZkZS0zOGUwLTk0NDMtYWFlYi1lZWI2NWI2ZDVmNzEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4N2NiOTk4My1lYTBkLWQyNGQtYmFiYS01OGYxODc1M2Y5N2EiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5NGJiMDRhOS0xMmY4LTNmNGYtYTVkYS0xOWE5Yjg0YzEyZjMiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjk0YmIwNGE5LTEyZjgtM2Y0Zi1hNWRhLTE5YTliODRjMTJmMyIgc3RFdnQ6d2hlbj0iMjAyMS0xMC0yN1QwMjo1ODoxMyswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpjNDAxNmZkZS0zOGUwLTk0NDMtYWFlYi1lZWI2NWI2ZDVmNzEiIHN0RXZ0OndoZW49IjIwMjEtMTAtMjdUMDI6NTg6MTMrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6qY+oNAAAN8klEQVR4nO2ce3DU13XHP/f326ek1VvalQQICYk3MhhDeARMbMfFdlw7CSkGe0ynSY07TTNtSJpppi3Yk07sCe0kbt3Unrr4kRhm2tRDeVjECU8bmZcRhJcQD2HQCyTQa1er3f3d2z92V1pJK2m1uxLJDN8/JO3vd+7de76/c88599z7k1BKcQ+jh3a3B/CHinvExYl7xMWJe8TFiXvExQnT3R6AkobuudP+SFdH28uejo6FUiosVos3My/vW47s7G3oJuNujzEa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"

/***/ }),

/***/ "./src/img/backgrodunprocing.jpg":
/*!***************************************!*\
  !*** ./src/img/backgrodunprocing.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./src/img/chatting.png":
/*!******************************!*\
  !*** ./src/img/chatting.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/chatting.20365c0a.png";

/***/ }),

/***/ "./src/img/phone1.png":
/*!****************************!*\
  !*** ./src/img/phone1.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/phone1.bd1432ab.png";

/***/ }),

/***/ "./src/img/phone2.png":
/*!****************************!*\
  !*** ./src/img/phone2.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/phone2.09ddbc83.png";

/***/ }),

/***/ "./src/img/phone3.png":
/*!****************************!*\
  !*** ./src/img/phone3.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/phone3.1fc791bf.png";

/***/ }),

/***/ "./src/img/phone4.png":
/*!****************************!*\
  !*** ./src/img/phone4.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/phone4.a199289a.png";

/***/ }),

/***/ "./src/img/phone5.png":
/*!****************************!*\
  !*** ./src/img/phone5.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/phone5.01bd96b9.png";

/***/ }),

/***/ "./src/img/phone6.png":
/*!****************************!*\
  !*** ./src/img/phone6.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/phone6.83111893.png";

/***/ }),

/***/ "./src/img/pricing1.png":
/*!******************************!*\
  !*** ./src/img/pricing1.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBCAYAAADnoNlQAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF+mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEwLTI5VDA3OjQ4OjA5KzA5OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTEwLTI5VDA3OjQ4OjA5KzA5OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMC0yOVQwNzo0ODowOSswOTowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxMGI4ZTliYy0xYjk1LWYzNGQtOTY2OS0xMGRjOTFmNDgzZWQiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpjMmE2MWUyYS00M2IwLWU5NGYtYTM4NS05ZDQxYWZmZmMzYmQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxZjc4NWIzYS1iMDlmLTAzNDMtYjhmYy01NGM0MmNjODMyODUiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjFmNzg1YjNhLWIwOWYtMDM0My1iOGZjLTU0YzQyY2M4MzI4NSIgc3RFdnQ6d2hlbj0iMjAyMS0xMC0yOVQwNzo0ODowOSswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMGI4ZTliYy0xYjk1LWYzNGQtOTY2OS0xMGRjOTFmNDgzZWQiIHN0RXZ0OndoZW49IjIwMjEtMTAtMjlUMDc6NDg6MDkrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7Of7C5AAAdN0lEQVR4nO19TaxkSXbW9524mfn+36uq7rYGYblbIEvQyPYsGFjMgh4bNkhIgGRYtCUQSCDA3rEwDV4MNkgwO4OEN7AwLAxiZ0CyDL2ZDbUABqmFEDY9iIXRdNWr91P5Xv7cOIdFRNwb9778ufkqM9+rqfyk1L15f+LnxokT55w4cYIvXl07RAiAJ2dHHgDOL4cOMJCEIyEigEjhyALCQoQHJPskB4I2bMZ/xh9gZmMzm5gB3uzGvI5UrVRVmBlOTw48ALy6unGYgyfxmW1hUVna6Fq2i8th5zTb0AX37rbHYrBNBEY2EhIhIIJCpBDhHkR6juyR7BsxqJ9tN/zM7GCGQABq09L7a1UrzQzeDGfH+9XHW/bRt00Ei9Auq1mXbxGwaoMlrJMIilkJGAkhQBIQkUKkLyL7kND4BJAIoAbnZBE+iJlNAIM3TMwwNdXbUrVUbTb+DttHkwiEEBKkAEIhKYXIHp0ckOwDFokEg2bPJ2AYz8ogkgDNMDa1qRmmqjZS1RIKPTven9ttHlNv/2FGQQICgqx/IhShiAj3xPGARB8wGDnIG3sZ2zEAFno+zGxqapPS69Cb4fRob9fAjwQFSICJAzByf9kTskdBL3AAVuz/7jAwG4EAbKKqU1W7NVWnasOjXeM/OhR17xeBcJ8idJQDCvuIAg5pg6WiDhmIwwCDjc0wUbWpep141ZGZYQV5aYctonAiEJGCQf3rQ9gT4TEAGDDmgp6vCENJJRQGtj9Ws4mZTb3316p+oLqcAGZpA/M0BJKPTpicVT3BYikeS+6TrDSNLml1SXMWiqIo9hy5T7JHAhAeV4kQkQPMqiIBAhpv0WwMEKo69MDUez/S0peKoAKS9cMX17cOAFS1kkMWIf8YwHIV7Dzq3/lzJEEzQKTKN13P0U67nffM8plVX0hE0lAIzfJslyVwRqv+58dUvrycqzZsQhfiKQqRE5Iwoo+O433e8xn1fq86NbVbVZ2omXrvUTW+AaahKK+ubly7QdsfKB3TvSqdjkjP5w1IEmoGmgXDV3xOVSEtwqh6X7ye3m83XlVOcq6CrIhEMoO48noCuEOc7brPumaxPnk987y6EE8BYR/kICbZ4ZW6uqp2HU6i6mdWelX1pkAsrMLw9PSoYt3nc6xkZgbnHJLVMJ23G1NE4P3ykaD90VNj5h8xPdP+334HQN0zzQCy8UxOoCn9nLDa6eaElNdr1nm7Pnmjzyp/uzxdwLLUH0scIH6m5S8ZxwpL6t/UvN6W5XQUxv7Q8NU4IazkgZySU28EMLM3pmfzY/4BHYknZ0f+/NXrRo3NjApjIp5ZPTxPM793h3PEctUNkszfQcbJGyOdtxs9pQOgUcc2EbYbNv8+7bLPIqx0Ledy+fWF7dkkgmVjH8ZGDszrdTQBTyfl9FJVFWpVL87HNiOQuEeXAuUseN71KF/Ys6dBfHnx8qonQg2Vh6Vc1wUzE5Kdh+WcyFRVSGoqv5lJfGZmeou+UTTUgWyy//y46tAJACy9/njq/c1S1QnREHu+TUj2tfQXCpbmdXJ40J+eXw4d1NTMKEL2ej044WEQGoBoLGr0FlUNeoVIkBeynhsqhahutj5EpPTquTQpBYt9NKtBi5uE91mV587HaHGCRQTb5i75tXR9lfTmlXkWpypLP5yUvnq+PXysShAsvf/x9GcWEdQEgAlAmPc3Zlaq2mTqvXrvQTUogX6/h6P9/h8QkdOlOe/wRihL/9XV8Pb/ep+GFyDnuDUMmCu2Bsyw/NbjXyAAAIoJ1Kbm9cZ7vSlLP5p6r6oaVBACzgmODwZ/eEcA20FRuPdPjw5+VETCMJExmSYRLOcERf1QSiWxElRGH6hNS7WReV8Glaee+Hl5fi0geLQ/+FGSe29cux06wzl5f69fnN+Op8OWHAJgvhDZhsya/TPDGGqT2PNvvdcb8zpRVUAVJ8d79uritaufVxSFO153JXdYjn6/d+i9L5JQ3kYXOaQxHIQJH7tW1eHU+6EPRDBStfL4aGAaE724vnWqZi/Pr+P7xI4LPAyck/dEpExaxyx1ehmK+PAYZjRgDLWpV514r0Mo9OR4r0olze+fXw4dSVPV8H4nI9MOm4AFV712Z75jd1kEierSJFLNtIwEYD6w/ZlvqenTJ0cWM5R2IXbYLlS1n3OCdGwbnOZBzGxiiqlXvPK+JoDTkwM/axbv/HLojJDzy6FTGIxQVd0NBY8AOSF0GQYSClW7UbVRmPTRMvX+RAA5IdTSpkLVQFJVtRDhaM312WEF0AwUuWOB7DocFKX3N6ZQM5vP/lsJhzmUYBIN12zHCR4Q3mzfmZVAMkdb8BPtiEK96jLO0Z6hIgnvfeIE/TeqwQ5rAUmNvzvm6mUQNcXJyZ5fNIa0Z9wCMVQTK6WZ9dZTlR3uAxG5TZ1xVXkAACSt9jk9XeyulRKv9VCCpJpZISK3963ADutFW0vogsa6g0U+fbnumTKo7ARmdxax7LA9qOp+5AZFNBxV6mE3s/EStKc0gYbDgpIs36QCO7whDBOS03m3Z/lmtLG0B2e9vmF8yIwSOy7wkCD67Y4oIgsFwjZfKLquts09e8K5B7DjBA8OwyQNByJSArV9oLPFsGteub9dIAbWrlIrSqM7rBFEpaJnrmsNbW4ZurNyEl6DF6LFjNK5rpLOJnFz8fP4ze/83FrT/PingY8/+cZa01wnDJPq1ExEROc5z87DCo1nyVkw+PKpQsykVN0z1YN7VWCduLn4efy9H/s5/K+r9ab7KYCPP1lvmhuBgRRtTyV3QefhoK12xDgG910Ys15sigDeBlTDQT08J6xdJmj48KsGp1TVPslSRG46F3rdeJcJAJitIqoCsE7qIQAUXR1CmNYeqoIioBmULGFWPJjZeBEB/NRPAN/+3v3G8j/D529Ysq3CzHrOuZvKWhiX/pEz1nHOeL/o7BTEu37s0WyMRcaKjeFd5wAJRJ8itwaAImpAtVDGACydHcSKKiLQ9FzJ7NTb5QSzCOAYwNe2WorHgWgnUO8P6ql9rVTFLlhJJkjHfKzZusVwHgH8yn8BfuQntlqUxwIRuQVRilTagbZXKi98f5XMUmK51LlVi+EiAvjw649Xl98kiL6q7sfYEJJP97cXp87DypwgTzRMIGE7RLAjgNnIjEVAJaelYaGbU0nnvDKhMDNGyFZcy3YE0BmBGwQNfu1m4yQLZKbIJHxs1rNonhZwBOCf/yUAqNW53/3vGyvG40dYeBrmDGRmoIt56EwEjdgAWca2aTvBb35nthr4ewB+711u9PmoJ/m6YSWZoCV0KCm6czd/PIiTR43WtzjXswgrqXfNAAoh6gYNxVaNRT/VUQ386JubLUfCF58vty4enm1Udkk+nqYqCCEJ6wB0cbZ3EZYSQWr43Is1XCNoWsRFqtszFt3XFLxu/PvvPMe/+tvAdcfnv4bn+Kv/Fvijf27t5U9OJYhcQFUlEcJafAyrBzOXpSpRkUnMaPtm44fEP/mLz/HPViAAIMgwf//PA//6725sXiKz42jXGUSgAxG0zMSNzN7JhahffP4cv/Ub93//X/5KtyGkK4h+cC3jJJmLc8Gwi63gXjJBU/JM/kXvCP7dP2j+//Sz4H20CJ//GhqE8/mvrc9RJc4dAAIRJs48M5zdPKxEBI0pyQYXWGvEuMeN7/12ff7NnwF+9peXj/EffwJ8+R+eV6ruD/7H+soTOQFQh7bLZYIuuJfZOPMw0neKAICmHPDhH+v+3uGH6y5JhTCJZ9XcwSoEAKxoLGqvQAoq4gaGgnzM/MHvzL+3Dfzgd7af54ows56IGxHzg2QuQiciaC5EbU0lk834aevAL37rfvc2gd/6DbyRILglmFkhzk3i+Uork1f2BchnEMP/x+FrukNlHwBQLRFcr50gJtwYCsLxkaw52AHZ7GHsoN22CejUgHNsBOn/ZmcR/9RfAD75axtLfmVsezjqDIMZBTDNjEad4hV07sV3N4CAqlqxcfeyD/7gY1sB9LiExMqppLYWtmW4ZUNCp+EgRiWp/se4RZKxnV2kkgcGyTKGD7oT03AZOhFBClSVZZgFSEL5zs0dPCZEY1H066i8jdteYIvQmZXnakeKXGZhw9Ttc4IvPn++8bH5TRavbBNpaTo5zZ1+k9m4i0ywknaQEsxkA40uTTtO8NAgy7RanKRihQBWKzmaos4knL+Ls4iPFBJlgsrbeIWVySs5mt5REyPFkdguJ/jgQ8Wnn22WAD/4aKPJrxtqVhAoAWiaO8iHhEVYSSbIkzIAptq3avehLeL9j/44fvaXt5vnIwbDxpMFIDBVNdSqooagowvfX9mzKKxM12SbLM3wcKuSdwAAmKEn4kZAHdk0XO8W6byjnYDZ5JFBhJVB4h2bSH6UEGCqqnvRentn64G1mI01blmXEkyLHgFIkEi3LBO0VcRPP2s6d+TxBVa590s/+Rz/La5leFtURAAK9AShDcxMnHMNVXEZ7nACm/FDZoYMf+sI54H6sBsOHgHMrAjaQXMjrGXoPBzMmo2qrIb3KPAO60a+OebdoKOLsHzdAe5ORESBQ733hRmKrbuZtlXEtqPnp5/hXve+9QvAH/ky5vF2qYgAkFaIpw7bxZcA6BLWFk3PopiJsI6vX+q2Q9gtUxEXOX8uuvcn/spbIQPMBkE2fQvXajGcFSHznVxz8MiRRzSN/9c3i5gSTMf7ODPusHnkNgIAcB0Fw8ZwsIhmqnEGgAZd9N6FfWN8/78+j7EJAr71C01W/ks/+fxe9/7F33yOL78bzj/6JvCX/+lbNzykoRoIG6B3kQs6CXWNRDbhXbwqhheo9HmgFuYS7nvvy+82779tUO1DZNLFrzBHN5kgHu96Gocx6EEjmu5wB1lowfVsegE0NQQLi08kv7v1uYPDs2acgrY6d997eUyDbcU3WBsMRikdACMakc7beHZ21NjvaqVZRAAACYmRTL338iAu5x9+/Rv49vfm319k7l107y2UAWoQgMEbxIVg1wrg7lQyiZeXw8ZGJx32QGr/T65ldeCqNy7/Dm+MaL4vSFYDQFdjUQeZoPZhn+WgsDMZPw7EeYMSwJ1wNW/sT5DbB1rhbEPgxHsWeof1I3kc310eML+Vnp0e+tWtftb0J9g4vv+ft5PPWw4RqZxKLGyD02kJ2suL127liKZRSUycoY9NrED65s/U59/97Ue/NLwTht/faPKqWkWWFRFNk34bcTTNgyMBmKgq1r4H0p/+O6HxE37xW8Cnnz1fGhZm2+gau+CL/4hGQM4P/tBai5HsNEkmMDM457LZ38X2Pb54db10X8Tkq5YFQ5I49hRmVnjvz37/197/YC01SvhHf/J5gxB+mPAP/9Pa1ld6r1/9v6/OxyJyw7AV0QQAiqKouEEDM4aHpcOB4M6S9JgWcwl0MvPlN8Hf+je/3jlw5duEP/s3NrbANq1HzIeDtWgHuc5Jhl3Q4uYKkqackn/bWnFw9qv49ve+gb/+j384djQ5RnBo2YBBKgwHVZxpaYeyWyYXdBoOgGaUcyDsmG5mRQifBvy+H3m2WVecLz5/jq/+N/CDL5c/+9jw8U8DH33913Fw9qvrTroeDnhDSikikzya6R3MuHbvBalZmlPv9ewe5V8NH3/yDeBt2KTyYSDiRilWxF3VMITBn/vuqpnlnsbZtfXLBDusBFXdS42SDEYk4z7Wa9wDKXcyTf6Fu1XJjweWbUVUOQWvMz4BgCyOYeVwWjzIVPIODVB4E5amV9qAIhr22vM9RN3ztRbsl2TQdC6NiSKbQSTMrD83gR02jrT4J5qMu7wBIDRi+i3JoBHPuNr1JF0LBgoOVy75DhuANewCbbNxzgWqN6La3y35bIVrpocW4bdbhvaQIDElABiEgBKAEwm24rj9TZMAaiOSW4UIgJortAMo74aDh0U+HAAIu6arwmWN/PT00Fv0FhfWO6aJ8LBzbONkLAp56OpT0DtsFBK8jPOwgukGAODV1Y2LghzAQAgiIuLylYsLkK9kyTZSkCAY2s5O8MAQkVtV7Wf/q3sWpXgy/aL530lRFO7UOXfQ4ARtL9QcL169JgBpb5ZNSgnMfW2HLcBU9ylymxxKVFVJ4snZkb+4HDrG3k+EaWXn5NCJ61PYI9G/1/Y3jQJse9f0HRYiziLiydmRv7oeUURgiQOIFD3njoXsBa9x9EEM7t2A3XXSHbaFXCZ4dTV0AkIkjAMiUhSFOxZKj4yCPDEAOpqNX7x6zfeeHNmMIBXJu3W3AumhkPZAIkoKBiQBIQIBCEhBz7m9onDHhcghiT7BxmxCJ07w3pMjCzJBHg2DaqYS9t6xAzMbkdz8Duo7NOBLPacZnDg1YFjEnu9E4MQVReGekuiDdcOTGITAdx3NxgnvPTmqKKCKmhnNECJyMx5P/89aa7dDJ4zG40ns/epAFEWBnnPinNsriuIphf20mhzEgHEIyMMMrbzzSTpGtzMlWdIMV9dD771+tbba7bAU48n0y9Fo6hH3Q+z1eyBFXK84LQp3IsJjkgMQA5CDeVPKK1oMoQDVDGakhj0PpLTgWXLy8vzyq8lkuiOEDcPMRqPR5H9eX91cklYW4rTnHIQ8dMJ9R/aM6FNSrweyWHR30Nm9LLchvHj1mqqavFjETKObmUFVD51zFz3nbhS2T8PYiEHQJDgGbGAWDAsx+GKRjgAgQgek+EiMeZpzlLE3HYRj/o65+rlYKcIFpwoZm+kgXAvnpIxJDFTNZy7aMZ3cGIb4PBHKay6kkZZ72SA+V9UlXQv1DOnW9Qn5pXrWazgta6gQXSRuQt64RhAG3jrh/lT11rz2hSydc2Wv30OvKA5BkkTPOXcYv+WJql3VQ0AbBjOM30RF9Gbmsv9TM/RImZSlP/Nez4KlUQc0DBQAzfaA4LwqIpepUVT1NDbA5V1qZSysDcywJyKXqnrqyJGRY1U9TddEeAkQUD1NeaTrqnYayokRDXsQuUTMF9VzcgkA6bpWZQLMbECzvTxdEqNwD3sp7VDGOr90XuUb8wvfhXskRsn8FoM9XKnqCQAUwiuCmABw5MQ558vSSCeSCKDo9eCcKyjsM5TtMLZH1vAzhgGzcYhPbZOlnCAZiNqcIHyrwA1UfT9+qCLTFqIZ0xB2TqkbFCBUdUBybGaxp9bnIpJ6UpqzGGTlSfeqayIc0xC9aEJ+AsCbzekBNURknNJPZWhfy8sgIuNoRh8IAKveqcuQ7rfrlcqqGp5XxYDEOJO1JrH8fZoBIhNanCUkp0bAxbUFTpwWRYFerzgMlmD2YvkOxclJ4GQ2bhJDgkHVrkN4Ab2613AAAOG9YJjwvqyIgGTpvT+OlZgCgKpWRCHCoZn1zNBPfgiqFqkXk0S1+cxkPTcRPxA5ITE1Qy89F65xaqa98AwmJKeqdkhikq4lJ5g6r7SeItxP6dfPAO2eVNdFhqp6mJ5P10L97E56+b1wjh5pkYNyamY9Ed4kYhIDKCwJliQgIiWF6PWKQ4HcipN9xiEgmIDZjxFFMKvxIzcee7OJ937ovYf3Orw3EQRCCBzBrFqR1PAzaH24uqLAVBEqnu5FIpg2fRMWO0mSmOb36zy0F1RX3qYgGoz+dnk50vt387foNxkcNRXWy/Np12NRefLn03l9j6mXR9lECwFLiJQ0FCRKIiwmESfoFQVIioj0AXUirg8ayEgAVTkkciEMzDAG4voRteup91devTO1oZoBtqKP4cuL165NDMGQdA2GnbjS5bIQmfi4VC1WvhQAmoRBoLFnT/WMcJSIKExONdbYFUHYkpGZFZHblEDwtnXOXYf3XEkzgFKaaRDkQoSV0sxKMysceQuRSlBz4R5AlApWa/0NKJy468iFqu8lIiNV3XMi15mrd1VXhiCfyJ6/bT0zJaUkUdKsUAA9V9x4M3EUpWCEsLpYRQS9Xk9I7Itz/UCkwRfADBMROVbVaxE5NrM7w0AiAO/9jfd+4luBjDpzglZj3QmUmPwNZrmkx7FTE7cQVOHVwiIJM0n3a0NUI78Qn0+10Mgd6ucMpDTeyebUpX2ejo3rZmKEJt/JGfXVZCG1bCvA9H5eT43lye+JuKmZukbsp5BQXR4zcU5UQdCgzlEAO+wVgdE450jhAWDTkKYcmtkkcYDU6OkYNYwxAHiv5+b11ns/8hbthJkreoMIFk0lv7x43SCW2unUov2gul7xQ5IG1B8p7uVb7d0nEjbSUjURifYHMyexd4dGryEiZRJGZ+m8edoh/7ph0702kbXfmZ8m29dLVS1qLWl2eQCDJrev4K0tIqIWO2Nc1gczw9Mnxx4Arq5vnYigKOSItCfOFbHd6kY3UzrnjlWtWu6cCMDIAdSuvNnEvN6UpX+dOq3O0L7upSImDpCOuUkZgNWyQnPOKVsepakA7z059l+dXxtAI4H3nx5PX7x6TTOji8TQIqyklzPJDDlHaru+BUKo10vEy1pPiy+O0GpmcKRa3btJ0sLoQh/OWebEnpfHjBaIve79BMC0sXVy1ikcrl+PHEm4XrFXiOwL0QMxDrYEmnPuvcTuIex70zHIgaMMzGxcNb7atXl/U6o3VY3jQdZTM5wd798jUglq75R2hRMSUcQPVF1PhhjnXNsr1tJ7iYBIVvuxx3QMAN5/eqzvPz3WkFaaKasdJ9vbveT3Z52LuJlp5P/pXFWvVI5nZ0c+neffJa9fKm+jHDH2U8rHOQc6QVEUhXNSuJ47KkT2nXOH4tyxc+49QKzq5dl4L+IGpAy82VjVrs3bC+916H05nPrSvPeA2nAeASS8sUNIo6u38N6TI3t58Tr3Uq6OORHkjd/iKph3PRFfdIFvc4MGt8plmJRnJr80ytwO89KljOm9VJZo7VQScv7qNUUIMcPTsyP/6mroaIbCOXhTSOj5hzR4Otkn0XNkXwQnqnpFyiBI+WF8F5ETMxsLBFAb0zAGCB/qdKOqZVmWIxoACk6O95a6fa1MBIxRL5Jw10bSINJHY/SFTgYjUu4MJ/OQ/Bja5wmzdgBN5zmniiw9Ssma9OjGc21hNyeehHb++f/zy2H1fExTnp0d+fPLoRMAZ6eH/vLqxhWRg5FA4dxhIY6QZOjhYSFyEvMf58dc2ic5UNUrgjADvPcXU/UjMyhUlRba5uxoOQEA9yCC9E3msZdcuEycIBAAoxv87Iaf1bvya7Pu5w3e4AQAtK25pHcyzpW/1y7XIg7Xxvnl0OVEk97NCeDq+jb4+gVXXxFS6IQUOSDRFxBW6fVVve4YfBJRAIQaJur1pvT+Rk017ENjODneX8np897aQRv3eXfRO8uwrDz3xX3LlMrz7OzIn18NXeQvAOpoL1EOEBHpi3BfopXPsgmeNNnDaOSZBTOMVW2iqjfe+xtVVW9ByLtP2Zn3gEUfdlMEsgibKs+iNNshX5+dHs7M59WMPJJ3b3LsBACJq32in3/hnDumsEegz7BcaDCv59PYIASFAWrXqjYty/JSVdUy/fzs+GDpd764vrlT7p2n8JpQE0B0uEEYely07FGEQvZEeFiNNBUHWDb0hAmfMgh+pqqwttnvDbBbSfSGeHJ25I1EIoAnJweeDARQiIgr3JFzru9EDijS6yJq0DjOuYCqXZelv/JT/1pLHaracJ1bz+w4QQtt9v/y8kbC9YPGd38SJf+LKPwlAri6HtE5JyLSdyL7zH38wQFgDRYvmQUvLR1NMoKqXXmvF97ryLwvK0G4chFdHe0h4+L6xu2I4J5IK3sMwJOTg2juHVEK6fcK99QoEKDfHOdtjLlePknyD83rvZ77qV56M2VSXWPLn5wc+Flj+32xI4IMbYEyCJ82k4Gnng8EW78RcIUreq44hrAv5CDsJ9+wqLcIgNB8itpsrDCqKqZTP4GyRNX2BGgV48h79MX17cy5i64oXlwMuy1AaT333tlhxR6fnR35TalsD4VcUyCCzv80DhVphW/S/UUEdLLnnNtnWODRauxZDZQ3PsYKwKsNzfuJ9zoME0z5JzeZp/+fHe/7QAirgwb8f2g2Sc21W0hqAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/img/pricing2.png":
/*!******************************!*\
  !*** ./src/img/pricing2.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/pricing2.952e6f37.png";

/***/ }),

/***/ "./src/img/pricing3.png":
/*!******************************!*\
  !*** ./src/img/pricing3.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/pricing3.7a413149.png";

/***/ }),

/***/ "./src/img/pricing4.png":
/*!******************************!*\
  !*** ./src/img/pricing4.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/pricing4.bed67670.png";

/***/ }),

/***/ "./src/img/pricing5.png":
/*!******************************!*\
  !*** ./src/img/pricing5.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/pricing5.3d30fcb1.png";

/***/ }),

/***/ "./src/img/pricing6.png":
/*!******************************!*\
  !*** ./src/img/pricing6.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBCAYAAADnoNlQAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF+mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEwLTI5VDA3OjUxOjMxKzA5OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTEwLTI5VDA3OjUxOjMxKzA5OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMC0yOVQwNzo1MTozMSswOTowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyYzE5NjhiNy02YzQ1LThmNGItOGU3OC04Y2ZmMTM2MDU2ZTYiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpjZTA5ZTUzOC1jNTM2LWZmNDYtYTgw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"

/***/ }),

/***/ "./src/img/product1.png":
/*!******************************!*\
  !*** ./src/img/product1.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAuCAYAAACF6SFvAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF+mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEwLTI5VDA5OjQ4OjI1KzA5OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTEwLTI5VDA5OjQ4OjI1KzA5OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMC0yOVQwOTo0ODoyNSswOTowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpmYWE0ZjZmNS00ZGY3LTc0NGItYWQzMy05ZWY1YjZjN2QwZWYiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoyNWJjZTRjNi0wODY0LTVjNDEtOWYwOC1hMmZkZGU3YjdiZjUiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1NTllZjliNy02MzJhLTIyNGUtOTk0Mi02MDRiZjFlZDIwYzAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjU1OWVmOWI3LTYzMmEtMjI0ZS05OTQyLTYwNGJmMWVkMjBjMCIgc3RFdnQ6d2hlbj0iMjAyMS0xMC0yOVQwOTo0ODoyNSswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmYWE0ZjZmNS00ZGY3LTc0NGItYWQzMy05ZWY1YjZjN2QwZWYiIHN0RXZ0OndoZW49IjIwMjEtMTAtMjlUMDk6NDg6MjUrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6rNCjRAAAD30lEQVRoge2ZT2gUVxzHPyueEly2B1NyMinsKbhEJbqBHjI2evOSFlfaHNJkUQhVWkGKK7ko9pJCBP9gcGMLLcUVlB7Si2hmD8ImBk3cJicxWU8hyWGDklyfh7eZmd2dmd2dP2aQfOHx3rx/877zfu/3501ICMHngj07vQAvsUsmqNglE1TskgkqdskEFXtr9ph9LHjwI7x5788KWoFvUnD6esjtVCFbd0adEIwl3b6jPvQNw8BtV4TsyfwQEnwAomE49pOb91ij8AKeP5Xl9FKWlnZFa1MnBOtL5f2Pfgdth0xJ24vZh1I++C90KK7FwBRbG3Gef5EDYL3QQ0u7rL91RvAkU91/YRKuvjadqvaZ8RtNkWmtXHgJIFDH0Yi0Al/GYDUPK/ZT7TwZI8YvlT9Hw3DtXTdNkWkeXhH8/Zvt8OCqZiOROhGsnTk3Cm1HZNnBGQ0WmbYjrhRNMMj0p2S+vy3rZppgkPHA+kOQFYADfJqdUScEsw/g9VPdEIO0IQcToJzzxCj7S2b2sSD9rbWxWwFWMtJAdsYEg39auir1wD8yle7Itn/X0Suft4qw+AxydySp+TxcOAy/pAXKkCNC/pAxEomGrX27rj4YuC3FMJ2UIii9dEeEvFcA6oRO5GRCWvFa50EZCnGv2E00LJ/HklCYa/iq1VsyWxtx0qX4JxqGwbvV7khhTrCoCtaW1bL6psg0v85n2Vd6vj/Q8Ou9JaOmc5q2Op/F1K+6PwCXj0M23VPV1tKukEzL8nweFtWGdsdbMlPXZP51r3OtpAyFaC2V1fGGhnpHZmsjrt0TdJ1xN1f3sMz/NwnObOCdNluey2nllq/0+rVltUykVvMyX5gE0MWoJ6mHzAcOy7oawVgl/FHNRu21XugxDarm8zJpY3r1kNn4MfR26Af2m7SVYE9mH1L3Z36GxI3qw9h+yDx4KswJ7cw0R6Azpre9zcs5t8PhbTRH9PJaxSUGyA/UoVTXGyGEsE6ZlBCnsE4LU0Lru1mMa/UvHgnLOUdisk8mZd3nj2HZ5yzWfUySvQI4fT1EfwpN99uhKTKtaaGZh3UMsEHujswPJhob1wjzmsm4k6tLqqOdWZgSde2wSfKWzGYxLr4vLWQkZr6Q5VdSPM3Ibhbj4iyORMx7MpW7czNR/4I2i3FxMWx+HneMjBCImwl9USMxa5EzipaRiJ1ysEn2d81uUBnPnExAx4lyG1J4CTN/ldubfud/BPwjA/Df74J/LpWHylZoBZKPoKvPcaTpLxmQPtvkaI6ZW+b/eDpjoFzAaXRphP9kKrHt1jdHXMX7Zvj0ZHzEZ3Vv9hH1WPKuxznWVQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/img/product10.png":
/*!*******************************!*\
  !*** ./src/img/product10.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAuCAYAAACF6SFvAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF+mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEwLTI5VDEwOjAyOjE5KzA5OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTEwLTI5VDEwOjAyOjE5KzA5OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMC0yOVQxMDowMjoxOSswOTowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDplMDE2ZjRlMi0zOGE1LTlhNGYtODM1Ny0xZDMyYWVmNzU5MTMiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDplNTA5MTBiOC1lYTliLTc2NDktODkz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"

/***/ }),

/***/ "./src/img/product11.png":
/*!*******************************!*\
  !*** ./src/img/product11.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAuCAYAAACF6SFvAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF+mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEwLTI5VDEwOjAzOjE3KzA5OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTEwLTI5VDEwOjAzOjE3KzA5OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMC0yOVQxMDowMzoxNyswOTowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5YjRkYzM4ZC1hNjAwLWRiNDYtYjVkOS0yODhlODU1OGExNTciIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo2NzliNzhiNC01NjI1LTkxNDgtYWIxMi1iZWUwZDJkMDA4YzgiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplZTkzMDEzZS0yNGVkLWU0NDgtYWE0NC00Y2FkZTUxOWM5M2QiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmVlOTMwMTNlLTI0ZWQtZTQ0OC1hYTQ0LTRjYWRlNTE5YzkzZCIgc3RFdnQ6d2hlbj0iMjAyMS0xMC0yOVQxMDowMzoxNyswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo5YjRkYzM4ZC1hNjAwLWRiNDYtYjVkOS0yODhlODU1OGExNTciIHN0RXZ0OndoZW49IjIwMjEtMTAtMjlUMTA6MDM6MTcrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6vo6eOAAAD80lEQVRoge2ZX2hbdRTHP5E9Fe0qYiRPTRx7GMHY4P7cQB8aG/q0omyjkflWxYei4CpDllEfFIXCQLFDfAjqg8IyyFDJHhyS2wchW0P/WJqnYhKfpN1DQkvzevbwy01S1s77u/cmKWNfuJwk3PM7v+89555zfic+EeFpwXP93oCXeEbmqOJY3yw36gYPsgX+XYGBIZj60ud2SV9fEsDt68JvX8Fux2+/i2syvQ2zRt3gs9eFn5tEJpIQ8G753nrmk+PC5g6cHIRP1xbxh+K861Mb+MW9Z3r3zty+roiMRODzv9XGS6awC4wmvLEhIt2/tsqmTCJyGZG9mtH6fS4iMonIUla8sNObd6aYHQPgrRQMDN0HlKfW1pWnzlxwHWJAjzxjeaCyojzz44y0PLVVNr2y09s6k5uHQqbALiqLXVsBfyju1fK9Tc33MkpemIGvazGCUW/CqwnvUnPxjlBZho0c+E+B/wScvQTBqI/tikkxO0bwDQhFYwwM3We7YlLKj/Gw3NYJnYbwOE5JuidzUDXvRACIzcCZS+r7dhnMb2Ft/fA1RyIw/ZM2KedkGnWDueECmzvwAhBLwrkpGHixveniLfjrz4P1A8B4CsIdNaa6DPkvYHNHfb+Shvh79gk5yhx7NUNmB1VGmk88OSPt1QzJp0UyKZGFpJKVlSfXlaWsynSTiOTTtmuQMzIWkYWkJ8XuwCufVjaslN6Vonn3Rrst+fCWp9moheqqkH5ffR5NgD8Us6Wn/cQ+aD4tD4vdY2HpIMT0w2wp2/3wWkgqG5mUtg29MKssK3luSkvNNhp1g3sZlR3PX7UXWh3QI7ORU3I4uqhryBYqqwVApXmrIdWAs3bGw35qH0rNmuQ/4Uj9qZrOHC0yL7/qSt0ZmUbdcGX1MITfXATgwU1H6npk/KeUtF5Ur+EPxTk5qHqzkqndNOqRCZ1Wsrqsa8c+pn9V8oe3tSNAj0x4XMnSH1pqejbiPiaSyjtzwwW2K6ZtXe0KbbUanVOWbnYCGh2HvhFrGKHZNzm6Ojtnz9sZgLFmN5ub1VbVhr+Zqkcitm7XJxOM+hiJqJgu3unubDfzsZLJb2zd7qzOWIunLzpSt4W7N9pDwnDc3rmpH636/15bZbOVaDTOTc4Ndh6iNvLeErImoJoPyp1R67B2GdvndNsen4tor+feeCZ1OKGtsimZlLSetHXffOLx1L5XM1pEZgcd1TFvJpo335HW6HU0AcGzUF3aPzMLAK9E4J/19sAwALyWhOdfgsJ38B/qj6iPFh1NNb0dz6Yvqg1ZsAZ956/G9p0cq6tCbr49e7YwkYTp72NOTpnQrz9ou4SjdThziWdkjioeAbhs/8lzxDTTAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/img/product2.png":
/*!******************************!*\
  !*** ./src/img/product2.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAuCAYAAACF6SFvAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF+mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEwLTI5VDA5OjQ5OjMxKzA5OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTEwLTI5VDA5OjQ5OjMxKzA5OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMC0yOVQwOTo0OTozMSswOTowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3YzczMjBiZi03ZTQ3LTVmNDEtYmVmMS0zODEyZGVmNzljMGYiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoyOWY1MzMzNC1lNzVhLTI4NDItYTJk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"

/***/ }),

/***/ "./src/img/product3.png":
/*!******************************!*\
  !*** ./src/img/product3.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAuCAYAAACF6SFvAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF+mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEwLTI5VDA5OjUwOjQ2KzA5OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTEwLTI5VDA5OjUwOjQ2KzA5OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMC0yOVQwOTo1MDo0NiswOTowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMDRlMzk3Ni0yYTQ3LTRhNGItYmM1YS03ZGI3M2IzNmE0YjAiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo0ODg2YjMxNy01NmM1LTcxNDAtODFhZi0zZmJhZGRiMjRmODciIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplZWM4MmMyOC1iMjIyLTc2NGItODhmMC03ZWU0OGJkNDQ4ZmUiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmVlYzgyYzI4LWIyMjItNzY0Yi04OGYwLTdlZTQ4YmQ0NDhmZSIgc3RFdnQ6d2hlbj0iMjAyMS0xMC0yOVQwOTo1MDo0NiswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoyMDRlMzk3Ni0yYTQ3LTRhNGItYmM1YS03ZGI3M2IzNmE0YjAiIHN0RXZ0OndoZW49IjIwMjEtMTAtMjlUMDk6NTA6NDYrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4BB145AAADuUlEQVRoge2ZT2hTSRzHP2/x1DWiyEZy8w8eZNeohUp6a7D2ohUprpHiYUFXIesurKyXFAVZ2kUsePAPFFMVdhfsQsuiLeKu25dDIbpdq5QGD2LSPZXqIUVprz8Pk5cmvuT9Sxpj6BceM5n3m5nfd+bNd34z0USERsFnH9uBamKVTM0xOSIc0oTJEcs18WmQuX9RpZmnlmafBhmH0OpWzcb6hSe/qvyraXgHBIBNQVUW/gHCJ7TCKmtq5lxKV6P2xeYE/i1he/uH8Hy6uGwOmMuVrb0L4RNFr1d2ZlK6MNYHE4+KywPAvhgcPNdK0/rHJesuLYTIPEsCcOswvHwLHREIn1bvt+wx1V05Mn/0CL/1WdtsXwffJ2DzHs3S7sIu4fk0HI/B0d6ytisjAGP9y0R2B+H8MNwTjXuiEU8nOB4DH2q0e5rVLFjBv8NZvyJS3Wc+rUsnIp2IXI1IWbvMlEi3AzsRZDEbkqGYyGI2ZGVXfTJXI8rBU1g7KIL8Oyx54vNpvdK+q/+ZJYdUeixub9vSpRHI5SeH2yrtuvpk3uVS/1Zn9tvaVbqYrbhr7/tMShf0AXj9Qv1e64eWY+7badro2YUP4Y3Mne+EkRvm8sL9ZMnhSGceeHKhFNyTKSSyOwhfHYTPN0DmP/hraNnu/kVo6bJuK6ULL9+q/N4jrl0xwbPs3o6a1WpmfFmdOhEZvVxe0RazITmVszsftFc+B4+7CkMxe9m9HS0mdKndLLvjcckT6UYkM1UVMu4+s5lRle6LlbdpOULRepp4BBNb2wggbAqag8feKftwxiFqd56Zw0wE4Jdm0AerEiC6CzSN4DEADIh5NGefCT3Ny3tNANgZAf82c1szo8XkOiJw5m5lM+RZAD6MpwpjrW5ExuP262A+rculdnEUyzl43B8BSkkzwD996lPavg5+/r/8OaUU9EHhykmVP30ZDvzkaYbckxnrFwbOlX7nw/uCNgbJB9zMuhuMHJwLwNJCiAu7ion4ULNjYH/UuzId7W3Fh1pvT4aTXppwTuba18n8gu2KQjyd4HfROPNnIm/TdtKLDwpN6x/TGlH51N+emnC2z+iDko+7fowX34q8mW3L5yvdLwzVM4JXl3A2M6NnVdoRMV3v1BOckTGCQeNmpE5hT8a47wL4Mly3swINdj27SqZesUqmXtFQZNydNAtl2sDsU+v3bvD6VUXV7aPmpYUQ325I5g9ctYDNbX85ODsCpHTJ/0eykggArVH45nqNzjN1jIYSgFUy9YqGIvMe54fwxIbIGSAAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/img/product4.png":
/*!******************************!*\
  !*** ./src/img/product4.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAuCAYAAACF6SFvAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF+mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEwLTI5VDA5OjU2OjA1KzA5OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTEwLTI5VDA5OjU2OjA1KzA5OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMC0yOVQwOTo1NjowNSswOTowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpkMDAzZjc1MC0xODY2LTljNGUtOGMzMS1kN2RhZmEzM2ZiYmIiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDowZmY2YTk3Zi1jMzk2LTc0NGUtYjUwOC05MzViZDZiMGY5ZmQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1OWEyYjE2Zi02ZTQwLTgwNDItOTVlOC1hMDFjNjg3OGY2N2UiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjU5YTJiMTZmLTZlNDAtODA0Mi05NWU4LWEwMWM2ODc4ZjY3ZSIgc3RFdnQ6d2hlbj0iMjAyMS0xMC0yOVQwOTo1NjowNSswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpkMDAzZjc1MC0xODY2LTljNGUtOGMzMS1kN2RhZmEzM2ZiYmIiIHN0RXZ0OndoZW49IjIwMjEtMTAtMjlUMDk6NTY6MDUrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6Ynf1/AAADqElEQVRoge2ZTWgbRxTHf1tykisjHyLwqZKDTwLXMphI0IPW+bi4ocWldQgtFDvUtA2BgBOwAzkkJIE4oSVuQ03Tj0MDbaGhh+ZSl6wOBZsm9bYhJpBSa3MqlQ9WPqTry2FtyxvtanflXVVx/Ydlx+89z8x/ZvT+OzOKiLBV8MJ/3YEgsU2mVbFNplWxI5Rav/5QmL0CjwOqb/8wHPlWcQsLfma0L4TrARIB+Pk7uHHRVUOCn5nlJfPd3Q4jP26+vi9fh78eQXnFNTScZQbQloCU6ro0PNQjcMdTaHhkNqJSyvDT1Jyt79XjWSKx+SCaaQ6ZT96c49df7H3Gb3OcmN38DNIsMv0H4UnR3qe+H1gzzSGjjiqoo6E3sy2avnHjojBz3Hv80Afw7qe+f0fNmZnCbX/xxfsNNdOcmRn5LIs6Zp+a7ZBMZxtppjlkIrH5QATUBf/TBFApZSjotUulLQaJdHXUi3+b77IBi9rmDxjKhrXeOlA8HWh8f1L45pyzv7cHhj+GywPwj6cuNoZOYGLBOngb4E7Gb1oNG1Hgo6U88aRa4xOR+s8hRA4gMj0stv67N03/AUQOIfLvkuZaZyNPeSUj79Xvi3sCWNtkvXU+b+tPqQq9PWb5tUlsRywIRGLz7Jk0y8V7tiHes1lYnQwQ4etMsaCxbORqsp6hC+VSbTZ0sntAuGSKBY3DXbn1v49dFdRRBUMXjvZV487fFFKqwqImTAxU7ZcXxA+hcEXzxY4JoqvlKBDvMsuRWN5i35nIw+p7oz0Sy/tpLtyZicTmuSa1IxtPqlyzkQQnu0dsqc+ZcMlUShku7BNOvWw+xYJWY7+wr2ovFjSLvVLK+Gku7ARgPci49UOOwXEo6Fa7queIJ+GBnrPYB/U5P1/b4ZJJpBWOXRWWl6CtA9TD5j4lpVrt/UNmh/uHFMamhPIK7Ozyfe4Wvs6oo/YdcrIPjje87wmfzJoIgnWknexr24aWE81nxXFsShgcrxXNNTG9dV0480bV3lKiGU9m1z9CO4HUHrMcieXpbt9gH8gD8FI6T+fq/3a3t6Bonv7TXjQvPayNjydVZrZFE/BDxtCdh8zHPn1TqJTqut2XWW8P/HEHpnNw8Csh0mH1azPmZRCYN1zxXUJqb2OdrQfjd5i9YpZ3v2Mb4n4GYOjCyT73a70owV79OaG7Hc48sL3TcV9mibTC2QV4xWG0O4GxKfh8Jcvbk6xno6ARxbyodSACXo+anhNsqWz2FKIrwAQ+AJZMAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/img/product5.png":
/*!******************************!*\
  !*** ./src/img/product5.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAuCAYAAACF6SFvAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF+mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEwLTI5VDA5OjU2OjU5KzA5OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTEwLTI5VDA5OjU2OjU5KzA5OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMC0yOVQwOTo1Njo1OSswOTowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4NWY3OTllOS02ZWUyLWUxNDItOGZkMS1iMDkwYmMxNGY5Y2QiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDozZjU1ODExNS0yNDU2LTdmNDctOGJkMi1jYzRjOTVlMTRkNTciIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjYjhmMWY3MS02ZGRkLWQxNDctYjI2Ni00MjE0NzdiYWVhNjAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmNiOGYxZjcxLTZkZGQtZDE0Ny1iMjY2LTQyMTQ3N2JhZWE2MCIgc3RFdnQ6d2hlbj0iMjAyMS0xMC0yOVQwOTo1Njo1OSswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo4NWY3OTllOS02ZWUyLWUxNDItOGZkMS1iMDkwYmMxNGY5Y2QiIHN0RXZ0OndoZW49IjIwMjEtMTAtMjlUMDk6NTY6NTkrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5jjuPoAAAEmUlEQVRoge2aTWhjVRTHfxFXZRrsptLVdApdFTIzBccEBkzHTDcqgkoz1I1grVDGgSlWtEOWVWsLI8xs1JRZiEMrRhDahbbkVRBiW/phSXAxTNKdNC4Spjbb4+LO+0jey8dL0tdhmAuX+3Lux3v/e849Xzc+EeFpKc+d9ge0szwD86SWZ2Ce1PL8aX8AANqCkFmF/N/wcB+OgB7gxQD0XYaBV+Glt3z1lvGdmmouFYMsz6X45XP18fVKD3AtDkPvVwV1OmAOdoUvBuEfC+1yBHovwUBE/S4VILcN6WXY2zfHXQjAp7+H6HjhT9u6IuJt3UyIjCLyBqpdmhY5LgRrzjnManInqubo83I7UjnOWyC5HRPIpF/kMKu5mp9OmvPHsW2Ct2Am/SaQetxoZEPuRMu44x2QZNwUEwcRcVWX58y1LNz1zs5sLap2OAq9F+uq2ZrltY999OjrJsI62Tswf62p9uURk3awK2gL5eo0n9NYmRdKxaBBKxWDrMwL+Zxm0EITqt343iB5ZzR1W9LRpdp8TuPGoHr+NyuMzChu3ewLcwRkfk3xyaqifflKir19uD8V5ofH2M8O2l7RGmf0Xdz62b2xKhXD5joP7f3/5c3n4wN7/5kuG6l5zhzsCrcGzR0fjgrXF+ufhVJBtb0XfcQSQm4bXp8KGf3TScisQXhs3aB9tA6bP8Gld8x1ctv2tVtWj+OYmqVCVZbVWKD+mGbU/L0JYz33YmblSL8fbhdC3Iyrvt+W4O41Z5EbumGOsR7kZkpGEx48Us/hMZPeNEcqDZ/VjlTb/XHL3GY5clwIGt8wG2nBaM5GaltwKyAL+42aTpr9sxH3XkBuRwzxGsXmDrkDo3/IZqL6zi5NqzGxgPMYK+BxRJLxxri0PFfuoDp4Ec1psw67WgSUcdu4q57PdDuPUfGIEB9TIcDtMVgcE0ITKgizrp3PQmYVUkum1uwBPttx9CLcxTPv+oQjIJawR36lYpDY2RQPHkEnMOP8QqN8dVX4Y63xd3cCb04rNe4Uy+DWaJ5/HDht/GjvcwNEW7ADuRCwj+tEBW0fzsF3hRAjM75qQACXZ0aX91Hsh1e3I9XOil43E+aZmfSLLM+5j2uqVHcTrGqx8uBaNVWtQ52Mi6STzcczbQNj1VZO3NFDWwe16UV1P8nKnUpbYu1rJZr0DIxIeaSXTpYDsopbu/ywEwUjYh54h8SCzbXxiEPNTz7MaoZIOWkwKyCnTEw6qeijOLs+noIRKVezTiJlBTSKUsOV9DaKZOsZzZV54Zsp9TwcxRagVWYv+/0Y7nu/H67EqDnfTWmLvFqzjU47fFwIyr2Jck5YtV0j4cOJi5kbQCLKhY8FnNV2GwC1D0wloFjAvRZrMVHY3rzZ9UWfEULv7cMHXSkyWuOH8tygci4Bjovu399WzujVmunXPYV6XLKG5E6ukudiZq2HWc0wrPWuLyqBNJmLPvnLppV54f6UGSl2AqEoDFyF7j6VR/v6bdXfSCxUo3hzc9bIlV+LQMDra8BSMchGIsXWokqk69w4H4H3vl2n+9xQK8uf3gXtCZSn6n8A/wNGoVZAGL4hfwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/img/product6.png":
/*!******************************!*\
  !*** ./src/img/product6.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAuCAYAAACF6SFvAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF+mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEwLTI5VDA5OjU3OjQ0KzA5OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTEwLTI5VDA5OjU3OjQ0KzA5OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMC0yOVQwOTo1Nzo0NCswOTowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0MmFjZjIzNi01ZmY3LTNhNDItOTIzNi1lOGY5OTZkYWQzODciIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpiZjk2YjZlYS1hMGRmLWZiNDYtOTM2MC01YzEwNGE0YmNkMGQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozZTE3ZTQ5Yi03ZDgzLWZhNDYtYmMwNS01OTkwNGYyNjk5OTYiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjNlMTdlNDliLTdkODMtZmE0Ni1iYzA1LTU5OTA0ZjI2OTk5NiIgc3RFdnQ6d2hlbj0iMjAyMS0xMC0yOVQwOTo1Nzo0NCswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MmFjZjIzNi01ZmY3LTNhNDItOTIzNi1lOGY5OTZkYWQzODciIHN0RXZ0OndoZW49IjIwMjEtMTAtMjlUMDk6NTc6NDQrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5seU2QAAAD60lEQVRoge2ZP2gbVxzHP1c6qbFQltBuTkKHYhBNhyBvVuNkKZ5CK2M6tUYurjGt6WIHTyUKCQ4p2IQElLpjFIhpCyo0JLoMBZsEFFJsOoRK7pRaHeQ6kddfhufTne5Okt9JloXRFx6n9/993/3+ngwR4ajgrcM+QDvRI9Ot6JHpVvTIdCt6ZLoVPTLdiiNF5u1D2XVpVFjNwOmoqsenIf6lwbXzwuvS/tbY+hOOheH6/0a1TUQ6W7YKpowgUinHWl5rJizOeufF7L/NIQBCkbWW13qnv6baGplS0SS7IGw+64qkKLjOmHeEG+N2/UJCmLpr1J9QBxumkE2xb12x9MsHwcg4ifQBr4AHGQA9QhumMPsxfD4HA8OQTcHfD2E6Z4/JfAOVTRhdhtdlSI/Dbln45DvvPtpKl0uLjKDKTFgp8mLCbltMSMP56zk1TgRZTIgsT9rjK+WYjCFSzNttI4hsFcxq/cl9keTe/PloCwbg6Yr9Rt4Pw/f/DBKKrDF11+BCQrU/yCjTux+U/oJQxK6HImu8G4bKdu24Y8dn7THH4aX/cnpk0hfV00nEgpuQeac5ofg0PEopQwJqzr87cPLMYHXMh1H48atVAHa3Y2RTVPdxQ0vELFFyvnZ3uTqsxrhEwFfMRJDlSVtEky4Rs0RvJmyPmY/aPsq1RzAy9fqLeZGxJrrjJmMdeD3XWNeKee8lusgEs2abz4T+M4an7dJHyrL1AZ9debzv9UKRNQbija2gez8f6OnMe3vPjUe17aWiWUPkch5OnIxrrd0GGCIazvunr4WVm4rUbam9qQlDeIlSzma+ZsIQTg9D/1n9E1vY3YaVm/CrfQ49MqWiyfipIQCu5KgRDacjdff5rfPbwhCFP7TOX4MTH0B8onYfbac5H7UdZr2+JO2JijWLfqA59fNjAF7sQHZBPH19KKe29Olq8GsPiEC3YPmGMR+f4wx3moU2bS7BJlbKMUlSX9ycjrCDhIJPLuYbH9gZfF4d9uqQFTAmEcnMtYVwaws4RcrvQJk5u38MkSf3xTOvjW9QzzT7YWlU9nIZ+DbtTZyergg/XFQOFVSQ+mJH/XYGplY9SIJnoS3y6hSpXNp7w1sFsxqA+r0JnXzowMSsHqF6OrCeU1FvMx1zJmyHQsbvhnUdp3N+ozSjI2TcB5oJe/OTRsVpIZulBB0hI6KslZXXNBI7NxFrjp/vOjQy1uGcGWISf+PgRyRgXNe6aW6Ge5eEX1K2ae4Dzk/CwDn1caJUUJ+PXuH/bUEDB08GVMh/b3ao6k/80CIR6BQZC7vbMcz0Khu/w/OHdmY6mIAvbrVEBDpN5oBxpP5segOYibAmpWB55QAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/img/product7.png":
/*!******************************!*\
  !*** ./src/img/product7.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAuCAYAAACF6SFvAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF+mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEwLTI5VDA5OjU5OjMzKzA5OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTEwLTI5VDA5OjU5OjMzKzA5OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMC0yOVQwOTo1OTozMyswOTowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxOTk0NWI1Ni1jOTIzLTQxNDItYjc3ZC1iZjcxMjBjZjYwOTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpjYjQwNmQ2MC0xYzAyLTNiNDAtOWE0OS1iNThiZGM4ZWE0YmQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0MDAxZjExYy1jMTQwLTZmNGYtOTJiOS04Mjc1YzJkZDk5ZGMiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjQwMDFmMTFjLWMxNDAtNmY0Zi05MmI5LTgyNzVjMmRkOTlkYyIgc3RFdnQ6d2hlbj0iMjAyMS0xMC0yOVQwOTo1OTozMyswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxOTk0NWI1Ni1jOTIzLTQxNDItYjc3ZC1iZjcxMjBjZjYwOTEiIHN0RXZ0OndoZW49IjIwMjEtMTAtMjlUMDk6NTk6MzMrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5haH5KAAADM0lEQVRoge2ZTUgbQRTH/1t6SjCNB0N7ahLwJI2GYhuhB7eIl9IeItTSk1ShELz0C1qLQhW91NIe9NBTL20xRaS09SKFpFCIVWpUyEk026s9mCYk19fDqNntbrK7k0ldND8YNvNm9s38d2fffEQiIhwXTh11B0TSEONUGmKcyrESc9pyzUxCfAwPhLvg8i6LcieZzjMfnhLeTolqT09HCHj8TYio6sMsk6ivEABY3wS+PE8J8UVElVN8hOg6iO57qGo93vQmxvyPhoT4txYA3H4hD06HyyvU3QmNZmoyCULmq/373M3AtYcSV5sW4BPz5GotbVK9BPGJicaAne98LXb2JfluNIdPzMBs3YZKLTQCAHazCfxWug/zgpclvPCJuRfsRkGVP4cUXlN56ClpQjFn7md3m12LirW1n9sL+MMVhzifmLMeoJAv5y/0l3/P3CIsxe3528pbj5C9/YThOUNBfGJe/DF+OqsL9oXYZSkOXL5J6Izq+sAnphLZn+zaEQLGN8RHvLF2wvoma6czqis+QdHM3cyu25tsX6MmcBFGr/ooqS5GHurC+0cpFADDfc0nlb5SLoIfM2J7Z5Pqw8zlXcbLnSSiMfYddISAVo++XikXwej5FLby+rL/iPk34wvIGJiVML7B0p2P2nKrQnazCSH2KtQWANRCmgBc6TGup6QJQ8FujLVrv7vFaWZfnNbaH5xhdiVt6xClNjFqIZNrgP+ScT2XN4kmI/t+gPEFtXa3n/l0eZN2umN/ngmEuwCwAwiNkLCElXnjJ+kLyHhnUCQPSpAH9XbOOcr+m3F5l9G7v3xRC3EAfCuA4TkJw3OCu1I7x2oF0BBjSlGpi1szv2JXzW09AKZYlLsh2Ttob/UAE7+0O9bVBcJEX4V29Ih9M22yhGiM796tPJu3SrnIoe3zM329aIy1Y4D5vwA8/HtGYEZpD3jVBxSgfUMH+5fefkC+C7T4k/AF5Ip+6nIgzpOya0S3UT6oL+5FaDTE8vERSwfrzolm/rCEyTU2ER8MOZuBxDliAL0gm1sKZ4kBtIIOaAlWrK6mPgFABEqasDLPhMiDltZ+zhXDgfOGWQ38Bbe2H+KRXJf+AAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/img/product8.png":
/*!******************************!*\
  !*** ./src/img/product8.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAuCAYAAACF6SFvAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF+mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEwLTI5VDEwOjAwOjQxKzA5OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTEwLTI5VDEwOjAwOjQxKzA5OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMC0yOVQxMDowMDo0MSswOTowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowNGEyNmQ5MC03NjFkLTA1NGMtOGVkMS1iNDZmMzkwYjI3MmQiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDozYmE1OTNiMS1hNWI1LTM1NDMtOTk2NC1lMGY1YzEyZWZlMjYiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmOTE5ZjFjNy1iMmQ3LWJlNDUtYmI2Ny1jYzVmOWRlZWI5OTYiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmY5MTlmMWM3LWIyZDctYmU0NS1iYjY3LWNjNWY5ZGVlYjk5NiIgc3RFdnQ6d2hlbj0iMjAyMS0xMC0yOVQxMDowMDo0MSswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowNGEyNmQ5MC03NjFkLTA1NGMtOGVkMS1iNDZmMzkwYjI3MmQiIHN0RXZ0OndoZW49IjIwMjEtMTAtMjlUMTA6MDA6NDErMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5ORGXdAAAExUlEQVRoge2ZUUxbVRjHfzU+oS34AGZvjIWnaoUlSEl8aKX4otsDUyEEE6NkJGzZA2iiLL6YDMPALNlwiRHCEl+sBqIGNNGtxWRJhQl1CE8L3L4tdA+tY+3r8eG0vbftvben8zYQwj+5Oaf3fv2++7/3nO//nXNdQgiOCp456BtwEsdkDiuerZnnbNrPdiSGtq6fa2wB7+srNJ0M1iKky/EEkNSifP9pgN/C1jatHuifh45el5OhnSUTnRPMDsG+4ZwbOOWDvU14WGL/Wggu/tBFXcOfjsQXQjhzhMeFOIM8BhAiPC7E3m60yCaT8ovIrBDn0W1HPcKpe3COzGRIvzkjia2IEEtTQmxFis/Pj+iESkkfOJm93ahYmhIik/IX3tSA4Q3kjxt9us3agiTp0D04nwAAbl0QLN60vu4Gvkk5N1dyqI3O7N6VbZsPrm/Az8LFd6kuBsfl+X0gqcWcDlubN5PUojxKBPAGy1NvIi4DNrc7mpahVmQOCLUvZ25dEJx1CcbqBdm0v5ahqn8z21HB8gQ8ScrfzzdBRz8EPzQfNmddeoDhKXjzo3K7pBbll+lAYa4BdL4HwaGqkoQ6mWzaz8w7Me7eNr/e5oNP/igPPuwSBeX/IkLZPIrOCa4Nmft0A1c2lOeXOpmrPaJA5ATQnctMdyb0MqXNB5/fLw6c1KKszAbwhuyJuIGuPmg6BYk1CrHcwLVdteJUSZAis8WiV3r9Rp9+PTKrJoKZlL8gqqMeXUiNlUP++mRIyWd1pcp5rJ2OeqoKXPSArMoZY71XStbkUMtmO7lXnh9aZui8KNv7FnOqFI92ZdvqwXIIBYZWCn0tXlFk1cg8UbKS2K9sUiuokXklJNvVGWubrSXZtvnUIje2yPbBY5kkzLAdCRT6J9u7KrlUI9PRrwdeni5Pf9E5wd+bsh+8pOSSznNduHP9ybZAmaAm4nKhB/IBKeiNemoeqxc8eKw7f+kt2d9aokCk1QNf/qtecy1PC77+WPaN6T65A7GwHLJVaI06mURccOm0vc11dYErwCiqZugdgfe/UvKpNszuLQouVyACcPm0HHIqyKb9jNXbEwFYvAkz/Wo+K+rB2kLxSnF+RAhtQ9cSbUOUrSrXFuy1JpPyF3TpDEJ85iv+j9legZlYVyWaRpUeoJhE6aFtiCJbO5HLi3CliiGT8ldTXdiTMSqwHREjoUpP0mgTHlerFvJv0a4CqVgB/DQh2zf61CZ2c7uL3hHZj1lsAi5NytYNvHtFLVl88KNsHyLnrwWsySTioqDmwWGlmAB0vC3bffQlshHar7LtGVH36Q26OJH//7qlmTWZTFrvK6hvUWAzH3nktaquQdklAC/mKovEmqWJWmp2eEvofyG/wjXBkfqkcUzmsOKYzGGF2mfAqz2C5lfBG4LnGsoFNBEXZNKwfds2dRbhzgRk0wJvN9S9UL5zk0370eIxEuug/QU7mxVdWi8BklqUoZaA2p1ZwGxJYFwXPQ0Gxy0rB/v1TFKLcm8hwOq38smorO/bfHI3suOc+V5XNu1ndSHG9u/wT7j806AZWj3w8iB4u22/g1a3PZvf3QdI5nZXmnJr+cbmp/uKnB9OANmULFe8uT0HsyFtg+OvAIcVR4rMf/K0CWfu66y+AAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/img/product9.png":
/*!******************************!*\
  !*** ./src/img/product9.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAuCAYAAACF6SFvAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF+mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEwLTI5VDEwOjAxOjM2KzA5OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTEwLTI5VDEwOjAxOjM2KzA5OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMC0yOVQxMDowMTozNiswOTowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4NDQ4NjY4MC0wYzA4LWZiNDItYTBhMC00MDQ3ZjUxMjc5ZjkiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpkN2YyZDg0Ny1mY2U3LWRmNGYtOTY0OS1lOGJjNTk1MWNmYTAiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphOThlZWQ5Mi0zZDQwLTdkNDMtYjgwYi01YTBiNGUzMTkzZjEiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmE5OGVlZDkyLTNkNDAtN2Q0My1iODBiLTVhMGI0ZTMxOTNmMSIgc3RFdnQ6d2hlbj0iMjAyMS0xMC0yOVQxMDowMTozNiswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo4NDQ4NjY4MC0wYzA4LWZiNDItYTBhMC00MDQ3ZjUxMjc5ZjkiIHN0RXZ0OndoZW49IjIwMjEtMTAtMjlUMTA6MDE6MzYrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7zR72pAAACxUlEQVRoge2ZP2hTQRzHP0/cQqUdrGPTilNKbSwVhw5JiS4WkVbUwaGgIDg5aEFFwUoz+GcREygEpy4VyaDVoX9MB6GQ0tYWM0nM28Q4GMV0PYfrS9OQvr5770KbkA+Eu7yX3/vd9+5+v7t3MYQQNAqH9rsBOmmKOagcrslTMylBZl7N5vQl8AcNL25rI2b6NnzZULfzBz25rY0YgN4eGF931tMXDC0pdW8xy0nB+8fV73UPweUJT1NDJ/ZilpOCJyOyl7uHdt4z0zAVBRAHRZBhu2g+PSvIzsOkqN7YV1cFs9PVbXVMs+FbMBpz3FH2I/MvD8d6dr/fflyW1+7vvL4Qdep/m8rR3yxAMg4dpwTh644E6UkAldPs64x6QFeLv2Rc8Ou740fozWaZlBRRNMHnV7PNZ6W9r9X1eqNPjLkmuDe4/b1X0X52mlL8vXOXqfVtZ4oFWd58BieOqNufuyI/HtC/aPr75BT7uQFvHjjvYiuZeKA2O4CuAbmdmVLIar42KP725LY2YkZjBqMxdTuVkaxC8xXAFnMFwF0P57OeXOsT42uV5eRdbY9URZ8Yf9Dg5aoopWi3WJ3iAr3TzOObolcaKgE0lBj92SyfS7GYCAEQiEAgLKde+SFH+eFF+fXQjUXaO8NuXesX8/F5iGRc1ntnYHxd1j9E4fNWo800jM3J+uuL8O2vrPvaQpy/49q1fjG7rf5jcwZjVX7/4o+2pNGMGVtUY2Y5KcityOt1HzOJEfixZVv3MbPbyY8LmjFji7kmSL+V9c4+6B+u45hZTFCKmYEI9A/LejNm1GiomGmKOajoiZlHJ/X//140ZRmIODaxHxnr/Ms6Qy4nn0uxEIUWlRYq4PPL01FrO+QA+/9nNgtneNixVNqiV9ICTKzu++uyhb0YkIIyn5ZKC5vF0S4IDHpa5HSzt5g6oqGyWUOJ+Q/VNPsP/tcW1QAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/img/world_map.jpg":
/*!*******************************!*\
  !*** ./src/img/world_map.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/world_map.c65a6d16.jpg";

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "C:\\xampp1\\htdocs\\wp-content\\themes\\foxtel\\react-src\\src\\index.js";





 // import Header from "./common/Header.js";

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["BrowserRouter"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 7
  }
}))), document.getElementById("root")); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp1\htdocs\wp-content\themes\foxtel\react-src\src\index.js */"./src/index.js");


/***/ })

},[[0,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map