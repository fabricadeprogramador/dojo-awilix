import Express from "express";
import { createContainer, asClass } from "awilix";
import { scopePerRequest, loadControllers } from "awilix-express";
import UserService from "./service/user-service.js";

//Awilix registrando container
const container = createContainer();

container.register({
  userService: asClass(UserService),
});

//Server - Express

const app = Express();
app.use(scopePerRequest(container));
app.use(loadControllers("routes-controller/*.js", { cwd: __dirname }));
app.listen(3000);

// const controller = container.resolve("userController")
//Request
//console.log(controller.getUser())
