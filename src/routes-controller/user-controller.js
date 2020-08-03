import { createController } from "awilix-express";
import { route, GET, POST, before } from "awilix-express"; // or `awilix-router-core`

@route("/user")
export default class UserController {
  constructor({ userService }) {
    console.log("Instanciando UserController");
    this.userService = userService;
  }

  @route("/:id")
  @GET()
  async getUser(req, res) {
    console.dir(req.params.id);
    res.json(await this.userService.getUser());
  }
}
