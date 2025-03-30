class User {
    properties = {
        username: null,
        password: null
    }

    get username(){
        return this.properties.username
    }
    
    get password(){
        return this.properties.password
    }

    set username(username){
        this.username = username
    }
    
    set password(password){
        this.password = password
    }
}