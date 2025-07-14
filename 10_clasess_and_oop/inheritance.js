// creating a class User

class User{
    constructor(username){
        this.username = username ;
    }
    // suppose we want to inject a method logMe() which do the following
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email ;
        this.password = password ;
    }
    
    addCourse(){
        console.log(`A new course is added by ${this.username}`);
        
    }
}
// creating an object 

const teacher1 = new Teacher("archana" , "bro@gmail.com" , "4550") ;
teacher1.addCourse() // A new course is added by archana
teacher1.logMe() // Username is archana

const teacher2 = new User("ambuaa" )
// teacher2.addCourse() // not accessed 
teacher2.logMe() //Username is ambuaa

console.log(teacher1===teacher2); // false
console.log(teacher1 instanceof Teacher); // true (a keyword "instanceof" is given to check )
console.log(teacher1 instanceof User); // true

