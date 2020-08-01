export default class UserService{

    constructor(){
            console.log("Instanciando Service")
    }

    getUser(){
        //Fez busca com repository
        return {name:"Jão", email:"jao@gmail.com"}
    }

   
}