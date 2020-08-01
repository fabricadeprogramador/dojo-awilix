import Express from 'express'
import awilix from 'awilix'
import awilixExpress from 'awilix-express'
import UserService from './service/user-service.js'


//Awilix registrando container
const container = awilix.createContainer();

container.register({
  userService:awilix.asClass(UserService)
})
  
//Server - Express

const app =  Express()
app.use(awilixExpress.scopePerRequest(container))
app.use(awilixExpress.loadControllers('routes-controller/*.js', {cwd: "/Users/terasplay/curso-vip/dojo-awilix/"} ))
app.listen(3000)

// const controller = container.resolve("userController")
 //Request 
 //console.log(controller.getUser())

  