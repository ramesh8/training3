class Person {
    constructor(name, age, email){
        this.name = name;
        this.age = age;
        this.email = email;
    }
    
    showInfo(){
        return `Name is ${this.name} of ${this.age} years old. Email id is ${this.email}`;
    }

    //getters
    getName(){
        return this.name;
    }

    getAge(){
        return this.age;
    }

    getEmail(){
        return this.email;
    }

    //setters
    setName(name){
        if(name != "")
        this.name = name;
    }

    setAge(age){
        if(!isNan(age))
        this.age = age;
    }

    setEmail(email){
        //validation
        this.email = email;
    }
   


}



class Programmer extends Person {
    constructor(name, age, email, language, platform){
        super(name, age, email);
        this.language = language;
        this.platform = platform;
    }

    showInfo(){
        return `Name is ${this.name} of ${this.age} years old. Email id is ${this.email}. I work on ${this.platform} and my favorite langauge is ${this.language}`;
    }
}


let p1 = new Person("Prasad", 40, "prasad@gmail.com");

let pro1 = new Programmer("Ramesh", 30, "ramesh@demo.com", "Javascript", "Windows")

// p1.name = "Ramesh";
// console.log(p1.name);
// console.log(p1.showInfo());

console.log(p1.getName());

p1.setName("");
// p1.name = "";

console.log(p1.showInfo());


//encapsulation
//inheritance
//polymorphism

console.log(pro1.showInfo())

