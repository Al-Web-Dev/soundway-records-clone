/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/update";
exports.ids = ["pages/update"];
exports.modules = {

/***/ "./components/UpdateProduct.js":
/*!*************************************!*\
  !*** ./components/UpdateProduct.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UpdateProduct; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ErrorMessage */ \"./components/ErrorMessage.js\");\n/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/Form */ \"./components/styles/Form.js\");\n/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/useForm */ \"./lib/useForm.js\");\n\nvar _jsxFileName = \"/Users/alexjefferis/Desktop/Soundway Records React/frontend/components/UpdateProduct.js\";\n\n\n\n\n\nconst SINGLE_PRODUCT_QUERY = (graphql_tag__WEBPACK_IMPORTED_MODULE_1___default())`\n  query SINGLE_PRODUCT_QUERY($id: ID!) {\n    Product(where: { id: $id }) {\n      id\n      name\n      price\n      description\n    }\n  }\n`;\nconst UPDATE_PRODUCT_MUTATION = (graphql_tag__WEBPACK_IMPORTED_MODULE_1___default())`\n  mutation ($id: ID!, $name: String, $description: String, $price: Int) {\n    updateProduct(\n      id: $id\n      data: { name: $name, description: $description, price: $price }\n    ) {\n      id\n      name\n      description\n      price\n    }\n  }\n`;\nfunction UpdateProduct({\n  id\n}) {\n  const {\n    data,\n    error,\n    loading\n  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(SINGLE_PRODUCT_QUERY, {\n    variables: {\n      id\n    }\n  });\n  const [updateProduct, {\n    data: updateData,\n    error: updateError,\n    loading: updateLoading\n  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(UPDATE_PRODUCT_MUTATION);\n  const {\n    inputs,\n    handleChange,\n    clearForm,\n    resetForm\n  } = (0,_lib_useForm__WEBPACK_IMPORTED_MODULE_5__.default)(data === null || data === void 0 ? void 0 : data.Product);\n  console.log(inputs);\n  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n    children: \"loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 23\n  }, this); // form to handle the updates\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Form__WEBPACK_IMPORTED_MODULE_4__.default, {\n    toto: true,\n    handle: true,\n    submit: true,\n    onSubmit: async e => {\n      e.preventDefault();\n      const res = updateProduct({\n        variables: {\n          id,\n          name: inputs.name,\n          description: inputs.description,\n          price: inputs.price\n        }\n      });\n      console.log(res); // sunbmit input field to the backend:\n      // const res = await createProduct();\n      // await createProduct();\n      // clearForm();\n      // // go to the product's page\n      // Router.push({\n      //   pathname: `/product/${res.data.createProduct.id}`,\n      // });\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__.default, {\n      error: error || updateError\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n      disabled: updateLoading,\n      \"aria-busy\": updateLoading,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        htmlFor: \"name\",\n        children: [\"Name\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"text\",\n          id: \"name\",\n          name: \"name\",\n          placeholder: \"Name\",\n          value: inputs.name,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        htmlFor: \"price\",\n        children: [\"Price\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"number\",\n          id: \"price\",\n          name: \"price\",\n          placeholder: \"price\",\n          value: inputs.price,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        htmlFor: \"description\",\n        children: [\"Description\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n          id: \"description\",\n          name: \"description\",\n          placeholder: \"Description\",\n          value: inputs.description,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"submit\",\n        children: \"Update Product\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL1VwZGF0ZVByb2R1Y3QuanM/OWU4ZSJdLCJuYW1lcyI6WyJTSU5HTEVfUFJPRFVDVF9RVUVSWSIsImdxbCIsIlVQREFURV9QUk9EVUNUX01VVEFUSU9OIiwiVXBkYXRlUHJvZHVjdCIsImlkIiwiZGF0YSIsImVycm9yIiwibG9hZGluZyIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwidXBkYXRlUHJvZHVjdCIsInVwZGF0ZURhdGEiLCJ1cGRhdGVFcnJvciIsInVwZGF0ZUxvYWRpbmciLCJ1c2VNdXRhdGlvbiIsImlucHV0cyIsImhhbmRsZUNoYW5nZSIsImNsZWFyRm9ybSIsInJlc2V0Rm9ybSIsInVzZUZvcm0iLCJQcm9kdWN0IiwiY29uc29sZSIsImxvZyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlcyIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInByaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsb0JBQW9CLEdBQUdDLG9EQUFJO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVRBO0FBV0EsTUFBTUMsdUJBQXVCLEdBQUdELG9EQUFJO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVpBO0FBY2UsU0FBU0UsYUFBVCxDQUF1QjtBQUFFQztBQUFGLENBQXZCLEVBQStCO0FBQzVDLFFBQU07QUFBRUMsUUFBRjtBQUFRQyxTQUFSO0FBQWVDO0FBQWYsTUFBMkJDLHdEQUFRLENBQUNSLG9CQUFELEVBQXVCO0FBQzlEUyxhQUFTLEVBQUU7QUFBRUw7QUFBRjtBQURtRCxHQUF2QixDQUF6QztBQUlBLFFBQU0sQ0FDSk0sYUFESSxFQUVKO0FBQUVMLFFBQUksRUFBRU0sVUFBUjtBQUFvQkwsU0FBSyxFQUFFTSxXQUEzQjtBQUF3Q0wsV0FBTyxFQUFFTTtBQUFqRCxHQUZJLElBR0ZDLDJEQUFXLENBQUNaLHVCQUFELENBSGY7QUFLQSxRQUFNO0FBQUVhLFVBQUY7QUFBVUMsZ0JBQVY7QUFBd0JDLGFBQXhCO0FBQW1DQztBQUFuQyxNQUFpREMscURBQU8sQ0FBQ2QsSUFBRCxhQUFDQSxJQUFELHVCQUFDQSxJQUFJLENBQUVlLE9BQVAsQ0FBOUQ7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlQLE1BQVo7QUFDQSxNQUFJUixPQUFKLEVBQWEsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUCxDQVorQixDQWM1Qzs7QUFDQSxzQkFDRSw4REFBQyxpREFBRDtBQUNFLFFBQUksTUFETjtBQUVFLFVBQU0sTUFGUjtBQUdFLFVBQU0sTUFIUjtBQUlFLFlBQVEsRUFBRSxNQUFPZ0IsQ0FBUCxJQUFhO0FBQ3JCQSxPQUFDLENBQUNDLGNBQUY7QUFDQSxZQUFNQyxHQUFHLEdBQUdmLGFBQWEsQ0FBQztBQUN4QkQsaUJBQVMsRUFBRTtBQUNUTCxZQURTO0FBR1RzQixjQUFJLEVBQUVYLE1BQU0sQ0FBQ1csSUFISjtBQUlUQyxxQkFBVyxFQUFFWixNQUFNLENBQUNZLFdBSlg7QUFLVEMsZUFBSyxFQUFFYixNQUFNLENBQUNhO0FBTEw7QUFEYSxPQUFELENBQXpCO0FBU0FQLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRyxHQUFaLEVBWHFCLENBWXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxLQXhCSDtBQUFBLDRCQTBCRSw4REFBQyxrREFBRDtBQUFjLFdBQUssRUFBRW5CLEtBQUssSUFBSU07QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTFCRixlQTJCRTtBQUFVLGNBQVEsRUFBRUMsYUFBcEI7QUFBbUMsbUJBQVdBLGFBQTlDO0FBQUEsOEJBQ0U7QUFBTyxlQUFPLEVBQUMsTUFBZjtBQUFBLHdDQUVFO0FBQ0UsY0FBSSxFQUFDLE1BRFA7QUFFRSxZQUFFLEVBQUMsTUFGTDtBQUdFLGNBQUksRUFBQyxNQUhQO0FBSUUscUJBQVcsRUFBQyxNQUpkO0FBS0UsZUFBSyxFQUFFRSxNQUFNLENBQUNXLElBTGhCO0FBTUUsa0JBQVEsRUFBRVY7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBWUU7QUFBTyxlQUFPLEVBQUMsT0FBZjtBQUFBLHlDQUVFO0FBQ0UsY0FBSSxFQUFDLFFBRFA7QUFFRSxZQUFFLEVBQUMsT0FGTDtBQUdFLGNBQUksRUFBQyxPQUhQO0FBSUUscUJBQVcsRUFBQyxPQUpkO0FBS0UsZUFBSyxFQUFFRCxNQUFNLENBQUNhLEtBTGhCO0FBTUUsa0JBQVEsRUFBRVo7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpGLGVBdUJFO0FBQU8sZUFBTyxFQUFDLGFBQWY7QUFBQSwrQ0FFRTtBQUNFLFlBQUUsRUFBQyxhQURMO0FBRUUsY0FBSSxFQUFDLGFBRlA7QUFHRSxxQkFBVyxFQUFDLGFBSGQ7QUFJRSxlQUFLLEVBQUVELE1BQU0sQ0FBQ1ksV0FKaEI7QUFLRSxrQkFBUSxFQUFFWDtBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdkJGLGVBaUNFO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FqQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBM0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUVEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9VcGRhdGVQcm9kdWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgRGlzcGxheUVycm9yIGZyb20gJy4vRXJyb3JNZXNzYWdlJztcbmltcG9ydCBGb3JtIGZyb20gJy4vc3R5bGVzL0Zvcm0nO1xuaW1wb3J0IHVzZUZvcm0gZnJvbSAnLi4vbGliL3VzZUZvcm0nO1xuXG5jb25zdCBTSU5HTEVfUFJPRFVDVF9RVUVSWSA9IGdxbGBcbiAgcXVlcnkgU0lOR0xFX1BST0RVQ1RfUVVFUlkoJGlkOiBJRCEpIHtcbiAgICBQcm9kdWN0KHdoZXJlOiB7IGlkOiAkaWQgfSkge1xuICAgICAgaWRcbiAgICAgIG5hbWVcbiAgICAgIHByaWNlXG4gICAgICBkZXNjcmlwdGlvblxuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgVVBEQVRFX1BST0RVQ1RfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uICgkaWQ6IElEISwgJG5hbWU6IFN0cmluZywgJGRlc2NyaXB0aW9uOiBTdHJpbmcsICRwcmljZTogSW50KSB7XG4gICAgdXBkYXRlUHJvZHVjdChcbiAgICAgIGlkOiAkaWRcbiAgICAgIGRhdGE6IHsgbmFtZTogJG5hbWUsIGRlc2NyaXB0aW9uOiAkZGVzY3JpcHRpb24sIHByaWNlOiAkcHJpY2UgfVxuICAgICkge1xuICAgICAgaWRcbiAgICAgIG5hbWVcbiAgICAgIGRlc2NyaXB0aW9uXG4gICAgICBwcmljZVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXBkYXRlUHJvZHVjdCh7IGlkIH0pIHtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9ID0gdXNlUXVlcnkoU0lOR0xFX1BST0RVQ1RfUVVFUlksIHtcbiAgICB2YXJpYWJsZXM6IHsgaWQgfSxcbiAgfSk7XG5cbiAgY29uc3QgW1xuICAgIHVwZGF0ZVByb2R1Y3QsXG4gICAgeyBkYXRhOiB1cGRhdGVEYXRhLCBlcnJvcjogdXBkYXRlRXJyb3IsIGxvYWRpbmc6IHVwZGF0ZUxvYWRpbmcgfSxcbiAgXSA9IHVzZU11dGF0aW9uKFVQREFURV9QUk9EVUNUX01VVEFUSU9OKTtcblxuICBjb25zdCB7IGlucHV0cywgaGFuZGxlQ2hhbmdlLCBjbGVhckZvcm0sIHJlc2V0Rm9ybSB9ID0gdXNlRm9ybShkYXRhPy5Qcm9kdWN0KTtcbiAgY29uc29sZS5sb2coaW5wdXRzKTtcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5sb2FkaW5nLi4uPC9wPjtcblxuICAvLyBmb3JtIHRvIGhhbmRsZSB0aGUgdXBkYXRlc1xuICByZXR1cm4gKFxuICAgIDxGb3JtXG4gICAgICB0b3RvXG4gICAgICBoYW5kbGVcbiAgICAgIHN1Ym1pdFxuICAgICAgb25TdWJtaXQ9e2FzeW5jIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgcmVzID0gdXBkYXRlUHJvZHVjdCh7XG4gICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICBpZCxcblxuICAgICAgICAgICAgbmFtZTogaW5wdXRzLm5hbWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogaW5wdXRzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgcHJpY2U6IGlucHV0cy5wcmljZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgLy8gc3VuYm1pdCBpbnB1dCBmaWVsZCB0byB0aGUgYmFja2VuZDpcbiAgICAgICAgLy8gY29uc3QgcmVzID0gYXdhaXQgY3JlYXRlUHJvZHVjdCgpO1xuICAgICAgICAvLyBhd2FpdCBjcmVhdGVQcm9kdWN0KCk7XG4gICAgICAgIC8vIGNsZWFyRm9ybSgpO1xuICAgICAgICAvLyAvLyBnbyB0byB0aGUgcHJvZHVjdCdzIHBhZ2VcbiAgICAgICAgLy8gUm91dGVyLnB1c2goe1xuICAgICAgICAvLyAgIHBhdGhuYW1lOiBgL3Byb2R1Y3QvJHtyZXMuZGF0YS5jcmVhdGVQcm9kdWN0LmlkfWAsXG4gICAgICAgIC8vIH0pO1xuICAgICAgfX1cbiAgICA+XG4gICAgICA8RGlzcGxheUVycm9yIGVycm9yPXtlcnJvciB8fCB1cGRhdGVFcnJvcn0gLz5cbiAgICAgIDxmaWVsZHNldCBkaXNhYmxlZD17dXBkYXRlTG9hZGluZ30gYXJpYS1idXN5PXt1cGRhdGVMb2FkaW5nfT5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+XG4gICAgICAgICAgTmFtZVxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXRzLm5hbWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwicHJpY2VcIj5cbiAgICAgICAgICBQcmljZVxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBpZD1cInByaWNlXCJcbiAgICAgICAgICAgIG5hbWU9XCJwcmljZVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cInByaWNlXCJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMucHJpY2V9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICBEZXNjcmlwdGlvblxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgaWQ9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXRzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5VcGRhdGUgUHJvZHVjdDwvYnV0dG9uPlxuICAgICAgPC9maWVsZHNldD5cbiAgICA8L0Zvcm0+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/UpdateProduct.js\n");

/***/ }),

/***/ "./pages/update.js":
/*!*************************!*\
  !*** ./pages/update.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ updatePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_CreateProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/CreateProduct */ \"./components/CreateProduct.js\");\n/* harmony import */ var _components_UpdateProduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/UpdateProduct */ \"./components/UpdateProduct.js\");\n\nvar _jsxFileName = \"/Users/alexjefferis/Desktop/Soundway Records React/frontend/pages/update.js\";\n\n\nfunction updatePage({\n  query\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UpdateProduct__WEBPACK_IMPORTED_MODULE_2__.default, {\n      id: query.id\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9wYWdlcy91cGRhdGUuanM/YTEwNCJdLCJuYW1lcyI6WyJ1cGRhdGVQYWdlIiwicXVlcnkiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxVQUFULENBQW9CO0FBQUVDO0FBQUYsQ0FBcEIsRUFBK0I7QUFDNUMsc0JBQ0U7QUFBQSwyQkFDRSw4REFBQyw4REFBRDtBQUFlLFFBQUUsRUFBRUEsS0FBSyxDQUFDQztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0QiLCJmaWxlIjoiLi9wYWdlcy91cGRhdGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ3JlYXRlUHJvZHVjdCBmcm9tICcuLi9jb21wb25lbnRzL0NyZWF0ZVByb2R1Y3QnO1xuaW1wb3J0IFVwZGF0ZVByb2R1Y3QgZnJvbSAnLi4vY29tcG9uZW50cy9VcGRhdGVQcm9kdWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlUGFnZSh7IHF1ZXJ5IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFVwZGF0ZVByb2R1Y3QgaWQ9e3F1ZXJ5LmlkfSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/update.js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tag");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_Products_js","components_CreateProduct_js"], function() { return __webpack_exec__("./pages/update.js"); });
module.exports = __webpack_exports__;

})();