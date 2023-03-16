 function user(studentCode,password, firstName,lastName,age,faculty,role){
    this.studentCode=studentCode;
    this.password =password;
    this.firstName=firstName;
    this.lastName=lastName;
    this.age = age;
    this.faculty=faculty;
    this.role=role;
 }
 const User = new user('2020605518', '123', 'Hung', 'Truong', 17, 'information technology', ['admin', 'user']);
 console.log(User);
 //Class

class User_Class {
    constructor(studentCode,password, firstName,lastName,age,faculty,role){
        this.studentCode=studentCode;
        this.password =password;
        this.firstName=firstName;
        this.lastName=lastName;
        this.age = age;
        this.faculty=faculty;
        this.role=role;
     }
}

const user_class = new User_Class('2020605518', '123', 'Hung', 'Truong', 17, 'information technology', ['admin', 'user']);
console.log(user_class);