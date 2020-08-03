"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _awilixExpress = require("awilix-express");

var UserController = /*#__PURE__*/function () {
  function UserController(_ref) {
    var userService = _ref.userService;
    (0, _classCallCheck2["default"])(this, UserController);
    console.log("Instanciando UserController");
    this.userService = userService;
  }

  (0, _createClass2["default"])(UserController, [{
    key: "getUser",
    value: function () {
      var _getUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.dir(req.params.id);
                _context.t0 = res;
                _context.next = 4;
                return this.userService.getUser();

              case 4:
                _context.t1 = _context.sent;

                _context.t0.json.call(_context.t0, _context.t1);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getUser(_x, _x2) {
        return _getUser.apply(this, arguments);
      }

      return getUser;
    }()
  }]);
  return UserController;
}(); //Awilix Mapeando as rotas


var _default = (0, _awilixExpress.createController)(UserController).prefix("/user").get("/:id", "getUser");

exports["default"] = _default;
//# sourceMappingURL=user-controller.js.map