import awilixExpress from 'awilix-express'
class UserController {
    
    constructor({userService}) { 
        console.log("Instanciando UserController")
        this.userService = userService
    }
  
     getUser(req, res) {
      console.log("Buscando pelo ID:"+ req.param.id)
      res.json( this.userService.getUser()  )
    }
  }

  //Awilix Mapeando as rotas
export default awilixExpress.createController(UserController).prefix("/user").get("/:id",getUser )