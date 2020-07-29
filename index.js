import awilix from 'awilix'

const container = awilix.createContainer();

class UserController {
    
    constructor({userService}) { 
        console.log("Instanciando UserController")
        this.userService = userService
    }
  
    getUser() {
      return this.userService.getUser()
    }
  }

  class UserService{

        constructor(){
                console.log("Instanciando Service")
        }

        getUser(){
            //Fez busca com repository
            return {name:"Jão", email:"jao@gmail.com"}
        }

  }


  container.register({
   
    userController: awilix.asClass(UserController),
    userService:awilix.asClass(UserService)
  })
  


 const controller = container.resolve("userController")
 console.log(controller.getUser())

  