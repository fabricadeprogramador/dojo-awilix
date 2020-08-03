"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var UserService = /*#__PURE__*/function () {
  function UserService() {
    (0, _classCallCheck2["default"])(this, UserService);
    console.log("Instanciando Service");
  }

  (0, _createClass2["default"])(UserService, [{
    key: "getUser",
    value: function getUser() {
      //Fez busca com repository
      return {
        name: "Jão",
        email: "jao@gmail.com"
      };
    }
  }]);
  return UserService;
}();

exports["default"] = UserService;
//# sourceMappingURL=user-service.js.map