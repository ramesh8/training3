// function greet(name)
// {
//     console.log(`Hello, ${name}`);
// }

// const greet = (name) => {console.log(`Hello, ${name}`)};

// const greet = name => console.log(`Hello, ${name}`);

// let uname = "Rakesh";
// greet(uname);


// function sum(a,b) {
//     return a+b;
// }

// const sum = (a,b) => a+b; 

// console.log(sum(1,2))

// function print(){
//     // console.log("Hello World");
//     // return "Hello World";
//     this.name = "ramesh";
//     return this.name;
// }

// let p = print;
// let q = print();
// let r = new print();
// let s = print.call(); // print();

// console.log(p);
// console.log(q);
// console.log(r);
// console.log(s);
// p();

// function hello(name){
//     console.log(name)
// }

// function greet(name){
//     return 'Hello, '+name;
// }

// let myname = "Prasad";
// hello(greet(myname));

let array = [1,2,3,4,5]; //[ ]

//destructuring
// [a, ,b, ,c] = array
//console.log(array[2]);
// console.log(a,b,c);

//spread operator ...
// [a,b,...others] = array;

// // console.log(a,b)
// console.log(others);

// function print([name, age, address = "Hyd"]){
//     console.log(`Name is ${name}. ${age} years old. From ${address}`);
// }

// let p = ["gopal", 30];
// print(p);

//arrow
//arrays
//destructering
//spreading

// function person(){
//     return ["Rajesh", 30, "AP"];
// }

// let [name, ...others] = person()
// console.log(name);
// console.log(others);


// let person = {
//     "name":"prakash",
//     "age":25,
//     "country":"India"
// };

// //destructring objects

// let {name, age, country} = person;

// // console.log(person);
// console.log(name, age, country);

// //spreading objects
// let person2 = {...person, "hobbies":"painting"};
// console.log(person2)

// let persons = [
//     {name: "Rajesh", age:30, address:"Kkd"},
//     {name: "Max", age:25, address:"Texas"},
//     {name: "Hari", age:45, address:"Hyd"},

// ]

// console.log(persons);


//array methods
let numbers = [1,2,3,4,5];
let persons = [
    {name: "Rajesh", age:30, address:"Kkd"},
    {name: "Max", age:25, address:"Texas"},
    {name: "Hari", age:45, address:"Hyd"},
];

//filter

let n = numbers.filter(x=>x>=4); //function decide elements
console.log(n)

let filteredPersons = persons.filter(person => person.age <= 30);
console.log(filteredPersons);

//map
let newnumbers = numbers.map(n=>n*2);
console.log(newnumbers);

persons.map(function({name, age, address}){
    console.log(`${name} is ${age} years old from ${address}`)
});

persons.map(function(person){
    console.log(`${person.name} is ${person.age} years old from ${person.address}`)
});

//reduce
let sum = numbers.reduce(function(total,n){
    return total+n;
},0);

console.log(numbers)
console.log(sum)

let totalAge = persons.reduce((total, person)=> total + person.age, 0);
console.log(totalAge);


//filter
//map
//reduce



