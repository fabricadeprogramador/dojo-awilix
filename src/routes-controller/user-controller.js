import { createController } from "awilix-express";
class UserController {
  constructor({ userService }) {
    console.log("Instanciando UserController");
    this.userService = userService;
  }

  async getUser(req, res) {
    console.dir(req.params.id);
    res.json(await this.userService.getUser());
  }
}

//Awilix Mapeando as rotas
export default createController(UserController)
  .prefix("/user")
  .get("/:id", "getUser");
