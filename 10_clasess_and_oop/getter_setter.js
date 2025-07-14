//learning getters and setters
/*
Concept	
get	- Define how a property is returned
set - Define how a property is stored or modified

Benefit	= Adds logic, validation, security, or formatting while getting/setting values
*/

 class User{
     constructor(email, password){
         this.email = email ;
        this.password = password ;
    }

    get password(){
        return `${this._password}abhi`
    }

    set password(value){
        //  this.password = value // comments
        this._password = value // used a _
    }

}

// const abhishek = new User("abhi@1234" , "2abc") // 2abcabhi
console.log(abhishek.password); 

/*

here the problem is both constructor and setter is trying to set a number 
error = RangeError: Maximum call stack size exceeded

set password(value) {
    this.password = value; // ❌ Causes infinite recursion
}

*/

//----------------Earlier it was like--------------------

function User(email,password){
    this._email = email ;
    this._password= password ;
    
    // we use .defineProperty
    Object.defineProperty(this, 'email' , {
        get: function(){
           return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value ;
        }
    })
    Object.defineProperty(this, 'password' , {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value ;
        }
    })
}

const chaiii = new User("abhi@gmail.com" , "ha123")
console.log(chaiii.email); // ABHI@GMAIL.COM

//----------NEXT METHOD(OBJECT BASED)------------------

const User = {
    _email: 'h@gmail.com' ,
    _password: 'abc' ,

    get email(){
        return this._email.toUpperCase
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);
