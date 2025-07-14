class User{
    constructor(username){
        this.username = username
    }
    //method we want to inject 

    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createId(){
        return `123` ;
    }
}

const abhishek = new User("abhishek")
// console.log(abhishek.createId()) // not work due to static keyword
// console.log(User.createId()) // 123

//➤ static means:
// The method belongs to the class itself,
// not to individual objects (instances) created from it.

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email ;
    }
}

const iphone = new Teacher("iphone" , "i@gmail.com")
iphone.logMe()
// console.log(iphone.createId()) // error
console.log(Teacher.createId()); // 123
