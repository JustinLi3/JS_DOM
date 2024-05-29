//allows iterable to be expanded into seperate elements 
let numbers = [2,3,52,5]; 
let maximum = Math.max(...numbers); //spread allows you to unpack iterables in order to be run as value1, value2, value3, etc 
let minimum = Math.min(...numbers); 
console.log(numbers); 
console.log(maximum);
console.log(minimum); 

let username = "JustinLi" 
let letters = [...username].join("*");  //turned into a arraylist in which each element is a letter and every element in between is a *
console.log(letters); 

let fruits = ["apple", "banana", "pear"];  //can also use spread in order to copy content into different structures  
let veggies = ["carrots", "spinach", "celery"];
let food = [...fruits, ...veggies]; //Identical copies   
console.log(food);   

