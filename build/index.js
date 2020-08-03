"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _awilix = require("awilix");

var _awilixExpress = require("awilix-express");

var _userService = _interopRequireDefault(require("./service/user-service.js"));

//Awilix registrando container
var container = (0, _awilix.createContainer)();
container.register({
  userService: (0, _awilix.asClass)(_userService["default"])
}); //Server - Express

var app = (0, _express["default"])();
app.use((0, _awilixExpress.scopePerRequest)(container));
app.use((0, _awilixExpress.loadControllers)("routes-controller/*.js", {
  cwd: __dirname
}));
app.listen(3000); // const controller = container.resolve("userController")
//Request
//console.log(controller.getUser())
//# sourceMappingURL=index.js.map