// alert('hello World');
// console.log('Hello World');

// variables we use var, let, const
// var is globally scoped so dont use it
//let and const are blocked scoped


let age = 30;
console.log(age);


//Data Types
// String, Number, Boolean, null, undefined, Symbol
const name = 'Juan';
const isCool = true;
const rating = 4.5;
const x = null;
const y = undefined;
let z;
console.log(typeof name);
console.log(typeof isCool);
console.log(typeof rating);
console.log(typeof x);
console.log(typeof y);
console.log(typeof y);
console.log(typeof z);

//Strings
//Concatenation

console.log('My name is '+name+' and my age is '+age);

//Template String
console.log(`My name is ${name} and I am ${age} years old`);
//you can assigned it to a variable
const hello = `My name is ${name} and I am ${age} years old`;
console.log(hello);

// String properties and methods
const s ='hello world';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0,5));
console.log(s.split(''));   


//Arrays
const numbers = new Array(1,2,3,4,5);
console.log(numbers); 

const fruits = ['apples', 'oranges',' pears'];
fruits[3] ='grapes';
fruits.push('mangos');
fruits.unshift('strawberries');
fruits.pop('mangoes');
console.log(Array.isArray('hello'));
console.log(fruits.indexOf('oranges'));

console.log(fruits);

//object literals

const person = {
    firstName: 'Juan',
    lastName: 'Trujillo',
    age:31,
    hobbies:['Music', 'Movies', 'Sports'],
    address: {
        street:'2825 n yarbrough dr',
        city: 'El Paso',
        state: 'TX'
    }
}
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.state);


person.email = 'juan@gmail.com';


const todos =[
    {
        id:1,
        text:'take out trash',
        isCompleted: true

    },
    {
        id:2,
        text:'meeting with boss',
        isCompleted: true

    },
    {
        id:3,
        text:'Dentist Appointment',
        isCompleted: false

    }
];

//for printing meeting with boss

console.log(todos[1].text);


//for converting to a JSON
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);


//Forloops

for(let i=0; i<10; i++){
    console.log(i);

}

//While Loops
let i =0;
while(i<10){
    console.log(i);
    i++;

}

//Iterate array
for(let i=0; i<todos.length; i++){
    console.log(todos[i].text);
}

//another way to iterate
for(let todo of todos){
    console.log(todo.text);

}

//Foreach, map, filter
//foreach you can use it to iterate and do something
todos.forEach(function(todo){
    console.log(todo.text);
});



//map you can use it to create a  subarray
const todoText = todos.map(function(todo){
    return todo.text;
});
console.log(todoText);


//filter is used to filter information and return only the arrays that has that information
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
});
console.log(todoCompleted);

//you can use filter and map to filter and create an array that contains whatever you want
// for example an array that conains only the text if is not completed
const todonot = todos.filter(function(todo){
    return todo.isCompleted === false;
}).map(function(todo){
    return todo.text;
});
console.log(todonot);


//conditionals if, if else,  if else if, 
// x ==10 is going to check for the value not the type, x ===10 checks for the value and the type

const xx='0xa'; // checks even for hexadecimal

if(xx == 10){
    console.log('xx is 10');

} else if(xx>10){
    console.log('xx is greater thatn 10');

} else{
    console.log('xx is less than 10');

}

//ternary operator is used to assign variables based on a conditional

const zz = 10;

const color = zz >10 ?'red': 'blue'
console.log(color);
//switch
switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
        break;
}

// functions

function addNums(num1=1,num2=2){
    return num1+num2
}

console.log( addNums(5,5));


//classes

class Person{
    constructor(firstName, lastName, dob){
        this.firstName =firstName;
        this.lastName = lastName;
        this.dob= new Date(dob);
    }
    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

//instantiate object
const person1 = new Person('Juan', 'Trujillo', '5-21-1989');
const person2 = new Person('Celeste', 'Monroy', '3-12-1992');

console.log(person2.getFullName());
console.log(person1);

//DOM
//Document Object Model

//single element selectors
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));


//Multiple element selectors
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('item'));

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));



// MANIPULATING THE DOM
const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
// btn.style.background = 'red';


// EVENTS

// Mouse Event
btn.addEventListener('click', e => {
  e.preventDefault();
  console.log(e.target.className);
  document.getElementById('my-form').style.background = '#ccc';
  document.querySelector('body').classList.add('bg-dark');
  ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
});

// Keyboard Event
const nameInput = document.querySelector('#name');
nameInput.addEventListener('input', e => {
  document.querySelector('.container').append(nameInput.value);
});

// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput2 = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}