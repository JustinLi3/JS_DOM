//Rest parameters bundles seperate elements into an array (opposite of spread) 

let food1 = "pear"; 
let food2 = "orange"; 
let food3 = "apple"; 
let food4 = "banana";  

function openFridge(...foods){ //rest parameter allows you to put in multiple elements to set as a singular array, however, if you want to have more parameters, make sure to set it as the last parameter
    console.log(foods); 
    console.log(...foods);
} 
function sum(...items){ 
    let sum = 0;
    for(let x = 0 ; x < items.length ; x++){
        sum+=items[x];
    }  
    items = items.join(" + "); //must reassign as it creates a new array
    console.log(items + " = " + sum);
} 

function avg(...items){ 
    let avg = 0;
    for(let item of items){
        avg+=item;
    } 
    avg/=(items.length); 
    console.log(avg);
} 

function combineNames(...names){
    console.log(names.join("")); //.join returns and creates a new string
} 


openFridge(food1,food2,food3,food4); 
sum(1,2,3,4,5); 
avg(2,3); 
combineNames("Justin","Dylan","Dana","Megan");
