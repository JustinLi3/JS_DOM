function sum(a,b){
    return a + b; 
} 
let sum2 = (a,b) => a+b;  //remove function, replace it with function name as variable, everything after arrow is what is to be returned 
 

function isPositive(number){
    return number>= 0; 
} 
let isPositive2 = number=> number>=0;  //can remove parentheses around parameter if only one  


function randomNumber(){
    return Math.random;
} 
let randomNumber2 = () => Math.random;  //empty parameter  


// document.addEventListener("click", function(){
//     console.log("CLICKED");
// });  
// document.addEventListener("click", ()=>console.log("CLICKED")); //Just way more concise  

//also useful for classes 

class Person{
    constructor(name){
        this.name = name; 
    } 
    printNameArrow(){
        setTimeout(()=>{console.log(this.name)}, 2000); 
    } 
    printNameFunction(){
        setTimeout(function (){console.log(this.name)}, 2000);
    } 
}
 

let tyler = new Person('Tyler'); 
tyler.printNameArrow();  //Arrow function is useful in classes as you can use the this keyword
tyler.printNameFunction();  //this keyword would not work in a class as the scope is outside of the class and at this line (global scope)