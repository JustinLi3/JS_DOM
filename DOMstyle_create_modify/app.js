// STYLING ELEMENTS 

// const title = document.getElementById("main-heading");   

// title.style.color = 'red';  //.style allows you to directly access css properties of a SINGLE element 

// //we would have to iterate through multiple elements in order to apply all the properties 
// const listItems = document.getElementsByClassName("list-items"); 
// for( x = 0 ; x < listItems.length ; x++){ 
//     listItems[x].style.color = 'blue'; //iterating favorite colors list and turning them blue
// }



//CREATING ELEMENTS

const ul = document.querySelector('ul'); //Select the list
const li = document.createElement('li'); //Create a new list element

//Adding Elements
ul.append(li); //Append onto the selected list

//Modifying text (THREE DIFFERENT WAYS)

const firstListItem = document.querySelector(".list-items"); //Note that you should put a . in front of classes and # in front of ids
console.log(firstListItem.innerText); //retrieving visible text (on website) MAINLY USE THIS IN CASE OF SECURITY ISSUES 
console.log(firstListItem.textContent); //retrieving visible text (on HTML)
console.log(firstListItem.innerHTML); //retrieving HTML  

li.innerText = 'Purple'; 


//MODIFYING ATTRIBUTES  

    //.setAttribute(tag, value)
li.setAttribute('id','main-heading'); 

    //.removeAttribute(tag)
li.removeAttribute('id'); 

const title = document.querySelector('#main-heading'); 
console.log(title.innerText); 

//MODIFYING CLASSES  

li.classList.add('list-items'); //this is how you can add a class   
if(li.classList.contains('list-items')){
    li.classList.remove('list-items'); //remove class
} 

//REMOVE ELEMENTS  

li.remove(); //how to remove an element